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
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export const CompTechEmail = () => (
  <Html>
    <Head>
      <Font
        fontFamily="DM Sans"
        fallbackFontFamily={["Arial", "sans-serif"]}
        webFont={{
          url: "https://fonts.gstatic.com/s/dmsans/v15/rP2Fp2ywxg089UriCZa4ET-DNl0.woff2",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
    </Head>
    <Preview>Welcome to CompTech - Technology Makes the World a New Place</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          {/* Header Section */}
          <Section style={headerSection}>
            <Row>
              <Column align="center">
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1616317982672-logoco.png"
                  alt="CompTech Logo"
                  width="150"
                  style={logo}
                />
              </Column>
            </Row>
            <Row>
              <Column align="center">
                <Heading style={headerHeading}>
                  Technology Makes
                  <br />
                  the World a New Place
                </Heading>
                <Text style={headerText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Hero Image Section */}
          <Section style={heroSection}>
            <Row>
              <Column align="center">
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1616318425389-1.png"
                  alt="Cloud Technology"
                  width="600"
                  style={heroImage}
                />
              </Column>
            </Row>
          </Section>

          {/* Welcome Section */}
          <Section style={welcomeSection}>
            <Row>
              <Column align="center">
                <Heading style={welcomeHeading}>Welcome To Our Company</Heading>
                <Text style={welcomeText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <div style={welcomeImageContainer}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1616320079167-354438"
                    alt="Code Image"
                    width="200"
                    style={welcomeImage}
                  />
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1616320098467-537726"
                    alt="Data Center Image"
                    width="200"
                    style={welcomeImage}
                  />
                </div>
                <div style={welcomeButtonContainer}>
                  <Link href="#" style={welcomeButton}>
                    Register
                  </Link>
                </div>
              </Column>
            </Row>
          </Section>

          {/* What We Do Section */}
          <Section style={whatWeDoSection}>
            <Row>
              <Column align="center">
                <Heading style={whatWeDoHeading}>What We Do?</Heading>
                <Text style={whatWeDoText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <div style={iconContainer}>
                  <div style={iconItem}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1616321903589-1.png"
                      alt="Innovation Icon"
                      width="50"
                      style={icon}
                    />
                    <Text style={iconText}>Lorem ipsum</Text>
                  </div>
                  <div style={iconItem}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1616322012000-2.png"
                      alt="Global Icon"
                      width="50"
                      style={icon}
                    />
                    <Text style={iconText}>Lorem ipsum</Text>
                  </div>
                  <div style={iconItem}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1616322100419-3.png"
                      alt="Support Icon"
                      width="50"
                      style={icon}
                    />
                    <Text style={iconText}>Lorem ipsum</Text>
                  </div>
                </div>
                <div style={whatWeDoButtonContainer}>
                  <Link href="#" style={whatWeDoButton}>
                    Register
                  </Link>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Contact Section */}
          <Section style={contactSection}>
            <Row>
              <Column align="center">
                <Text style={contactText}>
                  Contact Us: +254-467-890
                  <br />
                  We want to hear from you! Whether you have feedback that might
                  improve our products or services, or a burning question about
                  our company—we’ll help you. Simply reach out to us at
                  info@comptech.com, and we will respond to you within 24
                  business hours, Monday-Friday.
                </Text>
                <div style={socialContainer}>
                  <table role="presentation" style={socialTable}>
                    <tr>
                      <td style={socialTd}>
                        <Link href="https://www.facebook.com" style={socialLink}>
                          <Img
                            src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                            alt="Facebook"
                            width="32"
                            height="32"
                          />
                        </Link>
                      </td>
                      <td style={socialTd}>
                        <Link href="https://www.twitter.com" style={socialLink}>
                          <Img
                            src="https://cdn.tools.unlayer.com/social/icons/rounded/x.png"
                            alt="Twitter"
                            width="32"
                            height="32"
                          />
                        </Link>
                      </td>
                      <td style={socialTd}>
                        <Link href="https://www.linkedin.com" style={socialLink}>
                          <Img
                            src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                            alt="LinkedIn"
                            width="32"
                            height="32"
                          />
                        </Link>
                      </td>
                      <td style={socialTd}>
                        <Link href="https://www.instagram.com" style={socialLink}>
                          <Img
                            src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                            alt="Instagram"
                            width="32"
                            height="32"
                          />
                        </Link>
                      </td>
                    </tr>
                  </table>
                </div>
                <Text style={footerText}>
                  www.helpdesk.com
                  <br />
                  © CompTech Technology Company - All Rights Reserved
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default CompTechEmail;

// Styles
const main = {
  backgroundColor: "#f4f4f4",
  fontFamily: "DM Sans, Arial, sans-serif",
  margin: "0",
  padding: "0",
};

const container = {
  margin: "0 auto",
  width: "600px",
  maxWidth: "100%",
  backgroundColor: "#ffffff",
};

const headerSection = {
  backgroundColor: "#1a1a1a",
  padding: "20px 10px",
  textAlign: "center" as const,
};

const logo = {
  marginBottom: "10px",
};

const headerHeading = {
  margin: "0",
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "700",
  lineHeight: "120%",
  textAlign: "center" as const,
};

const headerText = {
  color: "#cccccc",
  fontSize: "14px",
  lineHeight: "140%",
  textAlign: "center" as const,
  margin: "10px 0",
};

const heroSection = {
  padding: "0",
  backgroundColor: "#1a1a1a",
};

const heroImage = {
  width: "100%",
  maxWidth: "600px",
  height: "auto",
  display: "block",
};

const welcomeSection = {
  backgroundColor: "#ffffff",
  padding: "20px 10px",
  textAlign: "center" as const,
};

const welcomeHeading = {
  color: "#2ecc71",
  fontSize: "24px",
  fontWeight: "700",
  lineHeight: "140%",
  margin: "0 0 10px",
};

const welcomeText = {
  color: "#333333",
  fontSize: "14px",
  lineHeight: "140%",
  margin: "0 0 20px",
};

const welcomeImageContainer = {
  textAlign: "center" as const,
  fontSize: "0", // Remove white space between inline-block elements
};

const welcomeImage = {
  maxWidth: "200px",
  height: "auto",
  display: "inline-block",
  verticalAlign: "middle",
  margin: "0 10px",
};

const welcomeButtonContainer = {
  marginTop: "20px",
  textAlign: "center" as const,
};

const welcomeButton = {
  backgroundColor: "#2ecc71",
  color: "#ffffff",
  fontSize: "14px",
  textDecoration: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  display: "inline-block",
};

const whatWeDoSection = {
  backgroundColor: "#f9f9f9",
  padding: "20px 10px",
  textAlign: "center" as const,
};

const whatWeDoHeading = {
  color: "#2ecc71",
  fontSize: "24px",
  fontWeight: "700",
  lineHeight: "140%",
  margin: "0 0 10px",
};

const whatWeDoText = {
  color: "#333333",
  fontSize: "14px",
  lineHeight: "140%",
  margin: "0 0 20px",
};

const iconContainer = {
  textAlign: "center" as const,
  fontSize: "0", // Remove white space between inline-block elements
  marginBottom: "20px",
};

const iconItem = {
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "center" as const,
  width: "100px",
  margin: "0 10px",
};

const icon = {
  marginBottom: "10px",
  display: "block",
};

const iconText = {
  color: "#333333",
  fontSize: "12px",
  lineHeight: "140%",
};

const whatWeDoButtonContainer = {
  marginTop: "20px",
  textAlign: "center" as const,
};

const whatWeDoButton = {
  backgroundColor: "#2ecc71",
  color: "#ffffff",
  fontSize: "14px",
  textDecoration: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  display: "inline-block",
};

const contactSection = {
  backgroundColor: "#1a1a1a",
  padding: "20px 10px",
  textAlign: "center" as const,
};

const contactText = {
  color: "#ffffff",
  fontSize: "12px",
  lineHeight: "140%",
  margin: "0 0 20px",
};

const socialContainer = {
  textAlign: "center" as const,
  marginBottom: "20px",
};

const socialTable = {
  margin: "0 auto",
  borderCollapse: "collapse" as const,
  borderSpacing: "0",
};

const socialTd = {
  padding: "0 10px",
  textAlign: "center" as const,
};

const socialLink = {
  display: "inline-block",
};

const footerText = {
  color: "#cccccc",
  fontSize: "12px",
  lineHeight: "140%",
  margin: "0",
};

// Media Queries for Responsiveness
const mediaQueries = `
  @media only screen and (max-width: 600px) {
    .container {
      width: 100% !important;
    }
    .heroImage {
      width: 100% !important;
      max-width: 100% !important;
    }
    .welcomeImage {
      width: 100% !important;
      max-width: 100% !important;
      margin: 10px 0;
    }
    .iconContainer {
      display: block;
      textAlign: "center" as const;
    }
    .iconItem {
      display: block;
      width: auto;
      margin: 10px 0;
    }
    .socialContainer {
      display: block;
    }
    .socialTd {
      display: block;
      margin: 10px 0;
    }
  }
`;