import { motion } from "framer-motion";
import { useContent } from "../hooks/useLang";

export default function History() {
  const c = useContent();

  return (
    <section id="history" className="py-24 bg-white/40">
      <div className="content-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-forest text-center mb-16"
        >
          {c.history.title}
        </motion.h2>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-forest/20" />

          {c.history.events.map((event, i) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex items-start gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:flex flex-1 justify-end">
                {i % 2 === 0 && (
                  <div className="max-w-sm text-right">
                    <span className="text-2xl font-bold text-bark">{event.year}</span>
                    <p className="text-stone mt-2">{event.description}</p>
                  </div>
                )}
              </div>

              <div className="flex-shrink-0 relative z-10">
                <div className="w-8 h-8 rounded-full bg-forest border-4 border-cream shadow" />
              </div>

              <div className="flex-1 md:hidden">
                <span className="text-xl font-bold text-bark">{event.year}</span>
                <p className="text-stone mt-1">{event.description}</p>
              </div>

              <div className="hidden md:flex flex-1">
                {i % 2 !== 0 && (
                  <div className="max-w-sm text-left">
                    <span className="text-2xl font-bold text-bark">{event.year}</span>
                    <p className="text-stone mt-2">{event.description}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
