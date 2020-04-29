import React, { Component } from "react";
import { Input, Card } from "antd";
import axios from "axios";
import Router from "next/router";

const { Search } = Input;

class Query extends Component {
  state = {
    id: ""
  };

  handleTrack = async () => {
    Router.push(`/track?q=${this.state.id}`);
  };

  calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < this.props.donation.items.length; i++) {
      total +=
        this.props.donation.items[i].quantity *
        this.props.donation.items[i].price;
    }
    return total;
  };

  renderItems = () => {
    return this.props.donation.items.map((item, index) => {
      if (index != this.props.donation.items.length - 1) {
        return `${item.item} (${item.quantity} @ $${item.price} each), `;
      } else {
        return `${item.item} (${item.quantity} @ $${item.price} each)`;
      }
    });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          paddingTop: 250,
          paddingBottom: 250,
          flexDirection: "column"
        }}
      >
        {this.props.donation.institution ? (
          <div style={{ marginTop: 10 }}>
            <Card>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "#1e5875"
                    }}
                  >
                    Institution:
                  </div>
                  <div
                    style={{
                      fontSize: 16,
                      color: "#1e5875",
                      marginLeft: 10
                    }}
                  >
                    {this.props.donation.institution}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "#1e5875"
                    }}
                  >
                    Name:
                  </div>
                  <div
                    style={{
                      fontSize: 16,
                      color: "#1e5875",
                      marginLeft: 10
                    }}
                  >
                    {this.props.donation.name}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "#1e5875"
                    }}
                  >
                    Items:
                  </div>
                  <div
                    style={{
                      fontSize: 16,
                      color: "#1e5875",
                      marginLeft: 10
                    }}
                  >
                    {this.renderItems()}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "#1e5875"
                    }}
                  >
                    Total:
                  </div>
                  <div
                    style={{
                      fontSize: 16,
                      color: "#1e5875",
                      marginLeft: 10
                    }}
                  >
                    ${this.calculateTotal()}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "#1e5875"
                    }}
                  >
                    Date:
                  </div>
                  <div
                    style={{
                      fontSize: 16,
                      color: "#1e5875",
                      marginLeft: 10
                    }}
                  >
                    {this.props.donation.date}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "#1e5875"
                    }}
                  >
                    Arrived:
                  </div>
                  <div
                    style={{
                      fontSize: 16,
                      color: "#1e5875",
                      marginLeft: 10
                    }}
                  >
                    {this.props.donation.verified ? "True" : "False"}
                  </div>
                </div>

                {this.props.donation.verified ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <div
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#1e5875"
                      }}
                    >
                      Date Arrived:
                    </div>
                    <div
                      style={{
                        fontSize: 16,
                        color: "#1e5875",
                        marginLeft: 10
                      }}
                    >
                      {this.props.donation.dateVerified}
                    </div>
                  </div>
                ) : null}
              </div>
            </Card>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Input
              placeholder="Donation ID"
              style={{
                fontSize: 16,
                width: 200
              }}
              value={this.state.id}
              onChange={event => {
                this.setState({
                  id: event.target.value
                });
              }}
            />
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
                marginLeft: 10,
                cursor: "pointer"
              }}
              onClick={this.handleTrack}
            >
              Track
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Query;
