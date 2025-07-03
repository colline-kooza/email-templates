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

export const Sustainability = () => (
  <Html>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>{`
        @media only screen and (max-width: 600px) {
          .mobile-padding { padding: 20px 16px !important; }
          .mobile-text { font-size: 14px !important; }
          .mobile-heading { font-size: 24px !important; }
          .mobile-hero-heading { font-size: 28px !important; }
          .mobile-full-width { width: 100% !important; }
          .mobile-center { text-align: center !important; }
          .mobile-speaker { 
            display: block !important; 
            width: 100% !important; 
            margin: 0 0 30px 0 !important;
            padding: 0 !important;
          }
          .mobile-hide { display: none !important; }
          .hero-bg { 
            background-size: cover !important; 
            padding: 40px 10px !important;
          }
          .mobile-stack {
            display: block !important;
            width: 100% !important;
          }
          .mobile-speaker-table {
            width: 100% !important;
            display: block !important;
          }
        }
      `}</style>
    </Head>
    <Preview>Join us for 5 Sustainable Goals to Transform the World - April 5th Webinar</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Header */}
        <Section style={headerSection}>
          <Row>
            <Column align="center">
              <table cellPadding="0" cellSpacing="0" border={0} style={logoTable}>
                <tr>
                  <td align="center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={logoIcon}>
                      <path
                        d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97L2.46 14.6c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.31.61.22l2.49-1c.52.39 1.06.73 1.69.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.25 1.17-.59 1.69-.98l2.49 1c.22.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"
                        fill="#666"
                      />
                    </svg>
                    <Text style={logoText}>LOGO</Text>
                  </td>
                </tr>
              </table>
            </Column>
          </Row>
        </Section>

        {/* Hero Section with Background Image */}
        <Section style={heroSection}>
          <Row>
            <Column>
              <table cellPadding="0" cellSpacing="0" border={0} width="100%" style={heroTable}>
                <tr>
                  <td style={heroBgCell} className="hero-bg">
                    <table cellPadding="0" cellSpacing="0" border={0} width="100%">
                      <tr>
                        <td style={heroContentCell}>
                          <Heading style={heroHeading} className="mobile-hero-heading">
                            5 Sustainable goals
                            <br />
                            to transform the world
                          </Heading>

                          <Text style={eventDate}>5 April, 20XX | 4pm EST</Text>
                          <Text style={inviteText}>You're invited to join!</Text>

                          <table cellPadding="0" cellSpacing="0" border={0} style={buttonTable}>
                            <tr>
                              <td align="center">
                                <Link href="#" style={registerButton}>
                                  REGISTER NOW
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
            </Column>
          </Row>
        </Section>

        {/* Content Section */}
        <Section style={contentSection} className="mobile-padding">
          <Row>
            <Column align="center">
              <Heading style={sectionHeading} className="mobile-heading">
                LET'S TURN AROUND!
              </Heading>
              <Text style={contentText} className="mobile-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </Text>
            </Column>
          </Row>
        </Section>

        {/* Speakers Section */}
        <Section style={speakersSection} className="mobile-padding">
          <Row>
            <Column align="center">
              <Heading style={sectionHeading} className="mobile-heading">
                Meet Our Speakers
              </Heading>
            </Column>
          </Row>

          <Row style={speakersRow}>
            <Column style={speakerColumn} className="mobile-speaker">
              <div style={speakerCard}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1617635394631-3.png"
                  alt="Ella Avery"
                  style={speakerImage}
                />
                <Text style={speakerName}>Ella Avery</Text>
                <Text style={speakerBio} className="mobile-text">
                  Lorem ipsum
                </Text>
              </div>
            </Column>
            <Column style={speakerColumn} className="mobile-speaker">
              <div style={speakerCard}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1617635382396-5.png"
                  alt="William James"
                  style={speakerImage}
                />
                <Text style={speakerName}>William James</Text>
                <Text style={speakerBio} className="mobile-text">
                  Lorem ipsum
                </Text>
              </div>
            </Column>
            <Column style={speakerColumn} className="mobile-speaker">
              <div style={speakerCard}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1617635317072-2.png"
                  alt="William Evelyn"
                  style={speakerImage}
                />
                <Text style={speakerName}>William Evelyn</Text>
                <Text style={speakerBio} className="mobile-text">
                  Lorem ipsum
                </Text>
              </div>
            </Column>
          </Row>
        </Section>

        {/* Benefits Section */}
        <Section style={benefitsSection} className="mobile-padding">
          <Row>
            <Column align="center">
              <Heading style={sectionHeading} className="mobile-heading">
                What You Will Get
              </Heading>
              <Text style={benefitsText} className="mobile-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </Text>

              <table cellPadding="0" cellSpacing="0" border={0} style={benefitsImageTable}>
                <tr>
                  <td align="center">
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1617637754880-gg.png"
                      alt="Laptop workspace with plants"
                      style={benefitsImage}
                    />
                  </td>
                </tr>
              </table>
            </Column>
          </Row>
        </Section>

        {/* CTA Section */}
        <Section style={ctaSection} className="mobile-padding">
          <Row>
            <Column align="center">
              <Text style={hashtagText}>#LetsTakeAction</Text>
              <Text style={ctaDate}>5 April, 20XX | 4pm EST</Text>

              <table cellPadding="0" cellSpacing="0" border={0} style={buttonTable}>
                <tr>
                  <td align="center">
                    <Link href="#" style={ctaButton}>
                      SAVE MY SPOT
                    </Link>
                  </td>
                </tr>
              </table>
            </Column>
          </Row>
        </Section>

        {/* Footer */}
        <Section style={footerSection}>
          <Row>
            <Column>
              {/* Wave SVG */}
              <table cellPadding="0" cellSpacing="0" border={0} width="100%">
                <tr>
                  <td style={waveCell}>
                    <svg width="100%" height="60" viewBox="0 0 600 60" fill="none" style={waveStyle}>
                      <path d="M0 20C150 5 300 35 450 20C525 12.5 562.5 25 600 20V60H0V20Z" fill="#FF8C42" />
                    </svg>
                  </td>
                </tr>
              </table>

              <table cellPadding="0" cellSpacing="0" border={0} width="100%" style={footerContentTable}>
                <tr>
                  <td style={footerContentCell}>
                    {/* Social Icons */}
                    <table cellPadding="0" cellSpacing="0" border={0} style={socialTable}>
                      <tr>
                        <td align="center">
                          <table cellPadding="0" cellSpacing="0" border={0} style={socialIconsTable}>
                            <tr>
                              <td style={socialIconCell}>
                                <Link href="#" style={socialLink}>
                                  <div style={{ ...socialIcon, backgroundColor: "#0077B5" }}>in</div>
                                </Link>
                              </td>
                              <td style={socialIconCell}>
                                <Link href="#" style={socialLink}>
                                  <div style={{ ...socialIcon, backgroundColor: "#E4405F" }}>ig</div>
                                </Link>
                              </td>
                              <td style={socialIconCell}>
                                <Link href="#" style={socialLink}>
                                  <div style={{ ...socialIcon, backgroundColor: "#1DA1F2" }}>tw</div>
                                </Link>
                              </td>
                              <td style={socialIconCell}>
                                <Link href="#" style={socialLink}>
                                  <div style={{ ...socialIcon, backgroundColor: "#BD081C" }}>p</div>
                                </Link>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <Text style={footerText} className="mobile-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <br />
                      Pellentesque et Unsubscribe |<br />
                      Privacy Policy | Terms and Conditions Policy
                    </Text>
                    <Text style={addressText} className="mobile-text">
                      111 Some St, 12th Floor | San Francisco, CA 12345 | USA
                    </Text>
                    <Text style={copyrightText} className="mobile-text">
                      © All rights reserved 20XX - 20XX Webinar
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

