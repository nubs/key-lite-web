import { styled } from '@mui/system';
import { forwardRef } from 'react';

const BasePaper = styled(
  'div',
  {
    name: 'KeyLitePaper',
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    slot: 'Root',
  },
)(({ elevation, theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[elevation],
  color: theme.palette.text.primary,
}));

const Paper = forwardRef(({ component, ...other }, ref) => (
  <BasePaper as={component} ref={ref} {...other} />
));

export default Paper;
