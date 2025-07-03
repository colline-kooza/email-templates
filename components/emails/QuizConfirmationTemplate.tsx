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

export const QuizConfirmationTemplate = () => {
  return (
    <Html>
      <Head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
            * {
              font-family: 'DM Sans', Arial, sans-serif;
            }
          `}
        </style>
      </Head>
      <Preview>Quiz Registration Confirmation - Adventure Awaits</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header Section */}
          <Section style={headerSectionStyle}>
            <Text style={titleStyle}>Adventure Awaits</Text>
            <Text style={subtitleStyle}>Quiz Registration Successful</Text>
          </Section>

          {/* Main Image Section */}
          <Section style={imageSectionStyle}>
            <Img
              src="https://cdn.templates.unlayer.com/assets/1693207550420-1.png"
              alt="Confirmation Image"
              style={mainImageStyle}
            />
          </Section>

          {/* Confirmation Content */}
          <Section style={contentSectionStyle}>
            <Text style={confirmationTitleStyle}>Confirmation</Text>
            <Text style={confirmationTextStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </Text>
            <Link href="https://your-link.com" style={buttonStyle}>
              Proceed
            </Link>
          </Section>

          {/* Client Testimonials Section */}
          <Section style={testimonialSectionStyle}>
            <Text style={testimonialTitleStyle}>Our Client Says</Text>
            <Row style={testimonialRowStyle}>
              <Column style={testimonialColumnStyle}>
                <Section style={testimonialBoxStyle}>
                  <Text style={clientNameStyle}>Client Name</Text>
                  <Text style={clientDesignationStyle}>Customer Designation</Text>
                  <Text style={clientTestimonialStyle}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever.
                  </Text>
                </Section>
              </Column>
              <Column style={testimonialColumnStyle}>
                <Section style={testimonialBoxStyle}>
                  <Text style={clientNameStyle}>Client Name</Text>
                  <Text style={clientDesignationStyle}>Customer Designation</Text>
                  <Text style={clientTestimonStyle}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever.
                  </Text>
                </Section>
              </Column>
            </Row>
          </Section>

          {/* Footer Section */}
          <Section style={footerSectionStyle}>
            <Row>
              <Column style={socialIconsStyle}>
                <Link href="#" style={iconLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                    alt="Facebook"
                    style={iconStyle}
                  />
                </Link>
                <Link href="#" style={iconLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                    alt="Twitter"
                    style={iconStyle}
                  />
                </Link>
                <Link href="#" style={iconLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                    alt="LinkedIn"
                    style={iconStyle}
                  />
                </Link>
                <Link href="#" style={iconLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                    alt="Instagram"
                    style={iconStyle}
                  />
                </Link>
              </Column>
            </Row>
            <Hr style={hrStyle} />
            <Text style={footerNavStyle}>
              <Link href="#" style={footerLinkStyle}>
                Home
              </Link>{" "}
              |
              <Link href="#" style={footerLinkStyle}>
                {" "}
                Page
              </Link>{" "}
              |
              <Link href="#" style={footerLinkStyle}>
                {" "}
                About
              </Link>{" "}
              |
              <Link href="#" style={footerLinkStyle}>
                {" "}
                Contact us
              </Link>
            </Text>
            <Text style={footerDescriptionStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </Text>
            <Text style={copyrightStyle}>Copyright © YourCompany | All Rights Reserved</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default QuizConfirmationTemplate

// Styles
const bodyStyle = {
  backgroundColor: "#f2f2f2",
  fontFamily: "'DM Sans', Arial, sans-serif",
  margin: "0",
  padding: "20px 0",
  lineHeight: "1.6",
}

const containerStyle = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "0",
  borderRadius: "8px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
  overflow: "hidden",
}

const headerSectionStyle = {
  backgroundColor: "#ecbb3b",
  padding: "30px 20px",
  textAlign: "center" as const,
}

const titleStyle = {
  fontSize: "32px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 8px 0",
  lineHeight: "1.2",
}

const subtitleStyle = {
  fontSize: "18px",
  fontWeight: "400",
  color: "#ffffff",
  margin: "0",
  opacity: "0.95",
}

const imageSectionStyle = {
  padding: "30px 20px",
  textAlign: "center" as const,
  backgroundColor: "#ffffff",
}

const mainImageStyle = {
  width: "100%",
  maxWidth: "560px",
  height: "auto",
  borderRadius: "8px",
  display: "block",
}

const contentSectionStyle = {
  padding: "20px 30px 30px 30px",
  textAlign: "center" as const,
  backgroundColor: "#ffffff",
}

const confirmationTitleStyle = {
  fontSize: "28px",
  fontWeight: "600",
  color: "#1a1a1a",
  margin: "0 0 20px 0",
  lineHeight: "1.3",
}

const confirmationTextStyle = {
  fontSize: "16px",
  color: "#555555",
  lineHeight: "1.6",
  margin: "0 0 30px 0",
  textAlign: "left" as const,
}

const buttonStyle = {
  backgroundColor: "#eab438",
  color: "#ffffff",
  borderRadius: "6px",
  padding: "14px 40px",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  border: "none",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
}

const testimonialSectionStyle = {
  backgroundColor: "#f8f9fa",
  padding: "40px 20px",
  textAlign: "center" as const,
}

const testimonialTitleStyle = {
  fontSize: "28px",
  fontWeight: "600",
  color: "#1a1a1a",
  margin: "0 0 30px 0",
  lineHeight: "1.3",
}

const testimonialRowStyle = {
  backgroundColor: "#ecbb3b",
  borderRadius: "8px",
  overflow: "hidden",
}

const testimonialColumnStyle = {
  width: "50%",
  verticalAlign: "top" as const,
}

const testimonialBoxStyle = {
  padding: "25px 20px",
  textAlign: "left" as const,
  borderRight: "1px solid rgba(255,255,255,0.2)",
}

const clientNameStyle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#1a1a1a",
  margin: "0 0 5px 0",
}

const clientDesignationStyle = {
  fontSize: "14px",
  fontWeight: "500",
  color: "#2d3748",
  margin: "0 0 12px 0",
}

const clientTestimonialStyle = {
  fontSize: "14px",
  color: "#1a1a1a",
  lineHeight: "1.5",
  margin: "0",
}

const clientTestimonStyle = {
  fontSize: "14px",
  color: "#1a1a1a",
  lineHeight: "1.5",
  margin: "0",
}

const footerSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "30px 20px",
  textAlign: "center" as const,
  borderTop: "1px solid #e2e8f0",
}

const socialIconsStyle = {
  textAlign: "center" as const,
  padding: "0 0 20px 0",
}

const iconLinkStyle = {
  textDecoration: "none",
  margin: "0 8px",
  display: "inline-block",
}

const iconStyle = {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
}

const hrStyle = {
  border: "none",
  borderTop: "1px solid #e2e8f0",
  margin: "20px 0",
}

const footerNavStyle = {
  fontSize: "14px",
  color: "#666666",
  margin: "0 0 15px 0",
  textAlign: "center" as const,
}

const footerLinkStyle = {
  color: "#666666",
  textDecoration: "none",
  margin: "0 2px",
}

const footerDescriptionStyle = {
  fontSize: "14px",
  color: "#666666",
  lineHeight: "1.5",
  margin: "0 0 15px 0",
  maxWidth: "400px",
  marginLeft: "auto",
  marginRight: "auto",
}

const copyrightStyle = {
  fontSize: "12px",
  color: "#999999",
  margin: "0",
}
