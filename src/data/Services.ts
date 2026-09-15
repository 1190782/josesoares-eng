/**
 * Content for the services pages: the offer, the full range of what can be
 * built, worked examples, and how a project runs.
 *
 * Each service also carries its own page content. The slugs are localised
 * because they are the search terms people actually type in each language.
 */

import type { Locale, LocalisedText } from "./Cv";

export interface IFaq {
  question: LocalisedText;
  answer: LocalisedText;
}

export interface IService {
  /** URL segment per locale, e.g. { pt: "sistemas-de-reservas", en: "booking-systems" }. */
  slug: LocalisedText;
  title: LocalisedText;
  /** Search-facing page heading, longer and more specific than the card title. */
  heading: LocalisedText;
  description: LocalisedText;
  /** Two or three paragraphs for the service's own page. */
  body: LocalisedText[];
  audience: LocalisedText;
  includes: LocalisedText[];
  faqs: IFaq[];
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
    slug: { pt: "websites-profissionais", en: "professional-websites" },
    title: { pt: "Websites profissionais", en: "Professional websites" },
    heading: {
      pt: "Criação de websites profissionais",
      en: "Professional website development",
    },
    description: {
      pt:
        "Sites institucionais rápidos, que funcionam bem no telemóvel e que aparecem no " +
        "Google quando alguém procura o que vendes.",
      en:
        "Fast company websites that work properly on a phone and show up on Google when " +
        "someone searches for what you sell.",
    },
    body: [
      {
        pt:
          "A maioria dos sites de pequenos negócios falha por duas razões: demoram a " +
          "carregar e não foram construídos para serem encontrados. Eu resolvo as duas " +
          "ao mesmo tempo, porque são o mesmo problema visto de ângulos diferentes.",
        en:
          "Most small business websites fail for two reasons: they are slow to load and " +
          "they were not built to be found. I solve both at once, because they are the " +
          "same problem seen from different angles.",
      },
      {
        pt:
          "Construo os sites como páginas estáticas servidas por uma rede global. O " +
          "visitante recebe a página completa quase instantaneamente, e o Google também, " +
          "sem esperar por código a executar. Não há base de dados exposta nem plugins " +
          "desatualizados, o que elimina a maior parte dos problemas de segurança que " +
          "afetam sites feitos em plataformas genéricas.",
        en:
          "I build sites as static pages served from a global network. Visitors get the " +
          "full page almost instantly, and so does Google, without waiting for code to " +
          "run. There is no exposed database and no outdated plugins, which removes most " +
          "of the security problems that affect sites built on generic platforms.",
      },
    ],
    audience: {
      pt:
        "Para negócios que vivem de serem encontrados localmente: oficinas, clínicas, " +
        "escritórios, empresas de construção e instalação.",
      en:
        "For businesses that depend on being found locally: workshops, clinics, offices, " +
        "construction and installation companies.",
    },
    includes: [
      { pt: "Design próprio, não um template comprado", en: "Custom design, not a bought template" },
      { pt: "SEO técnico completo desde o primeiro dia", en: "Full technical SEO from day one" },
      { pt: "Versões em várias línguas", en: "Multiple language versions" },
      {
        pt: "Formulário de contacto e integração com WhatsApp",
        en: "Contact form and WhatsApp integration",
      },
    ],
    faqs: [
      {
        question: { pt: "Quanto tempo leva a fazer um site?", en: "How long does a website take?" },
        answer: {
          pt:
            "Um site institucional com cerca de dez páginas leva tipicamente quatro a seis " +
            "semanas, contando com o tempo para reveres os textos e aprovares o design. " +
            "O que costuma atrasar não é o desenvolvimento, é o conteúdo.",
          en:
            "A company website of around ten pages typically takes four to six weeks, " +
            "including time for you to review copy and approve the design. What usually " +
            "causes delay is not the development, it is the content.",
        },
      },
      {
        question: {
          pt: "O site vai aparecer no Google?",
          en: "Will the site show up on Google?",
        },
        answer: {
          pt:
            "Vai ser indexado corretamente, com títulos, descrições, dados estruturados e " +
            "sitemap. Quanto ao lugar em que aparece, depende da concorrência dos termos. " +
            "Para o nome da tua empresa e para procuras locais específicas, os resultados " +
            "chegam em semanas. Para termos muito disputados é um trabalho de meses e " +
            "envolve conteúdo regular, não só a construção.",
          en:
            "It will be indexed properly, with titles, descriptions, structured data and a " +
            "sitemap. Where it ranks depends on how competitive the terms are. For your " +
            "company name and specific local searches, results come within weeks. For " +
            "highly contested terms it is a matter of months and needs regular content, " +
            "not just the build.",
        },
      },
      {
        question: {
          pt: "Posso alterar os textos sozinho depois?",
          en: "Can I change the text myself afterwards?",
        },
        answer: {
          pt:
            "Sim, se o projeto incluir um painel de edição. Se preferires um site mais " +
            "simples e barato sem painel, as alterações passam por mim e cobro por hora. " +
            "Digo-te o custo das duas opções na proposta para escolheres com números à frente.",
          en:
            "Yes, if the project includes an editing panel. If you prefer a simpler, " +
            "cheaper site without one, changes come through me and I charge by the hour. " +
            "I quote both options so you can choose with the numbers in front of you.",
        },
      },
    ],
  },
  {
    slug: { pt: "lojas-online", en: "online-stores" },
    title: { pt: "Lojas online", en: "Online stores" },
    heading: { pt: "Criação de lojas online", en: "Online store development" },
    description: {
      pt:
        "Catálogo de produtos, carrinho e pagamentos a funcionar. Com um painel onde " +
        "acrescentas produtos e vês as encomendas sem depender de ninguém.",
      en:
        "Product catalogue, cart and working payments. With a panel where you add products " +
        "and see orders without depending on anyone.",
    },
    body: [
      {
        pt:
          "Já construí e coloquei em produção uma loja online com pagamentos a funcionar " +
          "para um cliente de retalho. Sei onde estão as partes que dão trabalho: o " +
          "checkout, a gestão de stock quando o mesmo produto tem variantes, e os emails " +
          "automáticos que o cliente espera receber e que ninguém se lembra de pedir.",
        en:
          "I have built and shipped an online store with working payments for a retail " +
          "client. I know where the hard parts are: checkout, stock management when the " +
          "same product has variants, and the automatic emails customers expect but nobody " +
          "remembers to ask for.",
      },
      {
        pt:
          "A loja fica tua, com o painel de administração incluído. Não pagas mensalidade " +
          "por percentagem de vendas a uma plataforma, só o alojamento e as taxas do " +
          "processador de pagamentos, que são inevitáveis em qualquer solução.",
        en:
          "The store is yours, with the admin panel included. You do not pay a platform a " +
          "monthly fee or a percentage of sales, only hosting and the payment processor " +
          "fees, which are unavoidable in any solution.",
      },
    ],
    audience: {
      pt:
        "Para lojas físicas que querem vender também online, e para quem vende por " +
        "redes sociais e já não consegue gerir encomendas por mensagens.",
      en:
        "For physical shops that also want to sell online, and for anyone selling through " +
        "social media who can no longer manage orders through messages.",
    },
    includes: [
      { pt: "Pagamentos com cartão e MB Way", en: "Card and MB Way payments" },
      { pt: "Gestão de stock e encomendas", en: "Stock and order management" },
      { pt: "Emails automáticos de confirmação", en: "Automatic confirmation emails" },
      {
        pt: "Páginas de produto otimizadas para busca",
        en: "Product pages optimised for search",
      },
    ],
    faqs: [
      {
        question: {
          pt: "Que métodos de pagamento posso aceitar?",
          en: "Which payment methods can I accept?",
        },
        answer: {
          pt:
            "Cartão de crédito e débito, MB Way, referência multibanco e transferência, " +
            "conforme o processador que escolhermos. As taxas são do processador e não " +
            "passam por mim, portanto pagas o mesmo que pagarias em qualquer outra solução.",
          en:
            "Credit and debit card, MB Way, Multibanco reference and bank transfer, " +
            "depending on the processor we choose. The fees belong to the processor and do " +
            "not pass through me, so you pay the same as with any other solution.",
        },
      },
      {
        question: {
          pt: "Quem gere o stock e as encomendas?",
          en: "Who manages stock and orders?",
        },
        answer: {
          pt:
            "Tu, num painel feito para isso. Acrescentas produtos, mudas preços, marcas " +
            "encomendas como enviadas, e vês o histórico. Ensino-te a usar na entrega e " +
            "deixo-te um manual curto.",
          en:
            "You do, in a panel built for it. You add products, change prices, mark orders " +
            "as shipped and see the history. I train you on handover and leave you a short " +
            "manual.",
        },
      },
      {
        question: {
          pt: "Quanto tempo leva uma loja online?",
          en: "How long does an online store take?",
        },
        answer: {
          pt:
            "Seis a dez semanas, dependendo do número de produtos e de quantas variantes " +
            "cada um tem. A parte que costuma demorar mais é reunir as fotografias e as " +
            "descrições dos produtos.",
          en:
            "Six to ten weeks, depending on the number of products and how many variants " +
            "each one has. The part that usually takes longest is gathering product photos " +
            "and descriptions.",
        },
      },
    ],
  },
  {
    slug: { pt: "sistemas-de-reservas", en: "booking-systems" },
    title: { pt: "Sistemas de reservas", en: "Booking systems" },
    heading: { pt: "Sistemas de reservas e marcações online", en: "Online booking systems" },
    description: {
      pt:
        "Marcações online para clínicas, cabeleireiros, restaurantes ou aluguer de espaços. " +
        "O cliente escolhe a hora, tu recebes a confirmação.",
      en:
        "Online booking for clinics, salons, restaurants or venue hire. The customer picks a " +
        "time, you get the confirmation.",
    },
    body: [
      {
        pt:
          "Um sistema de reservas resolve um problema que custa dinheiro todos os dias: " +
          "chamadas perdidas fora de horas. Quem quer marcar às onze da noite não volta a " +
          "ligar de manhã, marca noutro sítio.",
        en:
          "A booking system solves a problem that costs money every day: calls missed " +
          "outside opening hours. Someone who wants to book at eleven at night does not " +
          "call back in the morning, they book somewhere else.",
      },
      {
        pt:
          "A parte difícil não é o calendário, é a disponibilidade real: durações " +
          "diferentes por serviço, intervalos entre marcações, vários profissionais ou " +
          "salas em paralelo, e feriados. É aí que ponho o cuidado, porque é o que faz a " +
          "diferença entre um sistema que usas e um que abandonas ao segundo conflito de " +
          "horários.",
        en:
          "The hard part is not the calendar, it is real availability: different durations " +
          "per service, gaps between appointments, several staff or rooms in parallel, and " +
          "holidays. That is where the care goes, because it is the difference between a " +
          "system you use and one you abandon at the second scheduling clash.",
      },
    ],
    audience: {
      pt:
        "Para clínicas, cabeleireiros e barbeiros, ginásios, restaurantes, campos de " +
        "padel e aluguer de espaços.",
      en:
        "For clinics, salons and barbers, gyms, restaurants, padel courts and venue hire.",
    },
    includes: [
      { pt: "Calendário com disponibilidade real", en: "Calendar with real availability" },
      { pt: "Confirmações e lembretes por email", en: "Email confirmations and reminders" },
      { pt: "Painel de gestão das marcações", en: "Booking management panel" },
      { pt: "Bloqueio de horários e feriados", en: "Blocking of slots and holidays" },
    ],
    faqs: [
      {
        question: {
          pt: "Os clientes precisam de criar conta para marcar?",
          en: "Do customers need an account to book?",
        },
        answer: {
          pt:
            "Não, e por norma recomendo que não. Obrigar a criar conta faz perder " +
            "marcações. Basta o nome, o contacto e a hora escolhida. Se fizer sentido no " +
            "teu negócio, pode haver conta opcional para ver o histórico.",
          en:
            "No, and as a rule I recommend against it. Forcing account creation loses " +
            "bookings. Name, contact and the chosen time are enough. If it makes sense for " +
            "your business, an optional account for booking history can be added.",
        },
      },
      {
        question: {
          pt: "Posso bloquear horários e férias?",
          en: "Can I block slots and holidays?",
        },
        answer: {
          pt:
            "Sim. Defines o horário normal, bloqueias dias ou intervalos pontuais, e " +
            "marcas férias. O sistema deixa de oferecer esses horários imediatamente.",
          en:
            "Yes. You set normal opening hours, block specific days or intervals, and mark " +
            "holidays. The system stops offering those slots immediately.",
        },
      },
      {
        question: {
          pt: "Como sei que tenho uma marcação nova?",
          en: "How do I know when a new booking comes in?",
        },
        answer: {
          pt:
            "Recebes email no momento da marcação, e o cliente recebe a confirmação dele. " +
            "Podemos acrescentar lembretes automáticos antes da hora, que reduzem bastante " +
            "as faltas.",
          en:
            "You get an email the moment it is booked, and the customer gets their " +
            "confirmation. We can add automatic reminders before the appointment, which cut " +
            "no-shows considerably.",
        },
      },
    ],
  },
  {
    slug: { pt: "menus-digitais-qr-code", en: "digital-menus-qr-code" },
    title: { pt: "QR codes e menus digitais", en: "QR codes and digital menus" },
    heading: { pt: "Menus digitais com QR code para restaurantes", en: "QR code digital menus for restaurants" },
    description: {
      pt:
        "Ementas que atualizas num painel e que mudam no instante seguinte, sem reimprimir " +
        "nada. Já construí exactamente isto para restauração.",
      en:
        "Menus you update in a panel that change the moment after, with nothing to reprint. " +
        "I have built exactly this for hospitality.",
    },
    body: [
      {
        pt:
          "Construí uma aplicação onde cada restaurante cria a sua ementa e gera QR codes " +
          "prontos a imprimir para as mesas. O menu passa a mudar num minuto, sem " +
          "reimpressões, e deixa de haver aquele momento em que se risca um prato à mão.",
        en:
          "I built an application where each restaurant creates its menu and generates " +
          "print-ready QR codes for the tables. The menu changes in a minute, with no " +
          "reprinting, and there is no more crossing out a dish by hand.",
      },
      {
        pt:
          "Isto resolve três coisas de uma vez: mudas preços quando os custos mudam em vez " +
          "de esperar pela próxima impressão, marcas pratos como esgotados durante o " +
          "serviço, e podes ter a ementa em várias línguas sem multiplicar o papel.",
        en:
          "This solves three things at once: you change prices when costs change instead of " +
          "waiting for the next print run, you mark dishes as sold out during service, and " +
          "you can have the menu in several languages without multiplying the paper.",
      },
    ],
    audience: {
      pt:
        "Para restaurantes, cafés, bares e food trucks, e para qualquer sítio onde a " +
        "ementa muda com frequência.",
      en:
        "For restaurants, cafés, bars and food trucks, and anywhere the menu changes often.",
    },
    includes: [
      {
        pt: "Ementa editável por ti, sem programador",
        en: "Menu you edit yourself, no developer needed",
      },
      { pt: "QR codes prontos a imprimir", en: "Print-ready QR codes" },
      {
        pt: "Preços e disponibilidade atualizados na hora",
        en: "Prices and availability updated instantly",
      },
      {
        pt: "Funciona em qualquer telemóvel, sem instalar app",
        en: "Works on any phone, no app to install",
      },
    ],
    faqs: [
      {
        question: {
          pt: "Os clientes têm de instalar uma aplicação?",
          en: "Do customers need to install an app?",
        },
        answer: {
          pt:
            "Não. Apontam a câmara ao QR code e a ementa abre no browser do telemóvel. " +
            "Funciona em qualquer telefone com câmara, sem instalar nem registar nada.",
          en:
            "No. They point the camera at the QR code and the menu opens in the phone " +
            "browser. It works on any phone with a camera, with nothing to install or " +
            "sign up for.",
        },
      },
      {
        question: {
          pt: "Posso mudar preços durante o serviço?",
          en: "Can I change prices during service?",
        },
        answer: {
          pt:
            "Sim, e é o principal ganho. Mudas no painel e a ementa que os clientes veem " +
            "muda de imediato, sem reimprimir nem substituir QR codes. Os códigos são " +
            "sempre os mesmos, é o conteúdo que muda.",
          en:
            "Yes, and it is the main benefit. You change it in the panel and the menu " +
            "customers see changes immediately, with no reprinting and no replacing QR " +
            "codes. The codes stay the same, the content changes.",
        },
      },
      {
        question: {
          pt: "E se a internet falhar no restaurante?",
          en: "What if the restaurant internet goes down?",
        },
        answer: {
          pt:
            "A ementa abre com os dados do telemóvel do cliente, não com a tua rede, por " +
            "isso continua a funcionar. Mesmo assim, convém teres alguns menus em papel " +
            "para quem não tenha dados ou não queira usar o telefone.",
          en:
            "The menu opens using the customer's mobile data, not your network, so it keeps " +
            "working. Even so, it is worth keeping a few paper menus for anyone without " +
            "data or who would rather not use their phone.",
        },
      },
    ],
  },
  {
    slug: { pt: "aplicacoes-de-gestao", en: "business-applications" },
    title: { pt: "Aplicações de gestão", en: "Business applications" },
    heading: { pt: "Aplicações de gestão feitas à medida", en: "Custom business applications" },
    description: {
      pt:
        "Backoffices, painéis e relatórios feitos à medida do processo que já tens, em vez " +
        "de te obrigarem a mudar de processo.",
      en:
        "Back offices, dashboards and reports built around the process you already have, " +
        "instead of forcing you to change it.",
    },
    body: [
      {
        pt:
          "É o que faço profissionalmente todos os dias. Passei dois anos em software de " +
          "produção industrial usado em fábricas, e construí um sistema de monitorização " +
          "de atividades financeiras para um banco, com alertas para as equipas de suporte " +
          "e detalhe dos erros por atividade.",
        en:
          "This is what I do professionally every day. I spent two years on manufacturing " +
          "software used in factories, and built a financial activity monitoring system " +
          "for a bank, with alerts to support teams and per-activity error detail.",
      },
      {
        pt:
          "Numa empresa pequena isto costuma começar numa folha de cálculo que cresceu " +
          "demais, ou num processo que vive em mensagens e memória de quem lá trabalha. " +
          "A aplicação não tem de substituir tudo de uma vez: começa por resolver a parte " +
          "que está a doer e cresce depois.",
        en:
          "In a small company this usually starts with a spreadsheet that grew too large, " +
          "or a process that lives in messages and in the memory of whoever works there. " +
          "The application does not have to replace everything at once: it starts with the " +
          "part that hurts and grows from there.",
      },
    ],
    audience: {
      pt:
        "Para empresas com um processo próprio que nenhum software de prateleira encaixa, " +
        "e para quem já não consegue trabalhar em folhas de cálculo partilhadas.",
      en:
        "For companies with a process no off-the-shelf software fits, and for anyone who " +
        "can no longer work out of shared spreadsheets.",
    },
    includes: [
      {
        pt: "Painel de administração com utilizadores e permissões",
        en: "Admin panel with users and permissions",
      },
      { pt: "Gráficos e relatórios sobre os teus dados", en: "Charts and reports on your own data" },
      {
        pt: "Integração com sistemas e APIs que já usas",
        en: "Integration with systems and APIs you already use",
      },
      { pt: "Importação e exportação de dados", en: "Data import and export" },
    ],
    faqs: [
      {
        question: {
          pt: "Integra com o software que já uso?",
          en: "Does it integrate with the software I already use?",
        },
        answer: {
          pt:
            "Se esse software tiver API ou permitir exportar dados, sim. Já integrei " +
            "sistemas por APIs REST, bases de dados e filas de mensagens. Se não tiver " +
            "forma nenhuma de sair, digo-te isso à partida em vez de prometer.",
          en:
            "If that software has an API or allows data export, yes. I have integrated " +
            "systems through REST APIs, databases and message queues. If there is no way " +
            "out of it at all, I tell you upfront instead of promising.",
        },
      },
      {
        question: { pt: "Onde ficam os meus dados?", en: "Where does my data live?" },
        answer: {
          pt:
            "Numa base de dados tua, em servidores europeus, e com backups. Digo-te " +
            "exactamente onde na proposta. Podes exportar tudo quando quiseres, e o código " +
            "e os dados são teus.",
          en:
            "In a database that is yours, on European servers, with backups. I tell you " +
            "exactly where in the proposal. You can export everything whenever you want, " +
            "and the code and data are yours.",
        },
      },
      {
        question: {
          pt: "Quem pode ver o quê?",
          en: "Who can see what?",
        },
        answer: {
          pt:
            "Defines perfis de utilizador com permissões diferentes. Quem trabalha no " +
            "balcão não tem de ver relatórios financeiros, e quem faz a gestão não precisa " +
            "de mexer nas operações do dia.",
          en:
            "You define user roles with different permissions. Someone working the counter " +
            "does not need to see financial reports, and whoever manages does not need to " +
            "touch day to day operations.",
        },
      },
    ],
  },
  {
    slug: { pt: "manutencao-e-alojamento", en: "hosting-and-maintenance" },
    title: { pt: "Manutenção e alojamento", en: "Hosting and maintenance" },
    heading: { pt: "Alojamento e manutenção de sites", en: "Website hosting and maintenance" },
    description: {
      pt:
        "Depois do lançamento o site continua a precisar de alguém. Backups, atualizações " +
        "de segurança, monitorização e as alterações que forem aparecendo.",
      en:
        "After launch a site still needs someone. Backups, security updates, monitoring and " +
        "whatever changes come up.",
    },
    body: [
      {
        pt:
          "A maior parte dos sites que dão problemas não dá problemas por terem sido mal " +
          "feitos. Dão problemas porque ficaram dois anos sem ninguém a olhar para eles. " +
          "Já vi um site de empresa a alojar 828 páginas de spam sem o dono saber, porque " +
          "a instalação estava desatualizada.",
        en:
          "Most sites that cause trouble do not cause it because they were badly built. " +
          "They cause it because nobody looked at them for two years. I have seen a company " +
          "site hosting 828 spam pages without the owner knowing, because the installation " +
          "was out of date.",
      },
      {
        pt:
          "Um site construído como páginas estáticas reduz muito essa superfície de risco, " +
          "mas continua a precisar de alguém que verifique se os backups funcionam de " +
          "facto, que o certificado renovou, e que o site está no ar. É isso que este " +
          "serviço cobre, mais as alterações pequenas que aparecem todos os meses.",
        en:
          "A site built as static pages cuts that risk surface a lot, but it still needs " +
          "someone to check that backups actually work, that the certificate renewed, and " +
          "that the site is up. That is what this service covers, plus the small changes " +
          "that come up every month.",
      },
    ],
    audience: {
      pt:
        "Para quem já tem site e ficou sem quem o mantenha, e para clientes meus depois " +
        "da entrega.",
      en:
        "For anyone who has a site and no longer has someone maintaining it, and for my " +
        "own clients after handover.",
    },
    includes: [
      {
        pt: "Alojamento rápido, com certificado incluído",
        en: "Fast hosting, certificate included",
      },
      {
        pt: "Backups verificados e atualizações de segurança",
        en: "Verified backups and security updates",
      },
      { pt: "Monitorização de disponibilidade", en: "Uptime monitoring" },
      {
        pt: "Horas mensais para alterações de conteúdo",
        en: "Monthly hours for content changes",
      },
    ],
    faqs: [
      {
        question: { pt: "O que inclui exactamente?", en: "What exactly does it include?" },
        answer: {
          pt:
            "Alojamento e certificado, backups verificados, atualizações de segurança, " +
            "monitorização de disponibilidade, correção de avarias, e um número fixo de " +
            "horas por mês para alterações de conteúdo. O que passar dessas horas é " +
            "cobrado à hora e avisado antes.",
          en:
            "Hosting and certificate, verified backups, security updates, uptime " +
            "monitoring, fixing breakages, and a fixed number of hours per month for " +
            "content changes. Anything beyond those hours is charged hourly and flagged " +
            "beforehand.",
        },
      },
      {
        question: { pt: "Posso cancelar quando quiser?", en: "Can I cancel any time?" },
        answer: {
          pt:
            "Sim, sem período mínimo. Se cancelares, entrego-te o site e os dados em " +
            "formato utilizável e ajudo na passagem para quem vier depois.",
          en:
            "Yes, with no minimum term. If you cancel, I hand over the site and data in a " +
            "usable format and help with the transition to whoever comes next.",
        },
      },
      {
        question: { pt: "O site é meu?", en: "Is the site mine?" },
        answer: {
          pt:
            "É. O código, o conteúdo e o domínio são teus, e ficam registados em teu nome. " +
            "Não fico com nada em meu nome, porque isso é exactamente o problema em que " +
            "muitos negócios ficam presos ao mudar de fornecedor.",
          en:
            "It is. The code, the content and the domain are yours, registered in your " +
            "name. I keep nothing in mine, because that is exactly the trap many businesses " +
            "fall into when changing supplier.",
        },
      },
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

/** Root path of the services section per locale. */
export const servicesBasePath: Record<Locale, string> = {
  pt: "/servicos",
  en: "/en/services",
};
