import { styled } from '@mui/system';
import { Children, forwardRef } from 'react';

const BaseFlexWrap = styled(
  'div',
  {
    name: 'KeyLiteFlexWrap',
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    slot: 'Root',
  },
)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
}));

const BaseFlexWrapItem = styled(
  'div',
  {
    name: 'KeyLiteFlexWrap',
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    slot: 'Item',
  },
)(({ theme }) => ({
  flexBasis: `calc(50% - ${theme.spacing(2)} / 2)`,
  flexGrow: 1,
}));

const FlexWrap = forwardRef(({ children, component, ...other }, ref) => (
  <BaseFlexWrap {...other}>
    {Children.map(children, (child) => (
      <BaseFlexWrapItem>{child}</BaseFlexWrapItem>
    ))}
  </BaseFlexWrap>
));

export default FlexWrap;
