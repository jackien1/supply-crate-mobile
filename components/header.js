import React, { Component } from "react";
import { Button } from "antd";
import Router from "next/router";

class Header extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          backgroundColor: "white"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            marginBottom: 10,
            cursor: "pointer"
          }}
          onClick={() => Router.push("/")}
        >
          <img
            src="https://supply-crate.s3-us-west-1.amazonaws.com/IMG_6276.PNG"
            style={{ width: 100 }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <div
            style={{
              fontFamily: "system-ui",
              color: "white",
              backgroundColor: "#1e5875",
              fontSize: 16,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              paddingTop: 5,
              paddingBottom: 5,
              paddingLeft: 10,
              paddingRight: 10,
              cursor: "pointer"
            }}
            onClick={() => Router.push("/")}
          >
            Home
          </div>

          <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
            <div
              style={{
                fontFamily: "system-ui",
                color: "white",
                backgroundColor: "#1e5875",
                fontSize: 16,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 10,
                paddingRight: 10,
                cursor: "pointer"
              }}
              onClick={() => Router.push("/request")}
            >
              Request a Donation
            </div>

            <div
              style={{
                fontFamily: "system-ui",
                color: "white",
                backgroundColor: "#1e5875",
                fontSize: 16,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 10,
                paddingRight: 10,
                cursor: "pointer",
                marginLeft: 10
              }}
              onClick={() => Router.push("/recipients")}
            >
              Make a Donation
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
            <div
              style={{
                fontFamily: "system-ui",
                color: "white",
                backgroundColor: "#1e5875",
                fontSize: 16,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 10,
                paddingRight: 10,
                cursor: "pointer"
              }}
              onClick={() => Router.push("/track")}
            >
              Track
            </div>

            <div
              style={{
                fontFamily: "system-ui",
                color: "white",
                backgroundColor: "#1e5875",
                fontSize: 16,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 10,
                paddingRight: 10,
                cursor: "pointer",
                marginLeft: 10
              }}
              onClick={() => Router.push("/donations")}
            >
              Donations
            </div>

            <div
              style={{
                fontFamily: "system-ui",
                color: "white",
                backgroundColor: "#1e5875",
                fontSize: 16,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 10,
                paddingRight: 10,
                cursor: "pointer",
                marginLeft: 10
              }}
              onClick={() => Router.push("/press")}
            >
              Press
            </div>

            <div
              style={{
                fontFamily: "system-ui",
                color: "white",
                backgroundColor: "#1e5875",
                fontSize: 16,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 10,
                paddingRight: 10,
                cursor: "pointer",
                marginLeft: 10
              }}
              onClick={() => Router.push("/faq")}
            >
              FAQ
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
