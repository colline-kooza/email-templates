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
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export const Offers = () => (
  <Html>
    <Head>
      <Font
        fontFamily="DM Sans"
        fallbackFontFamily="Verdana"
        webFont={{
          url: "https://fonts.gstatic.com/s/dmsans/v15/rP2Fp2ywxg089UriCZa4ET-DNl0.woff2",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="initial"
      />
    </Head>
    <Preview>
      Transform your business with our expert solutions and strategies
    </Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          {/* Header Navigation */}
          <Section style={header}>
            <Row>
              <Column style={{ width: "150px" }}>
                <Text style={logo}>[Your Logo]</Text>
              </Column>
              <Column align="right">
                <Row>
                  <Column style={navItem}>
                    <Link href="#" style={navLink}>
                      Home
                    </Link>
                  </Column>
                  <Column style={navItem}>
                    <Link href="#" style={navLink}>
                      Page
                    </Link>
                  </Column>
                  <Column style={navItem}>
                    <Link href="#" style={navLink}>
                      About 
                    </Link>
                  </Column>
                 
                </Row>
              </Column>
            </Row>
          </Section>

          {/* Hero Section */}
          <Section style={heroSection}>
            <Row>
              <Column align="center">
                <Heading style={heroHeading}>We offer Solutions</Heading>
                <Text style={heroSubheading}>FOR YOUR BUSINESS GROWTH</Text>
                <Text style={heroText}>
                  If you're looking for a way to take your business to the next
                  level, we offer you a range of solutions. From email marketing
                  templates to expert advice, we can help you take your business
                  to the next level.
                </Text>
                <Link href="#" style={ctaButton}>
                  Learn more
                </Link>
              </Column>
            </Row>
            <Row style={{ paddingTop: "40px" }}>
              <Column align="center">
                <Img
                  src="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041864.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740"
                  alt="Business Solutions Illustration"
                  width="400"
                  height="300"
                  style={heroImage}
                />
              </Column>
            </Row>
          </Section>

          {/* Analytics Section */}
          <Section style={analyticsSection}>
            <Row>
              <Column style={{ verticalAlign: "top", paddingLeft: "30px" }}>
                <Heading style={sectionHeading}>
                  Analyze & find the perfect solution for your business.
                </Heading>
                <Text style={sectionText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Statistics Section */}
          <Section style={statsSection}>
            <Row>
              <Column align="center" style={statColumn}>
                <table style={circularProgressTable}>
                  <tr>
                    <td style={circularProgress}>
                      <Text style={percentageText}>55%</Text>
                    </td>
                  </tr>
                </table>
                <Text style={statTitle}>Keywords Results</Text>
                <Text style={statSubtitle}>our service</Text>
              </Column>
              <Column align="center" style={statColumn}>
                <table style={circularProgressTable}>
                  <tr>
                    <td style={circularProgressOrange}>
                      <Text style={percentageText}>75%</Text>
                    </td>
                  </tr>
                </table>
                <Text style={statTitle}>Keywords Results</Text>
                <Text style={statSubtitle}>our service</Text>
              </Column>
              <Column align="center" style={statColumn}>
                <table style={circularProgressTable}>
                  <tr>
                    <td style={circularProgressBlue}>
                      <Text style={percentageText}>84%</Text>
                    </td>
                  </tr>
                </table>
                <Text style={statTitle}>Keywords Results</Text>
                <Text style={statSubtitle}>our service</Text>
              </Column>
            </Row>
          </Section>

          {/* Tips Section */}
          <Section style={analyticsSection}>
            <Row>
              <Column style={{ width: "300px", verticalAlign: "top" }}>
                <Heading style={tipsHeading}>
                  Get tips & tricks on how to skyrocket your sales.
                </Heading>
                <Text style={tipsText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Row>
              <Column align="center">
                <Text style={footerTitle}>[Company name]</Text>
                <Text style={footerText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Row style={{ paddingTop: "20px" }}>
                  <Column align="center" style={{ width: "40px" }}>
                    <Link href="#" style={socialLink}>
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/circle/facebook.png"
                        alt="Facebook"
                        width="24"
                        height="24"
                      />
                    </Link>
                  </Column>
                  <Column align="center" style={{ width: "40px" }}>
                    <Link href="#" style={socialLink}>
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                        alt="Twitter"
                        width="24"
                        height="24"
                      />
                    </Link>
                  </Column>
                  <Column align="center" style={{ width: "40px" }}>
                    <Link href="#" style={socialLink}>
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/circle/meetup.png"
                        alt="LinkedIn"
                        width="24"
                        height="24"
                      />
                    </Link>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default Offers;

// Styles
const main = {
  backgroundColor: "#ffffff",
  fontFamily: "DM Sans, Verdana, sans-serif",
  margin: "0",
  padding: "0",
};

const container = {
  margin: "0 auto",
  width: "600px",
  maxWidth: "100%",
};

const header = {
  backgroundColor: "#8B5A96",
  padding: "15px 30px",
};

const logo = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0",
  padding: "5px 0",
};

const navItem = {
  paddingLeft: "20px",
};

const navLink = {
  color: "#ffffff",
  fontSize: "14px",
  textDecoration: "none",
  fontWeight: "400",
};

const heroSection = {
  background: "linear-gradient(135deg, #8B5A96 0%, #5D4E75 100%)",
  padding: "60px 40px",
  textAlign: "center" as const,
};

const heroHeading = {
  color: "#ffffff",
  fontSize: "36px",
  fontWeight: "700",
  margin: "0 0 10px 0",
  lineHeight: "1.2",
};

const heroSubheading = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "400",
  margin: "0 0 30px 0",
  letterSpacing: "2px",
};

const heroText = {
  color: "#ffffff",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0 0 40px 0",
  maxWidth: "500px",
  marginLeft: "auto",
  marginRight: "auto",
};

const ctaButton = {
  backgroundColor: "#FFD700",
  color: "#000000",
  fontSize: "16px",
  fontWeight: "600",
  padding: "15px 30px",
  textDecoration: "none",
  borderRadius: "25px",
  display: "inline-block",
};

const heroImage = {
  maxWidth: "100%",
  height: "auto",
};

const analyticsSection = {
  backgroundColor: "#4A3B5C",
  padding: "60px 40px",
};


const sectionHeading = {
  color: "#ffffff",
  fontSize: "25px",
  fontWeight: "700",
  margin: "0 0 20px 0",
  lineHeight: "1.3",
};

const sectionText = {
  color: "#ffffff",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0",
  opacity: "0.9",
};

const tipsSection = {
  backgroundColor: "#4A3B5C",
  padding: "60px 10px",
};

const tipsHeading = {
  color: "#ffffff",
  fontSize: "25px",
  fontWeight: "700",
  margin: "0 0 20px 0",
  lineHeight: "1.3",
};

const tipsText = {
  color: "#ffffff",
  fontSize: "13px",
  lineHeight: "1.6",
  margin: "0",
  opacity: "0.9",
};

const tipsImage = {
  borderRadius: "10px",
  maxWidth: "100%",
  height: "auto",
};

const footer = {
  backgroundColor: "#8B5A96",
  padding: "40px",
  textAlign: "center" as const,
};

const footerTitle = {
  color: "#ffffff",
  fontSize: "19px",
  fontWeight: "700",
  margin: "0 0 20px 0",
};

const footerText = {
  color: "#ffffff",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0",
  opacity: "0.9",
  maxWidth: "400px",
  marginLeft: "auto",
  marginRight: "auto",
};

const socialLink = {
  display: "inline-block",
  margin: "0 10px",
};
const statsSection = {
  backgroundColor: "#3D2E4F",
  padding: "60px 40px",
}

const statColumn: React.CSSProperties = {
  width: "33.33%",
  textAlign: "center",
  verticalAlign: "top",
}

// New table wrapper for circular progress
const circularProgressTable = {
  width: "80px",
  height: "80px",
  margin: "0 auto 20px auto",
}

const circularProgress = {
  padding: "25px 0",
//   height: "90px",
  borderRadius: "50%",
  border: "6px solid #4CAF50",
  backgroundColor: "transparent",
  textAlign: "center" as const,
  verticalAlign: "middle",
  lineHeight: "68px",
}

const circularProgressOrange = {
    padding: "25px 0",
  borderRadius: "50%",
  border: "6px solid #FF9800",
  backgroundColor: "transparent",
  textAlign: "center" as const,
  verticalAlign: "middle",
  lineHeight: "68px",
}

const circularProgressBlue = {
   padding: "25px 0",
  borderRadius: "50%",
  border: "6px solid #2196F3",
  backgroundColor: "transparent",
  textAlign: "center" as const,
  verticalAlign: "middle",
  lineHeight: "68px",
}

const percentageText = {
  color: "#ffffff",
  fontSize: "18px",
  fontWeight: "700",
  margin: "0",
  lineHeight: "1",
}

const statTitle = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  margin: "10px 0 5px 0",
  textAlign: "center" as const,
}

const statSubtitle = {
  color: "#ffffff",
  fontSize: "14px",
  margin: "0",
  opacity: "0.7",
  textAlign: "center" as const,
}