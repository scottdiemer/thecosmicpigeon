import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
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
      <Header>
        <Navbar />
      </Header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
