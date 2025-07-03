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

interface SuperBowlSaleEmailProps {
  logoUrl?: string
  phoneNumber?: string
  productsUrl?: string
  homeUrl?: string
  resourcesUrl?: string
  discountsUrl?: string
  shopNowUrl?: string
  facebookUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
  rssUrl?: string
  unsubscribeUrl?: string
  privacyUrl?: string
  webUrl?: string
}

export default function SuperBowlSale({
  logoUrl = "/placeholder.svg?height=30&width=100",
  phoneNumber = "800-123-123",
  productsUrl = "#",
  homeUrl = "#",
  resourcesUrl = "#",
  discountsUrl = "#",
  shopNowUrl = "#",
  facebookUrl = "https://facebook.com",
  linkedinUrl = "https://linkedin.com",
  instagramUrl = "https://instagram.com",
  rssUrl = "#",
  unsubscribeUrl = "#",
  privacyUrl = "#",
  webUrl = "#",
}: SuperBowlSaleEmailProps) {
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
            
            .mobile-hero-title {
              font-size: 32px !important;
              line-height: 1.1 !important;
            }
            
            .mobile-section-padding {
              padding: 30px 20px !important;
            }
            
            .mobile-nav-hide {
              display: none !important;
            }
            
            .mobile-gift-box {
              width: 200px !important;
              height: 150px !important;
            }
          }
          
          @media only screen and (max-width: 480px) {
            .mobile-hero-title {
              font-size: 28px !important;
            }
            
            .mobile-text-2xl {
              font-size: 20px !important;
            }
            
            .mobile-gift-box {
              width: 180px !important;
              height: 135px !important;
            }
          }
        `}</style>
      </Head>
      <Preview>DON'T MISS OUT... Super Bowl Sale - 50% OFF!</Preview>
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
                      backgroundColor: "#1f2937",
                      padding: "15px 30px",
                      width: "100%",
                    }}
                    className="mobile-padding-sm"
                  >
                    {/* Logo and Phone Row */}
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                      <tr>
                        <td style={{ width: "50%", verticalAlign: "middle" }}>
                          <Text
                            className="m-0 text-white font-medium mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              margin: "0",
                              color: "#ffffff",
                            }}
                          >
                            [Your Logo]
                          </Text>
                        </td>
                        <td style={{ width: "50%", textAlign: "right", verticalAlign: "middle" }}>
                          <Text
                            className="m-0 text-white mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              margin: "0",
                              color: "#ffffff",
                            }}
                          >
                            📞 {phoneNumber}
                          </Text>
                        </td>
                      </tr>
                    </table>

                    {/* Navigation Menu */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", marginTop: "15px" }}
                      className="mobile-nav-hide"
                    >
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <table
                            cellPadding="0"
                            cellSpacing="0"
                            style={{ borderCollapse: "collapse", margin: "0 auto" }}
                          >
                            <tr>
                              <td style={{ padding: "0 15px" }}>
                                <Link
                                  href={productsUrl}
                                  style={{
                                    color: "#ffffff",
                                    textDecoration: "none",
                                    fontSize: "14px",
                                    fontFamily: "Inter, sans-serif",
                                  }}
                                >
                                  Products
                                </Link>
                              </td>
                              <td style={{ color: "#ffffff", fontSize: "14px" }}>|</td>
                              <td style={{ padding: "0 15px" }}>
                                <Link
                                  href={homeUrl}
                                  style={{
                                    color: "#ffffff",
                                    textDecoration: "none",
                                    fontSize: "14px",
                                    fontFamily: "Inter, sans-serif",
                                  }}
                                >
                                  Home
                                </Link>
                              </td>
                              <td style={{ color: "#ffffff", fontSize: "14px" }}>|</td>
                              <td style={{ padding: "0 15px" }}>
                                <Link
                                  href={resourcesUrl}
                                  style={{
                                    color: "#ffffff",
                                    textDecoration: "none",
                                    fontSize: "14px",
                                    fontFamily: "Inter, sans-serif",
                                  }}
                                >
                                  Resources
                                </Link>
                              </td>
                              <td style={{ color: "#ffffff", fontSize: "14px" }}>|</td>
                              <td style={{ padding: "0 15px" }}>
                                <Link
                                  href={discountsUrl}
                                  style={{
                                    color: "#ffffff",
                                    textDecoration: "none",
                                    fontSize: "14px",
                                    fontFamily: "Inter, sans-serif",
                                  }}
                                >
                                  Discounts
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

            {/* Hero Section - Super Bowl Sale */}
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
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=500&fit=crop')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      padding: "60px 40px",
                      textAlign: "center",
                      position: "relative",
                    }}
                    className="mobile-section-padding"
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        zIndex: "1",
                      }}
                    ></div>
                    <div style={{ position: "relative", zIndex: "2" }}>
                      <Text
                        className="m-0 mb-2 text-white mobile-text-base"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "18px",
                          margin: "0 0 8px 0",
                          color: "#ffffff",
                          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                        }}
                      >
                        DON'T MISS OUT...
                      </Text>
                      <Text
                        className="m-0 mb-8 text-white mobile-text-sm"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "14px",
                          margin: "0 0 32px 0",
                          color: "#ffffff",
                          textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
                        }}
                      >
                        These Deals happen once a season!
                      </Text>

                      {/* Super Bowl Sale Title */}
                      <div style={{ marginBottom: "32px" }}>
                        <div
                          style={{
                            backgroundColor: "#dc2626",
                            padding: "20px 30px",
                            borderRadius: "8px",
                            display: "inline-block",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                          }}
                        >
                          <Heading
                            className="m-0 font-black text-white mobile-hero-title"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "42px",
                              lineHeight: "1.1",
                              margin: "0",
                              color: "#ffffff",
                              fontWeight: "900",
                              textTransform: "uppercase",
                              letterSpacing: "2px",
                            }}
                          >
                            SUPER
                          </Heading>
                          <Heading
                            className="m-0 font-black text-white mobile-hero-title"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "42px",
                              lineHeight: "1.1",
                              margin: "0",
                              color: "#ffffff",
                              fontWeight: "900",
                              textTransform: "uppercase",
                              letterSpacing: "2px",
                            }}
                          >
                            BOWL SALE
                          </Heading>
                        </div>
                      </div>

                      <Text
                        className="m-0 mb-8 text-white mobile-text-sm"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "16px",
                          lineHeight: "1.6",
                          margin: "0 0 32px 0",
                          color: "#ffffff",
                          maxWidth: "400px",
                          marginLeft: "auto",
                          marginRight: "auto",
                          textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </Text>

                      {/* Gift Box with 50% OFF */}
                      <div style={{ marginBottom: "32px", position: "relative", display: "inline-block" }}>
                        <div
                          style={{
                            backgroundColor: "#ffffff",
                            borderRadius: "12px",
                            padding: "20px",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                            position: "relative",
                          }}
                        >
                          <Img
                            src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=250&h=180&fit=crop"
                            alt="Gift box with red ribbon"
                            width="250"
                            height="180"
                            className="mobile-gift-box"
                            style={{
                              display: "block",
                              borderRadius: "8px",
                              maxWidth: "100%",
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              bottom: "30px",
                              right: "30px",
                              backgroundColor: "#dc2626",
                              color: "#ffffff",
                              padding: "12px 20px",
                              borderRadius: "25px",
                              fontSize: "18px",
                              fontWeight: "800",
                              fontFamily: "Poppins, sans-serif",
                              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                            }}
                          >
                            50% OFF
                          </div>
                        </div>
                      </div>

                      <div>
                        <Link
                          href={shopNowUrl}
                          className="mobile-button-full"
                          style={{
                            backgroundColor: "#dc2626",
                            color: "white",
                            padding: "16px 40px",
                            textDecoration: "none",
                            borderRadius: "8px",
                            fontSize: "16px",
                            fontWeight: "700",
                            fontFamily: "Inter, sans-serif",
                            display: "inline-block",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                          }}
                        >
                          Shop Now
                        </Link>
                      </div>
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
                    style={{ padding: "40px", textAlign: "center", width: "100%" }}
                  >
                    <Heading
                      className="m-0 mb-4 font-semibold text-gray-900 mobile-text-base"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "18px",
                        margin: "0 0 16px 0",
                      }}
                    >
                      Thanks for the support! 😊
                    </Heading>

                    <Text
                      className="m-0 mb-6 text-gray-600 mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        lineHeight: "1.6",
                        maxWidth: "400px",
                        margin: "0 auto 24px auto",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore. Sed ut perspiciatis unde omnis iste natus error sit.
                    </Text>

                    {/* Social Media Icons */}
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", margin: "0 auto 20px auto" }}
                    >
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
                          <Link href="">
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
                          <Link href={instagramUrl}>
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

                    {/* Footer Links and Logo */}
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                      <tr>
                        <td
                          style={{ width: "50%", textAlign: "left", verticalAlign: "middle" }}
                          className="mobile-center"
                        >
                          <Text
                            className="m-0 text-gray-500 mobile-text-xs"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "12px",
                              lineHeight: "1.5",
                            }}
                          >
                            <Link href={unsubscribeUrl} style={{ color: "#6b7280", textDecoration: "none" }}>
                              UNSUBSCRIBE
                            </Link>{" "}
                            |{" "}
                            <Link href={privacyUrl} style={{ color: "#6b7280", textDecoration: "none" }}>
                              PRIVACY POLICY
                            </Link>{" "}
                            |{" "}
                            <Link href={webUrl} style={{ color: "#6b7280", textDecoration: "none" }}>
                              WEB
                            </Link>
                          </Text>
                        </td>
                        <td
                          style={{ width: "50%", textAlign: "right", verticalAlign: "middle" }}
                          className="mobile-center"
                        >
                          <Text
                            className="m-0 text-gray-900 mobile-text-sm"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "14px",
                              fontWeight: "600",
                              marginTop: "10px",
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
        </Body>
      </Tailwind>
    </Html>
  )
}

SuperBowlSale.PreviewProps = {
  logoUrl: "/placeholder.svg?height=30&width=100",
  phoneNumber: "800-123-123",
  productsUrl: "https://example.com/products",
  homeUrl: "https://example.com/home",
  resourcesUrl: "https://example.com/resources",
  discountsUrl: "https://example.com/discounts",
  shopNowUrl: "https://example.com/shop",
  facebookUrl: "https://facebook.com/superbowlsale",
  linkedinUrl: "https://linkedin.com/company/superbowlsale",
  instagramUrl: "https://instagram.com/superbowlsale",
  rssUrl: "https://example.com/rss",
  unsubscribeUrl: "https://example.com/unsubscribe",
  privacyUrl: "https://example.com/privacy",
  webUrl: "https://example.com",
} satisfies SuperBowlSaleEmailProps
