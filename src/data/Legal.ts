/**
 * Legal pages content.
 *
 * NOT LEGAL ADVICE. This covers what a Portuguese service provider with a
 * contact form is commonly required to disclose under the GDPR and under
 * Decreto-Lei 7/2004. Have it reviewed before relying on it, and fill in the
 * PENDING placeholders below.
 */

import type { Locale, LocalisedText } from "./Cv";

/**
 * Identification required of an information society service provider.
 * Replace every "PENDING" value before the site goes live on the real domain.
 */
export const legalIdentity = {
  /** Full legal name as registered with the tax authority. */
  name: "José Miguel Monteiro Soares",
  taxNumber: "PENDING_NIF",
  address: "PENDING_ENDERECO_FISCAL",
  /** Set to true once activity is registered and invoices are issued. */
  hasRegisteredActivity: false,
  complaintsBookUrl: "https://www.livroreclamacoes.pt/inicio",
  dataProtectionAuthority: {
    name: "Comissão Nacional de Proteção de Dados (CNPD)",
    url: "https://www.cnpd.pt",
  },
};

export interface ILegalSection {
  title: LocalisedText;
  paragraphs: LocalisedText[];
  /** Optional bullet list rendered after the paragraphs. */
  items?: LocalisedText[];
}

export interface ILegalPage {
  slug: Record<Locale, string>;
  title: LocalisedText;
  metaDescription: LocalisedText;
  updated: string;
  intro: LocalisedText;
  sections: ILegalSection[];
}

