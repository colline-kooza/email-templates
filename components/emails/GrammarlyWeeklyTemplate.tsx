import { Body, Container, Column, Head, Html, Img, Link, Preview, Row, Section, Text } from "@react-email/components"

export const GrammarlyWeeklyTemplate = () => {
  return (
    <Html>
      <Preview>Your Weekly Writing Update - June 09 - June 15 - Grammarly</Preview>
      <Head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
            * {
              font-family: 'DM Sans', Arial, sans-serif;
              box-sizing: border-box;
            }
            
            /* Mobile First Responsive Design */
            @media only screen and (max-width: 600px) {
              .mobile-full-width {
                width: 100% !important;
                display: block !important;
              }
              
              .mobile-center {
                text-align: center !important;
              }
              
              .mobile-stack {
                display: block !important;
                width: 100% !important;
                padding: 0 !important;
                margin-bottom: 20px !important;
              }
              
              .mobile-logo {
                font-size: 18px !important;
                margin-bottom: 15px !important;
              }
              
              .mobile-main-title {
                font-size: 22px !important;
                line-height: 1.3 !important;
              }
              
              .mobile-subtitle {
                font-size: 13px !important;
                line-height: 1.5 !important;
              }
              
              .mobile-streak-number {
                font-size: 28px !important;
              }
              
              .mobile-stat-title {
                font-size: 16px !important;
              }
              
              .mobile-stat-text {
                font-size: 13px !important;
                line-height: 1.4 !important;
              }
              
              .mobile-section-title {
                font-size: 18px !important;
                line-height: 1.3 !important;
              }
              
              .mobile-improvement-title {
                font-size: 16px !important;
                line-height: 1.3 !important;
              }
              
              .mobile-pro-title {
                font-size: 20px !important;
                line-height: 1.3 !important;
              }
              
              .mobile-button {
                font-size: 14px !important;
                padding: 12px 24px !important;
                display: block !important;
                margin: 20px auto !important;
              }
              
              .mobile-toggle-row {
                display: block !important;
                width: 100% !important;
                margin-bottom: 15px !important;
              }
              
              .mobile-social-icons {
                margin: 0 8px !important;
              }
              
              .mobile-footer-text {
                font-size: 11px !important;
                line-height: 1.4 !important;
              }
              
              .mobile-section-padding {
                padding: 15px 12px !important;
              }
            }
          `}
        </style>
      </Head>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header Section */}
          <Section style={headerSectionStyle} className="mobile-section-padding">
            <Row>
              <Column style={logoColumnStyle}>
                <div style={logoContainerStyle}>
                  <div style={logoIconStyle}>G</div>
                  <Text style={logoTextStyle} className="mobile-logo">
                    grammarly
                  </Text>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Date and Title Section */}
          <Section style={titleSectionStyle} className="mobile-section-padding">
            <Text style={dateStyle}>June 09 - June 15</Text>
            <Text style={mainTitleStyle} className="mobile-main-title">
              Your Weekly Writing Update
            </Text>
            <Text style={subtitleStyle} className="mobile-subtitle">
              Your unwavering focus week after week is leading to some seriously impressive writing! Take a look at your
              equally impressive stats below.
            </Text>
          </Section>

          {/* Writing Streak Section */}
          <Section style={streakSectionStyle} className="mobile-section-padding">
            <Row>
              <Column style={streakLeftColumnStyle} className="mobile-stack">
                <Text style={streakLabelStyle}>Grammarly writing streak</Text>
                <Text style={streakNumberStyle} className="mobile-streak-number">
                  3 weeks
                </Text>
              </Column>
              <Column style={streakRightColumnStyle} className="mobile-stack mobile-center">
                <div style={badgeContainerStyle}>
                  <Text style={badgeIconStyle}>🏆</Text>
                  <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                    <Text style={badgeTextStyle}>Next achievement badge</Text>
                    <Text style={badgeWeekStyle}>Week 4</Text>
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Stats Section */}
          <Section style={statsSectionStyle} className="mobile-section-padding">
            {/* Productivity */}
            <Row style={statRowStyle}>
              <Column style={statIconColumnStyle}>
                <div style={productivityIconStyle}>📊</div>
              </Column>
              <Column style={statContentColumnStyle}>
                <Text style={statTitleStyle} className="mobile-stat-title">
                  Productivity
                </Text>
                <Text style={statTextStyle} className="mobile-stat-text">
                  Grammarly analyzed <strong>540 words</strong>. You were more productive than <strong>39%</strong> of
                  Grammarly users.
                </Text>
              </Column>
            </Row>

            {/* Accuracy */}
            <Row style={statRowStyle}>
              <Column style={statIconColumnStyle}>
                <div style={accuracyIconStyle}>🎯</div>
              </Column>
              <Column style={statContentColumnStyle}>
                <Text style={statTitleStyle} className="mobile-stat-title">
                  Accuracy
                </Text>
                <Text style={statTextStyle} className="mobile-stat-text">
                  Grammarly showed you <strong>17 alerts</strong>. You were more accurate than <strong>21%</strong> of
                  Grammarly users.
                </Text>
              </Column>
            </Row>

            {/* Vocabulary */}
            <Row style={statRowStyle}>
              <Column style={statIconColumnStyle}>
                <div style={vocabularyIconStyle}>💬</div>
              </Column>
              <Column style={statContentColumnStyle}>
                <Text style={statTitleStyle} className="mobile-stat-title">
                  Vocabulary
                </Text>
                <Text style={statTextStyle} className="mobile-stat-text">
                  You used <strong>336 unique words</strong>. That's <strong>42%</strong> more unique words than other
                  Grammarly users.
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Area of Improvement Section */}
          <Section style={improvementSectionStyle} className="mobile-section-padding">
            <Text style={improvementTitleStyle} className="mobile-section-title">
              Area of Improvement
            </Text>

            <Row style={improvementRowStyle}>
              <Column style={improvementIconColumnStyle}>
                <div style={improvementIconStyle}>✏️</div>
              </Column>
              <Column style={improvementContentColumnStyle}>
                <Text style={improvementItemTitleStyle} className="mobile-improvement-title">
                  Incorrect verb form with indefinite pronoun
                </Text>
                <Text style={improvementItemTextStyle} className="mobile-stat-text">
                  This mistake appeared in your writing at a higher rate compared to 80% of Grammarly users.
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Grammarly Pro Section */}
          <Section style={proSectionStyle} className="mobile-section-padding">
            <div style={proLabelStyle}>✨ Pro</div>
            <Text style={proTitleStyle} className="mobile-pro-title">
              Unlock 33 Advanced Suggestions with Grammarly Pro
            </Text>

            <div style={suggestionListStyle}>
              <Row style={suggestionRowStyle}>
                <Column style={suggestionLeftColumnStyle}>
                  <Text style={suggestionIconStyle}>✓</Text>
                  <Text style={{ ...suggestionTextStyle, display: "inline-block", verticalAlign: "middle" }}>
                    Accuracy suggestions
                  </Text>
                </Column>
                <Column style={suggestionRightColumnStyle}>
                  <div style={suggestionCountStyle}>25</div>
                </Column>
              </Row>

              <Row style={suggestionRowStyle}>
                <Column style={suggestionLeftColumnStyle}>
                  <Text style={suggestionIconStyle}>✓</Text>
                  <Text style={{ ...suggestionTextStyle, display: "inline-block", verticalAlign: "middle" }}>
                    Readability suggestions
                  </Text>
                </Column>
                <Column style={suggestionRightColumnStyle}>
                  <div style={suggestionCountStyle}>5</div>
                </Column>
              </Row>

              <Row style={suggestionRowStyle}>
                <Column style={suggestionLeftColumnStyle}>
                  <Text style={suggestionIconStyle}>✓</Text>
                  <Text style={{ ...suggestionTextStyle, display: "inline-block", verticalAlign: "middle" }}>
                    Writing tone suggestions
                  </Text>
                </Column>
                <Column style={suggestionRightColumnStyle}>
                  <div style={suggestionCountStyle}>3</div>
                </Column>
              </Row>
            </div>

            <Link href="#" style={proButtonStyle} className="mobile-button">
              Get Pro
            </Link>
          </Section>

          {/* Integration Check Section */}
          <Section style={integrationSectionStyle} className="mobile-section-padding">
            <Text style={integrationTitleStyle} className="mobile-section-title">
              Is Grammarly working everywhere you need it?
            </Text>
            <Text style={integrationSubtitleStyle} className="mobile-subtitle">
              Make sure Grammarly is turned on to get AI suggestions across all the apps and sites you use.
            </Text>

            <div style={toggleListStyle}>
              <Row style={toggleRowStyle} className="mobile-toggle-row">
                <Column style={toggleLeftColumnStyle}>
                  <Text style={toggleTextStyle}>Browser Extension</Text>
                </Column>
                <Column style={toggleRightColumnStyle}>
                  <Link href="#" style={activateLinkStyle}>
                    Activate
                  </Link>
                  <div style={toggleOffStyle}>OFF</div>
                </Column>
              </Row>

              <Row style={toggleRowStyle} className="mobile-toggle-row">
                <Column style={toggleLeftColumnStyle}>
                  <Text style={toggleTextStyle}>Mobile Keyboard</Text>
                </Column>
                <Column style={toggleRightColumnStyle}>
                  <Link href="#" style={activateLinkStyle}>
                    Activate
                  </Link>
                  <div style={toggleOffStyle}>OFF</div>
                </Column>
              </Row>

              <Row style={toggleRowStyle} className="mobile-toggle-row">
                <Column style={toggleLeftColumnStyle}>
                  <Text style={toggleTextStyle}>Grammarly for Your Desktop</Text>
                </Column>
                <Column style={toggleRightColumnStyle}>
                  <Link href="#" style={activateLinkStyle}>
                    Activate
                  </Link>
                  <div style={toggleOffStyle}>OFF</div>
                </Column>
              </Row>
            </div>
          </Section>

          {/* Footer Section */}
          <Section style={footerSectionStyle} className="mobile-section-padding">
            {/* Social Media Icons */}
            <Row style={socialRowStyle}>
              <Column style={socialColumnStyle} className="mobile-center">
                <Link href="#" style={socialLinkStyle} className="mobile-social-icons">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                    alt="Facebook"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle} className="mobile-social-icons">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                    alt="Instagram"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle} className="mobile-social-icons">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                    alt="LinkedIn"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle} className="mobile-social-icons">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                    alt="Twitter"
                    style={socialIconStyle}
                  />
                </Link>
              </Column>
            </Row>

            {/* Footer Links */}
            <Text style={footerLinksStyle} className="mobile-footer-text">
              <Link href="#" style={footerLinkStyle}>
                View Web Version
              </Link>
              {" • "}
              <Link href="#" style={footerLinkStyle}>
                Email Preferences
              </Link>
              {" • "}
              <Link href="#" style={footerLinkStyle}>
                Unsubscribe
              </Link>
            </Text>

            {/* Footer Text */}
            <Text style={footerTextStyle} className="mobile-footer-text">
              We hope you enjoy monitoring your weekly writing trends. But if you no longer wish to receive Grammarly
              insights emails, you may change your email preferences above.
            </Text>

            {/* Company Info */}
            <Text style={companyInfoStyle} className="mobile-footer-text">
              © 2025 Grammarly, Inc., 548 Market St. #35410, San Francisco, CA 94104
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default GrammarlyWeeklyTemplate

// Comprehensive Email-Safe Styles
const bodyStyle = {
  fontFamily: "'DM Sans', Arial, sans-serif",
  backgroundColor: "#f8f9fa",
  margin: "0",
  padding: "20px 0",
  lineHeight: "1.6",
  WebkitTextSizeAdjust: "100%",
  msTextSizeAdjust: "100%",
}

const containerStyle = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "0",
  maxWidth: "600px",
  width: "100%",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
}

const headerSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "25px 30px 15px 30px",
}

const logoColumnStyle = {
  width: "100%",
}

const logoContainerStyle = {
  textAlign: "left" as const,
}

const logoIconStyle = {
  width: "32px",
  height: "32px",
  backgroundColor: "#15803d",
  borderRadius: "50%",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "700",
  textAlign: "center" as const,
  lineHeight: "32px",
  display: "inline-block",
  verticalAlign: "middle" as const,
  marginRight: "12px",
}

const logoTextStyle = {
  fontSize: "20px",
  fontWeight: "400",
  color: "#374151",
  margin: "0",
}

const titleSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "15px 30px 25px 30px",
  textAlign: "center" as const,
}

const dateStyle = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0 0 15px 0",
  fontWeight: "500",
}

const mainTitleStyle = {
  fontSize: "28px",
  fontWeight: "700",
  color: "#059669",
  margin: "0 0 20px 0",
  lineHeight: "1.3",
}

const subtitleStyle = {
  fontSize: "16px",
  color: "#4b5563",
  margin: "0",
  lineHeight: "1.5",
  maxWidth: "480px",
  marginLeft: "auto",
  marginRight: "auto",
}

const streakSectionStyle = {
  backgroundColor: "#f9fafb",
  padding: "25px 30px",
  borderTop: "1px solid #e5e7eb",
  borderBottom: "1px solid #e5e7eb",
}

const streakLeftColumnStyle = {
  width: "60%",
  verticalAlign: "middle" as const,
}

const streakRightColumnStyle = {
  width: "40%",
  verticalAlign: "middle" as const,
  textAlign: "right" as const,
}

const streakLabelStyle = {
  fontSize: "16px",
  color: "#374151",
  margin: "0 0 8px 0",
  fontWeight: "500",
}

const streakNumberStyle = {
  fontSize: "32px",
  fontWeight: "700",
  color: "#059669",
  margin: "0",
}

const badgeContainerStyle = {
  textAlign: "right" as const,
}

const badgeIconStyle = {
  fontSize: "24px",
  display: "inline-block",
  verticalAlign: "middle" as const,
  marginRight: "8px",
}

const badgeTextStyle = {
  fontSize: "12px",
  color: "#6b7280",
  margin: "0",
  textAlign: "right" as const,
}

const badgeWeekStyle = {
  fontSize: "14px",
  color: "#374151",
  margin: "0",
  fontWeight: "600",
  textAlign: "right" as const,
}

const statsSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "30px 30px",
}

const statRowStyle = {
  marginBottom: "30px",
}

const statIconColumnStyle = {
  width: "60px",
  verticalAlign: "top" as const,
}

const statContentColumnStyle = {
  width: "calc(100% - 60px)",
  verticalAlign: "top" as const,
  paddingLeft: "15px",
}

const productivityIconStyle = {
  width: "40px",
  height: "40px",
  backgroundColor: "#dbeafe",
  borderRadius: "8px",
  fontSize: "20px",
  textAlign: "center" as const,
  lineHeight: "40px",
  display: "block",
}

const accuracyIconStyle = {
  width: "40px",
  height: "40px",
  backgroundColor: "#dcfce7",
  borderRadius: "8px",
  fontSize: "20px",
  textAlign: "center" as const,
  lineHeight: "40px",
  display: "block",
}

const vocabularyIconStyle = {
  width: "40px",
  height: "40px",
  backgroundColor: "#fef3c7",
  borderRadius: "8px",
  fontSize: "20px",
  textAlign: "center" as const,
  lineHeight: "40px",
  display: "block",
}

const statTitleStyle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#374151",
  margin: "0 0 8px 0",
}

const statTextStyle = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0",
  lineHeight: "1.5",
}

const improvementSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "30px 30px",
  borderTop: "1px solid #e5e7eb",
}

const improvementTitleStyle = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#374151",
  margin: "0 0 25px 0",
}

const improvementRowStyle = {
  marginBottom: "0",
}

const improvementIconColumnStyle = {
  width: "60px",
  verticalAlign: "top" as const,
}

const improvementContentColumnStyle = {
  width: "calc(100% - 60px)",
  verticalAlign: "top" as const,
  paddingLeft: "15px",
}

const improvementIconStyle = {
  width: "40px",
  height: "40px",
  backgroundColor: "#fef2f2",
  borderRadius: "8px",
  fontSize: "20px",
  textAlign: "center" as const,
  lineHeight: "40px",
  display: "block",
}

const improvementItemTitleStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#374151",
  margin: "0 0 8px 0",
  lineHeight: "1.4",
}

const improvementItemTextStyle = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0",
  lineHeight: "1.5",
}

const proSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "30px 30px",
  textAlign: "center" as const,
  borderTop: "1px solid #e5e7eb",
}

const proLabelStyle = {
  display: "inline-block",
  backgroundColor: "#10b981",
  color: "#ffffff",
  padding: "4px 12px",
  borderRadius: "12px",
  fontSize: "12px",
  fontWeight: "600",
  marginBottom: "15px",
}

const proTitleStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#374151",
  margin: "0 0 30px 0",
  lineHeight: "1.3",
}

const suggestionListStyle = {
  marginBottom: "30px",
}

const suggestionRowStyle = {
  marginBottom: "15px",
  borderBottom: "1px solid #f3f4f6",
  paddingBottom: "15px",
}

const suggestionLeftColumnStyle = {
  width: "80%",
  verticalAlign: "middle" as const,
  textAlign: "left" as const,
}

const suggestionRightColumnStyle = {
  width: "20%",
  verticalAlign: "middle" as const,
  textAlign: "right" as const,
}

const suggestionIconStyle = {
  width: "20px",
  height: "20px",
  backgroundColor: "#10b981",
  borderRadius: "50%",
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "600",
  textAlign: "center" as const,
  lineHeight: "20px",
  display: "inline-block",
  verticalAlign: "middle" as const,
  marginRight: "12px",
}

const suggestionTextStyle = {
  fontSize: "14px",
  color: "#374151",
  margin: "0",
  fontWeight: "500",
}

const suggestionCountStyle = {
  backgroundColor: "#10b981",
  color: "#ffffff",
  padding: "4px 8px",
  borderRadius: "4px",
  fontSize: "12px",
  fontWeight: "600",
}

const proButtonStyle = {
  backgroundColor: "#10b981",
  color: "#ffffff",
  padding: "14px 32px",
  borderRadius: "6px",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "600",
  display: "inline-block",
  boxShadow: "0 2px 4px rgba(16, 185, 129, 0.2)",
}

const integrationSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "30px 30px",
  borderTop: "1px solid #e5e7eb",
}

const integrationTitleStyle = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#374151",
  margin: "0 0 15px 0",
  textAlign: "center" as const,
}

const integrationSubtitleStyle = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0 0 30px 0",
  lineHeight: "1.5",
  textAlign: "center" as const,
}

const toggleListStyle = {
  marginBottom: "0",
}

const toggleRowStyle = {
  marginBottom: "20px",
  paddingBottom: "20px",
  borderBottom: "1px solid #f3f4f6",
}

const toggleLeftColumnStyle = {
  width: "70%",
  verticalAlign: "middle" as const,
}

const toggleRightColumnStyle = {
  width: "30%",
  verticalAlign: "middle" as const,
  textAlign: "right" as const,
}

const toggleTextStyle = {
  fontSize: "14px",
  color: "#374151",
  margin: "0",
  fontWeight: "500",
}

const activateLinkStyle = {
  color: "#059669",
  textDecoration: "none",
  fontSize: "12px",
  fontWeight: "600",
  marginRight: "10px",
}

const toggleOffStyle = {
  display: "inline-block",
  backgroundColor: "#f3f4f6",
  color: "#6b7280",
  padding: "2px 8px",
  borderRadius: "12px",
  fontSize: "10px",
  fontWeight: "600",
}

const footerSectionStyle = {
  backgroundColor: "#f9fafb",
  padding: "25px 30px",
  textAlign: "center" as const,
  borderTop: "1px solid #e5e7eb",
}

const socialRowStyle = {
  marginBottom: "20px",
}

const socialColumnStyle = {
  width: "100%",
  textAlign: "center" as const,
}

const socialLinkStyle = {
  textDecoration: "none",
  margin: "0 8px",
  display: "inline-block",
}

const socialIconStyle = {
  width: "24px",
  height: "24px",
  borderRadius: "50%",
}

const footerLinksStyle = {
  fontSize: "12px",
  color: "#6b7280",
  margin: "0 0 15px 0",
}

const footerLinkStyle = {
  color: "#059669",
  textDecoration: "none",
}

const footerTextStyle = {
  fontSize: "12px",
  color: "#6b7280",
  margin: "0 0 15px 0",
  lineHeight: "1.5",
}

const companyInfoStyle = {
  fontSize: "11px",
  color: "#9ca3af",
  margin: "0",
}
