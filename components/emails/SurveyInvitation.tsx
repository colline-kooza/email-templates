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

interface SurveyInvitationEmailProps {
  customerName?: string
  surveyUrl?: string
  unsubscribeUrl?: string
  privacyPolicyUrl?: string
  websiteUrl?: string
  facebookUrl?: string
  twitterUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
  companyName?: string
  supportEmail?: string
}

export default function SurveyInvitation({
  customerName = "Customer",
  surveyUrl = "#",
  unsubscribeUrl = "#",
  privacyPolicyUrl = "#",
  websiteUrl = "#",
  facebookUrl = "https://facebook.com",
  twitterUrl = "https://twitter.com",
  linkedinUrl = "https://linkedin.com",
  instagramUrl = "https://instagram.com",
  companyName = "Company Name, LLC.",
  supportEmail = "support@company.com",
}: SurveyInvitationEmailProps) {
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
            
            .mobile-text-4xl { 
              font-size: 32px !important; 
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
              margin-bottom: 15px !important;
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
            
            .mobile-hero-padding {
              padding: 50px 20px !important;
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
            
            .mobile-text-4xl {
              font-size: 28px !important;
            }
          }
        `}</style>
      </Head>
      <Preview>📋 Be Heard - Take Part in Our Pulse Survey Now! Got a Minute?</Preview>
      <Tailwind>
        <Body
          className="bg-gray-100 m-0 p-0"
          style={{
            fontFamily: "Inter, sans-serif",
            margin: "0",
            padding: "20px 0",
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
              borderRadius: "0",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Hero Section with Survey Illustration */}
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
                      background: "linear-gradient(135deg, #a5b4fc 0%, #c7d2fe 100%)",
                      padding: "60px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-hero-padding"
                  >
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          {/* Survey Clipboard Illustration */}
                          <div style={{ marginBottom: "30px" }}>
                            <Img
                              src="https://cdn.templates.unlayer.com/assets/1672640418885-head.png"
                              alt="Clipboard with survey checklist and hand holding pen"
                              width="200"
                              height="150"
                              style={{
                                width: "200px",
                                height: "150px",
                                display: "block",
                                margin: "0 auto",
                              }}
                            />
                          </div>

                          {/* Main Headline */}
                          <Heading
                            className="m-0 text-gray-900 mobile-text-2xl"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "28px",
                              lineHeight: "1.3",
                              margin: "0",
                              color: "#1f2937",
                              fontWeight: "700",
                              textAlign: "center",
                            }}
                          >
                            Be Heard - Take Part in Our
                            <br />
                            Pulse Survey Now!
                          </Heading>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Main Content Section */}
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
                      textAlign: "left",
                    }}
                    className="mobile-section-padding"
                  >
                    <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                      <tr>
                        <td>
                          {/* Got a Minute? Headline */}
                          <Heading
                            className="m-0 mb-6 text-blue-600 mobile-text-2xl"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "28px",
                              lineHeight: "1.2",
                              margin: "0 0 24px 0",
                              color: "#2563eb",
                              fontWeight: "600",
                            }}
                          >
                            Got a Minute?
                          </Heading>

                          {/* First Paragraph */}
                          <Text
                            className="m-0 mb-6 text-gray-700 mobile-text-base"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              lineHeight: "1.6",
                              margin: "0 0 24px 0",
                              color: "#374151",
                            }}
                          >
                            Nam sodales sed nisi in posuere. Nulla sed nibh tincidunt, placerat nisl vel, tristique est.
                            In vel feugiat massa. In tempus commodo sagittis. Fusce a felis ut lorem pulvinar feugiat.
                          </Text>

                          {/* Second Paragraph */}
                          <Text
                            className="m-0 mb-8 text-gray-700 mobile-text-base"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              lineHeight: "1.6",
                              margin: "0 0 32px 0",
                              color: "#374151",
                            }}
                          >
                            Vivamus placerat tortor molestie, porttitor ex sit amet, rutrum mi. Suspendisse ultrices
                            viverra tristique. Morbi gravida quam quis massa pulvinar, id dictum lorem pellentesque.
                            Donec sit amet auctor dolor, efficitur facilisis lorem. Sed tempor nisi ut risus viverra et
                            molestie gravida.
                          </Text>

                          {/* Start Now Button */}
                          <div style={{ textAlign: "center" }}>
                            <Link
                              href={surveyUrl}
                              className="mobile-button-full"
                              style={{
                                backgroundColor: "#2563eb",
                                color: "#ffffff",
                                padding: "16px 40px",
                                textDecoration: "none",
                                borderRadius: "8px",
                                fontSize: "16px",
                                fontWeight: "600",
                                fontFamily: "Inter, sans-serif",
                                display: "inline-block",
                                letterSpacing: "0.5px",
                                boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)",
                              }}
                            >
                              Start Now
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Support Message Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{
                  borderCollapse: "collapse",
                  width: "100%",
                  backgroundColor: "#ffffff",
                  borderTop: "1px solid #e5e7eb",
                }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "30px 40px",
                      textAlign: "left",
                    }}
                    className="mobile-padding"
                  >
                    <Text
                      className="m-0 text-gray-600 mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        lineHeight: "1.6",
                        margin: "0",
                        color: "#6b7280",
                      }}
                    >
                      Just reply if you have any questions.
                      <br />
                      Thanks!
                      <br />
                      {companyName}
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Social Media Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{
                  borderCollapse: "collapse",
                  width: "100%",
                  backgroundColor: "#ffffff",
                  borderTop: "1px solid #e5e7eb",
                }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "30px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-padding"
                  >
                    {/* Social Media Icons */}
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", margin: "0 auto" }}
                      className="mobile-social-stack"
                    >
                      <tr className="mobile-social-stack">
                        <td style={{ padding: "0 8px" }} className="mobile-social-item">
                          <Link href={facebookUrl}>
                            <div
                              style={{
                                width: "36px",
                                height: "36px",
                                backgroundColor: "#1877f2",
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
                  </td>
                </tr>
              </table>
            </Section>

            {/* Footer Links Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{
                  borderCollapse: "collapse",
                  width: "100%",
                  backgroundColor: "#ffffff",
                  borderTop: "1px solid #e5e7eb",
                }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "20px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-padding-sm"
                  >
                    <Link
                      href={unsubscribeUrl}
                      style={{
                        color: "#6b7280",
                        textDecoration: "none",
                        fontSize: "12px",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "500",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                      className="mobile-text-xs"
                    >
                      UNSUBSCRIBE
                    </Link>
                    <Text
                      style={{
                        color: "#d1d5db",
                        fontSize: "12px",
                        margin: "0 15px",
                        display: "inline",
                      }}
                    >
                      |
                    </Text>
                    <Link
                      href={privacyPolicyUrl}
                      style={{
                        color: "#6b7280",
                        textDecoration: "none",
                        fontSize: "12px",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "500",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                      className="mobile-text-xs"
                    >
                      PRIVACY POLICY
                    </Link>
                    <Text
                      style={{
                        color: "#d1d5db",
                        fontSize: "12px",
                        margin: "0 15px",
                        display: "inline",
                      }}
                    >
                      |
                    </Text>
                    <Link
                      href={websiteUrl}
                      style={{
                        color: "#6b7280",
                        textDecoration: "none",
                        fontSize: "12px",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "500",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                      className="mobile-text-xs"
                    >
                      WEB
                    </Link>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Bottom Footer Text */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{
                  borderCollapse: "collapse",
                  width: "100%",
                  backgroundColor: "#ffffff",
                  borderTop: "1px solid #e5e7eb",
                }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "30px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-padding"
                  >
                    <Text
                      className="m-0 mb-4 text-gray-600 mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        lineHeight: "1.6",
                        margin: "0 0 16px 0",
                        color: "#6b7280",
                        textAlign: "center",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore.
                    </Text>

                    <Text
                      className="m-0 text-gray-500 mobile-text-xs"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "12px",
                        lineHeight: "1.6",
                        margin: "0",
                        color: "#9ca3af",
                        textAlign: "center",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore.
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

SurveyInvitation.PreviewProps = {
  customerName: "John Doe",
  surveyUrl: "https://example.com/survey",
  unsubscribeUrl: "https://example.com/unsubscribe",
  privacyPolicyUrl: "https://example.com/privacy",
  websiteUrl: "https://example.com",
  facebookUrl: "https://facebook.com/example",
  twitterUrl: "https://twitter.com/example",
  linkedinUrl: "https://linkedin.com/company/example",
  instagramUrl: "https://instagram.com/example",
  companyName: "Company Name, LLC.",
  supportEmail: "support@company.com",
} satisfies SurveyInvitationEmailProps
