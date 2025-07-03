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

export const DeveloperProfile = () => (
  <Html>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>{`
        @media only screen and (max-width: 600px) {
          .mobile-padding { padding: 20px 16px !important; }
          .mobile-text { font-size: 14px !important; }
          .mobile-heading { font-size: 20px !important; }
          .mobile-large-heading { font-size: 24px !important; }
          .mobile-full-width { width: 100% !important; }
          .mobile-center { text-align: center !important; }
          .mobile-button { 
            width: 100% !important;
            padding: 12px 20px !important;
            font-size: 14px !important;
            max-width: 250px !important;
            margin: 20px auto !important;
            display: block !important;
          }
          .mobile-hero-image { width: 120px !important; height: 120px !important; }
          .mobile-document-icon { height: auto !important; }
          .mobile-social-icon { width: 28px !important; height: 28px !important; margin: 0 5px !important; }
        }
      `}</style>
    </Head>
    <Preview>Welcome to the Developer Profile - Complete your account setup</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Hero Section */}
        <Section style={heroSection}>
          <Row>
            <Column align="center">
              {/* Character Illustration */}
                 <div style={documentIconContainer}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1662035847665-header.png"
                  alt="Document checklist"
                  style={documentIcon}
                  className="mobile-document-icon"
                />
              </div>
              <Heading style={heroHeading} className="mobile-large-heading">
                WELCOME TO THE DEVELOPER PROFILE
              </Heading>

              <Text style={heroText} className="mobile-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                lacus vel facilisis.
              </Text>
            </Column>
          </Row>
        </Section>

        {/* Main Content Section */}
        <Section style={contentSection} className="mobile-padding">
          <Row>
            <Column align="center">
              {/* Document Icon */}
              <div style={documentIconContainer}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1662035952950-file.png"
                  alt="Document checklist"
                  style={documentIcon}
                  className="mobile-document-icon"
                />
              </div>

              <Heading style={mainHeading} className="mobile-large-heading">
                YOU ARE ALMOST THERE
              </Heading>

              <Text style={subHeading} className="mobile-heading">
                Complete Account Setup
              </Text>

              <table cellPadding="0" cellSpacing="0" border={0} style={buttonTable}>
                <tr>
                  <td align="center">
                    <Link href="#" style={completeButton} className="mobile-button">
                      Complete Your Profile
                    </Link>
                  </td>
                </tr>
              </table>
            </Column>
          </Row>
        </Section>

        {/* Help Section */}
        <Section style={helpSection} className="mobile-padding">
          <Row>
            <Column>
              <Text style={helpHeading} className="mobile-text">
                <strong>Need help figuring out what to do?</strong> Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Column>
          </Row>
        </Section>

        {/* Pre-Footer Section */}
        <Section style={preFooterSection} className="mobile-padding">
          <Row>
            <Column align="center">
              <Text style={preFooterText} className="mobile-text">
                Get ready for the best way to work with us
              </Text>
            </Column>
          </Row>
        </Section>

        {/* Footer Section */}
        <Section style={footerSection} className="mobile-padding">
          <Row>
            <Column align="center">
              <Text style={footerAddress} className="mobile-text">
                2261 Market Street #4667 San Francisco, CA 94114.
              </Text>
              <Text style={footerCopyright} className="mobile-text">
                All rights reserved.
              </Text>

              {/* Social Media Icons */}
              <div className="w-full bg-[#b7def0] py-3 text-black text-center">
                <div className="mb-2">
                  <div className="mx-auto mt-2 ">
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                      alt="Facebook"
                      style={socialIcon}
                    />
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                      alt="Instagram"
                      style={socialIcon}
                    />
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                      alt="Pinterest"
                      style={socialIcon}
                    />
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                      alt="YouTube"
                      style={socialIcon}
                    />
                  </div>
                </div>
                <div>
                <div className="mb-4 ">
                  <p className="!mt-0 !mb-0 text-xs text-[#000]">
                  2261 Market Street #4667 San Francisco, CA 94114
                  </p>
                  <p className="!mt-0 !mb-0 text-xs text-[#000000]">All rights reserved.  Company No. 94114</p>
                </div>
                </div>
                
                
                <Text className="text-xs text-gray-700">
                  Copyright © YourCompany | All Rights Reserved
                </Text>
              </div>

              <Text style={footerDescription} className="mobile-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.
              </Text>
            </Column>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
)

export default DeveloperProfile

// Styles
const main = {
  backgroundColor: "#e5e5e5",
  fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
  margin: "0",
  padding: "20px 0",
}

