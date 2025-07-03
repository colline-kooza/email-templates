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

interface FeedbackReviewEmailProps {
  brandName?: string
  customerName?: string
  feedbackUrl?: string
  reviewUrl?: string
  contactUrl?: string
  unsubscribeUrl?: string
  companyName?: string
  address?: string
  managerName?: string
  managerTitle?: string
}

export default function FeedbackReview({
  brandName = "YOURBRAND",
  customerName = "Valued Customer",
  feedbackUrl = "#",
  reviewUrl = "#",
  contactUrl = "#",
  unsubscribeUrl = "#",
  companyName = "YOUR COMPANY",
  address = "123 Jitsu Street, Near more, San Francisco, CA",
  managerName = "Jonathan Swift",
  managerTitle = "Manager",
}: FeedbackReviewEmailProps) {
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
            
            .mobile-hero-illustration {
              width: 200px !important;
              height: 160px !important;
            }
            
            .mobile-rating-circle {
              width: 35px !important;
              height: 35px !important;
              margin: 0 3px !important;
            }
            
            .mobile-review-input {
              width: 90% !important;
              padding: 15px !important;
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
              width: 180px !important;
              height: 140px !important;
            }
          }
        `}</style>
      </Head>
      <Preview>Do you have few minutes? We'd love your feedback!</Preview>
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
                      backgroundColor: "#ffffff",
                      padding: "30px 40px 20px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-padding-sm"
                  >
                    <Text
                      className="m-0 text-gray-400 mobile-text-base"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "18px",
                        margin: "0",
                        color: "#9ca3af",
                        fontWeight: "600",
                        letterSpacing: "2px",
                      }}
                    >
                      {brandName}
                    </Text>
                    <Text
                      className="m-0 text-gray-400 mobile-text-xs"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "12px",
                        margin: "0",
                        color: "#9ca3af",
                        letterSpacing: "1px",
                      }}
                    >
                      COMPANY
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Hero Feedback Section */}
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
                      backgroundColor: "#577b27",
                      padding: "50px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                    {/* Hero Illustration */}
                    <div style={{ marginBottom: "30px" }}>
                      <Img
                        src="https://cdn.templates.unlayer.com/assets/1627017618297-loudspeaker-1459128_960_720.png"
                        alt="Customer feedback illustration"
                        width="350"
                        height="300"
                        className="mobile-hero-illustration object-contain"
                        style={{
                          display: "block",
                          margin: "0 auto",
                          maxWidth: "100%",
                        }}
                      />
                    </div>

                    <Heading
                      className="m-0 mb-6 text-white mobile-text-2xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "28px",
                        lineHeight: "1.2",
                        margin: "0 0 24px 0",
                        color: "#ffffff",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      DO YOU HAVE FEW MINUTES?
                    </Heading>

                    <Text
                      className="m-0 mb-8 text-white mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.6",
                        margin: "0 0 32px 0",
                        color: "#ffffff",
                        maxWidth: "450px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type
                    </Text>

                    <div style={{ marginBottom: "20px" }}>
                      <Link
                        href={feedbackUrl}
                        className="mobile-button-full"
                        style={{
                          backgroundColor: "transparent",
                          color: "#ffffff",
                          padding: "14px 32px",
                          textDecoration: "none",
                          border: "2px solid #ffffff",
                          borderRadius: "4px",
                          fontSize: "16px",
                          fontWeight: "600",
                          fontFamily: "Inter, sans-serif",
                          display: "inline-block",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                        }}
                      >
                        Leave Feedback
                      </Link>
                    </div>

                    <Text
                      className="m-0 text-white mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        margin: "0",
                        color: "#ffffff",
                      }}
                    >
                      ( WE ALSO GIVE YOU 50% OFF )
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Rating Section */}
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
                      className="m-0 mb-6 mobile-text-2xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "24px",
                        lineHeight: "1.2",
                        margin: "0 0 24px 0",
                        color: "#7c9a3c",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      RATE US FROM HERE
                    </Heading>

                    <Text
                      className="m-0 mb-4 text-gray-700 mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.6",
                        margin: "0 0 16px 0",
                        color: "#374151",
                        maxWidth: "450px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type
                    </Text>

                    <Text
                      className="m-0 mb-8 text-gray-900 mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        margin: "0 0 32px 0",
                        color: "#111827",
                        fontWeight: "600",
                      }}
                    >
                      It's really important for us.
                    </Text>

                    {/* Rating Circles */}
                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                      <tr>
                        <td style={{ padding: "0 5px" }}>
                          <div
                            style={{
                              width: "45px",
                              height: "45px",
                              backgroundColor: "#ef4444",
                              borderRadius: "50%",
                              cursor: "pointer",
                            }}
                            className="mobile-rating-circle"
                          ></div>
                        </td>
                        <td style={{ padding: "0 5px" }}>
                          <div
                            style={{
                              width: "45px",
                              height: "45px",
                              backgroundColor: "#f97316",
                              borderRadius: "50%",
                              cursor: "pointer",
                            }}
                            className="mobile-rating-circle"
                          ></div>
                        </td>
                        <td style={{ padding: "0 5px" }}>
                          <div
                            style={{
                              width: "45px",
                              height: "45px",
                              backgroundColor: "#eab308",
                              borderRadius: "50%",
                              cursor: "pointer",
                            }}
                            className="mobile-rating-circle"
                          ></div>
                        </td>
                        <td style={{ padding: "0 5px" }}>
                          <div
                            style={{
                              width: "45px",
                              height: "45px",
                              backgroundColor: "#84cc16",
                              borderRadius: "50%",
                              cursor: "pointer",
                            }}
                            className="mobile-rating-circle"
                          ></div>
                        </td>
                        <td style={{ padding: "0 5px" }}>
                          <div
                            style={{
                              width: "45px",
                              height: "45px",
                              backgroundColor: "#22c55e",
                              borderRadius: "50%",
                              cursor: "pointer",
                            }}
                            className="mobile-rating-circle"
                          ></div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Write Review Section */}
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
                      backgroundColor: "#dcfce7",
                      padding: "50px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                    <Heading
                      className="m-0 mb-6 mobile-text-2xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "24px",
                        lineHeight: "1.2",
                        margin: "0 0 24px 0",
                        color: "#7c9a3c",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      WRITE A REVIEW
                    </Heading>

                    <Text
                      className="m-0 mb-8 text-gray-700 mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.6",
                        margin: "0 0 32px 0",
                        color: "#374151",
                        maxWidth: "450px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    </Text>

                    {/* Review Input Box */}
                    <div style={{ marginBottom: "30px" }}>
                      <div
                        style={{
                          backgroundColor: "#ffffff",
                          border: "1px solid #d1d5db",
                          borderRadius: "8px",
                          padding: "20px",
                          maxWidth: "400px",
                          margin: "0 auto",
                          textAlign: "left",
                        }}
                        className="mobile-review-input"
                      >
                        <Text
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "14px",
                            color: "#9ca3af",
                            margin: "0",
                          }}
                        >
                          click the button to write a review
                        </Text>
                      </div>
                    </div>

                    <div>
                      <Link
                        href={reviewUrl}
                        className="mobile-button-full"
                        style={{
                          backgroundColor: "#7c9a3c",
                          color: "#ffffff",
                          padding: "14px 32px",
                          textDecoration: "none",
                          borderRadius: "4px",
                          fontSize: "16px",
                          fontWeight: "600",
                          fontFamily: "Inter, sans-serif",
                          display: "inline-block",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                        }}
                      >
                        Write A Review
                      </Link>
                    </div>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Additional Content Section */}
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
                    }}
                    className="mobile-section-padding"
                  >
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
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type
                    </Text>

                    <Text
                      className="m-0 mb-2 text-gray-700 mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        margin: "0 0 8px 0",
                        color: "#374151",
                      }}
                    >
                      Best Regards,
                    </Text>
                    <Text
                      className="m-0 mb-1 text-gray-700 mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        margin: "0 0 4px 0",
                        color: "#374151",
                        fontWeight: "600",
                      }}
                    >
                      {managerName}
                    </Text>
                    <Text
                      className="m-0 text-gray-700 mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        margin: "0",
                        color: "#374151",
                      }}
                    >
                      {managerTitle}
                    </Text>
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
                      padding: "30px 40px",
                      textAlign: "center",
                      width: "100%",
                      backgroundColor: "#7c9a3c",
                    }}
                  >
                    <Text
                      className="m-0 mb-2 text-white mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        margin: "0 0 8px 0",
                        color: "#ffffff",
                      }}
                    >
                      © 200X {companyName}
                    </Text>

                    <Text
                      className="m-0 mb-4 text-white mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        margin: "0 0 16px 0",
                        color: "#ffffff",
                      }}
                    >
                      {address}
                    </Text>

                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                      <tr>
                        <td style={{ padding: "0 10px" }}>
                          <Link
                            href={contactUrl}
                            style={{
                              color: "#ffffff",
                              textDecoration: "none",
                              fontSize: "14px",
                              fontFamily: "Inter, sans-serif",
                            }}
                          >
                            Contact
                          </Link>
                        </td>
                        <td style={{ color: "#ffffff", fontSize: "14px" }}>|</td>
                        <td style={{ padding: "0 10px" }}>
                          <Link
                            href={unsubscribeUrl}
                            style={{
                              color: "#ffffff",
                              textDecoration: "none",
                              fontSize: "14px",
                              fontFamily: "Inter, sans-serif",
                            }}
                          >
                            Unsubscribe
                          </Link>
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

FeedbackReview.PreviewProps = {
  brandName: "YOURBRAND",
  customerName: "John Doe",
  feedbackUrl: "https://example.com/feedback",
  reviewUrl: "https://example.com/review",
  contactUrl: "https://example.com/contact",
  unsubscribeUrl: "https://example.com/unsubscribe",
  companyName: "YOUR COMPANY",
  address: "123 Jitsu Street, Near more, San Francisco, CA",
  managerName: "Jonathan Swift",
  managerTitle: "Manager",
} satisfies FeedbackReviewEmailProps
