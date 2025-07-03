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

interface JuneteenthFreedomEmailProps {
  donateUrl?: string
  unsubscribeUrl?: string
  privacyPolicyUrl?: string
  websiteUrl?: string
  facebookUrl?: string
  twitterUrl?: string
  youtubeUrl?: string
  pinterestUrl?: string
  companyName?: string
}

export default function FreedomEmail({
  donateUrl = "#",
  unsubscribeUrl = "#",
  privacyPolicyUrl = "#",
  websiteUrl = "#",
  facebookUrl = "https://facebook.com",
  twitterUrl = "https://twitter.com",
  youtubeUrl = "https://youtube.com",
  pinterestUrl = "https://pinterest.com",
  companyName = "Your Organization",
}: JuneteenthFreedomEmailProps) {
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
              padding: 20px 15px !important; 
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
            
            .mobile-text-4xl { 
              font-size: 30px !important; 
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
              margin-bottom: 10px !important;
            }
            
            .mobile-button-full { 
              width: 100% !important; 
              max-width: 320px !important;
              padding: 14px 24px !important;
            }
            
            .mobile-table-full {
              width: 100% !important;
            }
            
            .mobile-section-padding {
              padding: 30px 15px !important;
            }
            
            .mobile-grid-item {
              width: 100% !important;
              margin: 0 0 12px 0 !important;
              padding: 0 !important;
            }
            
            .mobile-social-item {
              display: inline-block !important;
              margin: 0 6px !important;
            }
          }
          
          @media only screen and (min-width: 601px) {
            .desktop-grid-container {
              display: flex !important;
              flex-wrap: wrap !important;
              justify-content: space-between !important;
            }
            
            .desktop-grid-item {
              width: 48% !important;
              margin-bottom: 12px !important;
            }
          }
          
          @media only screen and (max-width: 480px) {
            .mobile-text-2xl {
              font-size: 22px !important;
            }
            
            .mobile-text-3xl {
              font-size: 26px !important;
            }
            
            .mobile-text-4xl {
              font-size: 28px !important;
            }
          }
        `}</style>
      </Head>
      <Preview>🎉 Juneteenth Freedom Day - Join Our Donation Program to Support Community</Preview>
      <Tailwind>
        <Body
          className="bg-black m-0 p-0"
          style={{
            fontFamily: "Inter, sans-serif",
            margin: "0",
            padding: "0",
            width: "100%",
            minWidth: "100%",
            backgroundColor: "#000000",
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
            }}
          >
            {/* Hero Section with Overlay Text */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#000000" }}
                className="mobile-table-full"
              >
                <tr>
                  <td style={{ padding: "0", textAlign: "center" }}>
                    <div style={{ width: "100%", maxHeight: "400px", overflow: "hidden", background: "#000000" }}>
                      <Img
                        src="https://res.cloudinary.com/dirpuqqib/image/upload/v1750957177/1652855430707-header1_wiqajc.png"
                        alt="Juneteenth Freedom Day - Two women looking forward with determination"
                        width="600"
                        height="400"
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                          objectFit: "cover",
                          filter: "grayscale(100%)",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        width: "100%",
                        backgroundColor: "transparent",
                        padding: "20px 15px",
                        textAlign: "center",
                        marginTop: "-140px",
                        background:
                          "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.9) 80%, transparent 100%)",
                      }}
                      className="mobile-padding"
                    >
                      <div
                        style={{
                          background: "linear-gradient(45deg, #dc2626 0%, #ef4444 50%, #dc2626 100%)",
                          padding: "15px 20px",
                          margin: "0 auto 15px auto",
                          maxWidth: "400px",
                          borderRadius: "0",
                          transform: "rotate(-1deg)",
                          boxShadow: "0 4px 15px rgba(220, 38, 38, 0.3)",
                        }}
                      >
                        <Heading
                          className="m-0 text-yellow-400 mobile-text-3xl"
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "32px",
                            lineHeight: "1.1",
                            margin: "0 0 8px 0",
                            color: "#fbbf24",
                            fontWeight: "900",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                          }}
                        >
                          JUNETEENTH
                        </Heading>
                        <Heading
                          className="m-0 text-yellow-400 mobile-text-4xl"
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "36px",
                            lineHeight: "1.1",
                            margin: "0",
                            color: "#fbbf24",
                            fontWeight: "900",
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                          }}
                        >
                          FREEDOM DAY!
                        </Heading>
                      </div>

                      <Text
                        className="m-0 text-white mobile-text-lg"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "18px",
                          margin: "0",
                          color: "#ffffff",
                          fontWeight: "600",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                        }}
                      >
                        Donation Program
                      </Text>
                    </div>
                  </td>
                </tr>
              </table>
            </Section>

            {/* About Us Section */}
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
                      padding: "40px 15px",
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                    <Heading
                      className="m-0 mb-6 text-yellow-400 mobile-text-3xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "32px",
                        lineHeight: "1.2",
                        margin: "0 0 24px 0",
                        color: "#fbbf24",
                        fontWeight: "800",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      About Us
                    </Heading>

                    <Text
                      className="m-0 text-white mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.6",
                        margin: "0",
                        color: "#ffffff",
                        maxWidth: "500px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit esse cillum dolore eu fugiat
                      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Community Unity Image */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%" }}
                className="mobile-table-full"
              >
                <tr>
                  <td style={{ padding: "0", textAlign: "center" }}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1652854745408-vid.png"
                      alt="Community members joining hands together in unity"
                      width="600"
                      height="300"
                      className="object-contain"
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        filter: "grayscale(100%)",
                      }}
                    />
                  </td>
                </tr>
              </table>
            </Section>

            {/* Donation CTA Section */}
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
                      padding: "40px 15px",
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                    <Heading
                      className="m-0 mb-4 text-yellow-400 mobile-text-3xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "32px",
                        lineHeight: "1.2",
                        margin: "0 0 16px 0",
                        color: "#fbbf24",
                        fontWeight: "800",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      MAKE YOUR DONATIONS
                    </Heading>

                    <Text
                      className="m-0 mb-8 text-white mobile-text-lg"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "18px",
                        margin: "0 0 32px 0",
                        color: "#ffffff",
                        fontWeight: "400",
                      }}
                    >
                      to help these needy peoples
                    </Text>

                    <Link
                      href={donateUrl}
                      className="mobile-button-full"
                      style={{
                        backgroundColor: "#ffffff",
                        color: "#000000",
                        padding: "14px 24px",
                        textDecoration: "none",
                        borderRadius: "0",
                        fontSize: "16px",
                        fontWeight: "700",
                        fontFamily: "Inter, sans-serif",
                        display: "inline-block",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        border: "2px solid #ffffff",
                      }}
                    >
                      Donate NOW
                    </Link>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Photo Grid Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#000000" }}
                className="mobile-table-full"
              >
                <tr>
                  <td style={{ padding: "15px" }} className="mobile-padding-sm">
                    <div className="desktop-grid-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                      {/* First Image */}
                      <div className="desktop-grid-item mobile-grid-item" style={{ width: "48%", marginBottom: "12px" }}>
                        <Img
                          src="https://cdn.templates.unlayer.com/assets/1652787626359-pic1.png"
                          alt="Community family gathering"
                          width="280"
                          height="200"
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                            filter: "grayscale(100%)",
                          }}
                        />
                      </div>
                      {/* Second Image */}
                      <div className="desktop-grid-item mobile-grid-item" style={{ width: "48%", marginBottom: "12px" }}>
                        <Img
                          src="https://cdn.templates.unlayer.com/assets/1652787628727-pic2.png"
                          alt="People working together on laptops"
                          width="280"
                          height="200"
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                            filter: "grayscale(100%)",
                          }}
                        />
                      </div>
                     
                   
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
                style={{
                  borderCollapse: "collapse",
                  width: "100%",
                  backgroundColor: "#000000",
                }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    className="mobile-padding"
                    style={{
                      padding: "30px 15px",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        color: "#ffffff",
                        margin: "0 0 15px 0",
                        fontWeight: "600",
                        border: "2px solid #ffffff",
                        padding: "8px 16px",
                        display: "inline-block",
                      }}
                      className="mobile-text-base"
                    >
                      [Your Logo]
                    </Text>

                    <table cellPadding="0" cellSpacing="0" style={{ margin: "0 auto 15px auto" }}>
                      <tr>
                        <td style={{ padding: "0 6px" }} className="mobile-social-item">
                          <Link href={facebookUrl}>
                            <div
                              style={{
                                width: "32px",
                                height: "32px",
                                backgroundColor: "#1877f2",
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
                        <td style={{ padding: "0 6px" }} className="mobile-social-item">
                          <Link href={twitterUrl}>
                            <div
                              style={{
                                width: "32px",
                                height: "32px",
                                backgroundColor: "#1da1f2",
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
                                      t
                                    </Text>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </Link>
                        </td>
                        <td style={{ padding: "0 6px" }} className="mobile-social-item">
                          <Link href={youtubeUrl}>
                            <div
                              style={{
                                width: "32px",
                                height: "32px",
                                backgroundColor: "#ff0000",
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
                                        fontSize: "12px",
                                        color: "#ffffff",
                                        margin: "0",
                                        fontFamily: "Inter, sans-serif",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      yt
                                    </Text>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </Link>
                        </td>
                        <td style={{ padding: "0 6px" }} className="mobile-social-item">
                          <Link href={pinterestUrl}>
                            <div
                              style={{
                                width: "32px",
                                height: "32px",
                                backgroundColor: "#bd081c",
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
                                        p
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
                        className="m-0 mb-6 text-white mobile-text-sm"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "14px",
                          lineHeight: "1.6",
                          margin: "0 0 20px 0",
                          color: "#ffffff",
                          maxWidth: "400px",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna
                      </Text>
                    </td>
                  </tr>
                </table>
              </Section>

              {/* Address Bar */}
              <Section className="px-0 py-0">
                <table
                  width="100%"
                  cellPadding="0"
                  cellSpacing="0"
                  style={{
                    borderCollapse: "collapse",
                    width: "100%",
                    backgroundColor: "#fbbf24",
                  }}
                  className="mobile-table-full"
                >
                  <tr>
                    <td
                      style={{
                        padding: "12px 15px",
                        textAlign: "center",
                      }}
                      className="mobile-padding-sm"
                    >
                      <Text
                        className="m-0 text-black mobile-text-sm"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "14px",
                          margin: "0",
                          color: "#000000",
                          fontWeight: "600",
                        }}
                      >
                        2301 Market Street #4627, San Francisco, CA 94114
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

FreedomEmail.PreviewProps = {
  donateUrl: "https://example.com/donate",
  unsubscribeUrl: "https://example.com/unsubscribe",
  privacyPolicyUrl: "https://example.com/privacy",
  websiteUrl: "https://example.com",
  facebookUrl: "https://facebook.com/example",
  twitterUrl: "https://twitter.com/example",
  youtubeUrl: "https://youtube.com/example",
  pinterestUrl: "https://pinterest.com/example",
  companyName: "Freedom Foundation",
} satisfies JuneteenthFreedomEmailProps