export const privacyPage: ILegalPage = {
  slug: { pt: "privacidade", en: "privacy" },
  title: { pt: "Política de Privacidade", en: "Privacy Policy" },
  metaDescription: {
    pt:
      "Como são tratados os dados pessoais recolhidos neste site: que dados, para quê, " +
      "por quanto tempo, com quem são partilhados e quais são os teus direitos.",
    en:
      "How personal data collected on this site is handled: what data, why, for how long, " +
      "who it is shared with and what your rights are.",
  },
  updated: "2026-09-16",
  intro: {
    pt:
      "Esta página explica como são tratados os dados pessoais recolhidos neste site. " +
      "Está escrita para ser lida, não para ser cumprida por formalidade.",
    en:
      "This page explains how personal data collected on this site is handled. It is " +
      "written to be read, not to tick a box.",
  },
  sections: [
    {
      title: { pt: "Quem trata os teus dados", en: "Who handles your data" },
      paragraphs: [
        {
          pt:
            `O responsável pelo tratamento é ${legalIdentity.name}, com o número de ` +
            `identificação fiscal ${legalIdentity.taxNumber} e sede em ${legalIdentity.address}. ` +
            "Para qualquer questão sobre dados pessoais, o contacto é soareze1414@gmail.com.",
          en:
            `The data controller is ${legalIdentity.name}, tax number ` +
            `${legalIdentity.taxNumber}, based at ${legalIdentity.address}. For any question ` +
            "about personal data, the contact is soareze1414@gmail.com.",
        },
      ],
    },
    {
      title: { pt: "Que dados são recolhidos", en: "What data is collected" },
      paragraphs: [
        {
          pt:
            "Este site não tem área de registo, não usa publicidade e não tem ferramentas " +
            "de análise de tráfego. Os únicos dados pessoais recolhidos são os que " +
            "escreves no formulário de contacto:",
          en:
            "This site has no sign-up area, runs no advertising and uses no traffic " +
            "analytics. The only personal data collected is what you type into the contact " +
            "form:",
        },
      ],
      items: [
        { pt: "Nome", en: "Name" },
        { pt: "Endereço de email", en: "Email address" },
        { pt: "Número de telefone, se o indicares, por ser opcional", en: "Phone number, if you provide one, as it is optional" },
        { pt: "Tipo de projeto, se o selecionares", en: "Project type, if you select one" },
        { pt: "O conteúdo da mensagem que escreves", en: "The content of the message you write" },
      ],
    },
    {
      title: { pt: "Para que servem e com que fundamento", en: "Why it is used and on what basis" },
      paragraphs: [
        {
          pt:
            "Os dados servem exclusivamente para te responder e, se avançarmos, para " +
            "preparar e executar o trabalho contratado. Não são usados para marketing, " +
            "não entram em nenhuma lista de divulgação e não são vendidos nem cedidos a " +
            "terceiros para fins comerciais.",
          en:
            "The data is used solely to reply to you and, if we proceed, to prepare and " +
            "carry out the agreed work. It is not used for marketing, does not enter any " +
            "mailing list, and is never sold or passed to third parties for commercial " +
            "purposes.",
        },
        {
          pt:
            "O fundamento legal é o teu consentimento ao submeteres o formulário, e, a " +
            "partir do momento em que exista um projeto, a execução do contrato entre nós.",
          en:
            "The legal basis is your consent when you submit the form, and, once a project " +
            "exists, the performance of the contract between us.",
        },
      ],
    },
    {
      title: { pt: "Quanto tempo são guardados", en: "How long it is kept" },
      paragraphs: [
        {
          pt:
            "As mensagens de contacto ficam guardadas na caixa de correio até 24 meses, " +
            "para permitir retomar conversas e responder a pedidos antigos. Se o contacto " +
            "der origem a um projeto, os dados necessários à faturação são conservados " +
            "pelo período exigido pela lei fiscal portuguesa, atualmente dez anos.",
          en:
            "Contact messages are kept in the mailbox for up to 24 months, so conversations " +
            "can be resumed and older enquiries answered. If the contact leads to a " +
            "project, the data needed for invoicing is kept for the period required by " +
            "Portuguese tax law, currently ten years.",
        },
        {
          pt: "Podes pedir a eliminação antes disso a qualquer momento.",
          en: "You can ask for deletion before that at any time.",
        },
      ],
    },
    {
      title: { pt: "Quem mais tem acesso", en: "Who else has access" },
      paragraphs: [
        {
          pt:
            "Para o site funcionar e a mensagem chegar, há fornecedores que processam " +
            "dados por minha conta. São estes, e mais nenhum:",
          en:
            "For the site to work and the message to arrive, some providers process data on " +
            "my behalf. These are the only ones:",
        },
      ],
      items: [
        {
          pt:
            "Cloudflare, Inc., que aloja o site e processa os pedidos. Recebe o endereço " +
            "IP de quem visita, como acontece em qualquer alojamento, e é usado para " +
            "servir as páginas e proteger contra abuso.",
          en:
            "Cloudflare, Inc., which hosts the site and processes requests. It receives the " +
            "IP address of visitors, as any hosting does, used to serve pages and protect " +
            "against abuse.",
        },
        {
          pt:
            "Resend (Plus Five Five, Inc.), que entrega o email do formulário. Recebe o " +
            "conteúdo da mensagem e os teus dados de contacto, apenas para a fazer chegar.",
          en:
            "Resend (Plus Five Five, Inc.), which delivers the form email. It receives the " +
            "message content and your contact details, only to deliver them.",
        },
        {
          pt:
            "Google (Gmail), onde a mensagem fica depositada, por ser o serviço de correio " +
            "usado para receber contactos.",
          en:
            "Google (Gmail), where the message lands, as that is the mail service used to " +
            "receive enquiries.",
        },
      ],
    },
    {
      title: { pt: "Transferências para fora da União Europeia", en: "Transfers outside the European Union" },
      paragraphs: [
        {
          pt:
            "A Cloudflare, o Resend e a Google são empresas com sede nos Estados Unidos. " +
            "As transferências de dados assentam nas cláusulas contratuais-tipo aprovadas " +
            "pela Comissão Europeia e, quando aplicável, no Data Privacy Framework entre a " +
            "União Europeia e os Estados Unidos.",
          en:
            "Cloudflare, Resend and Google are companies based in the United States. Data " +
            "transfers rely on the standard contractual clauses approved by the European " +
            "Commission and, where applicable, on the EU to US Data Privacy Framework.",
        },
      ],
    },
    {
      title: { pt: "Cookies", en: "Cookies" },
      paragraphs: [
        {
          pt:
            "Este site não usa cookies de análise, de publicidade nem de perfilagem, por " +
            "isso não verás um aviso de cookies. Não há nada a consentir porque não há " +
            "nada a recolher.",
          en:
            "This site uses no analytics, advertising or profiling cookies, which is why " +
            "you will not see a cookie banner. There is nothing to consent to because there " +
            "is nothing being collected.",
        },
        {
          pt:
            "A Cloudflare pode colocar um cookie técnico de deteção de tráfego automatizado, " +
            "estritamente necessário ao funcionamento e à segurança do site, que não é " +
            "usado para te identificar nem para publicidade.",
          en:
            "Cloudflare may set a technical cookie for automated traffic detection, strictly " +
            "necessary to the operation and security of the site, which is not used to " +
            "identify you or for advertising.",
        },
        {
          pt:
            "As tipografias usadas no site são servidas do próprio domínio, e não de um " +
            "serviço externo, para que a tua visita não seja comunicada a terceiros.",
          en:
            "The typefaces used on the site are served from this domain, not from an " +
            "external service, so your visit is not reported to any third party.",
        },
      ],
    },
    {
      title: { pt: "Os teus direitos", en: "Your rights" },
      paragraphs: [
        {
          pt:
            "Podes exercer os seguintes direitos a qualquer momento, escrevendo para " +
            "soareze1414@gmail.com. A resposta chega no prazo máximo de um mês.",
          en:
            "You can exercise the following rights at any time by writing to " +
            "soareze1414@gmail.com. A reply arrives within one month at most.",
        },
      ],
      items: [
        { pt: "Saber que dados teus existem e obter uma cópia", en: "Know what data of yours exists and obtain a copy" },
        { pt: "Corrigir dados errados ou incompletos", en: "Correct inaccurate or incomplete data" },
        { pt: "Pedir a eliminação dos dados", en: "Request deletion of the data" },
        { pt: "Limitar ou opor-te ao tratamento", en: "Restrict or object to the processing" },
        { pt: "Receber os dados em formato portável", en: "Receive the data in a portable format" },
        { pt: "Retirar o consentimento, sem afetar o que já foi tratado antes", en: "Withdraw consent, without affecting processing already carried out" },
      ],
    },
    {
      title: { pt: "Reclamações", en: "Complaints" },
      paragraphs: [
        {
          pt:
            "Se achares que os teus dados não estão a ser tratados como devem, podes " +
            "reclamar junto da Comissão Nacional de Proteção de Dados, em cnpd.pt. " +
            "Agradeço que me escrevas primeiro, porque quase tudo se resolve mais depressa " +
            "assim, mas o direito é teu e não depende disso.",
          en:
            "If you believe your data is not being handled properly, you can complain to " +
            "the Portuguese data protection authority (CNPD) at cnpd.pt. I would appreciate " +
            "hearing from me first, since almost everything is resolved faster that way, but " +
            "the right is yours and does not depend on it.",
        },
      ],
    },
    {
      title: { pt: "Alterações", en: "Changes" },
      paragraphs: [
        {
          pt:
            "Se esta política mudar, a data no topo da página muda com ela. Alterações que " +
            "afetem quem já me contactou são comunicadas por email.",
          en:
            "If this policy changes, the date at the top of the page changes with it. " +
            "Changes affecting anyone who has already contacted me are communicated by email.",
        },
      ],
    },
  ],
};

