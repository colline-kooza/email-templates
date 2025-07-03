import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Font,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

export const AlertsEmail = () => (
  <Html>
    <Head>
      <Font
        fontFamily="Inter"
        fallbackFontFamily={["Arial", "sans-serif"]}
        webFont={{
          url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>{`
        @media only screen and (max-width: 600px) {
          .mobile-padding { padding: 20px 16px !important; }
          .mobile-text { font-size: 14px !important; }
          .mobile-heading { font-size: 20px !important; }
          .mobile-alert-title { font-size: 24px !important; }
          .mobile-full-width { width: 100% !important; }
          .mobile-center { text-align: center !important; }
          .mobile-stack { 
            display: block !important; 
            width: 100% !important; 
            margin: 0 0 16px 0 !important;
          }
          .mobile-hide { display: none !important; }
          .mobile-button {
            width: 100% !important;
            margin: 0 0 12px 0 !important;
            display: block !important;
            text-align: center !important;
          }
          .mobile-alert-item {
            margin: 0 0 20px 0 !important;
          }
          .mobile-detail-row {
            display: block !important;
            width: 100% !important;
          }
          .mobile-detail-cell {
            display: block !important;
            width: 100% !important;
            padding: 8px 0 !important;
            border-bottom: 1px solid #e5e7eb !important;
          }
        }
      `}</style>
    </Head>
    <Preview>Security Alert: Unusual login activity detected on your account</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={headerSection}>
            <Row>
              <Column align="center">
                <div style={headerContent}>
                  <Text style={logoText}>🛡️ SecureApp</Text>
                  <Text style={alertBadge}>SECURITY ALERT</Text>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Main Alert Section */}
          <Section style={mainAlertSection}>
            <Row>
              <Column align="center">
                <div style={alertIconContainer}>
                  <div style={alertIcon}>⚠️</div>
                </div>
                <Heading style={alertTitle} className="mobile-alert-title">
                  Unusual Login Activity Detected
                </Heading>
                <Text style={alertSubtitle} className="mobile-text">
                  We detected a login to your account from an unrecognized device
                </Text>
                <Text style={alertTimestamp} className="mobile-text">
                  December 21, 2024 at 3:42 PM PST
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Alert Details Section */}
          <Section style={detailsSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Heading style={sectionHeading} className="mobile-heading">
                  Login Details
                </Heading>

                <div style={detailsCard}>
                  <table style={detailsTable}>
                    <tbody>
                      <tr style={detailRow} className="mobile-detail-row">
                        <td style={detailLabel} className="mobile-detail-cell">
                          <Text style={detailLabelText}>Location:</Text>
                        </td>
                        <td style={detailValue} className="mobile-detail-cell">
                          <Text style={detailValueText}>San Francisco, CA, USA</Text>
                        </td>
                      </tr>
                      <tr style={detailRow} className="mobile-detail-row">
                        <td style={detailLabel} className="mobile-detail-cell">
                          <Text style={detailLabelText}>IP Address:</Text>
                        </td>
                        <td style={detailValue} className="mobile-detail-cell">
                          <Text style={detailValueText}>192.168.1.100</Text>
                        </td>
                      </tr>
                      <tr style={detailRow} className="mobile-detail-row">
                        <td style={detailLabel} className="mobile-detail-cell">
                          <Text style={detailLabelText}>Device:</Text>
                        </td>
                        <td style={detailValue} className="mobile-detail-cell">
                          <Text style={detailValueText}>Chrome on Windows 11</Text>
                        </td>
                      </tr>
                      <tr style={detailRow} className="mobile-detail-row">
                        <td style={detailLabel} className="mobile-detail-cell">
                          <Text style={detailLabelText}>Time:</Text>
                        </td>
                        <td style={detailValue} className="mobile-detail-cell">
                          <Text style={detailValueText}>Dec 21, 2024 3:42 PM PST</Text>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Action Required Section */}
          <Section style={actionSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Heading style={actionHeading} className="mobile-heading">
                  Action Required
                </Heading>
                <Text style={actionText} className="mobile-text">
                  If this was you, you can safely ignore this email. If you don't recognize this activity, please secure
                  your account immediately.
                </Text>

                {/* Desktop Action Buttons */}
                <div className="mobile-hide">
                  <Row>
                    <Column style={actionButtonColumn}>
                      <Link href="#" style={primaryActionButton}>
                        Secure My Account
                      </Link>
                    </Column>
                    <Column style={actionButtonColumn}>
                      <Link href="#" style={secondaryActionButton}>
                        This Was Me
                      </Link>
                    </Column>
                  </Row>
                </div>

                {/* Mobile Action Buttons */}
                <div style={mobileActionContainer}>
                  <div style={mobileActionButton} className="mobile-button">
                    <Link href="#" style={primaryActionButtonMobile}>
                      Secure My Account
                    </Link>
                  </div>
                  <div style={mobileActionButton} className="mobile-button">
                    <Link href="#" style={secondaryActionButtonMobile}>
                      This Was Me
                    </Link>
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Additional Alerts Section */}
          <Section style={additionalAlertsSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Heading style={sectionHeading} className="mobile-heading">
                  Recent Account Activity
                </Heading>

                {/* Success Alert */}
                <div style={alertItem} className="mobile-alert-item">
                  <Row>
                    <Column style={alertItemIconColumn}>
                      <div style={successAlertIcon}>✅</div>
                    </Column>
                    <Column style={alertItemContentColumn}>
                      <Text style={alertItemTitle}>Password Changed Successfully</Text>
                      <Text style={alertItemDescription} className="mobile-text">
                        Your password was updated on Dec 20, 2024 at 2:15 PM
                      </Text>
                      <Text style={alertItemTime} className="mobile-text">
                        1 day ago
                      </Text>
                    </Column>
                  </Row>
                </div>

                {/* Info Alert */}
                <div style={alertItem} className="mobile-alert-item">
                  <Row>
                    <Column style={alertItemIconColumn}>
                      <div style={infoAlertIcon}>ℹ️</div>
                    </Column>
                    <Column style={alertItemContentColumn}>
                      <Text style={alertItemTitle}>New Device Added</Text>
                      <Text style={alertItemDescription} className="mobile-text">
                        iPhone 15 Pro was added to your trusted devices
                      </Text>
                      <Text style={alertItemTime} className="mobile-text">
                        3 days ago
                      </Text>
                    </Column>
                  </Row>
                </div>

                {/* Warning Alert */}
                <div style={alertItem} className="mobile-alert-item">
                  <Row>
                    <Column style={alertItemIconColumn}>
                      <div style={warningAlertIcon}>⚠️</div>
                    </Column>
                    <Column style={alertItemContentColumn}>
                      <Text style={alertItemTitle}>Failed Login Attempt</Text>
                      <Text style={alertItemDescription} className="mobile-text">
                        Someone tried to access your account with wrong password
                      </Text>
                      <Text style={alertItemTime} className="mobile-text">
                        1 week ago
                      </Text>
                    </Column>
                  </Row>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Security Tips Section */}
          <Section style={tipsSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Heading style={tipsHeading} className="mobile-heading">
                  Security Tips
                </Heading>
                <div style={tipsContainer}>
                  <div style={tipItem}>
                    <div style={tipIcon}>🔐</div>
                    <div style={tipContent}>
                      <Text style={tipTitle}>Use Strong Passwords</Text>
                      <Text style={tipDescription} className="mobile-text">
                        Create unique passwords with a mix of letters, numbers, and symbols
                      </Text>
                    </div>
                  </div>
                  <div style={tipItem}>
                    <div style={tipIcon}>📱</div>
                    <div style={tipContent}>
                      <Text style={tipTitle}>Enable Two-Factor Authentication</Text>
                      <Text style={tipDescription} className="mobile-text">
                        Add an extra layer of security to your account
                      </Text>
                    </div>
                  </div>
                  <div style={tipItem}>
                    <div style={tipIcon}>👀</div>
                    <div style={tipContent}>
                      <Text style={tipTitle}>Monitor Account Activity</Text>
                      <Text style={tipDescription} className="mobile-text">
                        Regularly check your account for any suspicious activity
                      </Text>
                    </div>
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Footer */}
          <Section style={footerSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Text style={footerHeading}>Need Help?</Text>
                <Text style={footerText} className="mobile-text">
                  Our security team is available 24/7 to help protect your account.
                </Text>
                <div style={footerButtonContainer}>
                  <Link href="#" style={footerButton} className="mobile-full-width">
                    Contact Security Team
                  </Link>
                </div>

                <div style={emergencyContact}>
                  <Text style={emergencyText} className="mobile-text">
                    🚨 <strong>Emergency?</strong> Call us immediately at{" "}
                    <Link href="tel:+1-800-SECURE" style={emergencyLink}>
                      1-800-SECURE
                    </Link>
                  </Text>
                </div>

                <Text style={footerDisclaimer} className="mobile-text">
                  This is an automated security alert. Please do not reply to this email. If you believe this alert was
                  sent in error, please contact our support team.
                </Text>
                <Text style={footerCopyright} className="mobile-text">
                  © 2024 SecureApp. All rights reserved.
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
)

export default AlertsEmail

// Styles
const main = {
  backgroundColor: "#f3f4f6",
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  margin: "0",
  padding: "20px 0",
  lineHeight: "1.6",
}

const container = {
  margin: "0 auto",
  width: "100%",
  maxWidth: "600px",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
  border: "1px solid #e5e7eb",
}

// Header Styles
const headerSection = {
  background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
  padding: "24px",
  textAlign: "center" as const,
}

const headerContent = {
  textAlign: "center" as const,
}

const logoText = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "700",
  margin: "0 0 8px",
  textAlign: "center" as const,
}

