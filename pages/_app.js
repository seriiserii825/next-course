import '../styles/globals.css'
import { Fragment } from "react";
import Header from "../layouts/Header";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Header/>
      <div className="main">
        <Component {...pageProps} />
      </div>
    </Fragment>
  )
}

export default MyApp
