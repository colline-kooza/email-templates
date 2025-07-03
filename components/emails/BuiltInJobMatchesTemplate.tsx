import { Body, Container, Column, Head, Html, Img, Link, Preview, Row, Section, Text } from "@react-email/components"

export const BuiltInJobMatchesTemplate = () => {
  return (
    <Html>
      <Preview>Your New Job Matches - Built In - Full Stack Engineer Opportunities</Preview>
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
                margin-bottom: 15px !important;
              }
              
              .mobile-main-title {
                font-size: 28px !important;
                line-height: 1.2 !important;
              }
              
              .mobile-preferences-text {
                font-size: 12px !important;
                line-height: 1.4 !important;
              }
              
              .mobile-job-title {
                font-size: 16px !important;
                line-height: 1.3 !important;
              }
              
              .mobile-job-details {
                font-size: 12px !important;
                line-height: 1.4 !important;
              }
              
              .mobile-salary {
                font-size: 13px !important;
              }
              
              .mobile-button {
                font-size: 14px !important;
                padding: 15px 25px !important;
                display: block !important;
                margin: 20px auto !important;
              }
              
              .mobile-explore-title {
                font-size: 22px !important;
                line-height: 1.3 !important;
              }
              
              .mobile-explore-link {
                font-size: 14px !important;
                padding: 12px 0 !important;
              }
              
              .mobile-footer-text {
                font-size: 11px !important;
                line-height: 1.4 !important;
              }
              
              
              
              .mobile-job-card {
                padding: 15px 12px !important;
                margin-bottom: 12px !important;
              }

              .mobile-job-logo {
                width: 35px !important;
                height: 35px !important;
                font-size: 11px !important;
                line-height: 35px !important;
                margin-bottom: 10px !important;
              }

              .mobile-job-content {
                width: calc(100% - 45px) !important;
                padding-left: 10px !important;
              }

              .mobile-job-arrow {
                width: 25px !important;
                font-size: 20px !important;
              }

              .mobile-job-company {
                font-size: 12px !important;
                margin-bottom: 3px !important;
              }

              .mobile-job-card-padding {
                padding: 12px 10px !important;
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
                  <Text style={logoTextStyle}>built</Text>
                  <Text style={logoAccentStyle}>in</Text>
                  <div style={logoSquareStyle}></div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Title Section */}
          <Section style={titleSectionStyle} className="mobile-section-padding">
            <Text style={mainTitleStyle} className="mobile-main-title">
              Your New
              <br />
              Job Matches
              <span style={titleAccentStyle}>.</span>
            </Text>
            <div style={decorativeWaveStyle}>~~~</div>
          </Section>

          {/* Job Preferences Section */}
          <Section style={preferencesSectionStyle} className="mobile-section-padding">
            <Row>
              <Column style={preferencesLeftColumnStyle}>
                <Text style={preferencesLabelStyle}>JOB PREFERENCES</Text>
                <Text style={preferencesTextStyle} className="mobile-preferences-text">
                  Full Stack Engineer, America, Hybrid, In Office, Remote, Mid Level
                </Text>
              </Column>
              <Column style={preferencesRightColumnStyle}>
                <Link href="#" style={editLinkStyle}>
                  ✏️
                </Link>
              </Column>
            </Row>
          </Section>

          {/* Job Listings Section */}
          <Section style={jobListingsStyle} className="mobile-section-padding">
            {/* Capital One Job 1 */}
            <div style={jobCardStyle} className="mobile-job-card mobile-job-card-padding">
              <Row>
                <Column style={jobLogoColumnStyle}>
                  <div style={capitalOneLogoStyle} className="mobile-job-logo">
                    C1
                  </div>
                </Column>
                <Column style={jobContentColumnStyle} className="mobile-job-content">
                  <Text style={companyNameStyle} className="mobile-job-company">
                    Capital One
                  </Text>
                  <Text style={jobTitleStyle} className="mobile-job-title">
                    Senior Software Engineer, Full Stack
                  </Text>
                  <Text style={jobDetailsStyle} className="mobile-job-details">
                    🏢 Hybrid 📍 Multiple Locations
                  </Text>
                  <Text style={salaryStyle} className="mobile-salary">
                    💰 $144,200-$181,000
                  </Text>
                </Column>
                <Column style={jobArrowColumnStyle} className="mobile-job-arrow">
                  <Link href="#" style={jobArrowStyle}>
                    ›
                  </Link>
                </Column>
              </Row>
            </div>

            {/* Anduril Job 1 */}
            <div style={jobCardStyle} className="mobile-job-card mobile-job-card-padding">
              <Row>
                <Column style={jobLogoColumnStyle}>
                  <div style={andurilLogoStyle} className="mobile-job-logo">
                    A
                  </div>
                </Column>
                <Column style={jobContentColumnStyle} className="mobile-job-content">
                  <Text style={companyNameStyle} className="mobile-job-company">
                    Anduril
                  </Text>
                  <Text style={jobTitleStyle} className="mobile-job-title">
                    Software Engineer - TRS Core Infrastructure - Full Stack
                  </Text>
                  <Text style={jobDetailsStyle} className="mobile-job-details">
                    🏢 In Office 📍 Atlanta, GA
                  </Text>
                  <Text style={salaryStyle} className="mobile-salary">
                    💰 $117,300-$175,950
                  </Text>
                </Column>
                <Column style={jobArrowColumnStyle} className="mobile-job-arrow">
                  <Link href="#" style={jobArrowStyle}>
                    ›
                  </Link>
                </Column>
              </Row>
            </div>

            {/* Anduril Job 2 */}
            <div style={jobCardStyle} className="mobile-job-card mobile-job-card-padding">
              <Row>
                <Column style={jobLogoColumnStyle}>
                  <div style={andurilLogoStyle} className="mobile-job-logo">
                    A
                  </div>
                </Column>
                <Column style={jobContentColumnStyle} className="mobile-job-content">
                  <Text style={companyNameStyle} className="mobile-job-company">
                    Anduril
                  </Text>
                  <Text style={jobTitleStyle} className="mobile-job-title">
                    Software Engineer - TRS Core Infrastructure - Full Stack
                  </Text>
                  <Text style={jobDetailsStyle} className="mobile-job-details">
                    🏢 In Office 📍 Costa Mesa, CA
                  </Text>
                  <Text style={salaryStyle} className="mobile-salary">
                    💰 $139,000-$207,000
                  </Text>
                </Column>
                <Column style={jobArrowColumnStyle} className="mobile-job-arrow">
                  <Link href="#" style={jobArrowStyle}>
                    ›
                  </Link>
                </Column>
              </Row>
            </div>

            {/* Benchling Job */}
            <div style={jobCardStyle} className="mobile-job-card mobile-job-card-padding">
              <Row>
                <Column style={jobLogoColumnStyle}>
                  <div style={benchlingLogoStyle} className="mobile-job-logo">
                    B
                  </div>
                </Column>
                <Column style={jobContentColumnStyle} className="mobile-job-content">
                  <Text style={companyNameStyle} className="mobile-job-company">
                    Benchling
                  </Text>
                  <Text style={jobTitleStyle} className="mobile-job-title">
                    Software Engineer, Full Stack (Tenancy)
                  </Text>
                  <Text style={jobDetailsStyle} className="mobile-job-details">
                    🏢 Hybrid 📍 San Francisco, CA
                  </Text>
                  <Text style={salaryStyle} className="mobile-salary">
                    💰 $165,113-$223,388
                  </Text>
                </Column>
                <Column style={jobArrowColumnStyle} className="mobile-job-arrow">
                  <Link href="#" style={jobArrowStyle}>
                    ›
                  </Link>
                </Column>
              </Row>
            </div>

            {/* Capital One Job 2 */}
            <div style={jobCardStyle} className="mobile-job-card mobile-job-card-padding">
              <Row>
                <Column style={jobLogoColumnStyle}>
                  <div style={capitalOneLogoStyle} className="mobile-job-logo">
                    C1
                  </div>
                </Column>
                <Column style={jobContentColumnStyle} className="mobile-job-content">
                  <Text style={companyNameStyle} className="mobile-job-company">
                    Capital One
                  </Text>
                  <Text style={jobTitleStyle} className="mobile-job-title">
                    Lead Software Engineer, Full Stack (Enterprise Platforms Technology)
                  </Text>
                  <Text style={jobDetailsStyle} className="mobile-job-details">
                    🏢 Hybrid 📍 Multiple Locations
                  </Text>
                  <Text style={salaryStyle} className="mobile-salary">
                    💰 $175,800-$220,700
                  </Text>
                </Column>
                <Column style={jobArrowColumnStyle} className="mobile-job-arrow">
                  <Link href="#" style={jobArrowStyle}>
                    ›
                  </Link>
                </Column>
              </Row>
            </div>
          </Section>

          {/* CTA Button Section */}
          <Section style={ctaSectionStyle} className="mobile-section-padding">
            <Link href="#" style={ctaButtonStyle} className="mobile-button">
              GET MORE RECOMMENDATIONS
            </Link>
          </Section>

          {/* Explore Built In Section */}
          <Section style={exploreSectionStyle} className="mobile-section-padding">
            <Text style={exploreTitleStyle} className="mobile-explore-title">
              Explore Built In
            </Text>
            <div style={decorativeWaveStyle}>~~~</div>

            <div style={exploreLinksStyle}>
              <Row style={exploreLinkRowStyle}>
                <Column style={exploreLinkColumnStyle}>
                  <Link href="#" style={exploreLinkStyle} className="mobile-explore-link">
                    SEARCH JOB BOARD
                  </Link>
                </Column>
                <Column style={exploreArrowColumnStyle}>
                  <Text style={exploreArrowStyle}>→</Text>
                </Column>
              </Row>

              <Row style={exploreLinkRowStyle}>
                <Column style={exploreLinkColumnStyle}>
                  <Link href="#" style={exploreLinkStyle} className="mobile-explore-link">
                    RESEARCH COMPANIES
                  </Link>
                </Column>
                <Column style={exploreArrowColumnStyle}>
                  <Text style={exploreArrowStyle}>→</Text>
                </Column>
              </Row>

              <Row style={exploreLinkRowStyle}>
                <Column style={exploreLinkColumnStyle}>
                  <Link href="#" style={exploreLinkStyle} className="mobile-explore-link">
                    READ TECH STORIES
                  </Link>
                </Column>
                <Column style={exploreArrowColumnStyle}>
                  <Text style={exploreArrowStyle}>→</Text>
                </Column>
              </Row>

              <Row style={exploreLinkRowStyle}>
                <Column style={exploreLinkColumnStyle}>
                  <Link href="#" style={exploreLinkStyle} className="mobile-explore-link">
                    RESEARCH SALARIES
                  </Link>
                </Column>
                <Column style={exploreArrowColumnStyle}>
                  <Text style={exploreArrowStyle}>→</Text>
                </Column>
              </Row>

              <Row style={exploreLinkRowStyle}>
                <Column style={exploreLinkColumnStyle}>
                  <Link href="#" style={exploreLinkStyle} className="mobile-explore-link">
                    FIND COURSES
                  </Link>
                </Column>
                <Column style={exploreArrowColumnStyle}>
                  <Text style={exploreArrowStyle}>→</Text>
                </Column>
              </Row>
            </div>
          </Section>

          {/* Footer Section */}
          <Section style={footerSectionStyle} className="mobile-section-padding">
            {/* Footer Logo */}
            <div style={footerLogoContainerStyle}>
              <Text style={footerLogoTextStyle}>built</Text>
              <Text style={footerLogoAccentStyle}>in</Text>
              <div style={footerLogoSquareStyle}></div>
            </div>

            {/* Social Media Icons */}
            <Row style={socialRowStyle}>
              <Column style={socialColumnStyle} className="mobile-center">
                <Link href="#" style={socialLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-white/instagram.png"
                    alt="Instagram"
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
              </Column>
            </Row>

            {/* Copyright */}
            <Text style={copyrightStyle} className="mobile-footer-text">
              © Built In, 2025
            </Text>

            {/* Address */}
            <Text style={addressStyle} className="mobile-footer-text">
              222 W Merchandise Mart Plaza, Ste. 2010, Chicago, IL 60654
            </Text>

            {/* Footer Links */}
            <Text style={footerLinksStyle} className="mobile-footer-text">
              <Link href="#" style={footerLinkStyle}>
                Share your feedback
              </Link>
              <br />
              <Link href="#" style={footerLinkStyle}>
                Update Email Frequency
              </Link>
              {" • "}
              <Link href="#" style={footerLinkStyle}>
                Unsubscribe
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default BuiltInJobMatchesTemplate

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
  textAlign: "center" as const,
}

const logoColumnStyle = {
  width: "100%",
}

const logoContainerStyle = {
  textAlign: "center" as const,
}

const logoTextStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#1e3a8a",
  margin: "0",
  display: "inline-block",
  verticalAlign: "middle" as const,
}

