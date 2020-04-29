import React, { Component } from "react";
import { Button } from "antd";
import Router from "next/router";

class FAQIntroduction extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "#1e5875",
          marginTop: 10,
          marginBottom: 10,
          padding: 10
        }}
      >
        <div
          style={{
            fontFamily: "system-ui",
            fontSize: 16,
            color: "white",
            fontWeight: "bold"
          }}
        >
          FAQ
        </div>
      </div>
    );
  }
}

export default FAQIntroduction;
