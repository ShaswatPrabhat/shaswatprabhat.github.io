import { m, useAnimation } from 'framer-motion';
import { BodyLine1, BodyLine2, BodyLine3, BodyLine4 } from './HbdPnoki.styles';
import React, { useEffect, useState } from 'react';

const bodyLineAnimateIn = {
  opacity: 1,
  scale: 1.2,
  transition: { type: 'spring', duration: 2, delay: 1 },
};
const bodyLineAnimateOut = {
  opacity: 0,
  scale: 0.7,
  transition: { type: 'spring', mass: 50 },
};

export const HbdFirstAnimation = ({ onAnimationsComplete }) => {
  const [onLoadAnimationComplete, setOnLoadAnimationComplete] = useState(false);
  const animationLine1 = useAnimation();
  const animationLine2 = useAnimation();
  const animationLine3 = useAnimation();
  const animationLine4 = useAnimation();

  useEffect(() => {
    const onLoadLinesAnimation = async () => {
      await animationLine1.start(bodyLineAnimateIn);
      await animationLine2.start(bodyLineAnimateIn);
      await animationLine3.start(bodyLineAnimateIn);
      await animationLine4.start(bodyLineAnimateIn);
      setOnLoadAnimationComplete(true);
    };
    if (onLoadAnimationComplete) {
      const onUnLoadLinesAnimation = async () => {
        await animationLine1.start(bodyLineAnimateOut);
        await animationLine2.start(bodyLineAnimateOut);
        await animationLine3.start(bodyLineAnimateOut);
        await animationLine4.start(bodyLineAnimateOut);
        setTimeout(() => {
          onAnimationsComplete();
        }, 500);
      };
      setTimeout(() => {
        onUnLoadLinesAnimation();
      }, 3000);
    }

    setTimeout(() => {
      onLoadLinesAnimation();
    }, 1000);
  }, [
    animationLine1,
    animationLine2,
    animationLine3,
    animationLine4,
    onLoadAnimationComplete,
    onAnimationsComplete,
  ]);

  return (
    <>
      <m.div
        animate={animationLine1}
        key="bodyLine1"
        style={{
          opacity: 0,
        }}
      >
        <BodyLine1>
          👋 Guess which of my favorite <br />
          human beings was born today ?
        </BodyLine1>
      </m.div>
      <m.div
        animate={animationLine2}
        key="bodyLine2"
        style={{
          opacity: 0,
        }}
      >
        <BodyLine2>Hint: It's you! 👊👊</BodyLine2>
      </m.div>
      <m.div
        animate={animationLine3}
        key="bodyLine3"
        style={{
          opacity: 0,
        }}
      >
        <BodyLine3>
          Pankhudi <br />
          'Hegda Bhushi'
          <br /> Bhonsle
        </BodyLine3>
      </m.div>
      <m.div
        animate={animationLine4}
        key="bodyLine4"
        style={{
          opacity: 0,
        }}
      >
        <BodyLine4>
          I had to! 😈😈 <br />
          Sorry
        </BodyLine4>
      </m.div>
    </>
  );
};
