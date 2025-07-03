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

export const HealthWellnessEmail = () => (
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
          .mobile-hero-heading { font-size: 28px !important; }
          .mobile-full-width { width: 100% !important; }
          .mobile-center { text-align: center !important; }
          .mobile-stack { 
            display: block !important; 
            width: 100% !important; 
            margin: 0 0 20px 0 !important;
          }
          . { display: none !important; }
          .mobile-tip-card {
            width: 100% !important;
            margin: 0 0 20px 0 !important;
            display: block !important;
          }
          .mobile-social {
            padding: 0 4px !important;
          }
        }
      `}</style>
    </Head>
    <Preview>Embrace Your Health - Tips for Getting Back in Shape</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          {/* Hero Section */}
          <Section style={heroSection}>
            <Row>
              <Column align="center">
                <div style={heroContent}>
                  <div style={brainImageContainer}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1657778759870-img.png"
                      alt="Brain character exercising"
                      style={brainImage}
                      className="mobile-full-width"
                    />
                  </div>
                  <Text style={embraceText}>Embrace</Text>
                  <Heading style={heroHeading} className="mobile-hero-heading">
                    Your Health
                  </Heading>
                  <Text style={heroDescription} className="mobile-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod
                  </Text>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Tips Section */}
          <Section style={tipsSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Text style={tipsIntro} className="mobile-text">
                  Here are some tips for
                </Text>
                <Heading style={tipsHeading} className="mobile-heading">
                  Getting you back in shape.
                </Heading>

                {/* Desktop Tips Grid */}
                <div className="">
                  <Row style={tipsRow}>
                    <Column style={tipColumn}>
                      <div style={tipCard}>
                        <div style={tipImageContainer}>
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1657779833626-1.png"
                            alt="Daily Exercise - Woman on treadmill"
                            style={tipImage}
                          />
                        </div>
                        <Text style={tipTitle}>Daily Exercise</Text>
                        <Text style={tipDescription} className="mobile-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Text>
                        <Link href="#" style={learnMoreButton}>
                          Learn More
                        </Link>
                      </div>
                    </Column>
                    <Column style={tipColumn}>
                      <div style={tipCard}>
                        <div style={tipImageContainer}>
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1657779906416-2.png"
                            alt="Think positive - Person with positive thoughts"
                            style={tipImage}
                          />
                        </div>
                        <Text style={tipTitle}>Think positive</Text>
                        <Text style={tipDescription} className="mobile-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Text>
                        <Link href="#" style={learnMoreButton}>
                          Learn More
                        </Link>
                      </div>
                    </Column>
                  </Row>
                  <Row style={tipsRow}>
                    <Column style={tipColumn}>
                      <div style={tipCard}>
                        <div style={tipImageContainer}>
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1657779895062-3.png"
                            alt="Daily Exercise - Outdoor activities"
                            style={tipImage}
                          />
                        </div>
                        <Text style={tipTitle}>Daily Exercise</Text>
                        <Text style={tipDescription} className="mobile-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Text>
                        <Link href="#" style={learnMoreButton}>
                          Learn More
                        </Link>
                      </div>
                    </Column>
                    <Column style={tipColumn}>
                      <div style={tipCard}>
                        <div style={tipImageContainer}>
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1657779844318-4.png"
                            alt="Think positive - Group of people"
                            style={tipImage}
                          />
                        </div>
                        <Text style={tipTitle}>Think positive</Text>
                        <Text style={tipDescription} className="mobile-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Text>
                        <Link href="#" style={learnMoreButton}>
                          Learn More
                        </Link>
                      </div>
                    </Column>
                  </Row>
                </div>

                {/* Mobile Tips Stack */}
                <div style={mobileTipsContainer}>
                  <div style={mobileTipCard} className="mobile-tip-card">
                    <div style={tipImageContainer}>
                      <Img
                        src="/placeholder.svg?height=100&width=120"
                        alt="Daily Exercise - Woman on treadmill"
                        style={tipImage}
                      />
                    </div>
                    <Text style={tipTitle}>Daily Exercise</Text>
                    <Text style={tipDescription} className="mobile-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Text>
                    <Link href="#" style={learnMoreButtonMobile}>
                      Learn More
                    </Link>
                  </div>
                  <div style={mobileTipCard} className="mobile-tip-card">
                    <div style={tipImageContainer}>
                      <Img
                        src="/placeholder.svg?height=100&width=120"
                        alt="Think positive - Person with positive thoughts"
                        style={tipImage}
                      />
                    </div>
                    <Text style={tipTitle}>Think positive</Text>
                    <Text style={tipDescription} className="mobile-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Text>
                    <Link href="#" style={learnMoreButtonMobile}>
                      Learn More
                    </Link>
                  </div>
                  <div style={mobileTipCard} className="mobile-tip-card">
                    <div style={tipImageContainer}>
                      <Img
                        src="/placeholder.svg?height=100&width=120"
                        alt="Daily Exercise - Outdoor activities"
                        style={tipImage}
                      />
                    </div>
                    <Text style={tipTitle}>Daily Exercise</Text>
                    <Text style={tipDescription} className="mobile-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Text>
                    <Link href="#" style={learnMoreButtonMobile}>
                      Learn More
                    </Link>
                  </div>
                  <div style={mobileTipCard} className="mobile-tip-card">
                    <div style={tipImageContainer}>
                      <Img
                        src="/placeholder.svg?height=100&width=120"
                        alt="Think positive - Group of people"
                        style={tipImage}
                      />
                    </div>
                    <Text style={tipTitle}>Think positive</Text>
                    <Text style={tipDescription} className="mobile-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Text>
                    <Link href="#" style={learnMoreButtonMobile}>
                      Learn More
                    </Link>
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Footer Section */}
          <Section style={footerSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Text style={needHelpText}>Need Help?</Text>
                <div style={contactButtonContainer}>
                  <Link href="#" style={contactButton} className="mobile-full-width">
                    Contact Us
                  </Link>
                </div>

                {/* Social Media Icons */}
                <Row style={socialRow}>
                  <Column style={socialColumn} className="mobile-social">
                    <Link href="https://www.facebook.com" style={socialLink}>
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                        alt="Facebook"
                        width="32"
                        height="32"
                        style={socialIcon}
                      />
                    </Link>
                  </Column>
                  <Column style={socialColumn} className="mobile-social">
                    <Link href="https://www.twitter.com" style={socialLink}>
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                        alt="Twitter"
                        width="32"
                        height="32"
                        style={socialIcon}
                      />
                    </Link>
                  </Column>
                  <Column style={socialColumn} className="mobile-social">
                    <Link href="https://www.instagram.com" style={socialLink}>
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                        alt="Instagram"
                        width="32"
                        height="32"
                        style={socialIcon}
                      />
                    </Link>
                  </Column>
                  <Column style={socialColumn} className="mobile-social">
                    <Link href="https://www.linkedin.com" style={socialLink}>
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                        alt="LinkedIn"
                        width="32"
                        height="32"
                        style={socialIcon}
                      />
                    </Link>
                  </Column>
                </Row>

                <Text style={addressText} className="mobile-text">
                  2261 Market Street #4667 San Francisco, CA 94114
                </Text>
                <Text style={rightsText} className="mobile-text">
                  All rights reserved - Company Pty 94114
                </Text>
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

export default HealthWellnessEmail

// Styles
const main = {
  backgroundColor: "#ffffff",
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
}

// Hero Section Styles
const heroSection = {
  backgroundColor: "#c4d4b0",
  padding: "60px 40px",
  textAlign: "center" as const,
}

const heroContent = {
  maxWidth: "500px",
  margin: "0 auto",
}

const brainImageContainer = {
  margin: "0 0 30px",
  textAlign: "center" as const,
}

const brainImage = {
  width: "320px",
  height: "320px",
  display: "block",
  margin: "0 auto",
  objectFit: "contain" as const,
}

const embraceText = {
  color: "#333333",
  fontSize: "18px",
  fontWeight: "400",
  margin: "0 0 5px",
  textAlign: "center" as const,
}

const heroHeading = {
  color: "#333333",
  fontSize: "36px",
  fontWeight: "700",
  lineHeight: "1.2",
  margin: "0 0 20px",
  textAlign: "center" as const,
}

const heroDescription = {
  color: "#666666",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0",
  textAlign: "center" as const,
  maxWidth: "400px",
  marginLeft: "auto",
  marginRight: "auto",
}

// Tips Section Styles
const tipsSection = {
  backgroundColor: "#ffffff",
  padding: "50px 0px",
}

const tipsIntro = {
  color: "#333333",
  fontSize: "16px",
  textAlign: "center" as const,
  margin: "0 0 5px",
}

const tipsHeading = {
  color: "#333333",
  fontSize: "28px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 40px",
  lineHeight: "1.3",
}

const tipsRow = {
  margin: "0 0 20px",
}

const tipColumn = {
  padding: "0 10px",
}

const tipCard = {
  backgroundColor: "#f8f9fa",
  padding: "25px 10px",
  borderRadius: "8px",
  textAlign: "center" as const,
  height: "100%",
  border: "1px solid #e9ecef",
}

const tipImageContainer = {
  margin: "0 0 20px",
  textAlign: "center" as const,
}

const tipImage = {
  width: "120px",
  height: "100px",
  display: "block",
  margin: "0 auto",
  objectFit: "contain" as const,
}

const tipTitle = {
  color: "#333333",
  fontSize: "18px",
  fontWeight: "600",
  margin: "0 0 12px",
  textAlign: "center" as const,
}

const tipDescription = {
  color: "#666666",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0 0 20px",
  textAlign: "center" as const,
}

const learnMoreButton = {
  backgroundColor: "#d4c5a9",
  color: "#333333",
  fontSize: "14px",
  fontWeight: "500",
  textDecoration: "none",
  padding: "10px 20px",
  borderRadius: "4px",
  display: "inline-block",
  textAlign: "center" as const,
}

const learnMoreButtonMobile = {
  backgroundColor: "#d4c5a9",
  color: "#333333",
  fontSize: "14px",
  fontWeight: "500",
  textDecoration: "none",
  padding: "10px 20px",
  borderRadius: "4px",
  display: "block",
  textAlign: "center" as const,
  width: "100%",
  boxSizing: "border-box" as const,
}

// Mobile Tips Styles
const mobileTipsContainer = {
  display: "none",
}

const mobileTipCard = {
  backgroundColor: "#f8f9fa",
  padding: "25px 20px",
  borderRadius: "8px",
  textAlign: "center" as const,
  border: "1px solid #e9ecef",
  margin: "0 0 20px",
}

// Footer Section Styles
const footerSection = {
  backgroundColor: "#4a5568",
  padding: "40px",
  textAlign: "center" as const,
}

const needHelpText = {
  color: "#ffffff",
  fontSize: "18px",
  fontWeight: "500",
  margin: "0 0 20px",
  textAlign: "center" as const,
}

const contactButtonContainer = {
  margin: "0 0 30px",
  textAlign: "center" as const,
}

const contactButton = {
  backgroundColor: "#d4c5a9",
  color: "#333333",
  fontSize: "14px",
  fontWeight: "500",
  textDecoration: "none",
  padding: "12px 24px",
  borderRadius: "4px",
  display: "inline-block",
  textAlign: "center" as const,
}

const socialRow = {
  margin: "0 0 25px",
}

const socialColumn = {
  padding: "0 8px",
  textAlign: "center" as const,
}

const socialLink = {
  display: "inline-block",
}

const socialIcon = {
  display: "block",
}

const addressText = {
  color: "#cbd5e0",
  fontSize: "12px",
  margin: "0 0 5px",
  textAlign: "center" as const,
}

const rightsText = {
  color: "#cbd5e0",
  fontSize: "12px",
  margin: "0 0 15px",
  textAlign: "center" as const,
}

const footerLinks = {
  color: "#cbd5e0",
  fontSize: "12px",
  margin: "0",
  textAlign: "center" as const,
}

const footerLink = {
  color: "#cbd5e0",
  textDecoration: "underline",
}
