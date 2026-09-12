export type Decision = { title: string; body: string };

/**
 * Una evidencia visual: captura, diagrama o clip del sistema funcionando.
 * `caption` es lo que hace que la imagen valga — sin pie de foto una captura
 * solo prueba que existió una pantalla, no qué hace.
 */
export type Shot = {
  src: string;
  width: number;
  height: number;
  /** true para vídeo (mp4/webm) en vez de imagen. */
  video?: boolean;
  en: { alt: string; caption: string };
  es: { alt: string; caption: string };
};

export type Metric = { value: string; label: string };

export type LocaleContent = {
  title: string;
  kind: string;
  tagline: string;
  summary: string;
  context: string;
  problem: string;
  decisions: Decision[];
  outcome: string[];
  metrics: Metric[];
};

export type Project = {
  slug: string;
  featured: boolean;
  year: string;
  repo?: string;
  demo?: string;
  stack: string[];
  /** Documento externo destacado (p. ej. una especificación); se muestra como botón en el case study. */
  doc?: { url: string; label: { en: string; es: string } };
  /** Evidencia. La primera se usa como portada en la tarjeta del listado;
   *  el resto se muestra plegado en el case study. */
  shots?: Shot[];
  /** Texto del botón que despliega el resto de la evidencia. */
  moreEvidenceLabel?: { en: string; es: string };
  accentTags: string[];
  en: LocaleContent;
  es: LocaleContent;
};

