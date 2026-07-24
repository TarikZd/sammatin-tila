import type { Content } from "../lib/types";

export const content: Content = {
  site: {
    url: "https://www.sammatintila.fi",
    title: "Sammatin tila – Lypsykarjatila ja lomamökit Ylöjärvellä",
    description:
      "Sammatin tila on ylöjärveläinen lypsykarjatila, jossa on 24/7 itsepalvelumyymälä, naudanlihaa omasta karjasta, maitoa ja kolme järvenrantamökkiä.",
    ogImage: "/images/farm-aerial.webp",
    keywords:
      "Sammatin tila, Ylöjärvi, Lakiala, lypsykarjatila, maatilamyymälä, lähiruoka, naudanliha, mökkivuokraus, lomamökit, järvimaisema",
  },

  lang: { label: "Suomi", code: "fi" },

  navigation: {
    logo: "Sammatin tila",
    links: [
      { label: "Etusivu", href: "#hero" },
      { label: "Tila", href: "#about" },
      { label: "Historia", href: "#history" },
      { label: "Tuotteet", href: "#products" },
      { label: "Mökit", href: "#cabins" },
      { label: "Galleria", href: "#gallery" },
      { label: "Sijainti", href: "#location" },
      { label: "Yhteys", href: "#contact" },
    ],
    langSwitch: "In English",
  },

  hero: {
    title: "Sammatin tila",
    subtitle:
      "Ylöjärveläinen lypsykarjatila, jossa yhdistyvät vastuullinen kotieläintalous, lähiruoka, maatilamyymälä ja järvenrantamökit. Tervetuloa tutustumaan!",
    cta: "Tutustu tilaan",
    image: "/images/farm-aerial.webp",
    imageAlt: "Sammatin tila – maalaismaisema Lakialassa",
  },

  about: {
    title: "Tervetuloa Sammatin tilalle",
    intro: [
      "Sammatin tila on Ylöjärvellä Lakialassa sijaitseva lypsykarjatila, jossa on aina panostettu eläinten hyvinvointiin ja vastuulliseen maatalouteen. Tilan pinta-ala on noin 130 hehtaaria, josta suurin osa on viljelysmaata. Nykyinen yrittäjä Suvi Rajala aloitti tilanpidon Sammatin tilan nimellä vuonna 2003, jatkaen alueen vahvoja maatalousperinteitä. Vuonna 2016 toiminta laajeni ja tila muutettiin osakeyhtiöksi.",
      "Tilan yhteydessä toimii 24/7 itsepalvelumyymälä, josta löytyy oman karjan naudanlihaa jauhelihana, paisteina ja fileinä sekä maitoa. Lisäksi vuokraamme kolmea viihtyisää järvenrantamökkiä lomailijoille. Tilan emäntä Suvi Rajala on tunnettu aktiivisesta toiminnastaan maatalousalan vaikuttajana ja hänet valittiin vuonna 2025 Suomen Yrittäjien ruokavaliokuntaan.",
    ],
    highlight: { number: "130", label: "hehtaaria viljelysmaata" },
    values: [
      {
        title: "Eläinten hyvinvointi",
        body: "Jokaisella lehmällä on nimi ja yksilöllinen hoito. Vasikat saavat olla emänsä kanssa alkuun ja juovat 8 litraa maitoa päivässä 8 viikon ajan. Robottilypsy antaa lehmille vapauden päättää lypsyrytminsä itse. Kesäisin lehmät pääsevät laitumelle.",
      },
      {
        title: "Vastuullisuus",
        body: "Tila tunnustaa maatalouden haasteet ja pyrkii toimimaan mahdollisimman kestävästi. Vuonna 2007 valmistunut pihatto paransi eläinten olosuhteita merkittävästi ja mahdollisti nykyaikaisen lypsykarjatalouden. Tilalla on myös nuorkarjarakennus vuodelta 1997.",
      },
      {
        title: "Paikallisuus",
        body: "Tuotteet myydään suoraan tilalta ja lähialueen toimipisteistä. Lyhyt jakeluketju takaa tuoreuden ja täyden jäljitettävyyden. Tila työllistää 4 vakituista ja 7–8 kausityöntekijää, vahvistaen paikallista elinkeinoelämää.",
      },
    ],
    image: "/images/farm-aerial.webp",
    imageAlt: "Sammatin tila pihapiiri Lakialassa",
  },

  history: {
    title: "Historia",
    events: [
      {
        year: "1997",
        description:
          "Nuorkarjarakennus valmistui, mikä loi pohjan tilan kasvulle ja nykyaikaiselle karjankasvatukselle.",
      },
      {
        year: "2003",
        description:
          "Suvi Rajala aloitti tilanpidon 20-vuotiaana Sammatin tilan nimellä, jatkaen sukunsa maatalousperinteitä.",
      },
      {
        year: "2007",
        description:
          "Uusi pihatto valmistui, parantaen merkittävästi eläinten olosuhteita ja mahdollistaen robotiikalla toimivan lypsykarjatalouden.",
      },
      {
        year: "2016",
        description:
          "Tila muutettiin Sammatin tila Oy:ksi (2749244-7). Samana vuonna Suvi Rajala palkittiin Ylöjärven Yrittäjien Vuoden nuorena yrittäjänä.",
      },
      {
        year: "2025",
        description:
          "Suvi Rajala valittiin Suomen Yrittäjien ruokavaliokuntaan kaudelle 2025–2026. Sammatin tila Oy osti yhdessä Nimetön Oy:n kanssa entisen Ylisen kuntoutuskeskuksen kiinteistön Näsijärven rannalta noin 19 hehtaarin alueella hintaan 396 270 euroa.",
      },
    ],
  },

  products: {
    title: "Tuotteet ja palvelut",
    subtitle:
      "Laadukasta naudanlihaa omasta karjasta suoraan tilamyymälästämme. Myymme myös maitoa, vuokraamme eläinpaikkoja ja tarjoamme lomamajoitusta.",
    categories: [
      {
        title: "Naudanliha",
        items: [
          {
            name: "Jauheliha",
            description:
              "Tuoretta, kotimaista naudan jauhelihaa omasta karjasta. Sopii arjen ruoanlaittoon ja juhlavampiin hetkiin.",
            image: "/images/farm-cows.webp",
            imageAlt: "Naudan jauheliha",
          },
          {
            name: "Paistit",
            description:
              "Mureita naudanpaisteja uuniruokiin ja hitaaseen haudutukseen. Täyteläinen maku suoraan tilalta.",
            image: "/images/farm-feed.webp",
            imageAlt: "Naudan paistit",
          },
          {
            name: "Fileet",
            description:
              "Huippulaatuisia naudanfileitä erityisiin hetkiin. Tilamme karjan parasta antia.",
            image: "/images/farm-pasture.webp",
            imageAlt: "Naudan fileet",
          },
        ],
      },
    ],
    note: "Itsepalvelumyymälä on avoinna 24/7. Tervetuloa tutustumaan valikoimaan!",
    dairySection: {
      title: "Lypsykarja",
      body: [
        "Tilamme pääasiallinen tuotantosuunta on lypsykarjatalous. Lehmät lypsetään robottilypsyjärjestelmällä, joka mahdollistaa eläinten oman luontaisen rytmin. Vasikat saavat emänmaitoa ja kasvavat omassa osastossaan ennen siirtymistään nuorkarjaan.",
        "Tila myy maitoa meijeriteollisuuden raaka-aineeksi ja vuokraa eläinpaikkoja muille tuottajille.",
      ],
      breeds: "Rotu: ayrshire (päärotu)",
      production: "Tuotanto: n. 1,96 milj. € liikevaihto (2023)",
    },
  },

  cabins: {
    title: "Lomamökit",
    subtitle:
      "Vietä lomasi kauniissa järvimaisemassa Ylöjärvellä. Kolme rauhallista mökkiämme tarjoavat luonnonläheisen ympäristön rentoutumiseen. Mökit vuokrataan vain kesäkaudella.",
    cabins: [
      {
        id: "hauenmaa",
        name: "Hauenmaa",
        tagline: "Avaruutta ja järvimaisemia – hirsihuvila kuudelle",
        description: [
          "Hauenmaa on tilava hirsihuvila järven rannalla, täydellinen perheille tai ystäväporukoille. Rakennettu 1993, pinta-ala 45+15 m². Mökissä on avokeittiö ja olohuone, kaksi erillistä makuuhuonetta (parisänky ja kerrossänky), pukuhuone ja puusauna suihkulla. Terassilta avautuu kaunis järvinäkymä.",
        ],
        capacity: "6 henkilöä",
        size: "45+15 m²",
        built: "1993",
        layout: [
          "1. kerros: avokeittiö ja olohuone",
          "Makuuhuone 1: parisänky",
          "Makuuhuone 2: kerrossänky",
          "Pukuhuone",
          "Puusauna suihkulla",
          "Terassi järvinäköalalla",
        ],
        amenities: [
          "Täysin varusteltu keittiö",
          "Jääkaappi ja liesi",
          "Kahvinkeitin",
          "TV",
          "Terassi",
          "Grillausmahdollisuus",
        ],
        extras: ["Polttopuut sisältyvät hintaan", "Liinavaatteet vuokrattavissa 10 €/hlö"],
        restrictions: [
          "Lemmikit eivät ole sallittuja",
          "Tupakointi kielletty sisätiloissa",
          "Avotuli kielletty",
          "Ei asuntoautoa tai telttaa ilman lupaa",
        ],
        image: { src: "/images/hauenmaa-tripadvisor.webp", alt: "Hauenmaa hirsihuvila ulkoa", hero: false },
        gallery: [
          { src: "/images/farm-landscape.webp", alt: "Hauenmaa mökki ulkoa" },
          { src: "/images/villakko-interior-1.webp", alt: "Hauenmaa olohuone" },
        ],
        bookingUrl: "https://sammatintila.fi/kalenteri/",
        contactName: "Mirjami Rajala",
        contactPhone: "040-5124741",
        contactEmail: "info@sammatintila.fi",
      },
      {
        id: "matikka",
        name: "Matikka",
        tagline: "Keltainen järvimökki perheille – tilaa ja mukavuutta",
        description: [
          "Matikka on tilava keltainen hirsihuvila kauniilla järvenrantatontilla. Hauenmaan kanssa samanlainen pohjaratkaisu: rakennettu 1993, pinta-ala 45+15 m², kaksi erillistä makuuhuonetta (molemmissa parisängyt), olohuoneessa vuodesohva, pukuhuone ja puusauna suihkulla. Sopii mainiosti kahdelle perheelle tai isommalle porukalle.",
        ],
        capacity: "6 henkilöä",
        size: "45+15 m²",
        built: "1993",
        layout: [
          "1. kerros: avokeittiö ja olohuone (vuodesohva)",
          "Makuuhuone 1: parisänky",
          "Makuuhuone 2: parisänky",
          "Pukuhuone",
          "Puusauna suihkulla",
          "Terassi järvinäköalalla",
        ],
        amenities: [
          "Täysin varusteltu keittiö",
          "Jääkaappi ja liesi",
          "Kahvinkeitin",
          "TV",
          "Terassi",
          "Grillausmahdollisuus",
        ],
        extras: ["Polttopuut sisältyvät hintaan", "Liinavaatteet vuokrattavissa 10 €/hlö"],
        restrictions: [
          "Lemmikit eivät ole sallittuja",
          "Tupakointi kielletty sisätiloissa",
          "Avotuli kielletty",
          "Ei asuntoautoa tai telttaa ilman lupaa",
        ],
        image: { src: "/images/cabins-hero.webp", alt: "Matikka hirsihuvila järvimaisemassa", hero: false },
        gallery: [
          { src: "/images/farm-landscape.webp", alt: "Matikka mökki ulkoa" },
          { src: "/images/villakko-interior-2.webp", alt: "Matikka olohuone" },
        ],
        bookingUrl: "https://sammatintila.fi/kalenteri/",
        contactName: "Mirjami Rajala",
        contactPhone: "040-5124741",
        contactEmail: "info@sammatintila.fi",
      },
      {
        id: "villakko",
        name: "Villakko",
        tagline: "Perinteinen punainen mökki järven rannalla",
        description: [
          "Villakko on viehättävä punainen mökki aivan järven rannalla, täydellinen luonnon ystäville ja pienemmälle seurueelle. Rakennettu 1992, pinta-ala 30 m². Mökissä on avokeittiö ja olohuone, makuualkovi (kerrossänky 160 cm ja 120 cm) ja puusauna. Peseytyminen tapahtuu järvivedellä – ei juoksevaa lämmintä vettä. Aito erämaatunnelma!",
        ],
        capacity: "4 henkilöä",
        size: "30 m²",
        built: "1992",
        layout: [
          "Avokeittiö ja olohuone",
          "Makuualkovi: kerrossänky (160cm + 120cm)",
          "Puusauna",
          "Peseytyminen järvivedellä",
        ],
        amenities: [
          "Keittonurkkaus",
          "Jääkaappi",
          "Sähköliesi",
          "Grillausmahdollisuus",
        ],
        extras: [
          "Polttopuut sisältyvät hintaan",
          "Loppusiivous 60 € (tilattava varauksen yhteydessä)",
        ],
        restrictions: [
          "Lemmikit eivät ole sallittuja",
          "Tupakointi kielletty sisätiloissa",
          "Avotuli kielletty",
          "Ei asuntoautoa tai telttaa ilman lupaa",
          "Ei juoksevaa lämmintä vettä",
        ],
        image: { src: "/images/villakko-exterior.webp", alt: "Villakko punainen mökki järven rannalla", hero: false },
        gallery: [
          { src: "/images/villakko-exterior.webp", alt: "Villakko ulkoa" },
          { src: "/images/villakko-interior-1.webp", alt: "Villakko sisältä" },
          { src: "/images/villakko-interior-3.webp", alt: "Villakko makuualkovi" },
        ],
        bookingUrl: "https://sammatintila.fi/kalenteri/",
        contactName: "Mirjami Rajala",
        contactPhone: "040-5124741",
        contactEmail: "info@sammatintila.fi",
      },
    ],
    commonInfo: {
      linens: "Liinavaatteet eivät sisälly hintaan. Vuokrattavissa 10 €/hlö.",
      firewood: "Polttopuut sisältyvät mökin hintaan.",
      cleaning: "Villakon loppusiivous 60 € (tilattava varauksen yhteydessä). Hauenmaa ja Matikka siivotaan itse.",
      noPets: "Lemmikit eivät ole sallittuja.",
      noSmoking: "Tupakointi kielletty sisätiloissa.",
      noOpenFire: "Avotuli kielletty. Grillausmahdollisuus grillikatoksessa tai kamiinalla.",
      noTent: "Asuntoauton tai teltan pystytys kielletty ilman erillistä lupaa.",
    },
  },

  gallery: {
    title: "Galleria",
    images: [
      { src: "/images/villakko-exterior.webp", alt: "Villakko punainen mökki järven rannalla", caption: "Villakko – perinteinen punainen mökki" },
      { src: "/images/villakko-interior-1.webp", alt: "Villakon sisätilat" },
      { src: "/images/villakko-interior-3.webp", alt: "Villakon makuualkovi" },
      { src: "/images/farm-landscape.webp", alt: "Farm landscape" },
      { src: "/images/farm-cows.webp", alt: "Lehmiä laitumella" },
      { src: "/images/farm-aerial.webp", alt: "Sammatin tila pihapiiri" },
    ],
  },

  visit: {
    title: "Sijainti",
    address: "Sammatintie 36, 34110 Lakiala",
    coordinates: { lat: 61.6402, lng: 23.5161 },
    description:
      "Tilamme sijaitsee kauniilla maaseudulla Ylöjärvellä Lakialassa, noin 25 km Tampereelta pohjoiseen (noin 25 min ajo). Alue tunnetaan viljavista pelloistaan ja järvisistä maisemistaan. Mökit sijaitsevat järven rannalla lähellä tilaa.",
    distances: [
      { destination: "Tampere", duration: "25 km / n. 25 min" },
      { destination: "Ylöjärven keskusta", duration: "15 km / n. 15 min" },
      { destination: "Lakialan kyläkeskus", duration: "2 km" },
      { destination: "Helsinki", duration: "n. 2 h 30 min" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1896.123!2d23.5161!3d61.6402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSammatintie+36%2C+34110+Lakiala!5e0!3m2!1sfi!2sfi!4v1",
  },

  contact: {
    title: "Ota yhteyttä",
    subtitle: "Ota rohkeasti yhteyttä! Vastaamme mielellämme kysymyksiisi.",
    farm: {
      name: "Sammatin tila Oy",
      phone: "044 378 2223",
      email: "tila@sammatintila.fi",
      address: "Sammatintie 36, 34110 Lakiala",
    },
    cabins: {
      name: "Mirjami Rajala / Mökkivaraukset",
      phone: "040-5124741",
      email: "info@sammatintila.fi",
    },
    form: {
      title: "Lähetä viesti",
      nameLabel: "Nimi",
      namePlaceholder: "Syötä nimesi",
      emailLabel: "Sähköposti",
      emailPlaceholder: "Syötä sähköpostiosoitteesi",
      subjectLabel: "Aihe",
      subjectPlaceholder: "Mistä haluat kysyä?",
      messageLabel: "Viesti",
      messagePlaceholder: "Kirjoita viestisi tähän...",
      sendLabel: "Lähetä",
      successMessage: "Kiitos viestistäsi! Otamme yhteyttä mahdollisimman pian.",
      errorMessage: "Viestin lähetyksessä tapahtui virhe. Yritä uudelleen tai ota yhteyttä puhelimitse.",
    },
    openingHours: "Itsepalvelulihamyymälä avoinna 24/7.",
    note: "Tilaa koskevat tiedustelut ja mökkivaraukset puhelimitse tai sähköpostitse. Autamme mielellämme.",
  },

  footer: {
    copyright: "© 2026 Sammatin tila Oy",
    social: [
      {
        label: "Facebook",
        url: "https://www.facebook.com/profile.php?id=100070412076358",
        icon: "facebook",
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/sammatintila/",
        icon: "instagram",
      },
      { label: "Sähköposti", url: "mailto:tila@sammatintila.fi", icon: "email" },
    ],
    links: [
      { label: "Etusivu", href: "#hero" },
      { label: "Yksityisyys", href: "#" },
    ],
  },
};
