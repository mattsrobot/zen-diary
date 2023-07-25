import { Html, Head, Main, NextScript } from "next/document";
import Document, { DocumentContext } from "next/document";
import { cx } from "@/lib/utils";
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body
          className={cx(
            "bg-material-light text-gray-800",
            "dark:bg-material-dark dark:text-gray-50"
          )}
        >
          <Main />
          <NextScript />
          <Script async src="https://helpdesk.zenshop.app/bundle.js?helpdeskId=kHyvy8MMAXxqFDfdED85AgEds-PYvGZZozh062MeyFO5VR0H5A==" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
