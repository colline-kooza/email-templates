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

interface HotelParadiseEmailProps {
  logoUrl?: string
  bookNowUrl?: string
  readMoreUrl?: string
  discoverUrl?: string
  facebookUrl?: string
  twitterUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
  unsubscribeUrl?: string
  termsUrl?: string
  privacyUrl?: string
}

export default function HotelParadise({
  logoUrl = "/placeholder.svg?height=30&width=100",
  bookNowUrl = "#",
  readMoreUrl = "#",
  discoverUrl = "#",
  facebookUrl = "https://facebook.com",
  twitterUrl = "https://twitter.com",
  linkedinUrl = "https://linkedin.com",
  instagramUrl = "https://instagram.com",
  unsubscribeUrl = "#",
  termsUrl = "#",
  privacyUrl = "#",
}: HotelParadiseEmailProps) {
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
            
            .mobile-hero-image {
              width: 100% !important;
              height: 250px !important;
            }
            
            .mobile-service-image {
              width: 100% !important;
              height: 180px !important;
            }
            
            .mobile-feature-image {
              width: 100% !important;
              height: 150px !important;
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
      <Preview>Welcome To Hotel Paradise - Your Luxury Getaway Awaits</Preview>
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
                      padding: "20px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-padding-sm"
                  >
                    <div
                      style={{
                        display: "inline-block",
                        backgroundColor: "#ffffff",
                        padding: "8px 20px",
                        borderRadius: "4px",
                      }}
                    >
                      <Text
                        className="m-0 text-gray-900 mobile-text-base"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "16px",
                          margin: "0",
                          color: "#111827",
                          fontWeight: "700",
                          letterSpacing: "2px",
                        }}
                      >
                        ▲ LOGO
                      </Text>
                    </div>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Hero Image Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%" }}
                className="mobile-table-full"
              >
                <tr>
                  <td style={{ padding: "0" }}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1624096372079-dfdf.png"
                      alt="Hotel Paradise lobby with marble reception desk"
                      width="600"
                      height="400"
                      className="mobile-hero-image"
                      style={{
                        display: "block",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                </tr>
              </table>
            </Section>

            {/* Welcome Section */}
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
                      padding: "50px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                    <Heading
                      className="m-0 mb-2 mobile-text-2xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "28px",
                        lineHeight: "1.2",
                        margin: "0 0 8px 0",
                        color: "#10b981",
                        fontWeight: "600",
                      }}
                    >
                      Welcome To Hotel
                    </Heading>

                    <Heading
                      className="m-0 mb-6 text-gray-900 mobile-text-3xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "32px",
                        lineHeight: "1.2",
                        margin: "0 0 24px 0",
                        color: "#111827",
                        fontWeight: "700",
                      }}
                    >
                      Paradise
                    </Heading>

                    <Text
                      className="m-0 mb-8 text-gray-700 mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.6",
                        margin: "0 0 32px 0",
                        color: "#374151",
                        maxWidth: "500px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>

                    <div>
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
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                        }}
                      >
                        Book Now
                      </Link>
                    </div>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Services Section */}
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
                      padding: "0 40px 40px 40px",
                    }}
                    className="mobile-padding"
                  >
                    {/* Services Container */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse" }}
                      className="mobile-stack"
                    >
                      <tr className="mobile-stack">
                        {/* Service 1 */}
                        <td
                          style={{
                            width: "48%",
                            verticalAlign: "top",
                            paddingRight: "10px",
                          }}
                          className="mobile-stack-item"
                        >
                          <Img
                            src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=200&fit=crop"
                            alt="Concierge service"
                            width="100%"
                            height="200"
                            className="mobile-service-image"
                            style={{
                              display: "block",
                              width: "100%",
                              borderRadius: "8px",
                              marginBottom: "20px",
                              objectFit: "cover",
                            }}
                          />
                          <Heading
                            className="m-0 mb-3 text-gray-900 mobile-text-lg"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "18px",
                              margin: "0 0 12px 0",
                              color: "#111827",
                              fontWeight: "600",
                              textAlign: "center",
                            }}
                          >
                            Service Title Goes Here
                          </Heading>
                          <Text
                            className="m-0 mb-4 text-gray-600 mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              lineHeight: "1.6",
                              margin: "0 0 16px 0",
                              color: "#4b5563",
                              textAlign: "center",
                            }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam.
                          </Text>
                          <div style={{ textAlign: "center" }}>
                            <Link
                              href={readMoreUrl}
                              style={{
                                backgroundColor: "#10b981",
                                color: "#ffffff",
                                padding: "10px 24px",
                                textDecoration: "none",
                                borderRadius: "4px",
                                fontSize: "14px",
                                fontWeight: "600",
                                fontFamily: "Inter, sans-serif",
                                display: "inline-block",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                              }}
                            >
                              Read More
                            </Link>
                          </div>
                        </td>

                        {/* Service 2 */}
                        <td
                          style={{
                            width: "48%",
                            verticalAlign: "top",
                            paddingLeft: "10px",
                          }}
                          className="mobile-stack-item"
                        >
                          <Img
                            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&h=200&fit=crop"
                            alt="Luxury hotel room"
                            width="100%"
                            height="200"
                            className="mobile-service-image"
                            style={{
                              display: "block",
                              width: "100%",
                              borderRadius: "8px",
                              marginBottom: "20px",
                              objectFit: "cover",
                            }}
                          />
                          <Heading
                            className="m-0 mb-3 text-gray-900 mobile-text-lg"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "18px",
                              margin: "0 0 12px 0",
                              color: "#111827",
                              fontWeight: "600",
                              textAlign: "center",
                            }}
                          >
                            Service Title Goes Here
                          </Heading>
                          <Text
                            className="m-0 mb-4 text-gray-600 mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              lineHeight: "1.6",
                              margin: "0 0 16px 0",
                              color: "#4b5563",
                              textAlign: "center",
                            }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam.
                          </Text>
                          <div style={{ textAlign: "center" }}>
                            <Link
                              href={readMoreUrl}
                              style={{
                                backgroundColor: "#10b981",
                                color: "#ffffff",
                                padding: "10px 24px",
                                textDecoration: "none",
                                borderRadius: "4px",
                                fontSize: "14px",
                                fontWeight: "600",
                                fontFamily: "Inter, sans-serif",
                                display: "inline-block",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                              }}
                            >
                              Read More
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Middle CTA Section */}
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
                        "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=300&fit=crop')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      padding: "60px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        padding: "40px",
                        borderRadius: "8px",
                      }}
                    >
                      <Heading
                        className="m-0 mb-4 text-white mobile-text-2xl"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "28px",
                          lineHeight: "1.2",
                          margin: "0 0 16px 0",
                          color: "#ffffff",
                          fontWeight: "700",
                        }}
                      >
                        Title Goes Here
                      </Heading>

                      <Text
                        className="m-0 mb-6 text-white mobile-text-base"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "16px",
                          lineHeight: "1.6",
                          margin: "0 0 24px 0",
                          color: "#ffffff",
                          maxWidth: "400px",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </Text>

                      <div>
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
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                          }}
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Features Section */}
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
                      padding: "50px 40px",
                    }}
                    className="mobile-section-padding"
                  >
                    {/* Features Container */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse" }}
                      className="mobile-stack"
                    >
                      <tr className="mobile-stack">
                        {/* Feature 1 - Romance */}
                        <td
                          style={{
                            width: "32%",
                            verticalAlign: "top",
                            paddingRight: "10px",
                          }}
                          className="mobile-stack-item"
                        >
                          <Img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=150&fit=crop"
                            alt="Romantic sunset dinner"
                            width="100%"
                            height="150"
                            className="mobile-feature-image"
                            style={{
                              display: "block",
                              width: "100%",
                              borderRadius: "8px",
                              marginBottom: "15px",
                              objectFit: "cover",
                            }}
                          />
                          <Heading
                            className="m-0 mb-3 text-gray-900 mobile-text-base"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "16px",
                              margin: "0 0 12px 0",
                              color: "#111827",
                              fontWeight: "600",
                              textAlign: "center",
                            }}
                          >
                            A Day Of
                            <br />
                            Romance
                          </Heading>
                          <Text
                            className="m-0 mb-4 text-gray-600 mobile-text-xs"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "12px",
                              lineHeight: "1.5",
                              margin: "0 0 16px 0",
                              color: "#4b5563",
                              textAlign: "center",
                            }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore.
                          </Text>
                          <div style={{ textAlign: "center" }}>
                            <Link
                              href={discoverUrl}
                              style={{
                                backgroundColor: "#10b981",
                                color: "#ffffff",
                                padding: "8px 20px",
                                textDecoration: "none",
                                borderRadius: "4px",
                                fontSize: "12px",
                                fontWeight: "600",
                                fontFamily: "Inter, sans-serif",
                                display: "inline-block",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                              }}
                            >
                              Discover
                            </Link>
                          </div>
                        </td>

                        {/* Feature 2 - Culinary */}
                        <td
                          style={{
                            width: "32%",
                            verticalAlign: "top",
                            paddingLeft: "5px",
                            paddingRight: "5px",
                          }}
                          className="mobile-stack-item"
                        >
                          <Img
                            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&h=150&fit=crop"
                            alt="Gourmet dining experience"
                            width="100%"
                            height="150"
                            className="mobile-feature-image"
                            style={{
                              display: "block",
                              width: "100%",
                              borderRadius: "8px",
                              marginBottom: "15px",
                              objectFit: "cover",
                            }}
                          />
                          <Heading
                            className="m-0 mb-3 text-gray-900 mobile-text-base"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "16px",
                              margin: "0 0 12px 0",
                              color: "#111827",
                              fontWeight: "600",
                              textAlign: "center",
                            }}
                          >
                            Far East Culinary
                            <br />
                            Tour
                          </Heading>
                          <Text
                            className="m-0 mb-4 text-gray-600 mobile-text-xs"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "12px",
                              lineHeight: "1.5",
                              margin: "0 0 16px 0",
                              color: "#4b5563",
                              textAlign: "center",
                            }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore.
                          </Text>
                          <div style={{ textAlign: "center" }}>
                            <Link
                              href={discoverUrl}
                              style={{
                                backgroundColor: "#10b981",
                                color: "#ffffff",
                                padding: "8px 20px",
                                textDecoration: "none",
                                borderRadius: "4px",
                                fontSize: "12px",
                                fontWeight: "600",
                                fontFamily: "Inter, sans-serif",
                                display: "inline-block",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                              }}
                            >
                              Discover
                            </Link>
                          </div>
                        </td>

                        {/* Feature 3 - Spa */}
                        <td
                          style={{
                            width: "32%",
                            verticalAlign: "top",
                            paddingLeft: "10px",
                          }}
                          className="mobile-stack-item"
                        >
                          <Img
                            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=200&h=150&fit=crop"
                            alt="Spa and wellness treatments"
                            width="100%"
                            height="150"
                            className="mobile-feature-image"
                            style={{
                              display: "block",
                              width: "100%",
                              borderRadius: "8px",
                              marginBottom: "15px",
                              objectFit: "cover",
                            }}
                          />
                          <Heading
                            className="m-0 mb-3 text-gray-900 mobile-text-base"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "16px",
                              margin: "0 0 12px 0",
                              color: "#111827",
                              fontWeight: "600",
                              textAlign: "center",
                            }}
                          >
                            Relax Your
                            <br />
                            Body
                          </Heading>
                          <Text
                            className="m-0 mb-4 text-gray-600 mobile-text-xs"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "12px",
                              lineHeight: "1.5",
                              margin: "0 0 16px 0",
                              color: "#4b5563",
                              textAlign: "center",
                            }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore.
                          </Text>
                          <div style={{ textAlign: "center" }}>
                            <Link
                              href={discoverUrl}
                              style={{
                                backgroundColor: "#10b981",
                                color: "#ffffff",
                                padding: "8px 20px",
                                textDecoration: "none",
                                borderRadius: "4px",
                                fontSize: "12px",
                                fontWeight: "600",
                                fontFamily: "Inter, sans-serif",
                                display: "inline-block",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                              }}
                            >
                              Discover
                            </Link>
                          </div>
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
                      backgroundColor: "#2a2a2a",
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

                    <Text
                      className="m-0 mb-4 text-white mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        lineHeight: "1.6",
                        margin: "0 0 16px 0",
                        color: "#ffffff",
                      }}
                    >
                      If you have any questions, feel free message us at support@email.com.
                      <br />
                      All right reserved. Update email preferences or unsubscribe
                    </Text>

                    <Text
                      className="m-0 text-gray-400 mobile-text-xs"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "12px",
                        margin: "0",
                        color: "#9ca3af",
                      }}
                    >
                      San Francisco, CA, United States
                      <br />
                      <Link href={termsUrl} style={{ color: "#9ca3af", textDecoration: "none" }}>
                        Terms of use
                      </Link>{" "}
                      |{" "}
                      <Link href={privacyUrl} style={{ color: "#9ca3af", textDecoration: "none" }}>
                        Privacy Policy
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

HotelParadise.PreviewProps = {
  logoUrl: "/placeholder.svg?height=30&width=100",
  bookNowUrl: "https://example.com/book",
  readMoreUrl: "https://example.com/services",
  discoverUrl: "https://example.com/experiences",
  facebookUrl: "https://facebook.com/hotelparadise",
  twitterUrl: "https://twitter.com/hotelparadise",
  linkedinUrl: "https://linkedin.com/company/hotelparadise",
  instagramUrl: "https://instagram.com/hotelparadise",
  unsubscribeUrl: "https://example.com/unsubscribe",
  termsUrl: "https://example.com/terms",
  privacyUrl: "https://example.com/privacy",
} satisfies HotelParadiseEmailProps
