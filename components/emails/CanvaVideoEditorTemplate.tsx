import { Body, Container, Column, Head, Html, Img, Link, Preview, Row, Section, Text } from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

export const CanvaVideoEditorTemplate = () => {
  return (
    <Html>
      <Preview>Create your best videos with a drag-and-drop editor - Canva</Preview>
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
                margin-bottom: 20px !important;
              }
              
              .mobile-hide {
                display: none !important;
              }
              
              .mobile-main-title {
                font-size: 28px !important;
                line-height: 1.2 !important;
                text-align: center !important;
              }
              
              .mobile-subtitle {
                font-size: 14px !important;
                line-height: 1.5 !important;
                text-align: center !important;
              }
              
              .mobile-hero-image {
                width: 100% !important;
                max-width: 300px !important;
                height: auto !important;
                margin: 0 auto !important;
                display: block !important;
              }
              
              .mobile-section-title {
                font-size: 24px !important;
                line-height: 1.3 !important;
                text-align: center !important;
              }
              
              .mobile-feature-card {
                width: 100% !important;
                margin-bottom: 25px !important;
                padding: 20px 15px !important;
              }
              
              .mobile-feature-image {
                width: 100% !important;
                max-width: 200px !important;
                height: auto !important;
                margin: 0 auto 15px auto !important;
                display: block !important;
              }
              
              .mobile-feature-title {
                font-size: 18px !important;
                text-align: center !important;
              }
              
              .mobile-feature-text {
                font-size: 14px !important;
                text-align: center !important;
                line-height: 1.5 !important;
              }
              
              .mobile-button {
                font-size: 14px !important;
                padding: 12px 24px !important;
                display: block !important;
                margin: 20px auto !important;
                width: auto !important;
                text-align: center !important;
              }
              
              .mobile-app-links {
                display: block !important;
                margin: 10px 0 !important;
                text-align: center !important;
              }
              
              .mobile-social-icons {
                margin: 0 8px !important;
              }
              
              .mobile-footer-text {
                font-size: 11px !important;
                line-height: 1.4 !important;
                text-align: center !important;
              }
              
              .mobile-section-padding {
                padding: 25px 15px !important;
              }
              
              .mobile-logo {
                width: 80px !important;
                height: auto !important;
              }
            }
          `}
        </style>
      </Head>
      <Tailwind>
        <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header Section */}
          <Section style={headerSectionStyle} className="mobile-section-padding">
            <Row>
              <Column style={logoColumnStyle} className="mobile-stack mobile-center">
                <Img src="https://ci3.googleusercontent.com/meips/ADKq_NYdiQImD2SqKRouSwj4SXw1Lk7y_dv_657zSokwMIspLCazi4BhdHTU8R9ItIqE__YmLfpotRwo6poEk76lII2uRmMJte7WAV_z7Zg6eW6ccwYs2xjkqgVm7GTb5dyhUnmxeZHkuv2ACOineWHfSkLmc4cdQZa6KfbZqEDQOmw_GxdnfprWsnzT7a-joGAB=s0-d-e1-ft#https://braze-images.com/appboy/communication/assets/image_assets/images/63a101405133236aa0b76b77/original.png?1671496000" alt="Canva" style={logoStyle} className="mobile-logo" />
              </Column>
              <Column style={headerTextColumnStyle} className="mobile-stack mobile-center">
                <Text style={headerTextStyle}>Design with Canva</Text>
              </Column>
            </Row>
          </Section>

          {/* Hero Section */}
          <Section style={heroSectionStyle} className="mobile-section-padding">
            <Text style={heroTitleStyle} className="mobile-main-title">
              Create your best videos with a drag-and-drop editor
            </Text>

            <Text style={heroSubtitleStyle} className="mobile-subtitle">
              Create professional, engaging videos with Canva's free drag-and-drop video editor. Upload or record clips,
              or choose from our free library of videos and audio tracks, then add extra magic with animations and
              transitions.
            </Text>

            <Link href="#" style={heroButtonStyle} className="mobile-button">
              Create a video
            </Link>
          </Section>

          {/* Hero Image Section */}
          <Section style={heroImageSectionStyle} className="mobile-section-padding">
            <Img
              src="https://ci3.googleusercontent.com/meips/ADKq_Na-3PHz2plkGkThcy2WKq0ILONFETQQn--vmnLZtJ_vrD-oFld7MfsfDf1POSAfcWqYLvHZxhtSNakw9o88q1kY3qRoAdhJ2wuas6azchvzgWRvGXkqWuzVGLKjOecbz7jbC9vhmPmSmp7LDsZBvHxsYi3YDFT2v2Wxgnnz_0ABfSejPeOX1FlL3hAqRdmX=s0-d-e1-ft#https://braze-images.com/appboy/communication/assets/image_assets/images/67ea6968da34850065778bb2/original.png?1743415656"
              alt="Canva video editor on mobile device"
              style={heroImageStyle}
              className="mobile-hero-image object-cover"
            />
          </Section>

          {/* Tools Section */}
          <Section style={toolsSectionStyle} className="mobile-section-padding">
            <Text style={toolsTitleStyle} className="mobile-section-title">
              Tools to make your vision a reality
            </Text>

            {/* Feature Cards Row 1 */}
            <Row style={featureRowStyle} className="">
              <Column style={featureColumnStyle} className="mobile-feature-card mr-3 text-center">
                <Img
                  src="https://ci3.googleusercontent.com/meips/ADKq_NaIgxSd2PEhOkHQoanFUGOvqSaU7TTrhnGocgRCT9Cvduj8ESJRZcyMTF07cTP_nT51z5DlXbnM_ss7_PxgBMt4oQ3ZadVm2Xz2aln_WNbaC8QaYN0KZVwTvF3Pj4DJDrIhQwJFSdWp0QYCpzy67GMXVpR39QqM-cbhdJS1C4wokSCz51zaxVv4Ho0kjvbB=s0-d-e1-ft#https://braze-images.com/appboy/communication/assets/image_assets/images/65f926d1c840e1004c6e05bb/original.png?1710827216"
                  alt="Templates to start inspired"
                  style={featureImageStyle}
                  className="mobile-feature-image"
                />
                <Text style={featureTitleStyle} className="mobile-feature-title">
                  Templates to start inspired
                </Text>
                <Text style={featureTextStyle} className="mobile-feature-text">
                  Start from scratch or choose from 250,000+ free, customizable templates.
                </Text>
                <Link href="#" style={featureButtonStyle} className="mobile-button mx-auto text-center ">
                  Explore templates
                </Link>
              </Column>
              
            </Row>

            {/* Feature Cards Row 2 */}
            <Row style={featureRowStyle}>
              <Column style={featureColumnStyle} className="mobile-feature-card  text-center">
                <Img
                  src="https://ci3.googleusercontent.com/meips/ADKq_NYEYWtRJOgTTY6Z4dn3_TtURZwUUX0ZFH7e1tEjX4pWPL9zOqbv0HauL7ylH7qjguiF8T7RHT53r9nzGh8lTaQgZgcpmF5VDionzkKfU_1skECpHzZkPQwa2Xg-W-aEBN9QwYUikNR7F4mI0fsX74v8gElZF-cPpw4FhF7h8Yz628okis0ajROSQrVHtbyS=s0-d-e1-ft#https://braze-images.com/appboy/communication/assets/image_assets/images/67ea61173033450064182721/original.png?1743413526"
                  alt="Drag-and-drop editor"
                  style={featureImageStyle}
                  className="mobile-feature-image"
                />
                <Text style={featureTitleStyle} className="mobile-feature-title">
                  Drag-and-drop editor
                </Text>
                <Text style={featureTextStyle} className="mobile-feature-text">
                  No design experience is needed with our simple, intuitive, and easy-to-use editor.
                </Text>
                <Link href="#" style={featureButtonStyle} className="mobile-button mx-auto text-center">
                  Try it now
                </Link>
              </Column>
             
            </Row>
          </Section>

          {/* Video Section */}
          <Section style={videoSectionStyle} className="mobile-section-padding">
            <Row>
              <Column  style={videoIconColumnStyle}>
                <div style={playButtonStyle}>▶</div>
              </Column>
              <Column style={videoTextColumnStyle}>
                <Text style={videoTextStyle}>
                  <Link href="#" style={videoLinkStyle}>
                    Canva Design School
                  </Link>{" "}
                  has thousands of free tutorials on how to design like a pro, explore design trends, color and more!
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Footer Info Section */}
          <Section style={footerInfoSectionStyle} className="mobile-section-padding">
            <Text style={footerInfoTextStyle}>You are receiving this email because you signed up to Canva.</Text>

            {/* App Links */}
            <Text style={appLinksLabelStyle}>Get Canva for:</Text>
            <div style={appLinksContainerStyle}>
              <Link href="#" style={appLinkStyle} className="mobile-app-links">
                iPhone
              </Link>
              <Link href="#" style={appLinkStyle} className="mobile-app-links">
                iPad
              </Link>
              <Link href="#" style={appLinkStyle} className="mobile-app-links">
                Android
              </Link>
              <Link href="#" style={appLinkStyle} className="mobile-app-links">
                Mac
              </Link>
              <Link href="#" style={appLinkStyle} className="mobile-app-links">
                Windows
              </Link>
            </div>
          </Section>

          {/* Footer Section */}
          <Section style={footerSectionStyle} className="mobile-section-padding">
            <Text style={footerTextStyle} className="mobile-footer-text">
              Made for you with 💜 from Canva
              <br />
              Canva Pty Ltd, 110 Kippax St, NSW 2010, Australia, ABN 80 158 929 938
              <br />
              If you need assistance, get in touch with us via our Help Center.
            </Text>

            <Text style={footerLinksStyle} className="mobile-footer-text">
              <Link href="#" style={footerLinkStyle}>
                Visit canva.com
              </Link>
              {" • "}
              <Link href="#" style={footerLinkStyle}>
                Unsubscribe
              </Link>
              <br />
              <Link href="#" style={footerLinkStyle}>
                Message Preferences
              </Link>
            </Text>

            {/* Social Media Icons */}
            <Row style={socialRowStyle}>
              <Column style={socialColumnStyle} className="mobile-center">
                <Link href="#" style={socialLinkStyle} className="mobile-social-icons">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle/facebook.png"
                    alt="Facebook"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle} className="mobile-social-icons">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png"
                    alt="Twitter"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle} className="mobile-social-icons">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                    alt="Instagram"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle} className="mobile-social-icons">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png"
                    alt="LinkedIn"
                    style={socialIconStyle}
                  />
                </Link>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
      </Tailwind>
    </Html>
  )
}

export default CanvaVideoEditorTemplate

// Comprehensive Email-Safe Styles
const bodyStyle = {
  fontFamily: "'DM Sans', Arial, sans-serif",
  backgroundColor: "#ffffff",
  margin: "0",
  padding: "0",
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
}

const headerSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "25px 30px",
  borderBottom: "1px solid #f0f0f0",
}

const logoColumnStyle = {
  width: "50%",
  verticalAlign: "middle" as const,
}

const headerTextColumnStyle = {
  width: "50%",
  verticalAlign: "middle" as const,
  textAlign: "right" as const,
}

const logoStyle = {
  width: "100px",
  height: "auto",
  display: "block",
}

const headerTextStyle = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0",
  fontWeight: "500",
}

const heroSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "40px 30px 30px 30px",
  textAlign: "center" as const,
}

const heroTitleStyle = {
  fontSize: "28px",
  fontWeight: "700",
  color: "#1f2937",
  margin: "0 0 20px 0",
  lineHeight: "1.2",
}

const heroSubtitleStyle = {
  fontSize: "16px",
  color: "#6b7280",
  margin: "0 0 30px 0",
  lineHeight: "1.6",
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto",
}

const heroButtonStyle = {
  backgroundColor: "#8b5cf6",
  color: "#ffffff",
  padding: "14px 28px",
  borderRadius: "8px",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "600",
  display: "inline-block",
  boxShadow: "0 4px 12px rgba(139, 92, 246, 0.3)",
}

const heroImageSectionStyle = {
  backgroundColor: "#ffffff",
//   padding: "0 30px 40px 30px",
  textAlign: "center" as const,
}

const heroImageStyle = {
  width: "100%",
  height: "auto",
//   maxWidth: "400px",
  display: "block",
  margin: "0 auto",
//   borderRadius: "12px",
}

const toolsSectionStyle = {
  backgroundColor: "#f9fafb",
  padding: "50px 30px",
}

const toolsTitleStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#1f2937",
  margin: "0 0 40px 0",
  textAlign: "center" as const,
  lineHeight: "1.3",
}

const featureRowStyle = {
  marginBottom: "30px",
}

const featureColumnStyle = {
  width: "50%",
  verticalAlign: "top" as const,
  padding: "15px",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  margin: "0 5px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
}

const featureImageStyle = {
  width: "100%",
  height: "auto",
  maxWidth: "200px",
  display: "block",
  margin: "0 auto 20px auto",
  borderRadius: "8px",
}

const featureTitleStyle = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#1f2937",
  margin: "0 0 15px 0",
  textAlign: "center" as const,
  lineHeight: "1.3",
}

const featureTextStyle = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0 0 20px 0",
  lineHeight: "1.5",
  textAlign: "center" as const,
}

const featureButtonStyle = {
  backgroundColor: "transparent",
  color: "#8b5cf6",
  padding: "10px 20px",
  borderRadius: "6px",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "600",
  display: "inline-block",
  border: "2px solid #8b5cf6",
}


const videoSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "30px 30px",
  borderTop: "1px solid #e5e7eb",
  borderBottom: "1px solid #e5e7eb",
}

const videoIconColumnStyle = {
  width: "60px",
  verticalAlign: "middle" as const,
}

const videoTextColumnStyle = {
  width: "calc(100% - 60px)",
  verticalAlign: "middle" as const,
  paddingLeft: "15px",
}

const playButtonStyle = {
  width: "40px",
  height: "40px",
  backgroundColor: "#8b5cf6",
  borderRadius: "50%",
  color: "#ffffff",
  fontSize: "16px",
  textAlign: "center" as const,
  lineHeight: "40px",
  display: "block",
}

const videoTextStyle = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0",
  lineHeight: "1.5",
}

const videoLinkStyle = {
  color: "#8b5cf6",
  textDecoration: "none",
  fontWeight: "600",
}

const footerInfoSectionStyle = {
  backgroundColor: "#f9fafb",
  padding: "30px 30px",
  textAlign: "center" as const,
}

const footerInfoTextStyle = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0 0 25px 0",
}

const appLinksLabelStyle = {
  fontSize: "14px",
  color: "#1f2937",
  margin: "0 0 15px 0",
  fontWeight: "600",
}

const appLinksContainerStyle = {
  textAlign: "center" as const,
}

const appLinkStyle = {
  color: "#8b5cf6",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0 15px",
  display: "inline-block",
}

const footerSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "30px 30px 25px 30px",
  textAlign: "center" as const,
}

const footerTextStyle = {
  fontSize: "12px",
  color: "#6b7280",
  margin: "0 0 20px 0",
  lineHeight: "1.5",
}

const footerLinksStyle = {
  fontSize: "12px",
  color: "#6b7280",
  margin: "0 0 25px 0",
  lineHeight: "1.5",
}

const footerLinkStyle = {
  color: "#8b5cf6",
  textDecoration: "underline",
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
  margin: "0 8px",
  display: "inline-block",
}

const socialIconStyle = {
  width: "28px",
  height: "28px",
  borderRadius: "50%",
}
