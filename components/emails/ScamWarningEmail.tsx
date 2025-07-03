import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Font,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

export const ScamWarningEmail = () => (
  <Html>
    <Head>
      <Font
        fontFamily="Inter"
        fallbackFontFamily={["Arial", "sans-serif"]}
        webFont={{
          url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>{`
        @media only screen and (max-width: 600px) {
          .mobile-padding { padding: 20px 16px !important; }
          .mobile-text { font-size: 14px !important; }
          .mobile-heading { font-size: 24px !important; }
          .mobile-warning-heading { font-size: 36px !important; }
          .mobile-full-width { width: 100% !important; }
          .mobile-center { text-align: center !important; }
          .mobile-stack { 
            display: block !important; 
            width: 100% !important; 
            margin: 0 0 20px 0 !important;
          }
          .mobile-hide { display: none !important; }
          .mobile-nav-item {
            display: inline-block !important;
            margin: 0 8px !important;
            font-size: 12px !important;
          }
          .mobile-precaution-card {
            width: 100% !important;
            margin: 0 0 20px 0 !important;
            display: block !important;
          }
          .mobile-social-icon {
            margin: 0 4px !important;
          }
        }
      `}</style>
    </Head>
    <Preview>WARNING! Scam Emails - Important Precautions for Avoiding Scams</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          {/* Header Navigation */}
          <Section style={headerSection}>
            <Row>
              <Column style={logoColumn}>
                <div style={logoContainer}>
                  <div style={logoIcon}>⚡</div>
                  <Text style={logoText}>Desishub</Text>
                </div>
              </Column>
              <Column style={navColumn}>
                <div style={navContainer}>
                  <Link href="#" style={navLink} className="mobile-nav-item">
                    About Us
                  </Link>
                  <Link href="#" style={navLink} className="mobile-nav-item">
                    Contact Us
                  </Link>
              
                </div>
              </Column>
            </Row>
          </Section>

          {/* Warning Section */}
          <Section style={warningSection}>
            <Row>
              <Column align="center">
                <div style={warningContent}>
                  <Heading style={warningHeading} className="mobile-warning-heading">
                    WARNING!
                  </Heading>
                  <Text style={warningSubtitle}>Scam Emails</Text>

                  <div style={warningIconContainer}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1659697995765-header.png"
                      alt="Scam email warning icon with folder and fishing hook"
                      style={warningIcon}
                      className="mobile-full-width"
                    />
                  </div>

                  <div style={ribbonContainer}>
                    <div style={ribbon}></div>
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Precautions Section */}
          <Section style={precautionsSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Heading style={precautionsHeading} className="mobile-heading">
                  Some Important Precautions For Avoiding Scam
                </Heading>
                <Text style={precautionsDescription} className="mobile-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                </Text>

                {/* Desktop Precautions Grid */}
                <div className="mobile-hide">
                  <Row style={precautionsRow}>
                    <Column style={precautionColumn}>
                      <div style={precautionCard}>
                        <table style={precautionIconTable}>
                          <tbody>
                            <tr>
                              <td style={precautionIconCell}>
                                <Img
                                  src="https://cdn.templates.unlayer.com/assets/1662012884990-email.png"
                                  alt="Email review icon"
                                  style={precautionIconImage}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <Text style={precautionTitle}>Review emails closely for common phishing tactics</Text>
                      </div>
                    </Column>
                    <Column style={precautionColumn}>
                      <div style={precautionCard}>
                        <table style={precautionIconTable}>
                          <tbody>
                            <tr>
                              <td style={precautionIconCell}>
                                <Img
                                  src="https://cdn.templates.unlayer.com/assets/1662012887851-filter.png"
                                  alt="Email filter icon"
                                  style={precautionIconImage}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <Text style={precautionTitle}>Use Email filters to reduce spam in your inbox</Text>
                      </div>
                    </Column>
                  </Row>
                  <Row style={precautionsRow}>
                    <Column style={precautionColumn}>
                      <div style={precautionCard}>
                        <table style={precautionIconTable}>
                          <tbody>
                            <tr>
                              <td style={precautionIconCell}>
                                <Img
                                  src="https://cdn.templates.unlayer.com/assets/1662013068916-credit-card.png"
                                  alt="Credit card security icon"
                                  style={precautionIconImage}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <Text style={precautionTitle}>Never update the bank account, debit card</Text>
                      </div>
                    </Column>
                    <Column style={precautionColumn}>
                      <div style={precautionCard}>
                        <table style={precautionIconTable}>
                          <tbody>
                            <tr>
                              <td style={precautionIconCell}>
                                <Img
                                  src="https://cdn.templates.unlayer.com/assets/1662013070444-cloud-download.png"
                                  alt="Download warning icon"
                                  style={precautionIconImage}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <Text style={precautionTitle}>Don't open or download attachments in email</Text>
                      </div>
                    </Column>
                  </Row>
                </div>

                {/* Mobile Precautions Stack */}
                <div style={mobilePrecautionsContainer}>
                  <div style={mobilePrecautionCard} className="mobile-precaution-card">
                    <table style={mobilePrecautionIconTable}>
                      <tbody>
                        <tr>
                          <td style={mobilePrecautionIconCell}>
                            <Img
                              src="/placeholder.svg?height=40&width=40"
                              alt="Email review icon"
                              style={precautionIconImage}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Text style={precautionTitle}>Review emails closely for common phishing tactics</Text>
                  </div>

                  <div style={mobilePrecautionCard} className="mobile-precaution-card">
                    <table style={mobilePrecautionIconTable}>
                      <tbody>
                        <tr>
                          <td style={mobilePrecautionIconCell}>
                            <Img
                              src="https://cdn.templates.unlayer.com/assets/1662012884990-email.png"
                              alt="Email filter icon"
                              style={precautionIconImage}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Text style={precautionTitle}>Use Email filters to reduce spam in your inbox</Text>
                  </div>

                  <div style={mobilePrecautionCard} className="mobile-precaution-card">
                    <table style={mobilePrecautionIconTable}>
                      <tbody>
                        <tr>
                          <td style={mobilePrecautionIconCell}>
                            <Img
                              src="https://cdn.templates.unlayer.com/assets/1662013068916-credit-card.png"
                              alt="Credit card security icon"
                              style={precautionIconImage}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Text style={precautionTitle}>Never update the bank account, debit card</Text>
                  </div>

                  <div style={mobilePrecautionCard} className="mobile-precaution-card">
                    <table style={mobilePrecautionIconTable}>
                      <tbody>
                        <tr>
                          <td style={mobilePrecautionIconCell}>
                            <Img
                              src="https://cdn.templates.unlayer.com/assets/1662013070444-cloud-download.png"
                              alt="Download warning icon"
                              style={precautionIconImage}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Text style={precautionTitle}>Don't open or download attachments in email</Text>
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Additional Security Tips Section */}
          <Section style={tipsSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Heading style={tipsHeading} className="mobile-heading">
                  How to Identify Scam Emails
                </Heading>

                <div style={tipsContainer}>
                  <div style={tipItem}>
                    <div style={tipNumber}>1</div>
                    <div style={tipContent}>
                      <Text style={tipTitle}>Check the Sender's Email Address</Text>
                      <Text style={tipDescription} className="mobile-text">
                        Look for misspellings, unusual domains, or addresses that don't match the supposed organization
                      </Text>
                    </div>
                  </div>

                  <div style={tipItem}>
                    <div style={tipNumber}>2</div>
                    <div style={tipContent}>
                      <Text style={tipTitle}>Look for Urgent Language</Text>
                      <Text style={tipDescription} className="mobile-text">
                        Scammers often use phrases like "Act now!" or "Your account will be closed" to create panic
                      </Text>
                    </div>
                  </div>

                  <div style={tipItem}>
                    <div style={tipNumber}>3</div>
                    <div style={tipContent}>
                      <Text style={tipTitle}>Verify Links Before Clicking</Text>
                      <Text style={tipDescription} className="mobile-text">
                        Hover over links to see the actual destination. Legitimate companies use their official domains
                      </Text>
                    </div>
                  </div>

                  <div style={tipItem}>
                    <div style={tipNumber}>4</div>
                    <div style={tipContent}>
                      <Text style={tipTitle}>Be Wary of Unexpected Attachments</Text>
                      <Text style={tipDescription} className="mobile-text">
                        Don't open attachments from unknown senders or unexpected emails from known contacts
                      </Text>
                    </div>
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Report Scam Section */}
          <Section style={reportSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Heading style={reportHeading} className="mobile-heading">
                  Received a Suspicious Email?
                </Heading>
                <Text style={reportDescription} className="mobile-text">
                  Help protect others by reporting scam emails to the appropriate authorities
                </Text>

                <div style={reportButtonsContainer}>
                  <Link href="#" style={reportButton} className="mobile-full-width">
                    🚨 Report Scam Email
                  </Link>
                  <Link href="#" style={secondaryButton} className="mobile-full-width">
                    📞 Contact Support
                  </Link>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Footer Section */}
          <Section style={footerSection} className="mobile-padding">
            <Row>
              <Column align="center">
             
                <Text style={addressText} className="mobile-text">
                  2261 Market Street #4667 San Francisco, CA 94114
                </Text>
                <Text style={rightsText} className="mobile-text">
                  All rights reserved
                </Text>

                {/* Social Media Icons */}
                <div style={socialContainer}>
                  <Link href="https://www.facebook.com" style={socialLink} className="mobile-social-icon">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                      alt="Facebook"
                      width="24"
                      height="24"
                      style={socialIcon}
                    />
                  </Link>
                  <Link href="https://www.twitter.com" style={socialLink} className="mobile-social-icon">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                      alt="Twitter"
                      width="24"
                      height="24"
                      style={socialIcon}
                    />
                  </Link>
                  <Link href="https://www.linkedin.com" style={socialLink} className="mobile-social-icon">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                      alt="LinkedIn"
                      width="24"
                      height="24"
                      style={socialIcon}
                    />
                  </Link>
                  <Link href="https://www.instagram.com" style={socialLink} className="mobile-social-icon">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                      alt="Instagram"
                      width="24"
                      height="24"
                      style={socialIcon}
                    />
                  </Link>
                  <Link href="https://www.youtube.com" style={socialLink} className="mobile-social-icon">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/youtube.png"
                      alt="YouTube"
                      width="24"
                      height="24"
                      style={socialIcon}
                    />
                  </Link>
                </div>

                <Text style={footerLinks} className="mobile-text">
                  <Link href="#" style={footerLink}>
                    Preferences
                  </Link>{" "}
                  |{" "}
                  <Link href="#" style={footerLink}>
                    Unsubscribe
                  </Link>{" "}
                  |{" "}
                  <Link href="#" style={footerLink}>
                    View in browser
                  </Link>
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
)

export default ScamWarningEmail

// Styles
const main = {
  backgroundColor: "#f8f9fa",
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  margin: "0",
  padding: "0",
  lineHeight: "1.6",
}

const container = {
  margin: "0 auto",
  width: "100%",
  maxWidth: "600px",
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
}

// Header Styles
const headerSection = {
  backgroundColor: "#4a5568",
  padding: "20px 40px",
}

const logoColumn = {
  width: "200px",
  verticalAlign: "middle" as const,
}

const logoContainer = {
  display: "flex",
  alignItems: "center",
}

const logoIcon = {
  color: "#ffffff",
  fontSize: "20px",
  marginRight: "8px",
}

const logoText = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0",
}

