import React, { Component } from "react";
import axios from "axios";
import ReactGA from "react-ga";
import TrackIntroduction from "../components/trackIntroduction";
import Query from "../components/query";

class Track extends Component {
  static async getInitialProps({ asPath, query }) {
    ReactGA.initialize("UA-118699617-2");
    ReactGA.pageview(asPath);

    let donation = {};

    if (query.q) {
      const { data } = await axios.post(
        `${process.env.SERVER_URL}/api/institution/track`,
        {
          id: query.q
        }
      );

      donation = data.donation;
    }

    return { donation };
  }

  render() {
    return (
      <div>
        <TrackIntroduction />
        <Query donation={this.props.donation} />
      </div>
    );
  }
}

export default Track;
