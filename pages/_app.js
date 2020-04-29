import "antd/dist/antd.css";

import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { initStore } from "../store/store";
import Header from "../components/header";
import Footer from "../components/footer";
import React, { Component } from "react";
import Head from "next/head";

class MyApp extends Component {
  static async getInitialProps({ Component, ctx, store }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <Head>
          <title>Supply Crate</title>
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    );
  }
}

export default withRedux(initStore)(MyApp);
