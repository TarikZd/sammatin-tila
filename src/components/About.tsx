import { motion } from "framer-motion";
import { useContent } from "../hooks/useLang";

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export default function About() {
  const c = useContent();

  return (
    <section id="about" className="section-padding bg-cream">
      <div className="content-section">
        <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-start">
          <motion.div {...fadeInLeft} className="md:col-span-3">
            <h2 className="section-heading mb-6">
              {c.about.title}
            </h2>
            {c.about.intro.map((p, i) => (
              <p key={i} className="text-stone leading-relaxed mb-4 max-w-prose last:mb-0">
                {p}
              </p>
            ))}
            <div className="mt-8 inline-flex items-center gap-3 bg-forest/5 px-5 py-3 rounded-xl border border-forest/10">
              <span className="text-3xl md:text-4xl font-bold text-forest leading-none">{c.about.highlight.number}</span>
              <span className="text-stone text-sm">{c.about.highlight.label}</span>
            </div>
          </motion.div>

          <motion.div {...fadeInRight} className="md:col-span-2">
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-forest/10">
              <div
                className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${c.about.image})` }}
              />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {c.about.values.map((v, i) => (
            <motion.div
              key={v.title}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card card-hover p-7"
            >
              <div className="w-8 h-px bg-bark mb-4" />
              <h3 className="text-lg font-semibold text-forest mb-3">{v.title}</h3>
              <p className="text-stone text-sm leading-relaxed">{v.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
