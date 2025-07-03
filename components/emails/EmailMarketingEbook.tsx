import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"

interface EmailMarketingEbookProps {
  customerName?: string
  downloadUrl?: string
  unsubscribeUrl?: string
  privacyPolicyUrl?: string
  websiteUrl?: string
  facebookUrl?: string
  twitterUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
}

export default function EmailMarketingEbook({
  customerName = "Valued Reader",
  downloadUrl = "#",
  unsubscribeUrl = "#",
  privacyPolicyUrl = "#",
  websiteUrl = "#",
  facebookUrl = "https://facebook.com",
  twitterUrl = "https://twitter.com",
  linkedinUrl = "https://linkedin.com",
  instagramUrl = "https://instagram.com",
}: EmailMarketingEbookProps) {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap');
          
          * {
            box-sizing: border-box;
          }
          
          body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            min-width: 100% !important;
          }
          
          table {
            border-collapse: collapse !important;
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
          }
          
          img {
            max-width: 100% !important;
            height: auto !important;
            display: block !important;
          }
          
          @media only screen and (max-width: 600px) {
            .email-container {
              width: 100% !important;
              max-width: 100% !important;
              margin: 0 !important;
            }
            
            .mobile-padding { 
              padding: 30px 20px !important; 
            }
            
            .mobile-padding-sm { 
              padding: 20px !important; 
            }
            
            .mobile-text-xs { 
              font-size: 12px !important; 
            }
            
            .mobile-text-sm { 
              font-size: 14px !important; 
            }
            
            .mobile-text-base { 
              font-size: 16px !important; 
            }
            
            .mobile-text-lg { 
              font-size: 18px !important; 
            }
            
            .mobile-text-xl { 
              font-size: 20px !important; 
            }
            
            .mobile-text-2xl { 
              font-size: 24px !important; 
            }
            
            .mobile-text-3xl { 
              font-size: 28px !important; 
            }
            
            .mobile-hidden { 
              display: none !important; 
            }
            
            .mobile-full-width { 
              width: 100% !important; 
              max-width: 100% !important;
            }
            
            .mobile-center { 
              text-align: center !important; 
            }
            
            .mobile-stack {
              display: block !important;
              width: 100% !important;
            }
            
            .mobile-stack-item {
              display: block !important;
              width: 100% !important;
              padding: 0 !important;
              margin-bottom: 20px !important;
            }
            
            .mobile-button-full { 
              width: 90% !important; 
              max-width: 280px !important;
            }
            
            .mobile-table-full {
              width: 100% !important;
            }
            
            .mobile-section-padding {
              padding: 40px 20px !important;
            }
            
            .mobile-social-stack {
              display: block !important;
              text-align: center !important;
            }
            
            .mobile-social-item {
              display: inline-block !important;
              margin: 0 8px !important;
            }
          }
          
          @media only screen and (max-width: 480px) {
            .mobile-text-2xl {
              font-size: 20px !important;
            }
            
            .mobile-text-3xl {
              font-size: 24px !important;
            }
          }
        `}</style>
      </Head>
      <Preview>📚 Download The Fundamentals of Email Marketing - Free Ebook</Preview>
      <Tailwind>
        <Body
          className="bg-gray-100 m-0 p-0"
          style={{
            fontFamily: "Inter, sans-serif",
            margin: "0",
            padding: "0",
            width: "100%",
            minWidth: "100%",
            backgroundColor: "#dbeafe",
          }}
        >
          <Container
            className="mx-auto email-container"
            style={{
              maxWidth: "600px",
              width: "100%",
              margin: "0 auto",
              backgroundColor: "#dbeafe",
              borderRadius: "0",
              overflow: "hidden",
            }}
          >
            {/* Header with Logo */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#dbeafe" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "30px 40px 20px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                    {/* Logo */}
                    <div style={{ textAlign: "left" }}>
                      <div style={{ display: "inline-block" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          {/* Logo Icon */}
                          <div
                            style={{
                              width: "24px",
                              height: "24px",
                              backgroundColor: "#000000",
                              display: "inline-block",
                              position: "relative",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                top: "4px",
                                left: "4px",
                                width: "4px",
                                height: "4px",
                                backgroundColor: "#ffffff",
                              }}
                            ></div>
                            <div
                              style={{
                                position: "absolute",
                                top: "4px",
                                right: "4px",
                                width: "4px",
                                height: "4px",
                                backgroundColor: "#ffffff",
                              }}
                            ></div>
                            <div
                              style={{
                                position: "absolute",
                                bottom: "4px",
                                left: "4px",
                                width: "4px",
                                height: "4px",
                                backgroundColor: "#ffffff",
                              }}
                            ></div>
                            <div
                              style={{
                                position: "absolute",
                                bottom: "4px",
                                right: "4px",
                                width: "4px",
                                height: "4px",
                                backgroundColor: "#ffffff",
                              }}
                            ></div>
                          </div>
                          <Text
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "18px",
                              fontWeight: "700",
                              color: "#000000",
                              margin: "0",
                              letterSpacing: "1px",
                            }}
                          >
                            YOUR
                          </Text>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Hero Section with Ebook Mockup */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#dbeafe" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "0px",
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1664276686225-New-Footer.png"
                      alt="Ebook Mockup Design with mobile phone showing email marketing content"
                      width="400"
                      height="300"
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        maxWidth: "400px",
                        margin: "0 auto",
                      }}
                    />
                  </td>
                </tr>
              </table>
            </Section>

            {/* Main CTA Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#0891b2" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "60px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                    <Heading
                      className="mobile-text-3xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "32px",
                        lineHeight: "1.2",
                        margin: "0 0 20px 0",
                        color: "#ffffff",
                        fontWeight: "700",
                      }}
                    >
                      The Fundamentals of
                      <br />
                      Email Marketing
                    </Heading>

                    <Text
                      className="mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.6",
                        margin: "0 0 30px 0",
                        color: "#ffffff",
                        maxWidth: "400px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s.
                    </Text>

                    <Link
                      href={downloadUrl}
                      className="mobile-button-full"
                      style={{
                        backgroundColor: "#000000",
                        color: "#ffffff",
                        padding: "16px 40px",
                        textDecoration: "none",
                        borderRadius: "6px",
                        fontSize: "16px",
                        fontWeight: "600",
                        fontFamily: "Inter, sans-serif",
                        display: "inline-block",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Download Now
                    </Link>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Features Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#f1f5f9" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "50px 40px",
                    }}
                    className="mobile-section-padding"
                  >
                    {/* Feature 1 - Chart Icon */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", marginBottom: "30px" }}
                    >
                      <tr className="mobile-stack">
                        <td
                          style={{ width: "60px", verticalAlign: "top", paddingRight: "20px" }}
                          className="mobile-stack-item"
                        >
                          <div
                            style={{
                              width: "40px",
                              height: "40px",
                              backgroundColor: "#000000",
                              borderRadius: "8px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {/* Chart SVG */}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path d="M3 17V7L7 3L13 9L17 5V17H3Z" stroke="#ffffff" strokeWidth="2" fill="none" />
                            </svg>
                          </div>
                        </td>
                        <td style={{ verticalAlign: "top" }} className="mobile-stack-item">
                          <Heading
                            className="mobile-text-lg"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "18px",
                              lineHeight: "1.3",
                              margin: "0 0 8px 0",
                              color: "#111827",
                              fontWeight: "600",
                            }}
                          >
                            Grow your Email List
                          </Heading>
                          <Text
                            className="mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              lineHeight: "1.5",
                              margin: "0",
                              color: "#6b7280",
                            }}
                          >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          </Text>
                        </td>
                      </tr>
                    </table>

                    {/* Feature 2 - Target Icon */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", marginBottom: "30px" }}
                    >
                      <tr className="mobile-stack">
                        <td
                          style={{ width: "60px", verticalAlign: "top", paddingRight: "20px" }}
                          className="mobile-stack-item"
                        >
                          <div
                            style={{
                              width: "40px",
                              height: "40px",
                              backgroundColor: "#000000",
                              borderRadius: "8px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {/* Target SVG */}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <circle cx="10" cy="10" r="8" stroke="#ffffff" strokeWidth="2" fill="none" />
                              <circle cx="10" cy="10" r="4" stroke="#ffffff" strokeWidth="2" fill="none" />
                              <circle cx="10" cy="10" r="1" fill="#ffffff" />
                            </svg>
                          </div>
                        </td>
                        <td style={{ verticalAlign: "top" }} className="mobile-stack-item">
                          <Heading
                            className="mobile-text-lg"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "18px",
                              lineHeight: "1.3",
                              margin: "0 0 8px 0",
                              color: "#111827",
                              fontWeight: "600",
                            }}
                          >
                            Grow your Email List
                          </Heading>
                          <Text
                            className="mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              lineHeight: "1.5",
                              margin: "0",
                              color: "#6b7280",
                            }}
                          >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          </Text>
                        </td>
                      </tr>
                    </table>

                    {/* Feature 3 - Rocket Icon */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", marginBottom: "30px" }}
                    >
                      <tr className="mobile-stack">
                        <td
                          style={{ width: "60px", verticalAlign: "top", paddingRight: "20px" }}
                          className="mobile-stack-item"
                        >
                          <div
                            style={{
                              width: "40px",
                              height: "40px",
                              backgroundColor: "#000000",
                              borderRadius: "8px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {/* Rocket SVG */}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <path
                                d="M10 2L12 8L18 10L12 12L10 18L8 12L2 10L8 8L10 2Z"
                                stroke="#ffffff"
                                strokeWidth="2"
                                fill="none"
                              />
                            </svg>
                          </div>
                        </td>
                        <td style={{ verticalAlign: "top" }} className="mobile-stack-item">
                          <Heading
                            className="mobile-text-lg"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "18px",
                              lineHeight: "1.3",
                              margin: "0 0 8px 0",
                              color: "#111827",
                              fontWeight: "600",
                            }}
                          >
                            Grow your Email List
                          </Heading>
                          <Text
                            className="mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              lineHeight: "1.5",
                              margin: "0",
                              color: "#6b7280",
                            }}
                          >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          </Text>
                        </td>
                      </tr>
                    </table>

                    {/* Feature 4 - Calendar Icon */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", marginBottom: "30px" }}
                    >
                      <tr className="mobile-stack">
                        <td
                          style={{ width: "60px", verticalAlign: "top", paddingRight: "20px" }}
                          className="mobile-stack-item"
                        >
                          <div
                            style={{
                              width: "40px",
                              height: "40px",
                              backgroundColor: "#000000",
                              borderRadius: "8px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {/* Calendar SVG */}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <rect
                                x="3"
                                y="4"
                                width="14"
                                height="12"
                                rx="2"
                                stroke="#ffffff"
                                strokeWidth="2"
                                fill="none"
                              />
                              <path d="M16 8H4M8 2V6M12 2V6" stroke="#ffffff" strokeWidth="2" />
                            </svg>
                          </div>
                        </td>
                        <td style={{ verticalAlign: "top" }} className="mobile-stack-item">
                          <Heading
                            className="mobile-text-lg"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "18px",
                              lineHeight: "1.3",
                              margin: "0 0 8px 0",
                              color: "#111827",
                              fontWeight: "600",
                            }}
                          >
                            Grow your Email List
                          </Heading>
                          <Text
                            className="mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              lineHeight: "1.5",
                              margin: "0",
                              color: "#6b7280",
                            }}
                          >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          </Text>
                        </td>
                      </tr>
                    </table>

                    {/* Feature 5 - Bar Chart Icon */}
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                      <tr className="mobile-stack">
                        <td
                          style={{ width: "60px", verticalAlign: "top", paddingRight: "20px" }}
                          className="mobile-stack-item"
                        >
                          <div
                            style={{
                              width: "40px",
                              height: "40px",
                              backgroundColor: "#000000",
                              borderRadius: "8px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {/* Bar Chart SVG */}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <rect x="3" y="12" width="3" height="5" fill="#ffffff" />
                              <rect x="8" y="8" width="3" height="9" fill="#ffffff" />
                              <rect x="13" y="4" width="3" height="13" fill="#ffffff" />
                            </svg>
                          </div>
                        </td>
                        <td style={{ verticalAlign: "top" }} className="mobile-stack-item">
                          <Heading
                            className="mobile-text-lg"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "18px",
                              lineHeight: "1.3",
                              margin: "0 0 8px 0",
                              color: "#111827",
                              fontWeight: "600",
                            }}
                          >
                            Grow your Email List
                          </Heading>
                          <Text
                            className="mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              lineHeight: "1.5",
                              margin: "0",
                              color: "#6b7280",
                            }}
                          >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          </Text>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* About Author Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#0891b2" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "60px 40px",
                      textAlign: "center",
                      position: "relative",
                    }}
                    className="mobile-section-padding"
                  >
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                      <tr className="mobile-stack">
                        <td
                          style={{ width: "60%", verticalAlign: "middle", paddingRight: "30px" }}
                          className="mobile-stack-item"
                        >
                          <Heading
                            className="mobile-text-2xl"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "28px",
                              lineHeight: "1.3",
                              margin: "0 0 20px 0",
                              color: "#ffffff",
                              fontWeight: "600",
                              textAlign: "left",
                            }}
                          >
                            About Author
                          </Heading>
                          <Text
                            className="mobile-text-base"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              lineHeight: "1.6",
                              margin: "0 0 20px 0",
                              color: "#ffffff",
                              textAlign: "left",
                            }}
                          >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          </Text>
                          <Text
                            className="mobile-text-lg"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "18px",
                              fontWeight: "600",
                              color: "#ffffff",
                              margin: "0",
                              textAlign: "left",
                            }}
                          >
                            John Smith
                          </Text>
                        </td>
                        <td
                          style={{ width: "40%", verticalAlign: "middle", textAlign: "center", position: "relative" }}
                          className="mobile-stack-item"
                        >
                         <img src="https://cdn.templates.unlayer.com/assets/1664272728102-Asset%207.png" alt=""
                         className="mx-auto object-contain"
                         />
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Footer */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#dbeafe" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "40px",
                      textAlign: "center",
                    }}
                    className="mobile-padding"
                  >
                    {/* Social Media Icons */}
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", margin: "0 auto 30px auto" }}
                      className="mobile-social-stack"
                    >
                      <tr className="mobile-social-stack">
                        <td style={{ padding: "0 8px" }} className="mobile-social-item">
                          <Link href={facebookUrl}>
                            <div
                              style={{
                                width: "36px",
                                height: "36px",
                                backgroundColor: "#3b5998",
                                borderRadius: "6px",
                                display: "inline-block",
                              }}
                            >
                              <table
                                width="100%"
                                cellPadding="0"
                                cellSpacing="0"
                                style={{ borderCollapse: "collapse", height: "100%" }}
                              >
                                <tr>
                                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                    <Text
                                      style={{
                                        fontSize: "18px",
                                        color: "#ffffff",
                                        margin: "0",
                                        fontFamily: "Inter, sans-serif",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      f
                                    </Text>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </Link>
                        </td>
                        <td style={{ padding: "0 8px" }} className="mobile-social-item">
                          <Link href={twitterUrl}>
                            <div
                              style={{
                                width: "36px",
                                height: "36px",
                                backgroundColor: "#1da1f2",
                                borderRadius: "6px",
                                display: "inline-block",
                              }}
                            >
                              <table
                                width="100%"
                                cellPadding="0"
                                cellSpacing="0"
                                style={{ borderCollapse: "collapse", height: "100%" }}
                              >
                                <tr>
                                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                    <Text
                                      style={{
                                        fontSize: "16px",
                                        color: "#ffffff",
                                        margin: "0",
                                        fontFamily: "Inter, sans-serif",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      t
                                    </Text>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </Link>
                        </td>
                        <td style={{ padding: "0 8px" }} className="mobile-social-item">
                          <Link href={linkedinUrl}>
                            <div
                              style={{
                                width: "36px",
                                height: "36px",
                                backgroundColor: "#0077b5",
                                borderRadius: "6px",
                                display: "inline-block",
                              }}
                            >
                              <table
                                width="100%"
                                cellPadding="0"
                                cellSpacing="0"
                                style={{ borderCollapse: "collapse", height: "100%" }}
                              >
                                <tr>
                                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                    <Text
                                      style={{
                                        fontSize: "14px",
                                        color: "#ffffff",
                                        margin: "0",
                                        fontFamily: "Inter, sans-serif",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      in
                                    </Text>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </Link>
                        </td>
                        <td style={{ padding: "0 8px" }} className="mobile-social-item">
                          <Link href={instagramUrl}>
                            <div
                              style={{
                                width: "36px",
                                height: "36px",
                                backgroundColor: "#e4405f",
                                borderRadius: "6px",
                                display: "inline-block",
                              }}
                            >
                              <table
                                width="100%"
                                cellPadding="0"
                                cellSpacing="0"
                                style={{ borderCollapse: "collapse", height: "100%" }}
                              >
                                <tr>
                                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                    <Text
                                      style={{
                                        fontSize: "14px",
                                        color: "#ffffff",
                                        margin: "0",
                                        fontFamily: "Inter, sans-serif",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      ig
                                    </Text>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </Link>
                        </td>
                      </tr>
                    </table>

                    {/* Address */}
                    <Text
                      className="mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        margin: "0 0 10px 0",
                        color: "#374151",
                        fontWeight: "500",
                      }}
                    >
                      2301 Market Street #4627, San Francisco, CA 94114
                    </Text>

                    {/* Footer Links */}
                    <Text
                      className="mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        margin: "0 0 20px 0",
                        color: "#374151",
                        fontWeight: "500",
                      }}
                    >
                      <Link
                        href="#"
                        style={{
                          color: "#374151",
                          textDecoration: "none",
                        }}
                      >
                        Preferences
                      </Link>
                      {" | "}
                      <Link
                        href={unsubscribeUrl}
                        style={{
                          color: "#374151",
                          textDecoration: "none",
                        }}
                      >
                        Unsubscribe
                      </Link>
                      {" | "}
                      <Link
                        href="#"
                        style={{
                          color: "#374151",
                          textDecoration: "none",
                        }}
                      >
                        View in Browser
                      </Link>
                    </Text>

                    <Text
                      className="mobile-text-xs"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "12px",
                        lineHeight: "1.5",
                        margin: "0",
                        color: "#6b7280",
                      }}
                    >
                      © Unlayer 2022 - All rights reserved.
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

EmailMarketingEbook.PreviewProps = {
  customerName: "Valued Reader",
  downloadUrl: "https://example.com/download",
  unsubscribeUrl: "https://example.com/unsubscribe",
  privacyPolicyUrl: "https://example.com/privacy",
  websiteUrl: "https://example.com",
  facebookUrl: "https://facebook.com/example",
  twitterUrl: "https://twitter.com/example",
  linkedinUrl: "https://linkedin.com/company/example",
  instagramUrl: "https://instagram.com/example",
} satisfies EmailMarketingEbookProps
