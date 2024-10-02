import { styled } from '@mui/system';
import { forwardRef } from 'react';

const BaseGoldBorderBox = styled(
  'div',
  {
    name: 'KeyLiteGoldBorderBox',
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    slot: 'Root',
  },
)(({ theme }) => ({
  borderColor: theme.palette.gold[900],
  borderStyle: 'solid',
  borderWidth: 'thin',
}));

const GoldBorderBox = forwardRef(({ component, ...other }, ref) => (
  <BaseGoldBorderBox as={component} ref={ref} {...other} />
));

export default GoldBorderBox;
