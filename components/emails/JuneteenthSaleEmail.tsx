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

interface JuneteenthSaleEmailProps {
  customerName?: string
  shopUrl?: string
  unsubscribeUrl?: string
  privacyPolicyUrl?: string
  websiteUrl?: string
  facebookUrl?: string
  twitterUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
  companyName?: string
  daysLeft?: string
  hoursLeft?: string
  minutesLeft?: string
  secondsLeft?: string
}

export default function JuneteenthSaleEmail({
  customerName = "Customer",
  shopUrl = "#",
  unsubscribeUrl = "#",
  privacyPolicyUrl = "#",
  websiteUrl = "#",
  facebookUrl = "https://facebook.com",
  twitterUrl = "https://twitter.com",
  linkedinUrl = "https://linkedin.com",
  instagramUrl = "https://instagram.com",
  companyName = "Your Company",
  daysLeft = "123",
  hoursLeft = "03",
  minutesLeft = "34",
  secondsLeft = "13",
}: JuneteenthSaleEmailProps) {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&family=Dancing+Script:wght@400;500;600;700&display=swap');
          
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
          
          .zigzag-border {
            background: linear-gradient(45deg, 
              #ff6b6b 0%, #ff6b6b 12.5%, 
              #4ecdc4 12.5%, #4ecdc4 25%, 
              #45b7d1 25%, #45b7d1 37.5%, 
              #f9ca24 37.5%, #f9ca24 50%, 
              #f0932b 50%, #f0932b 62.5%, 
              #eb4d4b 62.5%, #eb4d4b 75%, 
              #6c5ce7 75%, #6c5ce7 87.5%, 
              #a29bfe 87.5%, #a29bfe 100%);
            background-size: 20px 20px;
            height: 8px;
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
              width: 100% !important; 
              max-width: 280px !important;
            }
            
            .mobile-table-full {
              width: 100% !important;
            }
            
            .mobile-section-padding {
              padding: 40px 20px !important;
            }
            
            .mobile-countdown-item {
              display: inline-block !important;
              width: 22% !important;
              margin: 0 1% !important;
            }
            
            .mobile-countdown-number {
              font-size: 24px !important;
            }
            
            .mobile-countdown-label {
              font-size: 10px !important;
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
            
            .mobile-text-5xl {
              font-size: 32px !important;
            }
          }
        `}</style>
      </Head>
      <Preview>🎉 Juneteenth Flash Sale - Only 24 Hours Left! Celebrate with Discounted Cosmetics</Preview>
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
              backgroundColor: "#f5f6fa",
              borderRadius: "0",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Limited Time Offer Header */}
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
                      padding: "20px 40px 10px 40px",
                      textAlign: "center",
                      borderBottom: "2px solid #e5e7eb",
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
                        fontWeight: "600",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                      }}
                    >
                      LIMITED TIME OFFER
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Flash Sale Banner */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#dc2626" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "15px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-padding-sm"
                  >
                    <Text
                      className="m-0 text-white mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        margin: "0",
                        color: "#ffffff",
                        fontWeight: "700",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                      }}
                    >
                      ONLY 24 HOURS REMAINING FOR THE FLASH SALE!
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Colorful Zigzag Border */}
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
                    className="zigzag-border"
                    style={{
                      height: "8px",
                      background:
                        "linear-gradient(45deg, #ff6b6b 0%, #ff6b6b 12.5%, #4ecdc4 12.5%, #4ecdc4 25%, #45b7d1 25%, #45b7d1 37.5%, #f9ca24 37.5%, #f9ca24 50%, #f0932b 50%, #f0932b 62.5%, #eb4d4b 62.5%, #eb4d4b 75%, #6c5ce7 75%, #6c5ce7 87.5%, #a29bfe 87.5%, #a29bfe 100%)",
                      backgroundSize: "20px 20px",
                    }}
                  ></td>
                </tr>
              </table>
            </Section>

            {/* Countdown Timer */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#f5f6fa" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "40px 40px 30px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                    <img src="https://countdown.unlayer.com/generate/jxlQ4ZUbrZ85" alt=""
                    className="mobile-countdown-image" style={{ width: "100%", maxWidth: "600px", height: "auto", display: "block", margin: "0 auto" }} />
                    
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
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#f5f6fa" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "20px 40px 30px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-padding"
                  >
                    <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          {/* JUNETEENTH GLAM SAVING */}
                          <Text
                            className="m-0 mb-3 text-gray-600 mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              margin: "0 0 12px 0",
                              color: "#6b7280",
                              fontWeight: "500",
                              letterSpacing: "2px",
                              textTransform: "uppercase",
                            }}
                          >
                            JUNETEENTH GLAM SAVING
                          </Text>

                          {/* Main Headline */}
                          <Heading
                            className="m-0 mb-6 text-gray-900 mobile-text-3xl"
                            style={{
                              fontFamily: "Dancing Script, cursive",
                              fontSize: "36px",
                              lineHeight: "1.2",
                              margin: "0 0 24px 0",
                              color: "#111827",
                              fontWeight: "600",
                            }}
                          >
                            Celebrate with Discounted Cosmetics!
                          </Heading>

                          {/* Description Text */}
                          <Text
                            className="m-0 mb-8 text-gray-700 mobile-text-base"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              lineHeight: "1.6",
                              margin: "0 0 32px 0",
                              color: "#374151",
                              maxWidth: "450px",
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi.
                          </Text>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Cosmetics Product Image */}
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
                    <Img
                      src="https://img.freepik.com/free-photo/top-view-cosmetics-composition_23-2147692200.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_items_boosted&w=740"
                      alt="Collection of cosmetics including lipsticks, foundations, brushes, and makeup compacts"
                      width="520"
                      height="350"
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        maxWidth: "520px",
                        margin: "0 auto",
                      }}
                    />
                  </td>
                </tr>
              </table>
            </Section>

            {/* Shop Now Button Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#f5f6fa" }}
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
                    <table cellPadding="0" cellSpacing="0" style={{ margin: "0 auto" }}>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          {/* Shop Now Button */}
                          <Link
                            href={shopUrl}
                            className="mobile-button-full"
                            style={{
                              backgroundColor: "#dc2626",
                              color: "#f5f6fa",
                              padding: "16px 48px",
                              textDecoration: "none",
                              borderRadius: "6px",
                              fontSize: "16px",
                              fontWeight: "700",
                              fontFamily: "Inter, sans-serif",
                              display: "inline-block",
                              letterSpacing: "0.5px",
                              textTransform: "uppercase",
                              boxShadow: "0 4px 12px rgba(220, 38, 38, 0.3)",
                            }}
                          >
                            SHOP NOW
                          </Link>

                          {/* Terms & Conditions */}
                          <Text
                            className="m-0 mt-4 text-gray-500 mobile-text-xs"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "12px",
                              margin: "16px 0 0 0",
                              color: "#6b7280",
                              fontStyle: "italic",
                            }}
                          >
                            *Terms & Conditions apply
                          </Text>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Bottom Colorful Zigzag Border */}
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
                    className="zigzag-border"
                    style={{
                      height: "8px",
                      background:
                        "linear-gradient(45deg, #ff6b6b 0%, #ff6b6b 12.5%, #4ecdc4 12.5%, #4ecdc4 25%, #45b7d1 25%, #45b7d1 37.5%, #f9ca24 37.5%, #f9ca24 50%, #f0932b 50%, #f0932b 62.5%, #eb4d4b 62.5%, #eb4d4b 75%, #6c5ce7 75%, #6c5ce7 87.5%, #a29bfe 87.5%, #a29bfe 100%)",
                      backgroundSize: "20px 20px",
                    }}
                  ></td>
                </tr>
              </table>
            </Section>

            {/* Social Media Section */}
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
                      textAlign: "left",
                    }}
                    className="mobile-padding"
                  >
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                      <tr>
                        <td style={{ width: "50%", verticalAlign: "top" }} className="mobile-stack-item">
                          {/* Social Media Icons */}
                          <table
                            cellPadding="0"
                            cellSpacing="0"
                            style={{ borderCollapse: "collapse" }}
                            className="mobile-social-stack"
                          >
                            <tr className="mobile-social-stack">
                              <td style={{ padding: "0 8px 0 0" }} className="mobile-social-item">
                                <Link href={facebookUrl}>
                                  <div
                                    style={{
                                      width: "36px",
                                      height: "36px",
                                      backgroundColor: "#1877f2",
                                      borderRadius: "50%",
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
                                      borderRadius: "50%",
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
                                      borderRadius: "50%",
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
                              <td style={{ padding: "0 0 0 8px" }} className="mobile-social-item">
                                <Link href={instagramUrl}>
                                  <div
                                    style={{
                                      width: "36px",
                                      height: "36px",
                                      backgroundColor: "#e4405f",
                                      borderRadius: "50%",
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

                        <td style={{ width: "50%", verticalAlign: "top" }} className="mobile-stack-item">
                          <Text
                            className="m-0 text-gray-600 mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              lineHeight: "1.6",
                              margin: "0",
                              color: "#6b7280",
                              textAlign: "left",
                            }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore.
                          </Text>
                        </td>
                      </tr>
                    </table>
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
                style={{
                  borderCollapse: "collapse",
                  width: "100%",
                  backgroundColor: "#111827",
                }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    className="mobile-padding"
                    style={{
                      padding: "30px 40px",
                      width: "100%",
                    }}
                  >
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                      <tr>
                        <td style={{ textAlign: "left" }} className="mobile-center">
                          <Link
                            href={unsubscribeUrl}
                            style={{
                              color: "#d1d5db",
                              textDecoration: "none",
                              fontSize: "12px",
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "500",
                              marginRight: "20px",
                              textTransform: "uppercase",
                              letterSpacing: "0.5px",
                            }}
                            className="mobile-text-xs"
                          >
                            UNSUBSCRIBE
                          </Link>
                          <Text
                            style={{
                              color: "#6b7280",
                              fontSize: "12px",
                              margin: "0 10px",
                              display: "inline",
                            }}
                          >
                            |
                          </Text>
                          <Link
                            href={privacyPolicyUrl}
                            style={{
                              color: "#d1d5db",
                              textDecoration: "none",
                              fontSize: "12px",
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "500",
                              marginRight: "20px",
                              textTransform: "uppercase",
                              letterSpacing: "0.5px",
                            }}
                            className="mobile-text-xs"
                          >
                            PRIVACY POLICY
                          </Link>
                          <Text
                            style={{
                              color: "#6b7280",
                              fontSize: "12px",
                              margin: "0 10px",
                              display: "inline",
                            }}
                          >
                            |
                          </Text>
                          <Link
                            href={websiteUrl}
                            style={{
                              color: "#d1d5db",
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
                        <td style={{ textAlign: "right" }} className="mobile-center">
                          <Text
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              color: "#ffffff",
                              margin: "0",
                              fontWeight: "600",
                            }}
                            className="mobile-text-sm"
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
        </Body>
      </Tailwind>
    </Html>
  )
}

JuneteenthSaleEmail.PreviewProps = {
  customerName: "Beauty Lover",
  shopUrl: "https://example.com/juneteenth-sale",
  unsubscribeUrl: "https://example.com/unsubscribe",
  privacyPolicyUrl: "https://example.com/privacy",
  websiteUrl: "https://example.com",
  facebookUrl: "https://facebook.com/example",
  twitterUrl: "https://twitter.com/example",
  linkedinUrl: "https://linkedin.com/company/example",
  instagramUrl: "https://instagram.com/example",
  companyName: "Beauty Co",
  daysLeft: "123",
  hoursLeft: "03",
  minutesLeft: "34",
  secondsLeft: "13",
} satisfies JuneteenthSaleEmailProps
