import { Body, Container, Head, Heading, Html, Link, Preview, Section, Tailwind, Text } from "@react-email/components"

interface AppleWatchEmailProps {
  customerName?: string
  productName?: string
  shopUrl?: string
  unsubscribeUrl?: string
  privacyPolicyUrl?: string
  websiteUrl?: string
  facebookUrl?: string
  twitterUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
  companyName?: string
  supportMessage?: string
}

export default function AppleWatchEmail({
  customerName = "Customer",
  productName = "Apple Watch",
  shopUrl = "#",
  unsubscribeUrl = "#",
  privacyPolicyUrl = "#",
  websiteUrl = "#",
  facebookUrl = "https://facebook.com",
  twitterUrl = "https://twitter.com",
  linkedinUrl = "https://linkedin.com",
  instagramUrl = "https://instagram.com",
  companyName = "Your Company",
  supportMessage = "Thanks for the support! 😘",
}: AppleWatchEmailProps) {
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
          
          .hero-bg {
            background-image: url('https://res.cloudinary.com/dirpuqqib/image/upload/v1750933376/1695813859796-Group_74_vdqidd.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-color: #1a1a1a;
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
              padding: 60px 20px !important;
            }
            
            .hero-bg {
              background-image: none !important;
              background: #1a1a1a !important;
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
      <Preview>You Are Our First Choice - {productName} Available Now</Preview>
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
            {/* Hero Section with Apple Watch */}
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
                    className="hero-bg mobile-hero-padding bg-[url('https://res.cloudinary.com/dirpuqqib/image/upload/v1750933376/1695813859796-Group_74_vdqidd.png')]"
                    style={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "#1a1a1a",
                      padding: "80px 40px",
                      textAlign: "center",
                      minHeight: "500px",
                    }}
                  >
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{
                        borderCollapse: "collapse",
                        height: "100%",
                      }}
                    >
                      <tr>
                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                          {/* YOU ARE OUR FIRST CHOICE */}
                          <Text
                            className="m-0 mb-4 text-gray-300 mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              margin: "0 0 20px 0",
                              color: "#d1d5db",
                              fontWeight: "500",
                              letterSpacing: "2px",
                              textTransform: "uppercase",
                            }}
                          >
                            YOU ARE OUR FIRST CHOICE
                          </Text>

                          {/* Main Headline */}
                          <Heading
                            className="m-0 mb-6 text-white mobile-text-5xl"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "30px",
                              lineHeight: "1.1",
                              margin: "0 0 30px 0",
                              color: "#ffffff",
                              fontWeight: "800",
                              letterSpacing: "-1px",
                            }}
                          >
                            LOREM IPSUM SI
                          </Heading>

                          {/* Subheading */}
                          <Text
                            className="m-0 mb-8 text-orange-400 mobile-text-lg"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "15px",
                              margin: "0 0 40px 0",
                              color: "#fb923c",
                              fontWeight: "600",
                              letterSpacing: "1px",
                              textTransform: "uppercase",
                            }}
                          >
                            GRAB IT OR OTHERS WILL
                          </Text>

                          {/* Description Text */}
                          <Text
                            className="m-0 mb-10 text-gray-300 mobile-text-base"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              lineHeight: "1.6",
                              margin: "0 0 50px 0",
                              color: "#d1d5db",
                              maxWidth: "400px",
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                          >
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          </Text>

                          {/* Shop Now Button */}
                          <Link
                            href={shopUrl}
                            className="mobile-button-full"
                            style={{
                              backgroundColor: "transparent",
                              color: "#ffffff",
                              padding: "16px 40px",
                              textDecoration: "none",
                              border: "2px solid #ffffff",
                              borderRadius: "4px",
                              fontSize: "14px",
                              fontWeight: "600",
                              fontFamily: "Inter, sans-serif",
                              display: "inline-block",
                              letterSpacing: "0.5px",
                              textTransform: "uppercase",
                              transition: "all 0.3s ease",
                            }}
                          >
                            Shop Now
                          </Link>
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
                    <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                      <tr>
                        <td>
                          <Text
                            className="m-0 mb-4 text-gray-900 mobile-text-lg"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "18px",
                              margin: "0 0 16px 0",
                              color: "#111827",
                              fontWeight: "600",
                            }}
                          >
                            {supportMessage}
                          </Text>

                          <Text
                            className="m-0 text-gray-600 mobile-text-base"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              lineHeight: "1.6",
                              margin: "0",
                              color: "#6b7280",
                            }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium.
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
                  backgroundColor: "#ffffff",
                  borderTop: "1px solid #e5e7eb",
                }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    className="mobile-padding"
                    style={{
                      padding: "40px",
                      width: "100%",
                    }}
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
                                      width: "32px",
                                      height: "32px",
                                      backgroundColor: "#1877f2",
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
                                      width: "32px",
                                      height: "32px",
                                      backgroundColor: "#1da1f2",
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
                                      width: "32px",
                                      height: "32px",
                                      backgroundColor: "#0077b5",
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
                                      width: "32px",
                                      height: "32px",
                                      backgroundColor: "#e4405f",
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

                        <td
                          style={{ width: "50%", textAlign: "right", verticalAlign: "top" }}
                          className="mobile-stack-item mobile-center"
                        >
                          {/* Company Logo */}
                          <Text
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              color: "#111827",
                              margin: "0",
                              fontWeight: "600",
                            }}
                            className="mobile-text-base"
                          >
                            [Your Logo]
                          </Text>
                        </td>
                      </tr>

                      {/* Footer Links */}
                      <tr>
                        <td colSpan={2} style={{ paddingTop: "30px" }}>
                          <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                            <tr>
                              <td style={{ textAlign: "left" }} className="mobile-center">
                                <Link
                                  href={unsubscribeUrl}
                                  style={{
                                    color: "#6b7280",
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
                                    color: "#d1d5db",
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
                                    color: "#6b7280",
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
                                    color: "#d1d5db",
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

AppleWatchEmail.PreviewProps = {
  customerName: "John Doe",
  productName: "Apple Watch Series 9",
  shopUrl: "https://example.com/shop",
  unsubscribeUrl: "https://example.com/unsubscribe",
  privacyPolicyUrl: "https://example.com/privacy",
  websiteUrl: "https://example.com",
  facebookUrl: "https://facebook.com/example",
  twitterUrl: "https://twitter.com/example",
  linkedinUrl: "https://linkedin.com/company/example",
  instagramUrl: "https://instagram.com/example",
  companyName: "Your Company",
  supportMessage: "Thanks for the support! 😘",
} satisfies AppleWatchEmailProps
