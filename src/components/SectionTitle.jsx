import { styled } from '@mui/system';
import { forwardRef } from 'react';

const BaseSectionTitle = styled(
  'h5',
  {
    name: 'KeyLiteSectionTitle',
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    slot: 'Root',
  },
)(({ theme }) => ({
  margin: 0,
  ...theme.typography.h5,
  '::after': {
    borderBottomColor: theme.palette.gold[900],
    borderBottomStyle: 'solid',
    borderBottomWidth: '3px',
    content: '""',
    display: 'block',
    width: '2.5rem',
  },
}));

const SectionTitle = forwardRef(({ component, ...other }, ref) => (
  <BaseSectionTitle as={component} ref={ref} {...other} />
));

export default SectionTitle;
