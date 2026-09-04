export const languages = { en: 'EN', es: 'ES' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'nav.work': 'Work',
    'nav.stack': 'Stack',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.resume': 'Résumé',

    'hero.role': 'Data · Automation · Applied AI',
    'hero.tagline':
      'Full-stack software engineer focused on secure data systems, automation and applied AI.',
    'hero.body':
      'My work: integrating sources others can’t reach, reverse-engineering what isn’t documented, and shipping the product on top — with access control and traceability built into the schema, not bolted on later.',
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
    'case.evidence': 'Evidence',
    'case.live.expand': 'Expand live preview',
    'case.live.collapse': 'Collapse preview',
    'case.live.open': 'Open in a new tab',
    'case.live.note': 'This is the real site loading inside the page. Scroll and navigate it as you would normally.',
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
      'I keep building while I finish my degree, and I learn the next thing by shipping something with it. If you are hiring for engineering work that touches systems, data or automation, I would like to talk.',

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
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'nav.resume': 'CV',

    'hero.role': 'Datos · Automatización · IA aplicada',
    'hero.tagline':
      'Ingeniero de software full-stack enfocado en sistemas de datos seguros, automatización e IA aplicada.',
    'hero.body':
      'Mi trabajo: integrar fuentes que otros no alcanzan, hacer ingeniería inversa de lo que no está documentado y entregar el producto encima — con control de acceso y trazabilidad dentro del esquema, no pegados después.',
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
    'case.evidence': 'Evidencia',
    'case.live.expand': 'Desplegar vista en vivo',
    'case.live.collapse': 'Plegar vista',
    'case.live.open': 'Abrir en pestaña nueva',
    'case.live.note': 'Es la web real cargando dentro de esta página. Desplázala y navégala con normalidad.',
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
      'Sigo construyendo mientras termino la carrera, y aprendo lo siguiente entregando algo hecho con eso. Si contratas para trabajo de ingeniería que toque sistemas, datos o automatización, me gustaría hablar.',

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
