import React, { Component } from "react";

class RecipientsIntroduction extends Component {
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
            width: "100%",
            marginTop: 10,
            marginBottom: 10
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
            The world is faced with an unprecedented challenge as growing
            numbers of individuals, communities and businesses are affected by
            COVID-19. We all need to do our part in supporting those in need,
            and joining in the effort to end its effect on us. Your donation of
            Personal Protective Equipment (PPE) will make a difference.
          </div>
        </div>

        <div
          style={{
            width: "100vw",
            backgroundColor: "#1e5875",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            paddingTop: 10,
            paddingBottom: 10
          }}
        >
          <div style={{ width: "90%" }}>
            <div
              style={{
                fontFamily: "system-ui",
                fontSize: 16,
                color: "white",
                fontWeight: "bold",
                textAlign: "center"
              }}
            >
              Making a donation is easy.
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
              <li> Select an institution and view its donation information.</li>
              <li> Input your donation information and generate a QR label.</li>
              <li>
                {" "}
                Place your label inside your package so you'll know when it
                arrives.
              </li>
            </ol>
          </div>

          <iframe
            style={{ width: "90vw", height: "45vw" }}
            src="https://www.youtube.com/embed/MRWRWdmcj7k"
            frameborder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
}

export default RecipientsIntroduction;
