import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Row,
  Column,
} from "@react-email/components"

export default function InternalNewsletter() {
  return (
    <Html>
      <Head>
        <style>
          {`
            @media only screen and (max-width: 600px) {
              .mobile-center {
                text-align: center !important;
              }
              .mobile-padding {
                padding: 20px !important;
              }
              .mobile-full-width {
                width: 100% !important;
              }
              .mobile-image {
                float: none !important;
                margin: 0 auto 20px auto !important;
                display: block !important;
                width: 200px !important;
              }
              .mobile-text-center {
                text-align: center !important;
              }
              .mobile-button {
                text-align: center !important;
                display: block !important;
                margin: 0 auto !important;
              }
              .mobile-heading {
                font-size: 20px !important;
                text-align: center !important;
                margin: 0 0 20px 0 !important;
              }
              .mobile-social {
                display: inline-block !important;
                margin: 0 4px !important;
              }
            }
          `}
        </style>
      </Head>
      <Preview>Stay Connected With Our Internal Newsletter</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={headerSection}>
            <Heading style={heading} className="mobile-heading">
              Stay Connected With Our Internal Newsletter
            </Heading>
            <div style={headerImageContainer}>
              <Img
                src="https://cdn.templates.unlayer.com/assets/1672033112597-img.png"
                width={400}
                height={250}
                alt="People working at a desk"
                style={headerImage}
              />
            </div>
          </Section>

          <Section style={newsSection}>
            <Heading as="h2" style={newsSectionHeading}>
              News of The Week
            </Heading>
            <Text style={newsParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus commodo viverra maecenas.
            </Text>
          </Section>

          <Hr style={divider} />

          <Section style={contentSection}>
            <Row>
              <Column style={contentColumnStyle}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1672037899891-1.png"
                  height={200}
                  width={200}
                  alt="Illustration"
                  style={floatLeft}
                  className="mobile-image"
                />
                <Heading as="h2" style={sectionHeading}>
                  What's New
                </Heading>
                <Text style={paragraph} className="mobile-text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore.
                </Text>
                <div style={buttonContainer} className="mobile-button">
                  <Button style={button} href="https://example.com">
                    Read More
                  </Button>
                </div>
              </Column>
            </Row>
          </Section>

          <Hr style={divider} />

          <Section style={contentSection}>
            <Row>
              <Column style={contentColumnStyle}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1673252774254-2.png"
                  height={200}
                  width={200}
                  alt="Illustration"
                  style={floatRight}
                  className="mobile-image"
                />
                <Heading as="h2" style={sectionHeading}>
                  Discover What's Trending
                </Heading>
                <Text style={paragraph} className="mobile-text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore.
                </Text>
                <div style={buttonContainer} className="mobile-button">
                  <Button style={button} href="https://example.com">
                    Read More
                  </Button>
                </div>
              </Column>
            </Row>
          </Section>

          <Hr style={divider} />

          <Section style={activitiesSection}>
            <Heading as="h2" style={activitiesSectionHeading}>
              Activities of The Week
            </Heading>
            <Text style={activitiesParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus commodo viverra maecenas.
            </Text>
            <div style={activityImageContainer}>
              <Img
                src="https://cdn.templates.unlayer.com/assets/1672038274331-3.png"
                width={400}
                height={200}
                alt="Activity illustration"
                style={activityImage}
              />
            </div>
            <div style={activityButtonContainer}>
              <Button style={button} href="https://example.com">
                Take a Virtual Tour
              </Button>
            </div>
          </Section>

          <Hr style={divider} />

          <Section style={footerSection}>
            <div style={socialLinksContainer}>
              <Link href="https://facebook.com" style={socialLink} className="mobile-social">
                <Img
                  src="https://cdn.tools.unlayer.com/social/icons/rounded-black/facebook.png"
                  width={25}
                  height={25}
                  alt="Facebook"
                />
              </Link>
              <Link href="https://twitter.com" style={socialLink} className="mobile-social">
                <Img
                  src="https://cdn.tools.unlayer.com/social/icons/rounded-black/twitter.png"
                  width={25}
                  height={25}
                  alt="Twitter"
                />
              </Link>
              <Link href="https://linkedin.com" style={socialLink} className="mobile-social">
                <Img
                  src="https://cdn.tools.unlayer.com/social/icons/rounded-black/linkedin.png"
                  width={25}
                  height={25}
                  alt="LinkedIn"
                />
              </Link>
              <Link href="https://instagram.com" style={socialLink} className="mobile-social">
                <Img
                  src="https://cdn.tools.unlayer.com/social/icons/rounded-black/instagram.png"
                  width={25}
                  height={25}
                  alt="Instagram"
                />
              </Link>
              <Link href="https://pinterest.com" style={socialLink} className="mobile-social">
                <Img
                  src="https://cdn.tools.unlayer.com/social/icons/rounded-black/pinterest.png"
                  width={25}
                  height={25}
                  alt="Pinterest"
                />
              </Link>
              <Link href="https://youtube.com" style={socialLink} className="mobile-social">
                <Img
                  src="https://cdn.tools.unlayer.com/social/icons/rounded-black/youtube.png"
                  width={25}
                  height={25}
                  alt="YouTube"
                />
              </Link>
            </div>
            <Text style={footerText}>
              email@website.com
              <br />
              +12 345 6789
            </Text>
            <Text style={footerText}>© 2023 Your Company. All Rights Reserved.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "600px",
}

const headerSection = {
  backgroundColor: "#1e43ca",
  padding: "24px",
  textAlign: "center" as const,
}

const heading = {
  color: "#ffffff",
  fontWeight: "bold",
  margin: "0 0 24px",
  fontSize: "24px",
  padding: "0 32px",
}

const headerImageContainer = {
  textAlign: "center" as const,
  marginTop: "16px",
}

const headerImage = {
  maxWidth: "100%",
  height: "auto",
}

const newsSection = {
  padding: "20px",
  textAlign: "center" as const,
}

const newsSectionHeading = {
  color: "#e03e2d",
  fontWeight: "bold",
  fontSize: "20px",
  margin: "0 0 4px 0",
}

const newsParagraph = {
  lineHeight: "24px",
  margin: "8px 0",
  fontSize: "16px",
  color: "#333333",
}

const contentSection = {
  padding: "20px",
}

const contentColumnStyle = {
  width: "100%",
  verticalAlign: "top" as const,
}

const sectionHeading = {
  fontWeight: "bold",
  margin: "0 0 4px 0",
  fontSize: "18px",
}

const paragraph = {
  lineHeight: "24px",
  margin: "0 0 16px",
  fontSize: "16px",
  color: "#333333",
}

const buttonContainer = {
  marginTop: "16px",
}

const button = {
  backgroundColor: "#1e43ca",
  borderRadius: "4px",
  color: "#ffffff",
  display: "inline-block",
  fontSize: "13px",
  fontWeight: "bold",
  padding: "10px 24px",
  textDecoration: "none",
}

const divider = {
  borderTop: "1px solid #e5e7eb",
  margin: "0",
}

const floatLeft = {
  float: "left" as const,
  marginRight: "24px",
  marginBottom: "24px",
  width: "200px",
  height: "auto",
}

const floatRight = {
  float: "right" as const,
  marginLeft: "24px",
  marginBottom: "24px",
  width: "200px",
  height: "auto",
}

const activitiesSection = {
  padding: "20px",
  textAlign: "center" as const,
}

const activitiesSectionHeading = {
  color: "#e03e2d",
  fontWeight: "bold",
  fontSize: "20px",
  margin: "0 0 4px 0",
}

const activitiesParagraph = {
  lineHeight: "24px",
  margin: "8px 0 16px",
  fontSize: "16px",
  color: "#333333",
}

const activityImageContainer = {
  textAlign: "center" as const,
  margin: "20px 0",
}

const activityImage = {
  display: "block",
  margin: "0 auto",
  maxWidth: "100%",
  height: "auto",
}

const activityButtonContainer = {
  textAlign: "center" as const,
  margin: "16px 0",
}

const footerSection = {
  backgroundColor: "#f3f4f6",
  padding: "24px 10px",
  textAlign: "center" as const,
}

const socialLinksContainer = {
  margin: "0 0 16px",
}

const socialLink = {
  display: "inline-block",
  margin: "0 6px",
}

const footerText = {
  color: "#4b5563",
  fontSize: "14px",
  margin: "12px 0 0",
  lineHeight: "20px",
}
