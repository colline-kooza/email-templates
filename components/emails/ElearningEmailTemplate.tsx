import { Body, Button, Container, Head, Heading, Html, Preview, Text, Link, Font, Section, Row, Column, Hr } from "@react-email/components"

interface ElearningEmailTemplateProps {
  companyName?: string
  joinUrl?: string
  viewInstructorsUrl?: string
  subscribeUrl?: string
  viewOutcomesUrl?: string
  viewCoursesUrl?: string
  getStartedUrl?: string
  supportUrl?: string
  returnPolicyUrl?: string
  aboutUsUrl?: string
  unsubscribeUrl?: string
  year?: string
}

export default function ElearningEmailTemplate({
  companyName = "EduLearn Academy",
  joinUrl = "https://example.com/join",
  viewInstructorsUrl = "https://example.com/instructors",
  subscribeUrl = "https://example.com/subscribe",
  viewOutcomesUrl = "https://example.com/outcomes",
  viewCoursesUrl = "https://example.com/courses",
  getStartedUrl = "https://example.com/start",
  supportUrl = "#",
  returnPolicyUrl = "#",
  aboutUsUrl = "#",
  unsubscribeUrl = "#",
  year = "2024",
}: ElearningEmailTemplateProps) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Arial"
          fallbackFontFamily={["Helvetica", "sans-serif"]}
          fontWeight={400}
          fontStyle="normal"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          {`
            /* Reset styles for better email compatibility */
            * { margin: 0; padding: 0; box-sizing: border-box; }
            
            /* Mobile responsive styles */
            @media screen and (max-width: 600px) {
              .container { width: 100% !important; max-width: 100% !important; }
              .mobile-stack { 
                width: 100% !important; 
                display: block !important; 
                box-sizing: border-box !important;
              }
              .mobile-center { text-align: center !important; }
              .mobile-padding { padding: 20px !important; }
              .mobile-padding-small { padding: 15px !important; }
              .mobile-text-large { font-size: 28px !important; line-height: 1.2 !important; }
              .mobile-text-medium { font-size: 20px !important; line-height: 1.3 !important; }
              .mobile-button { 
                padding: 15px 25px !important; 
                font-size: 16px !important;
                display: block !important;
                width: auto !important;
                text-align: center !important;
              }
              .mobile-hide { display: none !important; }
              .mobile-full-width { width: 100% !important; }
              .mobile-text-center { text-align: center !important; }
              .feature-item-mobile { 
                display: block !important;
                text-align: center !important;
                margin-bottom: 15px !important;
              }
              .feature-icon-mobile { 
                display: block !important;
                margin: 0 auto 8px auto !important;
                text-align: center !important;
              }
            }
            
            /* Outlook specific fixes */
            table { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
            td { border-collapse: collapse; }
          `}
        </style>
      </Head>
      <Preview>Transform Your Learning Journey - Join Thousands of Students</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle} className="container">
          
          {/* Header Section */}
          <table width="100%" cellPadding="0" cellSpacing="0" border={0} style={headerSectionStyle}>
            <tr>
              <td style={headerContentStyle} className="mobile-padding">
                <Text style={taglineStyle}>DEVELOPED BY TEACHERS</Text>
                <Heading style={mainHeadingStyle} className="mobile-text-large">
                  LEARN WITHOUT
                  <br />
                   LIMIT
                </Heading>
                <Text style={descriptionStyle}>
                  Join thousands of students learning from industry experts. Access premium courses, interactive content, and personalized learning paths designed to accelerate your career growth.
                </Text>
                <div style={buttonContainerStyle}>
                  <Button href={joinUrl} style={primaryButtonStyle} className="mobile-button">
                    Join for free
                  </Button>
                </div>
              </td>
            </tr>
          </table>

          {/* Statistics Section */}
          <table width="100%" cellPadding="0" cellSpacing="0" border={0} style={statsContainerStyle}>
            <tr>
              <td>
                <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                  <tr>
                    <td style={statItemStyle} className="mobile-stack">
                      <Text style={statNumberStyle}>50K+</Text>
                      <Text style={statLabelStyle}>Active Students</Text>
                    </td>
                    <td style={statItemStyle} className="mobile-stack">
                      <Text style={statNumberStyle}>500+</Text>
                      <Text style={statLabelStyle}>Expert Courses</Text>
                    </td>
                    <td style={statItemStyle} className="mobile-stack">
                      <Text style={statNumberStyle}>95%</Text>
                      <Text style={statLabelStyle}>Success Rate</Text>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          {/* Featured Courses Section */}
          <table width="100%" cellPadding="0" cellSpacing="0" border={0} style={sectionStyle}>
            <tr>
              <td style={sectionContentStyle} className="mobile-padding">
                <Heading style={sectionHeadingStyle} className="mobile-text-medium mobile-text-center">
                  Featured Courses This Month
                </Heading>
                <Text style={sectionTextStyle}>
                  Explore our handpicked selection of premium courses covering Web Development, Data Science, Digital Marketing, and AI/Machine Learning. Each course includes hands-on projects and industry certifications.
                </Text>
                <div style={courseListStyle}>
                  <Text style={courseItemStyle}>• Full Stack Web Development</Text>
                  <Text style={courseItemStyle}>• Python for Data Science</Text>
                  <Text style={courseItemStyle}>• Digital Marketing Mastery</Text>
                  <Text style={courseItemStyle}>• AI & Machine Learning</Text>
                </div>
                <div style={buttonContainerStyle}>
                  <Button href={viewCoursesUrl} style={secondaryButtonStyle} className="mobile-button">
                    View All Courses
                  </Button>
                </div>
              </td>
            </tr>
          </table>

          {/* Instructors Section */}
          <table width="100%" cellPadding="0" cellSpacing="0" border={0} style={altSectionStyle}>
            <tr>
              <td style={sectionContentStyle} className="mobile-padding">
                <Heading style={sectionHeadingStyle} className="mobile-text-medium mobile-text-center">
                  Learn from the Best Instructors
                </Heading>
                <Text style={sectionTextStyle}>
                  Our instructors are industry professionals from top companies like Google, Microsoft, and Meta. They bring real-world experience and cutting-edge knowledge directly to your learning journey.
                </Text>
                <div style={instructorListStyle}>
                  <Text style={instructorItemStyle}>✓ Industry veterans with 10+ years experience</Text>
                  <Text style={instructorItemStyle}>✓ Current professionals at top tech companies</Text>
                  <Text style={instructorItemStyle}>✓ Dedicated mentorship and career guidance</Text>
                </div>
                <div style={buttonContainerStyle}>
                  <Button href={viewInstructorsUrl} style={secondaryButtonStyle} className="mobile-button">
                    Meet Our Instructors
                  </Button>
                </div>
              </td>
            </tr>
          </table>

          {/* Mission Section */}
          <table width="100%" cellPadding="0" cellSpacing="0" border={0} style={missionSectionStyle}>
            <tr>
              <td style={missionContentStyle} className="mobile-padding">
                <Text style={missionTaglineStyle}>Our Mission</Text>
                <Heading style={missionHeadingStyle} className="mobile-text-medium">
                  Thousands of courses authored by industry experts
                </Heading>
                <Text style={missionDescStyle}>
                  We're democratizing education by making high-quality learning accessible to everyone, everywhere. Join our global community of learners and transform your career today.
                </Text>
                <div style={missionButtonContainerStyle}>
                  <Button href={subscribeUrl} style={darkButtonStyle} className="mobile-button">
                    Subscribe Now
                  </Button>
                </div>
              </td>
            </tr>
          </table>

          {/* Key Features Section */}
          <table width="100%" cellPadding="0" cellSpacing="0" border={0} style={sectionStyle}>
            <tr>
              <td style={sectionContentStyle} className="mobile-padding">
                <Heading style={sectionHeadingStyle} className="mobile-text-medium mobile-text-center">
                  Why Choose Our Platform?
                </Heading>
                <div style={featureListStyle}>
                  <div style={featureItemStyle} className="feature-item-mobile">
                    <Text style={featureIconStyle} className="feature-icon-mobile">🎯</Text>
                    <Text style={featureTextStyle}>Personalized Learning Paths</Text>
                  </div>
                  <div style={featureItemStyle} className="feature-item-mobile">
                    <Text style={featureIconStyle} className="feature-icon-mobile">📱</Text>
                    <Text style={featureTextStyle}>Mobile-First Design</Text>
                  </div>
                  <div style={featureItemStyle} className="feature-item-mobile">
                    <Text style={featureIconStyle} className="feature-icon-mobile">🏆</Text>
                    <Text style={featureTextStyle}>Industry Certifications</Text>
                  </div>
                  <div style={featureItemStyle} className="feature-item-mobile">
                    <Text style={featureIconStyle} className="feature-icon-mobile">💬</Text>
                    <Text style={featureTextStyle}>24/7 Community Support</Text>
                  </div>
                </div>
                <div style={buttonContainerStyle}>
                  <Button href={getStartedUrl} style={secondaryButtonStyle} className="mobile-button">
                    Get Started
                  </Button>
                </div>
              </td>
            </tr>
          </table>

          {/* Testimonial Section */}
          <table width="100%" cellPadding="0" cellSpacing="0" border={0} style={testimonialSectionStyle}>
            <tr>
              <td style={testimonialContentStyle} className="mobile-padding">
                <Text style={testimonialQuoteStyle}>
                  "This platform completely transformed my career. The quality of instruction and hands-on projects gave me the confidence to land my dream job in tech."
                </Text>
                <Text style={testimonialAuthorStyle}>Sarah Johnson, Software Engineer at Meta</Text>
                <div style={testimonialRatingStyle}>
                  <Text style={starsStyle}>⭐⭐⭐⭐⭐</Text>
                  <Text style={ratingTextStyle}>Rated 4.9/5 by 10,000+ students</Text>
                </div>
              </td>
            </tr>
          </table>

          {/* Learner Outcomes Section */}
          <table width="100%" cellPadding="0" cellSpacing="0" border={0} style={altSectionStyle}>
            <tr>
              <td style={sectionContentStyle} className="mobile-padding">
                <Heading style={sectionHeadingStyle} className="mobile-text-medium mobile-text-center">
                  Proven Learning Outcomes
                </Heading>
                <Text style={sectionTextStyle}>
                  Our students don't just learn—they succeed. With comprehensive career support, portfolio reviews, and job placement assistance, we ensure your learning translates to real-world success.
                </Text>
                <div style={outcomeListStyle}>
                  <Text style={outcomeItemStyle}>📈 87% career advancement within 6 months</Text>
                  <Text style={outcomeItemStyle}>💰 Average 40% salary increase</Text>
                  <Text style={outcomeItemStyle}>🚀 500+ hiring partner companies</Text>
                </div>
                <div style={buttonContainerStyle}>
                  <Button href={viewOutcomesUrl} style={secondaryButtonStyle} className="mobile-button">
                    View Success Stories
                  </Button>
                </div>
              </td>
            </tr>
          </table>

          {/* Call to Action Section */}
          <table width="100%" cellPadding="0" cellSpacing="0" border={0} style={ctaSectionStyle}>
            <tr>
              <td style={ctaContentStyle} className="mobile-padding">
                <Heading style={ctaHeadingStyle} className="mobile-text-medium">
                  Ready to Transform Your Career?
                </Heading>
                <Text style={ctaTextStyle}>
                  Join over 50,000 students who are already building their future. Start with our free courses today!
                </Text>
                <div style={ctaButtonContainerStyle}>
                  <Button href={joinUrl} style={ctaButtonStyle} className="mobile-button">
                    Start Learning Today
                  </Button>
                </div>
              </td>
            </tr>
          </table>

          {/* Footer */}
          <Container>
            <Section  style={footerStyle}>
              <Row>
                <Column style={footerColumnStyle} className="mobile-stack ">
                  <Heading style={footerHeadingStyle}>Store Hours</Heading>
                  <Text style={footerTextStyle}>Monday - Friday: 9AM - 8PM</Text>
                  <Text style={footerTextStyle}>Saturday: 10AM - 6PM</Text>
                  <Text style={footerTextStyle}>Sunday: 12PM - 5PM</Text>
                </Column>
                <Column style={footerColumnStyle} className="mobile-stack">
                  <Heading style={footerHeadingStyle}>Contact Info</Heading>
                  <Text style={footerTextStyle}>
                    <Link href="tel:0700774018" style={footerLinkStyle}>
                      0700774018
                    </Link>
                  </Text>
                  <Text style={footerTextStyle}>
                    <Link href="mailto:koozacollinz1@gmail.com" style={footerLinkStyle}>
                      koozacollinz1@gmail.com
                    </Link>
                  </Text>
                  <Text style={footerTextStyle}>123 Jewelry Lane, NYC 10001</Text>
                </Column>
              </Row>

              <Hr style={footerDividerStyle} />

              <Row>
                <Column style={footerBottomStyle}>
                  <Text style={copyrightStyle}>© {year} {companyName}. All rights reserved.</Text>
                  <Text style={unsubscribeStyle}>
                    <Link href={unsubscribeUrl} style={footerLinkStyle}>Unsubscribe</Link>
                    {" | "}
                    <Link href="/privacy" style={footerLinkStyle}>Privacy Policy</Link>
                  </Text>
                </Column>
              </Row>
            </Section>
          </Container>
        
        </Container>
      </Body>
    </Html>
  )
}

