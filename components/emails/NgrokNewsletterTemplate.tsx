import { Body, Container, Column, Head, Html, Img, Link, Preview, Row, Section, Text } from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

export const NgrokNewsletterTemplate = () => {
  return (
    <Html>
      <Preview>ngrok Newsletter - Product Updates, New Resources & Developer Roundtable</Preview>
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
              
              .mobile-logo-title {
                font-size: 32px !important;
                line-height: 1.2 !important;
              }
              
              .mobile-logo-subtitle {
                font-size: 16px !important;
              }
              
              .mobile-section-title {
                font-size: 20px !important;
                line-height: 1.3 !important;
              }
              
              .mobile-feature-card {
                width: 100% !important;
                margin-bottom: 20px !important;
                padding: 15px !important;
              }
              
              .mobile-feature-icon {
                width: 50px !important;
                height: 50px !important;
                margin-bottom: 15px !important;
              }
              
              .mobile-feature-title {
                font-size: 16px !important;
                line-height: 1.3 !important;
              }
              
              .mobile-feature-text {
                font-size: 13px !important;
                line-height: 1.4 !important;
              }
              
              .mobile-resource-card {
                width: 100% !important;
                margin-bottom: 20px !important;
              }
              
              .mobile-resource-image {
                width: 100% !important;
                max-width: 200px !important;
                height: auto !important;
                margin: 0 auto 15px auto !important;
                display: block !important;
              }
              
              .mobile-resource-title {
                font-size: 16px !important;
                line-height: 1.3 !important;
              }
              
              .mobile-resource-text {
                font-size: 13px !important;
                line-height: 1.4 !important;
              }
              
              .mobile-changelog-item {
                font-size: 13px !important;
                line-height: 1.4 !important;
                margin-bottom: 12px !important;
              }
              
              .mobile-button {
                font-size: 14px !important;
                padding: 12px 24px !important;
                display: block !important;
                margin: 20px auto !important;
                width: auto !important;
                text-align: center !important;
              }
              
              .mobile-social-icons {
                margin: 0 8px !important;
              }
              
              .mobile-footer-text {
                font-size: 11px !important;
                line-height: 1.4 !important;
                text-align: center !important;
              }
              
              .mobile-section-padding {
                padding: 20px 15px !important;
              }
              
              .mobile-hero-illustration {
                width: 100% !important;
                max-width: 300px !important;
                height: auto !important;
                margin: 0 auto !important;
                display: block !important;
              }
              
              .mobile-roundtable-badge {
                font-size: 12px !important;
                padding: 6px 12px !important;
              }
              
              .mobile-roundtable-text {
                font-size: 14px !important;
                line-height: 1.4 !important;
              }
            }
          `}
        </style>
      </Head>
        <Tailwind>
                <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* View in Browser Link */}
          <Section style={viewBrowserSectionStyle}>
            <Text style={viewBrowserTextStyle}>
              <Link href="#" style={viewBrowserLinkStyle}>
                View in browser
              </Link>
            </Text>
          </Section>

          {/* Header Section */}
          <Section style={headerSectionStyle} className="mobile-section-padding">
            <Row>
             
              <Column style={illustrationColumnStyle} className="mobile-stack mobile-center">
                <Img
                  src="https://ci3.googleusercontent.com/meips/ADKq_NYff3bYW-Q-VGc53AqBuWQrt3GegH8KyRmYFXgnxc68Kwz07cMQgc8VYE3YMCvDvhxsGUR6pH9Iw5dPR0lL73KbV7Q8HHSjqLXPdaSNBgg15eG9ooyGlm-IWcXTtYQ-K4BgLfzxibc5KlVPyZFMb3I7_ulfXeckIZMIxZMdHaEVRkp8NQd6jnKItUGu9BNYVpB-sgDNRX1GtDqtUBXY7gVUqSBitdNf2sFi6jjt8vaQvalrWyKQco0WX465648T4_Ssjg=s0-d-e1-ft#https://hs-21124867.f.hubspotemail.net/hub/21124867/hubfs/ngrok-newsletter-july-2024_header-july.png?width=1200&upscale=true&name=ngrok-newsletter-july-2024_header-july.png"
                  alt="3D geometric illustrations with cubes and network elements"
                  style={heroIllustrationStyle}
                  className="mobile-hero-illustration object-cover"
                />
              </Column>
            </Row>
          </Section>

          {/* Product Updates Section */}
          <Section style={productUpdatesSectionStyle} className="mobile-section-padding">
            <Text style={sectionTitleStyle} className="mobile-section-title">
              Product updates
            </Text>

            {/* Traffic Policy Feature */}
            <Row style={featureRowStyle}>
              <Column style={featureIconColumnStyle}>
                <div style={kubernetesIconStyle} className="mobile-feature-icon">
                  ⚙️
                </div>
              </Column>
              <Column style={featureContentColumnStyle}>
                <Text style={featureTitleStyle} className="mobile-feature-title">
                  Traffic Policy support for K8s Gateway API
                </Text>
                <Text style={featureTextStyle} className="mobile-feature-text">
                  Now live: support for ALL traffic policy actions with the Gateway API using our new Policy CRD.
                </Text>
                <Link href="#" style={readMoreLinkStyle}>
                  Read more
                </Link>
              </Column>
            </Row>

            {/* CEL Interpolation Feature */}
            <Row style={featureRowStyle}>
              <Column style={featureIconColumnStyle}>
                <div style={celIconStyle} className="mobile-feature-icon">
                  📝
                </div>
              </Column>
              <Column style={featureContentColumnStyle}>
                <Text style={featureTitleStyle} className="mobile-feature-title">
                  CEL Interpolation for Traffic Policy Engine
                </Text>
                <Text style={featureTextStyle} className="mobile-feature-text">
                  Embed CEL expressions into Traffic Policy action configurations to create dynamic actions.
                </Text>
                <Link href="#" style={readMoreLinkStyle}>
                  Read more
                </Link>
              </Column>
            </Row>

            {/* Timestamps Feature */}
            <Row style={featureRowStyle}>
              <Column style={featureIconColumnStyle}>
                <div style={clockIconStyle} className="mobile-feature-icon">
                  🕐
                </div>
              </Column>
              <Column style={featureContentColumnStyle}>
                <Text style={featureTitleStyle} className="mobile-feature-title">
                  Customize your timestamps and time zones
                </Text>
                <Text style={featureTextStyle} className="mobile-feature-text">
                  Set your own timezone and format in the ngrok dashboard for clarity and ease of use.
                </Text>
                <Link href="#" style={readMoreLinkStyle}>
                  Read more
                </Link>
              </Column>
            </Row>
          </Section>

          {/* Developer Roundtable Section */}
          <Section style={roundtableSectionStyle} className="mobile-section-padding">
            <div style={roundtableBadgeStyle} className="mobile-roundtable-badge">
              developer roundtable
            </div>
            <Text style={roundtableTextStyle} className="mobile-roundtable-text">
              Need a device gateway to manage your IoT fleet? We've got you covered. Register now to learn all about
              ngrok's device gateway solution in this month's Developer Roundtable livestream with Dev Advocate Scott
              McAllister.
            </Text>
            <Text style={roundtableCtaStyle} className="mobile-roundtable-text">
              <strong>Join us at the Roundtable!</strong>
            </Text>
          </Section>

          {/* New Resources Section */}
          <Section style={newResourcesSectionStyle} className="mobile-section-padding">
            <Text style={sectionTitleStyle} className="mobile-section-title">
              New resources
            </Text>

            {/* Resources Grid Row 1 */}
            <Row style={resourceRowStyle}>
              <Column style={resourceColumnStyle} className="mobile-resource-card">
                <div style={microK8sImageStyle} className="mobile-resource-image">
                  <div style={kubernetesIconStyle2} className="text-center">🔄</div>
                </div>
                <Text style={resourceTitleStyle} className="mobile-resource-title">
                  MicroK8s + ngrok
                </Text>
                <Text style={resourceTextStyle} className="mobile-resource-text">
                  Discover how to achieve secure connectivity at the edge with ngrok as your gateway.
                </Text>
                <Link href="#" style={readMoreLinkStyle}>
                  Read more
                </Link>
              </Column>
              <Column style={resourceColumnStyle} className="mobile-resource-card">
                <div style={linodeImageStyle} className="mobile-resource-image">
                  <div style={kubernetesIconStyle2}>🧊</div>
                </div>
                <Text style={resourceTitleStyle} className="mobile-resource-title">
                  ngrok + Linode for GSLB
                </Text>
                <Text style={resourceTextStyle} className="mobile-resource-text">
                  Ensure high performance and availability for your apps running across multi-cloud environments.
                </Text>
                <Link href="#" style={readMoreLinkStyle}>
                  Read more
                </Link>
              </Column>
            </Row>

            {/* Resources Grid Row 2 */}
            <Row style={resourceRowStyle}>
              <Column style={resourceColumnStyle} className="mobile-resource-card">
                <div style={onPremImageStyle} className="mobile-resource-image">
                  <div style={kubernetesIconStyle2}>🔗</div>
                </div>
                <Text style={resourceTitleStyle} className="mobile-resource-title">
                  Connect to on-prem resources
                </Text>
                <Text style={resourceTextStyle} className="mobile-resource-text">
                  Access applications like GitLab and Jira instances deployed in customer VPCs or on-prem with ngrok.
                </Text>
                <Link href="#" style={readMoreLinkStyle}>
                  Read more
                </Link>
              </Column>
              <Column style={resourceColumnStyle} className="mobile-resource-card">
                <div style={apiOpsImageStyle} className="mobile-resource-image">
                  <div style={kubernetesIconStyle2}>🐙</div>
                </div>
                <Text style={resourceTitleStyle} className="mobile-resource-title">
                  Guide: APIOps with Argo and ngrok
                </Text>
                <Text style={resourceTextStyle} className="mobile-resource-text">
                  Learn how to deploy a demo API to a Kubernetes cluster using an APIOps workflow and ngrok.
                </Text>
                <Link href="#" style={readMoreLinkStyle}>
                  Read more
                </Link>
              </Column>
            </Row>
          </Section>

          {/* Changelog Section */}
          <Section style={changelogSectionStyle} className="mobile-section-padding">
            <Text style={sectionTitleStyle} className="mobile-section-title">
              Changelog - What's new?
            </Text>

            <div style={changelogListStyle}>
              <Text style={changelogItemStyle} className="mobile-changelog-item">
                🔧 2024-07-15 - Released{" "}
                <Link href="#" style={changelogLinkStyle}>
                  ngrok Agent 3.13.0
                </Link>{" "}
                to add additional headers on error responses.
              </Text>

              <Text style={changelogItemStyle} className="mobile-changelog-item">
                🔧 2024-07-12 - Released{" "}
                <Link href="#" style={changelogLinkStyle}>
                  ngrok-go1 1.0.0
                </Link>{" "}
                to add a <code style={codeStyle}>fasthttp</code> example.
              </Text>

              <Text style={changelogItemStyle} className="mobile-changelog-item">
                🔧 2024-07-11 - Released{" "}
                <Link href="#" style={changelogLinkStyle}>
                  ngrok Agent 3.12.1
                </Link>{" "}
                to fix a bug in <code style={codeStyle}>ngrok diagnose</code>.
              </Text>

              <Text style={changelogItemStyle} className="mobile-changelog-item">
                🔧 2024-06-27 - Updated examples for{" "}
                <Link href="#" style={changelogLinkStyle}>
                  traffic policy actions
                </Link>
                .
              </Text>

              <Text style={changelogItemStyle} className="mobile-changelog-item">
                🔧 2024-06-27 - Released{" "}
                <Link href="#" style={changelogLinkStyle}>
                  ngrok Agent 3.12.0
                </Link>
                . Errors now have links to their ngrok error page.
              </Text>
            </div>

            <Link href="#" style={followChangelogLinkStyle}>
              Follow our changelog
            </Link>
          </Section>

          {/* Security Section */}
          <Section style={securitySectionStyle} className="mobile-section-padding">
            <div style={securityIconStyle}>🔒</div>
            <Text style={securityTextStyle}>
              Your trust in us matters.{" "}
              <Link href="#" style={securityLinkStyle}>
                Learn more about security at ngrok
              </Link>
              .
            </Text>
          </Section>

          {/* Footer Section */}
          <Section style={footerSectionStyle} className="mobile-section-padding">
            {/* Social Media Icons */}
            <Row style={socialRowStyle}>
              <Column style={socialColumnStyle} className="mobile-center">
                <Link href="#" style={socialLinkStyle} className="mobile-social-icons">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-black/github.png"
                    alt="GitHub"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle} className="mobile-social-icons">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-black/linkedin.png"
                    alt="LinkedIn"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle} className="mobile-social-icons">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-black/twitter.png"
                    alt="X (Twitter)"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle} className="mobile-social-icons">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-black/youtube.png"
                    alt="YouTube"
                    style={socialIconStyle}
                  />
                </Link>
              </Column>
            </Row>

            {/* Company Information */}
            <Text style={companyInfoStyle} className="mobile-footer-text">
              ngrok Inc., 548 Market St, PMB 26741, San Francisco, California 94104-5401, United States
            </Text>

            {/* Footer Links */}
            <Text style={footerLinksStyle} className="mobile-footer-text">
              <Link href="#" style={footerLinkStyle}>
                Unsubscribe
              </Link>
              {" • "}
              <Link href="#" style={footerLinkStyle}>
                Manage preferences
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
        </Tailwind>
    </Html>
  )
}

export default NgrokNewsletterTemplate

// Comprehensive Email-Safe Styles
const bodyStyle = {
  fontFamily: "'DM Sans', Arial, sans-serif",
  backgroundColor: "#f8f9fa",
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
  color: "#3b82f6",
  textDecoration: "underline",
}

const headerSectionStyle = {
  backgroundColor: "#4c1d95",
  backgroundImage: "linear-gradient(135deg, #4c1d95 0%, #5b21b6 50%, #6d28d9 100%)",
//   padding: "40px 30px",
  position: "relative" as const,
}

const logoColumnStyle = {
  width: "60%",
  verticalAlign: "middle" as const,
}

const illustrationColumnStyle = {
  width: "100%",
  verticalAlign: "middle" as const,
  textAlign: "right" as const,
}

const logoTitleStyle = {
  fontSize: "42px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0",
  lineHeight: "1.1",
}

const logoSubtitleStyle = {
  fontSize: "18px",
  fontWeight: "400",
  color: "#e0e7ff",
  margin: "0",
  opacity: "0.9",
}

const heroIllustrationStyle = {
  width: "100%",
  height: "auto",
//   maxWidth: "200px",
  display: "block",
}

const productUpdatesSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "40px 30px",
}

const sectionTitleStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#1f2937",
  margin: "0 0 30px 0",
}

const featureRowStyle = {
  marginBottom: "25px",
  paddingBottom: "25px",
  borderBottom: "1px solid #f3f4f6",
}

const featureIconColumnStyle = {
  width: "80px",
  verticalAlign: "top" as const,
}

const featureContentColumnStyle = {
  width: "calc(100% - 80px)",
  verticalAlign: "top" as const,
  paddingLeft: "15px",
}

const kubernetesIconStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#3b82f6",
  borderRadius: "8px",
  fontSize: "24px",
  textAlign: "center" as const,
  lineHeight: "60px",
  display: "block",
}
const kubernetesIconStyle2 = {
  width: "80px",
  height: "80px",
  borderRadius: "8px",
  fontSize: "24px",
  textAlign: "center" as const,
  lineHeight: "80px",
  display: "block",
}
const celIconStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#06b6d4",
  borderRadius: "8px",
  fontSize: "24px",
  textAlign: "center" as const,
  lineHeight: "60px",
  display: "block",
}

const clockIconStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#8b5cf6",
  borderRadius: "8px",
  fontSize: "24px",
  textAlign: "center" as const,
  lineHeight: "60px",
  display: "block",
}

const featureTitleStyle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#1f2937",
  margin: "0 0 8px 0",
  lineHeight: "1.3",
}

const featureTextStyle = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0 0 12px 0",
  lineHeight: "1.5",
}

const readMoreLinkStyle = {
  color: "#3b82f6",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "600",
}

const roundtableSectionStyle = {
  backgroundColor: "#4c1d95",
  backgroundImage: "linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%)",
  padding: "30px 30px",
  textAlign: "center" as const,
}

const roundtableBadgeStyle = {
  display: "inline-block",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  color: "#ffffff",
  padding: "8px 16px",
  borderRadius: "20px",
  fontSize: "14px",
  fontWeight: "600",
  marginBottom: "20px",
  border: "1px solid rgba(255, 255, 255, 0.3)",
}

const roundtableTextStyle = {
  fontSize: "16px",
  color: "#e0e7ff",
  margin: "0 0 15px 0",
  lineHeight: "1.6",
}

const roundtableCtaStyle = {
  fontSize: "16px",
  color: "#ffffff",
  margin: "0",
  fontWeight: "600",
}

const newResourcesSectionStyle = {
  backgroundColor: "#f9fafb",
  padding: "40px 10px",
}

const resourceRowStyle = {
  marginBottom: "30px",
}

const resourceColumnStyle = {
  width: "50%",
  verticalAlign: "top" as const,
  padding: "0 10px",
}

const microK8sImageStyle = {
  width: "100%",
  height: "120px",
  backgroundColor: "#4c1d95",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "15px",
}

const microK8sIconStyle = {
  fontSize: "32px",
  color: "#f97316",
}

const linodeImageStyle = {
  width: "100%",
  height: "120px",
  backgroundColor: "#06b6d4",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "15px",
}

const linodeIconStyle = {
  fontSize: "32px",
  color: "#1f2937",
}

const onPremImageStyle = {
  width: "100%",
  height: "120px",
  backgroundColor: "#3b82f6",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "15px",
}

const onPremIconStyle = {
  fontSize: "32px",
  color: "#f97316",
}

const apiOpsImageStyle = {
  width: "100%",
  height: "120px",
  backgroundColor: "#3b82f6",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "15px",
}

const apiOpsIconStyle = {
  fontSize: "32px",
  color: "#f97316",
}

const resourceTitleStyle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#1f2937",
  margin: "0 0 10px 0",
  lineHeight: "1.3",
}

const resourceTextStyle = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0 0 12px 0",
  lineHeight: "1.5",
}

const changelogSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "40px 30px",
}

const changelogListStyle = {
  marginBottom: "25px",
}

const changelogItemStyle = {
  fontSize: "14px",
  color: "#374151",
  margin: "0 0 15px 0",
  lineHeight: "1.5",
}

const changelogLinkStyle = {
  color: "#3b82f6",
  textDecoration: "underline",
}

const codeStyle = {
  backgroundColor: "#f3f4f6",
  color: "#374151",
  padding: "2px 6px",
  borderRadius: "4px",
  fontSize: "13px",
  fontFamily: "'Courier New', monospace",
}

const followChangelogLinkStyle = {
  color: "#3b82f6",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "600",
}

const securitySectionStyle = {
  backgroundColor: "#f9fafb",
  padding: "25px 30px",
  textAlign: "center" as const,
  borderTop: "1px solid #e5e7eb",
  borderBottom: "1px solid #e5e7eb",
}

const securityIconStyle = {
  fontSize: "24px",
  marginBottom: "10px",
}

const securityTextStyle = {
  fontSize: "14px",
  color: "#374151",
  margin: "0",
}

const securityLinkStyle = {
  color: "#3b82f6",
  textDecoration: "underline",
}

const footerSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "30px 30px 25px 30px",
  textAlign: "center" as const,
}

const socialRowStyle = {
  marginBottom: "25px",
}

const socialColumnStyle = {
  width: "100%",
  textAlign: "center" as const,
}

const socialLinkStyle = {
  textDecoration: "none",
  margin: "0 10px",
  display: "inline-block",
}

const socialIconStyle = {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
}

const companyInfoStyle = {
  fontSize: "12px",
  color: "#6b7280",
  margin: "0 0 15px 0",
  lineHeight: "1.4",
}

const footerLinksStyle = {
  fontSize: "12px",
  color: "#6b7280",
  margin: "0",
}

const footerLinkStyle = {
  color: "#3b82f6",
  textDecoration: "underline",
}
