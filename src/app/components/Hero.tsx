import { motion } from 'motion/react';
import { ArrowRight, Twitter, Instagram, Facebook, Coins } from 'lucide-react';
import bgImage from 'figma:asset/53cfde835b9af513afc1c4e79ff2e4bf6d9cd3d3.png';

export function Hero() {
  const socials = [
    {
      icon: Twitter,
      name: 'Twitter',
      link: 'https://twitter.com/mayemusk',
    },
    {
      icon: Instagram,
      name: 'Instagram',
      link: 'https://www.instagram.com/mayemusk/',
    },
    {
      icon: Facebook,
      name: 'Facebook',
      link: 'https://www.facebook.com/MayeMusk/',
    },
    {
      icon: Coins,
      name: 'Pump.fun',
      link: 'https://pump.fun',
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="mb-8">
            <span className="text-sm uppercase tracking-[0.3em] text-gray-600">
              ElonMuskMom Coin
            </span>
          </div>
          
          <h1 className="mb-8">
            <span className="block text-7xl md:text-9xl lg:text-[12rem] font-light tracking-tight leading-[0.9]">
              May
            </span>
            <span className="block text-7xl md:text-9xl lg:text-[12rem] font-light tracking-tight leading-[0.9]">
              Musk
            </span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-16"
          >
            <p className="text-3xl md:text-5xl font-light text-black mb-8 leading-tight max-w-4xl mx-auto">
              If May Musk helped<br />Elon get rich,<br />she'll help us too.
            </p>
            <p className="text-lg md:text-xl font-light text-gray-600">
              Model. Dietitian. Author. Superstar. Mother of a Billionaire.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="https://pump.fun" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-10 py-5 bg-black text-white text-lg font-light hover:bg-gray-900 transition-all flex items-center gap-3"
              >
                Buy ElonMuskMom
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </a>
              <button className="px-10 py-5 border border-black text-lg font-light hover:bg-black hover:text-white transition-all">
                Learn More
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-8">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                    className="group flex flex-col items-center gap-2"
                    aria-label={social.name}
                  >
                    <div className="p-3 border border-gray-300 group-hover:border-black group-hover:bg-black transition-all">
                      <Icon className="w-6 h-6 text-black group-hover:text-white transition-colors" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs text-gray-600 group-hover:text-black transition-colors font-light">
                      {social.name}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}