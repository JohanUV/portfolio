/**
 * ─────────────────────────────────────────────────────────────
 *  CERTIFICACIONES
 *  Para añadir una: copia el PDF a public/certs/, genera una
 *  miniatura JPG con el mismo nombre y añade una entrada aquí.
 * ─────────────────────────────────────────────────────────────
 */

export type Certificate = {
  /** Identificador interno, también el nombre de los archivos en public/certs/ */
  slug: string;
  title: { en: string; es: string };
  issuer: string;
  /** Quién respalda el programa, si no es evidente por el emisor */
  issuerNote?: { en: string; es: string };
  /** Fecha de emisión ya formateada. null si el certificado no la trae impresa. */
  date: { en: string; es: string } | null;
  /** Horas, módulos o alcance */
  detail?: { en: string; es: string };
  /** Número de serie o credencial impreso en el certificado */
  credentialId?: string;
  /** Rutas dentro de public/ */
  file: string;
  image: string;
};

export const certificates: Certificate[] = [
  {
    slug: 'prompters-ecuador',
    title: {
      en: '10,000 Prompters Ecuador',
      es: '10 000 Prompters Ecuador',
    },
    issuer: '1 Million Prompters',
    issuerNote: {
      en: 'Dubai Future Foundation initiative, run with the Government of Ecuador',
      es: 'Iniciativa de la Dubai Future Foundation junto al Gobierno del Ecuador',
    },
    // TODO: el certificado no trae fecha impresa. Si la sabes, ponla aquí
    // con el formato { en: 'September 2026', es: 'Septiembre de 2026' }.
    date: null,
    detail: {
      en: 'Prompt engineering for artificial intelligence systems',
      es: 'Ingeniería de prompts para sistemas de inteligencia artificial',
    },
    file: '/certs/prompters-ecuador.pdf',
    image: '/certs/prompters-ecuador.jpg',
  },
  {
    slug: 'cisco-packet-tracer',
    title: {
      en: 'Getting Started with Cisco Packet Tracer',
      es: 'Getting Started with Cisco Packet Tracer',
    },
    issuer: 'Cisco Networking Academy',
    date: {
      en: '26 September 2026',
      es: '26 de septiembre de 2026',
    },
    detail: {
      en: 'Network simulation: building and configuring topologies',
      es: 'Simulación de redes: armado y configuración de topologías',
    },
    credentialId: '2ba64b57-f841-4fed-a644-e484886e29e7',
    file: '/certs/cisco-packet-tracer.pdf',
    image: '/certs/cisco-packet-tracer.jpg',
  },
  {
    slug: 'santander-python',
    title: {
      en: 'Python',
      es: 'Python',
    },
    issuer: 'Santander Open Academy',
    date: {
      en: '26 September 2026',
      es: '26 de septiembre de 2026',
    },
    detail: {
      en: '8 hours · 2 modules · self-assessment',
      es: '8 horas · 2 módulos · autoevaluación',
    },
    credentialId: 'OA-2026-0926003245132',
    file: '/certs/santander-python.pdf',
    image: '/certs/santander-python.jpg',
  },
];
