import { CssBaseline, ThemeProvider, Typography } from '@mui/material';

import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1">Money Solutions</Typography>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
