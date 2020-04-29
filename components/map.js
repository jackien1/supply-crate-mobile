import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { MedicineBoxFilled } from "@ant-design/icons";
import {
  Dropdown,
  Card,
  Modal,
  Select,
  Input,
  InputNumber,
  Pagination,
  Table
} from "antd";
const _ = require("lodash");
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
const { Option } = Select;
import Router from "next/router";

class Map extends Component {
  state = {
    visible: false,
    institution: {},
    name: "",
    email: "",
    phone: "",
    QR: "",
    items: [],
    item: "",
    quantity: 0,
    price: 0,
    loading: false
  };

  handleGenerate = async () => {
    this.setState({
      loading: true
    });

    const { data } = await axios.post(
      `${process.env.SERVER_URL}/api/institution/generate`,
      {
        institution: this.state.institution.name,
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        items: this.state.items
      }
    );

    this.setState({ QR: data.QR, loading: false });
  };

  handleDownload = async () => {
    const response = await fetch(this.state.QR);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `QR.png`);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  renderStates = () => {
    return _.map(this.props.directory, (index, state) => {
      return <Option value={state}>{state}</Option>;
    });
  };

  renderCounties = () => {
    if (this.props.state) {
      return _.map(
        this.props.directory[this.props.state].counties,
        (index, county) => {
          return <Option value={county}>{county}</Option>;
        }
      );
    }
  };

