
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Menu from '../components/Menu';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    if (typeof window !== 'undefined') {
      const AOS = (window as any).AOS;
      if (AOS) {
        AOS.init({
          duration: 800,
          easing: 'ease-out-cubic',
          once: true,
          offset: 100
        });
      }
    }

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <div className="min-h-screen bg-cream-50">
        <Header />
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
