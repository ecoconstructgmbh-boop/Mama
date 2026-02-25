import { motion } from 'motion/react';
import { Twitter, Instagram, Facebook, Coins } from 'lucide-react';

export function Community() {
  const socials = [
    {
      icon: Twitter,
      name: 'Twitter',
      handle: '@mayemusk',
      link: 'https://twitter.com/mayemusk',
    },
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@mayemusk',
      link: 'https://www.instagram.com/mayemusk/',
    },
    {
      icon: Facebook,
      name: 'Facebook',
      handle: 'MayeMusk',
      link: 'https://www.facebook.com/MayeMusk/',
    },
    {
      icon: Coins,
      name: 'Pump.fun',
      handle: 'Trade on Pump.fun',
      link: 'https://pump.fun',
    },
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32"
        >
          <h2 className="text-6xl md:text-8xl font-light mb-12 leading-tight">
            Join us.
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 font-light leading-relaxed max-w-3xl">
            Become part of the community that believes in the power of May Musk. 
            She helped Elon — now it's our turn.
          </p>
        </motion.div>

        <div className="space-y-1 mb-32">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center justify-between border-t border-gray-200 py-10 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light mb-1">{social.name}</h3>
                    <p className="text-gray-500">{social.handle}</p>
                  </div>
                </div>
                <div className="text-gray-400 group-hover:text-black transition-colors">
                  <span className="text-2xl">→</span>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center py-24 border-t border-gray-200"
        >
          <h3 className="text-4xl md:text-6xl font-light mb-12">
            May helped Elon.<br />Now she'll help us.
          </h3>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
            Join thousands of ElonMuskMom holders who believe in the power 
            of a mother's blessing from the world's most successful mom.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://pump.fun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-12 py-6 bg-black text-white text-lg font-light hover:bg-gray-900 transition-all"
            >
              Buy on Pump.fun
            </a>
            <button className="px-12 py-6 border border-black text-lg font-light hover:bg-black hover:text-white transition-all">
              View Chart
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 pt-12 border-t border-gray-200"
        >
          <p className="text-sm text-gray-500 leading-relaxed max-w-4xl mx-auto text-center">
            <strong className="text-black">Disclaimer:</strong> ElonMuskMom Coin is a meme token created for entertainment and 
            expressing gratitude to May Musk. This is not investment advice. Cryptocurrencies are volatile and 
            may result in loss of funds. Only invest what you can afford to lose. The token is not 
            affiliated with May Musk, Elon Musk or their companies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}