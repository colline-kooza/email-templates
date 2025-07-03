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
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export const DeploymentEmail = () => (
  <Html>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>{`
        @media only screen and (max-width: 600px) {
          .mobile-padding { padding: 20px 16px !important; }
          .mobile-text { font-size: 14px !important; }
          .mobile-heading { font-size: 20px !important; }
          .mobile-large-heading { font-size: 28px !important; }
          .mobile-hero-heading { font-size: 24px !important; }
          .mobile-full-width { width: 100% !important; }
          .mobile-center { text-align: center !important; }
          .mobile-button { 
            width: 100% !important;
            padding: 12px 20px !important;
            font-size: 14px !important;
            max-width: 200px !important;
            margin: 15px auto !important;
            display: block !important;
          }
          .mobile-nav { display: none !important; }
          .mobile-hero-image { width: 100% !important; height: auto !important; }
          .mobile-feature-icon { width: 60px !important; height: 60px !important; }
          .mobile-social-icon { width: 28px !important; height: 28px !important; margin: 0 5px !important; }
          .mobile-feature-section { margin-bottom: 30px !important; }
        }
      `}</style>
    </Head>
    <Preview>
      Welcome to Unlayer - Get Your Deploy On with Modern DevOps Tools
    </Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          {/* Header Section */}
          <Section style={headerSection}>
            <Row>
              <Column>
                <table cellPadding="0" cellSpacing="0" border={0} width="100%">
                  <tr>
                    <td style={logoCell}>
                      <Text style={logoText}>[Your Logo]</Text>
                    </td>
                    <td style={navCell} className="mobile-nav">
                      <table cellPadding="0" cellSpacing="0" border={0}>
                        <tr>
                          <td style={navItem}>
                            <Link href="#" style={navLink}>
                              Home
                            </Link>
                          </td>
                          <td style={navItem}>
                            <Link href="#" style={navLink}>
                              Page
                            </Link>
                          </td>
                          <td style={navItem}>
                            <Link href="#" style={navLink}>
                              About Us
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

          {/* Hero Section */}
          <Section style={heroSection}>
            <Row>
              <Column align="center">
                <Text style={welcomeText} className="mobile-text">
                  Welcome to Unlayer. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                  minim veniam, quis nostrud.
                </Text>

                <Heading style={heroHeading} className="mobile-hero-heading">
                  GIT YOUR DEPLOY ON
                </Heading>

                <Img
                  src="https://cdn.templates.unlayer.com/assets/1662615515164-head.png"
                  alt="DevOps deployment illustration"
                  style={heroImage}
                  className="mobile-hero-image"
                />
              </Column>
            </Row>
          </Section>

          {/* Main Content Section */}
          <Section style={contentSection} className="mobile-padding">
            <Row>
              <Column>
                <Text style={contentText} className="mobile-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud.
                </Text>

                <table
                  cellPadding="0"
                  cellSpacing="0"
                  border={0}
                  style={buttonTable}
                >
                  <tr>
                    <td align="center">
                      <Link
                        href="#"
                        style={learnMoreButton}
                        className="mobile-button"
                      >
                        Learn More
                      </Link>
                    </td>
                  </tr>
                </table>
              </Column>
            </Row>
          </Section>

          {/* Features Section */}
          <Section style={featuresSection} className="mobile-padding">
            <Row>
              <Column>
                {/* Microservices */}
                <div style={featureItem} className="mobile-feature-section">
                  <table
                    cellPadding="0"
                    cellSpacing="0"
                    border={0}
                    width="100%"
                  >
                    <tr>
                      <td style={featureIconCell}>
                        <img
                          src="https://cdn.templates.unlayer.com/assets/1662621250911-Asset%2010.png"
                          alt=""
                          className="object-contain h-32"
                        />
                      </td>
                      <td style={featureContentCell}>
                        <Heading
                          style={featureHeading}
                          className="mobile-heading"
                        >
                          Microservices
                        </Heading>
                        <Text style={featureText} className="mobile-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt.
                        </Text>
                        <Link href="#" style={featureLink}>
                          Learn More
                        </Link>
                      </td>
                    </tr>
                  </table>
                </div>

                {/* Containerization */}
                <div style={featureItem} className="mobile-feature-section">
                  <table
                    cellPadding="0"
                    cellSpacing="0"
                    border={0}
                    width="100%"
                  >
                    <tr>
                       <td style={featureIconCell}>
                        <img
                          src="https://cdn.templates.unlayer.com/assets/1663565944931-Asset%2015.png"
                          alt=""
                          className="object-contain h-32"
                        />
                      </td>
                      <td style={featureContentCell}>
                        <Heading
                          style={featureHeading}
                          className="mobile-heading"
                        >
                          Containerization
                        </Heading>
                        <Text style={featureText} className="mobile-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt.
                        </Text>
                        <Link href="#" style={featureLink}>
                          Learn More
                        </Link>
                      </td>
                    </tr>
                  </table>
                </div>

                {/* Continuous Delivery */}
                <div style={featureItem} className="mobile-feature-section">
                  <table
                    cellPadding="0"
                    cellSpacing="0"
                    border={0}
                    width="100%"
                  >
                    <tr>
                      <td style={featureIconCell}>
                        <img
                          src="https://cdn.templates.unlayer.com/assets/1662621658190-Asset%2015.png"
                          alt=""
                          className="object-contain h-32"
                        />
                      </td>
                      <td style={featureContentCell}>
                        <Heading
                          style={featureHeading}
                          className="mobile-heading"
                        >
                          Continuous Delivery
                        </Heading>
                        <Text style={featureText} className="mobile-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt.
                        </Text>
                        <Link href="#" style={featureLink}>
                          Learn More
                        </Link>
                      </td>
                    </tr>
                  </table>
                </div>

                {/* DevOps */}
                <div style={featureItem} className="mobile-feature-section">
                  <table
                    cellPadding="0"
                    cellSpacing="0"
                    border={0}
                    width="100%"
                  >
                    <tr>
                       <td style={featureIconCell}>
                        <img
                          src="https://cdn.templates.unlayer.com/assets/1663565947290-Asset%2016.png"
                          alt=""
                          className="object-contain h-32"
                        />
                      </td>
                      <td style={featureContentCell}>
                        <Heading
                          style={featureHeading}
                          className="mobile-heading"
                        >
                          DevOps
                        </Heading>
                        <Text style={featureText} className="mobile-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt.
                        </Text>
                        <Link href="#" style={featureLink}>
                          Learn More
                        </Link>
                      </td>
                    </tr>
                  </table>
                </div>
              </Column>
            </Row>
          </Section>

          {/* CTA Section */}
          <Section style={ctaSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Text style={ctaText} className="mobile-heading">
                  Happy Deploying
                </Text>

                <table
                  cellPadding="0"
                  cellSpacing="0"
                  border={0}
                  style={buttonTable}
                >
                  <tr>
                    <td align="center">
                      <Link
                        href="#"
                        style={getStartedButton}
                        className="mobile-button"
                      >
                        Get Started
                      </Link>
                    </td>
                  </tr>
                </table>
              </Column>
            </Row>
          </Section>

          {/* Footer Section */}
          <Section style={footerSection} className="mobile-padding">
            <Row>
              <Column align="center">
                {/* Social Media Icons */}
                <Row>
                  <Column align="center">
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      border={0}
                      style={socialIconsTable}
                    >
                      <tr>
                        <td align="center">
                          <table
                            cellPadding="0"
                            cellSpacing="0"
                            border={0}
                            style={socialIconsTable}
                          >
                            <tr>
                              <td style={socialIconCell}>
                                <Link href="#" style={socialLink}>
                                  <Img
                                    src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                                    alt="Instagram"
                                    style={socialIcon}
                                    className="mobile-social-icon"
                                  />
                                </Link>
                              </td>
                              <td style={socialIconCell}>
                                <Link href="#" style={socialLink}>
                                  <Img
                                    src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png"
                                    alt="Twitter"
                                    style={socialIcon}
                                    className="mobile-social-icon"
                                  />
                                </Link>
                              </td>
                              <td style={socialIconCell}>
                                <Link href="#" style={socialLink}>
                                  <Img
                                    src="https://cdn.tools.unlayer.com/social/icons/circle/tripadvisor.png"
                                    alt="WhatsApp"
                                    style={socialIcon}
                                    className="mobile-social-icon"
                                  />
                                </Link>
                              </td>
                              <td style={socialIconCell}>
                                <Link href="#" style={socialLink}>
                                  <Img
                                    src="https://cdn.tools.unlayer.com/social/icons/circle/whatsapp.png"
                                    alt="LinkedIn"
                                    style={socialIcon}
                                    className="mobile-social-icon"
                                  />
                                </Link>
                              </td>
                              <td style={socialIconCell}>
                                <Link href="#" style={socialLink}>
                                  <Img
                                    src="https://cdn.tools.unlayer.com/social/icons/circle/youtube.png"
                                    alt="YouTube"
                                    style={socialIcon}
                                    className="mobile-social-icon"
                                  />
                                </Link>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </Column>
                </Row>

                <Text style={footerAddress} className="mobile-text">
                  2261 Market Street #4667 San Francisco, CA 94114
                </Text>
                <Text style={footerCopyright} className="mobile-text">
                  All rights reserved. Company No. 94114
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
);

export default DeploymentEmail;

// Styles
const main = {
  backgroundColor: "#f5f5f5",
  fontFamily:
    "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
  margin: "0",
  padding: "20px 0",
};

const container = {
  margin: "0 auto",
  width: "100%",
  maxWidth: "600px",
  backgroundColor: "#ffffff",
  borderRadius: "0",
  overflow: "hidden",
};

// Header Styles
const headerSection = {
  backgroundColor: "#1f5299",
  padding: "20px 30px",
};

const logoCell = {
  verticalAlign: "middle" as const,
};

const logoText = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "400",
  margin: "0",
};

