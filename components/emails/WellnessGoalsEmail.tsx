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

export const WellnessGoalsEmail = () => (
  <Html>
    <Head>
      <Font
        fontFamily="DM Sans"
        fallbackFontFamily={["Arial", "sans-serif"]}
        webFont={{
          url: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap",
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
          .mobile-hero-heading { font-size: 28px !important; }
          .mobile-full-width { width: 100% !important; }
          .mobile-center { text-align: center !important; }
          .mobile-stack { 
            display: block !important; 
            width: 100% !important; 
            margin: 0 0 20px 0 !important;
          }
          .mobile-hide { display: none !important; }
          .mobile-button {
            margin: 0 0 12px 0 !important;
            display: block !important;
            text-align: center !important;
          }
          .mobile-workout-card {
            width: 100% !important;
            margin: 0 0 30px 0 !important;
            display: block !important;
          }
          .mobile-social-icon {
            margin: 0 4px !important;
          }
          .mobile-gallery-image {
            width: 19% !important;
            margin: 0 0.5% !important;
          }
        }
      `}</style>
    </Head>
    <Preview>New Goals, New Movement - Transform Your Wellness Journey Today</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={headerSection}>
            <Row>
              <Column align="center">
                <Text style={logoText}>Your Logo</Text>
              </Column>
            </Row>
          </Section>

          {/* New Goals Section */}
          <Section style={goalsSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <div style={sectionHeaderContainer}>
                  <table style={{ width: "100%", borderCollapse: "collapse" as const }}>
                    <tbody>
                      <tr>
                        <td style={{ width: "80px", height: "2px", backgroundColor: "#000000" }}></td>
                        <td style={{ textAlign: "center" as const, padding: "0 20px" }}>
                          <Heading style={sectionHeading} className="mobile-heading">
                            NEW GOALS
                          </Heading>
                        </td>
                        <td style={{ width: "80px", height: "2px", backgroundColor: "#000000" }}></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <Text style={sectionDescription} className="mobile-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                </Text>

                <div style={mainImageContainer}>
                  <div style={imageFrame}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1613875990424-CV.png"
                      alt="Woman in meditation pose practicing yoga in bright studio"
                      style={mainImageStyle}
                      className="mobile-full-width"
                    />
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* New Movement Section */}
          <Section style={movementSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <div style={sectionHeaderContainer}>
                  <table style={{ width: "100%", borderCollapse: "collapse" as const }}>
                    <tbody>
                      <tr>
                        <td style={{ width: "80px", height: "2px", backgroundColor: "#000000" }}></td>
                        <td style={{ textAlign: "center" as const, padding: "0 20px" }}>
                          <Heading style={sectionHeading} className="mobile-heading">
                            NEW MOVEMENT
                          </Heading>
                        </td>
                        <td style={{ width: "80px", height: "2px", backgroundColor: "#000000" }}></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <Text style={sectionDescription} className="mobile-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                </Text>

                <div style={movementButtonContainer}>
                  <Link href="#" style={primaryButton} className="mobile-button">
                    READ MORE
                  </Link>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Workout Types Section */}
          <Section style={workoutSection} className="mobile-padding">
            <Row>
              <Column align="center">
                {/* Desktop Workout Layout */}
                <div className="mobile-hide">
                  <Row>
                    <Column style={workoutColumn}>
                      <div style={workoutCard}>
                        <div style={workoutImageContainer}>
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1613875830782-1.png"
                            alt="Strength training workout in gym"
                            style={workoutImage}
                          />
                        </div>
                        <Text style={workoutTitle}>STRENGTH TRAINING</Text>
                        <Text style={workoutDescription} className="mobile-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.
                        </Text>
                        <Link href="#" style={primaryButton}>
                          READ MORE
                        </Link>
                      </div>
                    </Column>
                    <Column style={workoutColumn}>
                      <div style={workoutCard}>
                        <div style={workoutImageContainer}>
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1613875841868-2.png"
                            alt="Cardio circuit training workout"
                            style={workoutImage}
                          />
                        </div>
                        <Text style={workoutTitle}>CARDIO CIRCUIT</Text>
                        <Text style={workoutDescription} className="mobile-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.
                        </Text>
                        <Link href="#" style={secondaryButton}>
                          READ MORE
                        </Link>
                      </div>
                    </Column>
                  </Row>
                </div>

                {/* Mobile Workout Layout */}
                <div style={mobileWorkoutContainer}>
                  <div style={mobileWorkoutCard} className="mobile-workout-card">
                    <div style={workoutImageContainer}>
                      <Img
                        src="https://cdn.templates.unlayer.com/assets/1613876845157-990503"
                        alt="Strength training workout in gym"
                        style={workoutImage}
                        className="mobile-full-width"
                      />
                    </div>
                    <Text style={workoutTitle}>STRENGTH TRAINING</Text>
                    <Text style={workoutDescription} className="mobile-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </Text>
                    <Link href="#" style={primaryButtonMobile} className="mobile-button">
                      READ MORE
                    </Link>
                  </div>

                  <div style={mobileWorkoutCard} className="mobile-workout-card">
                    <div style={workoutImageContainer}>
                      <Img
                        src="https://cdn.templates.unlayer.com/assets/1613877019409-309901"
                        alt="Cardio circuit training workout"
                        style={workoutImage}
                        className="mobile-full-width"
                      />
                    </div>
                    <Text style={workoutTitle}>CARDIO CIRCUIT</Text>
                    <Text style={workoutDescription} className="mobile-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </Text>
                    <Link href="#" style={secondaryButtonMobile} className="mobile-button">
                      READ MORE
                    </Link>
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Inspiration Section */}
          <Section style={inspirationSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Text style={inspirationText} className="mobile-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                </Text>

              
              </Column>
            </Row>
          </Section>

          {/* Footer Section */}
          <Section style={footerSection} className="mobile-padding">
            <Row>
              <Column align="center">
                {/* Social Media Icons */}
                <div style={socialContainer}>
                  <Link href="https://www.facebook.com" style={socialLink} className="mobile-social-icon">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                      alt="Facebook"
                      width="32"
                      height="32"
                      style={socialIcon}
                    />
                  </Link>
                  <Link href="https://www.twitter.com" style={socialLink} className="mobile-social-icon">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                      alt="Twitter"
                      width="32"
                      height="32"
                      style={socialIcon}
                    />
                  </Link>
                  <Link href="https://www.linkedin.com" style={socialLink} className="mobile-social-icon">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                      alt="LinkedIn"
                      width="32"
                      height="32"
                      style={socialIcon}
                    />
                  </Link>
                  <Link href="https://www.instagram.com" style={socialLink} className="mobile-social-icon">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                      alt="Instagram"
                      width="32"
                      height="32"
                      style={socialIcon}
                    />
                  </Link>
                </div>

                <Text style={footerText} className="mobile-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
)

export default WellnessGoalsEmail

// Styles
const main = {
  backgroundColor: "#f5f5f5",
  fontFamily: "DM Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  margin: "0",
  padding: "20px 0",
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
  backgroundColor: "#00ff00",
  padding: "30px 40px",
  textAlign: "center" as const,
}

const logoText = {
  color: "#ffffff",
  fontSize: "32px",
  fontWeight: "400",
  margin: "0",
  textAlign: "center" as const,
  fontStyle: "italic",
  fontFamily: "cursive",
}

// Goals Section Styles
const goalsSection = {
  backgroundColor: "#ffffff",
  padding: "50px 40px",
  position: "relative" as const,
}

const sectionHeaderContainer = {
  textAlign: "center" as const,
  margin: "0 0 30px",
}

const movementSection = {
  backgroundColor: "#ffffff",
  padding: "50px 40px",
}

const primaryButton = {
  backgroundColor: "#00ff00",
  color: "#000000",
  fontSize: "14px",
  fontWeight: "700",
  textDecoration: "none",
  padding: "12px 30px",
  borderRadius: "4px",
  display: "inline-block",
  textAlign: "center" as const,
  letterSpacing: "1px",
}

const primaryButtonMobile = {
  backgroundColor: "#00ff00",
  color: "#000000",
  fontSize: "14px",
  fontWeight: "700",
  textDecoration: "none",
  padding: "12px 30px",
  borderRadius: "4px",
  display: "block",
  textAlign: "center" as const,
  letterSpacing: "1px",
  width: "100%",
  boxSizing: "border-box" as const,
}

const secondaryButton = {
  backgroundColor: "#000000",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "700",
  textDecoration: "none",
  padding: "12px 30px",
  borderRadius: "4px",
  display: "inline-block",
  textAlign: "center" as const,
  letterSpacing: "1px",
}

const secondaryButtonMobile = {
  backgroundColor: "#000000",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "700",
  textDecoration: "none",
  padding: "12px 30px",
  borderRadius: "4px",
  display: "block",
  textAlign: "center" as const,
  letterSpacing: "1px",
  width: "100%",
  boxSizing: "border-box" as const,
}

const workoutSection = {
  backgroundColor: "#ffffff",
  padding: "30px 40px 50px",
}

const workoutColumn = {
  padding: "0 15px",
}

const workoutCard = {
  textAlign: "center" as const,
  margin: "0 0 30px",
}

const workoutImageContainer = {
  margin: "0 0 20px",
  textAlign: "center" as const,
}

const workoutImage = {
  width: "280px",
  height: "200px",
  objectFit: "cover" as const,
  borderRadius: "4px",
  display: "block",
  margin: "0 auto",
  filter: "grayscale(100%)",
}

const workoutTitle = {
  color: "#000000",
  fontSize: "18px",
  fontWeight: "700",
  margin: "0 0 15px",
  textAlign: "center" as const,
  letterSpacing: "1px",
}

const workoutDescription = {
  color: "#666666",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0 0 20px",
  textAlign: "center" as const,
}

const mobileWorkoutContainer = {
  display: "none",
}

const mobileWorkoutCard = {
  textAlign: "center" as const,
  margin: "0 0 30px",
}

const inspirationSection = {
  backgroundColor: "#ffffff",
  padding: "30px 40px 50px",
  position: "relative" as const,
}

const inspirationText = {
  color: "#666666",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 30px",
  textAlign: "center" as const,
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto",
}

const galleryContainer = {
  margin: "0 0 30px",
  textAlign: "center" as const,
}

const galleryStrip = {
  backgroundColor: "#00ff00",
  padding: "10px",
  borderRadius: "4px",
  width: "100%",
  textAlign: "center" as const,
}

const galleryImage = {
  width: "100%",
  maxWidth: "90px",
  height: "80px",
  objectFit: "cover" as const,
  borderRadius: "4px",
  display: "block",
  margin: "0 auto",
}

const footerSection = {
  backgroundColor: "#ffffff",
  padding: "40px",
  textAlign: "center" as const,
  borderTop: "1px solid #e0e0e0",
}

const socialContainer = {
  textAlign: "center" as const,
  margin: "0 0 25px",
}

const socialLink = {
  display: "inline-block",
  margin: "0 8px",
}

const socialIcon = {
  display: "block",
}

const footerText = {
  color: "#666666",
  fontSize: "14px",
  margin: "0",
  textAlign: "center" as const,
  lineHeight: "1.6",
  maxWidth: "400px",
  marginLeft: "auto",
  marginRight: "auto",
}

const sectionHeading = {
  color: "#000000",
  fontSize: "24px",
  fontWeight: "700",
  margin: "0",
  textAlign: "center" as const,
  letterSpacing: "2px",
  minWidth: "150px",
}

const sectionDescription = {
  color: "#666666",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 40px",
  textAlign: "center" as const,
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto",
}

const mainImageContainer = {
  textAlign: "center" as const,
  margin: "0 0 30px",
}

const imageFrame = {
  border: "4px solid #00ff00",
  borderRadius: "8px",
  display: "inline-block",
  padding: "4px",
  backgroundColor: "#ffffff",
}
const movementButtonContainer = {
  textAlign: "center" as const,
  margin: "30px 0 0",
}

const mainImageStyle = {
  width: "400px",
  height: "300px",
  objectFit: "cover" as const,
  borderRadius: "8px",
  display: "block",
  margin: "0 auto",
}
