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

interface SpaAnniversaryEmailProps {
  customerName?: string
  yearsOfService?: string
  discountPercentage?: string
  contactUrl?: string
  homeUrl?: string
  pagesUrl?: string
  servicesUrl?: string
  contactUsUrl?: string
  facebookUrl?: string
  twitterUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
  companyAddress?: string
  companyNumber?: string
  preferencesUrl?: string
  unsubscribeUrl?: string
  viewInBrowserUrl?: string
}

export default function Anniversary({
  customerName = "Valued Customer",
  yearsOfService = "1",
  discountPercentage = "40%",
  contactUrl = "#",
  homeUrl = "#",
  pagesUrl = "#",
  servicesUrl = "#",
  contactUsUrl = "#",
  facebookUrl = "https://facebook.com",
  twitterUrl = "https://twitter.com",
  linkedinUrl = "https://linkedin.com",
  instagramUrl = "https://instagram.com",
  companyAddress = "2261 Market Street #4567 San Francisco, CA 94114",
  companyNumber = "94114",
  preferencesUrl = "#",
  unsubscribeUrl = "#",
  viewInBrowserUrl = "#",
}: SpaAnniversaryEmailProps) {
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
          
          .wavy-border-top {
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="%23000000"></path><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="%23000000"></path><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="%23000000"></path></svg>') repeat-x;
            background-size: 1200px 120px;
            height: 120px;
            width: 100%;
          }
          
          .wavy-border-bottom {
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="%23ffffff"></path><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="%23ffffff"></path><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="%23ffffff"></path></svg>') repeat-x;
            background-size: 1200px 120px;
            height: 120px;
            width: 100%;
            transform: rotate(180deg);
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
            
            .mobile-text-6xl { 
              font-size: 48px !important; 
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
            
            .mobile-nav-hidden {
              display: none !important;
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
            
            .mobile-text-6xl {
              font-size: 40px !important;
            }
          }
        `}</style>
      </Head>
      <Preview>🎉 Happy 1 Year Anniversary! Here's 40% off to celebrate with us</Preview>
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
            {/* Header Navigation */}
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
                      padding: "20px 40px",
                    }}
                    className="mobile-padding-sm"
                  >
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                      <tr>
                        <td style={{ width: "30%", verticalAlign: "middle" }}>
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
                        <td
                          style={{ width: "70%", textAlign: "right", verticalAlign: "middle" }}
                          className="mobile-nav-hidden"
                        >
                          <Link
                            href={homeUrl}
                            style={{
                              color: "#ffffff",
                              textDecoration: "none",
                              fontSize: "14px",
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "500",
                              marginRight: "20px",
                            }}
                          >
                            Home
                          </Link>
                          <Link
                            href={pagesUrl}
                            style={{
                              color: "#ffffff",
                              textDecoration: "none",
                              fontSize: "14px",
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "500",
                              marginRight: "20px",
                            }}
                          >
                            Pages
                          </Link>
                          <Link
                            href={servicesUrl}
                            style={{
                              color: "#ffffff",
                              textDecoration: "none",
                              fontSize: "14px",
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "500",
                              marginRight: "20px",
                            }}
                          >
                            Services
                          </Link>
                       
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Wavy Border Top */}
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
                    className="wavy-border-top"
                    style={{
                      height: "60px",
                      background: "#000000",
                      backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' strokeWidth='0' strokeDasharray='6%2c14' strokeDashoffset='0' strokeLinecap='square'/%3e%3c/svg%3e")`,
                      clipPath:
                        "polygon(0 0, 100% 0, 100% 70%, 90% 100%, 80% 70%, 70% 100%, 60% 70%, 50% 100%, 40% 70%, 30% 100%, 20% 70%, 10% 100%, 0 70%)",
                    }}
                  ></td>
                </tr>
              </table>
            </Section>

            {/* Main Anniversary Content */}
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
                      padding: "60px 40px 40px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                    <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          {/* Large Number and Anniversary Text */}
                          <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: "30px" }}>
                            <tr>
                              <td style={{ textAlign: "center"}}>
                                <Text
                                  className="mobile-text-6xl"
                                  style={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontSize: "120px",
                                    lineHeight: "1",
                                    margin: "0",
                                    color: "#000000",
                                    fontWeight: "100",
                                  
                                    zIndex: "1",
                                  }}
                                >
                                  {yearsOfService}
                                </Text>

                              
                              </td>
                            </tr>
                          </table>

                          {/* ANNIVERSARY Headline */}
                          <Heading
                            className="mobile-text-3xl"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "36px",
                              lineHeight: "1.2",
                              margin: "0 0 30px 0",
                              color: "#000000",
                              fontWeight: "800",
                              letterSpacing: "3px",
                              textTransform: "uppercase",
                            }}
                          >
                            ANNIVERSARY
                          </Heading>

                          {/* Description Text */}
                          <Text
                            className="mobile-text-base"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              lineHeight: "1.6",
                              margin: "0 0 40px 0",
                              color: "#666666",
                              maxWidth: "400px",
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                          >
                            We are so happy that you have been with us this whole time. To celebrate, we want to give
                            something special just for being such an awesome member!
                          </Text>

                          {/* Spa Image */}
                          <div style={{ marginBottom: "40px" }}>
                            <Img
                              src="https://cdn.templates.unlayer.com/assets/1652870272661-Layer%201.png"
                              alt="Relaxing spa treatment - woman enjoying wellness services"
                              width="400"
                              height="250"
                              style={{
                                width: "100%",
                                maxWidth: "400px",
                                height: "auto",
                                display: "block",
                                margin: "0 auto",
                                borderRadius: "8px",
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Wavy Border Middle */}
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
                      height: "60px",
                      background: "#ffffff",
                      clipPath:
                        "polygon(0 30%, 10% 0, 20% 30%, 30% 0, 40% 30%, 50% 0, 60% 30%, 70% 0, 80% 30%, 90% 0, 100% 30%, 100% 100%, 0 100%)",
                    }}
                  ></td>
                </tr>
              </table>
            </Section>

            {/* Black Offer Section */}
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
                      padding: "60px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                    <Text
                      className="mobile-text-xl"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "20px",
                        lineHeight: "1.4",
                        margin: "0 0 30px 0",
                        color: "#ffffff",
                        maxWidth: "400px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      We are so happy that you are part of the family. Here's {discountPercentage} off to prove it.
                    </Text>

                    <Link
                      href={contactUrl}
                      className="mobile-button-full"
                      style={{
                        backgroundColor: "#ffffff",
                        color: "#000000",
                        padding: "14px 32px",
                        textDecoration: "none",
                        borderRadius: "4px",
                        fontSize: "16px",
                        fontWeight: "600",
                        fontFamily: "Inter, sans-serif",
                        display: "inline-block",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Contact Us
                    </Link>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Wavy Border Bottom */}
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
                      height: "60px",
                      background: "#000000",
                      clipPath:
                        "polygon(0 0, 100% 0, 100% 70%, 90% 100%, 80% 70%, 70% 100%, 60% 70%, 50% 100%, 40% 70%, 30% 100%, 20% 70%, 10% 100%, 0 70%)",
                    }}
                  ></td>
                </tr>
              </table>
            </Section>

            {/* Footer Section */}
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
                      textAlign: "center",
                    }}
                    className="mobile-padding"
                  >
                    {/* Social Media Icons */}
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", margin: "0 auto 30px auto" }}
                      className="mobile-social-stack"
                    >
                      <tr className="mobile-social-stack">
                        <td style={{ padding: "0 8px" }} className="mobile-social-item">
                          <Link href={facebookUrl}>
                            <div
                              style={{
                                width: "36px",
                                height: "36px",
                                backgroundColor: "#000000",
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
                                backgroundColor: "#000000",
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
                                backgroundColor: "#000000",
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
                        <td style={{ padding: "0 8px" }} className="mobile-social-item">
                          <Link href={instagramUrl}>
                            <div
                              style={{
                                width: "36px",
                                height: "36px",
                                backgroundColor: "#000000",
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

                    {/* Company Address */}
                    <Text
                      className="mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        lineHeight: "1.6",
                        margin: "0 0 8px 0",
                        color: "#666666",
                      }}
                    >
                      {companyAddress}
                    </Text>

                    <Text
                      className="mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        lineHeight: "1.6",
                        margin: "0 0 20px 0",
                        color: "#666666",
                      }}
                    >
                      All rights reserved - Company No {companyNumber}
                    </Text>

                    {/* Footer Links */}
                    <Text
                      className="mobile-text-xs"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "12px",
                        margin: "0",
                        color: "#999999",
                      }}
                    >
                      <Link
                        href={preferencesUrl}
                        style={{
                          color: "#999999",
                          textDecoration: "none",
                        }}
                      >
                        Preferences
                      </Link>
                      {" | "}
                      <Link
                        href={unsubscribeUrl}
                        style={{
                          color: "#999999",
                          textDecoration: "none",
                        }}
                      >
                        Unsubscribe
                      </Link>
                      {" | "}
                      <Link
                        href={viewInBrowserUrl}
                        style={{
                          color: "#999999",
                          textDecoration: "none",
                        }}
                      >
                        View in browser
                      </Link>
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

Anniversary.PreviewProps = {
  customerName: "Valued Customer",
  yearsOfService: "1",
  discountPercentage: "40%",
  contactUrl: "https://example.com/contact",
  homeUrl: "https://example.com",
  pagesUrl: "https://example.com/pages",
  servicesUrl: "https://example.com/services",
  contactUsUrl: "https://example.com/contact",
  facebookUrl: "https://facebook.com/example",
  twitterUrl: "https://twitter.com/example",
  linkedinUrl: "https://linkedin.com/company/example",
  instagramUrl: "https://instagram.com/example",
  companyAddress: "2261 Market Street #4567 San Francisco, CA 94114",
  companyNumber: "94114",
  preferencesUrl: "https://example.com/preferences",
  unsubscribeUrl: "https://example.com/unsubscribe",
  viewInBrowserUrl: "https://example.com/view",
} satisfies SpaAnniversaryEmailProps
