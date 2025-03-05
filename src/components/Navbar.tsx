import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Resources', href: '#resources' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <motion.nav 
      className={`fixed w-full top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-lg' : 'bg-white/50'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 bg-primary-500 rounded-lg" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              ParalegalAI
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {item.name}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            <button className="glowing-button px-6 py-2.5 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <Hamburger 
              toggled={isOpen} 
              toggle={setIsOpen} 
              size={24}
              color={isScrolled ? '#4f46e5' : '#64748b'}
            />
          </div>
        </div>

        {isOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-lg py-4 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
