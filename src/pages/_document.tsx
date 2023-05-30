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
          content="Aprecie a beleza dos seus olhos com serviços e produtos de alta qualidade de uma profissional de sobrancelhas"
        />

        <meta property="og:url" content="/logostudio.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Studio Sardeli" />
        <meta
          property="og:description"
          content="Aprecie a beleza dos seus olhos com serviços e produtos de alta qualidade de uma profissional de sobrancelhas"
        />
        <meta property="og:image" content="/logostudio.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="eyebrow-5j3sd4jgj-pedro-marques-santos.vercel.app"
        />
        <meta
          property="twitter:url"
          content="https://eyebrow-5j3sd4jgj-pedro-marques-santos.vercel.app/"
        />
        <meta name="twitter:title" content="Studio Sardeli" />
        <meta
          name="twitter:description"
          content="Aprecie a beleza dos seus olhos com serviços e produtos de alta qualidade de uma profissional de sobrancelhas"
        />
        <meta name="twitter:image" content="/logostudio.jpg" />
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
