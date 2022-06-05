import { AnimatePresence, LazyMotion, m } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';
import { HbdHeaderComponent } from './HbdHeaderComponent';
import { GradientBackgroundContainer, HbdContainer } from './HbdPnoki.styles';
import { HbdFirstAnimation } from './HbdFirstAnimation';
import { HbdSecondAnimation } from './HbdSecondAnimation';
// import Video from '../../assets/background.mp4';

const loadFeatures = () =>
  import('../../framer-motion-feature.js').then((res) => res.default);

export const HbdPnoki = () => {
  const [animationState, setAnimationState] = useState(0);
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
        <HbdContainer>
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
            {animationState === 0 && (
              <HbdFirstAnimation
                onAnimationsComplete={() => {
                  setAnimationState(1);
                }}
              />
            )}
            {animationState === 1 && (
              <HbdSecondAnimation
                onAnimationsComplete={() => {
                  setAnimationState(3);
                }}
              />
            )}
            {animationState === 3 && <m.p>44444</m.p>}
          </AnimatePresence>
        </HbdContainer>
      </LazyMotion>
    </GradientBackgroundContainer>
  );
};
