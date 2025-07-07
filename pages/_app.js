import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../styles/globals.css";
import "../styles/styles.css";
import "../styles/about.css";
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <FloatingWhatsAppButton />
    </>
  );
}

export default MyApp;
