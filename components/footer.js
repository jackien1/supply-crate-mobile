import React, { Component } from "react";
import {
  InboxOutlined,
  FacebookOutlined,
  TwitterOutlined
} from "@ant-design/icons";

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          backgroundColor: "#1e5875",
          alignItems: "center",
          padding: 10,
          flexDirection: "column"
        }}
      >
        <div
          style={{
            justifyContent: "center",
            marginBottom: 5,
            color: "white",
            fontSize: 16
          }}
        >
          Any questions?{" "}
          <a
            style={{ fontWeight: "bold", cursor: "pointer", color: "inherit" }}
            href="mailto:contact@supplycrate.org"
          >
            contact@supplycrate.org
          </a>
        </div>
        <div style={{ justifyContent: "center", marginBottom: 5 }}>
          <FacebookOutlined
            style={{ fontSize: 16, color: "white" }}
            onClick={() => {
              window.open(
                "https://www.facebook.com/supplycrateorganization",
                "_blank"
              );
            }}
          />
          <TwitterOutlined
            style={{ fontSize: 16, color: "white", marginLeft: 10 }}
            onClick={() => {
              window.open("https://twitter.com/supplycrateorg", "_blank");
            }}
          />
        </div>
        <div
          style={{
            justifyContent: "center",
            marginBottom: 5,
            display: "flex",
            flexDirection: "row"
          }}
        >
          <div
            style={{ color: "white", fontSize: 16, cursor: "pointer" }}
            onClick={() => {
              window.open(
                "https://supply-crate.s3-us-west-1.amazonaws.com/Privacy-Policy.pdf",
                "_blank"
              );
            }}
          >
            Privacy Policy
          </div>
          <div
            style={{
              color: "white",
              fontSize: 16,
              marginLeft: 10,
              cursor: "pointer"
            }}
            onClick={() => {
              window.open(
                "https://supply-crate.s3-us-west-1.amazonaws.com/Terms+of+Use.pdf",
                "_blank"
              );
            }}
          >
            Terms of Use
          </div>
        </div>
        <div
          style={{
            fontFamily: "system-ui",
            fontSize: 16,
            color: "white"
          }}
        >
          © supplycrate.org 2020 | All rights reserved.
        </div>
      </div>
    );
  }
}

export default Footer;
