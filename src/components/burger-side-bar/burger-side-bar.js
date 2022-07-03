import React, { useState } from 'react';
import HamburgerMenuIcon from 'react-hamburger-menu';
import {
  HamburgerMenuIconContainer,
  StyledMenu,
} from './burger-side-bar.styles';
import { StyledAnchor } from '../../screens/app/App.styles';

const framerStyledAnchorVariants = {
  opened: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 1,
    },
  },
  closed: {
    opacity: 0,
  },
};

const BurgerSideBar = ({ burgerContents }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <HamburgerMenuIconContainer>
        <HamburgerMenuIcon
          className="hamburgerMenu"
          animationDuration={0.3}
          isOpen={isMenuOpen}
          menuClicked={() => {
            setIsMenuOpen((prev) => !prev);
          }}
          rotate={0}
          color="#61dafb"
        />
      </HamburgerMenuIconContainer>
      <StyledMenu open={isMenuOpen}>
        {burgerContents.map(({ link, title }) => (
          <StyledAnchor
            variants={framerStyledAnchorVariants}
            animate={isMenuOpen ? 'opened' : 'closed'}
            to={link}
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            {title}
          </StyledAnchor>
        ))}
      </StyledMenu>
    </>
  );
};

export default BurgerSideBar;
