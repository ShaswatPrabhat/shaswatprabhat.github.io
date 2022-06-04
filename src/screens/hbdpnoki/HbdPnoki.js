import { AnimatePresence, LazyMotion } from 'framer-motion';
import { AppHeader, ScreenContainer, StyledAnchor } from '../app/App.styles';
import { LINKS } from '../../utils/constants';
import React, { useEffect } from 'react';
import { HomeContentContainer } from './HbdPnoki.styles';

const loadFeatures = () =>
  import('../../framer-motion-feature.js').then((res) => res.default);

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
    <div className="App">
      <LazyMotion features={loadFeatures}>
        <AppHeader>
          <StyledAnchor to={LINKS.HBD_PNOKI}>
            Happy Birthday Pnoki!!
          </StyledAnchor>
        </AppHeader>
        <ScreenContainer>
          <AnimatePresence>
            <HomeContentContainer
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 1.8, bounce: 0.7 }}
            >
              <h2>Dhin Chak!</h2>
              <h2>Dhin Chak!!</h2>
              <h2>Dhin dhin dhaaa!</h2>
            </HomeContentContainer>
          </AnimatePresence>
        </ScreenContainer>
      </LazyMotion>
    </div>
  );
};
