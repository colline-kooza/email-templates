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

export const ITConsultingEmailTemplate = () => {
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
              .hero-title {
                font-size: 28px !important;
                line-height: 1.2 !important;
              }
              .hero-subtitle {
                font-size: 14px !important;
              }
              .hero-description {
                font-size: 12px !important;
              }
              .hero-content {
                padding: 40px 20px !important;
              }
              .hero-button {
                padding: 10px 20px !important;
                font-size: 13px !important;
              }
            }
            @media only screen and (max-width: 480px) {
              .hero-title {
                font-size: 24px !important;
              }
              .hero-content {
                padding: 30px 15px !important;
              }
            }
            @media only screen and (max-width: 600px) {
              .service-image-col, .service-text-col {
                width: 100% !important;
                display: block !important;
                padding-left: 0 !important;
                padding-right: 0 !important;
                padding-bottom: 20px !important;
              }
              .service-text-col {
                padding-top: 0 !important;
                padding-bottom: 0 !important;
              }
              .service-image {
                max-width: 100% !important;
                height: auto !important;
              }
            }
          `}
        </style>
      </Head>
      <Preview>Navigating the digital landscape with strategic IT infrastructure guidance</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Hero Section - Improved Responsive Design */}
          <Section style={heroSectionStyle}>
            <table width="100%" cellPadding="0" cellSpacing="0" >
              <tr>
                <td style={heroContentStyle} className="hero-content">
                  <table width="100%" cellPadding="0" cellSpacing="0" >
                    <tr>
                      <td style={heroTextContainerStyle}>
                        <Text style={heroTitleStyle} className="hero-title">
                          Navigating the digital landscape
                        </Text>
                        <Text style={heroSubtitleStyle} className="hero-subtitle">
                          with strategic IT infrastructure guidance
                        </Text>
                        <Text style={heroDescriptionStyle} className="hero-description">
                          Transform your business with cutting-edge technology solutions designed to drive growth, efficiency, and
                          innovation in today's digital world.
                        </Text>
                        <table cellPadding="0" cellSpacing="0" >
                          <tr>
                            <td style={heroButtonContainerStyle}>
                              <Link href="#" style={heroButtonStyle} className="hero-button">
                                Discover Solutions
                              </Link>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </Section>

          {/* Service Section 1 - Cloud Infrastructure */}
          <Section style={serviceSectionStyle}>
            <table width="100%" cellPadding="0" cellSpacing="0" >
              <tr>
                <td style={serviceContainerStyle}>
                  <table width="100%" cellPadding="0" cellSpacing="0" >
                    <tr>
                  
                      <td style={serviceTextColumnStyle} className="service-text-col">
                        <Text style={serviceTitleStyle}>Cloud Infrastructure Solutions</Text>
                        <Text style={serviceDescriptionStyle}>
                          Migrate to the cloud with confidence. Our expert team designs scalable, secure cloud architectures
                          that reduce costs while improving performance and reliability for your business operations.
                        </Text>
                        <Link href="#" style={serviceButtonStyle}>
                          Learn More
                        </Link>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </Section>

          {/* Service Section 2 - Cybersecurity Services */}
          <Section style={serviceSectionAltStyle}>
            <table width="100%" cellPadding="0" cellSpacing="0" >
              <tr>
                <td style={serviceContainerStyle}>
                  <table width="100%" cellPadding="0" cellSpacing="0" >
                    <tr>
                      <td style={serviceTextColumnStyle} className="service-text-col">
                        <Text style={serviceTitleStyle}>Cybersecurity & Data Protection</Text>
                        <Text style={serviceDescriptionStyle}>
                          Protect your digital assets with comprehensive security solutions. From threat assessment to incident
                          response, we safeguard your business against evolving cyber threats and ensure compliance.
                        </Text>
                        <Link href="#" style={serviceButtonStyle}>
                          Learn More
                        </Link>
                      </td>
                      
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </Section>

          {/* Service Section 3 - Digital Transformation */}
          <Section style={serviceSectionStyle}>
            <table width="100%" cellPadding="0" cellSpacing="0" >
              <tr>
                <td style={serviceContainerStyle}>
                  <table width="100%" cellPadding="0" cellSpacing="0" >
                    <tr>
                    
                      <td style={serviceTextColumnStyle} className="service-text-col">
                        <Text style={serviceTitleStyle}>Digital Transformation Strategy</Text>
                        <Text style={serviceDescriptionStyle}>
                          Modernize your business processes with strategic digital transformation. We help organizations
                          leverage technology to improve efficiency, enhance customer experience, and drive innovation.
                        </Text>
                        <Link href="#" style={serviceButtonStyle}>
                          Learn More
                        </Link>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </Section>

          {/* Service Section 4 - IT Support & Maintenance */}
          <Section style={serviceSectionAltStyle}>
            <table width="100%" cellPadding="0" cellSpacing="0" >
              <tr>
                <td style={serviceContainerStyle}>
                  <table width="100%" cellPadding="0" cellSpacing="0" >
                    <tr>
                      <td style={serviceTextColumnStyle} className="service-text-col">
                        <Text style={serviceTitleStyle}>24/7 IT Support & Maintenance</Text>
                        <Text style={serviceDescriptionStyle}>
                          Keep your systems running smoothly with our comprehensive IT support services. From proactive
                          monitoring to rapid issue resolution, we ensure your technology works when you need it most.
                        </Text>
                        <Link href="#" style={serviceButtonStyle}>
                          Learn More
                        </Link>
                      </td>
                      
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </Section>

          {/* Call to Action Section */}
          <Section style={ctaSectionStyle}>
            <Text style={ctaTitleStyle}>Ready to Transform Your IT Infrastructure?</Text>
            <Text style={ctaDescriptionStyle}>
              Let our experts assess your current technology landscape and design a customized solution that drives your
              business forward.
            </Text>
            <Row>
              <Column style={ctaButtonColumnStyle}>
                <Link href="#" style={primaryCtaButtonStyle}>
                  Schedule Consultation
                </Link>
              </Column>
            
            </Row>
          </Section>

          {/* Why Choose Us Section */}
          <Section style={whyChooseSectionStyle}>
            <Text style={whyChooseTitleStyle}>Why Choose Our IT Consulting Services?</Text>
            <Row>
              <Column style={benefitColumnStyle}>
                <Text style={benefitIconStyle}>🎯</Text>
                <Text style={benefitTitleStyle}>Strategic Approach</Text>
                <Text style={benefitDescStyle}>
                  Technology solutions aligned with your business objectives and growth plans.
                </Text>
              </Column>
              
              <Column style={benefitColumnStyle}>
                <Text style={benefitIconStyle}>📞</Text>
                <Text style={benefitTitleStyle}>Ongoing Support</Text>
                <Text style={benefitDescStyle}>
                  Continuous monitoring and support to ensure optimal performance and security.
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Footer Section */}
          <Section style={footerSectionStyle}>
            <Row>
              <Column style={socialIconsColumnStyle}>
                <Link href="#" style={socialLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded-black/facebook.png"
                    alt="Facebook"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded-black/twitter.png"
                    alt="Twitter"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded-black/linkedin.png"
                    alt="LinkedIn"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded-black/instagram.png"
                    alt="Instagram"
                    style={socialIconStyle}
                  />
                </Link>
              </Column>
            </Row>
            <Hr style={footerDividerStyle} />
            <Row>
              <Column style={footerLinksColumnStyle}>
                <Link href="#" style={footerLinkStyle}>
                  Home
                </Link>
                <Text style={footerSeparatorStyle}>|</Text>
                <Link href="#" style={footerLinkStyle}>
                  Services
                </Link>
                <Text style={footerSeparatorStyle}>|</Text>
                <Link href="#" style={footerLinkStyle}>
                  About
                </Link>
                <Text style={footerSeparatorStyle}>|</Text>
                <Link href="#" style={footerLinkStyle}>
                  Contact us
                </Link>
              </Column>
            </Row>
            <Text style={footerDescriptionStyle}>
              Your trusted partner in digital transformation and IT infrastructure excellence. Empowering businesses
              with innovative technology solutions.
            </Text>
            <Text style={copyrightStyle}>Copyright © IT Solutions Pro | All Rights Reserved</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default ITConsultingEmailTemplate

// Styles
const bodyStyle = {
  fontFamily: "'Roboto', Arial, sans-serif",
  backgroundColor: "#f0f2f5",
  margin: "0",
  padding: "20px 0",
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

// Improved Hero Section Styles
const heroSectionStyle = {
  backgroundImage: 'url("https://utfs.io/f/90a7d260-91c6-4cee-9db3-7534b83c8c2a-hec92g.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
}

const heroContentStyle = {
  padding: "60px 30px",
  width: "100%",
  boxSizing: "border-box" as const,
}

const heroTextContainerStyle = {
  width: "100%",
  maxWidth: "500px",
}

const heroTitleStyle = {
  fontSize: "36px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 15px 0",
  lineHeight: "1.2",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
  wordBreak: "break-word" as const,
}

const heroSubtitleStyle = {
  fontSize: "16px",
  color: "#ffffff",
  margin: "0 0 20px 0",
  lineHeight: "1.4",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
}

const heroDescriptionStyle = {
  fontSize: "14px",
  color: "#ffffff",
  margin: "0 0 25px 0",
  lineHeight: "1.5",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
  opacity: "0.95",
}

const heroButtonContainerStyle = {
  paddingTop: "5px",
}

const heroButtonStyle = {
  backgroundColor: "#ffffff",
  color: "#333333",
  borderRadius: "6px",
  padding: "12px 24px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
}

const serviceSectionStyle = {
  backgroundColor: "#f8f9fa",
  padding: "40px 30px",
  borderBottom: "1px solid #e9ecef",
}

const serviceSectionAltStyle = {
  backgroundColor: "#ffffff",
  padding: "40px 30px",
  borderBottom: "1px solid #e9ecef",
}

const serviceContainerStyle = {
  width: "100%",
  padding: "0",
}

const serviceImageColumnStyle = {
  width: "45%",
  verticalAlign: "middle" as const,
  paddingRight: "20px",
}

const serviceTextColumnStyle = {
  width: "55%",
  verticalAlign: "middle" as const,
  paddingLeft: "20px",
}

const serviceImageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
}

const serviceTitleStyle = {
  fontSize: "22px",
  fontWeight: "700",
  color: "#333333",
  margin: "0 0 15px 0",
  lineHeight: "1.3",
}

const serviceDescriptionStyle = {
  fontSize: "14px",
  color: "#666666",
  lineHeight: "1.6",
  margin: "0 0 20px 0",
}

const serviceButtonStyle = {
  backgroundColor: "#4d90fe",
  color: "#ffffff",
  borderRadius: "6px",
  padding: "12px 24px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  boxShadow: "0 4px 12px rgba(77, 144, 254, 0.3)",
}

const ctaSectionStyle = {
  backgroundColor: "#4d90fe",
  padding: "50px 30px",
  textAlign: "center" as const,
}

const ctaTitleStyle = {
  fontSize: "28px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 15px 0",
  lineHeight: "1.3",
}

const ctaDescriptionStyle = {
  fontSize: "16px",
  color: "#ffffff",
  margin: "0 0 30px 0",
  lineHeight: "1.5",
  opacity: "0.95",
}

const ctaButtonColumnStyle = {
  width: "50%",
  textAlign: "center" as const,
  padding: "0 10px",
}

const primaryCtaButtonStyle = {
  backgroundColor: "#ffffff",
  color: "#4d90fe",
  borderRadius: "6px",
  padding: "14px 24px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
}

const secondaryCtaButtonStyle = {
  backgroundColor: "transparent",
  color: "#ffffff",
  borderRadius: "6px",
  padding: "14px 24px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  border: "2px solid #ffffff",
}

const whyChooseSectionStyle = {
  backgroundColor: "#f8f9fa",
  padding: "50px 30px",
}

const whyChooseTitleStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#333333",
  margin: "0 0 40px 0",
  textAlign: "center" as const,
}

const benefitColumnStyle = {
  width: "33.33%",
  verticalAlign: "top" as const,
  textAlign: "center" as const,
  padding: "0 15px",
}

const benefitIconStyle = {
  fontSize: "32px",
  margin: "0 0 15px 0",
  display: "block",
}

const benefitTitleStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#333333",
  margin: "0 0 10px 0",
}

const benefitDescStyle = {
  fontSize: "14px",
  color: "#666666",
  lineHeight: "1.5",
  margin: "0",
}

const footerSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "40px 30px",
  textAlign: "center" as const,
}

const socialIconsColumnStyle = {
  textAlign: "center" as const,
  padding: "0 0 20px 0",
}

const socialLinkStyle = {
  textDecoration: "none",
  margin: "0 8px",
  display: "inline-block",
}

const socialIconStyle = {
  width: "32px",
  height: "32px",
  borderRadius: "10%",
}

const footerDividerStyle = {
  border: "none",
  borderTop: "1px solid #e9ecef",
  margin: "20px 0",
}

const footerLinksColumnStyle = {
  textAlign: "center" as const,
}

const footerLinkStyle = {
  fontSize: "14px",
  color: "#333333",
  textDecoration: "none",
  margin: "0 5px",
}

const footerSeparatorStyle = {
  fontSize: "14px",
  color: "#cccccc",
  margin: "0 5px",
}

const footerDescriptionStyle = {
  fontSize: "14px",
  color: "#666666",
  margin: "20px 0 15px 0",
  lineHeight: "1.5",
  fontWeight: "500",
}

const copyrightStyle = {
  fontSize: "12px",
  color: "#999999",
  margin: "0",
}