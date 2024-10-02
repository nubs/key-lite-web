import ClickAwayListener from '@mui/base/ClickAwayListener';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';
import { useState } from 'react';

import NavLink from './NavLink';

// FIXME: target=_blank
// FIXME: dev/stage/prod links
// FIXME: recognize internal links and use react-router-dom to navigate quickly
const NavDropdownPopper = styled(
  'div',
  {
    name: 'KeyLiteNavDropdownPopper',
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    slot: 'Root',
  },
)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  top: theme.spacing(3),
  right: theme.spacing(-1),
  padding: theme.spacing(4),
  position: 'relative',
  whiteSpace: 'nowrap',
  zIndex: theme.zIndex.appBar,
}));

const NavDropdown = ({ openerProps, ...other }) => {
  const { label: openerLabel, ...otherOpener } = openerProps;

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const ExpandIcon = isOpen ? ExpandLessIcon : ExpandMoreIcon;

  const handleClick = (event) => {
    if (otherOpener.onClick) {
      otherOpener.onClick(event, { isOpen: !isOpen });
    }

    setAnchorEl(isOpen ? null : event.currentTarget);
  };

  const handleClickAway = (event) => {
    if (isOpen) {
      handleClick(event);
    }
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <NavLink
          aria-describedby="nav-dropdown-popper"
          component="button"
          {...otherOpener}
          onClick={handleClick}
        >
          {openerLabel}
          <ExpandIcon fontSize="small" sx={{ verticalAlign: 'bottom' }} />
        </NavLink>
        <PopperUnstyled
          anchorEl={anchorEl}
          disablePortal
          id="nav-dropdown-popper"
          open={isOpen}
          placement="bottom-end"
          sx={{ position: 'unset' }}
        >
          <NavDropdownPopper {...other} />
        </PopperUnstyled>
      </div>
    </ClickAwayListener>
  );
};

export default NavDropdown;
