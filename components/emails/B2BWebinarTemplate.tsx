import { Body, Container, Column, Head, Html, Img, Link, Preview, Row, Section, Text } from "@react-email/components"

export const B2BWebinarTemplate = () => {
  return (
    <Html>
      <Preview>B2B Marketing Strategies Online Webinar - December 10th, 2024 - Reserve</Preview>
      <Head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
            * {
              font-family: 'DM Sans', Arial, sans-serif;
              box-sizing: border-box;
            }
            
            /* Mobile First Responsive Design - Ultra Responsive */
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
                margin-bottom: 20px !important;
              }
              
              .mobile-hide {
                display: none !important;
                visibility: hidden !important;
                height: 0 !important;
                width: 0 !important;
                overflow: hidden !important;
              }
              
              /* Header Mobile Optimization */
              .mobile-header-padding {
                padding: 15px 12px !important;
              }
              
              .mobile-header-button {
                font-size: 12px !important;
                padding: 8px 16px !important;
                margin: 0 auto !important;
                display: block !important;
                width: auto !important;
                text-align: center !important;
              }
              
              /* Hero Section Mobile */
              .mobile-hero-padding {
                padding: 25px 15px !important;
              }
              
              .mobile-hero-title {
                font-size: 24px !important;
                line-height: 1.2 !important;
                text-align: center !important;
                margin-bottom: 15px !important;
              }
              
              .mobile-hero-subtitle {
                font-size: 28px !important;
                line-height: 1.3 !important;
                text-align: center !important;
                margin-bottom: 20px !important;
              }
              
              .mobile-hero-details {
                font-size: 14px !important;
                text-align: center !important;
                margin-bottom: 8px !important;
              }
              
              .mobile-hero-button {
                font-size: 14px !important;
                padding: 15px 30px !important;
                margin: 25px auto 0 auto !important;
                display: block !important;
                width: auto !important;
                text-align: center !important;
              }
              
              /* Key Point Section Mobile */
              .mobile-keypoint-padding {
                padding: 25px 15px !important;
              }
              
              .mobile-keypoint-title {
                font-size: 18px !important;
                line-height: 1.3 !important;
                text-align: center !important;
                margin-bottom: 20px !important;
              }
              
              .mobile-host-section {
                text-align: center !important;
                margin-top: 20px !important;
              }
              
              .mobile-host-avatar {
                width: 40px !important;
                height: 40px !important;
                margin: 0 auto 8px auto !important;
                display: block !important;
              }
              
              .mobile-host-text {
                font-size: 12px !important;
                text-align: center !important;
              }
              
              /* Brief Section Mobile */
              .mobile-brief-padding {
                padding: 30px 15px !important;
              }
              
              .mobile-brief-title {
                font-size: 20px !important;
                text-align: center !important;
                margin-bottom: 20px !important;
              }
              
              .mobile-brief-text {
                font-size: 14px !important;
                line-height: 1.5 !important;
                text-align: left !important;
                margin-bottom: 25px !important;
              }
              
              .mobile-event-details {
                text-align: center !important;
                margin-bottom: 25px !important;
              }
              
              .mobile-event-title {
                font-size: 18px !important;
                margin-bottom: 15px !important;
              }
              
              .mobile-event-info {
                font-size: 14px !important;
                margin-bottom: 8px !important;
              }
              
              .mobile-brief-button {
                font-size: 14px !important;
                padding: 15px 30px !important;
                margin: 0 auto !important;
                display: block !important;
                width: auto !important;
                text-align: center !important;
              }
              
              /* Videos Section Mobile */
              .mobile-videos-padding {
                padding: 30px 15px !important;
              }
              
              .mobile-videos-title {
                font-size: 22px !important;
                text-align: center !important;
                margin-bottom: 20px !important;
              }
              
              .mobile-videos-desc {
                font-size: 14px !important;
                text-align: center !important;
                margin-bottom: 30px !important;
                line-height: 1.5 !important;
              }
              
              .mobile-video-card {
                width: 100% !important;
                margin-bottom: 25px !important;
                text-align: center !important;
              }
              
              .mobile-video-image {
                width: 100% !important;
                max-width: 280px !important;
                height: auto !important;
                margin: 0 auto 15px auto !important;
                display: block !important;
              }
              
              .mobile-video-text {
                font-size: 13px !important;
                line-height: 1.4 !important;
                text-align: center !important;
                margin-bottom: 15px !important;
                padding: 0 10px !important;
              }
              
              .mobile-video-button {
                font-size: 12px !important;
                padding: 10px 20px !important;
                margin: 0 auto !important;
                display: block !important;
                width: auto !important;
              }
              
              /* Hosts Section Mobile */
              .mobile-hosts-padding {
                padding: 30px 15px !important;
              }
              
              .mobile-hosts-title {
                font-size: 22px !important;
                text-align: center !important;
                margin-bottom: 20px !important;
              }
              
              .mobile-hosts-desc {
                font-size: 14px !important;
                text-align: center !important;
                margin-bottom: 30px !important;
                line-height: 1.5 !important;
              }
              
              .mobile-host-card {
                width: 100% !important;
                margin-bottom: 25px !important;
                text-align: center !important;
              }
              
              .mobile-host-image {
                width: 80px !important;
                height: 80px !important;
                margin: 0 auto 15px auto !important;
                display: block !important;
              }
              
              .mobile-host-name {
                font-size: 16px !important;
                text-align: center !important;
                margin-bottom: 10px !important;
              }
              
              .mobile-host-button {
                font-size: 12px !important;
                padding: 8px 16px !important;
                margin: 0 auto !important;
                display: block !important;
                width: auto !important;
              }
              
              /* Testimonials Section Mobile */
              .mobile-testimonials-padding {
                padding: 30px 15px !important;
              }
              
              .mobile-testimonials-title {
                font-size: 22px !important;
                text-align: center !important;
                margin-bottom: 20px !important;
              }
              
              .mobile-testimonials-desc {
                font-size: 14px !important;
                text-align: center !important;
                margin-bottom: 30px !important;
                line-height: 1.5 !important;
              }
              
              .mobile-testimonial-card {
                width: 100% !important;
                margin-bottom: 20px !important;
                padding: 20px 15px !important;
              }
              
              .mobile-testimonial-name {
                font-size: 16px !important;
                text-align: center !important;
                margin-bottom: 10px !important;
              }
              
              .mobile-testimonial-text {
                font-size: 13px !important;
                line-height: 1.4 !important;
                text-align: center !important;
              }
              
              /* Footer Mobile */
              .mobile-footer-padding {
                padding: 25px 15px !important;
              }
              
              .mobile-footer-logo {
                text-align: center !important;
                margin-bottom: 20px !important;
              }
              
              .mobile-social-icons {
                text-align: center !important;
                margin: 20px 0 !important;
              }
              
              .mobile-social-icon {
                margin: 0 8px !important;
              }
              
              .mobile-footer-text {
                font-size: 11px !important;
                line-height: 1.4 !important;
                text-align: center !important;
              }
              
              /* Utility Classes */
              .mobile-text-center {
                text-align: center !important;
              }
              
              .mobile-margin-auto {
                margin-left: auto !important;
                margin-right: auto !important;
              }
              
              .mobile-block {
                display: block !important;
              }
              
              .mobile-inline-block {
                display: inline-block !important;
              }
            }
            
            /* Tablet Responsive (601px - 768px) */
            @media only screen and (min-width: 601px) and (max-width: 768px) {
              .tablet-padding {
                padding: 25px 20px !important;
              }
              
              .tablet-hero-title {
                font-size: 28px !important;
              }
              
              .tablet-hero-subtitle {
                font-size: 32px !important;
              }
              
              .tablet-video-card {
                width: 48% !important;
                margin-right: 2% !important;
              }
              
              .tablet-host-card {
                width: 48% !important;
                margin-right: 2% !important;
              }
            }
            
            /* Large Mobile (481px - 600px) */
            @media only screen and (min-width: 481px) and (max-width: 600px) {
              .large-mobile-hero-title {
                font-size: 26px !important;
              }
              
              .large-mobile-hero-subtitle {
                font-size: 30px !important;
              }
            }
            
            /* Small Mobile (320px - 480px) */
            @media only screen and (max-width: 480px) {
              .small-mobile-hero-title {
                font-size: 22px !important;
              }
              
              .small-mobile-hero-subtitle {
                font-size: 26px !important;
              }
              
              .small-mobile-padding {
                padding: 20px 12px !important;
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
              <Column style={headerLogoColumnStyle} className="mobile-stack mobile-center">
                <Text style={headerLogoStyle}>
                  Webinar
                  <br />
                  Online
                </Text>
              </Column>
              <Column style={headerButtonColumnStyle} className="mobile-stack mobile-center">
                <Link href="#" style={headerButtonStyle} className="mobile-header-button">
                  JOIN NOW
                </Link>
              </Column>
            </Row>
          </Section>

          {/* Hero Section */}
          <Section style={heroSectionStyle} className="mobile-hero-padding">
            <div >
              <Text
                style={heroTitleStyle}
                className="mobile-hero-title large-mobile-hero-title small-mobile-hero-title"
              >
                B2B
              </Text>
              <Text
                style={heroSubtitleStyle}
                className="mobile-hero-subtitle large-mobile-hero-subtitle small-mobile-hero-subtitle"
              >
                Marketing Strategies
                <br />
                Online Webinar
              </Text>

              <Text style={heroDateStyle} className="mobile-hero-details">
                📅 10th December, 2024
              </Text>
              <Text style={heroLocationStyle} className="mobile-hero-details">
                📍 Hotel Kasa Blanka
              </Text>

              <Link href="#" style={heroButtonStyle} className="mobile-hero-button">
                Reserve
              </Link>
            </div>
          </Section>

          {/* Key Point Section */}
          <Section style={keyPointSectionStyle} className="mobile-keypoint-padding">
            <Row>
              <Column style={keyPointLeftColumnStyle} className="mobile-stack">
                <div style={keyPointBadgeStyle}>KEY POINT</div>
                <Text style={keyPointTitleStyle} className="mobile-keypoint-title">
                  THE WAYS YOU CAN
                  <br />
                  RISE YOUR BUSINESS
                </Text>
              </Column>
              <Column style={keyPointRightColumnStyle} className="mobile-stack mobile-host-section">
                <Text style={hostedByLabelStyle} className="mobile-host-text">
                  HOSTED BY
                </Text>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1621961070456-a.png"
                  alt="Host Avatar"
                  style={hostAvatarStyle}
                  className="mobile-host-avatar"
                />
              </Column>
            </Row>
          </Section>

          {/* Brief Section */}
          <Section style={briefSectionStyle} className="mobile-brief-padding">
            <Row>
              <Column style={briefLeftColumnStyle} className="mobile-stack">
                <Text style={briefTitleStyle} className="mobile-brief-title">
                  BRIEF OF
                  <br />
                  DISCUSS
                </Text>
                <Text style={briefTextStyle} className="mobile-brief-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                  release of Letraset sheets contain.
                </Text>
              </Column>
              <Column style={briefRightColumnStyle} className="mobile-stack mobile-event-details">
                <Text style={placeTitleStyle} className="mobile-event-title">
                  PLACE
                </Text>
                <Text style={placeTextStyle} className="mobile-event-info">
                  Hotel Kasa Blanka
                  <br />
                  San Francisco, CA
                </Text>

                <Text style={timeTitleStyle} className="mobile-event-title">
                  TIME
                </Text>
                <Text style={timeTextStyle} className="mobile-event-info">
                  10:00 AM
                  <br />
                  EST
                </Text>

                <Link href="#" style={briefButtonStyle} className="mobile-brief-button">
                  Reserve
                </Link>
              </Column>
            </Row>
          </Section>

          {/* Offline Videos Section */}
          <Section style={videosSectionStyle} className="mobile-videos-padding">
            <Text style={videosTitleStyle} className="mobile-videos-title">
              OFFLINE VIDEOS
            </Text>
            <Text style={videosDescStyle} className="mobile-videos-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            </Text>

            <Row style={videosRowStyle}>
              <Column style={videoColumnStyle} className="mobile-video-card tablet-video-card">
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1621962669683-915611"
                  alt="Video Thumbnail 1"
                  style={videoImageStyle}
                  className="mobile-video-image"
                />
                <Text style={videoTextStyle} className="mobile-video-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                </Text>
                <Link href="#" style={videoButtonStyle} className="mobile-video-button">
                  WATCH IT
                </Link>
              </Column>
              <Column style={videoColumnStyle} className="mobile-video-card tablet-video-card">
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1621962671804-533447"
                  alt="Video Thumbnail 2"
                  style={videoImageStyle}
                  className="mobile-video-image"
                />
                <Text style={videoTextStyle} className="mobile-video-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                </Text>
                <Link href="#" style={videoButtonStyle} className="mobile-video-button">
                  WATCH IT
                </Link>
              </Column>
              <Column style={videoColumnStyle} className="mobile-video-card tablet-video-card">
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1621962694036-479457"
                  alt="Video Thumbnail 3"
                  style={videoImageStyle}
                  className="mobile-video-image"
                />
                <Text style={videoTextStyle} className="mobile-video-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                </Text>
                <Link href="#" style={videoButtonStyle} className="mobile-video-button">
                  WATCH IT
                </Link>
              </Column>
            </Row>
          </Section>

          {/* Meet Our Hosts Section */}
          <Section style={hostsSectionStyle} className="mobile-hosts-padding">
            <Text style={hostsTitleStyle} className="mobile-hosts-title">
              MEET OUR HOSTS
            </Text>
            <Text style={hostsDescStyle} className="mobile-hosts-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            </Text>

            <Row style={hostsRowStyle}>
              <Column style={hostColumnStyle} className="mobile-host-card tablet-host-card">
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1621963094841-download%20(1).png"
                  alt="Stephen"
                  style={hostImageStyle}
                  className="mobile-host-image"
                />
                <Text style={hostNameStyle} className="mobile-host-name">
                  Stephen
                </Text>
                <Link href="#" style={hostButtonStyle} className="mobile-host-button">
                  FIND ME
                </Link>
              </Column>
              <Column style={hostColumnStyle} className="mobile-host-card tablet-host-card">
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1621963160615-download%20(2).png"
                  alt="Thomas"
                  style={hostImageStyle}
                  className="mobile-host-image"
                />
                <Text style={hostNameStyle} className="mobile-host-name">
                  Thomas
                </Text>
                <Link href="#" style={hostButtonStyle} className="mobile-host-button">
                  FIND ME
                </Link>
              </Column>
              <Column style={hostColumnStyle} className="mobile-host-card tablet-host-card">
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1621963246942-download%20(2).png"
                  alt="Serena"
                  style={hostImageStyle}
                  className="mobile-host-image"
                />
                <Text style={hostNameStyle} className="mobile-host-name">
                  Serena
                </Text>
                <Link href="#" style={hostButtonStyle} className="mobile-host-button">
                  FIND ME
                </Link>
              </Column>
            </Row>
          </Section>

         
          {/* Footer Section */}
          <Section style={footerSectionStyle} className="mobile-footer-padding">
            <Row>
              <Column style={footerLogoColumnStyle} className="mobile-footer-logo">
                <Text style={footerLogoStyle}>
                  Webinar
                  <br />
                  Online
                </Text>
              </Column>
              <Column style={footerContactColumnStyle} className="mobile-stack">
                <Text style={contactTitleStyle}>Contact Us</Text>
                <Text style={contactTextStyle} className="mobile-footer-text">
                  Public Bay, San Francisco, CA
                  <br />
                  contact@webinar.com
                </Text>
              </Column>
            </Row>

            {/* Social Media Icons */}
            <Row style={socialRowStyle} className="mobile-social-icons">
              <Column style={socialColumnStyle}>
                <Link href="#" style={socialLinkStyle} className="mobile-social-icon">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-white/facebook.png"
                    alt="Facebook"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle} className="mobile-social-icon">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-white/linkedin.png"
                    alt="LinkedIn"
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

export default B2BWebinarTemplate

// Ultra-Responsive Email-Safe Styles with Perfect Alignment
const bodyStyle = {
  fontFamily: "'DM Sans', Arial, sans-serif",
  backgroundColor: "#f8f9fa",
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
  backgroundColor: "#2c3e50",
  padding: "20px 30px",
}

const headerLogoColumnStyle = {
  width: "60%",
  verticalAlign: "middle" as const,
}

const headerButtonColumnStyle = {
  width: "40%",
  verticalAlign: "middle" as const,
  textAlign: "right" as const,
}

const headerLogoStyle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0",
  lineHeight: "1.2",
}

