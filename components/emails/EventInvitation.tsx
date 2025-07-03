import { Body, Container, Head, Heading, Html, Link, Preview, Section, Tailwind, Text } from "@react-email/components"

interface EventInvitationEmailProps {
  logoUrl?: string
  productUrl?: string
  signUpUrl?: string
  eventDate?: string
  eventLocation?: string
  unsubscribeUrl?: string
}

export default function EventInvitation({
  logoUrl = "/placeholder.svg?height=30&width=100",
  productUrl = "#",
  signUpUrl = "#",
  eventDate = "May 13th",
  eventLocation = "San Francisco",
  unsubscribeUrl = "#",
}: EventInvitationEmailProps) {
  return (
    <Html>
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,400&display=swap');
          
          /* Reset email client spacing */
          table { border-collapse: collapse; }
          td, th { padding: 0; }
          .no-spacing { margin: 0 !important; padding: 0 !important; }
          .align-left { text-align: left !important; }
          .align-center { text-align: center !important; }
          .align-right { text-align: right !important; }
        `}</style>
      </Head>
      <Preview>The most anticipated industry event of the year is back! - Digital Marketing Conference</Preview>
      <Tailwind>
        <Body className="bg-gray-100 no-spacing" style={{ fontFamily: "Inter, sans-serif", margin: 0, padding: 0 }}>
          <Container className="mx-auto w-full max-w-[600px]" style={{ margin: "0 auto" }}>
            
            {/* Header */}
            <Section className="bg-gray-200" style={{ padding: "16px 24px" }}>
              <table width="100%" style={{ borderCollapse: "collapse", margin: 0 }}>
                <tr>
                  <td style={{ width: "50%", verticalAlign: "middle", textAlign: "left" }}>
                    <div style={{ display: "flex", alignItems: "center", margin: 0 }}>
                      <div
                        style={{
                          width: "24px",
                          height: "24px",
                          backgroundColor: "#3b82f6",
                          marginRight: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0
                        }}
                      >
                        <div
                          style={{
                            width: "12px",
                            height: "12px",
                            backgroundColor: "white",
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "1px",
                          }}
                        >
                          <div style={{ backgroundColor: "#3b82f6", width: "5px", height: "5px" }}></div>
                          <div style={{ backgroundColor: "#3b82f6", width: "5px", height: "5px" }}></div>
                          <div style={{ backgroundColor: "#3b82f6", width: "5px", height: "5px" }}></div>
                          <div style={{ backgroundColor: "#3b82f6", width: "5px", height: "5px" }}></div>
                        </div>
                      </div>
                      <Text
                        style={{ 
                          fontFamily: "Inter, sans-serif", 
                          fontSize: "16px",
                          fontWeight: "500",
                          color: "#2563eb",
                          margin: 0,
                          lineHeight: "1"
                        }}
                      >
                        DESISHUB
                      </Text>
                    </div>
                  </td>
                  <td style={{ width: "50%", verticalAlign: "middle", textAlign: "right" }}>
                    <Link
                      href={productUrl}
                      style={{ 
                        fontFamily: "Inter, sans-serif", 
                        fontSize: "14px",
                        color: "#6b7280",
                        textDecoration: "none"
                      }}
                    >
                      Product
                    </Link>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Main Content */}
            <Section className="bg-black" style={{ padding: 0, margin: 0 }}>
              <div style={{ padding: "48px 32px 32px 32px" }}>
                
                {/* Main Heading */}
                <Heading
                  style={{ 
                    fontFamily: "Inter, sans-serif",
                    fontSize: "36px",
                    fontWeight: "700",
                    color: "white",
                    lineHeight: "1.2",
                    margin: "0 0 24px 0",
                    textAlign: "left"
                  }}
                >
                  The most<br />
                  anticipated<br />
                  industry event of the year is back!
                </Heading>

                {/* Description */}
                <Text
                  style={{ 
                    fontFamily: "Playfair Display, serif", 
                    fontSize: "16px",
                    fontStyle: "italic",
                    color: "white",
                    lineHeight: "1.5",
                    margin: "0 0 32px 0",
                    textAlign: "left"
                  }}
                >
                  Digital Marketing Conference is an exciting event where you can meet and network with the best
                  marketers in the industry.
                </Text>

                {/* Feature Blocks */}
                <div style={{ margin: "0 0 48px 0" }}>
                  
                  {/* Inspiring Keynotes */}
                  <div style={{ backgroundColor: "#f97316", margin: "0 0 1px 0" }}>
                    <table width="100%" style={{ borderCollapse: "collapse" }}>
                      <tr>
                        <td style={{ padding: "20px 24px", verticalAlign: "middle", textAlign: "left" }}>
                          <Text style={{ 
                            fontFamily: "Inter, sans-serif",
                            fontSize: "18px",
                            fontWeight: "600",
                            color: "white",
                            margin: 0,
                            lineHeight: "1"
                          }}>
                            Inspiring Keynotes
                          </Text>
                        </td>
                        <td style={{ padding: "20px 24px", verticalAlign: "middle", textAlign: "right", width: "80px" }}>
                          <img 
                            src="https://a.mailmunch.co/user_data/landing_pages/1500895941731-12345_11.png" 
                            alt="Keynotes"
                            style={{ width: "64px", height: "64px", objectFit: "contain", display: "block" }}
                          />
                        </td>
                      </tr>
                    </table>
                  </div>

                  {/* Business Ideas */}
                  <div style={{ backgroundColor: "#fbbf24", margin: "0 0 1px 0" }}>
                    <table width="100%" style={{ borderCollapse: "collapse" }}>
                      <tr>
                        <td style={{ padding: "20px 24px", verticalAlign: "middle", textAlign: "left" }}>
                          <Text style={{ 
                            fontFamily: "Inter, sans-serif",
                            fontSize: "18px",
                            fontWeight: "600",
                            color: "white",
                            margin: 0,
                            lineHeight: "1"
                          }}>
                            Business Ideas
                          </Text>
                        </td>
                        <td style={{ padding: "20px 24px", verticalAlign: "middle", textAlign: "right", width: "80px" }}>
                          <img 
                            src="https://a.mailmunch.co/user_data/landing_pages/1500897077918-njh_11.png" 
                            alt="Business Ideas"
                            style={{ width: "64px", height: "64px", objectFit: "contain", display: "block" }}
                          />
                        </td>
                      </tr>
                    </table>
                  </div>

                  {/* Experts' Lectures */}
                  <div style={{ backgroundColor: "#3b82f6", margin: "0 0 1px 0" }}>
                    <table width="100%" style={{ borderCollapse: "collapse" }}>
                      <tr>
                        <td style={{ padding: "20px 24px", verticalAlign: "middle", textAlign: "left" }}>
                          <Text style={{ 
                            fontFamily: "Inter, sans-serif",
                            fontSize: "18px",
                            fontWeight: "600",
                            color: "white",
                            margin: 0,
                            lineHeight: "1"
                          }}>
                            Experts' Lectures
                          </Text>
                        </td>
                        <td style={{ padding: "20px 24px", verticalAlign: "middle", textAlign: "right", width: "80px" }}>
                          <img 
                            src="https://a.mailmunch.co/user_data/landing_pages/1500898827504-ssss_11.png" 
                            alt="Expert Lectures"
                            style={{ width: "64px", height: "64px", objectFit: "contain", display: "block" }}
                          />
                        </td>
                      </tr>
                    </table>
                  </div>

                  {/* Networking */}
                  <div style={{ backgroundColor: "#10b981", margin: 0 }}>
                    <table width="100%" style={{ borderCollapse: "collapse" }}>
                      <tr>
                        <td style={{ padding: "20px 24px", verticalAlign: "middle", textAlign: "left" }}>
                          <Text style={{ 
                            fontFamily: "Inter, sans-serif",
                            fontSize: "18px",
                            fontWeight: "600",
                            color: "white",
                            margin: 0,
                            lineHeight: "1"
                          }}>
                            Networking
                          </Text>
                        </td>
                        <td style={{ padding: "20px 24px", verticalAlign: "middle", textAlign: "right", width: "80px" }}>
                          <img 
                            src="https://a.mailmunch.co/user_data/landing_pages/1500898859734-Untitled-3-Recovered_11.png" 
                            alt="Networking"
                            style={{ width: "64px", height: "64px", objectFit: "contain", display: "block" }}
                          />
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>

                {/* Event Details */}
                <div style={{ margin: "0 0 48px 0" }}>
                  <table width="100%" style={{ borderCollapse: "collapse" }}>
                    <tr>
                      <td style={{ width: "50%", verticalAlign: "top", padding: "0 16px 0 0" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img 
                            src="https://a.mailmunch.co/user_data/landing_pages/1500899591146-Untitled-3-Recovered_15.png" 
                            alt="Date"
                            style={{ width: "40px", height: "40px", objectFit: "contain", marginRight: "12px", flexShrink: 0 }}
                          />
                          <div>
                            <Text style={{ 
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              fontWeight: "500",
                              color: "white",
                              margin: "0 0 4px 0",
                              lineHeight: "1"
                            }}>
                              Event Date
                            </Text>
                            <Text style={{ 
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              fontWeight: "600",
                              color: "white",
                              margin: 0,
                              lineHeight: "1"
                            }}>
                              {eventDate}
                            </Text>
                          </div>
                        </div>
                      </td>
                      <td style={{ width: "50%", verticalAlign: "top", padding: "0 0 0 16px" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img 
                            src="https://a.mailmunch.co/user_data/landing_pages/1500900274752-sssdadada.png" 
                            alt="Location"
                            style={{ width: "40px", height: "40px", objectFit: "contain", marginRight: "12px", flexShrink: 0 }}
                          />
                          <div>
                            <Text style={{ 
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              fontWeight: "500",
                              color: "white",
                              margin: "0 0 4px 0",
                              lineHeight: "1"
                            }}>
                              Location
                            </Text>
                            <Text style={{ 
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              fontWeight: "600",
                              color: "white",
                              margin: 0,
                              lineHeight: "1"
                            }}>
                              {eventLocation}
                            </Text>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>

                {/* Call to Action */}
                <div style={{ textAlign: "center", margin: 0 }}>
                  <Text style={{ 
                    fontFamily: "Playfair Display, serif",
                    fontSize: "24px",
                    fontStyle: "italic",
                    color: "white",
                    margin: "0 0 24px 0",
                    lineHeight: "1.2"
                  }}>
                    Don't miss out!
                  </Text>
                  <Link
                    href={signUpUrl}
                    style={{
                      backgroundColor: "#10b981",
                      color: "white",
                      padding: "16px 32px",
                      textDecoration: "none",
                      borderRadius: "25px",
                      fontSize: "16px",
                      fontWeight: "600",
                      fontFamily: "Inter, sans-serif",
                      display: "inline-block",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      margin: 0
                    }}
                  >
                    SIGN UP TODAY
                  </Link>
                </div>
              </div>
            </Section>

            {/* Footer */}
            <Section className="bg-gray-200" style={{ padding: "16px 24px", textAlign: "center" }}>
              <Text style={{ 
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                color: "#6b7280",
                margin: 0,
                lineHeight: "1.4"
              }}>
                You received this email because you signed up for our newsletter.{" "}
                <Link 
                  href={unsubscribeUrl} 
                  style={{ color: "#3b82f6", textDecoration: "none" }}
                >
                  Unsubscribe
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

EventInvitation.PreviewProps = {
  logoUrl: "/placeholder.svg?height=30&width=100",
  productUrl: "https://example.com/product",
  signUpUrl: "https://example.com/signup",
  eventDate: "May 13th",
  eventLocation: "San Francisco",
  unsubscribeUrl: "https://example.com/unsubscribe",
} satisfies EventInvitationEmailProps