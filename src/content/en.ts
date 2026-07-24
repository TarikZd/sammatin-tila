import type { Content } from "../lib/types";

export const content: Content = {
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
      "A family dairy farm in Ylöjärvi, committed to animal welfare, local food, and rural vitality. High-quality products and services direct from the farm.",
    cta: "Explore the farm",
    image: "/images/hero/hero.jpg",
    imageAlt: "Sammatin tila – countryside landscape",
  },

  about: {
    title: "Welcome to Sammatin tila",
    intro: [
      "Sammatin tila is a dairy farm in Ylöjärvi, Finland, built on a foundation of animal welfare and responsible agriculture. Originally established as Sammatin torppa (croft), the current operator has continued farming under the name Sammatin tila since 2003. In 2016 the operation expanded and converted to a limited company.",
      "The farm operates a 24/7 self-service shop offering beef from our own herd — minced meat, roasts, and fillets — as well as milk. We also offer accommodation in three cosy cabins by the lake, perfect for a peaceful getaway.",
    ],
    highlight: { number: "130", label: "hectares of farmland" },
    values: [
      {
        title: "Animal Welfare",
        body: "Every cow has a name and receives individual care. Calves stay with their mothers initially and receive 8 litres of milk daily for 8 weeks. Robotic milking lets the cows set their own milking rhythm.",
      },
      {
        title: "Sustainability",
        body: "The farm acknowledges the challenges of agriculture and strives for sustainable practices. Cows graze on pasture during summer, an essential part of their wellbeing.",
      },
      {
        title: "Local Food",
        body: "Our products are sold directly at the farm and through local outlets. A short supply chain guarantees freshness and full traceability.",
      },
    ],
    image: "/images/about/farm.jpg",
    imageAlt: "Sammatin tila farmyard",
  },

  history: {
    title: "History",
    events: [
      {
        year: "2003",
        description:
          "The current operator took over the farm under the name Sammatin tila, continuing the area's agricultural traditions.",
      },
      {
        year: "2007",
        description:
          "A free-stall barn was completed, significantly improving animal conditions and enabling modern dairy farming.",
      },
      {
        year: "2016",
        description:
          "Operations expanded and the farm converted to Sammatin tila Oy. That same year, entrepreneur Suvi Rajala was awarded Young Entrepreneur of the Year.",
      },
      {
        year: "2024",
        description:
          "Suvi Rajala purchased the former Ylinen rehabilitation centre property for future development projects.",
      },
      {
        year: "2025",
        description:
          "Suvi Rajala was elected to the Finnish Entrepreneurs' food committee for the 2025–2026 term, bringing the farm's voice to national policymaking.",
      },
    ],
  },

  products: {
    title: "Products",
    subtitle:
      "High-quality beef from our own herd, sold directly from our farm shop. We also sell milk and rent animal housing to other producers.",
    categories: [
      {
        title: "Beef",
        items: [
          {
            name: "Minced Meat",
            description:
              "Fresh, Finnish minced beef from our own herd. Perfect for everyday cooking and special occasions alike.",
            image: "/images/products/jauheliha.jpg",
            imageAlt: "Minced beef",
          },
          {
            name: "Roasts",
            description:
              "Tender beef roasts for oven dishes and slow braising. Full flavour straight from the farm.",
            image: "/images/products/paistit.jpg",
            imageAlt: "Beef roasts",
          },
          {
            name: "Fillets",
            description:
              "Premium beef fillets for special moments. The finest cuts from our herd.",
            image: "/images/products/fileet.jpg",
            imageAlt: "Beef fillets",
          },
        ],
      },
    ],
    note: "Our self-service shop is open 24/7. Welcome to browse our selection!",
  },

  cabins: {
    title: "Holiday Cabins",
    subtitle:
      "Spend your holiday by a beautiful lake. Our three cosy cabins offer a peaceful setting for relaxation all year round.",
    cabins: [
      {
        name: "Hauenmaa",
        tagline: "Space and lake views",
        description: [
          "Hauenmaa is a spacious log cabin on the lakefront, perfect for families or groups of friends. Built in 1993 with a total area of 45+15 m². The property includes an indoor sauna and a separate lakeside sauna.",
        ],
        capacity: "6 persons",
        size: "45+15 m²",
        built: "1993",
        features: ["Indoor sauna", "Lakeside sauna", "Fully equipped kitchen", "Fireplace", "Rowing boat"],
        price: "Ask for price",
        bookingUrl: "https://sammatintila.fi/Hauenmaa.html",
        image: "/images/cabins/hauenmaa.jpg",
        imageAlt: "Hauenmaa cabin by the lake",
      },
      {
        name: "Matikka",
        tagline: "Peaceful lake cabin",
        description: [
          "Matikka is a cosy cabin on a beautiful lakefront plot. Ideal for couples or small families seeking peace and nature.",
        ],
        capacity: "4 persons",
        size: "30 m²",
        built: "1992",
        features: ["Indoor sauna", "Kitchenette", "Terrace", "Barbecue area"],
        price: "Ask for price",
        bookingUrl: "https://sammatintila.fi/Matikka.html",
        image: "/images/cabins/matikka.jpg",
        imageAlt: "Matikka cabin",
      },
      {
        name: "Villakko",
        tagline: "Charming red cottage",
        description: [
          "Villakko is a traditional red cottage right by the lake. An idyllic accommodation for nature lovers who want to enjoy the peace of the Finnish countryside.",
        ],
        capacity: "4 persons",
        size: "30 m²",
        built: "1992",
        features: ["Indoor sauna", "Kitchenette", "Terrace", "Campfire site"],
        price: "Ask for price",
        bookingUrl: "https://sammatintila.fi/Villakko.html",
        image: "/images/cabins/villakko.jpg",
        imageAlt: "Villakko cabin",
      },
    ],
    commonRules: [
      "No pets allowed",
      "No smoking indoors",
      "Bed linens not included (rental available €10/person)",
      "Final cleaning €60",
    ],
  },

  gallery: {
    title: "Gallery",
    images: [
      { src: "/images/gallery/gallery-1.jpg", alt: "Sammatin tila farmyard" },
      { src: "/images/gallery/gallery-2.jpg", alt: "Cows on pasture" },
      { src: "/images/gallery/gallery-3.jpg", alt: "Farm shop" },
      { src: "/images/gallery/gallery-4.jpg", alt: "Cabin by the lake" },
      { src: "/images/gallery/gallery-5.jpg", alt: "Harvest from the fields" },
      { src: "/images/gallery/gallery-6.jpg", alt: "Animal care" },
    ],
  },

  location: {
    title: "Location",
    address: "Sammatintie 36, 34110 Lakiala",
    description:
      "Our farm is located in the beautiful countryside of Ylöjärvi, about 40 km north of Tampere. The Lakiala area is known for its fertile fields and lakeland scenery.",
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
      address: "Sammatintie 36, 34110 Lakiala",
    },
    cabins: {
      name: "Cabin Bookings",
      phone: "040-5124741",
      email: "info@sammatintila.fi",
    },
  },

  footer: {
    copyright: "© 2026 Sammatin tila Oy. All rights reserved.",
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
      { label: "Email", url: "mailto:tila@sammatintila.fi", icon: "email" },
    ],
  },
};