const navColumn = {
  verticalAlign: "middle" as const,
}

const navContainer = {
  textAlign: "right" as const,
}

const navLink = {
  color: "#e2e8f0",
  fontSize: "14px",
  fontWeight: "400",
  textDecoration: "none",
  margin: "0 15px",
  display: "inline-block",
}

// Warning Section Styles
const warningSection = {
  backgroundColor: "#ffffff",
  padding: "60px 40px 40px",
  textAlign: "center" as const,
}

const warningContent = {
  maxWidth: "400px",
  margin: "0 auto",
}

const warningHeading = {
  color: "#e53e3e",
  fontSize: "48px",
  fontWeight: "700",
  lineHeight: "1.1",
  margin: "0 0 16px",
  textAlign: "center" as const,
  letterSpacing: "2px",
}

const warningSubtitle = {
  color: "#2d3748",
  fontSize: "24px",
  fontWeight: "600",
  margin: "0 0 40px",
  textAlign: "center" as const,
}

const warningIconContainer = {
  textAlign: "center" as const,
  margin: "0 0 30px",
}

const warningIcon = {
  width: "120px",
  height: "120px",
  display: "block",
  margin: "0 auto",
  objectFit: "cover" as const,
}

const ribbonContainer = {
  textAlign: "center" as const,
}