// Email-safe inline styles with improved responsiveness
const bodyStyle = {
  fontFamily: "Arial, Helvetica, sans-serif",
  margin: "0",
  padding: "0",
  backgroundColor: "#f4f4f4",
  lineHeight: "1.6",
  WebkitTextSizeAdjust: "100%",
  msTextSizeAdjust: "100%",
}

const containerStyle = {
  maxWidth: "600px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
}

// Header Section
const headerSectionStyle = {
  backgroundColor: "#e8f4f3",
  padding: "0",
  marginBottom: "0",
}

const headerContentStyle = {
  padding: "50px 40px",
  textAlign: "center" as const,
}

const taglineStyle = {
  color: "#0a928b",
  fontSize: "12px",
  fontWeight: "700",
  margin: "0 0 20px 0",
  letterSpacing: "1px",
  textTransform: "uppercase" as const,
  display: "block",
}

const mainHeadingStyle = {
  color: "#1a1a1a",
  fontSize: "34px",
  fontWeight: "900",
  lineHeight: "1.1",
  margin: "0 0 25px 0",
  letterSpacing: "-1px",
}

const descriptionStyle = {
  color: "#555555",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0 0 30px 0",
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto",
}

const buttonContainerStyle = {
  marginTop: "30px",
  textAlign: "center" as const,
}

