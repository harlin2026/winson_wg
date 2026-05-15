# WG Web

Next.js official website starter for Winson Group Macau.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Strapi

Copy `.env.example` to `.env.local` and update:

```bash
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your-token
```

The Strapi fetch helper is in `lib/strapi.ts`. The current homepage is static first, so sections in `app/page.tsx` can be replaced gradually with Strapi data.
