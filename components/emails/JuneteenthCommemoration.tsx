import React from "react"
export default function JuneteenthCommemoration() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "0", padding: "0", backgroundColor: "#f5f5f5" }}>
      <table
        cellPadding="0"
        cellSpacing="0"
        border={0}
        width="100%"
        style={{ backgroundColor: "#f5f5f5", paddingTop: "20px", paddingBottom: "20px" }}
      >
        <tr>
          <td align="center">
            {/* Main Container with Orange Border */}
            <table
              cellPadding="0"
              cellSpacing="0"
              border={0}
              width="600"
              style={{
                backgroundColor: "#FF8C42",
                borderRadius: "8px",
                maxWidth: "600px",
                width: "100%",
              }}
            >
              <tr>
                <td style={{ padding: "8px" }}>
                  {/* Inner Content Container */}
                  <table
                    cellPadding="0"
                    cellSpacing="0"
                    border={0}
                    width="100%"
                    style={{
                      backgroundColor: "#2C2C2C",
                      borderRadius: "4px",
                      position: "relative",
                    }}
                  >
                    {/* Header Section with Decorative Elements */}
                    <tr>
                      <td style={{ padding: "60px 40px 40px", textAlign: "center", position: "relative" }}>
                        {/* Decorative Elements - Using Unicode symbols */}
                        <div
                          style={{
                            position: "absolute",
                            top: "20px",
                            left: "30px",
                            color: "#DC143C",
                            fontSize: "20px",
                          }}
                        >
                          ✦
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "40px",
                            right: "40px",
                            color: "#FFD700",
                            fontSize: "16px",
                          }}
                        >
                          ▲
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "80px",
                            right: "80px",
                            color: "#FFD700",
                            fontSize: "18px",
                          }}
                        >
                          ✦
                        </div>

                        {/* Red Bar */}
                        <table cellPadding="0" cellSpacing="0" border={0} width="300" style={{ margin: "0 auto 10px" }}>
                          <tr>
                            <td
                              style={{
                                backgroundColor: "#DC143C",
                                height: "8px",
                                borderRadius: "4px",
                              }}
                            ></td>
                          </tr>
                        </table>

                        {/* Main Title */}
                        <h1
                          style={{
                            color: "#FFFFFF",
                            fontSize: "48px",
                            fontWeight: "bold",
                            margin: "10px 0",
                            letterSpacing: "3px",
                            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                            fontFamily: "Arial, sans-serif",
                          }}
                        >
                          JUNETEENTH
                        </h1>

                        {/* Green Bar */}
                        <table
                          cellPadding="0"
                          cellSpacing="0"
                          border={0}
                          width="300"
                          style={{ margin: "10px auto 20px" }}
                        >
                          <tr>
                            <td
                              style={{
                                backgroundColor: "#228B22",
                                height: "8px",
                                borderRadius: "4px",
                              }}
                            ></td>
                          </tr>
                        </table>

                        {/* Subtitle */}
                        <p
                          style={{
                            color: "#FFFFFF",
                            fontSize: "16px",
                            fontWeight: "300",
                            letterSpacing: "2px",
                            margin: "0",
                            fontFamily: "Arial, sans-serif",
                          }}
                        >
                          A COMMEMORATION OF FREEDOM
                        </p>
                      </td>
                    </tr>

                    {/* Main Message Section */}
                    <tr>
                      <td style={{ padding: "0 40px 30px", textAlign: "center" }}>
                        <h2
                          style={{
                            color: "#FFD700",
                            fontSize: "24px",
                            fontWeight: "bold",
                            margin: "0 0 20px",
                            letterSpacing: "1px",
                            fontFamily: "Arial, sans-serif",
                          }}
                        >
                          JUST A QUICK REMINDER TO
                          <br />
                          HAVE FUN TODAY!
                        </h2>

                        <p
                          style={{
                            color: "#FFFFFF",
                            fontSize: "14px",
                            lineHeight: "1.6",
                            margin: "0 0 30px",
                            opacity: "0.9",
                            fontFamily: "Arial, sans-serif",
                          }}
                        >
                          Today we celebrate freedom, resilience, and the ongoing journey toward equality. Juneteenth
                          commemorates the end of slavery in the United States and serves as a reminder of our shared
                          commitment to justice and unity.
                        </p>
                      </td>
                    </tr>

                    {/* Broken Chain Image Section */}
                    <tr>
                      <td style={{ padding: "20px 0 40px", textAlign: "center" }}>
                        <img
                          src="https://cdn.templates.unlayer.com/assets/1652780178804-freedom.gif"
                          alt="Broken chains symbolizing freedom from slavery"
                          width="300"
                          height="80"
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                            filter: "brightness(0) invert(1)",
                            display: "block",
                            margin: "0 auto",
                          }}
                        />
                      </td>
                    </tr>

                    {/* Bottom decorative elements */}
                    <tr>
                      <td style={{ position: "relative", height: "20px" }}>
                        <div
                          style={{
                            position: "absolute",
                            bottom: "10px",
                            left: "40px",
                            color: "#228B22",
                            fontSize: "12px",
                          }}
                        >
                          ●
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            bottom: "5px",
                            right: "30px",
                            color: "#DC143C",
                            fontSize: "14px",
                          }}
                        >
                          ▼
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Bottom Information Section */}
              <tr>
                <td style={{ backgroundColor: "#FF8C42", padding: "30px", textAlign: "center" }}>
                  <p
                    style={{
                      color: "#2C2C2C",
                      fontSize: "14px",
                      lineHeight: "1.6",
                      margin: "0 0 25px",
                      fontWeight: "500",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    There are many reasons to be happy and celebrate today. Juneteenth is a day of remembrance for those
                    who were formerly considered slaves, but also an opportunity that allows us all to come together in
                    unity.
                  </p>

                  {/* CTA Button */}
                  <table cellPadding="0" cellSpacing="0" border={0} style={{ margin: "0 auto 20px" }}>
                    <tr>
                      <td style={{ borderRadius: "25px", backgroundColor: "#DC143C" }}>
                        <a
                          href="#"
                          style={{
                            backgroundColor: "#DC143C",
                            color: "#FFFFFF",
                            padding: "12px 30px",
                            textDecoration: "none",
                            borderRadius: "25px",
                            fontSize: "16px",
                            fontWeight: "bold",
                            display: "block",
                            fontFamily: "Arial, sans-serif",
                          }}
                        >
                          Join Us
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Footer */}
              <tr>
                <td style={{ backgroundColor: "#2C2C2C", padding: "25px" }}>
                  <table cellPadding="0" cellSpacing="0" border={0} width="100%">
                    <tr>
                      <td style={{ textAlign: "center" }}>
                        {/* Company Name and Social Icons Row */}
                        <table cellPadding="0" cellSpacing="0" border={0} width="100%">
                          <tr>
                            <td style={{ textAlign: "left", verticalAlign: "middle", width: "33%" }}>
                              <span
                                style={{
                                  color: "#FFFFFF",
                                  fontSize: "16px",
                                  fontWeight: "bold",
                                  fontFamily: "Arial, sans-serif",
                                }}
                              >
                                [Company Name]
                              </span>
                            </td>
                            <td style={{ textAlign: "center", verticalAlign: "middle", width: "34%" }}>
                              {/* Social Media Icons */}
                              <table cellPadding="0" cellSpacing="0" border={0} style={{ margin: "0 auto" }}>
                                <tr>
                                  <td style={{ padding: "0 5px" }}>
                                    <a
                                      href="#"
                                      style={{
                                        backgroundColor: "#3b5998",
                                        color: "#FFFFFF",
                                        width: "35px",
                                        height: "35px",
                                        borderRadius: "50%",
                                        display: "inline-block",
                                        textAlign: "center",
                                        lineHeight: "35px",
                                        textDecoration: "none",
                                        fontSize: "18px",
                                        fontFamily: "Arial, sans-serif",
                                      }}
                                    >
                                      f
                                    </a>
                                  </td>
                                  <td style={{ padding: "0 5px" }}>
                                    <a
                                      href="#"
                                      style={{
                                        backgroundColor: "#0077b5",
                                        color: "#FFFFFF",
                                        width: "35px",
                                        height: "35px",
                                        borderRadius: "50%",
                                        display: "inline-block",
                                        textAlign: "center",
                                        lineHeight: "35px",
                                        textDecoration: "none",
                                        fontSize: "16px",
                                        fontFamily: "Arial, sans-serif",
                                      }}
                                    >
                                      in
                                    </a>
                                  </td>
                                  <td style={{ padding: "0 5px" }}>
                                    <a
                                      href="#"
                                      style={{
                                        backgroundColor: "#bd081c",
                                        color: "#FFFFFF",
                                        width: "35px",
                                        height: "35px",
                                        borderRadius: "50%",
                                        display: "inline-block",
                                        textAlign: "center",
                                        lineHeight: "35px",
                                        textDecoration: "none",
                                        fontSize: "18px",
                                        fontFamily: "Arial, sans-serif",
                                      }}
                                    >
                                      P
                                    </a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td style={{ textAlign: "right", verticalAlign: "middle", width: "33%" }}>
                              <span
                                style={{
                                  color: "#FFFFFF",
                                  fontSize: "12px",
                                  opacity: "0.8",
                                  fontFamily: "Arial, sans-serif",
                                }}
                              >
                                Lorem ipsum dolor sit amet,
                                <br />
                                consectetur adipiscing elit, sed do
                                <br />
                                eiusmod tempor incididunt
                              </span>
                            </td>
                          </tr>
                        </table>

                        {/* Address */}
                        <table cellPadding="0" cellSpacing="0" border={0} width="100%" style={{ marginTop: "20px" }}>
                          <tr>
                            <td
                              style={{
                                borderTop: "1px solid #444",
                                paddingTop: "15px",
                                textAlign: "center",
                              }}
                            >
                              <span
                                style={{
                                  color: "#FFFFFF",
                                  fontSize: "12px",
                                  opacity: "0.7",
                                  fontFamily: "Arial, sans-serif",
                                }}
                              >
                                2261 Market Street #4667 San Francisco, CA 94114
                              </span>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  )
}