const headerButtonStyle = {
  backgroundColor: "transparent",
  color: "#ffffff",
  border: "2px solid #ffffff",
  padding: "10px 20px",
  borderRadius: "4px",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "600",
  display: "inline-block",
  letterSpacing: "0.5px",
}

// Hero Section Styles
const heroSectionStyle = {
  backgroundImage: "url('https://res.cloudinary.com/dirpuqqib/image/upload/v1750428618/1622856477096-420594_iw0yfc.png')",
    backgroundColor: "#2c3e50",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  padding: "60px 30px",
  textAlign: "center" as const,
}


const heroTitleStyle = {
  fontSize: "32px",
  fontWeight: "800",
  color: "#ffffff",
  margin: "0 0 15px 0",
  letterSpacing: "2px",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
}

const heroSubtitleStyle = {
  fontSize: "36px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 30px 0",
  lineHeight: "1.2",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
}

const heroDateStyle = {
  fontSize: "16px",
  fontWeight: "500",
  color: "#ffffff",
  margin: "0 0 10px 0",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
}

const heroLocationStyle = {
  fontSize: "16px",
  fontWeight: "500",
  color: "#ffffff",
  margin: "0 0 30px 0",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
}

const heroButtonStyle = {
  backgroundColor: "#e74c3c",
  color: "#ffffff",
  border: "none",
  padding: "16px 32px",
  borderRadius: "6px",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "700",
  display: "inline-block",
  letterSpacing: "0.5px",
  boxShadow: "0 4px 12px rgba(231, 76, 60, 0.4)",
  transition: "all 0.3s ease",
}

