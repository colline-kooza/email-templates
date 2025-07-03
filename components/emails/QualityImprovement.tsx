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

interface QualityImprovementEmailProps {
  organizationName?: string
  facebookUrl?: string
  twitterUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
}

export default function QualityImprovement({
  organizationName = "[Organization Name]",
  facebookUrl = "https://facebook.com",
  twitterUrl = "https://twitter.com",
  linkedinUrl = "https://linkedin.com",
  instagramUrl = "https://instagram.com",
}: QualityImprovementEmailProps) {
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
            
            .mobile-table-full {
              width: 100% !important;
            }
            
            .mobile-section-padding {
              padding: 30px 20px !important;
            }
            
            .mobile-hero-illustration {
              width: 250px !important;
              height: 200px !important;
            }
            
            .mobile-objective-icon {
              width: 50px !important;
              height: 50px !important;
            }
          }
          
          @media only screen and (max-width: 480px) {
            .mobile-text-2xl {
              font-size: 20px !important;
            }
            
            .mobile-text-3xl {
              font-size: 24px !important;
            }
            
            .mobile-hero-illustration {
              width: 220px !important;
              height: 180px !important;
            }
          }
        `}</style>
      </Head>
      <Preview>Introducing a Quality Improvement Initiative: Enhancing Excellence Together</Preview>
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
                      backgroundColor: "#1a1a1a",
                      padding: "50px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                    <Text
                      className="m-0 mb-4 text-white mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        margin: "0 0 16px 0",
                        color: "#ffffff",
                      }}
                    >
                      Introducing a Quality Improvement Initiative:
                    </Text>

                    <Heading
                      className="m-0 mb-8 mobile-text-3xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "35px",
                        lineHeight: "1.2",
                        margin: "0 0 32px 0",
                        color: "#ef4444",
                        fontWeight: "700",
                      }}
                    >
                      Enhancing Excellence
                      <br />
                      Together
                    </Heading>

                    {/* Hero Illustration */}
                    <div>
                      <Img
                        src="https://cdn.templates.unlayer.com/assets/1690360596104-1.png"
                        alt="Team collaboration illustration"
                        width="300"
                        height="280"
                        className="mobile-hero-illustration object-cover"
                        style={{
                          display: "block",
                          margin: "0 auto",
                        //   borderRadius: "12px",
                          maxWidth: "100%",
                        }}
                      />
                    </div>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Main Content Section */}
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
                      backgroundColor: "#f9fafb",
                      padding: "50px 40px",
                    }}
                    className="mobile-section-padding"
                  >
                    <Text
                      className="m-0 mb-6 text-gray-900 mobile-text-lg"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "18px",
                        margin: "0 0 24px 0",
                        color: "#111827",
                        fontWeight: "600",
                      }}
                    >
                      Dear {organizationName} Team,
                    </Text>

                    <Text
                      className="m-0 mb-6 text-gray-700 mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.6",
                        margin: "0 0 24px 0",
                        color: "#374151",
                      }}
                    >
                      We are excited to announce the launch of a new initiative aimed at fostering a culture of
                      continuous improvement and excellence within our organization. Today, we introduce the Quality
                      Improvement Initiative.
                    </Text>

                    <Text
                      className="m-0 mb-8 text-gray-700 mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.6",
                        margin: "0 0 32px 0",
                        color: "#374151",
                      }}
                    >
                      "Enhancing Excellence Together" As a forward-thinking organization, we recognize that the pursuit
                      of excellence is a never-ending journey. To remain competitive and provide the best possible
                      products/services to our customers, we must continually evolve and improve. Our new initiative,
                      "Enhancing Excellence Together" initiative is designed to achieve precisely that, and we believe
                      that every member of our team plays a vital role in its success.
                    </Text>

                    <Heading
                      className="m-0 mb-8 text-gray-900 mobile-text-2xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "24px",
                        margin: "0 0 32px 0",
                        color: "#111827",
                        fontWeight: "700",
                        textAlign: "center",
                      }}
                    >
                      Objectives of the Initiative:
                    </Heading>

                    {/* Objective 1 - Customer-Centric Focus */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", marginBottom: "30px" }}
                    >
                      <tr>
                        <td style={{ width: "80px", verticalAlign: "top", textAlign: "center", paddingRight: "20px" }}>
                          <div
                            style={{
                              width: "60px",
                              height: "60px",
                              backgroundColor: "#8b5cf6",
                              borderRadius: "50%",
                              margin: "0 auto",
                            }}
                            className="mobile-objective-icon"
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
                                      fontSize: "24px",
                                      color: "#ffffff",
                                      margin: "0",
                                      fontFamily: "Inter, sans-serif",
                                    }}
                                  >
                                    👥
                                  </Text>
                                </td>
                              </tr>
                            </table>
                          </div>
                        </td>
                        <td style={{ verticalAlign: "top" }}>
                          <Heading
                            className="m-0 mb-3 text-gray-900 mobile-text-lg"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "18px",
                              margin: "0 0 12px 0",
                              color: "#111827",
                              fontWeight: "600",
                            }}
                          >
                            Customer-Centric Focus:
                          </Heading>
                          <Text
                            className="m-0 text-gray-700 mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              lineHeight: "1.6",
                              margin: "0",
                              color: "#374151",
                            }}
                          >
                            Our customers are at the heart of everything we do. By better understanding their needs and
                            expectations better, We will actively seek feedback, engage in customer surveys, and analyze
                            customer data to drive our improvement efforts.
                          </Text>
                        </td>
                      </tr>
                    </table>

                    {/* Objective 2 - Empowering Every Team Member */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", marginBottom: "30px" }}
                    >
                      <tr>
                        <td style={{ width: "80px", verticalAlign: "top", textAlign: "center", paddingRight: "20px" }}>
                          <div
                            style={{
                              width: "60px",
                              height: "60px",
                              backgroundColor: "#8b5cf6",
                              borderRadius: "50%",
                              margin: "0 auto",
                            }}
                            className="mobile-objective-icon"
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
                                      fontSize: "24px",
                                      color: "#ffffff",
                                      margin: "0",
                                      fontFamily: "Inter, sans-serif",
                                    }}
                                  >
                                    💡
                                  </Text>
                                </td>
                              </tr>
                            </table>
                          </div>
                        </td>
                        <td style={{ verticalAlign: "top" }}>
                          <Heading
                            className="m-0 mb-3 text-gray-900 mobile-text-lg"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "18px",
                              margin: "0 0 12px 0",
                              color: "#111827",
                              fontWeight: "600",
                            }}
                          >
                            Empowering Every Team Member:
                          </Heading>
                          <Text
                            className="m-0 text-gray-700 mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              lineHeight: "1.6",
                              margin: "0",
                              color: "#374151",
                            }}
                          >
                            We firmly believe that everyone within our organization possesses valuable insights and
                            experiences. We encourage all team members to actively participate in suggesting improvement
                            ideas and creating a collaborative environment where innovation thrives.
                          </Text>
                        </td>
                      </tr>
                    </table>

                    {/* Objective 3 - Process Optimization */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", marginBottom: "30px" }}
                    >
                      <tr>
                        <td style={{ width: "80px", verticalAlign: "top", textAlign: "center", paddingRight: "20px" }}>
                          <div
                            style={{
                              width: "60px",
                              height: "60px",
                              backgroundColor: "#8b5cf6",
                              borderRadius: "50%",
                              margin: "0 auto",
                            }}
                            className="mobile-objective-icon"
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
                                      fontSize: "24px",
                                      color: "#ffffff",
                                      margin: "0",
                                      fontFamily: "Inter, sans-serif",
                                    }}
                                  >
                                    📋
                                  </Text>
                                </td>
                              </tr>
                            </table>
                          </div>
                        </td>
                        <td style={{ verticalAlign: "top" }}>
                          <Heading
                            className="m-0 mb-3 text-gray-900 mobile-text-lg"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "18px",
                              margin: "0 0 12px 0",
                              color: "#111827",
                              fontWeight: "600",
                            }}
                          >
                            Process Optimization:
                          </Heading>
                          <Text
                            className="m-0 text-gray-700 mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              lineHeight: "1.6",
                              margin: "0",
                              color: "#374151",
                            }}
                          >
                            We will meticulously review our current workflows and identify areas where inefficiencies or
                            bottlenecks may exist. Through data-driven strategies, we aim to reduce waste, shorten lead
                            times, and increase productivity.
                          </Text>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Thank You Section */}
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
                      backgroundColor: "#f9fafb",
                      padding: "40px",
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                    <Heading
                      className="m-0 mb-4 text-gray-900 mobile-text-xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "20px",
                        lineHeight: "1.3",
                        margin: "0 0 16px 0",
                        color: "#111827",
                        fontWeight: "600",
                      }}
                    >
                      Thank you for your commitment to the success
                      <br />
                      of our organization and the Quality
                      <br />
                      Improvement Initiative.
                    </Heading>

                    <Text
                      className="m-0 mb-8 text-gray-700 mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        margin: "0 0 32px 0",
                        color: "#374151",
                        fontWeight: "600",
                      }}
                    >
                      Let's embark on this journey together!
                    </Text>

                    {/* Social Media Icons */}
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", margin: "0 auto 30px auto" }}
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
                      className="m-0 mb-4 text-gray-600 mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        lineHeight: "1.6",
                        margin: "0 0 16px 0",
                        color: "#4b5563",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus commodo viverra.
                    </Text>

                    <Text
                      className="m-0 text-gray-600 mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        margin: "0",
                        color: "#4b5563",
                      }}
                    >
                      2261 Market Street #467, San Francisco, CA 94114
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

QualityImprovement.PreviewProps = {
  organizationName: "Acme Corporation",
  facebookUrl: "https://facebook.com/example",
  twitterUrl: "https://twitter.com/example",
  linkedinUrl: "https://linkedin.com/company/example",
  instagramUrl: "https://instagram.com/example",
} satisfies QualityImprovementEmailProps
