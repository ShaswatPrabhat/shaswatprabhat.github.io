import React, { useEffect, useState } from 'react';
import HamburgerMenuIcon from 'react-hamburger-menu';
import {
  HamburgerMenuIconContainer,
  StyledMenu,
  BurgerSideBarLink,
} from './burger-side-bar.styles';

const framerStyledAnchorVariants = {
  opened: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 1.5,
    },
  },
  closed: {
    opacity: 0,
  },
};

const BurgerSideBar = ({ burgerContents }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);
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
      <StyledMenu
        open={isMenuOpen}
        isOpen={isMenuOpen}
        preventScroll={true}
        closeTimeoutMS={1000}
      >
        {burgerContents.map(({ link, title }) => (
          <BurgerSideBarLink
            variants={framerStyledAnchorVariants}
            animate={isMenuOpen ? 'opened' : 'closed'}
            to={link}
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            {title}
          </BurgerSideBarLink>
        ))}
      </StyledMenu>
    </>
  );
};

export default BurgerSideBar;
