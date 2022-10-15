import '../styles/globals.css'
import { ThemeProvider } from '@mui/material'
import { theme } from '../utils/theme'
import CssBaseline from '@mui/material/CssBaseline';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <CssBaseline />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp
