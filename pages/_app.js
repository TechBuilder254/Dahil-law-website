import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../styles/globals.css";
import "../styles/styles.css";
import "../styles/about.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
