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

export const GenderEquality = () => (
  <Html>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>{`
        @media only screen and (max-width: 600px) {
          .mobile-padding { padding: 20px 16px !important; }
          .mobile-text { font-size: 14px !important; }
          .mobile-heading { font-size: 20px !important; }
          .mobile-large-heading { font-size: 24px !important; }
          .mobile-full-width { width: 100% !important; }
          .mobile-center { text-align: center !important; }
          .mobile-button { 
            width: 100% !important;
            padding: 12px 20px !important;
            font-size: 14px !important;
            max-width: 200px !important;
          }
          .mobile-hero-image { width: 100% !important; height: auto !important; }
          .mobile-profile-image { width: 60px !important; height: 60px !important; }
          .mobile-profile-card { margin-bottom: 15px !important; }
          .mobile-social-icon { width: 28px !important; height: 28px !important; line-height: 28px !important; }
          .mobile-collage { width: 100% !important; height: auto !important; }
        }
      `}</style>
    </Head>
    <Preview>Join the Movement for Gender Equality - Together We Can Make a Difference</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Header Section */}
        <Section style={headerSection} className="mobile-padding">
          <Row>
            <Column align="center">
              <Heading style={mainHeading} className="mobile-large-heading">
                Join the Movement for
              </Heading>
              <Heading style={subHeading} className="mobile-large-heading">
                Gender Equality!
              </Heading>

              <table cellPadding="0" cellSpacing="0" border={0} style={buttonTable}>
                <tr>
                  <td align="center">
                    <Link href="#" style={joinButton} className="mobile-button">
                      Join Us
                    </Link>
                  </td>
                </tr>
              </table>
            </Column>
          </Row>
        </Section>

        {/* Hero Image Section */}
        <Section style={heroImageSection}>
          <Row>
            <Column align="center">
              <Img
                src="https://cdn.templates.unlayer.com/assets/1677044766744-297412.png"
                alt="Diverse group of women representing gender equality movement"
                style={heroImage}
                className="mobile-hero-image"
              />
            </Column>
          </Row>
        </Section>

        {/* Movement Agenda Section */}
        <Section style={agendaSection} className="mobile-padding">
          <Row>
            <Column align="center">
              <Heading style={agendaHeading} className="mobile-heading">
                Movement Agenda!
              </Heading>
              <Text style={agendaText} className="mobile-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </Text>

              <table cellPadding="0" cellSpacing="0" border={0} style={buttonTable}>
                <tr>
                  <td align="center">
                    <Link href="#" style={joinButton} className="mobile-button">
                      Join Us
                    </Link>
                  </td>
                </tr>
              </table>
            </Column>
          </Row>
        </Section>

        {/* Profiles Section */}
        <Section style={profilesSection}>
          <Row>
            <Column>
              <table cellPadding="0" cellSpacing="0" border={0} width="100%" style={profilesTable}>
                <tr>
                  <td style={profilesCell}>
                    {/* Anna Profile */}
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      border={0}
                      style={profileCard}
                      className="mobile-profile-card"
                    >
                      <tr>
                        <td style={profileImageCell}>
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1677044996957-Layer%201.png"
                            alt="Anna"
                            style={profileImage}
                            className="mobile-profile-image"
                          />
                        </td>
                        <td style={profileContentCell}>
                          <Text style={profileName}>Anna</Text>
                          <Text style={profileDescription} className="mobile-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                          </Text>
                          <Link href="#" style={learnMoreButton}>
                            Learn More
                          </Link>
                        </td>
                      </tr>
                    </table>

                    {/* Rachel Profile */}
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      border={0}
                      style={profileCard}
                      className="mobile-profile-card"
                    >
                      <tr>
                        <td style={profileImageCell}>
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1677045192883-Layer%203.png"
                            alt="Rachel"
                            style={profileImage}
                            className="mobile-profile-image"
                          />
                        </td>
                        <td style={profileContentCell}>
                          <Text style={profileName}>Rachel</Text>
                          <Text style={profileDescription} className="mobile-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                          </Text>
                          <Link href="#" style={learnMoreButton}>
                            Learn More
                          </Link>
                        </td>
                      </tr>
                    </table>

                    {/* Riya Profile */}
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      border={0}
                      style={profileCard}
                      className="mobile-profile-card"
                    >
                      <tr>
                        <td style={profileImageCell}>
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1677045206651-Layer%202.png"
                            alt="Riya"
                            style={profileImage}
                            className="mobile-profile-image"
                          />
                        </td>
                        <td style={profileContentCell}>
                          <Text style={profileName}>Riya</Text>
                          <Text style={profileDescription} className="mobile-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                          </Text>
                          <Link href="#" style={learnMoreButton}>
                            Learn More
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

        {/* Online Section */}
        <Section style={onlineSection} className="mobile-padding">
          <Row>
            <Column align="center">
              <Heading style={onlineHeading} className="mobile-heading">
                You Can Join U Online
              </Heading>

              <Img
                src="https://cdn.templates.unlayer.com/assets/1677045391417-Group%204.png"
                alt="Online community collage"
                style={collageImage}
                className="mobile-collage"
              />

              <table cellPadding="0" cellSpacing="0" border={0} style={buttonTable}>
                <tr>
                  <td align="center">
                    <Link href="#" style={joinButton} className="mobile-button">
                      Join Us
                    </Link>
                  </td>
                </tr>
              </table>
            </Column>
          </Row>
        </Section>

        {/* Footer Section */}
        <Section style={footerSection}>
          <Row>
            <Column>
              <table cellPadding="0" cellSpacing="0" border={0} width="100%" style={footerTable}>
                <tr>
                  <td style={footerCell}>
                    {/* Social Icons */}
                    <table cellPadding="0" cellSpacing="0" border={0} style={socialIconsTable}>
                      <tr>
                        <td align="center">
                          <table cellPadding="0" cellSpacing="0" border={0} style={socialIconsInnerTable}>
                            <tr>
                              <td style={socialIconCell}>
                                <Link href="#" style={socialLink}>
                                  <div
                                    style={{ ...socialIcon, backgroundColor: "#3b5998" }}
                                    className="mobile-social-icon"
                                  >
                                    f
                                  </div>
                                </Link>
                              </td>
                              <td style={socialIconCell}>
                                <Link href="#" style={socialLink}>
                                  <div
                                    style={{ ...socialIcon, backgroundColor: "#1da1f2" }}
                                    className="mobile-social-icon"
                                  >
                                    t
                                  </div>
                                </Link>
                              </td>
                              <td style={socialIconCell}>
                                <Link href="#" style={socialLink}>
                                  <div
                                    style={{ ...socialIcon, backgroundColor: "#0077b5" }}
                                    className="mobile-social-icon"
                                  >
                                    in
                                  </div>
                                </Link>
                              </td>
                              <td style={socialIconCell}>
                                <Link href="#" style={socialLink}>
                                  <div
                                    style={{ ...socialIcon, backgroundColor: "#e4405f" }}
                                    className="mobile-social-icon"
                                  >
                                    ig
                                  </div>
                                </Link>
                              </td>
                              <td style={socialIconCell}>
                                <Link href="#" style={socialLink}>
                                  <div
                                    style={{ ...socialIcon, backgroundColor: "#ff0000" }}
                                    className="mobile-social-icon"
                                  >
                                    yt
                                  </div>
                                </Link>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <Text style={footerText} className="mobile-text">
                      email@website.com
                    </Text>
                    <Text style={footerSubtext} className="mobile-text">
                      +12 345 6789
                    </Text>

                    <Text style={footerDisclaimer} className="mobile-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
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

