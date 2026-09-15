import { useState, type FormEvent } from "react";

import type { IUiStrings } from "../i18n/Ui";

interface IContactFormProps {
  strings: IUiStrings;
  email: string;
  subjectOptions: string[];
}

type SubmitState = "idle" | "sending" | "sent" | "invalid" | "failed";

const FIELD_CLASS =
  "w-full border border-paper-200 bg-white px-4 py-3 text-navy-900 transition " +
  "placeholder:text-navy-500/70 focus:border-brass-400 focus:outline-none";

const LABEL_CLASS = "eyebrow block text-brass-600";

export default function ContactForm({
  strings,
  email,
  subjectOptions,
}: IContactFormProps): React.ReactElement {
  const [state, setState] = useState<SubmitState>("idle");
  const [invalidField, setInvalidField] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    const form = event.currentTarget;

    setState("sending");
    setInvalidField(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });
      const result = (await response.json()) as { ok: boolean; field?: string };

      if (result.ok) {
        setState("sent");
        form.reset();
        return;
      }

      if (response.status === 422) {
        setInvalidField(result.field ?? null);
        setState("invalid");
        return;
      }

      setState("failed");
    } catch {
      setState("failed");
    }
  }

  if (state === "sent") {
    return (
      <div className="border border-brass-400 bg-white p-8" role="status">
        <p className="font-display text-lg text-navy-900">{strings.formSuccess}</p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="eyebrow mt-5 text-brass-600 underline underline-offset-4"
        >
          {strings.formSubmit}
        </button>
      </div>
    );
  }

  const isSending = state === "sending";

  return (
    <form onSubmit={handleSubmit} noValidate className="border border-paper-200 bg-white p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={LABEL_CLASS} htmlFor="contact-name">
            {strings.formName} *
          </label>
          <input
            className={FIELD_CLASS}
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-invalid={invalidField === "name"}
          />
        </div>

        <div>
          <label className={LABEL_CLASS} htmlFor="contact-email">
            {strings.formEmail} *
          </label>
          <input
            className={FIELD_CLASS}
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={invalidField === "email"}
          />
        </div>

        <div>
          <label className={LABEL_CLASS} htmlFor="contact-phone">
            {strings.formPhone}{" "}
            <span className="text-navy-500">({strings.formPhoneOptional})</span>
          </label>
          <input
            className={FIELD_CLASS}
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
          />
        </div>

        <div>
          <label className={LABEL_CLASS} htmlFor="contact-subject">
            {strings.formSubject}
          </label>
          <select className={FIELD_CLASS} id="contact-subject" name="subject" defaultValue="">
            <option value="" disabled>
              {strings.formSubjectPlaceholder}
            </option>
            {subjectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className={LABEL_CLASS} htmlFor="contact-message">
          {strings.formMessage} *
        </label>
        <textarea
          className={`${FIELD_CLASS} min-h-40 resize-y`}
          id="contact-message"
          name="message"
          required
          rows={6}
          aria-invalid={invalidField === "message"}
        />
      </div>

      {/* Honeypot: hidden from people, filled in by most bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="contact-company">Company</label>
        <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="submit"
          disabled={isSending}
          className="border border-brass-400 bg-brass-400 px-6 py-3 text-sm font-medium text-navy-900 transition hover:bg-brass-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSending ? strings.formSending : strings.formSubmit}
        </button>
        <p className="font-mono text-xs text-navy-500">{strings.formRequiredNote}</p>
      </div>

      {state === "invalid" && (
        <p className="mt-4 text-sm text-red-700" role="alert">
          {strings.formErrorValidation}
        </p>
      )}

      {state === "failed" && (
        <p className="mt-4 text-sm text-red-700" role="alert">
          {strings.formErrorNetwork}{" "}
          <a className="underline underline-offset-4" href={`mailto:${email}`}>
            {email}
          </a>
        </p>
      )}
    </form>
  );
}
