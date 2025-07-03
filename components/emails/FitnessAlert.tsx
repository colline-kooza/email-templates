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

export const FitnessAlert = () => (
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
          .mobile-nav-item {
            display: inline-block !important;
            margin: 0 8px !important;
            font-size: 12px !important;
          }
          .mobile-buttons {
            margin: 0 0 12px 0 !important;
            display: block !important;
            text-align: center !important;
          }
          .mobile-hero-content {
            text-align: start !important;
            padding: 0 !important;
          }
          .mobile-hero-image {
            margin: 20px 0 0 0 !important;
            text-align: center !important;
          }
          .mobile-social-icon {
            margin: 0 4px !important;
          }
        }
      `}</style>
    </Head>
    <Preview>Fitness Alert: Time to Exercise! - Get Moving with Our Latest Workout Tips</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          {/* Header Navigation */}
          <Section style={headerSection}>
            <Row>
              <Column style={logoColumn}>
                <Text style={logoText}>[Your Logo]</Text>
              </Column>
              <Column style={navColumn}>
                <div style={navContainer}>
                  <Link href="#" style={navLink} className="mobile-nav-item">
                    Home
                  </Link>
               
                  <Link href="#" style={navLink} className="mobile-nav-item">
                    Contact Us
                  </Link>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Hero Section */}
          <Section style={heroSection}>
            <Row>
              <Column style={heroContentColumn} className="mobile-hero-content">
                <div>
                  <Heading style={heroHeading} className="mobile-hero-heading">
                    Fitness Alert: Time to Exercise!
                  </Heading>
                  <Text style={heroDescription} className="mobile-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's
                  </Text>
                  <div style={heroButtonContainer}>
                    <Link href="#" style={heroButton} className="mobile-button">
                      Read More
                    </Link>
                  </div>
                </div>
              </Column>
              <Column style={heroImageColumn} className="mobile-hero-image">
                <div style={heroImageContainer}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1703018892175-Group%202.png"
                    alt="Fitness model showing muscular physique during workout"
                    style={heroImage}
                    className="mobile-full-width"
                  />
                </div>
              </Column>
            </Row>
          </Section>

          {/* Notification Section */}
          <Section style={notificationSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <div style={notificationContent}>
                  <div style={notificationIconContainer}>
                    <div style={notificationIconCircle}>
                      <Text style={notificationIcon}>🔔</Text>
                    </div>
                  </div>
                  <Text style={notificationText} className="mobile-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled
                  </Text>
                  <div style={notificationButtonContainer}>
                    <Link href="#" style={notificationButton} className="mobile-buttons">
                      Join Now
                    </Link>
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Workout Tips Section */}
          <Section style={tipsSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Heading style={tipsHeading} className="mobile-heading">
                  Your Fitness Journey Starts Here
                </Heading>
                <Text style={tipsSubtext} className="mobile-text">
                  Transform your body and mind with our expert-designed workout programs
                </Text>

                <div style={tipsGrid}>
                  <div style={tipCard}>
                    <div style={tipIconContainer}>
                      <Img src="https://img.freepik.com/free-vector/illustration-exercise-concept_53876-9229.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_items_boosted&w=740" alt="Strength training icon" style={tipIcon} />
                    </div>
                    <Text style={tipTitle}>Strength Training</Text>
                    <Text style={tipDescription} className="mobile-text">
                      Build muscle and increase your metabolism with our progressive strength training programs
                    </Text>
                  </div>

                  <div style={tipCard}>
                    <div style={tipIconContainer}>
                      <Img src="https://img.freepik.com/free-vector/illustration-exercise-concept_53876-9229.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_items_boosted&w=740" alt="Cardio workout icon" style={tipIcon} />
                    </div>
                    <Text style={tipTitle}>Cardio Workouts</Text>
                    <Text style={tipDescription} className="mobile-text">
                      Improve your cardiovascular health with high-intensity interval training and endurance exercises
                    </Text>
                  </div>

                  <div style={tipCard}>
                    <div style={tipIconContainer}>
                      <Img src="https://img.freepik.com/free-vector/illustration-exercise-concept_53876-9229.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_items_boosted&w=740" alt="Nutrition guidance icon" style={tipIcon} />
                    </div>
                    <Text style={tipTitle}>Nutrition Guidance</Text>
                    <Text style={tipDescription} className="mobile-text">
                      Fuel your workouts with personalized meal plans and nutritional advice from certified dietitians
                    </Text>
                  </div>

                  <div style={tipCard}>
                    <div style={tipIconContainer}>
                      <Img src="https://img.freepik.com/free-vector/illustration-exercise-concept_53876-9229.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_items_boosted&w=740" alt="Recovery tips icon" style={tipIcon} />
                    </div>
                    <Text style={tipTitle}>Recovery & Rest</Text>
                    <Text style={tipDescription} className="mobile-text">
                      Learn the importance of proper recovery, sleep, and rest days for optimal fitness results
                    </Text>
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Success Stories Section */}
          <Section style={successSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Heading style={successHeading} className="mobile-heading">
                  Success Stories
                </Heading>
                <Text style={successSubtext} className="mobile-text">
                  Real people, real results
                </Text>

                <div style={successStoriesContainer}>
                  <div style={successStory}>
                    <div style={successImageContainer}>
                      <Img
                        src="https://img.freepik.com/free-photo/front-view-woman-training-home_23-2150404924.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_items_boosted&w=740"
                        alt="Success story - Sarah M."
                        style={successImage}
                      />
                    </div>
                    <div style={successContent}>
                      <Text style={successQuote} className="mobile-text">
                        "I lost 30 pounds and gained so much confidence. The workout plans are amazing!"
                      </Text>
                      <Text style={successAuthor}>- Sarah M.</Text>
                    </div>
                  </div>

                  <div style={successStory}>
                    <div style={successImageContainer}>
                      <Img
                        src="https://img.freepik.com/free-photo/athletic-man-posing-gym-outfit_23-2148398782.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_items_boosted&w=740"
                        alt="Success story - Mike T."
                        style={successImage}
                      />
                    </div>
                    <div style={successContent}>
                      <Text style={successQuote} className="mobile-text">
                        "Best fitness program I've ever tried. The results speak for themselves!"
                      </Text>
                      <Text style={successAuthor}>- Mike T.</Text>
                    </div>
                  </div>
                </div>

                <div style={successButtonContainer}>
                  <Link href="#" style={successButton} className="mobile-buttons">
                    Start Your Transformation
                  </Link>
                </div>
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
                  <Link href="#" style={socialLink} className="mobile-social-icon">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/rss.png"
                      alt="RSS"
                      width="32"
                      height="32"
                      style={socialIcon}
                    />
                  </Link>
                </div>

                <Text style={footerLinks} className="mobile-text">
                  <Link href="#" style={footerLink}>
                    UNSUBSCRIBE
                  </Link>{" "}
                  |{" "}
                  <Link href="#" style={footerLink}>
                    PRIVACY POLICY
                  </Link>{" "}
                  |{" "}
                  <Link href="#" style={footerLink}>
                    WEB
                  </Link>
                </Text>

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

export default FitnessAlert

// Styles
const main = {
  backgroundColor: "#f0f0f0",
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
  backgroundColor: "#1a4d4d",
  padding: "20px 40px",
}

const logoColumn = {
  width: "200px",
  verticalAlign: "middle" as const,
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
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "400",
  textDecoration: "none",
  margin: "0 15px",
  display: "inline-block",
}

// Hero Section Styles
const heroSection = {
  backgroundColor: "#c53030",
  padding: "50px 10px",
}

const heroContentColumn = {
  width: "60%",
  verticalAlign: "middle" as const,
  padding: "0 20px 0 0",
}

const heroImageColumn = {
  width: "40%",
  verticalAlign: "middle" as const,
  textAlign: "center" as const,
}



const heroHeading = {
  color: "#ffd700",
  fontSize: "32px",
  fontWeight: "700",
  lineHeight: "1.2",
  margin: "0 0 20px",
}

const heroDescription = {
  color: "#ffffff",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 30px",
}

const heroButtonContainer = {
  margin: "0",
}

const heroButton = {
  backgroundColor: "#ffd700",
  color: "#1a1a1a",
  fontSize: "13px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "13px 17px",
  borderRadius: "6px",
  display: "inline-block",
  textAlign: "center" as const,
}

const heroImageContainer = {
  textAlign: "center" as const,
}

const heroImage = {
  width: "220px",
  height: "280px",
  objectFit: "cover" as const,
  borderRadius: "8px",
  display: "block",
  margin: "0 auto",
}

// Notification Section Styles
const notificationSection = {
  backgroundColor: "#1a4d4d",
  padding: "50px 40px",
  textAlign: "center" as const,
}

const notificationContent = {
  maxWidth: "500px",
  margin: "0 auto",
}

const notificationIconContainer = {
  margin: "0 0 30px",
  textAlign: "center" as const,
}

const notificationIconCircle = {
  width: "80px",
  height: "80px",
  backgroundColor: "#ffd700",
  borderRadius: "50%",
  display: "table",
  margin: "0 auto",
}

const notificationIcon = {
  fontSize: "32px",
  display: "table-cell",
  textAlign: "center" as const,
  verticalAlign: "middle" as const,
  margin: "0",
}

const notificationText = {
  color: "#ffffff",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 30px",
  textAlign: "center" as const,
}

const notificationButtonContainer = {
  textAlign: "center" as const,
}

const notificationButton = {
  backgroundColor: "#ffd700",
  color: "#1a1a1a",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "14px 28px",
  borderRadius: "6px",
  display: "inline-block",
  textAlign: "center" as const,
}

// Tips Section Styles
const tipsSection = {
  backgroundColor: "#ffffff",
  padding: "60px 40px",
}

const tipsHeading = {
  color: "#1a1a1a",
  fontSize: "32px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 16px",
}

const tipsSubtext = {
  color: "#666666",
  fontSize: "18px",
  textAlign: "center" as const,
  margin: "0 0 50px",
  lineHeight: "1.6",
}

const tipsGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "30px",
  maxWidth: "500px",
  margin: "0 auto",
}

const tipCard = {
  textAlign: "center" as const,
  padding: "20px",
  backgroundColor: "#f8f9fa",
  borderRadius: "8px",
  border: "1px solid #e9ecef",
}

const tipIconContainer = {
  margin: "0 0 20px",
  textAlign: "center" as const,
}

const tipIcon = {
  width: "50px",
  height: "50px",
  display: "block",
  margin: "0 auto",
  objectFit: "cover" as const,
  borderRadius: "50%",
}

const tipTitle = {
  color: "#1a1a1a",
  fontSize: "18px",
  fontWeight: "600",
  margin: "0 0 12px",
  textAlign: "center" as const,
}

const tipDescription = {
  color: "#666666",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0",
  textAlign: "center" as const,
}

// Success Section Styles
const successSection = {
  backgroundColor: "#f8f9fa",
  padding: "60px 40px",
}

const successHeading = {
  color: "#1a1a1a",
  fontSize: "32px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 16px",
}

const successSubtext = {
  color: "#666666",
  fontSize: "18px",
  textAlign: "center" as const,
  margin: "0 0 40px",
}

const successStoriesContainer = {
  maxWidth: "500px",
  margin: "0 auto 40px",
}

const successStory = {
  display: "flex",
  alignItems: "center",
  margin: "0 0 30px",
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  border: "1px solid #e9ecef",
}

const successImageContainer = {
  marginRight: "20px",
}

const successImage = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  objectFit: "cover" as const,
  display: "block",
}

const successContent = {
  flex: "1",
}

const successQuote = {
  color: "#1a1a1a",
  fontSize: "16px",
  fontStyle: "italic",
  margin: "0 0 8px",
  lineHeight: "1.5",
}

const successAuthor = {
  color: "#c53030",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0",
}

const successButtonContainer = {
  textAlign: "center" as const,
}

const successButton = {
  backgroundColor: "#c53030",
  color: "#ffffff",
  fontSize: "18px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "16px 32px",
  borderRadius: "8px",
  display: "inline-block",
  textAlign: "center" as const,
  boxShadow: "0 4px 12px rgba(197, 48, 48, 0.3)",
}

// Footer Styles
const footerSection = {
  backgroundColor: "#c53030",
  padding: "40px",
  textAlign: "center" as const,
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

const footerLinks = {
  color: "#ffffff",
  fontSize: "14px",
  margin: "0 0 20px",
  textAlign: "center" as const,
  fontWeight: "600",
  letterSpacing: "1px",
}

const footerLink = {
  color: "#ffffff",
  textDecoration: "none",
}

const footerText = {
  color: "#ffffff",
  fontSize: "14px",
  margin: "0",
  textAlign: "center" as const,
  lineHeight: "1.6",
  opacity: "0.9",
}
