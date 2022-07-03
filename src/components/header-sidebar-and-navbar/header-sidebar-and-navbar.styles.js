import styled from 'styled-components';
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';

export const TopNavBarContainer = styled(m.nav)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 5vh;
  flex: 1;
  padding-left: 2vh;
  padding-right: 2vh;
`;

export const StyledNavBarLink = styled(m(Link))`
  margin: 5vh;
  text-decoration: none;
  color: #61dafb;
`;

export const StyledHeading = styled(m(Link))`
  font-size: 3rem;
  padding: 2rem 0;
  letter-spacing: 0.5rem;
  color: #61dafb;
  text-decoration: none;

  @media (max-width: 576px) {
    font-size: 2rem;
    text-align: center;
  }
`;
