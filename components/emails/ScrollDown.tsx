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

interface ScrollDownEmailProps {
  logoUrl?: string
  shopNowUrl?: string
  facebookUrl?: string
  twitterUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
  unsubscribeUrl?: string
  privacyUrl?: string
  webUrl?: string
}

export default function ScrollDown({
  logoUrl = "/placeholder.svg?height=30&width=100",
  shopNowUrl = "#",
  facebookUrl = "https://facebook.com",
  twitterUrl = "https://twitter.com",
  linkedinUrl = "https://linkedin.com",
  instagramUrl = "https://instagram.com",
  unsubscribeUrl = "#",
  privacyUrl = "#",
  webUrl = "#",
}: ScrollDownEmailProps) {
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
            
            .mobile-section-padding {
              padding: 30px 20px !important;
            }
            
            .mobile-product-card {
              margin-bottom: 20px !important;
            }
            
            .mobile-testimonial-card {
              margin-bottom: 20px !important;
            }
            
            .mobile-logo-badge {
              width: 80px !important;
              height: 80px !important;
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
      <Preview>Let's Scroll Down - Recommended Products Based on your Preferences</Preview>
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
                      backgroundColor: "#2a2a2a",
                      padding: "50px 40px",
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
                        color: "#f97316",
                        fontWeight: "700",
                      }}
                    >
                      Let's Scroll Down
                    </Heading>

                    <Text
                      className="m-0 mb-8 text-white mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        margin: "0 0 32px 0",
                        color: "#ffffff",
                      }}
                    >
                      Recommended Products Based on your Preferences
                    </Text>

                    {/* Scroll Down Badge */}
                    <div
                      style={{
                        display: "inline-block",
                        width: "150px",
                        height: "150px",
                        backgroundColor: "#ffffff",
                        borderRadius: "50%",
                        border: "3px solid #f97316",
                      }}
                      className="mobile-logo-badge"
                    >
                      <img src="https://cdn.templates.unlayer.com/assets/1695375086825-animation_lmq094jv.gif" alt=""
                     className="mobile-full-width"
                      style={{
                        width: "100%",
                        maxWidth: "600px",
                        height: "auto",
                      }}
                      />
                    </div>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Products Section */}
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
                      padding: "40px",
                    }}
                    className="mobile-padding"
                  >
                    <Text
                      className="m-0 mb-6 text-white mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.6",
                        margin: "0 0 24px 0",
                        color: "#ffffff",
                        textAlign: "center",
                      }}
                    >
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>

                    {/* Product Cards Container */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", marginBottom: "30px" }}
                      className="mobile-stack"
                    >
                      <tr className="mobile-stack">
                       

                        {/* Product 2 - Crafting Tools */}
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
                              backgroundColor: "#3a3a3a",
                              borderRadius: "8px",
                              overflow: "hidden",
                            }}
                          >
                            <Img
                              src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=200&h=150&fit=crop"
                              alt="Crafting tools"
                              width="100%"
                              height="150"
                              style={{
                                display: "block",
                                width: "100%",
                                objectFit: "cover",
                              }}
                            />
                            <div style={{ padding: "15px" }}>
                              <Heading
                                className="m-0 mb-2 text-white mobile-text-base"
                                style={{
                                  fontFamily: "Poppins, sans-serif",
                                  fontSize: "16px",
                                  margin: "0 0 8px 0",
                                  color: "#ffffff",
                                  fontWeight: "600",
                                }}
                              >
                                Lorem Ipsum si
                              </Heading>
                              <Text
                                className="m-0 mb-3 text-gray-300 mobile-text-xs"
                                style={{
                                  fontFamily: "Inter, sans-serif",
                                  fontSize: "12px",
                                  lineHeight: "1.4",
                                  margin: "0 0 12px 0",
                                  color: "#d1d5db",
                                }}
                              >
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                              </Text>
                              <div style={{ marginBottom: "8px" }}>
                                <span style={{ color: "#f97316", fontSize: "14px" }}>★★★★★</span>
                              </div>
                              <Text
                                className="m-0 text-white mobile-text-base"
                                style={{
                                  fontFamily: "Poppins, sans-serif",
                                  fontSize: "18px",
                                  margin: "0",
                                  color: "#ffffff",
                                  fontWeight: "700",
                                }}
                              >
                                $20.33
                              </Text>
                            </div>
                          </div>
                        </td>

                        {/* Product 3 - Camera */}
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
                              backgroundColor: "#3a3a3a",
                              borderRadius: "8px",
                              overflow: "hidden",
                            }}
                          >
                            <Img
                              src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=200&h=150&fit=crop"
                              alt="Vintage camera"
                              width="100%"
                              height="150"
                              style={{
                                display: "block",
                                width: "100%",
                                objectFit: "cover",
                              }}
                            />
                            <div style={{ padding: "15px" }}>
                              <Heading
                                className="m-0 mb-2 text-white mobile-text-base"
                                style={{
                                  fontFamily: "Poppins, sans-serif",
                                  fontSize: "16px",
                                  margin: "0 0 8px 0",
                                  color: "#ffffff",
                                  fontWeight: "600",
                                }}
                              >
                                Lorem Ipsum si
                              </Heading>
                              <Text
                                className="m-0 mb-3 text-gray-300 mobile-text-xs"
                                style={{
                                  fontFamily: "Inter, sans-serif",
                                  fontSize: "12px",
                                  lineHeight: "1.4",
                                  margin: "0 0 12px 0",
                                  color: "#d1d5db",
                                }}
                              >
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                              </Text>
                              <div style={{ marginBottom: "8px" }}>
                                <span style={{ color: "#f97316", fontSize: "14px" }}>★★★★★</span>
                              </div>
                              <Text
                                className="m-0 text-white mobile-text-base"
                                style={{
                                  fontFamily: "Poppins, sans-serif",
                                  fontSize: "18px",
                                  margin: "0",
                                  color: "#ffffff",
                                  fontWeight: "700",
                                }}
                              >
                                $20.33
                              </Text>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>

                    {/* Shop Now Button */}
                    <div style={{ textAlign: "center" }}>
                      <Link
                        href={shopNowUrl}
                        className="mobile-button-full"
                        style={{
                          backgroundColor: "transparent",
                          color: "#ffffff",
                          padding: "12px 30px",
                          textDecoration: "none",
                          border: "2px solid #ffffff",
                          borderRadius: "4px",
                          fontSize: "16px",
                          fontWeight: "600",
                          fontFamily: "Inter, sans-serif",
                          display: "inline-block",
                        }}
                      >
                        Shop Now
                      </Link>
                    </div>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Testimonials Section */}
            <Section className="px-0 py-0 bg-white">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%" }}
                className="mobile-table-full"
              >
                <tr>
                  <td className="mobile-section-padding" style={{ padding: "50px 40px", width: "100%" }}>
                    <Heading
                      className="m-0 mb-8 text-gray-900 mobile-text-2xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "28px",
                        margin: "0 0 32px 0",
                        color: "#111827",
                        fontWeight: "700",
                      }}
                    >
                      What people say...
                    </Heading>

                    {/* Testimonials Container */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse" }}
                      className="mobile-stack"
                    >
                      <tr className="mobile-stack">
                       

                        {/* Testimonial 2 */}
                        <td
                          style={{
                            width: "50%",
                            verticalAlign: "top",
                            paddingLeft: "5px",
                            paddingRight: "5px",
                          }}
                          className="mobile-testimonial-card"
                        >
                          <div
                            style={{
                              backgroundColor: "#f9fafb",
                              borderRadius: "8px",
                              padding: "20px",
                              textAlign: "center",
                            }}
                          >
                            <Img
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
                              alt="Customer testimonial"
                              width="60"
                              height="60"
                              style={{
                                display: "block",
                                margin: "0 auto 15px auto",
                                borderRadius: "50%",
                              }}
                            />
                            <Text
                              className="m-0 mb-3 text-gray-700 mobile-text-xs"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "14px",
                                lineHeight: "1.5",
                                margin: "0 0 12px 0",
                                color: "#374151",
                              }}
                            >
                              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris.
                            </Text>
                            <Text
                              className="m-0 text-gray-900 mobile-text-sm"
                              style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "14px",
                                margin: "0",
                                color: "#111827",
                                fontWeight: "600",
                              }}
                            >
                              - Sarah M
                            </Text>
                          </div>
                        </td>

                        {/* Testimonial 3 */}
                        <td
                          style={{
                            width: "50%",
                            verticalAlign: "top",
                            paddingLeft: "10px",
                          }}
                          className="mobile-testimonial-card"
                        >
                          <div
                            style={{
                              backgroundColor: "#f9fafb",
                              borderRadius: "8px",
                              padding: "20px",
                              textAlign: "center",
                            }}
                          >
                            <Img
                              src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=80&h=80&fit=crop&crop=face"
                              alt="Customer testimonial"
                              width="60"
                              height="60"
                              style={{
                                display: "block",
                                margin: "0 auto 15px auto",
                                borderRadius: "50%",
                              }}
                            />
                            <Text
                              className="m-0 mb-3 text-gray-700 mobile-text-xs"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "14px",
                                lineHeight: "1.5",
                                margin: "0 0 12px 0",
                                color: "#374151",
                              }}
                            >
                              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris.
                            </Text>
                            <Text
                              className="m-0 text-gray-900 mobile-text-sm"
                              style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "14px",
                                margin: "0",
                                color: "#111827",
                                fontWeight: "600",
                              }}
                            >
                              - Mike R
                            </Text>
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
                      labore. Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium et quasi.
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

ScrollDown.PreviewProps = {
  logoUrl: "/placeholder.svg?height=30&width=100",
  shopNowUrl: "https://example.com/shop",
  facebookUrl: "https://facebook.com/example",
  twitterUrl: "https://twitter.com/example",
  linkedinUrl: "https://linkedin.com/company/example",
  instagramUrl: "https://instagram.com/example",
  unsubscribeUrl: "https://example.com/unsubscribe",
  privacyUrl: "https://example.com/privacy",
  webUrl: "https://example.com",
} satisfies ScrollDownEmailProps
