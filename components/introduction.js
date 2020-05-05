import React, { Component } from "react";
import { InboxOutlined } from "@ant-design/icons";

class Introduction extends Component {
  renderDonors = () => {
    return this.props.donorsRanked.map((donor, index) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <div style={{ fontSize: 12, color: "white" }}>{`${index + 1})`}</div>
          <div
            style={{
              fontSize: 12,
              color: "white"
            }}
          >
            {donor.name} (${donor.donated})
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div style={{ marginTop: 10, marginBottom: 10 }}>
          <div
            style={{
              fontFamily: "system-ui",
              fontSize: 16,
              color: "black",
              textAlign: "center"
            }}
          >
            Supply Crate facilitates Personal Protection Equipment (PPE)
            donations between donors and organization in need. If you work in
            the healthcare industry and are in need of PPE, or if you or your
            business are in a position to donate PPE, we’ll match you up.
            Together, we can make a difference and help end this global
            pandemic—one crate at a time.
          </div>
        </div>

        <div
          style={{
            width: "100vw",
            backgroundColor: "#1e5875"
          }}
        >
          <div
            style={{
              marginTop: 10,
              marginBottom: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <div style={{ width: "90%" }}>
              <div
                style={{
                  fontFamily: "system-ui",
                  fontSize: 20,
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >
                Our Numbers
              </div>
              <div
                style={{
                  height: 2,
                  backgroundColor: "white",
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
                <div style={{ fontSize: 12, color: "white" }}>
                  {this.props.institutions}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "white"
                  }}
                >
                  Institutions
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
                <div style={{ fontSize: 12, color: "white" }}>
                  {this.props.donors}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "white"
                  }}
                >
                  Donors
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
                <div style={{ fontSize: 12, color: "white" }}>
                  {this.props.donations}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "white"
                  }}
                >
                  Donations
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
                <div style={{ fontSize: 12, color: "white" }}>
                  {this.props.supplies}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "white"
                  }}
                >
                  Supplies Donated
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
                <div style={{ fontSize: 12, color: "white" }}>
                  ${this.props.value}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "white"
                  }}
                >
                  Value of Donations
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            backgroundColor: "#1e5875",
            marginTop: 10
          }}
        >
          <div
            style={{
              marginTop: 10,
              marginBottom: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <div style={{ width: "90%" }}>
              <div
                style={{
                  fontFamily: "system-ui",
                  fontSize: 20,
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >
                Top Donors
              </div>
              <div
                style={{
                  height: 2,
                  backgroundColor: "white",
                  borderRadius: 2,
                  marginBottom: 5
                }}
              />
              {this.renderDonors()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
