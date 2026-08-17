/**
 * ─────────────────────────────────────────────────────────────
 *  EDITA SOLO ESTE ARCHIVO PARA TUS DATOS PERSONALES.
 *  Lo marcado con TODO: hay que rellenarlo antes de publicar.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'Johan Untuña',
  initials: 'JU',

  location: {
    en: 'Latacunga, Ecuador',
    es: 'Latacunga, Ecuador',
  },

  timezone: 'GMT-5',

  email: 'jaren22uv@gmail.com',

  // Formato internacional sin espacios, es lo que exige el enlace wa.me
  whatsapp: '593963607760',
  whatsappDisplay: '+593 96 360 7760',

  github: 'https://github.com/JohanUV',

  linkedin: 'https://www.linkedin.com/in/jaren-untu%C3%B1a-valiente-762799211/',

  tryhackme: 'https://tryhackme.com/p/jaren22uv' as string | null,
  // Con null, el enlace simplemente no aparece en la sección de seguridad.
  hackthebox: null as string | null,

  // TODO: exporta tu CV a PDF y guárdalo en public/ con estos nombres
  resume: {
    en: '/johan-untuna-resume-en.pdf',
    es: '/johan-untuna-cv-es.pdf',
  },

  // Generado desde tu foto con: node scripts/make-images.mjs <ruta-a-la-foto>
  portrait: '/portrait.jpg' as string | null,

  university: {
    en: 'Universidad de las Fuerzas Armadas ESPE, Latacunga — Software Engineering',
    es: 'Universidad de las Fuerzas Armadas ESPE, Latacunga — Ingeniería de Software',
  },

  // Cursando 5.º semestre en agosto de 2026. TODO: ajusta si el plan de tu
  // carrera no es de 9 semestres.
  semester: { en: '5th semester', es: '5.º semestre' },
  graduation: '2028',
} as const;

/** Métricas del hero. Todas verificables contra tu GitHub — no las infles. */
export const heroStats = [
  {
    value: '9',
    label: {
      en: 'government data sources integrated',
      es: 'fuentes de datos estatales integradas',
    },
  },
  {
    value: '9',
    label: {
      en: 'systems shipped end to end, 2 for real clients',
      es: 'sistemas construidos de punta a punta, 2 para clientes reales',
    },
  },
  {
    value: '3',
    label: {
      en: 'undocumented APIs reverse-engineered',
      es: 'APIs no documentadas analizadas por ingeniería inversa',
    },
  },
] as const;
