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

export const CybersecurityEmailTemplate = () => {
  return (
    <Html>
      <Head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Asap:wght@400;500;600;700&display=swap');
            * {
              font-family: 'Asap', Arial, sans-serif;
            }
          `}
        </style>
      </Head>
      <Preview>Spam Awareness: Don't take the bait - Stay protected online</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header Section */}
          <Section style={headerSectionStyle}>
            <Img
              src="https://cdn.templates.unlayer.com/assets/1644316367497-logo.png"
              alt="Core Care"
              style={logoStyle}
            />
          </Section>

          {/* Hero Section */}
          <Section style={heroSectionStyle}>
            <Row>
              <Column style={heroImageColumnStyle}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1644315800426-hacker.png"
                  alt="Cybersecurity Alert"
                  style={heroImageStyle}
                />
              </Column>
              <Column style={heroTextColumnStyle}>
                <Text style={heroTitleStyle}>Spam Awareness:</Text>
                <Text style={heroSubtitleStyle}>Don't take the bait</Text>
                <Link href="#" style={ctaButtonStyle}>
                  Report Us 
                </Link>
              </Column>
            </Row>
          </Section>

          {/* Main Content Section */}
          <Section style={mainContentSectionStyle}>
            <Text style={sectionTitleStyle}>
              4 Tips To Help You
              <br />
              <span style={sectionSubtitleStyle}>Understand Scam Emails</span>
            </Text>

            {/* Tips Grid - Row 1 */}
            <Row style={tipsRowStyle}>
              <Column style={tipColumnStyle}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1644317288551-url.png"
                  alt="Check Domain Names"
                  style={tipIconStyle}
                />
                <Text style={tipTitleStyle}>Check Domain Names</Text>
                <Text style={tipDescriptionStyle}>
                  In phishing emails, cybercriminals use different domain names that look similar to legitimate ones.
                  Always verify the sender's domain carefully.
                </Text>
              </Column>
              <Column style={tipColumnStyle}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1644317621870-domain.png"
                  alt="Verify URLs"
                  style={tipIconStyle}
                />
                <Text style={tipTitleStyle}>Verify URLs</Text>
                <Text style={tipDescriptionStyle}>
                  Hover over links to see the actual destination. Malicious links often redirect to suspicious websites
                  designed to steal your information.
                </Text>
              </Column>
            </Row>

            {/* Tips Grid - Row 2 */}
            <Row style={tipsRowStyle}>
              <Column style={tipColumnStyle}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1644318277239-Personal.png"
                  alt="Protect Personal Info"
                  style={tipIconStyle}
                />
                <Text style={tipTitleStyle}>Protect Personal Info</Text>
                <Text style={tipDescriptionStyle}>
                  Never share personal information like passwords, social security numbers, or banking details via
                  email. Legitimate companies won't ask for this.
                </Text>
              </Column>
              <Column style={tipColumnStyle}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1644318366459-Beware.png"
                  alt="Stay Alert"
                  style={tipIconStyle}
                />
                <Text style={tipTitleStyle}>Stay Alert</Text>
                <Text style={tipDescriptionStyle}>
                  Be suspicious of urgent messages, unexpected attachments, or emails requesting immediate action. Take
                  time to verify before responding.
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Additional Security Tips */}
          <Section style={additionalTipsSectionStyle}>
            <Text style={additionalTipsTitle}>Additional Security Reminders</Text>
            <Row>
              <Column style={reminderColumnStyle}>
                <Text style={reminderTextStyle}>
                  • Always use two-factor authentication when available
                  <br />• Keep your software and antivirus updated
                  <br />• Report suspicious emails to your IT department
                  <br />• When in doubt, contact the sender through official channels
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Footer Section */}
          <Section style={footerSectionStyle}>
            <Row>
              <Column style={socialIconsColumnStyle}>
                <Link href="#" style={socialLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-white/facebook.png"
                    alt="Facebook"
                    style={socialIconStyle}
                  />
                </Link>
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
                    src="https://cdn.tools.unlayer.com/social/icons/circle-white/instagram.png"
                    alt="Instagram"
                    style={socialIconStyle}
                  />
                </Link>
              </Column>
            </Row>
            <Hr style={footerDividerStyle} />
            <Text style={footerAddressStyle}>
              2261 Market Street #4667 San Francisco | <strong>Tel</strong>: +1 234 569875
            </Text>
            <Text style={footerInfoStyle}>
              All rights reserved. Company No. 94114 |{" "}
              <Link href="#" style={unsubscribeLinkStyle}>
                <strong>Unsubscribe</strong>
              </Link>
            </Text>
            <Text style={copyrightStyle}>© 2024 Core Care. All rights reserved</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default CybersecurityEmailTemplate

// Styles
const bodyStyle = {
  fontFamily: "'Asap', Arial, sans-serif",
  backgroundColor: "#000000",
  margin: "0",
  padding: "20px 0",
  lineHeight: "1.6",
}

const containerStyle = {
  backgroundColor: "#000000",
  margin: "0 auto",
  padding: "0",
  maxWidth: "600px",
  color: "#ffffff",
}

const headerSectionStyle = {
  padding: "30px 20px",
  textAlign: "center" as const,
  backgroundColor: "#000000",
}

const logoStyle = {
  width: "120px",
  height: "auto",
  display: "block",
  margin: "0 auto",
}

const heroSectionStyle = {
  padding: "40px 20px",
  backgroundColor: "#000000",
}

const heroImageColumnStyle = {
  width: "45%",
  verticalAlign: "middle" as const,
  paddingRight: "20px",
}

const heroTextColumnStyle = {
  width: "55%",
  verticalAlign: "middle" as const,
  paddingLeft: "20px",
}

const heroImageStyle = {
  width: "100%",
  height: "auto",
  maxWidth: "250px",
  display: "block",
}

const heroTitleStyle = {
  fontSize: "28px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 8px 0",
  lineHeight: "1.2",
}

const heroSubtitleStyle = {
  fontSize: "32px",
  fontWeight: "400",
  color: "#ffffff",
  margin: "0 0 24px 0",
  lineHeight: "1.2",
}

const ctaButtonStyle = {
  backgroundColor: "#00ffff",
  color: "#000000",
  borderRadius: "6px",
  padding: "12px 24px",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  border: "none",
  cursor: "pointer",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  boxShadow: "0 4px 12px rgba(0, 255, 255, 0.3)",
}

const mainContentSectionStyle = {
  padding: "50px 20px",
  textAlign: "center" as const,
  backgroundColor: "#000000",
}

const sectionTitleStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 40px 0",
  lineHeight: "1.3",
}

const sectionSubtitleStyle = {
  fontSize: "28px",
  fontWeight: "400",
}

const tipsRowStyle = {
  marginBottom: "40px",
}

const tipColumnStyle = {
  width: "50%",
  verticalAlign: "top" as const,
  padding: "20px",
  textAlign: "center" as const,
}

const tipIconStyle = {
  width: "80px",
  height: "80px",
  display: "block",
  margin: "0 auto 20px auto",
}

const tipTitleStyle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#ffffff",
  margin: "0 0 12px 0",
}

const tipDescriptionStyle = {
  fontSize: "14px",
  color: "#cccccc",
  lineHeight: "1.5",
  margin: "0",
  textAlign: "center" as const,
}

const additionalTipsSectionStyle = {
  padding: "40px 20px",
  backgroundColor: "#111111",
  borderTop: "2px solid #00ffff",
  borderBottom: "2px solid #00ffff",
}

const additionalTipsTitle = {
  fontSize: "20px",
  fontWeight: "600",
  color: "#00ffff",
  margin: "0 0 20px 0",
  textAlign: "center" as const,
}

const reminderColumnStyle = {
  width: "100%",
  textAlign: "left" as const,
  padding: "0 20px",
}

const reminderTextStyle = {
  fontSize: "14px",
  color: "#ffffff",
  lineHeight: "1.8",
  margin: "0",
}

const footerSectionStyle = {
  padding: "40px 20px",
  textAlign: "center" as const,
  backgroundColor: "#000000",
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
  color: "#ffffff",
  margin: "0 0 8px 0",
}

const footerInfoStyle = {
  fontSize: "12px",
  color: "#ffffff",
  margin: "0 0 8px 0",
}

const unsubscribeLinkStyle = {
  color: "#00ffff",
  textDecoration: "underline",
}

const copyrightStyle = {
  fontSize: "12px",
  color: "#888888",
  margin: "0",
}
