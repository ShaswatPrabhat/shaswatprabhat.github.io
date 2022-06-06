import * as React from 'react';
import { useState } from 'react';
import { m } from 'framer-motion';
import { wrap } from 'popmotion';
import { images } from '../../data/image-data';

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 99,
    x: 0,
    opacity: 1,
  },
};

export const HbdThirdAnimation = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <m.div
        style={{
          zIndex: 99,
          width: '80vh',
          height: '70vh',
          borderRadius: 30,
          backgroundColor: '#faf7f7',
          opacity: 1,
          marginTop: '-10vh',
          padding: '2vh',
          display: 'flex',
        }}
      >
        <m.div
          className="next"
          onClick={() => paginate(-1)}
          style={{
            zIndex: 80,
            color: 'black',
            opacity: 1,
            rotateY: '180deg',
            alignSelf: 'center',
          }}
        >
          {'‣'}
        </m.div>
        <m.img
          key={page}
          src={images[imageIndex].url}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          transition={{
            x: { type: 'spring', stiffness: 100, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          style={{
            width: '50%',
          }}
        />
        <m.p
          key={images[imageIndex].text}
          style={{
            width: '50%',
            opacity: 0,
            color: 'black',
            alignSelf: 'center',
            padding: '1vh',
          }}
          animate={{ opacity: 1 }}
          transition={{
            opacity: { type: 'spring', duration: 2, delay: 0.5 },
          }}
        >
          {images[imageIndex].text}
        </m.p>

        <m.div
          className="prev"
          onClick={() => paginate(1)}
          style={{
            zIndex: 99,
            opacity: 1,
            alignSelf: 'center',
            color: 'black',
          }}
        >
          {'‣'}
        </m.div>
      </m.div>
    </>
  );
};
