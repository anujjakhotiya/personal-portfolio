# Anuj Jakhotiya — Personal Portfolio

The source for **[anujjakhotiya.github.io](https://anujjakhotiya.github.io/)**.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- EmailJS

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Where to update the portfolio

| Content | File |
| --- | --- |
| Hero / resume link / social links | `src/components/Hero.tsx` |
| Education / achievements | `src/components/About.tsx` |
| Skills | `src/components/Skills.tsx` |
| Projects + GitHub links | `src/components/Projects.tsx` |
| Certifications + verification links | `src/components/Certifications.tsx` |
| Contact form / email | `src/components/Contact.tsx` |
| Navigation / theme | `src/components/Navbar.tsx` |
| Global visual system | `src/index.css` |
| SEO / social metadata | `index.html` |
| Resume PDF | `public/Anuj_Jakhotiya_Resume.pdf` |

## GitHub Pages deployment

The repository `anujjakhotiya/anujjakhotiya.github.io` is the live GitHub Pages repository.

After making changes:

```bash
npm run build
```

Copy the contents of `dist/` into the root of the `anujjakhotiya.github.io` repository, then commit and push.

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages will publish the new static files automatically.

## Notes

- Personal contact details are intentionally limited to email and professional profiles.
- Theme preference is stored locally in the browser.
- The site includes a reduced-motion fallback for accessibility.
- The project list intentionally highlights the strongest repositories rather than every coursework repository.
