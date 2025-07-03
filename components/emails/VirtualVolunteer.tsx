export default function VirtualVolunteer() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#333",
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Header Navigation */}
      <table
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #e5e5e5" }}
      >
        <tr>
          <td style={{ padding: "15px 20px" }}>
            <table width="100%" cellPadding="0" cellSpacing="0">
              <tr>
                <td style={{ textAlign: "left" }}>
                  <span style={{ fontSize: "14px", color: "#666", marginRight: "20px" }}>Home</span>
                  <span style={{ fontSize: "14px", color: "#666", marginRight: "20px" }}>About</span>
                </td>
                <td style={{ textAlign: "center" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#3b82f6" />
                      <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" />
                    </svg>
                    <span style={{ fontSize: "16px", fontWeight: "bold", color: "#3b82f6" }}>Logo</span>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "14px", color: "#666", marginRight: "20px" }}>Programs</span>
                  <span style={{ fontSize: "14px", color: "#666" }}>Contact</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      {/* Hero Section */}
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: "#ffffff" }}>
        <tr>
          <td style={{ padding: "40px 20px", textAlign: "center" }}>
            <h1
              style={{ fontSize: "32px", fontWeight: "bold", color: "#333", margin: "0 0 30px 0", lineHeight: "1.2" }}
            >
              Virtual Volunteer
              <br />
              Opportunities Await
            </h1>

            <img src="https://cdn.templates.unlayer.com/assets/1691751864084-Group%2065.png" alt=""
            className="margin-auto"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }} />
            
          </td>
        </tr>
      </table>

      {/* Services Grid */}
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: "#ffffff" }}>
        <tr>
          <td style={{ padding: "40px 20px" }}>
            <table width="100%" cellPadding="0" cellSpacing="0">
              {/* First Row */}
              <tr>
                <td style={{ width: "33.33%", padding: "10px", textAlign: "center", verticalAlign: "top" }}>
                  <div style={{ padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px", height: "120px" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#3b82f6",
                        borderRadius: "8px",
                        margin: "0 auto 15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" />
                      </svg>
                    </div>
                    <h3 style={{ fontSize: "14px", fontWeight: "bold", color: "#333", margin: "0", lineHeight: "1.3" }}>
                      Virtual Language
                      <br />
                      Exchange
                    </h3>
                  </div>
                </td>
                <td style={{ width: "33.33%", padding: "10px", textAlign: "center", verticalAlign: "top" }}>
                  <div style={{ padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px", height: "120px" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#3b82f6",
                        borderRadius: "8px",
                        margin: "0 auto 15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="white" strokeWidth="2" />
                      </svg>
                    </div>
                    <h3 style={{ fontSize: "14px", fontWeight: "bold", color: "#333", margin: "0", lineHeight: "1.3" }}>
                      Online Tutoring
                      <br />& Mentoring
                    </h3>
                  </div>
                </td>
                <td style={{ width: "33.33%", padding: "10px", textAlign: "center", verticalAlign: "top" }}>
                  <div style={{ padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px", height: "120px" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#3b82f6",
                        borderRadius: "8px",
                        margin: "0 auto 15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                    <h3 style={{ fontSize: "14px", fontWeight: "bold", color: "#333", margin: "0", lineHeight: "1.3" }}>
                      Content Creation
                      <br />
                      for Nonprofits
                    </h3>
                  </div>
                </td>
              </tr>

              {/* Second Row */}
              <tr>
                <td style={{ width: "33.33%", padding: "10px", textAlign: "center", verticalAlign: "top" }}>
                  <div style={{ padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px", height: "120px" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#3b82f6",
                        borderRadius: "8px",
                        margin: "0 auto 15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M7 10v12M15 5v16M11 6v14" stroke="white" strokeWidth="2" />
                      </svg>
                    </div>
                    <h3 style={{ fontSize: "14px", fontWeight: "bold", color: "#333", margin: "0", lineHeight: "1.3" }}>
                      Social Media
                      <br />
                      Advocacy
                    </h3>
                  </div>
                </td>
                <td style={{ width: "33.33%", padding: "10px", textAlign: "center", verticalAlign: "top" }}>
                  <div style={{ padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px", height: "120px" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#3b82f6",
                        borderRadius: "8px",
                        margin: "0 auto 15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                    <h3 style={{ fontSize: "14px", fontWeight: "bold", color: "#333", margin: "0", lineHeight: "1.3" }}>
                      Virtual Art & Music
                      <br />
                      Workshops
                    </h3>
                  </div>
                </td>
                <td style={{ width: "33.33%", padding: "10px", textAlign: "center", verticalAlign: "top" }}>
                  <div style={{ padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "8px", height: "120px" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#3b82f6",
                        borderRadius: "8px",
                        margin: "0 auto 15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                    <h3 style={{ fontSize: "14px", fontWeight: "bold", color: "#333", margin: "0", lineHeight: "1.3" }}>
                      Virtual Fundraising
                      <br />
                      Campaigns
                    </h3>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      {/* Description Text */}
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: "#ffffff" }}>
        <tr>
          <td style={{ padding: "20px 40px", textAlign: "center" }}>
            <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6", margin: "0 0 20px 0" }}>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6", margin: "0", fontStyle: "italic" }}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </td>
        </tr>
      </table>

      {/* CTA Section */}
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: "#ffffff" }}>
        <tr>
          <td style={{ padding: "40px 20px", textAlign: "center" }}>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#333",
                margin: "0 0 20px 0",
                letterSpacing: "1px",
              }}
            >
              BE A PART OF SOMETHING EXCEPTIONAL
            </h2>
            <a
              href="#"
              style={{
                display: "inline-block",
                backgroundColor: "#3b82f6",
                color: "white",
                padding: "12px 30px",
                textDecoration: "none",
                borderRadius: "6px",
                fontSize: "16px",
                fontWeight: "bold",
                margin: "0 0 15px 0",
              }}
            >
              Sign up Now
            </a>
            <p style={{ fontSize: "14px", color: "#666", margin: "0" }}>
              For more details:{" "}
              <a href="mailto:inquiry@xyz.com" style={{ color: "#3b82f6", textDecoration: "none" }}>
                inquiry@xyz.com
              </a>
            </p>
          </td>
        </tr>
      </table>

      {/* Footer */}
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: "#333333" }}>
        <tr>
          <td style={{ padding: "30px 20px" }}>
            <h3 style={{ fontSize: "18px", color: "white", margin: "0 0 15px 0" }}>Thanks for the support! 😊</h3>
            <p style={{ fontSize: "14px", color: "#cccccc", lineHeight: "1.6", margin: "0 0 20px 0" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </p>
            <p style={{ fontSize: "14px", color: "#cccccc", margin: "0 0 25px 0" }}>
              Please reach out to us if you have any thoughts, praise, or custom project to{" "}
              <a href="mailto:www.unlayer.com" style={{ color: "#3b82f6", textDecoration: "none" }}>
                www.unlayer.com
              </a>
              . We'd love to hear from you!
            </p>

            {/* Social Media Icons */}
            <div style={{ textAlign: "center", margin: "20px 0" }}>
              <a
                href="#"
                style={{
                  display: "inline-block",
                  margin: "0 10px",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#4267B2",
                  borderRadius: "50%",
                  textAlign: "center",
                  lineHeight: "40px",
                  textDecoration: "none",
                }}
              >
                <span style={{ color: "white", fontSize: "18px" }}>f</span>
              </a>
              <a
                href="#"
                style={{
                  display: "inline-block",
                  margin: "0 10px",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#1DA1F2",
                  borderRadius: "50%",
                  textAlign: "center",
                  lineHeight: "40px",
                  textDecoration: "none",
                }}
              >
                <span style={{ color: "white", fontSize: "18px" }}>t</span>
              </a>
              <a
                href="#"
                style={{
                  display: "inline-block",
                  margin: "0 10px",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#0077B5",
                  borderRadius: "50%",
                  textAlign: "center",
                  lineHeight: "40px",
                  textDecoration: "none",
                }}
              >
                <span style={{ color: "white", fontSize: "18px" }}>in</span>
              </a>
              <a
                href="#"
                style={{
                  display: "inline-block",
                  margin: "0 10px",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#E4405F",
                  borderRadius: "50%",
                  textAlign: "center",
                  lineHeight: "40px",
                  textDecoration: "none",
                }}
              >
                <span style={{ color: "white", fontSize: "18px" }}>ig</span>
              </a>
            </div>

            {/* Footer Links */}
            <table
              width="100%"
              cellPadding="0"
              cellSpacing="0"
              style={{ marginTop: "20px", borderTop: "1px solid #555" }}
            >
              <tr>
                <td style={{ padding: "15px 0", textAlign: "left" }}>
                  <span style={{ fontSize: "12px", color: "#999", marginRight: "15px" }}>UNSUBSCRIBE</span>
                  <span style={{ fontSize: "12px", color: "#999", marginRight: "15px" }}>PRIVACY POLICY</span>
                  <span style={{ fontSize: "12px", color: "#999" }}>WEB</span>
                </td>
                <td style={{ padding: "15px 0", textAlign: "right" }}>
                  <span style={{ fontSize: "12px", color: "#999" }}>[Your Logo]</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  )
}
