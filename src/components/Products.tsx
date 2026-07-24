import { motion } from "framer-motion";
import { Store, Milk } from "lucide-react";
import { useContent } from "../hooks/useLang";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export default function Products() {
  const c = useContent();

  return (
    <section id="products" className="section-padding bg-white/40">
      <div className="content-section">
        <motion.h2
          {...fadeInUp}
          className="section-heading text-center mb-4"
        >
          {c.products.title}
        </motion.h2>
        <motion.p
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-stone text-center max-w-xl mx-auto mb-14"
        >
          {c.products.subtitle}
        </motion.p>

        {c.products.categories.map((category) => (
          <div key={category.title}>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px flex-1 bg-forest/10" />
              <h3 className="text-lg font-semibold text-forest">{category.title}</h3>
              <span className="h-px flex-1 bg-forest/10" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {category.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  {...fadeInUp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card overflow-hidden"
                >
                  <div className="aspect-[4/3] bg-forest/10 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-base font-semibold text-forest mb-2">{item.name}</h4>
                    <p className="text-stone text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 card p-8 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-5">
            <Milk size={20} className="text-bark" />
            <h3 className="text-xl font-semibold text-forest">{c.products.dairySection.title}</h3>
          </div>
          {c.products.dairySection.body.map((p, i) => (
            <p key={i} className="text-stone text-sm leading-relaxed mb-3 last:mb-0">{p}</p>
          ))}
          <div className="flex flex-wrap gap-3 mt-5">
            <span className="pill">{c.products.dairySection.breeds}</span>
            <span className="pill">{c.products.dairySection.production}</span>
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-forest/5 px-6 py-4 rounded-xl border border-forest/10">
            <Store size={18} className="text-bark" />
            <p className="text-forest font-medium text-sm">{c.products.note}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
