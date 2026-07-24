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
  return (
    <LangProvider>
      <Navigation />
      <main>
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
