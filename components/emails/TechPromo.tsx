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

export const TechPromo = () => (
  <Html>
    <Head>
      <Font
        fontFamily="Inter"
        fallbackFontFamily={["Arial", "sans-serif"]}
        webFont={{
          url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
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
          .mobile-black-friday { font-size: 32px !important; }
          .mobile-discount { font-size: 48px !important; }
          .mobile-full-width { width: 100% !important; }
          .mobile-center { text-align: center !important; }
          .mobile-hero-image { height: 300px !important; }
          .mobile-button {
            margin: 0 0 12px 0 !important;
            display: block !important;
            text-align: center !important;
          }
          .mobile-social-icon {
            margin: 0 6px !important;
          }
        }
      `}</style>
    </Head>
    <Preview>Black Friday Sale - Save up to 50% on All Items | Limited Time Only</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          {/* Header Section */}
          <Section style={headerSection}>
            <Row>
              <Column align="center">
                <div style={saleOnNowBanner}>
                  <Text style={saleOnNowText}>SALE ON NOW</Text>
                </div>

                <Heading style={blackFridayHeading} className="mobile-black-friday">
                  BLACK
                </Heading>
                <div style={fridayContainer}>
                  <Heading style={fridayHeading} className="mobile-black-friday">
                    FRIDAY
                  </Heading>
                </div>

                <Text style={limitedTimeText}>LIMITED TIME ONLY</Text>
              </Column>
            </Row>
          </Section>

          {/* Discount Section */}
          <Section style={discountSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Text style={saveUpToText}>SAVE UP TO</Text>
                <Heading style={discountHeading} className="mobile-discount">
                  50%
                </Heading>
                <Text style={onAllItemsText}>ON ALL ITEMS</Text>

                <div style={buttonContainer}>
                  <Link href="#" style={shopNowButton} className="mobile-button">
                    Shop Now
                  </Link>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Hero Image Section */}
          <Section style={heroSection}>
            <Row>
              <Column align="center">
                <div style={heroImageContainer}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1668421773977-16630.png"
                    alt="Person wearing premium headphones in dramatic lighting"
                    style={heroImage}
                    className="mobile-full-width mobile-hero-image"
                  />
                </div>
              </Column>
            </Row>
          </Section>

          {/* Footer Section */}
          <Section style={footerSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Text style={footerText} className="mobile-text">
                  If you have any questions, please email us at{" "}
                  <Link href="mailto:customer.success@company.com" style={footerLink}>
                    customer.success@company.com
                  </Link>{" "}
                  or visit our FAQS. You can also chat with a real live human during our operating hours. They can
                  answer questions about your account.
                </Text>

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

                {/* Navigation Links */}
                <div style={navContainer}>
                  <Link href="#" style={navLink}>
                    Home
                  </Link>
                  <Text style={navSeparator}>|</Text>
                  <Link href="#" style={navLink}>
                    Page
                  </Link>
                  <Text style={navSeparator}>|</Text>
                  <Link href="#" style={navLink}>
                    About Us
                  </Link>
                  <Text style={navSeparator}>|</Text>
                  <Link href="#" style={navLink}>
                    Contact US
                  </Link>
                </div>

                <Text style={addressText} className="mobile-text">
                  2261 Market Street #4667 San Francisco, CA 94114 All rights reserved
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
)

export default TechPromo

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
  backgroundColor: "#080f16",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
}

// Header Section Styles
const headerSection = {
  
  padding: "40px 40px 30px",
  textAlign: "center" as const,
}

const saleOnNowBanner = {
  backgroundColor: "#fbbf24",
  padding: "6px 20px",
  borderRadius: "20px",
  display: "inline-block",
  margin: "0 0 25px",
}

const saleOnNowText = {
  color: "#000000",
  fontSize: "12px",
  fontWeight: "700",
  margin: "0",
  textAlign: "center" as const,
  letterSpacing: "1px",
}

const blackFridayHeading = {
  color: "#ffffff",
  fontSize: "42px",
  fontWeight: "900",
  lineHeight: "0.9",
  margin: "0",
  textAlign: "center" as const,
  letterSpacing: "2px",
}

const fridayContainer = {
  backgroundColor: "#10b981",
  padding: "8px 20px",
  borderRadius: "8px",
  display: "inline-block",
  margin: "8px 0 20px",
}

const fridayHeading = {
  color: "#000000",
  fontSize: "42px",
  fontWeight: "900",
  lineHeight: "0.9",
  margin: "0",
  textAlign: "center" as const,
  letterSpacing: "2px",
}

const limitedTimeText = {
  color: "#fbbf24",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0",
  textAlign: "center" as const,
  letterSpacing: "2px",
}

// Discount Section Styles
const discountSection = {
  
  padding: "30px 40px 40px",
  textAlign: "center" as const,
}

const saveUpToText = {
  color: "#ffffff",
  fontSize: "18px",
  fontWeight: "600",
  margin: "0 0 10px",
  textAlign: "center" as const,
  letterSpacing: "2px",
}

const discountHeading = {
  color: "#10b981",
  fontSize: "64px",
  fontWeight: "900",
  lineHeight: "1",
  margin: "0 0 10px",
  textAlign: "center" as const,
  letterSpacing: "1px",
}

const onAllItemsText = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "500",
  margin: "0 0 30px",
  textAlign: "center" as const,
  letterSpacing: "1px",
}

const buttonContainer = {
  textAlign: "center" as const,
}

const shopNowButton = {
  backgroundColor: "#10b981",
  color: "#000000",
  fontSize: "16px",
  fontWeight: "700",
  textDecoration: "none",
  padding: "14px 40px",
  borderRadius: "6px",
  display: "inline-block",
  textAlign: "center" as const,
  letterSpacing: "1px",
  minWidth: "150px",
}

// Hero Section Styles
const heroSection = {
  backgroundColor: "#1e293b",
  padding: "0",
}

const heroImageContainer = {
  textAlign: "center" as const,
  overflow: "hidden",
}

const heroImage = {
  width: "100%",
  maxWidth: "600px",
  height: "400px",
  objectFit: "cover" as const,
  display: "block",
  margin: "0 auto",
  filter: "grayscale(20%) contrast(1.1)",
}

// Footer Section Styles
const footerSection = {
  backgroundColor: "#f1f5f9",
  padding: "40px 40px",
  textAlign: "center" as const,
}

const footerText = {
  color: "#64748b",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0 0 30px",
  textAlign: "center" as const,
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto",
}

const footerLink = {
  color: "#3b82f6",
  textDecoration: "underline",
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

const navContainer = {
  textAlign: "center" as const,
  margin: "0 0 20px",
}

const navLink = {
  color: "#64748b",
  fontSize: "14px",
  fontWeight: "500",
  textDecoration: "none",
  margin: "0 8px",
}

const navSeparator = {
  color: "#cbd5e1",
  fontSize: "14px",
  margin: "0 8px",
}

const addressText = {
  color: "#94a3b8",
  fontSize: "12px",
  lineHeight: "1.5",
  margin: "0",
  textAlign: "center" as const,
}
