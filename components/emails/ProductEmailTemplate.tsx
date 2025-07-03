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
} from "@react-email/components";

export const ProductEmailTemplate = () => {
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
              .mobile-product-image {
                max-width: 200px !important;
                margin: 0 auto !important;
              }
            }
          `}
        </style>
      </Head>
      <Preview>
        Order Confirmation - Champion Men's Reverse Weave Pullover
      </Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header Navigation */}
          <Section style={headerSectionStyle}>
            <Row>
              <Column style={logoColumnStyle}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1650004326546-logo.png"
                  alt="Company Logo"
                  style={logoStyle}
                />
              </Column>
              <Column style={navColumnStyle}>
                <Link href="#" style={navLinkStyle}>
                  Home
                </Link>
                <Link href="#" style={navLinkStyle}>
                  Men
                </Link>
                <Link href="#" style={navLinkStyle}>
                  Women
                </Link>
                <Link href="#" style={navLinkStyle}>
                  About Us
                </Link>
              </Column>
            </Row>
          </Section>

          {/* Order Confirmation Header */}
          <Section style={confirmationHeaderSectionStyle}>
            <Text style={confirmationTitleStyle}>Order Confirmed!</Text>
            <Text style={confirmationSubtitleStyle}>
              Thank you for your purchase. Your order has been received and is
              being processed.
            </Text>
            <Text style={orderNumberStyle}>Order #CH-2024-001234</Text>
          </Section>

      {/* Product Details Section */}
<Section style={productSectionStyle}>
  {/* Product Image */}
  <Row>
    <Column style={productImageFullWidthColumnStyle}>
      <Section style={productImageContainerStyle}>
        <Img
          src="https://cdn.templates.unlayer.com/assets/1649999981727-hoodie.png"
          alt="Champion Men's Reverse Weave Pullover"
          style={productImageStyle}
        />
      </Section>
    </Column>
  </Row>
  
  {/* Product Details */}
  <Row>
    <Column style={productDetailsFullWidthColumnStyle}>
      <Text style={productBrandStyle}>Champion</Text>
      <Text style={productNameStyle}>
        Men's Reverse Weave Pullover
      </Text>
      <Text style={productDescriptionStyle}>
        Premium quality reverse weave construction with classic fit.
        Made from soft cotton blend for ultimate comfort and
        durability.
      </Text>
      <Row style={productSpecsRowStyle}>
        <Column style={specColumnStyle}>
          <Text style={specLabelStyle}>Size:</Text>
          <Text style={specValueStyle}>Large</Text>
        </Column>
        <Column style={specColumnStyle}>
          <Text style={specLabelStyle}>Color:</Text>
          <Text style={specValueStyle}>Dusty Rose</Text>
        </Column>
        <Column style={specColumnStyle}>
          <Text style={specLabelStyle}>Quantity:</Text>
          <Text style={specValueStyle}>1</Text>
        </Column>
      </Row>
    </Column>
  </Row>
</Section>

          {/* Order Summary */}
          <Section style={orderSummarySectionStyle}>
            <Text style={orderSummaryTitleStyle}>Order Summary</Text>
            <Row style={summaryRowStyle}>
              <Column style={summaryLabelColumnStyle}>
                <Text style={summaryLabelStyle}>Subtotal:</Text>
              </Column>
              <Column style={summaryValueColumnStyle}>
                <Text style={summaryValueStyle}>$59.00</Text>
              </Column>
            </Row>
            <Row style={summaryRowStyle}>
              <Column style={summaryLabelColumnStyle}>
                <Text style={summaryLabelStyle}>Shipping:</Text>
              </Column>
              <Column style={summaryValueColumnStyle}>
                <Text style={summaryValueStyle}>$7.00</Text>
              </Column>
            </Row>
            <Row style={summaryRowStyle}>
              <Column style={summaryLabelColumnStyle}>
                <Text style={summaryLabelStyle}>Tax:</Text>
              </Column>
              <Column style={summaryValueColumnStyle}>
                <Text style={summaryValueStyle}>$3.00</Text>
              </Column>
            </Row>
            <Hr style={summaryDividerStyle} />
            <Row style={totalRowStyle}>
              <Column style={summaryLabelColumnStyle}>
                <Text style={totalLabelStyle}>Total:</Text>
              </Column>
              <Column style={summaryValueColumnStyle}>
                <Text style={totalValueStyle}>$69.00</Text>
              </Column>
            </Row>
          </Section>

          {/* Thank You Section */}
          <Section style={thankYouSectionStyle}>
            <Text style={thankYouTitleStyle}>Thank You For Your Purchase!</Text>
            <Text style={thankYouDescriptionStyle}>
              Your order is being prepared and will be shipped within 1-2
              business days. You'll receive a shipping confirmation email with
              tracking information once your order is on its way.
            </Text>
            <Row>
              <Column style={actionButtonColumnStyle}>
                <Link href="#" style={trackOrderButtonStyle}>
                  Track Order
                </Link>
              </Column>
              <Column style={actionButtonColumnStyle}>
                <Link href="#" style={orderDetailButtonStyle}>
                  Order Details
                </Link>
              </Column>
            </Row>
          </Section>

          {/* Shipping Information */}
          <Section style={shippingInfoSectionStyle}>
            <Text style={shippingInfoTitleStyle}>Shipping Information</Text>
            <Row>
              <Column style={shippingDetailColumnStyle}>
                <Text style={shippingLabelStyle}>Shipping Address:</Text>
                <Text style={shippingValueStyle}>
                  John Smith
                  <br />
                  123 Main Street
                  <br />
                  San Francisco, CA 94102
                </Text>
              </Column>
              <Column style={shippingDetailColumnStyle}>
                <Text style={shippingLabelStyle}>Estimated Delivery:</Text>
                <Text style={shippingValueStyle}>December 22-24, 2024</Text>
                <Text style={shippingLabelStyle}>Shipping Method:</Text>
                <Text style={shippingValueStyle}>Standard Shipping</Text>
              </Column>
            </Row>
          </Section>

          {/* Recommended Products */}
          <Section style={recommendedSectionStyle}>
            <Text style={recommendedTitleStyle}>Recommended For You</Text>
            <Text style={recommendedSubtitleStyle}>
              Complete your look with these popular items
            </Text>
            <Row style={recommendedRowStyle}>
              <Column style={recommendedColumnStyle}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1650263828204-323.png"
                  alt="Casual Button-Up Shirt"
                  style={recommendedImageStyle}
                  className="object-contain"
                />
                <Text style={recommendedProductNameStyle}>
                  Casual Button-Up Shirt
                </Text>
                <Text style={recommendedProductPriceStyle}>$45.00</Text>
                <Text style={recommendedProductDescStyle}>
                  Classic fit button-up shirt perfect for casual or semi-formal
                  occasions.
                </Text>
                <Link href="#" style={addToCartButtonStyle}>
                  Add to Cart
                </Link>
              </Column>
             
              <Column style={recommendedColumnStyle}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1650263814049-121.png"
                  alt="Premium Zip Hoodie"
                  style={recommendedImageStyle}
                  className="object-contain"
                />
                <Text style={recommendedProductNameStyle}>
                  Premium Zip Hoodie
                </Text>
                <Text style={recommendedProductPriceStyle}>$65.00</Text>
                <Text style={recommendedProductDescStyle}>
                  Cozy zip-up hoodie with premium materials and modern fit.
                </Text>
                <Link href="#" style={addToCartButtonStyle}>
                  Add to Cart
                </Link>
              </Column>
            </Row>
          </Section>

          {/* Customer Service */}
          <Section style={customerServiceSectionStyle}>
            <Text style={customerServiceTitleStyle}>Need Help?</Text>
            <Text style={customerServiceTextStyle}>
              Our customer service team is here to help with any questions about
              your order, returns, or exchanges.
            </Text>
            <Row>
              <Column style={serviceButtonColumnStyle}>
                <Link
                  href="mailto:support@company.com"
                  style={serviceButtonStyle}
                >
                  Contact 
                </Link>
              </Column>
              <Column style={serviceButtonColumnStyle}>
                <Link href="#" style={serviceButtonSecondaryStyle}>
                  Return Policy
                </Link>
              </Column>
              <Column style={serviceButtonColumnStyle}>
                <Link href="#" style={serviceButtonSecondaryStyle}>
                  Size Guide
                </Link>
              </Column>
            </Row>
          </Section>

          {/* Footer */}
          <Section style={footerSectionStyle}>
            <Text style={footerAddressStyle}>
              2261 Market Street #4667 San Francisco, CA 94114
              <br />
              All rights reserved. Company No. 94114
            </Text>
            <Row>
              <Column style={footerLinksColumnStyle}>
                <Link href="#" style={footerLinkStyle}>
                  Preferences
                </Link>
                <Text style={footerSeparatorStyle}>|</Text>
                <Link href="#" style={footerLinkStyle}>
                  Unsubscribe
                </Link>
                <Text style={footerSeparatorStyle}>|</Text>
                <Link href="#" style={footerLinkStyle}>
                  View in browser
                </Link>
              </Column>
            </Row>

            {/* Social Media */}
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
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                    alt="Instagram"
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
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/youtube.png"
                    alt="YouTube"
                    style={socialIconStyle}
                  />
                </Link>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ProductEmailTemplate;

// Responsive Styles
const bodyStyle = {
  fontFamily: "'Inter', Arial, sans-serif",
  backgroundColor: "#f5f5f5",
  margin: "0",
  padding: "10px 0",
  lineHeight: "1.6",
};

const containerStyle = {
  backgroundColor: "#2c2c2c",
  margin: "0 auto",
  padding: "0",
  maxWidth: "600px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
  overflow: "hidden",
};

const headerSectionStyle = {
  backgroundColor: "#2c2c2c",
  padding: "20px 8px",
  borderBottom: "1px solid #404040",
};

const logoColumnStyle = {
  width: "30%",
  verticalAlign: "middle" as const,
};

const navColumnStyle = {
  width: "70%",
  verticalAlign: "middle" as const,
  textAlign: "right" as const,
};

const logoStyle = {
  width: "80px",
  height: "auto",
};

const navLinkStyle = {
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "14px",
  margin: "0 15px",
  fontWeight: "500",
};

const confirmationHeaderSectionStyle = {
  backgroundColor: "#2c2c2c",
  padding: "30px",
  textAlign: "center" as const,
};

const confirmationTitleStyle = {
  fontSize: "28px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 10px 0",
};

const confirmationSubtitleStyle = {
  fontSize: "16px",
  color: "#cccccc",
  margin: "0 0 15px 0",
};

const orderNumberStyle = {
  fontSize: "14px",
  color: "#e74c3c",
  fontWeight: "600",
  margin: "0",
};


// Updated styles for single column layout
const productSectionStyle = {
  backgroundColor: "#2c2c2c",
  padding: "40px 30px",
};

const productImageFullWidthColumnStyle = {
  width: "100%",
  textAlign: "center" as const,
  paddingBottom: "30px",
};

const productDetailsFullWidthColumnStyle = {
  width: "100%",
  textAlign: "center" as const,
};

const productImageContainerStyle = {
  backgroundColor: "#e74c3c",
  borderRadius: "50%",
  padding: "20px",
  display: "inline-block",
  width: "200px",
  height: "200px",
  textAlign: "center" as const,
};

const productImageStyle = {
  width: "160px",
  height: "160px",
  objectFit: "cover" as const,
  borderRadius: "50%",
};

const productBrandStyle = {
  fontSize: "14px",
  color: "#e74c3c",
  fontWeight: "600",
  margin: "0 0 5px 0",
  textTransform: "uppercase" as const,
};

const productNameStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 15px 0",
  lineHeight: "1.3",
};

const productDescriptionStyle = {
  fontSize: "14px",
  color: "#cccccc",
  margin: "0 0 20px 0",
  lineHeight: "1.5",
  maxWidth: "400px",
  marginLeft: "auto",
  marginRight: "auto",
};

const productSpecsRowStyle = {
  marginTop: "20px",
  maxWidth: "300px",
  marginLeft: "auto",
  marginRight: "auto",
};

const specColumnStyle = {
  width: "33.33%",
  verticalAlign: "top" as const,
  padding: "0 5px",
  textAlign: "center" as const,
};

const specLabelStyle = {
  fontSize: "12px",
  color: "#999999",
  margin: "0 0 5px 0",
  fontWeight: "500",
};

const specValueStyle = {
  fontSize: "14px",
  color: "#ffffff",
  margin: "0",
  fontWeight: "600",
};


const orderSummarySectionStyle = {
  backgroundColor: "#333333",
  padding: "30px",
};

const orderSummaryTitleStyle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#ffffff",
  margin: "0 0 20px 0",
};

const summaryRowStyle = {
  padding: "8px 0",
};

const summaryLabelColumnStyle = {
  width: "70%",
  verticalAlign: "middle" as const,
};

const summaryValueColumnStyle = {
  width: "30%",
  verticalAlign: "middle" as const,
  textAlign: "right" as const,
};

const summaryLabelStyle = {
  fontSize: "14px",
  color: "#cccccc",
  margin: "0",
};

const summaryValueStyle = {
  fontSize: "14px",
  color: "#ffffff",
  margin: "0",
  fontWeight: "500",
};

const summaryDividerStyle = {
  border: "none",
  borderTop: "1px solid #555555",
  margin: "15px 0",
};

const totalRowStyle = {
  padding: "10px 0",
};

const totalLabelStyle = {
  fontSize: "16px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0",
};

const totalValueStyle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#e74c3c",
  margin: "0",
};

const thankYouSectionStyle = {
  backgroundColor: "#2c2c2c",
  padding: "40px 30px",
  textAlign: "center" as const,
};

const thankYouTitleStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 15px 0",
};

const thankYouDescriptionStyle = {
  fontSize: "14px",
  color: "#cccccc",
  margin: "0 0 30px 0",
  lineHeight: "1.6",
};

const actionButtonColumnStyle = {
  width: "50%",
  textAlign: "center" as const,
  padding: "0 10px",
};

const trackOrderButtonStyle = {
  backgroundColor: "#e74c3c",
  color: "#ffffff",
  borderRadius: "6px",
  padding: "12px 24px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
};

const orderDetailButtonStyle = {
  backgroundColor: "transparent",
  color: "#ffffff",
  borderRadius: "6px",
  padding: "12px 24px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  border: "2px solid #ffffff",
};

const shippingInfoSectionStyle = {
  backgroundColor: "#333333",
  padding: "30px",
};

const shippingInfoTitleStyle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#ffffff",
  margin: "0 0 20px 0",
};

const shippingDetailColumnStyle = {
  width: "50%",
  verticalAlign: "top" as const,
  padding: "0 15px",
};

const shippingLabelStyle = {
  fontSize: "12px",
  color: "#999999",
  margin: "0 0 5px 0",
  fontWeight: "500",
};

const shippingValueStyle = {
  fontSize: "14px",
  color: "#ffffff",
  margin: "0 0 15px 0",
  lineHeight: "1.4",
};

const recommendedSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "40px 30px",
};

const recommendedTitleStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#2c2c2c",
  margin: "0 0 10px 0",
  textAlign: "center" as const,
};

const recommendedSubtitleStyle = {
  fontSize: "14px",
  color: "#666666",
  margin: "0 0 30px 0",
  textAlign: "center" as const,
};

const recommendedRowStyle = {
  marginBottom: "20px",
};

const recommendedColumnStyle = {
  width: "33.33%",
  verticalAlign: "top" as const,
  textAlign: "center" as const,
  padding: "0 10px",
};

const recommendedImageStyle = {
  width: "100%",
  height: "auto",
  maxWidth: "180px",
  borderRadius: "8px",
  marginBottom: "15px",
};

const recommendedProductNameStyle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#2c2c2c",
  margin: "0 0 8px 0",
};

const recommendedProductPriceStyle = {
  fontSize: "16px",
  fontWeight: "700",
  color: "#e74c3c",
  margin: "0 0 10px 0",
};

const recommendedProductDescStyle = {
  fontSize: "12px",
  color: "#666666",
  margin: "0 0 15px 0",
  lineHeight: "1.4",
};

const addToCartButtonStyle = {
  backgroundColor: "#e74c3c",
  color: "#ffffff",
  borderRadius: "4px",
  padding: "10px 20px",
  fontSize: "12px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
};

const customerServiceSectionStyle = {
  backgroundColor: "#f8f9fa",
  padding: "30px",
  textAlign: "center" as const,
};

const customerServiceTitleStyle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#2c2c2c",
  margin: "0 0 15px 0",
};

const customerServiceTextStyle = {
  fontSize: "14px",
  color: "#666666",
  margin: "0 0 25px 0",
  lineHeight: "1.5",
};

const serviceButtonColumnStyle = {
  width: "33.33%",
  textAlign: "center" as const,
  padding: "0 5px",
};

const serviceButtonStyle = {
  backgroundColor: "#e74c3c",
  color: "#ffffff",
  borderRadius: "6px",
  padding: "10px 15px",
  fontSize: "12px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
};

const serviceButtonSecondaryStyle = {
  backgroundColor: "transparent",
  color: "#2c2c2c",
  borderRadius: "6px",
  padding: "10px 15px",
  fontSize: "12px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  border: "1px solid #2c2c2c",
};

const footerSectionStyle = {
  backgroundColor: "#2c2c2c",
  padding: "30px",
  textAlign: "center" as const,
};

const footerAddressStyle = {
  fontSize: "12px",
  color: "#cccccc",
  margin: "0 0 20px 0",
  lineHeight: "1.5",
};

const footerLinksColumnStyle = {
  textAlign: "center" as const,
  marginBottom: "20px",
};

const footerLinkStyle = {
  fontSize: "12px",
  color: "#cccccc",
  textDecoration: "none",
  margin: "0 5px",
};

const footerSeparatorStyle = {
  fontSize: "12px",
  color: "#666666",
  margin: "0 5px",
};

const socialIconsColumnStyle = {
  textAlign: "center" as const,
};

const socialLinkStyle = {
  textDecoration: "none",
  margin: "0 8px",
  display: "inline-block",
};

const socialIconStyle = {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
};
