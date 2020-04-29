import React, { Component } from "react";
import { MedicineBoxOutlined } from "@ant-design/icons";

class Features extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: 10,
          marginBottom: 10
        }}
      >
        <div style={{ width: "90vw" }}>
          <div
            style={{
              fontSize: 20,
              color: "#1e5875",
              fontWeight: "bold",
              textAlign: "center"
            }}
          >
            COVID-19 Statistics (USA)
          </div>
          <div
            style={{
              height: 2,
              backgroundColor: "#1e5875",
              borderRadius: 2,
              marginBottom: 5
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <div style={{ fontSize: 12, color: "#1e5875" }}>
              {this.props.USA.cases}
            </div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: 12,
                color: "#1e5875"
              }}
            >
              Cases
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <div style={{ fontSize: 12, color: "#1e5875" }}>
              {this.props.USA.deaths}
            </div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: 12,
                color: "#1e5875"
              }}
            >
              Deaths
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <div style={{ fontSize: 12, color: "#1e5875" }}>
              {this.props.USA.recovered}
            </div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: 12,
                color: "#1e5875"
              }}
            >
              Recovered
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
