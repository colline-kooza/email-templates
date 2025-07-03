import {
    Body,
    Container,
    Column,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
  

  export const AppPromoEmail = () => (
    <Html>
      <Head />
      <Preview>Get Your Free Download Of Web Management App</Preview>
      <Tailwind>
      <Body style={main}>
        <Container style={container}>
          <Section style={topSection}>
            <Row>
              <Column align="left" style={logoWrapper}>
                <Img
                  src={`https://cdn.templates.unlayer.com/assets/1626763757335-logo.png`}
                  width="90"
                  height="80"
                  alt="Logo"
                  className="object-contain"
                />
              </Column>
            </Row>
            <Row>
              <Column>
                <Heading as="h1" style={{
                    fontSize: "28px",
                    fontWeight: "black",
                    color: "#34495e",
                    marginBottom: "20px",
                    textAlign:"center"
                  }}
                  className="leading-[37px]"
                  >
                Get Your Free
                <br/>
                Download Of Web
                <br/>
                Management App
                </Heading>
              </Column>
              <Column>
                <Img
                  src={`https://cdn.templates.unlayer.com/assets/1626763584026-1.png`}
                  width="150"
                  height="300"
                  alt="App Screenshot"
                  style={phoneImage}
                  className="object-cover"

                />
              </Column>
            </Row>
          </Section>
          
          <Section style={featuresSection}>
            <Row>
              <Column align="center" style={featureColumn}>
                <Img
                  src={`https://cdn.templates.unlayer.com/assets/1626764648936-icons8-content-100.png`}
                  width="50"
                  height="50"
                  alt="Powerful Feature"
                  className="object-cover"

                />
                <Heading as="h3" style={featureTitle}>Powerful Feature</Heading>
                <Text style={featureText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Text>
              </Column>
              <Column align="center" style={featureColumn}>
                <Img
                  src={`https://cdn.templates.unlayer.com/assets/1626764601666-icons8-web-design-100.png`}
                  width="50"
                  height="50"
                  className="object-cover"

                  alt="Awesome Design"
                />
                <Heading as="h3" style={featureTitle}>Awesome Design</Heading>
                <Text style={featureText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Text>
              </Column>
              <Column align="center" style={featureColumn}>
                <Img
                  src={`https://cdn.templates.unlayer.com/assets/1626764532818-icons8-technical-support-wearing-glasses-100.png`}
                  width="50"
                  height="50"
                  alt="Unlimited Support"
                  className="object-cover"

                />
                <Heading as="h3" style={featureTitle}>Unlimited Support</Heading>
                <Text style={featureText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Text>
              </Column>
            </Row>
          </Section>
  
          <Section style={downloadSection}>
            <Heading as="h2" style={subHeading}>Now Available At</Heading>
            <Text style={downloadText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </Text>
            <Row>
              <Column align="center">
                <Link href="https://play.google.com/store">
                  <Img
                    src={`https://cdn.templates.unlayer.com/assets/1626766809670-google_play_button-260x80.png`}
                    width="155"
                    height="50"
                    alt="Get it on Google Play"
                    className="object-contain"

                  />
                </Link>
              </Column>
              <Column align="center">
                <Link href="https://www.apple.com/app-store/">
                  <Img
                    src={`https://cdn.templates.unlayer.com/assets/1626766813567-app_store_button-260x80.png`}
                    width="155"
                    height="50"
                    className="object-contain"

                    alt="Download on the App Store"
                  />
                </Link>
              </Column>
            </Row>
          </Section>
  
          <Section style={heroSection}>
              <Heading style={heroHeading}>App Screens </Heading>
              <Img src={`https://cdn.templates.unlayer.com/assets/1626766433141-Case.png`} width="500" alt="Product Screenshot" style={heroImage} className="object-cover mx-auto text-center"/>
            </Section>
  
          <Section style={footerSection}>
            <Row>
              <Column align="center">
              <Link href={`https://.com`} style={socialLink}>
                    <Img
                      src={`https://cdn.tools.unlayer.com/social/icons/circle-white/facebook.png`}
                      width="24"
                      height="24"
                      alt={` icon`}
                    />
                  </Link>
              <Link href={`https://.com`} style={socialLink}>
                    <Img
                      src={`https://cdn.tools.unlayer.com/social/icons/circle-white/twitter.png`}
                      width="24"
                      height="24"
                      alt={` icon`}
                    />
                  </Link>
              <Link href={`https://.com`} style={socialLink}>
                    <Img
                      src={`https://cdn.tools.unlayer.com/social/icons/circle-white/linkedin.png`}
                      width="24"
                      height="24"
                      alt={` icon`}
                    />
                  </Link>
              <Link href={`https://.com`} style={socialLink}>
                    <Img
                      src={`https://cdn.tools.unlayer.com/social/icons/circle-white/instagram.png`}
                      width="24"
                      height="24"
                      alt={` icon`}
                    />
                  </Link>
              <Link href={`https://.com`} style={socialLink}>
                    <Img
                      src={`https://cdn.tools.unlayer.com/social/icons/circle-white/pinterest.png`}
                      width="24"
                      height="24"
                      alt={` icon`}
                    />
                  </Link>
              </Column>
            </Row>
            <Text style={footerText}>
              Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty
              bubble and squeak wind up, brown bread the full monty bloke ruddy.
            </Text>
            <Text style={footerContact}>
              Call: +1 234 56789<br />
              Email: info@yourdomain.com
            </Text>
          </Section>
        </Container>
      </Body>
      </Tailwind>
    </Html>
  );
  
  export default AppPromoEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const topSection = {
    background: "linear-gradient(180deg, #FFDAB9 0%, #98FB98 100%)",
    padding: "40px 20px",
  };
  const heroSection = {
    padding: "40px 0",
    textAlign: "center" as const,
    background: "linear-gradient(180deg, #98FB98   0%, #FFDAB9 100%)",

  };
  const logoWrapper = {
    display: "flex",
    alignItems: "center",
  };
  const heroImage = {
    margin: "40px 0 0",
  };
  const heroHeading = {
    color: "#000",
    fontSize: "25px",
    lineHeight: "1.3",
    fontWeight: "700",
    textAlign: "center" as const,
    padding: "0 20px",
  };
  const phoneImage = {
    marginLeft: "20px",
  };
  
  const featuresSection = {
    backgroundColor: "#98FB98",
    padding: "40px 20px",
  };
  
  const featureColumn = {
    padding: "0 10px",
  };
  
  const featureTitle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "10px",
  };
  
  const featureText = {
    fontSize: "14px",
    color: "#666",
  };
  
  const downloadSection = {
    backgroundColor: "#98FB98",
    padding: "20px",
  };
  
  const subHeading = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center" as const,
  };
  
  const downloadText = {
    fontSize: "16px",
    color: "#666",
    textAlign: "center" as const,
    marginBottom: "20px",
  };
  
  const screensSection = {
    backgroundColor: "#20B2AA",
    padding: "40px 20px",
  };
  
  const screenImage = {
    margin: "0 5px",
  };
  
  const footerSection = {
    backgroundColor: "#20B2AA",
    padding: "20px",
  };
  
  const socialLink = {
    display: "inline-block",
    margin: "0 10px",
  };
  
  const footerText = {
    fontSize: "14px",
    color: "#fff",
    textAlign: "center" as const,
    margin: "20px 0",
  };
  
  const footerContact = {
    fontSize: "14px",
    color: "#fff",
    textAlign: "center" as const,
  };