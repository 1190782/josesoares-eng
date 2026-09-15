import type { Locale } from "../data/Cv";

export interface IUiStrings {
  siteName: string;
  siteTagline: string;
  navServices: string;
  navCapabilities: string;
  navExamples: string;
  navCv: string;
  navContact: string;
  skipToContent: string;
  mainNavLabel: string;

  homeTitle: string;
  homeMetaDescription: string;
  homeHeroKicker: string;
  homeHeroHeading: string;
  homeHeroCta: string;
  homeHeroSecondaryCta: string;
  homeServices: string;
  homeServicesLead: string;
  homeCapabilities: string;
  homeCapabilitiesLead: string;
  homeExamples: string;
  homeExamplesLead: string;
  homeProcess: string;
  homeProcessLead: string;
  homeIncludes: string;

  contactHeading: string;
  contactLead: string;
  formName: string;
  formEmail: string;
  formPhone: string;
  formPhoneOptional: string;
  formSubject: string;
  formSubjectPlaceholder: string;
  formMessage: string;
  formSubmit: string;
  formSending: string;
  formSuccess: string;
  formErrorValidation: string;
  formErrorNetwork: string;
  formRequiredNote: string;
  formDirectEmail: string;

  cvTitle: string;
  cvMetaDescription: string;
  cvDownload: string;
  cvDownloadHint: string;
  cvSummary: string;
  cvExperience: string;
  cvEducation: string;
  cvCertifications: string;
  cvSkills: string;
  cvLanguages: string;
  cvPresent: string;
  cvStack: string;
  cvOtherLanguage: string;
  cvYearsLabel: string;
  cvRolesLabel: string;
  cvStackLabel: string;

  filterTitle: string;
  filterHint: string;
  filterAll: string;
  filterEmpty: string;

  rangeJoin: string;
  months: string[];
}

