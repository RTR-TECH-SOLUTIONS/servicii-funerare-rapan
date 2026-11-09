import type { ImageMetadata } from 'astro';
import dricBiserica from '../assets/client/dric-biserica.jpg';
import dricBiserica2 from '../assets/client/dric-biserica-2.jpg';
import duba from '../assets/client/duba.jpg';
import magazin from '../assets/client/magazin.jpg';
import magazinZi from '../assets/client/magazin-zi.jpg';
import capela from '../assets/client/capela-acasa.jpg';
import coliva from '../assets/client/coliva.jpg';
import pomanaPeste from '../assets/client/pomana-peste.jpg';
import pomanaPeste2 from '../assets/client/pomana-peste-2.jpg';
import pomanaSarmale from '../assets/client/pomana-sarmale.jpg';
import pomanaLegume from '../assets/client/pomana-legume.jpg';
import pomanaPlatou from '../assets/client/pomana-platou.jpg';
import pomanaVarza from '../assets/client/pomana-varza.jpg';

// BASE_URL este "/" pe un domeniu propriu și "/nume-repo/" pe GitHub Pages.
// u() lipește prefixul pe linkuri și pe fișierele din public/, ca să meargă în ambele cazuri.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (cale: string) => `${base}${cale}`;

// Tot conținutul editabil stă aici. Ce e provizoriu e listat în README-DEMO.md.
export const site = {
  name: 'Servicii Funerare Răpan',
  short: 'Răpan',
  phone: '0751 692 692',
  phoneHref: 'tel:+40751692692',
  whatsapp: '40751692692',
  address: 'Valea Ursului nr. 203, com. Bascov, jud. Argeș',
  addressShort: 'Valea Ursului, Bascov',
  // Date publice: ANAF + lista DSP Argeș a prestatorilor autorizați (HG 741/2016), nr. 14212 / 12.06.2026, poz. 41.
  legal: {
    name: 'RĂPAN ELENA ÎNTREPRINDERE FAMILIALĂ',
    cui: '47183478',
    reg: 'F03/764/2022',
    hearse: 'AG 11 RPN',
  },
  facebook: 'https://www.facebook.com/profile.php?id=100089671488654',
  // Recenzii din profilul Google „Servicii Funerare Răpan” (9 nov 2026).
  google: { rating: '4,9', count: 49 },
  // Ajutorul de deces 2026 (decese de la 30.03.2026), sursa: Casa Națională de Pensii.
  ajutor: { asigurat: 9192, familie: 4596 },
};

export const waLink = (text = 'Bună ziua, am nevoie de ajutor cu o înmormântare. ') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const lei = (n: number) => `${n.toLocaleString('ro-RO')} lei`;

export type PageKey = 'acasa' | 'servicii' | 'pachete' | 'pomeni' | 'deces' | 'despre' | 'contact';

export const nav: { key: PageKey; href: string; label: string }[] = [
  { key: 'servicii', href: u('/servicii/'), label: 'Servicii' },
  { key: 'pachete', href: u('/pachete/'), label: 'Pachete' },
  { key: 'pomeni', href: u('/pomeni-si-parastase/'), label: 'Pomeni și parastase' },
  { key: 'deces', href: u('/ce-faceti-la-deces/'), label: 'Ce faceți la deces' },
  { key: 'despre', href: u('/despre-noi/'), label: 'Despre noi' },
  { key: 'contact', href: u('/contact/'), label: 'Contact' },
];

export type Photo = { img: ImageMetadata; alt: string };

export const photos = {
  dricBiserica: { img: dricBiserica, alt: 'Mașina mortuară Răpan, un Mercedes argintiu cu coroane, în fața unei biserici cu pridvor pictat' },
  dricBiserica2: { img: dricBiserica2, alt: 'Mașina mortuară Răpan parcată în fața bisericii, la o înmormântare' },
  duba: { img: duba, alt: 'Duba albă „Transport funerar” a firmei Răpan, în fața unei biserici' },
  magazin: { img: magazin, alt: 'Magazinul Pompe Funebre Răpan din Valea Ursului, seara, cu coroane și lumânări la intrare' },
  magazinZi: { img: magazinZi, alt: 'Magazinul Pompe Funebre Răpan, ziua, cu coroane și cruci la intrare' },
  capela: { img: capela, alt: 'Capelă amenajată acasă, cu icoana Mântuitorului, sfeșnice și flori albe' },
  coliva: { img: coliva, alt: 'Colivă ornată cu crucea și textul „Veșnica pomenire”, lângă colaci' },
} satisfies Record<string, Photo>;

