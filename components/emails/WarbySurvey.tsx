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

interface WarbySurveyEmailProps {
  companyName?: string
  customerName?: string
  surveyUrl?: string
  giftCardAmount?: number
  winnerDate?: string
  contactEmail?: string
  contactPhone?: string
  address?: string
  twitterUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
  vimeoUrl?: string
  termsUrl?: string
  privacyUrl?: string
}

export default function WarbySurvey({
  companyName = "WARBY PACKAGE",
  customerName = "Valued Customer",
  surveyUrl = "#",
  giftCardAmount = 100,
  winnerDate = "Tuesday (13/1)",
  contactEmail = "support@email.com",
  contactPhone = "123-456-7890",
  address = "San Francisco, CA, United States",
  twitterUrl = "https://twitter.com",
  linkedinUrl = "https://linkedin.com",
  instagramUrl = "https://instagram.com",
  vimeoUrl = "https://vimeo.com",
  termsUrl = "#",
  privacyUrl = "#",
}: WarbySurveyEmailProps) {
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
          
          /* Improved mobile responsive styles */
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
            
            .mobile-section-padding {
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
            
            .mobile-table-full {
              width: 100% !important;
            }
            
            .mobile-hero-illustration {
              width: 200px !important;
              height: 200px !important;
            }
            
            /* Improved grid responsiveness */
            .mobile-stack {
              display: block !important;
              width: 100% !important;
            }
            
            .mobile-stack tr {
              display: block !important;
              width: 100% !important;
            }
            
            .mobile-stack td {
              display: block !important;
              width: 100% !important;
              padding: 0 !important;
              margin-bottom: 20px !important;
            }
            
            .survey-card {
              width: 100% !important;
              margin: 0 0 20px 0 !important;
              padding: 20px !important;
            }
            
            .survey-grid {
              padding: 20px !important;
            }
            
            .survey-question-title {
              font-size: 16px !important;
              line-height: 1.3 !important;
            }
            
            .survey-question-list {
              font-size: 13px !important;
            }
            
            .survey-button {
              width: 100% !important;
              max-width: 200px !important;
              margin: 0 auto !important;
              display: block !important;
              text-align: center !important;
            }
          }
          
          @media only screen and (max-width: 480px) {
            .mobile-text-2xl {
              font-size: 20px !important;
            }
            
            .mobile-text-3xl {
              font-size: 24px !important;
            }
            
            .mobile-hero-illustration {
              width: 180px !important;
              height: 180px !important;
            }
            
            .survey-card {
              padding: 15px !important;
            }
            
            .survey-grid {
              padding: 15px !important;
            }
          }
        `}</style>
      </Head>
      <Preview>{`A great big thank you! Complete our survey for a chance to win a $${giftCardAmount} gift card`}</Preview>
      <Tailwind>
        <Body
          className="m-0 p-0"
          style={{
            fontFamily: "Inter, sans-serif",
            margin: "0",
            padding: "0",
            width: "100%",
            minWidth: "100%",
            backgroundColor: "#7c9a3c",
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
                  {/* Header Section */}
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
                      backgroundColor: "#ffffff",
                      padding: "30px 40px 20px 40px",
                      borderBottom: "2px dashed #7c9a3c",
                    }}
                    className="mobile-padding-sm"
                  >
                    <Text
                      className="m-0 text-gray-900 mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        margin: "0",
                        color: "#111827",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      COMPANY
                      <br />
                      LOGO
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Brand Name Section */}
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
                      backgroundColor: "#ffffff",
                      padding: "30px 40px 20px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-padding-sm"
                  >
                    <Heading
                      className="m-0 text-gray-700 mobile-text-xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "24px",
                        margin: "0",
                        color: "#374151",
                        fontWeight: "600",
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                      }}
                    >
                      {companyName}
                    </Heading>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Hero Illustration Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%" }}
                className="mobile-table-full"
              >
                <tr>
                  <td style={{ textAlign: "center", padding: "20px 0" }}>
                    <img 
                      src="https://cdn.templates.unlayer.com/assets/1623502875119-sss.png" 
                      alt="Survey illustration"
                      style={{
                        width: "300px",
                        height: "300px",
                        maxWidth: "100%",
                        objectFit: "contain",
                        display: "block",
                        margin: "0 auto",
                      }}
                      className="mobile-hero-illustration"
                    />
                  </td>
                </tr>
              </table>
            </Section>

            {/* Thank You Section */}
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
                      backgroundColor: "#ffffff",
                      padding: "20px 40px 40px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                    <Heading
                      className="m-0 mb-2 mobile-text-3xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "32px",
                        lineHeight: "1.2",
                        margin: "0 0 8px 0",
                        color: "#7c9a3c",
                        fontWeight: "700",
                      }}
                    >
                      A great big thank you!
                    </Heading>

                    <Text
                      className="m-0 mb-4 text-gray-600 mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        margin: "0 0 16px 0",
                        color: "#4b5563",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      FOR SHOPPING WITH {companyName}
                    </Text>

                    {/* Heart Icon */}
                    <div style={{ marginBottom: "20px" }}>
                      <Text
                        style={{
                          fontSize: "24px",
                          margin: "0",
                          color: "#ef4444",
                        }}
                      >
                        ❤️
                      </Text>
                    </div>

                    <Text
                      className="m-0 mb-4 text-gray-700 mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.6",
                        margin: "0 0 16px 0",
                        color: "#374151",
                      }}
                    >
                      We love our customers dearly, and your feedback
                      <br />
                      is so helpful for us to hear.
                    </Text>

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
                      If you have a few minutes to answer a quick survey,
                      <br />
                      we'd be very grateful.
                    </Text>

                    <div
                      style={{
                        backgroundColor: "#f9fafb",
                        padding: "20px",
                        borderRadius: "8px",
                        marginBottom: "20px",
                      }}
                    >
                      <Text
                        className="m-0 mb-2 mobile-text-base"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "16px",
                          margin: "0 0 8px 0",
                          color: "#7c9a3c",
                          fontStyle: "italic",
                        }}
                      >
                        Complete The Survey By Sunday (12/1)
                      </Text>
                      <Text
                        className="m-0 mb-2 mobile-text-base"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "16px",
                          margin: "0 0 8px 0",
                          color: "#ef4444",
                          fontStyle: "italic",
                        }}
                      >
                        And you'll be entered to win a ${giftCardAmount} Gift card
                      </Text>
                      <Text
                        className="m-0 mobile-text-base"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "16px",
                          margin: "0",
                          color: "#7c9a3c",
                          fontStyle: "italic",
                        }}
                      >
                        Winners will be notified on {winnerDate}
                      </Text>
                    </div>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Survey Questions Section - Improved Grid */}
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
                      backgroundColor: "#dcfce7",
                      padding: "40px",
                    }}
                    className="survey-grid"
                  >
                    <Heading
                      className="m-0 mb-8 mobile-text-2xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "24px",
                        lineHeight: "1.2",
                        margin: "0 0 32px 0",
                        color: "#7c9a3c",
                        fontWeight: "700",
                        textAlign: "center",
                      }}
                    >
                      Survey Questions:
                    </Heading>

                    {/* Desktop: 2x2 Grid, Mobile: Single Column */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse" }}
                      className="mobile-stack"
                    >
                      {/* Row 1 */}
                      <tr className="mobile-stack">
                        {/* Question 1 */}
                        <td
                          style={{
                            width: "50%",
                            verticalAlign: "top",
                            padding: "0 10px 20px 0",
                          }}
                          className="survey-card"
                        >
                          <div
                            style={{
                              backgroundColor: "#ffffff",
                              padding: "25px",
                              borderRadius: "8px",
                              border: "2px solid #7c9a3c",
                              height: "100%",
                              boxSizing: "border-box",
                            }}
                          >
                            <Heading
                              className="m-0 mb-4 text-gray-900 survey-question-title"
                              style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "16px",
                                margin: "0 0 16px 0",
                                color: "#111827",
                                fontWeight: "600",
                                lineHeight: "1.4",
                              }}
                            >
                              Why Did You Buy from our Store?
                            </Heading>
                            <ul
                              className="survey-question-list"
                              style={{
                                margin: "0 0 20px 0",
                                padding: "0 0 0 20px",
                                listStyle: "disc",
                              }}
                            >
                              {[
                                "Price.",
                                "Free shipping.",
                                "Promotional coupon.",
                                "Product information.",
                                "Product reviews."
                              ].map((item, index) => (
                                <li
                                  key={index}
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "14px",
                                    color: "#374151",
                                    marginBottom: "4px",
                                    lineHeight: "1.4",
                                  }}
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                            <div style={{ textAlign: "center" }}>
                              <Link
                                href={surveyUrl}
                                className="survey-button"
                                style={{
                                  backgroundColor: "#7c9a3c",
                                  color: "#ffffff",
                                  padding: "12px 24px",
                                  textDecoration: "none",
                                  borderRadius: "6px",
                                  fontSize: "14px",
                                  fontWeight: "600",
                                  fontFamily: "Inter, sans-serif",
                                  display: "inline-block",
                                }}
                              >
                                Submit Your Answer
                              </Link>
                            </div>
                          </div>
                        </td>

                        {/* Question 2 */}
                        <td
                          style={{
                            width: "50%",
                            verticalAlign: "top",
                            padding: "0 0 20px 10px",
                          }}
                          className="survey-card"
                        >
                          <div
                            style={{
                              backgroundColor: "#ffffff",
                              padding: "25px",
                              borderRadius: "8px",
                              border: "2px solid #7c9a3c",
                              height: "100%",
                              boxSizing: "border-box",
                            }}
                          >
                            <Heading
                              className="m-0 mb-4 text-gray-900 survey-question-title"
                              style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "16px",
                                margin: "0 0 16px 0",
                                color: "#111827",
                                fontWeight: "600",
                                lineHeight: "1.4",
                              }}
                            >
                              How Did You Find our Store?
                            </Heading>
                            <ul
                              className="survey-question-list"
                              style={{
                                margin: "0 0 20px 0",
                                padding: "0 0 0 20px",
                                listStyle: "disc",
                              }}
                            >
                              {[
                                "Google search.",
                                "Yahoo search.",
                                "Twitter.",
                                "Facebook – ad or post.",
                                "Bing search."
                              ].map((item, index) => (
                                <li
                                  key={index}
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "14px",
                                    color: "#374151",
                                    marginBottom: "4px",
                                    lineHeight: "1.4",
                                  }}
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                            <div style={{ textAlign: "center" }}>
                              <Link
                                href={surveyUrl}
                                className="survey-button"
                                style={{
                                  backgroundColor: "#7c9a3c",
                                  color: "#ffffff",
                                  padding: "12px 24px",
                                  textDecoration: "none",
                                  borderRadius: "6px",
                                  fontSize: "14px",
                                  fontWeight: "600",
                                  fontFamily: "Inter, sans-serif",
                                  display: "inline-block",
                                }}
                              >
                                Submit Your Answer
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>

                      {/* Row 2 */}
                      <tr className="mobile-stack">
                        {/* Question 3 */}
                        <td
                          style={{
                            width: "50%",
                            verticalAlign: "top",
                            padding: "0 10px 0 0",
                          }}
                          className="survey-card"
                        >
                          <div
                            style={{
                              backgroundColor: "#ffffff",
                              padding: "25px",
                              borderRadius: "8px",
                              border: "2px solid #7c9a3c",
                              height: "100%",
                              boxSizing: "border-box",
                            }}
                          >
                            <Heading
                              className="m-0 mb-4 text-gray-900 survey-question-title"
                              style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "16px",
                                margin: "0 0 16px 0",
                                color: "#111827",
                                fontWeight: "600",
                                lineHeight: "1.4",
                              }}
                            >
                              Are You Satisfied with the Products in your Order?
                            </Heading>
                            <ul
                              className="survey-question-list"
                              style={{
                                margin: "0 0 20px 0",
                                padding: "0 0 0 20px",
                                listStyle: "disc",
                              }}
                            >
                              {[
                                "Quality.",
                                "Exactly matching the description on our website.",
                                "Price.",
                                "Other options like sizing and color."
                              ].map((item, index) => (
                                <li
                                  key={index}
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "14px",
                                    color: "#374151",
                                    marginBottom: "4px",
                                    lineHeight: "1.4",
                                  }}
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                            <div style={{ textAlign: "center" }}>
                              <Link
                                href={surveyUrl}
                                className="survey-button"
                                style={{
                                  backgroundColor: "#7c9a3c",
                                  color: "#ffffff",
                                  padding: "12px 24px",
                                  textDecoration: "none",
                                  borderRadius: "6px",
                                  fontSize: "14px",
                                  fontWeight: "600",
                                  fontFamily: "Inter, sans-serif",
                                  display: "inline-block",
                                }}
                              >
                                Submit Your Answer
                              </Link>
                            </div>
                          </div>
                        </td>

                        {/* Question 4 */}
                        <td
                          style={{
                            width: "50%",
                            verticalAlign: "top",
                            padding: "0 0 0 10px",
                          }}
                          className="survey-card"
                        >
                          <div
                            style={{
                              backgroundColor: "#ffffff",
                              padding: "25px",
                              borderRadius: "8px",
                              border: "2px solid #7c9a3c",
                              height: "100%",
                              boxSizing: "border-box",
                            }}
                          >
                            <Heading
                              className="m-0 mb-4 text-gray-900 survey-question-title"
                              style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "16px",
                                margin: "0 0 16px 0",
                                color: "#111827",
                                fontWeight: "600",
                                lineHeight: "1.4",
                              }}
                            >
                              What is your Preferred Method of Connecting with Us?
                            </Heading>
                            <ul
                              className="survey-question-list"
                              style={{
                                margin: "0 0 20px 0",
                                padding: "0 0 0 20px",
                                listStyle: "disc",
                              }}
                            >
                              {[
                                "Email.",
                                "Twitter.",
                                "Facebook.",
                                "Pinterest.",
                                "Wando.",
                                "Other."
                              ].map((item, index) => (
                                <li
                                  key={index}
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "14px",
                                    color: "#374151",
                                    marginBottom: "4px",
                                    lineHeight: "1.4",
                                  }}
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                            <div style={{ textAlign: "center" }}>
                              <Link
                                href={surveyUrl}
                                className="survey-button"
                                style={{
                                  backgroundColor: "#7c9a3c",
                                  color: "#ffffff",
                                  padding: "12px 24px",
                                  textDecoration: "none",
                                  borderRadius: "6px",
                                  fontSize: "14px",
                                  fontWeight: "600",
                                  fontFamily: "Inter, sans-serif",
                                  display: "inline-block",
                                }}
                              >
                                Submit Your Answer
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Thanks Section */}
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
                      backgroundColor: "#dcfce7",
                      padding: "40px",
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                    <Heading
                      className="m-0 mb-6 text-gray-900 mobile-text-2xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "28px",
                        lineHeight: "1.2",
                        margin: "0 0 24px 0",
                        color: "#111827",
                        fontWeight: "700",
                      }}
                    >
                      Thanks For Your Time!
                    </Heading>

                    {/* Colorful Wave Design */}
                    <div
                      style={{
                        height: "60px",
                        background: "linear-gradient(90deg, #7c9a3c 0%, #ef4444 35%, #f97316 70%, #fbbf24 100%)",
                        borderRadius: "30px",
                        marginBottom: "0",
                      }}
                    ></div>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Footer Section */}
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
                    className="mobile-section-padding"
                    style={{
                      padding: "30px 40px",
                      textAlign: "center",
                      width: "100%",
                      backgroundColor: "#000000",
                    }}
                  >
                    {/* Social Media Icons */}
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", margin: "0 auto 20px auto" }}
                    >
                      <tr>
                        <td style={{ padding: "0 8px" }}>
                          <Link href={twitterUrl}>
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
                        <td style={{ padding: "0 8px" }}>
                          <Link href={vimeoUrl}>
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
                  </td>
                </tr>
              </table>
            </Section>
                </Container>
              </Body>
            </Tailwind>
          </Html>
    )}