const alertBadge = {
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "600",
  letterSpacing: "1px",
  padding: "6px 12px",
  borderRadius: "12px",
  display: "inline-block",
  margin: "0",
  textAlign: "center" as const,
}

// Main Alert Section Styles
const mainAlertSection = {
  backgroundColor: "#ffffff",
  padding: "40px 24px",
  textAlign: "center" as const,
  borderBottom: "1px solid #f3f4f6",
}

const alertIconContainer = {
  margin: "0 0 20px",
  textAlign: "center" as const,
}

const alertIcon = {
  fontSize: "48px",
  display: "block",
  textAlign: "center" as const,
}

const alertTitle = {
  color: "#111827",
  fontSize: "28px",
  fontWeight: "700",
  lineHeight: "1.3",
  margin: "0 0 12px",
  textAlign: "center" as const,
}

const alertSubtitle = {
  color: "#6b7280",
  fontSize: "16px",
  margin: "0 0 16px",
  textAlign: "center" as const,
  lineHeight: "1.5",
}

const alertTimestamp = {
  color: "#dc2626",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0",
  textAlign: "center" as const,
  backgroundColor: "#fef2f2",
  padding: "8px 16px",
  borderRadius: "20px",
  display: "inline-block",
}

// Details Section Styles
const detailsSection = {
  backgroundColor: "#ffffff",
  padding: "40px 24px",
}

