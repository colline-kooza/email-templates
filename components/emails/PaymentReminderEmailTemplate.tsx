import { Body, Container, Column, Head, Html, Img, Link, Preview, Row, Section, Text } from "@react-email/components"

export const PaymentReminderEmailTemplate = () => {
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
              .mobile-button {
                margin: 5px 0 !important;
              }
            }
          `}
        </style>
      </Head>
      <Preview>Payment Reminder - Account #123SWXBZLUY7 - Amount Due: $645.00</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header Section */}
          <Section style={headerSectionStyle}>
            <Text style={logoStyle}>YOURLOGO</Text>
          </Section>

          {/* Past Due Stamp Section */}
          <Section style={stampSectionStyle}>
            <Img
              src="https://cdn.templates.unlayer.com/assets/1619835378596-cc.jpg"
              alt="Past Due Stamp"
              style={stampImageStyle}
              className="object-cover"
            />
          </Section>

          {/* Main Content Section */}
          <Section style={contentSectionStyle}>
            <Text style={greetingStyle}>Dear Jeff,</Text>
            <Text style={reminderTextStyle}>
              This is a friendly payment reminder that your account is now{" "}
              <span style={pastDueHighlightStyle}>past due</span>.
            </Text>
            <Text style={accountInfoTextStyle}>According to our records, the following account is overdue:</Text>

            {/* Account Details Table */}
            <Section style={accountTableSectionStyle}>
              <Row style={tableHeaderRowStyle}>
                <Column style={tableHeaderColumnStyle}>
                  <Text style={tableHeaderTextStyle}>Account Number</Text>
                </Column>
                <Column style={tableHeaderColumnStyle}>
                  <Text style={tableHeaderTextStyle}>Due Date</Text>
                </Column>
                <Column style={tableHeaderColumnStyle}>
                  <Text style={tableHeaderTextStyle}>Amount</Text>
                </Column>
              </Row>
              <Row style={tableDataRowStyle}>
                <Column style={tableDataColumnStyle}>
                  <Text style={tableDataTextStyle}>123SWXBZLUY7</Text>
                </Column>
                <Column style={tableDataColumnStyle}>
                  <Text style={tableDataTextStyle}>3/4/2024</Text>
                </Column>
                <Column style={tableDataColumnStyle}>
                  <Text style={amountTextStyle}>$645.00</Text>
                </Column>
              </Row>
            </Section>

            {/* Late Fee Information */}
            <Section style={lateFeesSectionStyle}>
              <Text style={lateFeesTextStyle}>
                As your account is now overdue, a late fee of <span style={lateFeeAmountStyle}>$20.00</span> has been
                assessed.
              </Text>
              <Text style={totalAmountTextStyle}>
                <strong>Total Amount Due: $665.00</strong>
              </Text>
            </Section>

            {/* Payment Options */}
            <Section style={paymentSectionStyle}>
              <Text style={paymentInstructionStyle}>For your convenience, you may make a payment here:</Text>
              <Row style={paymentButtonsRowStyle}>
                <Column style={paymentButtonColumnStyle}>
                  <Link href="#" style={creditCardButtonStyle}>
                  Credit Card
                  </Link>
                </Column>
                <Column style={paymentButtonColumnStyle}>
                  <Link href="#" style={paypalButtonStyle}>
                    Pay by PayPal
                  </Link>
                </Column>
              </Row>
            </Section>

            {/* Alternative Payment Methods */}
            <Section style={alternativePaymentSectionStyle}>
              <Text style={alternativePaymentTitleStyle}>Other Payment Options:</Text>
              <Row>
                <Column style={alternativeMethodColumnStyle}>
                  <Text style={alternativeMethodTitleStyle}>Bank Transfer</Text>
                  <Text style={alternativeMethodTextStyle}>
                    Account: 1234567890
                    <br />
                    Routing: 987654321
                    <br />
                    Reference: 123SWXBZLUY7
                  </Text>
                </Column>
                <Column style={alternativeMethodColumnStyle}>
                  <Text style={alternativeMethodTitleStyle}>Mail Payment</Text>
                  <Text style={alternativeMethodTextStyle}>
                    YourCompany Inc.
                    <br />
                    PO Box 12345
                    <br />
                    San Francisco, CA 94102
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Contact Information */}
            <Section style={contactSectionStyle}>
              <Text style={contactTextStyle}>
                If you have any questions or need to discuss your account, please reach out to me at{" "}
                <Link href="tel:123-456-789" style={contactLinkStyle}>
                  123-456-789
                </Link>
                .
              </Text>
            </Section>

            {/* Account Status Information */}
            <Section style={accountStatusSectionStyle}>
              <Text style={accountStatusTitleStyle}>Important Account Information:</Text>
              <Text style={accountStatusTextStyle}>
                • Payment is now{" "}
                {Math.floor((new Date().getTime() - new Date("2024-04-03").getTime()) / (1000 * 60 * 60 * 24))} days
                overdue
                <br />• Additional late fees may apply if payment is not received within 10 days
                <br />• Account services may be suspended for payments over 30 days past due
                <br />• We're here to help - contact us to discuss payment arrangements
              </Text>
            </Section>

            {/* Thank You Message */}
            <Section style={thankYouSectionStyle}>
              <Text style={thankYouTextStyle}>
                Thank you for your attention to this matter and your continued business.
              </Text>
              <Text style={signatureTextStyle}>
                Sincerely,
                <br />
                John
                <br />
                <span style={titleTextStyle}>Accounts Receivable Manager</span>
              </Text>
            </Section>
          </Section>

          {/* Footer Section */}
          <Section style={footerSectionStyle}>
            <Text style={footerLogoStyle}>YOURLOGO</Text>
            <Row>
              <Column style={socialIconsColumnStyle}>
                <Link href="#" style={socialLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-white/twitter.png"
                    alt="Twitter"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-white/linkedin.png"
                    alt="LinkedIn"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-white/facebook.png"
                    alt="Facebook"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-white/instagram.png"
                    alt="Instagram"
                    style={socialIconStyle}
                  />
                </Link>
              </Column>
            </Row>
            <Text style={copyrightStyle}>©Company Ltd. All Rights Reserved.</Text>
            <Row>
              <Column style={footerLinksColumnStyle}>
                <Link href="#" style={footerLinkStyle}>
                  Terms & Conditions
                </Link>
                <Text style={footerSeparatorStyle}>|</Text>
                <Link href="#" style={footerLinkStyle}>
                  Privacy Policy
                </Link>
                <Text style={footerSeparatorStyle}>|</Text>
                <Link href="#" style={footerLinkStyle}>
                  Unsubscribe
                </Link>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default PaymentReminderEmailTemplate

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
  backgroundColor: "#ffffff",
  padding: "30px 30px 20px 30px",
  textAlign: "center" as const,
}

const logoStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#e74c3c",
  margin: "0",
  letterSpacing: "1px",
}

const stampSectionStyle = {
  backgroundColor: "#f8f9fa",
  padding: "0px",
  textAlign: "center" as const,
}

const stampImageStyle = {
  width: "100%",
  height: "100%",
//   maxWidth: "300px",
  objectFit: "contain" as const,
}

const contentSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "10px",
}

const greetingStyle = {
  fontSize: "16px",
  color: "#2c3e50",
  margin: "0 0 20px 0",
  fontWeight: "500",
}

const reminderTextStyle = {
  fontSize: "14px",
  color: "#2c3e50",
  margin: "0 0 15px 0",
  lineHeight: "1.6",
}

const pastDueHighlightStyle = {
  color: "#e74c3c",
  fontWeight: "600",
}

const accountInfoTextStyle = {
  fontSize: "14px",
  color: "#2c3e50",
  margin: "0 0 25px 0",
  lineHeight: "1.6",
}

const accountTableSectionStyle = {
  backgroundColor: "#f8f9fa",
  borderRadius: "8px",
  padding: "5px",
  margin: "0 0 25px 0",
}

const tableHeaderRowStyle = {
  borderBottom: "2px solid #e9ecef",
  paddingBottom: "10px",
  marginBottom: "15px",
}

const tableHeaderColumnStyle = {
  width: "33.33%",
  verticalAlign: "top" as const,
  padding: "0 10px",
}

const tableHeaderTextStyle = {
  fontSize: "12px",
  fontWeight: "600",
  color: "#6c757d",
  margin: "0",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
}

const tableDataRowStyle = {
  paddingTop: "10px",
}

const tableDataColumnStyle = {
  width: "33.33%",
  verticalAlign: "top" as const,
  padding: "0 10px",
}

const tableDataTextStyle = {
  fontSize: "14px",
  color: "#2c3e50",
  margin: "0",
  fontWeight: "500",
}

const amountTextStyle = {
  fontSize: "16px",
  color: "#e74c3c",
  margin: "0",
  fontWeight: "700",
}

const lateFeesSectionStyle = {
  backgroundColor: "#fff3cd",
  border: "1px solid #ffeaa7",
  borderRadius: "6px",
  padding: "15px",
  margin: "0 0 25px 0",
}

const lateFeesTextStyle = {
  fontSize: "14px",
  color: "#856404",
  margin: "0 0 10px 0",
}

const lateFeeAmountStyle = {
  fontWeight: "600",
  color: "#e74c3c",
}

const totalAmountTextStyle = {
  fontSize: "16px",
  color: "#e74c3c",
  margin: "0",
  textAlign: "center" as const,
}

const paymentSectionStyle = {
  textAlign: "center" as const,
  margin: "30px 0",
}

const paymentInstructionStyle = {
  fontSize: "14px",
  color: "#2c3e50",
  margin: "0 0 20px 0",
}

const paymentButtonsRowStyle = {
  marginBottom: "20px",
}

const paymentButtonColumnStyle = {
  width: "50%",
  textAlign: "center" as const,
  padding: "0 10px",
}

const creditCardButtonStyle = {
  backgroundColor: "#e74c3c",
  color: "#ffffff",
  borderRadius: "6px",
  padding: "14px 24px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  boxShadow: "0 4px 12px rgba(231, 76, 60, 0.3)",
}

const paypalButtonStyle = {
  backgroundColor: "#e74c3c",
  color: "#ffffff",
  borderRadius: "6px",
  padding: "14px 24px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  boxShadow: "0 4px 12px rgba(231, 76, 60, 0.3)",
}

const alternativePaymentSectionStyle = {
  backgroundColor: "#f8f9fa",
  borderRadius: "8px",
  padding: "20px",
  margin: "25px 0",
}

const alternativePaymentTitleStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#2c3e50",
  margin: "0 0 15px 0",
}

const alternativeMethodColumnStyle = {
  width: "50%",
  verticalAlign: "top" as const,
  padding: "0 10px",
}

const alternativeMethodTitleStyle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#2c3e50",
  margin: "0 0 8px 0",
}

const alternativeMethodTextStyle = {
  fontSize: "12px",
  color: "#6c757d",
  margin: "0",
  lineHeight: "1.5",
}

const contactSectionStyle = {
  margin: "25px 0",
}

const contactTextStyle = {
  fontSize: "14px",
  color: "#2c3e50",
  margin: "0",
  lineHeight: "1.6",
}

const contactLinkStyle = {
  color: "#e74c3c",
  textDecoration: "none",
  fontWeight: "600",
}

const accountStatusSectionStyle = {
  backgroundColor: "#f8f9fa",
  borderLeft: "4px solid #e74c3c",
  padding: "20px",
  margin: "25px 0",
}

const accountStatusTitleStyle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#2c3e50",
  margin: "0 0 10px 0",
}

const accountStatusTextStyle = {
  fontSize: "13px",
  color: "#6c757d",
  margin: "0",
  lineHeight: "1.6",
}

const thankYouSectionStyle = {
  margin: "30px 0 0 0",
}

const thankYouTextStyle = {
  fontSize: "14px",
  color: "#2c3e50",
  margin: "0 0 20px 0",
  lineHeight: "1.6",
}

const signatureTextStyle = {
  fontSize: "14px",
  color: "#2c3e50",
  margin: "0",
  lineHeight: "1.5",
}

const titleTextStyle = {
  fontSize: "12px",
  color: "#6c757d",
  fontStyle: "italic",
}

const footerSectionStyle = {
  backgroundColor: "#95a5a6",
  padding: "10px",
  textAlign: "center" as const,
}

const footerLogoStyle = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 20px 0",
  letterSpacing: "1px",
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

const copyrightStyle = {
  fontSize: "12px",
  color: "#ffffff",
  margin: "0 0 15px 0",
}

const footerLinksColumnStyle = {
  textAlign: "center" as const,
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
