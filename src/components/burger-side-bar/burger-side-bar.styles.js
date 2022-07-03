import styled from 'styled-components';

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

export const StyledMenu = styled.div`
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0.9;
  background: #000;
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(-100%)')};
  height: 110vh;
  width: 100vw;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
`;
