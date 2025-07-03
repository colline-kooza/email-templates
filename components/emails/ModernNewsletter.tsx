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
} from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

export const ModernNewsletter = () => (
  <Html>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>{`
        @media only screen and (max-width: 600px) {
          .mobile-padding { padding: 20px 16px !important; }
          .mobile-text { font-size: 14px !important; }
          .mobile-heading { font-size: 20px !important; }
          .mobile-large-heading { font-size: 28px !important; }
          .mobile-full-width { width: 100% !important; }
          .mobile-center { text-align: center !important; }
          .mobile-button { 
            width: 100% !important;
            padding: 12px 20px !important;
            font-size: 14px !important;
            max-width: 200px !important;
            margin: 5px auto !important;
            display: block !important;
          }
          .mobile-hero-image { width: 100% !important; height: auto !important; }
          .mobile-content-image { width: 100% !important; height: auto !important; margin-bottom: 20px !important; }
          .mobile-button-group { 
            display: block !important;
            text-align: center !important;
          }
          .mobile-button-group td {
            display: block !important;
            width: 100% !important;
            padding: 5px 0 !important;
          }
          .mobile-social-icon { width: 28px !important; height: 28px !important; margin: 0 3px !important; }
          .mobile-card-layout {
            display: block !important;
          }
          .mobile-card-layout td {
            display: block !important;
            width: 100% !important;
            padding: 0 !important;
            text-align: center !important;
          }
          .mobile-card-layout .mobile-content-image-cell {
            padding-right: 0 !important;
            padding-bottom: 20px !important;
          }
        }
      `}</style>
    </Head>
    <Preview>New Post - Check out our latest content and updates</Preview>
    <Tailwind>
        <Body style={main}>
      <Container style={container}>
        {/* Header Section */}
        <Section style={headerSection}>
          <Row>
            <Column align="center">
              <Text style={logoText}>YOUR LOGO</Text>
            </Column>
          </Row>
        </Section>

        {/* Hero Section */}
        <Section style={heroSection} className="bg-[url('https://res.cloudinary.com/dirpuqqib/image/upload/v1750759769/1613282714419-img_s6bbib.png')] bg-cover bg-center">
          <Row>
            <Column>
              <table cellPadding="0" cellSpacing="0" border={0} width="100%">
                <tr>
                  <td style={heroContentCell}>
                    <Text style={newLabel}>NEW</Text>
                    <Heading style={heroHeading} className="mobile-large-heading">
                      POST
                    </Heading>
                    <Text style={heroText} className="mobile-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua
                    </Text>
                    <table cellPadding="0" cellSpacing="0" border={0}>
                      <tr>
                        <td>
                          <Link href="#" style={viewNowButton} className="mobile-button">
                            VIEW NOW
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

        {/* Content Section 1 */}
        <Section style={contentSection1} className="mobile-padding">
          <Row>
            <Column>
              <Heading style={contentHeading} className="mobile-heading">
                LOREM IPSUM
              </Heading>
              <Text style={contentText} className="mobile-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua
              </Text>

              <table
                cellPadding="0"
                cellSpacing="0"
                border={0}
                style={buttonGroupTable}
                className="mobile-button-group"
              >
                <tr>
                  <td style={buttonCell}>
                    <Link href="#" style={readMoreButton} className="mobile-button">
                      Read More
                    </Link>
                  </td>
                  <td style={buttonCell}>
                    <Link href="#" style={viewMoreButton} className="mobile-button">
                      View More
                    </Link>
                  </td>
                </tr>
              </table>
            </Column>
          </Row>
        </Section>

        {/* Gradient Bar 1 */}
        <Section style={gradientBarSection}>
          <Row>
            <Column>
              <div style={gradientBar}></div>
            </Column>
          </Row>
        </Section>

        {/* Subscribe Section */}
        <Section style={subscribeSection}>
          <Row>
            <Column align="center">
              <div style={subscribeOverlay}>
                <Heading style={subscribeHeading} className="mobile-large-heading">
                  SUBSCRIBE
                </Heading>
                <Text style={subscribeSubheading} className="mobile-text">
                  LOREM IPSUM DOLOR
                </Text>
              </div>
            </Column>
          </Row>
        </Section>

        {/* Gradient Bar 2 */}
        <Section style={gradientBarSection}>
          <Row>
            <Column>
              <div style={gradientBar}></div>
            </Column>
          </Row>
        </Section>

        {/* Content Section 2 */}
        <Section style={contentSection2} className="mobile-padding">
          <Row>
            <Column>
              <table cellPadding="0" cellSpacing="0" border={0} width="100%" className="mobile-card-layout">
                <tr>
                  <td style={contentImageCell} className="mobile-content-image-cell">
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1613284963668-467962"
                      alt="Woman with camera"
                      style={contentImage}
                      className="mobile-content-image"
                    />
                  </td>
                  <td style={contentTextCell}>
                    <Heading style={contentHeading2} className="mobile-heading">
                      LOREM IPSUM
                    </Heading>
                    <Text style={contentText2} className="mobile-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </Text>
                    <Link href="#" style={readMoreButton2} className="mobile-button">
                      READ MORE
                    </Link>
                  </td>
                </tr>
              </table>
            </Column>
          </Row>
        </Section>
        {/* Content Section 2 */}
        <Section style={contentSection2} className="mobile-padding">
          <Row>
            <Column>
              <table cellPadding="0" cellSpacing="0" border={0} width="100%" className="mobile-card-layout">
                <tr>
                  <td style={contentImageCell} className="mobile-content-image-cell">
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1613284963668-467962"
                      alt="Woman with camera"
                      style={contentImage}
                      className="mobile-content-image"
                    />
                  </td>
                  <td style={contentTextCell}>
                    <Heading style={contentHeading2} className="mobile-heading">
                      LOREM IPSUM
                    </Heading>
                    <Text style={contentText2} className="mobile-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </Text>
                    <Link href="#" style={readMoreButton3} className="mobile-button">
                      READ MORE
                    </Link>
                  </td>
                </tr>
              </table>
            </Column>
          </Row>
        </Section>

       

        {/* Footer Content Section */}
        <Section style={footerContentSection} className="mobile-padding">
          <Row>
            <Column align="center">
              <Text style={footerContentText} className="mobile-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </Text>

              <table cellPadding="0" cellSpacing="0" border={0}>
                <tr>
                  <td>
                    <Link href="#" style={shareButton} className="mobile-button">
                      📤 SHARE
                    </Link>
                  </td>
                </tr>
              </table>
            </Column>
          </Row>
        </Section>

        {/* Social Media Section */}
        <Section style={socialSection} className="mobile-padding">
          <Row>
            <Column align="center">
              <table cellPadding="0" cellSpacing="0" border={0} style={socialIconsTable}>
                <tr>
                  <td align="center">
                    <table cellPadding="0" cellSpacing="0" border={0} style={socialIconsInnerTable}>
                      <tr>
                        <td style={socialIconCell}>
                          <Link href="#" style={socialLink}>
                            <Img
                              src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                              alt="Instagram"
                              style={socialIconImage}
                              className="mobile-social-icon"
                            />
                          </Link>
                        </td>
                        <td style={socialIconCell}>
                          <Link href="#" style={socialLink}>
                            <Img
                              src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png"
                              alt="Twitter"
                              style={socialIconImage}
                              className="mobile-social-icon"
                            />
                          </Link>
                        </td>
                        <td style={socialIconCell}>
                          <Link href="#" style={socialLink}>
                            <Img
                              src="https://cdn.tools.unlayer.com/social/icons/circle/tripadvisor.png"
                              alt="WhatsApp"
                              style={socialIconImage}
                              className="mobile-social-icon"
                            />
                          </Link>
                        </td>
                        <td style={socialIconCell}>
                          <Link href="#" style={socialLink}>
                            <Img
                              src="https://cdn.tools.unlayer.com/social/icons/circle/whatsapp.png"
                              alt="LinkedIn"
                              style={socialIconImage}
                              className="mobile-social-icon"
                            />
                          </Link>
                        </td>
                        <td style={socialIconCell}>
                          <Link href="#" style={socialLink}>
                            <Img
                              src="https://cdn.tools.unlayer.com/social/icons/circle/youtube.png"
                              alt="YouTube"
                              style={socialIconImage}
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
        </Section>

        {/* Unsubscribe Section */}
        <Section style={unsubscribeSection} className="mobile-padding">
          <Row>
            <Column align="center">
              <Text style={unsubscribeText} className="mobile-text">
                You are receiving this email because you asked us about regular newsletter. You can unsubscribe from
                these emails.
              </Text>
            </Column>
          </Row>
        </Section>
      </Container>
    </Body>
    </Tailwind>
  </Html>
)

