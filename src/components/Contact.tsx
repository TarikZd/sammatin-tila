import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useContent } from "../hooks/useLang";

export default function Contact() {
  const c = useContent();

  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="content-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-forest text-center mb-4"
        >
          {c.contact.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-stone text-center max-w-xl mx-auto mb-16"
        >
          {c.contact.subtitle}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-forest/5"
          >
            <h3 className="text-xl font-semibold text-forest mb-6">
              {c.contact.farm.name}
            </h3>
            <div className="space-y-4">
              <a
                href={`tel:${c.contact.farm.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-stone hover:text-forest transition-colors"
              >
                <Phone size={18} className="text-bark" />
                {c.contact.farm.phone}
              </a>
              <a
                href={`mailto:${c.contact.farm.email}`}
                className="flex items-center gap-3 text-stone hover:text-forest transition-colors"
              >
                <Mail size={18} className="text-bark" />
                {c.contact.farm.email}
              </a>
              {c.contact.farm.address && (
                <div className="flex items-center gap-3 text-stone">
                  <MapPin size={18} className="text-bark" />
                  {c.contact.farm.address}
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-forest/5"
          >
            <h3 className="text-xl font-semibold text-forest mb-6">
              {c.contact.cabins.name}
            </h3>
            <div className="space-y-4">
              <a
                href={`tel:${c.contact.cabins.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-stone hover:text-forest transition-colors"
              >
                <Phone size={18} className="text-bark" />
                {c.contact.cabins.phone}
              </a>
              <a
                href={`mailto:${c.contact.cabins.email}`}
                className="flex items-center gap-3 text-stone hover:text-forest transition-colors"
              >
                <Mail size={18} className="text-bark" />
                {c.contact.cabins.email}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