const primaryButtonStyle = {
  backgroundColor: "#169179",
  color: "#ffffff",
  borderRadius: "8px",
  padding: "13px 40px",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "600",
  display: "inline-block",
  border: "none",
  cursor: "pointer",
  textAlign: "center" as const,
}

const secondaryButtonStyle = {
  backgroundColor: "#169179",
  color: "#ffffff",
  borderRadius: "6px",
  padding: "14px 32px",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: "600",
  display: "inline-block",
  border: "none",
  cursor: "pointer",
  textAlign: "center" as const,
}

const darkButtonStyle = {
  backgroundColor: "#1a1a1a",
  color: "#ffffff",
  borderRadius: "8px",
  padding: "15px 40px",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "600",
  display: "inline-block",
  border: "none",
  cursor: "pointer",
  textAlign: "center" as const,
}

// Statistics Section
const statsContainerStyle = {
  backgroundColor: "#169179",
  padding: "70px 20px",
}

const statItemStyle = {
  textAlign: "center" as const,
  padding: "0 20px",
  width: "33.33%",
  verticalAlign: "top",
}

const statNumberStyle = {
  color: "#ffffff",
  fontSize: "25px",
  fontWeight: "900",
  margin: "0 0 8px 0",
  display: "block",
  fontStyle:"italic",
}