// Banda aurie de sub hero (3 fapte).
export const facts = [
  { icon: 'clock', title: 'Non-stop, 24 din 24', text: 'Răspundem și noaptea, și de sărbători.' },
  { icon: 'shield', title: 'Autorizați DSP Argeș', text: `Mașină mortuară proprie, ${site.legal.hearse}.` },
  { icon: 'pin', title: 'Transport gratuit în comună', text: 'În Bascov și în toate satele comunei.' },
];

export type Service = {
  id: string;
  title: string;
  short: string;
  text: string[];
  points: string[];
  photo: Photo;
  extra?: Photo;
};

export const services: Service[] = [
  {
    id: 'transport-funerar',
    title: 'Transport funerar',
    short: 'Cu mașina noastră autorizată, de acasă sau de la spital până la biserică și la cimitir.',
    text: [
      'Avem două mașini: Mercedes-ul mortuar, autorizat de DSP Argeș, și o dubă pentru transportul sicriului și al coroanelor.',
      'Venim după decedat acasă, la spital sau la morgă și îl ducem acolo unde se face priveghiul, apoi la biserică și la cimitir.',
    ],
    points: ['Gratuit în comuna Bascov', 'Pitești și comunele din jur', 'Transport între localități și din alte orașe, la cerere'],
    photo: photos.dricBiserica,
    extra: photos.duba,
  },
  {
    id: 'sicrie-si-accesorii',
    title: 'Sicrie, cruci și accesorii',
    short: 'Sicrie echipate, cruci, coroane, lumânări, prosoape și batiste, în magazinul nostru.',
    text: [
      'În magazinul din Valea Ursului găsiți sicrie din lemn, echipate cu mânere, lenjerie și pernă, plus tot ce trebuie pentru înmormântare.',
      'Le puteți vedea pe loc, zi sau noapte, sau vă trimitem poze pe WhatsApp.',
    ],
    points: ['Sicrie de la 1.000 lei', 'Cruci, coroane și jerbe', 'Lumânări, prosoape, batiste, doliu'],
    // Poza cu sicriul (wa-09) a fost scoasă la cererea lui Mario; magazinul arată crucile și coroanele.
    photo: photos.magazinZi,
    extra: photos.magazin,
  },
  {
    id: 'capela-si-pregatire',
    title: 'Pregătire și capelă acasă',
    short: 'Toaletăm decedatul și amenajăm capela acasă, cu icoană, sfeșnice și flori.',
    text: [
      'Ne ocupăm de toaletarea și îmbrăcarea decedatului, cu respect și discreție.',
      'Pentru priveghi aducem acasă panourile, icoana, sfeșnicele și florile, ca familia să nu mai alerge după ele.',
    ],
    points: ['Toaletare și îmbrăcare', 'Capelă amenajată acasă', 'Sau la capela cimitirului'],
    photo: photos.capela,
  },
  {
    id: 'pomeni-si-parastase',
    title: 'Pomeni și parastase',
    short: 'Gătim pentru masa de la înmormântare și pentru parastase. Facem și coliva.',
    text: [
      'Pregătim meniuri de post sau de dulce, în caserole, pentru înmormântare și pentru parastasele de 3, 9 și 40 de zile, 6 luni și un an.',
    ],
    points: ['Meniuri de post și de dulce', 'Colivă, colaci, pachete de pomană', 'Livrare la casă sau la biserică'],
    photo: { img: pomanaPeste, alt: 'Caserole cu pește la cuptor, orez și felii de lămâie' },
  },
];

