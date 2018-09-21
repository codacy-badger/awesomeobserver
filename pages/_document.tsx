import Document, { Head, Main, NextScript } from 'next/document';
import { injectGlobal, ServerStyleSheet } from 'styled-components';
import { Style } from '../styles';

// tslint:disable-next-line:no-unused-expression
injectGlobal`${Style}`;

export default class AwesomeDocument extends Document {
  public static async getInitialProps({ renderPage }) {
    const sheet = await new ServerStyleSheet();
    const page = await renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = await sheet.getStyleElement();
    return { ...page, styleTags };
  }

  public render() {
    const { styleTags } = this.props;
    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <title>¯\_(ツ)_/¯</title>

          <link
            href="https://fonts.googleapis.com/css?family=Exo+2:100,200,400"
            rel="stylesheet"
          />

          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
