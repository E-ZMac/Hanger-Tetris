import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#3F51B5',
    },
    error: {
      main: red.A400,
    },
  },
});

export { theme };
