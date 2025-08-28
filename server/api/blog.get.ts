// server/api/blog.get.ts
export default defineEventHandler(() => {
    // 8 tema – svaka s 3 odlomka, slikom i kreditom
    const posts = [
        {
            slug: 'projektiranje-vrtova',
            title: 'Projektiranje vrtova',
            date: '2025-08-01',
            image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1600&auto=format&fit=crop',
            credit: { label: 'Unsplash – landscaping', url: 'https://unsplash.com/s/photos/landscaping' },
            excerpt:
                'Pametno projektiran vrt spaja estetiku i funkcionalnost: pravilan raspored zona, tlo i mikroklima daju dugoročan rezultat.',
            content: [
                'Projektiranje počinje analizom parcele: sunčeva ekspozicija, vjetar, tlo i pad terena. Na temelju toga postavljamo zone – ulaz, boravak, radni dio, dječje igralište – i kretanje između njih.',
                'Biljni fond biramo prema stilu (mediteranski, suvremeni minimalizam, prirodan “meadow” pristup) i održavanju. Pritom planiramo sezonalnost boja i tekstura te volumene koji daju ritam prostoru tijekom godine.',
                'U ranoj fazi definiramo i tehničke sustave – navodnjavanje, rasvjetu, odvodnju – kako bismo izbjegli naknadna preslagivanja. Dobro planiranje smanjuje trošak izvedbe i održavanja.'
            ]
        },
        {
            slug: 'kosenje-i-odrzavanje',
            title: 'Košnja i održavanje',
            date: '2025-07-22',
            image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop',
            credit: { label: 'Unsplash – lawn care', url: 'https://unsplash.com/s/photos/lawn-care' },
            excerpt:
                'Pravilna košnja (pravilo 1/3), oštri noževi i mulčiranje temelj su zdravog travnjaka kroz sezonu.',
            content: [
                'Košnja prekratko stresira travu, povećava isušivanje i potiče korove. Vodimo se pravilom 1/3 – ne uklanjati više od trećine visine u jednoj košnji.',
                'Redovito oštrenje noževa daje čist rez i manje oštećenje vlati. Mulčiranje vraća hranjive tvari i smanjuje potrebu za gnojidbom.',
                'Rutina održavanja uključuje provjetravanje (aeraciju), dosijavanje i pravilno zalijevanje – rjeđe, ali obilnije, kako bi korijen išao dublje.'
            ]
        },
        {
            slug: 'travnati-tepisi',
            title: 'Postavljanje travnatih tepiha',
            date: '2025-06-30',
            image: 'https://images.unsplash.com/photo-1661467892793-7ff44af6c82e?q=80&w=1600&auto=format&fit=crop', // sod rolls
            credit: { label: 'Unsplash – sod', url: 'https://unsplash.com/s/photos/sod' },
            excerpt:
                'Tepih travnjaci daju trenutan rezultat, ali ključ je priprema podloge i pravilno zalijevanje u prvim tjednima.',
            content: [
                'Podlogu poravnamo, uklonimo korov i upuštamo rubove. Dodajemo sloj kvalitetnog supstrata i valjkom postižemo ravninu.',
                'Tepihe polažemo “ciglasto”, spojeve dobro pripijemo i izvaljamo. Odmah nakon polaganja slijedi obilno zalijevanje.',
                'Prva košnja tek kada trava dosegne propisanu visinu i kada se tepih “spoji” s podlogom. Potom prelazimo na standardnu njegu.'
            ]
        },
        {
            slug: 'navodnjavanje-i-automatika',
            title: 'Navodnjavanje i automatika',
            date: '2025-06-10',
            image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop', // sprinkler
            credit: { label: 'Unsplash – sprinkler system', url: 'https://unsplash.com/s/photos/sprinkler-system' },
            excerpt:
                'Automatizirani sustavi štede vodu i vrijeme. Dizajn kreće od podjele zona prema potrošačima i tipu bilja.',
            content: [
                'Planiramo zone i odabir rasprskivača/drip linija prema kulturi, ekspoziciji i tlima. Time osiguravamo ravnomjernu pokrivenost bez gubitaka.',
                'Programiranje ide “rjeđe, ali dublje” – rano ujutro, uz sezonske prilagodbe. Senzori kiše i vlage sprječavaju nepotrebno zalijevanje.',
                'Pravilno održavanje (ispiranje filtara, provjera curenja) produžuje vijek sustava i osigurava zdrav rast biljaka.'
            ]
        },
        {
            slug: 'sadnja-biljaka-i-stabala',
            title: 'Sadnja biljaka i stabala',
            date: '2025-05-18',
            image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop',
            credit: { label: 'Unsplash – tree planting', url: 'https://unsplash.com/s/photos/tree-planting' },
            excerpt:
                'Ispravna sadnja i zalijevanje u startu presudni su za ukorjenjivanje – kasnije je održavanje jednostavnije.',
            content: [
                'Jamu radimo dvostruko širu od korijenske bale, s rahlim tlom i drenažom gdje je potrebno. Ne sadimo preduboko – vrat korijena mora disati.',
                'Dodajemo kvalitetan supstrat i malč kako bismo zadržali vlagu i smanjili korove. Osiguravamo kolce za stabilnost mladih stabala.',
                'Prvo zalijevanje je obilno; zatim pratimo vlagu i smanjujemo učestalost kako se biljka ukorjenjuje.'
            ]
        },
        {
            slug: 'rad-u-maslinicima',
            title: 'Rad u maslinicima',
            date: '2025-04-14',
            image: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Olive_Grove_prunings_in_neat_rows._Ostuni%2C_Puglia.jpg',
            credit: { label: 'Wikimedia Commons – Olive pruning (CC BY-SA)', url: 'https://commons.wikimedia.org/wiki/File:Olive_Grove_prunings_in_neat_rows._Ostuni,_Puglia.jpg' },
            excerpt:
                'Godišnja rezidba, gnojidba i navodnjavanje ključ su stabilnog prinosa i zdravlja stabala.',
            content: [
                'Rezidbom održavamo prozračnu krošnju, ravnotežu rodnog i mladog drva te olakšavamo berbu. Uklanjamo suhe i ukrštene grane.',
                'Prema analizi tla uvodimo ciljanu gnojidbu i navodnjavanje (posebno u sušnim sezonama). Time stabiliziramo urod i kvalitetu ulja.',
                'Zaštita od štetnika ide integriranim pristupom i praćenjem fenofaza. Održavanje podmaslinika smanjuje konkurenciju za vodu.'
            ]
        },
        {
            slug: 'uklanjanje-stabala',
            title: 'Uklanjanje stabala i čišćenje terena',
            date: '2025-03-05',
            image: 'https://images.unsplash.com/photo-1631274085849-8e9ba8d3a9e4?q=80&w=1600&auto=format&fit=crop', // arborist
            credit: { label: 'Unsplash – tree removal', url: 'https://unsplash.com/s/photos/tree-removal' },
            excerpt:
                'Sigurno uklanjanje zahtijeva procjenu rizika, odgovarajuću opremu i plan rezova po segmentima.',
            content: [
                'Procjenjujemo statiku, nagib i okruženje (objekti, instalacije). Biramo tehniku – segmentno rušenje uz osiguranje konopcima ili dizalicom.',
                'Radimo s certificiranom opremom (PPE) i kvalificiranim penjačima. Zona rada se osigurava i komunicira sa stanovnicima.',
                'Nakon uklanjanja zbrinjavamo drvo i frezamo panj ako je potrebno, a parcelu pripremamo za novu sadnju.'
            ]
        },
        {
            slug: 'dekorativno-uredenje',
            title: 'Dekorativno uređenje (batud, kora itd.)',
            date: '2025-02-10',
            image: 'https://images.unsplash.com/photo-1719679074441-7dd25745a40d?q=80&w=1600&auto=format&fit=crop', // mulch
            credit: { label: 'Unsplash – mulch', url: 'https://unsplash.com/s/photos/mulch' },
            excerpt:
                'Materijali poput batuda, usitnjene kore ili kamena daju čistoću linija, smanjuju korove i čuvaju vlagu.',
            content: [
                'Dekorativni slojevi oblikuju jasne rubove gredica i staza te naglašavaju biljke. Boja i granulacija biraju se prema stilu vrta.',
                'Organski malčevi (kora, drvna sječka) poboljšavaju tlo razgradnjom, dok anorganski (kamen) traže manje održavanja ali ne hrane tlo.',
                'Pravilna debljina sloja (5–7 cm) i rubnjaci sprječavaju rasipanje. Održavanje uključuje povremeno dopunjavanje i čišćenje.'
            ]
        }
    ]

    return { posts }
})
