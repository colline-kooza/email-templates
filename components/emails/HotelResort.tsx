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

interface HotelResortEmailProps {
  customerName?: string
  bookNowUrl?: string
  homeUrl?: string
  serviceUrl?: string
  contactUrl?: string
  singleRoomUrl?: string
  doubleRoomUrl?: string
  premiumSuiteUrl?: string
  lambUrl?: string
  mignonUrl?: string
  individualPlanUrl?: string
  groupsPlanUrl?: string
  corporatePlanUrl?: string
  contactEmail?: string
  unsubscribeUrl?: string
}

export default function HotelResort({
  customerName = "Valued Guest",
  bookNowUrl = "#",
  homeUrl = "#",
  serviceUrl = "#",
  contactUrl = "#",
  singleRoomUrl = "#",
  doubleRoomUrl = "#",
  premiumSuiteUrl = "#",
  lambUrl = "#",
  mignonUrl = "#",
  individualPlanUrl = "#",
  groupsPlanUrl = "#",
  corporatePlanUrl = "#",
  contactEmail = "reservations@hotelresort.com",
  unsubscribeUrl = "#",
}: HotelResortEmailProps) {
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
              padding: 30px 15px !important; 
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
              font-size: 22px !important; 
            }
            
            .mobile-text-3xl { 
              font-size: 26px !important; 
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
              padding: 30px 15px !important;
            }
            
            .mobile-room-card {
              width: 100% !important;
              margin-bottom: 20px !important;
              padding: 0 10px !important;
            }
            
            .mobile-pricing-card {
              width: 100% !important;
              margin-bottom: 20px !important;
              padding: 0 10px !important;
            }
            
            .mobile-gallery-item {
              width: 48% !important;
              margin-bottom: 10px !important;
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
            
            .mobile-gallery-item {
              width: 100% !important;
            }
            
            .mobile-room-card {
              padding: 0 5px !important;
            }
            
            .mobile-pricing-card {
              padding: 0 5px !important;
            }
          }
        `}</style>
      </Head>
      <Preview>🏨 Welcome to Our Hotel & Resort - Book Your Perfect Stay Today!</Preview>
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
              backgroundColor: "#f3f4f6",
              borderRadius: "0",
              overflow: "hidden",
            }}
          >
            {/* Top Header */}
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
                      padding: "8px 20px",
                    }}
                    className="mobile-padding-sm"
                  >
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                      <tr>
                        <td style={{ width: "50%", verticalAlign: "middle" }}>
                          <Text
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "12px",
                              color: "#ffffff",
                              margin: "0",
                              fontWeight: "400",
                            }}
                            className="mobile-text-xs"
                          >
                            View in Browser
                          </Text>
                        </td>
                        <td style={{ width: "50%", textAlign: "right", verticalAlign: "middle" }}>
                          <table
                            cellPadding="0"
                            cellSpacing="0"
                            style={{ borderCollapse: "collapse", display: "inline-block" }}
                          >
                            <tr>
                              <td style={{ paddingLeft: "8px" }}>
                                <Link href="#" style={{ color: "#ffffff", textDecoration: "none" }}>
                                  <div
                                    style={{
                                      width: "20px",
                                      height: "20px",
                                      backgroundColor: "#4b5563",
                                      borderRadius: "50%",
                                      display: "inline-block",
                                      textAlign: "center",
                                      lineHeight: "20px",
                                    }}
                                  >
                                    <Text style={{ fontSize: "10px", color: "#ffffff", margin: "0" }}>f</Text>
                                  </div>
                                </Link>
                              </td>
                              <td style={{ paddingLeft: "8px" }}>
                                <Link href="#" style={{ color: "#ffffff", textDecoration: "none" }}>
                                  <div
                                    style={{
                                      width: "20px",
                                      height: "20px",
                                      backgroundColor: "#4b5563",
                                      borderRadius: "50%",
                                      display: "inline-block",
                                      textAlign: "center",
                                      lineHeight: "20px",
                                    }}
                                  >
                                    <Text style={{ fontSize: "10px", color: "#ffffff", margin: "0" }}>t</Text>
                                  </div>
                                </Link>
                              </td>
                              <td style={{ paddingLeft: "8px" }}>
                                <Link href="#" style={{ color: "#ffffff", textDecoration: "none" }}>
                                  <div
                                    style={{
                                      width: "20px",
                                      height: "20px",
                                      backgroundColor: "#4b5563",
                                      borderRadius: "50%",
                                      display: "inline-block",
                                      textAlign: "center",
                                      lineHeight: "20px",
                                    }}
                                  >
                                    <Text style={{ fontSize: "10px", color: "#ffffff", margin: "0" }}>in</Text>
                                  </div>
                                </Link>
                              </td>
                              <td style={{ paddingLeft: "8px" }}>
                                <Link href="#" style={{ color: "#ffffff", textDecoration: "none" }}>
                                  <div
                                    style={{
                                      width: "20px",
                                      height: "20px",
                                      backgroundColor: "#4b5563",
                                      borderRadius: "50%",
                                      display: "inline-block",
                                      textAlign: "center",
                                      lineHeight: "20px",
                                    }}
                                  >
                                    <Text style={{ fontSize: "10px", color: "#ffffff", margin: "0" }}>@</Text>
                                  </div>
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

            {/* Navigation Header */}
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
                      padding: "15px 20px",
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
                                    width: "32px",
                                    height: "32px",
                                    backgroundColor: "#f59e0b",
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
                                          🏨
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
                                    color: "#111827",
                                    margin: "0",
                                    fontWeight: "600",
                                  }}
                                  className="mobile-text-base"
                                >
                                  YOUR LOGO
                                </Text>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td style={{ width: "50%", textAlign: "right", verticalAlign: "middle" }}>
                          <table
                            cellPadding="0"
                            cellSpacing="0"
                            style={{ borderCollapse: "collapse", display: "inline-block" }}
                          >
                            <tr>
                              <td style={{ paddingLeft: "20px" }}>
                                <Link
                                  href={homeUrl}
                                  style={{
                                    color: "#6b7280",
                                    textDecoration: "none",
                                    fontSize: "14px",
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: "500",
                                  }}
                                  className="mobile-text-sm"
                                >
                                  HOME
                                </Link>
                              </td>
                              <td style={{ paddingLeft: "20px" }}>
                                <Link
                                  href={serviceUrl}
                                  style={{
                                    color: "#6b7280",
                                    textDecoration: "none",
                                    fontSize: "14px",
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: "500",
                                  }}
                                  className="mobile-text-sm"
                                >
                                  SERVICE
                                </Link>
                              </td>
                              <td style={{ paddingLeft: "20px" }}>
                                <Link
                                  href={contactUrl}
                                  style={{
                                    color: "#6b7280",
                                    textDecoration: "none",
                                    fontSize: "14px",
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: "500",
                                  }}
                                  className="mobile-text-sm"
                                >
                                  CONTACT
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

            {/* Hero Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{
                  borderCollapse: "collapse",
                  width: "100%",
                  backgroundImage: "url('https://res.cloudinary.com/dirpuqqib/image/upload/v1750951984/1619273804972-banner_gojqjg.jpg')",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  minHeight: "400px",
                }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "80px 40px",
                      textAlign: "center",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }}
                    className="mobile-section-padding"
                  >
                    <Heading
                      className="mobile-text-3xl"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "36px",
                        lineHeight: "1.2",
                        margin: "0 0 20px 0",
                        color: "#ffffff",
                        fontWeight: "700",
                        textAlign: "center",
                      }}
                    >
                      WELCOME TO OUR
                      <br />
                      HOTEL & RESORT
                    </Heading>

                    <Text
                      className="mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.6",
                        margin: "0 0 30px 0",
                        color: "#ffffff",
                        textAlign: "center",
                        maxWidth: "400px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natus suspendisse quam repudiandae.
                      Tempore et cum.
                    </Text>

                    <Link
                      href={bookNowUrl}
                      className="mobile-button-full"
                      style={{
                        backgroundColor: "#10b981",
                        color: "#ffffff",
                        padding: "14px 32px",
                        textDecoration: "none",
                        borderRadius: "6px",
                        fontSize: "16px",
                        fontWeight: "600",
                        fontFamily: "Inter, sans-serif",
                        display: "inline-block",
                      }}
                    >
                      Book Now
                    </Link>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Know More About Us */}
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
                      padding: "50px 30px 30px 30px",
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
                        margin: "0 0 15px 0",
                        color: "#111827",
                        fontWeight: "600",
                        textAlign: "center",
                      }}
                    >
                      Know More About Us
                    </Heading>

                    <Text
                      className="mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.6",
                        margin: "0 0 40px 0",
                        color: "#6b7280",
                        textAlign: "center",
                        maxWidth: "500px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      Lorem ipsum sodales orci. Class risus per inceptos himenaeos ut viverra per inceptos libra
                      torquent mauris conubia
                    </Text>

                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                      <tr className="mobile-stack">
                        <td
                          style={{ width: "40%", verticalAlign: "top", paddingRight: "30px" }}
                          className="mobile-stack-item"
                        >
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1619274014235-282x290x1.jpg"
                            alt="Professional headshot"
                            width="200"
                            height="200"
                            style={{
                              width: "100%",
                              height: "200px",
                              display: "block",
                              borderRadius: "8px",
                              objectFit: "cover",
                            }}
                          />
                        </td>
                        <td style={{ width: "60%", verticalAlign: "top" }} className="mobile-stack-item">
                          <div style={{ marginBottom: "25px" }}>
                            <Heading
                              className="mobile-text-lg"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "20px",
                                margin: "0 0 10px 0",
                                color: "#111827",
                                fontWeight: "600",
                                textAlign: "left",
                              }}
                            >
                              Who?
                            </Heading>
                            <Text
                              className="mobile-text-sm"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "14px",
                                lineHeight: "1.5",
                                margin: "0",
                                color: "#6b7280",
                                textAlign: "left",
                              }}
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula elit at amet ligula
                              cursus ut viverra
                            </Text>
                          </div>

                          <div>
                            <Heading
                              className="mobile-text-lg"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "20px",
                                margin: "0 0 10px 0",
                                color: "#111827",
                                fontWeight: "600",
                                textAlign: "left",
                              }}
                            >
                              Why?
                            </Heading>
                            <Text
                              className="mobile-text-sm"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "14px",
                                lineHeight: "1.5",
                                margin: "0",
                                color: "#6b7280",
                                textAlign: "left",
                              }}
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula elit at amet ligula
                              cursus ut viverra
                            </Text>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Room Types */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#f9fafb" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "50px 15px",
                    }}
                    className="mobile-section-padding"
                  >
                    <Heading
                      className="mobile-text-2xl"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "28px",
                        lineHeight: "1.3",
                        margin: "0 0 40px 0",
                        color: "#111827",
                        fontWeight: "600",
                        textAlign: "center",
                      }}
                    >
                      ROOM TYPES
                    </Heading>

                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                      <tr className="mobile-stack">
                        {/* Single Room */}
                        <td
                          style={{ width: "50%", verticalAlign: "top", padding: "0 10px 20px 10px" }}
                          className="mobile-room-card"
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
                              maxWidth: "300px",
                              margin: "0 auto",
                            }}
                          >
                            <tr>
                              <td style={{ padding: "0" }}>
                                <Img
                                  src="https://cdn.templates.unlayer.com/assets/1619274512441-smalldouble.jpg"
                                  alt="Single Room"
                                  width="300"
                                  height="180"
                                  style={{
                                    width: "100%",
                                    maxHeight: "180px",
                                    display: "block",
                                    borderRadius: "8px 8px 0 0",
                                    objectFit: "cover",
                                  }}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td style={{ padding: "20px", textAlign: "center" }}>
                                <Heading
                                  className="mobile-text-lg"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "18px",
                                    margin: "0 0 10px 0",
                                    color: "#111827",
                                    fontWeight: "600",
                                  }}
                                >
                                  SINGLE ROOM
                                </Heading>

                                <Text
                                  className="mobile-text-sm"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "14px",
                                    lineHeight: "1.5",
                                    margin: "0 0 15px 0",
                                    color: "#6b7280",
                                  }}
                                >
                                  Incident ut labore et dolore magna aliqua quis nostrud
                                </Text>

                                <Text
                                  className="mobile-text-2xl"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "24px",
                                    margin: "0 0 15px 0",
                                    color: "#111827",
                                    fontWeight: "700",
                                  }}
                                >
                                  $300
                                </Text>

                                <Link
                                  href={singleRoomUrl}
                                  style={{
                                    backgroundColor: "#111827",
                                    color: "#ffffff",
                                    padding: "10px 20px",
                                    textDecoration: "none",
                                    borderRadius: "4px",
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    fontFamily: "Inter, sans-serif",
                                    display: "inline-block",
                                    width: "80%",
                                    maxWidth: "200px",
                                  }}
                                >
                                  Book Now
                                </Link>
                              </td>
                            </tr>
                          </table>
                        </td>

                        {/* Double Room */}
                        <td
                          style={{ width: "50%", verticalAlign: "top", padding: "0 10px 20px 10px" }}
                          className="mobile-room-card"
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
                              maxWidth: "300px",
                              margin: "0 auto",
                            }}
                          >
                            <tr>
                              <td style={{ padding: "0" }}>
                                <Img
                                  src="https://cdn.templates.unlayer.com/assets/1619274516188-smallsingle.jpg"
                                  alt="Double Room"
                                  width="300"
                                  height="180"
                                  style={{
                                    width: "100%",
                                    maxHeight: "180px",
                                    display: "block",
                                    borderRadius: "8px 8px 0 0",
                                    objectFit: "cover",
                                  }}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td style={{ padding: "20px", textAlign: "center" }}>
                                <Heading
                                  className="mobile-text-lg"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "18px",
                                    margin: "0 0 10px 0",
                                    color: "#111827",
                                    fontWeight: "600",
                                  }}
                                >
                                  DOUBLE ROOM
                                </Heading>

                                <Text
                                  className="mobile-text-sm"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "14px",
                                    lineHeight: "1.5",
                                    margin: "0 0 15px 0",
                                    color: "#6b7280",
                                  }}
                                >
                                  Perfect for couples or friends, offering comfort and style.
                                </Text>

                                <Text
                                  className="mobile-text-2xl"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "24px",
                                    margin: "0 0 15px 0",
                                    color: "#111827",
                                    fontWeight: "700",
                                  }}
                                >
                                  $400
                                </Text>

                                <Link
                                  href={doubleRoomUrl}
                                  style={{
                                    backgroundColor: "#111827",
                                    color: "#ffffff",
                                    padding: "10px 20px",
                                    textDecoration: "none",
                                    borderRadius: "4px",
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    fontFamily: "Inter, sans-serif",
                                    display: "inline-block",
                                    width: "80%",
                                    maxWidth: "200px",
                                  }}
                                >
                                  Book Now
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

            {/* Restaurant Section */}
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
                      padding: "50px 15px",
                    }}
                    className="mobile-section-padding"
                  >
                    <Heading
                      className="mobile-text-2xl"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "28px",
                        lineHeight: "1.3",
                        margin: "0 0 40px 0",
                        color: "#111827",
                        fontWeight: "600",
                        textAlign: "center",
                      }}
                    >
                      RESTAURANT
                    </Heading>

                    {/* Dish 1 */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", marginBottom: "30px" }}
                    >
                      <tr className="mobile-stack">
                        <td
                          style={{ width: "70%", verticalAlign: "top", paddingRight: "30px" }}
                          className="mobile-stack-item"
                        >
                          <Heading
                            className="mobile-text-lg"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "20px",
                              margin: "0 0 15px 0",
                              color: "#111827",
                              fontWeight: "600",
                              textAlign: "left",
                            }}
                          >
                            Whole-Roasted Rack of Lamb
                          </Heading>

                          <Text
                            className="mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              lineHeight: "1.5",
                              margin: "0 0 15px 0",
                              color: "#6b7280",
                              textAlign: "left",
                            }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula elit at amet ligula
                            cursus ut viverra
                          </Text>

                          <Link
                            href={lambUrl}
                            style={{
                              color: "#3b82f6",
                              textDecoration: "none",
                              fontSize: "14px",
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "500",
                            }}
                          >
                            Read More →
                          </Link>
                        Stuart
                        </td>
                        <td style={{ width: "30%", verticalAlign: "top" }} className="mobile-stack-item">
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1619276316006-rosted.jpg"
                            alt="Whole-Roasted Rack of Lamb"
                            width="150"
                            height="120"
                            style={{
                              width: "100%",
                              height: "120px",
                              display: "block",
                              borderRadius: "8px",
                              objectFit: "cover",
                            }}
                          />
                        </td>
                      </tr>
                    </table>

                    {/* Dish 2 */}
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                      <tr className="mobile-stack">
                        <td
                          style={{ width: "70%", verticalAlign: "top", paddingRight: "30px" }}
                          className="mobile-stack-item"
                        >
                          <Heading
                            className="mobile-text-lg"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "20px",
                              margin: "0 0 15px 0",
                              color: "#111827",
                              fontWeight: "600",
                              textAlign: "left",
                            }}
                          >
                            Filet Mignon of Mangalitsa Pork
                          </Heading>

                          <Text
                            className="mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              lineHeight: "1.5",
                              margin: "0 0 15px 0",
                              color: "#6b7280",
                              textAlign: "left",
                            }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula elit at amet ligula
                            cursus ut viverra
                          </Text>

                          <Link
                            href={mignonUrl}
                            style={{
                              color: "#3b82f6",
                              textDecoration: "none",
                              fontSize: "14px",
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "500",
                            }}
                          >
                            Read More →
                          </Link>
                        </td>
                        <td style={{ width: "30%", verticalAlign: "top" }} className="mobile-stack-item">
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1619276497265-mignon.jpg"
                            alt="Filet Mignon of Mangalitsa Pork"
                            width="150"
                            height="120"
                            style={{
                              width: "100%",
                              height: "120px",
                              display: "block",
                              borderRadius: "8px",
                              objectFit: "cover",
                            }}
                          />
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Pricing Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#f9fafb" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "50px 15px",
                    }}
                    className="mobile-section-padding"
                  >
                    <Heading
                      className="mobile-text-2xl"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "28px",
                        lineHeight: "1.3",
                        margin: "0 0 40px 0",
                        color: "#111827",
                        fontWeight: "600",
                        textAlign: "center",
                      }}
                    >
                      PRICING
                    </Heading>

                    <table width="100%" cellPadding="0" cellSpacing="0"
                    style={{ borderCollapse: "collapse" }}>
                      <tr className="mobile-stack">
                        {/* Individual Plan */}
                        <td
                          style={{ width: "50%", verticalAlign: "top", padding: "0 10px 20px 10px" }}
                          className="mobile-pricing-card"
                        >
                          <table
                            width="100%"
                            cellPadding="0"
                            cellSpacing="0"
                            style={{
                              borderCollapse: "collapse",
                              backgroundColor: "#3b82f6",
                              borderRadius: "8px",
                              color: "#ffffff",
                              maxWidth: "300px",
                              margin: "0 auto",
                            }}
                          >
                            <tr>
                              <td style={{ padding: "30px 20px", textAlign: "center" }}>
                                <Heading
                                  className="mobile-text-lg"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "18px",
                                    margin: "0 0 5px 0",
                                    color: "#ffffff",
                                    fontWeight: "600",
                                  }}
                                >
                                  INDIVIDUAL
                                </Heading>

                                <Text
                                  className="mobile-text-sm"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "12px",
                                    margin: "0 0 20px 0",
                                    color: "#bfdbfe",
                                  }}
                                >
                                  FOR INDIVIDUAL
                                </Text>

                                <Text
                                  className="mobile-text-3xl"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "32px",
                                    margin: "0 0 20px 0",
                                    color: "#ffffff",
                                    fontWeight: "700",
                                  }}
                                >
                                  $200
                                </Text>

                                <div style={{ textAlign: "left", marginBottom: "20px" }}>
                                  <Text
                                    style={{
                                      fontSize: "14px",
                                      color: "#ffffff",
                                      margin: "5px 0",
                                      fontFamily: "Inter, sans-serif",
                                    }}
                                  >
                                    ★ Advanced options
                                  </Text>
                                  <Text
                                    style={{
                                      fontSize: "14px",
                                      color: "#ffffff",
                                      margin: "5px 0",
                                      fontFamily: "Inter, sans-serif",
                                    }}
                                  >
                                    ★ Create Profile
                                  </Text>
                                  <Text
                                    style={{
                                      fontSize: "14px",
                                      color: "#ffffff",
                                      margin: "5px 0",
                                      fontFamily: "Inter, sans-serif",
                                    }}
                                  >
                                    ★ Unlimited Bookings
                                  </Text>
                                  <Text
                                    style={{
                                      fontSize: "14px",
                                      color: "#ffffff",
                                      margin: "5px 0",
                                      fontFamily: "Inter, sans-serif",
                                    }}
                                  >
                                    ★ Map Search
                                  </Text>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>

                        {/* Groups Plan */}
                        <td
                          style={{ width: "50%", verticalAlign: "top", padding: "0 10px 20px 10px" }}
                          className="mobile-pricing-card"
                        >
                          <table
                            width="100%"
                            cellPadding="0"
                            cellSpacing="0"
                            style={{
                              borderCollapse: "collapse",
                              backgroundColor: "#f59e0b",
                              borderRadius: "8px",
                              color: "#ffffff",
                              maxWidth: "300px",
                              margin: "0 auto",
                            }}
                          >
                            <tr>
                              <td style={{ padding: "30px 20px", textAlign: "center" }}>
                                <Heading
                                  className="mobile-text-lg"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "18px",
                                    margin: "0 0 5px 0",
                                    color: "#ffffff",
                                    fontWeight: "600",
                                  }}
                                >
                                  GROUPS
                                </Heading>

                                <Text
                                  className="mobile-text-sm"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "12px",
                                    margin: "0 0 20px 0",
                                    color: "#fde68a",
                                  }}
                                >
                                  FOR GROUPS
                                </Text>

                                <Text
                                  className="mobile-text-3xl"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "32px",
                                    margin: "0 0 20px 0",
                                    color: "#ffffff",
                                    fontWeight: "700",
                                  }}
                                >
                                  $300
                                </Text>

                                <div style={{ textAlign: "left", marginBottom: "20px" }}>
                                  <Text
                                    style={{
                                      fontSize: "14px",
                                      color: "#ffffff",
                                      margin: "5px 0",
                                      fontFamily: "Inter, sans-serif",
                                    }}
                                  >
                                    ★ Advanced options
                                  </Text>
                                  <Text
                                    style={{
                                      fontSize: "14px",
                                      color: "#ffffff",
                                      margin: "5px 0",
                                      fontFamily: "Inter, sans-serif",
                                    }}
                                  >
                                    ★ Create Profile
                                  </Text>
                                  <Text
                                    style={{
                                      fontSize: "14px",
                                      color: "#ffffff",
                                      margin: "5px 0",
                                      fontFamily: "Inter, sans-serif",
                                    }}
                                  >
                                    ★ Unlimited Bookings
                                  </Text>
                                  <Text
                                    style={{
                                      fontSize: "14px",
                                      color: "#ffffff",
                                      margin: "5px 0",
                                      fontFamily: "Inter, sans-serif",
                                    }}
                                  >
                                    ★ Map Search
                                  </Text>
                                </div>
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

            {/* Gallery Section */}
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
                      padding: "50px 15px",
                    }}
                    className="mobile-section-padding"
                  >
                    <Heading
                      className="mobile-text-2xl"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "28px",
                        lineHeight: "1.3",
                        margin: "0 0 40px 0",
                        color: "#111827",
                        fontWeight: "600",
                        textAlign: "center",
                      }}
                    >
                      GALLERY
                    </Heading>

                    {/* Gallery Grid */}
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                      {/* Row 1 */}
                      <tr className="mobile-stack">
                        <td
                          style={{ width: "33.33%", verticalAlign: "top", paddingRight: "10px", paddingBottom: "10px" }}
                          className="mobile-gallery-item"
                        >
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1619277404004-gallery2.jpg"
                            alt="Hotel pool and mountain view"
                            width="180"
                            height="150"
                            style={{
                              width: "100%",
                              height: "150px",
                              display: "block",
                              borderRadius: "8px",
                              objectFit: "cover",
                            }}
                          />
                        </td>
                        <td
                          style={{
                            width: "33.33%",
                            verticalAlign: "top",
                            paddingLeft: "5px",
                            paddingRight: "5px",
                            paddingBottom: "10px",
                          }}
                          className="mobile-gallery-item"
                        >
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1619277407679-gallery7.jpg"
                            alt="Mountain camping tent"
                            width="180"
                            height="150"
                            style={{
                              width: "100%",
                              height: "150px",
                              display: "block",
                              borderRadius: "8px",
                              objectFit: "cover",
                            }}
                          />
                        </td>
                        <td
                          style={{ width: "33.33%", verticalAlign: "top", paddingLeft: "10px", paddingBottom: "10px" }}
                          className="mobile-gallery-item"
                        >
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1619277415227-gallery8.jpg"
                            alt="Skiing adventure"
                            width="180"
                            height="150"
                            style={{
                              width: "100%",
                              height: "150px",
                              display: "block",
                              borderRadius: "8px",
                              objectFit: "cover",
                            }}
                          />
                        </td>
                      </tr>

                      {/* Row 2 */}
                      <tr className="mobile-stack">
                        <td
                          style={{ width: "33.33%", verticalAlign: "top", paddingRight: "10px", paddingTop: "10px" }}
                          className="mobile-gallery-item"
                        >
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1619280262059-gallery7.jpg"
                            alt="Mountain tent camping"
                            width="180"
                            height="150"
                            style={{
                              width: "100%",
                              height: "150px",
                              borderRadius: "8px",
                              objectFit: "cover",
                            }}
                          />
                        </td>
                        <td
                          style={{
                            width: "33.33%",
                            verticalAlign: "top",
                            paddingLeft: "5px",
                            paddingRight: "5px",
                            paddingTop: "10px",
                          }}
                          className="mobile-gallery-item"
                        >
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1619280321399-gallery8.jpg"
                            alt="Winter skiing"
                            width="180"
                            height="150"
                            style={{
                              width: "100%",
                              height: "150px",
                              display: "block",
                              borderRadius: "8px",
                              objectFit: "cover",
                            }}
                          />
                        </td>
                        <td
                          style={{ width: "33.33%", verticalAlign: "top", paddingLeft: "10px", paddingTop: "10px" }}
                          className="mobile-gallery-item"
                        >
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1619280269038-gallery2.jpg"
                            alt="Resort pool area"
                            width="180"
                            height="150"
                            style={{
                              width: "100%",
                              height: "150px",
                              display: "block",
                              borderRadius: "8px",
                              objectFit: "cover",
                            }}
                          />
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
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#111827" }}
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
                        <td style={{ textAlign: "left", paddingBottom: "15px" }} className="mobile-center">
                          <Text
                            className="mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              margin: "0",
                              color: "#ffffff",
                              fontWeight: "500",
                            }}
                          >
                            Email: {contactEmail}
                          </Text>
                        </td>
                        <td style={{ textAlign: "right", paddingBottom: "15px" }} className="mobile-center">
                          <Link
                            href={unsubscribeUrl}
                            style={{
                              color: "#ffffff",
                              textDecoration: "none",
                              fontSize: "14px",
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "500",
                              marginRight: "15px",
                            }}
                            className="mobile-text-sm"
                          >
                            Unsubscribe
                          </Link>
                          <Link
                            href="#"
                            style={{
                              color: "#ffffff",
                              textDecoration: "none",
                              fontSize: "14px",
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "500",
                            }}
                            className="mobile-text-sm"
                          >
                            | Privacy Policy
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2} style={{ paddingTop: "15px", borderTop: "1px solid #374151" }}>
                          <Text
                            className="mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              lineHeight: "1.6",
                              margin: "0",
                              color: "#9ca3af",
                              textAlign: "center",
                            }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
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

HotelResort.PreviewProps = {
  customerName: "John Smith",
  bookNowUrl: "https://example.com/book",
  homeUrl: "https://example.com/home",
  serviceUrl: "https://example.com/service",
  contactUrl: "https://example.com/contact",
  singleRoomUrl: "https://example.com/single-room",
  doubleRoomUrl: "https://example.com/double-room",
  premiumSuiteUrl: "https://example.com/premium-suite",
  lambUrl: "https://example.com/menu/lamb",
  mignonUrl: "https://example.com/menu/mignon",
  individualPlanUrl: "https://example.com/pricing/individual",
  groupsPlanUrl: "https://example.com/pricing/groups",
  corporatePlanUrl: "https://example.com/pricing/corporate",
  contactEmail: "reservations@hotelresort.com",
  unsubscribeUrl: "https://example.com/unsubscribe",
} satisfies HotelResortEmailProps