const logoAccentStyle = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#1e3a8a",
  margin: "0",
  display: "inline-block",
  verticalAlign: "middle" as const,
}

const logoSquareStyle = {
  width: "20px",
  height: "20px",
  border: "2px solid #3b82f6",
  display: "inline-block",
  verticalAlign: "middle" as const,
  marginLeft: "4px",
}

const titleSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "20px 30px 25px 30px",
  textAlign: "center" as const,
}

const mainTitleStyle = {
  fontSize: "36px",
  fontWeight: "800",
  color: "#1e3a8a",
  margin: "0 0 15px 0",
  lineHeight: "1.2",
}

const titleAccentStyle = {
  color: "#10b981",
}

const decorativeWaveStyle = {
  fontSize: "16px",
  color: "#10b981",
  textAlign: "center" as const,
  margin: "0",
}

const preferencesSectionStyle = {
  backgroundColor: "#f8f9fa",
  padding: "20px 30px",
  borderTop: "1px solid #e5e7eb",
  borderBottom: "1px solid #e5e7eb",
}

const preferencesLeftColumnStyle = {
  width: "90%",
  verticalAlign: "middle" as const,
}

const preferencesRightColumnStyle = {
  width: "10%",
  verticalAlign: "middle" as const,
  textAlign: "right" as const,
}

