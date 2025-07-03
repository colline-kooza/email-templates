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

interface EnvironmentalEmailProps {
  learnMoreUrl?: string
  wasteReductionUrl?: string
  readMore1Url?: string
  readMore2Url?: string
  readMore3Url?: string
  facebookUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
  rssUrl?: string
  logoUrl?: string
  unsubscribeUrl?: string
  privacyUrl?: string
  webUrl?: string
}

export default function Environmental({
  learnMoreUrl = "#",
  wasteReductionUrl = "#",
  readMore1Url = "#",
  readMore2Url = "#",
  readMore3Url = "#",
  facebookUrl = "https://facebook.com",
  linkedinUrl = "https://linkedin.com",
  instagramUrl = "https://instagram.com",
  rssUrl = "#",
  logoUrl = "/placeholder.svg?height=40&width=120",
  unsubscribeUrl = "#",
  privacyUrl = "#",
  webUrl = "#",
}: EnvironmentalEmailProps) {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');
          
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
            
            .mobile-text-sm { 
              font-size: 14px !important; 
            }
            
            .mobile-text-base { 
              font-size: 16px !important; 
            }
            
            .mobile-text-lg { 
              font-size: 20px !important; 
            }
            
            .mobile-text-xl { 
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
              margin-bottom: 20px !important;
            }
            
            .mobile-button-full { 
              width: 90% !important; 
              max-width: 280px !important;
            }
            
            .mobile-table-full {
              width: 100% !important;
            }
            
            .mobile-hero-text {
              font-size: 28px !important;
              line-height: 1.2 !important;
            }
            
            .mobile-section-padding {
              padding: 30px 20px !important;
            }
          }
          
          @media only screen and (max-width: 480px) {
            .mobile-hero-text {
              font-size: 24px !important;
            }
            
            .mobile-text-xl {
              font-size: 20px !important;
            }
          }
        `}</style>
      </Head>
      <Preview>Join the Movement - Recycle & Reuse! Learn How to Reduce Waste</Preview>
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
            {/* Hero Section - Join the Movement */}
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
                        "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      padding: "60px 40px",
                      textAlign: "left",
                    }}
                    className="mobile-section-padding mobile-center"
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        zIndex: "1",
                      }}
                    ></div>
                    <div style={{  zIndex: "2", maxWidth: "300px" }}>
                      <Heading
                        className="m-0 mb-4 font-bold text-white mobile-hero-text"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "36px",
                          lineHeight: "1.2",
                          margin: "0 0 16px 0",
                          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                        }}
                      >
                        Join the Movement
                      </Heading>
                      <Heading
                        className="m-0 mb-6 font-bold text-white mobile-hero-text"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "36px",
                          lineHeight: "1.2",
                          margin: "0 0 24px 0",
                          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                        }}
                      >
                        Recycle & Reuse!
                      </Heading>
                      <Text
                        className="m-0 mb-8 text-white mobile-text-sm"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "16px",
                          lineHeight: "1.5",
                          margin: "0 0 32px 0",
                          textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore.
                      </Text>
                      <Link
                        href={learnMoreUrl}
                        className="mobile-button-full"
                        style={{
                          backgroundColor: "#059669",
                          color: "white",
                          padding: "14px 32px",
                          textDecoration: "none",
                          borderRadius: "6px",
                          fontSize: "16px",
                          fontWeight: "600",
                          fontFamily: "Inter, sans-serif",
                          display: "inline-block",
                        }}
                      >
                        Learn More
                      </Link>
                    </div>
                   
                  </td>
                </tr>
              </table>
            </Section>

            {/* Learn How to Reduce Waste Section */}
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
                    {/* Desktop Layout */}
                    <div className="mobile-hidden">
                      <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                        <tr>
                          <td style={{ width: "55%", paddingRight: "30px", verticalAlign: "top" }}>
                            <Heading
                              className="m-0 mb-4 font-bold"
                              style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "24px",
                                lineHeight: "1.3",
                                color: "#059669",
                                margin: "0 0 16px 0",
                              }}
                            >
                              Learn How
                            </Heading>
                            <Heading
                              className="m-0 mb-6 font-bold"
                              style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "24px",
                                lineHeight: "1.3",
                                color: "#059669",
                                margin: "0 0 24px 0",
                              }}
                            >
                              to Reduce Waste
                            </Heading>
                            <Text
                              className="m-0 mb-4 text-gray-700"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "14px",
                                lineHeight: "1.6",
                                margin: "0 0 16px 0",
                              }}
                            >
                              Lorem ipsum dolor sit amet sectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                              labore et dolore magna aliqua.
                            </Text>
                            <Text
                              className="m-0 mb-6 text-gray-700"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "14px",
                                lineHeight: "1.6",
                                margin: "0 0 24px 0",
                              }}
                            >
                              Magna aliqua. Quis ipsum suspen disse ultrices gravida risus commodo.
                            </Text>
                            <Link
                              href={wasteReductionUrl}
                              style={{
                                backgroundColor: "#059669",
                                color: "white",
                                padding: "12px 24px",
                                textDecoration: "none",
                                borderRadius: "6px",
                                fontSize: "14px",
                                fontWeight: "600",
                                fontFamily: "Inter, sans-serif",
                                display: "inline-block",
                              }}
                            >
                              Learn More
                            </Link>
                          </td>
                          <td style={{ width: "45%", verticalAlign: "top" }}>
                            <Img
                              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=400&fit=crop"
                              alt="Hands holding a small plant"
                              width="250"
                              height="350"
                              style={{
                                display: "block",
                                borderRadius: "12px",
                                maxWidth: "100%",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                              }}
                            />
                          </td>
                        </tr>
                      </table>
                    </div>

                    {/* Mobile Layout */}
                    <div style={{ display: "none" }} className="mobile-stack">
                      <div style={{ textAlign: "center", marginBottom: "30px" }}>
                        <Img
                          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop"
                          alt="Hands holding a small plant"
                          width="250"
                          height="250"
                          style={{
                            display: "block",
                            margin: "0 auto",
                            borderRadius: "12px",
                            maxWidth: "100%",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                          }}
                        />
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <Heading
                          className="m-0 mb-4 font-bold mobile-text-lg"
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "24px",
                            lineHeight: "1.3",
                            color: "#059669",
                            margin: "0 0 16px 0",
                          }}
                        >
                          Learn How to Reduce Waste
                        </Heading>
                        <Text
                          className="m-0 mb-4 text-gray-700 mobile-text-sm"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "14px",
                            lineHeight: "1.6",
                            margin: "0 0 16px 0",
                          }}
                        >
                          Lorem ipsum dolor sit amet sectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.
                        </Text>
                        <Text
                          className="m-0 mb-6 text-gray-700 mobile-text-sm"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "14px",
                            lineHeight: "1.6",
                            margin: "0 0 24px 0",
                          }}
                        >
                          Magna aliqua. Quis ipsum suspen disse ultrices gravida risus commodo.
                        </Text>
                        <Link
                          href={wasteReductionUrl}
                          className="mobile-button-full"
                          style={{
                            backgroundColor: "#059669",
                            color: "white",
                            padding: "12px 24px",
                            textDecoration: "none",
                            borderRadius: "6px",
                            fontSize: "14px",
                            fontWeight: "600",
                            fontFamily: "Inter, sans-serif",
                            display: "inline-block",
                          }}
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </Section>

            {/* From Trash to Art Section */}
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
                    style={{ padding: "50px 40px", textAlign: "center", width: "100%" }}
                  >
                    <Heading
                      className="m-0 mb-2 font-bold mobile-text-lg"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "24px",
                        lineHeight: "1.3",
                        color: "#059669",
                        margin: "0 0 8px 0",
                      }}
                    >
                      From Trash to Art
                    </Heading>
                    <Heading
                      className="m-0 mb-8 font-bold mobile-text-lg"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "24px",
                        lineHeight: "1.3",
                        color: "#059669",
                        margin: "0 0 40px 0",
                      }}
                    >
                      Creative Recycling Exhibits
                    </Heading>

                    {/* Desktop Three Column Layout */}
                    <div className="mobile-hidden">
                      <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                        <tr>
                          {/* Column 1 */}
                          <td style={{ width: "33.33%", padding: "0 10px", verticalAlign: "top" }}>
                            <Img
                              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=180&h=120&fit=crop"
                              alt="Recycled art exhibit 1"
                              width="160"
                              height="120"
                              style={{
                                display: "block",
                                margin: "0 auto 16px auto",
                                borderRadius: "8px",
                                maxWidth: "100%",
                              }}
                            />
                            <Text
                              className="m-0 mb-4 text-gray-700"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "12px",
                                lineHeight: "1.5",
                                margin: "0 0 16px 0",
                                textAlign: "left",
                              }}
                            >
                              Lorem ipsum dolor sit amet sectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                              labore et dolore magna aliqua.
                            </Text>
                            <Link
                              href={readMore1Url}
                              style={{
                                color: "#059669",
                                fontSize: "12px",
                                fontWeight: "600",
                                textDecoration: "none",
                                fontFamily: "Inter, sans-serif",
                              }}
                            >
                              Read More
                            </Link>
                          </td>

                          {/* Column 2 */}
                          <td style={{ width: "33.33%", padding: "0 10px", verticalAlign: "top" }}>
                            <Img
                              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=180&h=120&fit=crop"
                              alt="Recycled art exhibit 2"
                              width="160"
                              height="120"
                              style={{
                                display: "block",
                                margin: "0 auto 16px auto",
                                borderRadius: "8px",
                                maxWidth: "100%",
                              }}
                            />
                            <Text
                              className="m-0 mb-4 text-gray-700"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "12px",
                                lineHeight: "1.5",
                                margin: "0 0 16px 0",
                                textAlign: "left",
                              }}
                            >
                              Lorem ipsum dolor sit amet sectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                              labore et dolore magna aliqua.
                            </Text>
                            <Link
                              href={readMore2Url}
                              style={{
                                color: "#059669",
                                fontSize: "12px",
                                fontWeight: "600",
                                textDecoration: "none",
                                fontFamily: "Inter, sans-serif",
                              }}
                            >
                              Read More
                            </Link>
                          </td>

                          {/* Column 3 */}
                          <td style={{ width: "33.33%", padding: "0 10px", verticalAlign: "top" }}>
                            <Img
                              src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=180&h=120&fit=crop"
                              alt="Recycled art exhibit 3"
                              width="160"
                              height="120"
                              style={{
                                display: "block",
                                margin: "0 auto 16px auto",
                                borderRadius: "8px",
                                maxWidth: "100%",
                              }}
                            />
                            <Text
                              className="m-0 mb-4 text-gray-700"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "12px",
                                lineHeight: "1.5",
                                margin: "0 0 16px 0",
                                textAlign: "left",
                              }}
                            >
                              Lorem ipsum dolor sit amet sectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                              labore et dolore magna aliqua.
                            </Text>
                            <Link
                              href={readMore3Url}
                              style={{
                                color: "#059669",
                                fontSize: "12px",
                                fontWeight: "600",
                                textDecoration: "none",
                                fontFamily: "Inter, sans-serif",
                              }}
                            >
                              Read More
                            </Link>
                          </td>
                        </tr>
                      </table>
                    </div>

                    {/* Mobile Stacked Layout */}
                    <div style={{ display: "none" }} className="mobile-stack">
                      {/* Mobile Item 1 */}
                      <div style={{ marginBottom: "30px", textAlign: "center" }}>
                        <Img
                          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=250&h=180&fit=crop"
                          alt="Recycled art exhibit 1"
                          width="250"
                          height="180"
                          style={{
                            display: "block",
                            margin: "0 auto 16px auto",
                            borderRadius: "8px",
                            maxWidth: "100%",
                          }}
                        />
                        <Text
                          className="m-0 mb-4 text-gray-700 mobile-text-sm"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "14px",
                            lineHeight: "1.5",
                            margin: "0 0 16px 0",
                          }}
                        >
                          Lorem ipsum dolor sit amet sectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.
                        </Text>
                        <Link
                          href={readMore1Url}
                          style={{
                            color: "#059669",
                            fontSize: "14px",
                            fontWeight: "600",
                            textDecoration: "none",
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          Read More
                        </Link>
                      </div>

                      {/* Mobile Item 2 */}
                      <div style={{ marginBottom: "30px", textAlign: "center" }}>
                        <Img
                          src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=250&h=180&fit=crop"
                          alt="Recycled art exhibit 2"
                          width="250"
                          height="180"
                          style={{
                            display: "block",
                            margin: "0 auto 16px auto",
                            borderRadius: "8px",
                            maxWidth: "100%",
                          }}
                        />
                        <Text
                          className="m-0 mb-4 text-gray-700 mobile-text-sm"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "14px",
                            lineHeight: "1.5",
                            margin: "0 0 16px 0",
                          }}
                        >
                          Lorem ipsum dolor sit amet sectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.
                        </Text>
                        <Link
                          href={readMore2Url}
                          style={{
                            color: "#059669",
                            fontSize: "14px",
                            fontWeight: "600",
                            textDecoration: "none",
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          Read More
                        </Link>
                      </div>

                      {/* Mobile Item 3 */}
                      <div style={{ textAlign: "center" }}>
                        <Img
                          src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=250&h=180&fit=crop"
                          alt="Recycled art exhibit 3"
                          width="250"
                          height="180"
                          style={{
                            display: "block",
                            margin: "0 auto 16px auto",
                            borderRadius: "8px",
                            maxWidth: "100%",
                          }}
                        />
                        <Text
                          className="m-0 mb-4 text-gray-700 mobile-text-sm"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "14px",
                            lineHeight: "1.5",
                            margin: "0 0 16px 0",
                          }}
                        >
                          Lorem ipsum dolor sit amet sectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.
                        </Text>
                        <Link
                          href={readMore3Url}
                          style={{
                            color: "#059669",
                            fontSize: "14px",
                            fontWeight: "600",
                            textDecoration: "none",
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Testimonial Quote Section */}
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
                      backgroundColor: "#059669",
                      padding: "50px 40px",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    <Text
                      className="m-0 text-white mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "18px",
                        lineHeight: "1.6",
                        fontStyle: "italic",
                        maxWidth: "400px",
                        margin: "0 auto",
                      }}
                    >
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore."
                    </Text>
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
                      className="m-0 mb-4 font-semibold text-gray-900 mobile-text-base"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "18px",
                        margin: "0 0 16px 0",
                      }}
                    >
                      Thanks for the support! 😊
                    </Heading>

                    <Text
                      className="m-0 mb-6 text-gray-600 mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        lineHeight: "1.6",
                        maxWidth: "400px",
                        margin: "0 auto 24px auto",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore. Sed ut perspiciatis unde omnis iste natus error sit.
                    </Text>

                    {/* Social Media Icons */}
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", margin: "0 auto 20px auto" }}
                    >
                      <tr>
                        <td style={{ padding: "0 5px" }}>
                          <Link href={linkedinUrl}>
                            <Img
                              src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                              alt="LinkedIn"
                              width="24"
                              height="24"
                              style={{ display: "block" }}
                            />
                          </Link>
                        </td>
                        <td style={{ padding: "0 5px" }}>
                          <Link href="">
                            <Img
                              src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                              alt="Twitter"
                              width="24"
                              height="24"
                              style={{ display: "block" }}
                            />
                          </Link>
                        </td>
                        <td style={{ padding: "0 5px" }}>
                          <Link href={facebookUrl}>
                            <Img
                              src="https://cdn.tools.unlayer.com/social/icons/rounded/skype.png"
                              alt="Skype"
                              width="24"
                              height="24"
                              style={{ display: "block" }}
                            />
                          </Link>
                        </td>
                        <td style={{ padding: "0 5px" }}>
                          <Link href={instagramUrl}>
                            <Img
                              src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                              alt="Instagram"
                              width="24"
                              height="24"
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
                          style={{ width: "50%", textAlign: "left", verticalAlign: "middle" }}
                          className="mobile-center"
                        >
                          <Text
                            className="m-0 text-gray-500 mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "12px",
                              lineHeight: "1.5",
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
                          style={{ width: "50%", textAlign: "right", verticalAlign: "middle" }}
                          className="mobile-center"
                        >
                          <Text
                            className="m-0 text-gray-900 mobile-text-sm"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "14px",
                              fontWeight: "600",
                              marginTop: "10px",
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

Environmental.PreviewProps = {
  learnMoreUrl: "https://example.com/learn-more",
  wasteReductionUrl: "https://example.com/waste-reduction",
  readMore1Url: "https://example.com/exhibit-1",
  readMore2Url: "https://example.com/exhibit-2",
  readMore3Url: "https://example.com/exhibit-3",
  facebookUrl: "https://facebook.com/environmental",
  linkedinUrl: "https://linkedin.com/company/environmental",
  instagramUrl: "https://instagram.com/environmental",
  rssUrl: "https://example.com/rss",
  logoUrl: "/placeholder.svg?height=40&width=120",
  unsubscribeUrl: "https://example.com/unsubscribe",
  privacyUrl: "https://example.com/privacy",
  webUrl: "https://example.com",
} satisfies EnvironmentalEmailProps
