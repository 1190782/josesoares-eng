/**
 * Single source of truth for the CV.
 *
 * Both the /cv page and the print stylesheet that produces the downloadable
 * file read from here, so the web version and the PDF can never drift apart.
 */

export type Locale = "pt" | "en";

export type LocalisedText = Record<Locale, string>;

export interface IPosition {
  company: string;
  role: LocalisedText;
  /** ISO year-month, e.g. "2025-07". */
  start: string;
  /** ISO year-month, or null while still in the role. */
  end: string | null;
  location: string;
  arrangement: LocalisedText;
  summary: LocalisedText;
  highlights: LocalisedText[];
  stack: string[];
}

export interface IDegree {
  institution: string;
  degree: LocalisedText;
  start: string;
  end: string | null;
}

export interface ICertification {
  name: string;
  issuer: string;
  /** ISO year-month. */
  issued: string;
}

export interface ISkillGroup {
  label: LocalisedText;
  items: string[];
}

export interface ILanguage {
  name: LocalisedText;
  level: LocalisedText;
}

export interface ICv {
  name: string;
  headline: LocalisedText;
  location: LocalisedText;
  email: string;
  phone: string;
  website: string;
  linkedin: string;
  summary: LocalisedText;
  positions: IPosition[];
  education: IDegree[];
  certifications: ICertification[];
  skillGroups: ISkillGroup[];
  languages: ILanguage[];
}

