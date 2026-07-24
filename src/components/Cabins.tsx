import { motion } from "framer-motion";
import { Users, Ruler, Hammer, Check, Phone, ExternalLink } from "lucide-react";
import { useContent } from "../hooks/useLang";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export default function Cabins() {
  const c = useContent();

  return (
    <section id="cabins" className="section-padding bg-cream">
      <div className="content-section">
        <motion.h2
          {...fadeInUp}
          className="section-heading text-center mb-4"
        >
          {c.cabins.title}
        </motion.h2>
        <motion.p
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-stone text-center max-w-xl mx-auto mb-16"
        >
          {c.cabins.subtitle}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {c.cabins.cabins.map((cabin, i) => (
            <motion.div
              key={cabin.id}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card overflow-hidden flex flex-col group"
            >
              <div className="relative aspect-[4/3] bg-forest/10 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${cabin.image.src})` }}
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 text-xs font-medium bg-cream/90 backdrop-blur-sm rounded-full text-forest shadow-sm">
                    {cabin.capacity}
                  </span>
                  <span className="px-2.5 py-1 text-xs font-medium bg-cream/90 backdrop-blur-sm rounded-full text-forest shadow-sm">
                    {cabin.size}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-forest mb-1">{cabin.name}</h3>
                <p className="text-bark text-xs font-medium mb-4">{cabin.tagline}</p>

                <div className="flex items-center gap-4 mb-4 text-xs text-stone">
                  <span className="flex items-center gap-1.5">
                    <Users size={14} className="text-bark" /> {cabin.capacity}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Ruler size={14} className="text-bark" /> {cabin.size}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Hammer size={14} className="text-bark" /> {cabin.built}
                  </span>
                </div>

                {cabin.description.map((d, j) => (
                  <p key={j} className="text-stone text-sm leading-relaxed mb-4">
                    {d}
                  </p>
                ))}

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-forest uppercase tracking-wider mb-2.5">Varustelu</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cabin.amenities.map((a) => (
                      <span key={a} className="inline-flex items-center gap-1 px-2.5 py-1 bg-forest/5 rounded-full text-xs text-stone">
                        <Check size={10} className="text-mint" />
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="text-xs font-semibold text-forest uppercase tracking-wider mb-2.5">Huomioitavaa</h4>
                  <ul className="space-y-1">
                    {cabin.restrictions.map((r) => (
                      <li key={r} className="text-xs text-stone flex items-start gap-2">
                        <span className="text-bark mt-0.5">·</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto space-y-2.5 pt-4 border-t border-forest/5">
                  <a
                    href={cabin.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-forest text-cream rounded-full text-sm font-medium hover:bg-forest-light hover:shadow-lg hover:shadow-forest/20 transition-all duration-300"
                  >
                    Varaa / Book
                    <ExternalLink size={14} />
                  </a>
                  <div className="flex items-center justify-center gap-1.5 text-xs text-stone">
                    <Phone size={12} />
                    <a href={`tel:${cabin.contactPhone.replace(/\s/g, "")}`} className="hover:text-forest transition-colors">
                      {cabin.contactPhone}
                    </a>
                    <span className="text-stone/50">·</span>
                    <span>{cabin.contactName}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 card p-7 max-w-lg mx-auto"
        >
          <h4 className="text-sm font-semibold text-forest mb-4">Yhteiset säännöt</h4>
          <div className="space-y-2">
            <p className="text-sm text-stone flex items-start gap-2">
              <span className="text-bark mt-0.5 flex-shrink-0">·</span>
              <span>{c.cabins.commonInfo.linens}</span>
            </p>
            <p className="text-sm text-stone flex items-start gap-2">
              <span className="text-bark mt-0.5 flex-shrink-0">·</span>
              <span>{c.cabins.commonInfo.firewood}</span>
            </p>
            <p className="text-sm text-stone flex items-start gap-2">
              <span className="text-bark mt-0.5 flex-shrink-0">·</span>
              <span>{c.cabins.commonInfo.cleaning}</span>
            </p>
            <p className="text-sm text-stone flex items-start gap-2">
              <span className="text-bark mt-0.5 flex-shrink-0">·</span>
              <span>{c.cabins.commonInfo.noPets}</span>
            </p>
            <p className="text-sm text-stone flex items-start gap-2">
              <span className="text-bark mt-0.5 flex-shrink-0">·</span>
              <span>{c.cabins.commonInfo.noSmoking}</span>
            </p>
            <p className="text-sm text-stone flex items-start gap-2">
              <span className="text-bark mt-0.5 flex-shrink-0">·</span>
              <span>{c.cabins.commonInfo.noOpenFire}</span>
            </p>
            <p className="text-sm text-stone flex items-start gap-2">
              <span className="text-bark mt-0.5 flex-shrink-0">·</span>
              <span>{c.cabins.commonInfo.noTent}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
