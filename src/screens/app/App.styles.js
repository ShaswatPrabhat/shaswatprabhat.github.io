import styled from 'styled-components';
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ScreenContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: white;
  z-index: 99;
`;
export const AppHeader = styled.header`
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;
export const HbdHeader = styled.header`
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledHbdAnchor = styled(m(Link))`
  font-size: 3rem;
  padding: 2rem 0;
  letter-spacing: 0.3rem;
  color: #fcfbf7;
  text-decoration: none;
  transition: color 0.3s linear;

  @media (max-width: 576px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;