const container = {
  margin: "0 auto",
  width: "100%",
  maxWidth: "600px",
  backgroundColor: "#ffffff",
  borderRadius: "0",
  overflow: "hidden",
}

// Hero Section Styles
const heroSection = {
  backgroundColor: "#4c65ba",
  backgroundImage: "linear-gradient(135deg, #5b6bc0 0%, #7986cb 100%)",
  padding: "50px 40px",
  textAlign: "center" as const,
}

const characterContainer = {
  position: "relative" as const,
  marginBottom: "30px",
  display: "inline-block",
}

const speechBubble = {
  position: "absolute" as const,
  top: "-10px",
  left: "-20px",
  backgroundColor: "#ffffff",
  borderRadius: "20px",
  padding: "8px 15px",
  zIndex: 2,
}

const speechText = {
  color: "#5b6bc0",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0",
}

const characterCircle = {
  width: "150px",
  height: "150px",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative" as const,
}

const characterIllustration = {
  position: "relative" as const,
  width: "80px",
  height: "100px",
}

const characterHead = {
  width: "40px",
  height: "40px",
  backgroundColor: "#fdbcb4",
  borderRadius: "50%",
  position: "absolute" as const,
  top: "0",
  left: "20px",
}

const characterBeard = {
  width: "30px",
  height: "20px",
  backgroundColor: "#4a4a4a",
  borderRadius: "0 0 15px 15px",
  position: "absolute" as const,
  top: "25px",
  left: "25px",
}

const characterShirt = {
  width: "50px",
  height: "60px",
  backgroundColor: "#ffffff",
  borderRadius: "25px 25px 0 0",
  position: "absolute" as const,
  top: "40px",
  left: "15px",
}

const characterTie = {
  width: "8px",
  height: "40px",
  backgroundColor: "#5b6bc0",
  position: "absolute" as const,
  top: "45px",
  left: "36px",
}

const characterArm = {
  width: "20px",
  height: "30px",
  backgroundColor: "#fdbcb4",
  borderRadius: "10px",
  position: "absolute" as const,
  top: "50px",
  right: "-5px",
  transform: "rotate(-30deg)",
}

const heroHeading = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "700",
  margin: "0 0 20px",
  letterSpacing: "1px",
}

const heroText = {
  color: "#ffffff",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "0",
  opacity: 0.9,
}

// Content Section Styles
const contentSection = {
  backgroundColor: "#ffffff",
  padding: "50px 40px",
}

const documentIconContainer = {
  marginBottom: "30px",
}

const documentIcon = {
  width: "200px",
  height: "auto",
  display: "block",
  margin: "0 auto",
}

const mainHeading = {
  color: "#333333",
  fontSize: "28px",
  fontWeight: "700",
  margin: "0 0 10px",
  textAlign: "center" as const,
  letterSpacing: "1px",
}

const subHeading = {
  color: "#666666",
  fontSize: "18px",
  fontWeight: "400",
  margin: "0 0 30px",
  textAlign: "center" as const,
}

const buttonTable = {
  margin: "0 auto",
}

const completeButton = {
  backgroundColor: "#42a5f5",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "15px 30px",
  borderRadius: "4px",
  display: "inline-block",
  textAlign: "center" as const,
}

// Help Section Styles
const helpSection = {
  backgroundColor: "#e8eaf6",
  padding: "25px 40px",
}

const helpHeading = {
  color: "#333333",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0",
  textAlign: "left" as const,
}

// Pre-Footer Styles
const preFooterSection = {
  backgroundColor: "#ffffff",
  padding: "30px 40px",
}

const preFooterText = {
  color: "#333333",
  fontSize: "16px",
  fontWeight: "500",
  margin: "0",
  textAlign: "center" as const,
}

// Footer Styles
const footerSection = {
  backgroundColor: "#ffffff",
  padding: "30px 40px",
}

const footerAddress = {
  color: "#666666",
  fontSize: "12px",
  textAlign: "center" as const,
  margin: "0 0 5px",
}

const footerCopyright = {
  color: "#666666",
  fontSize: "12px",
  textAlign: "center" as const,
  margin: "0 0 20px",
}

const socialIconsTable = {
  width: "100%",
  marginBottom: "20px",
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
  width: "32px",
  height: "32px",
  borderRadius: "4px",
  display: "inline-block",
  textAlign: "center" as const,
  lineHeight: "32px",
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "600",
  marginRight: "8px",
}

const footerDescription = {
  color: "#666666",
  fontSize: "12px",
  lineHeight: "1.4",
  textAlign: "center" as const,
  margin: "0",
}
