import React, { Component } from "react";
import { Card, Pagination } from "antd";
import Router from "next/router";

class List extends Component {
  renderItems = items => {
    return items.map((item, index) => {
      if (index != items.length - 1) {
        return `${item.item} (${item.quantity} @ $${item.price} each), `;
      } else {
        return `${item.item} (${item.quantity} @ $${item.price} each)`;
      }
    });
  };

  calculateTotal = items => {
    let total = 0;

    for (let i = 0; i < items.length; i++) {
      total += items[i].quantity * items[i].price;
    }

    return total;
  };

  renderDonations = () => {
    return this.props.donationList.map((donation, index) => {
      return (
        <Card style={{ width: "90vw", marginTop: index == 0 ? null : "1vw" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ fontSize: 12 }}>Donation ID:</div>
              <div
                style={{
                  fontSize: 12,
                  marginLeft: 10,
                  color: "#1e5875"
                }}
              >
                {donation._id}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    color: "#1e5875"
                  }}
                >
                  {donation.name}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end"
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    color: "#1e5875"
                  }}
                >
                  {donation.institution}
                </div>
                <div style={{ fontSize: 12 }}>
                  Packaged: {donation.date},{" "}
                  {donation.verified ? `Arrived: ${donation.dateVerified}` : ""}
                </div>
                <div style={{ fontSize: 12 }}>
                  Items: {this.renderItems(donation.items)}
                </div>
                <div style={{ fontSize: 12 }}>
                  Total Value: ${this.calculateTotal(donation.items)}
                </div>
              </div>
            </div>
          </div>
        </Card>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          marginTop: "2vw",
          marginBottom: "2vw"
        }}
      >
        <div>
          {this.renderDonations()}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1vw"
            }}
          >
            <Pagination
              current={this.props.page}
              defaultCurrent={this.props.page}
              total={this.props.donations.length}
              pageSize={9}
              style={{ fontSize: 16 }}
              onChange={value => {
                Router.push(`/donations?p=${value}`);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default List;
