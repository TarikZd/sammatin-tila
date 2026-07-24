import { motion } from "framer-motion";
import { useContent } from "../hooks/useLang";

export default function Hero() {
  const c = useContent();

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-forest/60 via-forest/30 to-cream/10" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${c.hero.image})` }}
      />
      <div className="relative content-section text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-cream mb-4 leading-tight">
            {c.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-cream/90 mb-8 leading-relaxed">
            {c.hero.subtitle}
          </p>
          <a
            href="#about"
            className="inline-block px-8 py-3 bg-bark text-cream rounded-full text-sm font-medium hover:bg-bark-light transition-colors"
          >
            {c.hero.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