export default ModernNewsletter

// Styles
const main = {
  backgroundColor: "#f0f0f0",
  fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
  margin: "0",
  padding: "20px 0",
}

const container = {
  margin: "0 auto",
  width: "100%",
  maxWidth: "600px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  overflow: "hidden",
}

// Header Styles
const headerSection = {
  backgroundColor: "#ffffff",
  padding: "20px 0",
  borderBottom: "1px solid #e0e0e0",
}

const logoText = {
  color: "#333333",
  fontSize: "14px",
  fontWeight: "600",
  textAlign: "center" as const,
  margin: "0",
  letterSpacing: "2px",
  textTransform: "uppercase" as const,
}

// Hero Styles
const heroSection = {
  backgroundColor: "#5a6c7d",
  padding: "40px",
  backgroundImage: "linear-gradient(135deg, #5a6c7d 0%, #4a5a6b 100%)",
}

const heroContentCell = {
  verticalAlign: "middle" as const,
  paddingRight: "30px",
}

const heroImageCell = {
  verticalAlign: "middle" as const,
  width: "200px",
}

const newLabel = {
  color: "#ff69b4",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0 0 5px",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
}

const heroHeading = {
  color: "#ffffff",
  fontSize: "36px",
  fontWeight: "700",
  margin: "0 0 15px",
  letterSpacing: "2px",
}

