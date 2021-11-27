import { LazyMotion, m } from 'framer-motion';
import BurgerSideBar from './components/burger-side-bar';
import { AppHeader, ScreenContainer, StyledAnchor } from './App.styles';
import { LINKS } from './utils/constants';
import React from 'react';

const loadFeatures = () => import('./framer-motion-feature.js').then((res) => res.default);

export const Home = () => (
  <div className='App'>
    <LazyMotion features={loadFeatures}>
      <BurgerSideBar />
      <AppHeader>
        <StyledAnchor href={LINKS.HOME_PATH}>Shaswat&apos;s blog</StyledAnchor>
      </AppHeader>
      <ScreenContainer>
        <m.div
          initial={{ scale: 0.85 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 1.8, bounce: 0.7 }}
        >
          <h2>Welcome to my blog!</h2>
          <p>Here I will share my musings and general Shaswat stuff</p>
        </m.div>
      </ScreenContainer>
    </LazyMotion>
  </div>
);
