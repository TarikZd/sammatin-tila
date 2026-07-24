import { motion } from "framer-motion";
import { useContent } from "../hooks/useLang";

export default function Products() {
  const c = useContent();

  return (
    <section id="products" className="py-24 bg-cream">
      <div className="content-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-forest text-center mb-4"
        >
          {c.products.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-stone text-center max-w-2xl mx-auto mb-12"
        >
          {c.products.subtitle}
        </motion.p>

        {c.products.categories.map((category) => (
          <div key={category.title}>
            <h3 className="text-2xl font-semibold text-forest mb-8">{category.title}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {category.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden border border-forest/5"
                >
                  <div className="aspect-[4/3] bg-forest/10">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-forest mb-2">{item.name}</h4>
                    <p className="text-stone text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-forest font-medium bg-forest/5 px-6 py-4 rounded-2xl border border-forest/10 max-w-xl mx-auto"
        >
          {c.products.note}
        </motion.p>
      </div>
    </section>
  );
}
