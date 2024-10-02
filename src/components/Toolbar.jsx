import { styled } from '@mui/system';
import { forwardRef } from 'react';

const BaseToolbar = styled(
  'div',
  {
    name: 'KeyLiteToolbar',
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    slot: 'Root',
  },
)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  position: 'relative',
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
}));

const Toolbar = forwardRef(({ component, ...other }, ref) => (
  <BaseToolbar as={component} ref={ref} {...other} />
));

export default Toolbar;
