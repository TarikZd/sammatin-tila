import type { Content } from "../lib/types";

export const content: Content = {
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
      "Sitoutumista kotieläintalouteen, lähiruokaan ja maaseudun elinvoimaan Ylöjärvellä. Korkealaatuisia palveluita ja tuotteita suoraan maatilalta.",
    cta: "Tutustu tilaan",
    image: "/images/hero/hero.jpg",
    imageAlt: "Sammatin tila – maalaismaisema",
  },

  about: {
    title: "Tervetuloa Sammatin tilalle",
    intro: [
      "Sammatin tila on Ylöjärvellä sijaitseva lypsykarjatila, jossa on aina panostettu eläinten hyvinvointiin ja vastuulliseen maatalouteen. Tila sai alkunsa Sammatin torppana, ja nykyinen yrittäjä on jatkanut tilanpitoa Sammatin tilan nimellä vuodesta 2003. Vuonna 2016 toiminta laajeni ja tila muutettiin osakeyhtiöksi.",
      "Tilan yhteydessä toimii itsepalvelumyymälä, joka on avoinna vuoden jokaisena päivänä ympäri vuorokauden. Valikoimastamme löytyy oman karjamme naudanlihaa jauhelihana, paisteina ja fileinä sekä maitoa. Lisäksi tarjoamme majoituspalveluita kolmessa viihtyisässä järvimaisemassa sijaitsevassa mökissä.",
    ],
    highlight: { number: "130", label: "hehtaaria viljelysmaata" },
    values: [
      {
        title: "Eläinten hyvinvointi",
        body: "Lehmät ovat nimettyjä ja yksilöllisesti hoidettuja. Vasikat saavat olla emänsä kanssa alkuun ja saavat 8 litraa maitoa päivässä 8 viikon ajan. Robotit lypsävät, jolloin lehmät saavat itse päättää lypsyrytminsä.",
      },
      {
        title: "Vastuullisuus",
        body: "Tila tunnustaa maatalouden haasteet ja pyrkii toimimaan kestävästi. Lehmät pääsevät laitumelle kesäisin, mikä on tärkeä osa eläinten hyvinvointia.",
      },
      {
        title: "Paikallisuus",
        body: "Tuotteet myydään suoraan tilalta ja lähialueen toimipisteistä. Lyhyt toimitusketju takaa tuoreuden ja jäljitettävyyden.",
      },
    ],
    image: "/images/about/farm.jpg",
    imageAlt: "Sammatin tila pihapiiri",
  },

  history: {
    title: "Historia",
    events: [
      {
        year: "2003",
        description:
          "Nykyinen yrittäjä aloitti tilanpidon Sammatin tilan nimellä, jatkaen alueen maatalousperinteitä.",
      },
      {
        year: "2007",
        description:
          "Pihatto valmistui, mikä paransi merkittävästi eläinten olosuhteita ja mahdollisti nykyaikaisen lypsykarjatalouden.",
      },
      {
        year: "2016",
        description:
          "Toiminta laajeni entisestään ja tila muutettiin Sammatin tila Oy:ksi. Samana vuonna yrittäjä Suvi Rajala palkittiin Vuoden nuorena yrittäjänä.",
      },
      {
        year: "2024",
        description:
          "Suvi Rajala osti entisen Ylisen kuntoutuskeskuksen kiinteistön tulevaisuuden kehityshankkeita varten.",
      },
      {
        year: "2025",
        description:
          "Suvi Rajala valittiin Suomen Yrittäjien ruokavaliokuntaan kaudelle 2025–2026, vieden tilan ääntä valtakunnalliseen päätöksentekoon.",
      },
    ],
  },

  products: {
    title: "Tuotteet",
    subtitle:
      "Laadukasta naudanlihaa omasta karjasta suoraan tilamyymälästämme. Myymme myös maitoa ja vuokraamme eläinpaikkoja muille tuottajille.",
    categories: [
      {
        title: "Naudanliha",
        items: [
          {
            name: "Jauheliha",
            description:
              "Tuoretta, kotimaista naudan jauhelihaa omasta karjasta. Sopii arjen ruoanlaittoon ja juhlavampiin hetkiin.",
            image: "/images/products/jauheliha.jpg",
            imageAlt: "Naudan jauheliha",
          },
          {
            name: "Paistit",
            description:
              "Mureita naudanpaisteja uuniruokiin ja hitaaseen haudutukseen. Täyteläinen maku suoraan tilalta.",
            image: "/images/products/paistit.jpg",
            imageAlt: "Naudan paistit",
          },
          {
            name: "Fileet",
            description:
              "Huippulaatuisia naudanfileitä erityisiin hetkiin. Tilamme karjan parasta antia.",
            image: "/images/products/fileet.jpg",
            imageAlt: "Naudan fileet",
          },
        ],
      },
    ],
    note: "Itsepalvelumyymälä on avoinna 24/7. Tervetuloa tutustumaan valikoimaan!",
  },

  cabins: {
    title: "Lomamökit",
    subtitle:
      "Vietä lomasi kauniissa järvimaisemassa. Kolme viihtyisää mökkiämme tarjoavat rauhallisen ympäristön rentoutumiseen ympäri vuoden.",
    cabins: [
      {
        name: "Hauenmaa",
        tagline: "Avaruutta ja järvimaisemia",
        description: [
          "Hauenmaa on tilava ja viihtyisä hirsihuvila järven rannalla, täydellinen perheille tai ystäväporukoille. Mökki on rakennettu vuonna 1993 ja sen pinta-ala on 45+15 m². Pihapiiristä löytyy oma sauna ja rantasauna.",
        ],
        capacity: "6 henkilöä",
        size: "45+15 m²",
        built: "1993",
        features: [
          "Oma sauna",
          "Rantasauna",
          "Täysin varusteltu keittiö",
          "Takka",
          "Soutuvene",
        ],
        price: "Kysy hintaa",
        bookingUrl: "https://sammatintila.fi/Hauenmaa.html",
        image: "/images/cabins/hauenmaa.jpg",
        imageAlt: "Hauenmaa mökki järvimaisemassa",
      },
      {
        name: "Matikka",
        tagline: "Rauhallinen järvimökki",
        description: [
          "Matikka on kodikas ja tunnelmallinen mökki kauniilla järvenrantatontilla. Sopii hyvin pariskunnille tai pienelle perheelle, jotka etsivät rauhaa ja luonnonläheisyyttä.",
        ],
        capacity: "4 henkilöä",
        size: "30 m²",
        built: "1992",
        features: ["Oma sauna", "Keittonurkkaus", "Terassi", "Grillauspaikka"],
        price: "Kysy hintaa",
        bookingUrl: "https://sammatintila.fi/Matikka.html",
        image: "/images/cabins/matikka.jpg",
        imageAlt: "Matikka mökki",
      },
      {
        name: "Villakko",
        tagline: "Viehättävä punainen mökki",
        description: [
          "Villakko on perinteinen punainen mökki järven rannalla. Idyllinen majoitusvaihtoehto luonnon ystäville, jotka haluavat nauttia suomalaisen maaseudun rauhasta.",
        ],
        capacity: "4 henkilöä",
        size: "30 m²",
        built: "1992",
        features: ["Oma sauna", "Keittonurkkaus", "Terassi", "Nuotiopaikka"],
        price: "Kysy hintaa",
        bookingUrl: "https://sammatintila.fi/Villakko.html",
        image: "/images/cabins/villakko.jpg",
        imageAlt: "Villakko mökki",
      },
    ],
    commonRules: [
      "Lemmikit eivät ole sallittuja",
      "Tupakointi kielletty sisätiloissa",
      "Liinavaatteet eivät sisälly hintaan (vuokrattavissa 10 €/hlö)",
      "Loppusiivous 60 €",
    ],
  },

  gallery: {
    title: "Galleria",
    images: [
      { src: "/images/gallery/gallery-1.jpg", alt: "Sammatin tila pihapiiri" },
      { src: "/images/gallery/gallery-2.jpg", alt: "Lehmiä laitumella" },
      { src: "/images/gallery/gallery-3.jpg", alt: "Tilamyymälä" },
      { src: "/images/gallery/gallery-4.jpg", alt: "Mökki järvimaisemassa" },
      { src: "/images/gallery/gallery-5.jpg", alt: "Satoa pellolta" },
      { src: "/images/gallery/gallery-6.jpg", alt: "Eläinten hoitoa" },
    ],
  },

  location: {
    title: "Sijainti",
    address: "Sammatintie 36, 34110 Lakiala",
    description:
      "Tilamme sijaitsee kauniilla maaseudulla Ylöjärvellä, noin 40 km Tampereelta pohjoiseen. Lakialan alue tunnetaan viljavista pelloistaan ja järvisistä maisemistaan.",
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
      name: "Mökkivaraukset",
      phone: "040-5124741",
      email: "info@sammatintila.fi",
    },
  },

  footer: {
    copyright: "© 2026 Sammatin tila Oy. Kaikki oikeudet pidätetään.",
    social: [
      {
        label: "Facebook",
        url: "https://www.facebook.com/266643367115866",
        icon: "facebook",
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/sammatintila/",
        icon: "instagram",
      },
      { label: "Sähköposti", url: "mailto:tila@sammatintila.fi", icon: "email" },
    ],
  },
};
