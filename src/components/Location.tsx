import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useContent } from "../hooks/useLang";

export default function Location() {
  const c = useContent();

  return (
    <section id="location" className="py-24 bg-white/40">
      <div className="content-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4">
            {c.location.title}
          </h2>
          <p className="text-stone flex items-center justify-center gap-2">
            <MapPin size={18} className="text-bark" />
            {c.location.address}
          </p>
          <p className="text-stone max-w-xl mx-auto mt-4">{c.location.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            title="Sammatin tila kartalla"
            src={c.location.mapEmbedUrl}
            width="100%"
            height="400"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
