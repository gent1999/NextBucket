import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Footer from './components/Footer';
import WhyHoopsHub from './components/WhyHoopsHub';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyHoopsHub />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