// Key Point Section Styles
const keyPointSectionStyle = {
  backgroundColor: "#34495e",
  padding: "30px 30px",
}

const keyPointLeftColumnStyle = {
  width: "70%",
  verticalAlign: "middle" as const,
}

const keyPointRightColumnStyle = {
  width: "30%",
  verticalAlign: "middle" as const,
  textAlign: "right" as const,
}

const keyPointBadgeStyle = {
  backgroundColor: "#1abc9c",
  color: "#ffffff",
  padding: "6px 12px",
  borderRadius: "4px",
  fontSize: "12px",
  fontWeight: "700",
  display: "inline-block",
  marginBottom: "15px",
  letterSpacing: "0.5px",
}

const keyPointTitleStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0",
  lineHeight: "1.3",
}

const hostedByLabelStyle = {
  fontSize: "12px",
  fontWeight: "600",
  color: "#bdc3c7",
  margin: "0 0 10px 0",
  letterSpacing: "0.5px",
}

const hostAvatarStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  border: "3px solid #1abc9c",
  display: "block",
}

// Brief Section Styles
const briefSectionStyle = {
  backgroundColor: "#1abc9c",
  padding: "40px 30px",
}

const briefLeftColumnStyle = {
  width: "60%",
  verticalAlign: "top" as const,
  paddingRight: "20px",
}

