import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ title = "The Cosmic Pigeon", children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="description" content="An eclectic mix of handicrafts" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
}
