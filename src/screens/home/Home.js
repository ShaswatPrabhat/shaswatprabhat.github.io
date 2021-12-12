import { LazyMotion } from 'framer-motion';
import BurgerSideBar from '../../components/burger-side-bar/burger-side-bar';
import { AppHeader, ScreenContainer, StyledAnchor } from '../app/App.styles';
import { LINKS } from '../../utils/constants';
import React from 'react';
import { HomeContentContainer } from './Home.styles';

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
export const Home = () => (
  <div className="App">
    <LazyMotion features={loadFeatures}>
      <BurgerSideBar burgerContents={burgerContents} />
      <AppHeader>
        <StyledAnchor to={LINKS.HOME_PATH}>Shaswat&apos;s blog</StyledAnchor>
      </AppHeader>
      <ScreenContainer>
        <HomeContentContainer
          initial={{ scale: 0.85 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 1.8, bounce: 0.7 }}
        >
          <h2>Welcome to my blog!</h2>
          <p>Here I will share my musings and general Shaswat stuff</p>
        </HomeContentContainer>
      </ScreenContainer>
    </LazyMotion>
  </div>
);
