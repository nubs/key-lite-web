import { styled } from '@mui/system';
import { forwardRef } from 'react';

const BaseSvgIcon = styled(
  'svg',
  {
    name: 'KeyLiteSvgIcon',
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    slot: 'Root',
  },
)(({ theme }) => ({
  display: 'inline-block',
  fill: 'currentColor',
  flexShrink: 0,
  height: '1em',
  userSelect: 'none',
  width: '1em',
}));

const SvgIcon = forwardRef(({ component, ...other }, ref) => (
  <BaseSvgIcon
    as={component}
    focusable="false"
    ref={ref}
    role="img"
    { ...other}
  />
));

export default SvgIcon;
