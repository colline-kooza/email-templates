import { Body, Container, Column, Head, Html, Link, Preview, Row, Section, Text, Img } from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

export const BigtechEmail = () => (
  <Html>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>{`
        @media only screen and (max-width: 600px) {
          .mobile-padding { padding: 20px 16px !important; }
          .mobile-text { font-size: 14px !important; }
          .mobile-heading { font-size: 18px !important; }
          .mobile-full-width { width: 100% !important; }
          .mobile-center { text-align: center !important; }
          .mobile-button { 
            width: 100% !important;
            padding: 12px 20px !important;
            font-size: 14px !important;
            max-width: 250px !important;
            margin: 20px auto !important;
            display: block !important;
          }
          .mobile-logo { font-size: 20px !important; }
          .mobile-social-icon { width: 24px !important; height: 24px !important; margin: 0 3px !important; }
          .mobile-footer-content { 
            display: block !important;
            text-align: center !important;
          }
          .mobile-footer-content td {
            display: block !important;
            width: 100% !important;
            padding: 10px 0 !important;
          }
        }
      `}</style>
    </Head>
    <Preview>Please verify your email address for Big Tech</Preview>
   <Tailwind>
     <Body style={main}>
      <Container style={container}>
        {/* Header Section */}
        <Section style={headerSection}>
          <Row>
            <Column align="center">
            <img src="https://cdn.templates.unlayer.com/assets/1663653255638-Asset%201.png" alt=""
            className="w-28 h-28 object-contain "
             />
           
            </Column>
          </Row>
        </Section>

        {/* Main Content Card */}
        <Section style={contentCardSection}>
          <Row>
            <Column>
              <div style={contentCard}>
                <Text style={greeting} className="mobile-heading">
                  Hi Christ,
                </Text>

                <Text style={verificationText} className="mobile-text">
                  Please Verify that your email address is hello@christ.com and that you entered it when signing up for
                  Big Tech.
                </Text>

                <table cellPadding="0" cellSpacing="0" border={0} style={buttonTable}>
                  <tr>
                    <td align="center">
                      <Link href="#" style={verifyButton} className="mobile-button">
                        Verify Email
                      </Link>
                    </td>
                  </tr>
                </table>

                <Text style={descriptionText} className="mobile-text">
                  Big Tech is a free voice, video, and text chat app that's used by tens of millions of people. Lorem
                  ipsum is dolor sit amet, consectetur.
                </Text>
              </div>
            </Column>
          </Row>
        </Section>

        {/* Help Section */}
        <Section style={helpSection} className="mobile-padding">
          <Row>
            <Column align="center">
              <Text style={helpText} className="mobile-text">
                Need help? Contact our support team or hit us up on Twitter{" "}
                <Link href="#" style={twitterLink}>
                  @Bigtech
                </Link>
                . Want to give feedback? Let us know what you think on{" "}
                <Link href="#" style={feedbackLink}>
                  our feedback site
                </Link>
                .
              </Text>
            </Column>
          </Row>
        </Section>

        {/* Footer Section */}
        <Section style={footerSection}>
           <Row>
              <Column align="center">
                <table
                  cellPadding="0"
                  cellSpacing="0"
                  border={0}
                  style={socialIconsTable}
                >
                  <tr>
                    <td align="center">
                      <table
                        cellPadding="0"
                        cellSpacing="0"
                        border={0}
                        style={socialIconsTable}
                      >
                        <tr>
                          <td style={socialIconCell}>
                            <Link href="#" style={socialLink}>
                              <Img
                                src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                                alt="Instagram"
                                style={socialIcon}
                                className="mobile-social-icon"
                              />
                            </Link>
                          </td>
                          <td style={socialIconCell}>
                            <Link href="#" style={socialLink}>
                              <Img
                                src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png"
                                alt="Twitter"
                                style={socialIcon}
                                className="mobile-social-icon"
                              />
                            </Link>
                          </td>
                          <td style={socialIconCell}>
                            <Link href="#" style={socialLink}>
                              <Img
                                src="https://cdn.tools.unlayer.com/social/icons/circle/tripadvisor.png"
                                alt="WhatsApp"
                                style={socialIcon}
                                className="mobile-social-icon"
                              />
                            </Link>
                          </td>
                          <td style={socialIconCell}>
                            <Link href="#" style={socialLink}>
                              <Img
                                src="https://cdn.tools.unlayer.com/social/icons/circle/whatsapp.png"
                                alt="LinkedIn"
                                style={socialIcon}
                                className="mobile-social-icon"
                              />
                            </Link>
                          </td>
                          <td style={socialIconCell}>
                            <Link href="#" style={socialLink}>
                              <Img
                                src="https://cdn.tools.unlayer.com/social/icons/circle/youtube.png"
                                alt="YouTube"
                                style={socialIcon}
                                className="mobile-social-icon"
                              />
                            </Link>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </Column>
            </Row>
        </Section>

        {/* Address Section */}
        <Section style={addressSection} className="mobile-padding">
          <Row>
            <Column align="center">
              <Text style={addressText} className="mobile-text">
                2261 Market Street #4667 San Francisco, CA 94114
              </Text>
            </Column>
          </Row>
        </Section>
      </Container>
    </Body>
   </Tailwind>
  </Html>
)

