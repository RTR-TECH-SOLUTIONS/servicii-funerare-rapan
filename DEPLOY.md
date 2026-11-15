# Punere online: serviciifunerarebascov.ro

Site static Astro, găzduit la noi: pachetul Business pe mrwebsites.ro, serverul Enhance (cp.mrwebsites.ro), clientul
„Nelutu Rapan” (neluturpan@gmail.com). A plătit oferta pe 14 nov 2026; găzduirea și site-ul gol din Enhance s-au creat
singure la plată.

## 0. Domeniul

`serviciifunerarebascov.ro` e nou, gratuit în primul an (din ofertă), apoi se reînnoiește automat cu 50 lei/an.
Se înregistrează prin Openprovider din /admin → „De făcut” → **Înregistrează automat**, pe datele de facturare ale
clientului (persoană fizică), cu nameserverele `ns1/ns2.mrwebsites.ro`. Zona DNS e deja în Enhance.

Dacă se recuperează și domeniul vechi (`serviciifunerarerapan.ro`, cyber_folks), se pune pe el un redirect 301 către
`https://serviciifunerarebascov.ro/`.

## 1. Build

```bash
npm install
npm run build        # implicit: https://serviciifunerarebascov.ro, în rădăcină
```

Rezultatul e în `dist/`: paginile, `.htaccess` (HTTPS + fără www, cache, pagina 404), `robots.txt` și
`sitemap-index.xml`.

## 2. Publicare din GitHub în Enhance

Repo: `RTR-TECH-SOLUTIONS/servicii-funerare-rapan`, ramura `main`.

1. Enhance → clientul „Nelutu Rapan” (impersonate) → site-ul `serviciifunerarebascov.ro` → tabul GitHub →
   **Connect GitHub**. Aplicația creată se instalează pe RTR-TECH-SOLUTIONS doar cu acest repo
   („Only select repositories”).
2. Ramura `main`, build `npm ci && npm run build`, director publicat `dist`, „Auto deploy on push” pornit.

De aici, orice `git push` pe `main` republică site-ul real și, prin workflow, demo-ul.

## 3. După ce domeniul răspunde

- Certificatul Let's Encrypt și „Force HTTPS” în Enhance, dacă nu s-au pus singure.
- /admin → **Trimite la Google** (Search Console + sitemap, apoi IndexNow).
- **Google Business Profile** („Servicii Funerare Răpan”, 4,9 din 49): se adaugă site-ul și se unifică adresa (acum
  apare doar „Brăileni”). Numele, adresa și telefonul trebuie scrise **identic** cu cele din `src/data/site.ts`.
- Linkul site-ului pe pagina de Facebook „Casa funerară RĂPAN”.

## Demo-ul

`git push` publică în continuare copia de pe https://demo.mrwebsites.ro/servicii-funerare-rapan/ (workflow-ul pune
`SITE_URL`/`SITE_BASE` și un `robots.txt` care blochează indexarea; paginile au și `noindex`). Producția nu are
`noindex`: Layout-ul îl pune doar când site-ul e servit dintr-un subfolder și pe paginile legale.

## Modificări ulterioare

Textele și prețurile sunt în `src/data/site.ts`. După orice modificare: `npm run build` local ca verificare, apoi
`git push`.
