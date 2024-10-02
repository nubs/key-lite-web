import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/system';

import theme from './theme';

const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
);

export default ThemeProvider;
