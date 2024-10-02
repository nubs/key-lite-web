import { styled } from '@mui/system';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import Button from '/src/components/Button';

const BaseNavLink = styled(
  Button,
  {
    name: 'KeyLiteNavLink',
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    slot: 'Root',
  },
)(({ theme }) => ({
  width: '100%',
}));

const NavLink = forwardRef((props, ref) => (
  <BaseNavLink
    component={Link}
    ref={ref}
    variant="text"
    {...props}
  />
));

export default NavLink;
