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

interface FoodDeliveryEmailProps {
  customerName?: string
  availNowUrl?: string
  learnMoreUrl?: string
  loadMoreUrl?: string
  homeUrl?: string
  pageUrl?: string
  aboutUrl?: string
  contactUrl?: string
  facebookUrl?: string
  twitterUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
  companyName?: string
  companyAddress?: string
}

export default function FoodDelivery({
  customerName = "Customer",
  availNowUrl = "#",
  learnMoreUrl = "#",
  loadMoreUrl = "#",
  homeUrl = "#",
  pageUrl = "#",
  aboutUrl = "#",
  contactUrl = "#",
  facebookUrl = "https://facebook.com",
  twitterUrl = "https://twitter.com",
  linkedinUrl = "https://linkedin.com",
  instagramUrl = "https://instagram.com",
  companyName = "Your Company",
  companyAddress = "2024 Market Street #4567 San Francisco, CA 94114",
}: FoodDeliveryEmailProps) {
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
              padding: 40px 20px !important;
            }
            
            .mobile-nav-hidden {
              display: none !important;
            }
            
            .mobile-product-item {
              width: 100% !important;
              margin-bottom: 30px !important;
              display: block !important;
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
          }
        `}</style>
      </Head>
      <Preview>🍴 Exclusive Food Offers - Up to 50% Off + Free Monday Delivery!</Preview>
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
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#ffffff" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      padding: "20px 40px",
                      borderBottom: "1px solid #e5e7eb",
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
                              color: "#111827",
                              margin: "0",
                              fontWeight: "600",
                            }}
                            className="mobile-text-base"
                          >
                            [Your Logo]
                          </Text>
                        </td>
                        <td
                          style={{ width: "50%", textAlign: "right", verticalAlign: "middle" }}
                          className="mobile-nav-hidden"
                        >
                          <Link
                            href={homeUrl}
                            style={{
                              color: "#6b7280",
                              textDecoration: "none",
                              fontSize: "14px",
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "500",
                              marginRight: "15px",
                            }}
                          >
                            Home
                          </Link>
                          <Text
                            style={{
                              color: "#d1d5db",
                              fontSize: "14px",
                              margin: "0 8px",
                              display: "inline",
                            }}
                          >
                            |
                          </Text>
                          <Link
                            href={pageUrl}
                            style={{
                              color: "#6b7280",
                              textDecoration: "none",
                              fontSize: "14px",
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "500",
                              marginRight: "15px",
                            }}
                          >
                            Page
                          </Link>
                          <Text
                            style={{
                              color: "#d1d5db",
                              fontSize: "14px",
                              margin: "0 8px",
                              display: "inline",
                            }}
                          >
                            |
                          </Text>
                          <Link
                            href={aboutUrl}
                            style={{
                              color: "#6b7280",
                              textDecoration: "none",
                              fontSize: "14px",
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "500",
                              marginRight: "15px",
                            }}
                          >
                            About Us
                          </Link>
                          <Text
                            style={{
                              color: "#d1d5db",
                              fontSize: "14px",
                              margin: "0 8px",
                              display: "inline",
                            }}
                          >
                            |
                          </Text>
                          <Link
                            href={contactUrl}
                            style={{
                              color: "#6b7280",
                              textDecoration: "none",
                              fontSize: "14px",
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "500",
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

            {/* Hero Section with Food Illustration */}
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
                      backgroundColor: "#3c2415",
                      padding: "0",
                      textAlign: "center",
                      minHeight: "400px",
                    }}
                  >
                    {/* Background Food Illustration */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", height: "400px" }}
                    >
                      <tr>
                        <td style={{ textAlign: "center", verticalAlign: "middle", position: "relative" }}>
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1686564574614-Restaurant-Deal.gif"
                            alt="Delicious pancakes and drink illustration"
                            width="600"
                            height="400"
                            style={{
                              width: "100%",
                              height: "400px",
                              display: "block",
                              objectFit: "cover",
                            }}
                          />
                        </td>
                      </tr>
                    </table>

                    {/* Yellow Overlay Banner */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{
                        borderCollapse: "collapse",
                        backgroundColor: "#f59e0b",
                      }}
                    >
                      <tr>
                        <td
                          style={{
                            padding: "40px",
                            textAlign: "center",
                          }}
                          className="mobile-section-padding"
                        >
                          <Heading
                            className="m-0 mb-2 text-gray-900 mobile-text-3xl"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "32px",
                              lineHeight: "1.2",
                              margin: "0 0 8px 0",
                              color: "#111827",
                              fontWeight: "800",
                              letterSpacing: "-0.5px",
                            }}
                          >
                            EXCLUSIVE OFFERS
                          </Heading>

                          <Heading
                            className="m-0 mb-4 text-gray-900 mobile-text-2xl"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "24px",
                              lineHeight: "1.2",
                              margin: "0 0 16px 0",
                              color: "#111827",
                              fontWeight: "700",
                            }}
                          >
                            Up to 50% off
                          </Heading>

                          <Text
                            className="m-0 mb-6 text-gray-800 mobile-text-base"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              lineHeight: "1.6",
                              margin: "0 0 24px 0",
                              color: "#1f2937",
                              maxWidth: "400px",
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                          </Text>

                          <Link
                            href={availNowUrl}
                            className="mobile-button-full"
                            style={{
                              backgroundColor: "#111827",
                              color: "#ffffff",
                              padding: "14px 32px",
                              textDecoration: "none",
                              borderRadius: "6px",
                              fontSize: "16px",
                              fontWeight: "600",
                              fontFamily: "Inter, sans-serif",
                              display: "inline-block",
                              letterSpacing: "0.5px",
                            }}
                          >
                            Avail Now
                          </Link>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Free Delivery Section */}
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
                      padding: "50px 40px 30px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                    <Heading
                      className="m-0 mb-4 text-gray-900 mobile-text-2xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "28px",
                        lineHeight: "1.2",
                        margin: "0 0 16px 0",
                        color: "#111827",
                        fontWeight: "700",
                      }}
                    >
                      Monday - Free Delivery
                    </Heading>

                    <Text
                      className="m-0 text-gray-600 mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.6",
                        margin: "0",
                        color: "#6b7280",
                        maxWidth: "500px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Product Grid */}
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
                      padding: "20px 40px",
                    }}
                    className="mobile-padding"
                  >
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                      <tr className="mobile-stack">
                        {/* Product 1 - Pancakes */}
                        <td
                          style={{ width: "50%", verticalAlign: "top", paddingRight: "15px" }}
                        //   className="mobile-product-item"
                        >
                          <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                            <tr>
                              <td style={{ textAlign: "center" }}>
                                <Img
                                  src="https://cdn.templates.unlayer.com/assets/1686565037353-3.png"
                                  alt="Delicious pancakes with berries"
                                  width="160"
                                  height="120"
                                  style={{
                                    width: "100%",
                                    height: "120px",
                                    display: "block",
                                    borderRadius: "8px",
                                    objectFit: "cover",
                                    marginBottom: "15px",
                                  }}
                                />
                                <Text
                                  className="m-0 mb-3 text-gray-700 mobile-text-sm"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "14px",
                                    lineHeight: "1.5",
                                    margin: "0 0 12px 0",
                                    color: "#374151",
                                    textAlign: "center",
                                  }}
                                >
                                  This is a new Text block. Change the text.
                                </Text>
                                <Link
                                  href={learnMoreUrl}
                                  style={{
                                    color: "#3b82f6",
                                    textDecoration: "underline",
                                    fontSize: "14px",
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: "500",
                                  }}
                                  className="mobile-text-sm"
                                >
                                  Learn More
                                </Link>
                              </td>
                            </tr>
                          </table>
                        </td>

                        {/* Product 2 - Burger */}
                        <td
                          style={{ width: "50%", verticalAlign: "top", padding: "0 15px" }}
                        //   className="mobile-product-item"
                        >
                          <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
                            <tr>
                              <td style={{ textAlign: "center" }}>
                                <Img
                                  src="https://cdn.templates.unlayer.com/assets/1686565053181-2.png"
                                  alt="Gourmet burger with fries"
                                  width="160"
                                  height="120"
                                  style={{
                                    width: "100%",
                                    height: "120px",
                                    display: "block",
                                    borderRadius: "8px",
                                    objectFit: "cover",
                                    marginBottom: "15px",
                                  }}
                                />
                                <Text
                                  className="m-0 mb-3 text-gray-700 mobile-text-sm"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "14px",
                                    lineHeight: "1.5",
                                    margin: "0 0 12px 0",
                                    color: "#374151",
                                    textAlign: "center",
                                  }}
                                >
                                  This is a new Text block. Change the text.
                                </Text>
                                <Link
                                  href={learnMoreUrl}
                                  style={{
                                    color: "#3b82f6",
                                    textDecoration: "underline",
                                    fontSize: "14px",
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: "500",
                                  }}
                                  className="mobile-text-sm"
                                >
                                  Learn More
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

            {/* Load More Button */}
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
                      padding: "30px 40px 50px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-padding"
                  >
                    <Link
                      href={loadMoreUrl}
                      className="mobile-button-full"
                      style={{
                        backgroundColor: "#111827",
                        color: "#ffffff",
                        padding: "14px 32px",
                        textDecoration: "none",
                        borderRadius: "6px",
                        fontSize: "16px",
                        fontWeight: "600",
                        fontFamily: "Inter, sans-serif",
                        display: "inline-block",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Load More
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
                  backgroundColor: "#3c2415",
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
                        <td style={{ textAlign: "center", marginBottom: "30px" }}>
                          <Text
                            className="m-0 mb-6 text-yellow-400 mobile-text-base"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              lineHeight: "1.6",
                              margin: "0 0 24px 0",
                              color: "#fbbf24",
                              maxWidth: "500px",
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                          >
                            If you have any questions, please email us at{" "}
                            <Link
                              href="mailto:customer@example.com"
                              style={{ color: "#fbbf24", textDecoration: "underline" }}
                            >
                              customer@example.com
                            </Link>{" "}
                            or call our FAQs. You can also chat with a real live human during our operating hours. They
                            can answer questions about your account.
                          </Text>

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
                                      backgroundColor: "#1877f2",
                                      borderRadius: "6px",
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
                                      backgroundColor: "#1da1f2",
                                      borderRadius: "6px",
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
                                      backgroundColor: "#0077b5",
                                      borderRadius: "6px",
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
                                      backgroundColor: "#e4405f",
                                      borderRadius: "6px",
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

                          {/* Footer Navigation */}
                          <table
                            width="100%"
                            cellPadding="0"
                            cellSpacing="0"
                            style={{ borderCollapse: "collapse", marginBottom: "20px" }}
                          >
                            <tr>
                              <td style={{ textAlign: "center" }}>
                                <Link
                                  href={homeUrl}
                                  style={{
                                    color: "#fbbf24",
                                    textDecoration: "none",
                                    fontSize: "14px",
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: "500",
                                    marginRight: "15px",
                                  }}
                                  className="mobile-text-sm"
                                >
                                  Home
                                </Link>
                                <Text
                                  style={{
                                    color: "#92400e",
                                    fontSize: "14px",
                                    margin: "0 8px",
                                    display: "inline",
                                  }}
                                >
                                  |
                                </Text>
                                <Link
                                  href={pageUrl}
                                  style={{
                                    color: "#fbbf24",
                                    textDecoration: "none",
                                    fontSize: "14px",
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: "500",
                                    marginRight: "15px",
                                  }}
                                  className="mobile-text-sm"
                                >
                                  Page
                                </Link>
                                <Text
                                  style={{
                                    color: "#92400e",
                                    fontSize: "14px",
                                    margin: "0 8px",
                                    display: "inline",
                                  }}
                                >
                                  |
                                </Text>
                                <Link
                                  href={aboutUrl}
                                  style={{
                                    color: "#fbbf24",
                                    textDecoration: "none",
                                    fontSize: "14px",
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: "500",
                                    marginRight: "15px",
                                  }}
                                  className="mobile-text-sm"
                                >
                                  About Us
                                </Link>
                                <Text
                                  style={{
                                    color: "#92400e",
                                    fontSize: "14px",
                                    margin: "0 8px",
                                    display: "inline",
                                  }}
                                >
                                  |
                                </Text>
                                <Link
                                  href={contactUrl}
                                  style={{
                                    color: "#fbbf24",
                                    textDecoration: "none",
                                    fontSize: "14px",
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: "500",
                                  }}
                                  className="mobile-text-sm"
                                >
                                  Contact Us
                                </Link>
                              </td>
                            </tr>
                          </table>

                          {/* Copyright */}
                          <Text
                            className="m-0 text-yellow-600 mobile-text-xs"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "12px",
                              margin: "0",
                              color: "#d97706",
                              textAlign: "center",
                            }}
                          >
                            {companyAddress} All rights reserved
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

FoodDelivery.PreviewProps = {
  customerName: "Food Lover",
  availNowUrl: "https://example.com/offers",
  learnMoreUrl: "https://example.com/menu",
  loadMoreUrl: "https://example.com/menu/all",
  homeUrl: "https://example.com",
  pageUrl: "https://example.com/page",
  aboutUrl: "https://example.com/about",
  contactUrl: "https://example.com/contact",
  facebookUrl: "https://facebook.com/example",
  twitterUrl: "https://twitter.com/example",
  linkedinUrl: "https://linkedin.com/company/example",
  instagramUrl: "https://instagram.com/example",
  companyName: "Food Delivery Co",
  companyAddress: "2024 Market Street #4567 San Francisco, CA 94114",
} satisfies FoodDeliveryEmailProps
