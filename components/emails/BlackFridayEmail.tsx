import { Body, Container, Head, Heading, Html, Link, Preview, Section, Tailwind, Text } from "@react-email/components"

interface BlackFridayEmailProps {
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
}

export default function BlackFridayEmail({
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
}: BlackFridayEmailProps) {
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
            
            .mobile-product-stack {
              display: block !important;
              width: 100% !important;
            }
            
            .mobile-product-item {
              display: block !important;
              width: 100% !important;
              margin-bottom: 30px !important;
            }
            
            .mobile-product-image {
              width: 80px !important;
              height: 80px !important;
            }
          }
        `}</style>
      </Head>
      <Preview>Black Friday Deals Live Now - Up to 50% Off Everything!</Preview>
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
              backgroundColor: "#000000",
              borderRadius: "0",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Header Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#000000" }}
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
                            [Your Logo]
                          </Text>
                        </td>
                        <td style={{ width: "50%", textAlign: "right", verticalAlign: "middle" }}>
                          <Link
                            href={shopUrl}
                            style={{
                              backgroundColor: "#f97316",
                              color: "#ffffff",
                              padding: "12px 24px",
                              textDecoration: "none",
                              borderRadius: "4px",
                              fontSize: "14px",
                              fontWeight: "600",
                              fontFamily: "Inter, sans-serif",
                              display: "inline-block",
                              textTransform: "uppercase",
                              letterSpacing: "0.5px",
                            }}
                            className="mobile-text-sm"
                          >
                            SHOP NOW
                          </Link>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Hero Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#000000" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "40px 30px",
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                    <Text
                      className="m-0 mb-2 text-gray-400 mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        margin: "0 0 10px 0",
                        color: "#9ca3af",
                        fontWeight: "500",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Shop the Biggest Sale of the Year
                    </Text>

                    <Heading
                      className="m-0 mb-6 text-orange-500 mobile-text-4xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "42px",
                        lineHeight: "1.1",
                        margin: "0 0 30px 0",
                        color: "#f97316",
                        fontWeight: "800",
                        letterSpacing: "-1px",
                      }}
                    >
                      Black Friday Deals
                      <br />
                      Live Now!
                    </Heading>

                    <Text
                      className="m-0 text-gray-300 mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.6",
                        margin: "0",
                        color: "#d1d5db",
                        maxWidth: "400px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur.
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Product 1 - Gaming Controller */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#000000" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "30px",
                    }}
                    className="mobile-section-padding"
                  >
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse" }}
                      className="mobile-product-stack"
                    >
                      <tr className="mobile-product-stack">
                        <td
                          style={{ width: "120px", verticalAlign: "top", paddingRight: "20px" }}
                          className="mobile-product-item mobile-center"
                        >
                           <img src="https://media.istockphoto.com/id/618635048/photo/make-up-kit.jpg?b=1&s=612x612&w=0&k=20&c=WznhRQosxhSJjtmaLzQpCod0mJloZQ5DkNApaEskScU=" alt=""
                           className="w-full h-full object-cover rounded-lg" style={{ width: "100%", height: "100%", borderRadius: "8px" }}/>
                        </td>
                        <td style={{ verticalAlign: "top" }} className="mobile-product-item">
                          <Heading
                            className="m-0 mb-3 text-white mobile-text-lg"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "18px",
                              margin: "0 0 12px 0",
                              color: "#ffffff",
                              fontWeight: "600",
                            }}
                          >
                            Lorem Ipsum istu, as du
                          </Heading>
                          <Text
                            className="m-0 text-gray-400 mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              lineHeight: "1.5",
                              margin: "0",
                              color: "#9ca3af",
                            }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.
                          </Text>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Product 2 - Device Mockup */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#000000" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "30px",
                    }}
                    className="mobile-section-padding"
                  >
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse" }}
                      className="mobile-product-stack"
                    >
                      <tr className="mobile-product-stack">
                        <td
                          style={{ width: "50%", verticalAlign: "top", paddingRight: "20px" }}
                          className="mobile-product-item"
                        >
                          <Heading
                            className="m-0 mb-3 text-white mobile-text-lg"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "18px",
                              margin: "0 0 12px 0",
                              color: "#ffffff",
                              fontWeight: "600",
                            }}
                          >
                            Lorem Ipsum istu, as du
                          </Heading>
                          <Text
                            className="m-0 text-gray-400 mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              lineHeight: "1.5",
                              margin: "0",
                              color: "#9ca3af",
                            }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.
                          </Text>
                        </td>
                        <td
                          style={{ width: "50%", verticalAlign: "top", textAlign: "right" }}
                          className="mobile-product-item mobile-center"
                        >
                          <div
                            style={{
                              width: "120px",
                              height: "80px",
                              backgroundColor: "#ffffff",
                              borderRadius: "8px",
                              display: "inline-block",
                              padding: "15px",
                              textAlign: "center",
                            }}
                          >
                            <Text
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "14px",
                                color: "#000000",
                                margin: "0 0 5px 0",
                                fontWeight: "700",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                              }}
                            >
                              DEVICE
                            </Text>
                            <Text
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "14px",
                                color: "#000000",
                                margin: "0 0 8px 0",
                                fontWeight: "700",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                              }}
                            >
                              MOCK
                            </Text>
                            <Text
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "14px",
                                color: "#000000",
                                margin: "0",
                                fontWeight: "700",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                              }}
                            >
                              UP
                            </Text>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Product 3 - Speaker */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#000000" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "30px",
                    }}
                    className="mobile-section-padding"
                  >
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse" }}
                      className="mobile-product-stack"
                    >
                      <tr className="mobile-product-stack">
                        <td
                          style={{ width: "120px", verticalAlign: "top", paddingRight: "20px" }}
                          className="mobile-product-item mobile-center"
                        >
                          <div
                            style={{
                              width: "100px",
                              height: "100px",
                              backgroundColor: "#1f2937",
                              borderRadius: "8px",
                              display: "inline-block",
                            }}
                            className="mobile-product-image"
                          >
                           <img src="https://media.istockphoto.com/id/487770577/photo/makeup-set-on-table-front-view.jpg?b=1&s=612x612&w=0&k=20&c=dUn-ASpfJ_rCuR8mqT1fOubXd0Sqyc9VR_Mc5rzgRVI=" alt=""
                           className="w-full h-full object-cover rounded-lg" style={{ width: "100%", height: "100%", borderRadius: "8px" }}
                           />
                          </div>
                        </td>
                        <td style={{ verticalAlign: "top" }} className="mobile-product-item">
                          <Heading
                            className="m-0 mb-3 text-white mobile-text-lg"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "18px",
                              margin: "0 0 12px 0",
                              color: "#ffffff",
                              fontWeight: "600",
                            }}
                          >
                            Lorem Ipsum istu, as du
                          </Heading>
                          <Text
                            className="m-0 text-gray-400 mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              lineHeight: "1.5",
                              margin: "0",
                              color: "#9ca3af",
                            }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.
                          </Text>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* CTA Button Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#000000" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "40px 30px",
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                    <Link
                      href={shopUrl}
                      className="mobile-button-full"
                      style={{
                        backgroundColor: "#ffffff",
                        color: "#000000",
                        padding: "16px 40px",
                        textDecoration: "none",
                        borderRadius: "4px",
                        fontSize: "16px",
                        fontWeight: "600",
                        fontFamily: "Inter, sans-serif",
                        display: "inline-block",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Unlock 50% Off
                    </Link>
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
                  backgroundColor: "#f97316",
                }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    className="mobile-padding"
                    style={{
                      padding: "40px 30px",
                      textAlign: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "18px",
                        color: "#ffffff",
                        margin: "0 0 15px 0",
                        fontWeight: "600",
                      }}
                      className="mobile-text-lg"
                    >
                      [Your Logo]
                    </Text>

                    <Text
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        color: "#ffffff",
                        margin: "0 0 25px 0",
                        lineHeight: "1.5",
                      }}
                      className="mobile-text-sm"
                    >
                      Professional HTML Email Templates • No Coding & Design Skills Needed
                    </Text>

                    {/* Social Media Icons */}
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", margin: "0 auto 25px auto" }}
                    >
                      <tr>
                        <td style={{ padding: "0 8px" }}>
                          <Link href={facebookUrl}>
                            <div
                              style={{
                                width: "32px",
                                height: "32px",
                                backgroundColor: "#ffffff",
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
                                        color: "#f97316",
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
                        <td style={{ padding: "0 8px" }}>
                          <Link href={twitterUrl}>
                            <div
                              style={{
                                width: "32px",
                                height: "32px",
                                backgroundColor: "#ffffff",
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
                                        color: "#f97316",
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
                        <td style={{ padding: "0 8px" }}>
                          <Link href={linkedinUrl}>
                            <div
                              style={{
                                width: "32px",
                                height: "32px",
                                backgroundColor: "#ffffff",
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
                                        fontSize: "12px",
                                        color: "#f97316",
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
                        <td style={{ padding: "0 8px" }}>
                          <Link href={instagramUrl}>
                            <div
                              style={{
                                width: "32px",
                                height: "32px",
                                backgroundColor: "#ffffff",
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
                                        fontSize: "12px",
                                        color: "#f97316",
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

                    <Text
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "12px",
                        color: "#ffffff",
                        margin: "0",
                        opacity: "0.9",
                      }}
                      className="mobile-text-xs"
                    >
                      You received this email because you signed up for Unlayer
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

BlackFridayEmail.PreviewProps = {
  customerName: "John Doe",
  shopUrl: "https://example.com/shop",
  unsubscribeUrl: "https://example.com/unsubscribe",
  privacyPolicyUrl: "https://example.com/privacy",
  websiteUrl: "https://example.com",
  facebookUrl: "https://facebook.com/example",
  twitterUrl: "https://twitter.com/example",
  linkedinUrl: "https://linkedin.com/company/example",
  instagramUrl: "https://instagram.com/example",
  companyName: "Your Company",
} satisfies BlackFridayEmailProps
