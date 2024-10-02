import CssBaseline from '@mui/material/CssBaseline';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import queryClient from './data/queryClient';
import router from './router';
import ThemeProvider from './theme/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <CssBaseline />
      <Suspense fallback={<p>Loading...</p>}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router(queryClient)} />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
);
