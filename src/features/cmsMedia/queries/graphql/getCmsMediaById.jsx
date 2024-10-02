import { gql } from 'graphql-request';

import keyLiteApiClient from '/src/data/keyLiteApiClient';
import getCmsMediaByIdGql from './getCmsMediaById.graphql?raw';

const getCmsMediaById = async (cmsMediaId) => {
  const { getCmsMediaById: cmsMedia } = await keyLiteApiClient.request(
    getCmsMediaById,
    { cmsMediaId },
  );

  return cmsMedia;
};

export default getCmsMediaById;
