import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove loading spinner if exists
    const loader = document.getElementById('__next-loader');
    if (loader) {
      loader.style.display = 'none';
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
