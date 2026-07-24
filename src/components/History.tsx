import { motion } from "framer-motion";
import { useContent } from "../hooks/useLang";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export default function History() {
  const c = useContent();

  return (
    <section id="history" className="section-padding bg-white/40">
      <div className="content-section">
        <motion.h2
          {...fadeInUp}
          className="section-heading text-center mb-16"
        >
          {c.history.title}
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-forest/30 via-forest/20 to-transparent" />

            {c.history.events.map((event, i) => (
              <motion.div
                key={event.year}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex items-start gap-6 mb-10 last:mb-0"
              >
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-cream border-2 border-forest flex items-center justify-center">
                    <span className="text-xs font-bold text-forest">{event.year}</span>
                  </div>
                </div>

                <div className="flex-1 pt-1.5">
                  <p className="text-stone leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
