import { styled } from '@mui/system';
import Handlebars from 'handlebars';

import Button from '/src/components/Button';
import Divider from '/src/components/Divider';
import GoldBorderBox from '/src/components/GoldBorderBox';
import GoldLogoMesh from '/src/components/GoldLogoMesh';
import SectionTitle from '/src/components/SectionTitle';
import Typography from '/src/components/Typography';
import ServiceDetailsHeroDetails from './ServiceDetailsHeroDetails';
import ServiceDetailsHeroImage from './ServiceDetailsHeroImage';

const BaseServiceDetailsHero = styled(
  'div',
  {
    name: 'KeyLiteServiceDetailsHero',
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
  marginBottom: theme.spacing(8),
  position: 'relative',
}));

const ServiceDetailsHero = ({ cmsBlock, cmsBlocks, cmsMedia, data }) => {
  const { cmsBlockFieldValues } = cmsBlock;

  const serviceDetailsHeroImageId = cmsBlockFieldValues['Service Details Hero Image'].value;
  const serviceDetailsHeroImageUrl = cmsMedia[serviceDetailsHeroImageId]?.cmsMediaUrl;
  const serviceDetailsHeroTaglineTemplate = Handlebars.compile(cmsBlockFieldValues['Service Details Hero Tagline']?.value);
  const serviceDetailsHeroTitleTemplate = Handlebars.compile(cmsBlockFieldValues['Service Details Hero Title']?.value);

  return (
    <BaseServiceDetailsHero>
      <ServiceDetailsHeroImage src={serviceDetailsHeroImageUrl} />
      <ServiceDetailsHeroDetails>
        <SectionTitle component="h1" sx={{ marginBottom: 3 }}>
          {serviceDetailsHeroTitleTemplate(data)}
        </SectionTitle>
        <Typography component="h2" variant="h1">
          {serviceDetailsHeroTaglineTemplate(data)}
        </Typography>
        <Divider sx={{ borderColor: 'rgba(248, 248, 248, 0.24)', my: 6 }} />
        <Button>View Pricing</Button>
      </ServiceDetailsHeroDetails>
      <GoldBorderBox
        sx={{ position: 'absolute', bottom: 40, left: 40, right: 40, top: 12 }}
      />
      <GoldLogoMesh />
    </BaseServiceDetailsHero>
  );
};

export default ServiceDetailsHero;