const sectionHeading = {
  color: "#111827",
  fontSize: "24px",
  fontWeight: "600",
  textAlign: "center" as const,
  margin: "0 0 24px",
}

const detailsCard = {
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  padding: "24px",
  margin: "0 auto",
  maxWidth: "400px",
}

const detailsTable = {
  width: "100%",
  borderCollapse: "collapse" as const,
}

const detailRow = {
  borderBottom: "1px solid #e5e7eb",
}

const detailLabel = {
  padding: "12px 0",
  width: "40%",
  verticalAlign: "top" as const,
}

const detailLabelText = {
  color: "#6b7280",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0",
}

const detailValue = {
  padding: "12px 0",
  verticalAlign: "top" as const,
}

const detailValueText = {
  color: "#111827",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0",
}

// Action Section Styles
const actionSection = {
  backgroundColor: "#fef2f2",
  padding: "40px 24px",
  textAlign: "center" as const,
}

const actionHeading = {
  color: "#dc2626",
  fontSize: "24px",
  fontWeight: "600",
  margin: "0 0 16px",
  textAlign: "center" as const,
}

const actionText = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 32px",
  textAlign: "center" as const,
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto",
}

const actionButtonColumn = {
  textAlign: "center" as const,
  padding: "0 8px",
}

const primaryActionButton = {
  backgroundColor: "#dc2626",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "14px 28px",
  borderRadius: "8px",
  display: "inline-block",
  textAlign: "center" as const,
  minWidth: "160px",
  boxShadow: "0 4px 12px rgba(220, 38, 38, 0.3)",
}

const secondaryActionButton = {
  backgroundColor: "#ffffff",
  color: "#374151",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "14px 28px",
  borderRadius: "8px",
  border: "2px solid #d1d5db",
  display: "inline-block",
  textAlign: "center" as const,
  minWidth: "160px",
}

// Mobile Action Styles
const mobileActionContainer = {
  display: "none",
}

