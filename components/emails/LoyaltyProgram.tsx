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

interface LoyaltyProgramEmailProps {
  logoUrl?: string
  signUpUrl?: string
  facebookUrl?: string
  twitterUrl?: string
  instagramUrl?: string
  rssUrl?: string
  unsubscribeUrl?: string
  privacyUrl?: string
  webUrl?: string
}

export default function LoyaltyProgram({
  logoUrl = "/placeholder.svg?height=30&width=100",
  signUpUrl = "#",
  facebookUrl = "https://facebook.com",
  twitterUrl = "https://twitter.com",
  instagramUrl = "https://instagram.com",
  rssUrl = "#",
  unsubscribeUrl = "#",
  privacyUrl = "#",
  webUrl = "#",
}: LoyaltyProgramEmailProps) {
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
              font-size: 28px !important;
              line-height: 1.2 !important;
            }
            
            .mobile-section-padding {
              padding: 30px 20px !important;
            }
            
            .mobile-hero-image {
              width: 280px !important;
              height: 200px !important;
            }
            
            .mobile-product-card {
              margin-bottom: 15px !important;
            }
            
            .mobile-product-image {
              width: 100% !important;
              height: 180px !important;
            }
          }
          
          @media only screen and (max-width: 480px) {
            .mobile-hero-title {
              font-size: 24px !important;
            }
            
            .mobile-hero-image {
              width: 250px !important;
              height: 180px !important;
            }
          }
        `}</style>
      </Head>
      <Preview>Experience More with Our Loyalty Program</Preview>
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
            {/* Hero Section with Forest Background */}
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
                        "url('https://res.cloudinary.com/dirpuqqib/image/upload/v1750922101/1716977557953-Group_18_ugtmk0.png')",
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
                      {/* Computer Monitor Image */}
                      <div style={{ marginBottom: "40px" }}>
                        <Img
                          src="https://cdn.templates.unlayer.com/assets/1716977584054-Rectangle.png"
                          alt="Computer monitor displaying nature scene"
                          width="350"
                          height="250"
                          className="mobile-hero-image"
                          style={{
                            display: "block",
                            margin: "0 auto",
                            borderRadius: "8px",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                            maxWidth: "100%",
                          }}
                        />
                      </div>

                      {/* Title */}
                      <Heading
                        className="m-0 mb-6 text-white mobile-hero-title"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "32px",
                          lineHeight: "1.2",
                          margin: "0 0 24px 0",
                          color: "#ffffff",
                          fontWeight: "700",
                          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                        }}
                      >
                        Experience More
                      </Heading>

                      <Heading
                        className="m-0 mb-8 text-white mobile-text-xl"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "24px",
                          lineHeight: "1.2",
                          margin: "0 0 32px 0",
                          color: "#ffffff",
                          fontWeight: "600",
                          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                        }}
                      >
                        with Our Loyalty Program
                      </Heading>

                      {/* Description Text */}
                      <Text
                        className="m-0 mb-4 text-white mobile-text-sm"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "16px",
                          lineHeight: "1.6",
                          margin: "0 0 16px 0",
                          color: "#ffffff",
                          maxWidth: "450px",
                          marginLeft: "auto",
                          marginRight: "auto",
                          textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                        
                      </Text>

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
                          textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </Text>

                      {/* Sign Up Button */}
                      <div>
                        <Link
                          href={signUpUrl}
                          className="mobile-button-full"
                          style={{
                            backgroundColor: "#fbbf24",
                            color: "#000000",
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
                          Sign Up Today
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Product Cards Section */}
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
                      backgroundColor: "#1a1a1a",
                      padding: "40px",
                    }}
                    className="mobile-padding"
                  >
                    {/* Product Cards Container */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse" }}
                      className="mobile-stack"
                    >
                      <tr className="mobile-stack">
                       
                        {/* Gaming Setup 2 */}
                        <td
                          style={{
                            width: "50%",
                            verticalAlign: "top",
                            paddingLeft: "5px",
                            paddingRight: "5px",
                          }}
                          className="mobile-product-card"
                        >
                          <div
                            style={{
                              backgroundColor: "#2a2a2a",
                              borderRadius: "8px",
                              overflow: "hidden",
                              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                            }}
                          >
                            <Img
                              src="https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=200&h=150&fit=crop"
                              alt="Gaming setup with red lighting"
                              width="100%"
                              height="150"
                              className="mobile-product-image"
                              style={{
                                display: "block",
                                width: "100%",
                                objectFit: "cover",
                              }}
                            />
                            <div style={{ padding: "20px" }}>
                              <Text
                                className="m-0 text-white mobile-text-sm"
                                style={{
                                  fontFamily: "Inter, sans-serif",
                                  fontSize: "14px",
                                  lineHeight: "1.5",
                                  margin: "0",
                                  color: "#ffffff",
                                  textAlign: "center",
                                }}
                              >
                                This is a new Text block. Change the text.
                              </Text>
                            </div>
                          </div>
                        </td>

                        {/* Gaming Setup 3 */}
                        <td
                          style={{
                            width: "50%",
                            verticalAlign: "top",
                            paddingLeft: "10px",
                          }}
                          className="mobile-product-card"
                        >
                          <div
                            style={{
                              backgroundColor: "#2a2a2a",
                              borderRadius: "8px",
                              overflow: "hidden",
                              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                            }}
                          >
                            <Img
                              src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=200&h=150&fit=crop"
                              alt="Gaming setup with purple lighting"
                              width="100%"
                              height="150"
                              className="mobile-product-image"
                              style={{
                                display: "block",
                                width: "100%",
                                objectFit: "cover",
                              }}
                            />
                            <div style={{ padding: "20px" }}>
                              <Text
                                className="m-0 text-white mobile-text-sm"
                                style={{
                                  fontFamily: "Inter, sans-serif",
                                  fontSize: "14px",
                                  lineHeight: "1.5",
                                  margin: "0",
                                  color: "#ffffff",
                                  textAlign: "center",
                                }}
                              >
                                This is a new Text block. Change the text.
                              </Text>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore. Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium et quasi
                      architecto beatae vitae dicta sunt explicabo.
                    </Text>

                    {/* Social Media Icons */}
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", margin: "0 auto 20px auto" }}
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
                          <Link href={rssUrl}>
                            <Img
                              src="https://cdn.tools.unlayer.com/social/icons/rounded/rss.png"
                              alt="RSS"
                              width="32"
                              height="32"
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
                          style={{ width: "70%", textAlign: "left", verticalAlign: "middle" }}
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
                          style={{ width: "30%", textAlign: "right", verticalAlign: "middle" }}
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
        </Body>
      </Tailwind>
    </Html>
  )
}

LoyaltyProgram.PreviewProps = {
  logoUrl: "/placeholder.svg?height=30&width=100",
  signUpUrl: "https://example.com/signup",
  facebookUrl: "https://facebook.com/example",
  twitterUrl: "https://twitter.com/example",
  instagramUrl: "https://instagram.com/example",
  rssUrl: "https://example.com/rss",
  unsubscribeUrl: "https://example.com/unsubscribe",
  privacyUrl: "https://example.com/privacy",
  webUrl: "https://example.com",
} satisfies LoyaltyProgramEmailProps
