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

interface RealEstateEmailProps {
  customerName?: string
  viewAllListingsUrl?: string
  property1Url?: string
  property2Url?: string
  agent1Url?: string
  agent2Url?: string
  selectAgentUrl?: string
  getStartedUrl?: string
  getQuoteUrl?: string
  contactEmail?: string
}

export default function RealEstate({
  customerName = "Valued Customer",
  viewAllListingsUrl = "#",
  property1Url = "#",
  property2Url = "#",
  agent1Url = "#",
  agent2Url = "#",
  selectAgentUrl = "#",
  getStartedUrl = "#",
  getQuoteUrl = "#",
  contactEmail = "contact@realestate.com",
}: RealEstateEmailProps) {
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
            
            .mobile-property-card {
              margin-bottom: 30px !important;
            }
            
            .mobile-agent-card {
              width: 100% !important;
              margin-bottom: 30px !important;
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
      <Preview>🏠 Properties you've shown interest in San Francisco - Schedule a visit today!</Preview>
      <Tailwind>
        <Body
          className="bg-gray-100 m-0 p-0"
          style={{
            fontFamily: "Inter, sans-serif",
            margin: "0",
            padding: "0",
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
              backgroundColor: "#e5e7eb",
              borderRadius: "0",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#374151" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "20px 30px",
                    }}
                    className="mobile-padding-sm"
                  >
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                      <tr>
                        <td style={{ width: "50%", verticalAlign: "middle" }}>
                          <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                            <tr>
                              <td style={{ paddingRight: "10px", verticalAlign: "middle" }}>
                                <div
                                  style={{
                                    width: "24px",
                                    height: "24px",
                                    backgroundColor: "#06b6d4",
                                    borderRadius: "4px",
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
                                          🏠
                                        </Text>
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                              </td>
                              <td style={{ verticalAlign: "middle" }}>
                                <Text
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "16px",
                                    color: "#ffffff",
                                    margin: "0",
                                    fontWeight: "600",
                                  }}
                                  className="mobile-text-base"
                                >
                                  Real Estate
                                </Text>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td style={{ width: "50%", textAlign: "right", verticalAlign: "middle" }}>
                          <Link
                            href={viewAllListingsUrl}
                            style={{
                              color: "#ffffff",
                              textDecoration: "none",
                              fontSize: "14px",
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "500",
                            }}
                            className="mobile-text-sm"
                          >
                            VIEW ALL LISTINGS
                          </Link>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Main Headline */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#e5e7eb" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "40px 30px 30px 30px",
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                    <Heading
                      className="mobile-text-2xl"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "28px",
                        lineHeight: "1.3",
                        margin: "0",
                        color: "#374151",
                        fontWeight: "600",
                        textAlign: "center",
                      }}
                    >
                      You've recently shown interest in these
                      <br />
                      properties in San Francisco
                    </Heading>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Property Listings */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#e5e7eb" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "0 30px 30px 30px",
                    }}
                    className="mobile-padding"
                  >
                    {/* Property 1 */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{
                        borderCollapse: "collapse",
                        backgroundColor: "#ffffff",
                        borderRadius: "8px",
                        marginBottom: "20px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      }}
                      className="mobile-property-card"
                    >
                      <tr>
                        <td style={{ padding: "20px" }}>
                          <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                            <tr className="mobile-stack">
                              <td
                                style={{ width: "40%", verticalAlign: "top", paddingRight: "20px" }}
                                className="mobile-stack-item"
                              >
                                <Link href={property1Url}>
                                  <Img
                                    src="https://cdn.templates.unlayer.com/assets/1619178031907-518994"
                                    alt="Modern house with garage in San Francisco"
                                    width="160"
                                    height="120"
                                    style={{
                                      width: "100%",
                                      height: "120px",
                                      display: "block",
                                      borderRadius: "6px",
                                      objectFit: "cover",
                                    }}
                                  />
                                </Link>
                              </td>
                              <td style={{ width: "60%", verticalAlign: "top" }} className="mobile-stack-item">
                                <Text
                                  className="mobile-text-xl"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "24px",
                                    margin: "0 0 8px 0",
                                    color: "#111827",
                                    fontWeight: "700",
                                  }}
                                >
                                  $475,000
                                </Text>
                                <Text
                                  className="mobile-text-base"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "16px",
                                    margin: "0 0 8px 0",
                                    color: "#374151",
                                    fontWeight: "600",
                                  }}
                                >
                                  New Address, San Francisco
                                </Text>
                                <Text
                                  className="mobile-text-sm"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "14px",
                                    lineHeight: "1.5",
                                    margin: "0 0 12px 0",
                                    color: "#6b7280",
                                  }}
                                >
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </Text>
                                <Text
                                  className="mobile-text-sm"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "14px",
                                    margin: "0",
                                    color: "#374151",
                                    fontWeight: "500",
                                  }}
                                >
                                  5 Bedrooms, 2 Bathrooms, 1000 sq. ft
                                </Text>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    {/* Property 2 */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{
                        borderCollapse: "collapse",
                        backgroundColor: "#ffffff",
                        borderRadius: "8px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      }}
                      className="mobile-property-card"
                    >
                      <tr>
                        <td style={{ padding: "20px" }}>
                          <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                            <tr className="mobile-stack">
                              <td
                                style={{ width: "40%", verticalAlign: "top", paddingRight: "20px" }}
                                className="mobile-stack-item"
                              >
                                <Link href={property2Url}>
                                  <Img
                                    src="https://cdn.templates.unlayer.com/assets/1619178171255-home.jpg"
                                    alt="Brick townhouse row in San Francisco"
                                    width="160"
                                    height="120"
                                    style={{
                                      width: "100%",
                                      height: "120px",
                                      display: "block",
                                      borderRadius: "6px",
                                      objectFit: "cover",
                                    }}
                                  />
                                </Link>
                              </td>
                              <td style={{ width: "60%", verticalAlign: "top" }} className="mobile-stack-item">
                                <Text
                                  className="mobile-text-xl"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "24px",
                                    margin: "0 0 8px 0",
                                    color: "#111827",
                                    fontWeight: "700",
                                  }}
                                >
                                  $525,000
                                </Text>
                                <Text
                                  className="mobile-text-base"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "16px",
                                    margin: "0 0 8px 0",
                                    color: "#374151",
                                    fontWeight: "600",
                                  }}
                                >
                                  Road Side, San Francisco
                                </Text>
                                <Text
                                  className="mobile-text-sm"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "14px",
                                    lineHeight: "1.5",
                                    margin: "0 0 12px 0",
                                    color: "#6b7280",
                                  }}
                                >
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </Text>
                                <Text
                                  className="mobile-text-sm"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "14px",
                                    margin: "0",
                                    color: "#374151",
                                    fontWeight: "500",
                                  }}
                                >
                                  4 Bedrooms, 2 Bathrooms, 1200 sq. ft
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

            {/* Agent Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#e5e7eb" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "30px",
                      textAlign: "center",
                    }}
                    className="mobile-padding"
                  >
                    <Heading
                      className="mobile-text-xl"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "24px",
                        lineHeight: "1.3",
                        margin: "0 0 30px 0",
                        color: "#374151",
                        fontWeight: "600",
                        textAlign: "center",
                      }}
                    >
                      Schedule a visit with one of our agent
                    </Heading>

                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                      <tr className="mobile-stack">
                        {/* Agent 1 */}
                        <td
                          style={{ width: "50%", verticalAlign: "top", paddingRight: "15px" }}
                        >
                          <table
                            width="100%"
                            cellPadding="0"
                            cellSpacing="0"
                            style={{
                              borderCollapse: "collapse",
                              backgroundColor: "#ffffff",
                              borderRadius: "8px",
                              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            <tr>
                              <td style={{ padding: "20px", textAlign: "center" }}>
                                <Img
                                  src="https://cdn.templates.unlayer.com/assets/1619100342402-12.jpg"
                                  alt="Rudolf Hamm - Real Estate Agent"
                                  width="120"
                                  height="120"
                                  style={{
                                    width: "120px",
                                    height: "120px",
                                    display: "block",
                                    borderRadius: "8px",
                                    margin: "0 auto 15px auto",
                                    objectFit: "cover",
                                  }}
                                />

                                <div
                                  style={{
                                    backgroundColor: "#10b981",
                                    color: "#ffffff",
                                    padding: "4px 12px",
                                    borderRadius: "12px",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    display: "inline-block",
                                    marginBottom: "12px",
                                  }}
                                >
                                  TOP RATED 4.8/5
                                </div>

                                <Text
                                  className="mobile-text-lg"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "18px",
                                    margin: "0 0 4px 0",
                                    color: "#111827",
                                    fontWeight: "600",
                                  }}
                                >
                                  Rudolf Hamm
                                </Text>

                                <Text
                                  className="mobile-text-sm"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "14px",
                                    margin: "0 0 12px 0",
                                    color: "#6b7280",
                                    fontWeight: "500",
                                  }}
                                >
                                  Real Estate Agent
                                </Text>

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
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum
                                  has been the industry's
                                </Text>
                              </td>
                            </tr>
                          </table>
                        </td>

                        
                      </tr>
                    </table>

                    {/* Select One Button */}
                    <div style={{ marginTop: "30px", textAlign: "center" }}>
                      <Link
                        href={selectAgentUrl}
                        className="mobile-button-full"
                        style={{
                          backgroundColor: "#ea580c",
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
                        Select One
                      </Link>
                    </div>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Bottom CTA Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#e5e7eb" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "30px",
                    }}
                    className="mobile-padding"
                  >
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                      <tr className="mobile-stack">
                        {/* Dream Home Card */}
                        <td
                          style={{ width: "50%", verticalAlign: "top", paddingRight: "15px" }}
                          className="mobile-stack-item"
                        >
                          <table
                            width="100%"
                            cellPadding="0"
                            cellSpacing="0"
                            style={{
                              borderCollapse: "collapse",
                              backgroundColor: "#ffffff",
                              borderRadius: "8px",
                              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            <tr>
                              <td style={{ padding: "30px 20px", textAlign: "center" }}>
                                <Heading
                                  className="mobile-text-lg"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "20px",
                                    lineHeight: "1.3",
                                    margin: "0 0 15px 0",
                                    color: "#111827",
                                    fontWeight: "600",
                                  }}
                                >
                                  Discover your next
                                  <br />
                                  dream home
                                </Heading>

                                <Text
                                  className="mobile-text-sm"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "14px",
                                    lineHeight: "1.5",
                                    margin: "0 0 20px 0",
                                    color: "#6b7280",
                                  }}
                                >
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </Text>

                                <Link
                                  href={getStartedUrl}
                                  style={{
                                    backgroundColor: "#ea580c",
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
                                  Get Started Now
                                </Link>
                              </td>
                            </tr>
                          </table>
                        </td>

                        {/* House Worth Card */}
                        <td
                          style={{ width: "50%", verticalAlign: "top", paddingLeft: "15px" }}
                          className="mobile-stack-item"
                        >
                          <table
                            width="100%"
                            cellPadding="0"
                            cellSpacing="0"
                            style={{
                              borderCollapse: "collapse",
                              backgroundColor: "#ffffff",
                              borderRadius: "8px",
                              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            <tr>
                              <td style={{ padding: "30px 20px", textAlign: "center" }}>
                                <Heading
                                  className="mobile-text-lg"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "20px",
                                    lineHeight: "1.3",
                                    margin: "0 0 15px 0",
                                    color: "#111827",
                                    fontWeight: "600",
                                  }}
                                >
                                  How much is your
                                  <br />
                                  house worth?
                                </Heading>

                                <Text
                                  className="mobile-text-sm"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "14px",
                                    lineHeight: "1.5",
                                    margin: "0 0 20px 0",
                                    color: "#6b7280",
                                  }}
                                >
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </Text>

                                <Link
                                  href={getQuoteUrl}
                                  style={{
                                    backgroundColor: "#ea580c",
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
                                  Get Quote Now
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

            {/* Footer */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#374151" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "30px",
                      textAlign: "center",
                    }}
                    className="mobile-padding"
                  >
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                      <tr>
                        <td
                          style={{ width: "50%", verticalAlign: "middle", textAlign: "left" }}
                          className="mobile-center mobile-stack-item"
                        >
                          <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                            <tr>
                              <td style={{ paddingRight: "10px", verticalAlign: "middle" }}>
                                <div
                                  style={{
                                    width: "24px",
                                    height: "24px",
                                    backgroundColor: "#06b6d4",
                                    borderRadius: "4px",
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
                                          🏠
                                        </Text>
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                              </td>
                              <td style={{ verticalAlign: "middle" }}>
                                <Text
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "16px",
                                    color: "#ffffff",
                                    margin: "0",
                                    fontWeight: "600",
                                  }}
                                  className="mobile-text-base"
                                >
                                  Real Estate
                                </Text>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td
                          style={{ width: "50%", textAlign: "right", verticalAlign: "middle" }}
                          className="mobile-center mobile-stack-item"
                        >
                          <Link
                            href={viewAllListingsUrl}
                            style={{
                              color: "#ffffff",
                              textDecoration: "none",
                              fontSize: "14px",
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "500",
                            }}
                            className="mobile-text-sm"
                          >
                            VIEW ALL LISTINGS
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2} style={{ paddingTop: "20px" }}>
                          <Text
                            className="mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              lineHeight: "1.6",
                              margin: "0",
                              color: "#d1d5db",
                              textAlign: "center",
                            }}
                          >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s. Lorem ipsum has been the
                            industry's
                          </Text>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2} style={{ paddingTop: "15px" }}>
                          <Text
                            className="mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              margin: "0",
                              color: "#9ca3af",
                              textAlign: "center",
                            }}
                          >
                            Contact: {contactEmail}
                          </Text>
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
  )
}

RealEstate.PreviewProps = {
  customerName: "John Doe",
  viewAllListingsUrl: "https://example.com/listings",
  property1Url: "https://example.com/property/475000",
  property2Url: "https://example.com/property/525000",
  agent1Url: "https://example.com/agent/rudolf-hamm",
  agent2Url: "https://example.com/agent/emanuel-macco",
  selectAgentUrl: "https://example.com/select-agent",
  getStartedUrl: "https://example.com/get-started",
  getQuoteUrl: "https://example.com/get-quote",
  contactEmail: "contact@realestate.com",
} satisfies RealEstateEmailProps
