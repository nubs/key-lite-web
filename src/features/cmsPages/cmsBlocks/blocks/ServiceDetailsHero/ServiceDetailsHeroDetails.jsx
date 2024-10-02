import { styled } from '@mui/system';
import { forwardRef } from 'react';

const BaseServiceDetailsHeroDetails = styled(
  'div',
  {
    name: 'KeyLiteServiceDetailsHeroDetails',
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    slot: 'Root',
  },
)(({ theme }) => ({
  flexGrow: 1,
  paddingBottom: theme.spacing(15),
  paddingLeft: theme.spacing(6),
  paddingRight: theme.spacing(9),
  paddingTop: theme.spacing(15),
}));

const ServiceDetailsHeroDetails = forwardRef(({ component, ...other }, ref) => (
  <BaseServiceDetailsHeroDetails as={component} ref={ref} {...other } />
));

export default ServiceDetailsHeroDetails;
