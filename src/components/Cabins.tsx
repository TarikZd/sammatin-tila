import { motion } from "framer-motion";
import { Users, Ruler, Hammer, Check } from "lucide-react";
import { useContent } from "../hooks/useLang";

export default function Cabins() {
  const c = useContent();

  return (
    <section id="cabins" className="py-24 bg-cream">
      <div className="content-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-forest text-center mb-4"
        >
          {c.cabins.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-stone text-center max-w-2xl mx-auto mb-16"
        >
          {c.cabins.subtitle}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {c.cabins.cabins.map((cabin, i) => (
            <motion.div
              key={cabin.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-forest/5 flex flex-col"
            >
              <div className="aspect-[4/3] bg-forest/10">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${cabin.image})` }}
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-forest mb-1">{cabin.name}</h3>
                <p className="text-bark text-sm mb-4">{cabin.tagline}</p>

                {cabin.description.map((d, j) => (
                  <p key={j} className="text-stone text-sm leading-relaxed mb-4">
                    {d}
                  </p>
                ))}

                <div className="flex flex-wrap gap-4 mb-4 text-xs text-stone">
                  <span className="flex items-center gap-1">
                    <Users size={14} className="text-bark" /> {cabin.capacity}
                  </span>
                  <span className="flex items-center gap-1">
                    <Ruler size={14} className="text-bark" /> {cabin.size}
                  </span>
                  <span className="flex items-center gap-1">
                    <Hammer size={14} className="text-bark" /> {cabin.built}
                  </span>
                </div>

                <ul className="space-y-1.5 mb-6">
                  {cabin.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-stone"
                    >
                      <Check size={14} className="text-mint flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a
                    href={cabin.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2.5 bg-forest text-cream rounded-full text-sm font-medium hover:bg-forest-light transition-colors"
                  >
                    {cabin.price}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white/60 rounded-2xl p-6 border border-forest/5 max-w-lg mx-auto"
        >
          <ul className="space-y-2">
            {c.cabins.commonRules.map((rule, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-stone">
                <span className="text-bark mt-0.5">•</span>
                {rule}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
