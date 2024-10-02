import { Box } from '@mui/system';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 5,
        color: 'text.primary',
        padding: 2,
      }}
    >
      <h1>Oops! An error has occurred.</h1>
      <p>{error.statusText || error.message}</p>
    </Box>
  );
};

export default ErrorPage;