export default Sustainability

// Styles
const main = {
  backgroundColor: "#ffffff",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
  margin: "0",
  padding: "0",
}

const container = {
  margin: "0 auto",
  width: "100%",
  maxWidth: "600px",
  backgroundColor: "#ffffff",
}

// Header Styles
const headerSection = {
  backgroundColor: "#FAF7F2",
  padding: "30px 40px 20px",
}

const logoTable = {
  width: "100%",
}

const logoIcon = {
  display: "inline-block",
  verticalAlign: "middle",
  marginRight: "8px",
}

const logoText = {
  color: "#666666",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0",
  letterSpacing: "1px",
  display: "inline-block",
  verticalAlign: "middle",
}

// Hero Styles
const heroSection = {
  backgroundColor: "#FAF7F2",
  padding: "0 40px 40px",
}

const heroTable = {
  width: "100%",
  borderRadius: "12px",
  overflow: "hidden",
}

const heroBgCell = {
  backgroundImage: "url('https://res.cloudinary.com/dirpuqqib/image/upload/v1750686571/1617634229848-bg_usjrlm.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundColor: "#FAF7F2",
  padding: "60px 10px",
  textAlign: "center" as const,
  minHeight: "300px",
}

const heroContentCell = {
  textAlign: "center" as const,
}

