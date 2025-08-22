# RAST – Nuxt 4 (mock CMS) + Tailwind + GSAP + Dark mode

- Dark mode s toggle-om (poštuje OS, pamti se u localStorage)
- Smooth scroll i sakrivanje headera pri skrolanju dolje (pojavljuje se pri skrolanju gore)
- Sekcije: Hero → About → Services → Gallery → Contact
- Usluge: manje kartice, responsive 1/2/3/4 kolone, hover-zoom (desktop)
- Galerija: ručni carousel (strelice, točkice, tipke, swipe), bez autoplay-a
- Kontakt: upload slika/videa i slanje privitaka (Nitro + Nodemailer)
- **Mock API**: GET /api/services, GET /api/posts, GET /api/posts/:slug

## Pokretanje
```bash
cp .env.example .env
npm install
npm run dev
```
Dev: http://localhost:3000
