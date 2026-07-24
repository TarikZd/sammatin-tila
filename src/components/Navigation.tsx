import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useContent, useToggleLang } from "../hooks/useLang";

export default function Navigation() {
  const c = useContent();
  const toggleLang = useToggleLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-forest/10"
          : "bg-cream/80 backdrop-blur-sm"
      }`}
    >
      <div className="content-section flex items-center justify-between h-16 md:h-18">
        <a
          href="#hero"
          className="text-lg md:text-xl font-semibold text-forest tracking-tight hover:opacity-80 transition-opacity"
        >
          {c.navigation.logo}
        </a>

        <div className="hidden md:flex items-center gap-1">
          {c.navigation.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-3 py-1.5 text-sm text-stone hover:text-forest transition-colors after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px after:bg-forest after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="ml-3 px-3 py-1 text-xs font-medium border border-forest/30 text-forest rounded-full hover:bg-forest hover:text-cream transition-all duration-300"
          >
            {c.navigation.langSwitch}
          </button>
        </div>

        <button
          className="md:hidden p-2 text-forest"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Sulje valikko" : "Avaa valikko"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
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
            <div className="flex flex-col px-5 pb-5 gap-2">
              {c.navigation.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-stone hover:text-forest transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={toggleLang}
                className="self-start mt-2 px-4 py-1.5 text-xs font-medium border border-forest/30 text-forest rounded-full hover:bg-forest hover:text-cream transition-all duration-300"
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
