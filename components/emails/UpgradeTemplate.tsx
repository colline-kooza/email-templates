import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Text,
  Link,
  Font,
  Button,
  Row,
  Column,
  Section,
} from "@react-email/components"

const Header = () => {
  return (
    <div style={headerStyle}>
      <img
        src="https://media.istockphoto.com/id/1606497240/vector/teamwork-friendship-people-connectivity-logo-design.jpg?s=612x612&w=0&k=20&c=nqkMOjjJS6UbbE0uuDruJ-A8fj-XD_9yYQr4OUCPlZY="
        alt="Desishub"
        style={logoStyle}
      />
    </div>
  )
}

const Footer = () => {
  return (
    <Section style={footerSectionStyle}>
      <div style={socialMediaContainerStyle}>
        <img
          src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
          alt="Facebook"
          style={socialIconStyle}
        />
        <img
          src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
          alt="Twitter"
          style={socialIconStyle}
        />
        <img
          src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
          alt="LinkedIn"
          style={socialIconStyle}
        />
        <img
          src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
          alt="Instagram"
          style={socialIconStyle}
        />
      </div>

      <Text style={footerNavStyle}>Home | Page | About | Contact us</Text>

      <Text style={footerDescStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
      </Text>

      <Text style={footerCopyrightStyle}>Copyright © YourCompany | All Rights Reserved</Text>

      <Text style={footerText}>
        You have received this email as a registered user of{" "}
        <Link href="https://unlayer.com" style={linkStyle}>
          unlayer.com
        </Link>
        . You can{" "}
        <Link href="https://example.com/unsubscribe" style={linkStyle}>
          unsubscribe
        </Link>{" "}
        from these emails here.
      </Text>

      <Text style={footerAddress}>2281 Market Street #4867 San Francisco, CA 94114 | All rights reserved</Text>
    </Section>
  )
}

const HeaderTop = () => {
  return (
    <Section style={headerTopStyle}>
      <Row>
        <Column style={logoColumnStyle}>
          <img
            src="https://www.desishub.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30587acc.png&w=32&q=75"
            alt="unlayer"
            style={logoTopStyle}
          />
        </Column>
        <Column style={navColumnStyle}>
          <Link href="#" style={navLinkStyle}>
            Home
          </Link>
          <Link href="#" style={navLinkStyle}>
            Page
          </Link>
          <Link href="#" style={navLinkStyle}>
            About Us
          </Link>
        </Column>
      </Row>
    </Section>
  )
}

export const UpgradeTemplate = () => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v30/KFOiCnqEu92Fr1Mu51QrEz0dL_nz.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="initial"
        />
        <style>
          {`
            @media only screen and (max-width: 600px) {
              .mobile-stack {
                width: 100% !important;
                display: block !important;
                padding: 0 10px !important;
                margin-bottom: 20px !important;
              }
              .mobile-stack-last {
                margin-bottom: 0 !important;
              }
              .mobile-center {
                text-align: center !important;
              }
              .mobile-full-width {
                width: 100% !important;
              }
              .mobile-padding {
                padding: 20px !important;
              }
              .feature-card-mobile {
                margin-bottom: 20px !important;
              }
              .nav-mobile {
                display: block !important;
                text-align: center !important;
              }
              .logo-mobile {
                text-align: center !important;
                margin-bottom: 10px !important;
              }
            }
          `}
        </style>
      </Head>
      <Preview>Software Upgrade - Exciting New Features and Enhancements</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Hero Section */}
          <Section style={heroSectionStyle}>
            <div style={heroContentStyle}>
              <Heading as="h1" style={headingStyle}>
                Software Upgrade
              </Heading>
              <Text style={subTextStyle}>Exciting New Features and Enhancements</Text>
              <Text style={subTextApprovedStyle}>Approved</Text>
              <Button href="https://example.com" style={ctaButtonStyle}>
                Get Started
              </Button>
            </div>

            <div style={heroImageContainerStyle}>
              <Img
                src="https://cdn.templates.unlayer.com/assets/1720604424257-Group%201.png"
                alt="Dashboard"
                style={heroImageStyle}
              />
              <div style={heroOverlayStyle}></div>
            </div>
          </Section>

          {/* Features Section */}
          <Section style={featuresSectionStyle}>
            <Heading as="h2" style={subHeadingStyle}>
              Discover What's New in Our Latest Software Upgrade
            </Heading>

            {/* Features Grid - Row 1 */}
            <Row style={featuresRowStyle}>
              <Column style={featureColumnStyle} className="mobile-stack">
                <div style={featureCardPinkStyle} className="feature-card-mobile">
                  <div style={featureIconContainerStyle}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 7 17l-5-5" />
                      <path d="m22 10-7.5 7.5L13 16" />
                    </svg>
                  </div>
                  <Text style={featureCardTextStyle}>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Text>
                </div>
              </Column>
              <Column style={featureColumnStyle} className="mobile-stack mobile-stack-last">
                <div style={featureCardYellowStyle} className="feature-card-mobile">
                  <div style={featureIconContainerStyle}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 7 17l-5-5" />
                      <path d="m22 10-7.5 7.5L13 16" />
                    </svg>
                  </div>
                  <Text style={featureCardTextStyle}>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Text>
                </div>
              </Column>
            </Row>

            {/* Features Grid - Row 2 */}
            <Row style={featuresRowStyle}>
              <Column style={featureColumnStyle} className="mobile-stack">
                <div style={featureCardGreenStyle} className="feature-card-mobile">
                  <div style={featureIconContainerStyle}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 7 17l-5-5" />
                      <path d="m22 10-7.5 7.5L13 16" />
                    </svg>
                  </div>
                  <Text style={featureCardTextStyle}>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Text>
                </div>
              </Column>
              <Column style={featureColumnStyle} className="mobile-stack mobile-stack-last">
                <div style={featureCardGrayStyle} className="feature-card-mobile">
                  <div style={featureIconContainerStyle}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 7 17l-5-5" />
                      <path d="m22 10-7.5 7.5L13 16" />
                    </svg>
                  </div>
                  <Text style={featureCardTextStyle}>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Text>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Top Featured Section */}
          <Section style={topFeaturedSectionStyle}>
            <Heading as="h2" style={topFeaturedHeadingStyle}>
              Top Featured
            </Heading>
            <Text style={topFeaturedTextStyle}>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </Text>

            <Img
              src="https://cdn.templates.unlayer.com/assets/1720607857928-Group%2019.png"
              alt="Feature"
              style={topFeaturedImageStyle}
            />
          </Section>

          <Footer />
        </Container>
      </Body>
    </Html>
  )
}

