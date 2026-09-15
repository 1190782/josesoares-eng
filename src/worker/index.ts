/**
 * Worker in front of the static site.
 *
 * Everything except POST /api/contact falls straight through to the built
 * Astro output. The contact endpoint validates the submission and hands it to
 * Resend, so form messages arrive as email without the site needing a server.
 */

interface IAssetFetcher {
  fetch(request: Request): Promise<Response>;
}

interface IEnv {
  ASSETS: IAssetFetcher;
  RESEND_API_KEY: string;
  /** Where form submissions are delivered. */
  CONTACT_TO: string;
}

interface IContactSubmission {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  /** Hidden field: real people leave it empty, most bots fill it in. */
  company: string;
  /** Privacy policy acceptance, required before the message is sent on. */
  consent: string;
}

const MAX_FIELD_LENGTH = 4000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function jsonResponse(body: Record<string, unknown>, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

function readField(form: FormData, key: string): string {
  const value = form.get(key);
  return typeof value === "string" ? value.trim().slice(0, MAX_FIELD_LENGTH) : "";
}

function validate(submission: IContactSubmission): string | null {
  if (submission.name.length < 2) return "name";
  if (!EMAIL_PATTERN.test(submission.email)) return "email";
  if (submission.message.length < 10) return "message";
  // No consent, no processing: the GDPR basis for handling the message is the
  // sender ticking this box.
  if (submission.consent === "") return "consent";
  return null;
}

function buildEmailBody(submission: IContactSubmission): string {
  const lines = [
    `Nome: ${submission.name}`,
    `Email: ${submission.email}`,
    `Telefone: ${submission.phone || "(não indicado)"}`,
    `Assunto: ${submission.subject || "(não indicado)"}`,
    `Consentimento RGPD: aceite`,
    "",
    submission.message,
  ];
  return lines.join("\n");
}

async function handleContact(request: Request, env: IEnv): Promise<Response> {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return jsonResponse({ ok: false, error: "payload" }, 400);
  }

  const submission: IContactSubmission = {
    name: readField(form, "name"),
    email: readField(form, "email"),
    phone: readField(form, "phone"),
    subject: readField(form, "subject"),
    message: readField(form, "message"),
    company: readField(form, "company"),
    consent: readField(form, "consent"),
  };

  // Silently accept anything that tripped the honeypot, so bots get no signal.
  if (submission.company !== "") {
    return jsonResponse({ ok: true }, 200);
  }

  const invalidField = validate(submission);
  if (invalidField !== null) {
    return jsonResponse({ ok: false, error: "validation", field: invalidField }, 422);
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      // Until josesoares-eng.com is verified in Resend, this test sender is the
      // only allowed one, and it may only deliver to the account's own address.
      from: "Contacto do site <onboarding@resend.dev>",
      to: [env.CONTACT_TO],
      reply_to: submission.email,
      subject: `Novo contacto do site: ${submission.name}`,
      text: buildEmailBody(submission),
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Resend rejected the message", response.status, detail);
    return jsonResponse({ ok: false, error: "delivery" }, 502);
  }

  return jsonResponse({ ok: true }, 200);
}

export default {
  async fetch(request: Request, env: IEnv): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") {
      if (request.method !== "POST") {
        return jsonResponse({ ok: false, error: "method" }, 405);
      }
      return handleContact(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};
