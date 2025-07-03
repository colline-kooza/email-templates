import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Font,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

export const CorporateBlackFriday = () => (
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
          .mobile-black-friday { font-size: 36px !important; }
          .mobile-discount { font-size: 32px !important; }
          .mobile-full-width { width: 100% !important; }
          .mobile-center { text-align: center !important; }
          .mobile-banner-padding { padding: 40px 20px !important; }
        }
      `}</style>
    </Head>
    <Preview>Black Friday Special - Start from 40% Off | 25th November</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          {/* Header with Logo */}
          <Section style={headerSection}>
            <Row>
              <Column align="center">
               <img src="https://a.mailmunch.co/user_data/landing_pages/1502399458599-adada_36.png" alt=""
               className="object-contain" style={{maxWidth: "100%", height: "auto"}} />
              </Column>
            </Row>
          </Section>

          {/* Black Friday Banner */}
          <Section style={bannerSection}>
            <Row>
              <Column align="center">
                <div style={bannerContainer} className="mobile-banner-padding">
                  <Heading style={blackFridayHeading} className="mobile-black-friday">
                    BLACK
                  </Heading>
                  <Heading style={blackFridayHeading} className="mobile-black-friday">
                    FRIDAY
                  </Heading>

                  
                   <img src="https://a.mailmunch.co/user_data/landing_pages/1502396368642-s2ss_31.png" alt="" className="object-contain mt-2"/>
                  <Text style={dateText}>25TH NOVEMBER</Text>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Discount Section */}
          <Section style={discountSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Text style={startFromText}>START FROM</Text>
                <Heading style={discountHeading} className="mobile-discount">
                  40% OFF
                </Heading>
              </Column>
            </Row>
          </Section>

          {/* Content Section */}
          <Section style={contentSection} className="mobile-padding">
            <Row>
              <Column align="center">
                <Text style={contentText} className="mobile-text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet.
                </Text>

                <div style={websiteContainer}>
                  <Link href="https://www.companyname.com" style={websiteLink}>
                    WWW.COMPANYNAME.COM
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
                  You received this email because you signed up for My Company Inc.
                </Text>
                <Text style={footerText} className="mobile-text">
                  <Link href="#" style={footerLink}>
                    Unsubscribe
                  </Link>
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
)

export default CorporateBlackFriday

// Styles
const main = {
  backgroundColor: "#f5f5f5",
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
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
}

// Header Styles
const headerSection = {
  backgroundColor: "#3a3a3a",
  padding: "40px 40px 30px",
  textAlign: "center" as const,
}

const logoContainer = {
  textAlign: "center" as const,
}

const logoSymbol = {
  width: "80px",
  height: "80px",
  backgroundColor: "#ffffff",
  borderRadius: "50%",
  margin: "0 auto 15px",
  display: "table",
}

const logoText = {
  color: "#3a3a3a",
  fontSize: "32px",
  fontWeight: "700",
  margin: "0",
  display: "table-cell",
  textAlign: "center" as const,
  verticalAlign: "middle" as const,
  fontStyle: "italic",
}

const logoLabel = {
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "500",
  margin: "0",
  textAlign: "center" as const,
  letterSpacing: "2px",
}

// Banner Styles
const bannerSection = {
  backgroundColor: "#dc2626",
  padding: "0",
}

const bannerContainer = {
  padding: "60px 40px",
  textAlign: "center" as const,
  position: "relative" as const,
}

const blackFridayHeading = {
  color: "#ffffff",
  fontSize: "48px",
  fontWeight: "900",
  lineHeight: "0.9",
  margin: "0",
  textAlign: "center" as const,
  letterSpacing: "2px",
}

const specialBanner = {
  backgroundColor: "#ffffff",
  padding: "8px 30px",
  margin: "20px auto",
  display: "inline-block",
  position: "relative" as const,
}

const specialText = {
  color: "#dc2626",
  fontSize: "14px",
  fontWeight: "700",
  margin: "0",
  textAlign: "center" as const,
  letterSpacing: "2px",
}

const dateText = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  margin: "15px 0 0",
  textAlign: "center" as const,
  letterSpacing: "1px",
}

// Discount Section Styles
const discountSection = {
  backgroundColor: "#3a3a3a",
  padding: "40px 40px",
  textAlign: "center" as const,
}

const startFromText = {
  color: "#ffffff",
  fontSize: "18px",
  fontWeight: "500",
  margin: "0 0 10px",
  textAlign: "center" as const,
  letterSpacing: "1px",
}

const discountHeading = {
  color: "#ffffff",
  fontSize: "42px",
  fontWeight: "900",
  lineHeight: "1.1",
  margin: "0",
  textAlign: "center" as const,
  letterSpacing: "2px",
}

// Content Section Styles
const contentSection = {
  backgroundColor: "#3a3a3a",
  padding: "20px 40px 40px",
  textAlign: "center" as const,
}

const contentText = {
  color: "#cccccc",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 30px",
  textAlign: "center" as const,
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto",
}

const websiteContainer = {
  textAlign: "center" as const,
  margin: "20px 0 0",
}

const websiteLink = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  letterSpacing: "1px",
}

// Footer Styles
const footerSection = {
  backgroundColor: "#e5e5e5",
  padding: "30px 40px",
  textAlign: "center" as const,
}

const footerText = {
  color: "#666666",
  fontSize: "12px",
  lineHeight: "1.5",
  margin: "0 0 8px",
  textAlign: "center" as const,
}

const footerLink = {
  color: "#666666",
  textDecoration: "underline",
}
