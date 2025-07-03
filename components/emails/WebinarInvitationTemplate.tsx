import { Body, Container, Column, Head, Html, Img, Link, Preview, Row, Section, Text } from "@react-email/components"

export const WebinarInvitationTemplate = () => {
  return (
    <Html>
      <Preview>Quick Book Your Spot On Saturday's Webinar - April 7th @ 3:30 PM - Register Now</Preview>
      <Head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
            * {
              font-family: 'DM Sans', Arial, sans-serif;
              box-sizing: border-box;
            }
            
            /* Mobile First Ultra-Responsive Design */
            @media only screen and (max-width: 600px) {
              .container {
                width: 100% !important;
                max-width: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
              }
              
              .mobile-full-width {
                width: 100% !important;
                display: block !important;
                padding: 0 !important;
              }
              
              .mobile-center {
                text-align: center !important;
                margin-left: auto !important;
                margin-right: auto !important;
              }
              
              .mobile-stack {
                display: block !important;
                width: 100% !important;
                padding: 0 !important;
                margin-bottom: 15px !important;
              }
              
              .mobile-hide {
                display: none !important;
                visibility: hidden !important;
                height: 0 !important;
                width: 0 !important;
                overflow: hidden !important;
              }
              
              /* Header Mobile */
              .mobile-header-padding {
                padding: 15px 12px !important;
              }
              
              .mobile-header-logo {
                font-size: 16px !important;
              }
              
              .mobile-header-link {
                font-size: 11px !important;
              }
              
              /* Hero Section Mobile */
              .mobile-hero-padding {
                padding: 30px 15px !important;
              }
              
              .mobile-webinar-letter {
                width: 35px !important;
                height: 35px !important;
                font-size: 18px !important;
                line-height: 35px !important;
                margin: 0 2px 10px 2px !important;
              }
              
              /* Main CTA Section Mobile */
              .mobile-cta-padding {
                padding: 30px 15px !important;
              }
              
              .mobile-cta-title {
                font-size: 24px !important;
                line-height: 1.2 !important;
                margin-bottom: 15px !important;
              }
              
              .mobile-cta-subtitle {
                font-size: 28px !important;
                line-height: 1.3 !important;
                margin-bottom: 20px !important;
              }
              
              .mobile-date-text {
                font-size: 14px !important;
                margin-bottom: 25px !important;
              }
              
              .mobile-speaker-image {
                width: 80px !important;
                height: 80px !important;
                margin: 0 auto 15px auto !important;
              }
              
              .mobile-speaker-name {
                font-size: 16px !important;
                margin-bottom: 15px !important;
              }
              
              .mobile-description-text {
                font-size: 13px !important;
                line-height: 1.5 !important;
                margin-bottom: 25px !important;
                padding: 0 10px !important;
              }
              
              .mobile-cta-button {
                font-size: 14px !important;
                padding: 15px 25px !important;
                margin: 0 auto !important;
                display: block !important;
                width: auto !important;
              }
              
              /* Learning Section Mobile */
              .mobile-learning-padding {
                padding: 30px 15px !important;
              }
              
              .mobile-learning-title {
                font-size: 22px !important;
                margin-bottom: 25px !important;
              }
              
              .mobile-learning-item {
                font-size: 14px !important;
                line-height: 1.5 !important;
                margin-bottom: 12px !important;
                text-align: left !important;
                padding-left: 20px !important;
              }
              
              /* Countdown Section Mobile */
              .mobile-countdown-padding {
                padding: 30px 15px !important;
              }
              
              .mobile-countdown-title {
                font-size: 20px !important;
                margin-bottom: 25px !important;
              }
              
              .mobile-countdown-container {
                margin-bottom: 20px !important;
              }
              
              .mobile-countdown-item {
                display: inline-block !important;
                margin: 0 8px !important;
                text-align: center !important;
              }
              
              .mobile-countdown-number {
                font-size: 28px !important;
                line-height: 1.2 !important;
                margin-bottom: 5px !important;
              }
              
              .mobile-countdown-label {
                font-size: 11px !important;
              }
              
              .mobile-countdown-separator {
                font-size: 24px !important;
                margin: 0 5px !important;
                color: rgba(255, 255, 255, 0.7) !important;
              }
              
              .mobile-hurry-text {
                font-size: 18px !important;
                margin-bottom: 20px !important;
              }
              
              /* Footer Mobile */
              .mobile-footer-padding {
                padding: 25px 15px !important;
              }
              
              .mobile-social-icons {
                margin-bottom: 20px !important;
              }
              
              .mobile-social-icon {
                margin: 0 8px !important;
              }
              
              .mobile-footer-text {
                font-size: 11px !important;
                line-height: 1.4 !important;
                margin-bottom: 15px !important;
              }
              
              .mobile-copyright {
                font-size: 10px !important;
              }
            }
            
            /* Tablet Responsive (601px - 768px) */
            @media only screen and (min-width: 601px) and (max-width: 768px) {
              .tablet-padding {
                padding: 25px 20px !important;
              }
              
              .tablet-cta-title {
                font-size: 28px !important;
              }
              
              .tablet-cta-subtitle {
                font-size: 32px !important;
              }
            }
            
            /* Small Mobile (320px - 480px) */
            @media only screen and (max-width: 480px) {
              .small-mobile-webinar-letter {
                width: 30px !important;
                height: 30px !important;
                font-size: 16px !important;
                line-height: 30px !important;
                margin: 0 1px 8px 1px !important;
              }
              
              .small-mobile-cta-title {
                font-size: 22px !important;
              }
              
              .small-mobile-cta-subtitle {
                font-size: 26px !important;
              }
              
              .small-mobile-countdown-number {
                font-size: 24px !important;
              }
              
              .small-mobile-countdown-item {
                margin: 0 5px !important;
              }
            }
          `}
        </style>
      </Head>
      <Body style={bodyStyle}>
        <Container style={containerStyle} className="container">
          {/* Header Section */}
          <Section style={headerSectionStyle} className="mobile-header-padding">
            <Row>
              <Column style={logoColumnStyle} className="mobile-stack">
                <Text style={logoStyle} className="mobile-header-logo">
                  YOURLOGO
                </Text>
              </Column>
              <Column style={viewBrowserColumnStyle} className="mobile-stack mobile-center">
                <Link href="#" style={viewBrowserLinkStyle} className="mobile-header-link">
                  View this in the browser
                </Link>
              </Column>
            </Row>
          </Section>

          {/* Hero WEBINAR Section */}
          <Section style={heroSectionStyle} className="mobile-hero-padding">
            <div style={webinarContainerStyle}>
              <div style={webinarLetterStyle} className="mobile-webinar-letter small-mobile-webinar-letter">
                W
              </div>
              <div style={webinarLetterStyle} className="mobile-webinar-letter small-mobile-webinar-letter">
                E
              </div>
              <div style={webinarLetterStyle} className="mobile-webinar-letter small-mobile-webinar-letter">
                B
              </div>
              <div style={webinarLetterStyle} className="mobile-webinar-letter small-mobile-webinar-letter">
                I
              </div>
              <div style={webinarLetterStyle} className="mobile-webinar-letter small-mobile-webinar-letter">
                N
              </div>
              <div style={webinarLetterStyle} className="mobile-webinar-letter small-mobile-webinar-letter">
                A
              </div>
              <div style={webinarLetterStyle} className="mobile-webinar-letter small-mobile-webinar-letter">
                R
              </div>
            </div>
          </Section>

          {/* Main CTA Section */}
          <Section style={ctaSectionStyle} className="mobile-cta-padding tablet-padding">
            <Text style={ctaTitleStyle} className="mobile-cta-title tablet-cta-title small-mobile-cta-title">
              Quick Book Your Spot On
            </Text>
            <Text
              style={ctaSubtitleStyle}
              className="mobile-cta-subtitle tablet-cta-subtitle small-mobile-cta-subtitle"
            >
              Saturday's Webinar
            </Text>

            <Text style={dateTextStyle} className="mobile-date-text">
              Saturday 7 April @ 3:30 PM
            </Text>

            <Img
              src="https://cdn.templates.unlayer.com/assets/1619351569487-j.png"
              alt="William James"
              style={speakerImageStyle}
              className="mobile-speaker-image"
            />

            <Text style={speakerNameStyle} className="mobile-speaker-name">
              William James
            </Text>

            <Text style={descriptionTextStyle} className="mobile-description-text">
              Lorem Ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web
              designs. The passage is attributed to an unknown typesetter in the 15th century
            </Text>

            <Link href="#" style={ctaButtonStyle} className="mobile-cta-button">
              REGISTER YOUR FREE PLACE
            </Link>
          </Section>

          {/* Learning Section */}
          <Section style={learningSectionStyle} className="mobile-learning-padding">
            <Text style={learningTitleStyle} className="mobile-learning-title">
              You will Learn!
            </Text>

            <ul style={learningListStyle}>
              <li style={learningItemStyle} className="mobile-learning-item">
                Lorem Ipsum, or lipsum as it is sometimes known.
              </li>
              <li style={learningItemStyle} className="mobile-learning-item">
                Dummy text used in laying out print, graphic or web designs.
              </li>
              <li style={learningItemStyle} className="mobile-learning-item">
                The passage is attributed to an unknown typesetter in the 15th century
              </li>
              <li style={learningItemStyle} className="mobile-learning-item">
                Dummy text used in laying out print, graphic or web designs.
              </li>
            </ul>
          </Section>

          {/* Countdown Section */}
          <Section style={countdownSectionStyle} className="mobile-countdown-padding">
            <Text style={countdownTitleStyle} className="mobile-countdown-title">
              Time Remaining
            </Text>

            <div style={countdownContainerStyle} className="mobile-countdown-container">
              <div style={countdownItemStyle} className="mobile-countdown-item small-mobile-countdown-item">
                <Text style={countdownNumberStyle} className="mobile-countdown-number small-mobile-countdown-number">
                  00
                </Text>
                <Text style={countdownLabelStyle} className="mobile-countdown-label">
                  Days
                </Text>
              </div>
              <Text style={countdownSeparatorStyle} className="mobile-countdown-separator">
                :
              </Text>
              <div style={countdownItemStyle} className="mobile-countdown-item small-mobile-countdown-item">
                <Text style={countdownNumberStyle} className="mobile-countdown-number small-mobile-countdown-number">
                  00
                </Text>
                <Text style={countdownLabelStyle} className="mobile-countdown-label">
                  Hours
                </Text>
              </div>
              <Text style={countdownSeparatorStyle} className="mobile-countdown-separator">
                :
              </Text>
              <div style={countdownItemStyle} className="mobile-countdown-item small-mobile-countdown-item">
                <Text style={countdownNumberStyle} className="mobile-countdown-number small-mobile-countdown-number">
                  00
                </Text>
                <Text style={countdownLabelStyle} className="mobile-countdown-label">
                  Minutes
                </Text>
              </div>
              <Text style={countdownSeparatorStyle} className="mobile-countdown-separator">
                :
              </Text>
              <div style={countdownItemStyle} className="mobile-countdown-item small-mobile-countdown-item">
                <Text style={countdownNumberStyle} className="mobile-countdown-number small-mobile-countdown-number">
                  00
                </Text>
                <Text style={countdownLabelStyle} className="mobile-countdown-label">
                  Seconds
                </Text>
              </div>
            </div>

            <Text style={hurryTextStyle} className="mobile-hurry-text">
              Hurry Up!
            </Text>

            <Link href="#" style={countdownButtonStyle} className="mobile-cta-button">
              REGISTER YOUR FREE PLACE
            </Link>
          </Section>

          {/* Footer Section */}
          <Section style={footerSectionStyle} className="mobile-footer-padding">
            {/* Social Media Icons */}
            <div style={socialIconsContainerStyle} className="mobile-social-icons">
              <Link href="#" style={socialLinkStyle} className="mobile-social-icon">
                <Img
                  src="https://cdn.tools.unlayer.com/social/icons/circle-black/facebook.png"
                  alt="Facebook"
                  style={socialIconStyle}
                />
              </Link>
              <Link href="#" style={socialLinkStyle} className="mobile-social-icon">
                <Img
                  src="https://cdn.tools.unlayer.com/social/icons/circle-black/twitter.png"
                  alt="Twitter"
                  style={socialIconStyle}
                />
              </Link>
              <Link href="#" style={socialLinkStyle} className="mobile-social-icon">
                <Img
                  src="https://cdn.tools.unlayer.com/social/icons/circle-black/linkedin.png"
                  alt="LinkedIn"
                  style={socialIconStyle}
                />
              </Link>
              <Link href="#" style={socialLinkStyle} className="mobile-social-icon">
                <Img
                  src="https://cdn.tools.unlayer.com/social/icons/circle-black/instagram.png"
                  alt="Instagram"
                  style={socialIconStyle}
                />
              </Link>
            </div>

            <Text style={footerTextStyle} className="mobile-footer-text">
              Lorem Ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web
              designs. The passage is attributed to an unknown typesetter in the 15th century
            </Text>

            <Text style={copyrightStyle} className="mobile-copyright">
              © 2024 Company. All Rights Reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default WebinarInvitationTemplate

// Ultra-Responsive Email-Safe Styles with Perfect Alignment
const bodyStyle = {
  fontFamily: "'DM Sans', Arial, sans-serif",
  backgroundColor: "#e8f4fd",
  margin: "0",
  padding: "0",
  lineHeight: "1.6",
  WebkitTextSizeAdjust: "100%",
  msTextSizeAdjust: "100%",
  width: "100%",
}

const containerStyle = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "0",
  maxWidth: "600px",
  width: "100%",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
}

// Header Section Styles
const headerSectionStyle = {
  backgroundColor: "#e67e22",
  padding: "15px 30px",
}

const logoColumnStyle = {
  width: "50%",
  verticalAlign: "middle" as const,
}

const viewBrowserColumnStyle = {
  width: "50%",
  verticalAlign: "middle" as const,
  textAlign: "right" as const,
}

const logoStyle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0",
  letterSpacing: "1px",
}

const viewBrowserLinkStyle = {
  fontSize: "12px",
  color: "#ffffff",
  textDecoration: "underline",
  opacity: "0.9",
}

// Hero Section Styles
const heroSectionStyle = {
  backgroundColor: "#e8f4fd",
  padding: "40px 30px",
  textAlign: "center" as const,
}

const webinarContainerStyle = {
  textAlign: "center" as const,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap" as const,
}

const webinarLetterStyle = {
  width: "45px",
  height: "45px",
  backgroundColor: "#ffffff",
  color: "#e67e22",
  fontSize: "20px",
  fontWeight: "800",
  textAlign: "center" as const,
  lineHeight: "45px",
  margin: "0 3px 15px 3px",
  borderRadius: "4px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  display: "inline-block",
  border: "2px solid #e67e22",
}

// Main CTA Section Styles
const ctaSectionStyle = {
  backgroundColor: "#e67e22",
  padding: "40px 30px",
  textAlign: "center" as const,
}

const ctaTitleStyle = {
  fontSize: "28px",
  fontWeight: "400",
  color: "#ffffff",
  margin: "0 0 10px 0",
  lineHeight: "1.3",
}

const ctaSubtitleStyle = {
  fontSize: "36px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 25px 0",
  lineHeight: "1.2",
}

const dateTextStyle = {
  fontSize: "16px",
  fontWeight: "500",
  color: "#ffffff",
  margin: "0 0 30px 0",
  opacity: "0.95",
}

const speakerImageStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  border: "4px solid #ffffff",
  display: "block",
  margin: "0 auto 20px auto",
}

const speakerNameStyle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 20px 0",
}

const descriptionTextStyle = {
  fontSize: "14px",
  fontWeight: "400",
  color: "#ffffff",
  margin: "0 0 30px 0",
  lineHeight: "1.6",
  opacity: "0.95",
  maxWidth: "400px",
  marginLeft: "auto",
  marginRight: "auto",
}

const ctaButtonStyle = {
  backgroundColor: "transparent",
  color: "#ffffff",
  border: "2px solid #ffffff",
  padding: "16px 32px",
  borderRadius: "25px",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "700",
  display: "inline-block",
  letterSpacing: "0.5px",
  transition: "all 0.3s ease",
}

// Learning Section Styles
const learningSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "40px 30px",
}

const learningTitleStyle = {
  fontSize: "28px",
  fontWeight: "700",
  color: "#2c3e50",
  margin: "0 0 30px 0",
  textAlign: "center" as const,
}

const learningListStyle = {
  margin: "0",
  padding: "0 0 0 20px",
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto",
}

const learningItemStyle = {
  fontSize: "16px",
  fontWeight: "400",
  color: "#2c3e50",
  margin: "0 0 15px 0",
  lineHeight: "1.6",
  listStyleType: "disc",
}

// Countdown Section Styles
const countdownSectionStyle = {
  backgroundColor: "#e67e22",
  padding: "40px 30px",
  textAlign: "center" as const,
}

const countdownTitleStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 30px 0",
}

const countdownContainerStyle = {
  textAlign: "center" as const,
  marginBottom: "25px",
}

const countdownItemStyle = {
  display: "inline-block",
  margin: "0 10px",
  textAlign: "center" as const,
  verticalAlign: "top" as const,
}

const countdownNumberStyle = {
  fontSize: "36px",
  fontWeight: "800",
  color: "#ffffff",
  margin: "0 0 8px 0",
  lineHeight: "1.1",
  display: "block",
}

const countdownLabelStyle = {
  fontSize: "12px",
  fontWeight: "500",
  color: "#ffffff",
  margin: "0",
  opacity: "0.9",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
}

const countdownSeparatorStyle = {
  fontSize: "30px",
  fontWeight: "700",
  color: "rgba(255, 255, 255, 0.8)",
  margin: "0 8px",
  display: "inline-block",
  verticalAlign: "top" as const,
  lineHeight: "1.2",
}

const hurryTextStyle = {
  fontSize: "22px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 25px 0",
}

const countdownButtonStyle = {
  backgroundColor: "transparent",
  color: "#ffffff",
  border: "2px solid #ffffff",
  padding: "16px 32px",
  borderRadius: "25px",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "700",
  display: "inline-block",
  letterSpacing: "0.5px",
  transition: "all 0.3s ease",
}

// Footer Section Styles
const footerSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "30px 30px 25px 30px",
  textAlign: "center" as const,
}

const socialIconsContainerStyle = {
  textAlign: "center" as const,
  marginBottom: "25px",
}

const socialLinkStyle = {
  textDecoration: "none",
  margin: "0 10px",
  display: "inline-block",
}

const socialIconStyle = {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
}

const footerTextStyle = {
  fontSize: "12px",
  fontWeight: "400",
  color: "#7f8c8d",
  margin: "0 0 20px 0",
  lineHeight: "1.5",
  maxWidth: "400px",
  marginLeft: "auto",
  marginRight: "auto",
}

const copyrightStyle = {
  fontSize: "11px",
  fontWeight: "400",
  color: "#95a5a6",
  margin: "0",
}
