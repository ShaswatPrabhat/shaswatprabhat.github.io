import styled from 'styled-components';
import { m } from 'framer-motion';
import device from '../../utils/break-points';

export const GradientBackgroundContainer = styled(m.div)`
  background: #0f0c29;
  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
`;

export const BodyLine1 = styled(m.p)`
  color: #faf5e3;
  letter-spacing: 2px;
`;
export const BodyLine4 = styled(m.p)`
  color: #faf5e3;
  letter-spacing: 0.3px;
  font-size: 2vh;
`;
export const BodyLine2 = styled(m.p)`
  color: #faf1d2;
  font-weight: bold;
`;
export const BodyLine3 = styled(m.h2)`
  color: #f7ebc1;
  font-family: 'Quintessential', cursive;
  line-height: 120%;
`;
export const BackgroundWrapper = styled(m.div)`
  align-self: center;
  flex: 0.1;
  width: 50%;
  height: 50%;
`;

export const HbdContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  z-index: 99;
`;

export const HbdThirdAnimationWrapper = styled(m.div)`
  z-index: 99;
  width: 80vh;
  height: 70vh;
  border-radius: 5%;
  opacity: 0;
  margin-top: -10vh;
  padding: 2vh;
  display: flex;
  background: #d3cce3;
  background: -webkit-linear-gradient(to right, #e9e4f0, #d3cce3);
  background: linear-gradient(to right, #e9e4f0, #d3cce3);
  @media ${device('max').tablet} {
    width: 80%;
    height: 80%;
  }
`;

export const HbdSecondAnimationWrapper = styled(m.div)`
  width: 50vh;
  height: 50vh;
  border-radius: 5%;
  opacity: 0;
  margin-top: -10vh;
  padding: 2vh;
  background: #d3cce3;
  background: -webkit-linear-gradient(to right, #e9e4f0, #d3cce3);
  background: linear-gradient(to right, #e9e4f0, #d3cce3);
  @media ${device('max').tablet} {
    width: 80%;
    height: 80%;
  }
`;
