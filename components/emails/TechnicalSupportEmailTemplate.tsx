import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components"

export const TechnicalSupportEmailTemplate = () => {
  return (
    <Html>
      <Head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap');
            * {
              font-family: 'Roboto', Arial, sans-serif;
            }
            @media only screen and (max-width: 600px) {
              .mobile-full-width {
                width: 100% !important;
                display: block !important;
              }
              .mobile-center {
                text-align: center !important;
              }
              .mobile-padding {
                padding: 20px !important;
              }
              .mobile-padding-small {
                padding: 15px !important;
              }
              .mobile-font-large {
                font-size: 28px !important;
              }
              .mobile-font-medium {
                font-size: 20px !important;
              }
              .mobile-font-small {
                font-size: 14px !important;
              }
              .mobile-button {
                display: block !important;
                margin: 10px 0 !important;
                padding: 15px 20px !important;
                max-width: 280px !important;
              }
              .mobile-hide-padding {
                padding-left: 0 !important;
                padding-right: 0 !important;
              }
              .mobile-stack {
                display: block !important;
                width: 100% !important;
                padding: 15px 0 !important;
              }
              .mobile-stat-stack {
                display: block !important;
                width: 100% !important;
                padding: 10px 0 !important;
                margin: 10px 0 !important;
              }
              .mobile-social-stack {
                display: inline-block !important;
                margin: 5px !important;
              }
              .mobile-hero-padding {
                padding: 30px 20px !important;
              }
            }
          `}
        </style>
      </Head>
      <Preview>24/7 Technical Support - Expert Solutions When You Need Them Most</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header Section */}
          <Section style={headerSectionStyle} className="mobile-padding-small">
            <Img
              src="https://cdn.templates.unlayer.com/assets/1625917008289-gfgfg.png"
              alt="Technical Support Company"
              style={logoStyle}
            />
          </Section>

          {/* Hero Section */}
          <Section style={heroSectionStyle} className="mobile-hero-padding">
            <Text style={heroTitleStyle} className="mobile-font-large">
              24/7 Technical
              <br />
              Support
            </Text>
            <Text style={heroDescriptionStyle} className="mobile-font-small">
              Get instant access to our expert technical team. We're here to solve your problems quickly and
              efficiently, any time of day or night.
            </Text>
            <Link href="#" style={primaryButtonStyle} className="mobile-button">
              GET SUPPORT NOW
            </Link>
          </Section>

          {/* Main Content Section */}
          <Section style={mainContentSectionStyle} className="mobile-padding">
            <Text style={mainTitleStyle} className="mobile-font-medium">
              The Best Online/Offline
              <br />
              Technical Support
            </Text>
            <Text style={mainDescriptionStyle} className="mobile-font-small">
              Our comprehensive support solutions combine cutting-edge technology with human expertise to deliver
              unparalleled service. Whether you need immediate assistance or ongoing technical guidance, our certified
              professionals are ready to help you succeed.
            </Text>
          </Section>

          {/* Survey Results Section */}
          <Section style={surveyResultsSectionStyle} className="mobile-padding">
            <Text style={surveyTitleStyle} className="mobile-font-medium">
              Here's Our Latest
              <br />
              Customer Satisfaction Results
            </Text>
            <Text style={surveyDescriptionStyle} className="mobile-font-small">
              Our recent customer survey shows outstanding satisfaction rates across all service categories. See why
              thousands of businesses trust us with their technical support needs.
            </Text>
            <Row style={statsRowStyle}>
              <Column style={statColumnStyle} className="mobile-stat-stack">
                <Text style={statNumberStyle} className="mobile-font-medium">
                  98%
                </Text>
                <Text style={statLabelStyle}>Customer Satisfaction</Text>
              </Column>
              <Column style={statColumnStyle} className="mobile-stat-stack">
                <Text style={statNumberStyle} className="mobile-font-medium">
                  &lt; 2min
                </Text>
                <Text style={statLabelStyle}>Average Response Time</Text>
              </Column>
              <Column style={statColumnStyle} className="mobile-stat-stack">
                <Text style={statNumberStyle} className="mobile-font-medium">
                  24/7
                </Text>
                <Text style={statLabelStyle}>Availability</Text>
              </Column>
            </Row>
            <Link href="#" style={secondaryButtonStyle} className="mobile-button">
              VIEW FULL REPORT
            </Link>
          </Section>

          {/* Services Section */}
          <Section style={servicesSectionStyle} className="mobile-padding">
            <Text style={servicesHeaderStyle} className="mobile-font-medium">
              Why Choose Our Technical Support?
            </Text>
            <Row style={servicesRowStyle}>
              <Column style={serviceColumnStyle} className="mobile-stack">
                <Img
                  src="https://res.cloudinary.com/dirpuqqib/image/upload/v1723619231/1625931498386-727028_fazpkq.jpg"
                  alt="Expert Technicians"
                  style={serviceImageStyle}
                />
                <Text style={serviceTitleStyle} className="mobile-font-small">
                  Expert Technicians
                </Text>
                <Text style={serviceDescriptionStyle}>
                  Our certified professionals have years of experience solving complex technical challenges across
                  multiple platforms and technologies.
                </Text>
                <Link href="#" style={serviceButtonStyle} className="mobile-button">
                  LEARN MORE
                </Link>
              </Column>
           
              <Column style={serviceColumnStyle} className="mobile-stack">
                <Img
                  src="https://res.cloudinary.com/dirpuqqib/image/upload/v1723619173/1625931487901-827002_nnrlve.jpg"
                  alt="Proven Experience"
                  style={serviceImageStyle}
                />
                <Text style={serviceTitleStyle} className="mobile-font-small">
                  Proven Experience
                </Text>
                <Text style={serviceDescriptionStyle}>
                  With thousands of successful support cases, we have the track record and expertise to handle any
                  technical challenge you face.
                </Text>
                <Link href="#" style={serviceButtonStyle} className="mobile-button">
                  LEARN MORE
                </Link>
              </Column>
            </Row>
          </Section>

          {/* Contact CTA Section */}
          <Section style={contactCtaSectionStyle} className="mobile-padding">
            <Text style={contactTitleStyle} className="mobile-font-medium">
              Need Immediate Technical Support?
            </Text>
            <Text style={contactDescriptionStyle} className="mobile-font-small">
              Don't let technical issues slow you down. Our expert team is standing by to help you get back on track.
            </Text>
            <Row>
              <Column style={contactButtonColumnStyle} className="mobile-full-width">
                <Link href="tel:123-456-7890" style={phoneButtonStyle} className="mobile-button">
                  📞 Call Now: 123-456-7890
                </Link>
              </Column>
              <Column style={contactButtonColumnStyle} className="mobile-full-width">
                <Link href="#" style={chatButtonStyle} className="mobile-button">
                  💬 Start Live Chat
                </Link>
              </Column>
            </Row>
          </Section>

          {/* Footer Section */}
          <Section style={footerSectionStyle} className="mobile-padding-small">
            <Row>
              <Column style={socialIconsColumnStyle}>
                <Link href="#" style={socialLinkStyle} className="mobile-social-stack">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-white/twitter.png"
                    alt="Twitter"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle} className="mobile-social-stack">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-white/linkedin.png"
                    alt="LinkedIn"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle} className="mobile-social-stack">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-white/instagram.png"
                    alt="Instagram"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle} className="mobile-social-stack">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-white/vimeo.png"
                    alt="Vimeo"
                    style={socialIconStyle}
                  />
                </Link>
              </Column>
            </Row>
            <Hr style={footerDividerStyle} />
            <Text style={companyNameStyle} className="mobile-font-small">
              Technical Support Company
            </Text>
            <Text style={footerContactStyle}>
              📞 123-456-7890
              <br />📍 San Francisco, CA, United States
              <br />📧 support@techcompany.com
            </Text>
            <Text style={footerLinksStyle}>
              <Link href="#" style={footerLinkStyle}>
                Terms of Use
              </Link>{" "}
              |{" "}
              <Link href="#" style={footerLinkStyle}>
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link href="#" style={footerLinkStyle}>
                Support Portal
              </Link>
            </Text>
            <Text style={copyrightStyle}>© 2024 Technical Support Company. All rights reserved.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default TechnicalSupportEmailTemplate

// Enhanced Styles with better mobile support
const bodyStyle = {
  fontFamily: "'Roboto', Arial, sans-serif",
  backgroundColor: "#f5f5f5",
  margin: "0",
  padding: "20px 10px", // Reduced side padding for mobile
  lineHeight: "1.6",
  WebkitTextSizeAdjust: "100%",
  msTextSizeAdjust: "100%",
}

const containerStyle = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "0",
  width: "100%",
  maxWidth: "600px",
  borderRadius: "8px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  border: "1px solid #e0e6ed", // Fallback for email clients that don't support box-shadow
}

const headerSectionStyle = {
  backgroundColor: "#000000",
  padding: "20px",
  textAlign: "center" as const,
}

const logoStyle = {
  maxHeight: "50px",
  width: "auto",
  display: "block",
  margin: "0 auto",
  maxWidth: "200px", // Constrained for mobile
}

const heroSectionStyle = {
  backgroundColor: "#183ede",
  padding: "50px 30px",
  textAlign: "left" as const,
  backgroundImage:
    'url("https://res.cloudinary.com/dirpuqqib/image/upload/v1723615863/1625919523425-dfdfd_ugudpe.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}

const heroTitleStyle = {
  fontSize: "36px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 20px 0",
  lineHeight: "1.2",
  wordBreak: "break-word" as const,
}

const heroDescriptionStyle = {
  fontSize: "16px",
  color: "#ffffff",
  margin: "0 0 30px 0",
  lineHeight: "1.5",
  opacity: "0.95",
  wordBreak: "break-word" as const,
}

const primaryButtonStyle = {
  backgroundColor: "#ffffff",
  color: "#183ede",
  borderRadius: "4px",
  padding: "14px 32px",
  fontSize: "14px",
  fontWeight: "700",
  textDecoration: "none",
  display: "inline-block",
  border: "none",
  cursor: "pointer",
  letterSpacing: "0.5px",
  minWidth: "200px",
  textAlign: "center" as const,
  lineHeight: "1.2",
}

const mainContentSectionStyle = {
  backgroundColor: "#f7f8f8",
  padding: "40px 30px",
  textAlign: "center" as const,
}

const mainTitleStyle = {
  fontSize: "28px",
  fontWeight: "600",
  color: "#000000",
  margin: "0 0 20px 0",
  lineHeight: "1.3",
  wordBreak: "break-word" as const,
}

const mainDescriptionStyle = {
  fontSize: "16px",
  color: "#64748b",
  lineHeight: "1.6",
  margin: "0",
  textAlign: "center" as const,
  wordBreak: "break-word" as const,
}

const surveyResultsSectionStyle = {
  backgroundColor: "#0a141d",
  padding: "50px 30px",
  textAlign: "center" as const,
  backgroundImage: 'url("https://res.cloudinary.com/dirpuqqib/image/upload/v1723617619/1625921528098-hhfg_usrfqx.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}

const surveyTitleStyle = {
  fontSize: "32px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 20px 0",
  lineHeight: "1.2",
  wordBreak: "break-word" as const,
}

const surveyDescriptionStyle = {
  fontSize: "16px",
  color: "#ffffff",
  margin: "0 0 30px 0",
  lineHeight: "1.5",
  opacity: "0.9",
  wordBreak: "break-word" as const,
}

const statsRowStyle = {
  margin: "30px 0",
}

const statColumnStyle = {
  width: "33.33%",
  textAlign: "center" as const,
  verticalAlign: "top" as const,
  padding: "0 10px 20px 10px", // Added bottom padding for mobile stacking
}

const statNumberStyle = {
  fontSize: "32px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 8px 0",
  lineHeight: "1.2",
}

const statLabelStyle = {
  fontSize: "14px",
  color: "#ffffff",
  margin: "0",
  opacity: "0.8",
  lineHeight: "1.3",
  wordBreak: "break-word" as const,
}

const secondaryButtonStyle = {
  backgroundColor: "#ffffff",
  color: "#0a141d",
  borderRadius: "4px",
  padding: "14px 32px",
  fontSize: "14px",
  fontWeight: "700",
  textDecoration: "none",
  display: "inline-block",
  letterSpacing: "0.5px",
  minWidth: "180px",
  textAlign: "center" as const,
  lineHeight: "1.2",
}

const servicesSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "50px 20px",
}

const servicesHeaderStyle = {
  fontSize: "28px",
  fontWeight: "600",
  color: "#000000",
  margin: "0 0 40px 0",
  textAlign: "center" as const,
  lineHeight: "1.3",
  wordBreak: "break-word" as const,
}

const servicesRowStyle = {
  marginBottom: "20px",
}

const serviceColumnStyle = {
  width: "33.33%",
  verticalAlign: "top" as const,
  textAlign: "center" as const,
  padding: "0 15px 30px 15px", // Added bottom padding for mobile stacking
}

const serviceImageStyle = {
  width: "100%",
  height: "auto",
  maxWidth: "180px", // Constrained for better mobile display
  maxHeight: "150px",
  objectFit: "cover" as const,
  borderRadius: "8px",
  marginBottom: "20px",
  display: "block",
  margin: "0 auto 20px auto",
}

const serviceTitleStyle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#000000",
  margin: "0 0 15px 0",
  lineHeight: "1.3",
  wordBreak: "break-word" as const,
}

const serviceDescriptionStyle = {
  fontSize: "14px",
  color: "#666666",
  lineHeight: "1.5",
  margin: "0 0 20px 0",
  wordBreak: "break-word" as const,
}

const serviceButtonStyle = {
  backgroundColor: "#014d6f",
  color: "#ffffff",
  borderRadius: "4px",
  padding: "10px 20px",
  fontSize: "12px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  letterSpacing: "0.5px",
  minWidth: "120px",
  textAlign: "center" as const,
  lineHeight: "1.2",
}

const contactCtaSectionStyle = {
  backgroundColor: "#f7f8f8",
  padding: "40px 30px",
  textAlign: "center" as const,
}

const contactTitleStyle = {
  fontSize: "24px",
  fontWeight: "600",
  color: "#000000",
  margin: "0 0 15px 0",
  lineHeight: "1.3",
  wordBreak: "break-word" as const,
}

const contactDescriptionStyle = {
  fontSize: "16px",
  color: "#666666",
  margin: "0 0 30px 0",
  lineHeight: "1.5",
  wordBreak: "break-word" as const,
}

const contactButtonColumnStyle = {
  width: "50%",
  textAlign: "center" as const,
  padding: "0 10px 10px 10px", // Added bottom padding for mobile stacking
  verticalAlign: "top" as const,
}

const phoneButtonStyle = {
  backgroundColor: "#183ede",
  color: "#ffffff",
  borderRadius: "6px",
  padding: "14px 20px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  minWidth: "200px",
  textAlign: "center" as const,
  lineHeight: "1.2",
}

const chatButtonStyle = {
  backgroundColor: "#014d6f",
  color: "#ffffff",
  borderRadius: "6px",
  padding: "14px 20px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  minWidth: "200px",
  textAlign: "center" as const,
  lineHeight: "1.2",
}

const footerSectionStyle = {
  backgroundColor: "#01002a",
  padding: "40px 30px",
  textAlign: "center" as const,
}

const socialIconsColumnStyle = {
  textAlign: "center" as const,
  padding: "0 0 20px 0",
  width: "100%",
}

const socialLinkStyle = {
  textDecoration: "none",
  margin: "0 8px",
  display: "inline-block",
}

const socialIconStyle = {
  width: "32px",
  height: "32px",
  display: "block",
}

const footerDividerStyle = {
  border: "none",
  borderTop: "1px solid rgba(255, 255, 255, 0.2)",
  margin: "20px 0",
  width: "100%",
}

const companyNameStyle = {
  fontSize: "20px",
  fontWeight: "600",
  color: "#ffffff",
  margin: "0 0 20px 0",
  letterSpacing: "1px",
  lineHeight: "1.3",
  wordBreak: "break-word" as const,
}

const footerContactStyle = {
  fontSize: "14px",
  color: "#cccccc",
  margin: "0 0 20px 0",
  lineHeight: "1.6",
  wordBreak: "break-word" as const,
}

const footerLinksStyle = {
  fontSize: "12px",
  color: "#cccccc",
  margin: "0 0 15px 0",
  lineHeight: "1.4",
}

const footerLinkStyle = {
  color: "#cccccc",
  textDecoration: "underline",
  lineHeight: "1.4",
}

const copyrightStyle = {
  fontSize: "12px",
  color: "#888888",
  margin: "0",
  lineHeight: "1.4",
}