const preferencesLabelStyle = {
  fontSize: "11px",
  color: "#6b7280",
  margin: "0 0 5px 0",
  fontWeight: "600",
  letterSpacing: "1px",
}

const preferencesTextStyle = {
  fontSize: "14px",
  color: "#374151",
  margin: "0",
  fontWeight: "500",
}

const editLinkStyle = {
  fontSize: "16px",
  textDecoration: "none",
  color: "#6b7280",
}

const jobListingsStyle = {
  backgroundColor: "#ffffff",
  padding: "20px 10px",
}

const jobCardStyle = {
  backgroundColor: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  padding: "20px 15px",
  marginBottom: "15px",
  transition: "box-shadow 0.3s ease",
}

const jobLogoColumnStyle = {
  width: "50px",
  verticalAlign: "top" as const,
  textAlign: "center" as const,
}

const jobContentColumnStyle = {
  width: "calc(100% - 80px)",
  verticalAlign: "top" as const,
  paddingLeft: "12px",
}

const jobArrowColumnStyle = {
  width: "30px",
  verticalAlign: "middle" as const,
  textAlign: "center" as const,
}

const capitalOneLogoStyle = {
  width: "40px",
  height: "40px",
  backgroundColor: "#1e3a8a",
  borderRadius: "6px",
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "700",
  textAlign: "center" as const,
  lineHeight: "40px",
  display: "block",
  margin: "0 auto",
}