const heroHeading = {
  color: "#333333",
  fontSize: "32px",
  fontWeight: "700",
  lineHeight: "1.2",
  margin: "0 0 30px",
  textAlign: "center" as const,
}

const eventDate = {
  color: "#666666",
  fontSize: "14px",
  margin: "0 0 8px",
  textAlign: "center" as const,
}

const inviteText = {
  color: "#333333",
  fontSize: "16px",
  margin: "0 0 30px",
  textAlign: "center" as const,
}

const buttonTable = {
  margin: "20px auto",
}

const registerButton = {
  backgroundColor: "#6B9B7F",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "12px 30px",
  borderRadius: "6px",
  display: "inline-block",
  letterSpacing: "0.5px",
}

// Content Styles
const contentSection = {
  backgroundColor: "#ffffff",
  padding: "50px 40px",
}

const sectionHeading = {
  color: "#333333",
  fontSize: "28px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 25px",
  lineHeight: "1.3",
}

const contentText = {
  color: "#666666",
  fontSize: "16px",
  lineHeight: "1.6",
  textAlign: "center" as const,
  margin: "0",
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto",
}

// Speakers Styles
const speakersSection = {
  backgroundColor: "#ffffff",
  padding: "0 40px 50px",
}

const speakersRow = {
  marginTop: "40px",
}

const speakerColumn = {
  padding: "0 15px",
  textAlign: "center" as const,
  width: "33.33%",
}

const speakerCard = {
  textAlign: "center" as const,
}

const speakerImage = {
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  display: "block",
  margin: "0 auto 15px",
  objectFit: "cover" as const,
}

const speakerName = {
  color: "#333333",
  fontSize: "18px",
  fontWeight: "600",
  margin: "0 0 5px",
  textAlign: "center" as const,
}

const speakerBio = {
  color: "#666666",
  fontSize: "14px",
  margin: "0",
  textAlign: "center" as const,
}

// Benefits Styles
const benefitsSection = {
  backgroundColor: "#FAF7F2",
  padding: "20px 40px",
}

const benefitsText = {
  color: "#666666",
  fontSize: "16px",
  lineHeight: "1.6",
  textAlign: "center" as const,
  margin: "0 0 40px",
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto",
}

const benefitsImageTable = {
  margin: "30px auto",
}

const benefitsImage = {
  width: "300px",
  height: "200px",
  borderRadius: "50%",
  display: "block",
  margin: "0 auto",
  objectFit: "cover" as const,
}

// CTA Styles
const ctaSection = {
  backgroundColor: "#FAF7F2",
//   padding: "40px 40px 60px",
}

const hashtagText = {
  color: "#333333",
  fontSize: "24px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 10px",
}

const ctaDate = {
  color: "#E8A87C",
  fontSize: "16px",
  fontWeight: "600",
  textAlign: "center" as const,
  margin: "0 0 30px",
}

const ctaButton = {
  backgroundColor: "#6B9B7F",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "12px 30px",
  borderRadius: "6px",
  display: "inline-block",
  letterSpacing: "0.5px",
}

// Footer Styles
const footerSection = {
  backgroundColor: "#333333",
}

const waveCell = {
  lineHeight: "0",
  fontSize: "0",
}

const waveStyle = {
  display: "block",
  border: "0",
}

const footerContentTable = {
  width: "100%",
}

const footerContentCell = {
  padding: "30px 40px",
  textAlign: "center" as const,
}

const socialTable = {
  width: "100%",
  marginBottom: "30px",
}

const socialIconsTable = {
  margin: "0 auto",
}

const socialIconCell = {
  padding: "0 7px",
}

const socialLink = {
  textDecoration: "none",
}

const socialIcon = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  display: "inline-block",
  textAlign: "center" as const,
  lineHeight: "40px",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
}

const footerText = {
  color: "#cccccc",
  fontSize: "14px",
  lineHeight: "1.5",
  textAlign: "center" as const,
  margin: "0 0 15px",
}

const addressText = {
  color: "#cccccc",
  fontSize: "12px",
  textAlign: "center" as const,
  margin: "0 0 10px",
}

const copyrightText = {
  color: "#999999",
  fontSize: "12px",
  textAlign: "center" as const,
  margin: "0",
}
