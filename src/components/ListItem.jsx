import { styled } from '@mui/system';
import { forwardRef } from 'react';

const BaseListItem = styled(
  'li',
  {
    name: 'KeyLiteAppBar',
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    slot: 'Root',
  },
)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'flex-start',
  position: 'relative',
}));

const ListItem = forwardRef((props, ref) => (
  <BaseListItem ref={ref} {...props} />
));

export default ListItem;
