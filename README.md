# Portfolio — Jaren Untuña

Sitio de presentación bilingüe (inglés por defecto, español en `/es/`).
Astro + Tailwind, estático, sin JavaScript de cliente.

## Correr en local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/ para revisar el build
```

## Dónde se edita cada cosa

| Quiero cambiar… | Archivo |
| --- | --- |
| Nombre, correo, LinkedIn, CV, foto, universidad | `src/data/site.ts` |
| Los proyectos y sus case studies (EN + ES) | `src/data/projects.ts` |
| Cualquier texto de la interfaz (EN + ES) | `src/i18n/ui.ts` |
| Colores, tipografía, espaciado | `src/styles/global.css` |
| Tecnologías listadas en la sección Stack | `src/components/Stack.astro` |

Los proyectos se marcan `featured: true` para salir grandes arriba, o `false`
para caer en la rejilla de "Also built". El orden del array es el orden del sitio.

## Pendientes antes de publicar

Todos están marcados con `TODO:` en `src/data/site.ts`:

- [ ] URL real de LinkedIn
- [ ] Decidir el correo de contacto
- [ ] CV en PDF → `public/jaren-untuna-resume-en.pdf` y `...-cv-es.pdf`
- [ ] Foto de retrato → `public/portrait.jpg`, y cambiar `portrait: null` por `'/portrait.jpg'`
- [ ] Confirmar el año de graduación
- [ ] Imagen Open Graph 1200×630 → `public/og.png` (es la miniatura al compartir el link)
- [ ] Dominio real en `astro.config.mjs` (`site:`) y en `public/robots.txt`

## Deploy en Vercel

```bash
git init && git add -A && git commit -m "Portfolio inicial"
gh repo create portfolio --public --source=. --push
```

Luego en vercel.com: **Add New → Project → importar el repo**. Vercel detecta
Astro solo; no hay que configurar nada. Cada push a `main` redespliega.

## Notas de diseño

- Oscuro fijo, sin toggle de tema: es una decisión, no un descuido.
- Cero JS de cliente. El sitio es HTML estático, así que carga instantáneo y
  los reclutadores que abren el link desde el móvil no esperan.
- Cada `<h2>` lleva su `eyebrow` en mono; es el ritmo visual de la página.
- Las métricas del hero y de cada proyecto son verificables contra el código
  público. Si cambias un número, que siga siéndolo.
