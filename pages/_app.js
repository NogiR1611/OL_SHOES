import 'tailwindcss/tailwind.css';
import './../assets/styles/global.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Head from 'next/head';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
    return (
      <>
        <Head>
          <title>NextJS + ReactJS</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }

export default MyApp;