import { styled } from '@mui/system';
import { forwardRef } from 'react';

const BaseDivider = styled(
  'hr',
  {
    name: 'KeyLiteDivider',
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    slot: 'Root',
  },
)(({ theme }) => ({
  borderColor: theme.palette.common.black,
  borderStyle: 'solid',
  borderBottomWidth: 'thin',
  width: '100%',
}));

const Divider = forwardRef(({ component, ...other }, ref) => (
  <BaseDivider as={component} ref={ref} {...other} />
));

export default Divider;
