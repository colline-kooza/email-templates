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

export const Invitation = () => (
  <Html>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>{`
        @media only screen and (max-width: 600px) {
          .mobile-padding { padding: 20px 16px !important; }
          .mobile-text { font-size: 14px !important; }
          .mobile-heading { font-size: 20px !important; }
          .mobile-hero-heading { font-size: 24px !important; }
          .mobile-full-width { width: 100% !important; }
          .mobile-center { text-align: center !important; }
          .mobile-button { 
            width: 100% !important;
            padding: 16px 20px !important;
            font-size: 16px !important;
          }
          .mobile-speaker-image { width: 120px !important; height: 120px !important; }
        }
      `}</style>
    </Head>
    <Preview>Join Emily Smith for a Free Marketing Webinar - August 27th at 11:00 AM</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Header */}
        <Section style={headerSection}>
          <Row>
            <Column align="center">
              <table cellPadding="0" cellSpacing="0" border={0} style={logoTable}>
                <tr>
                  <td align="center">
                    <Text style={logoText}>[YOUR LOGO]</Text>
                  </td>
                </tr>
              </table>
            </Column>
          </Row>
        </Section>

        {/* Hero Section */}
        <Section style={heroSection}>
          <Row>
            <Column>
              <table cellPadding="0" cellSpacing="0" border={0} width="100%" style={heroTable}>
                <tr>
                  <td style={heroContentCell}>
                    <Heading style={heroHeading} className="mobile-hero-heading">
                      Webinar Invite
                    </Heading>

                    <table cellPadding="0" cellSpacing="0" border={0} style={speakerImageTable}>
                      <tr>
                        <td align="center">
                          <Img
                            src="https://emailmonster-production.s3.amazonaws.com/1503088455917-agent.png"
                            alt="Emily Smith - Marketing Expert"
                            style={speakerImage}
                            className="mobile-speaker-image"
                          />
                        </td>
                      </tr>
                    </table>

                    <Text style={speakerIntro} className="mobile-text">
                      Join us for a free webinar with <span style={speakerName}>Emily Smith</span>,<br />
                      marketing expert and successful entrepreneur.
                    </Text>
                  </td>
                </tr>
              </table>
            </Column>
          </Row>
        </Section>

        {/* Content Section */}
        <Section style={contentSection} className="mobile-padding">
          <Row>
            <Column align="center">
              <Heading style={mainHeading} className="mobile-heading">
                Learn the top strategies for{" "}
                <strong>
                  effectively
                  <br />
                  marketing your online business
                </strong>
                .
              </Heading>

              <Text style={descriptionText} className="mobile-text">
                During the webinar, Emily will discuss how to be
                <br />
                effective in a demanding and competitive market.
              </Text>

              <table cellPadding="0" cellSpacing="0" border={0} style={eventDetailsTable}>
                <tr>
                  <td align="center">
                    <Text style={eventDate}>Join us on August 27th, 11:00 AM</Text>
                    <Text style={eventSubtext} className="mobile-text">
                      and learn how to boost your business
                    </Text>
                  </td>
                </tr>
              </table>

              <table cellPadding="0" cellSpacing="0" border={0} style={buttonTable}>
                <tr>
                  <td align="center">
                    <Link href="#" style={signupButton} className="mobile-button">
                      SIGN UP NOW
                    </Link>
                  </td>
                </tr>
              </table>
            </Column>
          </Row>
        </Section>

        {/* Footer */}
        <Section style={footerSection} className="mobile-padding">
          <Row>
            <Column align="center">
              <Text style={footerText} className="mobile-text">
                You are receiving this email because you subscribed at My Company Inc.
              </Text>
              <Text style={unsubscribeText} className="mobile-text">
                <Link href="#" style={unsubscribeLink}>
                  Unsubscribe here
                </Link>
              </Text>
            </Column>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
)

export default Invitation

// Styles
const main = {
  backgroundColor: "#f0f0f0",
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
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
}

// Header Styles
const headerSection = {
  backgroundColor: "#ffffff",
  padding: "30px 40px 20px",
}

const logoTable = {
  width: "100%",
}

const logoText = {
  color: "#999999",
  fontSize: "14px",
  fontWeight: "400",
  margin: "0",
  textAlign: "center" as const,
  letterSpacing: "1px",
}

// Hero Styles
const heroSection = {
  backgroundColor: "#4a4a4a",
  padding: "40px 40px 50px",
}

const heroTable = {
  width: "100%",
}

const heroContentCell = {
  textAlign: "center" as const,
}

const heroHeading = {
  color: "#4ECDC4",
  fontSize: "28px",
  fontWeight: "400",
  lineHeight: "1.2",
  margin: "0 0 40px",
  textAlign: "center" as const,
}

const speakerImageTable = {
  margin: "0 auto 30px",
}

const speakerImage = {
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  display: "block",
  margin: "0 auto",
  objectFit: "cover" as const,
  border: "4px solid #ffffff",
}

const speakerIntro = {
  color: "#ffffff",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "0",
  textAlign: "center" as const,
}

const speakerName = {
  color: "#4ECDC4",
  fontWeight: "600",
}

// Content Styles
const contentSection = {
  backgroundColor: "#ffffff",
  padding: "50px 40px 60px",
}

const mainHeading = {
  color: "#333333",
  fontSize: "24px",
  fontWeight: "400",
  lineHeight: "1.3",
  textAlign: "center" as const,
  margin: "0 0 30px",
}

const descriptionText = {
  color: "#666666",
  fontSize: "16px",
  lineHeight: "1.5",
  textAlign: "center" as const,
  margin: "0 0 40px",
}

const eventDetailsTable = {
  margin: "0 auto 40px",
}

const eventDate = {
  color: "#4ECDC4",
  fontSize: "20px",
  fontWeight: "600",
  textAlign: "center" as const,
  margin: "0 0 8px",
}

const eventSubtext = {
  color: "#666666",
  fontSize: "14px",
  textAlign: "center" as const,
  margin: "0",
}

const buttonTable = {
  margin: "0 auto",
}

const signupButton = {
  backgroundColor: "#4ECDC4",
  color: "#ffffff",
  fontSize: "18px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "16px 40px",
  borderRadius: "25px",
  display: "inline-block",
  textAlign: "center" as const,
  letterSpacing: "0.5px",
  boxShadow: "0 4px 12px rgba(78, 205, 196, 0.3)",
}

// Footer Styles
const footerSection = {
  backgroundColor: "#ffffff",
  padding: "30px 40px 40px",
}

const footerText = {
  color: "#999999",
  fontSize: "12px",
  lineHeight: "1.4",
  textAlign: "center" as const,
  margin: "0 0 8px",
}

const unsubscribeText = {
  color: "#999999",
  fontSize: "12px",
  textAlign: "center" as const,
  margin: "0",
}

const unsubscribeLink = {
  color: "#4ECDC4",
  textDecoration: "underline",
}
