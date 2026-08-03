export interface Article {
  slug: string
  title: string
  excerpt: string
  date: string
  domain: 'etranger' | 'travail' | 'commercial' | 'assurance' | 'fiscal'
  tags: string[]
  content: string[]
}

export const domainLabels: Record<string, string> = {
  etranger: 'Droit des étrangers',
  travail: 'Droit du travail',
  commercial: 'Droit commercial',
  assurance: 'Droit des assurances',
  fiscal: 'Droit fiscal',
}

export const articles: Article[] = [
  {
    slug: 'titre-sejour-demande-renouvellement',
    title: "Titre de séjour : comment préparer sa demande ou son renouvellement",
    excerpt: "Obtenir ou renouveler un titre de séjour est une démarche complexe, soumise à des conditions précises et des délais stricts. Connaître les pièces à fournir, les voies de recours et les pièges à éviter peut faire toute la différence.",
    date: '2026-07-15',
    domain: 'etranger',
    tags: ['titre de séjour', 'préfecture', 'renouvellement', 'étrangers'],
    content: [
      "Le titre de séjour est le document qui autorise un ressortissant étranger à résider légalement en France au-delà des trois mois accordés aux visiteurs. Il en existe plusieurs catégories — carte de séjour temporaire, carte de séjour pluriannuelle, carte de résident — dont l'accès dépend de la situation personnelle du demandeur : vie privée et familiale, activité professionnelle, études, raisons humanitaires ou protection internationale. La première demande s'effectue auprès de la préfecture ou sous-préfecture du lieu de résidence.",
      "Le dossier de demande doit être constitué avec soin. Les pièces généralement exigées comprennent le passeport en cours de validité, un justificatif de domicile, des photographies d'identité, ainsi que les documents spécifiques à la catégorie sollicitée : acte de mariage ou de naissance, contrat de travail, justificatifs de ressources, attestations d'hébergement. Une pièce manquante ou périmée peut entraîner le rejet du dossier ou imposer un nouveau rendez-vous, parfois plusieurs mois plus tard.",
      "La demande de renouvellement doit impérativement être déposée avant l'expiration du titre en cours. En pratique, les délais de traitement des préfectures étant souvent longs, il est recommandé d'anticiper le dépôt de deux à trois mois avant l'échéance. Le dépôt dans les délais génère un récépissé valant autorisation provisoire de séjour pendant l'instruction du dossier. Passé ce délai, la personne se retrouve en situation irrégulière, ce qui complique fortement les possibilités de régularisation.",
      "En cas de refus de délivrance ou de renouvellement, le ressortissant étranger dispose de voies de recours. Il peut former un recours gracieux auprès du préfet ou un recours hiérarchique auprès du ministre de l'Intérieur dans les deux mois suivant la notification du refus. Il peut également saisir le tribunal administratif d'un recours pour excès de pouvoir, en demandant éventuellement le sursis à exécution de la décision. La qualité du dossier contentieux est déterminante pour les chances de succès.",
      "L'assistance d'un avocat spécialisé en droit des étrangers est particulièrement précieuse dans les situations complexes : refus répétés, absence de titre depuis plusieurs années, risque d'éloignement, changement de situation familiale ou professionnelle. L'avocat permet de cibler la catégorie de titre la mieux adaptée à la situation du demandeur, de structurer le dossier de manière optimale et de défendre efficacement les droits de son client en cas de litige avec l'administration.",
    ],
  },
  {
    slug: 'oqtf-recours-obligation-quitter-territoire',
    title: "OQTF : comment contester une obligation de quitter le territoire français",
    excerpt: "L'obligation de quitter le territoire français (OQTF) est l'une des mesures les plus redoutées en droit des étrangers. Elle est pourtant susceptible de recours, à condition d'agir vite et de manière structurée.",
    date: '2026-06-10',
    domain: 'etranger',
    tags: ['OQTF', 'éloignement', 'tribunal administratif', 'recours'],
    content: [
      "L'obligation de quitter le territoire français (OQTF) est une décision administrative par laquelle le préfet enjoint à un ressortissant étranger de quitter la France. Elle peut être assortie d'un délai de départ volontaire de 30 jours, ou être sans délai en cas de risque de fuite, de menace à l'ordre public ou de demande d'asile manifestement infondée. L'OQTF peut aussi être accompagnée d'une interdiction de retour sur le territoire français (IRTF) d'une durée variable.",
      "Les délais de recours sont extrêmement courts et varient selon la catégorie d'OQTF. Pour une OQTF avec délai de départ volontaire, le recours doit être formé dans un délai de 30 jours. Pour une OQTF sans délai ou assortie d'un placement en rétention, le délai est réduit à 48 heures ou 72 heures selon les cas. Le non-respect de ces délais entraîne l'irrecevabilité du recours : il est donc impératif de consulter un avocat dès la notification de la mesure.",
      "Le recours contre une OQTF s'exerce devant le tribunal administratif. Il porte sur la légalité externe de la décision (compétence de l'auteur, vice de procédure) et sur sa légalité interne (erreur de droit, erreur manifeste d'appréciation, atteinte disproportionnée à la vie privée et familiale protégée par l'article 8 de la Convention européenne des droits de l'homme). Les situations familiales particulières — enfants nés en France, conjoint français ou en situation régulière, longue durée de résidence — constituent souvent les arguments les plus solides.",
      "Pendant l'instruction du recours, le juge des référés peut être saisi en urgence pour suspendre l'exécution de l'OQTF. Cette procédure de référé-suspension est distincte du recours au fond et permet d'éviter un éloignement précipité avant que le tribunal ne statue sur le fond. La condition principale est de justifier d'un doute sérieux sur la légalité de la décision et d'une urgence particulière. En cas de placement en centre de rétention administrative (CRA), le juge des libertés et de la détention (JLD) contrôle la régularité de la rétention.",
      "En cas de rejet du recours par le tribunal administratif, un appel est possible devant la cour administrative d'appel dans un délai d'un mois. Le pourvoi en cassation devant le Conseil d'État constitue le dernier recours interne. Parallèlement, des recours devant la Cour européenne des droits de l'homme peuvent être envisagés dans les cas mettant en jeu des droits fondamentaux. Quelle que soit la situation, l'intervention rapide d'un avocat spécialisé est décisive pour éviter un éloignement qui, une fois exécuté, est difficile à réparer.",
    ],
  },
  {
    slug: 'rupture-conventionnelle-conditions-procedure',
    title: "Rupture conventionnelle : conditions, procédure et indemnités",
    excerpt: "La rupture conventionnelle permet à l'employeur et au salarié de mettre fin d'un commun accord au contrat de travail. Mais ce dispositif, encadré par la loi, comporte des exigences précises dont le non-respect peut être sanctionné.",
    date: '2026-05-08',
    domain: 'travail',
    tags: ['rupture conventionnelle', 'indemnité', 'DREETS', 'chômage'],
    content: [
      "La rupture conventionnelle homologuée, instituée par la loi du 25 juin 2008, permet à un employeur et un salarié en CDI de convenir d'un commun accord de mettre fin au contrat de travail. Elle est distincte du licenciement et de la démission : elle ouvre droit aux allocations chômage et garantit au salarié une indemnité spécifique de rupture au moins égale à l'indemnité légale de licenciement. Elle est réservée aux contrats à durée indéterminée et ne peut être imposée à l'une ou l'autre des parties.",
      "La procédure comporte plusieurs étapes obligatoires. L'employeur et le salarié doivent d'abord tenir au moins un entretien au cours duquel les conditions de la rupture sont librement négociées. Le salarié peut se faire assister par un représentant du personnel ou par toute autre personne de son choix (à condition d'en informer l'employeur). À l'issue de cet entretien, les parties signent une convention de rupture qui précise le montant de l'indemnité et la date envisagée de rupture.",
      "Après la signature, un délai de rétractation de 15 jours calendaires court au bénéfice de chaque partie. Ce délai permet à l'une ou l'autre de revenir sur sa décision sans avoir à se justifier, par lettre recommandée avec accusé de réception. À l'expiration de ce délai, la convention est adressée à la DREETS (Direction régionale de l'économie, de l'emploi, du travail et des solidarités) pour homologation. L'administration dispose de 15 jours ouvrables pour instruire la demande ; à défaut de réponse, la convention est réputée homologuée.",
      "L'indemnité spécifique de rupture conventionnelle ne peut être inférieure à l'indemnité légale de licenciement, calculée en fonction de l'ancienneté : un quart de mois de salaire par année pour les dix premières années, un tiers au-delà. La convention collective applicable peut prévoir une indemnité plus favorable. Cette indemnité est exonérée de cotisations sociales dans certaines limites et partiellement exonérée d'impôt sur le revenu.",
      "La rupture conventionnelle peut être contestée devant le conseil de prud'hommes dans un délai de 12 mois à compter de son homologation. Les motifs de nullité sont notamment : le vice du consentement (pression, harcèlement moral préalable, erreur), le non-respect de la procédure légale, ou le recours à ce dispositif pour contourner une procédure de licenciement économique collectif. En cas de nullité, la rupture est requalifiée en licenciement sans cause réelle et sérieuse, ouvrant droit à des indemnités supplémentaires.",
    ],
  },
  {
    slug: 'bail-commercial-droits-obligations-locataire',
    title: "Bail commercial : droits et obligations du locataire",
    excerpt: "Le bail commercial régit les relations entre propriétaire et locataire d'un local destiné à une activité commerciale. Sa durée minimale, son renouvellement et les conditions de résiliation sont strictement encadrés par la loi.",
    date: '2026-04-03',
    domain: 'commercial',
    tags: ['bail commercial', 'loyer', 'renouvellement', 'résiliation'],
    content: [
      "Le bail commercial est régi par les articles L.145-1 et suivants du Code de commerce. Il s'applique aux locaux dans lesquels est exploité un fonds de commerce ou artisanal, à condition que le locataire soit immatriculé au Registre du commerce et des sociétés (RCS) ou au Répertoire des métiers. Sa durée minimale est de neuf ans, ce qui offre au locataire une stabilité indispensable à l'exploitation de son activité. Il ne peut être résilié avant l'expiration de chaque période triennale qu'à des conditions précises.",
      "Le locataire commercial bénéficie d'un droit au renouvellement à l'expiration du bail, sauf refus du propriétaire accompagné du paiement d'une indemnité d'éviction. Ce droit est d'ordre public : le propriétaire ne peut l'exclure ni y renoncer par convention. Le refus de renouvellement sans indemnité n'est possible que dans des cas limitativement prévus par la loi : motif grave et légitime (inexécution par le locataire de ses obligations), démolition ou reconstruction de l'immeuble, ou reprise pour usage d'habitation.",
      "La révision du loyer obéit à des règles spécifiques. En cours de bail, le loyer peut être révisé à l'initiative de l'une ou l'autre des parties tous les trois ans, dans la limite de la variation de l'Indice des Loyers Commerciaux (ILC) ou de l'Indice des Loyers des Activités Tertiaires (ILAT). Lors du renouvellement, le loyer peut être fixé à la valeur locative si celle-ci diffère sensiblement du loyer précédent. En cas de désaccord sur ce montant, les parties peuvent saisir le juge des loyers commerciaux.",
      "Le locataire a l'obligation d'exploiter le fonds conformément à la destination prévue au bail, d'entretenir les locaux et d'effectuer les réparations locatives. Il doit également s'acquitter du loyer et des charges aux échéances convenues. En contrepartie, le propriétaire est tenu d'assurer la jouissance paisible des lieux et d'effectuer les grosses réparations. La répartition des charges entre bailleur et locataire est encadrée depuis la loi Pinel de 2014, qui interdit notamment de mettre à la charge du locataire certaines dépenses (travaux de mise en conformité, charges de copropriété relevant du propriétaire).",
      "En cas de litige avec le propriétaire — refus abusif de renouvellement, augmentation illégale du loyer, manquements aux obligations d'entretien — le locataire dispose de recours judiciaires. Le tribunal judiciaire est compétent pour les litiges relatifs au bail commercial. L'assistance d'un avocat spécialisé est recommandée pour négocier les conditions du bail initial, défendre ses droits en cas de contentieux et anticiper les pièges fréquents que recèlent certaines clauses contractuelles.",
    ],
  },
  {
    slug: 'refus-indemnisation-contester-assureur',
    title: "Refus d'indemnisation : comment contester la décision de votre assureur",
    excerpt: "Face à un refus de prise en charge ou à une offre d'indemnisation insuffisante, l'assuré n'est pas sans recours. La contestation suit un processus précis, de la réclamation amiable jusqu'au tribunal judiciaire.",
    date: '2026-03-18',
    domain: 'assurance',
    tags: ['assurance', 'refus indemnisation', 'recours', 'sinistre'],
    content: [
      "L'assureur peut refuser de prendre en charge un sinistre en invoquant une exclusion de garantie, un défaut de déclaration, une fausse déclaration ou une irrégularité dans la déclaration du sinistre. Quelle que soit la raison invoquée, ce refus doit être motivé par écrit et notifié à l'assuré dans les délais prévus par la loi ou le contrat. En matière d'assurance dommages, l'assureur est tenu de statuer sur la garantie dans un délai raisonnable après réception de la déclaration de sinistre.",
      "La première étape de la contestation consiste à adresser une réclamation écrite au service client de la compagnie d'assurance, en exposant les raisons pour lesquelles le refus vous semble injustifié et en joignant les pièces justificatives pertinentes. Ce courrier doit être envoyé par lettre recommandée avec accusé de réception afin de conserver une preuve de la démarche. Si la réponse est insatisfaisante ou en l'absence de réponse dans les deux mois, vous pouvez saisir le médiateur de l'assurance.",
      "La médiation de l'assurance est un dispositif gratuit, indépendant et confidentiel. Le médiateur rend un avis motivé dans un délai de 90 jours à compter de la réception du dossier complet. Cet avis n'est pas contraignant pour l'assureur, mais constitue souvent une étape utile avant le recours judiciaire. La saisine du médiateur suspend les délais de prescription applicables à l'action en justice, ce qui laisse le temps à la procédure amiable d'aboutir sans risquer de se trouver forclos.",
      "Si la médiation n'aboutit pas, la voie judiciaire s'ouvre. Le tribunal judiciaire est compétent pour les litiges entre assurés particuliers et compagnies d'assurance. La prescription biennale en matière d'assurance (deux ans à compter de l'événement ayant donné naissance à l'action) est un délai court qu'il convient de surveiller attentivement. En cas d'urgence, une procédure de référé peut permettre d'obtenir une provision sur indemnisation dans l'attente du jugement au fond.",
      "L'assistance d'un avocat spécialisé en droit des assurances est particulièrement précieuse pour analyser les clauses du contrat, identifier les failles de l'argumentation de l'assureur et construire un dossier solide. Les exclusions de garantie, souvent formulées de manière ambiguë, sont fréquemment au cœur des litiges : leur interprétation est stricte en droit français, et toute clause équivoque s'interprète en faveur de l'assuré. Une expertise juridique préalable permet souvent d'obtenir un règlement amiable satisfaisant sans aller jusqu'au procès.",
    ],
  },
  {
    slug: 'controle-fiscal-particuliers-droits-contribuable',
    title: "Contrôle fiscal des particuliers : déroulement et droits du contribuable",
    excerpt: "Faire l'objet d'un contrôle fiscal est une situation stressante, mais encadrée par des règles précises qui protègent le contribuable. Connaître le déroulement de la procédure et ses droits permet d'y faire face sereinement.",
    date: '2026-02-14',
    domain: 'fiscal',
    tags: ['contrôle fiscal', 'redressement', 'impôt', 'vérification'],
    content: [
      "Le contrôle fiscal des particuliers peut prendre deux formes principales. L'examen contradictoire de la situation fiscale personnelle (ESFP) est un contrôle approfondi portant sur la cohérence entre les revenus déclarés et la situation patrimoniale du contribuable sur une ou plusieurs années. L'examen de déclarations (ou contrôle sur pièces) est effectué par l'administration depuis ses bureaux, sans déplacement chez le contribuable, à partir des seules déclarations déposées et des informations dont elle dispose.",
      "Lors d'un ESFP, l'administration envoie d'abord un avis de vérification mentionnant les années vérifiées et la charte du contribuable vérifié. Ce document, que l'administration est tenue de remettre, décrit les droits et garanties du contribuable pendant la procédure. L'envoi de l'avis de vérification ouvre un délai dans lequel le contribuable peut se préparer et, si nécessaire, régulariser certaines omissions déclaratives avant la première intervention du vérificateur.",
      "Le contribuable bénéficie de plusieurs garanties fondamentales pendant le contrôle. Il a le droit d'être assisté par un conseil (avocat, expert-comptable) lors des entretiens avec le vérificateur. Il peut demander des délais supplémentaires pour répondre aux demandes de renseignements. Il a droit à la communication de tous les documents sur lesquels l'administration entend fonder les redressements. Le débat oral et contradictoire est une garantie essentielle : le vérificateur doit soumettre ses constatations au contribuable avant de notifier le redressement.",
      "En cas de redressement, l'administration envoie une proposition de rectification motivée. Le contribuable dispose d'un délai de 30 jours (prorogeable sur demande à 60 jours) pour y répondre. Sa réponse argumentée peut conduire à une atténuation ou à l'abandon de tout ou partie des redressements. Si un désaccord persiste, le contribuable peut saisir le supérieur hiérarchique du vérificateur, puis l'interlocuteur départemental, et enfin les commissions administratives compétentes (Commission des impôts directs et des taxes sur le chiffre d'affaires, Commission nationale des impôts directs).",
      "Après épuisement des voies de recours administratives, le contribuable peut contester le redressement devant le tribunal administratif. La réclamation contentieuse doit être formée auprès de l'administration fiscale dans les délais légaux avant tout recours judiciaire. Les délais de prescription des redressements sont en principe de trois ans pour les impôts sur le revenu, mais peuvent être portés à dix ans en cas de fraude fiscale avérée. L'assistance d'un avocat fiscaliste est indispensable pour structurer efficacement la défense et éviter des erreurs de procédure qui pourraient priver le contribuable de ses garanties.",
    ],
  },
]

export function getAllArticles(): Article[] {
  return articles
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug)
}
