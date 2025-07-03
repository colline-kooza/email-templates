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

export const PlantGardeningEmailTemplate = () => {
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
              .mobile-header-text {
                width: 100% !important;
                text-align: center !important;
                padding: 0 !important;
                margin-bottom: 20px !important;
              }
              .mobile-header-logo {
                width: 100% !important;
                text-align: center !important;
                padding: 0 !important;
              }
              .mobile-social-stack {
                display: inline-block !important;
                margin: 5px !important;
              }
            }
          `}
        </style>
      </Head>
      <Preview>Make your summer day feeling good with beautiful plants 🌱</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header Section */}
          <Section style={headerSectionStyle} className="mobile-padding">
            <Row>
              <Column style={headerTextColumnStyle} className="mobile-header-text">
                <Text style={headerIntroStyle} className="mobile-font-small">
                  Make yours
                </Text>
                <Text style={headerTitleStyle} className="mobile-font-large">
                  summer day
                </Text>
                <Text style={headerTitleStyle} className="mobile-font-large">
                  feeling good
                </Text>
                <Text style={headerSubtitleStyle} className="mobile-font-small">
                  with beautiful plants -
                </Text>
              </Column>
              <Column style={headerLogoColumnStyle} className="mobile-header-logo">
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1684757144731-Group%2019.png"
                  alt="Plant Logo"
                  style={headerLogoStyle}
                />
              </Column>
            </Row>
          </Section>

          {/* Hero Image Section */}
          <Section style={heroSectionStyle}>
            <Img
              src="https://cdn.templates.unlayer.com/assets/1684754055605-Image.png"
              alt="Beautiful Indoor Plants Collection"
              style={heroImageStyle}
            />
          </Section>

          {/* Benefits Section */}
          <Section style={benefitsSectionStyle} className="mobile-padding">
            <Text style={benefitsTitleStyle} className="mobile-font-medium">
              Benefits of Indoor Plantation?
            </Text>
            <Text style={benefitsDescriptionStyle} className="mobile-font-small">
              Transform your living space into a green oasis! Indoor plants not only purify the air and boost oxygen
              levels, but they also reduce stress, improve focus, and create a calming atmosphere that enhances your
              overall well-being and productivity.
            </Text>
            <Link href="#" style={primaryButtonStyle} className="mobile-button">
              Discover Benefits
            </Link>
          </Section>

          {/* Categories Section */}
          <Section style={categoriesSectionStyle} className="mobile-padding">
            <Text style={categoriesTitleStyle} className="mobile-font-medium">
              Plant Categories
            </Text>
            <Row style={categoriesRowStyle}>
              <Column style={categoryColumnStyle} className="mobile-stack">
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1684758562333-Layer%207.png"
                  alt="Vintage Plants Collection"
                  style={categoryImageStyle}
                />
                <Text style={categoryTitleStyle} className="mobile-font-small">
                  Vintage & More
                </Text>
                <Text style={categoryDescriptionStyle}>
                  Classic plants with timeless appeal, perfect for creating a sophisticated and elegant atmosphere in
                  any room.
                </Text>
              </Column>
              
              <Column style={categoryColumnStyle} className="mobile-stack">
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1684758564383-Layer%209.png"
                  alt="Mood Boosting Plants"
                  style={categoryImageStyle}
                />
                <Text style={categoryTitleStyle} className="mobile-font-small">
                  For Good Mood
                </Text>
                <Text style={categoryDescriptionStyle}>
                  Specially selected plants known for their mood-enhancing properties and positive energy benefits.
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Call to Action Section */}
          <Section style={ctaSectionStyle} className="mobile-padding">
            <Link href="#" style={secondaryButtonStyle} className="mobile-button">
              Explore All Categories
            </Link>
            <Text style={ctaDescriptionStyle} className="mobile-font-small">
              Discover our complete collection of indoor plants and find the perfect green companions for your home or
              office space.
            </Text>
          </Section>

          {/* Featured Plant Section */}
          <Section style={featuredSectionStyle} className="mobile-padding">
            <Text style={featuredTitleStyle} className="mobile-font-medium">
              Plant of the Month
            </Text>
            <Img
              src="https://cdn.templates.unlayer.com/assets/1684756764600-Layer%209.png"
              alt="Featured Plant of the Month"
              style={featuredImageStyle}
            />
            <Text style={featuredDescriptionStyle} className="mobile-font-small">
              Meet our featured plant! This month we're highlighting a stunning variety that's perfect for beginners and
              experienced plant parents alike.
            </Text>
          </Section>

          {/* Care Tips Section */}
          <Section style={caretipsSectionStyle} className="mobile-padding">
            <Text style={careHeaderStyle} className="mobile-font-medium">
              Quick Plant Care Tips
            </Text>
            <Row>
              <Column style={tipColumnStyle} className="mobile-stack">
                <Text style={tipIconStyle}>💧</Text>
                <Text style={tipTitleStyle} className="mobile-font-small">
                  Proper Watering
                </Text>
                <Text style={tipDescStyle}>
                  Check soil moisture before watering. Most plants prefer slightly dry soil.
                </Text>
              </Column>
              <Column style={tipColumnStyle} className="mobile-stack">
                <Text style={tipIconStyle}>☀️</Text>
                <Text style={tipTitleStyle} className="mobile-font-small">
                  Right Lighting
                </Text>
                <Text style={tipDescStyle}>Place plants near windows but avoid direct harsh sunlight.</Text>
              </Column>
            
            </Row>
          </Section>

          {/* Newsletter Section */}
          <Section style={newsletterSectionStyle} className="mobile-padding">
            <Text style={newsletterTitleStyle} className="mobile-font-medium">
              Join Our Plant Community
            </Text>
            <Text style={newsletterDescStyle} className="mobile-font-small">
              Get weekly plant care tips, exclusive offers, and be the first to know about new arrivals!
            </Text>
            <Link href="#" style={newsletterButtonStyle} className="mobile-button">
              Subscribe Now
            </Link>
          </Section>

          {/* Footer Section */}
          <Section style={footerSectionStyle} className="mobile-padding-small">
            <Row>
              <Column style={socialIconsColumnStyle}>
                <Link href="#" style={socialLinkStyle} className="mobile-social-stack">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                    alt="Facebook"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle} className="mobile-social-stack">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                    alt="Twitter"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle} className="mobile-social-stack">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                    alt="LinkedIn"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle} className="mobile-social-stack">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
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
                  Shop
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
            <Text style={footerDescriptionStyle} className="mobile-font-small">
              Your trusted partner in creating beautiful, healthy indoor spaces with premium plants and expert care
              guidance.
            </Text>
            <Text style={copyrightStyle}>Copyright © Green Paradise | All Rights Reserved</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default PlantGardeningEmailTemplate

// Enhanced Styles with better mobile support
const bodyStyle = {
  fontFamily: "'Asap', Arial, sans-serif",
  backgroundColor: "#f5f7f0",
  margin: "0",
  padding: "20px 10px", // Reduced side padding for mobile
  lineHeight: "1.6",
  WebkitTextSizeAdjust: "100%",
  msTextSizeAdjust: "100%",
}

const containerStyle = {
  backgroundColor: "#efefef",
  margin: "0 auto",
  padding: "0",
  width: "100%",
  maxWidth: "600px",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  border: "1px solid #e0e6ed", // Fallback for email clients that don't support box-shadow
}

const headerSectionStyle = {
  backgroundColor: "#efefef",
  padding: "30px 20px 20px 20px",
}

const headerTextColumnStyle = {
  width: "75%",
  verticalAlign: "top" as const,
  paddingLeft: "20px",
  paddingBottom: "20px", // Added for mobile stacking
}

const headerLogoColumnStyle = {
  width: "25%",
  verticalAlign: "top" as const,
  textAlign: "right" as const,
  paddingRight: "20px",
  paddingBottom: "20px", // Added for mobile stacking
}

const headerIntroStyle = {
  fontSize: "18px",
  color: "#000000",
  margin: "0 0 5px 0",
  fontWeight: "400",
  lineHeight: "1.3",
  wordBreak: "break-word" as const,
}

const headerTitleStyle = {
  fontSize: "36px",
  fontWeight: "700",
  color: "#3b582a",
  margin: "0 0 5px 0",
  lineHeight: "1.1",
  wordBreak: "break-word" as const,
}

const headerSubtitleStyle = {
  fontSize: "16px",
  color: "#000000",
  fontStyle: "italic",
  margin: "8px 0 0 0",
  fontWeight: "500",
  lineHeight: "1.3",
  wordBreak: "break-word" as const,
}

const headerLogoStyle = {
  width: "60px",
  height: "60px",
  display: "block",
  margin: "0 auto", // Center on mobile
}

const heroSectionStyle = {
  padding: "0",
  backgroundColor: "#efefef",
}

const heroImageStyle = {
  width: "100%",
  height: "auto",
  display: "block",
  maxHeight: "400px",
  objectFit: "cover" as const,
}

const benefitsSectionStyle = {
  padding: "40px 30px",
  textAlign: "center" as const,
  backgroundColor: "#ffffff",
}

const benefitsTitleStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#6b705c",
  margin: "0 0 20px 0",
  lineHeight: "1.3",
  wordBreak: "break-word" as const,
}

const benefitsDescriptionStyle = {
  fontSize: "16px",
  color: "#6b705c",
  lineHeight: "1.6",
  margin: "0 0 25px 0",
  textAlign: "center" as const,
  wordBreak: "break-word" as const,
}

const primaryButtonStyle = {
  backgroundColor: "#7eab65",
  color: "#ffffff",
  borderRadius: "6px",
  padding: "12px 35px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  border: "none",
  cursor: "pointer",
  minWidth: "180px",
  textAlign: "center" as const,
  lineHeight: "1.2",
}

const categoriesSectionStyle = {
  padding: "40px 20px",
  backgroundColor: "#ffffff",
}

const categoriesTitleStyle = {
  fontSize: "28px",
  fontWeight: "700",
  color: "#6b705c",
  margin: "0 0 30px 0",
  textAlign: "center" as const,
  lineHeight: "1.3",
  wordBreak: "break-word" as const,
}

const categoriesRowStyle = {
  marginBottom: "20px",
}

const categoryColumnStyle = {
  width: "33.33%",
  verticalAlign: "top" as const,
  textAlign: "center" as const,
  padding: "0 15px 20px 15px", // Added bottom padding for mobile stacking
}

const categoryImageStyle = {
  width: "100%",
  height: "auto",
  maxWidth: "180px", // Constrained for better mobile display
  maxHeight: "180px",
  objectFit: "contain" as const,
  marginBottom: "15px",
  borderRadius: "8px",
  display: "block",
  margin: "0 auto 15px auto",
}

const categoryTitleStyle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#3b582a",
  margin: "0 0 10px 0",
  lineHeight: "1.3",
  wordBreak: "break-word" as const,
}

const categoryDescriptionStyle = {
  fontSize: "12px",
  color: "#666666",
  fontStyle: "italic",
  lineHeight: "1.4",
  margin: "0",
  wordBreak: "break-word" as const,
}

const ctaSectionStyle = {
  padding: "30px",
  textAlign: "center" as const,
  backgroundColor: "#f8f9f5",
}

const secondaryButtonStyle = {
  backgroundColor: "#7eab65",
  color: "#ffffff",
  borderRadius: "6px",
  padding: "12px 35px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  marginBottom: "15px",
  minWidth: "200px",
  textAlign: "center" as const,
  lineHeight: "1.2",
}

const ctaDescriptionStyle = {
  fontSize: "14px",
  color: "#666666",
  fontStyle: "italic",
  lineHeight: "1.5",
  margin: "0",
  wordBreak: "break-word" as const,
}

const featuredSectionStyle = {
  padding: "40px 30px",
  textAlign: "center" as const,
  backgroundColor: "#ffffff",
}

const featuredTitleStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#3b582a",
  margin: "0 0 20px 0",
  lineHeight: "1.3",
  wordBreak: "break-word" as const,
}

const featuredImageStyle = {
  width: "100%",
  height: "auto",
  maxWidth: "300px",
  maxHeight: "250px",
  objectFit: "contain" as const,
  marginBottom: "20px",
  borderRadius: "8px",
  display: "block",
  margin: "0 auto 20px auto",
}

const featuredDescriptionStyle = {
  fontSize: "16px",
  color: "#666666",
  lineHeight: "1.6",
  margin: "0",
  wordBreak: "break-word" as const,
}

const caretipsSectionStyle = {
  padding: "40px 30px",
  backgroundColor: "#f8f9f5",
}

const careHeaderStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#3b582a",
  margin: "0 0 30px 0",
  textAlign: "center" as const,
  lineHeight: "1.3",
  wordBreak: "break-word" as const,
}

const tipColumnStyle = {
  width: "33.33%",
  verticalAlign: "top" as const,
  textAlign: "center" as const,
  padding: "0 15px 20px 15px", // Added bottom padding for mobile stacking
}

const tipIconStyle = {
  fontSize: "32px",
  margin: "0 0 15px 0",
  display: "block",
  lineHeight: "1",
}

const tipTitleStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#3b582a",
  margin: "0 0 10px 0",
  lineHeight: "1.3",
  wordBreak: "break-word" as const,
}

const tipDescStyle = {
  fontSize: "14px",
  color: "#666666",
  lineHeight: "1.5",
  margin: "0",
  wordBreak: "break-word" as const,
}

const newsletterSectionStyle = {
  padding: "40px 30px",
  backgroundColor: "#3b582a",
  textAlign: "center" as const,
}

const newsletterTitleStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 15px 0",
  lineHeight: "1.3",
  wordBreak: "break-word" as const,
}

const newsletterDescStyle = {
  fontSize: "16px",
  color: "#ffffff",
  margin: "0 0 25px 0",
  opacity: "0.9",
  lineHeight: "1.5",
  wordBreak: "break-word" as const,
}

const newsletterButtonStyle = {
  backgroundColor: "#7eab65",
  color: "#ffffff",
  borderRadius: "6px",
  padding: "14px 30px",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  minWidth: "200px",
  textAlign: "center" as const,
  lineHeight: "1.2",
}

const footerSectionStyle = {
  backgroundColor: "#3b582a",
  padding: "30px",
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
  borderRadius: "0%",
  display: "block",
}

const footerDividerStyle = {
  border: "none",
  borderTop: "1px solid rgba(255, 255, 255, 0.2)",
  margin: "20px 0",
  width: "100%",
}

const footerLinksColumnStyle = {
  textAlign: "center" as const,
  width: "100%",
}

const footerLinkStyle = {
  fontSize: "14px",
  color: "#ffffff",
  textDecoration: "none",
  margin: "0 5px",
  lineHeight: "1.4",
}

const footerSeparatorStyle = {
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.5)",
  margin: "0 5px",
  display: "inline",
}

const footerDescriptionStyle = {
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.8)",
  margin: "20px 0 15px 0",
  lineHeight: "1.5",
  wordBreak: "break-word" as const,
}

const copyrightStyle = {
  fontSize: "12px",
  color: "rgba(255, 255, 255, 0.6)",
  margin: "0",
  lineHeight: "1.4",
}