export const projects: Project[] = [
  /* ───────────────────────────── VERUM ───────────────────────────── */
  {
    slug: 'verum',
    featured: true,
    year: '2026',
    repo: 'https://github.com/JohanUV/Verum-EC',
    demo: 'https://verum-ec.onrender.com/',
    stack: ['Python', 'Flask', 'React', 'Vite', 'REST', 'PDF', 'RBAC'],
    shots: [
      {
        src: '/shots/verum-home.jpg',
        width: 1512,
        height: 800,
        en: {
          alt: 'Verum landing page with a sample verified profile and risk score',
          caption:
            'Verum, deployed and public. The landing shows the shape of a report: sources consulted, findings, and a 0\u2013100 risk score. The full search requires an account because it processes real personal data.',
        },
        es: {
          alt: 'Portada de Verum con un perfil verificado de ejemplo y su score de riesgo',
          caption:
            'Verum, desplegado y p\u00fablico. La portada muestra la forma de un informe: fuentes consultadas, hallazgos y un score de riesgo de 0 a 100. La b\u00fasqueda completa exige cuenta porque procesa datos personales reales.',
        },
      },
    ],
    accentTags: ['Data integration', 'OSINT', 'Compliance'],
    en: {
      title: 'Verum',
      kind: 'Pre-hire due diligence platform · Ecuador',
      tagline:
        'Before you hire someone or sign a contract, one search tells you whether there is anything you should know.',
      summary:
        'A screening platform for hiring and contracting decisions. You enter a national ID and get a consolidated report: judicial proceedings, tax standing, child-support obligations, traffic fines, international sanctions lists and academic credentials — nine sources, each integrated live, each with its own failure mode.',
      context:
        'A business owner about to hire someone, or a person about to contract a service, has no practical way to check who they are dealing with. The records are public, but they live across nine government portals, each with a different interface, a different anti-automation defence and a different data shape. There is no single API. Verum collapses that into one query and one verdict.',
      problem:
        'Every source fights back differently. Some expose clean JSON endpoints. Some are JSF applications behind image captchas. One sits behind Google reCAPTCHA v2 and additionally demands a data point the user is unlikely to have at hand. A system that pretends all nine behave the same way will quietly return wrong answers — which, in a background check, is the worst possible failure.',
      decisions: [
        {
          title: 'Relay the captcha instead of breaking it',
          body: 'For the JSF sources protected by image captchas, Verum opens the upstream session, surfaces the captcha image inside the app and lets the user solve it, then continues the authenticated session. No captcha is ever solved programmatically. This keeps the integration inside what the source permits, and it is the difference between a tool an organisation can actually deploy and one it cannot.',
        },
        {
          title: 'Be explicit about what cannot be automated',
          body: 'The social-registry source uses reCAPTCHA v2, which cannot be relayed, and requires the ID issue date. Rather than fake a result or silently drop the source, the UI degrades to assisted-manual: it copies the ID to the clipboard and opens the official portal. Every source carries a status — live API, captcha relay, or assisted — so the report never overstates its own coverage.',
        },
        {
          title: 'Design for the data-protection law, not around it',
          body: 'Ecuador\'s LOPDP governs this kind of processing. Verum ships role-based permissions, a full audit trail of who queried whom and when, and PDF exports stamped with a folio number and watermark so a report can be traced back to the query that produced it.',
        },
        {
          title: 'Rename the product on a trademark check',
          body: 'The project began as "Verifik" until a search showed an active company in the same sector operating under that name. It was renamed to Verum before any brand equity existed. Cheap to fix at that stage, expensive later.',
        },
      ],
      outcome: [
        'Nine sources integrated, each with an explicit reliability status surfaced in the report.',
        'Search by national ID or by name, with a risk score and traffic-light summary grouped by category.',
        'Role-based access control plus a queryable audit history, built for LOPDP compliance.',
        'Traceable PDF export with folio and watermark.',
      ],
      metrics: [
        { value: '9', label: 'data sources' },
        { value: '5', label: 'live API integrations' },
        { value: '2', label: 'captcha-relay flows' },
      ],
    },
    es: {
      title: 'Verum',
      kind: 'Plataforma de debida diligencia para contratación · Ecuador',
      tagline:
        'Antes de contratar a alguien o firmar un contrato, una sola búsqueda te dice si hay algo que deberías saber.',
      summary:
        'Plataforma de verificación para decisiones de contratación. Ingresas una cédula y obtienes un informe consolidado: procesos judiciales, situación tributaria, pensiones alimenticias, multas de tránsito, listas de sanción internacionales y títulos académicos. Nueve fuentes, cada una integrada en vivo, cada una con su propio modo de fallo.',
      context:
        'Un negocio a punto de contratar a alguien, o una persona a punto de contratar un servicio, no tiene forma práctica de saber con quién está tratando. Los registros son públicos, pero viven en nueve portales estatales distintos, cada uno con su interfaz, su defensa contra automatización y su formato de datos. No existe una API única. Verum reduce todo eso a una consulta y un veredicto.',
      problem:
        'Cada fuente se defiende de forma distinta. Unas exponen endpoints JSON limpios. Otras son aplicaciones JSF detrás de captchas de imagen. Una usa reCAPTCHA v2 de Google y además exige un dato que el usuario rara vez tiene a mano. Un sistema que finja que las nueve se comportan igual va a devolver respuestas incorrectas en silencio — que en una verificación de antecedentes es el peor fallo posible.',
      decisions: [
        {
          title: 'Hacer relay del captcha en vez de romperlo',
          body: 'Para las fuentes JSF protegidas con captcha de imagen, Verum abre la sesión, muestra la imagen del captcha dentro de la app, deja que el usuario la resuelva y continúa con la sesión autenticada. Ningún captcha se resuelve programáticamente. Esto mantiene la integración dentro de lo que la fuente permite, y es la diferencia entre una herramienta que una organización puede desplegar y una que no.',
        },
        {
          title: 'Decir explícitamente qué no se puede automatizar',
          body: 'El Registro Social usa reCAPTCHA v2, que no es relayable, y exige la fecha de expedición de la cédula. En vez de inventar un resultado o eliminar la fuente en silencio, la interfaz degrada a manual asistido: copia la cédula y abre el portal oficial. Cada fuente lleva un estado —API en vivo, relay de captcha o asistida— para que el informe nunca exagere su propia cobertura.',
        },
        {
          title: 'Diseñar según la LOPDP, no esquivándola',
          body: 'La LOPDP regula este tipo de tratamiento de datos. Verum incluye permisos por rol, historial de auditoría completo de quién consultó a quién y cuándo, y exportación a PDF con folio y marca de agua para que un informe pueda rastrearse hasta la consulta que lo generó.',
        },
        {
          title: 'Renombrar el producto tras una verificación de marca',
          body: 'El proyecto empezó como «Verifik» hasta que una búsqueda mostró una empresa activa del mismo sector operando con ese nombre. Se renombró a Verum antes de que existiera cualquier valor de marca. Barato de corregir en ese momento, caro después.',
        },
      ],
      outcome: [
        'Nueve fuentes integradas, cada una con su estado de fiabilidad visible en el informe.',
        'Búsqueda por cédula o por nombre, con score de riesgo y semáforo agrupado por categoría.',
        'Control de acceso por roles e historial de auditoría consultable, pensado para la LOPDP.',
        'Exportación a PDF trazable, con folio y marca de agua.',
      ],
      metrics: [
        { value: '9', label: 'fuentes de datos' },
        { value: '5', label: 'integraciones API en vivo' },
        { value: '2', label: 'flujos de relay de captcha' },
      ],
    },
  },

  /* ─────────────────────────── JOB RADAR ─────────────────────────── */
  {
    slug: 'job-radar',
    featured: true,
    year: '2026',
    repo: 'https://github.com/JohanUV/Job-Radar',
    demo: 'https://johanuv.github.io/Job-Radar/',
    moreEvidenceLabel: { en: 'Expand the n8n orchestration', es: 'Desplegar la orquestación en n8n' },
    stack: ['Django', 'DRF', 'PostgreSQL', 'n8n', 'React', 'Docker', 'Gemini'],
    shots: [
      {
        src: '/shots/job-radar-tablero.png',
        width: 1014,
        height: 690,
        en: {
          alt: 'Job Radar kanban board with vacancies in five stages',
          caption:
            'The board, live at johanuv.github.io/Job-Radar. Every card carries its source \u2014 remotive, arbeitnow \u2014 so a listing can always be traced back to where it came from.',
        },
        es: {
          alt: 'Tablero kanban de Job Radar con vacantes en cinco etapas',
          caption:
            'El tablero, en vivo en johanuv.github.io/Job-Radar. Cada tarjeta lleva su fuente \u2014remotive, arbeitnow\u2014 para que una oferta siempre se pueda rastrear hasta su origen.',
        },
      },
      {
        src: '/shots/job-radar-n8n-radar.png',
        width: 1380,
        height: 600,
        en: {
          alt: 'n8n execution of the radar-remotive workflow, every node green, succeeded in 1m 20s',
          caption:
            'The collector, as it ran in production: three sources fetched in parallel (18 + 9 + 20 items), merged into 47 vacancies and posted to the API in one call. The first two nodes wake the API up and wait for it \u2014 the hosting plan puts it to sleep between runs.',
        },
        es: {
          alt: 'Ejecuci\u00f3n en n8n del flujo radar-remotive, todos los nodos en verde, completada en 1 min 20 s',
          caption:
            'El recolector tal como corri\u00f3 en producci\u00f3n: tres fuentes en paralelo (18 + 9 + 20 \u00edtems), fusionadas en 47 vacantes y enviadas a la API en una sola llamada. Los dos primeros nodos despiertan la API y esperan a que arranque: el plan de hosting la duerme entre corridas.',
        },
      },
      {
        src: '/shots/job-radar-n8n-evaluador.png',
        width: 1440,
        height: 220,
        en: {
          alt: 'n8n canvas of the Evaluador-CV workflow',
          caption:
            'The scoring pipeline. It pulls only the vacancies not yet evaluated for the profile, builds one prompt per vacancy, calls Gemini, parses the structured answer and saves score, reasons and model id back through the API.',
        },
        es: {
          alt: 'Canvas de n8n del flujo Evaluador-CV',
          caption:
            'El pipeline de puntuaci\u00f3n. Pide solo las vacantes a\u00fan no evaluadas para el perfil, arma un prompt por vacante, llama a Gemini, parsea la respuesta estructurada y guarda score, razones y modelo de vuelta por la API.',
        },
      },
      {
        src: '/shots/job-radar-n8n-bot.png',
        width: 1500,
        height: 520,
        en: {
          alt: 'n8n canvas of the Telegram bot workflow with a six-way switch',
          caption:
            'The Telegram bot. A Code node classifies the intent and a Switch routes it \u2014 help, best matches, search, CV upload as PDF, cover-letter draft, fallback \u2014 with every branch converging on a single responder node.',
        },
        es: {
          alt: 'Canvas de n8n del flujo del bot de Telegram con un switch de seis salidas',
          caption:
            'El bot de Telegram. Un nodo Code clasifica la intenci\u00f3n y un Switch la enruta \u2014ayuda, mejores coincidencias, b\u00fasqueda, CV en PDF, borrador de carta, fallback\u2014 y todas las ramas convergen en un \u00fanico nodo de respuesta.',
        },
      },
    ],
    accentTags: ['Data pipeline', 'Automation', 'LLM'],
    en: {
      title: 'Job Radar',
      kind: 'Automated job-intelligence pipeline',
      tagline:
        'A scheduled pipeline that collects vacancies from three sources, guarantees zero duplicates, and scores each one against your CV with an LLM.',
      summary:
        'Every six hours the system queries three job APIs in parallel, normalizes them into a common schema, rejects duplicates at the database level, and notifies only what is genuinely new. A second pipeline then scores each unseen vacancy 0–100 against the user\'s CV and stores the reasoning behind the score.',
      context:
        'Job hunting is a data problem disguised as a motivation problem. The listings are public and machine-readable; what is missing is deduplication, relevance ranking and a system that tells you when something new appears instead of asking you to go look.',
      problem:
        'Polling APIs on a schedule creates two failure modes that compound. Re-running the collector must never create duplicate rows, and it must never re-notify about a vacancy the user has already seen — otherwise the notifications become noise and get muted, which kills the entire product. The same applies to the LLM stage: re-scoring vacancies already scored burns API quota for nothing.',
      decisions: [
        {
          title: 'Enforce idempotency in the database, not in application code',
          body: 'Each vacancy carries a SHA-256 hash of its URL under a unique constraint. Deduplication is therefore a property of the schema, not of a code path that could be bypassed. Re-running the pipeline is structurally incapable of creating duplicates, no matter how many times or how concurrently it runs.',
        },
        {
          title: 'Split orchestration from business rules',
          body: 'n8n owns scheduling, parallel fetching and retries. Django owns validation, deduplication and persistence. Each source gets its own normalizer node that maps provider fields into the shared schema, so adding a fourth source is a workflow change and touches no backend code.',
        },
        {
          title: 'Make the LLM stage pull-based and resumable',
          body: 'The scoring pipeline asks the API for vacancies not yet evaluated for this profile, rather than being handed a batch. Combined with a unique constraint on (vacancy, profile) and an upsert on write, the stage can crash, be re-run, or run concurrently without double-billing the model or corrupting scores.',
        },
        {
          title: 'Design around a host that sleeps',
          body: 'The API runs on a free tier that stops the service after fifteen minutes idle and answers 503 while it boots, so a long timeout alone was useless. Each scheduled workflow now opens with a wake-up call that is allowed to fail, a sixty-second wait, and retries on every call to the API; a fourth workflow pings the service every ten minutes during the day so the public board opens instantly, sized to stay inside the monthly free hours.',
        },
        {
          title: 'Store the reasoning, not just the score',
          body: 'Every evaluation persists the 0–100 score, the list of reasons behind it, and the model identifier that produced it. A bare number is unauditable and unimprovable; keeping the reasons and the model version means a bad prompt can be diagnosed after the fact and results can be compared across model changes.',
        },
      ],
      outcome: [
        'Running in production with nothing on my machine: API on Render, PostgreSQL on Neon, board on GitHub Pages, workflows on a hosted n8n.',
        'Three sources — Remotive, Arbeitnow and RemoteOK — collected every six hours, merged into one normalized schema.',
        'Duplicate rows made structurally impossible by a unique SHA-256 URL hash.',
        'Telegram notifications fire only for genuinely new vacancies.',
        'CV-to-vacancy affinity scoring with Gemini, with reasons and model version persisted per evaluation.',
        'Application tracking as an explicit state machine, with every transition written to an audit history.',
      ],
      metrics: [
        { value: '3', label: 'job sources' },
        { value: '6h', label: 'collection cadence' },
        { value: '0', label: 'duplicates, by constraint' },
      ],
    },
    es: {
      title: 'Job Radar',
      kind: 'Pipeline automatizado de inteligencia de empleo',
      tagline:
        'Pipeline programada que recolecta vacantes de tres fuentes, garantiza cero duplicados y puntúa cada una contra tu CV con un LLM.',
      summary:
        'Cada seis horas el sistema consulta tres APIs de empleo en paralelo, las normaliza a un esquema común, rechaza duplicados a nivel de base de datos y notifica solo lo genuinamente nuevo. Una segunda pipeline puntúa cada vacante no vista de 0 a 100 contra el CV del usuario y guarda el razonamiento detrás del puntaje.',
      context:
        'Buscar trabajo es un problema de datos disfrazado de problema de motivación. Las ofertas son públicas y legibles por máquina; lo que falta es deduplicación, ranking de relevancia y un sistema que avise cuando aparece algo nuevo en vez de pedirte que vayas a mirar.',
      problem:
        'Consultar APIs de forma programada genera dos modos de fallo que se acumulan. Reejecutar el recolector nunca debe crear filas duplicadas, y nunca debe volver a notificar una vacante que el usuario ya vio — si no, las notificaciones se vuelven ruido, el usuario las silencia y el producto muere. Lo mismo aplica a la etapa del LLM: reevaluar vacantes ya evaluadas quema cuota de API para nada.',
      decisions: [
        {
          title: 'Forzar idempotencia en la base de datos, no en el código',
          body: 'Cada vacante lleva un hash SHA-256 de su URL bajo una restricción de unicidad. La deduplicación es entonces una propiedad del esquema, no de una ruta de código que se pueda saltar. Reejecutar la pipeline es estructuralmente incapaz de crear duplicados, sin importar cuántas veces ni con cuánta concurrencia corra.',
        },
        {
          title: 'Separar la orquestación de las reglas de negocio',
          body: 'n8n se encarga de la programación, la descarga en paralelo y los reintentos. Django se encarga de la validación, la deduplicación y la persistencia. Cada fuente tiene su propio nodo normalizador que mapea los campos del proveedor al esquema compartido, así que añadir una cuarta fuente es un cambio de workflow y no toca ni una línea del backend.',
        },
        {
          title: 'Hacer la etapa del LLM pull-based y reanudable',
          body: 'La pipeline de evaluación le pide a la API las vacantes aún no evaluadas para ese perfil, en vez de recibir un lote. Combinado con una restricción de unicidad en (vacante, perfil) y un upsert en la escritura, la etapa puede caerse, reejecutarse o correr en concurrencia sin cobrar dos veces el modelo ni corromper los puntajes.',
        },
        {
          title: 'Diseñar para un hosting que se duerme',
          body: 'La API corre en un plan gratuito que apaga el servicio tras quince minutos sin tráfico y responde 503 mientras arranca, así que un timeout largo por sí solo no servía. Cada flujo programado empieza ahora con una llamada de despertar que puede fallar, una espera de sesenta segundos y reintentos en cada llamada a la API; un cuarto flujo hace ping cada diez minutos durante el día para que el tablero público abra al instante, dimensionado para no salirse de las horas gratuitas del mes.',
        },
        {
          title: 'Guardar el razonamiento, no solo el puntaje',
          body: 'Cada evaluación persiste el puntaje 0–100, la lista de razones detrás y el identificador del modelo que lo produjo. Un número suelto no es auditable ni mejorable; conservar las razones y la versión del modelo permite diagnosticar un prompt malo después del hecho y comparar resultados entre cambios de modelo.',
        },
      ],
      outcome: [
        'En producción sin nada en mi máquina: API en Render, PostgreSQL en Neon, tablero en GitHub Pages, flujos en un n8n hospedado.',
        'Tres fuentes —Remotive, Arbeitnow y RemoteOK— recolectadas cada seis horas y unificadas en un esquema normalizado.',
        'Filas duplicadas estructuralmente imposibles gracias al hash SHA-256 único de la URL.',
        'Notificaciones de Telegram solo para vacantes genuinamente nuevas.',
        'Evaluación de afinidad CV↔vacante con Gemini, guardando razones y versión del modelo por evaluación.',
        'Seguimiento de postulaciones como máquina de estados explícita, con cada transición escrita en un historial auditable.',
      ],
      metrics: [
        { value: '3', label: 'fuentes de empleo' },
        { value: '6h', label: 'cadencia de recolección' },
        { value: '0', label: 'duplicados, por restricción' },
      ],
    },
  },

  /* ────────────────────── JUDICIAL ANALYSIS ─────────────────────── */
  {
    slug: 'judicial-analysis',
    featured: true,
    year: '2026',
    repo: 'https://github.com/JohanUV/Sistema-Analisis-Judicial',
    demo: 'https://judicial-analisis.onrender.com/',
    doc: {
      url: 'https://github.com/JohanUV/Sistema-Analisis-Judicial/blob/main/docs/API-SATJE.md',
      label: { en: 'API spec', es: 'Especificación de la API' },
    },
    stack: ['Python', 'HTTP', 'Traffic analysis', 'API specification', 'Data analysis', 'LaTeX'],
    accentTags: ['Reverse engineering', 'Recon', 'Public data'],
    shots: [
      {
        src: '/shots/judicial-home.jpg',
        width: 1456,
        height: 829,
        en: {
          alt: 'Public edition of the judicial analysis dashboard, live on Render',
          caption:
            'The public edition, live on Render. It shows only the open data of the Judicial Observatory (CC-BY-4.0): case movement by chamber, resolution rate and dismissals by province. The by-national-ID lookup against the court service runs only in the local install \u2014 mass access to third parties\u2019 records is a legal question before a technical one, so the reverse-engineered API is documented rather than exposed as a tool.',
        },
        es: {
          alt: 'Edición pública del panel de análisis judicial, en vivo en Render',
          caption:
            'La edición pública, en vivo en Render. Muestra solo los datos abiertos del Observatorio Judicial (CC-BY-4.0): movimiento de causas por sala, tasa de resolución y destituciones por provincia. La consulta por cédula contra el servicio judicial corre solo en la instalación local \u2014 el acceso masivo a registros de terceros es una cuestión legal antes que técnica, así que la API deducida por ingeniería inversa se documenta en vez de exponerse como herramienta.',
        },
      },
    ],
    en: {
      title: 'Judicial Records Analysis',
      kind: 'Reverse-engineered access to a national court system',
      tagline:
        'Mapping the undocumented API behind Ecuador\'s judicial records portal, then building analysis on top of it.',
      summary:
        'Ecuador\'s Judiciary Council publishes court proceedings through a public web portal with no documented API. This project reconstructs the underlying service contract from observed traffic and turns an interface built for one-record-at-a-time lookups into something queryable and analyzable.',
      context:
        'The data is legally public. The access path is not designed for it. This is the recurring shape of open-data work — and the same shape as reconnaissance against a web application, which is why it is the project closest to where I am heading professionally.',
      problem:
        'The portal exposes no documentation, no schema, and no stable contract. Everything about how to talk to the service — endpoints, payload structure, required headers, pagination behaviour — had to be recovered from observing the application, then verified to be reproducible rather than incidental.',
      decisions: [
        {
          title: 'Reconstruct the contract from observed traffic',
          body: 'Two endpoints were identified and documented: one that searches proceedings by ID, name, case number or province, and one that returns the matching count. The full payload shape was mapped, including the nested actor and defendant objects and the pagination fields.',
        },
        {
          title: 'Identify what the server actually validates',
          body: 'The service rejects requests that do not carry the expected Origin and Referer headers — it validates provenance rather than identity. Notably, the request body carries a recaptcha field that the server accepts as a constant string, meaning the captcha is decorative at the API layer. Documenting that distinction is the entire finding: the control exists in the UI and not in the service.',
        },
        {
          title: 'Publish the analysis, not the harvester',
          body: 'The public deployment serves only the open-data dashboards and the dismissals map; the by-ID, bulk and ID-generation routes return 403 online and run only in a local install. A service that pulls arbitrary people\u2019s records at scale is personal-data processing without a legal basis, and the client-side-only captcha means the operator has no real barrier \u2014 so the finding is shipped as a written spec, not as a live scraper anyone can point at citizens.',
        },
        {
          title: 'Write it down as a specification',
          body: 'The result is documented as an API reference — endpoints, methods, payloads, headers, response shapes — rather than left implicit in scraper code. Recon that is not written down is not reusable, and a mapped attack surface is only useful to a team if it survives outside the head of the person who mapped it.',
        },
      ],
      outcome: [
        'Public edition deployed on Render with the open-data dashboards; the court-lookup routes are disabled online and documented instead.',
        'Two undocumented endpoints fully mapped and documented as a reusable API reference.',
        'Header-based provenance validation identified and characterized.',
        'A client-side-only captcha control documented at the service layer.',
        'Court proceedings made queryable and analyzable at scale rather than one lookup at a time.',
      ],
      metrics: [
        { value: '2', label: 'endpoints mapped' },
        { value: '1', label: 'client-side-only control found' },
      ],
    },
    es: {
      title: 'Análisis de Procesos Judiciales',
      kind: 'Ingeniería inversa de acceso a un sistema judicial nacional',
      tagline:
        'Mapear la API no documentada detrás del portal judicial de Ecuador y construir análisis encima.',
      summary:
        'El Consejo de la Judicatura publica los procesos judiciales a través de un portal web sin API documentada. Este proyecto reconstruye el contrato del servicio a partir del tráfico observado y convierte una interfaz pensada para consultar un registro a la vez en algo consultable y analizable.',
      context:
        'El dato es legalmente público. La vía de acceso no está diseñada para eso. Esta es la forma recurrente del trabajo con datos abiertos — y la misma forma que tiene el reconocimiento contra una aplicación web, que es por lo que es el proyecto más cercano a donde voy profesionalmente.',
      problem:
        'El portal no expone documentación, ni esquema, ni contrato estable. Todo sobre cómo hablarle al servicio —endpoints, estructura del payload, headers requeridos, comportamiento de paginación— tuvo que recuperarse observando la aplicación y luego verificarse como reproducible y no accidental.',
      decisions: [
        {
          title: 'Reconstruir el contrato a partir del tráfico observado',
          body: 'Se identificaron y documentaron dos endpoints: uno que busca causas por cédula, nombre, número de causa o provincia, y otro que devuelve el conteo de coincidencias. Se mapeó la forma completa del payload, incluidos los objetos anidados de actor y demandado y los campos de paginación.',
        },
        {
          title: 'Identificar qué valida realmente el servidor',
          body: 'El servicio rechaza peticiones que no llevan los headers Origin y Referer esperados — valida procedencia, no identidad. Y de forma notable, el cuerpo de la petición lleva un campo recaptcha que el servidor acepta como una cadena constante, o sea que el captcha es decorativo en la capa de API. Documentar esa distinción es el hallazgo completo: el control existe en la interfaz y no en el servicio.',
        },
        {
          title: 'Publicar el análisis, no el recolector',
          body: 'El despliegue público sirve solo los paneles de datos abiertos y el mapa de destituciones; las rutas por cédula, masiva y de generación de cédulas devuelven 403 en internet y solo corren en una instalación local. Un servicio que extrae registros de cualquier persona a escala es tratamiento de datos personales sin base legal, y el captcha solo del lado cliente significa que el operador no tiene barrera real \u2014 así que el hallazgo se entrega como especificación escrita, no como un scraper en vivo que alguien pueda apuntar contra la ciudadanía.',
        },
        {
          title: 'Escribirlo como especificación',
          body: 'El resultado está documentado como referencia de API —endpoints, métodos, payloads, headers, formas de respuesta— en vez de quedar implícito dentro del código de un scraper. El reconocimiento que no se escribe no es reutilizable, y una superficie de ataque mapeada solo le sirve a un equipo si sobrevive fuera de la cabeza de quien la mapeó.',
        },
      ],
      outcome: [
        'Edición pública desplegada en Render con los paneles de datos abiertos; las rutas de consulta judicial quedan deshabilitadas en línea y documentadas en su lugar.',
        'Dos endpoints no documentados mapeados por completo y documentados como referencia de API reutilizable.',
        'Validación de procedencia basada en headers identificada y caracterizada.',
        'Un control de captcha solo del lado cliente documentado en la capa de servicio.',
        'Procesos judiciales consultables y analizables a escala, no de uno en uno.',
      ],
      metrics: [
        { value: '2', label: 'endpoints mapeados' },
        { value: '1', label: 'control solo del lado cliente' },
      ],
    },
  },

  /* ──────────────────── FACE DETECTION PIPELINE ──────────────────── */
  {
    slug: 'face-detection-pipeline',
    featured: false,
    year: '2026',
    repo: 'https://github.com/JohanUV/Pipeline-para-deteccion-de-rostros',
    stack: ['Python', 'OpenCV', 'threading', 'Tkinter', 'NumPy', 'matplotlib'],
    accentTags: ['Concurrency', 'Computer vision'],
    en: {
      title: 'Parallel Face-Detection Pipeline',
      kind: 'Parallel computing coursework · ESPE',
      tagline:
        'A four-stage threaded pipeline for face detection that measures its own speedup against the sequential baseline.',
      summary:
        'A desktop application that detects faces in real-time camera input and in image batches. The batch path runs a four-stage parallel pipeline and reports measured speedup and efficiency against the sequential implementation of the same work.',
      context:
        'Built for the Parallel Computing course at ESPE. The interesting part was never the face detection — it was demonstrating that the parallel version is actually faster, and by how much.',
      problem:
        'A naive threaded implementation can consume unbounded memory when one stage is slower than the one feeding it. Without back-pressure, a fast reader stage will queue images faster than the detector can consume them until the process runs out of memory.',
      decisions: [
        {
          title: 'Bounded queues for back-pressure',
          body: 'Each of the four stages — read, preprocess, Haar detection, output — runs in its own thread, connected by bounded queues. When a downstream stage falls behind, the bound blocks its producer instead of letting the queue grow without limit. Synchronization and memory safety come from the same mechanism.',
        },
        {
          title: 'Measure, do not assume',
          body: 'The application computes speedup, efficiency and percentage improvement against a sequential run of identical work. Claiming a parallel implementation is faster without measuring it is the most common mistake in this kind of project.',
        },
      ],
      outcome: [
        'Four-stage threaded pipeline with bounded queues providing back-pressure.',
        'Real-time camera detection plus batch processing from files or folders.',
        'Live speedup and efficiency metrics with comparison charts.',
        'Desktop GUI with thumbnail gallery and live statistics.',
      ],
      metrics: [
        { value: '4', label: 'pipeline stages' },
        { value: '4', label: 'worker threads' },
      ],
    },
    es: {
      title: 'Pipeline Paralela de Detección de Rostros',
      kind: 'Proyecto de Computación Paralela · ESPE',
      tagline:
        'Pipeline de cuatro etapas con hilos para detección de rostros que mide su propio speedup contra la versión secuencial.',
      summary:
        'Aplicación de escritorio que detecta rostros en tiempo real desde la cámara y en lotes de imágenes. La ruta por lotes ejecuta una pipeline paralela de cuatro etapas y reporta speedup y eficiencia medidos contra la implementación secuencial del mismo trabajo.',
      context:
        'Construido para la materia de Computación Paralela en la ESPE. Lo interesante nunca fue la detección de rostros — fue demostrar que la versión paralela es realmente más rápida, y cuánto.',
      problem:
        'Una implementación ingenua con hilos puede consumir memoria sin límite cuando una etapa es más lenta que la que la alimenta. Sin back-pressure, una etapa de lectura rápida encola imágenes más rápido de lo que el detector puede consumirlas, hasta agotar la memoria del proceso.',
      decisions: [
        {
          title: 'Colas acotadas para back-pressure',
          body: 'Cada una de las cuatro etapas —lectura, preprocesamiento, detección Haar y salida— corre en su propio hilo, conectadas por colas acotadas. Cuando una etapa se retrasa, el límite bloquea a su productor en vez de dejar crecer la cola sin control. La sincronización y la seguridad de memoria salen del mismo mecanismo.',
        },
        {
          title: 'Medir, no suponer',
          body: 'La aplicación calcula speedup, eficiencia y mejora porcentual contra una ejecución secuencial del mismo trabajo. Afirmar que una implementación paralela es más rápida sin medirlo es el error más común en este tipo de proyecto.',
        },
      ],
      outcome: [
        'Pipeline de cuatro etapas con hilos y colas acotadas que aportan back-pressure.',
        'Detección en tiempo real por cámara más procesamiento por lotes desde archivos o carpetas.',
        'Métricas de speedup y eficiencia en vivo con gráficos comparativos.',
        'Interfaz de escritorio con galería de miniaturas y estadísticas en vivo.',
      ],
      metrics: [
        { value: '4', label: 'etapas de pipeline' },
        { value: '4', label: 'hilos de trabajo' },
      ],
    },
  },

  /* ───────────────────────────  DATAPATH  ─────────────────────────── */
  {
    slug: 'datapath',
    featured: false,
    year: '2026',
    repo: 'https://github.com/JohanUV/AppData',
    stack: ['Electron', 'Next.js', 'React', 'TypeScript', 'Tailwind', 'SQLite', 'Drizzle'],
    accentTags: ['Desktop', 'Local-first'],
    en: {
      title: 'DataPath',
      kind: 'Local-first desktop learning app · in progress',
      tagline:
        'A gamified desktop app for learning data engineering, built local-first with an embedded database and a provider-agnostic AI tutor.',
      summary:
        'A cross-platform desktop application that teaches data engineering from scratch. Everything runs locally: progress, content and state live in an embedded SQLite database, so the app works with no account and no network.',
      context:
        'An in-progress project used as a deliberate exercise in a modern typed desktop stack — Electron shell, Next.js static export as the renderer, TypeScript in strict mode throughout.',
      problem:
        'AI-backed learning tools usually hard-wire themselves to one model provider, which makes them fragile to pricing changes and impossible to run offline.',
      decisions: [
        {
          title: 'Provider-agnostic AI layer',
          body: 'The tutor is written against an OpenAI-compatible interface so the underlying provider — Cerebras, Groq, Gemini, OpenRouter — is a configuration value rather than a rewrite.',
        },
        {
          title: 'Local-first persistence',
          body: 'SQLite with Drizzle ORM keeps all state on the user\'s machine. No account, no sync, no server to keep running.',
        },
      ],
      outcome: [
        'Electron shell with a Next.js static-export renderer, TypeScript in strict mode.',
        'Packaged installers for Windows, macOS and Linux via electron-builder.',
        'Internationalization planned for Spanish, English and Portuguese.',
      ],
      metrics: [
        { value: '3', label: 'target platforms' },
        { value: 'strict', label: 'TypeScript mode' },
      ],
    },
    es: {
      title: 'DataPath',
      kind: 'App de escritorio local-first · en desarrollo',
      tagline:
        'App de escritorio gamificada para aprender data engineering, local-first, con base de datos embebida y tutor de IA agnóstico al proveedor.',
      summary:
        'Aplicación de escritorio multiplataforma que enseña ingeniería de datos desde cero. Todo corre localmente: progreso, contenido y estado viven en una base SQLite embebida, así que la app funciona sin cuenta y sin red.',
      context:
        'Proyecto en curso usado como ejercicio deliberado sobre un stack de escritorio moderno y tipado — shell de Electron, exportación estática de Next.js como renderer, TypeScript en modo strict de punta a punta.',
      problem:
        'Las herramientas de aprendizaje con IA suelen quedar atadas a un solo proveedor de modelos, lo que las vuelve frágiles ante cambios de precio e imposibles de usar sin conexión.',
      decisions: [
        {
          title: 'Capa de IA agnóstica al proveedor',
          body: 'El tutor está escrito contra una interfaz compatible con OpenAI, de modo que el proveedor —Cerebras, Groq, Gemini, OpenRouter— es un valor de configuración y no una reescritura.',
        },
        {
          title: 'Persistencia local-first',
          body: 'SQLite con Drizzle ORM mantiene todo el estado en la máquina del usuario. Sin cuenta, sin sincronización, sin servidor que mantener encendido.',
        },
      ],
      outcome: [
        'Shell de Electron con renderer de exportación estática de Next.js y TypeScript en modo strict.',
        'Instaladores empaquetados para Windows, macOS y Linux con electron-builder.',
        'Internacionalización planificada para español, inglés y portugués.',
      ],
      metrics: [
        { value: '3', label: 'plataformas objetivo' },
        { value: 'strict', label: 'modo de TypeScript' },
      ],
    },
  },

  /* ─────────────────────── VOICE ASSISTANT ───────────────────────── */
  {
    slug: 'voice-assistant',
    featured: false,
    year: '2026',
    repo: 'https://github.com/JohanUV/alexa-skill-ollama-',
    stack: ['Python', 'Alexa Skills Kit', 'Terraform', 'LocalStack', 'Ollama', 'OpenAI'],
    accentTags: ['Infrastructure', 'LLM'],
    en: {
      title: 'Voice Assistant with Swappable LLM',
      kind: 'Alexa skill with cloud and fully-local backends',
      tagline:
        'One voice skill, two interchangeable inference backends: a hosted model in production, a local model for development.',
      summary:
        'An Alexa skill that answers spoken questions through an LLM. The same skill runs against a hosted model or against a fully local one, with the entire local path reproducible from infrastructure code.',
      context:
        'Built to answer a specific question: can you develop and test a cloud voice skill without depending on the cloud, and without paying per token while iterating?',
      problem:
        'Developing against a hosted model means every test iteration costs money and requires connectivity, and testing a Lambda-backed skill normally means deploying to AWS for every change.',
      decisions: [
        {
          title: 'Two backends behind one interface',
          body: 'The skill targets a hosted model for production responses and a locally-served model for development. Switching between them is configuration, not a code change.',
        },
        {
          title: 'Reproducible local cloud',
          body: 'Terraform provisions the Lambda against LocalStack, so the full request path can be exercised on the development machine without touching a real AWS account.',
        },
      ],
      outcome: [
        'Working Alexa skill with a documented request path from voice input to model response.',
        'Local development stack: Terraform plus LocalStack plus a locally-served model.',
        'Zero inference cost and no connectivity requirement while iterating.',
      ],
      metrics: [
        { value: '2', label: 'interchangeable backends' },
        { value: '0', label: 'AWS cost in development' },
      ],
    },
    es: {
      title: 'Asistente de Voz con LLM Intercambiable',
      kind: 'Skill de Alexa con backends en la nube y 100% local',
      tagline:
        'Una skill de voz, dos backends de inferencia intercambiables: modelo alojado en producción, modelo local en desarrollo.',
      summary:
        'Skill de Alexa que responde preguntas habladas mediante un LLM. La misma skill corre contra un modelo alojado o contra uno totalmente local, con toda la ruta local reproducible desde código de infraestructura.',
      context:
        'Construido para responder una pregunta concreta: ¿se puede desarrollar y probar una skill de voz en la nube sin depender de la nube, y sin pagar por token mientras se itera?',
      problem:
        'Desarrollar contra un modelo alojado hace que cada iteración de prueba cueste dinero y exija conectividad, y probar una skill respaldada por Lambda normalmente implica desplegar a AWS en cada cambio.',
      decisions: [
        {
          title: 'Dos backends detrás de una interfaz',
          body: 'La skill apunta a un modelo alojado para las respuestas de producción y a un modelo servido localmente para desarrollo. Cambiar entre ellos es configuración, no un cambio de código.',
        },
        {
          title: 'Nube local reproducible',
          body: 'Terraform aprovisiona la Lambda contra LocalStack, así que toda la ruta de petición se puede ejercitar en la máquina de desarrollo sin tocar una cuenta real de AWS.',
        },
      ],
      outcome: [
        'Skill de Alexa funcional con la ruta de petición documentada desde la voz hasta la respuesta del modelo.',
        'Stack de desarrollo local: Terraform más LocalStack más un modelo servido localmente.',
        'Costo de inferencia cero y sin requisito de conectividad durante la iteración.',
      ],
      metrics: [
        { value: '2', label: 'backends intercambiables' },
        { value: '0', label: 'costo AWS en desarrollo' },
      ],
    },
  },
  /* ──────────────────────── CLASS ATTENTION ─────────────────────────── */
  // TODO (Jaren): restaura el repo en github.com/settings/deleted_repositories
  // y pega la URL en `repo`. Sin enlace, un reclutador no puede verificarlo.
  // TODO (Jaren): pásame la métrica real (accuracy / F1 y sobre cuántas sesiones)
  // y la cambio. No pongo un número que no me diste.
  {
    slug: 'class-attention',
    featured: true,
    year: '2026',
    stack: ['Python', 'Machine learning', 'Computer vision', 'OpenCV', 'Privacy by design'],
    accentTags: ['Machine learning', 'Privacy'],
    en: {
      title: 'Class Attention',
      kind: 'Classroom attention detection · ML',
      tagline:
        'Measuring whether a class is actually following the lesson, without turning students into a surveillance dataset.',
      summary:
        'A machine learning system that estimates student attention during a class from video, producing a signal a teacher can act on. Built so the analysis never depends on knowing who any individual student is.',
      context:
        'A teacher standing at the front cannot tell when a room stopped following, and by the time it shows up in exam results it is too late to change the lesson. The signal exists in the room; it just is not being measured.',
      problem:
        'Any system pointed at students is one design mistake away from being surveillance. Attention data tied to named individuals is a liability: it can be used to punish rather than to teach, and if it leaks it exposes minors. The measurement has to be useful at the level of the room and useless as a file on a person.',
      decisions: [
        {
          title: 'Aggregate signal, not individual records',
          body: 'The output that matters is the state of the class, not a score per student. Designing the pipeline so the useful result is an aggregate removes most of the privacy risk at the architecture level rather than through a policy nobody enforces.',
        },
        {
          title: 'Treat identity as something never to store',
          body: 'Protecting identities was a constraint from the first version, not a feature added after a complaint. Anything that would let a stored result be traced back to a specific student is data the system is better off never holding.',
        },
        {
          title: 'Built to scale past one classroom',
          body: 'The processing path was structured so that adding classrooms is a matter of running more of the same pipeline, not rewriting how the analysis works.',
        },
      ],
      outcome: [
        'Working attention estimation validated on real classroom sessions.',
        'Privacy constraints enforced by the architecture rather than by policy.',
        'Processing path designed to extend beyond a single classroom.',
      ],
      metrics: [
        { value: 'ML', label: 'computer vision pipeline' },
        { value: 'Real', label: 'classroom validation' },
      ],
    },
    es: {
      title: 'Class Attention',
      kind: 'Detección de atención en clase · ML',
      tagline:
        'Medir si una clase está siguiendo realmente la lección, sin convertir a los estudiantes en un dataset de vigilancia.',
      summary:
        'Sistema de machine learning que estima la atención de los estudiantes durante una clase a partir de video, generando una señal sobre la que el docente puede actuar. Construido para que el análisis nunca dependa de saber quién es cada estudiante.',
      context:
        'Un docente al frente del aula no puede notar el momento en que el grupo dejó de seguirlo, y cuando aparece en las notas del examen ya es tarde para cambiar la clase. La señal está en el aula; simplemente no se está midiendo.',
      problem:
        'Cualquier sistema apuntado a estudiantes está a un error de diseño de convertirse en vigilancia. Datos de atención atados a personas identificables son un pasivo: sirven para castigar en vez de enseñar, y si se filtran exponen a menores. La medición tiene que ser útil a nivel de aula e inútil como expediente sobre una persona.',
      decisions: [
        {
          title: 'Señal agregada, no registros individuales',
          body: 'La salida que importa es el estado del grupo, no un puntaje por estudiante. Diseñar la pipeline para que el resultado útil sea un agregado elimina la mayor parte del riesgo de privacidad a nivel de arquitectura, y no mediante una política que nadie hace cumplir.',
        },
        {
          title: 'Tratar la identidad como algo que nunca se guarda',
          body: 'Proteger las identidades fue una restricción desde la primera versión, no una función añadida tras un reclamo. Todo lo que permitiera rastrear un resultado guardado hasta un estudiante concreto es dato que al sistema le conviene no tener nunca.',
        },
        {
          title: 'Pensado para escalar más allá de un aula',
          body: 'La ruta de procesamiento se estructuró para que añadir aulas sea ejecutar más de la misma pipeline, no reescribir cómo funciona el análisis.',
        },
      ],
      outcome: [
        'Estimación de atención funcional, validada sobre sesiones reales de clase.',
        'Restricciones de privacidad garantizadas por la arquitectura y no por política.',
        'Ruta de procesamiento diseñada para extenderse más allá de un aula.',
      ],
      metrics: [
        { value: 'ML', label: 'pipeline de visión por computador' },
        { value: 'Real', label: 'validación en aula' },
      ],
    },
  },

  /* ───────────────────────────  COTTULLARI  ─────────────────────────── */
  {
    slug: 'cottullari',
    featured: false,
    year: '2026',
    repo: 'https://github.com/JohanUV/cottullari-react',
    demo: 'https://cottullari.com/',
    stack: ['React', 'React Router', 'Vite', 'PHP', 'MySQL', 'CSS'],
    shots: [
      {
        src: '/shots/cottullari-home.jpg',
        width: 1456,
        height: 837,
        en: {
          alt: 'Cottullari home page, live at cottullari.com',
          caption:
            'Live at cottullari.com, on the company\u2019s own domain. Open it below and navigate it: fleet, destinations and the quote form are all real.',
        },
        es: {
          alt: 'Portada de Cottullari, en vivo en cottullari.com',
          caption:
            'En vivo en cottullari.com, en el dominio propio de la empresa. \u00c1brela abajo y nav\u00e9gala: flota, destinos y el formulario de cotizaci\u00f3n son reales.',
        },
      },
    ],
    accentTags: ['Client work'],
    en: {
      title: 'Cottullari',
      kind: 'Tourism company site · Latacunga, Ecuador',
      tagline:
        'The production website of an Ecuadorian tourism operator — live on the company\u2019s own domain, presenting a 22-vehicle fleet and writing every enquiry into their database.',
      summary:
        'The public site of Cottullari S.A., a tourism transport company operating out of Latacunga since 2010. Seven routes covering fleet, services and destinations across the Costa, Sierra and Amazon regions plus Colombia and Peru, and a quote form that captures destination, passenger count and travel date straight into MySQL. It is live at cottullari.com and it is how the company receives enquiries.',
      context:
        'An operator running 22 vehicles was taking every booking request over WhatsApp, unstructured. The site had to do two things: make the fleet and the destinations look worth booking, and capture a structured enquiry — destination, passengers, date — without the visitor leaving the page.',
      problem:
        'The destination pages are the same layout with different content, one per region. Hard-coding a separate page per region means every future destination is a code change and the routes drift apart over time.',
      decisions: [
        {
          title: 'One parameterized route for every destination',
          body: 'Destinations resolve through a single dynamic route that reads the region from the URL, so all five regions share one component and one layout. Adding a destination is data, not a new page.',
        },
        {
          title: 'Proxy the form endpoint in development',
          body: 'The quote form posts to a PHP script backed by MySQL. The dev server proxies that request to the local backend, so the form works end to end while developing without CORS workarounds that would not exist in production.',
        },
      ],
      outcome: [
        'Live in production at cottullari.com, on the company\u2019s own domain.',
        'Seven routes plus a 404, with a shared layout and client-side navigation.',
        'Destination detail pages driven by a URL parameter rather than duplicated components.',
        'Quote form persisting to MySQL, plus direct WhatsApp contact.',
      ],
      metrics: [
        { value: '22', label: 'fleet vehicles presented' },
        { value: '7', label: 'routes' },
        { value: '5', label: 'regions covered' },
      ],
    },
    es: {
      title: 'Cottullari',
      kind: 'Sitio para empresa de turismo · Latacunga, Ecuador',
      tagline:
        'La web en producción de un operador turístico ecuatoriano — en vivo en el dominio propio de la empresa, con una flota de 22 unidades y cada solicitud escrita en su base de datos.',
      summary:
        'La web pública de Cottullari S.A., empresa de transporte turístico que opera desde Latacunga desde 2010. Siete rutas que cubren flota, servicios y destinos por Costa, Sierra y Amazonía además de Colombia y Perú, y un formulario de cotización que captura destino, número de pasajeros y fecha directo a MySQL. Está en vivo en cottullari.com y es por donde la empresa recibe sus solicitudes.',
      context:
        'Un operador con 22 unidades recibía todas las solicitudes por WhatsApp, sin estructura. La web tenía que hacer dos cosas: que la flota y los destinos se vean dignos de reservar, y capturar una solicitud estructurada —destino, pasajeros, fecha— sin que el visitante tenga que salir de la página.',
      problem:
        'Las páginas de destino son el mismo layout con distinto contenido, una por región. Programar una página aparte por región convierte cada destino futuro en un cambio de código y hace que las rutas se desalineen con el tiempo.',
      decisions: [
        {
          title: 'Una sola ruta parametrizada para todos los destinos',
          body: 'Los destinos se resuelven con una única ruta dinámica que lee la región desde la URL, así que las cinco regiones comparten un componente y un layout. Añadir un destino es dato, no una página nueva.',
        },
        {
          title: 'Proxy del endpoint del formulario en desarrollo',
          body: 'El formulario de cotización postea a un script PHP con MySQL detrás. El servidor de desarrollo hace proxy de esa petición al backend local, así el formulario funciona de punta a punta mientras se desarrolla, sin parches de CORS que no existirían en producción.',
        },
      ],
      outcome: [
        'En producción en cottullari.com, en el dominio propio de la empresa.',
        'Siete rutas más un 404, con layout compartido y navegación del lado cliente.',
        'Páginas de detalle de destino resueltas por parámetro de URL en vez de componentes duplicados.',
        'Formulario de cotización que persiste en MySQL, más contacto directo por WhatsApp.',
      ],
      metrics: [
        { value: '22', label: 'unidades de flota presentadas' },
        { value: '7', label: 'rutas' },
        { value: '5', label: 'regiones cubiertas' },
      ],
    },
  },

  /* ───────────────────────────  MASHKA BOX  ─────────────────────────── */
  {
    slug: 'mashka-box',
    featured: false,
    year: '2026',
    repo: 'https://github.com/JohanUV/mashka-box',
    demo: 'https://johanuv.github.io/mashka-box/',
    stack: ['HTML', 'CSS', 'Responsive design'],
    shots: [
      {
        src: '/shots/mashka-home.jpg',
        width: 1512,
        height: 800,
        en: {
          alt: 'Mashka Box landing page hero',
          caption:
            'Live on GitHub Pages, with the gym\u2019s own photography. Scroll the embedded preview below to walk through all nine sections.',
        },
        es: {
          alt: 'Portada de la landing de Mashka Box',
          caption:
            'En vivo en GitHub Pages, con fotograf\u00eda propia del gimnasio. Despliega la vista de abajo y recorre las nueve secciones.',
        },
      },
    ],
    accentTags: ['Client work'],
    en: {
      title: 'Mashka Box',
      kind: 'CrossFit gym landing page · Latacunga, Ecuador',
      tagline:
        'A live one-page site for a local CrossFit box — nine sections, the gym\u2019s own photography, and one job: turn a visitor into a trial class.',
      summary:
        'A single-page site for a CrossFit gym in Latacunga, live on GitHub Pages. Nine anchored sections — the gym, the gallery, benefits, plans, class schedule, location and contact — all on one document, shot with the box\u2019s own photography, with WhatsApp booking one tap away from anywhere on the page.',
      context:
        'A local gym does not need a website with ten pages. It needs one page that loads instantly on a phone — because that is where people find it — and makes booking a trial obvious.',
      problem:
        'Most of the traffic arrives on mobile, from a phone with a slow connection, and the visitor decides in a few seconds. Anything that delays the first paint costs a signup.',
      decisions: [
        {
          title: 'Hand-written HTML and CSS, no framework',
          body: 'For a single page with no application state, a framework is weight the visitor pays for and gets nothing back. Plain HTML and CSS keeps the page small and the first paint immediate.',
        },
      ],
      outcome: [
        'Live and public on GitHub Pages, the gym\u2019s working site.',
        'Nine sections on a single document, responsive, mobile first.',
        'WhatsApp booking reachable from every section as the primary call to action.',
      ],
      metrics: [
        { value: '9', label: 'sections, one page' },
        { value: '0', label: 'JS frameworks' },
        { value: '1', label: 'tap to book' },
      ],
    },
    es: {
      title: 'Mashka Box',
      kind: 'Landing page para box de CrossFit · Latacunga, Ecuador',
      tagline:
        'Web en vivo de una sola página para un box de CrossFit local — nueve secciones, fotografía propia del gimnasio y un solo objetivo: convertir una visita en una clase de prueba.',
      summary:
        'Web de una sola página para un gimnasio de CrossFit en Latacunga, en vivo en GitHub Pages. Nueve secciones ancladas —el box, la galería, beneficios, planes, horarios, ubicación y contacto— todas en un mismo documento, con fotografía propia del gimnasio y la reserva por WhatsApp a un toque desde cualquier punto de la página.',
      context:
        'Un gimnasio local no necesita una web de diez páginas. Necesita una página que cargue al instante en el celular —porque ahí es donde lo encuentran— y que haga obvio reservar una prueba.',
      problem:
        'La mayor parte del tráfico llega desde el móvil, con conexión lenta, y el visitante decide en pocos segundos. Todo lo que retrase el primer render cuesta una inscripción.',
      decisions: [
        {
          title: 'HTML y CSS a mano, sin framework',
          body: 'Para una sola página sin estado de aplicación, un framework es peso que el visitante paga sin recibir nada a cambio. HTML y CSS planos mantienen la página liviana y el primer render inmediato.',
        },
      ],
      outcome: [
        'En vivo y público en GitHub Pages, es la web que usa el gimnasio.',
        'Nueve secciones en un solo documento, responsive, primero móvil.',
        'Reserva por WhatsApp accesible desde cada sección como llamada a la acción principal.',
      ],
      metrics: [
        { value: '9', label: 'secciones, una página' },
        { value: '0', label: 'frameworks JS' },
        { value: '1', label: 'toque para reservar' },
      ],
    },
  },

  /* ───────────────────────────── MODUFORM ───────────────────────────── */
  {
    slug: 'moduform',
    featured: false,
    year: '2026',
    repo: 'https://github.com/JohanUV/moduform',
    demo: 'https://moduform.vercel.app/',
    stack: ['HTML', 'CSS', 'JavaScript', 'WebP', 'Vercel'],
    shots: [
      {
        src: '/shots/moduform-home.jpg',
        width: 1512,
        height: 800,
        en: {
          alt: 'ModuForm home page hero with the black modular kitchen',
          caption:
            'Live on Vercel. Every photo and video is a real installed job; the before/after sliders and the WhatsApp buttons below the fold are what the business actually uses to get enquiries.',
        },
        es: {
          alt: 'Portada de ModuForm con la cocina modular en negro',
          caption:
            'En vivo en Vercel. Cada foto y video es un trabajo real instalado; los comparadores antes/después y los botones de WhatsApp más abajo son lo que el negocio usa para recibir solicitudes.',
        },
      },
    ],
    accentTags: ['Client work'],
    en: {
      title: 'ModuForm',
      kind: 'Custom furniture maker site · Latacunga, Ecuador',
      tagline:
        'The website of a one-person modular furniture workshop — a dark, photo-first single page where every enquiry lands directly in the owner’s WhatsApp.',
      summary:
        'The public site of ModuForm, a Latacunga workshop that measures, builds and installs melamine furniture: kitchens, bathroom vanities, desks, TV walls and LED-lit decorative panels. One page with twelve real job photos, five short walkthrough videos, three drag-to-compare before/after views and a WhatsApp flow that opens a chat with a prefilled message. Live at moduform.vercel.app.',
      context:
        'The owner had a phone full of job photos and videos and no web presence; every lead came by word of mouth. The brief was strict: use only real work, invent no testimonials or numbers, and make it load fast on the cheap Android phones most clients in Latacunga browse on.',
      problem:
        'The raw material was phone photos in mixed orientations and 20–40 MB videos. Shown as-is, the page would weigh over 200 MB and the videos would never play on mobile data. A form was also the wrong contact channel: the owner answers on WhatsApp and nowhere else.',
      decisions: [
        {
          title: 'No framework, aggressive media pipeline',
          body: 'Plain HTML, CSS and JavaScript on Vercel. Every photo ships as WebP with a JPEG fallback at two sizes; videos are re-encoded to 720p H.264 at 1–2 MB each, load only when scrolled into view, autoplay muted and pause when they leave the viewport. The full page is under 1 MB before any video plays.',
        },
        {
          title: 'WhatsApp deep links instead of a form',
          body: 'There is no backend. Every call to action is a wa.me link with a prefilled message, generated from one constant so the number is changed in one place. The visitor ends up in the owner’s chat, which is the only channel he actually answers.',
        },
        {
          title: 'Before/after slider built on a native range input',
          body: 'The comparison uses clip-path driven by a full-size <input type="range">, so dragging works with mouse, touch and keyboard without a library, and screen readers get a real control. A short automatic nudge on first view teaches the gesture.',
        },
      ],
      outcome: [
        'Live in production at moduform.vercel.app, deployed from the public repo on every push.',
        'Twelve real photos, five walkthrough videos and three before/after comparisons, with an accessible lightbox and category filters.',
        'Single-page load under 1 MB before video; videos stream on demand at 1–2 MB each.',
        'Every button opens WhatsApp with a prefilled message; no server, no form, no data stored.',
      ],
      metrics: [
        { value: '12', label: 'real job photos' },
        { value: '5', label: 'walkthrough videos' },
        { value: '0', label: 'JS frameworks' },
      ],
    },
    es: {
      title: 'ModuForm',
      kind: 'Sitio para taller de muebles a medida · Latacunga, Ecuador',
      tagline:
        'La web de un taller unipersonal de muebles modulares — una sola página oscura, centrada en las fotos, donde cada solicitud cae directo en el WhatsApp del dueño.',
      summary:
        'La web pública de ModuForm, un taller de Latacunga que mide, fabrica e instala muebles en melamina: cocinas, muebles de baño, escritorios, paredes de TV y paneles decorativos con LED. Una página con doce fotos reales de trabajos, cinco videos cortos de recorrido, tres comparadores antes/después arrastrables y un flujo de WhatsApp que abre el chat con el mensaje ya escrito. En vivo en moduform.vercel.app.',
      context:
        'El dueño tenía el celular lleno de fotos y videos de trabajos y ninguna presencia web; todos los clientes llegaban de boca en boca. El encargo fue estricto: usar solo trabajo real, no inventar testimonios ni cifras, y que cargue rápido en los Android baratos con los que navega la mayoría de clientes en Latacunga.',
      problem:
        'El material crudo eran fotos de celular en orientaciones mezcladas y videos de 20 a 40 MB. Tal cual, la página pesaría más de 200 MB y los videos nunca reproducirían con datos móviles. Un formulario también era el canal equivocado: el dueño responde por WhatsApp y por ningún otro lado.',
      decisions: [
        {
          title: 'Sin framework, con un pipeline de medios agresivo',
          body: 'HTML, CSS y JavaScript planos en Vercel. Cada foto va en WebP con respaldo JPEG en dos tamaños; los videos se recodificaron a 720p H.264 de 1 a 2 MB cada uno, se cargan solo al entrar en pantalla, se reproducen en silencio y se pausan al salir. La página completa pesa menos de 1 MB antes de que corra ningún video.',
        },
        {
          title: 'Enlaces directos a WhatsApp en vez de formulario',
          body: 'No hay backend. Cada llamada a la acción es un enlace wa.me con mensaje prellenado, generado desde una sola constante para cambiar el número en un solo lugar. El visitante termina en el chat del dueño, que es el único canal que de verdad atiende.',
        },
        {
          title: 'Comparador antes/después sobre un input range nativo',
          body: 'La comparación usa clip-path controlado por un <input type="range"> a pantalla completa, así que arrastrar funciona con mouse, táctil y teclado sin librería, y los lectores de pantalla reciben un control real. Un pequeño movimiento automático al aparecer enseña el gesto.',
        },
      ],
      outcome: [
        'En producción en moduform.vercel.app, desplegado desde el repo público en cada push.',
        'Doce fotos reales, cinco videos de recorrido y tres comparadores antes/después, con visor accesible y filtros por categoría.',
        'Carga de la página bajo 1 MB antes del video; los videos se transmiten bajo demanda a 1–2 MB cada uno.',
        'Cada botón abre WhatsApp con el mensaje ya escrito; sin servidor, sin formulario, sin datos guardados.',
      ],
      metrics: [
        { value: '12', label: 'fotos reales de trabajos' },
        { value: '5', label: 'videos de recorrido' },
        { value: '0', label: 'frameworks JS' },
      ],
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

const isClientWork = (p: Project) => p.accentTags.includes('Client work');

/** Encargos reales de negocios. Van en su propia sección, con su propio título. */
export const clientProjects = projects.filter((p) => !p.featured && isClientWork(p));

export const otherProjects = projects.filter((p) => !p.featured && !isClientWork(p));
