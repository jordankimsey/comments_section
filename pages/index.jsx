import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Button } from '@mui/material';

export default function Home() {
  return (
    <>
      <Head>
        <meta charset='UTF-8' />
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
      <div className={styles.attribution}>
        <Button variant='contained' sx={{ backgroundColor: 'red' }}>
          Hello
        </Button>
        Challenge by {''}
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noreferrer'
        >
          Frontend Mentor {''}
        </a>
        Coded by {''}
        <a href='#'>Jordan Kimsey</a>
      </div>
    </>
  );
}