const andurilLogoStyle = {
  width: "40px",
  height: "40px",
  backgroundColor: "#374151",
  borderRadius: "6px",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "700",
  textAlign: "center" as const,
  lineHeight: "40px",
  display: "block",
  margin: "0 auto",
}

const benchlingLogoStyle = {
  width: "40px",
  height: "40px",
  backgroundColor: "#3b82f6",
  borderRadius: "50%",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "700",
  textAlign: "center" as const,
  lineHeight: "40px",
  display: "block",
  margin: "0 auto",
}

const logoInitialStyle = {
  margin: "0",
  fontSize: "inherit",
  fontWeight: "inherit",
  color: "inherit",
}

const companyNameStyle = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0 0 5px 0",
  fontWeight: "500",
}

const jobTitleStyle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#1e3a8a",
  margin: "0 0 8px 0",
  lineHeight: "1.3",
}

const jobDetailsStyle = {
  fontSize: "13px",
  color: "#6b7280",
  margin: "0 0 5px 0",
  lineHeight: "1.4",
}

const salaryStyle = {
  fontSize: "14px",
  color: "#059669",
  margin: "0",
  fontWeight: "600",
}

const jobArrowStyle = {
  fontSize: "24px",
  color: "#d1d5db",
  textDecoration: "none",
  fontWeight: "300",
}

const ctaSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "25px 30px",
  textAlign: "center" as const,
}

const ctaButtonStyle = {
  backgroundColor: "#3b82f6",
  color: "#ffffff",
  padding: "16px 40px",
  borderRadius: "6px",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "700",
  display: "inline-block",
  letterSpacing: "0.5px",
  boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
}

const exploreSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "30px 30px",
  borderTop: "1px solid #e5e7eb",
}

const exploreTitleStyle = {
  fontSize: "28px",
  fontWeight: "800",
  color: "#1e3a8a",
  margin: "0 0 15px 0",
  textAlign: "center" as const,
  lineHeight: "1.3",
}

const exploreLinksStyle = {
  marginTop: "25px",
}

const exploreLinkRowStyle = {
  borderBottom: "1px solid #f3f4f6",
  paddingBottom: "15px",
  marginBottom: "15px",
}

const exploreLinkColumnStyle = {
  width: "90%",
  verticalAlign: "middle" as const,
}

const exploreArrowColumnStyle = {
  width: "10%",
  verticalAlign: "middle" as const,
  textAlign: "right" as const,
}

const exploreLinkStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#1e3a8a",
  textDecoration: "none",
  letterSpacing: "0.5px",
}

const exploreArrowStyle = {
  fontSize: "18px",
  color: "#3b82f6",
  fontWeight: "400",
}

const footerSectionStyle = {
  backgroundColor: "#1e3a8a",
  padding: "30px 30px 25px 30px",
  textAlign: "center" as const,
}

const footerLogoContainerStyle = {
  textAlign: "center" as const,
  marginBottom: "20px",
}

const footerLogoTextStyle = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0",
  display: "inline-block",
  verticalAlign: "middle" as const,
}

const footerLogoAccentStyle = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0",
  display: "inline-block",
  verticalAlign: "middle" as const,
}

const footerLogoSquareStyle = {
  width: "16px",
  height: "16px",
  border: "2px solid #3b82f6",
  display: "inline-block",
  verticalAlign: "middle" as const,
  marginLeft: "4px",
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
  margin: "0 10px",
  display: "inline-block",
}

const socialIconStyle = {
  width: "28px",
  height: "28px",
  borderRadius: "50%",
}

const copyrightStyle = {
  fontSize: "12px",
  color: "#ffffff",
  margin: "0 0 10px 0",
  fontWeight: "500",
}

const addressStyle = {
  fontSize: "11px",
  color: "#cbd5e1",
  margin: "0 0 15px 0",
  lineHeight: "1.4",
}

const footerLinksStyle = {
  fontSize: "11px",
  color: "#cbd5e1",
  margin: "0",
  lineHeight: "1.5",
}

const footerLinkStyle = {
  color: "#ffffff",
  textDecoration: "underline",
}
