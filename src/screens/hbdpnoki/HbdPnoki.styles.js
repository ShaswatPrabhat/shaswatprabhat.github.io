import styled from 'styled-components';
import { m } from 'framer-motion';

export const GradientBackgroundContainer = styled(m.div)`
  background: #0f0c29;
  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
`;

export const BodyLine1 = styled(m.h4)`
  color: #faf5e3;
`;
export const BodyLine2 = styled(m.h3)`
  color: #faf1d2;
`;
export const BodyLine3 = styled(m.h2)`
  color: #f7ebc1;
`;
export const BackgroundWrapper = styled(m.div)`
  align-self: center;
  flex: 0.1;
  width: 50%;
  height: 50%;
`;