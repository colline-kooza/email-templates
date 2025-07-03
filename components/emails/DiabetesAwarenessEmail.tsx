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

export const DiabetesAwarenessEmail = () => (
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
          .mobile-stat-number { font-size: 24px !important; }
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
          .mobile-symptom-row {
            display: block !important;
            width: 100% !important;
          }
          .mobile-symptom-cell {
            display: block !important;
            width: 100% !important;
            margin: 0 0 16px 0 !important;
          }
        }
      `}</style>
    </Head>
    <Preview>Take Control of Your Health - Diabetes Awareness & Prevention</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          {/* Hero Section */}
          <Section style={heroSection}>
            <Row>
              <Column align="center">
                <div style={heroContent}>
                  <Heading style={heroHeading} className="mobile-hero-heading">
                    World Diabetes Day
                  </Heading>
                  <Text style={heroSubheading} className="mobile-text">
                    November 14th - Take Control of Your Health
                  </Text>
                  <Text style={heroText} className="mobile-text">
                    Join millions worldwide in raising awareness about diabetes prevention, management, and the
                    importance of early detection. Your health matters.
                  </Text>
                  <div style={heroImageContainer}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1658228141508-meter.png"
                      alt="Blood glucose meter and healthy lifestyle"
                      style={heroImage}
                      className="mobile-full-width"
                    />
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Stats Section - Improved Responsive Design */}
          <Section style={statsSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Heading style={statsHeading} className="mobile-heading">
                  Diabetes by the Numbers
                </Heading>

                {/* Desktop Stats Layout */}
                <div className="">
                  <Row>
                    <Column style={statColumn} align="center">
                      <Text style={statNumber} className="mobile-stat-number">
                        537M
                      </Text>
                      <Text style={statLabel} className="mobile-text">
                        Adults with diabetes worldwide
                      </Text>
                    </Column>
                    <Column style={statColumn} align="center">
                      <Text style={statNumber} className="mobile-stat-number">
                        1 in 10
                      </Text>
                      <Text style={statLabel} className="mobile-text">
                        Adults have diabetes
                      </Text>
                    </Column>
                    <Column style={statColumn} align="center">
                      <Text style={statNumber} className="mobile-stat-number">
                        90%
                      </Text>
                      <Text style={statLabel} className="mobile-text">
                        Have Type 2 diabetes
                      </Text>
                    </Column>
                  </Row>
                </div>

                {/* Mobile Stats Layout */}
                <div style={mobileStatsContainer}>
                  <div style={mobileStatItem} className="mobile-stack">
                    <Text style={statNumber} className="mobile-stat-number mobile-center">
                      537M
                    </Text>
                    <Text style={statLabel} className="mobile-text mobile-center">
                      Adults with diabetes worldwide
                    </Text>
                  </div>
                  <div style={mobileStatItem} className="mobile-stack">
                    <Text style={statNumber} className="mobile-stat-number mobile-center">
                      1 in 10
                    </Text>
                    <Text style={statLabel} className="mobile-text mobile-center">
                      Adults have diabetes
                    </Text>
                  </div>
                  <div style={mobileStatItem} className="mobile-stack">
                    <Text style={statNumber} className="mobile-stat-number mobile-center">
                      90%
                    </Text>
                    <Text style={statLabel} className="mobile-text mobile-center">
                      Have Type 2 diabetes
                    </Text>
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Symptoms Section - Improved Responsive Grid */}
          <Section style={symptomsSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Heading style={sectionHeading} className="mobile-heading">
                  Warning Signs to Watch For
                </Heading>
                <Text style={sectionSubtext} className="mobile-text">
                  Early detection can make all the difference. Be aware of these common symptoms:
                </Text>

              
                {/* Mobile Symptoms Layout */}
                <div style={mobileSymptomsContainer}>
                  <div style={mobileSymptomItem} className="mobile-stack">
                    <div style={symptomIconContainer}>
                      <Img
                        src="https://cdn.templates.unlayer.com/assets/1658228425348-1.png"
                        alt="Increased hunger"
                        width="40"
                        height="40"
                        style={symptomIcon}
                      />
                    </div>
                    <Text style={symptomTitle}>Increased Hunger</Text>
                    <Text style={symptomDescription} className="mobile-text">
                      Feeling hungry even after eating
                    </Text>
                  </div>
                  <div style={mobileSymptomItem} className="mobile-stack">
                    <div style={symptomIconContainer}>
                      <Img
                        src="https://cdn.templates.unlayer.com/assets/1658228426258-2.png"
                        alt="Fatigue"
                        width="40"
                        height="40"
                        style={symptomIcon}
                      />
                    </div>
                    <Text style={symptomTitle}>Persistent Fatigue</Text>
                    <Text style={symptomDescription} className="mobile-text">
                      Feeling tired despite adequate rest
                    </Text>
                  </div>
                  <div style={mobileSymptomItem} className="mobile-stack">
                    <div style={symptomIconContainer}>
                      <Img
                        src="https://cdn.templates.unlayer.com/assets/1658228429225-3.png"
                        alt="Increased thirst"
                        width="40"
                        height="40"
                        style={symptomIcon}
                      />
                    </div>
                    <Text style={symptomTitle}>Excessive Thirst</Text>
                    <Text style={symptomDescription} className="mobile-text">
                      Drinking more water than usual
                    </Text>
                  </div>
                  <div style={mobileSymptomItem} className="mobile-stack">
                    <div style={symptomIconContainer}>
                      <Img
                        src="https://cdn.templates.unlayer.com/assets/1658228470207-4.png"
                        alt="Frequent urination"
                        width="40"
                        height="40"
                        style={symptomIcon}
                      />
                    </div>
                    <Text style={symptomTitle}>Frequent Urination</Text>
                    <Text style={symptomDescription} className="mobile-text">
                      Needing to urinate more often
                    </Text>
                  </div>
                  <div style={mobileSymptomItem} className="mobile-stack">
                    <div style={symptomIconContainer}>
                      <Img
                        src="https://cdn.templates.unlayer.com/assets/1658228478504-6.png"
                        alt="Blurred vision"
                        width="40"
                        height="40"
                        style={symptomIcon}
                      />
                    </div>
                    <Text style={symptomTitle}>Blurred Vision</Text>
                    <Text style={symptomDescription} className="mobile-text">
                      Difficulty seeing clearly
                    </Text>
                  </div>
                  <div style={mobileSymptomItem} className="mobile-stack">
                    <div style={symptomIconContainer}>
                      <Img
                        src="https://cdn.templates.unlayer.com/assets/1658228471352-5.png"
                        alt="Slow healing"
                        width="40"
                        height="40"
                        style={symptomIcon}
                      />
                    </div>
                    <Text style={symptomTitle}>Slow Healing</Text>
                    <Text style={symptomDescription} className="mobile-text">
                      Cuts and wounds heal slowly
                    </Text>
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* CTA Section - Improved Button Layout */}
          <Section style={ctaSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <div style={ctaContent}>
                  <Heading style={ctaHeading} className="mobile-heading">
                    Take Action Today
                  </Heading>
                  <Text style={ctaText} className="mobile-text">
                    Don't wait for symptoms to appear. Regular blood sugar monitoring and health checkups can help
                    prevent complications and save lives.
                  </Text>

                  {/* Desktop Button Layout */}
                  <div className="mobile-hide">
                    <Row>
                      <Column style={buttonColumn}>
                        <Link href="#" style={primaryButton}>
                          Schedule Checkup
                        </Link>
                      </Column>
                      <Column style={buttonColumn}>
                        <Link href="#" style={secondaryButton}>
                          Learn More
                        </Link>
                      </Column>
                    </Row>
                  </div>

                  {/* Mobile Button Layout */}
                  <div style={mobileButtonContainer}>
                    <div style={mobileButtonItem} className="mobile-button">
                      <Link href="#" style={primaryButtonMobile}>
                        Schedule Checkup
                      </Link>
                    </div>
                    <div style={mobileButtonItem} className="mobile-button">
                      <Link href="#" style={secondaryButtonMobile}>
                        Learn More
                      </Link>
                    </div>
                  </div>

                  <div style={ctaImageContainer}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1658228903905-check.png"
                      alt="Health screening illustration"
                      style={ctaImage}
                      className="mobile-full-width"
                    />
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Footer Section */}
          <Section style={footerSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Text style={footerHeading}>Need Support?</Text>
                <Text style={footerText} className="mobile-text">
                  Our healthcare professionals are here to help you on your wellness journey.
                </Text>
                <div style={footerButtons}>
                  <Link href="#" style={footerButton} className="mobile-full-width">
                    Contact Our Team
                  </Link>
                </div>
                <Row>
                  <Column style={socialColumn}>
                    <Link href="https://www.facebook.com" style={socialLink}>
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                        alt="Facebook"
                        width="32"
                        height="32"
                      />
                    </Link>
                  </Column>
                  <Column style={socialColumn}>
                    <Link href="https://www.instagram.com" style={socialLink}>
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                        alt="Instagram"
                        width="32"
                        height="32"
                      />
                    </Link>
                  </Column>
                  <Column style={socialColumn}>
                    <Link href="https://www.twitter.com" style={socialLink}>
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                        alt="Twitter"
                        width="32"
                        height="32"
                      />
                    </Link>
                  </Column>
                </Row>
                <Text style={footerDisclaimer} className="mobile-text">
                  This email contains general health information and should not replace professional medical advice.
                  Always consult with your healthcare provider for personalized guidance.
                </Text>
                <Text style={footerCopyright} className="mobile-text">
                  © 2024 HealthCare Plus. All rights reserved.
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
)

export default DiabetesAwarenessEmail

// Enhanced Responsive Styles
const main = {
  backgroundColor: "#f8fafc",
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
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
}

const heroSection = {
  background: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
  padding: "48px 24px",
  textAlign: "center" as const,
  color: "#ffffff",
}

const heroContent = {
  maxWidth: "500px",
  margin: "0 auto",
}

const heroHeading = {
  color: "#ffffff",
  fontSize: "32px",
  fontWeight: "700",
  lineHeight: "1.2",
  margin: "0 0 12px",
  textAlign: "center" as const,
}

const heroSubheading = {
  color: "#dbeafe",
  fontSize: "18px",
  fontWeight: "500",
  margin: "0 0 24px",
  textAlign: "center" as const,
}

const heroText = {
  color: "#bfdbfe",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 32px",
  textAlign: "center" as const,
}

const heroImageContainer = {
  margin: "32px 0 0",
  textAlign: "center" as const,
}

const heroImage = {
  width: "100%",
  maxWidth: "400px",
  height: "300px",
  objectFit: "contain" as const,
  borderRadius: "12px",
  display: "block",
  margin: "0 auto",
}

const statsSection = {
  backgroundColor: "#1e293b",
  padding: "48px 24px",
  textAlign: "center" as const,
}

const statsHeading = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "600",
  margin: "0 0 40px",
  textAlign: "center" as const,
}

const statColumn = {
  textAlign: "center" as const,
  padding: "0 12px",
}

const statNumber = {
  color: "#3b82f6",
  fontSize: "28px",
  fontWeight: "700",
  margin: "0 0 8px",
  display: "block",
  textAlign: "center" as const,
}

const statLabel = {
  color: "#cbd5e1",
  fontSize: "14px",
  margin: "0",
  textAlign: "center" as const,
  lineHeight: "1.4",
}

// Mobile-specific styles
const mobileStatsContainer = {
  display: "none",
}

const mobileStatItem = {
  backgroundColor: "#334155",
  padding: "20px",
  borderRadius: "8px",
  margin: "0 0 16px",
  textAlign: "center" as const,
}

const symptomsSection = {
  backgroundColor: "#ffffff",
  padding: "48px 18px",
}

const sectionHeading = {
  color: "#1e293b",
  fontSize: "28px",
  fontWeight: "600",
  textAlign: "center" as const,
  margin: "0 0 16px",
}

const sectionSubtext = {
  color: "#64748b",
  fontSize: "16px",
  textAlign: "center" as const,
  margin: "0 0 40px",
  lineHeight: "1.6",
}

const symptomColumn = {
  textAlign: "center" as const,
  padding: "0 8px",
  margin: "0 0 16px",
}

const symptomCard = {
  backgroundColor: "#f8fafc",
  padding: "24px 16px",
  borderRadius: "12px",
  textAlign: "center" as const,
  border: "1px solid #e2e8f0",
  height: "100%",
}

const symptomIconContainer = {
  backgroundColor: "#ffffff",
  width: "64px",
  height: "64px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 16px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
}

const symptomIcon = {
  display: "block",
}

const symptomTitle = {
  color: "#1e293b",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0 0 8px",
  textAlign: "center" as const,
}

const symptomDescription = {
  color: "#64748b",
  fontSize: "14px",
  margin: "0",
  lineHeight: "1.4",
  textAlign: "center" as const,
}

// Mobile symptoms container
const mobileSymptomsContainer = {
  display: "none",
}

const mobileSymptomItem = {
  backgroundColor: "#f8fafc",
  padding: "20px",
  borderRadius: "12px",
  textAlign: "center" as const,
  border: "1px solid #e2e8f0",
  margin: "0 0 16px",
}

const ctaSection = {
  background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
  padding: "48px 24px",
  textAlign: "center" as const,
}

const ctaContent = {
  maxWidth: "500px",
  margin: "0 auto",
}

const ctaHeading = {
  color: "#ffffff",
  fontSize: "32px",
  fontWeight: "700",
  margin: "0 0 16px",
  textAlign: "center" as const,
}

const ctaText = {
  color: "#d1fae5",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 32px",
  textAlign: "center" as const,
}

const buttonColumn = {
  textAlign: "center" as const,
  padding: "0 8px",
}

const primaryButton = {
  backgroundColor: "#ffffff",
  color: "#059669",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "14px 28px",
  borderRadius: "8px",
  display: "inline-block",
  textAlign: "center" as const,
  minWidth: "140px",
}

const secondaryButton = {
  backgroundColor: "transparent",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "14px 28px",
  borderRadius: "8px",
  border: "2px solid #ffffff",
  display: "inline-block",
  textAlign: "center" as const,
  minWidth: "140px",
}

// Mobile button styles
const mobileButtonContainer = {
  display: "none",
}

const mobileButtonItem = {
  margin: "0 0 12px",
  textAlign: "center" as const,
}

const primaryButtonMobile = {
  backgroundColor: "#ffffff",
  color: "#059669",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "14px 28px",
  borderRadius: "8px",
  display: "block",
  textAlign: "center" as const,
  width: "100%",
  boxSizing: "border-box" as const,
}

const secondaryButtonMobile = {
  backgroundColor: "transparent",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "14px 28px",
  borderRadius: "8px",
  border: "2px solid #ffffff",
  display: "block",
  textAlign: "center" as const,
  width: "100%",
  boxSizing: "border-box" as const,
}

const ctaImageContainer = {
  textAlign: "center" as const,
  margin: "20px 0 0",
}

const ctaImage = {
  width: "100%",
  maxWidth: "200px",
  height: "auto",
  borderRadius: "8px",
  objectFit: "contain" as const,
  display: "block",
  margin: "0 auto",
}

const footerSection = {
  backgroundColor: "#f8fafc",
  padding: "48px 24px 32px",
  textAlign: "center" as const,
  borderTop: "1px solid #e2e8f0",
}

const footerHeading = {
  color: "#1e293b",
  fontSize: "20px",
  fontWeight: "600",
  margin: "0 0 12px",
  textAlign: "center" as const,
}

const footerText = {
  color: "#64748b",
  fontSize: "16px",
  margin: "0 0 24px",
  textAlign: "center" as const,
  lineHeight: "1.6",
}

const footerButtons = {
  margin: "0 0 32px",
  textAlign: "center" as const,
}

const footerButton = {
  backgroundColor: "#3b82f6",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "12px 24px",
  borderRadius: "8px",
  display: "inline-block",
  textAlign: "center" as const,
}

const socialColumn = {
  textAlign: "center" as const,
  padding: "0 8px",
}

const socialLink = {
  display: "inline-block",
}

const footerDisclaimer = {
  color: "#94a3b8",
  fontSize: "12px",
  lineHeight: "1.5",
  margin: "0 0 16px",
  textAlign: "center" as const,
}

const footerCopyright = {
  color: "#94a3b8",
  fontSize: "12px",
  margin: "0",
  textAlign: "center" as const,
}
