import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Link,
  Img,
  Font,
  Section,
  Row,
  Column,
} from "@react-email/components"

interface FreeShippingTemplateProps {
  companyName?: string
  logoUrl?: string
  promoCode?: string
  minimumOrder?: number
  offerValidUntil?: string
  gifUrl?: string
  unsubscribeUrl?: string
  privacyPolicyUrl?: string
  websiteUrl?: string
}

export default function FreeShippingTemplate({
  companyName = "Beyond",
  logoUrl = "https://cdn.templates.unlayer.com/assets/1700646086812-6daab5a98bfff67898127df6_dark_logo_transparent@2x.png",
  promoCode = "DESISHUB123",
  minimumOrder = 25,
  offerValidUntil = "today",
  gifUrl = "https://cdn.templates.unlayer.com/assets/1714375195964-giffff.gif",
  unsubscribeUrl = "#",
  privacyPolicyUrl = "#",
  websiteUrl = "#",
}: FreeShippingTemplateProps) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v30/KFOiCnqEu92Fr1Mu51QrEz0dL_nz.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Just for you - Free Shipping!</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header Section with Logo */}
          <Section style={headerSectionStyle}>
            <Img src={logoUrl} alt={`${companyName} Logo`} style={logoStyle} />
          </Section>

          {/* Navigation Bar */}
          <Section style={navSectionStyle}>
            <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
              <tr>
                <td style={navContainerStyle}>
                  <Text style={navTextStyle}>Home</Text>
                  <Text style={navSeparatorStyle}>|</Text>
                  <Text style={navTextStyle}>Page</Text>
                  <Text style={navSeparatorStyle}>|</Text>
                  <Text style={navTextStyle}>About Us</Text>
                </td>
              </tr>
            </table>
          </Section>

          {/* Main Promotional Section */}
          <Section style={promoSectionStyle}>
            {/* Just for you text */}
            <Text style={justForYouStyle}>Just for you</Text>
            <Text style={justForTodayStyle}>Just for {offerValidUntil}</Text>

            {/* Decorative line */}
            <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
              <tr>
                <td style={decorativeLineContainerStyle}>
                  <div style={decorativeLineStyle}></div>
                </td>
              </tr>
            </table>

            {/* FREE SHIPPING heading */}
            <Heading style={freeShippingHeadingStyle}>
              FREE
              <br />
              SHIPPING
            </Heading>

            {/* Offer details */}
            <Text style={offerDetailsStyle}>on any order of ${minimumOrder} or more</Text>
            <Text style={promoCodeStyle}>USE CODE: {promoCode}</Text>

            {/* Shop Now Button */}
            <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
              <tr>
                <td style={buttonContainerStyle}>
                  <Button href={websiteUrl} style={shopNowButtonStyle}>
                    Shop Now
                  </Button>
                </td>
              </tr>
            </table>

            {/* Disclaimer text */}
            <Text style={disclaimerStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </Text>
          </Section>

          {/* GIF Section */}
          <Section style={gifSectionStyle}>
            <Img src={gifUrl} alt="Promotional Animation" style={gifImageStyle} />
          </Section>

          {/* Footer Section */}
          <Section style={footerSectionStyle}>
            <Text style={thanksTextStyle}>Thanks for the support! 🎁</Text>

            <Text style={footerDescriptionStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
              Sed ut perspiciatis unde omnis iste natus error sit.
            </Text>

            {/* Social Media Icons */}
            <Row style={socialRowStyle}>
              <Column style={socialColumnStyle}>
                <Link href="#" style={socialLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/squared-black/facebook.png"
                    alt="Facebook"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/squared-black/linkedin.png"
                    alt="LinkedIn"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/squared-black/instagram.png"
                    alt="Instagram"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/squared-black/twitter.png"
                    alt="Twitter"
                    style={socialIconStyle}
                  />
                </Link>
              </Column>
            </Row>

            {/* Footer Links */}
            <Text style={footerLinksStyle}>
              <Link href={unsubscribeUrl} style={footerLinkStyle}>
                UNSUBSCRIBE
              </Link>
              <span style={footerSeparatorStyle}> | </span>
              <Link href={privacyPolicyUrl} style={footerLinkStyle}>
                PRIVACY POLICY
              </Link>
              <span style={footerSeparatorStyle}> | </span>
              <Link href={websiteUrl} style={footerLinkStyle}>
                WEB
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// Email-safe inline styles
const bodyStyle = {
  backgroundColor: "#ececec",
  fontFamily: "Roboto, Verdana, sans-serif",
  margin: "0",
  padding: "0",
}

const containerStyle = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "0",
  maxWidth: "600px",
  width: "100%",
}

const headerSectionStyle = {
  backgroundColor: "#183ede",
  padding: "20px",
  textAlign: "center" as const,
}

const logoStyle = {
  maxHeight: "30px",
  maxWidth: "100%",
  height: "auto",
  display: "block",
  margin: "0 auto",
}

const navSectionStyle = {
  backgroundColor: "#ffd850",
  padding: "8px 0",
}

const navContainerStyle = {
  textAlign: "center" as const,
}

const navTextStyle = {
  fontSize: "14px",
  color: "#000000",
  margin: "0 15px",
  display: "inline",
  fontFamily: "Roboto, Verdana, sans-serif",
}

const navSeparatorStyle = {
  fontSize: "14px",
  color: "#000000",
  margin: "0 5px",
  display: "inline",
  fontFamily: "Roboto, Verdana, sans-serif",
}

const promoSectionStyle = {
  backgroundColor: "#183ede",
  padding: "30px 20px",
  textAlign: "center" as const,
}

const justForYouStyle = {
  color: "#ffffff",
  fontSize: "16px",
  textAlign: "center" as const,
  margin: "0 0 5px 0",
  fontFamily: "Roboto, Verdana, sans-serif",
}

const justForTodayStyle = {
  color: "#ffffff",
  fontSize: "16px",
  textAlign: "center" as const,
  margin: "0 0 20px 0",
  fontFamily: "Roboto, Verdana, sans-serif",
}

const decorativeLineContainerStyle = {
  textAlign: "center" as const,
  padding: "0 0 20px 0",
}

const decorativeLineStyle = {
  width: "45%",
  height: "4px",
  backgroundColor: "#ffffff",
  margin: "0 auto",
  maxWidth: "200px",
}

const freeShippingHeadingStyle = {
  color: "#ffd850",
  fontSize: "37px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "0 0 20px 0",
  lineHeight: "1.2",
  fontFamily: "Roboto, Verdana, sans-serif",
}

const offerDetailsStyle = {
  color: "#f1f5f9",
  fontSize: "16px",
  textAlign: "center" as const,
  margin: "0 0 10px 0",
  fontFamily: "Roboto, Verdana, sans-serif",
}

const promoCodeStyle = {
  color: "#ffffff",
  fontSize: "16px",
  textAlign: "center" as const,
  margin: "0 0 25px 0",
  fontFamily: "Roboto, Verdana, sans-serif",
}

const buttonContainerStyle = {
  textAlign: "center" as const,
  padding: "0 0 20px 0",
}

const shopNowButtonStyle = {
  backgroundColor: "transparent",
  border: "1px solid #ffffff",
  color: "#ffffff",
  fontSize: "14px",
  padding: "12px 40px",
  textDecoration: "none",
  borderRadius: "4px",
  display: "inline-block",
  fontFamily: "Roboto, Verdana, sans-serif",
}

const disclaimerStyle = {
  color: "#cccccc",
  fontSize: "12px",
  textAlign: "center" as const,
  margin: "20px 40px 0 40px",
  lineHeight: "1.4",
  fontFamily: "Roboto, Verdana, sans-serif",
}

const gifSectionStyle = {
  padding: "0",
  margin: "0",
}

const gifImageStyle = {
  width: "100%",
  height: "auto",
  display: "block",
  margin: "0",
}

const footerSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "20px",
}

const thanksTextStyle = {
  color: "#000000",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0 0 15px 0",
  textAlign: "left" as const,
  fontFamily: "Roboto, Verdana, sans-serif",
}

const footerDescriptionStyle = {
  color: "#000000",
  fontSize: "12px",
  margin: "0 0 20px 0",
  paddingBottom: "10px",
  borderBottom: "1px solid #000000",
  lineHeight: "1.4",
  textAlign: "left" as const,
  fontFamily: "Roboto, Verdana, sans-serif",
}

const socialRowStyle = {
  margin: "20px 0",
}

const socialColumnStyle = {
  textAlign: "left" as const,
}

const socialLinkStyle = {
  textDecoration: "none",
  marginRight: "10px",
  display: "inline-block",
}

const socialIconStyle = {
  width: "24px",
  height: "24px",
  display: "inline-block",
}

const footerLinksStyle = {
  borderTop: "1px solid #000000",
  paddingTop: "10px",
  margin: "20px 0 0 0",
  textAlign: "left" as const,
  fontFamily: "Roboto, Verdana, sans-serif",
}

const footerLinkStyle = {
  color: "#000000",
  fontSize: "12px",
  textDecoration: "none",
  fontFamily: "Roboto, Verdana, sans-serif",
}

const footerSeparatorStyle = {
  color: "#000000",
  fontSize: "12px",
  fontFamily: "Roboto, Verdana, sans-serif",
}

// Preview props for development
FreeShippingTemplate.PreviewProps = {
  companyName: "Beyond",
  logoUrl:
    "https://cdn.templates.unlayer.com/assets/1700646086812-6daab5a98bfff67898127df6_dark_logo_transparent@2x.png",
  promoCode: "UNLAYER123",
  minimumOrder: 25,
  offerValidUntil: "today",
  gifUrl: "https://cdn.templates.unlayer.com/assets/1714375195964-giffff.gif",
  unsubscribeUrl: "https://example.com/unsubscribe",
  privacyPolicyUrl: "https://example.com/privacy",
  websiteUrl: "https://example.com",
} satisfies FreeShippingTemplateProps
