import { motion } from "framer-motion";
import { useContent } from "../hooks/useLang";

export default function About() {
  const c = useContent();

  return (
    <section id="about" className="py-24 bg-cream">
      <div className="content-section">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6">
              {c.about.title}
            </h2>
            {c.about.intro.map((p, i) => (
              <p key={i} className="text-stone leading-relaxed mb-4">
                {p}
              </p>
            ))}
            <div className="mt-8 inline-block bg-forest/5 px-6 py-4 rounded-2xl border border-forest/10">
              <span className="text-4xl font-bold text-forest">{c.about.highlight.number}</span>
              <span className="ml-2 text-stone">{c.about.highlight.label}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-forest/10 rounded-2xl overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${c.about.image})` }}
              />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {c.about.values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/60 rounded-2xl p-8 border border-forest/5"
            >
              <h3 className="text-xl font-semibold text-forest mb-3">{v.title}</h3>
              <p className="text-stone leading-relaxed">{v.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
