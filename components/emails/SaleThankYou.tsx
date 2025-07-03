import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

export const SaleThankYou = () => (
  <Html>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>{`
        @media only screen and (max-width: 600px) {
          .mobile-padding { padding: 20px 16px !important; }
          .mobile-text { font-size: 14px !important; }
          .mobile-heading { font-size: 24px !important; }
          .mobile-large-heading { font-size: 32px !important; }
          .mobile-full-width { width: 100% !important; }
          .mobile-center { text-align: center !important; }
          .mobile-button { 
            width: 100% !important;
            padding: 12px 20px !important;
            font-size: 14px !important;
            max-width: 200px !important;
            margin: 10px auto !important;
            display: block !important;
          }
          .mobile-nav { display: none !important; }
          .mobile-logo { font-size: 18px !important; }
          .mobile-discount { font-size: 48px !important; }
          .mobile-product-image { width: 200px !important; height: auto !important; }
          .mobile-social-icon { width: 28px !important; height: 28px !important; margin: 0 5px !important; }
        }
      `}</style>
    </Head>
    <Preview>Thank you for your purchase! Enjoy 20% off your next order</Preview>
    <Tailwind>
        <Body style={main}>
      <Container style={container}>
        {/* Header Section */}
        <Section style={headerSection}>
          <Row>
            <Column>
              <table cellPadding="0" cellSpacing="0" border={0} width="100%">
                <tr>
                  <td style={logoCell}>
                    <div style={logoContainer}>
                      <div style={logoIcon}>📦</div>
                      <Text style={logoText} className="mobile-logo">
                        QUICKSHOP
                      </Text>
                    </div>
                  </td>
                  <td style={navCell} className="mobile-nav">
                    <table cellPadding="0" cellSpacing="0" border={0}>
                      <tr>
                        <td style={navItem}>
                          <Link href="#" style={navLink}>
                            NEW COLLECTIONS
                          </Link>
                        </td>
                        <td style={navItem}>
                          <Link href="#" style={navLink}>
                            LAPTOPS
                          </Link>
                        </td>
                        <td style={navItem}>
                          <Link href="#" style={navLink}>
                            HEADPHONES
                          </Link>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Column>
          </Row>
        </Section>

        {/* Main Thank You Section */}
        <Section style={thankYouSection} className="bg-[url('https://res.cloudinary.com/dirpuqqib/image/upload/v1750761322/1656492585451-bg_gla3d8.png')] bg-center bg-cover mobile-padding">
          <Row>
            <Column align="center">
              <div style={decorativeBackground}>
                <Heading style={thankYouHeading} className="mobile-large-heading">
                  Thank You
                </Heading>
                <Text style={thankYouSubheading} className="mobile-heading">
                  for buying with us
                </Text>

                <Text style={thankYouMessage} className="mobile-text">
                  Thank you so much for your order. We're really excited to get your products out to you as soon as
                  possible.
                </Text>

                <div style={discountContainer}>
                  <Text style={discountPercent} className="mobile-discount">
                    20%
                  </Text>
                  <Text style={promoLabel}>Promo Code</Text>
                  <Link href="#" style={promoButton} className="mobile-button">
                    Get20%
                  </Link>
                </div>

                <Text style={happyShoppingText} className="mobile-text">
                  Thanks again, and <strong>happy shopping!</strong>
                </Text>

                <div style={barcodeContainer}>
                  <Img src="https://cdn.templates.unlayer.com/assets/1656492948581-barcode.png" alt="Order barcode" style={barcodeImage} />
                </div>
              </div>
            </Column>
          </Row>
        </Section>

        {/* Product Showcase Section */}
        <Section style={productSection} className="mobile-padding">
          <Row>
            <Column align="center">
              <Img
                src="https://cdn.templates.unlayer.com/assets/1656493026003-product.png"
                alt="Galaxy Buds Pro, Phantom Black"
                style={productImage}
                className="mobile-product-image"
              />
              <Heading style={productName} className="mobile-heading">
                Galaxy Buds Pro, Phantom Black
              </Heading>
              <Text style={productPrice} className="mobile-text">
                Price: $99.99
              </Text>
            </Column>
          </Row>
        </Section>

        {/* Feedback Section */}
        <Section style={feedbackSection} className="mobile-padding">
          <Row>
            <Column align="center">
              <Heading style={feedbackHeading} className="mobile-heading">
                We want your Feedback
              </Heading>
              <Text style={feedbackText} className="mobile-text">
                We would really appreciate if you could take a minute to leave us a review or feedback about your
                experience. We're constantly striving to improve and your input.
              </Text>
              <Link href="#" style={feedbackButton} className="mobile-button">
                Feedback
              </Link>
            </Column>
          </Row>
        </Section>

        {/* Footer Section */}
        <Section style={footerSection} className="mobile-padding">
          <Row>
            <Column align="center">
              {/* Social Media Icons */}
              <table cellPadding="0" cellSpacing="0" border={0} style={socialIconsTable}>
                <tr>
                  <td align="center">
                    <table cellPadding="0" cellSpacing="0" border={0} style={socialIconsInnerTable}>
                      <tr>
                        <td style={socialIconCell}>
                          <Link href="#" style={socialLink}>
                            <div style={{ ...socialIcon, backgroundColor: "#1877f2" }} className="mobile-social-icon">
                              f
                            </div>
                          </Link>
                        </td>
                        <td style={socialIconCell}>
                          <Link href="#" style={socialLink}>
                            <div style={{ ...socialIcon, backgroundColor: "#e4405f" }} className="mobile-social-icon">
                              📷
                            </div>
                          </Link>
                        </td>
                        <td style={socialIconCell}>
                          <Link href="#" style={socialLink}>
                            <div style={{ ...socialIcon, backgroundColor: "#bd081c" }} className="mobile-social-icon">
                              P
                            </div>
                          </Link>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <Text style={footerAddress} className="mobile-text">
                201 Market Street #4567 San Francisco, CA 94114
              </Text>
              <Text style={footerCopyright} className="mobile-text">
                © 2020 Untitled. All Rights Reserved
              </Text>
            </Column>
          </Row>
        </Section>
      </Container>
    </Body>
    </Tailwind>
  </Html>
)

