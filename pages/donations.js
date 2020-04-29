import React, { Component } from "react";
import List from "../components/list";
import axios from "axios";
import ReactGA from "react-ga";
import DonationsIntroduction from "../components/donationsIntroduction";

class Donations extends Component {
  static async getInitialProps({ query, asPath }) {
    const { data } = await axios.get(
      `${process.env.SERVER_URL}/api/institution/donationsList`
    );

    ReactGA.initialize("UA-118699617-2");
    ReactGA.pageview(asPath);

    let page = query.p ? query.p : 1;

    return {
      donations: data.donations,
      donationsList: data.donations.slice((page - 1) * 9, (page - 1) * 9 + 9),
      page
    };
  }

  render() {
    return (
      <div>
        <DonationsIntroduction />
        <div>
          <List
            donations={this.props.donations}
            donationList={this.props.donationsList}
            page={this.props.page}
          />
        </div>
      </div>
    );
  }
}

export default Donations;
