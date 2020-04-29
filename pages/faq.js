import React, { Component } from "react";
import axios from "axios";
import ReactGA from "react-ga";
import FAQIntroduction from "../components/FAQintroduction";
import Questions from "../components/questions";

class FAQ extends Component {
  static async getInitialProps({ asPath }) {
    ReactGA.initialize("UA-118699617-2");
    ReactGA.pageview(asPath);

    return {};
  }

  render() {
    return (
      <div>
        <FAQIntroduction />
        <Questions />
      </div>
    );
  }
}

export default FAQ;