const briefRightColumnStyle = {
  width: "40%",
  verticalAlign: "top" as const,
  paddingLeft: "20px",
}

const briefTitleStyle = {
  fontSize: "28px",
  fontWeight: "800",
  color: "#2c3e50",
  margin: "0 0 25px 0",
  lineHeight: "1.2",
}

const briefTextStyle = {
  fontSize: "14px",
  fontWeight: "400",
  color: "#2c3e50",
  margin: "0",
  lineHeight: "1.6",
  textAlign: "justify" as const,
}

const placeTitleStyle = {
  fontSize: "20px",
  fontWeight: "800",
  color: "#2c3e50",
  margin: "0 0 15px 0",
}

const placeTextStyle = {
  fontSize: "14px",
  fontWeight: "500",
  color: "#2c3e50",
  margin: "0 0 25px 0",
  lineHeight: "1.4",
}

const timeTitleStyle = {
  fontSize: "20px",
  fontWeight: "800",
  color: "#2c3e50",
  margin: "0 0 15px 0",
}

const timeTextStyle = {
  fontSize: "14px",
  fontWeight: "500",
  color: "#2c3e50",
  margin: "0 0 30px 0",
  lineHeight: "1.4",
}

const briefButtonStyle = {
  backgroundColor: "#2c3e50",
  color: "#ffffff",
  border: "none",
  padding: "14px 28px",
  borderRadius: "6px",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "700",
  display: "inline-block",
  letterSpacing: "0.5px",
}