export default SaleThankYou

// Styles
const main = {
  backgroundColor: "#f5f5f5",
  fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
  margin: "0",
  padding: "20px 0",
}

const container = {
  margin: "0 auto",
  width: "100%",
  maxWidth: "600px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  overflow: "hidden",
}

// Header Styles
const headerSection = {
  backgroundColor: "#ffffff",
  padding: "20px 30px",
  borderBottom: "1px solid #e0e0e0",
}

const logoCell = {
  verticalAlign: "middle" as const,
}

const logoContainer = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
}

const logoIcon = {
  fontSize: "20px",
}

const logoText = {
  color: "#333333",
  fontSize: "20px",
  fontWeight: "700",
  margin: "0",
  letterSpacing: "1px",
}

const navCell = {
  textAlign: "right" as const,
  verticalAlign: "middle" as const,
}

const navItem = {
  padding: "0 15px",
}

const navLink = {
  color: "#666666",
  fontSize: "12px",
  fontWeight: "500",
  textDecoration: "none",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
}

// Thank You Section Styles
const thankYouSection = {
  backgroundColor: "#ffffff",
  padding: "0",
}

const decorativeBackground = {

  padding: "50px 40px",
  position: "relative" as const,
  textAlign: "center" as const,
}

const thankYouHeading = {
  color: "#333333",
  fontSize: "42px",
  fontWeight: "700",
  margin: "0 0 5px",
  letterSpacing: "-1px",
}

const thankYouSubheading = {
  color: "#666666",
  fontSize: "18px",
  fontWeight: "400",
  margin: "0 0 30px",
}

const thankYouMessage = {
  color: "#666666",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0 0 40px",
  maxWidth: "400px",
  marginLeft: "auto",
  marginRight: "auto",
}

const discountContainer = {
  margin: "0 0 30px",
}

const discountPercent = {
  color: "#333333",
  fontSize: "64px",
  fontWeight: "700",
  margin: "0 0 5px",
  display: "block",
}

const promoLabel = {
  color: "#666666",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0 0 15px",
  display: "block",
}

const promoButton = {
  backgroundColor: "#4a4a4a",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "12px 30px",
  borderRadius: "4px",
  display: "inline-block",
  textAlign: "center" as const,
}

const happyShoppingText = {
  color: "#666666",
  fontSize: "14px",
  margin: "0 0 30px",
}

const barcodeContainer = {
  margin: "0",
}

const barcodeImage = {
  width: "300px",
  height: "40px",
  display: "block",
  margin: "0 auto",
}

// Product Section Styles
const productSection = {
  backgroundColor: "#ffffff",
  padding: "40px",
  borderTop: "1px solid #e0e0e0",
}

const productImage = {
  width: "450px",
  height: "auto",
  marginBottom: "20px",
  borderRadius: "8px",
}

const productName = {
  color: "#333333",
  fontSize: "20px",
  fontWeight: "600",
  margin: "0 0 10px",
  textAlign: "center" as const,
}

const productPrice = {
  color: "#333333",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0",
  textAlign: "center" as const,
}

// Feedback Section Styles
const feedbackSection = {
  backgroundColor: "#f8f9fa",
  padding: "40px",
}

const feedbackHeading = {
  color: "#333333",
  fontSize: "22px",
  fontWeight: "600",
  margin: "0 0 15px",
  textAlign: "center" as const,
}

const feedbackText = {
  color: "#666666",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0 0 25px",
  textAlign: "center" as const,
  maxWidth: "400px",
  marginLeft: "auto",
  marginRight: "auto",
}

const feedbackButton = {
  backgroundColor: "#4a4a4a",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "12px 30px",
  borderRadius: "4px",
  display: "inline-block",
  textAlign: "center" as const,
}

// Footer Styles
const footerSection = {
  backgroundColor: "#ffffff",
  padding: "30px 40px",
  borderTop: "1px solid #e0e0e0",
}

const socialIconsTable = {
  width: "100%",
  marginBottom: "20px",
}

const socialIconsInnerTable = {
  margin: "0 auto",
}

const socialIconCell = {
  padding: "0 8px",
}

const socialLink = {
  textDecoration: "none",
}

const socialIcon = {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  display: "inline-block",
  textAlign: "center" as const,
  lineHeight: "32px",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
}

const footerAddress = {
  color: "#666666",
  fontSize: "12px",
  textAlign: "center" as const,
  margin: "0 0 5px",
}

const footerCopyright = {
  color: "#666666",
  fontSize: "12px",
  textAlign: "center" as const,
  margin: "0",
}
