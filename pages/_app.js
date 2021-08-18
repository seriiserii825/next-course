import "../styles/globals.css";
import React from "react";
import Header from "../layouts/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="main">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
