# Yash Rane — Portfolio

A React + Vite portfolio built from your resume, styled around an API/backend
theme (requests, endpoints, status codes) to match a Java/Spring Boot + React
full-stack profile.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # optional local check of the production build
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import that repo.
3. Framework preset: Vite (auto-detected). Build command `npm run build`,
   output directory `dist` (Vercel usually fills these in automatically).
4. Deploy.

Or from the CLI, inside this folder:

```bash
npm i -g vercel
vercel
```

## Where to edit content

Everything resume-related lives in one place:
`src/data/portfolioData.js` — profile info, experience, projects, skills,
education, certificates, extra-curriculars and contact details. Edit that
file and the rest of the site updates automatically.

Your résumé PDF is served from `public/Yash_Rane_Resume.pdf` — replace that
file (keep the same name) whenever you update your résumé, and the
"Download résumé" button on the site will always serve the latest version.

## Project links wired in

- Movie Ticket Booking System → `https://github.com/yashrane1810/Movie-booking-System`
- AI-Based Silent Communication System for ICU Patients → `https://github.com/yashrane1810/mute-patient-assistant-mouse`
- RiskGuard Company Website Enhancement has no public repo, so it's shown
  without a link — add one in `portfolioData.js` if it becomes public.