// Pachetele de pe site-ul vechi (Wayback Machine, 28.02.2025).
// TODO(real): de confirmat cu dl. Răpan prețurile și conținutul pentru 2026.
export const packages = [
  {
    id: 'basic',
    name: 'Basic',
    price: 3500,
    note: 'Ce e strict necesar, fără masă de pomană.',
    items: [
      'Sicriu de 1.000 lei, cu mânere, lenjerie și pernă',
      'Toaletizarea decedatului',
      'Transport cu mașina autorizată DSP, gratuit în Bascov și Pitești',
    ],
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 4500,
    note: 'Cu pachetele pentru parastas incluse.',
    items: [
      'Sicriu de 1.200 lei, cu mânere, lenjerie și pernă',
      'Toaletizarea decedatului',
      'Pachete pentru parastas',
      'Transport cu mașina autorizată DSP, gratuit în Bascov și Pitești',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 6250,
    note: 'Cu masa de pomană gătită de noi.',
    items: [
      'Sicriu de 1.600 lei, cu mânere, lenjerie și pernă',
      'Toaletizarea decedatului',
      'Pachete pentru parastas',
      '30 de meniuri, cu 2 feluri la alegere',
      'Transport cu mașina autorizată DSP, gratuit în Bascov și Pitești',
    ],
  },
];

// „Mai avem în magazin” (înlocuiește chip-urile). TODO(real): lista exactă de la client.
export const extras = [
  { title: 'Coroane și jerbe', text: 'Din flori naturale sau artificiale, cu panglică.' },
  { title: 'Cruci de lemn', text: 'Cruce mare pentru mormânt și cruce de piept.' },
  { title: 'Lumânări, prosoape și batiste', text: 'Pregătite pentru priveghi și pentru slujbă.' },
  { title: 'Colivă și colaci', text: 'Pentru înmormântare și pentru fiecare parastas.' },
  { title: 'Capelă amenajată acasă', text: 'Panouri, icoană, sfeșnice și flori pentru priveghi.' },
  { title: 'Pachete de pomană', text: 'Pachete reci sau calde, gata de împărțit.' },
];

export const notIncluded = ['Locul de veci', 'Taxele cimitirului și groparii', 'Slujba preotului'];

export const steps = [
  {
    title: 'Ne sunați la 0751 692 692',
    text: 'Vă răspundem la orice oră. Ne spuneți unde se află decedatul, acasă sau la spital, și venim.',
  },
  {
    title: 'Constatarea decesului',
    text: 'Dacă decesul a fost acasă, e nevoie de medicul de familie sau de un medic legist. Vă spunem pe cine să chemați.',
  },
  {
    title: 'Pregătirea și capela',
    text: 'Aducem sicriul și tot ce trebuie, pregătim decedatul și amenajăm capela acasă sau la capela cimitirului.',
  },
  {
    title: 'Actele și ajutorul de deces',
    text: 'Mergem cu dumneavoastră la Starea Civilă pentru certificatul de deces și pregătim dosarul pentru Casa de Pensii.',
  },
];

export const documents = [
  'Buletinul decedatului',
  'Certificatul de naștere și, dacă e cazul, cel de căsătorie',
  'Ultimul cupon de pensie',
  'Buletinul persoanei care se ocupă de înmormântare',
];

export type Dish = Photo & { caption: string };

// Catering pentru pomeni: pozele trimise de client.
export const pomeni: Dish[] = [
  { img: pomanaPeste, alt: 'Caserole cu pește la cuptor, orez și felii de lămâie', caption: 'Pește la cuptor cu orez' },
  { img: pomanaPlatou, alt: 'Platouri mari cu aperitive pentru o masă de pomană', caption: 'Platouri reci' },
  { img: pomanaSarmale, alt: 'Caserole cu sarmale, mămăligă și ardei iute', caption: 'Sarmale cu mămăligă' },
  { img: pomanaLegume, alt: 'Caserole cu legume la cuptor, zacuscă și murături', caption: 'Meniu de post' },
  { img: pomanaVarza, alt: 'Caserole cu varză călită, cartofi și ardei', caption: 'Varză călită cu cartofi' },
  { img: pomanaPeste2, alt: 'Caserole cu file de pește, orez și lămâie', caption: 'File de pește' },
];

export const occasions = ['Înmormântare', '3 zile', '9 zile', '40 de zile', '6 luni', '1 an', 'Altă ocazie'];

// Satele comunei Bascov + Pitești + comunele vecine. TODO(real): timpii de sosire de la client.
export const zones = [
  {
    area: 'Comuna Bascov',
    places: ['Valea Ursului', 'Bascov', 'Brăileni', 'Glâmbocu', 'Mica', 'Prislopu Mic', 'Schitu Scoicești', 'Uiasca'],
    time: 'în 10-15 minute',
    note: 'Transport gratuit',
  },
  {
    area: 'Municipiul Pitești',
    places: ['Toate cartierele', 'Spitalul Județean', 'capelele cimitirelor'],
    time: 'în 20-30 de minute',
    note: 'Transport gratuit',
  },
  {
    area: 'Comunele din jur',
    places: ['Bradu', 'Ștefănești', 'Mărăcineni', 'Budeasa', 'Merișani', 'Poiana Lacului', 'Moșoaia', 'Mioveni'],
    time: 'în 20-40 de minute',
    note: 'Preț după distanță',
  },
];

// Recenzii reale de pe pagina de Facebook „Casa funerară RĂPAN” (11 recomandări, 100%).
export const reviews = [
  { name: 'Andrei', when: 'mai 2025', text: 'Recomand cu încredere, un om cu suflet mare, profesionist și serios! Nota 10+' },
  { name: 'Victorița T.', when: 'aprilie 2025', text: 'Sunt cei mai buni și cei care te ajută fără să ezite.' },
  { name: 'Bianca G.', when: '2025', text: 'Servicii prompte și calitative. Recomand cu încredere!' },
  { name: 'Eduard P.', when: 'decembrie 2023', text: 'Mulțumim Casa Funerară Răpan pentru serviciile de înaltă calitate.' },
  { name: 'Nicolae R.', when: 'aprilie 2024', text: 'Oferă servicii prompte și de calitate.' },
];

export type Qa = { q: string; a: string };

export const faqMoney: Qa[] = [
  {
    q: 'Cât este ajutorul de deces în 2026?',
    a: `Pentru un pensionar sau un asigurat, ajutorul de deces este de ${lei(site.ajutor.asigurat)}. Pentru un membru de familie al unui asigurat este de ${lei(site.ajutor.familie)}. Îl primește persoana care face dovada că a suportat cheltuielile de înmormântare.`,
  },
  {
    q: 'Trebuie să plătesc ceva în avans?',
    // TODO(real): de confirmat cu clientul cum se face plata.
    a: 'Discutăm la telefon și vă spunem de la început cât costă. Plata se poate face din ajutorul de deces, după ce îl primiți de la Casa de Pensii.',
  },
  {
    q: 'Ce nu intră în pachete?',
    a: 'Locul de veci, taxele cimitirului, groparii și slujba preotului se plătesc separat. Vă ajutăm să le organizați.',
  },
  {
    q: 'Pot schimba ceva într-un pachet?',
    a: 'Da. Puteți alege alt sicriu, adăuga coroane sau masa de pomană. Vă spunem prețul pe loc, înainte să hotărâți.',
  },
];

export const faqDeces: Qa[] = [
  {
    q: 'Ce fac imediat după ce a murit cineva acasă?',
    a: 'Sunați-ne la 0751 692 692 și chemați medicul de familie pentru constatarea decesului. Noi venim, vă spunem pașii și ne ocupăm de pregătire, sicriu și capelă.',
  },
  {
    q: 'Dacă decesul a fost la spital?',
    a: 'Spitalul eliberează constatarea decesului. Ne sunați, iar noi venim la morga spitalului cu actele și cu mașina, și ne ocupăm de restul.',
  },
  {
    q: 'Puteți veni și noaptea?',
    a: 'Da. Suntem disponibili non-stop, inclusiv în weekend și de sărbători. Vă răspunde direct domnul Neluțu Răpan.',
  },
  {
    q: 'Lucrați și în afara comunei Bascov?',
    a: 'Da, în Pitești și în comunele din jur, iar la cerere oriunde în țară. În comuna Bascov și în Pitești transportul este gratuit.',
  },
];

export const faqPomeni: Qa[] = [
  {
    q: 'Puteți găti doar pentru un parastas?',
    a: 'Da. Facem meniuri de post sau de dulce pentru parastasele de 3, 9 și 40 de zile, 6 luni și un an, plus colivă și colaci. Ne spuneți data și numărul de porții.',
  },
  {
    q: 'Cu cât timp înainte trebuie să comand?',
    // TODO(real): termenul real de la client.
    a: 'Pentru înmormântare ne organizăm din prima zi. Pentru parastase, e bine să ne spuneți cu 2-3 zile înainte.',
  },
  {
    q: 'Aduceți mâncarea la biserică?',
    a: 'Da, o aducem în caserole, la casă sau la biserică, gata de împărțit.',
  },
];
