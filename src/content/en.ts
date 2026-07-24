import type { Content } from "../lib/types";

export const content: Content = {
  site: {
    url: "https://www.sammatintila.fi",
    title: "Sammatin tila – Dairy Farm and Holiday Cabins in Ylöjärvi, Finland",
    description:
      "Sammatin tila is a family dairy farm in Ylöjärvi, Finland, with a 24/7 self-service farm shop, beef from our own herd, milk, and three lakeside rental cabins.",
    ogImage: "/images/farm-aerial.webp",
    keywords:
      "Sammatin tila, Ylöjärvi, Lakiala, dairy farm, farm shop, local food, Finland, beef, cabin rental, holiday cabins, lake cabins",
  },

  lang: { label: "English", code: "en" },

  navigation: {
    logo: "Sammatin tila",
    links: [
      { label: "Home", href: "#hero" },
      { label: "Farm", href: "#about" },
      { label: "History", href: "#history" },
      { label: "Products", href: "#products" },
      { label: "Cabins", href: "#cabins" },
      { label: "Gallery", href: "#gallery" },
      { label: "Location", href: "#location" },
      { label: "Contact", href: "#contact" },
    ],
    langSwitch: "Suomeksi",
  },

  hero: {
    title: "Sammatin tila",
    subtitle:
      "A family dairy farm in Ylöjärvi, Finland, committed to animal welfare, local food, and rural vitality. Farm shop, beef from our own herd, and three lakeside cabins.",
    cta: "Explore the farm",
    image: "/images/farm-aerial.webp",
    imageAlt: "Sammatin tila – countryside landscape in Lakiala",
  },

  about: {
    title: "Welcome to Sammatin tila",
    intro: [
      "Sammatin tila is a dairy farm in Lakiala, Ylöjärvi, built on a foundation of animal welfare and responsible agriculture. The farm covers approximately 130 hectares, most of which is cultivated land. Current operator Suvi Rajala took over under the name Sammatin tila in 2003, continuing the area's strong farming traditions. In 2016 the operation expanded and converted to a limited company.",
      "The farm runs a 24/7 self-service shop offering beef from our own herd — minced meat, roasts, and fillets — as well as milk. We also rent three cosy lakeside cabins. Suvi Rajala is an active voice in Finnish agriculture, elected to the Finnish Entrepreneurs' food committee for 2025–2026.",
    ],
    highlight: { number: "130", label: "hectares of farmland" },
    values: [
      {
        title: "Animal Welfare",
        body: "Every cow has a name and receives individual care. Calves stay with their mothers initially and receive 8 litres of milk daily for 8 weeks. Robotic milking lets the cows set their own rhythm. In summer, the cows graze on pasture.",
      },
      {
        title: "Sustainability",
        body: "The farm acknowledges the challenges of agriculture and strives for sustainable practices. A free-stall barn completed in 2007 significantly improved animal conditions, and a young animal barn from 1997 supports modern rearing.",
      },
      {
        title: "Local Food",
        body: "Our products are sold directly at the farm and through local outlets. A short supply chain guarantees freshness and full traceability. The farm employs 4 permanent and 7–8 seasonal workers, strengthening the local economy.",
      },
    ],
    image: "/images/farm-aerial.webp",
    imageAlt: "Sammatin tila farmyard in Lakiala",
  },

  history: {
    title: "History",
    events: [
      {
        year: "1997",
        description:
          "A young animal barn was completed, laying the foundation for the farm's growth and modern livestock rearing.",
      },
      {
        year: "2003",
        description:
          "Suvi Rajala took over the farm at age 20 under the name Sammatin tila, continuing her family's agricultural traditions.",
      },
      {
        year: "2007",
        description:
          "A new free-stall barn was completed, significantly improving animal conditions and enabling robotic milking.",
      },
      {
        year: "2016",
        description:
          "The farm converted to Sammatin tila Oy (2749244-7). That same year, Suvi Rajala was awarded Young Entrepreneur of the Year by the Ylöjärvi Entrepreneurs' Association.",
      },
      {
        year: "2025",
        description:
          "Suvi Rajala was elected to the Finnish Entrepreneurs' food committee for the 2025–2026 term. Sammatin tila Oy, together with Nimetön Oy, purchased the former Ylinen rehabilitation centre property on the shore of Lake Näsijärvi — approximately 19 hectares — for €396,270.",
      },
    ],
  },

  products: {
    title: "Products & Services",
    subtitle:
      "High-quality beef from our own herd, sold directly from our farm shop. We also sell milk, rent animal housing, and offer holiday cabin accommodation.",
    categories: [
      {
        title: "Beef",
        items: [
          {
            name: "Minced Meat",
            description:
              "Fresh, Finnish minced beef from our own herd. Perfect for everyday cooking and special occasions alike.",
            image: "/images/farm-cows.webp",
            imageAlt: "Minced beef",
          },
          {
            name: "Roasts",
            description:
              "Tender beef roasts for oven dishes and slow braising. Full flavour straight from the farm.",
            image: "/images/farm-feed.webp",
            imageAlt: "Beef roasts",
          },
          {
            name: "Fillets",
            description:
              "Premium beef fillets for special moments. The finest cuts from our herd.",
            image: "/images/farm-pasture.webp",
            imageAlt: "Beef fillets",
          },
        ],
      },
    ],
    note: "Our self-service shop is open 24/7. Welcome to browse our selection!",
    dairySection: {
      title: "Dairy",
      body: [
        "Our primary production is dairy farming. The cows are milked using a robotic milking system, allowing them to follow their natural rhythm. Calves receive mother's milk and grow in their own section before moving to the young animal barn.",
        "The farm sells milk as raw material for the dairy industry and rents animal housing to other producers.",
      ],
      breeds: "Breed: Ayrshire (main breed)",
      production: "Production: approx. €1.96M revenue (2023)",
    },
  },

  cabins: {
    title: "Holiday Cabins",
    subtitle:
      "Spend your holiday by a beautiful lake in Ylöjärvi. Our three peaceful cabins offer a nature-filled setting for relaxation. Cabins are available for summer rental only.",
    cabins: [
      {
        id: "hauenmaa",
        name: "Hauenmaa",
        tagline: "Spacious log cabin for six with lake views",
        description: [
          "Hauenmaa is a spacious log cabin on the lakefront, perfect for families or groups of friends. Built in 1993 with a total area of 45+15 m². Features an open-plan kitchen and living room, two separate bedrooms (double bed and bunk bed), dressing room, and a wood-fired sauna with shower. The terrace offers beautiful lake views.",
        ],
        capacity: "6 persons",
        size: "45+15 m²",
        built: "1993",
        layout: [
          "Ground floor: open kitchen and living room",
          "Bedroom 1: double bed",
          "Bedroom 2: bunk bed",
          "Dressing room",
          "Wood-fired sauna with shower",
          "Terrace with lake view",
        ],
        amenities: [
          "Fully equipped kitchen",
          "Refrigerator and stove",
          "Coffee maker",
          "TV",
          "Terrace",
          "Barbecue facilities",
        ],
        extras: ["Firewood included", "Linen rental €10/person"],
        restrictions: [
          "No pets allowed",
          "No smoking indoors",
          "No open fires",
          "No caravan or tent without permission",
        ],
        image: { src: "/images/hauenmaa-tripadvisor.webp", alt: "Hauenmaa log cabin exterior", hero: false },
        gallery: [
          { src: "/images/farm-landscape.webp", alt: "Hauenmaa cabin exterior" },
          { src: "/images/villakko-interior-1.webp", alt: "Hauenmaa living room" },
        ],
        bookingUrl: "https://sammatintila.fi/kalenteri/",
        contactName: "Mirjami Rajala",
        contactPhone: "040-5124741",
        contactEmail: "info@sammatintila.fi",
      },
      {
        id: "matikka",
        name: "Matikka",
        tagline: "Yellow lakeside cabin for six – space and comfort",
        description: [
          "Matikka is a spacious yellow log cabin on a beautiful lakefront plot. Similar layout to Hauenmaa: built in 1993, 45+15 m², two separate bedrooms (both with double beds), a sofa bed in the living room, dressing room, and wood-fired sauna with shower. Ideal for two families or a larger group.",
        ],
        capacity: "6 persons",
        size: "45+15 m²",
        built: "1993",
        layout: [
          "Ground floor: open kitchen and living room (sofa bed)",
          "Bedroom 1: double bed",
          "Bedroom 2: double bed",
          "Dressing room",
          "Wood-fired sauna with shower",
          "Terrace with lake view",
        ],
        amenities: [
          "Fully equipped kitchen",
          "Refrigerator and stove",
          "Coffee maker",
          "TV",
          "Terrace",
          "Barbecue facilities",
        ],
        extras: ["Firewood included", "Linen rental €10/person"],
        restrictions: [
          "No pets allowed",
          "No smoking indoors",
          "No open fires",
          "No caravan or tent without permission",
        ],
        image: { src: "/images/cabins-hero.webp", alt: "Matikka log cabin in lakeside landscape", hero: false },
        gallery: [
          { src: "/images/farm-landscape.webp", alt: "Matikka cabin exterior" },
          { src: "/images/villakko-interior-2.webp", alt: "Matikka living room" },
        ],
        bookingUrl: "https://sammatintila.fi/kalenteri/",
        contactName: "Mirjami Rajala",
        contactPhone: "040-5124741",
        contactEmail: "info@sammatintila.fi",
      },
      {
        id: "villakko",
        name: "Villakko",
        tagline: "Traditional red cottage right by the lake",
        description: [
          "Villakko is a charming red cottage right on the lake shore, perfect for nature lovers and smaller groups. Built in 1992, 30 m². Features an open-plan kitchen and living room, a sleeping alcove (bunk bed 160 cm and 120 cm), and a wood-fired sauna. Washing is done with lake water — no hot running water. A genuine wilderness experience!",
        ],
        capacity: "4 persons",
        size: "30 m²",
        built: "1992",
        layout: [
          "Open kitchen and living room",
          "Sleeping alcove: bunk bed (160 cm + 120 cm)",
          "Wood-fired sauna",
          "Lake water washing (no hot running water)",
        ],
        amenities: [
          "Kitchenette",
          "Refrigerator",
          "Electric stove",
          "Barbecue facilities",
        ],
        extras: [
          "Firewood included",
          "Final cleaning €60 (order at booking)",
        ],
        restrictions: [
          "No pets allowed",
          "No smoking indoors",
          "No open fires",
          "No caravan or tent without permission",
          "No hot running water",
        ],
        image: { src: "/images/villakko-exterior.webp", alt: "Villakko red cottage by the lake", hero: false },
        gallery: [
          { src: "/images/villakko-exterior.webp", alt: "Villakko exterior" },
          { src: "/images/villakko-interior-1.webp", alt: "Villakko interior" },
          { src: "/images/villakko-interior-3.webp", alt: "Villakko sleeping alcove" },
        ],
        bookingUrl: "https://sammatintila.fi/kalenteri/",
        contactName: "Mirjami Rajala",
        contactPhone: "040-5124741",
        contactEmail: "info@sammatintila.fi",
      },
    ],
    commonInfo: {
      linens: "Bed linens not included. Rental available €10/person.",
      firewood: "Firewood is included in the cabin price.",
      cleaning: "Villakko final cleaning €60 (order at booking). Hauenmaa and Matikka guests clean themselves.",
      noPets: "No pets allowed.",
      noSmoking: "No smoking indoors.",
      noOpenFire: "No open fires. Barbecue facilities available in the shelter or stove.",
      noTent: "Caravan or tent not allowed without separate permission.",
    },
  },

  gallery: {
    title: "Gallery",
    images: [
      { src: "/images/villakko-exterior.webp", alt: "Villakko red cottage by the lake", caption: "Villakko – traditional red cottage" },
      { src: "/images/villakko-interior-1.webp", alt: "Villakko interior" },
      { src: "/images/villakko-interior-3.webp", alt: "Villakko sleeping alcove" },
      { src: "/images/farm-landscape.webp", alt: "Farm landscape" },
      { src: "/images/farm-cows.webp", alt: "Cows on pasture" },
      { src: "/images/farm-aerial.webp", alt: "Sammatin tila farmyard" },
    ],
  },

  visit: {
    title: "Location",
    address: "Sammatintie 36, 34110 Lakiala, Finland",
    coordinates: { lat: 61.6402, lng: 23.5161 },
    description:
      "Our farm is located in the beautiful countryside of Lakiala, Ylöjärvi, about 25 km north of Tampere (approx. 25 min drive). The Lakiala area is known for its fertile fields and lakeland scenery. The cabins are situated on the lake shore near the farm.",
    distances: [
      { destination: "Tampere", duration: "25 km / approx. 25 min" },
      { destination: "Ylöjärvi centre", duration: "15 km / approx. 15 min" },
      { destination: "Lakiala village centre", duration: "2 km" },
      { destination: "Helsinki", duration: "approx. 2 h 30 min" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1896.123!2d23.5161!3d61.6402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSammatintie+36%2C+34110+Lakiala!5e0!3m2!1sfi!2sfi!4v1",
  },

  contact: {
    title: "Get in Touch",
    subtitle: "Feel free to contact us! We are happy to answer your questions.",
    farm: {
      name: "Sammatin tila Oy",
      phone: "044 378 2223",
      email: "tila@sammatintila.fi",
      address: "Sammatintie 36, 34110 Lakiala, Finland",
    },
    cabins: {
      name: "Mirjami Rajala / Cabin Bookings",
      phone: "040-5124741",
      email: "info@sammatintila.fi",
    },
    form: {
      title: "Send a Message",
      nameLabel: "Name",
      namePlaceholder: "Enter your name",
      emailLabel: "Email",
      emailPlaceholder: "Enter your email address",
      subjectLabel: "Subject",
      subjectPlaceholder: "What would you like to ask?",
      messageLabel: "Message",
      messagePlaceholder: "Write your message here...",
      sendLabel: "Send",
      successMessage: "Thank you for your message! We will get back to you as soon as possible.",
      errorMessage: "An error occurred while sending your message. Please try again or contact us by phone.",
    },
    openingHours: "Self-service shop open 24/7. Cabin check-in by arrangement.",
    note: "Note: The farm does not use WhatsApp. We are best reached by phone or email.",
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
      { label: "Email", url: "mailto:tila@sammatintila.fi", icon: "email" },
    ],
    links: [
      { label: "Home", href: "#hero" },
      { label: "Privacy", href: "#" },
    ],
  },
};
