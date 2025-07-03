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

interface BackToSchoolEmailProps {
  companyName?: string
  updatePlanUrl?: string
  cancelRenewalUrl?: string
  selectBasicUrl?: string
  selectStandardUrl?: string
  selectPremiumUrl?: string
  facebookUrl?: string
  twitterUrl?: string
  linkedinUrl?: string
}

export default function BackToSchool({
  companyName = "[Company Name]",
  updatePlanUrl = "#",
  cancelRenewalUrl = "#",
  selectBasicUrl = "#",
  selectPremiumUrl = "#",
  facebookUrl = "https://facebook.com",
  twitterUrl = "https://twitter.com",
  linkedinUrl = "https://linkedin.com",
}: BackToSchoolEmailProps) {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap');
          
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
            /* Force full width on mobile */
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
              font-size: 24px !important; 
            }
            
            .mobile-text-2xl { 
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
            
            /* Stack pricing cards vertically on mobile */
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
            
            .mobile-hero-height { 
              height: 300px !important; 
            }
            
            .mobile-button-full { 
              width: 90% !important; 
              max-width: 280px !important;
            }
            
            .mobile-price-card { 
              margin-bottom: 20px !important; 
            }
            
            /* Ensure tables take full width on mobile */
            .mobile-table-full {
              width: 100% !important;
            }
            
            /* Mobile-specific card styling */
            .mobile-card-container {
              width: 100% !important;
              padding: 0 10px !important;
              margin-bottom: 20px !important;
            }
          }
          
          @media only screen and (max-width: 480px) {
            .mobile-padding {
              padding: 15px !important;
            }
            
            .mobile-text-2xl {
              font-size: 24px !important;
            }
            
            .mobile-text-xl {
              font-size: 20px !important;
            }
          }
        `}</style>
      </Head>
      <Preview>Back to School - Grammarly Subscription Offer - Special Pricing</Preview>
      <Tailwind>
        <Body
          className="bg-gray-50 m-0 p-0"
          style={{
            fontFamily: "Inter, sans-serif",
            margin: "0",
            padding: "0",
            width: "100%",
            minWidth: "100%",
          }}
        >
          <Container
            className="mx-auto email-container"
            style={{
              maxWidth: "600px",
              width: "100%",
              margin: "0 auto",
            }}
          >
            {/* Hero Section with Background */}
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
                      backgroundImage: "url('https://cdn.templates.unlayer.com/assets/1656070999675-bg.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      height: "400px",
                      minHeight: "300px",
                      width: "100%",
                    }}
                    className="mobile-hero-height"
                  >
                    {/* Empty content for background image */}
                  </td>
                </tr>
              </table>
            </Section>

            {/* Main Content */}
            <Section className="px-0 py-0 bg-white">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%" }}
                className="mobile-table-full"
              >
                <tr>
                  <td className="mobile-padding" style={{ padding: "50px", textAlign: "center", width: "100%" }}>
                    <Heading
                      className="m-0 mb-6 font-bold text-gray-900 mobile-text-2xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "36px",
                        lineHeight: "1.2",
                        letterSpacing: "2px",
                        margin: "0 0 24px 0",
                        color: "#1e40af",
                      }}
                    >
                      BACK TO SCHOOL
                    </Heading>

                    <Text
                      className="m-0 mb-8 text-gray-600 mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.7",
                        maxWidth: "500px",
                        margin: "0 auto 40px auto",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                      maecenas accumsan lacus vel facilisis.
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Pricing Section */}
            <Section className="px-0 py-0 bg-white">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%" }}
                className="mobile-table-full"
              >
                <tr>
                  <td className="mobile-padding" style={{ padding: "30px", textAlign: "center", width: "100%" }}>
                    <Heading
                      className="m-0 mb-8 font-bold text-gray-900 mobile-text-lg"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "24px",
                        lineHeight: "1.3",
                        margin: "0 0 40px 0",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Grammarly Subscription Offer
                    </Heading>

                    {/* Desktop Pricing Cards */}
                    <div className="mobile-hidden">
                      <table
                        width="100%"
                        cellPadding="0"
                        cellSpacing="0"
                        style={{ borderCollapse: "collapse", width: "100%" }}
                      >
                        <tr>
                          {/* Basic Plan */}
                          <td
                            style={{
                              width: "50%",
                              padding: "0 10px",
                              verticalAlign: "top",
                            }}
                          >
                            <div
                              style={{
                                background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
                                borderRadius: "12px",
                                padding: "24px 16px",
                                textAlign: "center",
                                boxShadow: "0 8px 25px rgba(139, 92, 246, 0.3)",
                              }}
                            >
                              <Text
                                className="m-0 mb-4 font-bold text-white"
                                style={{
                                  fontFamily: "Poppins, sans-serif",
                                  fontSize: "16px",
                                  margin: "0 0 16px 0",
                                  textTransform: "uppercase",
                                  letterSpacing: "1px",
                                }}
                              >
                                Basic
                              </Text>
                              <Heading
                                className="m-0 mb-6 font-bold text-white"
                                style={{
                                  fontFamily: "Poppins, sans-serif",
                                  fontSize: "32px",
                                  margin: "0 0 24px 0",
                                }}
                              >
                                $5.6
                              </Heading>

                              {/* Features List */}
                              <div
                                style={{
                                  textAlign: "left",
                                  marginBottom: "24px",
                                }}
                              >
                                {[
                                  { text: "sample text", included: true },
                                  { text: "sample text", included: false },
                                  { text: "sample text", included: false },
                                  { text: "sample text", included: false },
                                  { text: "sample text", included: false },
                                ].map((feature, index) => (
                                  <table
                                    key={index}
                                    width="100%"
                                    cellPadding="0"
                                    cellSpacing="0"
                                    style={{
                                      borderCollapse: "collapse",
                                      marginBottom: "8px",
                                    }}
                                  >
                                    <tr>
                                      <td style={{ width: "20px", verticalAlign: "top" }}>
                                        <span
                                          style={{
                                            color: feature.included ? "#10b981" : "#ef4444",
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          {feature.included ? "✓" : "✗"}
                                        </span>
                                      </td>
                                      <td style={{ verticalAlign: "top", paddingLeft: "8px" }}>
                                        <Text
                                          className="m-0 text-white"
                                          style={{
                                            fontFamily: "Inter, sans-serif",
                                            fontSize: "14px",
                                            margin: "0",
                                            opacity: "0.9",
                                          }}
                                        >
                                          {feature.text}
                                        </Text>
                                      </td>
                                    </tr>
                                  </table>
                                ))}
                              </div>

                              <Link
                                href={selectBasicUrl}
                                style={{
                                  backgroundColor: "#1f2937",
                                  color: "white",
                                  padding: "12px 24px",
                                  textDecoration: "none",
                                  borderRadius: "8px",
                                  fontSize: "14px",
                                  fontWeight: "600",
                                  fontFamily: "Inter, sans-serif",
                                  display: "inline-block",
                                  width: "80%",
                                  textAlign: "center",
                                }}
                              >
                                Select
                              </Link>
                            </div>
                          </td>

                          {/* Premium Plan */}
                          <td
                            style={{
                              width: "50%",
                              padding: "0 10px",
                              verticalAlign: "top",
                            }}
                          >
                            <div
                              style={{
                                background: "linear-gradient(135deg, #ec4899, #db2777)",
                                borderRadius: "12px",
                                padding: "24px 16px",
                                textAlign: "center",
                                boxShadow: "0 8px 25px rgba(236, 72, 153, 0.3)",
                              }}
                            >
                              <Text
                                className="m-0 mb-4 font-bold text-white"
                                style={{
                                  fontFamily: "Poppins, sans-serif",
                                  fontSize: "16px",
                                  margin: "0 0 16px 0",
                                  textTransform: "uppercase",
                                  letterSpacing: "1px",
                                }}
                              >
                                Premium
                              </Text>
                              <Heading
                                className="m-0 mb-6 font-bold text-white"
                                style={{
                                  fontFamily: "Poppins, sans-serif",
                                  fontSize: "32px",
                                  margin: "0 0 24px 0",
                                }}
                              >
                                $5.6
                              </Heading>

                              {/* Features List */}
                              <div
                                style={{
                                  textAlign: "left",
                                  marginBottom: "24px",
                                }}
                              >
                                {[
                                  { text: "sample text", included: true },
                                  { text: "sample text", included: true },
                                  { text: "sample text", included: true },
                                  { text: "sample text", included: true },
                                  { text: "sample text", included: true },
                                ].map((feature, index) => (
                                  <table
                                    key={index}
                                    width="100%"
                                    cellPadding="0"
                                    cellSpacing="0"
                                    style={{
                                      borderCollapse: "collapse",
                                      marginBottom: "8px",
                                    }}
                                  >
                                    <tr>
                                      <td style={{ width: "20px", verticalAlign: "top" }}>
                                        <span
                                          style={{
                                            color: feature.included ? "#10b981" : "#ef4444",
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          {feature.included ? "✓" : "✗"}
                                        </span>
                                      </td>
                                      <td style={{ verticalAlign: "top", paddingLeft: "8px" }}>
                                        <Text
                                          className="m-0 text-white"
                                          style={{
                                            fontFamily: "Inter, sans-serif",
                                            fontSize: "14px",
                                            margin: "0",
                                            opacity: "0.9",
                                          }}
                                        >
                                          {feature.text}
                                        </Text>
                                      </td>
                                    </tr>
                                  </table>
                                ))}
                              </div>

                              <Link
                                href={selectPremiumUrl}
                                style={{
                                  backgroundColor: "#1f2937",
                                  color: "white",
                                  padding: "12px 24px",
                                  textDecoration: "none",
                                  borderRadius: "8px",
                                  fontSize: "14px",
                                  fontWeight: "600",
                                  fontFamily: "Inter, sans-serif",
                                  display: "inline-block",
                                  width: "80%",
                                  textAlign: "center",
                                }}
                              >
                                Select
                              </Link>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </div>

                    {/* Mobile Pricing Cards - Stacked */}
                    <div style={{ display: "none" }} className="mobile-stack">
                      {/* Basic Plan Mobile */}
                      <div className="mobile-card-container" style={{ marginBottom: "20px" }}>
                        <div
                          style={{
                            background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
                            borderRadius: "12px",
                            padding: "24px 16px",
                            textAlign: "center",
                            boxShadow: "0 8px 25px rgba(139, 92, 246, 0.3)",
                            width: "100%",
                          }}
                        >
                          <Text
                            className="m-0 mb-4 font-bold text-white mobile-text-sm"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "16px",
                              margin: "0 0 16px 0",
                              textTransform: "uppercase",
                              letterSpacing: "1px",
                            }}
                          >
                            Basic
                          </Text>
                          <Heading
                            className="m-0 mb-6 font-bold text-white mobile-text-xl"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "32px",
                              margin: "0 0 24px 0",
                            }}
                          >
                            $5.6
                          </Heading>

                          {/* Features List */}
                          <div style={{ textAlign: "left", marginBottom: "24px" }}>
                            {[
                              { text: "sample text", included: true },
                              { text: "sample text", included: false },
                              { text: "sample text", included: false },
                              { text: "sample text", included: false },
                              { text: "sample text", included: false },
                            ].map((feature, index) => (
                              <table
                                key={index}
                                width="100%"
                                cellPadding="0"
                                cellSpacing="0"
                                style={{
                                  borderCollapse: "collapse",
                                  marginBottom: "8px",
                                }}
                              >
                                <tr>
                                  <td style={{ width: "20px", verticalAlign: "top" }}>
                                    <span
                                      style={{
                                        color: feature.included ? "#10b981" : "#ef4444",
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      {feature.included ? "✓" : "✗"}
                                    </span>
                                  </td>
                                  <td style={{ verticalAlign: "top", paddingLeft: "8px" }}>
                                    <Text
                                      className="m-0 text-white mobile-text-xs"
                                      style={{
                                        fontFamily: "Inter, sans-serif",
                                        fontSize: "14px",
                                        margin: "0",
                                        opacity: "0.9",
                                      }}
                                    >
                                      {feature.text}
                                    </Text>
                                  </td>
                                </tr>
                              </table>
                            ))}
                          </div>

                          <Link
                            href={selectBasicUrl}
                            className="mobile-button-full"
                            style={{
                              backgroundColor: "#1f2937",
                              color: "white",
                              padding: "12px 24px",
                              textDecoration: "none",
                              borderRadius: "8px",
                              fontSize: "14px",
                              fontWeight: "600",
                              fontFamily: "Inter, sans-serif",
                              display: "inline-block",
                              width: "80%",
                              textAlign: "center",
                            }}
                          >
                            Select
                          </Link>
                        </div>
                      </div>

                      {/* Premium Plan Mobile */}
                      <div className="mobile-card-container">
                        <div
                          style={{
                            background: "linear-gradient(135deg, #ec4899, #db2777)",
                            borderRadius: "12px",
                            padding: "24px 16px",
                            textAlign: "center",
                            boxShadow: "0 8px 25px rgba(236, 72, 153, 0.3)",
                            width: "100%",
                          }}
                        >
                          <Text
                            className="m-0 mb-4 font-bold text-white mobile-text-sm"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "16px",
                              margin: "0 0 16px 0",
                              textTransform: "uppercase",
                              letterSpacing: "1px",
                            }}
                          >
                            Premium
                          </Text>
                          <Heading
                            className="m-0 mb-6 font-bold text-white mobile-text-xl"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "32px",
                              margin: "0 0 24px 0",
                            }}
                          >
                            $5.6
                          </Heading>

                          {/* Features List */}
                          <div style={{ textAlign: "left", marginBottom: "24px" }}>
                            {[
                              { text: "sample text", included: true },
                              { text: "sample text", included: true },
                              { text: "sample text", included: true },
                              { text: "sample text", included: true },
                              { text: "sample text", included: true },
                            ].map((feature, index) => (
                              <table
                                key={index}
                                width="100%"
                                cellPadding="0"
                                cellSpacing="0"
                                style={{
                                  borderCollapse: "collapse",
                                  marginBottom: "8px",
                                }}
                              >
                                <tr>
                                  <td style={{ width: "20px", verticalAlign: "top" }}>
                                    <span
                                      style={{
                                        color: feature.included ? "#10b981" : "#ef4444",
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      {feature.included ? "✓" : "✗"}
                                    </span>
                                  </td>
                                  <td style={{ verticalAlign: "top", paddingLeft: "8px" }}>
                                    <Text
                                      className="m-0 text-white mobile-text-xs"
                                      style={{
                                        fontFamily: "Inter, sans-serif",
                                        fontSize: "14px",
                                        margin: "0",
                                        opacity: "0.9",
                                      }}
                                    >
                                      {feature.text}
                                    </Text>
                                  </td>
                                </tr>
                              </table>
                            ))}
                          </div>

                          <Link
                            href={selectPremiumUrl}
                            className="mobile-button-full"
                            style={{
                              backgroundColor: "#1f2937",
                              color: "white",
                              padding: "12px 24px",
                              textDecoration: "none",
                              borderRadius: "8px",
                              fontSize: "14px",
                              fontWeight: "600",
                              fontFamily: "Inter, sans-serif",
                              display: "inline-block",
                              width: "80%",
                              textAlign: "center",
                            }}
                          >
                            Select
                          </Link>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Already Subscribed Section */}
            <Section className="px-0 py-0 bg-white">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%" }}
                className="mobile-table-full"
              >
                <tr>
                  <td className="mobile-padding" style={{ padding: "40px", textAlign: "center", width: "100%" }}>
                    <Heading
                      className="m-0 mb-6 font-bold text-gray-900 mobile-text-base"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "20px",
                        margin: "0 0 24px 0",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Already Subscribed?
                    </Heading>

                    {/* Desktop Layout */}
                    <div className="mobile-hidden">
                      <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              paddingRight: "20px",
                              verticalAlign: "middle",
                            }}
                          >
                            <Text
                              className="m-0 text-gray-600"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "14px",
                                lineHeight: "1.6",
                                textAlign: "left",
                              }}
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua
                            </Text>
                          </td>
                          <td
                            style={{
                              width: "50%",
                              textAlign: "right",
                              verticalAlign: "middle",
                            }}
                          >
                            <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                              <tr>
                                <td style={{ paddingBottom: "8px" }}>
                                  <Link
                                    href={updatePlanUrl}
                                    style={{
                                      backgroundColor: "#374151",
                                      color: "white",
                                      padding: "10px 20px",
                                      textDecoration: "none",
                                      borderRadius: "20px",
                                      fontSize: "14px",
                                      fontWeight: "500",
                                      fontFamily: "Inter, sans-serif",
                                      display: "inline-block",
                                    }}
                                  >
                                    Update Plan
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link
                                    href={cancelRenewalUrl}
                                    style={{
                                      backgroundColor: "#9ca3af",
                                      color: "white",
                                      padding: "10px 20px",
                                      textDecoration: "none",
                                      borderRadius: "20px",
                                      fontSize: "14px",
                                      fontWeight: "500",
                                      fontFamily: "Inter, sans-serif",
                                      display: "inline-block",
                                    }}
                                  >
                                    Cancel Renewal
                                  </Link>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </div>

                    {/* Mobile Layout */}
                    <div style={{ display: "none" }} className="mobile-stack">
                      <div style={{ marginBottom: "20px", textAlign: "center" }}>
                        <Text
                          className="m-0 text-gray-600 mobile-text-sm"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "14px",
                            lineHeight: "1.6",
                            textAlign: "center",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua
                        </Text>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <div style={{ marginBottom: "10px" }}>
                          <Link
                            href={updatePlanUrl}
                            className="mobile-button-full"
                            style={{
                              backgroundColor: "#374151",
                              color: "white",
                              padding: "12px 24px",
                              textDecoration: "none",
                              borderRadius: "20px",
                              fontSize: "14px",
                              fontWeight: "500",
                              fontFamily: "Inter, sans-serif",
                              display: "inline-block",
                              width: "200px",
                              textAlign: "center",
                            }}
                          >
                            Update Plan
                          </Link>
                        </div>
                        <div>
                          <Link
                            href={cancelRenewalUrl}
                            className="mobile-button-full"
                            style={{
                              backgroundColor: "#9ca3af",
                              color: "white",
                              padding: "12px 24px",
                              textDecoration: "none",
                              borderRadius: "20px",
                              fontSize: "14px",
                              fontWeight: "500",
                              fontFamily: "Inter, sans-serif",
                              display: "inline-block",
                              width: "200px",
                              textAlign: "center",
                            }}
                          >
                            Cancel Renewal
                          </Link>
                        </div>
                      </div>
                    </div>
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
                style={{ borderCollapse: "collapse", width: "100%" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    className="mobile-padding"
                    style={{
                      background: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
                      padding: "40px 30px",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    {/* Desktop Footer Layout */}
                    <div className="mobile-hidden">
                      <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              textAlign: "left",
                              verticalAlign: "middle",
                            }}
                          >
                            <Heading
                              className="m-0 mb-4 font-bold text-white"
                              style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "18px",
                                margin: "0 0 16px 0",
                              }}
                            >
                              {companyName}
                            </Heading>

                            {/* Social Media Icons */}
                            <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                              <tr>
                                <td style={{ padding: "0 5px" }}>
                                  <Link href={linkedinUrl}>
                                    <Img
                                      src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                                      alt="LinkedIn"
                                      width="24"
                                      height="24"
                                      style={{ display: "block" }}
                                    />
                                  </Link>
                                </td>
                                <td style={{ padding: "0 5px" }}>
                                  <Link href={twitterUrl}>
                                    <Img
                                      src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                                      alt="Twitter"
                                      width="24"
                                      height="24"
                                      style={{ display: "block" }}
                                    />
                                  </Link>
                                </td>
                                <td style={{ padding: "0 5px" }}>
                                  <Link href={facebookUrl}>
                                    <Img
                                      src="https://cdn.tools.unlayer.com/social/icons/rounded/skype.png"
                                      alt="Skype"
                                      width="24"
                                      height="24"
                                      style={{ display: "block" }}
                                    />
                                  </Link>
                                </td>
                                <td style={{ padding: "0 5px" }}>
                                  <Link href="#">
                                    <Img
                                      src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                                      alt="Instagram"
                                      width="24"
                                      height="24"
                                      style={{ display: "block" }}
                                    />
                                  </Link>
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td
                            style={{
                              width: "50%",
                              textAlign: "right",
                              verticalAlign: "middle",
                            }}
                          >
                            <Text
                              className="m-0 text-white"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "14px",
                                lineHeight: "1.6",
                                opacity: "0.9",
                              }}
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna
                            </Text>
                          </td>
                        </tr>
                      </table>
                    </div>

                    {/* Mobile Footer Layout */}
                    <div style={{ display: "none" }} className="mobile-stack">
                      <div style={{ textAlign: "center", marginBottom: "20px" }}>
                        <Heading
                          className="m-0 mb-4 font-bold text-white mobile-text-base"
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "18px",
                            margin: "0 0 16px 0",
                          }}
                        >
                          {companyName}
                        </Heading>

                        {/* Social Media Icons */}
                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                          <tr>
                            <td style={{ padding: "0 5px" }}>
                              <Link href={linkedinUrl}>
                                <Img
                                  src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                                  alt="LinkedIn"
                                  width="24"
                                  height="24"
                                  style={{ display: "block" }}
                                />
                              </Link>
                            </td>
                            <td style={{ padding: "0 5px" }}>
                              <Link href={twitterUrl}>
                                <Img
                                  src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                                  alt="Twitter"
                                  width="24"
                                  height="24"
                                  style={{ display: "block" }}
                                />
                              </Link>
                            </td>
                            <td style={{ padding: "0 5px" }}>
                              <Link href={facebookUrl}>
                                <Img
                                  src="https://cdn.tools.unlayer.com/social/icons/rounded/skype.png"
                                  alt="Skype"
                                  width="24"
                                  height="24"
                                  style={{ display: "block" }}
                                />
                              </Link>
                            </td>
                            <td style={{ padding: "0 5px" }}>
                              <Link href="#">
                                <Img
                                  src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                                  alt="Instagram"
                                  width="24"
                                  height="24"
                                  style={{ display: "block" }}
                                />
                              </Link>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <Text
                          className="m-0 text-white mobile-text-sm"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "14px",
                            lineHeight: "1.6",
                            opacity: "0.9",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna
                        </Text>
                      </div>
                    </div>
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

BackToSchool.PreviewProps = {
  companyName: "[Company Name]",
  updatePlanUrl: "https://example.com/update-plan",
  cancelRenewalUrl: "https://example.com/cancel-renewal",
  selectBasicUrl: "https://example.com/select-basic",
  selectStandardUrl: "https://example.com/select-standard",
  selectPremiumUrl: "https://example.com/select-premium",
  facebookUrl: "https://facebook.com/company",
  twitterUrl: "https://twitter.com/company",
  linkedinUrl: "https://linkedin.com/company",
} satisfies BackToSchoolEmailProps