export default BigtechEmail

// Styles
const main = {
  backgroundColor: "#000000",
  fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
  margin: "0",
  padding: "40px 0",
}

const container = {
  margin: "0 auto",
  width: "100%",
  maxWidth: "600px",
}

// Header Styles
const headerSection = {
  backgroundColor: "transparent",
  padding: "0 0 10px",
}

const logoContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
}

const globeIcon = {
  fontSize: "32px",
  filter: "hue-rotate(15deg) saturate(1.5)",
}

const logoTextContainer = {
  textAlign: "left" as const,
}

const logoText = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "700",
  margin: "0",
  letterSpacing: "1px",
}

const sloganText = {
  color: "#cccccc",
  fontSize: "10px",
  fontWeight: "400",
  margin: "0",
  letterSpacing: "2px",
  textTransform: "uppercase" as const,
}

// Content Card Styles
const contentCardSection = {
  backgroundColor: "transparent",
  padding: "0 20px 40px",
}

const contentCard = {
  backgroundColor: "#ffffff",
  padding: "40px",
  borderRadius: "0",
  textAlign: "center" as const,
}

const greeting = {
  color: "#333333",
  fontSize: "20px",
  fontWeight: "600",
  margin: "0 0 25px",
  textAlign: "center" as const,
}

const verificationText = {
  color: "#666666",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "0 0 30px",
  textAlign: "center" as const,
}

const buttonTable = {
  margin: "0 auto 30px",
}

const verifyButton = {
  backgroundColor: "#000000",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "15px 40px",
  borderRadius: "0",
  display: "inline-block",
  textAlign: "center" as const,
}

const descriptionText = {
  color: "#666666",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0",
  textAlign: "center" as const,
}

// Help Section Styles
const helpSection = {
  backgroundColor: "transparent",
  padding: "0 20px 30px",
}

const helpText = {
  color: "#cccccc",
  fontSize: "12px",
  lineHeight: "1.5",
  margin: "0",
  textAlign: "center" as const,
}

const twitterLink = {
  color: "#ffa500",
  textDecoration: "none",
}

const feedbackLink = {
  color: "#ffa500",
  textDecoration: "underline",
}

// Footer Styles
const footerSection = {
  backgroundColor: "transparent",
  padding: "0 0 20px",
}

const footerBar = {
  backgroundColor: "#ffa500",
  padding: "20px 30px",
}

const footerTable = {
  width: "100%",
}

const footerBrandCell = {
  width: "25%",
  verticalAlign: "middle" as const,
}

const footerBrandText = {
  color: "#000000",
  fontSize: "18px",
  fontWeight: "700",
  margin: "0",
}

const footerSocialCell = {
  width: "25%",
  textAlign: "center" as const,
  verticalAlign: "middle" as const,
}

const socialIconsTable = {
  margin: "0 auto",
}

const socialIconCell = {
  padding: "0 4px",
}

const socialLink = {
  textDecoration: "none",
}

const socialIcon = {
  width: "28px",
  height: "28px",
  borderRadius: "4px",
  display: "inline-block",
  textAlign: "center" as const,
  lineHeight: "28px",
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "600",
}

const footerTextCell = {
  width: "50%",
  verticalAlign: "middle" as const,
  textAlign: "right" as const,
}

const footerDescText = {
  color: "#000000",
  fontSize: "12px",
  margin: "0",
  lineHeight: "1.4",
}

// Address Styles
const addressSection = {
  backgroundColor: "transparent",
  padding: "0 20px",
}

const addressText = {
  color: "#cccccc",
  fontSize: "11px",
  margin: "0",
  textAlign: "center" as const,
}
