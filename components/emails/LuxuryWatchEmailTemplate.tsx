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

export const LuxuryWatchEmailTemplate = () => {
  return (
    <Html>
      <Head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
            * {
              font-family: 'DM Sans', Arial, sans-serif;
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
            }
          `}
        </style>
      </Head>
      <Preview>It's Time To Change - Exclusive Luxury Watch Collection</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header Section */}
          <Section style={headerSectionStyle}>
            <Text style={headerTitleStyle}>It's Time To Change</Text>
            <Text style={headerSubtitleStyle}>
              Discover timeless elegance with our exclusive luxury watch collection. Each piece crafted to perfection
              for the discerning individual.
            </Text>
          </Section>

          {/* Hero Watch Section */}
          <Section style={heroSectionStyle}>
            <Img
              src="https://cdn.templates.unlayer.com/assets/1652780923163-was.png"
              alt="Luxury Watch Collection"
              style={heroImageStyle}
            />

            {/* Countdown Timer */}
            <Section style={countdownSectionStyle}>
              <Text style={countdownTitleStyle}>Limited Time Exclusive Offer</Text>
              <Img
                src="https://countdown.unlayer.com/generate/k5YQOXUM73k5"
                alt="Limited Time Offer Countdown"
                style={countdownImageStyle}
              />
              <Text style={countdownDescriptionStyle}>
                Don't miss this exclusive opportunity to own a piece of horological excellence. Our master craftsmen
                have created these limited edition timepieces with meticulous attention to detail and uncompromising
                quality.
              </Text>
            </Section>
          </Section>


          {/* Collection Showcase */}
          <Section style={collectionSectionStyle}>
            <Text style={collectionTitleStyle}>Our Signature Collection</Text>
            <Row style={collectionRowStyle}>
              <Column style={collectionItemColumnStyle}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1652781931293-wer.png"
                  alt="Classic Series"
                  style={collectionItemImageStyle}
                />
                <Text style={collectionItemTitleStyle}>Classic Series</Text>
                <Text style={collectionItemPriceStyle}>From $1,999</Text>
              </Column>
              <Column style={collectionItemColumnStyle}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1652780923163-was.png"
                  alt="Sport Series"
                  style={collectionItemImageStyle}
                />
                <Text style={collectionItemTitleStyle}>Sport Series</Text>
                <Text style={collectionItemPriceStyle}>From $2,499</Text>
              </Column>
              <Column style={collectionItemColumnStyle}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1652781931293-wer.png"
                  alt="Limited Edition"
                  style={collectionItemImageStyle}
                />
                <Text style={collectionItemTitleStyle}>Limited Edition</Text>
                <Text style={collectionItemPriceStyle}>From $4,999</Text>
              </Column>
            </Row>
            <Link href="#" style={secondaryButtonStyle}>
              View Full Collection
            </Link>
          </Section>

          {/* Why Choose Us Section */}
          <Section style={whyChooseSectionStyle}>
            <Text style={whyChooseTitleStyle}>Why Choose Our Timepieces?</Text>
            <Row>
              
              <Column style={benefitColumnStyle}>
                <Text style={benefitIconStyle}>💎</Text>
                <Text style={benefitTitleStyle}>Premium Materials</Text>
                <Text style={benefitDescStyle}>
                  Only the finest materials including sapphire crystal and precious metals
                </Text>
              </Column>
              <Column style={benefitColumnStyle}>
                <Text style={benefitIconStyle}>🛡️</Text>
                <Text style={benefitTitleStyle}>Lifetime Warranty</Text>
                <Text style={benefitDescStyle}>Comprehensive warranty and worldwide service network support</Text>
              </Column>
            </Row>
          </Section>

          {/* Call to Action Banner */}
          <Section style={ctaBannerSectionStyle}>
            <Text style={ctaBannerTitleStyle}>Ready to Own Timeless Elegance?</Text>
            <Text style={ctaBannerDescStyle}>
              Join thousands of satisfied customers who trust us for their luxury timepiece needs.
            </Text>
            <Row>
              <Column style={ctaButtonColumnStyle}>
                <Link href="#" style={ctaPrimaryButtonStyle}>
                  Shop Collection
                </Link>
              </Column>
          
            </Row>
          </Section>

          {/* Footer Section */}
          <Section style={footerSectionStyle}>
            <Row>
              <Column style={socialIconsColumnStyle}>
                <Link href="#" style={socialLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                    alt="Facebook"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                    alt="Twitter"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                    alt="LinkedIn"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                    alt="Instagram"
                    style={socialIconStyle}
                  />
                </Link>
              </Column>
            </Row>
            <Hr style={footerDividerStyle} />
            <Text style={footerAddressStyle}>
              2261 Market Street #4667 San Francisco, CA 94114
              <br />
              Phone: +1 (555) 123-4567 | Email: info@luxurywatches.com
            </Text>
            <Text style={footerInfoStyle}>All rights reserved. Company No. 94114</Text>
            <Text style={copyrightStyle}>Copyright © Luxury Timepieces | All Rights Reserved</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default LuxuryWatchEmailTemplate

// Responsive Styles
const bodyStyle = {
  fontFamily: "'DM Sans', Arial, sans-serif",
  backgroundColor: "#f0f2f5",
  margin: "0",
  padding: "10px 0",
  lineHeight: "1.6",
}

const containerStyle = {
  backgroundColor: "#000000",
  margin: "0 auto",
  padding: "0",
  maxWidth: "600px",
  borderRadius: "8px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
  overflow: "hidden",
}

const headerSectionStyle = {
  backgroundColor: "#000000",
  padding: "40px 30px 30px 30px",
  textAlign: "center" as const,
}

const headerTitleStyle = {
  fontSize: "32px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 15px 0",
  lineHeight: "1.2",
}

const headerSubtitleStyle = {
  fontSize: "14px",
  color: "#d7dbde",
  margin: "0",
  lineHeight: "1.5",
  opacity: "0.9",
}

const heroSectionStyle = {
  backgroundColor: "#090909",
  padding: "30px 20px",
  textAlign: "center" as const,
  borderBottom: "1px solid #2f2f30",
}

const heroImageStyle = {
  width: "100%",
  height: "auto",
  maxHeight: "400px",
  objectFit: "contain" as const,
  marginBottom: "30px",
}

const countdownSectionStyle = {
  padding: "20px 0",
}

const countdownTitleStyle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#ffffff",
  margin: "0 0 15px 0",
}

const countdownImageStyle = {
  width: "100%",
  height: "auto",
  maxHeight: "60px",
  objectFit: "contain" as const,
  marginBottom: "20px",
}

const countdownDescriptionStyle = {
  fontSize: "14px",
  color: "#d7dbde",
  lineHeight: "1.6",
  margin: "0",
  padding: "0 20px",
}

const featuredSectionStyle = {
  backgroundColor: "#000000",
  padding: "50px 30px",
  borderBottom: "1px solid #2f2f30",
}

const featuredTextColumnStyle = {
  width: "60%",
  verticalAlign: "top" as const,
  paddingRight: "30px",
}

const featuredImageColumnStyle = {
  width: "40%",
  verticalAlign: "middle" as const,
  textAlign: "center" as const,
}

const brandLogoStyle = {
  width: "80px",
  height: "80px",
  objectFit: "contain" as const,
  marginBottom: "20px",
}

const featuredTitleStyle = {
  fontSize: "28px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 20px 0",
  lineHeight: "1.3",
}

const featuredDescriptionStyle = {
  fontSize: "14px",
  color: "#ffffff",
  lineHeight: "1.6",
  margin: "0 0 20px 0",
}

const featuresListStyle = {
  margin: "20px 0 30px 0",
}

const featureItemStyle = {
  fontSize: "12px",
  color: "#d7dbde",
  margin: "0 0 8px 0",
  lineHeight: "1.4",
}

const primaryButtonStyle = {
  backgroundColor: "#ffffff",
  color: "#000000",
  borderRadius: "6px",
  padding: "14px 24px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  border: "1px solid #ffffff",
  boxShadow: "0 4px 12px rgba(255, 255, 255, 0.2)",
}

const featuredImageStyle = {
  width: "100%",
  height: "auto",
  maxHeight: "300px",
  objectFit: "contain" as const,
}

const collectionSectionStyle = {
  backgroundColor: "#111111",
  padding: "50px 30px",
  textAlign: "center" as const,
  borderBottom: "1px solid #2f2f30",
}

const collectionTitleStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 40px 0",
}

const collectionRowStyle = {
  marginBottom: "30px",
}

const collectionItemColumnStyle = {
  width: "33.33%",
  verticalAlign: "top" as const,
  textAlign: "center" as const,
  padding: "0 10px",
}

const collectionItemImageStyle = {
  width: "100%",
  height: "auto",
  maxHeight: "150px",
  objectFit: "contain" as const,
  marginBottom: "15px",
}

const collectionItemTitleStyle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#ffffff",
  margin: "0 0 8px 0",
}

const collectionItemPriceStyle = {
  fontSize: "12px",
  color: "#d7dbde",
  margin: "0 0 20px 0",
}

const secondaryButtonStyle = {
  backgroundColor: "transparent",
  color: "#ffffff",
  borderRadius: "6px",
  padding: "12px 24px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  border: "2px solid #ffffff",
}

const whyChooseSectionStyle = {
  backgroundColor: "#000000",
  padding: "50px 30px",
  borderBottom: "1px solid #2f2f30",
}

const whyChooseTitleStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#ffffff",
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
  color: "#ffffff",
  margin: "0 0 10px 0",
}

const benefitDescStyle = {
  fontSize: "12px",
  color: "#d7dbde",
  lineHeight: "1.5",
  margin: "0",
}

const ctaBannerSectionStyle = {
  backgroundColor: "#111111",
  padding: "40px 30px",
  textAlign: "center" as const,
  borderBottom: "1px solid #2f2f30",
}

const ctaBannerTitleStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 15px 0",
}

const ctaBannerDescStyle = {
  fontSize: "14px",
  color: "#d7dbde",
  margin: "0 0 30px 0",
}

const ctaButtonColumnStyle = {
  width: "50%",
  textAlign: "center" as const,
  padding: "0 10px",
}

const ctaPrimaryButtonStyle = {
  backgroundColor: "#ffffff",
  color: "#000000",
  borderRadius: "6px",
  padding: "14px 20px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
}

const ctaSecondaryButtonStyle = {
  backgroundColor: "transparent",
  color: "#ffffff",
  borderRadius: "6px",
  padding: "14px 20px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  border: "2px solid #ffffff",
}

const footerSectionStyle = {
  backgroundColor: "#000000",
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
  borderRadius: "50%",
}

const footerDividerStyle = {
  border: "none",
  borderTop: "1px solid #2f2f30",
  margin: "20px 0",
}

const footerAddressStyle = {
  fontSize: "12px",
  color: "#c6c7d2",
  margin: "0 0 10px 0",
  lineHeight: "1.5",
}

const footerInfoStyle = {
  fontSize: "12px",
  color: "#c6c7d2",
  margin: "0 0 15px 0",
}

const copyrightStyle = {
  fontSize: "12px",
  color: "#888888",
  margin: "0",
}
