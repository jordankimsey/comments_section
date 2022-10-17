import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Footer from '../components/Footer';

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='./images/favicon-32x32.png'
        />
        <link rel='icon' href='/favicon.ico' />
        <title>Frontend Mentor | Interactive comments section</title>
      </Head>
      <div  className={styles.container}>
        
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </>
  );
}