const navCell = {
  textAlign: "right" as const,
  verticalAlign: "middle" as const,
};

const navItem = {
  padding: "0 15px",
};

const navLink = {
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "400",
  textDecoration: "none",
};

// Hero Styles
const heroSection = {
  backgroundColor: "#1f5299",
  padding: "30px 40px 50px",
};

const welcomeText = {
  color: "#ffffff",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0 0 30px",
  textAlign: "center" as const,
  opacity: 0.9,
};

const heroHeading = {
  color: "#ffffff",
  fontSize: "32px",
  fontWeight: "800",
  margin: "0 0 40px",
  textAlign: "center" as const,
  letterSpacing: "1px",
};

const heroImage = {
  width: "100%",
  height: "40vh",
  maxWidth: "400px",
  display: "block",
  margin: "0 auto",
  objectFit: "contain" as const,
};

// Content Styles
const contentSection = {
  backgroundColor: "#ffffff",
  padding: "40px",
};

const contentText = {
  color: "#666666",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 30px",
  textAlign: "center" as const,
};

const buttonTable = {
  margin: "0 auto",
};

const learnMoreButton = {
  backgroundColor: "#1f5299",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "12px 30px",
  borderRadius: "4px",
  display: "inline-block",
  textAlign: "center" as const,
};

