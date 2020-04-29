import React, { Component } from "react";
import axios from "axios";
import RecipientsIntroduction from "../components/recipientsIntroduction";
import Map from "../components/map";
import ReactGA from "react-ga";
const _ = require("lodash");

class Recipients extends Component {
  static async getInitialProps({ asPath, query, pathname }) {
    ReactGA.initialize("UA-118699617-2");
    ReactGA.pageview(asPath);

    const { data } = await axios.post(
      `${process.env.SERVER_URL}/api/institution/institutions`,
      {
        page: query.p ? query.p : 1,
        state: query.s,
        county: query.c
      }
    );

    return {
      institutions: data.institutions,
      lat: data.lat,
      lng: data.lng,
      institutionsList: data.institutionsList,
      directory: data.directory,
      state: query.s,
      county: query.c,
      page: query.p ? query.p : 1,
      map: query.t == "map" ? true : false,
      zoom: data.zoom,
      asPath
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
        <RecipientsIntroduction />
        <Map
          institutions={this.props.institutions}
          institutionsList={this.props.institutionsList}
          directory={this.props.directory}
          lat={this.props.lat}
          lng={this.props.lng}
          state={this.props.state}
          county={this.props.county}
          page={this.props.page}
          map={this.props.map}
          zoom={this.props.zoom}
          asPath={this.props.asPath}
        />
      </div>
    );
  }
}

export default Recipients;
