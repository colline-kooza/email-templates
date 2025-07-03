import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Text,
    Link,
    Img,
    Font,
    Section,
    Row,
    Column,
  } from "@react-email/components"
  
  interface FridayPromoEmailProps {
    inviteCode?: string
  }
  
  export const FridayPromoEmail = ({ inviteCode = "UNL60801" }: FridayPromoEmailProps) => {
    return (
      <Html>
        <Head>
          <Font
            fontFamily="Roboto"
            fallbackFontFamily="Verdana"
            webFont={{
              url: "https://fonts.gstatic.com/s/roboto/v30/KFOiCnqEu92Fr1Mu51QrEz0dL_nz.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Preview>This Will Make Your Friday Better</Preview>
        <Body style={main}>
          <Container style={container}>
            {/* Header */}
            <Section style={headerStyle}>
              <Row>
                <Column align="center">
                  <Heading style={headingStyle}>This Will Make Your</Heading>
                  <Heading style={headingStyle}>Friday Better.</Heading>
                </Column>
              </Row>
            </Section>
  
            {/* Main Image and Offer Code */}
            <Section style={mainSectionStyle}>
              <Row>
                <Column align="center">
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1695809524149-Group%2072.png"
                    alt="Gifts"
                    width="600"
                    height="390"
                    style={mainImageStyle}
                  />
                  <Text style={italicTextStyle}>Collect Your Gift on Entering Invite Code</Text>
  
                  <Text style={inviteCodeStyle}>{inviteCode}</Text>
  
                  <Button href="#" style={buttonStyle}>
                    Redeem Now
                  </Button>
  
                  <Text style={timerTextStyle}>E N D S - A T - M I D N I G H T - T O D A Y</Text>
                </Column>
              </Row>
            </Section>
  
            {/* Footer */}
            <Section style={footerStyle}>
              <Row>
                <Column>
                  <Text style={footerTitleStyle}>Thanks for the support! 🎁</Text>
                  <Text style={footerDescriptionStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et. Sed ut perspiciatis unde omnis iste natus error sit.
                  </Text>
  
                  <Row>
                    <Column style={{ width: "24px", paddingRight: "10px" }}>
                      <Link href="#">
                        <Img
                          src="https://cdn.tools.unlayer.com/social/icons/circle-white/facebook.png"
                          width="24"
                          height="24"
                          alt="Facebook"
                          style={socialIconStyle}
                        />
                      </Link>
                    </Column>
                    <Column style={{ width: "24px", paddingRight: "10px" }}>
                      <Link href="#">
                        <Img
                          src="https://cdn.tools.unlayer.com/social/icons/circle-white/linkedin.png"
                          width="24"
                          height="24"
                          alt="LinkedIn"
                          style={socialIconStyle}
                        />
                      </Link>
                    </Column>
                    <Column style={{ width: "24px", paddingRight: "10px" }}>
                      <Link href="#">
                        <Img
                          src="https://cdn.tools.unlayer.com/social/icons/circle-white/instagram.png"
                          width="24"
                          height="24"
                          alt="Instagram"
                          style={socialIconStyle}
                        />
                      </Link>
                    </Column>
                    <Column style={{ width: "24px" }}>
                      <Link href="#">
                        <Img
                          src="https://cdn.tools.unlayer.com/social/icons/circle-white/x.png"
                          width="24"
                          height="24"
                          alt="X"
                          style={socialIconStyle}
                        />
                      </Link>
                    </Column>
                    <Column style={{ width: "504px" }}></Column>
                  </Row>
  
                  <Text style={footerLinksStyle}>
                    <Link href="#" style={footerLinkStyle}>
                      UNSUBSCRIBE
                    </Link>{" "}
                    |{" "}
                    <Link href="#" style={footerLinkStyle}>
                      PRIVACY POLICY
                    </Link>{" "}
                    |{" "}
                    <Link href="#" style={footerLinkStyle}>
                      WEB
                    </Link>
                  </Text>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Html>
    )
  }
  
  export default FridayPromoEmail
  
  // Email-client compatible styles
  const main = {
    fontFamily: '"Roboto", Verdana, sans-serif',
    margin: 0,
    padding: 0,
    background: "#ffffff",
  }
  
  const container = {
    maxWidth: "600px",
    margin: "0 auto",
    background: "#ffffff",
  }
  
  const headerStyle = {
    textAlign: "center" as const,
    padding: "20px 0",
  }
  
  const headingStyle = {
    fontSize: "24px",
    fontWeight: "500",
    color: "#000000",
    margin: "0",
    lineHeight: "1.3",
    textAlign: "center" as const,
  }
  
  const mainSectionStyle = {
    textAlign: "center" as const,
    padding: "0 20px",
  }
  
  const mainImageStyle = {
    maxWidth: "100%",
    height: "auto",
    margin: "0 auto",
    display: "block",
  }
  
  const italicTextStyle = {
    fontStyle: "italic",
    fontSize: "16px",
    color: "#000000",
    marginTop: "28px",
    marginBottom: "10px",
  }
  
  const inviteCodeStyle = {
    fontSize: "22px",
    fontWeight: "600",
    color: "#181818",
    margin: "10px auto",
    borderBottom: "solid 1px #181818",
    paddingBottom: "5px",
    width: "38%",
    textAlign: "center" as const,
  }
  
  const buttonStyle = {
    backgroundColor: "#97732f",
    color: "#ffffff",
    padding: "10px 20px",
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: "normal",
    borderRadius: "2px",
    marginTop: "28px",
    display: "inline-block",
    border: "none",
  }
  
  const timerTextStyle = {
    fontSize: "13px",
    color: "#000000",
    margin: "25px 0",
    letterSpacing: "1px",
  }
  
  const footerStyle = {
    backgroundColor: "#242424",
    padding: "20px",
  }
  
  const footerTitleStyle = {
    color: "#f8fafc",
    fontSize: "16px",
    margin: "0 0 10px 0",
    textAlign: "left" as const,
  }
  
  const footerDescriptionStyle = {
    color: "#f8fafc",
    fontSize: "12px",
    margin: "0 0 20px 0",
    borderBottom: "solid 1px #f8fafc",
    paddingBottom: "15px",
    textAlign: "left" as const,
    lineHeight: "1.5",
  }
  
  const socialIconStyle = {
    width: "24px",
    height: "24px",
    display: "block",
  }
  
  const footerLinksStyle = {
    color: "#ffffff",
    fontSize: "12px",
    margin: "20px 0 0 0",
    borderTop: "solid 1px #f8fafc",
    paddingTop: "15px",
    textAlign: "left" as const,
  }
  
  const footerLinkStyle = {
    color: "#ffffff",
    textDecoration: "none",
  }
  