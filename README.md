# Pulso Latino Landing + Decap CMS

Este proyecto es una landing estatica (HTML/CSS/JS) con Decap CMS para editar contenido sin tocar codigo.

## Estructura relevante

- `index.html`: estructura principal de la landing.
- `js/main.js`: carga y render dinamico de contenido JSON.
- `content/site.json`: textos generales, CTAs y footer.
- `content/schedules.json`: horarios por sucursal.
- `content/prices.json`: tarjetas y textos de precios.
- `content/events.json`: galeria de flyers/eventos.
- `admin/index.html`: panel Decap (`/admin`).
- `admin/config.yml`: configuracion Decap.

## Configurar Decap para GitHub Pages

### 1) Configura `admin/config.yml`

Reemplaza estos valores:

- `backend.repo`: `OWNER/REPO`
- `backend.branch`: rama de publicacion (ej. `main`)
- `backend.base_url`: URL publica de tu Worker (ej. `https://pulso-auth.workers.dev`)
- `backend.auth_endpoint`: deja `/auth` si usas el Worker de ejemplo

### 2) Crea una GitHub OAuth App

En GitHub:

- `Homepage URL`: `https://www.pulsolatinoestudio.com`
- `Authorization callback URL`: `https://TU_WORKER.workers.dev/callback`

Guarda:

- `Client ID`
- `Client Secret`

### 3) Despliega Cloudflare Worker para OAuth

Puedes usar un Worker sencillo con `@decap-cms/oauth-client`.

Instalacion local:

```bash
npm init -y
npm i @decap-cms/oauth-client
npm i -D wrangler
```

`wrangler.toml` minimo:

```toml
name = "pulso-decap-auth"
main = "src/index.js"
compatibility_date = "2025-01-01"
```

`src/index.js`:

```js
import { createHandler } from "@decap-cms/oauth-client";

const handler = createHandler({
  github: {
    clientId: globalThis.GITHUB_CLIENT_ID,
    clientSecret: globalThis.GITHUB_CLIENT_SECRET
  },
  secret: globalThis.OAUTH_SECRET
});

export default {
  fetch(request) {
    return handler(request);
  }
};
```

Define secrets:

```bash
npx wrangler secret put GITHUB_CLIENT_ID
npx wrangler secret put GITHUB_CLIENT_SECRET
npx wrangler secret put OAUTH_SECRET
```

Despliegue:

```bash
npx wrangler deploy
```

## Flujo editorial esperado

1. Entrar a `/admin`.
2. Iniciar sesion con GitHub.
3. Editar contenido en colecciones:
   - Sitio
   - Horarios
   - Precios
   - Eventos y flyers
4. Guardar y publicar (commit al repo).
5. GitHub Pages publica los cambios.

## Nota sobre assets de eventos

En la coleccion de eventos, el campo `image` sube imagenes a `assets/uploads`. Si quieres seguir usando `assets/flyers`, tambien puedes pegar rutas manuales.
