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
} from "@react-email/components";

interface BusinessNewsletterEmailProps {
  companyName?: string;
  tutorialUrl?: string;
  viewMoreUrl?: string;
  unsubscribeUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  facebookUrl?: string;
  mediumUrl?: string;
  address?: string;
}

export default function BusinessNewsletterEmail({
  companyName = "B2B",
  tutorialUrl = "#",
  viewMoreUrl = "#",
  unsubscribeUrl = "#",
  instagramUrl = "https://instagram.com",
  linkedinUrl = "https://linkedin.com",
  facebookUrl = "https://facebook.com",
  mediumUrl = "https://medium.com",
  address = "2261 Market Street #4667 San Francisco, CA 94114",
}: BusinessNewsletterEmailProps) {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap');
          
          /* Reset styles for better email compatibility */
          * {
            box-sizing: border-box;
          }
          
          body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            min-width: 100% !important;
            -webkit-text-size-adjust: 100% !important;
            -ms-text-size-adjust: 100% !important;
          }
          
          table {
            border-collapse: collapse !important;
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
            width: 100% !important;
          }
          
          td {
            border-collapse: collapse !important;
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
          }
          
          img {
            border: 0 !important;
            height: auto !important;
            line-height: 100% !important;
            outline: none !important;
            text-decoration: none !important;
            -ms-interpolation-mode: bicubic !important;
            max-width: 100% !important;
          }
          
          /* Mobile-first responsive styles */
          @media only screen and (max-width: 640px) {
            .email-container {
              width: 100% !important;
              max-width: 100% !important;
            }
            
            .mobile-padding-lg { 
              padding: 30px 20px !important; 
            }
            
            .mobile-padding { 
              padding: 20px 15px !important; 
            }
            
            .mobile-padding-sm { 
              padding: 15px 10px !important; 
            }
            
            .mobile-text-xs { 
              font-size: 12px !important;
              line-height: 1.4 !important; 
            }
            
            .mobile-text-sm { 
              font-size: 14px !important;
              line-height: 1.5 !important; 
            }
            
            .mobile-text-base { 
              font-size: 16px !important;
              line-height: 1.6 !important; 
            }
            
            .mobile-text-lg { 
              font-size: 18px !important;
              line-height: 1.4 !important; 
            }
            
            .mobile-text-xl { 
              font-size: 20px !important;
              line-height: 1.3 !important; 
            }
            
            .mobile-text-2xl { 
              font-size: 22px !important;
              line-height: 1.3 !important; 
            }
            
            .mobile-text-3xl { 
              font-size: 26px !important;
              line-height: 1.2 !important; 
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
            
            .mobile-stack-td {
              display: block !important;
              width: 100% !important;
              padding: 0 !important;
            }
            
            .mobile-button { 
              width: auto !important;
              min-width: 200px !important;
              max-width: 280px !important;
              padding: 14px 24px !important;
            }
            
            .mobile-hero-img {
              width: 200px !important;
              height: auto !important;
            }
            
            .mobile-rocket {
              font-size: 80px !important;
            }
            
            .mobile-tip-icon {
              width: 40px !important;
              height: 40px !important;
            }
            
            .mobile-tip-emoji {
              font-size: 20px !important;
            }
            
            .mobile-social-container {
              text-align: center !important;
            }
            
            .mobile-social-icon {
              width: 28px !important;
              height: 28px !important;
            }
            
            .mobile-spacing-sm {
              height: 10px !important;
            }
            
            .mobile-spacing {
              height: 20px !important;
            }
            
            .mobile-spacing-lg {
              height: 30px !important;
            }
          }
          
          @media only screen and (max-width: 480px) {
            .mobile-text-2xl {
              font-size: 20px !important;
            }
            
            .mobile-text-3xl {
              font-size: 24px !important;
            }
            
            .mobile-button {
              min-width: 160px !important;
              padding: 12px 20px !important;
            }
          }
            @media only screen and (max-width: 600px) {
    .mobile-full-width {
      width: 100% !important;
      max-width: 100% !important;
      display: block !important;
      padding-right: 0 !important;
      padding-bottom: 20px !important;
    }
    
    .mobile-center {
      text-align: center !important;
    }
    
    /* Responsive font sizes */
    .mobile-title {
      font-size: 20px !important;
      line-height: 1.2 !important;
    }
    
    .mobile-text {
      font-size: 14px !important;
    }
    
    .mobile-rocket {
      font-size: 60px !important;
    }
    
    .mobile-button {
      padding: 10px 20px !important;
      font-size: 14px !important;
    }
  }
  
  @media only screen and (max-width: 480px) {
    .mobile-full-width {
      padding-left: 10px !important;
      padding-right: 10px !important;
    }
    
    .mobile-rocket {
      font-size: 50px !important;
    }
  }

          /* Outlook specific fixes */
          <!--[if mso]>
          <style type="text/css">
            .fallback-font {
              font-family: Arial, sans-serif !important;
            }
          </style>
          <![endif]-->
        `}</style>
      </Head>
      <Preview>
        Latest News from {companyName} - How to Design a Business Email
      </Preview>
      <Tailwind>
        <Body
          className="bg-gray-200 m-0 p-0 fallback-font"
          style={{
            fontFamily: "Inter, Arial, sans-serif",
            margin: "0",
            padding: "0",
            width: "100%",
            minWidth: "100%",
            backgroundColor: "#e5e7eb",
          }}
        >
          <table
            width="100%"
            cellPadding="0"
            cellSpacing="0"
            style={{
              borderCollapse: "collapse",
              margin: "0",
              padding: "0",
              backgroundColor: "#e5e7eb",
              width: "100%",
            }}
          >
            <tr>
              <td style={{ textAlign: "center", padding: "0" }}>
                <Container
                  className="email-container"
                  style={{
                    maxWidth: "600px",
                    width: "100%",
                    margin: "0 auto",
                    backgroundColor: "#ffffff",
                  }}
                >
                  {/* Header Section */}
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    style={{ borderCollapse: "collapse" }}
                  >
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#e5e7eb",
                          padding: "15px 30px",
                        }}
                        className="mobile-padding-sm"
                      >
                        <table
                          width="100%"
                          cellPadding="0"
                          cellSpacing="0"
                          style={{ borderCollapse: "collapse" }}
                        >
                          <tr>
                            <td
                              style={{
                                width: "50%",
                                textAlign: "left",
                                verticalAlign: "middle",
                              }}
                            >
                              <Text
                                className="m-0 text-gray-700 mobile-text-sm fallback-font"
                                style={{
                                  fontFamily: "Inter, Arial, sans-serif",
                                  fontSize: "14px",
                                  margin: "0",
                                  color: "#374151",
                                }}
                              >
                                Latest News from {companyName}
                              </Text>
                            </td>
                            <td
                              style={{
                                width: "50%",
                                textAlign: "right",
                                verticalAlign: "middle",
                              }}
                            >
                              <Link
                                href={unsubscribeUrl}
                                style={{
                                  fontFamily: "Inter, Arial, sans-serif",
                                  fontSize: "14px",
                                  color: "#374151",
                                  textDecoration: "underline",
                                }}
                                className="mobile-text-sm fallback-font"
                              >
                                No images? Click here
                              </Link>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  {/* Hero Section */}
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    style={{ borderCollapse: "collapse" }}
                  >
                    <tr>
                      <td
                        style={{
                          background:
                            "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)",
                          backgroundColor:
                            "#3b82f6" /* Fallback for older clients */,
                          padding: "50px 30px",
                          textAlign: "center",
                        }}
                        className="mobile-padding-lg"
                      >
                        {/* Hero Image */}
                        <table
                          width="100%"
                          cellPadding="0"
                          cellSpacing="0"
                          style={{ borderCollapse: "collapse" }}
                        >
                          <tr>
                            <td
                              style={{
                                textAlign: "center",
                                paddingBottom: "30px",
                              }}
                            >
                              <Img
                                src="https://cdn.templates.unlayer.com/assets/1661946271819-Vector%20Smart%20Object.png"
                                alt="Business Email Design"
                                width="250"
                                height="auto"
                                className="mobile-hero-img"
                                style={{
                                  display: "block",
                                  margin: "0 auto",
                                  maxWidth: "250px",
                                  height: "auto",
                                }}
                              />
                            </td>
                          </tr>
                        </table>

                        {/* Hero Title */}
                        <table
                          width="100%"
                          cellPadding="0"
                          cellSpacing="0"
                          style={{ borderCollapse: "collapse" }}
                        >
                          <tr>
                            <td
                              style={{
                                textAlign: "center",
                                paddingBottom: "20px",
                              }}
                            >
                              <Heading
                                className="m-0 text-white mobile-text-3xl fallback-font"
                                style={{
                                  fontFamily: "Poppins, Arial, sans-serif",
                                  fontSize: "28px",
                                  lineHeight: "1.2",
                                  margin: "0",
                                  color: "#ffffff",
                                  fontWeight: "700",
                                  textAlign: "center",
                                }}
                              >
                                How to Design a Business Email?
                              </Heading>
                            </td>
                          </tr>
                        </table>

                        {/* Hero Description */}
                        <table
                          width="100%"
                          cellPadding="0"
                          cellSpacing="0"
                          style={{ borderCollapse: "collapse" }}
                        >
                          <tr>
                            <td
                              style={{
                                textAlign: "center",
                                paddingBottom: "30px",
                              }}
                            >
                              <Text
                                className="m-0 text-white mobile-text-base fallback-font"
                                style={{
                                  fontFamily: "Inter, Arial, sans-serif",
                                  fontSize: "16px",
                                  lineHeight: "1.6",
                                  margin: "0",
                                  color: "#ffffff",
                                  opacity: "0.9",
                                  textAlign: "center",
                                }}
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                              </Text>
                            </td>
                          </tr>
                        </table>

                        {/* CTA Button */}
                        <table
                          width="100%"
                          cellPadding="0"
                          cellSpacing="0"
                          style={{ borderCollapse: "collapse" }}
                        >
                          <tr>
                            <td style={{ textAlign: "center" }}>
                              <table
                                cellPadding="0"
                                cellSpacing="0"
                                style={{
                                  borderCollapse: "collapse",
                                  margin: "0 auto",
                                }}
                              >
                                <tr>
                                  <td
                                    style={{
                                      backgroundColor: "#000000",
                                      borderRadius: "25px",
                                      textAlign: "center",
                                    }}
                                  >
                                    <Link
                                      href={tutorialUrl}
                                      className="mobile-button fallback-font"
                                      style={{
                                        backgroundColor: "#000000",
                                        color: "#ffffff",
                                        padding: "14px 32px",
                                        textDecoration: "none",
                                        borderRadius: "25px",
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        fontFamily: "Inter, Arial, sans-serif",
                                        display: "inline-block",
                                        textAlign: "center",
                                      }}
                                    >
                                      Watch Tutorial
                                    </Link>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    style={{ borderCollapse: "collapse" }}
                  >
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#1e3a8a",
                          padding: "40px 20px",
                        }}
                      >
                        {/* Container for max-width */}
                        <table
                          width="100%"
                          cellPadding="0"
                          cellSpacing="0"
                          style={{
                            borderCollapse: "collapse",
                            maxWidth: "600px",
                            margin: "0 auto",
                          }}
                        >
                          <tr>
                            <td>
                              {/* Two Column Layout */}
                              <table
                                width="100%"
                                cellPadding="0"
                                cellSpacing="0"
                                style={{ borderCollapse: "collapse" }}
                              >
                                <tr>
                                  {/* Content Column */}
                                  <td
                                    style={{
                                      width: "100%",
                                      maxWidth: "360px",
                                      verticalAlign: "top",
                                      paddingRight: "20px",
                                      paddingBottom: "30px",
                                    }}
                                    className="mobile-full-width"
                                  >
                                    {/* Title */}
                                    <table
                                      width="100%"
                                      cellPadding="0"
                                      cellSpacing="0"
                                      style={{ borderCollapse: "collapse" }}
                                    >
                                      <tr>
                                        <td style={{ paddingBottom: "15px" }}>
                                          <Heading
                                            style={{
                                              fontFamily:
                                                "Poppins, Arial, sans-serif",
                                              fontSize: "22px",
                                              lineHeight: "1.3",
                                              margin: "0",
                                              color: "#ffffff",
                                              fontWeight: "700",
                                            }}
                                          >
                                            3 best practices to boost your
                                            business using this tool
                                          </Heading>
                                        </td>
                                      </tr>
                                    </table>

                                    {/* Description */}
                                    <table
                                      width="100%"
                                      cellPadding="0"
                                      cellSpacing="0"
                                      style={{ borderCollapse: "collapse" }}
                                    >
                                      <tr>
                                        <td style={{ paddingBottom: "20px" }}>
                                          <Text
                                            style={{
                                              fontFamily:
                                                "Inter, Arial, sans-serif",
                                              fontSize: "14px",
                                              lineHeight: "1.5",
                                              margin: "0",
                                              color: "#ffffff",
                                              opacity: "0.9",
                                            }}
                                          >
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut
                                          </Text>
                                        </td>
                                      </tr>
                                    </table>

                                    {/* CTA Button */}
                                    <table
                                      width="100%"
                                      cellPadding="0"
                                      cellSpacing="0"
                                      style={{ borderCollapse: "collapse" }}
                                    >
                                      <tr>
                                        <td>
                                          <table
                                            cellPadding="0"
                                            cellSpacing="0"
                                            style={{
                                              borderCollapse: "collapse",
                                            }}
                                          >
                                            <tr>
                                              <td
                                                style={{
                                                  backgroundColor: "#ffffff",
                                                  borderRadius: "25px",
                                                }}
                                              >
                                                <Link
                                                  href={viewMoreUrl}
                                                  style={{
                                                    backgroundColor: "#ffffff",
                                                    color: "#1e3a8a",
                                                    padding: "12px 24px",
                                                    textDecoration: "none",
                                                    borderRadius: "25px",
                                                    fontSize: "14px",
                                                    fontWeight: "600",
                                                    fontFamily:
                                                      "Inter, Arial, sans-serif",
                                                    display: "inline-block",
                                                    border: "2px solid #ffffff",
                                                  }}
                                                >
                                                  View More
                                                </Link>
                                              </td>
                                            </tr>
                                          </table>

                                          {/* Fallback button for Outlook */}
                                          {/*[if mso]>
                        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href={viewMoreUrl} style="height:40px;v-text-anchor:middle;width:120px;" arcsize="50%" stroke="f" fillcolor="#ffffff">
                          <w:anchorlock/>
                          <center style="color:#1e3a8a;font-family:Inter,Arial,sans-serif;font-size:14px;font-weight:600;">View More</center>
                        </v:roundrect>
                        <![endif]*/}
                                        </td>
                                      </tr>
                                    </table>
                                  </td>

                                  {/* Rocket Column */}
                                  <td
                                    style={{
                                      width: "100%",
                                      maxWidth: "200px",
                                      verticalAlign: "top",
                                    }}
                                    className="mobile-full-width mobile-center"
                                  >
                                    <table
                                      width="100%"
                                      cellPadding="0"
                                      cellSpacing="0"
                                      style={{ borderCollapse: "collapse" }}
                                    >
                                      <tr>
                                        <td
                                          style={{
                                            textAlign: "center",
                                            paddingTop: "10px",
                                          }}
                                        >
                                          <Text
                                            style={{
                                              fontSize: "80px",
                                              margin: "0",
                                              color: "#ffffff",
                                              lineHeight: "1",
                                              fontFamily: "Arial, sans-serif",
                                            }}
                                          >
                                            🚀
                                          </Text>
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

                  {/* Tips Section */}
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    style={{ borderCollapse: "collapse" }}
                  >
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#e5e7eb",
                          padding: "50px 30px",
                        }}
                        className="mobile-padding-lg"
                      >
                        {/* Section Title */}
                        <table
                          width="100%"
                          cellPadding="0"
                          cellSpacing="0"
                          style={{ borderCollapse: "collapse" }}
                        >
                          <tr>
                            <td
                              style={{
                                textAlign: "center",
                                paddingBottom: "40px",
                              }}
                            >
                              <Heading
                                className="m-0 text-gray-900 mobile-text-2xl fallback-font"
                                style={{
                                  fontFamily: "Poppins, Arial, sans-serif",
                                  fontSize: "24px",
                                  lineHeight: "1.2",
                                  margin: "0",
                                  color: "#111827",
                                  fontWeight: "600",
                                  textAlign: "center",
                                }}
                              >
                                Let's Wrap Up With Some More Tips:
                              </Heading>
                            </td>
                          </tr>
                        </table>

                        {/* Tip 1 */}
                        <table
                          width="100%"
                          cellPadding="0"
                          cellSpacing="0"
                          style={{
                            borderCollapse: "collapse",
                            paddingBottom: "30px",
                          }}
                        >
                          <tr>
                            <td
                              style={{
                                width: "70px",
                                textAlign: "center",
                                verticalAlign: "top",
                                paddingRight: "20px",
                              }}
                            >
                              <table
                                cellPadding="0"
                                cellSpacing="0"
                                style={{
                                  borderCollapse: "collapse",
                                  width: "50px",
                                  height: "50px",
                                  backgroundColor: "#fbbf24",
                                  borderRadius: "50px",
                                }}
                                className="mobile-tip-icon"
                              >
                                <tr>
                                  <td
                                    style={{
                                      textAlign: "center",
                                      verticalAlign: "middle",
                                    }}
                                  >
                                    <Text
                                      style={{
                                        fontSize: "24px",
                                        color: "#ffffff",
                                        margin: "0",
                                        fontFamily: "Inter, Arial, sans-serif",
                                        textAlign: "center",
                                      }}
                                      className="mobile-tip-emoji"
                                    >
                                      💡
                                    </Text>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td style={{ verticalAlign: "top" }}>
                              <table
                                width="100%"
                                cellPadding="0"
                                cellSpacing="0"
                                style={{ borderCollapse: "collapse" }}
                              >
                                <tr>
                                  <td style={{ paddingBottom: "10px" }}>
                                    <Heading
                                      className="m-0 text-gray-900 mobile-text-lg fallback-font"
                                      style={{
                                        fontFamily:
                                          "Poppins, Arial, sans-serif",
                                        fontSize: "18px",
                                        margin: "0",
                                        color: "#111827",
                                        fontWeight: "600",
                                        textAlign: "left",
                                      }}
                                    >
                                      Lorem ipsum dolor sit amet,
                                    </Heading>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Text
                                      className="m-0 text-gray-700 mobile-text-sm fallback-font"
                                      style={{
                                        fontFamily: "Inter, Arial, sans-serif",
                                        fontSize: "14px",
                                        lineHeight: "1.6",
                                        margin: "0",
                                        color: "#374151",
                                        textAlign: "left",
                                      }}
                                    >
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna
                                      aliqua. Ut enim ad minim veniam, quis
                                      nostrud exercitation ullamco laboris nisi
                                      ut aliquip ex ea commodo consequat.
                                    </Text>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        {/* Tip 2 */}
                        <table
                          width="100%"
                          cellPadding="0"
                          cellSpacing="0"
                          style={{
                            borderCollapse: "collapse",
                            paddingBottom: "30px",
                          }}
                        >
                          <tr>
                            <td
                              style={{
                                width: "70px",
                                textAlign: "center",
                                verticalAlign: "top",
                                paddingRight: "20px",
                              }}
                            >
                              <table
                                cellPadding="0"
                                cellSpacing="0"
                                style={{
                                  borderCollapse: "collapse",
                                  width: "50px",
                                  height: "50px",
                                  backgroundColor: "#10b981",
                                  borderRadius: "50px",
                                }}
                                className="mobile-tip-icon"
                              >
                                <tr>
                                  <td
                                    style={{
                                      textAlign: "center",
                                      verticalAlign: "middle",
                                    }}
                                  >
                                    <Text
                                      style={{
                                        fontSize: "24px",
                                        color: "#ffffff",
                                        margin: "0",
                                        fontFamily: "Inter, Arial, sans-serif",
                                        textAlign: "center",
                                      }}
                                      className="mobile-tip-emoji"
                                    >
                                      🧪
                                    </Text>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td style={{ verticalAlign: "top" }}>
                              <table
                                width="100%"
                                cellPadding="0"
                                cellSpacing="0"
                                style={{ borderCollapse: "collapse" }}
                              >
                                <tr>
                                  <td style={{ paddingBottom: "10px" }}>
                                    <Heading
                                      className="m-0 text-gray-900 mobile-text-lg fallback-font"
                                      style={{
                                        fontFamily:
                                          "Poppins, Arial, sans-serif",
                                        fontSize: "18px",
                                        margin: "0",
                                        color: "#111827",
                                        fontWeight: "600",
                                        textAlign: "left",
                                      }}
                                    >
                                      Lorem ipsum dolor sit amet,
                                    </Heading>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Text
                                      className="m-0 text-gray-700 mobile-text-sm fallback-font"
                                      style={{
                                        fontFamily: "Inter, Arial, sans-serif",
                                        fontSize: "14px",
                                        lineHeight: "1.6",
                                        margin: "0",
                                        color: "#374151",
                                        textAlign: "left",
                                      }}
                                    >
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna
                                      aliqua. Ut enim ad minim veniam, quis
                                      nostrud exercitation ullamco laboris nisi
                                      ut aliquip ex ea commodo consequat.
                                    </Text>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        {/* Tip 3 */}
                        <table
                          width="100%"
                          cellPadding="0"
                          cellSpacing="0"
                          style={{ borderCollapse: "collapse" }}
                        >
                          <tr>
                            <td
                              style={{
                                width: "70px",
                                textAlign: "center",
                                verticalAlign: "top",
                                paddingRight: "20px",
                              }}
                            >
                              <table
                                cellPadding="0"
                                cellSpacing="0"
                                style={{
                                  borderCollapse: "collapse",
                                  width: "50px",
                                  height: "50px",
                                  backgroundColor: "#ef4444",
                                  borderRadius: "50px",
                                }}
                                className="mobile-tip-icon"
                              >
                                <tr>
                                  <td
                                    style={{
                                      textAlign: "center",
                                      verticalAlign: "middle",
                                    }}
                                  >
                                    <Text
                                      style={{
                                        fontSize: "24px",
                                        color: "#ffffff",
                                        margin: "0",
                                        fontFamily: "Inter, Arial, sans-serif",
                                        textAlign: "center",
                                      }}
                                      className="mobile-tip-emoji"
                                    >
                                      🎯
                                    </Text>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td style={{ verticalAlign: "top" }}>
                              <table
                                width="100%"
                                cellPadding="0"
                                cellSpacing="0"
                                style={{ borderCollapse: "collapse" }}
                              >
                                <tr>
                                  <td style={{ paddingBottom: "10px" }}>
                                    <Heading
                                      className="m-0 text-gray-900 mobile-text-lg fallback-font"
                                      style={{
                                        fontFamily:
                                          "Poppins, Arial, sans-serif",
                                        fontSize: "18px",
                                        margin: "0",
                                        color: "#111827",
                                        fontWeight: "600",
                                        textAlign: "left",
                                      }}
                                    >
                                      Lorem ipsum dolor sit amet,
                                    </Heading>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Text
                                      className="m-0 text-gray-700 mobile-text-sm fallback-font"
                                      style={{
                                        fontFamily: "Inter, Arial, sans-serif",
                                        fontSize: "14px",
                                        lineHeight: "1.6",
                                        margin: "0",
                                        color: "#374151",
                                        textAlign: "left",
                                      }}
                                    >
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna
                                      aliqua. Ut enim ad minim veniam, quis
                                      nostrud exercitation ullamco laboris nisi
                                      ut aliquip ex ea commodo consequat.
                                    </Text>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  {/* Footer Section */}
                  <Section className="px-0 py-0 bg-white">
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", width: "100%" }}
                      className="mobile-table-full"
                    >
                      <tr>
                        <td
                          className="mobile-section-padding"
                          style={{
                            padding: "40px",
                            textAlign: "center",
                            width: "100%",
                          }}
                        >
                          <Heading
                            className="m-0 mb-4 font-semibold text-gray-900 mobile-text-lg"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "20px",
                              margin: "0 0 16px 0",
                              color: "#111827",
                            }}
                          >
                            Thanks for the support! 😊
                          </Heading>

                          <Text
                            className="m-0 mb-6 text-gray-600 mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              lineHeight: "1.6",
                              maxWidth: "400px",
                              margin: "0 auto 24px auto",
                              color: "#4b5563",
                            }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore.
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptate accusantium et quasi.
                          </Text>

                          {/* Social Media Icons */}
                          <table
                            cellPadding="0"
                            cellSpacing="0"
                            style={{
                              borderCollapse: "collapse",
                              margin: "0 auto 20px auto",
                            }}
                          >
                            <tr>
                              <td style={{ padding: "0 8px" }}>
                                <Link href={facebookUrl}>
                                  <Img
                                    src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                                    alt="Facebook"
                                    width="32"
                                    height="32"
                                    style={{ display: "block" }}
                                  />
                                </Link>
                              </td>
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
                                <Link href={linkedinUrl}>
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
                                <Link href={instagramUrl}>
                                  <Img
                                    src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                                    alt="Instagram"
                                    width="32"
                                    height="32"
                                    style={{ display: "block" }}
                                  />
                                </Link>
                              </td>
                            </tr>
                          </table>

                          {/* Footer Links and Logo */}
                          <table
                            width="100%"
                            cellPadding="0"
                            cellSpacing="0"
                            style={{ borderCollapse: "collapse" }}
                          >
                            <tr>
                              <td
                                style={{
                                  width: "70%",
                                  textAlign: "left",
                                  verticalAlign: "middle",
                                }}
                                className="mobile-center"
                              >
                                <Text
                                  className="m-0 text-gray-500 mobile-text-xs"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "14px",
                                    lineHeight: "1.5",
                                    color: "#6b7280",
                                  }}
                                >
                                  <Link
                                    href={unsubscribeUrl}
                                    style={{
                                      color: "#6b7280",
                                      textDecoration: "none",
                                    }}
                                  >
                                    UNSUBSCRIBE
                                  </Link>{" "}
                                  |{" "}
                                  <Link
                                    href=""
                                    style={{
                                      color: "#6b7280",
                                      textDecoration: "none",
                                    }}
                                  >
                                    PRIVACY POLICY
                                  </Link>{" "}
                                  |{" "}
                                  <Link
                                    href=""
                                    style={{
                                      color: "#6b7280",
                                      textDecoration: "none",
                                    }}
                                  >
                                    WEB
                                  </Link>
                                </Text>
                              </td>
                              <td
                                style={{
                                  width: "30%",
                                  textAlign: "right",
                                  verticalAlign: "middle",
                                }}
                                className="mobile-center"
                              >
                                <Text
                                  className="m-0 text-gray-900 mobile-text-base"
                                  style={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontSize: "16px",
                                    fontWeight: "600",
                                    marginTop: "10px",
                                    color: "#111827",
                                  }}
                                >
                                  [Your Logo]
                                </Text>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </Section>
                </Container>
              </td>
            </tr>
          </table>
        </Body>
      </Tailwind>
    </Html>
  );
}
