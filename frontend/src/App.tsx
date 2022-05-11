import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes } from './routes';

import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
