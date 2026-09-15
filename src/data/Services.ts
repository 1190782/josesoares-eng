/**
 * Content for the services page: the offer, the full range of what can be
 * built, worked examples, and how a project runs.
 */

import type { LocalisedText } from "./Cv";

export interface IService {
  title: LocalisedText;
  description: LocalisedText;
  /** Concrete deliverables, so the buyer knows what arrives. */
  includes: LocalisedText[];
}

export interface ICapabilityGroup {
  label: LocalisedText;
  items: string[];
}

export interface IExample {
  title: LocalisedText;
  sector: LocalisedText;
  description: LocalisedText;
  stack: string[];
}

export interface IProcessStep {
  title: LocalisedText;
  description: LocalisedText;
}

export const intro: LocalisedText = {
  pt:
    "Construo sites e aplicações para pequenos e médios negócios. Trabalho como engenheiro " +
    "de software há mais de três anos, em .NET, C#, React e Angular, e faço estes projetos " +
    "de ponta a ponta: desenho, construo, publico e mantenho.",
  en:
    "I build websites and applications for small and medium businesses. I have worked as a " +
    "software engineer for over three years, in .NET, C#, React and Angular, and I take " +
    "these projects end to end: design, build, deploy and maintain.",
};

export const services: IService[] = [
  {
    title: { pt: "Websites profissionais", en: "Professional websites" },
    description: {
      pt:
        "Sites institucionais rápidos, que funcionam bem no telemóvel e que aparecem no " +
        "Google quando alguém procura o que vendes.",
      en:
        "Fast company websites that work properly on a phone and show up on Google when " +
        "someone searches for what you sell.",
    },
    includes: [
      { pt: "Design próprio, não um template comprado", en: "Custom design, not a bought template" },
      { pt: "SEO técnico completo desde o primeiro dia", en: "Full technical SEO from day one" },
      { pt: "Versões em várias línguas", en: "Multiple language versions" },
      { pt: "Formulário de contacto e integração com WhatsApp", en: "Contact form and WhatsApp integration" },
    ],
  },
  {
    title: { pt: "Lojas online", en: "Online stores" },
    description: {
      pt:
        "Catálogo de produtos, carrinho e pagamentos a funcionar. Com um painel onde " +
        "acrescentas produtos e vês as encomendas sem depender de ninguém.",
      en:
        "Product catalogue, cart and working payments. With a panel where you add products " +
        "and see orders without depending on anyone.",
    },
    includes: [
      { pt: "Pagamentos com cartão e MB Way", en: "Card and MB Way payments" },
      { pt: "Gestão de stock e encomendas", en: "Stock and order management" },
      { pt: "Emails automáticos de confirmação", en: "Automatic confirmation emails" },
      { pt: "Páginas de produto otimizadas para busca", en: "Product pages optimised for search" },
    ],
  },
  {
    title: { pt: "Sistemas de reservas", en: "Booking systems" },
    description: {
      pt:
        "Marcações online para clínicas, cabeleireiros, restaurantes ou aluguer de espaços. " +
        "O cliente escolhe a hora, tu recebes a confirmação.",
      en:
        "Online booking for clinics, salons, restaurants or venue hire. The customer picks a " +
        "time, you get the confirmation.",
    },
    includes: [
      { pt: "Calendário com disponibilidade real", en: "Calendar with real availability" },
      { pt: "Confirmações e lembretes por email", en: "Email confirmations and reminders" },
      { pt: "Painel de gestão das marcações", en: "Booking management panel" },
      { pt: "Bloqueio de horários e feriados", en: "Blocking of slots and holidays" },
    ],
  },
  {
    title: { pt: "QR codes e menus digitais", en: "QR codes and digital menus" },
    description: {
      pt:
        "Ementas que atualizas num painel e que mudam no instante seguinte, sem reimprimir " +
        "nada. Já construí exactamente isto para restauração.",
      en:
        "Menus you update in a panel that change the moment after, with nothing to reprint. " +
        "I have built exactly this for hospitality.",
    },
    includes: [
      { pt: "Ementa editável por ti, sem programador", en: "Menu you edit yourself, no developer needed" },
      { pt: "QR codes prontos a imprimir", en: "Print-ready QR codes" },
      { pt: "Preços e disponibilidade atualizados na hora", en: "Prices and availability updated instantly" },
      { pt: "Funciona em qualquer telemóvel, sem instalar app", en: "Works on any phone, no app to install" },
    ],
  },
  {
    title: { pt: "Aplicações de gestão", en: "Business applications" },
    description: {
      pt:
        "Backoffices, painéis e relatórios feitos à medida do processo que já tens, em vez " +
        "de te obrigarem a mudar de processo.",
      en:
        "Back offices, dashboards and reports built around the process you already have, " +
        "instead of forcing you to change it.",
    },
    includes: [
      { pt: "Painel de administração com utilizadores e permissões", en: "Admin panel with users and permissions" },
      { pt: "Gráficos e relatórios sobre os teus dados", en: "Charts and reports on your own data" },
      { pt: "Integração com sistemas e APIs que já usas", en: "Integration with systems and APIs you already use" },
      { pt: "Importação e exportação de dados", en: "Data import and export" },
    ],
  },
  {
    title: { pt: "Manutenção e alojamento", en: "Hosting and maintenance" },
    description: {
      pt:
        "Depois do lançamento o site continua a precisar de alguém. Backups, atualizações " +
        "de segurança, monitorização e as alterações que forem aparecendo.",
      en:
        "After launch a site still needs someone. Backups, security updates, monitoring and " +
        "whatever changes come up.",
    },
    includes: [
      { pt: "Alojamento rápido, com certificado incluído", en: "Fast hosting, certificate included" },
      { pt: "Backups verificados e atualizações de segurança", en: "Verified backups and security updates" },
      { pt: "Monitorização de disponibilidade", en: "Uptime monitoring" },
      { pt: "Horas mensais para alterações de conteúdo", en: "Monthly hours for content changes" },
    ],
  },
];

