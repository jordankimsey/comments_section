import { BoxProps } from '@mui/system';

declare module '@mui/material/styles' {
  interface Theme {
    customColors: Colors;
  }
}

interface Colors {
  moderateBlue: string;
  softRed: string;
  lightGrayishBlue: string;
  paleRed: string;
  darkBlue: string;
  grayishBlue: string;
  lightGray: string;
  veryLightGray: string;
  white: string;
}
