import { AnimatePresence, LazyMotion } from 'framer-motion';
import { HbdHeader, ScreenContainer, StyledHbdAnchor } from '../app/App.styles';
import { LINKS } from '../../utils/constants';
import React, { useEffect } from 'react';
import { HomeContentContainer } from './HbdPnoki.styles';

const loadFeatures = () =>
  import('../../framer-motion-feature.js').then((res) => res.default);

const animationProps = {
  initial: { scale: 0.85 },
  animate: { scale: 1 },
  transition: { type: 'spring', duration: 1.8, bounce: 0.7 },
};

export const HbdPnoki = () => {
  useEffect(() => {
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', 'Happy Birthday Pnoki!!');
    document.querySelector('title').textContent = 'Happy Birthday Pnoki!!';

    return () => {
      document
        .querySelector('meta[name="description"]')
        .setAttribute('content', "Shaswat's blog");
      document.querySelector('title').textContent = "Shaswat's blog";
    };
  }, []);

  return (
    <div
      className="HbdPnoki"
      style={{
        background: `#0f0c29`,
        // eslint-disable-next-line
        background: `-webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29)`,
        // eslint-disable-next-line
        background: `linear-gradient(to right, #24243e, #302b63, #0f0c29)`,
      }}
    >
      <LazyMotion features={loadFeatures}>
        <HbdHeader>
          <StyledHbdAnchor to={LINKS.HBD_PNOKI} {...animationProps}>
            Happy Birthday Pnoki!!
          </StyledHbdAnchor>
        </HbdHeader>
        <ScreenContainer>
          <AnimatePresence>
            <HomeContentContainer {...animationProps}>
              <h2
                style={{
                  color: '#faf5e3',
                }}
              >
                Dhin Chak!
              </h2>
              <h2
                style={{
                  color: '#faf1d2',
                }}
              >
                Dhin Chak!!
              </h2>
              <h2
                style={{
                  color: '#f7ebc1',
                }}
              >
                Dhin dhin dhaaa!
              </h2>
            </HomeContentContainer>
          </AnimatePresence>
        </ScreenContainer>
      </LazyMotion>
    </div>
  );
};
