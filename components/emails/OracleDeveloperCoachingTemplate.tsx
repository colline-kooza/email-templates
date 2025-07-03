import { Body, Container, Column, Head, Html, Img, Link, Preview, Row, Section, Text } from "@react-email/components"

export const OracleDeveloperCoachingTemplate = () => {
  return (
    <Html>
      <Preview>Live Developer Coaching - Oracle Access Governance - June 25, 2025</Preview>
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
              
              .mobile-hide {
                display: none !important;
              }
              
              .mobile-hero-title {
                font-size: 28px !important;
                line-height: 1.2 !important;
              }
              
              .mobile-main-title {
                font-size: 22px !important;
                line-height: 1.3 !important;
              }
              
              .mobile-event-details {
                font-size: 14px !important;
                line-height: 1.4 !important;
              }
              
              .mobile-description-text {
                font-size: 14px !important;
                line-height: 1.5 !important;
              }
              
              .mobile-button {
                font-size: 14px !important;
                padding: 12px 24px !important;
                display: block !important;
                margin: 20px auto !important;
                width: auto !important;
              }
              
              .mobile-speaker-card {
                width: 100% !important;
                margin-bottom: 20px !important;
                text-align: center !important;
              }
              
              .mobile-speaker-image {
                width: 80px !important;
                height: 80px !important;
                margin: 0 auto 10px auto !important;
              }
              
              .mobile-oracle-logo {
                width: 120px !important;
                height: auto !important;
                margin: 20px auto !important;
              }
              
              .mobile-social-icons {
                margin: 0 8px !important;
              }
              
              .mobile-footer-text {
                font-size: 11px !important;
                line-height: 1.4 !important;
              }
              
              .mobile-section-padding {
                padding: 20px 15px !important;
              }
              
              .mobile-hero-content {
                padding: 25px 15px !important;
              }
              
              .mobile-decorative-hide {
                display: none !important;
              }
            }
          `}
        </style>
      </Head>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* View in Browser Link */}
          <Section style={viewBrowserSectionStyle}>
            <Text style={viewBrowserTextStyle}>
              <Link href="#" style={viewBrowserLinkStyle}>
                View this message in a Web browser
              </Link>
            </Text>
          </Section>

          {/* Header Section */}
          <Section style={headerSectionStyle}>
            <Row>
              <Column style={headerLogoColumnStyle}>
                <Img src="https://ci3.googleusercontent.com/meips/ADKq_NaKn8VKTOA_7N7NeJQ73Rd5_Axr6PDCHJA0GNjm4red_a4nRf5zqYSimrGkgj5EarzhVV5B4prFIqniYENcWQqT9hOMZR4PXxq9J_wxUJfy4-ohxzhSf-NzBc_bzA0ZNAta-vOLYJ7VKDpdv51GUqM3yWO4VFtbQWcNJEhUyuHaoLy5=s0-d-e1-ft#https://www.oracle.com/oce/dc/assets/CONT01489EC078214170985966B7D8E5C11D/native/tb-oracle-white-123x16px.png" alt="Oracle" style={headerLogoStyle} />
              </Column>
            </Row>
          </Section>

          {/* Hero Section */}
          <Section style={heroSectionStyle} className="mobile-hero-content">
            <Text style={heroTitleStyle} className="mobile-hero-title">
              Live Developer Coaching
            </Text>
          </Section>

          {/* Main Content Section */}
          <Section style={mainContentSectionStyle} className="mobile-section-padding">
            <Row>
              <Column style={contentLeftColumnStyle} className="mobile-stack">
                <Text style={mainTitleStyle} className="mobile-main-title">
                  Smarter Integrations with Oracle Access Governance
                </Text>

                <Text style={eventDateStyle} className="mobile-event-details">
                  Wednesday, 25 June 2025
                </Text>

                <Text style={eventTimeStyle} className="mobile-event-details">
                  10:00 AM (BST) | 11:00 AM (CEST) | 1:00 PM (GST)
                </Text>

                <Link href="#" style={registerButtonStyle} className="mobile-button">
                  Register now
                </Link>
              </Column>
          
            </Row>
          </Section>

          {/* Description Section */}
          <Section style={descriptionSectionStyle} className="mobile-section-padding">
            <Text style={descriptionTextStyle} className="mobile-description-text">
              Oracle Access Governance is a cloud-native solution that helps meet access governance and compliance
              requirements across many applications, workloads, infrastructures, and identity platforms. It continuously
              discovers identities, monitors their privileges, learns usage patterns, and automates access review and
              compliance processes with prescriptive recommendations to provide greater visibility into access across an
              organization's entire cloud and on-premises environment. Access Governance simplifies certification
              campaigns for compliance and intelligently suggests actions to reduce risk across the organization.
            </Text>

            <Text style={descriptionTextStyle} className="mobile-description-text">
              Join to learn more about practical use cases of Oracle Access Governance cloud service, where we will demo
              the integrations and capabilities of Oracle Access Governance and how it addresses the key challenges and
              business requirements. This Developer Coaching session is designed to walk you through each use case
              scenario and integrations with a solution architecture, workflow and a live demo.
            </Text>

            <Text style={descriptionTextStyle} className="mobile-description-text">
              Through a live demo, you'll learn how to effectively govern identity access, gain greater visibility
              across your cloud and on-premises environments to automate access provisioning to users.
            </Text>

            <Text style={durationTextStyle} className="mobile-description-text">
              <strong>Duration: 1h</strong>
            </Text>
          </Section>

          {/* Event Details CTA Section */}
          <Section style={eventCtaSectionStyle} className="mobile-section-padding">
            <Row>
              <Column style={eventDetailsColumnStyle} className="mobile-stack mobile-center">
                <Text style={eventDetailsTextStyle} className="mobile-event-details">
                  Wednesday, 25 June 2025
                  <br />
                  10:00 AM (BST) | 11:00 AM (CEST) |<br />
                  1:00 PM (GST)
                </Text>
              </Column>
              <Column style={eventCtaColumnStyle} className="mobile-stack mobile-center">
                <Link href="#" style={registerButtonGreenStyle} className="mobile-button">
                  Register
                </Link>
              </Column>
            </Row>
          </Section>

          {/* Featured Speakers Section */}
          <Section style={speakersSectionStyle} className="mobile-section-padding">
            <Text style={speakersTitleStyle}>Featured Speakers</Text>

            <Row>
              <Column style={speakerColumnStyle} className="mobile-speaker-card">
                <Img
                  src="https://ci3.googleusercontent.com/meips/ADKq_Nb_OD_1v5rIl8boXllGOoJiQSAK4ot-YYgv6jmuPtrfEPBoGKmq_qzz44qnQWofJOl4Sg7GiJzOMsBGaPmoVnEaWABHfUlTco7hh5nIEIvutwy4Sx1zjdylhQ=s0-d-e1-ft#https://www.oracle.com/webfolder/dms/prod/i1/Sandeep-Khedekar-v1.jpg"
                  alt="Sandeep Khedekar"
                  style={speakerImageStyle}
                  className="mobile-speaker-image"
                />
                <Text style={speakerNameStyle}>
                  Sandeep
                  <br />
                  Khedekar
                </Text>
                <Text style={speakerTitleTextStyle}>Identity and Access Management Specialist</Text>
              </Column>
              <Column style={speakerColumnStyle} className="mobile-speaker-card">
                <Img
                  src="https://ci3.googleusercontent.com/meips/ADKq_NblvNXeba98EdnwmlzH7kBmHyRSRri4EBo8c6SKZ1-pUd6b9arsN1H7ODn6mtYVQuRLFj1JvP8Gnhm37-P6yVB8Mtk3SqEj8hyqFoIgFhivXfcYBw=s0-d-e1-ft#https://www.oracle.com/webfolder/dms/prod/i1/Mihai-Gere-v1.jpg"
                  alt="Mihai Gere"
                  style={speakerImageStyle}
                  className="mobile-speaker-image"
                />
                <Text style={speakerNameStyle}>
                  Mihai
                  <br />
                  Gere
                </Text>
                <Text style={speakerTitleTextStyle}>Identity and Access Management Specialist</Text>
              </Column>
            </Row>
          </Section>

          {/* Ethics Section */}
          <Section style={ethicsSectionStyle} className="mobile-section-padding">
            <Text style={ethicsTextStyle} className="mobile-footer-text">
              Oracle is committed to promoting a corporate culture that is centered on integrity, accountability and
              ethical business conduct. Please{" "}
              <Link href="#" style={ethicsLinkStyle}>
                click here
              </Link>{" "}
              for important ethics information regarding this activity.
            </Text>
          </Section>

          {/* Stay Connected Section */}
          <Section style={socialSectionStyle} className="mobile-section-padding">
            <Text style={socialTitleStyle}>Stay Connected</Text>

            <Row style={socialRowStyle}>
              <Column style={socialColumnStyle} className="mobile-center">
                <Link href="#" style={socialLinkStyle} className="mobile-social-icons">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle/facebook.png"
                    alt="Facebook"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle} className="mobile-social-icons">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png"
                    alt="LinkedIn"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle} className="mobile-social-icons">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png"
                    alt="Twitter"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle} className="mobile-social-icons">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle/youtube.png"
                    alt="YouTube"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle} className="mobile-social-icons">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                    alt="Instagram"
                    style={socialIconStyle}
                  />
                </Link>
              </Column>
            </Row>
          </Section>

          {/* Footer Section */}
          <Section style={footerSectionStyle} className="mobile-section-padding">
            <Text style={footerTextStyle} className="mobile-footer-text">
              Terms of Use and Privacy | Subscriptions | Unsubscribe | Contact Us
            </Text>

            <Text style={copyrightTextStyle} className="mobile-footer-text">
              Copyright © 2025, Oracle and/or its affiliates. All rights reserved. Oracle Corporation - Worldwide
              Headquarters: 2300 Oracle Way, Austin, TX 78741, United States
            </Text>

            {/* Oracle Footer Logo */}
            <div style={footerLogoContainerStyle}>
              <Img src="https://ci3.googleusercontent.com/meips/ADKq_Nba1NGQZNpcY3apfQm4VIHhPc1Jd7DPVHFpS_EUO0hqJ6Lpfsi7JEWcGuqS6id17i9Md3nq8xFqxlvbBZuruc5P_X4bNcwYtbW7yMTcpYTIb1ZDzIthudKwoCb0dc51RscpP45vs7fmt_JDAlRm7FHkpyD257jj=s0-d-e1-ft#https://www.oracle.com/oce/dc/assets/CONTB612491B53E6487EB059715A421DE70F/native/tb-o-red-tag.png" alt="Oracle" style={footerLogoStyle} />
            </div>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default OracleDeveloperCoachingTemplate

// Comprehensive Email-Safe Styles
const bodyStyle = {
  fontFamily: "'DM Sans', Arial, sans-serif",
  backgroundColor: "#ffffff",
  margin: "0",
  padding: "0",
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
}

const viewBrowserSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "10px 20px",
  textAlign: "center" as const,
  borderBottom: "1px solid #e5e7eb",
}

const viewBrowserTextStyle = {
  fontSize: "12px",
  color: "#6b7280",
  margin: "0",
}

const viewBrowserLinkStyle = {
  color: "#1d4ed8",
  textDecoration: "underline",
}

const headerSectionStyle = {
  backgroundColor: "#6b5b73",
  padding: "20px 30px",
}

const headerLogoColumnStyle = {
  width: "100%",
}

const headerLogoStyle = {
  width: "120px",
  height: "auto",
  display: "block",
}

const heroSectionStyle = {
  backgroundColor: "#b8d4d1",
  padding: "40px 30px",
  textAlign: "center" as const,
}

const heroTitleStyle = {
  fontSize: "28px",
  fontWeight: "400",
  color: "#374151",
  margin: "0",
  lineHeight: "1.2",
}

const mainContentSectionStyle = {
  backgroundColor: "#e5e7eb",
  padding: "40px 20px",
  position: "relative" as const,
}

const contentLeftColumnStyle = {
  width: "100%",
  verticalAlign: "top" as const,
  paddingRight: "20px",
}

const contentRightColumnStyle = {
  width: "40%",
  verticalAlign: "middle" as const,
  textAlign: "center" as const,
}

const mainTitleStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#374151",
  margin: "0 0 25px 0",
  lineHeight: "1.3",
}

const eventDateStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#374151",
  margin: "0 0 10px 0",
}

const eventTimeStyle = {
  fontSize: "16px",
  fontWeight: "400",
  color: "#374151",
  margin: "0 0 25px 0",
}

const registerButtonStyle = {
  backgroundColor: "#000000",
  color: "#ffffff",
  padding: "14px 23px",
  borderRadius: "6px",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "600",
  display: "inline-block",
  border: "none",
}

const oracleLogoContainerStyle = {
  position: "relative" as const,
  textAlign: "center" as const,
}

const oracleLogoImageStyle = {
  width: "180px",
  height: "auto",
  display: "block",
  margin: "0 auto",
}

const decorativeStarStyle = {
  position: "absolute" as const,
  top: "20px",
  right: "20px",
  fontSize: "24px",
  color: "#f59e0b",
}

const decorativeShapeStyle = {
  position: "absolute" as const,
  bottom: "0",
  right: "0",
  width: "60px",
  height: "60px",
  backgroundColor: "#ef4444",
  borderRadius: "50% 0 0 50%",
}

const descriptionSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "40px 30px",
}

const descriptionTextStyle = {
  fontSize: "16px",
  color: "#374151",
  margin: "0 0 20px 0",
  lineHeight: "1.6",
  textAlign: "justify" as const,
}

const durationTextStyle = {
  fontSize: "16px",
  color: "#374151",
  margin: "20px 0 0 0",
}

const eventCtaSectionStyle = {
  backgroundColor: "#f3f4f6",
  padding: "30px 10px",
}

const eventDetailsColumnStyle = {
  width: "60%",
  verticalAlign: "middle" as const,
}

const eventCtaColumnStyle = {
  width: "40%",
  verticalAlign: "middle" as const,
  textAlign: "center" as const,
}

const eventDetailsTextStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#374151",
  margin: "0",
  lineHeight: "1.4",
}

const registerButtonGreenStyle = {
  backgroundColor: "#059669",
  color: "#ffffff",
  padding: "14px 28px",
  borderRadius: "6px",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "600",
  display: "inline-block",
  border: "none",
}

const speakersSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "40px 30px",
}

const speakersTitleStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#374151",
  margin: "0 0 30px 0",
  textAlign: "left" as const,
}

const speakerColumnStyle = {
  width: "50%",
  verticalAlign: "top" as const,
  paddingRight: "15px",
  textAlign: "left" as const,
}

const speakerImageStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  display: "block",
  marginBottom: "15px",
}

const speakerNameStyle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#374151",
  margin: "0 0 8px 0",
  lineHeight: "1.3",
}

const speakerTitleTextStyle = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0",
  lineHeight: "1.4",
}

const ethicsSectionStyle = {
  backgroundColor: "#e5e7eb",
  padding: "25px 30px",
}

const ethicsTextStyle = {
  fontSize: "13px",
  color: "#374151",
  margin: "0",
  lineHeight: "1.5",
  textAlign: "center" as const,
}

const ethicsLinkStyle = {
  color: "#1d4ed8",
  textDecoration: "underline",
}

const socialSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "30px 30px 20px 30px",
  textAlign: "center" as const,
}

const socialTitleStyle = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#374151",
  margin: "0 0 20px 0",
}

const socialRowStyle = {
  marginBottom: "0",
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
  width: "32px",
  height: "32px",
  borderRadius: "50%",
}

const footerSectionStyle = {
  backgroundColor: "#374151",
  padding: "25px 30px",
  textAlign: "center" as const,
}

const footerTextStyle = {
  fontSize: "12px",
  color: "#d1d5db",
  margin: "0 0 15px 0",
  lineHeight: "1.4",
}

const copyrightTextStyle = {
  fontSize: "11px",
  color: "#9ca3af",
  margin: "0 0 20px 0",
  lineHeight: "1.4",
}

const footerLogoContainerStyle = {
  textAlign: "center" as const,
}

const footerLogoStyle = {
  width: "80px",
  height: "auto",
  display: "inline-block",
}