// Videos Section Styles
const videosSectionStyle = {
  backgroundColor: "#ecf0f1",
  padding: "40px 30px",
}

const videosTitleStyle = {
  fontSize: "28px",
  fontWeight: "800",
  color: "#2c3e50",
  margin: "0 0 20px 0",
  textAlign: "center" as const,
}

const videosDescStyle = {
  fontSize: "14px",
  fontWeight: "400",
  color: "#7f8c8d",
  margin: "0 0 40px 0",
  lineHeight: "1.6",
  textAlign: "center" as const,
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto",
}

const videosRowStyle = {
  marginBottom: "0",
}

const videoColumnStyle = {
  width: "33.33%",
  verticalAlign: "top" as const,
  padding: "0 10px",
  textAlign: "center" as const,
}

const videoImageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  marginBottom: "15px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
}

const videoTextStyle = {
  fontSize: "13px",
  fontWeight: "400",
  color: "#7f8c8d",
  margin: "0 0 15px 0",
  lineHeight: "1.5",
}

const videoButtonStyle = {
  backgroundColor: "#95a5a6",
  color: "#ffffff",
  border: "none",
  padding: "10px 20px",
  borderRadius: "4px",
  textDecoration: "none",
  fontSize: "12px",
  fontWeight: "600",
  display: "inline-block",
  letterSpacing: "0.5px",
}

