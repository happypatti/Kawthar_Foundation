import Head from 'next/head';

export default function GoogleAds() {

return (
  <>
    <Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-G3EPEGCDJK"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-G3EPEGCDJK');
          `,
        }}
      />
    </Head>
  </>
);
}