  renderItems = () => {
    return this.state.items.map((item, index) => {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div style={{ fontSize: 12 }}>{`${index + 1}) Price: ${
            item.item
          }`}</div>
          <div style={{ fontSize: 12, marginLeft: 10 }}>
            Quantity: {item.quantity}
          </div>
          <div style={{ fontSize: 12, marginLeft: 10 }}>
            Price: ${item.price}
          </div>
        </div>
      );
    });
  };

  renderQuantities = (items, fontSize) => {
    return _.map(items, (value, item) => {
      return <div style={{ fontSize }}> {`${item} (${value})`}</div>;
    });
  };

  calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < this.state.items.length; i++) {
      total += this.state.items[i].quantity * this.state.items[i].price;
    }
    return total;
  };

  renderInstitutionsList = () => {
    return this.props.institutionsList.map(institution => {
      const columns = [
        {
          title: () => <div style={{ fontSize: 12 }}> Item </div>,
          dataIndex: "item",
          key: "item",
          render: text => <div style={{ fontSize: 12 }}>{text}</div>
        },
        {
          title: () => <div style={{ fontSize: 12 }}> Requested </div>,
          dataIndex: "requested",
          key: "requested",
          render: text => <div style={{ fontSize: 12 }}>{text}</div>
        },
        {
          title: () => <div style={{ fontSize: 12 }}> Received </div>,
          dataIndex: "received",
          key: "received",
          render: text => <div style={{ fontSize: 12 }}>{text}</div>
        }
      ];

      let data = [
        {
          key: "1",
          item: "KN95 Masks",
          requested: institution["KN95 Masks"],
          received: institution.received["KN95 Masks"]
        },
        {
          key: "2",
          item: "N95 Masks",
          requested: institution["N95 Masks"],
          received: institution.received["N95 Masks"]
        },
        {
          key: "3",
          item: "Surgical Masks",
          requested: institution["Surgical Masks"],
          received: institution.received["Surgical Masks"]
        },
        {
          key: "4",
          item: "Procedure Masks",
          requested: institution["Procedure Masks"],
          received: institution.received["Procedure Masks"]
        },
        {
          key: "5",
          item: "Disposable Face Mask (Non Medical Use)",
          requested: institution["Disposable Face Mask (Non Medical Use)"],
          received:
            institution.received["Disposable Face Mask (Non Medical Use)"]
        },
        {
          key: "6",
          item: "Gloves",
          requested: institution["Gloves"],
          received: institution.received["Gloves"]
        },
        {
          key: "7",
          item: "Protective Clothing",
          requested: institution["Protective Clothing"],
          received: institution.received["Protective Clothing"]
        },
        {
          key: "8",
          item: "Eye Shields",
          requested: institution["Eye Shields"],
          received: institution.received["Eye Shields"]
        },
        {
          key: "9",
          item: "Sanitizer",
          requested: institution["Sanitizer"],
          received: institution.received["Sanitizer"]
        }
      ];

      return (
        <Card style={{ width: "90vw", marginBottom: 10 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Table
              title={() => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: "bold",
                      color: "#1e5875"
                    }}
                  >
                    {institution.name}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "black"
                    }}
                  >
                    {institution.address}
                  </div>
                </div>
              )}
              footer={() => (
                <div
                  onClick={() => {
                    this.setState({ visible: true, institution });
                  }}
                  style={{
                    fontSize: 12,
                    color: "#1e5875",
                    cursor: "pointer",
                    textAlign: "right"
                  }}
                >
                  Learn More
                </div>
              )}
              columns={columns}
              dataSource={data}
              pagination={false}
              size="small"
            />

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end"
              }}
            ></div>
          </div>
        </Card>
      );
    });
  };

  renderInstitutions = () => {
    return this.props.institutions.map((institution, index) => {
      const columns = [
        {
          title: () => <div style={{ fontSize: 12 }}> Item </div>,
          dataIndex: "item",
          key: "item",
          render: text => <div style={{ fontSize: 12 }}>{text}</div>
        },
        {
          title: () => <div style={{ fontSize: 12 }}> Requested </div>,
          dataIndex: "requested",
          key: "requested",
          render: text => <div style={{ fontSize: 12 }}>{text}</div>
        },
        {
          title: () => <div style={{ fontSize: 12 }}> Received </div>,
          dataIndex: "received",
          key: "received",
          render: text => <div style={{ fontSize: 12 }}>{text}</div>
        }
      ];

      let data = [
        {
          key: "1",
          item: "KN95 Masks",
          requested: institution["KN95 Masks"],
          received: institution.received["KN95 Masks"]
        },
        {
          key: "2",
          item: "N95 Masks",
          requested: institution["N95 Masks"],
          received: institution.received["N95 Masks"]
        },
        {
          key: "3",
          item: "Surgical Masks",
          requested: institution["Surgical Masks"],
          received: institution.received["Surgical Masks"]
        },
        {
          key: "4",
          item: "Procedure Masks",
          requested: institution["Procedure Masks"],
          received: institution.received["Procedure Masks"]
        },
        {
          key: "5",
          item: "Disposable Face Mask (Non Medical Use)",
          requested: institution["Disposable Face Mask (Non Medical Use)"],
          received:
            institution.received["Disposable Face Mask (Non Medical Use)"]
        },
        {
          key: "6",
          item: "Gloves",
          requested: institution["Gloves"],
          received: institution.received["Gloves"]
        },
        {
          key: "7",
          item: "Protective Clothing",
          requested: institution["Protective Clothing"],
          received: institution.received["Protective Clothing"]
        },
        {
          key: "8",
          item: "Eye Shields",
          requested: institution["Eye Shields"],
          received: institution.received["Eye Shields"]
        },
        {
          key: "9",
          item: "Sanitizer",
          requested: institution["Sanitizer"],
          received: institution.received["Sanitizer"]
        }
      ];

      return (
        <Dropdown
          key={index}
          overlay={
            <Card>
              <div
                style={{
                  padding: "1vw",
                  width: "80vw"
                }}
              >
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  size="small"
                  title={() => (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between"
                      }}
                    >
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: "bold",
                          color: "#1e5875"
                        }}
                      >
                        {institution.name}
                      </div>

                      <div
                        style={{
                          fontSize: 12,
                          color: "black"
                        }}
                      >
                        {institution.address}
                      </div>
                    </div>
                  )}
                  footer={() => (
                    <div
                      onClick={() => {
                        this.setState({ visible: true, institution });
                      }}
                      style={{
                        fontSize: 12,
                        color: "#1e5875",
                        cursor: "pointer",
                        textAlign: "right"
                      }}
                    >
                      Learn More
                    </div>
                  )}
                />
              </div>
            </Card>
          }
          lat={institution.lat}
          lng={institution.lng}
        >
          <MedicineBoxFilled style={{ fontSize: 12, color: "#1e5875" }} />
        </Dropdown>
      );
    });
  };

  renderTable = () => {
    let columns = [],
      data = [];

    if (_.size(this.state.institution) > 0) {
      columns = [
        {
          title: () => <div style={{ fontSize: 12 }}> Item </div>,
          dataIndex: "item",
          key: "item",
          render: text => <div style={{ fontSize: 12 }}>{text}</div>
        },
        {
          title: () => <div style={{ fontSize: 12 }}> Requested </div>,
          dataIndex: "requested",
          key: "requested",
          render: text => <div style={{ fontSize: 12 }}>{text}</div>
        },
        {
          title: () => <div style={{ fontSize: 12 }}> Received </div>,
          dataIndex: "received",
          key: "received",
          render: text => <div style={{ fontSize: 12 }}>{text}</div>
        }
      ];

      data = [
        {
          key: "1",
          item: "KN95 Masks",
          requested: this.state.institution["KN95 Masks"],
          received: this.state.institution.received["KN95 Masks"]
        },
        {
          key: "2",
          item: "N95 Masks",
          requested: this.state.institution["N95 Masks"],
          received: this.state.institution.received["N95 Masks"]
        },
        {
          key: "3",
          item: "Surgical Masks",
          requested: this.state.institution["Surgical Masks"],
          received: this.state.institution.received["Surgical Masks"]
        },
        {
          key: "4",
          item: "Procedure Masks",
          requested: this.state.institution["Procedure Masks"],
          received: this.state.institution.received["Procedure Masks"]
        },
        {
          key: "5",
          item: "Disposable Face Mask (Non Medical Use)",
          requested: this.state.institution[
            "Disposable Face Mask (Non Medical Use)"
          ],
          received: this.state.institution.received[
            "Disposable Face Mask (Non Medical Use)"
          ]
        },
        {
          key: "6",
          item: "Gloves",
          requested: this.state.institution["Gloves"],
          received: this.state.institution.received["Gloves"]
        },
        {
          key: "7",
          item: "Protective Clothing",
          requested: this.state.institution["Protective Clothing"],
          received: this.state.institution.received["Protective Clothing"]
        },
        {
          key: "8",
          item: "Eye Shields",
          requested: this.state.institution["Eye Shields"],
          received: this.state.institution.received["Eye Shields"]
        },
        {
          key: "9",
          item: "Sanitizer",
          requested: this.state.institution["Sanitizer"],
          received: this.state.institution.received["Sanitizer"]
        }
      ];
    }

    return (
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        size="small"
      />
    );
  };

  render() {
    return (
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 10
          }}
        >
          <div>
            <div style={{ fontSize: 16, textAlign: "center" }}>State</div>
            <Select
              style={{ width: 150, fontSize: 16 }}
              onChange={value => {
                Router.push(
                  `/recipients?s=${value}${!this.props.map ? "" : "&t=map "}`
                );
              }}
              value={this.props.state}
            >
              {this.renderStates()}
            </Select>
          </div>

          <div style={{ marginLeft: 10 }}>
            <div style={{ fontSize: 16, textAlign: "center" }}>County</div>
            <Select
              style={{ width: 150, fontSize: 16 }}
              value={this.props.county}
              onChange={value =>
                Router.push(
                  `/recipients?s=${this.props.state}&c=${value}${
                    !this.props.map ? "" : "&t=map"
                  }`
                )
              }
            >
              {this.renderCounties()}
            </Select>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 10
          }}
        >
          <div
            style={{ fontSize: 16, color: "#1e5875", cursor: "pointer" }}
            onClick={() => {
              if (this.props.map) Router.push("/recipients?t=map");
              else {
                Router.push("/recipients");
              }
            }}
          >
            Clear Filters
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 10
          }}
        >
          {this.props.map ? (
            <div
              style={{ fontSize: 16, color: "#1e5875", cursor: "pointer" }}
              onClick={() => {
                Router.push(`/recipients`);
              }}
            >
              List View
            </div>
          ) : (
            <div
              style={{ fontSize: 16, color: "#1e5875", cursor: "pointer" }}
              onClick={() => {
                Router.push(`/recipients?t=map`);
              }}
            >
              Map View
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center"
          }}
        >
          {!this.props.map ? (
            <div>
              {this.renderInstitutionsList()}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Pagination
                  current={this.props.page}
                  defaultCurrent={this.props.page}
                  pageSize={4}
                  total={this.props.institutions.length}
                  style={{ fontSize: 16 }}
                  onChange={value => {
                    if (this.props.county) {
                      Router.push(
                        `/recipients?s=${this.props.state}&c=${this.props.county}&p=${value}`
                      );
                    } else if (this.props.state) {
                      Router.push(
                        `/recipients?s=${this.props.state}&p=${value}`
                      );
                    } else {
                      Router.push(`/recipients?p=${value}`);
                    }
                  }}
                />
              </div>
            </div>
          ) : (
            <div style={{ width: "100vw", height: "60vw" }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: process.env.AUTH
                }}
                center={{
                  lat: Number(this.props.lat),
                  lng: Number(this.props.lng)
                }}
                zoom={this.props.zoom}
              >
                {this.renderInstitutions()}
              </GoogleMapReact>
            </div>
          )}

          <Modal
            title={this.state.institution.name}
            visible={this.state.visible}
            onCancel={() => {
              this.setState({
                visible: false,
                institution: {},
                name: "",
                email: "",
                phone: "",
                item: "",
                quantity: 0,
                price: 0,
                QR: "",
                items: []
              });
            }}
            footer={null}
            width={500}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <div style={{ fontSize: 12 }}>Address:</div>{" "}
                <div style={{ fontWeight: "bold", fontSize: 12 }}>
                  {this.state.institution.address}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <div style={{ fontSize: 12 }}>Contact:</div>{" "}
                <div style={{ fontWeight: "bold", fontSize: 12 }}>
                  {this.state.institution.contact}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <div style={{ fontSize: 12 }}>Contact's Email:</div>{" "}
                <div style={{ fontWeight: "bold", fontSize: 12 }}>
                  {this.state.institution.contactEmail}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <div style={{ fontSize: 12 }}>Contact's Telephone:</div>{" "}
                <div style={{ fontWeight: "bold", fontSize: 12 }}>
                  {this.state.institution.contactTelephone}
                </div>
              </div>

              {this.renderTable()}

              {this.state.QR.length == 0 ? (
                <div
                  style={{
                    display: "flex",
                    marginTop: 10,
                    flexDirection: "column"
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: "bold",
                      color: "#1e5875",
                      textAlign: "center"
                    }}
                  >
                    Generate QR Verification Code
                  </div>
                  <Input
                    placeholder="Name"
                    style={{
                      fontSize: 12,
                      marginTop: 5,
                      width: "100%"
                    }}
                    value={this.state.name}
                    onChange={event => {
                      this.setState({
                        name: event.target.value
                      });
                    }}
                  />
                  <Input
                    placeholder="Email Address"
                    style={{
                      fontSize: 12,
                      marginTop: 5,
                      width: "100%"
                    }}
                    value={this.state.email}
                    onChange={event => {
                      this.setState({
                        email: event.target.value
                      });
                    }}
                  />
                  <Input
                    placeholder="Phone Number"
                    style={{
                      fontSize: 12,
                      marginTop: 5,
                      width: "100%"
                    }}
                    value={this.state.phone}
                    onChange={event => {
                      this.setState({
                        phone: event.target.value
                      });
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 5
                    }}
                  >
                    <Select
                      style={{
                        fontSize: 12,
                        width: "100%"
                      }}
                      onChange={value => {
                        this.setState({
                          item: value
                        });
                      }}
                      value={this.state.item}
                    >
                      <Option value="KN95 Masks" style={{ fontSize: 12 }}>
                        KN95 Masks
                      </Option>
                      <Option value="N95 Masks" style={{ fontSize: 12 }}>
                        N95 Masks
                      </Option>
                      <Option value="Surgical Masks" style={{ fontSize: 12 }}>
                        Surgical Masks
                      </Option>
                      <Option value="Procedure Masks" style={{ fontSize: 12 }}>
                        Procedure Masks
                      </Option>
                      <Option
                        value="Disposable Face Mask (Non Medical Use)"
                        style={{ fontSize: 12 }}
                      >
                        Disposable Face Mask (Non Medical Use)
                      </Option>
                      <Option value="Gloves" style={{ fontSize: 12 }}>
                        Gloves
                      </Option>
                      <Option
                        value="Protective Clothing"
                        style={{ fontSize: 12 }}
                      >
                        Protective Clothing
                      </Option>
                      <Option value="Eye Shields" style={{ fontSize: 12 }}>
                        Eye Shields
                      </Option>
                      <Option value="Sanitizer" style={{ fontSize: 12 }}>
                        Sanitizer
                      </Option>
                    </Select>
                    <InputNumber
                      style={{
                        fontSize: 12,
                        width: "100%",
                        marginLeft: 5
                      }}
                      value={this.state.quantity}
                      onChange={value => {
                        this.setState({
                          quantity: value
                        });
                      }}
                    />
                    <InputNumber
                      defaultValue={0}
                      formatter={value =>
                        `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      }
                      parser={value => value.replace(/\$\s?|(,*)/g, "")}
                      style={{
                        fontSize: 12,
                        width: "100%",
                        marginLeft: 5
                      }}
                      onChange={value => {
                        this.setState({ price: value });
                      }}
                      value={this.state.price}
                    />
                  </div>

                  <div
                    style={{
                      fontFamily: "system-ui",
                      color: "white",
                      backgroundColor: "#1e5875",
                      fontSize: 12,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 5,
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 10,
                      paddingRight: 10,
                      cursor: "pointer",
                      marginTop: 5
                    }}
                    onClick={() => {
                      if (
                        this.state.quantity != 0 &&
                        this.state.price != 0 &&
                        this.state.item.length > 0
                      ) {
                        for (let i = 0; i < this.state.items.length; i++) {
                          if (this.state.items[i].item == this.state.item) {
                            this.state.items[i].quantity += this.state.quantity;

                            this.setState({
                              item: "",
                              quantity: 0,
                              price: 0
                            });
                            return;
                          }
                        }

                        const newItems = this.state.items;

                        newItems.push({
                          item: this.state.item,
                          quantity: this.state.quantity,
                          price: this.state.price
                        });
                        this.setState({
                          items: newItems,
                          item: "",
                          quantity: 0,
                          price: 0
                        });
                      }
                    }}
                  >
                    Add
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column"
                    }}
                  >
                    <div
                      style={{
                        fontSize: 12,
                        marginTop: 5,
                        fontWeight: "bold"
                      }}
                    >
                      Items:
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      {this.renderItems()}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        marginTop: 5
                      }}
                    >
                      Total: ${this.calculateTotal()}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 5
                    }}
                  >
                    <div
                      style={{
                        fontSize: 12,
                        cursor: "pointer",
                        textAlign: "center"
                      }}
                    >
                      By generating a QR label, you are agreeing to
                      supplycrate.org's Privacy Policy and Terms of Use.
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: 5
                    }}
                  >
                    {this.state.loading ? (
                      <ClipLoader size={12} />
                    ) : (
                      <div
                        style={{
                          fontSize: 12,
                          color: "#1e5875",
                          cursor: "pointer"
                        }}
                        onClick={this.handleGenerate}
                      >
                        Generate
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    marginTop: 5,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <img
                    src={this.state.QR}
                    style={{ width: 300, marginTop: 10, marginBottom: 10 }}
                  />
                  <div
                    style={{
                      fontSize: 12,
                      color: "#1e5875",
                      cursor: "pointer"
                    }}
                    onClick={this.handleDownload}
                  >
                    Download
                  </div>
                </div>
              )}
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Map;
