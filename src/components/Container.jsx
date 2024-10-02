import { styled } from '@mui/system';
import { forwardRef } from 'react';

const BaseContainer = styled(
  'div',
  {
    name: 'KeyLiteContainer',
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    slot: 'Root',
  },
)(({ theme }) => ({
  color: theme.palette.text.secondary, // FIXME: better place to put this?
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: 1040, // FIXME: don't hardcode this - pull from template
}));

const Container = forwardRef(({ component, ...other }, ref) => (
  <BaseContainer {...other} />
));

export default Container;
