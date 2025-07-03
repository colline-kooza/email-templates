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

export const RetentionReactivation = () => (
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
          .mobile-hero-heading { font-size: 32px !important; }
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
          .mobile-feature-card {
            width: 100% !important;
            margin: 0 0 20px 0 !important;
            display: block !important;
          }
          .mobile-stat-item {
            width: 100% !important;
            margin: 0 0 24px 0 !important;
            display: block !important;
            text-align: center !important;
          }
        }
      `}</style>
    </Head>
    <Preview>We Miss You! Come Back and Get 30% Off Your Next Purchase</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={headerSection}>
            <Row>
              <Column align="center">
                <Text style={logoText}>YourBrand</Text>
              </Column>
            </Row>
          </Section>

          {/* Hero Section */}
          <Section style={heroSection}>
            <Row>
              <Column align="center">
                <div style={heroContent}>
                  <div style={heroIconContainer}>
                    <div style={heroIcon}>👋</div>
                  </div>
                  <Heading style={heroHeading} className="mobile-hero-heading">
                    We Miss You!
                  </Heading>
                  <Text style={heroSubheading} className="mobile-text">
                    It's been a while since your last visit
                  </Text>
                  <Text style={heroText} className="mobile-text">
                    We've been working hard to improve your experience and we'd love to have you back. Here's what
                    you've been missing and a special welcome back offer just for you.
                  </Text>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Special Offer Section */}
          <Section style={offerSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <div style={offerBadge}>
                  <Text style={offerBadgeText}>WELCOME BACK OFFER</Text>
                </div>
                <Heading style={offerHeading} className="mobile-heading">
                  30% OFF
                </Heading>
                <Text style={offerSubtext} className="mobile-text">
                  Your Next Purchase
                </Text>
                <Text style={offerDescription} className="mobile-text">
                  Use code <strong style={codeStyle}>WELCOME30</strong> at checkout
                </Text>
                <Text style={offerExpiry} className="mobile-text">
                  ⏰ Expires in 7 days - Don't miss out!
                </Text>
                <div style={offerButtonContainer}>
                  <Link href="#" style={primaryButton} className="mobile-button">
                    Claim Your 30% Off
                  </Link>
                </div>
              </Column>
            </Row>
          </Section>

          {/* What's New Section */}
          <Section style={featuresSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Heading style={sectionHeading} className="mobile-heading">
                  Here's What You've Been Missing
                </Heading>
                <Text style={sectionSubtext} className="mobile-text">
                  We've been busy improving your experience with exciting new features
                </Text>

                {/* Desktop Features Layout */}
                <div className="mobile-hide">
                  <Row style={featuresRow}>
                    <Column style={featureColumn}>
                      <div style={featureCard}>
                        <div style={featureIconContainer}>
                          <Text style={featureIcon}>🚀</Text>
                        </div>
                        <Text style={featureTitle}>Faster Performance</Text>
                        <Text style={featureDescription} className="mobile-text">
                          50% faster loading times and smoother user experience
                        </Text>
                      </div>
                    </Column>
                    <Column style={featureColumn}>
                      <div style={featureCard}>
                        <div style={featureIconContainer}>
                          <Text style={featureIcon}>✨</Text>
                        </div>
                        <Text style={featureTitle}>New Features</Text>
                        <Text style={featureDescription} className="mobile-text">
                          Advanced tools and capabilities you've been asking for
                        </Text>
                      </div>
                    </Column>
                   
                  </Row>
                </div>

                {/* Mobile Features Layout */}
                <div style={mobileFeaturesContainer}>
                  <div style={mobileFeatureCard} className="mobile-feature-card">
                    <div style={featureIconContainer}>
                      <Text style={featureIcon}>🚀</Text>
                    </div>
                    <Text style={featureTitle}>Faster Performance</Text>
                    <Text style={featureDescription} className="mobile-text">
                      50% faster loading times and smoother user experience
                    </Text>
                  </div>
                  <div style={mobileFeatureCard} className="mobile-feature-card">
                    <div style={featureIconContainer}>
                      <Text style={featureIcon}>✨</Text>
                    </div>
                    <Text style={featureTitle}>New Features</Text>
                    <Text style={featureDescription} className="mobile-text">
                      Advanced tools and capabilities you've been asking for
                    </Text>
                  </div>
                  
                </div>
              </Column>
            </Row>
          </Section>

          {/* Stats Section */}
          <Section style={statsSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Heading style={statsHeading} className="mobile-heading">
                  Join Thousands of Happy Users
                </Heading>

                {/* Desktop Stats Layout */}
                <div className="mobile-hide">
                  <Row>
                    <Column style={statColumn} align="center">
                      <Text style={statNumber}>50K+</Text>
                      <Text style={statLabel} className="mobile-text">
                        Active Users
                      </Text>
                    </Column>
                    <Column style={statColumn} align="center">
                      <Text style={statNumber}>4.9★</Text>
                      <Text style={statLabel} className="mobile-text">
                        User Rating
                      </Text>
                    </Column>
                    <Column style={statColumn} align="center">
                      <Text style={statNumber}>99.9%</Text>
                      <Text style={statLabel} className="mobile-text">
                        Uptime
                      </Text>
                    </Column>
                  </Row>
                </div>

                {/* Mobile Stats Layout */}
                <div style={mobileStatsContainer}>
                  <div style={mobileStatItem} className="mobile-stat-item">
                    <Text style={statNumber}>50K+</Text>
                    <Text style={statLabel} className="mobile-text">
                      Active Users
                    </Text>
                  </div>
                  <div style={mobileStatItem} className="mobile-stat-item">
                    <Text style={statNumber}>4.9★</Text>
                    <Text style={statLabel} className="mobile-text">
                      User Rating
                    </Text>
                  </div>
                  <div style={mobileStatItem} className="mobile-stat-item">
                    <Text style={statNumber}>99.9%</Text>
                    <Text style={statLabel} className="mobile-text">
                      Uptime
                    </Text>
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* CTA Section */}
          <Section style={ctaSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <div style={ctaContent}>
                  <Heading style={ctaHeading} className="mobile-heading">
                    Ready to Come Back?
                  </Heading>
                  <Text style={ctaText} className="mobile-text">
                    Don't let this opportunity slip away. Your 30% discount is waiting, but it won't last forever.
                  </Text>

                  {/* Desktop CTA Buttons */}
                  <div className="mobile-hide">
                    <Row>
                      <Column style={ctaButtonColumn}>
                        <Link href="#" style={primaryCtaButton}>
                          Get My 30% Off Now
                        </Link>
                      </Column>
                      <Column style={ctaButtonColumn}>
                        <Link href="#" style={secondaryCtaButton}>
                          Browse New Features
                        </Link>
                      </Column>
                    </Row>
                  </div>

                  {/* Mobile CTA Buttons */}
                  <div style={mobileCtaContainer}>
                    <div style={mobileCtaButton} className="mobile-button">
                      <Link href="#" style={primaryCtaButtonMobile}>
                        Get My 30% Off Now
                      </Link>
                    </div>
                    <div style={mobileCtaButton} className="mobile-button">
                      <Link href="#" style={secondaryCtaButtonMobile}>
                        Browse New Features
                      </Link>
                    </div>
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Footer */}
          <Section style={footerSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Text style={footerHeading}>Questions? We're Here to Help</Text>
                <Text style={footerText} className="mobile-text">
                  Our support team is available 24/7 to assist you with anything you need.
                </Text>
                <div style={footerButtonContainer}>
                  <Link href="#" style={footerButton} className="mobile-full-width">
                    Contact Support
                  </Link>
                </div>

                {/* Social Links */}
                <Row style={socialRow}>
                  <Column style={socialColumn}>
                    <Link href="#" style={socialLink}>
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                        alt="Facebook"
                        width="28"
                        height="28"
                      />
                    </Link>
                  </Column>
                  <Column style={socialColumn}>
                    <Link href="#" style={socialLink}>
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                        alt="Twitter"
                        width="28"
                        height="28"
                      />
                    </Link>
                  </Column>
                  <Column style={socialColumn}>
                    <Link href="#" style={socialLink}>
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                        alt="Instagram"
                        width="28"
                        height="28"
                      />
                    </Link>
                  </Column>
                  <Column style={socialColumn}>
                    <Link href="#" style={socialLink}>
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                        alt="LinkedIn"
                        width="28"
                        height="28"
                      />
                    </Link>
                  </Column>
                </Row>

                <Text style={footerDisclaimer} className="mobile-text">
                  You're receiving this email because you have an account with us. If you no longer wish to receive
                  these emails, you can{" "}
                  <Link href="#" style={footerLink}>
                    unsubscribe here
                  </Link>
                  .
                </Text>
                <Text style={footerCopyright} className="mobile-text">
                  © 2024 YourBrand. All rights reserved.
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
)

export default RetentionReactivation

// Styles
const main = {
  backgroundColor: "#f5f5f5",
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
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
}

// Header Styles
const headerSection = {
  backgroundColor: "#1a1a1a",
  padding: "20px 24px",
  textAlign: "center" as const,
}

const logoText = {
  color: "#ff6b35",
  fontSize: "24px",
  fontWeight: "700",
  margin: "0",
  textAlign: "center" as const,
}

// Hero Section Styles
const heroSection = {
  backgroundColor: "#ffffff",
  padding: "50px 40px",
  textAlign: "center" as const,
  borderBottom: "1px solid #f0f0f0",
}

const heroContent = {
  maxWidth: "500px",
  margin: "0 auto",
}

const heroIconContainer = {
  margin: "0 0 20px",
  textAlign: "center" as const,
}

const heroIcon = {
  fontSize: "48px",
  display: "block",
  textAlign: "center" as const,
}

const heroHeading = {
  color: "#1a1a1a",
  fontSize: "40px",
  fontWeight: "700",
  lineHeight: "1.2",
  margin: "0 0 12px",
  textAlign: "center" as const,
}

const heroSubheading = {
  color: "#ff6b35",
  fontSize: "18px",
  fontWeight: "500",
  margin: "0 0 24px",
  textAlign: "center" as const,
}

const heroText = {
  color: "#666666",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0",
  textAlign: "center" as const,
}

// Offer Section Styles
const offerSection = {
  background: "linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)",
  padding: "50px 40px",
  textAlign: "center" as const,
}

const offerBadge = {
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  borderRadius: "20px",
  padding: "8px 16px",
  display: "inline-block",
  margin: "0 0 20px",
}

const offerBadgeText = {
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "600",
  letterSpacing: "1px",
  margin: "0",
  textAlign: "center" as const,
}

const offerHeading = {
  color: "#ffffff",
  fontSize: "48px",
  fontWeight: "700",
  margin: "0 0 8px",
  textAlign: "center" as const,
}

const offerSubtext = {
  color: "#ffffff",
  fontSize: "20px",
  fontWeight: "500",
  margin: "0 0 16px",
  textAlign: "center" as const,
}

const offerDescription = {
  color: "#ffffff",
  fontSize: "16px",
  margin: "0 0 8px",
  textAlign: "center" as const,
}

const codeStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  padding: "2px 8px",
  borderRadius: "4px",
  fontFamily: "monospace",
}

const offerExpiry = {
  color: "#ffffff",
  fontSize: "14px",
  margin: "0 0 30px",
  textAlign: "center" as const,
  opacity: "0.9",
}

const offerButtonContainer = {
  textAlign: "center" as const,
}

const primaryButton = {
  backgroundColor: "#1a1a1a",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "16px 32px",
  borderRadius: "8px",
  display: "inline-block",
  textAlign: "center" as const,
  minWidth: "200px",
}

// Features Section Styles
const featuresSection = {
  backgroundColor: "#ffffff",
  padding: "60px 40px",
}

const sectionHeading = {
  color: "#1a1a1a",
  fontSize: "32px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 16px",
}

const sectionSubtext = {
  color: "#666666",
  fontSize: "16px",
  textAlign: "center" as const,
  margin: "0 0 50px",
  lineHeight: "1.6",
}

const featuresRow = {
  margin: "0",
}

const featureColumn = {
  padding: "0 15px",
}

const featureCard = {
  backgroundColor: "#f8f9fa",
  padding: "30px 20px",
  borderRadius: "12px",
  textAlign: "center" as const,
  border: "2px solid transparent",
  transition: "all 0.3s ease",
  height: "100%",
}

const featureIconContainer = {
  margin: "0 0 20px",
  textAlign: "center" as const,
}

const featureIcon = {
  fontSize: "32px",
  display: "block",
  textAlign: "center" as const,
}

const featureTitle = {
  color: "#1a1a1a",
  fontSize: "18px",
  fontWeight: "600",
  margin: "0 0 12px",
  textAlign: "center" as const,
}

const featureDescription = {
  color: "#666666",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0",
  textAlign: "center" as const,
}

// Mobile Features Styles
const mobileFeaturesContainer = {
  display: "none",
}

const mobileFeatureCard = {
  backgroundColor: "#f8f9fa",
  padding: "25px 20px",
  borderRadius: "12px",
  textAlign: "center" as const,
  border: "2px solid transparent",
  margin: "0 0 20px",
}

// Stats Section Styles
const statsSection = {
  backgroundColor: "#1a1a1a",
  padding: "50px 40px",
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
  padding: "0 20px",
}

const statNumber = {
  color: "#ff6b35",
  fontSize: "32px",
  fontWeight: "700",
  margin: "0 0 8px",
  display: "block",
  textAlign: "center" as const,
}

const statLabel = {
  color: "#cccccc",
  fontSize: "14px",
  margin: "0",
  textAlign: "center" as const,
}

// Mobile Stats Styles
const mobileStatsContainer = {
  display: "none",
}

const mobileStatItem = {
  backgroundColor: "#2a2a2a",
  padding: "20px",
  borderRadius: "8px",
  margin: "0 0 16px",
  textAlign: "center" as const,
}

// CTA Section Styles
const ctaSection = {
  backgroundColor: "#f8f9fa",
  padding: "50px 40px",
  textAlign: "center" as const,
}

const ctaContent = {
  maxWidth: "500px",
  margin: "0 auto",
}

const ctaHeading = {
  color: "#1a1a1a",
  fontSize: "32px",
  fontWeight: "700",
  margin: "0 0 16px",
  textAlign: "center" as const,
}

const ctaText = {
  color: "#666666",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 32px",
  textAlign: "center" as const,
}

const ctaButtonColumn = {
  textAlign: "center" as const,
  padding: "0 8px",
}

const primaryCtaButton = {
  backgroundColor: "#ff6b35",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "16px 24px",
  borderRadius: "8px",
  display: "inline-block",
  textAlign: "center" as const,
  minWidth: "180px",
}

const secondaryCtaButton = {
  backgroundColor: "transparent",
  color: "#1a1a1a",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "16px 24px",
  borderRadius: "8px",
  border: "2px solid #1a1a1a",
  display: "inline-block",
  textAlign: "center" as const,
  minWidth: "180px",
}

// Mobile CTA Styles
const mobileCtaContainer = {
  display: "none",
}

const mobileCtaButton = {
  margin: "0 0 12px",
  textAlign: "center" as const,
}

const primaryCtaButtonMobile = {
  backgroundColor: "#ff6b35",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "16px 24px",
  borderRadius: "8px",
  display: "block",
  textAlign: "center" as const,
  width: "100%",
  boxSizing: "border-box" as const,
}

const secondaryCtaButtonMobile = {
  backgroundColor: "transparent",
  color: "#1a1a1a",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "16px 24px",
  borderRadius: "8px",
  border: "2px solid #1a1a1a",
  display: "block",
  textAlign: "center" as const,
  width: "100%",
  boxSizing: "border-box" as const,
}

// Footer Styles
const footerSection = {
  backgroundColor: "#1a1a1a",
  padding: "40px",
  textAlign: "center" as const,
}

const footerHeading = {
  color: "#ffffff",
  fontSize: "20px",
  fontWeight: "600",
  margin: "0 0 12px",
  textAlign: "center" as const,
}

const footerText = {
  color: "#cccccc",
  fontSize: "14px",
  margin: "0 0 24px",
  textAlign: "center" as const,
  lineHeight: "1.6",
}

const footerButtonContainer = {
  margin: "0 0 32px",
  textAlign: "center" as const,
}

const footerButton = {
  backgroundColor: "#ff6b35",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "12px 24px",
  borderRadius: "6px",
  display: "inline-block",
  textAlign: "center" as const,
}

const socialRow = {
  margin: "0 0 32px",
}

const socialColumn = {
  textAlign: "center" as const,
  padding: "0 8px",
}

const socialLink = {
  display: "inline-block",
}

const footerDisclaimer = {
  color: "#999999",
  fontSize: "12px",
  lineHeight: "1.5",
  margin: "0 0 16px",
  textAlign: "center" as const,
}

const footerLink = {
  color: "#ff6b35",
  textDecoration: "underline",
}

const footerCopyright = {
  color: "#999999",
  fontSize: "12px",
  margin: "0",
  textAlign: "center" as const,
}