const statLabelStyle = {
  color: "#b3e5df",
  fontSize: "12px",
  fontWeight: "500",
  margin: "0",
  display: "block",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
}

// General Section Styles
const sectionStyle = {
  backgroundColor: "#ffffff",
  marginBottom: "0",
}

const altSectionStyle = {
  backgroundColor: "#f9f9f9",
  marginBottom: "0",
}

const sectionContentStyle = {
  padding: "50px 40px",
  textAlign: "left" as const,
}

const sectionHeadingStyle = {
  color: "#1a1a1a",
  fontSize: "25px",
  fontWeight: "700",
  lineHeight: "1.3",
  margin: "0 0 25px 0",
}

const sectionTextStyle = {
  color: "#444444",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0 0 25px 0",
}

// Course List
const courseListStyle = {
  margin: "25px 0",
}

const courseItemStyle = {
  color: "#169179",
  fontSize: "15px",
  fontWeight: "500",
  margin: "12px 0",
  display: "block",
}

// Instructor List
const instructorListStyle = {
  margin: "25px 0",
}

const instructorItemStyle = {
  color: "#169179",
  fontSize: "15px",
  fontWeight: "500",
  margin: "12px 0",
  display: "block",
}

// Mission Section
const missionSectionStyle = {
  backgroundColor: "#169179",
  padding: "60px 20px",
}

