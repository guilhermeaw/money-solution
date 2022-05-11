import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1b8989',
    },
    secondary: {
      main: '#f7f7f7',
    },
    error: {
      main: '#DE3838',
    },
    success: {
      main: '#51B853',
    },
    background: {
      default: '#F5F8FA',
    },
  },
  typography: {
    fontFamily: 'Barlow, sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: '3rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
