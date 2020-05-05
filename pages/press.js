import React, { Component } from "react";
import PressIntroduction from "../components/pressIntroduction";
import { Card } from "antd";

class Press extends Component {
  render() {
    return (
      <div>
        <PressIntroduction />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <Card style={{ width: "90vw", marginBottom: "2vw" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ fontSize: 16, color: "black", fontWeight: "bold" }}>
                Fox 11 Interview
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <iframe
                scrolling="no"
                frameborder="0"
                src="https://w3.cdn.anvato.net/player/prod/v3/anvload.html?key=eyJtIjoiRVBGT1giLCJ2IjoiNjcyOTMzIiwiYW52YWNrIjoiYm1RdjhuWE1hbENPb2JCaHZocG85ZU1URTFPek40bEQiLCJzaGFyZUxpbmsiOiJodHRwczovL3d3dy5mb3hsYS5jb20vbmV3cy9pcnZpbmUtdGVlbi1jcmVhdGVzLWNvdmlkLTE5LWRvbmF0aW9uLXdlYnNpdGUiLCJwbHVnaW5zIjp7ImN1c3RvbVNlZ21lbnRQbHVnaW4iOnsic2NyaXB0IjoiaHR0cHM6Ly9zdGF0aWMuZm94dHYuY29tL3N0YXRpYy9vcmlvbi9zY3JpcHRzL2NvcmUvdXRpbHMvQ3VzdG9tU2VnbWVudFBsdWdpbi5qcyIsInByaW1hcnlfYnVzaW5lc3NfdW5pdCI6ImZ0cyIsInNlY29uZGFyeV9idXNpbmVzc191bml0Ijoia3R0diIsImFwcF9uYW1lIjoiZm94bGEuY29tIiwiYXBwX3BsYXRmb3JtIjoid2ViIiwiYXBwX3ZlcnNpb24iOiIxLjAuMCIsInNlZ21lbnRJZCI6IkMyc2VXbEVsVlJDRmhLWHdvRkUzb1hZOTdzY2ZKNUJ3In0sImRmcCI6eyJjbGllbnRTaWRlIjp7ImFkVGFnVXJsIjoiaHR0cHM6Ly9wdWJhZHMuZy5kb3VibGVjbGljay5uZXQvZ2FtcGFkL2Fkcz9pdT0vNjM3OTA1NjQva3R0dl9mb3gxMSZkZXNjcmlwdGlvbl91cmw9W3BsYWNlaG9sZGVyXSZlbnY9dnAmaW1wbD1zJmNvcnJlbGF0b3I9JnRmY2Q9MCZucGE9MCZnZGZwX3JlcT0xJm91dHB1dD12YXN0JnN6PTEwMDF4MTAwMSZ1bnZpZXdlZF9wb3NpdGlvbl9zdGFydD0xIiwia2V5VmFsdWVzIjp7InN0eXBlIjpbbnVsbF0sInB0eXBlIjoidmlkZW8tY2xpcCIsImMiOlsibmV3cyIsImNhIl0sImQiOiJ3ZWIifX0sImxpYnJhcnlSZXF1ZXN0ZWQiOnRydWV9LCJoZWFsdGhBbmFseXRpY3MiOnt9fSwiaHRtbDUiOnRydWUsImZvcm1hdCI6Im0zdTgiLCJ0b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoyYVdRaU9pSTJOekk1TXpNaUxDSnBjM01pT2lKaWJWRjJPRzVZVFdGc1EwOXZZa0pvZG1od2J6bGxUVlJGTVU5NlRqUnNSQ0lzSW1WNGNDSTZNVFU0TnpBd09UZzFNU3dpYVdGMElqb3hOVGczTURBMk1qVXhmUS5QaVdRdUZjOVNHY1lZQnByQ0o4X0d6UnVxa2JsVDJHMVlTNlJIVVNYSEVnIn0%3D"
                style={{
                  width: "90vw",
                  height: "45vw"
                }}
              ></iframe>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: 10
              }}
            >
              <div
                style={{ fontSize: 16, color: "#1e5875", cursor: "pointer" }}
                onClick={() => {
                  window.open(
                    "https://www.foxla.com/news/irvine-teen-creates-covid-19-donation-website",
                    "_blank"
                  );
                }}
              >
                {" "}
                Learn More{" "}
              </div>
            </div>
          </Card>

          <Card style={{ width: "90vw", marginBottom: "2vw" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ fontSize: 16, color: "black", fontWeight: "bold" }}>
                ABC 7 Interview
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <iframe
                src="https://abc7.com/video/embed/?pid=6105240"
                frameborder="0"
                scrolling="no"
                style={{
                  width: "90vw",
                  height: "45vw"
                }}
              ></iframe>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: 10
              }}
            >
              <div
                style={{ fontSize: 16, color: "#1e5875", cursor: "pointer" }}
                onClick={() => {
                  window.open(
                    "https://abc7.com/business/high-school-student-creates-website-to-help-fight-against-covid-19/6103551/",
                    "_blank"
                  );
                }}
              >
                {" "}
                Learn More{" "}
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default Press;
