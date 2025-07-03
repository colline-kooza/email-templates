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

export const BusinessSuccessEmailTemplate = () => {
  return (
    <Html>
      <Head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Asap:wght@400;500;600;700&display=swap');
            * {
              font-family: 'Asap', Arial, sans-serif;
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
                font-size: 24px !important;
              }
              .mobile-font-medium {
                font-size: 18px !important;
              }
              .mobile-font-small {
                font-size: 14px !important;
              }
              .mobile-button {
                display: block !important;
                margin: 10px 0 !important;
                padding: 15px 20px !important;
              }
              .mobile-hide-padding {
                padding-left: 0 !important;
                padding-right: 0 !important;
              }
              .mobile-stack {
                display: block !important;
                width: 100% !important;
                padding: 10px 0 !important;
              }
            }
          `}
        </style>
      </Head>
      <Preview>Boosting Business Success - Transform Your Business Today</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header Section */}
          <Section style={headerSectionStyle} className="mobile-padding">
            <Text style={mainTitleStyle} className="mobile-font-large">
              Boosting Business Success
            </Text>
            <Text style={subtitleStyle} className="mobile-font-small">
              How Our Services Can Make a Difference
            </Text>
          </Section>

          {/* Quote/Testimonial Section */}
          <Section style={quoteSectionStyle} className="mobile-padding">
            <Row>
              <Column style={quoteTextColumnStyle} className="mobile-full-width mobile-center">
                <Text style={quoteMarkStyle}>"</Text>
                <Text style={quoteTextStyle} className="mobile-font-small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa libero, finibus non sem. Our
                  partnership has transformed our business operations and delivered exceptional results beyond our
                  expectations.
                </Text>
                <Text style={quoteMarkStyle}>"</Text>
                <Text style={quoteAuthorStyle} className="mobile-font-small">
                  — Sarah Johnson, CEO
                </Text>
                <Text style={quoteCompanyStyle}>TechCorp Solutions</Text>
              </Column>
              <Column style={quoteImageColumnStyle} className="mobile-full-width mobile-center">
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1690804967445-business-man-woman-with-paper-phone.png"
                  alt="Business professionals collaborating"
                  style={quoteImageStyle}
                />
              </Column>
            </Row>
          </Section>

          {/* Main CTA Section */}
          <Section style={ctaSectionStyle} className="mobile-padding">
            <Text style={headlineStyle} className="mobile-font-medium">
              Ready to Transform Your Business?
              <br />
              Let's Start Your Success Story
            </Text>
            <Link href="#" style={primaryButtonStyle} className="mobile-button">
              Get Started Today
            </Link>
          </Section>

          {/* Success Story Section */}
          <Section style={successSectionStyle} className="mobile-padding">
            <Img
              src="https://cdn.templates.unlayer.com/assets/1690805207515-business-people-shaking-hands-together.png"
              alt="Business partnership handshake"
              style={successImageStyle}
            />
            <Text style={successTitleStyle} className="mobile-font-medium">
              Navigating the Path to Success
            </Text>
            <Text style={successDescriptionStyle} className="mobile-font-small">
              Our proven methodology combines industry expertise with innovative solutions to deliver measurable
              results. We partner with businesses of all sizes to unlock their potential and achieve sustainable growth
              through strategic planning and execution.
            </Text>
          </Section>

          {/* Services Overview */}
          <Section style={servicesSectionStyle} className="mobile-padding">
            <Text style={servicesHeaderStyle} className="mobile-font-medium">
              Our Core Services
            </Text>
            <Row style={servicesRowStyle}>
              <Column style={serviceColumnStyle} className="mobile-stack">
                <Text style={serviceIconStyle}>💼</Text>
                <Text style={serviceTitleStyle} className="mobile-font-small">
                  Business Consulting
                </Text>
                <Text style={serviceDescStyle}>Expert guidance to optimize operations and drive growth</Text>
              </Column>
              <Column style={serviceColumnStyle} className="mobile-stack">
                <Text style={serviceIconStyle}>🎯</Text>
                <Text style={serviceTitleStyle} className="mobile-font-small">
                  Performance Analytics
                </Text>
                <Text style={serviceDescStyle}>Data-driven insights to measure and improve business performance</Text>
              </Column>
            </Row>
          </Section>

          {/* Call to Action Banner */}
          <Section style={ctaBannerSectionStyle} className="mobile-padding">
            <Text style={ctaBannerTextStyle} className="mobile-font-medium">
              Ready to take your business to the next level?
            </Text>
            <Row>
              <Column style={ctaBannerColumnStyle} className="mobile-full-width">
                <Link href="#" style={secondaryButtonStyle} className="mobile-button">
                  Schedule Consultation
                </Link>
              </Column>
              <Column style={ctaBannerColumnStyle} className="mobile-full-width">
                <Link href="#" style={tertiaryButtonStyle} className="mobile-button">
                  Download Case Studies
                </Link>
              </Column>
            </Row>
          </Section>

          {/* Footer Section */}
          <Section style={footerSectionStyle} className="mobile-padding-small">
            <Text style={footerAddressStyle} className="mobile-font-small">
              Business Solutions Inc. | 123 Corporate Drive, Suite 500
              <br />
              Business District, NY 10001 | Phone: (555) 123-4567
            </Text>
            <Hr style={footerDividerStyle} />
            <Row>
              <Column style={footerLinksColumnStyle}>
                <Link href="#" style={footerLinkStyle}>
                  Unsubscribe
                </Link>
                <Text style={footerSeparatorStyle}>|</Text>
                <Link href="#" style={footerLinkStyle}>
                  Terms & Privacy
                </Link>
                <Text style={footerSeparatorStyle}>|</Text>
                <Link href="#" style={footerLinkStyle}>
                  Contact Us
                </Link>
              </Column>
            </Row>
            <Text style={copyrightStyle}>© 2024 Business Solutions Inc. All rights reserved.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default BusinessSuccessEmailTemplate

// Enhanced Styles with better mobile support
const bodyStyle = {
  fontFamily: "'Asap', Arial, sans-serif",
  backgroundColor: "#f5f7fa",
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
  padding: "40px 30px 30px 30px",
  textAlign: "center" as const,
  backgroundColor: "#ffffff",
}

const mainTitleStyle = {
  fontSize: "28px",
  fontWeight: "700",
  color: "#00586b",
  margin: "0 0 8px 0",
  lineHeight: "1.2",
  wordBreak: "break-word" as const,
}

const subtitleStyle = {
  fontSize: "16px",
  color: "#00586b",
  fontStyle: "italic",
  margin: "0",
  opacity: "0.8",
  lineHeight: "1.4",
}

const quoteSectionStyle = {
  padding: "40px 30px",
  backgroundColor: "#f8fafb",
}

const quoteTextColumnStyle = {
  width: "60%",
  verticalAlign: "top" as const,
  paddingRight: "20px",
  paddingBottom: "20px", // Added for mobile stacking
}

const quoteImageColumnStyle = {
  width: "40%",
  verticalAlign: "top" as const,
  textAlign: "center" as const,
  paddingBottom: "20px", // Added for mobile stacking
}

const quoteMarkStyle = {
  fontSize: "48px",
  color: "#00586b",
  fontWeight: "700",
  lineHeight: "1",
  margin: "0",
  display: "inline",
}

const quoteTextStyle = {
  fontSize: "16px",
  color: "#333333",
  fontStyle: "italic",
  lineHeight: "1.6",
  margin: "10px 0",
  display: "inline",
  wordBreak: "break-word" as const,
}

const quoteAuthorStyle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#00586b",
  margin: "15px 0 5px 0",
  lineHeight: "1.4",
}

const quoteCompanyStyle = {
  fontSize: "12px",
  color: "#666666",
  margin: "0",
  lineHeight: "1.4",
}

const quoteImageStyle = {
  width: "100%",
  height: "auto",
  maxWidth: "200px", // Constrained for better mobile display
  maxHeight: "200px",
  borderRadius: "8px",
  display: "block",
  margin: "0 auto",
}

const ctaSectionStyle = {
  padding: "40px 30px",
  textAlign: "center" as const,
  backgroundColor: "#ffffff",
}

const headlineStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#00586b",
  margin: "0 0 25px 0",
  lineHeight: "1.3",
  wordBreak: "break-word" as const,
}

const primaryButtonStyle = {
  backgroundColor: "#00586b",
  color: "#ffffff",
  borderRadius: "6px",
  padding: "14px 30px",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  border: "none",
  cursor: "pointer",
  minWidth: "200px", // Ensures button has minimum width
  textAlign: "center" as const,
  lineHeight: "1.2",
}

const successSectionStyle = {
  padding: "40px 30px",
  textAlign: "center" as const,
  backgroundColor: "#ffffff",
}

const successImageStyle = {
  width: "100%",
  height: "auto",
  maxWidth: "500px",
  maxHeight: "250px",
  borderRadius: "8px",
  marginBottom: "25px",
  display: "block",
  margin: "0 auto 25px auto",
}

const successTitleStyle = {
  fontSize: "22px",
  fontWeight: "700",
  color: "#2c7e91",
  margin: "0 0 15px 0",
  lineHeight: "1.3",
  wordBreak: "break-word" as const,
}

const successDescriptionStyle = {
  fontSize: "16px",
  color: "#333333",
  lineHeight: "1.6",
  margin: "0",
  textAlign: "left" as const,
  wordBreak: "break-word" as const,
}

const servicesSectionStyle = {
  padding: "40px 30px",
  backgroundColor: "#f8fafb",
}

const servicesHeaderStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#00586b",
  margin: "0 0 30px 0",
  textAlign: "center" as const,
  wordBreak: "break-word" as const,
}

const servicesRowStyle = {
  marginBottom: "20px",
}

const serviceColumnStyle = {
  width: "50%",
  verticalAlign: "top" as const,
  textAlign: "center" as const,
  padding: "0 15px 20px 15px", // Added bottom padding for mobile stacking
}

const serviceIconStyle = {
  fontSize: "32px",
  margin: "0 0 15px 0",
  display: "block",
  lineHeight: "1",
}

const serviceTitleStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#00586b",
  margin: "0 0 10px 0",
  lineHeight: "1.3",
  wordBreak: "break-word" as const,
}

const serviceDescStyle = {
  fontSize: "14px",
  color: "#666666",
  lineHeight: "1.5",
  margin: "0",
  wordBreak: "break-word" as const,
}

const ctaBannerSectionStyle = {
  padding: "40px 30px",
  backgroundColor: "#00586b",
  textAlign: "center" as const,
}

const ctaBannerTextStyle = {
  fontSize: "20px",
  fontWeight: "600",
  color: "#ffffff",
  margin: "0 0 25px 0",
  lineHeight: "1.3",
  wordBreak: "break-word" as const,
}

const ctaBannerColumnStyle = {
  width: "50%",
  textAlign: "center" as const,
  padding: "0 10px 10px 10px", // Added bottom padding for mobile stacking
  verticalAlign: "top" as const,
}

const secondaryButtonStyle = {
  backgroundColor: "#ffffff",
  color: "#00586b",
  borderRadius: "6px",
  padding: "12px 25px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  border: "2px solid #ffffff",
  minWidth: "180px",
  textAlign: "center" as const,
  lineHeight: "1.2",
}

const tertiaryButtonStyle = {
  backgroundColor: "transparent",
  color: "#ffffff",
  borderRadius: "6px",
  padding: "12px 25px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  border: "2px solid #ffffff",
  minWidth: "180px",
  textAlign: "center" as const,
  lineHeight: "1.2",
}

const footerSectionStyle = {
  padding: "30px",
  textAlign: "center" as const,
  backgroundColor: "#ffffff",
}

const footerAddressStyle = {
  fontSize: "14px",
  color: "#666666",
  margin: "0 0 20px 0",
  lineHeight: "1.5",
  wordBreak: "break-word" as const,
}

const footerDividerStyle = {
  border: "none",
  borderTop: "1px solid #e0e6ed",
  margin: "20px 0",
  width: "100%",
}

const footerLinksColumnStyle = {
  textAlign: "center" as const,
  width: "100%",
}

const footerLinkStyle = {
  fontSize: "12px",
  color: "#00586b",
  textDecoration: "none",
  margin: "0 5px",
  lineHeight: "1.4",
}

const footerSeparatorStyle = {
  fontSize: "12px",
  color: "#cccccc",
  margin: "0 5px",
  display: "inline",
}

const copyrightStyle = {
  fontSize: "12px",
  color: "#999999",
  margin: "15px 0 0 0",
  lineHeight: "1.4",
}
