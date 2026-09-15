import type { Locale } from "../data/Cv";

export interface IUiStrings {
  siteName: string;
  navServices: string;
  navWork: string;
  navCv: string;
  navContact: string;
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
    navServices: "Serviços",
    navWork: "Trabalhos",
    navCv: "Currículo",
    navContact: "Contacto",
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
    navServices: "Services",
    navWork: "Work",
    navCv: "CV",
    navContact: "Contact",
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