export const capabilityGroups: ICapabilityGroup[] = [
  {
    label: { pt: "Interfaces", en: "Interfaces" },
    items: ["React", "Angular", "Astro", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    label: { pt: "Servidor e APIs", en: "Server and APIs" },
    items: ["C#", ".NET Framework", "ASP.NET MVC", "Node.js", "Python", "Flask", "APIs REST"],
  },
  {
    label: { pt: "Bases de dados", en: "Databases" },
    items: ["SQL Server", "PostgreSQL", "MongoDB", "ElasticSearch", "Kafka"],
  },
  {
    label: { pt: "Integrações", en: "Integrations" },
    items: [
      "Pagamentos",
      "Envio de emails",
      "QR codes",
      "Gráficos e relatórios",
      "Autenticação",
      "APIs externas",
    ],
  },
  {
    label: { pt: "Plataformas", en: "Platforms" },
    items: ["Cloudflare", "Azure", "OutSystems", "Git", "GitHub", "CI/CD"],
  },
  {
    label: { pt: "SEO e desempenho", en: "SEO and performance" },
    items: [
      "Dados estruturados",
      "Sitemaps",
      "Core Web Vitals",
      "Multilingue",
      "Acessibilidade",
      "Redirecionamentos",
    ],
  },
];

export const examples: IExample[] = [
  {
    title: { pt: "Loja online com pagamentos", en: "Online store with payments" },
    sector: { pt: "Retalho", en: "Retail" },
    description: {
      pt:
        "Loja completa para um cliente de retalho, com catálogo, carrinho e método de " +
        "pagamento a funcionar em produção.",
      en:
        "A complete store for a retail client, with catalogue, cart and a working payment " +
        "method in production.",
    },
    stack: ["JavaScript", "HTML", "CSS", "Pagamentos"],
  },
  {
    title: { pt: "Ementas digitais com QR codes", en: "Digital menus with QR codes" },
    sector: { pt: "Restauração", en: "Hospitality" },
    description: {
      pt:
        "Aplicação onde cada restaurante cria a sua ementa e gera QR codes para imprimir e " +
        "colocar nas mesas. O menu passa a mudar sem reimpressões.",
      en:
        "An application where each restaurant builds its menu and generates QR codes to " +
        "print and place on tables. The menu changes without reprinting.",
    },
    stack: ["OutSystems", "JavaScript", "SQL"],
  },
  {
    title: { pt: "Painel de estações meteorológicas", en: "Weather station dashboard" },
    sector: { pt: "Agricultura", en: "Agriculture" },
    description: {
      pt:
        "Ferramenta interna para agricultores e gestores acompanharem as condições por " +
        "estação e por quinta. O responsável pediu depois uma segunda versão com previsões, " +
        "construída com APIs e gráficos.",
      en:
        "An internal tool for farmers and managers to follow conditions per station and per " +
        "estate. The manager then asked for a second version with forecasts, built with APIs " +
        "and charts.",
    },
    stack: ["OutSystems", "SQL", "APIs REST", "Gráficos"],
  },
  {
    title: { pt: "Monitorização de atividades financeiras", en: "Financial activity monitoring" },
    sector: { pt: "Banca", en: "Banking" },
    description: {
      pt:
        "Sistema de monitorização cross-channel integrado no Global Oversight System de um " +
        "banco. Acompanha a cadeia em produção, dispara alertas para as equipas de suporte e " +
        "detalha os erros técnicos e funcionais de cada atividade.",
      en:
        "A cross-channel monitoring system inside a bank's Global Oversight System. It " +
        "follows the chain in production, triggers alerts to support teams and details the " +
        "technical and functional errors of each activity.",
    },
    stack: ["Python", "Flask", "Angular", "Kafka", "ElasticSearch", "SQL"],
  },
  {
    title: { pt: "Software industrial de produção", en: "Industrial manufacturing software" },
    sector: { pt: "Indústria", en: "Manufacturing" },
    description: {
      pt:
        "Dois anos em desenvolvimento full-stack de um sistema MES usado em fábricas, com " +
        "funcionalidades de backend em C# e de interface em Angular.",
      en:
        "Two years of full-stack development on an MES system used in factories, with " +
        "backend features in C# and interface work in Angular.",
    },
    stack: ["C#", ".NET Framework", "Angular", "SQL"],
  },
  {
    title: { pt: "Auditoria técnica e de SEO", en: "Technical and SEO audit" },
    sector: { pt: "Construção", en: "Construction" },
    description: {
      pt:
        "Levantamento completo do site de um fabricante de janelas e portas: inventário de " +
        "páginas, ligações partidas, conteúdo por corrigir, desempenho, e uma proposta de " +
        "navegação nova organizada por tipo de produto.",
      en:
        "A full review of a window and door manufacturer's site: page inventory, broken " +
        "links, content to fix, performance, and a proposed new navigation organised by " +
        "product type.",
    },
    stack: ["SEO", "Arquitetura de informação", "Análise de desempenho"],
  },
];

export const processSteps: IProcessStep[] = [
  {
    title: { pt: "Conversamos", en: "We talk" },
    description: {
      pt:
        "Percebo o negócio, quem são os teus clientes e o que precisas que o site faça. " +
        "Sem custo e sem compromisso.",
      en:
        "I learn the business, who your customers are and what you need the site to do. " +
        "No cost, no commitment.",
    },
  },
  {
    title: { pt: "Recebes uma proposta", en: "You get a proposal" },
    description: {
      pt:
        "Âmbito e preço fixos, por escrito, com prazos e o que está e não está incluído. " +
        "Sem surpresas a meio.",
      en:
        "Fixed scope and price, in writing, with deadlines and what is and is not included. " +
        "No surprises halfway.",
    },
  },
  {
    title: { pt: "Construo e mostro", en: "I build and show" },
    description: {
      pt:
        "Acompanhas o progresso num endereço de pré-visualização, desde o início. Corrigimos " +
        "à medida, em vez de só no fim.",
      en:
        "You follow progress on a preview address from the start. We adjust as we go, rather " +
        "than only at the end.",
    },
  },
  {
    title: { pt: "Lanço e fico por perto", en: "I launch and stay around" },
    description: {
      pt:
        "Publico, explico-te como mexer no que é teu, e continuo disponível para manutenção " +
        "ou alterações.",
      en:
        "I publish, show you how to handle what is yours, and stay available for maintenance " +
        "or changes.",
    },
  },
];
