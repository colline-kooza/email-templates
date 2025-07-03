import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Font,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

export const RansomwarePrevention = () => (
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
          .mobile-heading { font-size: 24px !important; }
          .mobile-hero-heading { font-size: 28px !important; }
          .mobile-full-width { width: 100% !important; }
          .mobile-center { text-align: center !important; }
          .mobile-stack { 
            display: block !important; 
            width: 100% !important; 
            margin: 0 0 20px 0 !important;
          }
          .mobile-nav-item {
            display: inline-block !important;
            margin: 0 8px !important;
            font-size: 12px !important;
          }
          .mobile-tip-card {
            width: 100% !important;
            margin: 0 0 20px 0 !important;
            display: block !important;
          }
          .mobile-stat-item {
            width: 100% !important;
            margin: 0 0 24px 0 !important;
            display: block !important;
            text-align: center !important;
          }
          .mobile-social-icon {
            margin: 0 4px !important;
          }
        }
      `}</style>
    </Head>
    <Preview>How to Prevent Ransomware - Essential Cybersecurity Tips & Statistics</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          {/* Header Navigation */}
          <Section style={headerSection}>
            <Row>
              <Column style={logoColumn}>
                <Text style={logoText}>[Your Logo]</Text>
              </Column>
              <Column style={navColumn}>
                <div style={navContainer}>
                  <Link href="#" style={navLink} className="mobile-nav-item">
                    Home
                  </Link>
                  <Link href="#" style={navLink} className="mobile-nav-item">
                    Page
                  </Link>
                  <Link href="#" style={navLink} className="mobile-nav-item">
                    About Us
                  </Link>
                  <Link href="#" style={navLink} className="mobile-nav-item">
                    Contact Us
                  </Link>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Hero Section with Illustration */}
          <Section style={heroSection}>
            <Row>
              <Column align="center">
                <div style={heroImageContainer}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1659092531124-Virus.png"
                    alt="Ransomware prevention illustration showing laptop with ransom warning"
                    style={heroImage}
                    className="mobile-full-width"
                  />
                </div>
              </Column>
            </Row>
          </Section>

          {/* Main Content Section */}
          <Section style={contentSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Text style={sectionLabel} className="mobile-text">
                  How to Prevent
                </Text>
                <Heading style={mainHeading} className="mobile-hero-heading">
                  RANSOMWARE
                </Heading>
                <Text style={descriptionText} className="mobile-text">
                  Ransomware attacks have increased by 350% in the past year. Protect your business and personal data
                  with these essential cybersecurity practices that can save you from devastating attacks.
                </Text>
                <div style={dividerLine}></div>
              </Column>
            </Row>
          </Section>

          {/* Threat Statistics Section */}
          <Section style={statsSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Heading style={statsHeading} className="mobile-heading">
                  Ransomware by the Numbers
                </Heading>
                <Text style={statsSubtext} className="mobile-text">
                  Understanding the scope of the threat
                </Text>

                {/* Desktop Stats Layout */}
                <div className="mobile-hide">
                  <Row>
                    <Column style={statColumn} align="center">
                      <div style={statCard}>
                        <Text style={statNumber}>$20B</Text>
                        <Text style={statLabel} className="mobile-text">
                          Global damages in 2023
                        </Text>
                      </div>
                    </Column>
                    <Column style={statColumn} align="center">
                      <div style={statCard}>
                        <Text style={statNumber}>1 in 5</Text>
                        <Text style={statLabel} className="mobile-text">
                          Organizations affected
                        </Text>
                      </div>
                    </Column>
                    <Column style={statColumn} align="center">
                      <div style={statCard}>
                        <Text style={statNumber}>23 days</Text>
                        <Text style={statLabel} className="mobile-text">
                          Average recovery time
                        </Text>
                      </div>
                    </Column>
                  </Row>
                </div>

                {/* Mobile Stats Layout */}
                <div style={mobileStatsContainer}>
                  <div style={mobileStatItem} className="mobile-stat-item">
                    <Text style={statNumber}>$20B</Text>
                    <Text style={statLabel} className="mobile-text">
                      Global damages in 2023
                    </Text>
                  </div>
                  <div style={mobileStatItem} className="mobile-stat-item">
                    <Text style={statNumber}>1 in 5</Text>
                    <Text style={statLabel} className="mobile-text">
                      Organizations affected
                    </Text>
                  </div>
                  <div style={mobileStatItem} className="mobile-stat-item">
                    <Text style={statNumber}>287 days</Text>
                    <Text style={statLabel} className="mobile-text">
                      Average recovery time
                    </Text>
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Security Tips Grid */}
          <Section style={tipsSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Heading style={tipsHeading} className="mobile-heading">
                  Essential Protection Strategies
                </Heading>
                <Text style={tipsSubtext} className="mobile-text">
                  Follow these critical steps to safeguard your systems
                </Text>

                {/* Desktop Tips Grid */}
                <div className="mobile-hide">
                  <Row style={tipsRow}>
                    <Column style={tipColumn}>
                      <div style={tipCard}>
                        <table style={tipIconTable}>
                          <tbody>
                            <tr>
                              <td style={tipIconCell}>
                                <Img
                                  src="https://cdn.templates.unlayer.com/assets/1658741566191-1.png"
                                  alt="Don't click suspicious links"
                                  style={tipIconImage}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <Text style={tipTitle}>DON'T CLICK</Text>
                        <Text style={tipTitle}>SUSPICIOUS LINK</Text>
                        <Text style={tipDescription} className="mobile-text">
                          Verify sender identity before clicking any links. Hover over links to check destinations.
                        </Text>
                      </div>
                    </Column>
                    <Column style={tipColumn}>
                      <div style={tipCard}>
                        <table style={tipIconTable}>
                          <tbody>
                            <tr>
                              <td style={tipIconCell}>
                                <Img
                                  src="https://cdn.templates.unlayer.com/assets/1658741568716-2.png"
                                  alt="Install firewall"
                                  style={tipIconImage}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <Text style={tipTitle}>INSTALL</Text>
                        <Text style={tipTitle}>FIREWALL</Text>
                        <Text style={tipDescription} className="mobile-text">
                          Configure a robust firewall to block unauthorized access and malicious traffic.
                        </Text>
                      </div>
                    </Column>
                    <Column style={tipColumn}>
                      <div style={tipCard}>
                        <table style={tipIconTable}>
                          <tbody>
                            <tr>
                              <td style={tipIconCell}>
                                <Img
                                  src="https://cdn.templates.unlayer.com/assets/1658741572645-3.png"
                                  alt="Use antivirus"
                                  style={tipIconImage}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <Text style={tipTitle}>USE</Text>
                        <Text style={tipTitle}>ANTIVIRUS</Text>
                        <Text style={tipDescription} className="mobile-text">
                          Keep antivirus software updated with real-time scanning and threat detection enabled.
                        </Text>
                      </div>
                    </Column>
                  </Row>
                  <Row style={tipsRow}>
                    <Column style={tipColumn}>
                      <div style={tipCard}>
                        <table style={tipIconTable}>
                          <tbody>
                            <tr>
                              <td style={tipIconCell}>
                                <Img
                                  src="https://cdn.templates.unlayer.com/assets/1658741821367-4.png"
                                  alt="Backup files"
                                  style={tipIconImage}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <Text style={tipTitle}>BACKUP</Text>
                        <Text style={tipTitle}>FILE</Text>
                        <Text style={tipDescription} className="mobile-text">
                          Maintain regular, automated backups stored offline or in secure cloud storage.
                        </Text>
                      </div>
                    </Column>
                    <Column style={tipColumn}>
                      <div style={tipCard}>
                        <table style={tipIconTable}>
                          <tbody>
                            <tr>
                              <td style={tipIconCell}>
                                <Img
                                  src="https://cdn.templates.unlayer.com/assets/1658741823380-5.png"
                                  alt="Update operating system"
                                  style={tipIconImage}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <Text style={tipTitle}>UPDATE OPERATING</Text>
                        <Text style={tipTitle}>SYSTEM</Text>
                        <Text style={tipDescription} className="mobile-text">
                          Install security patches immediately and enable automatic updates when possible.
                        </Text>
                      </div>
                    </Column>
                    <Column style={tipColumn}>
                      <div style={tipCard}>
                        <table style={tipIconTable}>
                          <tbody>
                            <tr>
                              <td style={tipIconCell}>
                                <Img
                                  src="https://cdn.templates.unlayer.com/assets/1658741827304-6.png"
                                  alt="Use secure network"
                                  style={tipIconImage}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <Text style={tipTitle}>USE A SECURE</Text>
                        <Text style={tipTitle}>NETWORK</Text>
                        <Text style={tipDescription} className="mobile-text">
                          Avoid public Wi-Fi for sensitive activities. Use VPN for secure connections.
                        </Text>
                      </div>
                    </Column>
                  </Row>
                </div>

                {/* Mobile Tips Stack */}
                <div style={mobileTipsContainer}>
                  <div style={mobileTipCard} className="mobile-tip-card">
                    <table style={mobileTipIconTable}>
                      <tbody>
                        <tr>
                          <td style={mobileTipIconCell}>
                            <Img
                              src="https://img.freepik.com/free-photo/side-view-hands-pressing-buzzer_23-2149943819.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740"
                              alt="Don't click suspicious links"
                              style={tipIconImage}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Text style={tipTitle}>DON'T CLICK SUSPICIOUS LINK</Text>
                    <Text style={tipDescription} className="mobile-text">
                      Verify sender identity before clicking any links. Hover over links to check destinations.
                    </Text>
                  </div>

                  <div style={mobileTipCard} className="mobile-tip-card">
                    <table style={mobileTipIconTable}>
                      <tbody>
                        <tr>
                          <td style={mobileTipIconCell}>
                            <Img
                              src="https://img.freepik.com/free-photo/hacker-cracking-binary-code-data-security_53876-97922.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740"
                              alt="Install firewall"
                              style={tipIconImage}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Text style={tipTitle}>INSTALL FIREWALL</Text>
                    <Text style={tipDescription} className="mobile-text">
                      Configure a robust firewall to block unauthorized access and malicious traffic.
                    </Text>
                  </div>

                  <div style={mobileTipCard} className="mobile-tip-card">
                    <table style={mobileTipIconTable}>
                      <tbody>
                        <tr>
                          <td style={mobileTipIconCell}>
                            <Img src="https://img.freepik.com/free-photo/security-protection-hologram_53876-98099.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740" alt="Use antivirus" style={tipIconImage} />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Text style={tipTitle}>USE ANTIVIRUS</Text>
                    <Text style={tipDescription} className="mobile-text">
                      Keep antivirus software updated with real-time scanning and threat detection enabled.
                    </Text>
                  </div>

                  <div style={mobileTipCard} className="mobile-tip-card">
                    <table style={mobileTipIconTable}>
                      <tbody>
                        <tr>
                          <td style={mobileTipIconCell}>
                            <Img src="https://img.freepik.com/free-photo/cloud-drawer_1048-1659.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740" alt="Backup files" style={tipIconImage} />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Text style={tipTitle}>BACKUP FILE</Text>
                    <Text style={tipDescription} className="mobile-text">
                      Maintain regular, automated backups stored offline or in secure cloud storage.
                    </Text>
                  </div>

                  <div style={mobileTipCard} className="mobile-tip-card">
                    <table style={mobileTipIconTable}>
                      <tbody>
                        <tr>
                          <td style={mobileTipIconCell}>
                            <Img
                              src="https://img.freepik.com/free-photo/reload-reset-technology-update-digital_53876-120151.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740"
                              alt="Update operating system"
                              style={tipIconImage}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Text style={tipTitle}>UPDATE OPERATING SYSTEM</Text>
                    <Text style={tipDescription} className="mobile-text">
                      Install security patches immediately and enable automatic updates when possible.
                    </Text>
                  </div>

                  <div style={mobileTipCard} className="mobile-tip-card">
                    <table style={mobileTipIconTable}>
                      <tbody>
                        <tr>
                          <td style={mobileTipIconCell}>
                            <Img
                              src="https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595831.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740"
                              alt="Use secure network"
                              style={tipIconImage}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Text style={tipTitle}>USE A SECURE NETWORK</Text>
                    <Text style={tipDescription} className="mobile-text">
                      Avoid public Wi-Fi for sensitive activities. Use VPN for secure connections.
                    </Text>
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Warning Signs Section */}
          <Section style={warningSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Heading style={warningHeading} className="mobile-heading">
                  ⚠️ Warning Signs of Ransomware
                </Heading>
                <Text style={warningSubtext} className="mobile-text">
                  Recognize these red flags before it's too late
                </Text>

                <div style={warningContainer}>
                  <div style={warningItem}>
                    <Row>
                      <Column style={warningIconColumn}>
                        <Img
                          src="https://cdn.templates.unlayer.com/assets/1658741566191-1.png"
                          alt="Slow performance warning"
                          style={warningIcon}
                        />
                      </Column>
                      <Column style={warningContentColumn}>
                        <Text style={warningItemTitle}>Unusually Slow System Performance</Text>
                        <Text style={warningItemText} className="mobile-text">
                          Your computer suddenly becomes sluggish or unresponsive
                        </Text>
                      </Column>
                    </Row>
                  </div>

                  <div style={warningItem}>
                    <Row>
                      <Column style={warningIconColumn}>
                        <Img
                          src="https://cdn.templates.unlayer.com/assets/1658741566191-1.png"
                          alt="File extension warning"
                          style={warningIcon}
                        />
                      </Column>
                      <Column style={warningContentColumn}>
                        <Text style={warningItemTitle}>Strange File Extensions</Text>
                        <Text style={warningItemText} className="mobile-text">
                          Files have unusual extensions like .encrypted, .locked, or random characters
                        </Text>
                      </Column>
                    </Row>
                  </div>

                  <div style={warningItem}>
                    <Row>
                      <Column style={warningIconColumn}>
                        <Img src="https://cdn.templates.unlayer.com/assets/1658741566191-1.png" alt="Popup warning" style={warningIcon} />
                      </Column>
                      <Column style={warningContentColumn}>
                        <Text style={warningItemTitle}>Suspicious Pop-ups or Messages</Text>
                        <Text style={warningItemText} className="mobile-text">
                          Unexpected messages demanding payment or threatening data deletion
                        </Text>
                      </Column>
                    </Row>
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Action Plan Section */}
          <Section style={actionSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Heading style={actionHeading} className="mobile-heading">
                  If You're Already Infected
                </Heading>
                <Text style={actionSubtext} className="mobile-text">
                  Take these immediate steps to minimize damage
                </Text>

                <div style={actionStepsContainer}>
                  <div style={actionStep}>
                    <div style={stepNumber}>1</div>
                    <div style={stepContent}>
                      <Text style={stepTitle}>Disconnect Immediately</Text>
                      <Text style={stepDescription} className="mobile-text">
                        Unplug from internet and network to prevent spread
                      </Text>
                    </div>
                  </div>

                  <div style={actionStep}>
                    <div style={stepNumber}>2</div>
                    <div style={stepContent}>
                      <Text style={stepTitle}>Don't Pay the Ransom</Text>
                      <Text style={stepDescription} className="mobile-text">
                        Payment doesn't guarantee data recovery and funds criminal activity
                      </Text>
                    </div>
                  </div>

                  <div style={actionStep}>
                    <div style={stepNumber}>3</div>
                    <div style={stepContent}>
                      <Text style={stepTitle}>Contact IT Security</Text>
                      <Text style={stepDescription} className="mobile-text">
                        Reach out to cybersecurity professionals immediately
                      </Text>
                    </div>
                  </div>

                  <div style={actionStep}>
                    <div style={stepNumber}>4</div>
                    <div style={stepContent}>
                      <Text style={stepTitle}>Report the Incident</Text>
                      <Text style={stepDescription} className="mobile-text">
                        Notify law enforcement and relevant authorities
                      </Text>
                    </div>
                  </div>
                </div>

                <div style={emergencyButtonContainer}>
                  <Link href="#" style={emergencyButton} className="mobile-full-width">
                    🚨 Get Emergency Help Now
                  </Link>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Resources Section */}
          <Section style={resourcesSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Heading style={resourcesHeading} className="mobile-heading">
                  Additional Security Resources
                </Heading>

                <div style={resourcesGrid}>
                  <div style={resourceCard}>
                    <Img src="https://img.freepik.com/free-photo/portrait-male-security-guard-with-radio-station-camera-screens_23-2150368714.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740" alt="Security training" style={resourceImage} />
                    <Text style={resourceTitle}>Security Training</Text>
                    <Text style={resourceDescription} className="mobile-text">
                      Free cybersecurity awareness courses for your team
                    </Text>
                    <Link href="#" style={resourceButton}>
                      Start Training
                    </Link>
                  </div>

                  <div style={resourceCard}>
                    <Img src="https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595831.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740" alt="Security assessment" style={resourceImage} />
                    <Text style={resourceTitle}>Security Assessment</Text>
                    <Text style={resourceDescription} className="mobile-text">
                      Evaluate your current security posture and vulnerabilities
                    </Text>
                    <Link href="#" style={resourceButton}>
                      Get Assessment
                    </Link>
                  </div>

                  <div style={resourceCard}>
                    <Img src="https://img.freepik.com/free-photo/side-view-man-taking-notes-ambulance-car_23-2149478462.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740" alt="Incident response" style={resourceImage} />
                    <Text style={resourceTitle}>Incident Response</Text>
                    <Text style={resourceDescription} className="mobile-text">
                      24/7 emergency response team for security incidents
                    </Text>
                    <Link href="#" style={resourceButton}>
                      Contact Team
                    </Link>
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Footer Section */}
          <Section style={footerSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <div style={footerDivider}></div>

                {/* Social Media Icons */}
                <div style={socialContainer}>
                  <Link href="https://www.facebook.com" style={socialLink} className="mobile-social-icon">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                      alt="Facebook"
                      width="32"
                      height="32"
                      style={socialIcon}
                    />
                  </Link>
                  <Link href="https://www.twitter.com" style={socialLink} className="mobile-social-icon">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                      alt="Twitter"
                      width="32"
                      height="32"
                      style={socialIcon}
                    />
                  </Link>
                  <Link href="https://www.linkedin.com" style={socialLink} className="mobile-social-icon">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                      alt="LinkedIn"
                      width="32"
                      height="32"
                      style={socialIcon}
                    />
                  </Link>
                  <Link href="https://www.instagram.com" style={socialLink} className="mobile-social-icon">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                      alt="Instagram"
                      width="32"
                      height="32"
                      style={socialIcon}
                    />
                  </Link>
                </div>

                <Text style={addressText} className="mobile-text">
                  2261 Market Street #4667 San Francisco, CA 94114
                </Text>
                <Text style={rightsText} className="mobile-text">
                  All rights reserved - Company Pty 94114
                </Text>
                <Text style={footerLinks} className="mobile-text">
                  <Link href="#" style={footerLink}>
                    Preferences
                  </Link>{" "}
                  |{" "}
                  <Link href="#" style={footerLink}>
                    Unsubscribe
                  </Link>{" "}
                  |{" "}
                  <Link href="#" style={footerLink}>
                    View in browser
                  </Link>
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
)

export default RansomwarePrevention

// Styles
const main = {
  backgroundColor: "#1a1a1a",
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  margin: "0",
  padding: "0",
  lineHeight: "1.6",
}

const container = {
  margin: "0 auto",
  width: "100%",
  maxWidth: "700px",
  backgroundColor: "#1a1a1a",
}

// Header Styles
const headerSection = {
  backgroundColor: "#1a1a1a",
  padding: "20px 40px",
  borderBottom: "1px solid #333333",
}

const logoColumn = {
  width: "200px",
  verticalAlign: "middle" as const,
}

const logoText = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "400",
  margin: "0",
}

const navColumn = {
  verticalAlign: "middle" as const,
}

const navContainer = {
  textAlign: "right" as const,
}

const navLink = {
  color: "#cccccc",
  fontSize: "14px",
  fontWeight: "400",
  textDecoration: "none",
  margin: "0 15px",
  display: "inline-block",
}

// Hero Section Styles
const heroSection = {
  backgroundColor: "#1a1a1a",
  padding: "40px 40px 20px",
  textAlign: "center" as const,
}

const heroImageContainer = {
  textAlign: "center" as const,
}

const heroImage = {
  width: "100%",
  maxWidth: "400px",
  height: "300px",
  objectFit: "contain" as const,
  display: "block",
  margin: "0 auto",
}

// Content Section Styles
const contentSection = {
  backgroundColor: "#1a1a1a",
  padding: "20px 40px 40px",
  textAlign: "center" as const,
}

const sectionLabel = {
  color: "#cccccc",
  fontSize: "16px",
  fontWeight: "400",
  margin: "0 0 8px",
  textAlign: "center" as const,
}

const mainHeading = {
  color: "#ffffff",
  fontSize: "32px",
  fontWeight: "700",
  lineHeight: "1.2",
  margin: "0 0 20px",
  textAlign: "center" as const,
  letterSpacing: "2px",
}

const descriptionText = {
  color: "#cccccc",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0 0 30px",
  textAlign: "center" as const,
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto",
}

const dividerLine = {
  width: "60px",
  height: "2px",
  backgroundColor: "#ffffff",
  margin: "0 auto",
}

// Stats Section Styles
const statsSection = {
  backgroundColor: "#2a2a2a",
  padding: "50px 40px",
  textAlign: "center" as const,
}

const statsHeading = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "700",
  margin: "0 0 12px",
  textAlign: "center" as const,
}

const statsSubtext = {
  color: "#cccccc",
  fontSize: "16px",
  margin: "0 0 40px",
  textAlign: "center" as const,
}

const statColumn = {
  textAlign: "center" as const,
  padding: "0 15px",
}

const statCard = {
  backgroundColor: "#dc2626",
  padding: "30px 20px",
  borderRadius: "8px",
  textAlign: "center" as const,
  border: "2px solid #b91c1c",
}

const statNumber = {
  color: "#ffffff",
  fontSize: "32px",
  fontWeight: "700",
  margin: "0 0 8px",
  textAlign: "center" as const,
}

const statLabel = {
  color: "#fecaca",
  fontSize: "14px",
  margin: "0",
  textAlign: "center" as const,
}

// Mobile Stats Styles
const mobileStatsContainer = {
  display: "none",
}

const mobileStatItem = {
  backgroundColor: "#dc2626",
  padding: "25px 20px",
  borderRadius: "8px",
  margin: "0 0 16px",
  textAlign: "center" as const,
  border: "2px solid #b91c1c",
}

// Tips Section Styles
const tipsSection = {
  backgroundColor: "#1a1a1a",
  padding: "50px 40px",
}

const tipsHeading = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 12px",
}

const tipsSubtext = {
  color: "#cccccc",
  fontSize: "16px",
  textAlign: "center" as const,
  margin: "0 0 40px",
}

const tipsRow = {
  margin: "0 0 30px",
}

const tipColumn = {
  padding: "0 15px",
}

const tipCard = {
  textAlign: "center" as const,
  padding: "20px 10px",
}

// Email-compatible icon centering using tables
const tipIconTable = {
  width: "80px",
  height: "80px",
  margin: "0 auto 20px",
  borderCollapse: "collapse" as const,
}

const tipIconCell = {
  width: "80px",
  height: "80px",
  backgroundColor: "#2563eb",
  borderRadius: "50%",
  border: "3px solid #1e40af",
  textAlign: "center" as const,
  verticalAlign: "middle" as const,
}

const tipIconImage = {
  width: "40px",
  height: "40px",
  display: "block",
  margin: "0 auto",
  objectFit: "contain" as const,
}

const tipTitle = {
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0 0 4px",
  textAlign: "center" as const,
  lineHeight: "1.2",
}

const tipDescription = {
  color: "#cccccc",
  fontSize: "12px",
  margin: "12px 0 0",
  textAlign: "center" as const,
  lineHeight: "1.4",
}

// Mobile Tips Styles
const mobileTipsContainer = {
  display: "none",
}

const mobileTipCard = {
  textAlign: "center" as const,
  padding: "20px",
  margin: "0 0 20px",
  backgroundColor: "#2a2a2a",
  borderRadius: "8px",
}

const mobileTipIconTable = {
  width: "60px",
  height: "60px",
  margin: "0 auto 16px",
  borderCollapse: "collapse" as const,
}

const mobileTipIconCell = {
  width: "60px",
  height: "60px",
  backgroundColor: "#2563eb",
  borderRadius: "50%",
  border: "3px solid #1e40af",
  textAlign: "center" as const,
  verticalAlign: "middle" as const,
}

// Warning Section Styles
const warningSection = {
  backgroundColor: "#dc2626",
  padding: "50px 40px",
}

const warningHeading = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 12px",
}

const warningSubtext = {
  color: "#fecaca",
  fontSize: "16px",
  textAlign: "center" as const,
  margin: "0 0 40px",
}

const warningContainer = {
  maxWidth: "500px",
  margin: "0 auto",
}

const warningItem = {
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  padding: "20px",
  borderRadius: "8px",
  margin: "0 0 16px",
  border: "1px solid rgba(255, 255, 255, 0.2)",
}

const warningIconColumn = {
  width: "40px",
  padding: "0 12px 0 0",
  verticalAlign: "top" as const,
}

const warningContentColumn = {
  verticalAlign: "top" as const,
}

const warningIcon = {
  width: "30px",
  height: "30px",
  display: "block",
  objectFit: "contain" as const,
}

const warningItemTitle = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0 0 8px",
}

const warningItemText = {
  color: "#fecaca",
  fontSize: "14px",
  margin: "0",
  lineHeight: "1.4",
}

// Action Section Styles
const actionSection = {
  backgroundColor: "#2a2a2a",
  padding: "50px 40px",
}

const actionHeading = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 12px",
}

const actionSubtext = {
  color: "#cccccc",
  fontSize: "16px",
  textAlign: "center" as const,
  margin: "0 0 40px",
}

const actionStepsContainer = {
  maxWidth: "500px",
  margin: "0 auto 40px",
}

const actionStep = {
  display: "flex",
  alignItems: "flex-start",
  margin: "0 0 24px",
  padding: "20px",
  backgroundColor: "#3a3a3a",
  borderRadius: "8px",
  border: "1px solid #4a4a4a",
}

const stepNumber = {
  backgroundColor: "#dc2626",
  color: "#ffffff",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  fontWeight: "700",
  marginRight: "16px",
  minWidth: "32px",
  textAlign: "center" as const,
  lineHeight: "32px",
}

const stepContent = {
  flex: "1",
}

const stepTitle = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0 0 8px",
}

const stepDescription = {
  color: "#cccccc",
  fontSize: "14px",
  margin: "0",
  lineHeight: "1.4",
}

const emergencyButtonContainer = {
  textAlign: "center" as const,
}

const emergencyButton = {
  backgroundColor: "#dc2626",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "16px 32px",
  borderRadius: "8px",
  display: "inline-block",
  textAlign: "center" as const,
  boxShadow: "0 4px 12px rgba(220, 38, 38, 0.3)",
}

// Resources Section Styles
const resourcesSection = {
  backgroundColor: "#1a1a1a",
  padding: "50px 40px",
}

const resourcesHeading = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 40px",
}

const resourcesGrid = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "20px",
  justifyContent: "center",
  maxWidth: "600px",
  margin: "0 auto",
}

const resourceCard = {
  backgroundColor: "#2a2a2a",
  padding: "30px 20px",
  borderRadius: "8px",
  textAlign: "center" as const,
  border: "1px solid #3a3a3a",
  flex: "1",
  minWidth: "150px",
  maxWidth: "180px",
}

const resourceImage = {
  width: "80px",
  height: "80px",
  display: "block",
  margin: "0 auto 16px",
  objectFit: "contain" as const,
    borderRadius: "50%",
}

const resourceTitle = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0 0 12px",
  textAlign: "center" as const,
}

const resourceDescription = {
  color: "#cccccc",
  fontSize: "12px",
  margin: "0 0 20px",
  textAlign: "center" as const,
  lineHeight: "1.4",
}

const resourceButton = {
  backgroundColor: "#2563eb",
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "10px 16px",
  borderRadius: "6px",
  display: "inline-block",
  textAlign: "center" as const,
}

// Footer Styles
const footerSection = {
  backgroundColor: "#1a1a1a",
  padding: "40px",
  textAlign: "center" as const,
}

const footerDivider = {
  width: "60px",
  height: "2px",
  backgroundColor: "#ffffff",
  margin: "0 auto 30px",
}

const socialContainer = {
  textAlign: "center" as const,
  margin: "0 0 25px",
}

const socialLink = {
  display: "inline-block",
  margin: "0 8px",
}

const socialIcon = {
  display: "block",
}

const addressText = {
  color: "#cccccc",
  fontSize: "12px",
  margin: "0 0 5px",
  textAlign: "center" as const,
}

const rightsText = {
  color: "#cccccc",
  fontSize: "12px",
  margin: "0 0 15px",
  textAlign: "center" as const,
}

const footerLinks = {
  color: "#cccccc",
  fontSize: "12px",
  margin: "0",
  textAlign: "center" as const,
}

const footerLink = {
  color: "#cccccc",
  textDecoration: "underline",
}