const heroText = {
  color: "#ffffff",
  fontSize: "14px",
  margin: "0 0 25px",
  lineHeight: "1.5",
  opacity: 0.9,
}

const heroImage = {
  width: "100%",
  height: "auto",
  borderRadius: "8px",
}

const viewNowButton = {
  backgroundColor: "#ff69b4",
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "12px 25px",
  borderRadius: "4px",
  display: "inline-block",
  textAlign: "center" as const,
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
}

// Content Section 1 Styles
const contentSection1 = {
  backgroundColor: "#ffffff",
  padding: "40px",
}

const contentHeading = {
  color: "#333333",
  fontSize: "24px",
  fontWeight: "700",
  margin: "0 0 15px",
  letterSpacing: "1px",
}

const contentText = {
  color: "#666666",
  fontSize: "14px",
  margin: "0 0 25px",
  lineHeight: "1.5",
}

const buttonGroupTable = {
  margin: "0",
}

const buttonCell = {
  paddingRight: "15px",
}

const readMoreButton = {
  backgroundColor: "#ff69b4",
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "10px 20px",
  borderRadius: "4px",
  display: "inline-block",
  textAlign: "center" as const,
  textTransform: "uppercase" as const,
}

const viewMoreButton = {
  backgroundColor: "#333333",
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "10px 20px",
  borderRadius: "4px",
  display: "inline-block",
  textAlign: "center" as const,
  textTransform: "uppercase" as const,
}

// Gradient Bar Styles
const gradientBarSection = {
  backgroundColor: "#ffffff",
  padding: "0",
}

