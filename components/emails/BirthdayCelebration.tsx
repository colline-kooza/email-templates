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

export const BirthdayCelebration = () => (
  <Html>
    <Head>
      <Font
        fontFamily="Inter"
        fallbackFontFamily={["Arial", "sans-serif"]}
        webFont={{
          url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
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
          .mobile-birthday-heading { font-size: 32px !important; }
          .mobile-full-width { width: 100% !important; }
          .mobile-center { text-align: center !important; }
          .mobile-button {
            margin: 0 0 12px 0 !important;
            display: block !important;
            text-align: center !important;
          }
          .mobile-illustration {
            height: 250px !important;
          }
          .mobile-social-icon {
            margin: 0 6px !important;
          }
          .mobile-bunting {
            height: 40px !important;
          }
        }
      `}</style>
    </Head>
    <Preview>Happy Birthday Jacob Smith! 🎉 Special 15% Discount on Mobile Development Services</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          {/* Header with Bunting and Balloons */}
          <Section style={headerSection}>
            <Row>
              <Column align="center">
                <div style={decorativeHeader}>
                  {/* Bunting Flags */}
                  <div style={buntingContainer}>
                    <svg width="100%" height="60" viewBox="0 0 600 60" style={buntingSvg} className="mobile-bunting">
                      {/* Bunting String */}
                      <line x1="0" y1="15" x2="600" y2="15" stroke="#666" strokeWidth="2" />

                      {/* Flag 1 - Blue */}
                      <polygon points="50,15 80,15 65,35" fill="#3b82f6" />

                      {/* Flag 2 - Red */}
                      <polygon points="100,15 130,15 115,35" fill="#ef4444" />

                      {/* Flag 3 - Green */}
                      <polygon points="150,15 180,15 165,35" fill="#10b981" />

                      {/* Flag 4 - Purple */}
                      <polygon points="200,15 230,15 215,35" fill="#8b5cf6" />

                      {/* Flag 5 - Orange */}
                      <polygon points="250,15 280,15 265,35" fill="#f97316" />

                      {/* Flag 6 - Pink */}
                      <polygon points="300,15 330,15 315,35" fill="#ec4899" />

                      {/* Flag 7 - Yellow */}
                      <polygon points="350,15 380,15 365,35" fill="#eab308" />

                      {/* Flag 8 - Teal */}
                      <polygon points="400,15 430,15 415,35" fill="#14b8a6" />

                      {/* Flag 9 - Indigo */}
                      <polygon points="450,15 480,15 465,35" fill="#6366f1" />

                      {/* Flag 10 - Rose */}
                      <polygon points="500,15 530,15 515,35" fill="#f43f5e" />
                    </svg>
                  </div>

                  {/* Balloons */}
                  <div style={balloonsContainer}>
                    <div style={balloonLeft}>
                      <div style={balloonCircle1}></div>
                      <div style={balloonString}></div>
                    </div>
                    <div style={balloonRight}>
                      <div style={balloonCircle2}></div>
                      <div style={balloonString}></div>
                    </div>
                  </div>

                  {/* Confetti */}
                  <div style={confettiContainer}>
                    <div style={{ ...confettiPiece, left: "10%", backgroundColor: "#3b82f6" }}></div>
                    <div
                      style={{ ...confettiPiece, left: "20%", backgroundColor: "#ef4444", animationDelay: "0.5s" }}
                    ></div>
                    <div
                      style={{ ...confettiPiece, left: "30%", backgroundColor: "#10b981", animationDelay: "1s" }}
                    ></div>
                    <div
                      style={{ ...confettiPiece, left: "70%", backgroundColor: "#f97316", animationDelay: "0.3s" }}
                    ></div>
                    <div
                      style={{ ...confettiPiece, left: "80%", backgroundColor: "#8b5cf6", animationDelay: "0.8s" }}
                    ></div>
                    <div
                      style={{ ...confettiPiece, left: "90%", backgroundColor: "#ec4899", animationDelay: "1.2s" }}
                    ></div>
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Main Content Section */}
          <Section style={mainSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Text style={happyText}>HAPPY</Text>
                <Heading style={birthdayHeading} className="mobile-birthday-heading">
                  BIRTHDAY
                </Heading>
                <Text style={nameText}>JACOB SMITH</Text>

                {/* Developer Illustration */}
                <div style={illustrationContainer}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1654251622915-Mobile%20development%20(2).gif"
                    alt="Developer celebrating with laptop, mobile apps, and design tools"
                    style={illustrationImage}
                    className="mobile-full-width mobile-illustration"
                  />
                </div>
              </Column>
            </Row>
          </Section>

          {/* Offer Section */}
          <Section style={offerSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Text style={announcingText}>Announcing</Text>
                <Heading style={offerHeading} className="mobile-heading">
                  15% discount offer
                </Heading>
                <Text style={serviceText}>Our latest Mobile development services</Text>

                <Text style={descriptionText} className="mobile-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </Text>

                <div style={buttonContainer}>
                  <Link href="#" style={discountButton} className="mobile-button">
                    Get Discount Now
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
                    <div style={{ ...socialIconCircle, backgroundColor: "#1877f2" }}>
                      <Text style={socialIconText}>f</Text>
                    </div>
                  </Link>
                  <Link href="https://www.linkedin.com" style={socialLink} className="mobile-social-icon">
                    <div style={{ ...socialIconCircle, backgroundColor: "#0077b5" }}>
                      <Text style={socialIconText}>in</Text>
                    </div>
                  </Link>
                  <Link href="https://www.twitter.com" style={socialLink} className="mobile-social-icon">
                    <div style={{ ...socialIconCircle, backgroundColor: "#1da1f2" }}>
                      <Text style={socialIconText}>t</Text>
                    </div>
                  </Link>
                  <Link href="https://www.instagram.com" style={socialLink} className="mobile-social-icon">
                    <div style={{ ...socialIconCircle, backgroundColor: "#e4405f" }}>
                      <Text style={socialIconText}>ig</Text>
                    </div>
                  </Link>
                </div>

                <Text style={addressText} className="mobile-text">
                  2261 Market Street #4667 San Francisco, CA 94114
                </Text>

                <Text style={copyrightText} className="mobile-text">
                  © 2023 Unlayer. All Rights Reserved
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
)

export default BirthdayCelebration

// Styles
const main = {
  backgroundColor: "#a7d4d1",
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  margin: "0",
  padding: "20px 0",
  lineHeight: "1.6",
}

const container = {
  margin: "0 auto",
  width: "100%",
  maxWidth: "600px",
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
}

// Header Styles
const headerSection = {
  background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
  padding: "0",
  position: "relative" as const,
  overflow: "hidden",
}

const decorativeHeader = {
  position: "relative" as const,
  height: "120px",
  width: "100%",
}

const buntingContainer = {
  position: "absolute" as const,
  top: "20px",
  left: "0",
  right: "0",
  zIndex: "2",
}

const buntingSvg = {
  display: "block",
}

const balloonsContainer = {
  position: "absolute" as const,
  top: "0",
  left: "0",
  right: "0",
  height: "100%",
  pointerEvents: "none" as const,
}

const balloonLeft = {
  position: "absolute" as const,
  left: "20px",
  top: "10px",
}

const balloonRight = {
  position: "absolute" as const,
  right: "20px",
  top: "15px",
}

const balloonCircle1 = {
  width: "30px",
  height: "40px",
  backgroundColor: "#ef4444",
  borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
  position: "relative" as const,
}

const balloonCircle2 = {
  width: "25px",
  height: "35px",
  backgroundColor: "#3b82f6",
  borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
  position: "relative" as const,
}

const balloonString = {
  width: "1px",
  height: "40px",
  backgroundColor: "#666",
  margin: "0 auto",
}

const confettiContainer = {
  position: "absolute" as const,
  top: "0",
  left: "0",
  right: "0",
  height: "100%",
  pointerEvents: "none" as const,
}

const confettiPiece = {
  position: "absolute" as const,
  width: "8px",
  height: "8px",
  borderRadius: "2px",
  top: "30px",
  animation: "float 3s ease-in-out infinite",
}

// Main Section Styles
const mainSection = {
  backgroundColor: "#ffffff",
  padding: "50px 40px 30px",
  textAlign: "center" as const,
}

const happyText = {
  color: "#6b7280",
  fontSize: "18px",
  fontWeight: "500",
  margin: "0 0 8px",
  textAlign: "center" as const,
  letterSpacing: "2px",
}

const birthdayHeading = {
  color: "#1f2937",
  fontSize: "42px",
  fontWeight: "800",
  lineHeight: "1.1",
  margin: "0 0 12px",
  textAlign: "center" as const,
  letterSpacing: "1px",
}

const nameText = {
  color: "#f97316",
  fontSize: "20px",
  fontWeight: "600",
  margin: "0 0 40px",
  textAlign: "center" as const,
  letterSpacing: "1px",
}

const illustrationContainer = {
  textAlign: "center" as const,
  margin: "0 0 30px",
}

const illustrationImage = {
  width: "100%",
  maxWidth: "400px",
  height: "300px",
  objectFit: "contain" as const,
  borderRadius: "12px",
  display: "block",
  margin: "0 auto",
}

// Offer Section Styles
const offerSection = {
  backgroundColor: "#ffffff",
  padding: "30px 40px 50px",
  textAlign: "center" as const,
}

const announcingText = {
  color: "#6b7280",
  fontSize: "16px",
  fontWeight: "500",
  margin: "0 0 12px",
  textAlign: "center" as const,
}

const offerHeading = {
  color: "#1f2937",
  fontSize: "32px",
  fontWeight: "700",
  lineHeight: "1.2",
  margin: "0 0 8px",
  textAlign: "center" as const,
}

const serviceText = {
  color: "#6b7280",
  fontSize: "18px",
  fontWeight: "500",
  margin: "0 0 30px",
  textAlign: "center" as const,
}

const descriptionText = {
  color: "#4b5563",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 40px",
  textAlign: "center" as const,
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto",
}

const buttonContainer = {
  textAlign: "center" as const,
}

const discountButton = {
  backgroundColor: "#f97316",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "16px 40px",
  borderRadius: "8px",
  display: "inline-block",
  textAlign: "center" as const,
  boxShadow: "0 4px 12px rgba(249, 115, 22, 0.3)",
  transition: "all 0.3s ease",
  minWidth: "200px",
}

// Footer Styles
const footerSection = {
  background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
  padding: "40px 40px",
  textAlign: "center" as const,
}

const socialContainer = {
  textAlign: "center" as const,
  margin: "0 0 25px",
}

const socialLink = {
  display: "inline-block",
  margin: "0 8px",
  textDecoration: "none",
}

const socialIconCircle = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  display: "table",
  margin: "0 auto",
}

const socialIconText = {
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0",
  display: "table-cell",
  textAlign: "center" as const,
  verticalAlign: "middle" as const,
}

const addressText = {
  color: "#92400e",
  fontSize: "14px",
  margin: "0 0 8px",
  textAlign: "center" as const,
  fontWeight: "500",
}

const copyrightText = {
  color: "#92400e",
  fontSize: "12px",
  margin: "0",
  textAlign: "center" as const,
}
