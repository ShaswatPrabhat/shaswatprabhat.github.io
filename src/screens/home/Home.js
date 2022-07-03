import { AnimatePresence, LazyMotion } from 'framer-motion';
import { ScreenContainer } from '../app/App.styles';
import { LINKS } from '../../utils/constants';
import React from 'react';
import { HomeContentContainer } from './Home.styles';
import HeaderSidebarAndNavbar from '../../components/header-sidebar-and-navbar/header-sidebar-and-navbar';

const loadFeatures = () =>
  import('../../framer-motion-feature.js').then((res) => res.default);

const burgerContents = [
  { link: LINKS.HOME_PATH, title: 'Programming' },
  {
    link: LINKS.HOME_PATH,
    title: 'Books',
  },
  { link: LINKS.POEMS_PATH, title: 'Poems' },
  { link: LINKS.POEMS_PATH, title: 'Movies' },
];
export const Home = () => (
  <div className="App">
    <LazyMotion features={loadFeatures}>
      <HeaderSidebarAndNavbar burgerContents={burgerContents} />
      <ScreenContainer>
        <AnimatePresence>
          <HomeContentContainer>
            <h2>Welcome to my blog!</h2>
            <p>Here I will share my musings and general Shaswat stuff</p>
          </HomeContentContainer>
        </AnimatePresence>
      </ScreenContainer>
    </LazyMotion>
  </div>
);
