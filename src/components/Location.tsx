import { motion } from "framer-motion";
import { MapPin, Navigation, Car, Train } from "lucide-react";
import { useContent } from "../hooks/useLang";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const distanceIcons = [
  <Car key="car" size={16} />,
  <Car key="car2" size={16} />,
  <MapPin key="pin" size={16} />,
  <Train key="train" size={16} />,
];

export default function Location() {
  const c = useContent();

  return (
    <section id="location" className="section-padding bg-cream">
      <div className="content-section">
        <motion.div
          {...fadeInUp}
          className="text-center mb-14"
        >
          <h2 className="section-heading mb-4">
            {c.visit.title}
          </h2>
          <p className="text-stone flex items-center justify-center gap-2">
            <MapPin size={16} className="text-bark" />
            {c.visit.address}
          </p>
          <p className="text-stone max-w-xl mx-auto mt-4 text-sm leading-relaxed">
            {c.visit.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6 mb-14">
          <motion.div
            {...fadeInUp}
            className="md:col-span-3 rounded-xl overflow-hidden shadow-sm border border-forest/5"
          >
            <iframe
              title="Sammatin tila kartalla"
              src={c.visit.mapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 flex flex-col justify-center"
          >
            <h3 className="text-base font-semibold text-forest mb-5 flex items-center gap-2">
              <Navigation size={16} className="text-bark" />
              Etäisyydet
            </h3>
            <div className="space-y-3">
              {c.visit.distances.map((d, i) => (
                <div
                  key={d.destination}
                  className="flex items-center gap-3 bg-white/60 rounded-lg px-4 py-3 border border-forest/5"
                >
                  <span className="text-bark flex-shrink-0">
                    {distanceIcons[i] ?? <Navigation size={16} />}
                  </span>
                  <span className="text-sm text-stone">{d.destination}</span>
                  <span className="ml-auto text-sm font-medium text-forest whitespace-nowrap">
                    {d.duration}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
