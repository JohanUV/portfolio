export const languages = { en: 'EN', es: 'ES' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'nav.work': 'Work',
    'nav.stack': 'Stack',
    'nav.security': 'Security',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.resume': 'Résumé',

    'hero.role': 'Software Engineer · Data & Automation',
    'hero.tagline':
      'Full-stack engineer who ships complete, production-ready systems — secure by design, not patched after launch.',
    'hero.body':
      'I work from the data pipeline to the interface, and I integrate the sources most teams avoid because they are too messy to touch — with access control and auditing built in from the first line.',
    'hero.techline': 'Python · Django · React · PostgreSQL · n8n · Docker',
    'hero.cv': 'Download CV',
    'hero.cta.work': 'See the work',
    'hero.cta.contact': 'Get in touch',
    'hero.available': 'Available for engineering roles and freelance work · remote or Ecuador',

    'work.eyebrow': 'Selected work',
    'work.title': 'Four systems, four hard problems',
    'work.body':
      'Each of these is a real, working system with the source public. Read the case study for the decisions behind it, not just the screenshot.',
    'work.client': 'Built for clients',
    'work.clientBody':
      'Two Latacunga businesses asked for a site and got one that works. Small in scope, real in consequence: someone is running their bookings through these.',
    'work.more': 'Also built',
    'work.readCase': 'Read case study',
    'work.viewCode': 'Source',
    'work.liveDemo': 'Live demo',

    'case.back': 'All work',
    'case.context': 'Context',
    'case.problem': 'The hard part',
    'case.decisions': 'Technical decisions',
    'case.outcome': 'What it does',
    'case.stack': 'Stack',
    'case.next': 'Next project',

    'stack.eyebrow': 'Toolkit',
    'stack.title': 'What I work with',
    'stack.body':
      'Listed by how much I have actually shipped with them, not by how many tutorials I have watched.',
    'stack.core': 'Core',
    'stack.data': 'Data & automation',
    'stack.ai': 'AI & integration',
    'stack.infra': 'Infrastructure',
    'stack.learning': 'Currently learning',

    'security.eyebrow': 'Where I am heading',
    'security.title': 'Security engineering',
    'security.body':
      'I am moving toward offensive security and OSINT, and I am being upfront that this is a transition in progress rather than a credential I already hold. The reason I think the move is a natural one is that the work I have already done is the same work under a different name.',
    'security.bridge.title': 'What already transfers',
    'security.bridge.1.t': 'Attack-surface mapping',
    'security.bridge.1.b':
      'Reconstructing an undocumented API from observed traffic, then documenting endpoints, required headers and what the server actually validates — that is reconnaissance, and I have written the specification to prove it.',
    'security.bridge.2.t': 'Control analysis',
    'security.bridge.2.b':
      'Finding that a captcha is enforced in the UI but accepted as a constant by the service is a client-side-trust finding. Recognizing the class of the flaw matters more than the individual instance.',
    'security.bridge.3.t': 'Working within limits',
    'security.bridge.3.b':
      'Relaying a captcha to a human rather than defeating it, and documenting the sources that cannot be automated, is the judgement the field is actually hiring for. Access is a legal question before it is a technical one.',
    'security.bridge.4.t': 'Handling regulated data',
    'security.bridge.4.b':
      'Building audit trails, role-based access and traceable exports because a data-protection law requires it — not after an auditor asks.',
    'security.progress.title': 'In progress',
    'security.progress.body':
      'Working through hands-on labs and CTFs, aiming at a practical certification. The profile below is live and unedited — what is on it is what I have actually solved, which is the only version of this worth linking.',
    'security.honest':
      'No certifications yet. Listed here as a direction, not as experience.',

    'about.eyebrow': 'About',
    'about.title': 'The short version',
    'about.p1':
      'I am a software engineering student at Universidad de las Fuerzas Armadas ESPE in Latacunga, Ecuador, currently in my fifth semester. I have not held a full-time engineering job yet. What I have instead is nine systems I designed, built and documented end to end — two of them commissioned by businesses here in Latacunga — with the code public.',
    'about.p2':
      'The thread running through them is data from sources that resist being read: government portals with no API, job boards with incompatible schemas, court systems behind captchas. I like the part where you have to figure out how something works before you can build on it.',
    'about.p3':
      'I design with security in the room from the start. Access control, audit trails and data-protection rules go in while the schema is being written, not after an auditor asks — because the people who use these systems are trusting them with data that can damage someone if it leaks.',
    'about.p4':
      'I work fast because I use AI tooling seriously, as an engineering multiplier with review, not as a substitute for understanding the system. Every architectural decision on this page is one I can defend in a whiteboard interview, because I made it.',
    'about.p5':
      'Right now I am deepening into offensive security while continuing to ship. If you are hiring for engineering work that touches systems, data or security, I would like to talk.',

    'contact.eyebrow': 'Contact',
    'contact.title': 'Let us talk',
    'contact.body':
      'Open to engineering roles, contract work and freelance projects. I read and answer everything.',
    'contact.email': 'Email me',
    'contact.copied': 'Copied',

    'footer.built': 'Built with Astro and Tailwind. Source on GitHub.',
    'footer.rights': 'All rights reserved.',

    'notfound.title': 'Page not found',
    'notfound.body': 'That page does not exist.',
    'notfound.home': 'Back home',
  },

  es: {
    'nav.work': 'Proyectos',
    'nav.stack': 'Stack',
    'nav.security': 'Seguridad',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'nav.resume': 'CV',

    'hero.role': 'Ingeniero de Software · Datos y Automatización',
    'hero.tagline':
      'Ingeniero full-stack que entrega sistemas completos y listos para producción — seguros por diseño, no parcheados después del lanzamiento.',
    'hero.body':
      'Trabajo desde el pipeline de datos hasta la interfaz, e integro las fuentes que la mayoría evita por difíciles — con control de acceso y auditoría desde la primera línea.',
    'hero.techline': 'Python · Django · React · PostgreSQL · n8n · Docker',
    'hero.cv': 'Descargar CV',
    'hero.cta.work': 'Ver proyectos',
    'hero.cta.contact': 'Contactar',
    'hero.available': 'Disponible para roles de ingeniería y trabajo freelance · remoto o Ecuador',

    'work.eyebrow': 'Proyectos destacados',
    'work.title': 'Cuatro sistemas, cuatro problemas difíciles',
    'work.body':
      'Cada uno es un sistema real y funcional con el código público. Lee el case study por las decisiones detrás, no solo por la captura de pantalla.',
    'work.client': 'Hecho para clientes',
    'work.clientBody':
      'Dos negocios de Latacunga pidieron una web y recibieron una que funciona. Alcance pequeño, consecuencia real: hay gente gestionando sus reservas por aquí.',
    'work.more': 'También construí',
    'work.readCase': 'Leer case study',
    'work.viewCode': 'Código',
    'work.liveDemo': 'Demo',

    'case.back': 'Todos los proyectos',
    'case.context': 'Contexto',
    'case.problem': 'La parte difícil',
    'case.decisions': 'Decisiones técnicas',
    'case.outcome': 'Qué hace',
    'case.stack': 'Stack',
    'case.next': 'Siguiente proyecto',

    'stack.eyebrow': 'Herramientas',
    'stack.title': 'Con qué trabajo',
    'stack.body':
      'Ordenado por cuánto he construido realmente con cada cosa, no por cuántos tutoriales he visto.',
    'stack.core': 'Núcleo',
    'stack.data': 'Datos y automatización',
    'stack.ai': 'IA e integración',
    'stack.infra': 'Infraestructura',
    'stack.learning': 'Aprendiendo ahora',

    'security.eyebrow': 'Hacia dónde voy',
    'security.title': 'Ingeniería de seguridad',
    'security.body':
      'Me estoy moviendo hacia seguridad ofensiva y OSINT, y lo digo de frente: es una transición en curso, no una credencial que ya tenga. La razón por la que creo que el paso es natural es que el trabajo que ya hice es el mismo trabajo con otro nombre.',
    'security.bridge.title': 'Lo que ya transfiere',
    'security.bridge.1.t': 'Mapeo de superficie de ataque',
    'security.bridge.1.b':
      'Reconstruir una API no documentada a partir del tráfico observado y documentar endpoints, headers requeridos y qué valida realmente el servidor — eso es reconocimiento, y escribí la especificación para probarlo.',
    'security.bridge.2.t': 'Análisis de controles',
    'security.bridge.2.b':
      'Encontrar que un captcha se exige en la interfaz pero el servicio lo acepta como constante es un hallazgo de confianza en el cliente. Reconocer la clase de la falla importa más que la instancia concreta.',
    'security.bridge.3.t': 'Trabajar dentro de los límites',
    'security.bridge.3.b':
      'Hacer relay de un captcha hacia una persona en vez de vencerlo, y documentar las fuentes que no se pueden automatizar, es el criterio por el que el campo realmente contrata. El acceso es una pregunta legal antes que técnica.',
    'security.bridge.4.t': 'Manejo de datos regulados',
    'security.bridge.4.b':
      'Construir historial de auditoría, acceso por roles y exportaciones trazables porque una ley de protección de datos lo exige — no después de que lo pida un auditor.',
    'security.progress.title': 'En curso',
    'security.progress.body':
      'Laboratorios prácticos y CTFs, apuntando a una certificación práctica. El perfil de abajo está en vivo y sin maquillar — lo que está ahí es lo que realmente he resuelto, que es la única versión de esto que vale la pena enlazar.',
    'security.honest':
      'Aún sin certificaciones. Listado aquí como dirección, no como experiencia.',

    'about.eyebrow': 'Sobre mí',
    'about.title': 'La versión corta',
    'about.p1':
      'Soy estudiante de Ingeniería de Software en la Universidad de las Fuerzas Armadas ESPE, en Latacunga, Ecuador, cursando quinto semestre. Todavía no he tenido un empleo full-time de ingeniería. Lo que tengo en su lugar son nueve sistemas que diseñé, construí y documenté de punta a punta —dos de ellos encargados por negocios de Latacunga— con el código público.',
    'about.p2':
      'El hilo que los conecta son datos de fuentes que se resisten a ser leídas: portales estatales sin API, bolsas de empleo con esquemas incompatibles, sistemas judiciales detrás de captchas. Me gusta la parte donde hay que descifrar cómo funciona algo antes de poder construir encima.',
    'about.p3':
      'Diseño con la seguridad presente desde el principio. El control de acceso, la auditoría y las reglas de protección de datos entran mientras se escribe el esquema, no cuando lo pide un auditor — porque quien usa estos sistemas les está confiando datos que pueden dañar a alguien si se filtran.',
    'about.p4':
      'Trabajo rápido porque uso herramientas de IA en serio, como multiplicador de ingeniería y con revisión, no como sustituto de entender el sistema. Cada decisión de arquitectura de esta página es una que puedo defender en una entrevista de pizarrón, porque la tomé yo.',
    'about.p5':
      'Ahora mismo estoy profundizando en seguridad ofensiva mientras sigo construyendo. Si contratas para trabajo de ingeniería que toque sistemas, datos o seguridad, me gustaría hablar.',

    'contact.eyebrow': 'Contacto',
    'contact.title': 'Hablemos',
    'contact.body':
      'Abierto a roles de ingeniería, contratos y proyectos freelance. Leo y respondo todo.',
    'contact.email': 'Escríbeme',
    'contact.copied': 'Copiado',

    'footer.built': 'Hecho con Astro y Tailwind. Código en GitHub.',
    'footer.rights': 'Todos los derechos reservados.',

    'notfound.title': 'Página no encontrada',
    'notfound.body': 'Esa página no existe.',
    'notfound.home': 'Volver al inicio',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];
