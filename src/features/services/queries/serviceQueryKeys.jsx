const serviceQueryKeys = {
  all: ['services'],
  details: () => [...serviceQueryKeys.all, 'detail'],
  detail: (serviceSlugName) => [...serviceQueryKeys.details(), serviceSlugName],
};

export default serviceQueryKeys;
