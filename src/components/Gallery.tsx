import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useContent } from "../hooks/useLang";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export default function Gallery() {
  const c = useContent();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const images = c.gallery.images;

  const open = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null)),
    [images.length],
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null)),
    [images.length],
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, prev, next]);

  return (
    <section id="gallery" className="section-padding bg-white/40">
      <div className="content-section">
        <motion.h2
          {...fadeInUp}
          className="section-heading text-center mb-14"
        >
          {c.gallery.title}
        </motion.h2>

        <div className="columns-2 md:columns-3 gap-4">
          {images.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              onClick={() => open(i)}
              className="w-full mb-4 rounded-xl overflow-hidden bg-forest/10 group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
            >
              <div
                className="w-full bg-cover bg-center transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
                style={{
                  backgroundImage: `url(${img.src})`,
                  aspectRatio: i % 3 === 0 ? "3/4" : "4/3",
                }}
              />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Kuvagalleria"
          >
            <button
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 text-cream/70 hover:text-cream transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Edellinen kuva"
            >
              <ChevronLeft size={32} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-5xl max-h-[85vh] mx-6 w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="w-full h-[70vh] bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${images[lightboxIndex].src})` }}
              />
              {images[lightboxIndex].caption && (
                <p className="text-cream/80 text-center mt-4 text-sm">
                  {images[lightboxIndex].caption}
                </p>
              )}
            </motion.div>

            <button
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2 text-cream/70 hover:text-cream transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Seuraava kuva"
            >
              <ChevronRight size={32} />
            </button>

            <button
              className="absolute top-4 right-4 p-2 text-cream/70 hover:text-cream transition-colors z-10"
              onClick={close}
              aria-label="Sulje"
            >
              <X size={28} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-cream/50 text-xs">
              {lightboxIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
