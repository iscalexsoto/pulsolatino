# Pulso Latino - Landing Oficial

Landing oficial de **Pulso Latino Estudio de Danza y Baile Latino**.

Sitio estatico, mobile-first y optimizado para conversion a WhatsApp.  
El contenido principal se administra con JSON y se puede editar desde Decap CMS.

## Tecnologias

- HTML5
- CSS3 (estilos globales + estilos de pagina `Nosotros`)
- JavaScript vanilla (sin framework)
- Decap CMS (`/admin`)
- Cloudflare Pages (publicacion)

## Sitio en produccion

- [https://www.pulsolatinoestudio.com](https://www.pulsolatinoestudio.com)

## Estructura del proyecto

- `index.html`: landing principal (Hero, Horarios, Precios, Ubicacion, Eventos, Footer)
- `nosotros.html`: pagina Nosotros
- `css/styles.css`: estilos de la landing principal
- `css/nosotros.css`: estilos de la pagina Nosotros
- `js/renderers.js`: renderers compartidos entre sitio y previews del CMS
- `js/main.js`: boot de la landing y logica de interaccion
- `js/nosotros.js`: boot de la pagina Nosotros
- `content/site.json`: contenido global (nav, hero, labels, footer, WhatsApp)
- `content/schedules.json`: horarios por sucursal
- `content/prices.json`: tarjetas y textos de precios
- `content/announcements.json`: galeria de anuncios
- `content/nosotros.json`: contenido de la pagina Nosotros
- `admin/config.yml`: colecciones y campos de Decap CMS
- `admin/index.html`: entrada del panel Decap CMS
- `admin/preview.js`: previews visuales del CMS usando estilos reales del sitio

## Flujo de contenido

1. El sitio carga JSON desde `content/`.
2. Los scripts (`js/main.js` y `js/nosotros.js`) usan `js/renderers.js` para pintar secciones.
3. El CMS edita esos mismos JSON.
4. Los previews de Decap reutilizan clases/estilos/renderers del sitio para mantener paridad visual.

## Ejecutar localmente

Al ser un sitio estatico, puedes abrir con cualquier servidor local simple.

Ejemplo con VS Code Live Server o equivalente:

1. Levanta el workspace como servidor estatico.
2. Abre:
   - `/` para la landing
   - `/nosotros.html` para la pagina Nosotros
   - `/admin` para el panel CMS

## Convenciones importantes del proyecto

- Mantener enfoque **mobile-first**.
- No romper rutas de assets (`assets/...`) ni enlaces de WhatsApp.
- Respetar separacion de responsabilidades:
  - HTML: estructura
  - CSS: estilos
  - JS: comportamiento/render
- Reutilizar `js/renderers.js` y hojas de estilo compartidas antes de duplicar logica o estilos.
