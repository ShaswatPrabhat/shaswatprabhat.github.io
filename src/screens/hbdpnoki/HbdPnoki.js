import { AnimatePresence, LazyMotion } from 'framer-motion';
import BurgerSideBar from '../../components/burger-side-bar/burger-side-bar';
import { AppHeader, ScreenContainer, StyledAnchor } from '../app/App.styles';
import { LINKS } from '../../utils/constants';
import React from 'react';
import { HomeContentContainer } from './HbdPnoki.styles';

const loadFeatures = () =>
  import('../../framer-motion-feature.js').then((res) => res.default);

const burgerContents = [
  { link: LINKS.HOME_PATH, title: 'Programming' },
  {
    link: LINKS.HOME_PATH,
    title: 'Books',
  },
  { link: LINKS.POEMS_PATH, title: 'Poems' },
];
export const HbdPnoki = () => (
  <div className="App">
    <LazyMotion features={loadFeatures}>
      <BurgerSideBar burgerContents={burgerContents} />
      <AppHeader>
        <StyledAnchor to={LINKS.HOME_PATH}>Happy Birthday Pnoki!!</StyledAnchor>
      </AppHeader>
      <ScreenContainer>
        <AnimatePresence>
          <HomeContentContainer
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 1.8, bounce: 0.7 }}
          >
            <h2>Dhin Chak Dhin Chak Dhin Chak</h2>
          </HomeContentContainer>
        </AnimatePresence>
      </ScreenContainer>
    </LazyMotion>
  </div>
);
