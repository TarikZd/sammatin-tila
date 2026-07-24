import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useContent, useToggleLang } from "../hooks/useLang";

export default function Navigation() {
  const c = useContent();
  const toggleLang = useToggleLang();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-forest/10">
      <div className="content-section flex items-center justify-between h-16">
        <a href="#hero" className="text-xl font-bold text-forest tracking-tight">
          {c.navigation.logo}
        </a>

        <div className="hidden md:flex items-center gap-6">
          {c.navigation.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-stone hover:text-forest transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="ml-4 px-3 py-1 text-sm border border-forest text-forest rounded-full hover:bg-forest hover:text-cream transition-colors"
          >
            {c.navigation.langSwitch}
          </button>
        </div>

        <button
          className="md:hidden p-2 text-forest"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Sulje valikko" : "Avaa valikko"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-cream border-b border-forest/10"
          >
            <div className="flex flex-col px-4 pb-4 gap-3">
              {c.navigation.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-stone hover:text-forest transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={toggleLang}
                className="self-start px-3 py-1 text-sm border border-forest text-forest rounded-full hover:bg-forest hover:text-cream transition-colors"
              >
                {c.navigation.langSwitch}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
