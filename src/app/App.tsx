import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyD2DX2 } from './components/WhyD2DX2';
import { Journey } from './components/Journey';
import { Apply } from './components/Apply';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyD2DX2 />
          <Journey />
          <Apply />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}
