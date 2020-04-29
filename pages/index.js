import React, { Component } from "react";
import Introduction from "../components/introduction";
import Statistics from "../components/statistics";
import axios from "axios";
import ReactGA from "react-ga";

class Index extends Component {
  static async getInitialProps({ asPath }) {
    ReactGA.initialize("UA-118699617-2");
    ReactGA.pageview(asPath);

    const { data } = await axios.get(
      "https://corona.lmao.ninja/v2/countries/USA"
    );

    const res = await axios.get(
      `${process.env.SERVER_URL}/api/institution/donationsSummary`
    );

    return {
      USA: data,
      donations: res.data.donations,
      institutions: res.data.institutions,
      supplies: res.data.supplies,
      value: res.data.value,
      donors: res.data.donors,
      donorsRanked: res.data.donorsRanked
    };
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Introduction
          donations={this.props.donations}
          institutions={this.props.institutions}
          supplies={this.props.supplies}
          value={this.props.value}
          donors={this.props.donors}
          donorsRanked={this.props.donorsRanked}
        />
        <Statistics USA={this.props.USA} />
      </div>
    );
  }
}

export default Index;
