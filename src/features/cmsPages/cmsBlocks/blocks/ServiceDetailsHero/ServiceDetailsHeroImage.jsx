import { styled } from '@mui/system';
import Image from 'mui-image';
import { forwardRef } from 'react';

const ServiceDetailsHeroImageContainer = styled(
  'div',
  {
    name: 'KeyLiteServiceDetailsHeroImageContainer',
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    slot: 'Root',
  },
)(({ theme }) => ({
  flexShrink: 0,
  width: '50%',
  '::after': {
    background: 'linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.75) 100%), linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.75) 100%)',
    content: '""',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '50%',
  },
}));

const ServiceDetailsHeroImage = forwardRef(({ component, ...other }, ref) => (
  <ServiceDetailsHeroImageContainer>
    <Image 
      as={component}
      distance={50}
      duration={1000}
      ref={ref}
      shift="right"
      shiftDuration={500}
      width="100%"
      {...other}
    />
  </ServiceDetailsHeroImageContainer>
));

export default ServiceDetailsHeroImage;
