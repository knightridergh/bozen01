import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const socialLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: '#',
      color: 'hover:bg-blue-400',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: '#',
      color: 'hover:bg-blue-600',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: '#',
      color: 'hover:bg-pink-600',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: '#',
      color: 'hover:bg-blue-700',
    },
  ];

  return (
    <section
      id="connect"
      className="py-24 bg-gradient-to-br from-primary via-primary-light to-gray-900 text-white"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Connected With Us
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Follow us for updates, insights, and announcements.
          </p>

          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white`}
              >
                <social.icon size={28} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
              <p className="text-gray-300 mb-6">
                Let's discuss how we can help transform your digital presence.
              </p>
              <motion.a
                href="mailto:hello@bozon.com"
                className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent-dark transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us Today
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