const missionContentStyle = {
  textAlign: "center" as const,
  maxWidth: "500px",
  margin: "0 auto",
}

const missionTaglineStyle = {
  color: "#b3e5df",
  fontSize: "12px",
  fontWeight: "600",
  margin: "0 0 20px 0",
  letterSpacing: "1px",
  textTransform: "uppercase" as const,
}

const missionHeadingStyle = {
  color: "#ffffff",
  fontSize: "25px",
  fontWeight: "700",
  lineHeight: "1.3",
  margin: "0 0 25px 0",
}

const missionDescStyle = {
  color: "#b3e5df",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0 0 20px 0",
}

const missionButtonContainerStyle = {
  marginTop: "35px",
  textAlign: "center" as const,
}

// Features Section
const featureListStyle = {
  margin: "30px 0",
}

const featureItemStyle = {
  display: "flex",
  alignItems: "center",
  margin: "1px 0",
}

const featureIconStyle = {
  fontSize: "24px",
  marginRight: "15px",
  display: "inline-block",
  width: "30px",
  flexShrink: "0",
}

const featureTextStyle = {
  color: "#444444",
  fontSize: "15px",
  fontWeight: "500",
  flex: "1",
}

// Testimonial Section
const testimonialSectionStyle = {
  backgroundColor: "#f8fffe",
  padding: "60px 20px",
  borderTop: "1px solid #e0f2f1",
  borderBottom: "1px solid #e0f2f1",
}

const testimonialContentStyle = {
  textAlign: "center" as const,
  maxWidth: "500px",
  margin: "0 auto",
}

const testimonialQuoteStyle = {
  color: "#1a1a1a",
  fontSize: "18px",
  fontStyle: "italic",
  lineHeight: "1.5",
  margin: "0 0 25px 0",
  fontWeight: "400",
}

const testimonialAuthorStyle = {
  color: "#169179",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0 0 20px 0",
}

const testimonialRatingStyle = {
  textAlign: "center" as const,
}

const starsStyle = {
  fontSize: "20px",
  margin: "0 0 8px 0",
  display: "block",
}

const ratingTextStyle = {
  color: "#666666",
  fontSize: "14px",
  fontWeight: "400",
  margin: "0",
}

// Outcomes Section
const outcomeListStyle = {
  margin: "25px 0",
}

const outcomeItemStyle = {
  color: "#169179",
  fontSize: "15px",
  fontWeight: "500",
  margin: "12px 0",
  display: "block",
}

// Call to Action Section
const ctaSectionStyle = {
  backgroundColor: "#1a1a1a",
  padding: "60px 20px",
}

const ctaContentStyle = {
  textAlign: "center" as const,
  maxWidth: "500px",
  margin: "0 auto",
}

const ctaHeadingStyle = {
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: "700",
  lineHeight: "1.3",
  margin: "0 0 25px 0",
}

const ctaTextStyle = {
  color: "#cccccc",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 35px 0",
}

const ctaButtonContainerStyle = {
  marginTop: "35px",
}

const ctaButtonStyle = {
  backgroundColor: "#169179",
  color: "#ffffff",
  borderRadius: "8px",
  padding: "15px 38px",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "600",
  display: "inline-block",
  border: "none",
  cursor: "pointer",
  textAlign: "center" as const,
}

// Footer Styles
const footerStyle = {
  // backgroundColor: "#f8f9fa",
  padding: "40px 40px 30px 40px",
  color: "#6c757d",
}

const footerColumnStyle = {
  width: "50%",
  verticalAlign: "top",
  paddingRight: "20px",
}

const footerHeadingStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#343a40",
  margin: "0 0 15px 0",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
}

const footerTextStyle = {
  fontSize: "14px",
  color: "#6c757d",
  margin: "0 0 8px 0",
}

const footerLinkStyle = {
  color: "#169179",
  textDecoration: "none",
}

const footerDividerStyle = {
  border: "none",
  borderTop: "1px solid #dee2e6",
  margin: "30px 0 20px 0",
}

const footerBottomStyle = {
  textAlign: "center" as const,
}

const copyrightStyle = {
  fontSize: "12px",
  color: "#6c757d",
  margin: "0 0 10px 0",
}

const unsubscribeStyle = {
  fontSize: "12px",
  color: "#6c757d",
  margin: "0",
}