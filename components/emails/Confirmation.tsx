import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components"

export const Confirmation = () => (
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
          }
          .mobile-illustration { width: 250px !important; height: 180px !important; }
          .mobile-speaker-image { width: 80px !important; height: 80px !important; }
        }
      `}</style>
    </Head>
    <Preview>Your Webinar Registration is Confirmed - April 10th at 11:00 Pacific</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Header Badge */}
        <Section style={headerSection}>
          <Row>
            <Column align="center">
              <table cellPadding="0" cellSpacing="0" border={0} style={badgeTable}>
                <tr>
                  <td style={badgeCell}>
                    <div style={webinarBadge}>
                      <div style={playIcon}>▶</div>
                      <span style={badgeText}>WEBINAR</span>
                    </div>
                  </td>
                </tr>
              </table>
            </Column>
          </Row>
        </Section>

        {/* Main Content */}
        <Section style={contentSection} className="mobile-padding">
          <Row>
            <Column align="center">
              <Text style={greetingText} className="mobile-text">
                Hi, Your Webinar Registration is
              </Text>
              <Heading style={confirmedHeading} className="mobile-heading">
                Confirmed
              </Heading>

              {/* Illustration */}
              <table cellPadding="0" cellSpacing="0" border={0} style={illustrationTable}>
                <tr>
                  <td align="center">
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1619494610453-xx.png"
                      alt="Webinar confirmation illustration"
                      style={illustrationImage}
                      className="mobile-illustration"
                    />
                  </td>
                </tr>
              </table>

              <Text style={linkText} className="mobile-heading">
                Here's your personal webinar link
              </Text>

              <table cellPadding="0" cellSpacing="0" border={0} style={buttonTable}>
                <tr>
                  <td align="center">
                    <Link href="#" style={clickButton} className="mobile-button">
                      CLICK HERE
                    </Link>
                  </td>
                </tr>
              </table>

              <Text style={warningText} className="mobile-text">
                Make sure you don't share this link publicly, because it's unique for you!
              </Text>
            </Column>
          </Row>
        </Section>

        {/* Event Details Bar */}
        <Section style={eventBarSection}>
          <Row>
            <Column>
              <table cellPadding="0" cellSpacing="0" border={0} width="100%" style={eventBarTable}>
                <tr>
                  <td style={eventBarCell}>
                    <Text style={eventBarText}>Webinar Date: April 10th, 2024 at 11:00 (Pacific time)</Text>
                  </td>
                </tr>
              </table>
            </Column>
          </Row>
        </Section>

        {/* Reminder Text */}
        <Section style={reminderSection} className="mobile-padding">
          <Row>
            <Column align="center">
              <Text style={reminderText} className="mobile-text">
                We also going to send you a reminder before the webinar starts too!
              </Text>
            </Column>
          </Row>
        </Section>

        {/* Speaker Section */}
        <Section style={speakerSection} className="mobile-padding">
          <Row>
            <Column align="center">
              <table cellPadding="0" cellSpacing="0" border={0} style={speakerTable}>
                <tr>
                  <td align="center">
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1619495617589-2.png"
                      alt="Olivia Emma - Customer Success Lead"
                      style={speakerImage}
                      className="mobile-speaker-image"
                    />
                    <Text style={speakerName}>Olivia Emma</Text>
                    <Text style={speakerTitle}>Customer Success Lead</Text>
                    <div style={highlightBar}></div>
                  </td>
                </tr>
              </table>
            </Column>
          </Row>
        </Section>

        {/* Footer Note */}
        <Section style={footerNoteSection} className="mobile-padding">
          <Row>
            <Column align="center">
              <Text style={footerNoteText} className="mobile-text">
                N.B.: You may see another confirmation email sent from{" "}
                <Link href="#" style={footerLink}>
                  GoToWebinar
                </Link>
                , but don't worry, it includes the same link as the one provided above for you to watch the webinar.
              </Text>
            </Column>
          </Row>
        </Section>

        {/* Social Footer */}
        <Section style={socialFooterSection}>
          <Row>
            <Column>
              <table cellPadding="0" cellSpacing="0" border={0} width="100%" style={socialFooterTable}>
                <tr>
                  <td style={socialFooterCell}>
                    {/* Social Icons */}
                    <table cellPadding="0" cellSpacing="0" border={0} style={socialIconsTable}>
                      <tr>
                        <td align="center">
                          <table cellPadding="0" cellSpacing="0" border={0} style={socialIconsInnerTable}>
                            <tr>
                              <td style={socialIconCell}>
                                <Link href="#" style={socialLink}>
                                  <div style={{ ...socialIcon, backgroundColor: "#3b5998" }}>f</div>
                                </Link>
                              </td>
                              <td style={socialIconCell}>
                                <Link href="#" style={socialLink}>
                                  <div style={{ ...socialIcon, backgroundColor: "#1da1f2" }}>t</div>
                                </Link>
                              </td>
                              <td style={socialIconCell}>
                                <Link href="#" style={socialLink}>
                                  <div style={{ ...socialIcon, backgroundColor: "#0077b5" }}>in</div>
                                </Link>
                              </td>
                              <td style={socialIconCell}>
                                <Link href="#" style={socialLink}>
                                  <div style={{ ...socialIcon, backgroundColor: "#e4405f" }}>ig</div>
                                </Link>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <Text style={companyText} className="mobile-text">
                      Our company, 1234 Main Street, Anytown, State 12345
                    </Text>
                    <Text style={companySubtext} className="mobile-text">
                      You received this email because you signed up for our webinar.
                    </Text>
                  </td>
                </tr>
              </table>
            </Column>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
)

export default Confirmation

// Styles
const main = {
  backgroundColor: "#e8e8e8",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
  margin: "0",
  padding: "20px 0",
}

const container = {
  margin: "0 auto",
  width: "100%",
  maxWidth: "600px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  overflow: "hidden",
}

// Header Styles
const headerSection = {
  backgroundColor: "#e8e8e8",
  padding: "20px 0 10px",
}

const badgeTable = {
  margin: "0 auto",
}

const badgeCell = {
  textAlign: "center" as const,
}

const webinarBadge = {
  backgroundColor: "#6366f1",
  color: "#ffffff",
  padding: "8px 16px",
  borderRadius: "20px",
  display: "inline-flex",
  alignItems: "center",
  fontSize: "12px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
}

const playIcon = {
  marginRight: "6px",
  fontSize: "10px",
}

const badgeText = {
  fontSize: "12px",
  fontWeight: "600",
}

// Content Styles
const contentSection = {
  backgroundColor: "#ffffff",
  padding: "40px 40px 30px",
}

const greetingText = {
  color: "#666666",
  fontSize: "16px",
  textAlign: "center" as const,
  margin: "0 0 5px",
}

const confirmedHeading = {
  color: "#22c55e",
  fontSize: "24px",
  fontWeight: "600",
  textAlign: "center" as const,
  margin: "0 0 30px",
}

const illustrationTable = {
  margin: "0 auto 30px",
}

const illustrationImage = {
  width: "300px",
  height: "200px",
  display: "block",
  margin: "0 auto",
}

const linkText = {
  color: "#333333",
  fontSize: "18px",
  fontWeight: "500",
  textAlign: "center" as const,
  margin: "0 0 20px",
}

const buttonTable = {
  margin: "0 auto 20px",
}

const clickButton = {
  backgroundColor: "#6366f1",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "12px 30px",
  borderRadius: "6px",
  display: "inline-block",
  textAlign: "center" as const,
  letterSpacing: "0.5px",
  textTransform: "uppercase" as const,
}

const warningText = {
  color: "#666666",
  fontSize: "12px",
  textAlign: "center" as const,
  margin: "0",
  lineHeight: "1.4",
}

// Event Bar Styles
const eventBarSection = {
  backgroundColor: "#ffffff",
  padding: "0 40px",
}

const eventBarTable = {
  width: "100%",
}

const eventBarCell = {
  backgroundColor: "#333333",
  padding: "12px 20px",
  borderRadius: "6px",
  textAlign: "center" as const,
}

const eventBarText = {
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0",
}

// Reminder Styles
const reminderSection = {
  backgroundColor: "#ffffff",
  padding: "20px 40px",
}

const reminderText = {
  color: "#666666",
  fontSize: "14px",
  textAlign: "center" as const,
  margin: "0",
  lineHeight: "1.4",
}

// Speaker Styles
const speakerSection = {
  backgroundColor: "#ffffff",
  padding: "20px 40px 30px",
}

const speakerTable = {
  margin: "0 auto",
}

const speakerImage = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  display: "block",
  margin: "0 auto 15px",
  objectFit: "cover" as const,
}

const speakerName = {
  color: "#333333",
  fontSize: "18px",
  fontWeight: "600",
  textAlign: "center" as const,
  margin: "0 0 5px",
}

const speakerTitle = {
  color: "#666666",
  fontSize: "14px",
  textAlign: "center" as const,
  margin: "0 0 10px",
}

const highlightBar = {
  width: "60px",
  height: "3px",
  backgroundColor: "#fbbf24",
  margin: "0 auto",
  borderRadius: "2px",
}

// Footer Note Styles
const footerNoteSection = {
  backgroundColor: "#ffffff",
  padding: "20px 40px 30px",
}

const footerNoteText = {
  color: "#666666",
  fontSize: "11px",
  textAlign: "center" as const,
  margin: "0",
  lineHeight: "1.4",
}

const footerLink = {
  color: "#6366f1",
  textDecoration: "underline",
}

// Social Footer Styles
const socialFooterSection = {
  backgroundColor: "#cccccc",
}

const socialFooterTable = {
  width: "100%",
}

const socialFooterCell = {
  padding: "30px 40px",
  textAlign: "center" as const,
}

const socialIconsTable = {
  width: "100%",
  marginBottom: "20px",
}

const socialIconsInnerTable = {
  margin: "0 auto",
}

const socialIconCell = {
  padding: "0 5px",
}

const socialLink = {
  textDecoration: "none",
}

const socialIcon = {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  display: "inline-block",
  textAlign: "center" as const,
  lineHeight: "32px",
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "600",
}

const companyText = {
  color: "#666666",
  fontSize: "11px",
  textAlign: "center" as const,
  margin: "0 0 5px",
}

const companySubtext = {
  color: "#666666",
  fontSize: "11px",
  textAlign: "center" as const,
  margin: "0",
}
