import { styled } from '@mui/system';
import { forwardRef } from 'react';

import KeyLogoMinimal from '/src/assets/key-logo-minimal.svg';

const BaseGoldLogoMesh = styled(
  'div',
  {
    name: 'KeyLiteGoldLogoMesh',
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    slot: 'Root',
  },
)(({ repeatCount, theme }) => ({
  backgroundColor: theme.palette.gold[900],
  bottom: `${-repeatCount / 2}rem`,
  maskImage: `url("${KeyLogoMinimal}")`,
  maskRepeat: 'repeat',
  maskSize: '1rem',
  height: `${repeatCount}rem`,
  opacity: '50%',
  position: 'absolute',
  width: '100%',
}));

const GoldLogoMesh = forwardRef(({ component, repeatCount = 4, ...other }, ref) => (
  <BaseGoldLogoMesh
    as={component}
    ref={ref}
    repeatCount={repeatCount}
    {...other}
  />
));

export default GoldLogoMesh;
