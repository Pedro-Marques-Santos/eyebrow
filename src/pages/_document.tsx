import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

function MyDocument(props: any) {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Oswald&family=Poppins:ital,wght@0,400;0,500;0,600;1,600&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />

        <meta
          name="description"
          content="Aprecie a beleza dos seus olhos com serviços e produtos de alta qualidade que uma Design de sobrancelhas pode fornecer a você"
        />

        <meta property="og:url" content="https://eyebrow.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Studio Sardeli" />
        <meta
          property="og:description"
          content="Aprecie a beleza dos seus olhos com serviços e produtos de alta qualidade que uma Design de sobrancelhas pode fornecer a você"
        />
        <meta
          property="og:image"
          content="https://img.freepik.com/free-photo/young-woman-getting-beauty-treatment-her-eyebrows_23-2148910543.jpg?w=740&t=st=1685469501~exp=1685470101~hmac=6f763189dee14b9473257787390507753df4c7daf9affe99f19f8568ffaad29e"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="eyebrow.vercel.app" />
        <meta property="twitter:url" content="https://eyebrow.vercel.app/" />
        <meta name="twitter:title" content="Studio Sardeli" />
        <meta
          name="twitter:description"
          content="Aprecie a beleza dos seus olhos com serviços e produtos de alta qualidade que uma Design de sobrancelhas pode fornecer a você"
        />
        <meta
          name="twitter:image"
          content="https://img.freepik.com/free-photo/young-woman-getting-beauty-treatment-her-eyebrows_23-2148910543.jpg?w=740&t=st=1685469501~exp=1685470101~hmac=6f763189dee14b9473257787390507753df4c7daf9affe99f19f8568ffaad29e"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
};

export default MyDocument;
