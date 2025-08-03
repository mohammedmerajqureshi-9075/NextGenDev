import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="relative w-14 h-8 bg-text/20 rounded-full p-1 backdrop-blur-sm border border-text/10"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-6 h-6 bg-primary rounded-full flex items-center justify-center"
        animate={{
          x: theme === 'dark' ? 0 : 20
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        <motion.div
          animate={{ rotate: theme === 'dark' ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          {theme === 'dark' ? (
            <Moon size={14} className="text-dark" />
          ) : (
            <Sun size={14} className="text-dark" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};