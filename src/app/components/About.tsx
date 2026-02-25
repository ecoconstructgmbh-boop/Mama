import { motion } from 'motion/react';
import mayMuskImage from 'figma:asset/2691077d3ec69bf3ae75dd176cdc29c84b6d61ee.png';
import sportsIllustratedImage1 from 'figma:asset/ca943d32c40188da4108dd66be28a470d9908f79.png';
import sportsIllustratedImage2 from 'figma:asset/05021764305379109d9122df412bcd57f371a5ad.png';
import mayMuskGreenImage from 'figma:asset/f5c49c4eabb1fe186d761c34efafc6cee6a1ad75.png';

export function About() {
  const achievements = [
    {
      title: 'International Supermodel',
      description: 'Started modeling at age 15 in South Africa. Over 50 years of modeling career with appearances on covers of Time Magazine, Vogue, Elle, Women\'s Health, and New York Magazine. Featured in campaigns for Revlon, Target, and Virgin America.',
    },
    {
      title: 'Registered Dietitian',
      description: 'Master\'s degree in Dietetics and Nutritional Science. Over 45 years of practice as a consulting dietitian, speaking internationally about nutrition and health across three countries.',
    },
    {
      title: 'Bestselling Author',
      description: '\"A Woman Makes A Plan: Advice for a Lifetime of Adventure, Beauty, and Success\" — New York Times bestseller translated into 34 languages, available in over 100 countries worldwide.',
    },
    {
      title: 'Mother & Grandmother',
      description: 'Raised three successful children — Elon Musk (Tesla, SpaceX, Neuralink), Kimbal Musk (The Kitchen Restaurant Group), and Tosca Musk (filmmaker). Proud grandmother of 12 grandchildren.',
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
          <div className="max-w-4xl">
            <div className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-8">
              #ItsGreatToBe77
            </div>
            <h2 className="text-6xl md:text-8xl font-light mb-12 leading-tight">
              A lifetime of<br />adventure,<br />beauty, success.
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600 font-light leading-relaxed">
              From South Africa to Canada to the United States. Model, Registered Dietitian, 
              bestselling author and mother of three remarkable children. May Musk has lived a 
              life of resilience, reinvention and raising world-changers.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32"
        >
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <img 
              src={mayMuskImage} 
              alt="May Musk" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div className="space-y-1 mb-32">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-gray-200 py-12 hover:bg-gray-50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="md:w-1/3">
                  <h3 className="text-3xl md:text-4xl font-light">{achievement.title}</h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-xl text-gray-600 font-light leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sports Illustrated Photos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32"
        >
          <div className="mb-12 text-center">
            <p className="text-xl text-gray-500 font-light">
              Sports Illustrated Swimsuit Edition at 70+
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <img 
                src={sportsIllustratedImage1} 
                alt="May Musk for Sports Illustrated" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <img 
                src={sportsIllustratedImage2} 
                alt="May Musk for Sports Illustrated" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-gray-200 py-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <img 
                  src={mayMuskGreenImage} 
                  alt="May Musk" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-4xl md:text-5xl font-light mb-8">
                "A Woman Makes A Plan"
              </h3>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-8">
                Her New York Times bestselling memoir shares lessons on taking risks, working hard, 
                and making the best of every situation. From a childhood in South Africa to becoming 
                a single mother of three, to reinventing herself at every age — May's story inspires 
                millions to embrace life at any stage.
              </p>
              <div className="flex flex-wrap gap-6 text-lg text-gray-500">
                <span>📚 New York Times Bestseller</span>
                <span>🌍 34 Languages</span>
                <span>✨ 100+ Countries</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center py-24 border-t border-b border-gray-200"
        >
          <h3 className="text-4xl md:text-5xl font-light mb-8">
            A Mother's Legacy.
          </h3>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            May Musk raised three extraordinary children who are changing the world. 
            Her wisdom, resilience and unwavering support helped shape Elon, Kimbal and Tosca into 
            innovators and leaders. With ElonMuskMom Coin, we honor her incredible journey and 
            the power of a mother's belief.
          </p>
        </motion.div>
      </div>
    </section>
  );
}