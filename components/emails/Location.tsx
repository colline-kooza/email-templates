import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Img,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export const Location = () => (
  <Html>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>{`
        @media only screen and (max-width: 600px) {
          .mobile-padding { padding: 20px 16px !important; }
          .mobile-text { font-size: 14px !important; }
          .mobile-heading { font-size: 24px !important; }
          .mobile-large-heading { font-size: 25px !important; }
          .mobile-full-width { width: 100% !important; }
          .mobile-center { text-align: center !important; }
          .mobile-button { 
            width: 100% !important;
            padding: 12px 20px !important;
            font-size: 14px !important;
            max-width: 200px !important;
            margin: 10px auto !important;
            display: block !important;
          }
          .mobile-nav { display: none !important; }
          .mobile-nav-footer { 
            display: block !important;
            text-align: center !important;
          }
          .mobile-nav-footer td {
            display: block !important;
            padding: 5px 0 !important;
          }
          .mobile-social-icon { width: 28px !important; height: 28px !important; margin: 0 5px !important; }
          .mobile-location-icon { width: 60px !important; height: 60px !important; }
        }
      `}</style>
    </Head>
    <Preview>You are now ready to tuck in - Welcome to our service</Preview>
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
                          <td style={navSeparator}>|</td>
                          <td style={navItem}>
                            <Link href="#" style={navLink}>
                              Page
                            </Link>
                          </td>
                          <td style={navSeparator}>|</td>
                          <td style={navItem}>
                            <Link href="#" style={navLink}>
                              About US
                            </Link>
                          </td>
                          <td style={navSeparator}>|</td>
                          <td style={navItem}>
                            <Link href="#" style={navLink}>
                              Contact Us
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
          <div style={iconContainer}>
            <img
              src="https://cdn.templates.unlayer.com/assets/1694154822924-Product-Onboarding.gif"
              alt=""
              className="h-[40vh] object-cover w-full"
            />
          </div>
          {/* Main Content Section */}
          <Section style={contentSection} className="mobile-padding">
            <Row>
              <Column align="center">
                {/* Location Icon */}

                {/* Main Heading */}
                <Heading style={mainHeading} className="mobile-large-heading">
                  You are now ready to tuck in
                </Heading>

                {/* Content Text */}
                <Text style={contentText} className="mobile-text">
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the
                  leap into electronic typesetting, remaining essentially
                  unchanged. Lorem Ipsum is simply dummy text of the printing
                  and type setting industry.
                </Text>

                <Text style={contentText} className="mobile-text">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of
                  type.
                </Text>

                {/* Read More Button */}
                <table
                  cellPadding="0"
                  cellSpacing="0"
                  border={0}
                  style={buttonTable}
                >
                  <tr>
                    <td>
                      <Link
                        href="#"
                        style={readMoreButton}
                        className="mobile-button"
                      >
                        Read More
                      </Link>
                    </td>
                  </tr>
                </table>

                {/* Contact Information */}
                <Text style={contactText} className="mobile-text text-center">
                  If you have any questions, please email us at{" "}
                  <Link
                    href="mailto:customerservice@example.com"
                    style={emailLink}
                    className="text-orange-400"
                  >
                    customerservice@example.com
                  </Link>{" "}
                  or visit our FAQ. You can also chat with a real live human
                  during our operating hours. They can answer questions about
                  your account.
                </Text>
              </Column>
            </Row>
          </Section>
          <hr />
          {/* Footer Section */}
          <Section style={footerSection}>
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
                        style={socialIconsInnerTable}
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
            <Row>
              <Column>
                {/* Social Media Section */}
                <Section style={socialSection} className="mobile-padding">
                  <Text
                    style={contactText}
                    className="mobile-text text-white text-center"
                  >
                    If you have any questions, please email us at{" "}
                    <Link
                      href="mailto:customerservice@example.com"
                      style={emailLink}
                      className="text-orange-400"
                    >
                      customerservice@example.com
                    </Link>{" "}
                    or visit our FAQ. You can also chat with a real live human
                    during our operating hours. They can answer questions about
                    your account.
                  </Text>
                </Section>
                {/* Footer Address */}
                <Text style={footerAddress} className="mobile-text">
                  2261 Market Street #4667 San Francisco, CA 94114 All rights
                  reserved
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default Location;

// Styles
const main = {
  backgroundColor: "#e5e5e5",
  fontFamily:
    "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
  margin: "0",
  padding: "20px 0",
};

const container = {
  margin: "0 auto",
  width: "100%",
  maxWidth: "600px",
  backgroundColor: "#2d5a5a",
  color: "#ffffff",
  borderRadius: "0",
  overflow: "hidden",
};

// Header Styles
const headerSection = {
  //   backgroundColor: "#2d5a5a",
  padding: "15px 25px",
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
  padding: "0 8px",
};

const navSeparator = {
  color: "#ffffff",
  fontSize: "14px",
  padding: "0 5px",
  opacity: 0.7,
};

const navLink = {
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "400",
  textDecoration: "none",
};

// Content Section Styles
const contentSection = {
  padding: "30px 40px",
};

const iconContainer = {
  marginBottom: "30px",
};

const mainHeading = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "600",
  margin: "0 0 30px",
  textAlign: "center" as const,
  lineHeight: "1.2",
};

const contentText = {
  color: "#ffffff",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0 0 20px",
  textAlign: "left" as const,
};

const buttonTable = {
  margin: "30px auto",
};

const readMoreButton = {
  backgroundColor: "#ffffff",
  color: "#2d5a5a",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "12px 30px",
  border: "2px solid #2d5a5a",
  borderRadius: "4px",
  display: "inline-block",
  textAlign: "center" as const,
};

const contactText = {
  color: "#ffffff",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "30px 0",
};

const emailLink = {
  color: "#2d5a5a",
  textDecoration: "underline",
};

// Social Media Styles
const socialIconsTable = {
  width: "100%",
  margin: "30px 0 0",
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
  borderRadius: "4px",
  display: "inline-block",
  textAlign: "center" as const,
  lineHeight: "32px",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
};

// Footer Styles
const footerSection = {
  backgroundColor: "#2d5a5a",
  padding: "25px",
};

// Social Section Styles
const socialSection = {
  //   backgroundColor: "#ffffff",
  padding: "20px 10px",
};

const footerNavTable = {
  width: "100%",
  marginBottom: "20px",
};

const footerNavItem = {
  textAlign: "center" as const,
  padding: "0 8px",
};

const footerNavSeparator = {
  color: "#ffffff",
  fontSize: "14px",
  textAlign: "center" as const,
  padding: "0 5px",
  opacity: 0.7,
};

const footerNavLink = {
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "400",
  textDecoration: "none",
};

const footerAddress = {
  color: "#ffffff",
  fontSize: "12px",
  textAlign: "center" as const,
  margin: "0",
  opacity: 0.8,
  lineHeight: "1.4",
};
