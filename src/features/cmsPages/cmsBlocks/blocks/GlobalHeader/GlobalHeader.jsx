import AppBar from '/src/components/AppBar';
import KeyLogo from '/src/components/KeyLogo';
import Toolbar from '/src/components/Toolbar';
import NavList from './NavList';
import NavMenu from './NavMenu';

// FIXME: Mobile styling and transitions
const GlobalHeader = () => (
  <AppBar>
    <Toolbar component="nav">
      <KeyLogo sx={{ flexGrow: 1 }} />
      <NavList sx={{ display: { xs: 'none', md: 'inherit' } }} variant="horizontal" />
      <NavMenu containerProps={{ sx: { display: { xs: null, md: 'none' } }}}>
        <NavList />
      </NavMenu>
    </Toolbar>
  </AppBar>
);

export default GlobalHeader;