const ui: Record<Locale, IUiStrings> = {
  pt: {
    siteName: "José Soares",
    siteTagline: "Engenheiro de Software",
    navServices: "Serviços",
    navCapabilities: "Competências",
    navExamples: "Exemplos",
    navCv: "Currículo",
    navContact: "Contacto",
    skipToContent: "Saltar para o conteúdo",
    mainNavLabel: "Navegação principal",

    homeTitle: "Sites e aplicações para pequenos negócios",
    homeMetaDescription:
      "Engenheiro de software no Porto. Construo websites, lojas online, sistemas de " +
      "reservas, menus digitais com QR code e aplicações de gestão, de ponta a ponta.",
    homeHeroKicker: "Engenheiro de software, Porto",
    homeHeroHeading: "Sites e aplicações para pequenos negócios",
    homeHeroCta: "Falar sobre o teu projeto",
    homeHeroSecondaryCta: "Ver exemplos",
    homeServices: "O que faço",
    homeServicesLead: "Seis áreas, cada uma com entregas concretas.",
    homeCapabilities: "Tudo o que posso construir",
    homeCapabilitiesLead:
      "As tecnologias com que trabalho todos os dias, em projetos profissionais e próprios.",
    homeExamples: "Exemplos de trabalho",
    homeExamplesLead:
      "Projetos que construí, em contexto profissional e para clientes diretos.",
    homeProcess: "Como trabalho",
    homeProcessLead: "Quatro passos, sem surpresas pelo meio.",
    homeIncludes: "Inclui",

    contactHeading: "Falamos?",
    contactLead:
      "Escreve-me o que precisas, mesmo que ainda seja uma ideia vaga. Respondo em 24 horas.",
    formName: "Nome",
    formEmail: "Email",
    formPhone: "Telefone",
    formPhoneOptional: "opcional",
    formSubject: "Tipo de projeto",
    formSubjectPlaceholder: "Escolhe uma opção",
    formMessage: "Mensagem",
    formSubmit: "Enviar mensagem",
    formSending: "A enviar...",
    formSuccess: "Mensagem enviada. Respondo em breve, obrigado!",
    formErrorValidation: "Confirma os campos assinalados.",
    formErrorNetwork: "Não foi possível enviar. Tenta outra vez ou escreve-me por email.",
    formRequiredNote: "Os campos com asterisco são obrigatórios.",
    formDirectEmail: "Ou escreve diretamente para",

    cvTitle: "Currículo",
    cvMetaDescription:
      "Currículo de José Soares, engenheiro de software no Porto: .NET, C#, React e Angular, " +
      "com experiência na OutSystems, Critical Manufacturing e Natixis.",
    cvDownload: "Descarregar em PDF",
    cvDownloadHint: "Abre a janela de impressão. Escolhe «Guardar como PDF».",
    cvSummary: "Resumo",
    cvExperience: "Experiência",
    cvEducation: "Formação",
    cvCertifications: "Certificações",
    cvSkills: "Competências",
    cvLanguages: "Idiomas",
    cvPresent: "presente",
    cvStack: "Tecnologias",
    cvOtherLanguage: "Read in English",
    cvYearsLabel: "anos de experiência",
    cvRolesLabel: "empresas",
    cvStackLabel: "tecnologias em produção",

    filterTitle: "Filtrar por tecnologia",
    filterHint: "Escolhe uma tecnologia para ver onde a usei.",
    filterAll: "Tudo",
    filterEmpty: "Não usei esta tecnologia profissionalmente.",

    rangeJoin: "a",
    months: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
  },

  en: {
    siteName: "José Soares",
    siteTagline: "Software Engineer",
    navServices: "Services",
    navCapabilities: "Skills",
    navExamples: "Examples",
    navCv: "CV",
    navContact: "Contact",
    skipToContent: "Skip to content",
    mainNavLabel: "Main navigation",

    homeTitle: "Websites and applications for small businesses",
    homeMetaDescription:
      "Software engineer based in Porto. I build websites, online stores, booking systems, " +
      "QR code digital menus and business applications, end to end.",
    homeHeroKicker: "Software engineer, Porto",
    homeHeroHeading: "Websites and applications for small businesses",
    homeHeroCta: "Tell me about your project",
    homeHeroSecondaryCta: "See examples",
    homeServices: "What I do",
    homeServicesLead: "Six areas, each with concrete deliverables.",
    homeCapabilities: "Everything I can build",
    homeCapabilitiesLead:
      "The technologies I work with daily, on professional and personal projects.",
    homeExamples: "Example work",
    homeExamplesLead: "Projects I have built, professionally and for direct clients.",
    homeProcess: "How I work",
    homeProcessLead: "Four steps, no surprises along the way.",
    homeIncludes: "Includes",

    contactHeading: "Shall we talk?",
    contactLead:
      "Tell me what you need, even if it is still a vague idea. I reply within 24 hours.",
    formName: "Name",
    formEmail: "Email",
    formPhone: "Phone",
    formPhoneOptional: "optional",
    formSubject: "Project type",
    formSubjectPlaceholder: "Pick an option",
    formMessage: "Message",
    formSubmit: "Send message",
    formSending: "Sending...",
    formSuccess: "Message sent. I will reply shortly, thank you!",
    formErrorValidation: "Please check the highlighted fields.",
    formErrorNetwork: "Could not send. Try again or email me directly.",
    formRequiredNote: "Fields marked with an asterisk are required.",
    formDirectEmail: "Or write directly to",

    cvTitle: "Curriculum Vitae",
    cvMetaDescription:
      "CV of José Soares, software engineer based in Porto: .NET, C#, React and Angular, " +
      "with experience at OutSystems, Critical Manufacturing and Natixis.",
    cvDownload: "Download as PDF",
    cvDownloadHint: "Opens the print dialog. Choose “Save as PDF”.",
    cvSummary: "Summary",
    cvExperience: "Experience",
    cvEducation: "Education",
    cvCertifications: "Certifications",
    cvSkills: "Skills",
    cvLanguages: "Languages",
    cvPresent: "present",
    cvStack: "Stack",
    cvOtherLanguage: "Ler em português",
    cvYearsLabel: "years of experience",
    cvRolesLabel: "companies",
    cvStackLabel: "technologies in production",

    filterTitle: "Filter by technology",
    filterHint: "Pick a technology to see where I used it.",
    filterAll: "All",
    filterEmpty: "I have not used this technology professionally.",

    rangeJoin: "to",
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  },
};

/**
 * Formats an ISO year-month ("2025-07") as a short, localised label ("jul 2025").
 */
export function formatMonth(isoMonth: string, locale: Locale): string {
  const [year, month] = isoMonth.split("-");
  const monthIndex = Number(month) - 1;
  return `${ui[locale].months[monthIndex]} ${year}`;
}

/**
 * Formats a date range, using the localised word for "present" when open-ended.
 */
export function formatRange(start: string, end: string | null, locale: Locale): string {
  const strings = ui[locale];
  const from = formatMonth(start, locale);
  const to = end === null ? strings.cvPresent : formatMonth(end, locale);
  return `${from} ${strings.rangeJoin} ${to}`;
}

export default ui;