export const termsPage: ILegalPage = {
  slug: { pt: "termos", en: "terms" },
  title: { pt: "Termos e Condições", en: "Terms and Conditions" },
  metaDescription: {
    pt:
      "Identificação do prestador, condições de utilização do site, propriedade " +
      "intelectual, limitação de responsabilidade e resolução de litígios.",
    en:
      "Provider identification, site terms of use, intellectual property, limitation of " +
      "liability and dispute resolution.",
  },
  updated: "2026-09-16",
  intro: {
    pt: "Condições de utilização deste site e informação legal sobre quem o mantém.",
    en: "Terms of use for this site and legal information about who runs it.",
  },
  sections: [
    {
      title: { pt: "Identificação do prestador", en: "Provider identification" },
      paragraphs: [
        {
          pt:
            "Em cumprimento do Decreto-Lei n.º 7/2004, relativo ao comércio eletrónico e " +
            "aos serviços da sociedade da informação:",
          en:
            "In compliance with Portuguese Decreto-Lei 7/2004 on electronic commerce and " +
            "information society services:",
        },
      ],
      items: [
        { pt: `Nome: ${legalIdentity.name}`, en: `Name: ${legalIdentity.name}` },
        { pt: `NIF: ${legalIdentity.taxNumber}`, en: `Tax number: ${legalIdentity.taxNumber}` },
        { pt: `Endereço: ${legalIdentity.address}`, en: `Address: ${legalIdentity.address}` },
        { pt: "Email: soareze1414@gmail.com", en: "Email: soareze1414@gmail.com" },
        { pt: "Telefone: +351 911 108 710", en: "Phone: +351 911 108 710" },
      ],
    },
    {
      title: { pt: "Objeto deste site", en: "Purpose of this site" },
      paragraphs: [
        {
          pt:
            "Este site apresenta serviços de desenvolvimento de software e o percurso " +
            "profissional de quem os presta. A informação é de carácter geral e não " +
            "constitui, por si, uma proposta contratual. Cada projeto é objeto de proposta " +
            "própria, por escrito, com âmbito, prazos e preço definidos antes de começar.",
          en:
            "This site presents software development services and the professional " +
            "background of the person providing them. The information is general in nature " +
            "and does not in itself constitute a contractual offer. Each project is covered " +
            "by its own written proposal, with scope, deadlines and price agreed before work " +
            "begins.",
        },
      ],
    },
    {
      title: { pt: "Propriedade intelectual", en: "Intellectual property" },
      paragraphs: [
        {
          pt:
            "Os textos, o design e o código deste site são propriedade do prestador. Os " +
            "nomes e marcas de empresas e tecnologias mencionados pertencem aos respetivos " +
            "titulares e são referidos apenas a título informativo, para descrever " +
            "experiência profissional.",
          en:
            "The text, design and code of this site belong to the provider. Company and " +
            "technology names and trademarks mentioned belong to their respective owners and " +
            "are referenced for information only, to describe professional experience.",
        },
        {
          pt:
            "Nos projetos contratados, o código e os conteúdos produzidos passam a ser " +
            "propriedade do cliente após liquidação integral, conforme fica estabelecido na " +
            "proposta de cada projeto.",
          en:
            "In commissioned projects, the code and content produced become the client's " +
            "property upon full payment, as set out in each project proposal.",
        },
      ],
    },
    {
      title: { pt: "Limitação de responsabilidade", en: "Limitation of liability" },
      paragraphs: [
        {
          pt:
            "Procura-se manter a informação deste site correta e atualizada, mas não se " +
            "garante que esteja isenta de erros ou omissões. Prazos, valores e capacidades " +
            "indicados a título geral não substituem o que for acordado por escrito numa " +
            "proposta.",
          en:
            "Reasonable care is taken to keep the information on this site accurate and up " +
            "to date, but it is not guaranteed to be free of errors or omissions. Timescales, " +
            "figures and capabilities described in general terms do not replace what is " +
            "agreed in writing in a proposal.",
        },
      ],
    },
    {
      title: { pt: "Ligações para sites de terceiros", en: "Links to third party sites" },
      paragraphs: [
        {
          pt:
            "Este site pode conter ligações para sites de terceiros, sobre os quais não há " +
            "controlo nem responsabilidade quanto ao conteúdo ou às práticas de privacidade.",
          en:
            "This site may contain links to third party sites, over which there is no " +
            "control and no responsibility for content or privacy practices.",
        },
      ],
    },
    {
      title: { pt: "Lei aplicável e resolução de litígios", en: "Applicable law and dispute resolution" },
      paragraphs: [
        {
          pt:
            "Aplica-se a lei portuguesa. Em caso de litígio de consumo, o consumidor pode " +
            "recorrer às entidades de resolução alternativa de litígios competentes, e " +
            "apresentar reclamação no Livro de Reclamações Eletrónico, disponível em " +
            "livroreclamacoes.pt.",
          en:
            "Portuguese law applies. In the case of a consumer dispute, the consumer may " +
            "turn to the competent alternative dispute resolution bodies, and may submit a " +
            "complaint through the Portuguese electronic complaints book at " +
            "livroreclamacoes.pt.",
        },
      ],
    },
  ],
};

export const legalPages: ILegalPage[] = [privacyPage, termsPage];
