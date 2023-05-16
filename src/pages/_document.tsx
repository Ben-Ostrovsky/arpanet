import { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline, Navbar } from "@nextui-org/react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>{CssBaseline.flush()}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
