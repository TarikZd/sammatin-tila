import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useContent } from "../hooks/useLang";

export default function Hero() {
  const c = useContent();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/30 to-forest/10" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${c.hero.image})` }}
      />
      <div className="relative z-10 content-section text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="px-3 py-1 text-xs font-medium text-cream/90 bg-cream/10 rounded-full backdrop-blur-sm border border-cream/20">
              Lypsykarjatila
            </span>
            <span className="text-cream/40">·</span>
            <span className="px-3 py-1 text-xs font-medium text-cream/90 bg-cream/10 rounded-full backdrop-blur-sm border border-cream/20">
              Naudanliha
            </span>
            <span className="text-cream/40">·</span>
            <span className="px-3 py-1 text-xs font-medium text-cream/90 bg-cream/10 rounded-full backdrop-blur-sm border border-cream/20">
              Lomamökit
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-5 leading-tight tracking-tight">
            {c.hero.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-cream/85 max-w-2xl mx-auto mb-10 leading-relaxed">
            {c.hero.subtitle}
          </p>

          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-3 bg-bark text-cream rounded-full text-sm font-medium hover:bg-bark-light hover:shadow-lg hover:shadow-bark/20 transition-all duration-300"
          >
            {c.hero.cta}
          </a>
        </motion.div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={24} className="text-cream/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
