import { Body, Container, Column, Head, Hr, Html, Link, Preview, Row, Section, Text } from "@react-email/components"

export const ShoppingCartTemplate = () => {
  return (
    <Html>
      <Head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
            * {
              font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            }
          `}
        </style>
      </Head>
      <Preview>Your cart is waiting for you - Complete your purchase today!</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header Section */}
          <Section style={headerSectionStyle}>
            <Text style={brandStyle}>Shop</Text>
          </Section>

          {/* Hero Section */}
          <Section style={heroSectionStyle}>
            <Text style={heroTitleStyle}>Ronald, your shopping cart misses you</Text>
            <Text style={heroSubtitleStyle}>Amazing deals, updates, and interesting news right in your inbox</Text>
          </Section>

          {/* Cart Items Section */}
          <Section style={cartSectionStyle}>
            {/* Cart Header */}
            <Row style={cartHeaderRowStyle}>
              <Column style={itemHeaderColumnStyle}>
                <Text style={headerTextStyle}>Item</Text>
              </Column>
              <Column style={priceHeaderColumnStyle}>
                <Text style={headerTextStyle}>Price</Text>
              </Column>
            </Row>

            {/* Cart Item 1 */}
            <Row style={cartItemRowStyle}>
              <Column style={itemColumnStyle}>
                <Text style={itemNameStyle}>Analog wrist watch</Text>
                <Text style={itemSizeStyle}>Small</Text>
                <Text style={itemDescriptionStyle}>
                  A small river named Duden flows by their place and supplies it with the necessary regelialia
                </Text>
              </Column>
              <Column style={priceColumnStyle}>
                <Text style={priceTextStyle}>$120</Text>
              </Column>
            </Row>

            {/* Cart Item 2 */}
            <Row style={cartItemRowStyle}>
              <Column style={itemColumnStyle}>
                <Text style={itemNameStyle}>Analog camera</Text>
                <Text style={itemSizeStyle}>Small</Text>
                <Text style={itemDescriptionStyle}>
                  A small river named Duden flows by their place and supplies it with the necessary regelialia
                </Text>
              </Column>
              <Column style={priceColumnStyle}>
                <Text style={priceTextStyle}>$120</Text>
              </Column>
            </Row>

            {/* Total Section */}
            <Row style={totalRowStyle}>
              <Column style={totalLabelColumnStyle}>
                <Text style={totalLabelStyle}>Total</Text>
              </Column>
              <Column style={totalPriceColumnStyle}>
                <Text style={totalPriceStyle}>$240</Text>
              </Column>
            </Row>
          </Section>

          {/* CTA Section */}
          <Section style={ctaSectionStyle}>
            <Link href="#" style={buttonStyle}>
              Continue your order
            </Link>
          </Section>

          {/* Footer Section */}
          <Section style={footerSectionStyle}>
            <Row>
              <Column style={footerColumnStyle}>
                <Text style={footerTitleStyle}>About</Text>
                <Text style={footerTextStyle}>
                  A small river named Duden flows by their place and supplies it with the necessary regelialia
                </Text>
              </Column>
              <Column style={footerColumnStyle}>
                <Text style={footerTitleStyle}>Contact Info</Text>
                <Text style={footerTextStyle}>203 Fake St. Mountain View, San Francisco, California, USA</Text>
                <Text style={footerTextStyle}>+2 392 3929 210</Text>
              </Column>
              <Column style={footerColumnStyle}>
                <Text style={footerTitleStyle}>Useful Links</Text>
                <Text style={footerLinkStyle}>
                  <Link href="#" style={linkStyle}>
                    Home
                  </Link>
                </Text>
                <Text style={footerLinkStyle}>
                  <Link href="#" style={linkStyle}>
                    Account
                  </Link>
                </Text>
                <Text style={footerLinkStyle}>
                  <Link href="#" style={linkStyle}>
                    Wishlist
                  </Link>
                </Text>
                <Text style={footerLinkStyle}>
                  <Link href="#" style={linkStyle}>
                    Order
                  </Link>
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Unsubscribe Section */}
          <Section style={unsubscribeSectionStyle}>
            <Hr style={dividerStyle} />
            <Text style={unsubscribeTextStyle}>
              No longer want to receive these emails? You can{" "}
              <Link href="#" style={unsubscribeLinkStyle}>
                unsubscribe here
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default ShoppingCartTemplate

// Styles
const bodyStyle = {
  fontFamily: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  backgroundColor: "#f5f5f5",
  margin: "0",
  padding: "20px 0",
  lineHeight: "1.6",
}

const containerStyle = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "0",
  maxWidth: "600px",
  borderRadius: "12px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
}

const headerSectionStyle = {
  padding: "32px 36px 24px 36px",
  backgroundColor: "#ffffff",
}

const brandStyle = {
  fontSize: "28px",
  fontWeight: "700",
  color: "#17BEBB",
  margin: "0",
  letterSpacing: "-0.5px",
}

const heroSectionStyle = {
  padding: "0 36px 32px 36px",
  backgroundColor: "#ffffff",
}

const heroTitleStyle = {
  fontSize: "32px",
  fontWeight: "600",
  color: "#1a1a1a",
  margin: "0 0 16px 0",
  lineHeight: "1.3",
  letterSpacing: "-0.5px",
}

const heroSubtitleStyle = {
  fontSize: "18px",
  fontWeight: "400",
  color: "#666666",
  margin: "0",
  lineHeight: "1.6",
}

const cartSectionStyle = {
  padding: "0 36px",
  backgroundColor: "#ffffff",
}

const cartHeaderRowStyle = {
  borderBottom: "2px solid #f0f0f0",
  paddingBottom: "16px",
  marginBottom: "20px",
}

const itemHeaderColumnStyle = {
  width: "75%",
  verticalAlign: "top" as const,
}

const priceHeaderColumnStyle = {
  width: "25%",
  textAlign: "center" as const,
  verticalAlign: "top" as const,
}

const headerTextStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#1a1a1a",
  margin: "0",
}

const cartItemRowStyle = {
  borderBottom: "1px solid #f0f0f0",
  paddingBottom: "24px",
  marginBottom: "24px",
}

const itemColumnStyle = {
  width: "75%",
  verticalAlign: "top" as const,
  paddingRight: "20px",
}

const priceColumnStyle = {
  width: "25%",
  textAlign: "center" as const,
  verticalAlign: "top" as const,
}

const itemNameStyle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#1a1a1a",
  margin: "0 0 4px 0",
}

const itemSizeStyle = {
  fontSize: "14px",
  color: "#888888",
  margin: "0 0 8px 0",
  fontWeight: "500",
}

const itemDescriptionStyle = {
  fontSize: "14px",
  color: "#666666",
  margin: "0",
  lineHeight: "1.5",
}

const priceTextStyle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#1a1a1a",
  margin: "0",
}

const totalRowStyle = {
  borderTop: "2px solid #17BEBB",
  paddingTop: "20px",
  marginBottom: "0",
}

const totalLabelColumnStyle = {
  width: "75%",
  verticalAlign: "top" as const,
  paddingRight: "20px",
}

const totalPriceColumnStyle = {
  width: "25%",
  textAlign: "center" as const,
  verticalAlign: "top" as const,
}

const totalLabelStyle = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#1a1a1a",
  margin: "0",
}

const totalPriceStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#17BEBB",
  margin: "0",
}

const ctaSectionStyle = {
  padding: "32px 36px",
  textAlign: "center" as const,
  backgroundColor: "#ffffff",
}

const buttonStyle = {
  backgroundColor: "#17BEBB",
  color: "#ffffff",
  borderRadius: "8px",
  padding: "16px 32px",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  border: "none",
  cursor: "pointer",
  transition: "all 0.2s ease",
  boxShadow: "0 4px 12px rgba(23, 190, 187, 0.3)",
}

const footerSectionStyle = {
  backgroundColor: "#f8f9fa",
  padding: "40px 36px",
  borderTop: "1px solid #e9ecef",
}

const footerColumnStyle = {
  width: "33.33%",
  verticalAlign: "top" as const,
  paddingRight: "20px",
}

const footerTitleStyle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#1a1a1a",
  margin: "0 0 16px 0",
}

const footerTextStyle = {
  fontSize: "14px",
  color: "#666666",
  margin: "0 0 12px 0",
  lineHeight: "1.5",
}

const footerLinkStyle = {
  fontSize: "14px",
  margin: "0 0 8px 0",
}

const linkStyle = {
  color: "#17BEBB",
  textDecoration: "none",
  fontWeight: "500",
}

const unsubscribeSectionStyle = {
  padding: "24px 36px",
  textAlign: "center" as const,
  backgroundColor: "#ffffff",
}

const dividerStyle = {
  border: "none",
  borderTop: "1px solid #e9ecef",
  margin: "0 0 24px 0",
}

const unsubscribeTextStyle = {
  fontSize: "14px",
  color: "#888888",
  margin: "0",
  lineHeight: "1.5",
}

const unsubscribeLinkStyle = {
  color: "#17BEBB",
  textDecoration: "underline",
  fontWeight: "500",
}
