import { Body, Container, Column, Head, Html, Img, Link, Preview, Row, Section, Text } from "@react-email/components"

export const DemoCallTemplate = () => {
  return (
    <Html>
      <Preview>Join Our Demo Call - Complete Guide to Coupon Marketing</Preview>
      <Head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
            * {
              font-family: 'DM Sans', Arial, sans-serif;
              box-sizing: border-box;
            }
            
            /* Mobile First Responsive Design */
            @media only screen and (max-width: 600px) {
              .mobile-full-width {
                width: 100% !important;
                display: block !important;
              }
              
              .mobile-center {
                text-align: center !important;
              }
              
              .mobile-stack {
                display: block !important;
                width: 100% !important;
                padding: 0 !important;
              }
              
              .mobile-hide {
                display: none !important;
              }
              
              .mobile-nav-link {
                font-size: 12px !important;
                margin: 0 8px !important;
              }
              
              .mobile-hero-title {
                font-size: 32px !important;
                line-height: 1.2 !important;
              }
              
              .mobile-hero-subtitle {
                font-size: 14px !important;
                line-height: 1.5 !important;
              }
              
              .mobile-hero-image {
                width: 100% !important;
                max-width: 350px !important;
                height: auto !important;
                margin: 0 auto 20px auto !important;
                display: block !important;
              }
              
              .mobile-content-text {
                font-size: 14px !important;
                line-height: 1.6 !important;
                text-align: left !important;
              }
              
              .mobile-section-title {
                font-size: 18px !important;
                text-align: left !important;
              }
              
              .mobile-list-item {
                font-size: 14px !important;
                text-align: left !important;
                margin-bottom: 8px !important;
              }
              
              .mobile-social-icons {
                margin: 0 8px !important;
              }
              
              .mobile-footer-text {
                font-size: 12px !important;
                line-height: 1.5 !important;
                text-align: center !important;
              }
              
              .mobile-section-padding {
                padding: 25px 20px !important;
              }
            }
            
            /* Tablet Responsive */
            @media only screen and (min-width: 601px) and (max-width: 768px) {
              .tablet-hero-image {
                max-width: 400px !important;
              }
              
              .tablet-padding {
                padding: 30px 25px !important;
              }
            }
          `}
        </style>
      </Head>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header Section */}
          <Section style={headerSectionStyle}>
            <Row>
              <Column style={logoColumnStyle} className="mobile-stack mobile-center">
                <Text style={logoTextStyle}>[Your Logo]</Text>
              </Column>
              <Column style={navColumnStyle} className="mobile-stack mobile-center">
                <Link href="#" style={navLinkStyle} className="mobile-nav-link">
                  About Us
                </Link>
              
                
              </Column>
            </Row>
          </Section>

          {/* Hero Section */}
          <Section style={heroSectionStyle}>
            <Text style={heroTitleStyle} className="mobile-hero-title">
              Join Our
              <br />
              Demo Call
            </Text>

            <Text style={heroSubtitleStyle} className="mobile-hero-subtitle">
              Complete Guide to coupon marketing for small
              <br />
              and large businesses
            </Text>

            <Img
              src="https://cdn.templates.unlayer.com/assets/1656922142521-tanzeel-2.gif"
              alt="Person at desk with computer for demo call"
              style={heroImageStyle}
              className="mobile-hero-image tablet-hero-image object-cover"
            />
          </Section>

          {/* Content Section */}
          <Section style={contentSectionStyle} className="mobile-section-padding">
            <Text style={contentTextStyle} className="mobile-content-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
              lacus vel facilisis. Duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit
              cursus risus at ultrices gravida.
            </Text>

            <Text style={sectionTitleStyle} className="mobile-section-title">
              Session includes:
            </Text>

            <div style={listContainerStyle}>
              <Text style={listItemStyle} className="mobile-list-item">
                • Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Text>
              <Text style={listItemStyle} className="mobile-list-item">
                • Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Text>
              <Text style={listItemStyle} className="mobile-list-item">
                • Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Text>
              <Text style={listItemStyle} className="mobile-list-item">
                • Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Text>
            </div>
          </Section>

          {/* Pre-Footer Section */}
          <Section style={preFooterSectionStyle}>
            <Text style={preFooterLogoStyle}>[Your Logo]</Text>
            <Text style={preFooterTextStyle} className="mobile-footer-text">
              This is a new Text block. Change the text.
            </Text>

            {/* Social Media Icons */}
            <Row style={socialRowStyle}>
              <Column style={socialColumnStyle} className="mobile-center">
                <Link href="#" style={socialLinkStyle} className="mobile-social-icons">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-white/facebook.png"
                    alt="Facebook"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle} className="mobile-social-icons">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-white/twitter.png"
                    alt="Twitter"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle} className="mobile-social-icons">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-white/linkedin.png"
                    alt="LinkedIn"
                    style={socialIconStyle}
                  />
                </Link>
              </Column>
            </Row>
          </Section>

          {/* Footer Section */}
          <Section style={footerSectionStyle}>
            <Text style={footerTextStyle} className="mobile-footer-text">
              This is a new Text block. Change the text.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default DemoCallTemplate

// Comprehensive Email-Safe Styles
const bodyStyle = {
  fontFamily: "'DM Sans', Arial, sans-serif",
  backgroundColor: "#f5f5f5",
  margin: "0",
  padding: "20px 0",
  lineHeight: "1.6",
  WebkitTextSizeAdjust: "100%",
  msTextSizeAdjust: "100%",
}

const containerStyle = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "0",
  maxWidth: "600px",
  width: "100%",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
}

const headerSectionStyle = {
  backgroundColor: "#2d3a8c",
  padding: "10px 10px",
}

const logoColumnStyle = {
  width: "40%",
  verticalAlign: "middle" as const,
}

const navColumnStyle = {
  width: "60%",
  verticalAlign: "middle" as const,
  textAlign: "right" as const,
}

const logoTextStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#ffffff",
  margin: "0",
}

const navLinkStyle = {
  fontSize: "14px",
  fontWeight: "400",
  color: "#ffffff",
  textDecoration: "none",
  margin: "0 15px",
  opacity: "0.9",
}

const heroSectionStyle = {
  backgroundColor: "#a8c8ec",
  backgroundImage: "linear-gradient(135deg, #a8c8ec 0%, #7fb3d3 50%, #5b9bd5 100%)",
  paddingTop: "25px",
  textAlign: "center" as const,
}

const heroTitleStyle = {
  fontSize: "38px",
  fontWeight: "800",
  color: "#2c3e50",
  margin: "0 0 20px 0",
  lineHeight: "1.1",
  textAlign: "center" as const,
}

const heroSubtitleStyle = {
  fontSize: "16px",
  fontWeight: "400",
  color: "#34495e",
  margin: "0 0 40px 0",
  lineHeight: "1.5",
  textAlign: "center" as const,
}

const heroImageStyle = {
  width: "100%",
  height: "auto",
//   maxWidth: "450px",
  display: "block",
  margin: "0 auto",
}

const contentSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "50px 20px",
}

const contentTextStyle = {
  fontSize: "15px",
  fontWeight: "400",
  color: "#555555",
  margin: "0 0 35px 0",
  lineHeight: "1.7",
  textAlign: "justify" as const,
}

const sectionTitleStyle = {
  fontSize: "22px",
  fontWeight: "700",
  color: "#2c3e50",
  margin: "0 0 25px 0",
  lineHeight: "1.3",
}

const listContainerStyle = {
  margin: "0",
}

const listItemStyle = {
  fontSize: "15px",
  fontWeight: "400",
  color: "#555555",
  margin: "0 0 12px 0",
  lineHeight: "1.6",
}

const preFooterSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "40px 40px 30px 40px",
  textAlign: "center" as const,
  borderTop: "1px solid #e5e7eb",
}

const preFooterLogoStyle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#2c3e50",
  margin: "0 0 15px 0",
  textAlign: "center" as const,
}

const preFooterTextStyle = {
  fontSize: "14px",
  fontWeight: "400",
  color: "#666666",
  margin: "0 0 25px 0",
  textAlign: "center" as const,
}

const socialRowStyle = {
  marginBottom: "0",
}

const socialColumnStyle = {
  width: "100%",
  textAlign: "center" as const,
}

const socialLinkStyle = {
  textDecoration: "none",
  margin: "0 10px",
  display: "inline-block",
  transition: "transform 0.3s ease",
}

const socialIconStyle = {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
}

const footerSectionStyle = {
  backgroundColor: "#2d3a8c",
  padding: "25px 40px",
  textAlign: "center" as const,
}

const footerTextStyle = {
  fontSize: "13px",
  fontWeight: "400",
  color: "#ffffff",
  margin: "0",
  opacity: "0.9",
}
