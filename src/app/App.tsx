import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { OurOffice } from './components/OurOffice';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'var(--font-sans)' }}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <OurOffice />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