// Hosts Section Styles
const hostsSectionStyle = {
  backgroundColor: "#2c3e50",
  padding: "40px 30px",
}

const hostsTitleStyle = {
  fontSize: "28px",
  fontWeight: "800",
  color: "#ffffff",
  margin: "0 0 20px 0",
  textAlign: "center" as const,
}

const hostsDescStyle = {
  fontSize: "14px",
  fontWeight: "400",
  color: "#bdc3c7",
  margin: "0 0 40px 0",
  lineHeight: "1.6",
  textAlign: "center" as const,
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto",
}

const hostsRowStyle = {
  marginBottom: "0",
}

const hostColumnStyle = {
  width: "33.33%",
  verticalAlign: "top" as const,
  padding: "0 10px",
  textAlign: "center" as const,
}

const hostImageStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  marginBottom: "15px",
  border: "4px solid #1abc9c",
  display: "block",
  margin: "0 auto 15px auto",
}

const hostNameStyle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 15px 0",
}

const hostButtonStyle = {
  backgroundColor: "#1abc9c",
  color: "#ffffff",
  border: "none",
  padding: "10px 20px",
  borderRadius: "4px",
  textDecoration: "none",
  fontSize: "12px",
  fontWeight: "600",
  display: "inline-block",
  letterSpacing: "0.5px",
}

// Testimonials Section Styles
const testimonialsSectionStyle = {
  backgroundColor: "#1abc9c",
  padding: "40px 30px",
}

const testimonialsTitleStyle = {
  fontSize: "28px",
  fontWeight: "800",
  color: "#2c3e50",
  margin: "0 0 20px 0",
  textAlign: "center" as const,
}

const testimonialsDescStyle = {
  fontSize: "14px",
  fontWeight: "400",
  color: "#2c3e50",
  margin: "0 0 40px 0",
  lineHeight: "1.6",
  textAlign: "center" as const,
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto",
}

const testimonialsRowStyle = {
  marginBottom: "0",
}

const testimonialColumnStyle = {
  width: "33.33%",
  verticalAlign: "top" as const,
  padding: "25px 15px",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  borderRadius: "8px",
  margin: "0 5px",
  textAlign: "center" as const,
}

const testimonialNameStyle = {
  fontSize: "16px",
  fontWeight: "700",
  color: "#2c3e50",
  margin: "0 0 15px 0",
}

const testimonialTextStyle = {
  fontSize: "13px",
  fontWeight: "400",
  color: "#2c3e50",
  margin: "0",
  lineHeight: "1.5",
}

// Footer Section Styles
const footerSectionStyle = {
  backgroundColor: "#2c3e50",
  padding: "30px 30px 25px 30px",
}

const footerLogoColumnStyle = {
  width: "50%",
  verticalAlign: "top" as const,
}

const footerContactColumnStyle = {
  width: "50%",
  verticalAlign: "top" as const,
  textAlign: "right" as const,
}

const footerLogoStyle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0",
  lineHeight: "1.2",
}

const contactTitleStyle = {
  fontSize: "16px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 10px 0",
}

const contactTextStyle = {
  fontSize: "12px",
  fontWeight: "400",
  color: "#bdc3c7",
  margin: "0",
  lineHeight: "1.4",
}

const socialRowStyle = {
  marginTop: "25px",
  textAlign: "center" as const,
}

const socialColumnStyle = {
  width: "100%",
  textAlign: "center" as const,
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
