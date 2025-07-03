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

export const ResumeEmailTemplate = () => {
  return (
    <Html>
      <Head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
            * {
              font-family: 'DM Sans', Arial, sans-serif;
            }
            
            /* Email-safe responsive styles */
            @media only screen and (max-width: 480px) {
              .hero-text-column {
                width: 100% !important;
                display: block !important;
                padding-right: 0 !important;
                padding-bottom: 20px !important;
              }
              .hero-image-column {
                width: 100% !important;
                display: block !important;
                text-align: center !important;
              }
              .hero-image {
                width: 200px !important;
                max-width: 200px !important;
                height: auto !important;
                padding-left: 0 !important;
              }
              .hero-name {
                font-size: 28px !important;
                line-height: 1.2 !important;
              }
              .hero-greeting {
                font-size: 16px !important;
              }
              .hero-description {
                font-size: 13px !important;
                line-height: 1.5 !important;
              }
              .experience-column {
                width: 100% !important;
                display: block !important;
                padding-right: 0 !important;
                padding-bottom: 20px !important;
              }
              .education-column {
                width: 100% !important;
                display: block !important;
                padding-right: 0 !important;
                padding-bottom: 15px !important;
              }
              .reference-column {
                width: 100% !important;
                display: block !important;
                padding-right: 0 !important;
                padding-bottom: 15px !important;
              }
              .interest-column {
                width: 50% !important;
                padding: 5px !important;
              }
              .section-title {
                font-size: 24px !important;
              }
            }
          `}
        </style>
      </Head>
      <Preview>Hello! John Mochani - Professional Resume</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header with Logo */}
          <Section style={logoSectionStyle}>
            <Img
              src="https://cdn.templates.unlayer.com/assets/1685710019037-Group%2025.png"
              alt="Company Logo"
              style={logoStyle}
            />
          </Section>

          {/* Improved Hero Section */}
          <Section style={heroSectionStyle}>
            <table width="100%" cellPadding="0" cellSpacing="0" >
              <tr>
                <td className="hero-text-column" style={heroTextColumnStyle}>
                  <Text className="hero-greeting" style={greetingStyle}>HELLO!</Text>
                  <Text className="hero-name" style={nameStyle}>JOHN MOCHANI</Text>
                  <Hr style={heroDividerStyle} />
                  <Text className="hero-description" style={heroDescriptionStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit, ex sit amet tincidunt
                    aliquam, dui metus varius purus, condimentum vestibulum diam enim in eros. Aliquam posuere eget arcu
                    vel pellentesque. Duis ut convallis neque, non imperdiet velit. Nullam rhoncus bibendum lectus. Sed
                    dapibus interdum dui sed mollis.
                  </Text>
                </td>
            
              </tr>
            </table>
          </Section>

          {/* Experience Section */}
          <Section style={experienceSectionStyle}>
            <Text className="section-title" style={sectionTitleStyle}>EXPERIENCE</Text>
            <table width="100%" cellPadding="0" cellSpacing="0" >
              <tr>
                <td className="experience-column" style={experienceColumnStyle}>
                  <Text style={companyNameStyle}>Company Name</Text>
                  <Text style={locationStyle}>Location</Text>
                  <Text style={jobTitleStyle}>Enter Your Job Position</Text>
                  <Text style={dateStyle}>From 2020 - Present</Text>
                  <Text style={descriptionStyle}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever.
                  </Text>
                </td>
                <td className="experience-column" style={experienceColumnStyle}>
                  <Text style={companyNameStyle}>Company Name</Text>
                  <Text style={locationStyle}>Location</Text>
                  <Text style={jobTitleStyle}>Enter Your Job Position</Text>
                  <Text style={dateHighlightStyle}>From 2020 - Present</Text>
                  <Text style={descriptionStyle}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever.
                  </Text>
                </td>
              </tr>
            </table>
          </Section>

          {/* Education Section */}
          <Section style={educationSectionStyle}>
            <Text className="section-title" style={sectionTitleWhiteStyle}>EDUCATION</Text>
            <table width="100%" cellPadding="0" cellSpacing="0" >
              <tr>
                <td className="education-column" style={educationColumnStyle}>
                  <Text style={degreeNameStyle}>Your Degree Name</Text>
                  <Text style={universityStyle}>University / College Location: Lorem ipsum Year of 2014 - 2016</Text>
                </td>
                <td className="education-column" style={educationColumnStyle}>
                  <Text style={degreeNameStyle}>Your Degree Name</Text>
                  <Text style={universityStyle}>University / College Location: Lorem ipsum Year of 2014 - 2016</Text>
                </td>
                <td className="education-column" style={educationColumnStyle}>
                  <Text style={degreeNameStyle}>Your Degree Name</Text>
                  <Text style={universityStyle}>University / College Location: Lorem ipsum Year of 2014 - 2016</Text>
                </td>
              </tr>
            </table>
          </Section>

          {/* Interests Section */}
          <Section style={interestsSectionStyle}>
            <Text className="section-title" style={sectionTitleStyle}>INTERESTS</Text>
            <table width="100%" cellPadding="0" cellSpacing="0" >
              <tr>
                <td className="interest-column" style={interestColumnStyle}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1685689051869-Group%2023.png"
                    alt="Painting"
                    style={interestIconStyle}
                  />
                  <Text style={interestLabelStyle}>Painting</Text>
                </td>
                <td className="interest-column" style={interestColumnStyle}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1685689045209-Group%2024.png"
                    alt="Photography"
                    style={interestIconStyle}
                  />
                  <Text style={interestLabelStyle}>Photography</Text>
                </td>
                <td className="interest-column" style={interestColumnStyle}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1685689049399-Group%2025.png"
                    alt="Reading"
                    style={interestIconStyle}
                  />
                  <Text style={interestLabelStyle}>Reading</Text>
                </td>
                <td className="interest-column" style={interestColumnStyle}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1685689041046-Group%2027.png"
                    alt="Football"
                    style={interestIconStyle}
                  />
                  <Text style={interestLabelStyle}>Football</Text>
                </td>
              </tr>
              <tr>
                <td className="interest-column" style={interestColumnStyle}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1685689045209-Group%2024.png"
                    alt="Photography"
                    style={interestIconStyle}
                  />
                  <Text style={interestLabelStyle}>Photography</Text>
                </td>
                <td className="interest-column" style={interestColumnStyle}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1685689049399-Group%2025.png"
                    alt="Reading"
                    style={interestIconStyle}
                  />
                  <Text style={interestLabelStyle}>Reading</Text>
                </td>
                <td className="interest-column" style={interestColumnStyle}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1685689041046-Group%2027.png"
                    alt="Football"
                    style={interestIconStyle}
                  />
                  <Text style={interestLabelStyle}>Football</Text>
                </td>
                <td className="interest-column" style={interestColumnStyle}></td>
              </tr>
            </table>
          </Section>

          {/* References Section */}
          <Section style={referencesSectionStyle}>
            <Text className="section-title" style={sectionTitleWhiteStyle}>REFERENCES</Text>
            <table width="100%" cellPadding="0" cellSpacing="0" >
              <tr>
                <td className="reference-column" style={referenceColumnStyle}>
                  <Text style={referenceNameStyle}>Glenin M. Gregory</Text>
                  <Text style={referenceDetailsStyle}>
                    University / College Location: Lorem ipsum Year of 2014 - 2016
                  </Text>
                </td>
                <td className="reference-column" style={referenceColumnStyle}>
                  <Text style={referenceNameStyle}>Reference Name</Text>
                  <Text style={referenceDetailsStyle}>
                    University / College Location: Lorem ipsum Year of 2014 - 2016
                  </Text>
                </td>
                <td className="reference-column" style={referenceColumnStyle}>
                  <Text style={referenceNameStyle}>Company Name</Text>
                  <Text style={referenceDetailsStyle}>Location</Text>
                  <Text style={referenceNameStyle}>Enter Your Job Position</Text>
                  <Text style={referenceDetailsStyle}>From 2020 - Present</Text>
                </td>
              </tr>
            </table>
          </Section>

          {/* Footer Section */}
          <Section style={footerSectionStyle}>
            <Row>
              <Column style={socialIconsColumnStyle}>
                <Link href="#" style={socialLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-black/facebook.png"
                    alt="Facebook"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-black/twitter.png"
                    alt="Twitter"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-black/linkedin.png"
                    alt="LinkedIn"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle}>
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-black/instagram.png"
                    alt="Instagram"
                    style={socialIconStyle}
                  />
                </Link>
              </Column>
            </Row>
            <Hr style={footerDividerStyle} />
            <Text style={addressStyle}>2261 Market Street #4667 San Francisco, CA 94114</Text>
            <Text style={companyInfoStyle}>All rights reserved. Company No. 94114</Text>
            <Text style={copyrightStyle}>Copyright © YourCompany | All Rights Reserved</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default ResumeEmailTemplate

// Styles
const bodyStyle = {
  backgroundColor: "#efefef",
  fontFamily: "'DM Sans', Arial, sans-serif",
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

const logoSectionStyle = {
  backgroundColor: "#2b2821",
  padding: "15px 20px",
  borderBottom: "2px solid #4b4a48",
}

const logoStyle = {
  width: "120px",
  height: "auto",
  display: "block",
}

const heroSectionStyle = {
  backgroundColor: "#2b2821",
  padding: "30px 20px",
}

const heroTextColumnStyle = {
  width: "60%",
  verticalAlign: "top" as const,
  paddingRight: "20px",
}

const heroImageColumnStyle = {
  width: "40%",
  verticalAlign: "top" as const,
  textAlign: "center" as const,
}

const greetingStyle = {
  fontSize: "18px",
  fontWeight: "400",
  color: "#ffffff",
  margin: "0 0 5px 0",
  letterSpacing: "1px",
}

const nameStyle = {
  fontSize: "36px",
  fontWeight: "800",
  color: "#ffffff",
  margin: "0 0 15px 0",
  lineHeight: "1.1",
  letterSpacing: "1px",
}

const heroDividerStyle = {
  border: "none",
  borderTop: "1px solid #4b4a48",
  margin: "15px 0",
  width: "100%",
}

const heroDescriptionStyle = {
  fontSize: "14px",
  color: "#fffff1",
  lineHeight: "1.6",
  margin: "0",
  textAlign: "left" as const,
}

const heroImageStyle = {
  width: "100%",
  height: "auto",
  maxWidth: "240px",
  maxHeight: "300px",
  objectFit: "cover" as const,
  borderRadius: "4px",
  display: "block",
  margin: "0 auto",
}

const experienceSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "40px 20px",
}

const sectionTitleStyle = {
  fontSize: "32px",
  fontWeight: "800",
  color: "#2e2b24",
  margin: "0 0 30px 0",
  letterSpacing: "1px",
}

const sectionTitleWhiteStyle = {
  fontSize: "32px",
  fontWeight: "800",
  color: "#ffffff",
  margin: "0 0 30px 0",
  letterSpacing: "1px",
}

const experienceRowStyle = {
  marginBottom: "20px",
}

const experienceColumnStyle = {
  width: "50%",
  verticalAlign: "top" as const,
  paddingRight: "15px",
}

const companyNameStyle = {
  fontSize: "14px",
  fontWeight: "700",
  color: "#000000",
  margin: "0 0 3px 0",
}

const locationStyle = {
  fontSize: "12px",
  color: "#000000",
  margin: "0 0 8px 0",
}

const jobTitleStyle = {
  fontSize: "14px",
  fontWeight: "700",
  color: "#000000",
  margin: "0 0 3px 0",
}

const dateStyle = {
  fontSize: "12px",
  color: "#000000",
  margin: "0 0 12px 0",
}

const dateHighlightStyle = {
  fontSize: "12px",
  color: "#0284c7",
  margin: "0 0 12px 0",
  fontWeight: "500",
}

const descriptionStyle = {
  fontSize: "14px",
  color: "#000000",
  lineHeight: "1.5",
  margin: "0",
}

const educationSectionStyle = {
  backgroundColor: "#2e2b24",
  padding: "40px 20px",
}

const educationRowStyle = {
  marginBottom: "20px",
}

const educationColumnStyle = {
  width: "33.33%",
  verticalAlign: "top" as const,
  paddingRight: "15px",
}

const degreeNameStyle = {
  fontSize: "14px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 8px 0",
}

const universityStyle = {
  fontSize: "12px",
  color: "#ffffff",
  lineHeight: "1.4",
  margin: "0",
}

const interestsSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "40px 20px",
}

const interestsRowStyle = {
  marginBottom: "20px",
}

const interestColumnStyle = {
  width: "25%",
  textAlign: "center" as const,
  verticalAlign: "top" as const,
  padding: "10px",
}

const interestIconStyle = {
  width: "60px",
  height: "60px",
  display: "block",
  margin: "0 auto 10px auto",
}

const interestLabelStyle = {
  fontSize: "12px",
  color: "#000000",
  fontStyle: "italic",
  margin: "0",
  textAlign: "center" as const,
}

const referencesSectionStyle = {
  backgroundColor: "#2e2b24",
  padding: "40px 20px",
}

const referencesRowStyle = {
  marginBottom: "20px",
}

const referenceColumnStyle = {
  width: "33.33%",
  verticalAlign: "top" as const,
  paddingRight: "15px",
}

const referenceNameStyle = {
  fontSize: "14px",
  fontWeight: "700",
  color: "#ffffff",
  margin: "0 0 8px 0",
}

const referenceDetailsStyle = {
  fontSize: "12px",
  color: "#ffffff",
  lineHeight: "1.4",
  margin: "0 0 8px 0",
}

const footerSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "30px 20px",
  textAlign: "center" as const,
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
  borderTop: "1px solid #e2e8f0",
  margin: "20px 0",
}

const addressStyle = {
  fontSize: "12px",
  color: "#666666",
  margin: "0 0 5px 0",
}

const companyInfoStyle = {
  fontSize: "12px",
  color: "#666666",
  margin: "0 0 15px 0",
}

const copyrightStyle = {
  fontSize: "12px",
  color: "#666666",
  margin: "0",
}