// Features Styles
const featuresSection = {
  backgroundColor: "#ffffff",
  padding: "20px 0px",
};

const featureItem = {
  marginBottom: "40px",
};

const featureIconCell = {
  width: "100px",
  verticalAlign: "top" as const,
  paddingRight: "20px",
};

const featureIconContainer = {
  textAlign: "center" as const,
};

const featureIconRing = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  border: "4px solid",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  position: "relative" as const,
};

const featureIcon = {
  fontSize: "24px",
  width: "60px",
  height: "60px",
  backgroundColor: "#ffffff",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

const featureContentCell = {
  verticalAlign: "top" as const,
};

const featureHeading = {
  color: "#333333",
  fontSize: "20px",
  fontWeight: "600",
  margin: "0 0 10px",
};

const featureText = {
  color: "#666666",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0 0 10px",
};

const featureLink = {
  color: "#1f5299",
  fontSize: "14px",
  fontWeight: "800",
  textDecoration: "none",
  
};

// CTA Styles
const ctaSection = {
  backgroundColor: "#ffffff",
  padding: "40px",
  borderTop: "1px solid #e0e0e0",
};

const ctaText = {
  color: "#333333",
  fontSize: "24px",
  fontWeight: "800",
  margin: "0 0 25px",
  textAlign: "center" as const,
};

const getStartedButton = {
  backgroundColor: "#1f5299",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "12px 30px",
  borderRadius: "4px",
  display: "inline-block",
  textAlign: "center" as const,
};

// Footer Styles
const footerSection = {
  backgroundColor: "#ffffff",
  padding: "30px 40px",
  borderTop: "1px solid #e0e0e0",
};

const socialIconsTable = {
  width: "100%",
  marginBottom: "20px",
};

const socialIconsInnerTable = {
  margin: "0 auto",
};

const socialIconCell = {
  padding: "0 8px",
};

const socialLink = {
  textDecoration: "none",
};

const socialIcon = {
  width: "32px",
  height: "32px",
//   borderRadius: "4px",
  display: "inline-block",
  textAlign: "center" as const,
  lineHeight: "32px",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
};

const footerAddress = {
  color: "#666666",
  fontSize: "12px",
  textAlign: "center" as const,
  margin: "0 0 5px",
};

const footerCopyright = {
  color: "#666666",
  fontSize: "12px",
  textAlign: "center" as const,
  margin: "0 0 15px",
};

const footerLinks = {
  color: "#666666",
  fontSize: "12px",
  textAlign: "center" as const,
  margin: "0",
};

const footerLink = {
  color: "#666666",
  textDecoration: "underline",
};
