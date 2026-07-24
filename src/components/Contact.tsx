import { type FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, AlertCircle, Send } from "lucide-react";
import { useContent } from "../hooks/useLang";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export default function Contact() {
  const c = useContent();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-white/40">
      <div className="content-section">
        <motion.h2
          {...fadeInUp}
          className="section-heading text-center mb-4"
        >
          {c.contact.title}
        </motion.h2>
        <motion.p
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-stone text-center max-w-xl mx-auto mb-16"
        >
          {c.contact.subtitle}
        </motion.p>

        <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="md:col-span-2 space-y-6"
          >
            <div className="card p-6">
              <h3 className="text-sm font-semibold text-forest mb-4">{c.contact.farm.name}</h3>
              <div className="space-y-3">
                <a
                  href={`tel:${c.contact.farm.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-stone hover:text-forest transition-colors group"
                >
                  <span className="w-8 h-8 rounded-full bg-forest/5 flex items-center justify-center group-hover:bg-forest/10 transition-colors">
                    <Phone size={14} className="text-bark" />
                  </span>
                  {c.contact.farm.phone}
                </a>
                <a
                  href={`mailto:${c.contact.farm.email}`}
                  className="flex items-center gap-3 text-sm text-stone hover:text-forest transition-colors group"
                >
                  <span className="w-8 h-8 rounded-full bg-forest/5 flex items-center justify-center group-hover:bg-forest/10 transition-colors">
                    <Mail size={14} className="text-bark" />
                  </span>
                  {c.contact.farm.email}
                </a>
                {c.contact.farm.address && (
                  <div className="flex items-center gap-3 text-sm text-stone">
                    <span className="w-8 h-8 rounded-full bg-forest/5 flex items-center justify-center flex-shrink-0">
                      <MapPin size={14} className="text-bark" />
                    </span>
                    {c.contact.farm.address}
                  </div>
                )}
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-sm font-semibold text-forest mb-4">{c.contact.cabins.name}</h3>
              <div className="space-y-3">
                <a
                  href={`tel:${c.contact.cabins.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-stone hover:text-forest transition-colors group"
                >
                  <span className="w-8 h-8 rounded-full bg-forest/5 flex items-center justify-center group-hover:bg-forest/10 transition-colors">
                    <Phone size={14} className="text-bark" />
                  </span>
                  {c.contact.cabins.phone}
                </a>
                <a
                  href={`mailto:${c.contact.cabins.email}`}
                  className="flex items-center gap-3 text-sm text-stone hover:text-forest transition-colors group"
                >
                  <span className="w-8 h-8 rounded-full bg-forest/5 flex items-center justify-center group-hover:bg-forest/10 transition-colors">
                    <Mail size={14} className="text-bark" />
                  </span>
                  {c.contact.cabins.email}
                </a>
              </div>
            </div>

            <div className="card p-6 space-y-3">
              <div className="flex items-start gap-3 text-sm text-stone">
                <Clock size={14} className="text-bark mt-0.5 flex-shrink-0" />
                <span>{c.contact.openingHours}</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-stone">
                <AlertCircle size={14} className="text-bark mt-0.5 flex-shrink-0" />
                <span>{c.contact.note}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3"
          >
            <div className="card p-7">
              <h3 className="text-base font-semibold text-forest mb-6">
                {c.contact.form.title}
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="w-14 h-14 rounded-full bg-mint/10 flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-mint" />
                  </div>
                  <p className="text-forest font-medium">{c.contact.form.successMessage}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label className="block text-xs font-medium text-stone mb-1.5">
                      {c.contact.form.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={c.contact.form.namePlaceholder}
                      className="w-full px-4 py-2.5 rounded-lg border border-forest/10 bg-cream/50 text-charcoal placeholder:text-stone/40 text-sm focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest/30 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone mb-1.5">
                      {c.contact.form.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={c.contact.form.emailPlaceholder}
                      className="w-full px-4 py-2.5 rounded-lg border border-forest/10 bg-cream/50 text-charcoal placeholder:text-stone/40 text-sm focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest/30 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone mb-1.5">
                      {c.contact.form.subjectLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={c.contact.form.subjectPlaceholder}
                      className="w-full px-4 py-2.5 rounded-lg border border-forest/10 bg-cream/50 text-charcoal placeholder:text-stone/40 text-sm focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest/30 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone mb-1.5">
                      {c.contact.form.messageLabel}
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder={c.contact.form.messagePlaceholder}
                      className="w-full px-4 py-2.5 rounded-lg border border-forest/10 bg-cream/50 text-charcoal placeholder:text-stone/40 text-sm focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest/30 transition-all duration-200 resize-none"
                    />
                  </div>
                  {error && (
                    <p className="text-red-500 text-xs flex items-center gap-1.5">
                      <AlertCircle size={12} />
                      {c.contact.form.errorMessage}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="w-full px-4 py-2.5 bg-forest text-cream rounded-full text-sm font-medium hover:bg-forest-light hover:shadow-lg hover:shadow-forest/20 transition-all duration-300"
                  >
                    {c.contact.form.sendLabel}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
