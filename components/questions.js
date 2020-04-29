import { Collapse } from "antd";
const { Panel } = Collapse;

import React, { Component } from "react";

class Questions extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: 50,
          paddingRight: 50,
          paddingTop: 125,
          paddingBottom: 125
        }}
      >
        <Collapse defaultActiveKey={["1"]} style={{ width: "90vw" }}>
          <Panel
            header="What medical supplies can I donate?"
            key="1"
            style={{
              fontSize: 16
            }}
          >
            <p style={{ fontSize: 16 }}>
              As of now, the site supports the donation of N95 masks, surgical
              masks, procedure masks, gloves, protective clothing, eye shields,
              and sanitizer.
            </p>
          </Panel>
          <Panel
            header="How can I know which hospitals are in most dire need of supplies?"
            key="2"
            style={{
              fontSize: 16
            }}
          >
            <p style={{ fontSize: 16 }}>
              Soon enough, Supply Crate will have a coronavirus concentration
              overlay on the recipients map to show users which hospitals are
              most affected by the virus.
            </p>
          </Panel>
          <Panel
            header="How do I check the status of my donation?"
            key="3"
            style={{ fontSize: 16 }}
          >
            <p style={{ fontSize: 16 }}>
              Type in your Donation ID (found on QR code label) into the tracker
              on the recipients tab.
            </p>
          </Panel>
          <Panel
            header="How does Supply Crate track the status of a donation?"
            key="4"
            style={{ fontSize: 16 }}
          >
            <p style={{ fontSize: 16 }}>
              Supply Crate uses QR code tracking to figure out the status of a
              donation.
            </p>
          </Panel>
          <Panel
            header="Who created this website?"
            key="5"
            style={{ fontSize: 16 }}
          >
            <p style={{ fontSize: 16 }}>
              Jackie Ni, a senior at Sage Hill High School.
            </p>
          </Panel>
        </Collapse>
      </div>
    );
  }
}

export default Questions;
