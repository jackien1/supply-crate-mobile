import React, { Component } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Card } from "antd";
import axios from "axios";

class Verify extends Component {
  static async getInitialProps({ query }) {
    const { data } = await axios.post(
      "https://supply-crate-server.herokuapp.com/api/institution/track",
      {
        id: query.q
      }
    );

    return { donation: data.donation };
  }

  state = {
    loading: false
  };

  handleVerify = async () => {
    this.setState({
      loading: true
    });

    await axios.post(
      "https://supply-crate-server.herokuapp.com/api/institution/verify",
      {
        id: this.props.donation._id
      }
    );

    this.setState({
      loading: false
    });

    location.reload();
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

  calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < this.props.donation.items.length; i++) {
      total +=
        this.props.donation.items[i].quantity *
        this.props.donation.items[i].price;
    }
    return total;
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Card
          style={{ marginTop: 60, marginBottom: 60, width: "90%", padding: 10 }}
        >
          <div style={{ alignItems: "center" }}>
            <div
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#1e5875",
                marginBottom: 10
              }}
            >
              Donation Details
            </div>
          </div>

          <div
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <div style={{ fontWeight: "bold", fontSize: 16 }}>Institution:</div>
            <div style={{ fontSize: 16, marginLeft: 10 }}>
              {this.props.donation.institution}
            </div>
          </div>
          <div
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <div style={{ fontWeight: "bold", fontSize: 16 }}>Name:</div>
            <div style={{ fontSize: 16, marginLeft: 10 }}>
              {this.props.donation.name}
            </div>
          </div>
          <div
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <div style={{ fontWeight: "bold", fontSize: 16 }}>Items:</div>
            <div style={{ fontSize: 16, marginLeft: 10 }}>
              {this.renderItems()}
            </div>
          </div>
          <div
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <div style={{ fontWeight: "bold", fontSize: 16 }}>Total:</div>
            <div style={{ fontSize: 16, marginLeft: 10 }}>
              ${this.calculateTotal()}
            </div>
          </div>
          <div
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <div style={{ fontWeight: "bold", fontSize: 16 }}>Date:</div>
            <div style={{ fontSize: 16, marginLeft: 10 }}>
              {this.props.donation.date}
            </div>
          </div>

          {this.props.donation.verified ? (
            <div
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              <div style={{ fontWeight: "bold", fontSize: 16 }}>
                Date Verified:
              </div>
              <div style={{ fontSize: 16, marginLeft: 10 }}>
                {this.props.donation.dateVerified}
              </div>
            </div>
          ) : null}

          {this.props.donation.verified ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 10
              }}
            >
              <div style={{ fontSize: 18, color: "#1e5875" }}>
                Thanks for verifying this donation.
              </div>
            </div>
          ) : (
            <div>
              <div style={{ alignItems: "center", marginTop: 10 }}>
                <div style={{ fontSize: 16, color: "#1e5875" }}>
                  Are you the institution? If so, verify that this donation has
                  arrived.
                </div>
              </div>
              <div style={{ alignItems: "center", marginTop: 10 }}>
                {this.state.loading ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: 10
                    }}
                  >
                    <ClipLoader size={16} color="green" />
                  </div>
                ) : (
                  <div
                    style={{
                      fontFamily: "system-ui",
                      color: "white",
                      backgroundColor: "green",
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
                    onClick={this.handleVerify}
                  >
                    Verify
                  </div>
                )}
              </div>
            </div>
          )}
        </Card>
      </div>
    );
  }
}

export default Verify;
