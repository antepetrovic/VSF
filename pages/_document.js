import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="hr">
        <Head>
          <link rel="icon" type="image/png" href={'/favicon.png'} />
          <link rel="preload" as="image" href="/images/img3.jpg" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