export default UpgradeTemplate

// Styles
const main = {
  fontFamily: "Roboto, Arial, sans-serif",
  backgroundColor: "#eff6ff",
  color: "#000000",
}

const container = {
  paddingTop: "10px",
  maxWidth: "600px",
  margin: "0 auto",
}

const headerTopStyle = {
  backgroundColor: "#7c3aed",
  padding: "10px 16px",
  marginBottom: "20px",
}

const logoColumnStyle = {
  width: "30%",
  verticalAlign: "middle",
}

const navColumnStyle = {
  width: "70%",
  verticalAlign: "middle",
  textAlign: "right" as const,
}

const logoTopStyle = {
  height: "25px",
}

const navLinkStyle = {
  fontSize: "14px",
  color: "#ffffff",
  textDecoration: "none",
  margin: "0 10px",
  fontWeight: "600",
}

const headerStyle = {
  textAlign: "center" as const,
  backgroundColor: "#ffffff",
  padding: "10px 20px",
}

const logoStyle = {
  height: "100px",
}

const heroSectionStyle = {
  position: "relative" as const,
  background: "linear-gradient(to top, #4438ca7a, #0000)",
}

const heroContentStyle = {
  textAlign: "center" as const,
  padding: "20px 0",
}

const headingStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#9333ea",
  margin: "0 0 10px 0",
}

