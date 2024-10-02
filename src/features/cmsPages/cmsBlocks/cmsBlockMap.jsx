import { lazy } from 'react';

const cmsBlockMap = {
  'Collapsible Details': lazy(() => import('./blocks/CollapsibleDetails')),
  'Container': lazy(() => import('./blocks/ContainerBlock')),
  'Flex Wrap': lazy(() => import('./blocks/FlexWrapBlock')),
  'Global Header': lazy(() => import('./blocks/GlobalHeader')),
  'Markdown Section': lazy(() => import('./blocks/MarkdownSection')),
  'Service Details Hero': lazy(() => import('./blocks/ServiceDetailsHero')),
  'Testimonial': lazy(() => import('./blocks/Testimonial')),
};

export default cmsBlockMap;
