import Script from 'next/script'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script id="google-tag-manager">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5LZKZVDL');
          `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script id="trust-pulse">
          {`
          !function(w,d,s,n,r,a){(w._tpq=w._tpq||[]).push(['init',n]),(r=d.createElement(s)).type='text/javascript',r.src='https://a.trstplse.com/app/js/api.min.js',r.async=!0,(a=d.getElementsByTagName(s)[0]).parentNode.insertBefore(r,a)}(window,document,'script',10418);
          `}
        </Script>
        <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5LZKZVDL" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
        />
      </body>
    </Html>
  )
}
