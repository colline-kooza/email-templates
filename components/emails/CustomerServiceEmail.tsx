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

export const CustomerServiceEmail = () => (
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
          .mobile-heading { font-size: 22px !important; }
          .mobile-hero-heading { font-size: 28px !important; }
          .mobile-full-width { width: 100% !important; }
          .mobile-center { text-align: center !important; }
          .mobile-stack { 
            display: block !important; 
            width: 100% !important; 
            margin: 0 0 20px 0 !important;
          }
          .mobile-hide { display: none !important; }
          .mobile-button {
            margin: 0 0 12px 0 !important;
            display: block !important;
            text-align: center !important;
          }
          .mobile-contact-card {
            width: 100% !important;
            margin: 0 0 20px 0 !important;
            display: block !important;
          }
          .mobile-team-member {
            width: 100% !important;
            margin: 0 0 24px 0 !important;
            display: block !important;
          }
          .mobile-faq-item {
            margin: 0 0 20px 0 !important;
          }
        }
      `}</style>
    </Head>
    <Preview>We're Here to Help - Your Customer Service Team is Ready to Assist</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={headerSection}>
            <Row>
              <Column align="center">
                <div style={headerContent}>
                  <Text style={logoText}>CustomerCare</Text>
                  <Text style={taglineText}>We're here to help, every step of the way</Text>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Hero Section */}
          <Section style={heroSection}>
            <Row>
              <Column align="center">
                <div style={heroImageContainer}>
                  <Img
                    src="https://img.freepik.com/free-photo/woman-having-online-meeting-work_23-2148940760.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740"
                    alt="Customer service team ready to help"
                    style={heroImage}
                    className="mobile-full-width"
                  />
                </div>
                <div style={heroContent}>
                  <Heading style={heroHeading} className="mobile-hero-heading">
                    We're Here to Help You
                  </Heading>
                  <Text style={heroSubtitle} className="mobile-text">
                    Your satisfaction is our priority
                  </Text>
                  <Text style={heroDescription} className="mobile-text">
                    Our dedicated customer service team is available to assist you with any questions, concerns, or
                    issues you may have. We're committed to providing you with exceptional support and ensuring your
                    experience with us is nothing short of excellent.
                  </Text>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Contact Methods Section */}
          <Section style={contactSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Heading style={sectionHeading} className="mobile-heading">
                  How Can We Help You Today?
                </Heading>
                <Text style={sectionSubtext} className="mobile-text">
                  Choose the method that works best for you
                </Text>

                {/* Desktop Contact Layout */}
                <div className="">
                  <Row style={contactRow}>
                    <Column style={contactColumn}>
                      <div style={contactCard}>
                        <div style={contactIconContainer}>
                          <Img src="https://img.freepik.com/free-photo/focused-african-american-man-with-headset-looking-down_74855-4198.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740" alt="Phone support" style={contactIcon} />
                        </div>
                        <Text style={contactTitle}>Phone Support</Text>
                        <Text style={contactDescription} className="mobile-text">
                          Speak directly with our support team
                        </Text>
                        <Text style={contactDetail} className="mobile-text">
                          1-800-HELP-NOW
                        </Text>
                        <Text style={contactHours} className="mobile-text">
                          Mon-Fri: 8AM-8PM EST
                        </Text>
                        <Link href="tel:+18004357669" style={contactButton}>
                          Call Now
                        </Link>
                      </div>
                    </Column>
                    <Column style={contactColumn}>
                      <div style={contactCard}>
                        <div style={contactIconContainer}>
                          <Img src="https://img.freepik.com/free-photo/woman-with-headset-laptop-working-from-home_23-2148708942.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740" alt="Live chat support" style={contactIcon} />
                        </div>
                        <Text style={contactTitle}>Live Chat</Text>
                        <Text style={contactDescription} className="mobile-text">
                          Get instant help through chat
                        </Text>
                        <Text style={contactDetail} className="mobile-text">
                          Average response: 2 minutes
                        </Text>
                        <Text style={contactHours} className="mobile-text">
                          Available 24/7
                        </Text>
                        <Link href="#" style={contactButton}>
                          Start Chat
                        </Link>
                      </div>
                    </Column>
                    
                  </Row>
                </div>

                
              </Column>
            </Row>
          </Section>

          {/* Team Section */}
          <Section style={teamSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Heading style={teamSectionHeading} className="mobile-heading">
                  Meet Your Support Team
                </Heading>
                <Text style={sectionSubtext} className="mobile-text">
                  Experienced professionals dedicated to your success
                </Text>

                {/* Desktop Team Layout */}
                <div className="">
                  <Row style={teamRow}>
                    <Column style={teamColumn}>
                      <div style={teamMemberCard}>
                        <div style={teamImageContainer}>
                          <Img
                            src="https://img.freepik.com/free-photo/woman-wearing-transparent-goggles-showing-invisible-object_53876-97066.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740"
                            alt="Sarah Johnson - Customer Success Manager"
                            style={teamImage}
                          />
                        </div>
                        <Text style={teamName}>Sarah Johnson</Text>
                        <Text style={teamRole} className="mobile-text">
                          Customer Success Manager
                        </Text>
                        <Text style={teamExperience} className="mobile-text">
                          5+ years experience
                        </Text>
                        <Text style={teamSpecialty} className="mobile-text">
                          Specializes in account management and technical support
                        </Text>
                      </div>
                    </Column>
                    <Column style={teamColumn}>
                      <div style={teamMemberCard}>
                        <div style={teamImageContainer}>
                          <Img
                            src="https://img.freepik.com/free-photo/person-office-work-day_23-2150690164.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740"
                            alt="Michael Chen - Technical Support Lead"
                            style={teamImage}
                          />
                        </div>
                        <Text style={teamName}>Michael Chen</Text>
                        <Text style={teamRole} className="mobile-text">
                          Technical Support Lead
                        </Text>
                        <Text style={teamExperience} className="mobile-text">
                          7+ years experience
                        </Text>
                        <Text style={teamSpecialty} className="mobile-text">
                          Expert in troubleshooting and product integration
                        </Text>
                      </div>
                    </Column>
                    
                  </Row>
                </div>

               
              </Column>
            </Row>
          </Section>

          {/* FAQ Section */}
          <Section style={faqSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Heading style={sectionHeading} className="mobile-heading">
                  Frequently Asked Questions
                </Heading>
                <Text style={sectionSubtext} className="mobile-text">
                  Quick answers to common questions
                </Text>

                <div style={faqContainer}>
                  <div style={faqItem} className="mobile-faq-item">
                    <Text style={faqQuestion}>How can I track my order?</Text>
                    <Text style={faqAnswer} className="mobile-text">
                      You can track your order by logging into your account and visiting the "My Orders" section, or by
                      using the tracking link sent to your email.
                    </Text>
                  </div>

                  <div style={faqItem} className="mobile-faq-item">
                    <Text style={faqQuestion}>What is your return policy?</Text>
                    <Text style={faqAnswer} className="mobile-text">
                      We offer a 30-day return policy for most items. Items must be in original condition with tags
                      attached. Some restrictions may apply.
                    </Text>
                  </div>

                  <div style={faqItem} className="mobile-faq-item">
                    <Text style={faqQuestion}>How do I update my account information?</Text>
                    <Text style={faqAnswer} className="mobile-text">
                      Log into your account and navigate to "Account Settings" where you can update your personal
                      information, shipping addresses, and payment methods.
                    </Text>
                  </div>

                  <div style={faqItem} className="mobile-faq-item">
                    <Text style={faqQuestion}>Do you offer international shipping?</Text>
                    <Text style={faqAnswer} className="mobile-text">
                      Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by
                      destination. Check our shipping page for more details.
                    </Text>
                  </div>
                </div>

                <div style={faqButtonContainer}>
                  <Link href="#" style={faqButton} className="mobile-button">
                    View All FAQs
                  </Link>
                </div>
              </Column>
            </Row>
          </Section>

          {/* CTA Section */}
          <Section style={ctaSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <div style={ctaContent}>
                  <div style={ctaImageContainer}>
                    <Img
                      src="https://img.freepik.com/premium-photo/customer-client-stars-complete-five-stars-with-copy-space-giving-five-star-rating-service-rating-satisfaction-concept-officexa_1300982-930.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740"
                      alt="Customer satisfaction guarantee"
                      style={ctaImage}
                      className="mobile-full-width"
                    />
                  </div>
                  <Heading style={ctaHeading} className="mobile-heading">
                    Still Need Help?
                  </Heading>
                  <Text style={ctaText} className="mobile-text">
                    Don't hesitate to reach out. Our team is standing by to provide you with the support you need.
                  </Text>

                  {/* Desktop CTA Buttons */}
                  <div className="mobile-hide">
                    <Row>
                      <Column style={ctaButtonColumn}>
                        <Link href="#" style={primaryCtaButton}>
                          Contact Support
                        </Link>
                      </Column>
                      <Column style={ctaButtonColumn}>
                        <Link href="#" style={secondaryCtaButton}>
                          Browse Help Center
                        </Link>
                      </Column>
                    </Row>
                  </div>

                  {/* Mobile CTA Buttons */}
                  <div style={mobileCtaContainer}>
                    <div style={mobileCtaButton} className="mobile-button">
                      <Link href="#" style={primaryCtaButtonMobile}>
                        Contact Support
                      </Link>
                    </div>
                    <div style={mobileCtaButton} className="mobile-button">
                      <Link href="#" style={secondaryCtaButtonMobile}>
                        Browse Help Center
                      </Link>
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
                <Text style={footerHeading}>Customer Service Hours</Text>
                <div style={hoursContainer}>
                  <Text style={hoursText} className="mobile-text">
                    <strong>Phone Support:</strong> Monday - Friday, 8:00 AM - 8:00 PM EST
                  </Text>
                  <Text style={hoursText} className="mobile-text">
                    <strong>Live Chat:</strong> Available 24/7
                  </Text>
                  <Text style={hoursText} className="mobile-text">
                    <strong>Email Support:</strong> Responses within 4 hours during business days
                  </Text>
                </div>

                <div style={emergencyContainer}>
                  <Text style={emergencyText} className="mobile-text">
                    🚨 <strong>Urgent Issue?</strong> Call our priority line at{" "}
                    <Link href="tel:+18004357669" style={emergencyLink}>
                      1-800-URGENT-1
                    </Link>
                  </Text>
                </div>

                <Text style={footerDisclaimer} className="mobile-text">
                  We're committed to providing exceptional customer service. Your feedback helps us improve - please
                  don't hesitate to let us know how we're doing.
                </Text>
                <Text style={footerCopyright} className="mobile-text">
                  © 2024 CustomerCare. All rights reserved.
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
)

export default CustomerServiceEmail

// Styles
const main = {
  backgroundColor: "#f7f3f0",
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
  boxShadow: "0 8px 32px rgba(101, 67, 33, 0.15)",
}

// Header Styles
const headerSection = {
  background: "linear-gradient(135deg, #8b4513 0%, #a0522d 100%)",
  padding: "32px 24px",
  textAlign: "center" as const,
}

const headerContent = {
  textAlign: "center" as const,
}

const logoText = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "700",
  margin: "0 0 8px",
  textAlign: "center" as const,
  letterSpacing: "1px",
}

const taglineText = {
  color: "#f4e4bc",
  fontSize: "14px",
  fontWeight: "400",
  margin: "0",
  textAlign: "center" as const,
  fontStyle: "italic",
}

// Hero Section Styles
const heroSection = {
  backgroundColor: "#ffffff",
  padding: "50px 40px",
  textAlign: "center" as const,
}

const heroImageContainer = {
  margin: "0 0 32px",
  textAlign: "center" as const,
}

const heroImage = {
  width: "100%",
  maxWidth: "400px",
  height: "250px",
  objectFit: "cover" as const,
  borderRadius: "12px",
  display: "block",
  margin: "0 auto",
  border: "3px solid #d2b48c",
}

const heroContent = {
  maxWidth: "500px",
  margin: "0 auto",
}

const heroHeading = {
  color: "#654321",
  fontSize: "32px",
  fontWeight: "700",
  lineHeight: "1.3",
  margin: "0 0 16px",
  textAlign: "center" as const,
}

const heroSubtitle = {
  color: "#8b4513",
  fontSize: "18px",
  fontWeight: "500",
  margin: "0 0 20px",
  textAlign: "center" as const,
}

const heroDescription = {
  color: "#6b5b47",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0",
  textAlign: "center" as const,
}

// Contact Section Styles
const contactSection = {
  backgroundColor: "#faf8f5",
  padding: "60px 40px",
}

const sectionHeading = {
  color: "#654321",
  fontSize: "28px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 16px",
}

const sectionSubtext = {
  color: "#8b7355",
  fontSize: "16px",
  textAlign: "center" as const,
  margin: "0 0 40px",
  lineHeight: "1.6",
}

const contactRow = {
  margin: "0",
}

const contactColumn = {
  padding: "0 12px",
}

const contactCard = {
  backgroundColor: "#ffffff",
  padding: "32px 24px",
  borderRadius: "12px",
  textAlign: "center" as const,
  border: "2px solid #e6d7c3",
  height: "100%",
  boxShadow: "0 4px 12px rgba(101, 67, 33, 0.1)",
}

const contactIconContainer = {
  margin: "0 0 20px",
  textAlign: "center" as const,
}

const contactIcon = {
  width: "60px",
  height: "60px",
  display: "block",
  margin: "0 auto",
  borderRadius: "50%",
  border: "3px solid #d2b48c",
}

const contactTitle = {
  color: "#654321",
  fontSize: "18px",
  fontWeight: "600",
  margin: "0 0 12px",
  textAlign: "center" as const,
}

const contactDescription = {
  color: "#8b7355",
  fontSize: "14px",
  margin: "0 0 16px",
  textAlign: "center" as const,
  lineHeight: "1.4",
}

const contactDetail = {
  color: "#8b4513",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0 0 8px",
  textAlign: "center" as const,
}

const contactHours = {
  color: "#a0522d",
  fontSize: "12px",
  margin: "0 0 20px",
  textAlign: "center" as const,
}

const contactButton = {
  backgroundColor: "#8b4513",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "12px 24px",
  borderRadius: "6px",
  display: "inline-block",
  textAlign: "center" as const,
  minWidth: "100px",
}



const mobileContactCard = {
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "12px",
  border: "2px solid #e6d7c3",
  margin: "0 0 16px",
  boxShadow: "0 4px 12px rgba(101, 67, 33, 0.1)",
}

const mobileContactIconColumn = {
  width: "60px",
  padding: "0 12px 0 0",
}

const mobileContactContentColumn = {
  padding: "0 0 0 12px",
}

const mobileContactIcon = {
  width: "50px",
  height: "50px",
  display: "block",
  borderRadius: "50%",
  border: "2px solid #d2b48c",
}

const mobileContactButtonContainer = {
  margin: "16px 0 0",
  textAlign: "center" as const,
}

const mobileContactButton = {
  backgroundColor: "#8b4513",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "10px 20px",
  borderRadius: "6px",
  display: "inline-block",
  textAlign: "center" as const,
  width: "100%",
  boxSizing: "border-box" as const,
}

// Team Section Styles
const teamSection = {
  backgroundColor: "#ffffff",
  padding: "60px 40px",
}

const teamSectionHeading = {
  color: "#654321",
  fontSize: "28px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 16px",
}

const teamRow = {
  margin: "0",
}

const teamColumn = {
  padding: "0 12px",
}

const teamMemberCard = {
  backgroundColor: "#faf8f5",
  padding: "30px 20px",
  borderRadius: "12px",
  textAlign: "center" as const,
  border: "2px solid #e6d7c3",
  height: "100%",
}

const teamImageContainer = {
  margin: "0 0 20px",
  textAlign: "center" as const,
}

const teamImage = {
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  objectFit: "cover" as const,
  display: "block",
  margin: "0 auto",
  border: "4px solid #d2b48c",
}

const teamName = {
  color: "#654321",
  fontSize: "18px",
  fontWeight: "600",
  margin: "0 0 8px",
  textAlign: "center" as const,
}

const teamRole = {
  color: "#8b4513",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0 0 8px",
  textAlign: "center" as const,
}

const teamExperience = {
  color: "#a0522d",
  fontSize: "12px",
  margin: "0 0 12px",
  textAlign: "center" as const,
}

const teamSpecialty = {
  color: "#8b7355",
  fontSize: "12px",
  margin: "0",
  textAlign: "center" as const,
  lineHeight: "1.4",
  fontStyle: "italic",
}

// Mobile Team Styles
const mobileTeamContainer = {
  display: "none",
}

const mobileTeamMember = {
  backgroundColor: "#faf8f5",
  padding: "20px",
  borderRadius: "12px",
  border: "2px solid #e6d7c3",
  margin: "0 0 20px",
}

const mobileTeamImageColumn = {
  width: "80px",
  padding: "0 12px 0 0",
}

const mobileTeamInfoColumn = {
  padding: "0 0 0 12px",
}

const mobileTeamImage = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  objectFit: "cover" as const,
  display: "block",
  border: "3px solid #d2b48c",
}

// FAQ Section Styles
const faqSection = {
  backgroundColor: "#faf8f5",
  padding: "60px 40px",
}

const faqContainer = {
  maxWidth: "500px",
  margin: "0 auto 32px",
}

const faqItem = {
  backgroundColor: "#ffffff",
  padding: "24px",
  borderRadius: "8px",
  margin: "0 0 16px",
  border: "1px solid #e6d7c3",
}

const faqQuestion = {
  color: "#654321",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0 0 12px",
}

const faqAnswer = {
  color: "#6b5b47",
  fontSize: "14px",
  margin: "0",
  lineHeight: "1.5",
}

const faqButtonContainer = {
  textAlign: "center" as const,
}

const faqButton = {
  backgroundColor: "#8b4513",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "14px 28px",
  borderRadius: "8px",
  display: "inline-block",
  textAlign: "center" as const,
}

// CTA Section Styles
const ctaSection = {
  backgroundColor: "#ffffff",
  padding: "60px 40px",
  textAlign: "center" as const,
}

const ctaContent = {
  maxWidth: "500px",
  margin: "0 auto",
}

const ctaImageContainer = {
  margin: "0 0 32px",
  textAlign: "center" as const,
}

const ctaImage = {
  width: "200px",
  height: "150px",
  objectFit: "contain" as const,
  borderRadius: "8px",
  display: "block",
  margin: "0 auto",
}

const ctaHeading = {
  color: "#654321",
  fontSize: "28px",
  fontWeight: "700",
  margin: "0 0 16px",
  textAlign: "center" as const,
}

const ctaText = {
  color: "#6b5b47",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 32px",
  textAlign: "center" as const,
}

const ctaButtonColumn = {
  textAlign: "center" as const,
  padding: "0 8px",
}

const primaryCtaButton = {
  backgroundColor: "#8b4513",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "16px 24px",
  borderRadius: "8px",
  display: "inline-block",
  textAlign: "center" as const,
  minWidth: "160px",
  boxShadow: "0 4px 12px rgba(139, 69, 19, 0.3)",
}

const secondaryCtaButton = {
  backgroundColor: "transparent",
  color: "#654321",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "16px 24px",
  borderRadius: "8px",
  border: "2px solid #8b4513",
  display: "inline-block",
  textAlign: "center" as const,
  minWidth: "160px",
}

// Mobile CTA Styles
const mobileCtaContainer = {
  display: "none",
}

const mobileCtaButton = {
  margin: "0 0 12px",
  textAlign: "center" as const,
}

const primaryCtaButtonMobile = {
  backgroundColor: "#8b4513",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "16px 24px",
  borderRadius: "8px",
  display: "block",
  textAlign: "center" as const,
  width: "100%",
  boxSizing: "border-box" as const,
  boxShadow: "0 4px 12px rgba(139, 69, 19, 0.3)",
}

const secondaryCtaButtonMobile = {
  backgroundColor: "transparent",
  color: "#654321",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "16px 24px",
  borderRadius: "8px",
  border: "2px solid #8b4513",
  display: "block",
  textAlign: "center" as const,
  width: "100%",
  boxSizing: "border-box" as const,
}

// Footer Styles
const footerSection = {
  backgroundColor: "#654321",
  padding: "40px",
  textAlign: "center" as const,
}

const footerHeading = {
  color: "#ffffff",
  fontSize: "20px",
  fontWeight: "600",
  margin: "0 0 24px",
  textAlign: "center" as const,
}

const hoursContainer = {
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  borderRadius: "8px",
  padding: "20px",
  margin: "0 0 24px",
}

const hoursText = {
  color: "#f4e4bc",
  fontSize: "14px",
  margin: "0 0 8px",
  textAlign: "center" as const,
  lineHeight: "1.5",
}

const emergencyContainer = {
  backgroundColor: "#8b4513",
  border: "2px solid #a0522d",
  borderRadius: "8px",
  padding: "16px",
  margin: "0 0 32px",
}

const emergencyText = {
  color: "#ffffff",
  fontSize: "14px",
  margin: "0",
  textAlign: "center" as const,
}

const emergencyLink = {
  color: "#f4e4bc",
  fontWeight: "600",
  textDecoration: "underline",
}

const footerDisclaimer = {
  color: "#d2b48c",
  fontSize: "12px",
  lineHeight: "1.5",
  margin: "0 0 16px",
  textAlign: "center" as const,
}

const footerCopyright = {
  color: "#d2b48c",
  fontSize: "12px",
  margin: "0",
  textAlign: "center" as const,
}