export default GenderEquality

// Styles
const main = {
  backgroundColor: "#f5f5f5",
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
  backgroundColor: "#ffffff",
  padding: "40px 40px 20px",
}

const mainHeading = {
  color: "#333333",
  fontSize: "28px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 5px",
  lineHeight: "1.2",
}

const subHeading = {
  color: "#333333",
  fontSize: "28px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 30px",
  lineHeight: "1.2",
}

const buttonTable = {
  margin: "0 auto 20px",
}

const joinButton = {
  backgroundColor: "#8b5cf6",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "12px 30px",
  borderRadius: "25px",
  display: "inline-block",
  textAlign: "center" as const,
  letterSpacing: "0.5px",
  textTransform: "uppercase" as const,
}

// Hero Image Styles
const heroImageSection = {
  backgroundColor: "#ffffff",
  padding: "0 40px 20px",
}

const heroImage = {
  width: "100%",
  height: "auto",
  display: "block",
  borderRadius: "8px",
}

// Agenda Styles
const agendaSection = {
  backgroundColor: "#ffffff",
  padding: "20px 40px 30px",
}

const agendaHeading = {
  color: "#333333",
  fontSize: "24px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 20px",
}

const agendaText = {
  color: "#666666",
  fontSize: "14px",
  textAlign: "center" as const,
  margin: "0 0 25px",
  lineHeight: "1.5",
}

// Profiles Styles
const profilesSection = {
  backgroundColor: "#f3e8ff",
  padding: "30px 0",
}

const profilesTable = {
  width: "100%",
}

const profilesCell = {
  padding: "0 40px",
}

const profileCard = {
  width: "100%",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  marginBottom: "20px",
  padding: "20px",
}

const profileImageCell = {
  width: "100px",
  verticalAlign: "top" as const,
  paddingRight: "20px",
}

const profileImage = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  display: "block",
  objectFit: "cover" as const,
}

const profileContentCell = {
  verticalAlign: "top" as const,
}

const profileName = {
  color: "#333333",
  fontSize: "18px",
  fontWeight: "600",
  margin: "0 0 10px",
}

const profileDescription = {
  color: "#666666",
  fontSize: "14px",
  margin: "0 0 15px",
  lineHeight: "1.4",
}

const learnMoreButton = {
  backgroundColor: "#8b5cf6",
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "8px 20px",
  borderRadius: "20px",
  display: "inline-block",
  textAlign: "center" as const,
  textTransform: "uppercase" as const,
}

// Online Section Styles
const onlineSection = {
  backgroundColor: "#ffffff",
  padding: "30px 40px",
}

const onlineHeading = {
  color: "#333333",
  fontSize: "24px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 25px",
}

const collageImage = {
  width: "100%",
  height: "auto",
  display: "block",
  borderRadius: "8px",
  marginBottom: "25px",
}

// Footer Styles
const footerSection = {
  backgroundColor: "#f3e8ff",
}

const footerTable = {
  width: "100%",
}

const footerCell = {
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

const footerText = {
  color: "#333333",
  fontSize: "14px",
  textAlign: "center" as const,
  margin: "0 0 5px",
  fontWeight: "600",
}

const footerSubtext = {
  color: "#333333",
  fontSize: "14px",
  textAlign: "center" as const,
  margin: "0 0 20px",
  fontWeight: "600",
}

const footerDisclaimer = {
  color: "#666666",
  fontSize: "11px",
  textAlign: "center" as const,
  margin: "0",
  lineHeight: "1.4",
}
