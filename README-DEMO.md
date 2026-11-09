# Servicii Funerare Răpan (Bascov / Valea Ursului): demo site de prezentare

Lead: formular, 9 noiembrie 2026, discuție în WhatsApp Business (+40 751 692 692, dl. Neluțu Răpan).
Cerința: site de prezentare „să îmi atrag clienți”, primul pe Google la „servicii funerare Bascov”; a avut site
(serviciifunerarerapan.ro) care a dispărut când n-a mai plătit găzduirea. Research în `_research/national/REPORT.md`
(top site-uri RO) și `_research/local/REPORT.md` (concurența din Pitești/Argeș, site-ul vechi, firma, SEO).

**Live:** https://demo.mrwebsites.ro/servicii-funerare-rapan/ (repo `RTR-TECH-SOLUTIONS/servicii-funerare-rapan`,
GitHub Pages din workflow, publicat pe 9 nov 2026).

```
npm install
npm run dev      # http://localhost:4321/servicii-funerare-rapan/
npm run build    # dist/ static
git push         # republică pe https://demo.mrwebsites.ro/servicii-funerare-rapan/ (GitHub Pages din workflow)
```

## Versiunea 2 (feedback Mario, 9 nov 2026)

- **Multipage:** `/` Acasă, `/servicii/`, `/pachete/`, `/pomeni-si-parastase/`, `/ce-faceti-la-deces/`, `/despre-noi/`,
  `/contact/`. Fiecare pagină interioară are antet închis rotunjit cu poza clientului (`PageHeader.astro`).
- **„Prea pătrățos” → rotunjit:** butoane pastilă, carduri 24 px, panouri 32 px, poze 20 px, câmpuri 14 px, hero încadrat
  pe desktop cu banda aurie suprapusă, bara de jos pe mobil ca pastilă plutitoare (tokenii în `global.css`).
- **Chip-urile „Se pot adăuga la cerere” scoase** → blocul „Mai avem în magazin” (`Extras.astro`): clipul clientului cu
  prosoape și lumânări + listă cu titlu și o frază.
- **Pozele reale ale clientului** peste tot (20 de fișiere de pe WhatsApp, originalele în `_client/`); poza capelei
  decupată de benzile negre.
- Scoasă eticheta „Disponibili acum” din hero.

## Combinația (cerută de Mario: „o combinație mișto”, peste site-ul vechi)

Scheletul și sistemul de design sunt ale **beelsamen.ro** (cel mai bine făcut site din nișă, valori măsurate);
restul elementelor sunt luate de la alte site-uri reale din nișă:

| Secțiune | Luat de la | Ce anume |
|---|---|---|
| Fonturi, culori, butoane | Beelsamen | Cormorant Garamond 600 + Albert Sans 17/28, auriu #cfa544 + gradient, butoane radius 8 (48/54 px), ivory #fcf9f3 / linen #f3ecdf |
| Negru în loc de mov | flyerul și logo-ul Răpan | plum #2a1a27 → negru cald #14110e / #0d0b09 |
| Topbar + header | Beelsamen | bară 44 px cu zona + non-stop + telefon, header alb sticky 79 px cu „Sunați acum” |
| Hero | Memoris + Beelsamen + Ultimul Drum | poză pe toată lățimea cu text alb (Memoris), H1 + butoane Beelsamen, cuvântul italic (Ultimul Drum) |
| Banda aurie cu 3 fapte | Beelsamen | non-stop / autorizat DSP / transport gratuit în comună |
| Servicii cu poză | Beelsamen | 4 servicii, fiecare cu poza clientului |
| Pachete | Beelsamen + Memorium/Beligi | preț mare serif, chenar auriu; „din ajutorul de deces vă rămân X lei”, calculat pe loc (pensionar / membru de familie) |
| Ce faceți în primele ore | Memoris („Ce fac în caz de deces?”) | 4 pași lângă o poză reală + lista de acte |
| Pomeni și parastase | materialul clientului | galerie cu lightbox + mini-comandă (ocazie, dată, porții, post/dulce) care se trimite pe WhatsApp |
| Mașina și magazinul | Beelsamen („Mașini proprii și un sediu”) | pe negru, cu pozele reale + 4,9/49 Google |
| Zone cu timp de sosire | Ultimul Drum | ca tabel: Comuna Bascov / Pitești / comunele din jur |
| Recenzii doar text | Beelsamen | recenziile reale de pe Facebook, fără avatare |
| Fișa firmei | Beelsamen | CUI, Reg. Com., punct de lucru, autorizare DSP, dric, program + hartă |
| Banda aurie de final + bara mobilă Sună / WhatsApp | Beelsamen | |

