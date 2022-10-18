import Document, { Html, Head, Main, NextScript } from 'next/document';
import { extractCritical } from '@emotion/server';
import { seoFetcher } from '@/hooks';
import tw from 'twin.macro';

class MyDocument extends Document<any> {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const page = await ctx.renderPage();
    const styles = extractCritical(page.html);
    const seoData = await seoFetcher();
    return { ...initialProps, ...page, ...styles, seoData };
  }

  render() {
    const { seoData } = this.props;
    return (
      <Html lang='EN'>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <link
            rel='preload'
            href='/fonts/Geomanist-Light.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/Geomanist-Regular.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/Geomanist-Medium.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='description' content={seoData.description} />

          <meta property='og:url' content={seoData.url} />
          <meta property='og:type' content='website' />
          <meta property='og:title' content={seoData.title} />
          <meta property='og:description' content={seoData.description} />
          <meta property='og:image' content={seoData.image.asset.url} />

          <meta name='twitter:card' content='summary_large_image' />
          <meta property='twitter:domain' content={seoData.domain} />
          <meta property='twitter:url' content={seoData.url} />
          <meta name='twitter:title' content={seoData.title} />
          <meta name='twitter:description' content={seoData.description} />
          <meta name='twitter:image' content={seoData.image.asset.url} />

          <title>
            Alvin Sovereign | Maker, Breaker and Tester of all things UI
          </title>

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
