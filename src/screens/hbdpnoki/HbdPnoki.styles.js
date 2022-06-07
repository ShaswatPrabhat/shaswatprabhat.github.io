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
  flex: 1;
`;

export const HbdThirdAnimationWrapper = styled(m.div)`
  z-index: 99;
  max-width: 40%;
  max-height: 500px;
  flex-shrink: 100;
  border-radius: 5%;
  opacity: 0;
  margin-top: -10vh;
  padding-top: 2vh;
  padding-bottom: 2vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #d3cce3;
  background: -webkit-linear-gradient(to right, #e9e4f0, #d3cce3);
  background: linear-gradient(to right, #e9e4f0, #d3cce3);
  @media ${device('max').tablet} {
    max-width: 90%;
    min-height: 300px;
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

export const HbdPointLeftArrow = styled(m.div)`
  z-index: 80;
  color: #5035ad;
  opacity: 1;
  align-self: center;
  font-size: 100px;

  @media ${device('max').tablet} {
    font-size: 50px;
    width: 10%;
  }
`;

export const HbdPointRightArrow = styled(m.div)`
  z-index: 80;
  color: #5035ad;
  opacity: 1;
  align-self: center;
  font-size: 100px;
  @media ${device('max').tablet} {
    font-size: 50px;
    width: 10%;
  }
`;
