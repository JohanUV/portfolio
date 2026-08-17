/**
 * Genera public/portrait.jpg y public/og.png a partir de la foto original.
 * Correr con: node scripts/make-images.mjs <ruta-a-la-foto>
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const pub = resolve(here, '../public');
const src = process.argv[2];

if (!src) {
  console.error('Uso: node scripts/make-images.mjs <ruta-a-la-foto>');
  process.exit(1);
}

// Retrato profesional 4:5 (cabeza y hombros), calculado sobre el original
// 3024x4032. Recorte ceñido a la cara con poco aire arriba: es lo que hace que
// se lea como un headshot y no como una foto de cuerpo entero encogida.
const CROP = { left: 690, top: 470, width: 1560, height: 1950 };

// Recorte cuadrado más cerrado, solo para la miniatura de la tarjeta OG.
const CROP_SQUARE = { left: 226, top: 300, width: 2500, height: 2500 };

await sharp(src)
  .extract(CROP)
  .resize(720, 900, { fit: 'cover' })
  .modulate({ brightness: 1.04 })
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(resolve(pub, 'portrait.jpg'));

console.log('✓ public/portrait.jpg');

// Retrato pequeño, en escala de grises, para incrustar en la tarjeta OG.
const ogPortrait = await sharp(src)
  .extract(CROP_SQUARE)
  .resize(360, 360, { fit: 'cover' })
  .grayscale()
  .png()
  .toBuffer();

// Máscara de esquinas redondeadas.
const rounded = await sharp(ogPortrait)
  .composite([
    {
      input: Buffer.from(
        `<svg width="360" height="360"><rect width="360" height="360" rx="24" ry="24" fill="#fff"/></svg>`,
      ),
      blend: 'dest-in',
    },
  ])
  .png()
  .toBuffer();

const card = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="wash" cx="18%" cy="0%" r="85%">
      <stop offset="0%" stop-color="#5eead4" stop-opacity="0.13"/>
      <stop offset="100%" stop-color="#08090b" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#08090b"/>
  <rect width="1200" height="630" fill="url(#wash)"/>
  <rect x="0" y="0" width="1200" height="4" fill="#5eead4"/>

  <text x="80" y="150" font-family="DejaVu Sans Mono, monospace" font-size="21"
        letter-spacing="4" fill="#5eead4">SOFTWARE ENGINEER</text>

  <text x="80" y="248" font-family="DejaVu Sans, sans-serif" font-size="76"
        font-weight="700" fill="#e9ebee">Jaren Untuña</text>

  <text x="80" y="328" font-family="DejaVu Sans, sans-serif" font-size="28" fill="#98a1ab">
    I build systems that pull data out of
  </text>
  <text x="80" y="370" font-family="DejaVu Sans, sans-serif" font-size="28" fill="#98a1ab">
    sources never meant to be queried.
  </text>

  <line x1="80" y1="452" x2="700" y2="452" stroke="#2b323c" stroke-width="1"/>

  <text x="80" y="508" font-family="DejaVu Sans Mono, monospace" font-size="22" fill="#6a727c">
    Latacunga, Ecuador
  </text>
  <text x="80" y="552" font-family="DejaVu Sans Mono, monospace" font-size="22" fill="#6a727c">
    github.com/JohanUV
  </text>
</svg>`;

await sharp(Buffer.from(card))
  .composite([{ input: rounded, left: 760, top: 135 }])
  .png()
  .toFile(resolve(pub, 'og.png'));

console.log('✓ public/og.png');
