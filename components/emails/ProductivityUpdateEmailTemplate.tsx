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

export const ProductivityUpdateEmailTemplate = () => {
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
              .mobile-hide {
                display: none !important;
              }
              .mobile-stack {
                width: 100% !important;
                display: block !important;
                padding: 0 10px !important;
                margin-bottom: 15px !important;
                box-sizing: border-box !important;
              }
              .mobile-stack-last {
                margin-bottom: 0 !important;
              }
              .feature-card-mobile {
                margin-bottom: 0 !important;
                width: 100% !important;
              }
              .features-row-mobile {
                width: 100% !important;
                margin-bottom: 15px !important;
              }
              .features-section-mobile {
                padding: 30px 15px !important;
              }
              .testimonial-mobile {
                padding: 0 10px 20px 10px !important;
              }
              .promo-text-mobile {
                width: 100% !important;
                padding-right: 0 !important;
                margin-bottom: 30px !important;
              }
              .promo-image-mobile {
                width: 100% !important;
              }
              .additional-feature-mobile {
                width: 100% !important;
                padding: 0 10px 30px 10px !important;
              }
              .cta-button-mobile {
                width: 100% !important;
                margin-bottom: 15px !important;
              }
            }
            
            /* Additional mobile styles for better compatibility */
            @media only screen and (max-width: 480px) {
              .mobile-stack {
                padding: 0 5px !important;
                margin-bottom: 10px !important;
              }
              .features-section-mobile {
                padding: 25px 10px !important;
              }
            }
          `}
        </style>
      </Head>
      <Preview>Boost Your Productivity with These New Updates</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header Section */}
          <Section style={headerSectionStyle}>
            <Img
              src="https://cdn.templates.unlayer.com/assets/1719297039420-Group%2023.png"
              alt="Productivity Platform Logo"
              style={logoStyle}
            />
            <Text style={headerDescriptionStyle}>
              Discover powerful new features designed to streamline your workflow, enhance collaboration, and boost your
              team's productivity. These updates are now available in your dashboard.
            </Text>
            <Link href="#" style={headerButtonStyle}>
              Explore New Features
            </Link>
          </Section>

          {/* Enhanced Accessibility Features Section */}
          <Section style={featuresSectionStyle} className="features-section-mobile">
            <Text style={sectionTitleStyle}>
              Enhanced <span style={highlightTextStyle}>Accessibility</span> Features
            </Text>
            <Text style={sectionDescriptionStyle}>
              We've redesigned our platform with accessibility at the forefront, ensuring everyone can work efficiently
              and comfortably.
            </Text>

            {/* Features Grid - Row 1 */}
            <Row style={featuresRowStyle} className="features-row-mobile">
              <Column style={featureColumnStyle} className="mobile-stack">
                <Section style={featureCardDarkStyle} className="feature-card-mobile">
                  <Text style={featureCardTitleDarkStyle}>Screen Reader Support</Text>
                  <Text style={featureCardDescDarkStyle}>
                    Enhanced screen reader compatibility with ARIA labels and semantic HTML structure for better
                    navigation.
                  </Text>
                </Section>
              </Column>
            </Row>

            {/* Features Grid - Row 2 */}
            <Row style={featuresRowStyle} className="features-row-mobile">
              <Column style={featureColumnStyle} className="mobile-stack">
                <Section style={featureCardLightStyle} className="feature-card-mobile">
                  <Text style={featureCardTitleLightStyle}>High Contrast Mode</Text>
                  <Text style={featureCardDescLightStyle}>
                    Improved color contrast ratios and customizable themes for users with visual impairments or
                    preferences.
                  </Text>
                </Section>
              </Column>
         
            </Row>
          </Section>

          {/* Additional Features Section */}
          <Section style={additionalFeaturesSectionStyle}>
            <Text style={additionalFeaturesTitleStyle}>More Productivity Enhancements</Text>
            <Row>
              <Column style={additionalFeatureColumnStyle} className="additional-feature-mobile">
                <Text style={featureIconStyle}>⚡</Text>
                <Text style={additionalFeatureTitleStyle}>Lightning Fast Performance</Text>
                <Text style={additionalFeatureDescStyle}>
                  50% faster loading times and improved response rates across all features.
                </Text>
              </Column>
              <Column style={additionalFeatureColumnStyle} className="additional-feature-mobile">
                <Text style={featureIconStyle}>🔄</Text>
                <Text style={additionalFeatureTitleStyle}>Real-time Collaboration</Text>
                <Text style={additionalFeatureDescStyle}>
                  Enhanced real-time editing and commenting with instant notifications.
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Promotional Section */}
          <Section style={promoSectionStyle}>
            <Row>
              <Column style={promoTextColumnStyle} className="promo-text-mobile">
                <Text style={promoTitleStyle}>Ready to Transform Your Workflow?</Text>
                <Text style={promoDescriptionStyle}>
                  Join thousands of teams who have already upgraded their productivity with our latest features. Start
                  your free trial today and experience the difference these enhancements can make for your business.
                </Text>
                <Link href="https://example.com" style={promoButtonStyle}>
                  Start Free Trial
                </Link>
              </Column>
            
            </Row>
          </Section>

          {/* Testimonial Section */}
          <Section style={testimonialSectionStyle}>
            <Text style={testimonialTitleStyle}>What Our Users Are Saying</Text>
            <Row>
              <Column style={testimonialColumnStyle} className="mobile-stack testimonial-mobile">
                <Text style={testimonialQuoteStyle}>
                  "The new accessibility features have made our platform truly inclusive. Our entire team can now work
                  more efficiently than ever before."
                </Text>
                <Text style={testimonialAuthorStyle}>— Sarah Johnson, Product Manager</Text>
              </Column>
             
            </Row>
          </Section>

          {/* Call to Action Section */}
          <Section style={ctaSectionStyle}>
            <Text style={ctaTitleStyle}>Don't Miss Out on These Updates</Text>
            <Text style={ctaDescriptionStyle}>
              These features are rolling out to all users this week. Log in to your dashboard to start exploring.
            </Text>
            <Row>
              <Column style={ctaButtonColumnStyle} className="cta-button-mobile">
                <Link href="#" style={ctaPrimaryButtonStyle}>
                  Access Dashboard
                </Link>
              </Column>
            </Row>
          </Section>

          {/* Footer Section */}
          <Section style={footerSectionStyle}>
            <Text style={footerSupportTextStyle}>
              If you have any questions, please email us at{" "}
              <Link href="mailto:customer.success@unlayer.com" style={footerLinkStyle}>
                customer.success@unlayer.com
              </Link>{" "}
              or visit our FAQs. You can also chat with a real live human during our operating hours. They can answer
              questions about your account and help you get the most out of these new features.
            </Text>

            <Hr style={footerDividerStyle} />

            <Row>
              <Column style={footerLinksColumnStyle}>
                <Link href="https://example.com/home" style={footerNavLinkStyle}>
                  Home
                </Link>
                <Text style={footerSeparatorStyle}>|</Text>
                <Link href="https://example.com/features" style={footerNavLinkStyle}>
                  Features
                </Link>
                <Text style={footerSeparatorStyle}>|</Text>
                <Link href="https://example.com/about" style={footerNavLinkStyle}>
                  About Us
                </Link>
                <Text style={footerSeparatorStyle}>|</Text>
                <Link href="https://example.com/support" style={footerNavLinkStyle}>
                  Support
                </Link>
              </Column>
            </Row>

            <Text style={footerUnsubscribeStyle}>
              You have received this email as a registered user of{" "}
              <Link href="https://unlayer.com" style={footerLinkStyle}>
                unlayer.com
              </Link>
              . You can{" "}
              <Link href="https://example.com/unsubscribe" style={footerLinkStyle}>
                unsubscribe
              </Link>{" "}
              from these emails here.
            </Text>

            <Text style={footerAddressStyle}>
              2281 Market Street #4867 San Francisco, CA 94114 | All rights reserved
            </Text>

            {/* Social Media Icons */}
            <Row>
              <Column style={socialIconsColumnStyle}>
                <Link href="https://www.facebook.com" style={socialLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                    alt="Facebook"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="https://www.linkedin.com" style={socialLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                    alt="LinkedIn"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="https://www.instagram.com" style={socialLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                    alt="Instagram"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="https://www.twitter.com" style={socialLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/x.png"
                    alt="Twitter"
                    style={socialIconStyle}
                  />
                </Link>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default ProductivityUpdateEmailTemplate

// Responsive Styles
const bodyStyle = {
  fontFamily: "'Asap', Arial, sans-serif",
  backgroundColor: "#ecf0f1",
  margin: "0",
  padding: "10px 0",
  lineHeight: "1.6",
}

const containerStyle = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "0",
  maxWidth: "600px",
  borderRadius: "8px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
}

const headerSectionStyle = {
  backgroundColor: "#b2ff59",
  padding: "40px 30px",
  textAlign: "center" as const,
}

const logoStyle = {
  width: "100%",
  height: "auto",
  maxHeight: "70px",
  objectFit: "contain" as const,
  marginBottom: "20px",
}

const headerDescriptionStyle = {
  fontSize: "14px",
  color: "#1f2937",
  margin: "0 0 25px 0",
  lineHeight: "1.6",
}

const headerButtonStyle = {
  backgroundColor: "#000000",
  color: "#95fb66",
  borderRadius: "4px",
  padding: "12px 35px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
}

const featuresSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "50px 30px",
}

const sectionTitleStyle = {
  fontSize: "28px",
  fontWeight: "700",
  color: "#000000",
  margin: "0 0 10px 0",
  textAlign: "center" as const,
  lineHeight: "1.3",
}

const highlightTextStyle = {
  backgroundColor: "#b9ff4f",
  padding: "2px 8px",
  borderRadius: "4px",
}

const sectionDescriptionStyle = {
  fontSize: "16px",
  color: "#6b7280",
  margin: "0 0 40px 0",
  textAlign: "center" as const,
  lineHeight: "1.6",
}

const featuresRowStyle = {
  marginBottom: "20px",
  width: "100%",
}

const featureColumnStyle = {
  width: "100%",
  verticalAlign: "top" as const,
  padding: "0 10px",
  boxSizing: "border-box" as const,
}

const featureCardDarkStyle = {
  backgroundColor: "#050004",
  padding: "25px 20px",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  marginBottom: "10px",
  height: "auto",
  boxSizing: "border-box" as const,
}

const featureCardGreenStyle = {
  backgroundColor: "#b9ff66",
  padding: "25px 20px",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  marginBottom: "10px",
  height: "auto",
  boxSizing: "border-box" as const,
}

const featureCardLightStyle = {
  backgroundColor: "#f4f4f4",
  padding: "25px 20px",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  marginBottom: "10px",
  height: "auto",
  boxSizing: "border-box" as const,
}

const featureCardWhiteStyle = {
  backgroundColor: "#ffffff",
  padding: "25px 20px",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  border: "1px solid #e5e7eb",
  marginBottom: "10px",
  height: "auto",
  boxSizing: "border-box" as const,
}

const featureCardTitleDarkStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#ffffff",
  margin: "0 0 10px 0",
}

const featureCardTitleGreenStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#000000",
  margin: "0 0 10px 0",
}

const featureCardTitleLightStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#000000",
  margin: "0 0 10px 0",
}

const featureCardTitleWhiteStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#000000",
  margin: "0 0 10px 0",
}

const featureCardDescDarkStyle = {
  fontSize: "13px",
  color: "#94a3b8",
  margin: "0",
  lineHeight: "1.5",
}

const featureCardDescGreenStyle = {
  fontSize: "13px",
  color: "#020617",
  margin: "0",
  lineHeight: "1.5",
}

const featureCardDescLightStyle = {
  fontSize: "13px",
  color: "#475569",
  margin: "0",
  lineHeight: "1.5",
}

const featureCardDescWhiteStyle = {
  fontSize: "13px",
  color: "#475569",
  margin: "0",
  lineHeight: "1.5",
}

const additionalFeaturesSectionStyle = {
  backgroundColor: "#f8f9fa",
  padding: "50px 30px",
}

const additionalFeaturesTitleStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#000000",
  margin: "0 0 40px 0",
  textAlign: "center" as const,
}

const additionalFeatureColumnStyle = {
  width: "50%",
  verticalAlign: "top" as const,
  textAlign: "center" as const,
  padding: "0 15px",
}

const featureIconStyle = {
  fontSize: "32px",
  margin: "0 0 15px 0",
  display: "block",
}

const additionalFeatureTitleStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#000000",
  margin: "0 0 10px 0",
}

const additionalFeatureDescStyle = {
  fontSize: "14px",
  color: "#6b7280",
  lineHeight: "1.5",
  margin: "0",
}

const promoSectionStyle = {
  background: "linear-gradient(135deg, #b9ff66 0%, #95fb66 100%)",
  padding: "50px 30px",
}

const promoTextColumnStyle = {
  width: "60%",
  verticalAlign: "middle" as const,
  paddingRight: "30px",
}

const promoImageColumnStyle = {
  width: "40%",
  verticalAlign: "middle" as const,
  textAlign: "center" as const,
}

const promoTitleStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#000000",
  margin: "0 0 15px 0",
  lineHeight: "1.3",
}

const promoDescriptionStyle = {
  fontSize: "14px",
  color: "#000000",
  margin: "0 0 25px 0",
  lineHeight: "1.6",
}

const promoButtonStyle = {
  backgroundColor: "#000000",
  color: "#78d735",
  borderRadius: "4px",
  padding: "14px 24px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
}

const promoImageStyle = {
  width: "100%",
  height: "auto",
  maxHeight: "240px",
  objectFit: "contain" as const,
}

const testimonialSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "50px 30px",
}

const testimonialTitleStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#000000",
  margin: "0 0 30px 0",
  textAlign: "center" as const,
}

const testimonialColumnStyle = {
  width: "50%",
  verticalAlign: "top" as const,
  padding: "0 20px",
}

const testimonialQuoteStyle = {
  fontSize: "14px",
  color: "#374151",
  fontStyle: "italic",
  lineHeight: "1.6",
  margin: "0 0 15px 0",
}

const testimonialAuthorStyle = {
  fontSize: "12px",
  color: "#6b7280",
  fontWeight: "600",
  margin: "0",
}

const ctaSectionStyle = {
  backgroundColor: "#f8f9fa",
  padding: "40px 30px",
  textAlign: "center" as const,
}

const ctaTitleStyle = {
  fontSize: "22px",
  fontWeight: "700",
  color: "#000000",
  margin: "0 0 15px 0",
}

const ctaDescriptionStyle = {
  fontSize: "16px",
  color: "#6b7280",
  margin: "0 0 30px 0",
}

const ctaButtonColumnStyle = {
  width: "100%",
  textAlign: "center" as const,
  padding: "0 10px",
}

const ctaPrimaryButtonStyle = {
  backgroundColor: "#b9ff66",
  color: "#000000",
  borderRadius: "6px",
  padding: "14px 24px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
}

const footerSectionStyle = {
  backgroundColor: "#f8fafc",
  padding: "40px 30px",
  textAlign: "center" as const,
}

const footerSupportTextStyle = {
  fontSize: "14px",
  color: "#374151",
  lineHeight: "1.6",
  margin: "0 0 30px 0",
}

const footerLinkStyle = {
  color: "#6366f1",
  textDecoration: "none",
}

const footerDividerStyle = {
  border: "none",
  borderTop: "1px solid #d1d5db",
  margin: "30px 0 20px 0",
}

const footerLinksColumnStyle = {
  textAlign: "center" as const,
}

const footerNavLinkStyle = {
  fontSize: "14px",
  color: "#6366f1",
  textDecoration: "none",
  margin: "0 5px",
}

const footerSeparatorStyle = {
  fontSize: "14px",
  color: "#9ca3af",
  margin: "0 5px",
}

const footerUnsubscribeStyle = {
  fontSize: "12px",
  color: "#6b7280",
  lineHeight: "1.5",
  margin: "20px 0 15px 0",
}

const footerAddressStyle = {
  fontSize: "12px",
  color: "#6b7280",
  margin: "0 0 25px 0",
}

const socialIconsColumnStyle = {
  textAlign: "center" as const,
}

const socialLinkStyle = {
  textDecoration: "none",
  margin: "0 8px",
  display: "inline-block",
}

const socialIconStyle = {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
}