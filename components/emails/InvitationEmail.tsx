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

export const InvitationEmail = () => (
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
          .mobile-event-title { font-size: 32px !important; }
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
          .mobile-speaker-card {
            width: 100% !important;
            margin: 0 0 24px 0 !important;
            display: block !important;
          }
          .mobile-detail-item {
            width: 100% !important;
            margin: 0 0 20px 0 !important;
            display: block !important;
            text-align: center !important;
          }
          .mobile-agenda-item {
            display: block !important;
            width: 100% !important;
            margin: 0 0 16px 0 !important;
          }
        }
      `}</style>
    </Head>
    <Preview>You're Invited: Digital Innovation Summit 2024 - Join Industry Leaders</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={headerSection}>
            <Row>
              <Column align="center">
                <Text style={logoText}>INNOVATE</Text>
                <Text style={logoSubtext}>Digital Summit 2024</Text>
              </Column>
            </Row>
          </Section>

          {/* Hero Section with Main Image */}
          <Section style={heroSection}>
            <Row>
              <Column align="center">
                <div style={heroImageContainer}>
                  <Img
                    src="https://img.freepik.com/premium-photo/corporate-team-meeting-strategy_1320745-19181.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740"
                    alt="Digital Innovation Summit 2024"
                    style={heroImage}
                    className="mobile-full-width"
                  />
                </div>
                <div style={heroContent}>
                  <div style={invitationBadge}>
                    <Text style={invitationBadgeText}>YOU'RE INVITED</Text>
                  </div>
                  <Heading style={eventTitle} className="mobile-event-title">
                    Digital Innovation Summit 2024
                  </Heading>
                  <Text style={eventSubtitle} className="mobile-text">
                    Join 500+ Industry Leaders, Innovators & Visionaries
                  </Text>
                  <Text style={eventDescription} className="mobile-text">
                    Discover the latest trends in AI, blockchain, and digital transformation that are reshaping
                    industries worldwide. Network with thought leaders and gain insights that will drive your business
                    forward.
                  </Text>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Event Details Section */}
          <Section style={detailsSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Heading style={sectionHeading} className="mobile-heading">
                  Event Details
                </Heading>

                {/* Desktop Details Layout */}
                <div className="mobile-hide">
                  <Row style={detailsRow}>
                    <Column style={detailColumn}>
                      <div style={detailCard}>
                        <div style={detailIconContainer}>
                          <Text style={detailIcon}>📅</Text>
                        </div>
                        <Text style={detailLabel}>Date</Text>
                        <Text style={detailValue} className="mobile-text">
                          March 15, 2024
                        </Text>
                        <Text style={detailExtra} className="mobile-text">
                          Friday
                        </Text>
                      </div>
                    </Column>
                    <Column style={detailColumn}>
                      <div style={detailCard}>
                        <div style={detailIconContainer}>
                          <Text style={detailIcon}>⏰</Text>
                        </div>
                        <Text style={detailLabel}>Time</Text>
                        <Text style={detailValue} className="mobile-text">
                          9:00 AM - 6:00 PM
                        </Text>
                        <Text style={detailExtra} className="mobile-text">
                          PST
                        </Text>
                      </div>
                    </Column>
                    
                  </Row>
                </div>

                {/* Mobile Details Layout */}
                <div style={mobileDetailsContainer}>
                  <div style={mobileDetailItem} className="mobile-detail-item">
                    <div style={detailIconContainer}>
                      <Text style={detailIcon}>📅</Text>
                    </div>
                    <Text style={detailLabel}>Date</Text>
                    <Text style={detailValue} className="mobile-text">
                      March 15, 2024 - Friday
                    </Text>
                  </div>
                  <div style={mobileDetailItem} className="mobile-detail-item">
                    <div style={detailIconContainer}>
                      <Text style={detailIcon}>⏰</Text>
                    </div>
                    <Text style={detailLabel}>Time</Text>
                    <Text style={detailValue} className="mobile-text">
                      9:00 AM - 6:00 PM PST
                    </Text>
                  </div>
                  <div style={mobileDetailItem} className="mobile-detail-item">
                    <div style={detailIconContainer}>
                      <Text style={detailIcon}>📍</Text>
                    </div>
                    <Text style={detailLabel}>Location</Text>
                    <Text style={detailValue} className="mobile-text">
                      Tech Center SF, San Francisco, CA
                    </Text>
                  </div>
                </div>

                {/* RSVP Button */}
                <div style={rsvpButtonContainer}>
                  <Link href="#" style={primaryButton} className="mobile-button">
                    Reserve Your Spot Now
                  </Link>
                  <Text style={rsvpNote} className="mobile-text">
                    Limited seats available - RSVP by March 10th
                  </Text>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Featured Speakers Section */}
          <Section style={speakersSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Heading style={sectionHeading} className="mobile-heading">
                  Featured Speakers
                </Heading>
                <Text style={sectionSubtext} className="mobile-text">
                  Learn from industry pioneers and thought leaders
                </Text>

                {/* Desktop Speakers Layout */}
                <div className="mobile-hide">
                  <Row style={speakersRow}>
                   
                    <Column style={speakerColumn}>
                      <div style={speakerCard}>
                        <div style={speakerImageContainer}>
                          <Img
                            src="https://img.freepik.com/free-photo/technology-innovation-simulation-gadget-concept_53876-121153.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740"
                            alt="Marcus Rodriguez - Blockchain Pioneer"
                            style={speakerImage}
                          />
                        </div>
                        <Text style={speakerName}>Marcus Rodriguez</Text>
                        <Text style={speakerTitle} className="mobile-text">
                          Blockchain Pioneer
                        </Text>
                        <Text style={speakerCompany} className="mobile-text">
                          CryptoVentures
                        </Text>
                      </div>
                    </Column>
                    <Column style={speakerColumn}>
                      <div style={speakerCard}>
                        <div style={speakerImageContainer}>
                          <Img
                            src="https://img.freepik.com/free-photo/side-view-smiley-woman-with-virtual-reality-headset_23-2148850939.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740"
                            alt="Dr. Emily Watson - Digital Transformation"
                            style={speakerImage}
                          />
                        </div>
                        <Text style={speakerName}>Dr. Emily Watson</Text>
                        <Text style={speakerTitle} className="mobile-text">
                          Digital Transformation
                        </Text>
                        <Text style={speakerCompany} className="mobile-text">
                          Innovation Labs
                        </Text>
                      </div>
                    </Column>
                  </Row>
                </div>

                {/* Mobile Speakers Layout */}
                <div style={mobileSpeakersContainer}>
                  <div style={mobileSpeakerCard} className="mobile-speaker-card">
                    <Row>
                      <Column style={mobileSpeakerImageColumn}>
                        <Img
                          src="https://img.freepik.com/free-photo/side-view-smiley-woman-with-virtual-reality-headset_23-2148850939.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740"
                          alt="Sarah Chen - AI Expert"
                          style={mobileSpeakerImage}
                        />
                      </Column>
                      <Column style={mobileSpeakerInfoColumn}>
                        <Text style={speakerName}>Sarah Chen</Text>
                        <Text style={speakerTitle} className="mobile-text">
                          Chief AI Officer, TechCorp Inc.
                        </Text>
                      </Column>
                    </Row>
                  </div>
                  <div style={mobileSpeakerCard} className="mobile-speaker-card">
                    <Row>
                      <Column style={mobileSpeakerImageColumn}>
                        <Img
                          src="https://img.freepik.com/free-photo/technology-innovation-simulation-gadget-concept_53876-121153.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740"
                          alt="Marcus Rodriguez - Blockchain Pioneer"
                          style={mobileSpeakerImage}
                        />
                      </Column>
                      <Column style={mobileSpeakerInfoColumn}>
                        <Text style={speakerName}>Marcus Rodriguez</Text>
                        <Text style={speakerTitle} className="mobile-text">
                          Blockchain Pioneer, CryptoVentures
                        </Text>
                      </Column>
                    </Row>
                  </div>
                  <div style={mobileSpeakerCard} className="mobile-speaker-card">
                    <Row>
                      <Column style={mobileSpeakerImageColumn}>
                        <Img
                          src="https://img.freepik.com/free-photo/side-view-smiley-woman-with-virtual-reality-headset_23-2148850939.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740"
                          alt="Dr. Emily Watson - Digital Transformation"
                          style={mobileSpeakerImage}
                        />
                      </Column>
                      <Column style={mobileSpeakerInfoColumn}>
                        <Text style={speakerName}>Dr. Emily Watson</Text>
                        <Text style={speakerTitle} className="mobile-text">
                          Digital Transformation, Innovation Labs
                        </Text>
                      </Column>
                    </Row>
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Agenda Section */}
          <Section style={agendaSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Heading style={agendaSectionHeading} className="mobile-heading">
                  Event Agenda
                </Heading>
                <Text style={sectionSubtext} className="mobile-text">
                  A full day of insights, networking, and innovation
                </Text>

                <div style={agendaContainer}>
                  <div style={agendaItem} className="mobile-agenda-item">
                    <div style={agendaTimeContainer}>
                      <Text style={agendaTime}>9:00 AM</Text>
                    </div>
                    <div style={agendaContentContainer}>
                      <Text style={agendaTitle}>Registration & Welcome Coffee</Text>
                      <Text style={agendaDescription} className="mobile-text">
                        Network with fellow attendees and grab some coffee
                      </Text>
                    </div>
                  </div>

                  <div style={agendaItem} className="mobile-agenda-item">
                    <div style={agendaTimeContainer}>
                      <Text style={agendaTime}>10:00 AM</Text>
                    </div>
                    <div style={agendaContentContainer}>
                      <Text style={agendaTitle}>Keynote: The Future of AI</Text>
                      <Text style={agendaDescription} className="mobile-text">
                        Sarah Chen explores how AI is transforming industries
                      </Text>
                    </div>
                  </div>

                  <div style={agendaItem} className="mobile-agenda-item">
                    <div style={agendaTimeContainer}>
                      <Text style={agendaTime}>11:30 AM</Text>
                    </div>
                    <div style={agendaContentContainer}>
                      <Text style={agendaTitle}>Panel: Blockchain Revolution</Text>
                      <Text style={agendaDescription} className="mobile-text">
                        Industry experts discuss blockchain's impact on business
                      </Text>
                    </div>
                  </div>

                  <div style={agendaItem} className="mobile-agenda-item">
                    <div style={agendaTimeContainer}>
                      <Text style={agendaTime}>1:00 PM</Text>
                    </div>
                    <div style={agendaContentContainer}>
                      <Text style={agendaTitle}>Networking Lunch</Text>
                      <Text style={agendaDescription} className="mobile-text">
                        Connect with peers over a delicious meal
                      </Text>
                    </div>
                  </div>

                  <div style={agendaItem} className="mobile-agenda-item">
                    <div style={agendaTimeContainer}>
                      <Text style={agendaTime}>2:30 PM</Text>
                    </div>
                    <div style={agendaContentContainer}>
                      <Text style={agendaTitle}>Workshop: Digital Transformation</Text>
                      <Text style={agendaDescription} className="mobile-text">
                        Hands-on session with Dr. Emily Watson
                      </Text>
                    </div>
                  </div>

                  <div style={agendaItem} className="mobile-agenda-item">
                    <div style={agendaTimeContainer}>
                      <Text style={agendaTime}>5:00 PM</Text>
                    </div>
                    <div style={agendaContentContainer}>
                      <Text style={agendaTitle}>Closing Reception</Text>
                      <Text style={agendaDescription} className="mobile-text">
                        Celebrate and continue networking with drinks
                      </Text>
                    </div>
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* CTA Section */}
          <Section style={ctaSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <div style={ctaContent}>
                  <Heading style={ctaHeading} className="mobile-heading">
                    Don't Miss This Opportunity
                  </Heading>
                  <Text style={ctaText} className="mobile-text">
                    Join us for an unforgettable day of learning, networking, and innovation. Secure your spot today!
                  </Text>

                  {/* Desktop CTA Buttons */}
                  <div className="mobile-hide">
                    <Row>
                      <Column style={ctaButtonColumn}>
                        <Link href="#" style={primaryCtaButton}>
                          Register Now
                        </Link>
                      </Column>
                      <Column style={ctaButtonColumn}>
                        <Link href="#" style={secondaryCtaButton}>
                          View Full Agenda
                        </Link>
                      </Column>
                    </Row>
                  </div>

                  {/* Mobile CTA Buttons */}
                  <div style={mobileCtaContainer}>
                    <div style={mobileCtaButton} className="mobile-button">
                      <Link href="#" style={primaryCtaButtonMobile}>
                        Register Now
                      </Link>
                    </div>
                    <div style={mobileCtaButton} className="mobile-button">
                      <Link href="#" style={secondaryCtaButtonMobile}>
                        View Full Agenda
                      </Link>
                    </div>
                  </div>

                  <div style={ctaImageContainer}>
                    <Img
                      src="https://img.freepik.com/free-photo/digital-art-ai-technology-background_23-2151719593.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740"
                      alt="Innovation Summit Networking"
                      style={ctaImage}
                      className="mobile-full-width"
                    />
                  </div>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Footer */}
          <Section style={footerSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Text style={footerHeading}>Questions About the Event?</Text>
                <Text style={footerText} className="mobile-text">
                  Our event team is here to help with any questions you may have.
                </Text>
                <div style={footerButtonContainer}>
                  <Link href="#" style={footerButton} className="mobile-full-width">
                    Contact Event Team
                  </Link>
                </div>

                {/* Social Links */}
                <Row style={socialRow}>
                  <Column style={socialColumn}>
                    <Link href="#" style={socialLink}>
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                        alt="Facebook"
                        width="28"
                        height="28"
                      />
                    </Link>
                  </Column>
                  <Column style={socialColumn}>
                    <Link href="#" style={socialLink}>
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                        alt="Twitter"
                        width="28"
                        height="28"
                      />
                    </Link>
                  </Column>
                  <Column style={socialColumn}>
                    <Link href="#" style={socialLink}>
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                        alt="Instagram"
                        width="28"
                        height="28"
                      />
                    </Link>
                  </Column>
                  <Column style={socialColumn}>
                    <Link href="#" style={socialLink}>
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                        alt="LinkedIn"
                        width="28"
                        height="28"
                      />
                    </Link>
                  </Column>
                </Row>

                <Text style={footerDisclaimer} className="mobile-text">
                  This invitation is non-transferable. Please bring a valid ID for registration.
                </Text>
                <Text style={footerCopyright} className="mobile-text">
                  © 2024 Digital Innovation Summit. All rights reserved.
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
)

export default InvitationEmail

// Styles
const main = {
  backgroundColor: "#f0f4f0",
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
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
}

// Header Styles
const headerSection = {
  background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
  padding: "30px 24px",
  textAlign: "center" as const,
}

const logoText = {
  color: "#22c55e",
  fontSize: "28px",
  fontWeight: "700",
  margin: "0 0 4px",
  textAlign: "center" as const,
  letterSpacing: "2px",
}

const logoSubtext = {
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "400",
  margin: "0",
  textAlign: "center" as const,
  letterSpacing: "1px",
}

// Hero Section Styles
const heroSection = {
  backgroundColor: "#ffffff",
  padding: "0 0 50px",
  textAlign: "center" as const,
}

const heroImageContainer = {
  margin: "0 0 40px",
  textAlign: "center" as const,
}

const heroImage = {
  width: "100%",
  maxWidth: "600px",
  height: "300px",
  objectFit: "cover" as const,
  display: "block",
  margin: "0 auto",
}

const heroContent = {
  maxWidth: "500px",
  margin: "0 auto",
  padding: "0 40px",
}

const invitationBadge = {
  backgroundColor: "#22c55e",
  borderRadius: "20px",
  padding: "8px 20px",
  display: "inline-block",
  margin: "0 0 24px",
}

const invitationBadgeText = {
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "600",
  letterSpacing: "1px",
  margin: "0",
  textAlign: "center" as const,
}

const eventTitle = {
  color: "#1a1a1a",
  fontSize: "36px",
  fontWeight: "700",
  lineHeight: "1.2",
  margin: "0 0 16px",
  textAlign: "center" as const,
}

const eventSubtitle = {
  color: "#22c55e",
  fontSize: "18px",
  fontWeight: "500",
  margin: "0 0 20px",
  textAlign: "center" as const,
}

const eventDescription = {
  color: "#666666",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0",
  textAlign: "center" as const,
}

// Details Section Styles
const detailsSection = {
  backgroundColor: "#f8fdf8",
  padding: "60px 40px",
}

const sectionHeading = {
  color: "#1a1a1a",
  fontSize: "32px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 40px",
}

const detailsRow = {
  margin: "0 0 40px",
}

const detailColumn = {
  padding: "0 15px",
}

const detailCard = {
  backgroundColor: "#ffffff",
  padding: "30px 20px",
  borderRadius: "12px",
  textAlign: "center" as const,
  border: "2px solid #e5f5e5",
  height: "100%",
  boxShadow: "0 4px 12px rgba(34, 197, 94, 0.1)",
}

const detailIconContainer = {
  margin: "0 0 16px",
  textAlign: "center" as const,
}

const detailIcon = {
  fontSize: "32px",
  display: "block",
  textAlign: "center" as const,
}

const detailLabel = {
  color: "#22c55e",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0 0 8px",
  textAlign: "center" as const,
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
}

const detailValue = {
  color: "#1a1a1a",
  fontSize: "18px",
  fontWeight: "600",
  margin: "0 0 4px",
  textAlign: "center" as const,
}

const detailExtra = {
  color: "#666666",
  fontSize: "14px",
  margin: "0",
  textAlign: "center" as const,
}

// Mobile Details Styles
const mobileDetailsContainer = {
  display: "none",
}

const mobileDetailItem = {
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "12px",
  textAlign: "center" as const,
  border: "2px solid #e5f5e5",
  margin: "0 0 16px",
  boxShadow: "0 4px 12px rgba(34, 197, 94, 0.1)",
}

const rsvpButtonContainer = {
  textAlign: "center" as const,
  margin: "20px 0 0",
}

const primaryButton = {
  backgroundColor: "#22c55e",
  color: "#ffffff",
  fontSize: "18px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "16px 32px",
  borderRadius: "8px",
  display: "inline-block",
  textAlign: "center" as const,
  minWidth: "250px",
  boxShadow: "0 4px 12px rgba(34, 197, 94, 0.3)",
}

const rsvpNote = {
  color: "#666666",
  fontSize: "14px",
  margin: "16px 0 0",
  textAlign: "center" as const,
  fontStyle: "italic",
}

// Speakers Section Styles
const speakersSection = {
  backgroundColor: "#ffffff",
  padding: "60px 40px",
}

const sectionSubtext = {
  color: "#666666",
  fontSize: "16px",
  textAlign: "center" as const,
  margin: "0 0 50px",
  lineHeight: "1.6",
}

const speakersRow = {
  margin: "0",
}

const speakerColumn = {
  padding: "0 15px",
}

const speakerCard = {
  backgroundColor: "#f8fdf8",
  padding: "30px 20px",
  borderRadius: "12px",
  textAlign: "center" as const,
  border: "2px solid #e5f5e5",
  height: "100%",
}

const speakerImageContainer = {
  margin: "0 0 20px",
  textAlign: "center" as const,
}

const speakerImage = {
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  objectFit: "cover" as const,
  display: "block",
  margin: "0 auto",
  border: "4px solid #22c55e",
}

const speakerName = {
  color: "#1a1a1a",
  fontSize: "18px",
  fontWeight: "600",
  margin: "0 0 8px",
  textAlign: "center" as const,
}

const speakerTitle = {
  color: "#22c55e",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0 0 4px",
  textAlign: "center" as const,
}

const speakerCompany = {
  color: "#666666",
  fontSize: "14px",
  margin: "0",
  textAlign: "center" as const,
}

// Mobile Speakers Styles
const mobileSpeakersContainer = {
  display: "none",
}

const mobileSpeakerCard = {
  backgroundColor: "#f8fdf8",
  padding: "20px",
  borderRadius: "12px",
  border: "2px solid #e5f5e5",
  margin: "0 0 20px",
}

const mobileSpeakerImageColumn = {
  width: "80px",
  padding: "0 10px 0 0",
}

const mobileSpeakerInfoColumn = {
  padding: "0 0 0 10px",
}

const mobileSpeakerImage = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  objectFit: "cover" as const,
  display: "block",
  border: "3px solid #22c55e",
}

// Agenda Section Styles
const agendaSection = {
  backgroundColor: "#1a1a1a",
  padding: "60px 40px",
}

const agendaSectionHeading = {
  color: "#ffffff",
  fontSize: "32px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "0 0 16px",
}

const agendaContainer = {
  maxWidth: "500px",
  margin: "0 auto",
}

const agendaItem = {
  display: "flex",
  alignItems: "flex-start",
  margin: "0 0 24px",
  padding: "20px",
  backgroundColor: "#2a2a2a",
  borderRadius: "8px",
  border: "1px solid #22c55e",
}

const agendaTimeContainer = {
  minWidth: "80px",
  marginRight: "20px",
}

const agendaTime = {
  color: "#22c55e",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0",
}

const agendaContentContainer = {
  flex: "1",
}

const agendaTitle = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0 0 8px",
}

const agendaDescription = {
  color: "#cccccc",
  fontSize: "14px",
  margin: "0",
  lineHeight: "1.5",
}

// CTA Section Styles
const ctaSection = {
  backgroundColor: "#f8fdf8",
  padding: "60px 40px",
  textAlign: "center" as const,
}

const ctaContent = {
  maxWidth: "500px",
  margin: "0 auto",
}

const ctaHeading = {
  color: "#1a1a1a",
  fontSize: "32px",
  fontWeight: "700",
  margin: "0 0 16px",
  textAlign: "center" as const,
}

const ctaText = {
  color: "#666666",
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
  backgroundColor: "#22c55e",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "16px 24px",
  borderRadius: "8px",
  display: "inline-block",
  textAlign: "center" as const,
  minWidth: "180px",
  boxShadow: "0 4px 12px rgba(34, 197, 94, 0.3)",
}

const secondaryCtaButton = {
  backgroundColor: "transparent",
  color: "#1a1a1a",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "16px 24px",
  borderRadius: "8px",
  border: "2px solid #1a1a1a",
  display: "inline-block",
  textAlign: "center" as const,
  minWidth: "180px",
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
  backgroundColor: "#22c55e",
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
  boxShadow: "0 4px 12px rgba(34, 197, 94, 0.3)",
}

const secondaryCtaButtonMobile = {
  backgroundColor: "transparent",
  color: "#1a1a1a",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "16px 24px",
  borderRadius: "8px",
  border: "2px solid #1a1a1a",
  display: "block",
  textAlign: "center" as const,
  width: "100%",
  boxSizing: "border-box" as const,
}

const ctaImageContainer = {
  margin: "40px 0 0",
  textAlign: "center" as const,
}

const ctaImage = {
  width: "100%",
  maxWidth: "400px",
  height: "200px",
  objectFit: "cover" as const,
  borderRadius: "12px",
  display: "block",
  margin: "0 auto",
}

// Footer Styles
const footerSection = {
  backgroundColor: "#1a1a1a",
  padding: "50px 40px",
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
  color: "#cccccc",
  fontSize: "14px",
  margin: "0 0 24px",
  textAlign: "center" as const,
  lineHeight: "1.6",
}

const footerButtonContainer = {
  margin: "0 0 32px",
  textAlign: "center" as const,
}

const footerButton = {
  backgroundColor: "#22c55e",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "12px 24px",
  borderRadius: "6px",
  display: "inline-block",
  textAlign: "center" as const,
}

const socialRow = {
  margin: "0 0 32px",
}

const socialColumn = {
  textAlign: "center" as const,
  padding: "0 8px",
}

const socialLink = {
  display: "inline-block",
}

const footerDisclaimer = {
  color: "#999999",
  fontSize: "12px",
  lineHeight: "1.5",
  margin: "0 0 16px",
  textAlign: "center" as const,
}

const footerCopyright = {
  color: "#999999",
  fontSize: "12px",
  margin: "0",
  textAlign: "center" as const,
}
