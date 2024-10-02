import { useQuery } from '@tanstack/react-query';

import getServiceBySlugName from './graphql/getServiceBySlugName';
import serviceQueryKeys from './serviceQueryKeys';

const getServiceBySlugNameQuery = (serviceSlugName) => ({
  queryFn: async ({ queryKey }) => getServiceBySlugName(queryKey[2]),
  queryKey: serviceQueryKeys.detail(serviceSlugName),
});

const useServiceBySlugName = (serviceSlugName) => (
  useQuery({
    ...getServiceBySlugNameQuery(serviceSlugName),
    enabled: Boolean(serviceSlugName),
  })
);

export default useServiceBySlugName;
export {
  getServiceBySlugNameQuery,
};
