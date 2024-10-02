import { useParams } from 'react-router';

import FlexWrap from '/src/components/FlexWrap';
import PureCmsPage from '../cmsPages/pureCmsPage';
import {
  getServiceBySlugNameQuery,
  useServiceBySlugName,
} from './queries/serviceQueries';

const servicePageLoader = (queryClient) => (
  async ({ params }) => ({
    service: await queryClient.ensureQueryData(
      getServiceBySlugNameQuery(params.serviceSlugName),
    ),
  })
);

const ServicePage = () => {
  const { serviceSlugName } = useParams();
  const { data: service } = useServiceBySlugName(serviceSlugName);

  return (
    <PureCmsPage
      cmsPage={service.serviceConfiguration.cmsPage}
      data={{ service }}
    />
  );
};

export default ServicePage;
export {
  servicePageLoader,
};