const cv: ICv = {
  name: "José Soares",
  headline: {
    pt: "Engenheiro de Software",
    en: "Software Engineer",
  },
  location: {
    pt: "Porto, Portugal. Disponível para remoto.",
    en: "Porto, Portugal. Open to remote.",
  },
  email: "soareze1414@gmail.com",
  phone: "+351 911 108 710",
  website: "https://josesoares-eng.com",
  linkedin: "https://www.linkedin.com/in/jose-soares-it/",

  summary: {
    pt:
      "Engenheiro de software com mais de três anos de experiência em .NET e C#. " +
      "Trabalho atualmente na OutSystems, com .NET Framework e React. " +
      "Antes disso passei por produto industrial na Critical Manufacturing e por " +
      "sistemas financeiros na Natixis, e comecei em low-code na Sogrape, na mesma " +
      "plataforma da empresa onde hoje trabalho. A concluir o mestrado em Engenharia " +
      "de Software no ISEP.",
    en:
      "Software engineer with over three years of experience in .NET and C#. " +
      "Currently at OutSystems, working with .NET Framework and React. " +
      "Before that I worked on industrial product at Critical Manufacturing and on " +
      "financial systems at Natixis, and started out in low-code at Sogrape, on the " +
      "same platform I now help build. Completing an MSc in Software Engineering at ISEP.",
  },

  positions: [
    {
      company: "OutSystems",
      role: { pt: "Engenheiro de Software", en: "Software Engineer" },
      start: "2025-07",
      end: null,
      location: "Porto, Portugal",
      arrangement: { pt: "Remoto", en: "Remote" },
      summary: {
        pt: "Desenvolvimento de produto na plataforma OutSystems, em .NET Framework e React.",
        en: "Product development on the OutSystems platform, in .NET Framework and React.",
      },
      highlights: [
        {
          pt: "Desenvolvo funcionalidades de produto em C# e .NET Framework, com interfaces em React.",
          en: "Build product features in C# and .NET Framework, with React front ends.",
        },
        {
          pt: "Trabalho em equipa com metodologias ágeis, em ciclos de entrega contínua.",
          en: "Work in an agile team on a continuous delivery cycle.",
        },
      ],
      stack: ["C#", ".NET Framework", "React", "TypeScript", "SQL", "Git"],
    },
    {
      company: "Critical Manufacturing",
      role: { pt: "Engenheiro de Software", en: "Software Engineer" },
      start: "2023-07",
      end: "2025-07",
      location: "Maia, Portugal",
      arrangement: { pt: "Remoto", en: "Remote" },
      summary: {
        pt:
          "Dois anos em desenvolvimento full-stack de software MES para a indústria, " +
          "em C# e Angular, com Kanban.",
        en:
          "Two years of full-stack development on MES software for manufacturing, " +
          "in C# and Angular, running Kanban.",
      },
      highlights: [
        {
          pt: "Desenvolvi funcionalidades de backend em C# e .NET, e de frontend em Angular.",
          en: "Delivered backend features in C# and .NET, and front-end features in Angular.",
        },
        {
          pt: "Reforcei a compreensão de negócio ao trabalhar sobre processos reais de produção industrial.",
          en: "Built strong domain understanding working on real manufacturing processes.",
        },
      ],
      stack: ["C#", ".NET Framework", "Angular", "TypeScript", "SQL", "Kanban", "Git"],
    },
    {
      company: "Natixis in Portugal",
      role: { pt: "Engenheiro de Software (estágio)", en: "Software Engineer (internship)" },
      start: "2023-02",
      end: "2023-06",
      location: "Porto, Portugal",
      arrangement: { pt: "Híbrido", en: "Hybrid" },
      summary: {
        pt:
          "Construí um sistema de monitorização cross-channel de atividades financeiras, " +
          "integrado no Global Oversight System do banco.",
        en:
          "Built a cross-channel monitoring system for financial activities, part of the " +
          "bank's Global Oversight System.",
      },
      highlights: [
        {
          pt: "Permite acompanhar a cadeia de atividades em produção, em tempo real.",
          en: "Lets teams monitor the activity chain in production, in real time.",
        },
        {
          pt: "Dispara alertas para as equipas de suporte com o estado de cada atividade.",
          en: "Triggers alerts to support teams with the status of each activity.",
        },
        {
          pt: "Detalha os erros técnicos e funcionais de cada atividade, para diagnóstico.",
          en: "Details the technical and functional errors of each activity, for diagnosis.",
        },
      ],
      stack: ["Python", "Flask", "Angular", "SQL", "Kafka", "ElasticSearch", "REST"],
    },
    {
      company: "Sogrape",
      role: { pt: "Engenheiro de Software Júnior", en: "Junior Software Engineer" },
      start: "2022-09",
      end: "2023-02",
      location: "Avintes, Portugal",
      arrangement: { pt: "Meio período", en: "Part-time" },
      summary: {
        pt:
          "Primeira experiência profissional, em desenvolvimento low-code na plataforma " +
          "OutSystems. Entreguei duas aplicações em produção.",
        en:
          "First professional role, in low-code development on the OutSystems platform. " +
          "Shipped two applications to production.",
      },
      highlights: [
        {
          pt:
            "aCarta, uma aplicação onde restaurantes criam a sua ementa e geram QR codes " +
            "para a usar como menu digital.",
          en:
            "aCarta, an application where restaurants build their menu and generate QR " +
            "codes to use it as a digital menu.",
        },
        {
          pt:
            "Weather Stations, uma aplicação interna para agricultores e gestores estudarem " +
            "as condições meteorológicas por estação e por quinta. O gestor pediu depois " +
            "uma segunda versão com previsões, feita com APIs e gráficos.",
          en:
            "Weather Stations, an internal tool for farmers and managers to study weather " +
            "conditions per station and per estate. My manager then asked for a second " +
            "version with forecasts, built with APIs and charts.",
        },
      ],
      stack: ["OutSystems", "JavaScript", "SQL", "Visual Basic", "REST"],
    },
  ],

  education: [
    {
      institution: "ISEP, Instituto Superior de Engenharia do Porto",
      degree: {
        pt: "Mestrado em Engenharia de Software",
        en: "MSc in Software Engineering",
      },
      start: "2023-09",
      end: null,
    },
    {
      institution: "ISEP, Instituto Superior de Engenharia do Porto",
      degree: {
        pt: "Licenciatura em Engenharia Informática",
        en: "BSc in Informatics Engineering",
      },
      start: "2019-09",
      end: "2023-07",
    },
  ],

  certifications: [
    {
      name: "Project Management Professional",
      issuer: "APGEI, Associação Portuguesa de Gestão e Engenharia Industrial",
      issued: "2022-09",
    },
    {
      name: "Dependency Injection in ASP.NET",
      issuer: "Udemy",
      issued: "2023-08",
    },
    {
      name: "Git Complete: The definitive, step-by-step guide to Git",
      issuer: "Udemy",
      issued: "2023-08",
    },
    {
      name: "Agile Fundamentals: Including Scrum & Kanban",
      issuer: "Udemy",
      issued: "2023-07",
    },
  ],

  skillGroups: [
    {
      label: { pt: "Linguagens", en: "Languages" },
      items: ["C#", "Java", "Python", "JavaScript", "TypeScript", "SQL", "C", "Visual Basic"],
    },
    {
      label: { pt: "Frontend", en: "Front end" },
      items: ["React", "Angular", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      label: { pt: "Backend", en: "Back end" },
      items: [".NET Framework", "ASP.NET MVC", "Node.js", "Flask", "APIs REST"],
    },
    {
      label: { pt: "Dados e infraestrutura", en: "Data and infrastructure" },
      items: ["SQL Server", "MongoDB", "ElasticSearch", "Kafka", "Azure"],
    },
    {
      label: { pt: "Plataformas e métodos", en: "Platforms and practices" },
      items: ["OutSystems", "Git", "GitHub", "Scrum", "Kanban", "Agile"],
    },
  ],

  languages: [
    {
      name: { pt: "Português", en: "Portuguese" },
      level: { pt: "Nativo", en: "Native" },
    },
    {
      name: { pt: "Inglês", en: "English" },
      level: { pt: "Fluente, nível profissional", en: "Fluent, professional level" },
    },
    {
      name: { pt: "Espanhol", en: "Spanish" },
      level: { pt: "Intermédio", en: "Intermediate" },
    },
    {
      name: { pt: "Francês", en: "French" },
      level: { pt: "Básico", en: "Basic" },
    },
  ],
};

export default cv;
