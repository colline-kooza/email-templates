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
} from "@react-email/components";

interface TechnologySecurityEmailProps {
  logoUrl?: string;
  homeUrl?: string;
  pageUrl?: string;
  aboutUrl?: string;
  contactUrl?: string;
  visitUsUrl?: string;
  shopNowUrl?: string;
  facebookUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
  pinterestUrl?: string;
  address?: string;
  preferencesUrl?: string;
  unsubscribeUrl?: string;
  viewInBrowserUrl?: string;
}

export default function TechnologySecurity({
  logoUrl = "/placeholder.svg?height=30&width=120",
  homeUrl = "#",
  pageUrl = "#",
  aboutUrl = "#",
  contactUrl = "#",
  visitUsUrl = "#",
  shopNowUrl = "#",
  facebookUrl = "https://facebook.com",
  twitterUrl = "https://twitter.com",
  instagramUrl = "https://instagram.com",
  pinterestUrl = "https://pinterest.com",
  address = "2901 Market Street #4067 San Francisco, CA 94103",
  preferencesUrl = "#",
  unsubscribeUrl = "#",
  viewInBrowserUrl = "#",
}: TechnologySecurityEmailProps) {
  return (
    <Html>
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');
        `}</style>
      </Head>
      <Preview>
        Protect Your Life With Technology - Advanced Security Solutions
      </Preview>
      <Tailwind>
        <Body
          className="bg-gray-50"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <Container className="mx-auto w-full max-w-[600px]">
            {/* Header */}
            <Section className="px-0 py-0 bg-white">
              <table
                width="100%"
                cellPadding="25"
                cellSpacing="0"
                style={{ borderCollapse: "collapse" }}
              >
                <tr>
                  <td
                    style={{
                      width: "40%",
                      textAlign: "left",
                      verticalAlign: "middle",
                    }}
                  >
                    <div
                      style={{
                        background:
                          "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                        color: "white",
                        padding: "12px 20px",
                        borderRadius: "8px",
                        display: "inline-block",
                        fontSize: "16px",
                        fontWeight: "700",
                        letterSpacing: "1px",
                        boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)",
                      }}
                    >
                      YOUR LOGO
                    </div>
                  </td>
                  <td
                    style={{
                      width: "60%",
                      textAlign: "right",
                      verticalAlign: "middle",
                    }}
                  >
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", float: "right" }}
                    >
                      <tr>
                        <td style={{ padding: "0 15px" }}>
                          <Link
                            href={homeUrl}
                            style={{
                              color: "#374151",
                              fontSize: "15px",
                              fontWeight: "600",
                              textDecoration: "none",
                              fontFamily: "Inter, sans-serif",
                            }}
                          >
                            Home
                          </Link>
                        </td>
                        <td
                          style={{
                            padding: "0 6px",
                            color: "#d1d5db",
                            fontSize: "16px",
                          }}
                        >
                          |
                        </td>
                        <td style={{ padding: "0 15px" }}>
                          <Link
                            href={pageUrl}
                            style={{
                              color: "#374151",
                              fontSize: "15px",
                              fontWeight: "600",
                              textDecoration: "none",
                              fontFamily: "Inter, sans-serif",
                            }}
                          >
                            Page
                          </Link>
                        </td>
                        <td
                          style={{
                            padding: "0 6px",
                            color: "#d1d5db",
                            fontSize: "16px",
                          }}
                        >
                          |
                        </td>
                        <td style={{ padding: "0 15px" }}>
                          <Link
                            href={aboutUrl}
                            style={{
                              color: "#374151",
                              fontSize: "15px",
                              fontWeight: "600",
                              textDecoration: "none",
                              fontFamily: "Inter, sans-serif",
                            }}
                          >
                            About
                          </Link>
                        </td>
                        <td
                          style={{
                            padding: "0 6px",
                            color: "#d1d5db",
                            fontSize: "16px",
                          }}
                        >
                          |
                        </td>
                        <td style={{ padding: "0 15px" }}>
                          <Link
                            href={contactUrl}
                            style={{
                              color: "#374151",
                              fontSize: "15px",
                              fontWeight: "600",
                              textDecoration: "none",
                              fontFamily: "Inter, sans-serif",
                            }}
                          >
                            Contact
                          </Link>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Hero Section with Background Image */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse" }}
              >
                <tr>
                  <td
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop'), linear-gradient(135deg, rgba(99, 102, 241, 0.85) 0%, rgba(139, 92, 246, 0.85) 100%)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      padding: "70px 40px",
                      textAlign: "center",
                    }}
                  >
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse" }}
                    >
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <Heading
                            className="m-0 mb-4 font-bold text-white"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "42px",
                              lineHeight: "1.1",
                              textShadow: "0 3px 6px rgba(0,0,0,0.4)",
                              margin: "0 0 16px 0",
                            }}
                          >
                            Protect Your Life With
                          </Heading>
                          <Heading
                            className="m-0 mb-8 font-bold text-white"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "42px",
                              lineHeight: "1.1",
                              letterSpacing: "3px",
                              textShadow: "0 3px 6px rgba(0,0,0,0.4)",
                              margin: "0 0 32px 0",
                            }}
                          >
                            TECHNOLOGY
                          </Heading>
                          <table
                            width="100%"
                            cellPadding="0"
                            cellSpacing="0"
                            style={{ borderCollapse: "collapse" }}
                          >
                            <tr>
                              <td
                                style={{
                                  textAlign: "center",
                                  paddingBottom: "40px",
                                }}
                              >
                                <Text
                                  className="m-0 text-white"
                                  style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "20px",
                                    lineHeight: "1.6",
                                    maxWidth: "450px",
                                    margin: "0 auto",
                                    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                                    opacity: "0.95",
                                  }}
                                >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                </Text>
                              </td>
                            </tr>
                          </table>
                          <table
                            cellPadding="0"
                            cellSpacing="0"
                            style={{
                              borderCollapse: "collapse",
                              margin: "0 auto",
                            }}
                          >
                            <tr>
                              <td style={{ textAlign: "center" }}>
                                <Link
                                  href={visitUsUrl}
                                  style={{
                                    background:
                                      "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                                    color: "#6366f1",
                                    padding: "18px 45px",
                                    textDecoration: "none",
                                    borderRadius: "35px",
                                    fontSize: "18px",
                                    fontWeight: "700",
                                    fontFamily: "Inter, sans-serif",
                                    display: "inline-block",
                                    boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                                    textTransform: "uppercase",
                                    letterSpacing: "1.5px",
                                    border: "2px solid rgba(255,255,255,0.3)",
                                  }}
                                >
                                  Visit Us
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

            {/* Features Section */}
            <Section
              className="px-0 py-0"
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              }}
            >
              <table
                width="100%"
                cellPadding="50"
                cellSpacing="0"
                style={{ borderCollapse: "collapse" }}
              >
                <tr>
                  <td
                    style={{
                      width: "33.33%",
                      textAlign: "center",
                      verticalAlign: "top",
                      padding: "25px",
                    }}
                  >
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse" }}
                    >
                      <tr>
                        <td
                          style={{ textAlign: "center", paddingBottom: "25px" }}
                        >
                          <div
                            style={{
                              width: "100px",
                              height: "100px",
                              background:
                                "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)",
                              borderRadius: "50%",
                              margin: "0 auto",
                              border: "3px solid rgba(255,255,255,0.3)",
                              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                            }}
                          >
                            <table
                              width="100%"
                              cellPadding="0"
                              cellSpacing="0"
                              style={{
                                borderCollapse: "collapse",
                                height: "100%",
                              }}
                            >
                              <tr>
                                <td
                                  style={{
                                    textAlign: "center",
                                    verticalAlign: "middle",
                                  }}
                                >
                                  <Img
                                    src="https://cdn.templates.unlayer.com/assets/1657696896902-1.png"
                                    alt="Access Control"
                                    width="40"
                                    height="40"
                                    className="object-contain"
                                    style={{
                                      display: "block",
                                      margin: "0 auto",
                                      filter: "invert(1)",
                                    }}
                                  />
                                </td>
                              </tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ textAlign: "center", paddingBottom: "15px" }}
                        >
                          <Heading
                            className="m-0 font-bold text-white"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "22px",
                              lineHeight: "1.3",
                            }}
                          >
                            Access Control
                          </Heading>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <Text
                            className="m-0 text-white"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "15px",
                              lineHeight: "1.6",
                              opacity: "0.9",
                            }}
                          >
                            This is a new text block. Change the text.
                          </Text>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td
                    style={{
                      width: "33.33%",
                      textAlign: "center",
                      verticalAlign: "top",
                      padding: "25px",
                    }}
                  >
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse" }}
                    >
                      <tr>
                        <td
                          style={{ textAlign: "center", paddingBottom: "25px" }}
                        >
                          <div
                            style={{
                              width: "100px",
                              height: "100px",
                              background:
                                "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)",
                              borderRadius: "50%",
                              margin: "0 auto",
                              border: "3px solid rgba(255,255,255,0.3)",
                              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                            }}
                          >
                            <table
                              width="100%"
                              cellPadding="0"
                              cellSpacing="0"
                              style={{
                                borderCollapse: "collapse",
                                height: "100%",
                              }}
                            >
                              <tr>
                                <td
                                  style={{
                                    textAlign: "center",
                                    verticalAlign: "middle",
                                  }}
                                >
                                  <Img
                                    src="https://cdn.templates.unlayer.com/assets/1657696907140-3.png"
                                    alt="No Phone Line Needed"
                                    width="40"
                                    height="40"
                                    className="object-contain"
                                    style={{
                                      display: "block",
                                      margin: "0 auto",
                                      filter: "invert(1)",
                                    }}
                                  />
                                </td>
                              </tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ textAlign: "center", paddingBottom: "15px" }}
                        >
                          <Heading
                            className="m-0 font-bold text-white"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "22px",
                              lineHeight: "1.3",
                            }}
                          >
                            No Phone Line Needed
                          </Heading>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <Text
                            className="m-0 text-white"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "15px",
                              lineHeight: "1.6",
                              opacity: "0.9",
                            }}
                          >
                            This is a new text block. Change the text.
                          </Text>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td
                    style={{
                      width: "33.33%",
                      textAlign: "center",
                      verticalAlign: "top",
                      padding: "25px",
                    }}
                  >
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse" }}
                    >
                      <tr>
                        <td
                          style={{ textAlign: "center", paddingBottom: "25px" }}
                        >
                          <div
                            style={{
                              width: "100px",
                              height: "100px",
                              background:
                                "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)",
                              borderRadius: "50%",
                              margin: "0 auto",
                              border: "3px solid rgba(255,255,255,0.3)",
                              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                            }}
                          >
                            <table
                              width="100%"
                              cellPadding="0"
                              cellSpacing="0"
                              style={{
                                borderCollapse: "collapse",
                                height: "100%",
                              }}
                            >
                              <tr>
                                <td
                                  style={{
                                    textAlign: "center",
                                    verticalAlign: "middle",
                                  }}
                                >
                                  <Img
                                    src="https://cdn.templates.unlayer.com/assets/1657696907140-3.png"
                                    alt="24/7 Monitoring"
                                    width="40"
                                    height="40"
                                    className="object-contain"
                                    style={{
                                      display: "block",
                                      margin: "0 auto",
                                      filter: "invert(1)",
                                    }}
                                  />
                                </td>
                              </tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ textAlign: "center", paddingBottom: "15px" }}
                        >
                          <Heading
                            className="m-0 font-bold text-white"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "22px",
                              lineHeight: "1.3",
                            }}
                          >
                            24/7 Monitoring
                          </Heading>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <Text
                            className="m-0 text-white"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "15px",
                              lineHeight: "1.6",
                              opacity: "0.9",
                            }}
                          >
                            This is a new text block. Change the text.
                          </Text>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Quality Equipment Section */}
            <Section
              className="px-0 py-0"
              style={{
                background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
              }}
            >
              <table
                width="100%"
                cellPadding="60"
                cellSpacing="0"
                style={{ borderCollapse: "collapse" }}
              >
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <Heading
                      className="m-0 mb-6 font-bold text-gray-900"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "36px",
                        lineHeight: "1.2",
                      }}
                    >
                      Quality Equipment
                    </Heading>
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse" }}
                    >
                      <tr>
                        <td
                          style={{ textAlign: "center", paddingBottom: "50px" }}
                        >
                          <Text
                            className="m-0 text-gray-600"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "18px",
                              lineHeight: "1.7",
                              maxWidth: "550px",
                              margin: "0 auto",
                            }}
                          >
                            This is a new text block. Change the text. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                          </Text>
                        </td>
                      </tr>
                    </table>

                    {/* Product Showcase */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse" }}
                    >
                      <tr>
                        <td
                          style={{ textAlign: "center", paddingBottom: "50px" }}
                        >
                          <div
                            style={{
                              background:
                                "linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)",
                              borderRadius: "20px",
                              padding: "40px",
                              border: "2px solid #e2e8f0",
                              boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                            }}
                          >
                            <Img
                              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=320&fit=crop"
                              alt="Smart home security devices"
                              width="500"
                              height="320"
                              style={{
                                display: "block",
                                margin: "0 auto",
                                borderRadius: "16px",
                                maxWidth: "100%",
                                boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                              }}
                            />

                            {/* AI Labels Row */}
                            <table
                              width="100%"
                              cellPadding="20"
                              cellSpacing="0"
                              style={{
                                borderCollapse: "collapse",
                                marginTop: "30px",
                              }}
                            >
                              <tr>
                                <td
                                  style={{
                                    width: "33.33%",
                                    textAlign: "center",
                                  }}
                                >
                                  <div
                                    style={{
                                      backgroundColor: "#1f2937",
                                      color: "white",
                                      padding: "8px 16px",
                                      borderRadius: "25px",
                                      fontSize: "14px",
                                      fontWeight: "700",
                                      boxShadow:
                                        "0 4px 12px rgba(31, 41, 55, 0.3)",
                                      border: "2px solid #374151",
                                      display: "inline-block",
                                    }}
                                  >
                                    AI POWERED
                                  </div>
                                </td>
                                <td
                                  style={{
                                    width: "33.33%",
                                    textAlign: "center",
                                  }}
                                >
                                  <div
                                    style={{
                                      backgroundColor: "#1f2937",
                                      color: "white",
                                      padding: "8px 16px",
                                      borderRadius: "25px",
                                      fontSize: "14px",
                                      fontWeight: "700",
                                      boxShadow:
                                        "0 4px 12px rgba(31, 41, 55, 0.3)",
                                      border: "2px solid #374151",
                                      display: "inline-block",
                                    }}
                                  >
                                    SMART AI
                                  </div>
                                </td>
                                <td
                                  style={{
                                    width: "33.33%",
                                    textAlign: "center",
                                  }}
                                >
                                  <div
                                    style={{
                                      backgroundColor: "#1f2937",
                                      color: "white",
                                      padding: "8px 16px",
                                      borderRadius: "25px",
                                      fontSize: "14px",
                                      fontWeight: "700",
                                      boxShadow:
                                        "0 4px 12px rgba(31, 41, 55, 0.3)",
                                      border: "2px solid #374151",
                                      display: "inline-block",
                                    }}
                                  >
                                    AI TECH
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                    </table>

                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", margin: "0 auto" }}
                    >
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <Link
                            href={shopNowUrl}
                            style={{
                              background:
                                "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                              color: "white",
                              padding: "18px 45px",
                              textDecoration: "none",
                              borderRadius: "35px",
                              fontSize: "18px",
                              fontWeight: "700",
                              fontFamily: "Inter, sans-serif",
                              display: "inline-block",
                              boxShadow: "0 6px 20px rgba(99, 102, 241, 0.4)",
                              textTransform: "uppercase",
                              letterSpacing: "1.5px",
                              border: "2px solid rgba(255,255,255,0.2)",
                            }}
                          >
                            Shop Now
                          </Link>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Enhanced Footer */}
            <Section
              className="px-0 py-0"
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              }}
            >
              <table
                width="100%"
                cellPadding="50"
                cellSpacing="0"
                style={{ borderCollapse: "collapse" }}
              >
                <tr>
                  <td style={{ textAlign: "center" }}>
                     {/* Social Media Icons */}
             <div className="mx-auto  mb-4">
                  <a href="#">
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                      alt="Twitter"
                      className="w-6 h-6 ml-3"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/skype.png"
                      alt="LinkedIn"
                      className="w-6 h-6 ml-3"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                      alt="Instagram"
                      className="w-6 h-6 ml-3"
                    />
                  </a>
                </div>

                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse" }}
                    >
                      <tr>
                        <td
                          style={{ textAlign: "center", paddingBottom: "12px" }}
                        >
                          <Text
                            className="m-0 text-white"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "18px",
                              lineHeight: "1.5",
                            }}
                          >
                            {address}
                          </Text>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ textAlign: "center", paddingBottom: "25px" }}
                        >
                          <Text
                            className="m-0 text-white"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              opacity: "0.9",
                            }}
                          >
                            All rights reserved. Company Inc 2019.
                          </Text>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <Text
                            className="m-0"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              color: "#e0e7ff",
                            }}
                          >
                            <Link
                              href={preferencesUrl}
                              style={{
                                color: "#e0e7ff",
                                textDecoration: "none",
                              }}
                            >
                              Preferences
                            </Link>{" "}
                            |{" "}
                            <Link
                              href={unsubscribeUrl}
                              style={{
                                color: "#e0e7ff",
                                textDecoration: "none",
                              }}
                            >
                              Unsubscribe
                            </Link>{" "}
                            |{" "}
                            <Link
                              href={viewInBrowserUrl}
                              style={{
                                color: "#e0e7ff",
                                textDecoration: "none",
                              }}
                            >
                              View in browser
                            </Link>
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
  );
}

TechnologySecurity.PreviewProps = {
  logoUrl: "/placeholder.svg?height=30&width=120",
  homeUrl: "https://example.com/home",
  pageUrl: "https://example.com/page",
  aboutUrl: "https://example.com/about",
  contactUrl: "https://example.com/contact",
  visitUsUrl: "https://example.com/visit",
  shopNowUrl: "https://example.com/shop",
  facebookUrl: "https://facebook.com/techsecurity",
  twitterUrl: "https://twitter.com/techsecurity",
  instagramUrl: "https://instagram.com/techsecurity",
  pinterestUrl: "https://pinterest.com/techsecurity",
  address: "2901 Market Street #4067 San Francisco, CA 94103",
  preferencesUrl: "https://example.com/preferences",
  unsubscribeUrl: "https://example.com/unsubscribe",
  viewInBrowserUrl: "https://example.com/view",
} satisfies TechnologySecurityEmailProps;
