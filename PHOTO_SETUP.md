# Portfolio image setup

1. Place your portrait photo in `public/profile.jpg` (exact filename; JPG format).
2. The Hero automatically displays this local image. If absent, it shows the existing developer-code illustration.
3. Alternatively, use pgAdmin to set `profile.profile_image_url` to an image URL or `/profile.jpg` for the desired profile row. The database image URL takes priority over the local default.
4. Restart `npm run dev` and hard refresh the page.

## Blank-page root cause
`src/components/Skills.jsx` imported missing `SiCss3` from `react-icons/si`. Updated it to exported `SiCss`.

## Run
`npm install` and `npm run dev` inside the extracted folder. Do not copy `node_modules` from another computer. Make sure the existing Express backend is listening on port 5000 and the frontend `.env` has `VITE_API_BASE_URL=http://localhost:5000/api`.
