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

export const BlackFridayCyclingEmail = () => (
  <Html>
    <Head>
      <Font
        fontFamily="DM Sans"
        fallbackFontFamily={["Arial", "sans-serif"]}
        webFont={{
          url: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap",
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
          .mobile-hero-heading { font-size: 32px !important; }
          .mobile-sale-heading { font-size: 28px !important; }
          .mobile-full-width { width: 100% !important; }
          .mobile-center { text-align: center !important; }
          .mobile-button {
            margin: 0 0 12px 0 !important;
            display: block !important;
            text-align: center !important;
          }
          .mobile-hero-image {
            height: 250px !important;
          }
          .mobile-social-icon {
            margin: 0 8px !important;
          }
        }
      `}</style>
    </Head>
    <Preview>Black Friday Sale - Up to 30% Off Cycling Gear | Join the Club</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          {/* Header with Logo */}
          <Section style={headerSection}>
            <Row>
              <Column align="center">
                <div style={logoContainer}>
                  <div style={logoTriangle}>
                    <Text style={logoText}>A</Text>
                  </div>
                  <Text style={logoLabel}>LOGO</Text>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Hero Section with Cyclist Image */}
          <Section style={heroSection}>
            <Row>
              <Column align="center">
                <div style={heroImageContainer}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1601662393683-asian-man-cycling-road-bike-morning_46139-75.png"
                    alt="Mountain biker on scenic trail during golden hour"
                    style={heroImage}
                    className="mobile-full-width mobile-hero-image"
                  />
                </div>
              </Column>
            </Row>
          </Section>

          {/* Black Friday Sale Section */}
          <Section style={saleSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Text style={saleLabel}>BLACK FRIDAY SALE</Text>
                <Heading style={saleHeading} className="mobile-sale-heading">
                  UP TO 30% OFF
                </Heading>

                <Text style={saleDescription} className="mobile-text">
                  You should never judge a book by its cover, or a promotion by its name.
                </Text>
                <Text style={saleDescription} className="mobile-text">
                  The Black Friday sale begins this Wednesday, and it lasts connected Spring
                </Text>
                <Text style={saleDescription} className="mobile-text">
                  Classic, there's a strong field.
                </Text>

                <Text style={saleDetails} className="mobile-text">
                  See a sneak preview of our latest and most technical products and add
                </Text>
                <Text style={saleDetails} className="mobile-text">
                  them to your wishlist Members of the Right Cycling Club receive 24- hour
                </Text>
                <Text style={saleDetails} className="mobile-text">
                  early access online, starting tomorrow.
                </Text>

                <div style={buttonContainer}>
                  <Link href="#" style={secondaryButton} className="mobile-button">
                    SEE THE PREVIEW
                  </Link>
                </div>

                <div style={buttonContainer}>
                  <Link href="#" style={primaryButton} className="mobile-button">
                    JOIN THE CLUB
                  </Link>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Come to the Club House Section */}
          <Section style={clubHouseSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Heading style={sectionHeading} className="mobile-heading">
                  COME TO THE CLUB HOUSE
                </Heading>

                <Text style={sectionDescription} className="mobile-text">
                  To start saving now, head to your local Clubhouse where the sale
                </Text>
                <Text style={sectionDescription} className="mobile-text">
                  has today.
                </Text>

                <div style={buttonContainer}>
                  <Link href="#" style={primaryButton} className="mobile-button">
                    FIND A CLUBHOUSE
                  </Link>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Club House Ride Section */}
          <Section style={rideSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Heading style={sectionHeading} className="mobile-heading">
                  CLUB HOUSE RIDE
                </Heading>

                <Text style={rideDescription} className="mobile-text">
                  Join us for a special Black Friday ride to spin out your legs after the holiday.
                </Text>
                <Text style={rideDescription} className="mobile-text">
                  We will meet at the Clubhouse at 5am for an 8:30am departure.
                </Text>

                <Text style={rideDescription} className="mobile-text">
                  Our route will take us north to Highland Park and then back to the Clubhouse
                </Text>
                <Text style={rideDescription} className="mobile-text">
                  for hot cocoa and holiday treats.
                </Text>

                <Link href="https://ridecompany.com/rsvp/2533" style={linkText}>
                  https://ridecompany.com/rsvp/2533
                </Link>

                <div style={buttonContainer}>
                  <Link href="#" style={primaryButton} className="mobile-button">
                    RSVP
                  </Link>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Footer Section */}
          <Section style={footerSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Text style={footerText} className="mobile-text">
                  View in web browser
                </Text>

                {/* Social Media Icons */}
                <div style={socialContainer}>
                  <Link href="https://www.facebook.com" style={socialLink} className="mobile-social-icon">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                      alt="Facebook"
                      width="24"
                      height="24"
                      style={socialIcon}
                    />
                  </Link>
                  <Link href="https://www.instagram.com" style={socialLink} className="mobile-social-icon">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                      alt="Instagram"
                      width="24"
                      height="24"
                      style={socialIcon}
                    />
                  </Link>
                  <Link href="https://www.twitter.com" style={socialLink} className="mobile-social-icon">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                      alt="Twitter"
                      width="24"
                      height="24"
                      style={socialIcon}
                    />
                  </Link>
                  <Link href="https://vimeo.com" style={socialLink} className="mobile-social-icon">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/vimeo.png"
                      alt="Vimeo"
                      width="24"
                      height="24"
                      style={socialIcon}
                    />
                  </Link>
                </div>

                <Text style={footerDisclaimer} className="mobile-text">
                  If you no longer wish to receive emails from Rapha please{" "}
                  <Link href="#" style={footerLink}>
                    unsubscribe
                  </Link>{" "}
                  from our mailing list.
                </Text>
                <Text style={footerDisclaimer} className="mobile-text">
                  New Rapha Ltd is registered in England & Wales.
                </Text>
                <Text style={footerDisclaimer} className="mobile-text">
                  Registered Number: 04 XXXXXX. Registered Office: Rapha House XXXXX, 8X Imperial Road, London SW6
                </Text>
                <Text style={footerDisclaimer} className="mobile-text">
                  XXX United Kingdom.
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
)

export default BlackFridayCyclingEmail

// Styles
const main = {
  backgroundColor: "#000000",
  fontFamily: "DM Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  margin: "0",
  padding: "0",
  lineHeight: "1.6",
}

const container = {
  margin: "0 auto",
  width: "100%",
  maxWidth: "600px",
  backgroundColor: "#000000",
}

// Header Styles
const headerSection = {
  backgroundColor: "#000000",
  padding: "40px 40px 20px",
  textAlign: "center" as const,
}

const logoContainer = {
  textAlign: "center" as const,
}

const logoTriangle = {
  width: "40px",
  height: "40px",
  backgroundColor: "#ffffff",
  margin: "0 auto 8px",
  position: "relative" as const,
  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
  display: "table",
}

const logoText = {
  color: "#000000",
  fontSize: "20px",
  fontWeight: "700",
  margin: "0",
  display: "table-cell",
  textAlign: "center" as const,
  verticalAlign: "middle" as const,
  lineHeight: "40px",
}

const logoLabel = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0",
  textAlign: "center" as const,
  letterSpacing: "2px",
}

// Hero Section Styles
const heroSection = {
  backgroundColor: "#000000",
  padding: "20px 40px",
}

const heroImageContainer = {
  textAlign: "center" as const,
  borderRadius: "8px",
  overflow: "hidden",
}

const heroImage = {
  width: "100%",
  maxWidth: "520px",
  height: "350px",
  objectFit: "cover" as const,
  borderRadius: "8px",
  display: "block",
  margin: "0 auto",
}

// Sale Section Styles
const saleSection = {
  backgroundColor: "#000000",
  padding: "40px 40px",
  textAlign: "center" as const,
}

const saleLabel = {
  color: "#888888",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0 0 8px",
  textAlign: "center" as const,
  letterSpacing: "1px",
}

const saleHeading = {
  color: "#ffffff",
  fontSize: "36px",
  fontWeight: "700",
  lineHeight: "1.2",
  margin: "0 0 30px",
  textAlign: "center" as const,
  letterSpacing: "1px",
}

const saleDescription = {
  color: "#cccccc",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 8px",
  textAlign: "center" as const,
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto",
}

const saleDetails = {
  color: "#aaaaaa",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0 0 8px",
  textAlign: "center" as const,
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto",
}

const buttonContainer = {
  textAlign: "center" as const,
  margin: "20px 0 0",
}

const primaryButton = {
  backgroundColor: "#e91e63",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "14px 40px",
  borderRadius: "4px",
  display: "inline-block",
  textAlign: "center" as const,
  letterSpacing: "1px",
  textTransform: "uppercase" as const,
  minWidth: "200px",
}

const secondaryButton = {
  backgroundColor: "transparent",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "14px 40px",
  borderRadius: "4px",
  border: "1px solid #444444",
  display: "inline-block",
  textAlign: "center" as const,
  letterSpacing: "1px",
  textTransform: "uppercase" as const,
  minWidth: "200px",
}

// Club House Section Styles
const clubHouseSection = {
  backgroundColor: "#000000",
  padding: "40px 40px",
  textAlign: "center" as const,
  borderTop: "1px solid #333333",
}

const sectionHeading = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "700",
  lineHeight: "1.3",
  margin: "0 0 20px",
  textAlign: "center" as const,
  letterSpacing: "1px",
}

const sectionDescription = {
  color: "#cccccc",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 8px",
  textAlign: "center" as const,
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto",
}

// Ride Section Styles
const rideSection = {
  backgroundColor: "#000000",
  padding: "40px 40px",
  textAlign: "center" as const,
  borderTop: "1px solid #333333",
}

const rideDescription = {
  color: "#cccccc",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 8px",
  textAlign: "center" as const,
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto",
}

const linkText = {
  color: "#e91e63",
  fontSize: "14px",
  textDecoration: "underline",
  display: "block",
  margin: "20px 0",
  textAlign: "center" as const,
}

// Footer Styles
const footerSection = {
  backgroundColor: "#000000",
  padding: "40px 40px 60px",
  textAlign: "center" as const,
  borderTop: "1px solid #333333",
}

const footerText = {
  color: "#888888",
  fontSize: "14px",
  margin: "0 0 30px",
  textAlign: "center" as const,
}

const socialContainer = {
  textAlign: "center" as const,
  margin: "0 0 30px",
}

const socialLink = {
  display: "inline-block",
  margin: "0 6px",
}

const socialIcon = {
  display: "block",
  opacity: "0.7",
}

const footerDisclaimer = {
  color: "#666666",
  fontSize: "12px",
  lineHeight: "1.5",
  margin: "0 0 8px",
  textAlign: "center" as const,
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto",
}

const footerLink = {
  color: "#e91e63",
  textDecoration: "underline",
}