Scos voit (semne de AI / de template): etichetele uppercase de deasupra titlurilor, caseta „pe scurt”, pill-urile,
verdele/movul, poze stock cu apus/grâu, emoji, săgețile.

## Ce e real și ce e provizoriu

**Real:** telefonul și WhatsApp-ul, adresa (Valea Ursului nr. 203, din lista DSP Argeș), firma (RĂPAN ELENA Î.F.,
CUI 47183478, F03/764/2022), dricul AG 11 RPN, nota Google 4,9 din 49, recenziile de pe Facebook, transportul gratuit
în comună (de pe flyer), serviciile (flyer + Facebook), **pachetele Basic 3.500 / Standard 4.500 / Premium 6.250 lei**
(de pe site-ul vechi, Wayback 02.2025), ajutorul de deces 2026 (9.192 / 4.596 lei).

**Pachete (de la client, WhatsApp 9 nov 2026):** prețurile 5.000 / 5.500 / 6.000 lei („50 mil, 55 mil, 60 mil”) și
conținutul pachetului de 5.500 (sicriu 1.600, cruce lemn, articole funerare, 3 capete, 6 prescuri, 10 prosoape medii,
4 prosoape preot, 24 pachete reci a 12 produse, 44 covrigi, 44 prosopele cu lumânare și moneda de 0,5, 3 colive platou
mare, vin și ulei, transport gratuit, toaletizare și îmbălsămare, capac frigorific, consultanță gratuită), afișat în
ordinea lui în `PachetContinut.astro`. „Pachetul se poate modifica în funcție de sicriul ales.”

**Provizoriu, de confirmat cu clientul** (totul în `src/data/site.ts`):
- ce diferă la pachetele de 5.000 și 6.000 (acum: același conținut, „sicriu mai simplu / mai deosebit”);
- „transport gratuit în Bascov și Pitești” (site-ul vechi spunea Pitești, flyerul spune „în comună”);
- plata din ajutorul de deces, fără avans (FAQ);
- timpii de sosire din secțiunea Zone;
- lista „Se pot adăuga la cerere”;
- că la telefon răspunde dl. Neluțu Răpan (așa apare în recenzii).

**Imagini:**
- hero: generat în Higgsfield (`gpt_image_2_6`, medium 2k, 3 variante × 1 credit; originalele în `_generated/`);
- `src/assets/client/`: pozele clientului de pe WhatsApp (`_client/wa-01…20`); clipul `public/video/prosoape-lumanari.*`
  e `wa-07.mp4` re-encodat fără sunet (mp4 + webm). Neutilizate: flyerul (`wa-06`), bannerele (`wa-11`, `wa-12`),
  clipurile `wa-08` (duba) și `wa-15` (colaj catering cu text peste).
- logo: refăcut vectorial după cel de pe Facebook (`src/components/Logo.astro`); de cerut fișierul original.

## La proiectul real
- domeniul: serviciifunerarerapan.ro e încă înregistrat la cyber_folks (doar DNS-ul e șters) → recuperăm contul sau
  domeniu nou + redirect;
- SEO local: title/H1 cu Bascov + Pitești, pagini pe localitate (satele comunei, Pitești, Bradu, Ștefănești...),
  pagini pe serviciu (transport funerar, pomeni, ajutor de deces 2026), schema `FuneralHome`, sitemap, scos `noindex`;
- Google Business Profile: acces, adăugat site-ul, adresa unificată (acum apare doar „Brăileni”), poze, recenzii;
- NAP identic pe Facebook, TikTok, directoare (inmemorie, recenziifunerare, condoleante);
- pachetul legal (cookie, Termeni, Confidențialitate) + credit RTR în footer;
- formularul de pomană poate trimite și pe e-mail (Resend).
