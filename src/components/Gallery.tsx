import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContent } from "../hooks/useLang";

export default function Gallery() {
  const c = useContent();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const images = c.gallery.images;

  const open = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  const next = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));

  return (
    <section id="gallery" className="py-24 bg-white/40">
      <div className="content-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-forest text-center mb-12"
        >
          {c.gallery.title}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => open(i)}
              className="aspect-[4/3] rounded-xl overflow-hidden bg-forest/10 group cursor-pointer"
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${img.src})` }}
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
            className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center"
            onClick={close}
          >
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-cream hover:text-bark transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
            >
              <ChevronLeft size={36} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="w-full h-full min-h-[50vh] bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${images[lightboxIndex].src})` }}
              />
              {images[lightboxIndex].caption && (
                <p className="text-cream text-center mt-4 text-sm">
                  {images[lightboxIndex].caption}
                </p>
              )}
            </motion.div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-cream hover:text-bark transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
            >
              <ChevronRight size={36} />
            </button>

            <button
              className="absolute top-4 right-4 p-2 text-cream hover:text-bark transition-colors z-10 text-lg"
              onClick={close}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
