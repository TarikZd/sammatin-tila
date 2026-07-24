import { createContext, useContext, useState, type ReactNode } from "react";
import type { Lang, Content } from "../lib/types";
import { getContent } from "../lib/utils";

interface LangContextType {
  lang: Lang;
  toggle: () => void;
  content: Content;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fi");

  const toggle = () => setLang((l) => (l === "fi" ? "en" : "fi"));

  return (
    <LangContext.Provider value={{ lang, toggle, content: getContent(lang) }}>
      {children}
    </LangContext.Provider>
  );
}

export function useContent(): Content {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useContent must be used within LangProvider");
  return ctx.content;
}

export function useLang(): Lang {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx.lang;
}

export function useToggleLang(): () => void {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useToggleLang must be used within LangProvider");
  return ctx.toggle;
}
