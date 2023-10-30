import "../styles/globals.css";
// redux imports
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";
// redux-persist imports


function MyApp({ Component, pageProps }) {

  return (
    // <Provider store={store}>
      //  <Head>

      //  </Head>
      <Component {...pageProps} />
  //  </Provider>
  );
}

export default MyApp;

