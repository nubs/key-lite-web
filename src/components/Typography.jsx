import { styled } from '@mui/system';
import { forwardRef } from 'react';

const BaseTypography = styled(
  'p',
  {
    name: 'KeyLiteTypography',
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    slot: 'Root',
  },
)(({ theme, variant }) => ({
  margin: 0,
  ...(theme.typography[variant] || theme.typography.body1),
}));

const Typography = forwardRef(({ component, ...other }, ref) => (
  <BaseTypography as={component} ref={ref} {...other} />
));

export default Typography;