const ribbon = {
  width: "200px",
  height: "20px",
  backgroundColor: "#e2e8f0",
  borderRadius: "10px",
  margin: "0 auto",
  position: "relative" as const,
}

// Precautions Section Styles
const precautionsSection = {
  backgroundColor: "#ffffff",
  padding: "50px 40px",
}

const precautionsHeading = {
  color: "#2d3748",
  fontSize: "28px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 20px",
  lineHeight: "1.3",
}

const precautionsDescription = {
  color: "#718096",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 50px",
  textAlign: "center" as const,
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto",
}

const precautionsRow = {
  margin: "0 0 30px",
}

const precautionColumn = {
  padding: "0 15px",
}

const precautionCard = {
  textAlign: "center" as const,
  padding: "30px 20px",
}

// Email-compatible icon centering using tables
const precautionIconTable = {
  width: "80px",
  height: "80px",
  margin: "0 auto 20px",
  borderCollapse: "collapse" as const,
}

const precautionIconCell = {
  width: "80px",
  height: "80px",
  backgroundColor: "#2d3748",
  borderRadius: "50%",
  textAlign: "center" as const,
  verticalAlign: "middle" as const,
}

const precautionIconImage = {
  width: "40px",
  height: "40px",
  display: "block",
  margin: "0 auto",
  filter: "brightness(0) invert(1)",
}

