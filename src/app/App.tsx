import { Hero } from './components/Hero';
import { About } from './components/About';
import { Tokenomics } from './components/Tokenomics';
import { Community } from './components/Community';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Hero />
      <About />
      <Tokenomics />
      <Community />
      <Footer />
    </div>
  );
}