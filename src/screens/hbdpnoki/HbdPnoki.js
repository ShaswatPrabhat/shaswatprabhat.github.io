import { AnimatePresence, LazyMotion } from 'framer-motion';
import { ScreenContainer } from '../app/App.styles';
import React, { useEffect } from 'react';
import Snowfall from 'react-snowfall';
import { HbdHeaderComponent } from './HbdHeaderComponent';
import { GradientBackgroundContainer } from './HbdPnoki.styles';
import { HbdBodyComponent } from './HbdBodyComponent';
// import Video from '../../assets/background.mp4';

const loadFeatures = () =>
  import('../../framer-motion-feature.js').then((res) => res.default);

export const HbdPnoki = () => {
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
            <HbdBodyComponent />
          </AnimatePresence>
        </ScreenContainer>
      </LazyMotion>
    </GradientBackgroundContainer>
  );
};
