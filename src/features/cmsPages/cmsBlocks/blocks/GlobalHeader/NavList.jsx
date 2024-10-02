import { styled } from '@mui/system';

import List from '/src/components/List';
import ListItem from '/src/components/ListItem';
import NavDropdown from './NavDropdown';
import NavLink from './NavLink';

const BaseNavList = styled(
  List,
  {
    name: 'KeyLiteNavList',
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    slot: 'Root',
  },
)(({ theme }) => ({
}));

const NavList = (props) => (
  <BaseNavList {...props}>
    <ListItem>
      <NavLink to="https://itinerary.key.co/listings">Explore Homes</NavLink>
    </ListItem>
    <ListItem>
      <NavDropdown openerProps={{ label: 'Partner with KEY' }}>
        <List sx={{ textAlign: 'right' }}>
          <ListItem>
            <NavLink to="https://corp.key.co/home-listings">List Your Home</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="https://partners.key.co/">Offer KEY Experiences</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="https://corp.key.co/vendors">Become a Vendor</NavLink>
          </ListItem>
        </List>
      </NavDropdown>
    </ListItem>
    <ListItem>
      <NavLink to="https://itinerary.key.co/itineraries">My Trips</NavLink>
    </ListItem>
    <ListItem>
      <NavLink to="https://login.key.co/">Sign In</NavLink>
    </ListItem>
  </BaseNavList>
);

export default NavList;
