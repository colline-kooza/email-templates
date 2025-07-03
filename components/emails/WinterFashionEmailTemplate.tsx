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

export const WinterFashionEmailTemplate = () => {
  return (
    <Html>
      <Head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;900&display=swap');
            * {
              font-family: 'Roboto', Arial, sans-serif;
            }
          `}
        </style>
      </Head>
      <Preview>Winter Sale: Stay Warm and Stylish - Up to 45% Off!</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header Hero Section */}
          <Section style={heroSectionStyle}>
            <Text style={heroTitleStyle}>STAY WARM AND</Text>
            <Text style={heroTitleStyle}>STYLISH THIS WINTER</Text>
            <Img
              src="https://cdn.templates.unlayer.com/assets/1676525686928-img.png"
              alt="Winter Fashion Collection"
              style={heroImageStyle}
            />
          </Section>

          {/* Main Offer Section */}
          <Section style={offerSectionStyle}>
            <Text style={offerTextStyle}>This winter sale get</Text>
            <Text style={discountTextStyle}>UPTO 45% OFF</Text>
            <Link href="#" style={primaryButtonStyle}>
              Shop Now
            </Link>
          </Section>

          {/* Featured Product Section */}
          <Section style={featuredSectionStyle}>
            <Row>
              <Column style={featuredImageColumnStyle}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1676526297746-Layer%206.png"
                  alt="French Long Winter Coat"
                  style={featuredImageStyle}
                />
              </Column>
              <Column style={featuredTextColumnStyle}>
                <Text style={specialDiscountStyle}>Special Discount</Text>
                <Text style={productNameStyle}>FRENCH</Text>
                <Text style={productNameStyle}>WINTER</Text>
                <Link href="https://example.com" style={secondaryButtonStyle}>
                  Shop Now
                </Link>
              </Column>
            </Row>
          </Section>

          {/* Best Seller Section */}
          <Section style={bestSellerSectionStyle}>
            <Text style={sectionHeaderStyle}>BEST SELLER</Text>
            <Row style={productsRowStyle}>
              <Column style={productColumnStyle}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1676527153199-Layer%207.png"
                  alt="Women Coat"
                  style={productImageStyle}
                />
                <Text style={productLabelStyle}>WOMEN COAT</Text>
              </Column>
              <Column style={productColumnStyle}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1676527180472-Layer%209.png"
                  alt="Mens Coat"
                  style={productImageStyle}
                />
                <Text style={productLabelStyle}>MENS COAT</Text>
              </Column>
              <Column style={productColumnStyle}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1676527178482-Layer%208.png"
                  alt="Mens Formal"
                  style={productImageStyle}
                />
                <Text style={productLabelStyle}>MENS FORMAL</Text>
              </Column>
            </Row>
          </Section>

          {/* Limited Run Banner */}
          <Section style={limitedRunSectionStyle}>
            <Text style={limitedRunTextStyle}>LIMITED RUN. IF OUT OF STOCK, CLICK SIZE AND "NOTIFY ME"</Text>
          </Section>

          {/* Customer Service Section */}
          <Section style={serviceSectionStyle}>
            <Row>
              <Column style={serviceColumnStyle}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1676527883007-money-back-guarantee.png"
                  alt="Money Back Guarantee"
                  style={serviceIconStyle}
                />
                <Text style={serviceTextStyle}>Money Back Guarantee</Text>
              </Column>
              <Column style={serviceColumnStyle}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1676528024940-truck.png"
                  alt="Free Shipping"
                  style={serviceIconStyle}
                />
                <Text style={serviceTextStyle}>Free Shipping</Text>
              </Column>
              <Column style={serviceColumnStyle}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1676528024950-comment.png"
                  alt="24/7 Support"
                  style={serviceIconStyle}
                />
                <Text style={serviceTextStyle}>24/7 Expert Support</Text>
              </Column>
            </Row>
          </Section>

          {/* Newsletter Signup */}
          <Section style={newsletterSectionStyle}>
            <Text style={newsletterTitleStyle}>Stay Updated</Text>
            <Text style={newsletterDescStyle}>
              Get the latest fashion trends and exclusive offers delivered to your inbox
            </Text>
            <Link href="#" style={newsletterButtonStyle}>
              Subscribe Now
            </Link>
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
            <Text style={footerAddressStyle}>2261 Market Street #4667 San Francisco, CA 94114</Text>
            <Text style={footerInfoStyle}>All rights reserved. Company No. 94114</Text>
            <Text style={copyrightStyle}>Copyright © YourCompany | All Rights Reserved</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default WinterFashionEmailTemplate

// Styles
const bodyStyle = {
  fontFamily: "'Roboto', Arial, sans-serif",
  backgroundColor: "#ffffff",
  margin: "0",
  padding: "20px 0",
  lineHeight: "1.6",
}

const containerStyle = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "0",
  maxWidth: "600px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
}

const heroSectionStyle = {
  backgroundColor: "#f0f0f0",
  padding: "40px 20px",
  textAlign: "center" as const,
}

const heroTitleStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#333333",
  margin: "0 0 5px 0",
  letterSpacing: "2px",
}

const heroImageStyle = {
  width: "100%",
  height: "auto",
  maxHeight: "300px",
  objectFit: "contain" as const,
  marginTop: "20px",
}

const offerSectionStyle = {
  padding: "40px 20px",
  textAlign: "center" as const,
  backgroundColor: "#ffffff",
}

const offerTextStyle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#333333",
  margin: "0 0 8px 0",
}

const discountTextStyle = {
  fontSize: "36px",
  fontWeight: "900",
  color: "#e03e2d",
  margin: "0 0 30px 0",
  letterSpacing: "1px",
}

const primaryButtonStyle = {
  backgroundColor: "#000000",
  color: "#ffffff",
  borderRadius: "4px",
  padding: "14px 40px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  border: "none",
  cursor: "pointer",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
}

const featuredSectionStyle = {
  padding: "50px 20px",
  backgroundColor: "#ffffff",
}

const featuredImageColumnStyle = {
  width: "50%",
  verticalAlign: "middle" as const,
  textAlign: "center" as const,
}

const featuredTextColumnStyle = {
  width: "50%",
  verticalAlign: "middle" as const,
  paddingLeft: "30px",
}

const featuredImageStyle = {
  width: "100%",
  height: "auto",
  maxHeight: "300px",
  objectFit: "contain" as const,
}

const specialDiscountStyle = {
  fontSize: "12px",
  fontWeight: "700",
  color: "#95a5a6",
  margin: "0 0 15px 0",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
}

const productNameStyle = {
  fontSize: "26px",
  fontWeight: "700",
  color: "#000000",
  margin: "0 0 5px 0",
  lineHeight: "1.2",
}

const secondaryButtonStyle = {
  backgroundColor: "#000000",
  color: "#ffffff",
  borderRadius: "4px",
  padding: "12px 25px",
  fontSize: "12px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  border: "1px solid #000000",
  marginTop: "20px",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
}

const bestSellerSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "0",
}

const sectionHeaderStyle = {
  fontSize: "16px",
  fontWeight: "900",
  color: "#ffffff",
  backgroundColor: "#000000",
  margin: "0",
  padding: "15px 20px",
  textAlign: "center" as const,
  letterSpacing: "2px",
}

const productsRowStyle = {
  padding: "30px 20px",
}

const productColumnStyle = {
  width: "33.33%",
  textAlign: "center" as const,
  verticalAlign: "top" as const,
  padding: "0 10px",
}

const productImageStyle = {
  width: "100%",
  height: "auto",
  maxHeight: "250px",
  objectFit: "contain" as const,
  marginBottom: "15px",
}

const productLabelStyle = {
  fontSize: "12px",
  fontWeight: "700",
  color: "#000000",
  fontStyle: "italic",
  margin: "0",
  textAlign: "center" as const,
}

const limitedRunSectionStyle = {
  backgroundColor: "#000000",
  padding: "15px 20px",
  textAlign: "center" as const,
}

const limitedRunTextStyle = {
  fontSize: "12px",
  fontWeight: "900",
  color: "#ffffff",
  margin: "0",
  letterSpacing: "1px",
}

const serviceSectionStyle = {
  padding: "40px 20px",
  backgroundColor: "#f8f9fa",
}

const serviceColumnStyle = {
  width: "33.33%",
  textAlign: "center" as const,
  verticalAlign: "top" as const,
  padding: "0 10px",
}

const serviceIconStyle = {
  width: "40px",
  height: "40px",
  display: "block",
  margin: "0 auto 15px auto",
}

const serviceTextStyle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#333333",
  margin: "0",
  textAlign: "center" as const,
}

const newsletterSectionStyle = {
  backgroundColor: "#f0f0f0",
  padding: "40px 20px",
  textAlign: "center" as const,
}

const newsletterTitleStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#333333",
  margin: "0 0 10px 0",
}

const newsletterDescStyle = {
  fontSize: "16px",
  color: "#666666",
  margin: "0 0 25px 0",
  lineHeight: "1.5",
}

const newsletterButtonStyle = {
  backgroundColor: "#e03e2d",
  color: "#ffffff",
  borderRadius: "4px",
  padding: "14px 30px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
}

const footerSectionStyle = {
  backgroundColor: "#000000",
  padding: "40px 20px",
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
  borderTop: "1px solid #333333",
  margin: "20px 0",
}

const footerAddressStyle = {
  fontSize: "12px",
  color: "#c6c7d2",
  margin: "0 0 8px 0",
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
