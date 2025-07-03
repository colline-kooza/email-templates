import { Body, Container, Column, Head, Hr, Html, Link, Preview, Row, Section, Text } from "@react-email/components"

export const InvoiceEmailTemplate = () => {
  return (
    <Html>
      <Head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            * {
              font-family: 'Inter', Arial, sans-serif;
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
                padding: 15px !important;
              }
              .mobile-stack {
                display: block !important;
                width: 100% !important;
              }
              .mobile-hide {
                display: none !important;
              }
            }
          `}
        </style>
      </Head>
      <Preview>Invoice #9878748 - Your order confirmation and receipt</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header Section */}
          <Section style={headerSectionStyle}>
            <Row>
              <Column style={logoColumnStyle}>
                <Text style={logoStyle}>Your Logo</Text>
              </Column>
              <Column style={headerTextColumnStyle}>
                <Text style={headerDescriptionStyle}>
                  If you can't view this invoice properly, please use web view.
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Invoice Details Section */}
          <Section style={invoiceDetailsSectionStyle}>
            <Row>
              <Column style={shippingColumnStyle}>
                <Text style={sectionTitleStyle}>Shipping Address</Text>
                <Text style={addressTextStyle}>
                  John Smith
                  <br />
                  Street XYZ, Jane Town
                  <br />
                  LZ1723 London, UK
                </Text>
              </Column>
              <Column style={invoiceNumberColumnStyle}>
                <Text style={sectionTitleStyle}>Invoice Number</Text>
                <Text style={invoiceNumberStyle}>#9878748</Text>
              </Column>
            </Row>
          </Section>

          {/* Invoice Date and Payment Info */}
          <Section style={additionalInfoSectionStyle}>
            <Row>
              <Column style={infoColumnStyle}>
                <Text style={infoLabelStyle}>Invoice Date:</Text>
                <Text style={infoValueStyle}>December 19, 2024</Text>
              </Column>
              
              <Column style={infoColumnStyle}>
                <Text style={infoLabelStyle}>Order Status:</Text>
                <Text style={statusValueStyle}>Confirmed</Text>
              </Column>
            </Row>
          </Section>

          {/* Purchased Items Section */}
          <Section style={itemsSectionStyle}>
            <Text style={itemsSectionTitleStyle}>Purchased Items</Text>

            {/* Items Header */}
            <Row style={itemsHeaderRowStyle}>
              <Column style={itemNameHeaderColumnStyle}>
                <Text style={itemsHeaderTextStyle}>Item</Text>
              </Column>
              <Column style={itemQuantityHeaderColumnStyle}>
                <Text style={itemsHeaderTextStyle}>Qty</Text>
              </Column>
              <Column style={itemPriceHeaderColumnStyle}>
                <Text style={itemsHeaderTextStyle}>Price</Text>
              </Column>
              <Column style={itemTotalHeaderColumnStyle}>
                <Text style={itemsHeaderTextStyle}>Total</Text>
              </Column>
            </Row>

            {/* Item 1 */}
            <Row style={itemRowStyle}>
              <Column style={itemNameColumnStyle}>
                <Text style={itemNameStyle}>Sed ut perspiciatis</Text>
                <Text style={itemDescriptionStyle}>Premium quality product with excellent features</Text>
              </Column>
              <Column style={itemQuantityColumnStyle}>
                <Text style={itemQuantityStyle}>3</Text>
              </Column>
              <Column style={itemPriceColumnStyle}>
                <Text style={itemPriceStyle}>$30</Text>
              </Column>
              <Column style={itemTotalColumnStyle}>
                <Text style={itemTotalStyle}>$90</Text>
              </Column>
            </Row>

            {/* Item 2 */}
            <Row style={itemRowStyle}>
              <Column style={itemNameColumnStyle}>
                <Text style={itemNameStyle}>At vero eos et</Text>
                <Text style={itemDescriptionStyle}>High-quality item with premium materials</Text>
              </Column>
              <Column style={itemQuantityColumnStyle}>
                <Text style={itemQuantityStyle}>2</Text>
              </Column>
              <Column style={itemPriceColumnStyle}>
                <Text style={itemPriceStyle}>$50</Text>
              </Column>
              <Column style={itemTotalColumnStyle}>
                <Text style={itemTotalStyle}>$100</Text>
              </Column>
            </Row>

            {/* Item 3 */}
            <Row style={itemRowStyle}>
              <Column style={itemNameColumnStyle}>
                <Text style={itemNameStyle}>Nam libero tempore</Text>
                <Text style={itemDescriptionStyle}>Exclusive limited edition product</Text>
              </Column>
              <Column style={itemQuantityColumnStyle}>
                <Text style={itemQuantityStyle}>1</Text>
              </Column>
              <Column style={itemPriceColumnStyle}>
                <Text style={itemPriceStyle}>$110</Text>
              </Column>
              <Column style={itemTotalColumnStyle}>
                <Text style={itemTotalStyle}>$110</Text>
              </Column>
            </Row>
          </Section>

          {/* Order Summary */}
          <Section style={summarySectionStyle}>
            <Row style={summaryRowStyle}>
              <Column style={summaryLabelColumnStyle}>
                <Text style={summaryLabelStyle}>Subtotal:</Text>
              </Column>
              <Column style={summaryValueColumnStyle}>
                <Text style={summaryValueStyle}>$300</Text>
              </Column>
            </Row>
            <Row style={summaryRowStyle}>
              <Column style={summaryLabelColumnStyle}>
                <Text style={summaryLabelStyle}>GST (Tax):</Text>
              </Column>
              <Column style={summaryValueColumnStyle}>
                <Text style={summaryValueStyle}>$50</Text>
              </Column>
            </Row>
            <Hr style={summaryDividerStyle} />
            <Row style={grandTotalRowStyle}>
              <Column style={summaryLabelColumnStyle}>
                <Text style={grandTotalLabelStyle}>Grand Total:</Text>
              </Column>
              <Column style={summaryValueColumnStyle}>
                <Text style={grandTotalValueStyle}>$350</Text>
              </Column>
            </Row>
          </Section>

          {/* Shipping Information */}
          <Section style={shippingInfoSectionStyle}>
            <Text style={shippingInfoTitleStyle}>Shipping Information</Text>
            <Row>
              <Column style={shippingDetailColumnStyle}>
                <Text style={shippingDetailLabelStyle}>Estimated Delivery:</Text>
                <Text style={shippingDetailValueStyle}>December 22-24, 2024</Text>
              </Column>
           
              <Column style={shippingDetailColumnStyle}>
                <Text style={shippingDetailLabelStyle}>Tracking Number:</Text>
                <Text style={trackingNumberStyle}>TR123456789</Text>
              </Column>
            </Row>
          </Section>

          {/* Customer Service Section */}
          <Section style={customerServiceSectionStyle}>
            <Text style={customerServiceTitleStyle}>Need Help?</Text>
            <Text style={customerServiceTextStyle}>
              If you have any questions about your order, please don't hesitate to contact our customer service team.
              We're here to help!
            </Text>
            <Row>
              <Column style={serviceButtonColumnStyle}>
                <Link href="https://mycompany.com/track-order" style={serviceButtonStyle}>
                Track Your Order
                </Link>
              </Column>
           
            </Row>
          </Section>

          {/* Footer Section */}
          <Section style={footerSectionStyle}>
            <Text style={footerTextStyle}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
            </Text>
            <Row>
              <Column style={footerLinksColumnStyle}>
                <Link href="https://www.mycompany.com" style={footerLinkStyle}>
                  www.mycompany.com
                </Link>
                <Text style={footerSeparatorStyle}>|</Text>
                <Link href="https://www.mycompany.com/return-policy" style={footerLinkStyle}>
                  Return Policy
                </Link>
                <Text style={footerSeparatorStyle}>|</Text>
                <Link href="https://www.mycompany.com/shop" style={footerLinkStyle}>
                  Shop
                </Link>
                <Text style={footerSeparatorStyle}>|</Text>
                <Link href="https://www.mycompany.com/my-account" style={footerLinkStyle}>
                  My Account
                </Link>
              </Column>
            </Row>
          </Section>

          {/* Unsubscribe Section */}
          <Section style={unsubscribeSectionStyle}>
            <Text style={unsubscribeTextStyle}>You received this email because you signed up for My Company Inc.</Text>
            <Text style={unsubscribeTextStyle}>
              <Link href="https://www.mycompany.com/unsubscribe" style={unsubscribeLinkStyle}>
                Unsubscribe
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default InvoiceEmailTemplate

// Responsive Styles
const bodyStyle = {
  fontFamily: "'Inter', Arial, sans-serif",
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
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
}

const headerSectionStyle = {
  backgroundColor: "#2dd4bf",
  padding: "20px 8px",
}

const logoColumnStyle = {
  width: "40%",
  verticalAlign: "middle" as const,
}

const headerTextColumnStyle = {
  width: "60%",
  verticalAlign: "middle" as const,
  textAlign: "right" as const,
}

const logoStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0",
  fontStyle: "italic",
}

const headerDescriptionStyle = {
  fontSize: "12px",
  color: "#ffffff",
  margin: "0",
  opacity: "0.9",
}

const invoiceDetailsSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "15px",
}

const shippingColumnStyle = {
  width: "60%",
  verticalAlign: "top" as const,
  paddingRight: "20px",
}

const invoiceNumberColumnStyle = {
  width: "40%",
  verticalAlign: "top" as const,
  textAlign: "right" as const,
}

const sectionTitleStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#1f2937",
  margin: "0 0 10px 0",
}

const addressTextStyle = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0",
  lineHeight: "1.5",
}

const invoiceNumberStyle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#1f2937",
  margin: "0",
}

const additionalInfoSectionStyle = {
  backgroundColor: "#f9fafb",
  padding: "20px 15px",
  borderTop: "1px solid #e5e7eb",
  borderBottom: "1px solid #e5e7eb",
}

const infoColumnStyle = {
  width: "33.33%",
  verticalAlign: "top" as const,
  padding: "0 10px",
}

const infoLabelStyle = {
  fontSize: "12px",
  color: "#6b7280",
  margin: "0 0 5px 0",
  fontWeight: "500",
}

const infoValueStyle = {
  fontSize: "14px",
  color: "#1f2937",
  margin: "0",
  fontWeight: "600",
}

const statusValueStyle = {
  fontSize: "14px",
  color: "#059669",
  margin: "0",
  fontWeight: "600",
}

const itemsSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "20px",
}

const itemsSectionTitleStyle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#1f2937",
  margin: "0 0 20px 0",
}

const itemsHeaderRowStyle = {
  backgroundColor: "#f9fafb",
  padding: "10px 0",
  borderBottom: "2px solid #e5e7eb",
}

const itemNameHeaderColumnStyle = {
  width: "40%",
  verticalAlign: "middle" as const,
  padding: "0 10px",
}

const itemQuantityHeaderColumnStyle = {
  width: "15%",
  verticalAlign: "middle" as const,
  textAlign: "center" as const,
  padding: "0 10px",
}

const itemPriceHeaderColumnStyle = {
  width: "20%",
  verticalAlign: "middle" as const,
  textAlign: "center" as const,
  padding: "0 10px",
}

const itemTotalHeaderColumnStyle = {
  width: "25%",
  verticalAlign: "middle" as const,
  textAlign: "right" as const,
  padding: "0 10px",
}

const itemsHeaderTextStyle = {
  fontSize: "12px",
  fontWeight: "600",
  color: "#6b7280",
  margin: "0",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
}

const itemRowStyle = {
  padding: "15px 0",
  borderBottom: "1px solid #f3f4f6",
}

const itemNameColumnStyle = {
  width: "40%",
  verticalAlign: "top" as const,
  padding: "0 10px",
}

const itemQuantityColumnStyle = {
  width: "15%",
  verticalAlign: "top" as const,
  textAlign: "center" as const,
  padding: "0 10px",
}

const itemPriceColumnStyle = {
  width: "20%",
  verticalAlign: "top" as const,
  textAlign: "center" as const,
  padding: "0 10px",
}

const itemTotalColumnStyle = {
  width: "25%",
  verticalAlign: "top" as const,
  textAlign: "right" as const,
  padding: "0 10px",
}

const itemNameStyle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#1f2937",
  margin: "0 0 5px 0",
}

const itemDescriptionStyle = {
  fontSize: "12px",
  color: "#6b7280",
  margin: "0",
  lineHeight: "1.4",
}

const itemQuantityStyle = {
  fontSize: "14px",
  color: "#2dd4bf",
  margin: "0",
  fontWeight: "600",
}

const itemPriceStyle = {
  fontSize: "14px",
  color: "#1f2937",
  margin: "0",
}

const itemTotalStyle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#1f2937",
  margin: "0",
}

const summarySectionStyle = {
  backgroundColor: "#f9fafb",
  padding: "20px 15px",
}

const summaryRowStyle = {
  padding: "8px 0",
}

const summaryLabelColumnStyle = {
  width: "70%",
  verticalAlign: "middle" as const,
  textAlign: "right" as const,
  paddingRight: "20px",
}

const summaryValueColumnStyle = {
  width: "30%",
  verticalAlign: "middle" as const,
  textAlign: "right" as const,
}

const summaryLabelStyle = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0",
}

const summaryValueStyle = {
  fontSize: "14px",
  color: "#1f2937",
  margin: "0",
  fontWeight: "500",
}

const summaryDividerStyle = {
  border: "none",
  borderTop: "2px solid #e5e7eb",
  margin: "15px 0",
}

const grandTotalRowStyle = {
  padding: "10px 0",
}

const grandTotalLabelStyle = {
  fontSize: "16px",
  fontWeight: "700",
  color: "#1f2937",
  margin: "0",
}

const grandTotalValueStyle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#2dd4bf",
  margin: "0",
}

const shippingInfoSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "15px",
  borderTop: "1px solid #e5e7eb",
}

const shippingInfoTitleStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#1f2937",
  margin: "0 0 20px 0",
}

const shippingDetailColumnStyle = {
  width: "33.33%",
  verticalAlign: "top" as const,
  padding: "0 10px",
}

const shippingDetailLabelStyle = {
  fontSize: "12px",
  color: "#6b7280",
  margin: "0 0 5px 0",
  fontWeight: "500",
}

const shippingDetailValueStyle = {
  fontSize: "14px",
  color: "#1f2937",
  margin: "0",
}

const trackingNumberStyle = {
  fontSize: "14px",
  color: "#2dd4bf",
  margin: "0",
  fontWeight: "600",
}

const customerServiceSectionStyle = {
  backgroundColor: "#f9fafb",
  padding: "15px",
  textAlign: "center" as const,
}

const customerServiceTitleStyle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#1f2937",
  margin: "0 0 15px 0",
}

const customerServiceTextStyle = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0 0 25px 0",
  lineHeight: "1.5",
}

const serviceButtonColumnStyle = {
  width: "50%",
  textAlign: "center" as const,
  padding: "0 10px",
}

const serviceButtonStyle = {
  backgroundColor: "#2dd4bf",
  color: "#ffffff",
  borderRadius: "6px",
  padding: "12px 20px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
}

const serviceButtonSecondaryStyle = {
  backgroundColor: "transparent",
  color: "#2dd4bf",
  borderRadius: "6px",
  padding: "12px 20px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  border: "2px solid #2dd4bf",
}

const footerSectionStyle = {
  backgroundColor: "#2dd4bf",
  padding: "15px",
  textAlign: "center" as const,
}

const footerTextStyle = {
  fontSize: "12px",
  color: "#ffffff",
  margin: "0 0 20px 0",
  lineHeight: "1.5",
  opacity: "0.9",
}

const footerLinksColumnStyle = {
  textAlign: "center" as const,
}

const footerLinkStyle = {
  fontSize: "12px",
  color: "#ffffff",
  textDecoration: "none",
  margin: "0 5px",
  fontWeight: "500",
}

const footerSeparatorStyle = {
  fontSize: "12px",
  color: "#ffffff",
  margin: "0 5px",
  opacity: "0.7",
}

const unsubscribeSectionStyle = {
  backgroundColor: "#e5e7eb",
  padding: "20px 30px",
  textAlign: "center" as const,
}

const unsubscribeTextStyle = {
  fontSize: "11px",
  color: "#6b7280",
  margin: "0 0 5px 0",
}

const unsubscribeLinkStyle = {
  color: "#6b7280",
  textDecoration: "underline",
}
