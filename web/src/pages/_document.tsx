import Document, { Html, Head, Main, NextScript } from 'next/document';
import { extractCritical } from '@emotion/server';
import tw from 'twin.macro';

class MyDocument extends Document<any> {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const page = await ctx.renderPage();
    const styles = extractCritical(page.html);
    return { ...initialProps, ...page, ...styles };
  }

  render() {
    return (
      <Html lang='EN'>
        <Head>
          <style
            data-emotion-css={this.props.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
        </Head>
        <body tw='bg-grey-lighter dark:bg-grey-normal'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
