import { Body, Container, Column, Head, Html, Img, Link, Preview, Row, Section, Text } from "@react-email/components"

export const CarPurchaseInvoiceTemplate = () => {
  return (
    <Html>
      <Head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
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
              .mobile-hero-text {
                font-size: 28px !important;
              }
            }
          `}
        </style>
      </Head>
      <Preview>Invoice #1244533 - Lamborghini Gray Purchase - $40,115.73</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Hero Header Section */}
          <Section style={heroSectionStyle}>
         <div style={{
                         backgroundColor: "black",
                         padding: "15px 0",
                         textAlign: "center",
                         }}>
                        <Img
                          src="https://cdn.templates.unlayer.com/assets/1637605200434-gfh.png"
                          alt="Logo"
                          style={logoStyle}
                          className="object-contain"
                        />
                      </div>
            <Text style={invoiceTitleStyle}>Invoice</Text>
            <Text style={invoiceSubtitleStyle}>For Car Purchase</Text>
            <Img
              src="https://res.cloudinary.com/dirpuqqib/image/upload/v1750332945/car_s9jwsj.jpg"
              alt="Luxury Car - Lamborghini"
              style={heroCarImageStyle}
            />
          </Section>

          {/* Invoice Details Section */}
          <Section style={invoiceDetailsSectionStyle}>
            <Row style={invoiceHeaderRowStyle}>
              <Column style={dateColumnStyle}>
                <Text style={dateLabelStyle}>Date:</Text>
                <Text style={dateValueStyle}>Mar 22, 2023 - 2:00 PM</Text>
              </Column>
              <Column style={invoiceIdColumnStyle}>
                <Text style={invoiceIdLabelStyle}>Invoice ID:</Text>
                <Text style={invoiceIdValueStyle}>1244533</Text>
              </Column>
            </Row>

            <Section style={customerGreetingSectionStyle}>
              <Text style={greetingStyle}>Hello John Lewis!</Text>
              <Text style={thankYouStyle}>Thank You For Your Purchase!</Text>
            </Section>

            {/* Vehicle Information */}
            <Section style={vehicleInfoSectionStyle}>
              <Text style={vehicleModelStyle}>LAMBORGHINI GRAY</Text>
              <Row style={vehicleDetailsRowStyle}>
                <Column style={vehicleDetailColumnStyle}>
                  <Text style={vehicleDetailLabelStyle}>Model Year:</Text>
                  <Text style={vehicleDetailValueStyle}>2023</Text>
                </Column>
                <Column style={vehicleDetailColumnStyle}>
                  <Text style={vehicleDetailLabelStyle}>VIN:</Text>
                  <Text style={vehicleDetailValueStyle}>ZHWGU22E*3LA******</Text>
                </Column>
                <Column style={vehicleDetailColumnStyle}>
                  <Text style={vehicleDetailLabelStyle}>Color:</Text>
                  <Text style={vehicleDetailValueStyle}>Grigio Telesto</Text>
                </Column>
              </Row>
            </Section>

            {/* Pricing Breakdown */}
            <Section style={pricingBreakdownSectionStyle}>
              <Text style={pricingTitleStyle}>Purchase Details</Text>
              <Row style={pricingRowStyle}>
                <Column style={pricingLabelColumnStyle}>
                  <Text style={pricingLabelStyle}>Vehicle Base Price:</Text>
                </Column>
                <Column style={pricingValueColumnStyle}>
                  <Text style={pricingValueStyle}>$38,500.00</Text>
                </Column>
              </Row>
              <Row style={pricingRowStyle}>
                <Column style={pricingLabelColumnStyle}>
                  <Text style={pricingLabelStyle}>Premium Package:</Text>
                </Column>
                <Column style={pricingValueColumnStyle}>
                  <Text style={pricingValueStyle}>$1,200.00</Text>
                </Column>
              </Row>
              <Row style={pricingRowStyle}>
                <Column style={pricingLabelColumnStyle}>
                  <Text style={pricingLabelStyle}>Documentation Fee:</Text>
                </Column>
                <Column style={pricingValueColumnStyle}>
                  <Text style={pricingValueStyle}>$299.00</Text>
                </Column>
              </Row>
              <Row style={pricingRowStyle}>
                <Column style={pricingLabelColumnStyle}>
                  <Text style={pricingLabelStyle}>Tax & Registration:</Text>
                </Column>
                <Column style={pricingValueColumnStyle}>
                  <Text style={pricingValueStyle}>$116.73</Text>
                </Column>
              </Row>
            </Section>

            {/* Total Amount */}
            <Section style={totalSectionStyle}>
              <Row style={totalRowStyle}>
                <Column style={totalLabelColumnStyle}>
                  <Text style={totalLabelStyle}>Total</Text>
                </Column>
                <Column style={totalValueColumnStyle}>
                  <Text style={totalValueStyle}>$40115.73</Text>
                </Column>
              </Row>
            </Section>
          </Section>

          {/* Warranty/Guarantee Section */}
          <Section style={guaranteeSectionStyle}>
            <Text style={guaranteeTitleStyle}>Your car won't let you down</Text>
            <Text style={guaranteeSubtitleStyle}>If it breaks, you'll get a free repair and your money back*</Text>
            <Text style={warrantyDetailsStyle}>
              *Comprehensive warranty coverage for 3 years or 36,000 miles, whichever comes first. Includes powertrain,
              electrical, and premium component coverage.
            </Text>
          </Section>

          {/* Next Steps Section */}
          <Section style={nextStepsSectionStyle}>
            <Text style={nextStepsTitleStyle}>What's Next?</Text>
            <Row>
         
              <Column style={nextStepColumnStyle}>
                <Text style={nextStepIconStyle}>🔑</Text>
                <Text style={nextStepTitleTextStyle}>Delivery</Text>
                <Text style={nextStepDescStyle}>Schedule your vehicle pickup or delivery</Text>
              </Column>
              <Column style={nextStepColumnStyle}>
                <Text style={nextStepIconStyle}>🛠️</Text>
                <Text style={nextStepTitleTextStyle}>Service</Text>
                <Text style={nextStepDescStyle}>Access premium maintenance and support</Text>
              </Column>
            </Row>
          </Section>

          {/* Contact Information */}
          <Section style={contactSectionStyle}>
            <Text style={contactTitleStyle}>Questions About Your Purchase?</Text>
            <Text style={contactDescStyle}>
              Our premium customer service team is available to assist you with any questions about your new vehicle.
            </Text>
            <Row>
              <Column style={contactButtonColumnStyle}>
                <Link href="tel:1-800-LUXURY-CAR" style={contactButtonStyle}>
                  📞 Call Sales Team
                </Link>
              </Column>
           
            </Row>
          </Section>

          {/* Footer Section */}
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

            {/* Social Media Icons */}
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
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default CarPurchaseInvoiceTemplate

// Responsive Styles
const bodyStyle = {
  fontFamily: "'Inter', Arial, sans-serif",
  backgroundColor: "#e5e5e5",
  margin: "0",
  padding: "10px 0",
  lineHeight: "1.6",
}

const containerStyle = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "0",
  maxWidth: "600px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  overflow: "hidden",
}

const heroSectionStyle = {
  backgroundColor: "#000000",
  textAlign: "center" as const,
  backgroundImage: "radial-gradient(circle at center, rgba(255, 69, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 70%)",
  position: "relative" as const,
}

const logoColumnStyle = {
  textAlign: "left" as const,
  marginBottom: "30px",
}

const logoStyle = {
  fontSize: "32px",
  fontWeight: "800",
  marginBottom: "10px",
  display: "inline-block",
  width: "50px",
  height: "10px",
  lineHeight: "50px",
  textAlign: "center" as const,
}

const companyTextStyle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#ffffff",
  margin: "5px 0 0 0",
  letterSpacing: "2px",
}

const invoiceTitleStyle = {
  fontSize: "38px",
  fontWeight: "800",
  color: "#ffffff",
  margin: "0 0 5px 0",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
}

const invoiceSubtitleStyle = {
  fontSize: "15px",
  color: "#cccccc",
  margin: "0 0 30px 0",
  fontWeight: "400",
}

const heroCarImageStyle = {
  width: "100%",
  height: "auto",
  maxHeight: "250px",
  objectFit: "cover" as const,
  filter: "drop-shadow(0 10px 20px rgba(255, 69, 0, 0.3))",
}

const invoiceDetailsSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "40px 30px",
}

const invoiceHeaderRowStyle = {
  marginBottom: "30px",
  borderBottom: "1px solid #e9ecef",
  paddingBottom: "20px",
}

const dateColumnStyle = {
  width: "50%",
  verticalAlign: "top" as const,
}

const invoiceIdColumnStyle = {
  width: "50%",
  verticalAlign: "top" as const,
  textAlign: "right" as const,
}

const dateLabelStyle = {
  fontSize: "12px",
  color: "#6c757d",
  margin: "0 0 5px 0",
  fontWeight: "500",
}

const dateValueStyle = {
  fontSize: "14px",
  color: "#2c3e50",
  margin: "0",
  fontWeight: "600",
}

const invoiceIdLabelStyle = {
  fontSize: "12px",
  color: "#6c757d",
  margin: "0 0 5px 0",
  fontWeight: "500",
}

const invoiceIdValueStyle = {
  fontSize: "14px",
  color: "#2c3e50",
  margin: "0",
  fontWeight: "600",
}

const customerGreetingSectionStyle = {
  textAlign: "center" as const,
  margin: "30px 0",
}

const greetingStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#2c3e50",
  margin: "0 0 10px 0",
}

const thankYouStyle = {
  fontSize: "16px",
  color: "#6c757d",
  margin: "0",
  fontWeight: "500",
}

const vehicleInfoSectionStyle = {
  backgroundColor: "#f8f9fa",
  borderRadius: "8px",
  padding: "15px",
  margin: "30px 0",
  textAlign: "center" as const,
}

const vehicleModelStyle = {
  fontSize: "24px",
  fontWeight: "800",
  color: "#2c3e50",
  margin: "0 0 20px 0",
  letterSpacing: "1px",
}

const vehicleDetailsRowStyle = {
  marginTop: "20px",
}

const vehicleDetailColumnStyle = {
  width: "33.33%",
  verticalAlign: "top" as const,
  textAlign: "center" as const,
  padding: "0 10px",
}

const vehicleDetailLabelStyle = {
  fontSize: "12px",
  color: "#6c757d",
  margin: "0 0 5px 0",
  fontWeight: "500",
  textTransform: "uppercase" as const,
}

const vehicleDetailValueStyle = {
  fontSize: "14px",
  color: "#2c3e50",
  margin: "0",
  fontWeight: "600",
}

const pricingBreakdownSectionStyle = {
  margin: "30px 0",
}

const pricingTitleStyle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#2c3e50",
  margin: "0 0 20px 0",
}

const pricingRowStyle = {
  padding: "8px 0",
  borderBottom: "1px solid #f1f3f4",
}

const pricingLabelColumnStyle = {
  width: "70%",
  verticalAlign: "middle" as const,
}

const pricingValueColumnStyle = {
  width: "30%",
  verticalAlign: "middle" as const,
  textAlign: "right" as const,
}

const pricingLabelStyle = {
  fontSize: "14px",
  color: "#2c3e50",
  margin: "0",
}

const pricingValueStyle = {
  fontSize: "14px",
  color: "#2c3e50",
  margin: "0",
  fontWeight: "500",
}

const totalSectionStyle = {
  backgroundColor: "#2c3e50",
  borderRadius: "8px",
  padding: "20px",
  margin: "20px 0 0 0",
}

const totalRowStyle = {
  padding: "0",
}

const totalLabelColumnStyle = {
  width: "70%",
  verticalAlign: "middle" as const,
}

const totalValueColumnStyle = {
  width: "30%",
  verticalAlign: "middle" as const,
  textAlign: "right" as const,
}

const totalLabelStyle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0",
}

const totalValueStyle = {
  fontSize: "22px",
  fontWeight: "800",
  color: "#ffffff",
  margin: "0",
}

const guaranteeSectionStyle = {
  backgroundColor: "#000000",
  padding: "40px 30px",
  textAlign: "center" as const,
}

const guaranteeTitleStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 10px 0",
}

const guaranteeSubtitleStyle = {
  fontSize: "14px",
  color: "#cccccc",
  margin: "0 0 20px 0",
}

const warrantyDetailsStyle = {
  fontSize: "12px",
  color: "#999999",
  margin: "0",
  lineHeight: "1.5",
  fontStyle: "italic",
}

const nextStepsSectionStyle = {
  backgroundColor: "#f8f9fa",
  padding: "40px 30px",
}

const nextStepsTitleStyle = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#2c3e50",
  margin: "0 0 30px 0",
  textAlign: "center" as const,
}

const nextStepColumnStyle = {
  width: "33.33%",
  verticalAlign: "top" as const,
  textAlign: "center" as const,
  padding: "0 15px",
}

const nextStepIconStyle = {
  fontSize: "32px",
  margin: "0 0 15px 0",
  display: "block",
}

const nextStepTitleTextStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#2c3e50",
  margin: "0 0 10px 0",
}

const nextStepDescStyle = {
  fontSize: "12px",
  color: "#6c757d",
  lineHeight: "1.5",
  margin: "0",
}

const contactSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "40px 30px",
  textAlign: "center" as const,
}

const contactTitleStyle = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#2c3e50",
  margin: "0 0 15px 0",
}

const contactDescStyle = {
  fontSize: "14px",
  color: "#6c757d",
  margin: "0 0 25px 0",
  lineHeight: "1.5",
}

const contactButtonColumnStyle = {
  width: "50%",
  textAlign: "center" as const,
  padding: "0 10px",
}

const contactButtonStyle = {
  backgroundColor: "#2c3e50",
  color: "#ffffff",
  borderRadius: "6px",
  padding: "12px 20px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
}

const contactButtonSecondaryStyle = {
  backgroundColor: "transparent",
  color: "#2c3e50",
  borderRadius: "6px",
  padding: "12px 20px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  border: "2px solid #2c3e50",
}

const footerSectionStyle = {
  backgroundColor: "#95a5a6",
  padding: "30px",
  textAlign: "center" as const,
}

const footerAddressStyle = {
  fontSize: "12px",
  color: "#ffffff",
  margin: "0 0 20px 0",
  lineHeight: "1.5",
}

const footerLinksColumnStyle = {
  textAlign: "center" as const,
  marginBottom: "20px",
}

const footerLinkStyle = {
  fontSize: "12px",
  color: "#ffffff",
  textDecoration: "none",
  margin: "0 5px",
}

const footerSeparatorStyle = {
  fontSize: "12px",
  color: "#ffffff",
  margin: "0 5px",
  opacity: "0.7",
}

const socialIconsColumnStyle = {
  textAlign: "center" as const,
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
