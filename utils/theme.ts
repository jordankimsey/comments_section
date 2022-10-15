import { createTheme, ThemeOptions } from '@mui/material/styles';

// - Mobile: 375px
// - Desktop: 1440px
// - Family: [Rubik](https://fonts.google.com/specimen/Rubik)
// Weights: 400, 500, 700
export const theme = createTheme( {
  typography: {
    body1: { fontSize: 16 },
  },
    palette: {
    primary: {
      // dark blue
      light: 'hsl(212, 24%, 26%)',
       // moderateBlue
      main: 'hsl(238, 40%, 52%)',
       // softRed
      dark:'hsl(358, 79%, 66%)',
      // lightGrayishBlue
      contrastText: 'hsl(239, 57%, 85%)',
      // paleRed
      "100": 'hsl(357, 100%, 86%)'
    },
    secondary: {
       // veryLightGray
      light: 'hsl(228, 33%, 97%)',
      // lightGray
      main: 'hsl(223, 19%, 93%)',
       // grayishBlue
      dark: 'hsl(211, 10%, 45%)',
      // white
      contrastText: 'hsl(0, 0%, 100%)',
    }
  }
});
