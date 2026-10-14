export interface Article {
  slug: string
  title: string
  excerpt: string
  date: string
  domain: 'affaires' | 'successions' | 'public' | 'construction' | 'minier'
  tags: string[]
  content: string[]
}

export const domainLabels: Record<string, string> = {
  affaires: 'Droit des affaires et fiscalité',
  successions: 'Droit des successions',
  public: 'Droit public des affaires',
  construction: 'Droit de la construction et droit immobilier',
  minier: 'Droit minier',
}

export const articles: Article[] = [
  {
    slug: 'creation-societe-choix-forme-juridique',
    title: "Créer une société : comment choisir la bonne forme juridique",
    excerpt: "SARL, SAS, SA, SNC… le choix de la forme juridique est l'une des premières décisions structurantes d'un projet d'entreprise. Il conditionne la fiscalité, la responsabilité des associés et les possibilités d'évolution.",
    date: '2026-09-10',
    domain: 'affaires',
    tags: ['création société', 'SARL', 'SAS', 'forme juridique', 'entreprise'],
    content: [
      "Le choix de la forme juridique d'une société est une décision fondamentale qui engage l'entrepreneur sur le long terme. Il détermine le régime de responsabilité des associés, la gouvernance, le régime fiscal applicable aux bénéfices et la protection du patrimoine personnel. Les formes les plus courantes en France sont la SARL (société à responsabilité limitée), la SAS (société par actions simplifiée), la SA (société anonyme) et, pour les projets plus simples, l'EURL ou la SASU (formes unipersonnelles de la SARL et de la SAS).",
      "La SARL offre un cadre réglementé et rassurant, avec une responsabilité limitée aux apports. Elle convient bien aux projets familiaux ou à deux associés dont la relation est stable. Son inconvénient principal est sa rigidité : les règles de fonctionnement sont imposées par la loi, avec peu de place pour l'adaptation aux besoins spécifiques. Le gérant majoritaire y est affilié au régime des travailleurs indépendants, ce qui réduit les charges sociales mais offre une protection moindre.",
      "La SAS est aujourd'hui la forme préférée des créateurs d'entreprise, notamment parce que ses statuts sont largement libres. Les associés peuvent organiser la gouvernance, les droits de vote, les conditions d'entrée et de sortie au capital selon leurs besoins. La SAS est particulièrement adaptée aux projets qui anticipent des levées de fonds ou l'entrée d'investisseurs. Son président est assimilé salarié : il bénéficie du régime général de la Sécurité sociale, avec des cotisations plus élevées mais une couverture plus complète.",
      "Sur le plan fiscal, les sociétés sont en principe soumises à l'impôt sur les sociétés (IS). Certaines structures peuvent opter pour l'impôt sur le revenu (IR), notamment les SARL de famille ou les SAS en phase de démarrage, sous conditions. L'IS présente l'avantage de n'imposer le dirigeant que sur les rémunérations effectivement perçues, permettant de lisser la charge fiscale personnelle. L'IR est parfois préférable en cas de déficit lors des premières années, qui peut alors s'imputer sur le revenu global du foyer.",
      "Le recours à un avocat spécialisé en droit des affaires avant la création est fortement recommandé. Il permet de choisir la structure adaptée au projet, de rédiger des statuts protecteurs, d'anticiper les conflits entre associés par des clauses appropriées (clause d'agrément, pacte d'associés, clause de sortie forcée) et d'optimiser le régime fiscal dès le départ. Un mauvais choix initial peut coûter cher à rectifier une fois l'activité lancée.",
    ],
  },
  {
    slug: 'controle-fiscal-entreprise-droits-garanties',
    title: "Contrôle fiscal des entreprises : droits et garanties du contribuable",
    excerpt: "La vérification de comptabilité est l'une des procédures de contrôle fiscal les plus redoutées par les entreprises. Elle obéit cependant à des règles strictes qui protègent les droits du contribuable à chaque étape.",
    date: '2026-08-20',
    domain: 'affaires',
    tags: ['contrôle fiscal', 'vérification comptabilité', 'redressement', 'entreprise'],
    content: [
      "La vérification de comptabilité est une procédure par laquelle l'administration fiscale examine sur place la comptabilité d'une entreprise pour s'assurer que ses déclarations fiscales sont exactes. Elle concerne toutes les entreprises, quelle que soit leur taille, et peut porter sur l'impôt sur les sociétés, la TVA, la taxe sur les salaires ou d'autres taxes. L'administration dispose en principe d'un délai de reprise de trois ans, porté à six ans en cas de manœuvres frauduleuses.",
      "La procédure débute par l'envoi d'un avis de vérification, qui doit parvenir à l'entreprise avant la première intervention du vérificateur. Cet avis mentionne les années vérifiées, les impôts contrôlés et l'obligation pour l'entreprise de se faire assister par un conseil. Ce droit à l'assistance est fondamental : l'expert-comptable ou l'avocat accompagne l'entreprise lors de toutes les réunions avec le vérificateur et peut intervenir pour contester les points de désaccord.",
      "Le vérificateur dispose d'un accès à tous les documents comptables, livres, registres, pièces justificatives. Il peut également demander communication de documents détenus par des tiers (fournisseurs, clients, banques) dans le cadre du droit de communication. La durée de la vérification sur place est limitée à trois mois pour les PME (chiffre d'affaires inférieur à certains seuils) ; au-delà de ce délai, le contribuable peut demander la clôture des opérations.",
      "À l'issue de la vérification, si l'administration envisage des redressements, elle notifie une proposition de rectification motivée. L'entreprise dispose de 30 jours (prorogeable à 60 jours) pour y répondre. Sa réponse argumentée peut conduire à une atténuation ou à l'abandon des redressements. En cas de désaccord persistant, des garanties supplémentaires existent : saisine du supérieur hiérarchique, de l'interlocuteur départemental, des commissions consultatives.",
      "Après épuisement des recours administratifs, l'entreprise peut saisir le tribunal administratif pour les impôts directs (IS, CFE, CVAE) ou le tribunal judiciaire pour la TVA. L'assistance d'un avocat fiscaliste est déterminante pour structurer la défense, identifier les irrégularités de procédure qui peuvent entraîner la nullité du redressement, et plaider efficacement devant les juridictions.",
    ],
  },
  {
    slug: 'reglement-succession-etapes-cles',
    title: "Règlement d'une succession : les étapes clés et les pièges à éviter",
    excerpt: "Le règlement d'une succession mobilise de nombreuses formalités dans des délais contraints. Connaître les étapes du processus et les droits de chaque héritier permet d'éviter les blocages et les conflits familiaux.",
    date: '2026-07-28',
    domain: 'successions',
    tags: ['succession', 'héritage', 'notaire', 'héritiers', 'partage'],
    content: [
      "Le règlement d'une succession commence par l'ouverture de celle-ci, qui intervient au décès. Il est conseillé de s'adresser rapidement à un notaire, lequel est obligatoire dès lors que la succession comprend des biens immobiliers, dépasse 5 000 euros ou nécessite l'établissement d'une attestation de propriété. Le notaire réunit les héritiers, identifie les biens et les dettes du défunt, et établit le bilan patrimonial de la succession.",
      "La dévolution successorale — c'est-à-dire la détermination des personnes appelées à hériter — obéit à des règles légales en l'absence de testament. Les héritiers sont répartis en ordres et degrés : les descendants (enfants, petits-enfants) sont prioritaires, suivis des ascendants et des collatéraux. Le conjoint survivant bénéficie d'une protection particulière. En présence d'un testament, la liberté du testateur est limitée par la réserve héréditaire, portion du patrimoine garantie aux enfants que le défunt ne peut pas librement transmettre à d'autres personnes.",
      "La déclaration de succession doit être déposée auprès des services fiscaux dans les six mois suivant le décès (un an si le décès est survenu à l'étranger). Les droits de succession sont calculés sur la part nette reçue par chaque héritier, après application des abattements légaux (100 000 euros par enfant en ligne directe, 15 932 euros entre frères et sœurs). Des exonérations existent pour le conjoint survivant et, sous conditions, pour certaines transmissions d'entreprises.",
      "Le partage des biens met fin à l'indivision qui existe entre les héritiers depuis le décès. Il peut être amiable, par accord de tous les héritiers devant notaire, ou judiciaire si un accord est impossible. Le partage judiciaire est long et coûteux ; il est souvent préférable de trouver un accord amiable, quitte à recourir à une médiation. En cas de désaccord sur l'estimation d'un bien, un expert peut être désigné pour l'évaluer.",
      "Les litiges successoraux sont fréquents, notamment les contestations de testament pour vice du consentement ou insanité d'esprit du testateur, les demandes de réduction de libéralités portant atteinte à la réserve, les actions en recel successoral contre un héritier ayant dissimulé des biens, et les désaccords sur le partage. L'assistance d'un avocat spécialisé en droit des successions permet de défendre efficacement les droits de chaque héritier et de trouver des solutions amiables avant d'engager des procédures longues.",
    ],
  },
  {
    slug: 'marches-publics-PME-comment-repondre',
    title: "Marchés publics : comment une PME peut répondre à un appel d'offres",
    excerpt: "L'accès aux marchés publics est souvent perçu comme réservé aux grandes entreprises. Pourtant, les règles du code de la commande publique comportent des dispositifs spécifiquement conçus pour favoriser l'accès des PME.",
    date: '2026-06-15',
    domain: 'public',
    tags: ['marchés publics', "appel d'offres", 'PME', 'commande publique', 'entreprise'],
    content: [
      "Le code de la commande publique organise la passation des contrats par lesquels les personnes publiques (État, collectivités, établissements publics) se procurent des travaux, fournitures ou services. Il existe plusieurs procédures selon le montant du marché : la procédure adaptée (MAPA) pour les marchés inférieurs aux seuils européens, et les procédures formalisées (appel d'offres ouvert, procédure concurrentielle avec négociation) au-dessus. Pour les marchés inférieurs à 40 000 euros, aucune procédure particulière n'est imposée.",
      "Les PME sont souvent dissuadées par la complexité apparente des dossiers de candidature. Pourtant, la réglementation impose aux acheteurs publics d'allotir les marchés autant que possible — c'est-à-dire de les diviser en lots — pour permettre à des entreprises plus petites de candidater sur des portions du marché correspondant à leurs capacités. Les PME peuvent également se grouper pour répondre collectivement à un marché qui dépasserait individuellement leurs capacités techniques ou financières.",
      "Le dossier de candidature comprend généralement deux parties : la candidature proprement dite (capacités professionnelles, techniques et financières de l'entreprise) et l'offre (proposition technique et prix). Les acheteurs publics ne peuvent exiger de capacités financières disproportionnées par rapport à l'objet du marché. Le chiffre d'affaires minimal exigé ne peut généralement pas dépasser deux fois la valeur estimée du marché annuel.",
      "En cas d'irrégularité dans la procédure de passation — vice de procédure, critères de sélection illicites, manque d'information, rejet injustifié — les candidats évincés disposent de recours rapides et efficaces. Le référé précontractuel permet de saisir le juge administratif avant la signature du contrat pour faire cesser l'irrégularité. Le référé contractuel permet de contester le contrat après sa signature, dans un délai de 31 jours. Ces recours nécessitent une réaction rapide et l'assistance d'un avocat spécialisé.",
      "Au-delà de la réponse aux appels d'offres, l'avocat spécialisé en droit public des affaires accompagne les entreprises dans la négociation et l'exécution des contrats publics, la gestion des modifications en cours d'exécution, les difficultés de paiement (intérêts moratoires, règlement amiable), et la résiliation. Il défend également les entreprises en cas de contentieux avec la personne publique devant le tribunal administratif.",
    ],
  },
  {
    slug: 'garantie-decennale-constructeurs-malfacons',
    title: "Garantie décennale : ce que doivent savoir les maîtres d'ouvrage en cas de malfaçons",
    excerpt: "La garantie décennale protège les propriétaires contre les vices de construction affectant la solidité de l'ouvrage ou le rendant impropre à sa destination. Mais sa mise en œuvre suit des règles précises qu'il faut connaître.",
    date: '2026-05-22',
    domain: 'construction',
    tags: ['garantie décennale', 'malfaçons', 'construction', 'responsabilité constructeur'],
    content: [
      "La garantie décennale est une garantie légale obligatoire qui s'impose à tout constructeur (entrepreneur, architecte, bureau d'études, promoteur) qui participe à la construction d'un ouvrage. Elle couvre les dommages compromettant la solidité de l'ouvrage ou le rendant impropre à l'usage auquel il est destiné, pendant dix ans à compter de la réception des travaux. La réception est le moment où le maître d'ouvrage déclare accepter l'ouvrage, avec ou sans réserves.",
      "La garantie décennale est présumée — le maître d'ouvrage n'a pas à prouver la faute du constructeur, seulement l'existence du désordre et son lien avec les travaux réalisés. Le constructeur ne peut s'exonérer qu'en prouvant une cause étrangère : la faute du maître d'ouvrage, le fait d'un tiers ou la force majeure. Cette présomption de responsabilité est d'ordre public : les clauses contractuelles limitant ou excluant la garantie décennale sont réputées non écrites.",
      "À côté de la garantie décennale, d'autres garanties coexistent. La garantie de parfait achèvement oblige l'entrepreneur à réparer tous les désordres signalés à la réception ou dans l'année qui suit. La garantie biennale (ou garantie de bon fonctionnement) couvre les éléments d'équipement dissociables de l'ouvrage (chaudière, volets, équipements sanitaires) pendant deux ans. Ces garanties sont distinctes de la responsabilité contractuelle de droit commun, qui peut s'appliquer aux dommages ne relevant pas de ces régimes spéciaux.",
      "Pour mettre en œuvre la garantie décennale, le maître d'ouvrage doit d'abord mettre en demeure le constructeur responsable de remédier aux désordres, par lettre recommandée avec accusé de réception. Si le constructeur ne réagit pas ou conteste sa responsabilité, il faut saisir le tribunal judiciaire. Il est souvent utile de demander en référé la désignation d'un expert judiciaire, qui établira l'origine et l'étendue des désordres, la responsabilité de chaque intervenant et le coût des travaux de reprise.",
      "La prescription de l'action en garantie décennale est de dix ans à compter de la réception. Ce délai est impératif : au-delà, l'action est irrecevable. L'assistance d'un avocat spécialisé est indispensable pour réunir les preuves nécessaires, identifier les constructeurs responsables, notamment dans les opérations faisant intervenir de nombreux corps de métier, et conduire efficacement la procédure, de l'expertise judiciaire jusqu'au jugement.",
    ],
  },
  {
    slug: 'droit-minier-afrique-ouest-permis-exploitation',
    title: "Droit minier en Afrique de l'Ouest : obtenir et sécuriser un permis d'exploitation",
    excerpt: "L'Afrique de l'Ouest dispose de ressources minières considérables. L'obtention d'un permis d'exploitation y obéit à des règles spécifiques qui combinent droit national, conventions internationales et pratiques locales.",
    date: '2026-04-18',
    domain: 'minier',
    tags: ['droit minier', 'Burkina Faso', "Afrique de l'Ouest", 'permis exploitation', 'ressources naturelles'],
    content: [
      "L'Afrique de l'Ouest concentre certaines des réserves minières les plus importantes du monde : or au Burkina Faso, au Mali et au Ghana, manganèse et fer en Guinée, phosphates au Sénégal. L'exploitation de ces ressources est soumise à des cadres juridiques nationaux, mais qui partagent des caractéristiques communes issues des recommandations de la CEDEAO et du Code minier communautaire de l'UEMOA. Le droit minier burkinabé, régi par le code minier de 2015 révisé en 2020, est l'un des plus structurés de la région.",
      "L'accès aux ressources minières se fait par l'attribution de titres miniers. La prospection est libre mais soumise à déclaration. La recherche nécessite un permis de recherche d'une durée de trois ans renouvelable deux fois. L'exploitation proprement dite requiert un permis d'exploitation (PE) ou, pour les petites mines, une autorisation d'exploitation semi-mécanisée (AESM) ou artisanale. Ces titres sont attribués par décret ou arrêté ministériel, après instruction du dossier par la direction des mines.",
      "Le dossier de demande de permis d'exploitation comprend un plan de travaux et d'investissement, une étude de faisabilité, une étude d'impact environnemental et social (EIES) validée par l'autorité environnementale, et un plan de gestion environnementale et sociale (PGES). Ces exigences environnementales se sont considérablement renforcées ces dernières années sous la pression des bailleurs de fonds internationaux et des communautés locales. L'étude d'impact et le plan de gestion doivent être réalisés par des bureaux agréés.",
      "La convention minière, négociée entre l'État et l'opérateur minier, est un document essentiel qui complète le code minier en fixant les conditions spécifiques d'exploitation : durée, surface, régime fiscal et douanier (exonérations, stabilisation des taux), obligations en matière de contenu local (emplois, fournisseurs locaux), engagements environnementaux et sociaux. Sa négociation est un exercice délicat qui requiert une expertise à la fois juridique, fiscale et technique.",
      "Les risques juridiques dans les projets miniers africains sont multiples : instabilité du cadre juridique, difficultés d'exécution des contrats, nationalisation ou révision unilatérale des conventions, conflits avec les communautés locales. La prévention de ces risques passe par une due diligence juridique approfondie avant toute acquisition de titre ou investissement, une rédaction rigoureuse des conventions et accords d'entreprise, et le recours à des mécanismes d'arbitrage international (CIRDI, CCI) pour les litiges avec les États.",
    ],
  },
]

export function getAllArticles(): Article[] {
  return articles
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug)
}
