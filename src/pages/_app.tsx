import type { AppProps } from 'next/app';
import "@/scss/index.scss";
import { Raleway, Fira_Code } from 'next/font/google';
import Script from 'next/script';

const raleway = Raleway({ subsets: ["latin"] });
const firaCode = Fira_Code({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!}`} />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!}', {
  page_path: window.location.pathname,
  });
`}
      </Script>
      <style jsx global>{`:root{
      --raleway: ${raleway.style.fontFamily};
      --fira-code: ${firaCode.style.fontFamily};
    }`}</style>
      <Component {...pageProps} />
    </>
  );
}
