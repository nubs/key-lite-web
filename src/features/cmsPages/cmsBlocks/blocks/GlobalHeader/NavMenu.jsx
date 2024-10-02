import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import { useState } from 'react';

import NavLink from './NavLink';

const NavMenuContainer = styled(
  'div',
  {
    name: 'KeyLiteNavMenuContainer',
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    slot: 'Root',
  },
)(({ theme }) => ({
}));

const NavMenuPopper = styled(
  'div',
  {
    name: 'KeyLiteNavMenuPopper',
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    shouldForwardProp: (prop) => (
      !['color', 'isOpen', 'sx', 'variant'].includes(prop)
    ),
    slot: 'Root',
  },
)(({ isOpen, theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  display: isOpen ? 'block' : 'none',
  height: '100%',
  left: 0,
  position: 'fixed',
  top: theme.spacing(8),
  width: '100%',
  zIndex: theme.zIndex.appBar,
}));

const NavMenu = ({ containerProps = {}, openerProps = {}, ...other }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = (event) => {
    if (openerProps.onClick) {
      openerProps.onClick(event, { isOpen: !isOpen });
    }

    setAnchorEl(isOpen ? null : event.currentTarget);
  };

  return (
    <>
      <NavMenuContainer {...containerProps}>
        <NavLink
          aria-describedby="nav-menu-popper"
          component="button"
          {...openerProps}
          onClick={handleClick}
        >
          <MenuIcon fontSize="small" sx={{ verticalAlign: 'bottom' }} />
        </NavLink>
      </NavMenuContainer>
      <NavMenuPopper id="nav-menu-popper" isOpen={isOpen} {...other} />
    </>
  );
};

export default NavMenu;
