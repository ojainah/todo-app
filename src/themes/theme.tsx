import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: grey[900],
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: grey[500],
      dark: '#ba000d',
      contrastText: '#000',
    },
    text: {
      primary: grey[900]
    }
  },
  typography: {
    fontFamily: 'Mona Sans, Roboto',
    h4: {
      fontWeight: 600,
    }
  },
  shadows: Array(25).fill('none').map((_, index) => (
    index === 1 ? '0px 1px 3px rgba(0, 0, 0, 0.2)' : 'none'
  )), 
  // components: {
  //   MuiDrawer: {
  //     styleOverrides: {
  //       root: {
  //         color: purple[500],
  //         backgroundColor:"red"
  //       }
  //     }
  //   }
  // }
});

export default theme;
