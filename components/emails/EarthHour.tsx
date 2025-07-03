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

interface EarthHourEmailProps {
  logoUrl?: string;
  stayUpdatedUrl?: string;
  linkedinUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  twitterUrl?: string;
}

export default function EarthHour({
  logoUrl = "/placeholder.svg?height=30&width=100",
  stayUpdatedUrl = "#",
  linkedinUrl = "https://linkedin.com",
  facebookUrl = "https://facebook.com",
  instagramUrl = "https://instagram.com",
  twitterUrl = "https://twitter.com",
}: EarthHourEmailProps) {
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
          }
          
          table {
            border-collapse: collapse !important;
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
          }
          
          @media only screen and (max-width: 600px) {
            .email-container {
              width: 100% !important;
              max-width: 100% !important;
              margin: 0 !important;
            }
            
            .mobile-padding { 
              padding: 20px !important; 
            }
            
            .mobile-padding-sm { 
              padding: 15px !important; 
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
            
            .mobile-text-4xl { 
              font-size: 32px !important; 
            }
            
            .mobile-text-5xl { 
              font-size: 36px !important; 
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
            
            .mobile-button-full { 
              width: 90% !important; 
              max-width: 280px !important;
            }
            
            .mobile-table-full {
              width: 100% !important;
            }
            
            .mobile-section-padding {
              padding: 30px 20px !important;
            }
            
            .mobile-power-icon {
              width: 80px !important;
              height: 80px !important;
            }
          }
          
          @media only screen and (max-width: 480px) {
            .mobile-text-4xl {
              font-size: 28px !important;
            }
            
            .mobile-text-5xl {
              font-size: 32px !important;
            }
          }
        `}</style>
      </Head>
      <Preview>Earth Hour - Turn Off Your Light For Our Planet</Preview>
      <Tailwind>
        <Body
          className="bg-gray-100 m-0 p-0"
          style={{
            fontFamily: "Inter, sans-serif",
            margin: "0",
            padding: "0",
            width: "100%",
            minWidth: "100%",
            backgroundColor: "#f3f4f6",
          }}
        >
          <Container
            className="mx-auto email-container"
            style={{
              maxWidth: "600px",
              width: "100%",
              margin: "0 auto",
              backgroundColor: "#ffffff",
            }}
          >
            {/* Header Section - Earth Hour */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                    <img
                      src="https://cdn.templates.unlayer.com/assets/1664787504833-Earth-Hour-gif.gif"
                      alt=""
                      className="mobile-full-width"
                      style={{
                        width: "100%",
                        maxWidth: "600px",
                        height: "auto",
                      }}
                    />
                  </td>
                </tr>
              </table>
            </Section>

            {/* Main Event Details Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      backgroundColor: "#c84b31",
                      padding: "50px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                    <Text
                      className="m-0 mb-6 text-white mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "18px",
                        margin: "0 0 24px 0",
                        color: "#ffffff",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                      }}
                    >
                      "TURN OFF YOUR LIGHT FOR OUR PLANET"
                    </Text>

                    <Heading
                      className="m-0 mb-2 text-white mobile-text-5xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "55px",
                        lineHeight: "1",
                        margin: "0 0 8px 0",
                        color: "#ffffff",
                        fontWeight: "900",
                        letterSpacing: "2px",
                      }}
                    >
                      25 MARCH
                    </Heading>

                    <Heading
                      className="m-0 mb-6 text-white mobile-text-3xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "36px",
                        lineHeight: "1.1",
                        margin: "0 0 24px 0",
                        color: "#ffffff",
                        fontWeight: "700",
                      }}
                    >
                      8:30 PM
                    </Heading>

                    <Text
                      className="m-0 mb-8 text-white mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.5",
                        margin: "0 0 32px 0",
                        color: "#ffffff",
                      }}
                    >
                      Venue: 220 Market Street #467 San Francisco, CA
                      <br />
                      94114
                    </Text>

                    <div>
                      <Link
                        href={stayUpdatedUrl}
                        className="mobile-button-full"
                        style={{
                          backgroundColor: "#2d4263",
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
                        Stay Updated
                      </Link>
                    </div>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Power Button Icon Section */}
            <Section className="px-0 py-0">
              <img
                src="https://cdn.templates.unlayer.com/assets/1664787546928-Earth-Hour-2nd-gif.gif"
                alt=""
                className="mobile-full-width"
                style={{ width: "100%", maxWidth: "600px", height: "auto" }}
              />
            </Section>

            {/* Switch OFF Message Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      backgroundColor: "#2a2a2a",
                      padding: "40px 40px 60px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                    <Heading
                      className="m-0 mb-6 mobile-text-2xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "28px",
                        lineHeight: "1.2",
                        margin: "0 0 24px 0",
                        color: "#dc4a3d",
                        fontWeight: "700",
                      }}
                    >
                      Switch OFF Your Lights For An Hour
                    </Heading>

                    <Text
                      className="m-0 mb-8 text-white mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.6",
                        margin: "0 0 32px 0",
                        color: "#ffffff",
                        maxWidth: "450px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </Text>

                    <div>
                      <Link
                        href={stayUpdatedUrl}
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
                        Stay Updated
                      </Link>
                    </div>
                  </td>
                </tr>
              </table>
            </Section>

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
                    {/* Footer Content */}
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
                          className="mobile-center"
                        >
                          <Text
                            className="m-0 text-gray-900 mobile-text-base"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "18px",
                              fontWeight: "600",
                              margin: "0",
                              color: "#111827",
                            }}
                          >
                            [Your Logo]
                          </Text>
                        </td>
                        <td
                          style={{
                            width: "50%",
                            textAlign: "right",
                            verticalAlign: "middle",
                          }}
                          className="mobile-center"
                        >
                          {/* Social Media Icons */}
                          <table
                            cellPadding="0"
                            cellSpacing="0"
                            style={{
                              borderCollapse: "collapse",
                              margin: "0 0 0 auto",
                            }}
                            className="mobile-center"
                          >
                            <tr>
                              <td style={{ padding: "0 4px" }}>
                                <Link href={linkedinUrl}>
                                  <Img
                                    src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                                    alt="LinkedIn"
                                    width="28"
                                    height="28"
                                    style={{ display: "block" }}
                                  />
                                </Link>
                              </td>
                              <td style={{ padding: "0 4px" }}>
                                <Link href={facebookUrl}>
                                  <Img
                                    src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                                    alt="Facebook"
                                    width="28"
                                    height="28"
                                    style={{ display: "block" }}
                                  />
                                </Link>
                              </td>
                              <td style={{ padding: "0 4px" }}>
                                <Link href={instagramUrl}>
                                  <Img
                                    src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                                    alt="Instagram"
                                    width="28"
                                    height="28"
                                    style={{ display: "block" }}
                                  />
                                </Link>
                              </td>
                              <td style={{ padding: "0 4px" }}>
                                <Link href={twitterUrl}>
                                  <Img
                                    src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                                    alt="Twitter"
                                    width="28"
                                    height="28"
                                    style={{ display: "block" }}
                                  />
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
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

EarthHour.PreviewProps = {
  logoUrl: "/placeholder.svg?height=30&width=100",
  stayUpdatedUrl: "https://example.com/earth-hour-updates",
  linkedinUrl: "https://linkedin.com/company/example",
  facebookUrl: "https://facebook.com/example",
  instagramUrl: "https://instagram.com/example",
  twitterUrl: "https://twitter.com/example",
} satisfies EarthHourEmailProps;
