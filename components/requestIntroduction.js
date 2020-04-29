import React, { Component } from "react";

class RequestIntroduction extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div
          style={{
            marginTop: 10,
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              fontFamily: "system-ui",
              fontSize: 16,
              color: "black",
              textAlign: "center",
              marginLeft: 5,
              marginRight: 5
            }}
          >
            Supply Crate is accepting requests for donations to make at a
            variety of establishments including:
          </div>

          <ul>
            <li style={{ fontSize: 16, color: "black" }}>Nursing Homes</li>
            <li style={{ fontSize: 16, color: "black" }}>Hospice Homes</li>
            <li style={{ fontSize: 16, color: "black" }}>Hospitals</li>
            <li style={{ fontSize: 16, color: "black" }}>
              Urgent Care Facilities
            </li>
            <li style={{ fontSize: 16, color: "black" }}>
              Senior Living Communities
            </li>
            <li style={{ fontSize: 16, color: "black" }}>
              Palliative Care Facilities & so much more!
            </li>
          </ul>
        </div>

        <div
          style={{
            width: "100%",
            backgroundColor: "#1e5875",
            display: "flex",
            justifyContent: "center",
            marginBottom: 10
          }}
        >
          <div
            style={{
              marginTop: 10,
              marginBottom: 10,
              width: "90%"
            }}
          >
            <div
              style={{
                fontFamily: "system-ui",
                fontSize: 20,
                color: "white",
                fontWeight: "bold",
                textAlign: "center"
              }}
            >
              Receiving a donation is easy.
            </div>
            <div
              style={{
                height: 2,
                backgroundColor: "white",
                borderRadius: 2,
                marginBottom: 5
              }}
            />
            <ol style={{ fontSize: 16, color: "white" }}>
              <li>
                {" "}
                <div>
                  Fill out the online request{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "white",
                      color: "#1e5875",
                      paddingLeft: 5,
                      paddingRight: 5,
                      cursor: "pointer"
                    }}
                    onClick={() => {
                      window.open(
                        "https://forms.gle/2N76uuaT3ox6ZVJ6A",
                        "_blank"
                      );
                    }}
                  >
                    form
                  </span>
                  .
                </div>
              </li>
              <li>
                {" "}
                Our team will verify your request and then get to work at
                matching you with a donor who has the PPE you requested.
              </li>
              <li>
                {" "}
                Complete (through DocuSign) the donor’s liability waiver.
              </li>
              <li> Receive your donated items. </li>
              <li>
                {" "}
                Let the donor know you received your items by scanning the QR
                code located on the packing slip.{" "}
              </li>
              <li>
                {" "}
                <div>
                  Share a picture on social media or send to us at{" "}
                  <a
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "white",
                      color: "#1e5875",
                      paddingLeft: 5,
                      paddingRight: 5,
                      cursor: "pointer"
                    }}
                    href="mailto:contavt@supplycrate.org"
                  >
                    contact@supplycrate.org
                  </a>{" "}
                  to inspire more to get involved! Use #supplycrate or
                  @supplycrateorg on Twitter and Facebook.{" "}
                </div>
              </li>
            </ol>
          </div>
        </div>

        <img
          src="https://i.imgur.com/RGTVqhQ.png"
          style={{ width: 450, marginBottom: 10 }}
        />

        <div
          style={{
            marginBottom: 10,
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            alignItems: "center"
          }}
        >
          <img
            src="https://i.imgur.com/b4iROut.png"
            style={{ width: 150, height: 300 }}
          />

          <img
            src="https://i.imgur.com/q8Wsbnc.png"
            style={{ width: 150, height: 450 }}
          />
        </div>

        <img
          src="https://i.imgur.com/n0jv3rQ.jpg"
          style={{ width: 300, height: 300, marginBottom: 10 }}
        />
      </div>
    );
  }
}

export default RequestIntroduction;