const gradientBar = {
  height: "8px",
  background: "linear-gradient(90deg, #ff69b4 0%, #20b2aa 100%)",
  width: "100%",
}

// Subscribe Styles
const subscribeSection = {
  backgroundColor: "#333333",
  padding: "60px 40px",
  backgroundImage: "url('https://res.cloudinary.com/dirpuqqib/image/upload/v1750760052/1613283733005-d_ey2fm2.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative" as const,
}

const subscribeOverlay = {
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  padding: "40px",
  borderRadius: "8px",
  textAlign: "center" as const,
}

const subscribeHeading = {
  color: "#ffffff",
  fontSize: "36px",
  fontWeight: "700",
  margin: "0 0 10px",
  letterSpacing: "3px",
}

const subscribeSubheading = {
  color: "#ffffff",
  fontSize: "16px",
  margin: "0",
  letterSpacing: "2px",
  opacity: 0.9,
}

// Content Section 2 Styles
const contentSection2 = {
  backgroundColor: "#ffffff",
  padding: "40px",
}

const contentImageCell = {
  width: "200px",
  verticalAlign: "top" as const,
  paddingRight: "30px",
}

const contentTextCell = {
  verticalAlign: "top" as const,
}

const contentImage = {
  width: "100%",
  height: "auto",
  borderRadius: "8px",
}

const contentHeading2 = {
  color: "#333333",
  fontSize: "20px",
  fontWeight: "700",
  margin: "0 0 15px",
  letterSpacing: "1px",
}

const contentText2 = {
  color: "#666666",
  fontSize: "14px",
  margin: "0 0 15px",
  lineHeight: "1.5",
}

const readMoreButton2 = {
  backgroundColor: "#ff69b4",
  color: "#ffffff",
  fontSize: "11px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "8px 18px",
  borderRadius: "4px",
  display: "inline-block",
  textAlign: "center" as const,
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
}

// Content Section 3 Styles
const contentSection3 = {
  backgroundColor: "#ffffff",
  padding: "40px",
}

const contentHeading3 = {
  color: "#333333",
  fontSize: "20px",
  fontWeight: "700",
  margin: "0 0 15px",
  letterSpacing: "1px",
}

const contentText3 = {
  color: "#666666",
  fontSize: "14px",
  margin: "0 0 20px",
  lineHeight: "1.5",
}

const readMoreButton3 = {
  backgroundColor: "#20b2aa",
  color: "#ffffff",
  fontSize: "11px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "8px 18px",
  borderRadius: "4px",
  display: "inline-block",
  textAlign: "center" as const,
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
}

// Footer Content Styles
const footerContentSection = {
  backgroundColor: "#ffffff",
  padding: "40px",
}

const footerContentText = {
  color: "#666666",
  fontSize: "14px",
  textAlign: "center" as const,
  margin: "0 0 25px",
  lineHeight: "1.5",
}

const shareButton = {
  backgroundColor: "#20b2aa",
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "10px 25px",
  borderRadius: "4px",
  display: "inline-block",
  textAlign: "center" as const,
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
}

// Social Media Styles
const socialSection = {
  backgroundColor: "#ffffff",
  padding: "30px 40px",
}

const socialIconsTable = {
  width: "100%",
}

const socialIconsInnerTable = {
  margin: "0 auto",
}

const socialIconCell = {
  padding: "0 8px",
}

const socialLink = {
  textDecoration: "none",
}

const socialIcon = {
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  display: "inline-block",
  textAlign: "center" as const,
  lineHeight: "36px",
  color: "#ffffff",
  fontSize: "14px",
}

// Unsubscribe Styles
const unsubscribeSection = {
  backgroundColor: "#ffffff",
  padding: "20px 40px 40px",
}

const unsubscribeText = {
  color: "#999999",
  fontSize: "11px",
  textAlign: "center" as const,
  margin: "0",
  lineHeight: "1.4",
}

const socialIconImage = {
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  display: "inline-block",
  padding: "8px",
  backgroundColor: "#f0f0f0",
}
