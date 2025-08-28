import { c as defineEventHandler } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const blog_get = defineEventHandler(() => {
  const posts = [
    {
      slug: "projektiranje-vrtova",
      title: "Projektiranje vrtova",
      date: "2025-08-01",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1600&auto=format&fit=crop",
      credit: { label: "Unsplash \u2013 landscaping", url: "https://unsplash.com/s/photos/landscaping" },
      excerpt: "Pametno projektiran vrt spaja estetiku i funkcionalnost: pravilan raspored zona, tlo i mikroklima daju dugoro\u010Dan rezultat.",
      content: [
        "Projektiranje po\u010Dinje analizom parcele: sun\u010Deva ekspozicija, vjetar, tlo i pad terena. Na temelju toga postavljamo zone \u2013 ulaz, boravak, radni dio, dje\u010Dje igrali\u0161te \u2013 i kretanje izme\u0111u njih.",
        "Biljni fond biramo prema stilu (mediteranski, suvremeni minimalizam, prirodan \u201Cmeadow\u201D pristup) i odr\u017Eavanju. Pritom planiramo sezonalnost boja i tekstura te volumene koji daju ritam prostoru tijekom godine.",
        "U ranoj fazi definiramo i tehni\u010Dke sustave \u2013 navodnjavanje, rasvjetu, odvodnju \u2013 kako bismo izbjegli naknadna preslagivanja. Dobro planiranje smanjuje tro\u0161ak izvedbe i odr\u017Eavanja."
      ]
    },
    {
      slug: "kosenje-i-odrzavanje",
      title: "Ko\u0161nja i odr\u017Eavanje",
      date: "2025-07-22",
      image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop",
      credit: { label: "Unsplash \u2013 lawn care", url: "https://unsplash.com/s/photos/lawn-care" },
      excerpt: "Pravilna ko\u0161nja (pravilo 1/3), o\u0161tri no\u017Eevi i mul\u010Diranje temelj su zdravog travnjaka kroz sezonu.",
      content: [
        "Ko\u0161nja prekratko stresira travu, pove\u0107ava isu\u0161ivanje i poti\u010De korove. Vodimo se pravilom 1/3 \u2013 ne uklanjati vi\u0161e od tre\u0107ine visine u jednoj ko\u0161nji.",
        "Redovito o\u0161trenje no\u017Eeva daje \u010Dist rez i manje o\u0161te\u0107enje vlati. Mul\u010Diranje vra\u0107a hranjive tvari i smanjuje potrebu za gnojidbom.",
        "Rutina odr\u017Eavanja uklju\u010Duje provjetravanje (aeraciju), dosijavanje i pravilno zalijevanje \u2013 rje\u0111e, ali obilnije, kako bi korijen i\u0161ao dublje."
      ]
    },
    {
      slug: "travnati-tepisi",
      title: "Postavljanje travnatih tepiha",
      date: "2025-06-30",
      image: "https://images.unsplash.com/photo-1661467892793-7ff44af6c82e?q=80&w=1600&auto=format&fit=crop",
      // sod rolls
      credit: { label: "Unsplash \u2013 sod", url: "https://unsplash.com/s/photos/sod" },
      excerpt: "Tepih travnjaci daju trenutan rezultat, ali klju\u010D je priprema podloge i pravilno zalijevanje u prvim tjednima.",
      content: [
        "Podlogu poravnamo, uklonimo korov i upu\u0161tamo rubove. Dodajemo sloj kvalitetnog supstrata i valjkom posti\u017Eemo ravninu.",
        "Tepihe pola\u017Eemo \u201Cciglasto\u201D, spojeve dobro pripijemo i izvaljamo. Odmah nakon polaganja slijedi obilno zalijevanje.",
        "Prva ko\u0161nja tek kada trava dosegne propisanu visinu i kada se tepih \u201Cspoji\u201D s podlogom. Potom prelazimo na standardnu njegu."
      ]
    },
    {
      slug: "navodnjavanje-i-automatika",
      title: "Navodnjavanje i automatika",
      date: "2025-06-10",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop",
      // sprinkler
      credit: { label: "Unsplash \u2013 sprinkler system", url: "https://unsplash.com/s/photos/sprinkler-system" },
      excerpt: "Automatizirani sustavi \u0161tede vodu i vrijeme. Dizajn kre\u0107e od podjele zona prema potro\u0161a\u010Dima i tipu bilja.",
      content: [
        "Planiramo zone i odabir rasprskiva\u010Da/drip linija prema kulturi, ekspoziciji i tlima. Time osiguravamo ravnomjernu pokrivenost bez gubitaka.",
        "Programiranje ide \u201Crje\u0111e, ali dublje\u201D \u2013 rano ujutro, uz sezonske prilagodbe. Senzori ki\u0161e i vlage sprje\u010Davaju nepotrebno zalijevanje.",
        "Pravilno odr\u017Eavanje (ispiranje filtara, provjera curenja) produ\u017Euje vijek sustava i osigurava zdrav rast biljaka."
      ]
    },
    {
      slug: "sadnja-biljaka-i-stabala",
      title: "Sadnja biljaka i stabala",
      date: "2025-05-18",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
      credit: { label: "Unsplash \u2013 tree planting", url: "https://unsplash.com/s/photos/tree-planting" },
      excerpt: "Ispravna sadnja i zalijevanje u startu presudni su za ukorjenjivanje \u2013 kasnije je odr\u017Eavanje jednostavnije.",
      content: [
        "Jamu radimo dvostruko \u0161iru od korijenske bale, s rahlim tlom i drena\u017Eom gdje je potrebno. Ne sadimo preduboko \u2013 vrat korijena mora disati.",
        "Dodajemo kvalitetan supstrat i mal\u010D kako bismo zadr\u017Eali vlagu i smanjili korove. Osiguravamo kolce za stabilnost mladih stabala.",
        "Prvo zalijevanje je obilno; zatim pratimo vlagu i smanjujemo u\u010Destalost kako se biljka ukorjenjuje."
      ]
    },
    {
      slug: "rad-u-maslinicima",
      title: "Rad u maslinicima",
      date: "2025-04-14",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Olive_Grove_prunings_in_neat_rows._Ostuni%2C_Puglia.jpg",
      credit: { label: "Wikimedia Commons \u2013 Olive pruning (CC BY-SA)", url: "https://commons.wikimedia.org/wiki/File:Olive_Grove_prunings_in_neat_rows._Ostuni,_Puglia.jpg" },
      excerpt: "Godi\u0161nja rezidba, gnojidba i navodnjavanje klju\u010D su stabilnog prinosa i zdravlja stabala.",
      content: [
        "Rezidbom odr\u017Eavamo prozra\u010Dnu kro\u0161nju, ravnote\u017Eu rodnog i mladog drva te olak\u0161avamo berbu. Uklanjamo suhe i ukr\u0161tene grane.",
        "Prema analizi tla uvodimo ciljanu gnojidbu i navodnjavanje (posebno u su\u0161nim sezonama). Time stabiliziramo urod i kvalitetu ulja.",
        "Za\u0161tita od \u0161tetnika ide integriranim pristupom i pra\u0107enjem fenofaza. Odr\u017Eavanje podmaslinika smanjuje konkurenciju za vodu."
      ]
    },
    {
      slug: "uklanjanje-stabala",
      title: "Uklanjanje stabala i \u010Di\u0161\u0107enje terena",
      date: "2025-03-05",
      image: "https://images.unsplash.com/photo-1631274085849-8e9ba8d3a9e4?q=80&w=1600&auto=format&fit=crop",
      // arborist
      credit: { label: "Unsplash \u2013 tree removal", url: "https://unsplash.com/s/photos/tree-removal" },
      excerpt: "Sigurno uklanjanje zahtijeva procjenu rizika, odgovaraju\u0107u opremu i plan rezova po segmentima.",
      content: [
        "Procjenjujemo statiku, nagib i okru\u017Eenje (objekti, instalacije). Biramo tehniku \u2013 segmentno ru\u0161enje uz osiguranje konopcima ili dizalicom.",
        "Radimo s certificiranom opremom (PPE) i kvalificiranim penja\u010Dima. Zona rada se osigurava i komunicira sa stanovnicima.",
        "Nakon uklanjanja zbrinjavamo drvo i frezamo panj ako je potrebno, a parcelu pripremamo za novu sadnju."
      ]
    },
    {
      slug: "dekorativno-uredenje",
      title: "Dekorativno ure\u0111enje (batud, kora itd.)",
      date: "2025-02-10",
      image: "https://images.unsplash.com/photo-1719679074441-7dd25745a40d?q=80&w=1600&auto=format&fit=crop",
      // mulch
      credit: { label: "Unsplash \u2013 mulch", url: "https://unsplash.com/s/photos/mulch" },
      excerpt: "Materijali poput batuda, usitnjene kore ili kamena daju \u010Disto\u0107u linija, smanjuju korove i \u010Duvaju vlagu.",
      content: [
        "Dekorativni slojevi oblikuju jasne rubove gredica i staza te nagla\u0161avaju biljke. Boja i granulacija biraju se prema stilu vrta.",
        "Organski mal\u010Devi (kora, drvna sje\u010Dka) pobolj\u0161avaju tlo razgradnjom, dok anorganski (kamen) tra\u017Ee manje odr\u017Eavanja ali ne hrane tlo.",
        "Pravilna debljina sloja (5\u20137 cm) i rubnjaci sprje\u010Davaju rasipanje. Odr\u017Eavanje uklju\u010Duje povremeno dopunjavanje i \u010Di\u0161\u0107enje."
      ]
    }
  ];
  return { posts };
});

export { blog_get as default };
//# sourceMappingURL=blog.get.mjs.map
