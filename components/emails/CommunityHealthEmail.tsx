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

export const CommunityHealthEmail = () => (
  <Html>
    <Head>
      <Font
        fontFamily="Raleway"
        fallbackFontFamily="sans-serif"
        webFont={{
          url: "https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
      <Font
        fontFamily="Epilogue"
        fallbackFontFamily="sans-serif"
        webFont={{
          url: "https://fonts.googleapis.com/css2?family=Epilogue:wght@500&display=swap",
          format: "woff2",
        }}
        fontWeight={500}
        fontStyle="normal"
      />
    </Head>
    <Preview>San Francisco Event Week - Community Health Events</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          {/* Hero Image Section */}
          <Section style={heroSection}>
            <Row>
              <Column>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1721598903831-Group%2017.png"
                  alt="image"
                  title="image"
                  style={heroImage}
                />
              </Column>
            </Row>
          </Section>

          {/* Event Info Section */}
          <Section style={eventSection}>
            <Row>
              <Column style={{ width: "100%" }}>
                <Heading style={eventHeading}>
                  San Francisco
                  <br />
                  Event Week
                </Heading>
                <div style={divider}></div>
                <Text style={eventDate}>Aug 14 - 18</Text>
                <Text style={eventDescription}>
                  Lorem ipsum dolor sit amet, con sectetur adip iscing elit.
                </Text>
                <Text style={eventInterest}>
                  Currently over 1000+ people interested
                </Text>
                <div style={eventButtonContainer}>
                  <Link href="https://unlayer.com" style={eventButton}>
                    Read More
                  </Link>
                </div>
              </Column>
             
            </Row>
          </Section>

          {/* Second Image Section */}
          <Section style={imageSection}>
            <Row>
              <Column>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1721599421350-image%201.png"
                  alt="image"
                  title="image"
                  style={secondImage}
                />
              </Column>
            </Row>
          </Section>

          {/* Why Join Us Section */}
          <Section style={whyJoinSection}>
            <Row>
              <Column style={{ width: "66.67%" }}>
                <Heading style={whyJoinHeading}>Why Join Us?</Heading>
              </Column>
              <Column style={{ width: "33.33%" }}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1721599634462-Group%2015.png"
                  alt="image"
                  title="image"
                  style={whyJoinImage}
                />
              </Column>
            </Row>
          </Section>

          {/* Benefits Section */}
          <Section style={benefitsSection}>
            <Row>
              <Column style={{ width: "50%" }}>
                <Heading style={benefitHeading}>Well-curated Events</Heading>
                <div style={divider}></div>
                <Text style={benefitText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore.
                </Text>
                <Heading style={benefitHeading}>Wellness Campaigns</Heading>
                <div style={divider}></div>
                <Text style={benefitText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore.
                </Text>
              </Column>
              <Column style={{ width: "50%" }}>
                <Heading style={benefitHeading}>
                  Professional Health Speakers
                </Heading>
                <div style={divider}></div>
                <Text style={benefitText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore.
                </Text>
                <Heading style={benefitHeading}>Community Building</Heading>
                <div style={divider}></div>
                <Text style={benefitText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore.
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Register Section */}
          <Section style={registerSection}>
            <Row>
              <Column>
                <Heading style={registerHeading}>
                  Register yourself now!
                </Heading>
                <Text style={registerText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore.
                </Text>
                <div style={registerButtonContainer}>
                  <Link href="https://unlayer.com" style={registerButton}>
                    Register Now
                  </Link>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Contact Section */}
          <Section style={contactSection}>
            <Row>
              <Column>
                <Text style={contactText}>
                  Please reach out to us if you have any thoughts, praise, or
                  custom project to{" "}
                  <Link href="http://www.unlayer.com" style={contactLink}>
                    www.unlayer.com
                  </Link>
                  . We’d love to hear from you!
                </Text>
                <div style={socialContainer}>
                  <Link
                    href="https://cdn.tools.unlayer.com/social/icons/circle-white/facebook.png"
                    style={socialLink}
                  >
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/circle-white/facebook.png"
                      alt="Facebook icon"
                      title="Facebook"
                      width="32"
                      height="32"
                    />
                  </Link>
                  <Link
                    href="https://cdn.tools.unlayer.com/social/icons/circle-white/linkedin.png"
                    style={socialLink}
                  >
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/circle-white/x.png"
                      alt="LinkedIn icon"
                      title="LinkedIn"
                      width="32"
                      height="32"
                    />
                  </Link>
                  <Link
                    href="https://cdn.tools.unlayer.com/social/icons/circle-white/instagram.png"
                    style={socialLink}
                  >
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/circle-white/instagram.png"
                      alt="Instagram icon"
                      title="Instagram"
                      width="32"
                      height="32"
                    />
                  </Link>
                  <Link href="https://cdn.tools.unlayer.com/social/icons/circle-white/x.png" style={socialLink}>
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/circle-white/x.png"
                      alt="X icon"
                      title="X"
                      width="32"
                      height="32"
                    />
                  </Link>
                </div>
                <div style={divider}></div>
              </Column>
            </Row>
          </Section>

          {/* Footer Section */}
          <Section style={footerSection}>
            <Row>
              <Column style={{ width: "61.33%" }}></Column>
              <Column style={{ width: "38.67%" }}>
                <Text style={logoText}>[Your Logo]</Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default CommunityHealthEmail;

// Styles
const main = {
  backgroundColor: "#ecf0f1",
  fontFamily: "Raleway, sans-serif",
  margin: "0",
  padding: "0",
};

const container = {
  margin: "0 auto",
  width: "600px",
  maxWidth: "100%",
  backgroundColor: "transparent",
};

const heroSection = {
  padding: "0px",
  backgroundColor: "transparent",
};

const heroImage = {
  outline: "none",
  textDecoration: "none",
  display: "inline-block",
  border: "none",
  height: "auto",
  width: "100%",
  maxWidth: "600px",
};

const eventSection = {
  backgroundColor: "#1c1c1c",
  padding: "0px",
};

const eventHeading = {
  margin: "0px",
  color: "#b9ff66",
  lineHeight: "120%",
  textAlign: "left" as const,
  fontFamily: "Epilogue, sans-serif",
  fontSize: "20px",
  fontWeight: "400",
  padding: "30px 10px 0px",
};

const eventDate = {
  fontFamily: "Epilogue, sans-serif",
  fontSize: "16px",
  color: "#ffffff",
  lineHeight: "140%",
  textAlign: "left" as const,
  padding: "10px 10px 0px",
  margin: "0",
};

const eventDescription = {
  fontSize: "14px",
  color: "#95a5a6",
  lineHeight: "140%",
  textAlign: "left" as const,
  padding: "10px 20px 0px 10px",
  margin: "0",
};

const eventInterest = {
  fontFamily: "Epilogue, sans-serif",
  fontSize: "14px",
  color: "#ffffff",
  lineHeight: "140%",
  textAlign: "left" as const,
  padding: "10px",
  margin: "0",
};

const eventButtonContainer = {
  padding: "20px 10px 30px",
};

const eventButton = {
  backgroundColor: "#b9ff66",
  color: "#1c1c1c",
  fontSize: "14px",
  textDecoration: "none",
  padding: "10px 20px",
  width: "90%",
  maxWidth: "100%",
  display: "inline-block",
  textAlign: "center" as const,
  fontWeight: "400",
  borderRadius: "4px",
};

const mainHeading = {
  margin: "0px",
  color: "#b9ff66",
  lineHeight: "120%",
  textAlign: "left" as const,
  fontFamily: "Epilogue, sans-serif",
  fontSize: "55px",
  fontWeight: "400",
  padding: "125px 10px 0px",
};

const mainDescription = {
  fontSize: "14px",
  color: "#95a5a6",
  lineHeight: "140%",
  textAlign: "left" as const,
  padding: "10px 20px 0px 10px",
  margin: "0",
};

const imageSection = {
  backgroundColor: "#1c1c1c",
  padding: "60px 10px 0px",
};

const secondImage = {
  outline: "none",
  textDecoration: "none",
  clear: "both" as const,
  display: "inline-block",
  border: "none",
  height: "auto",
  width: "100%",
  maxWidth: "580px",
};

const whyJoinSection = {
  backgroundColor: "#1c1c1c",
  padding: "0px",
};

const whyJoinHeading = {
  margin: "0px",
  color: "#b9ff66",
  lineHeight: "140%",
  textAlign: "left" as const,
  fontFamily: "Epilogue, sans-serif",
  fontSize: "22px",
  fontWeight: "400",
  padding: "60px 10px 0px 20px",
};

const whyJoinImage = {
  outline: "none",
  textDecoration: "none",
  clear: "both" as const,
  display: "inline-block",
  border: "none",
  height: "auto",
  width: "100%",
  maxWidth: "40px",
  float: "right" as "right",
  padding: "56px 20px 0px 10px",
};

const benefitsSection = {
  backgroundImage: "url('images/image-8.png')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center top",
  backgroundColor: "transparent",
  padding: "0px",
};

const benefitHeading = {
  margin: "0px",
  color: "#b9ff66",
  lineHeight: "140%",
  textAlign: "left" as const,
  fontFamily: "Epilogue, sans-serif",
  fontSize: "16px",
  fontWeight: "400",
  padding: "40px 10px 0px 20px",
};

const benefitText = {
  fontSize: "14px",
  color: "#95a5a6",
  lineHeight: "140%",
  textAlign: "left" as const,
  padding: "10px 10px 30px 20px",
  margin: "0",
};

const registerSection = {
  backgroundColor: "#b9ff66",
  padding: "0px",
  borderLeft: "10px solid #1c1c1c",
  borderRight: "10px solid #1c1c1c",
  borderBottom: "10px solid #1c1c1c",
};

const registerHeading = {
  margin: "0px",
  lineHeight: "140%",
  textAlign: "center" as const,
  fontFamily: "Epilogue, sans-serif",
  fontSize: "22px",
  fontWeight: "400",
  padding: "30px 10px 5px",
};

const registerText = {
  fontSize: "14px",
  lineHeight: "140%",
  textAlign: "center" as const,
  padding: "0px 60px",
  margin: "0",
};

const registerButtonContainer = {
  padding: "10px 10px 30px",
  textAlign: "center" as const,
};

const registerButton = {
  backgroundColor: "#1c1c1c",
  color: "#ffffff",
  fontSize: "14px",
  textDecoration: "none",
  padding: "10px 20px",
  width: "31%",
  maxWidth: "100%",
  display: "inline-block",
  textAlign: "center" as const,
  fontWeight: "400",
  borderRadius: "4px",
};

const contactSection = {
  backgroundColor: "#1c1c1c",
  padding: "0px",
};

const contactText = {
  fontSize: "14px",
  color: "#ffffff",
  lineHeight: "170%",
  textAlign: "left" as const,
  padding: "40px 10px 10px 40px",
  margin: "0",
};

const contactLink = {
  color: "#f1c40f",
  textDecoration: "underline",
};

const socialContainer = {
  display: "flex",
  alignItems: "center",
  padding: "0px 10px 20px 40px",
  gap: "10px",
};

const socialLink = {
  display: "inline-block",
  marginRight: "10px",
};

const divider = {
  borderTop: "1px solid #777777",
  height: "0px",
  width: "100%",
  margin: "10px 0px",
};

const footerSection = {
  backgroundColor: "#151515",
  padding: "0px",
};

const logoText = {
  margin: "0px",
  color: "#ffffff",
  lineHeight: "140%",
  textAlign: "center" as const,
  fontSize: "22px",
  fontWeight: "400",
  padding: "10px",
};