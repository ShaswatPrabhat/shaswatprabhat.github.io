import { HbdHeader, StyledHbdAnchor } from '../app/App.styles';
import { LINKS } from '../../utils/constants';

const animationProps = {
  initial: { scale: 0.7, opacity:0.7 },
  animate: { scale: 1, opacity:1 },
  transition: { type: 'spring', duration: 2 },
};

export const HbdHeaderComponent = () => (
  <HbdHeader>
    <StyledHbdAnchor to={LINKS.HBD_PNOKI} {...animationProps}>
      Happy Birthday Pnoki!!
    </StyledHbdAnchor>
  </HbdHeader>
);
