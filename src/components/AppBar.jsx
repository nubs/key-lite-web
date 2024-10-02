import { styled } from '@mui/system';
import { forwardRef } from 'react';

import Paper from './Paper';

const BaseAppBar = styled(
  Paper,
  {
    name: 'KeyLiteAppBar',
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    slot: 'Root',
  },
)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  display: 'flex',
  flexDirection: 'column',
  left: 'auto',
  paddingBottom: theme.spacing(2),
  paddingTop: theme.spacing(2),
  position: 'sticky',
  right: 0,
  top: 0,
  width: '100%',
  zIndex: theme.zIndex.appBar,
  '@media print': {
    position: 'absolute',
  },
}));

const AppBar = forwardRef((props, ref) => (
  <BaseAppBar component="header" elevation={9} ref={ref} {...props} />
));

export default AppBar;
