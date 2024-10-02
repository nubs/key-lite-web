import { styled } from '@mui/system';
import { forwardRef } from 'react';

const BaseList = styled(
  'ul',
  {
    name: 'KeyLiteList',
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    slot: 'Root',
  },
)(({ theme, variant }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  listStyle: 'none',
  margin: 0,
  padding: 0,
  position: 'relative',
  ...(variant === 'horizontal' && {
    flexDirection: 'row',
    gap: theme.spacing(3),
  }),
}));

const List = forwardRef(({ component, ...other }, ref) => (
  <BaseList as={component} ref={ref} {...other} />
));

export default List;
