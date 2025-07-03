import { Img, Link } from "@react-email/components";

export default function RestaurantFeedback() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
      <table
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
        }}
      >
        {/* Header */}
        <tr>
          <td style={{ padding: "20px 30px", backgroundColor: "#ffffff" }}>
            <table width="100%" cellPadding="0" cellSpacing="0">
              <tr>
                <td style={{ textAlign: "left" }}>
                  <h1
                    style={{
                      margin: 0,
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "#7c9a3c",
                      letterSpacing: "2px",
                    }}
                  >
                    LOGO
                  </h1>
                </td>
                <td style={{ textAlign: "right" }}>
                  <table
                    cellPadding="0"
                    cellSpacing="0"
                    style={{ display: "inline-table" }}
                  >
                    <tr>
                      <td
                        style={{
                          padding: "0 15px",
                          fontSize: "14px",
                          color: "#666666",
                          borderRight: "1px solid #cccccc",
                        }}
                      >
                        Menus
                      </td>
                      <td
                        style={{
                          padding: "0 15px",
                          fontSize: "14px",
                          color: "#666666",
                          borderRight: "1px solid #cccccc",
                        }}
                      >
                        Delivery
                      </td>
                      <td
                        style={{
                          padding: "0 0 0 15px",
                          fontSize: "14px",
                          color: "#666666",
                        }}
                      >
                        0123456789
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {/* Main Content */}
        <tr>
          <td style={{ padding: "30px", backgroundColor: "#f5f5f5" }}>
            {/* Heading */}
            <h2
              style={{
                margin: "0 0 20px 0",
                fontSize: "24px",
                fontWeight: "bold",
                color: "#7c9a3c",
                textAlign: "center",
              }}
            >
              DO YOU HAVE A MINUTE?
            </h2>

            {/* Description Text */}
            <p
              style={{
                margin: "0 0 30px 0",
                fontSize: "14px",
                lineHeight: "1.6",
                color: "#666666",
                textAlign: "center",
                maxWidth: "400px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              We want to note that we constantly conduct work on the improvement
              of the quality of service, and we will be very grateful if you
              leave the opinion. Your remarks will help us to cook our food even
              better.
            </p>

            {/* Hero Image */}
            <div style={{ textAlign: "center", marginBottom: "30px" }}>
              <img
                src="https://cdn.templates.unlayer.com/assets/1598386385438-hh.png"
                alt="Hand holding smartphone showing food photos with blurred food plate in background"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
            </div>

            {/* Feedback Question */}
            <h3
              style={{
                margin: "0 0 30px 0",
                fontSize: "18px",
                fontWeight: "normal",
                color: "#7c9a3c",
                textAlign: "center",
              }}
            >
              Liked our food?
            </h3>
            {/* Emoji Feedback Options */}
            <table
              width="100%"
              cellPadding="0"
              cellSpacing="0"
              style={{ marginBottom: "30px" }}
            >
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    width: "33.33%",
                    padding: "0 10px",
                  }}
                >
                  <a
                    href="#"
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ margin: "0 auto" }}
                    >
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <div
                            style={{
                              width: "60px",
                              height: "60px",
                              borderRadius: "50%",
                              backgroundColor: "#ffffff",
                              border: "3px solid #7c9a3c",
                              display: "table-cell",
                              verticalAlign: "middle",
                              textAlign: "center",
                              fontSize: "30px",
                              lineHeight: "1",
                              marginBottom: "10px",
                            }}
                          >
                            😊
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "center", paddingTop: "10px" }}>
                          <div
                            style={{
                              fontSize: "12px",
                              color: "#7c9a3c",
                              fontWeight: "bold",
                              lineHeight: "1",
                            }}
                          >
                            Great
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a>
                </td>
                <td
                  style={{
                    textAlign: "center",
                    width: "33.33%",
                    padding: "0 10px",
                  }}
                >
                  <a
                    href="#"
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ margin: "0 auto" }}
                    >
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <div
                            style={{
                              width: "60px",
                              height: "60px",
                              borderRadius: "50%",
                              backgroundColor: "#ffffff",
                              border: "3px solid #ff9500",
                              display: "table-cell",
                              verticalAlign: "middle",
                              textAlign: "center",
                              fontSize: "30px",
                              lineHeight: "1",
                              marginBottom: "10px",
                            }}
                          >
                            😐
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "center", paddingTop: "10px" }}>
                          <div
                            style={{
                              fontSize: "12px",
                              color: "#ff9500",
                              fontWeight: "bold",
                              lineHeight: "1",
                            }}
                          >
                            OK
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a>
                </td>
                <td
                  style={{
                    textAlign: "center",
                    width: "33.33%",
                    padding: "0 10px",
                  }}
                >
                  <a
                    href="#"
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ margin: "0 auto" }}
                    >
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <div
                            style={{
                              width: "60px",
                              height: "60px",
                              borderRadius: "50%",
                              backgroundColor: "#ffffff",
                              border: "3px solid #e74c3c",
                              display: "table-cell",
                              verticalAlign: "middle",
                              textAlign: "center",
                              fontSize: "30px",
                              lineHeight: "1",
                              marginBottom: "10px",
                            }}
                          >
                            😞
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "center", paddingTop: "10px" }}>
                          <div
                            style={{
                              fontSize: "12px",
                              color: "#e74c3c",
                              fontWeight: "bold",
                              lineHeight: "1",
                            }}
                          >
                            Bad
                          </div>
                        </td>
                      </tr>
                    </table>
                  </a>
                </td>
              </tr>
            </table>

            {/* Thank You Message */}
            <p
              style={{
                margin: 0,
                fontSize: "16px",
                color: "#7c9a3c",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Thanks for your time!
            </p>
          </td>
        </tr>

        {/* Footer */}
        <tr>
          <td
            style={{
              padding: "30px",
              backgroundColor: "#7c9a3c",
              textAlign: "center",
            }}
          >
            {/* Navigation Links */}
            <table
              width="100%"
              cellPadding="0"
              cellSpacing="0"
              style={{ marginBottom: "20px" }}
            >
              <tr>
                <td style={{ textAlign: "center" }}>
                  <table
                    cellPadding="0"
                    cellSpacing="0"
                    style={{ display: "inline-table" }}
                  >
                    <tr>
                      <td
                        style={{
                          padding: "0 20px",
                          fontSize: "14px",
                          color: "#ffffff",
                          borderRight: "1px solid rgba(255,255,255,0.3)",
                        }}
                      >
                        <a
                          href="#"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          Menus
                        </a>
                      </td>
                      <td
                        style={{
                          padding: "0 20px",
                          fontSize: "14px",
                          color: "#ffffff",
                          borderRight: "1px solid rgba(255,255,255,0.3)",
                        }}
                      >
                        <a
                          href="#"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          Delivery
                        </a>
                      </td>
                      <td
                        style={{
                          padding: "0 0 0 20px",
                          fontSize: "14px",
                          color: "#ffffff",
                        }}
                      >
                        <a
                          href="#"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          Hours
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            {/* Social Media Icons */}
            <table
              cellPadding="0"
              cellSpacing="0"
              style={{ borderCollapse: "collapse", margin: "0 auto 20px auto" }}
            >
              <tr>
                <td style={{ padding: "0 8px" }}>
                  <Link href="">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                      alt="Twitter"
                      width="32"
                      height="32"
                      style={{ display: "block" }}
                    />
                  </Link>
                </td>
                <td style={{ padding: "0 8px" }}>
                  <Link href="">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                      alt="LinkedIn"
                      width="32"
                      height="32"
                      style={{ display: "block" }}
                    />
                  </Link>
                </td>
                <td style={{ padding: "0 8px" }}>
                  <Link href="">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                      alt="Instagram"
                      width="32"
                      height="32"
                      style={{ display: "block" }}
                    />
                  </Link>
                </td>
                <td style={{ padding: "0 8px" }}>
                  <Link href="">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/vimeo.png"
                      alt="Vimeo"
                      width="32"
                      height="32"
                      style={{ display: "block" }}
                    />
                  </Link>
                </td>
              </tr>
            </table>

            {/* Footer Text */}
            <p
              style={{
                margin: "0 0 20px 0",
                fontSize: "12px",
                color: "#ffffff",
                lineHeight: "1.5",
                opacity: 0.8,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br />
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat
            </p>
          </td>
        </tr>

        {/* Copyright */}
        <tr>
          <td
            style={{
              padding: "15px 30px",
              backgroundColor: "#000000",
              textAlign: "center",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "12px",
                color: "#ffffff",
              }}
            >
              © Restaurants. All Rights Reserved
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
}
