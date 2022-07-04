import styled from 'styled-components';
import Modal from 'react-modal';
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';

export const HamburgerMenuIconContainer = styled.div`
  z-index: 100;
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 30px;
  margin-bottom: 60px;
  margin-top: 20px;
  margin-left: 20px;
`;

export const BurgerSideBarLink = styled(m(Link))`
  font-size: 2rem;
  padding: 2rem 0;
  letter-spacing: 0.5rem;
  color: #61dafb;
  text-decoration: none;
  opacity: 0;
  @media (max-width: 576px) {
    text-align: center;
  }
`;

export const StyledMenu = styled(Modal)`
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0.9;
  background: #000;
  height: 100%;
  width: 100vw;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
`;
