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

interface UnlayerEmailProps {
  customerName?: string
  videoUrl?: string
  contactUrl?: string
  unsubscribeUrl?: string
  privacyPolicyUrl?: string
  websiteUrl?: string
  facebookUrl?: string
  twitterUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
}

export default function UnlayerEmail({
  customerName = "Valued Customer",
  videoUrl = "#",
  contactUrl = "#",
  unsubscribeUrl = "#",
  privacyPolicyUrl = "#",
  websiteUrl = "#",
  facebookUrl = "https://facebook.com",
  twitterUrl = "https://twitter.com",
  linkedinUrl = "https://linkedin.com",
  instagramUrl = "https://instagram.com",
}: UnlayerEmailProps) {
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
      <Preview>✈️ Hi! Welcome to Unlayer - Discover what makes us unique</Preview>
      <Tailwind>
        <Body
          className="bg-gray-100 m-0 p-0"
          style={{
            fontFamily: "Inter, sans-serif",
            margin: "0",
            padding: "20px 0",
            width: "100%",
            minWidth: "100%",
            backgroundColor: "#e5e7eb",
          }}
        >
          <Container
            className="mx-auto email-container"
            style={{
              maxWidth: "600px",
              width: "100%",
              margin: "0 auto",
              backgroundColor: "#ffffff",
              borderRadius: "0",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Header with Airplane */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#ffffff" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "60px 40px 40px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                 

                    <Text
                      className="mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        margin: "0 0 16px 0",
                        color: "#6b7280",
                        fontWeight: "400",
                      }}
                    >
                      Hi! Welcome to
                    </Text>

                    <Heading
                      className="mobile-text-3xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "36px",
                        lineHeight: "1.2",
                        margin: "0 0 30px 0",
                        color: "#1e40af",
                        fontWeight: "700",
                      }}
                    >
                      Unlayer
                    </Heading>

                    {/* Airplane SVG */}
                    <div style={{ marginBottom: "20px" }}>
                     <img src="https://cdn.templates.unlayer.com/assets/1687513380577-72803-airplane-logistics.gif" alt=""
                     className="" style={{ width: "500px", height: "auto" , margin: "0 auto", display: "block" }}    
                     />
                    </div>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Hero Video Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%" }}
                className="mobile-table-full"
              >
                <tr>
                  <td style={{ padding: "0 40px", textAlign: "center" }} className="mobile-padding-sm">
                    <Link href={videoUrl}>
                      <div style={{ position: "relative", display: "inline-block" }}>
                        <Img
                          src="https://cdn.templates.unlayer.com/assets/1687514167870-Group%2020.png"
                          alt="Digital technology workspace with laptop and interface elements"
                          width="520"
                          height="300"
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                            maxWidth: "520px",
                            // borderRadius: "8px",
                          }}
                        />
                     
                      </div>
                    </Link>
                  </td>
                </tr>
              </table>
            </Section>

            {/* What Makes Us Unique */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#ffffff" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "40px",
                    }}
                    className="mobile-padding"
                  >
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                      <tr className="mobile-stack">
                        <td
                          style={{ width: "40%", verticalAlign: "top", paddingRight: "30px" }}
                          className="mobile-stack-item"
                        >
                          <Heading
                            className="mobile-text-xl"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "22px",
                              lineHeight: "1.3",
                              margin: "0 0 20px 0",
                              color: "#111827",
                              fontWeight: "600",
                            }}
                          >
                            What Makes Us
                           
                            Unique
                          </Heading>
                             <Text
                            className="mobile-text-base"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              lineHeight: "1.6",
                              margin: "0",
                              color: "#6b7280",
                            }}
                          >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has
                            been the industry's standard dummy text ever since the 1500s. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia deserunt mollit anim id est laborum.
                          </Text>
                        </td>
                       
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Challenges vs Solutions */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#f9fafb" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "50px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                    <Text
                      className="mobile-text-lg"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "18px",
                        lineHeight: "1.5",
                        margin: "0 0 40px 0",
                        color: "#374151",
                        maxWidth: "500px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      Many of our clients have experienced the following with their merchant providers. Can you relate?
                      At Unlayer, we get it.
                    </Text>

                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                      <tr className="mobile-stack">
                        {/* Your Challenges */}
                        <td
                          style={{ width: "50%", verticalAlign: "top", paddingRight: "20px" }}
                          className="mobile-stack-item"
                        >
                          <Heading
                            className="mobile-text-lg"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "20px",
                              lineHeight: "1.3",
                              margin: "0 0 20px 0",
                              color: "#111827",
                              fontWeight: "600",
                              textAlign: "center",
                            }}
                          >
                            Your Challenges
                          </Heading>

                          <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                            <tr>
                              <td style={{ paddingBottom: "12px", verticalAlign: "top", width: "20px" }}>
                                <div
                                  style={{
                                    width: "6px",
                                    height: "6px",
                                    backgroundColor: "#374151",
                                    borderRadius: "50%",
                                    marginTop: "8px",
                                  }}
                                ></div>
                              </td>
                              <td style={{ paddingBottom: "12px", paddingLeft: "12px" }}>
                                <Text
                                  className="mobile-text-sm"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "14px",
                                    lineHeight: "1.5",
                                    margin: "0",
                                    color: "#374151",
                                  }}
                                >
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                </Text>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ paddingBottom: "12px", verticalAlign: "top", width: "20px" }}>
                                <div
                                  style={{
                                    width: "6px",
                                    height: "6px",
                                    backgroundColor: "#374151",
                                    borderRadius: "50%",
                                    marginTop: "8px",
                                  }}
                                ></div>
                              </td>
                              <td style={{ paddingBottom: "12px", paddingLeft: "12px" }}>
                                <Text
                                  className="mobile-text-sm"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "14px",
                                    lineHeight: "1.5",
                                    margin: "0",
                                    color: "#374151",
                                  }}
                                >
                                  Sed do eiusmod tempor incididunt ut labore et dolore
                                </Text>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ paddingBottom: "12px", verticalAlign: "top", width: "20px" }}>
                                <div
                                  style={{
                                    width: "6px",
                                    height: "6px",
                                    backgroundColor: "#374151",
                                    borderRadius: "50%",
                                    marginTop: "8px",
                                  }}
                                ></div>
                              </td>
                              <td style={{ paddingBottom: "12px", paddingLeft: "12px" }}>
                                <Text
                                  className="mobile-text-sm"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "14px",
                                    lineHeight: "1.5",
                                    margin: "0",
                                    color: "#374151",
                                  }}
                                >
                                  Magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                </Text>
                              </td>
                            </tr>
                          </table>
                        </td>

                        {/* Our Solutions */}
                        <td
                          style={{ width: "50%", verticalAlign: "top", paddingLeft: "20px" }}
                          className="mobile-stack-item"
                        >
                          <Heading
                            className="mobile-text-lg"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "20px",
                              lineHeight: "1.3",
                              margin: "0 0 20px 0",
                              color: "#111827",
                              fontWeight: "600",
                              textAlign: "center",
                            }}
                          >
                            Our Solutions
                          </Heading>

                          <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                            <tr>
                              <td style={{ paddingBottom: "12px", verticalAlign: "top", width: "20px" }}>
                                <div
                                  style={{
                                    width: "6px",
                                    height: "6px",
                                    backgroundColor: "#374151",
                                    borderRadius: "50%",
                                    marginTop: "8px",
                                  }}
                                ></div>
                              </td>
                              <td style={{ paddingBottom: "12px", paddingLeft: "12px" }}>
                                <Text
                                  className="mobile-text-sm"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "14px",
                                    lineHeight: "1.5",
                                    margin: "0",
                                    color: "#374151",
                                  }}
                                >
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                </Text>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ paddingBottom: "12px", verticalAlign: "top", width: "20px" }}>
                                <div
                                  style={{
                                    width: "6px",
                                    height: "6px",
                                    backgroundColor: "#374151",
                                    borderRadius: "50%",
                                    marginTop: "8px",
                                  }}
                                ></div>
                              </td>
                              <td style={{ paddingBottom: "12px", paddingLeft: "12px" }}>
                                <Text
                                  className="mobile-text-sm"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "14px",
                                    lineHeight: "1.5",
                                    margin: "0",
                                    color: "#374151",
                                  }}
                                >
                                  Sed do eiusmod tempor incididunt ut labore et dolore
                                </Text>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ paddingBottom: "12px", verticalAlign: "top", width: "20px" }}>
                                <div
                                  style={{
                                    width: "6px",
                                    height: "6px",
                                    backgroundColor: "#374151",
                                    borderRadius: "50%",
                                    marginTop: "8px",
                                  }}
                                ></div>
                              </td>
                              <td style={{ paddingBottom: "12px", paddingLeft: "12px" }}>
                                <Text
                                  className="mobile-text-sm"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "14px",
                                    lineHeight: "1.5",
                                    margin: "0",
                                    color: "#374151",
                                  }}
                                >
                                  Magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse
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
            </Section>

            {/* CTA Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#ffffff" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "50px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                    <Heading
                      className="mobile-text-2xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "28px",
                        lineHeight: "1.3",
                        margin: "0 0 20px 0",
                        color: "#111827",
                        fontWeight: "600",
                      }}
                    >
                      Can't Find Your Answer?
                    </Heading>

                    <Text
                      className="mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.6",
                        margin: "0 0 30px 0",
                        color: "#6b7280",
                        maxWidth: "400px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur.
                    </Text>

                    <Link
                      href={contactUrl}
                      className="mobile-button-full"
                      style={{
                        backgroundColor: "#1e40af",
                        color: "#ffffff",
                        padding: "14px 32px",
                        textDecoration: "none",
                        borderRadius: "6px",
                        fontSize: "16px",
                        fontWeight: "600",
                        fontFamily: "Inter, sans-serif",
                        display: "inline-block",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Contact Us
                    </Link>
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
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#1e40af" }}
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

                    {/* Footer Links */}
                    <Text
                      className="mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        margin: "0 0 20px 0",
                        color: "#ffffff",
                        fontWeight: "500",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                      }}
                    >
                      <Link
                        href={unsubscribeUrl}
                        style={{
                          color: "#ffffff",
                          textDecoration: "none",
                        }}
                      >
                        UNSUBSCRIBE
                      </Link>
                      {" | "}
                      <Link
                        href={privacyPolicyUrl}
                        style={{
                          color: "#ffffff",
                          textDecoration: "none",
                        }}
                      >
                        PRIVACY POLICY
                      </Link>
                      {" | "}
                      <Link
                        href={websiteUrl}
                        style={{
                          color: "#ffffff",
                          textDecoration: "none",
                        }}
                      >
                        WEB
                      </Link>
                    </Text>

                    <Text
                      className="mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        lineHeight: "1.6",
                        margin: "0",
                        color: "#bfdbfe",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore
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

UnlayerEmail.PreviewProps = {
  customerName: "Valued Customer",
  videoUrl: "https://example.com/video",
  contactUrl: "https://example.com/contact",
  unsubscribeUrl: "https://example.com/unsubscribe",
  privacyPolicyUrl: "https://example.com/privacy",
  websiteUrl: "https://example.com",
  facebookUrl: "https://facebook.com/example",
  twitterUrl: "https://twitter.com/example",
  linkedinUrl: "https://linkedin.com/company/example",
  instagramUrl: "https://instagram.com/example",
} satisfies UnlayerEmailProps
