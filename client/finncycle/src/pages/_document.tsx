import React from 'react';
import Document, {
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async getInitialProps(ctx: DocumentContext): Promise<any> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(
          // eslint-disable-next-line react/jsx-props-no-spreading
          <App {...props} />,
        ),
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
  }
}