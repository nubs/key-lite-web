import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import { forwardRef } from 'react';

const BaseButton = styled(
  ButtonUnstyled,
  {
    name: 'KeyLiteButton',
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    slot: 'Root',
  },
)(({ theme, variant }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.secondary.main,
  border: 0,
  color: theme.palette.secondary.contrastText,
  cursor: 'pointer',
  paddingBottom: theme.spacing(1),
  paddingLeft: theme.spacing(6),
  paddingRight: theme.spacing(6),
  paddingTop: theme.spacing(1),
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
  ...(variant === 'text' && {
    backgroundColor: 'inherit',
    color: 'inherit',
    fontWeight: 400,
    padding: 0,
    '&:hover': {},
  }),
}));

const Button = forwardRef(({ component, ...other }, ref) => (
  <BaseButton as={component} ref={ref} {...other} />
));

export default Button;
