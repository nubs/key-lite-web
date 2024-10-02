import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/system';

import Typography from '/src/components/Typography';

const TestimonialContainer = styled(
  'div',
  {
    name: 'KeyLiteTestimonialContainer',
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    slot: 'Root',
  },
)(({ theme }) => ({
  textAlign: 'center',
}));

const RatingBar = styled(
  'div',
  {
    name: 'KeyLiteRatingBar',
    overridesResolver: (props, styles) => [
      styles.root,
      styles[props.variant],
    ],
    slot: 'Root',
  },
)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const Testimonial = ({ cmsBlock, ...other }) => {
  const { cmsBlockFieldValues } = cmsBlock;

  // FIXME: make star icons count variable
  // FIXME: more styling of testimonial
  return (
    <TestimonialContainer>
      <RatingBar><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></RatingBar>
      <Typography sx={{ fontStyle: 'italic' }} variant="h4">
        &ldquo;{cmsBlockFieldValues['Testimonial Quote']?.value}&rdquo;
      </Typography>
      <Typography sx={{ color: 'gold.900' }} variant="h4">
        {cmsBlockFieldValues['Testimonial Author']?.value}
      </Typography>
      <Typography sx={{ fontSize: '1rem' }} variant="h4">
        {cmsBlockFieldValues['Testimonial Author Subtitle']?.value}
      </Typography>
    </TestimonialContainer>
  );
};

export default Testimonial;
