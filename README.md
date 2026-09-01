# Portfolio - Javier Amurrio Santos

Personal Full-Stack Developer portfolio built with React and Vite.

## Tech Stack

- React 19
- Vite 8
- react-i18next (internationalization)
- Font Awesome (icons)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Import the repository on [vercel.com/new](https://vercel.com/new).
2. Vercel will auto-detect the Vite framework. Default settings work out of the box:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Click **Deploy**.

The project includes a `vercel.json` with a catch-all rewrite to `index.html` for client-side routing.

## Deploy on GitHub

1. Switch to the `main` branch.
2. Build and deploy the project:
   ```bash
   npm run build
   npm run deploy
   ```
