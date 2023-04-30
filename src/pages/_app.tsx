import type { AppProps } from 'next/app';
import "@/scss/index.scss";
import { Raleway, Fira_Code } from 'next/font/google';
import { useRouter } from 'next/router';
import { initGA, logPageView } from '../../lib/analytics';
import { useEffect } from 'react';

const raleway = Raleway({ subsets: ["latin"] });
const firaCode = Fira_Code({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();


  useEffect(() => {
    const TrackingID: string = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!;
    console.log(TrackingID);
    initGA(TrackingID);
  }, [])
  
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      logPageView(url);
    }

    router.events.on('routeChangeComplete', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
        --raleway: ${raleway.style.fontFamily};
        --fira-code: ${firaCode.style.fontFamily};
        }
      `}</style>



      <Component {...pageProps} />
    </>
  );
}