const subTextStyle = {
  fontSize: "18px",
  color: "#000000",
  margin: "0 0 5px 0",
  fontWeight: "500",
}

const subTextApprovedStyle = {
  fontSize: "18px",
  color: "#000000",
  margin: "0 0 20px 0",
  fontWeight: "500",
}

const ctaButtonStyle = {
  backgroundColor: "#5b21b6",
  color: "#ffffff",
  borderRadius: "35px",
  padding: "15px 24px",
  textDecoration: "none",
  fontSize: "12px",
  display: "inline-block",
}

const heroImageContainerStyle = {
  position: "relative" as const,
  width: "100%",
  maxWidth: "600px",
  margin: "0 auto",
}

const heroImageStyle = {
  width: "100%",
  maxWidth: "600px",
  height: "auto",
  display: "block",
}

const heroOverlayStyle = {
  position: "absolute" as const,
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(to top, #4438ca7a, #0000)",
}

const featuresSectionStyle = {
  backgroundColor: "#fdf2d6",
  padding: "40px 20px",
  textAlign: "center" as const,
}

const subHeadingStyle = {
  fontSize: "17px",
  fontWeight: "bold",
  color: "#0000ee",
  margin: "0 0 30px 0",
  lineHeight: "1.4",
  padding: "0 20px",
}

const featuresRowStyle = {
  marginBottom: "20px",
}

const featureColumnStyle = {
  width: "50%",
  verticalAlign: "top" as const,
  padding: "0 10px",
}

const featureCardPinkStyle = {
  backgroundColor: "#f9cad0",
  padding: "18px",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  marginBottom: "5px",
}

const featureCardYellowStyle = {
  backgroundColor: "#fdd07f",
  padding: "18px",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  marginBottom: "5px",
}

const featureCardGreenStyle = {
  backgroundColor: "#e8eae5",
  padding: "18px",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  marginBottom: "5px",
}

const featureCardGrayStyle = {
  backgroundColor: "#d6d6d6",
  padding: "18px",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  marginBottom: "5px",
}

const featureIconContainerStyle = {
  width: "25px",
  height: "25px",
  backgroundColor: "#fbbf24",
  borderRadius: "4px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "10px",
}

const featureCardTextStyle = {
  fontSize: "13px",
  color: "#000",
  textAlign: "left" as const,
  margin: "0",
  lineHeight: "1.5",
}

const topFeaturedSectionStyle = {
  backgroundColor: "#feefef",
  padding: "40px 20px",
  textAlign: "center" as const,
}

const topFeaturedHeadingStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#0000ee",
  margin: "0 0 10px 0",
}

const topFeaturedTextStyle = {
  fontSize: "14px",
  fontWeight: "500",
  color: "#000",
  margin: "0 0 20px 0",
  padding: "0 30px",
  lineHeight: "1.5",
}

const topFeaturedImageStyle = {
  width: "100%",
  maxWidth: "600px",
  height: "auto",
  display: "block",
  margin: "0 auto",
}

const footerSectionStyle = {
  backgroundColor: "#f9fafb",
  padding: "30px 20px",
  textAlign: "center" as const,
}

const socialMediaContainerStyle = {
  textAlign: "center" as const,
  marginBottom: "20px",
}

const socialIconStyle = {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  margin: "0 4px",
  display: "inline-block",
}

const footerNavStyle = {
  fontSize: "12px",
  color: "#374151",
  margin: "10px 0",
}

const footerDescStyle = {
  fontSize: "12px",
  color: "#374151",
  margin: "10px 0",
  padding: "0 20px",
  lineHeight: "1.5",
}

const footerCopyrightStyle = {
  fontSize: "12px",
  color: "#374151",
  margin: "10px 0 20px 0",
}

const footerText = {
  fontSize: "12px",
  color: "#6b7280",
  lineHeight: "1.5",
  margin: "10px 0",
}

const linkStyle = {
  color: "#6366f1",
  textDecoration: "none",
}

const footerAddress = {
  fontSize: "12px",
  color: "#6b7280",
  margin: "10px 0 0 0",
}
