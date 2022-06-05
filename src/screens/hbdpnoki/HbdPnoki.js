import { AnimatePresence, LazyMotion, useAnimation, m } from 'framer-motion';
import { ScreenContainer } from '../app/App.styles';
import React, { useEffect } from 'react';
import Snowfall from 'react-snowfall';
import { HbdHeaderComponent } from './HbdHeaderComponent';
import {
  BodyLine1,
  BodyLine2,
  BodyLine3,
  GradientBackgroundContainer,
} from './HbdPnoki.styles';
// import Video from '../../assets/background.mp4';

const loadFeatures = () =>
  import('../../framer-motion-feature.js').then((res) => res.default);

const bodyLineAnimationProps = {
  opacity: 1,
  scale: 1.2,
  transition: { type: 'spring', duration: 1.2 },
};
export const HbdPnoki = () => {
  const animationLine1 = useAnimation();
  const animationLine2 = useAnimation();
  const animationLine3 = useAnimation();
  const animationLine4 = useAnimation();

  useEffect(() => {
    const onLoadLinesAnimation = async () => {
      await animationLine1.start(bodyLineAnimationProps);
      await animationLine2.start(bodyLineAnimationProps);
      await animationLine3.start(bodyLineAnimationProps);
      await animationLine4.start(bodyLineAnimationProps);
    };
    setTimeout(() => {
      onLoadLinesAnimation();
    }, 500);
  }, [animationLine1, animationLine2, animationLine3, animationLine4]);

  useEffect(() => {
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', 'Happy Birthday Pnoki!!');
    document.querySelector('title').textContent = 'Happy Birthday Pnoki!!';
    // document.getElementById('backgroundVideo').play();

    return () => {
      document
        .querySelector('meta[name="description"]')
        .setAttribute('content', "Shaswat's blog");
      document.querySelector('title').textContent = "Shaswat's blog";
    };
  }, []);

  return (
    <GradientBackgroundContainer className="HbdPnoki">
      <LazyMotion features={loadFeatures}>
        <Snowfall />
        <HbdHeaderComponent />
        <ScreenContainer>
          {/* <video
            height="50%"
            width="50%"
            loop
            style={{ zIndex: 99 }}
            autoPlay
            id="backgroundVideo"
            preload
            muted
            on
          >
            <source src={Video} type="video/mp4" />
          </video> */}
          <AnimatePresence>
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
              <BodyLine3>Pankhudi 'The Hegde' Bhonsle</BodyLine3>
            </m.div>
            <m.div
              animate={animationLine4}
              key="bodyLine4"
              style={{
                opacity: 0,
              }}
            >
              <BodyLine1>
                I had to! 😈😈 <br />
                Sorry
              </BodyLine1>
            </m.div>
          </AnimatePresence>
        </ScreenContainer>
      </LazyMotion>
    </GradientBackgroundContainer>
  );
};
