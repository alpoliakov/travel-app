import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';

const postVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

export default function SelectionModal({ setSelectionModal }) {
  const { formatMessage: f } = useIntl();

  return (
    <div className="w-full h-full flex items-center justify-center fixed block top-0 left-0 bg-gray-400 opacity-80 z-40">
      <motion.div
        className="w-full w-5/6 sm:2/3 md:w-1/3 xl:w-1/4 2xl:w-1/4"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={postVariants}>
        <div className="leading-loose">
          <div className="m-4 relative flex items-center justify-center flex-col p-3 bg-gray-800 opacity-99 z-50 rounded shadow-xl">
            <button className="text-white text-xl uppercase hover:text-yellow-500 focus:outline-none font-semibold block">
              {f({ id: 'feedbackSee' })}
            </button>
          </div>
          <div className="m-4 relative flex items-center justify-center flex-col p-3 bg-gray-800 opacity-99 z-50 rounded shadow-xl">
            <button className="text-white text-xl uppercase hover:text-yellow-500 focus:outline-none font-semibold block">
              {f({ id: 'feedbackGive' })}
            </button>
          </div>
          <div className="m-4 relative flex items-center justify-center flex-col p-3 bg-gray-800 opacity-99 z-50 rounded shadow-xl">
            <button
              className="text-white uppercase text-xl hover:text-yellow-500 focus:outline-none font-semibold block"
              onClick={() => setSelectionModal(false)}>
              {f({ id: 'close' })}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
