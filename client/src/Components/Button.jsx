import React from 'react';
import { motion } from 'framer-motion';

const Button = () => {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
    },
  };

  return (
    <motion.button
      whileHover="hover"
      variants={buttonVariants}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Add Text
    </motion.button>
  );
};

export default Button;