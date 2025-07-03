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

export const OnlineWebinar = () => (
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
          .mobile-stat-box { width: 100% !important; margin-bottom: 10px !important; }
          .mobile-speaker-image { width: 80px !important; height: 80px !important; }
          .mobile-event-image { width: 100% !important; height: auto !important; }
          .mobile-service-column { width: 100% !important; margin-bottom: 15px !important; }
          .mobile-schedule-item { margin-bottom: 8px !important; }
        }
      `}</style>
    </Head>
    <Preview>Join Our Online Webinar - Business Development & Project Management</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Header Section */}
        <Section style={headerSection} className="mobile-padding">
          <Row>
            <Column align="center">
              <Text style={logoText}>LOGO</Text>
              <Heading style={mainHeading} className="mobile-large-heading">
                Online Webinar
              </Heading>
              <Text style={descriptionText} className="mobile-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus interdum elementum. Lorem ipsum
                has been the industry's standard dummy text ever since the 1500s.
              </Text>

              <table cellPadding="0" cellSpacing="0" border={0} style={buttonTable}>
                <tr>
                  <td align="center">
                    <Link href="#" style={getStartedButton} className="mobile-button">
                      Get Started! →
                    </Link>
                  </td>
                </tr>
              </table>
            </Column>
          </Row>
        </Section>

        {/* Hero Illustration Section */}
        <Section style={heroImageSection}>
          <Row>
            <Column align="center">
              <Img
                src="https://res.cloudinary.com/dirpuqqib/image/upload/v1750700789/1598808425834-b_d1npjd.png"
                alt="Online webinar illustration with laptop and digital icons"
                style={heroImage}
                className="mobile-hero-image"
              />
            </Column>
          </Row>
        </Section>

        {/* When Section */}
        <Section style={whenSection} className="mobile-padding">
          <Row>
            <Column align="center">
              <Heading style={whenHeading} className="mobile-heading">
                When
              </Heading>

              <table cellPadding="0" cellSpacing="0" border={0} style={timeSlotTable}>
                <tr>
              
                  <td style={timeSlotCell}>
                    <div style={timeSlot}>
                      <div style={clockIcon}>🕘</div>
                      <div>
                        <Text style={timeText}>18:00 – 19:00 (EEST)</Text>
                        <Text style={dateText}>DAY/ Month /Year</Text>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </Column>
          </Row>
        </Section>

        {/* Schedule Section */}
        <Section style={scheduleSection} className="mobile-padding">
          <Row>
            <Column>
              <div style={scheduleItem} className="mobile-schedule-item">
                <span style={scheduleTime}>5:00</span>
                <span style={scheduleText}>Welcome speech</span>
              </div>
              <div style={scheduleItem} className="mobile-schedule-item">
                <span style={scheduleTime}>5:40</span>
                <span style={scheduleText}>Presentation 1: "Webinar Programs"</span>
              </div>
              <div style={scheduleItem} className="mobile-schedule-item">
                <span style={scheduleTime}>6:00</span>
                <span style={scheduleText}>Presentation 1: "Webinar Programs"</span>
              </div>
            </Column>
          </Row>
        </Section>

        {/* Statistics Section */}
        <Section style={statsSection} className="mobile-padding">
          <Row>
            <Column>
              <table cellPadding="0" cellSpacing="0" border={0} width="100%" style={statsTable}>
                <tr>
                  <td style={statCell} className="mobile-stat-box">
                    <div style={statBox}>
                      <Text style={statNumber}>450</Text>
                      <Text style={statLabel}>PARTNER</Text>
                    </div>
                  </td>
                  <td style={statCell} className="mobile-stat-box">
                    <div style={statBox}>
                      <Text style={statNumber}>12</Text>
                      <Text style={statLabel}>SPEAKERS</Text>
                    </div>
                  </td>
                  <td style={statCell} className="mobile-stat-box">
                    <div style={statBox}>
                      <Text style={statNumber}>13</Text>
                      <Text style={statLabel}>CATEGORY</Text>
                    </div>
                  </td>
                </tr>
              </table>
            </Column>
          </Row>
        </Section>

        {/* Business Development Section */}
        <Section style={businessSection} className="mobile-padding">
          <Row>
            <Column>
              <table cellPadding="0" cellSpacing="0" border={0} width="100%">
                <tr>
                  <td style={businessContentCell}>
                    <Heading style={businessHeading}>Business development</Heading>
                    <Text style={businessText} className="mobile-text">
                      Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been
                      
                    </Text>
                    <Link href="#" style={learnMoreLink}>
                      Learn More {'>>'}
                    </Link>
                  </td>
                  <td style={businessImageCell}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1598812345455-73151589529148281.png"
                      alt="Business professional"
                      style={businessImage}
                    />
                  </td>
                </tr>
              </table>
            </Column>
          </Row>
        </Section>

        {/* Services Section */}
        <Section style={servicesSection}>
          <Row>
            <Column>
              <table cellPadding="0" cellSpacing="0" border={0} width="100%" style={servicesTable}>
                <tr>
                  <td style={serviceCell} className="mobile-service-column">
                    <div style={serviceBox}>
                      <Heading style={serviceHeading}>Business development</Heading>
                      <Text style={serviceText}>Lorem ipsum is simply dummy text</Text>
                      <Link href="#" style={serviceLink}>
                        learn More{'>'}{'>'}
                      </Link>
                    </div>
                  </td>
                  <td style={serviceCell} className="mobile-service-column">
                    <div style={serviceBox}>
                      <Heading style={serviceHeading}>Project Management</Heading>
                      <Text style={serviceText}>Lorem ipsum is simply dummy text</Text>
                      <Link href="#" style={serviceLink}>
                        learn More{'>'}{'>'}
                      </Link>
                    </div>
                  </td>
                  <td style={serviceCell} className="mobile-service-column">
                    <div style={serviceBox}>
                      <Heading style={serviceHeading}>Customer Support</Heading>
                      <Text style={serviceText}>Lorem ipsum is simply dummy text</Text>
                      <Link href="#" style={serviceLink}>
                        learn More{'>'}{'>'}
                      </Link>
                    </div>
                  </td>
                </tr>
              </table>
            </Column>
          </Row>
        </Section>

        {/* Speakers Section */}
        <Section style={speakersSection} className="mobile-padding">
          <Row>
            <Column align="center">
              <Heading style={speakersHeading} className="mobile-heading">
                Speakers
              </Heading>

              <table cellPadding="0" cellSpacing="0" border={0} style={speakersTable}>
                <tr>
                  <td style={speakerCell}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1598813230160-blob"
                      alt="Vincent Luggers"
                      style={speakerImage}
                      className="mobile-speaker-image"
                    />
                    <Text style={speakerName}>Vincent Luggers</Text>
                    <Text style={speakerTitle}>Project Management</Text>
                  </td>
                  <td style={speakerCell}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1598813204520-blob"
                      alt="Marco Vincent"
                      style={speakerImage}
                      className="mobile-speaker-image"
                    />
                    <Text style={speakerName}>Marco Vincent</Text>
                    <Text style={speakerTitle}>Customer Support</Text>
                  </td>
                  <td style={speakerCell}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1598813271927-blob"
                      alt="Alves Chioke"
                      style={speakerImage}
                      className="mobile-speaker-image"
                    />
                    <Text style={speakerName}>Alves Chioke</Text>
                    <Text style={speakerTitle}>Business development</Text>
                  </td>
                </tr>
              </table>
            </Column>
          </Row>
        </Section>

        {/* Past Events Section */}
        <Section style={pastEventsSection} className="mobile-padding">
          <Row>
            <Column align="center">
              <Heading style={pastEventsHeading} className="mobile-heading">
                Past Events
              </Heading>

              <table cellPadding="0" cellSpacing="0" border={0} width="100%" style={eventsTable}>
                <tr>
                  <td style={eventCell}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1598814110297-blob"
                      alt="Business development webinar"
                      style={eventImage}
                      className="mobile-event-image"
                    />
                    <Heading style={eventTitle}>Webinar "Business development"</Heading>
                    <Text style={eventDescription} className="mobile-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                    <Link href="#" style={eventButton}>
                      Learn More
                    </Link>
                  </td>
                  <td style={eventCell}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1598813968187-blob"
                      alt="Marketing & Communication webinar"
                      style={eventImage}
                      className="mobile-event-image"
                    />
                    <Heading style={eventTitle}>Webinar "Marketing & Communication"</Heading>
                    <Text style={eventDescription} className="mobile-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                    <Link href="#" style={eventButton}>
                      Learn More
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
                                  <div style={{ ...socialIcon, backgroundColor: "#e4405f" }}>ig</div>
                                </Link>
                              </td>
                              <td style={socialIconCell}>
                                <Link href="#" style={socialLink}>
                                  <div style={{ ...socialIcon, backgroundColor: "#ff0000" }}>yt</div>
                                </Link>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <Text style={footerText} className="mobile-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non odio tempor elit ullamcorper
                      mollis. Duis vestibulum vitae interdum.
                    </Text>

                    <Text style={footerLinks} className="mobile-text">
                      <Link href="#" style={footerLink}>
                        Unsubscribe
                      </Link>{" "}
                      |{" "}
                      <Link href="#" style={footerLink}>
                        Update Preferences
                      </Link>{" "}
                      |{" "}
                      <Link href="#" style={footerLink}>
                        Customer Support
                      </Link>
                    </Text>

                    <Text style={copyrightText} className="mobile-text">
                      © Company Name. All Rights Reserved
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

export default OnlineWebinar

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
}

// Header Styles
const headerSection = {
  backgroundColor: "#ffffff",
  padding: "40px 40px 20px",
}

const logoText = {
  color: "#ff6b6b",
  fontSize: "16px",
  fontWeight: "600",
  textAlign: "center" as const,
  margin: "0 0 20px",
  textTransform: "uppercase" as const,
}

const mainHeading = {
  color: "#2c5aa0",
  fontSize: "32px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 20px",
}

const descriptionText = {
  color: "#666666",
  fontSize: "14px",
  textAlign: "center" as const,
  margin: "0 0 25px",
  lineHeight: "1.5",
}

const buttonTable = {
  margin: "0 auto 20px",
}

const getStartedButton = {
  backgroundColor: "#ffffff",
  color: "#2c5aa0",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "10px 25px",
  border: "2px solid #2c5aa0",
  borderRadius: "4px",
  display: "inline-block",
  textAlign: "center" as const,
}

// Hero Image Styles
const heroImageSection = {
  backgroundColor: "#ffffff",
  padding: "0 40px 30px",
}

const heroImage = {
  width: "100%",
  height: "auto",
  display: "block",
}

// When Section Styles
const whenSection = {
  backgroundColor: "#ffffff",
  padding: "20px 40px",
}

const whenHeading = {
  color: "#2c5aa0",
  fontSize: "24px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 25px",
}

const timeSlotTable = {
  margin: "0 auto",
}

const timeSlotCell = {
  padding: "0 15px",
}

const timeSlot = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f8f9fa",
  padding: "15px",
  borderRadius: "8px",
  border: "1px solid #e9ecef",
}

const clockIcon = {
  marginRight: "10px",
  fontSize: "20px",
}

const timeText = {
  color: "#333333",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0",
}

const dateText = {
  color: "#666666",
  fontSize: "12px",
  margin: "0",
}

// Schedule Styles
const scheduleSection = {
  backgroundColor: "#ffffff",
  padding: "20px 40px",
}

const scheduleItem = {
  backgroundColor: "#e3f2fd",
  padding: "12px 20px",
  marginBottom: "10px",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
}

const scheduleTime = {
  backgroundColor: "#2c5aa0",
  color: "#ffffff",
  padding: "4px 12px",
  borderRadius: "4px",
  fontSize: "12px",
  fontWeight: "600",
  marginRight: "15px",
  minWidth: "40px",
  textAlign: "center" as const,
}

const scheduleText = {
  color: "#333333",
  fontSize: "14px",
  margin: "0",
}

// Statistics Styles
const statsSection = {
  backgroundColor: "#ffffff",
  padding: "30px 40px",
}

const statsTable = {
  width: "100%",
}

const statCell = {
  textAlign: "center" as const,
  padding: "0 10px",
}

const statBox = {
  backgroundColor: "#ff6b6b",
  color: "#ffffff",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center" as const,
}

const statNumber = {
  fontSize: "32px",
  fontWeight: "700",
  margin: "0 0 5px",
}

const statLabel = {
  fontSize: "12px",
  fontWeight: "600",
  margin: "0",
  textTransform: "uppercase" as const,
}

// Business Section Styles
const businessSection = {
  backgroundColor: "#ffffff",
  padding: "30px 40px",
}

const businessContentCell = {
  verticalAlign: "top" as const,
  paddingRight: "20px",
}

const businessImageCell = {
  verticalAlign: "top" as const,
  width: "180px",
}

const businessHeading = {
  color: "#2c5aa0",
  fontSize: "20px",
  fontWeight: "700",
  margin: "0 0 15px",
}

const businessText = {
  color: "#666666",
  fontSize: "14px",
  margin: "0 0 15px",
  lineHeight: "1.5",
}

const businessImage = {
  width: "150px",
  height: "150px",
  borderRadius: "8px",
  objectFit: "cover" as const,
}

const learnMoreLink = {
  color: "#ff6b6b",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
}

// Services Styles
const servicesSection = {
  backgroundColor: "#2c5aa0",
  padding: "30px 0",
}

const servicesTable = {
  width: "100%",
}

const serviceCell = {
  width: "33.33%",
  verticalAlign: "top" as const,
  padding: "0 20px",
}

const serviceBox = {
  textAlign: "center" as const,
}

const serviceHeading = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "700",
  margin: "0 0 10px",
}

const serviceText = {
  color: "#ffffff",
  fontSize: "14px",
  margin: "0 0 15px",
  opacity: 0.9,
}

const serviceLink = {
  color: "#ff6b6b",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
}

// Speakers Styles
const speakersSection = {
  backgroundColor: "#ffffff",
  padding: "40px 40px",
}

const speakersHeading = {
  color: "#2c5aa0",
  fontSize: "24px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 30px",
}

const speakersTable = {
  margin: "0 auto",
}

const speakerCell = {
  textAlign: "center" as const,
  padding: "0 20px",
  verticalAlign: "top" as const,
}

const speakerImage = {
  width: "100px",
  height: "100px",
  borderRadius: "8px",
  display: "block",
  margin: "0 auto 10px",
  objectFit: "cover" as const,
}

const speakerName = {
  color: "#333333",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0 0 5px",
}

const speakerTitle = {
  color: "#666666",
  fontSize: "12px",
  margin: "0",
}

// Past Events Styles
const pastEventsSection = {
  backgroundColor: "#ffffff",
  padding: "40px 40px",
}

const pastEventsHeading = {
  color: "#2c5aa0",
  fontSize: "24px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 30px",
}

const eventsTable = {
  width: "100%",
}

const eventCell = {
  width: "50%",
  verticalAlign: "top" as const,
  padding: "0 15px",
}

const eventImage = {
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  display: "block",
  marginBottom: "15px",
}

const eventTitle = {
  color: "#2c5aa0",
  fontSize: "16px",
  fontWeight: "700",
  margin: "0 0 10px",
}

const eventDescription = {
  color: "#666666",
  fontSize: "14px",
  margin: "0 0 15px",
  lineHeight: "1.4",
}

const eventButton = {
  backgroundColor: "#2c5aa0",
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "8px 20px",
  borderRadius: "4px",
  display: "inline-block",
  textAlign: "center" as const,
}

// Footer Styles
const footerSection = {
  backgroundColor: "#34495e",
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
  color: "#ffffff",
  fontSize: "12px",
  textAlign: "center" as const,
  margin: "0 0 15px",
  lineHeight: "1.4",
  opacity: 0.9,
}

const footerLinks = {
  color: "#ffffff",
  fontSize: "12px",
  textAlign: "center" as const,
  margin: "0 0 10px",
}

const footerLink = {
  color: "#ffffff",
  textDecoration: "underline",
}

const copyrightText = {
  color: "#ffffff",
  fontSize: "11px",
  textAlign: "center" as const,
  margin: "0",
  opacity: 0.7,
}
