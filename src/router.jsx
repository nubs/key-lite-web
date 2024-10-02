import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from './features/errors/ErrorPage';
import ServicePage, { servicePageLoader } from './features/services/ServicePage';

const router = (queryClient) => (
  createBrowserRouter([
    {
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'services/:serviceSlugName',
          Component: ServicePage,
          loader: servicePageLoader(queryClient),
        },
      ],
    },
  ])
);

export default router;
