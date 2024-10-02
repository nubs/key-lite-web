import { gql } from 'graphql-request';

import keyLiteApiClient from '/src/data/keyLiteApiClient';
import getServiceBySlugNameGql from './getServiceBySlugName.graphql?raw';

const formatCmsPage = (cmsPage) => ({
  cmsBlocks: cmsPage.cmsBlocks.edges.reduce((res, { node }) => {
    const cmsBlockFieldValues = JSON.parse(node.cmsBlockFieldValues)?.cmsBlockFieldValues || [];

    return {
      ...res,
      [node.id]: {
        ...node,
        cmsBlockFieldValues: cmsBlockFieldValues.reduce(
          (res, fieldValue) => ({
            ...res,
            [fieldValue.cmsFieldName]: fieldValue,
          }),
          {},
        ),
      },
    };
  }, {}),
  cmsMedia: cmsPage.cmsMedia.edges.reduce((res, { node }) => ({
    ...res,
    [node.id]: node,
  }), {}),
});

const getServiceBySlugName = async (serviceSlugName) => {
  const { getServiceBySlugName: service } = await keyLiteApiClient.request(
    getServiceBySlugNameGql,
    {
      serviceSlugName,
      cmsBlocksAfter: undefined,
      cmsBlocksCount: 100,
      cmsBlocksSortBy: 'cmsBlockIndex',
      cmsBlocksSortDirection: 'asc',
      cmsMediaAfter: undefined,
      cmsMediaCount: 100,
      cmsMediaSortBy: 'cmsMediaName',
      cmsMediaSortDirection: 'asc',
    },
  );

  return {
    serviceConfiguration: {
      cmsPage: formatCmsPage(service.serviceConfiguration.cmsPage),
      serviceConfigurationDescriptionMarkdown: service.serviceConfiguration.serviceConfigurationDescriptionMarkdown,
      serviceConfigurationTagline: service.serviceConfiguration.serviceConfigurationTagline,
      serviceConfigurationTitleName: service.serviceConfiguration.serviceConfigurationTitleName,
    },
    serviceName: service.serviceName,
  };
};

export default getServiceBySlugName;