const mobileActionButton = {
  margin: "0 0 12px",
  textAlign: "center" as const,
}

const primaryActionButtonMobile = {
  backgroundColor: "#dc2626",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "14px 28px",
  borderRadius: "8px",
  display: "block",
  textAlign: "center" as const,
  width: "100%",
  boxSizing: "border-box" as const,
  boxShadow: "0 4px 12px rgba(220, 38, 38, 0.3)",
}

const secondaryActionButtonMobile = {
  backgroundColor: "#ffffff",
  color: "#374151",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "14px 28px",
  borderRadius: "8px",
  border: "2px solid #d1d5db",
  display: "block",
  textAlign: "center" as const,
  width: "100%",
  boxSizing: "border-box" as const,
}

// Additional Alerts Section Styles
const additionalAlertsSection = {
  backgroundColor: "#ffffff",
  padding: "40px 24px",
  borderTop: "1px solid #f3f4f6",
}

const alertItem = {
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  padding: "16px",
  margin: "0 0 16px",
}

const alertItemIconColumn = {
  width: "40px",
  padding: "0 12px 0 0",
  verticalAlign: "top" as const,
}

const alertItemContentColumn = {
  verticalAlign: "top" as const,
}

const successAlertIcon = {
  fontSize: "20px",
  backgroundColor: "#dcfce7",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid #16a34a",
}

const infoAlertIcon = {
  fontSize: "20px",
  backgroundColor: "#dbeafe",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid #2563eb",
}

const warningAlertIcon = {
  fontSize: "20px",
  backgroundColor: "#fef3c7",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid #d97706",
}

const alertItemTitle = {
  color: "#111827",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0 0 4px",
}

const alertItemDescription = {
  color: "#6b7280",
  fontSize: "14px",
  margin: "0 0 8px",
  lineHeight: "1.4",
}

const alertItemTime = {
  color: "#9ca3af",
  fontSize: "12px",
  margin: "0",
}

// Security Tips Section Styles
const tipsSection = {
  backgroundColor: "#f9fafb",
  padding: "40px 24px",
}

const tipsHeading = {
  color: "#111827",
  fontSize: "24px",
  fontWeight: "600",
  textAlign: "center" as const,
  margin: "0 0 32px",
}

const tipsContainer = {
  maxWidth: "500px",
  margin: "0 auto",
}

const tipItem = {
  display: "flex",
  alignItems: "flex-start",
  margin: "0 0 24px",
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  border: "1px solid #e5e7eb",
}

const tipIcon = {
  fontSize: "24px",
  marginRight: "16px",
  minWidth: "32px",
}

const tipContent = {
  flex: "1",
}

const tipTitle = {
  color: "#111827",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0 0 8px",
}

const tipDescription = {
  color: "#6b7280",
  fontSize: "14px",
  margin: "0",
  lineHeight: "1.5",
}

// Footer Styles
const footerSection = {
  backgroundColor: "#111827",
  padding: "40px 24px",
  textAlign: "center" as const,
}

const footerHeading = {
  color: "#ffffff",
  fontSize: "20px",
  fontWeight: "600",
  margin: "0 0 12px",
  textAlign: "center" as const,
}

const footerText = {
  color: "#d1d5db",
  fontSize: "14px",
  margin: "0 0 24px",
  textAlign: "center" as const,
  lineHeight: "1.6",
}

const footerButtonContainer = {
  margin: "0 0 24px",
  textAlign: "center" as const,
}

const footerButton = {
  backgroundColor: "#dc2626",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "12px 24px",
  borderRadius: "6px",
  display: "inline-block",
  textAlign: "center" as const,
}

const emergencyContact = {
  backgroundColor: "#fef2f2",
  border: "1px solid #fecaca",
  borderRadius: "8px",
  padding: "16px",
  margin: "0 0 32px",
}

const emergencyText = {
  color: "#dc2626",
  fontSize: "14px",
  margin: "0",
  textAlign: "center" as const,
}

const emergencyLink = {
  color: "#dc2626",
  fontWeight: "600",
  textDecoration: "underline",
}

const footerDisclaimer = {
  color: "#9ca3af",
  fontSize: "12px",
  lineHeight: "1.5",
  margin: "0 0 16px",
  textAlign: "center" as const,
}

const footerCopyright = {
  color: "#9ca3af",
  fontSize: "12px",
  margin: "0",
  textAlign: "center" as const,
}