const precautionTitle = {
  color: "#2d3748",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0",
  textAlign: "center" as const,
  lineHeight: "1.4",
}

// Mobile Precautions Styles
const mobilePrecautionsContainer = {
  display: "none",
}

const mobilePrecautionCard = {
  textAlign: "center" as const,
  padding: "25px 20px",
  margin: "0 0 20px",
  backgroundColor: "#f7fafc",
  borderRadius: "8px",
  border: "1px solid #e2e8f0",
}

const mobilePrecautionIconTable = {
  width: "60px",
  height: "60px",
  margin: "0 auto 16px",
  borderCollapse: "collapse" as const,
}

const mobilePrecautionIconCell = {
  width: "60px",
  height: "60px",
  backgroundColor: "#2d3748",
  borderRadius: "50%",
  textAlign: "center" as const,
  verticalAlign: "middle" as const,
}

// Tips Section Styles
const tipsSection = {
  backgroundColor: "#f7fafc",
  padding: "50px 40px",
}

const tipsHeading = {
  color: "#2d3748",
  fontSize: "28px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 40px",
}

const tipsContainer = {
  maxWidth: "500px",
  margin: "0 auto",
}

const tipItem = {
  display: "flex",
  alignItems: "flex-start",
  margin: "0 0 24px",
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  border: "1px solid #e2e8f0",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
}

const tipNumber = {
//   backgroundColor: "#4299e1",
  color: "#000000",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  fontWeight: "700",
  marginRight: "16px",
  minWidth: "32px",
  textAlign: "center" as const,
  lineHeight: "32px",
}

const tipContent = {
  flex: "1",
}

const tipTitle = {
  color: "#2d3748",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0 0 8px",
}

const tipDescription = {
  color: "#718096",
  fontSize: "14px",
  margin: "0",
  lineHeight: "1.4",
}

// Report Section Styles
const reportSection = {
  backgroundColor: "#ffffff",
  padding: "50px 40px",
  textAlign: "center" as const,
}

const reportHeading = {
  color: "#2d3748",
  fontSize: "28px",
  fontWeight: "700",
  margin: "0 0 16px",
  textAlign: "center" as const,
}

const reportDescription = {
  color: "#718096",
  fontSize: "16px",
  margin: "0 0 32px",
  textAlign: "center" as const,
  lineHeight: "1.6",
}

const reportButtonsContainer = {
  textAlign: "center" as const,
}

const reportButton = {
  backgroundColor: "#e53e3e",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "16px 28px",
  borderRadius: "8px",
  display: "inline-block",
  textAlign: "center" as const,
  margin: "0 8px 12px",
  boxShadow: "0 4px 12px rgba(229, 62, 62, 0.3)",
}

const secondaryButton = {
  backgroundColor: "#4299e1",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "16px 28px",
  borderRadius: "8px",
  display: "inline-block",
  textAlign: "center" as const,
  margin: "0 8px 12px",
  boxShadow: "0 4px 12px rgba(66, 153, 225, 0.3)",
}

// Footer Styles
const footerSection = {
  backgroundColor: "#4a5568",
  padding: "40px",
  textAlign: "center" as const,
}

const footerLogoContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 0 20px",
}

const footerLogoIcon = {
  color: "#ffffff",
  fontSize: "20px",
  marginRight: "8px",
}

const footerLogoText = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0",
}

const addressText = {
  color: "#e2e8f0",
  fontSize: "14px",
  margin: "0 0 8px",
  textAlign: "center" as const,
}

const rightsText = {
  color: "#e2e8f0",
  fontSize: "14px",
  margin: "0 0 25px",
  textAlign: "center" as const,
}

const socialContainer = {
  textAlign: "center" as const,
  margin: "0 0 25px",
}

const socialLink = {
  display: "inline-block",
  margin: "0 6px",
}

const socialIcon = {
  display: "block",
}

const footerLinks = {
  color: "#e2e8f0",
  fontSize: "12px",
  margin: "0",
  textAlign: "center" as const,
}

const footerLink = {
  color: "#e2e8f0",
  textDecoration: "underline",
}
