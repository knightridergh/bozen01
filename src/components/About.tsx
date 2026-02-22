import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const hashtags = ['#Innovation', '#Technology', '#Solutions', '#Growth'];

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Bozon
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Bozon is a forward-thinking digital solutions company dedicated to transforming
              businesses through innovation and technology. We empower organizations to achieve
              growth, efficiency, and measurable success through tailored digital strategies and
              development expertise.
            </p>

            <div className="flex flex-wrap gap-3">
              {hashtags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-blue-50 text-accent px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 border-4 border-accent/30 rounded-2xl animate-pulse" />
              </div>
            </div>

            <motion.div
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-4xl font-bold text-accent mb-1">500+</div>
              <div className="text-sm text-gray-600">Projects Delivered</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
