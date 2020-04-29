import React, { Component } from "react";
import RequestIntroduction from "../components/requestIntroduction";

class Request extends Component {
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
        <RequestIntroduction />
      </div>
    );
  }
}

export default Request;
