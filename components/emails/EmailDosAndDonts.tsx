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

interface EmailDosAndDontsProps {
  logoUrl?: string
  homeUrl?: string
  pageUrl?: string
  aboutUrl?: string
  contactUrl?: string
  facebookUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
  rssUrl?: string
  unsubscribeUrl?: string
  privacyUrl?: string
  webUrl?: string
}

export default function EmailDosAndDonts({
  logoUrl = "/placeholder.svg?height=30&width=100",
  homeUrl = "#",
  pageUrl = "#",
  aboutUrl = "#",
  contactUrl = "#",
  facebookUrl = "https://facebook.com",
  linkedinUrl = "https://linkedin.com",
  instagramUrl = "https://instagram.com",
  rssUrl = "#",
  unsubscribeUrl = "#",
  privacyUrl = "#",
  webUrl = "#",
}: EmailDosAndDontsProps) {
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
            
            .mobile-nav-hide {
              display: none !important;
            }
            
            .mobile-illustration {
              width: 250px !important;
              height: 200px !important;
            }
            
            .mobile-card-stack {
              display: block !important;
              width: 100% !important;
            }
            
            .mobile-card-item {
              display: block !important;
              width: 100% !important;
              margin-bottom: 15px !important;
            }
          }
          
          @media only screen and (max-width: 480px) {
            .mobile-hero-title {
              font-size: 24px !important;
            }
            
            .mobile-illustration {
              width: 200px !important;
              height: 160px !important;
            }
          }
        `}</style>
      </Head>
      <Preview>Navigating Do's and Don'ts - Your Guide to Success</Preview>
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
              backgroundColor: "#1a1a1a",
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
                      backgroundColor: "#1a1a1a",
                      padding: "30px 40px 20px 40px",
                      width: "100%",
                      textAlign: "center",
                    }}
                    className="mobile-padding"
                  >
                    <Text
                      className="m-0 text-white font-medium mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "18px",
                        margin: "0 0 20px 0",
                        color: "#ffffff",
                      }}
                    >
                      [Your Logo]
                    </Text>

                    {/* Navigation Menu */}
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{
                        borderCollapse: "collapse",
                        margin: "0 auto",
                        border: "1px solid #333333",
                        borderRadius: "4px",
                      }}
                      className="mobile-nav-hide"
                    >
                      <tr>
                        <td style={{ padding: "8px 20px", borderRight: "1px solid #333333" }}>
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
                        <td style={{ padding: "8px 20px", borderRight: "1px solid #333333" }}>
                          <Link
                            href={pageUrl}
                            style={{
                              color: "#ffffff",
                              textDecoration: "none",
                              fontSize: "14px",
                              fontFamily: "Inter, sans-serif",
                            }}
                          >
                            Page
                          </Link>
                        </td>
                        <td style={{ padding: "8px 20px", borderRight: "1px solid #333333" }}>
                          <Link
                            href={aboutUrl}
                            style={{
                              color: "#ffffff",
                              textDecoration: "none",
                              fontSize: "14px",
                              fontFamily: "Inter, sans-serif",
                            }}
                          >
                            About Us
                          </Link>
                        </td>
                        <td style={{ padding: "8px 20px" }}>
                          <Link
                            href={contactUrl}
                            style={{
                              color: "#ffffff",
                              textDecoration: "none",
                              fontSize: "14px",
                              fontFamily: "Inter, sans-serif",
                            }}
                          >
                            Contact Us
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
                style={{ borderCollapse: "collapse", width: "100%" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      backgroundColor: "#1a1a1a",
                      padding: "40px",
                      textAlign: "center",
                      position: "relative",
                    }}
                    className="mobile-section-padding"
                  >
                    {/* Illustration */}
                    <div style={{ marginBottom: "30px" }}>
                      <Img
                        src="https://cdn.templates.unlayer.com/assets/1706761707652-Group%201.png"
                        alt="Person interacting with UI elements"
                        width="300"
                        height="240"
                        className="mobile-illustration"
                        style={{
                          display: "block",
                          margin: "0 auto",
                          maxWidth: "100%",
                        }}
                      />
                    </div>

                    {/* Title */}
                    <Heading
                      className="m-0 mb-4 text-yellow-400 mobile-hero-title"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "32px",
                        lineHeight: "1.2",
                        margin: "0 0 16px 0",
                        color: "#fbbf24",
                        fontWeight: "700",
                      }}
                    >
                      Navigating Do's and Don'ts
                    </Heading>

                    <Text
                      className="m-0 mb-6 text-yellow-400 mobile-text-lg"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "20px",
                        margin: "0 0 24px 0",
                        color: "#fbbf24",
                        fontWeight: "600",
                      }}
                    >
                      Your Guide to Success
                    </Text>

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
                      }}
                    >
                      This is a new Text block. Change the text Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra.
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Content Cards Section */}
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
                      padding: "0 40px 40px 40px",
                    }}
                    className="mobile-padding"
                  >
                    {/* Cards Container */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse" }}
                      className="mobile-card-stack"
                    >
                      <tr className="mobile-card-stack">
                        {/* Personalize Card */}
                        <td
                          style={{
                            width: "48%",
                            verticalAlign: "top",
                            paddingRight: "10px",
                          }}
                          className="mobile-card-item"
                        >
                          <div
                            style={{
                              backgroundColor: "#fbbf24",
                              borderRadius: "8px",
                              padding: "25px",
                              height: "200px",
                              position: "relative",
                            }}
                          >
                            <Heading
                              className="m-0 mb-3 text-black mobile-text-lg"
                              style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "20px",
                                margin: "0 0 12px 0",
                                color: "#000000",
                                fontWeight: "700",
                              }}
                            >
                              Personalize
                            </Heading>
                            <Text
                              className="m-0 text-black mobile-text-sm overflow-hidden"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "14px",
                                lineHeight: "1.5",
                                margin: "0",
                                color: "#000000",
                              }}
                            >
                              This is a new Text block. Change the text Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod tempor incididunt 
                             .
                            </Text>
                        
                          </div>
                        </td>

                        {/* Be Spammy Card */}
                        <td
                          style={{
                            width: "48%",
                            verticalAlign: "top",
                            paddingLeft: "10px",
                          }}
                          className="mobile-card-item"
                        >
                          <div
                            style={{
                              backgroundColor: "#14b8a6",
                              borderRadius: "8px",
                              padding: "25px",
                              height: "200px",
                              position: "relative",
                            }}
                          >
                            <Heading
                              className="m-0 mb-3 text-white mobile-text-lg"
                              style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "20px",
                                margin: "0 0 12px 0",
                                color: "#ffffff",
                                fontWeight: "700",
                              }}
                            >
                              Be Spammy
                            </Heading>
                            <Text
                              className="m-0 text-white mobile-text-sm"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "14px",
                                lineHeight: "1.5",
                                margin: "0",
                                color: "#ffffff",
                              }}
                            >
                              This is a new Text block. Change the text Lorem ipsum dolor sit amet.
                            </Text>
                        
                          </div>
                        </td>
                      </tr>
                    </table>

                    {/* Write in all CAPS Card */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", marginTop: "20px" }}
                    >
                      <tr>
                        <td
                          style={{ width: "48%", verticalAlign: "top", paddingRight: "10px" }}
                          className="mobile-card-item"
                        >
                          <div
                            style={{
                              backgroundColor: "#a855f7",
                              borderRadius: "8px",
                              padding: "25px",
                              height: "120px",
                              position: "relative",
                            }}
                          >
                            <Heading
                              className="m-0 mb-3 text-white mobile-text-lg"
                              style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "20px",
                                margin: "0 0 12px 0",
                                color: "#ffffff",
                                fontWeight: "700",
                              }}
                            >
                              Write in all CAPS!
                            </Heading>
                            <Text
                              className="m-0 text-white mobile-text-sm"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "14px",
                                lineHeight: "1.5",
                                margin: "0",
                                color: "#ffffff",
                              }}
                            >
                              This is a new Text block. Change the text 
                            </Text>
                         
                          </div>
                        </td>
                        <td style={{ width: "48%", paddingLeft: "10px" }} className="mobile-card-item">
                          {/* Empty space for layout */}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Pre-Header Text Section */}
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
                      padding: "40px",
                      position: "relative",
                    }}
                    className="mobile-section-padding"
                  >
                    <Heading
                      className="m-0 mb-4 text-black mobile-text-xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "24px",
                        margin: "0 0 16px 0",
                        color: "#000000",
                        fontWeight: "700",
                      }}
                    >
                      Add Pre-Header Text
                    </Heading>

                    <Text
                      className="m-0 text-gray-700 mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.6",
                        margin: "0",
                        color: "#374151",
                        maxWidth: "500px",
                      }}
                    >
                      This is a new Text block. Change the text Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra. This is
                      a new Text block.
                    </Text>

                    <div
                      style={{
                        position: "absolute",
                        bottom: "20px",
                        right: "20px",
                        fontSize: "32px",
                      }}
                    >
                      👍
                    </div>
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
                      padding: "40px",
                      textAlign: "center",
                      width: "100%",
                      backgroundColor: "#1a1a1a",
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

                    {/* Footer Links */}
                    <Text
                      className="m-0 text-white mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        lineHeight: "1.5",
                        margin: "0 0 10px 0",
                        color: "#ffffff",
                      }}
                    >
                      <Link href={unsubscribeUrl} style={{ color: "#ffffff", textDecoration: "none" }}>
                        UNSUBSCRIBE
                      </Link>{" "}
                      |{" "}
                      <Link href={privacyUrl} style={{ color: "#ffffff", textDecoration: "none" }}>
                        PRIVACY POLICY
                      </Link>{" "}
                      |{" "}
                      <Link href={webUrl} style={{ color: "#ffffff", textDecoration: "none" }}>
                        WEB
                      </Link>
                    </Text>

                    <Text
                      className="m-0 text-gray-400 mobile-text-xs"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "12px",
                        lineHeight: "1.5",
                        margin: "0",
                        color: "#9ca3af",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore.
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

EmailDosAndDonts.PreviewProps = {
  logoUrl: "/placeholder.svg?height=30&width=100",
  homeUrl: "https://example.com/home",
  pageUrl: "https://example.com/page",
  aboutUrl: "https://example.com/about",
  contactUrl: "https://example.com/contact",
  facebookUrl: "https://facebook.com/example",
  linkedinUrl: "https://linkedin.com/company/example",
  instagramUrl: "https://instagram.com/example",
  rssUrl: "https://example.com/rss",
  unsubscribeUrl: "https://example.com/unsubscribe",
  privacyUrl: "https://example.com/privacy",
  webUrl: "https://example.com",
} satisfies EmailDosAndDontsProps
