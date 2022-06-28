import { QueryClient, QueryClientProvider } from 'react-query';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';

import { Routes } from './routes';
import { AuthProvider } from './store/Auth';

import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={new QueryClient()}>
        <AuthProvider>
          <SnackbarProvider maxSnack={3}>
            <Routes />
          </SnackbarProvider>
        </AuthProvider>
      </QueryClientProvider>

      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
