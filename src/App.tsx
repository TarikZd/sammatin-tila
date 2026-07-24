import { LangProvider } from "./hooks/useLang";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import History from "./components/History";
import Products from "./components/Products";
import Cabins from "./components/Cabins";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const mainId = "main-content";

  return (
    <LangProvider>
      <a
        href={`#${mainId}`}
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-cream focus:text-forest focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-forest/50"
      >
        Siirry sisältöön
      </a>
      <Navigation />
      <main id={mainId}>
        <Hero />
        <About />
        <History />
        <Products />
        <Cabins />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  );
}
