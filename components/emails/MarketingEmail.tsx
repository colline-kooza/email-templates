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
    Tailwind,
  } from "@react-email/components";
  import * as React from "react";
  
  export const MarketingEmail = () => (
    <Html>
      <Head />
      <Preview>Powerful options and new features are now available!</Preview>
      <Tailwind>
        <Body style={main}>
          <Container style={container}>
            <Section className="mx-auto text-center" style={topBar}>
              <div className="mx-auto">
                <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-white/facebook.png" alt="LinkedIn" className="w-8 h-8" /></a>
                <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-white/twitter.png" alt="Twitter" className="w-8 h-8 ml-2" /></a>
                <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-white/linkedin.png" alt="Skype" className="w-8 h-8 ml-2" /></a>
                <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-white/pinterest.png" alt="Instagram" className="w-8 h-8 ml-2" /></a>
                <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-white/youtube.png" alt="Instagram" className="w-8 h-8 ml-2" /></a>
              </div>
            </Section>
            <Section style={logoSection}>
              <Row>
                <Column>
                  <Img src={`https://cdn.templates.unlayer.com/assets/1620119581797-logo.png`} width="150" height="50" alt="Company Logo" />
                </Column>
                <Column align="right">
                  <Link href="#" style={{
    color: "#000000",
    fontSize: "14px",
    textDecoration: "none",
    textTransform: "uppercase",
    margin: "0 10px",
  }}>Home</Link>
                  <Link href="#" style={{
    color: "#000000",
    fontSize: "14px",
    textDecoration: "none",
    textTransform: "uppercase",
    margin: "0 10px",
  }}>About</Link>
                  <Link href="#" style={{
    color: "#000000",
    fontSize: "14px",
    textDecoration: "none",
    textTransform: "uppercase",
    margin: "0 10px",
  }}>Service</Link>
                  <Link href="#" style={{
    color: "#000000",
    fontSize: "14px",
    textDecoration: "none",
    textTransform: "uppercase",
    margin: "0 10px",
  }}>Contact</Link>
                </Column>
              </Row>
            </Section>
            <Section style={heroSection}>
              <Heading style={heroHeading}>Powerful options and new features are now available!</Heading>
              <Img src={`https://cdn.templates.unlayer.com/assets/1620119796127-set1-header-image.png`} width="600" alt="Product Screenshot" style={heroImage} className="object-cover"/>
            </Section>
            <Row className="mx-auto py-8">
              <Column align="center" style={eventColumn}>
                <Heading as="h2" className="font-bold text-[#eb3b4a] !mb-0" style={ctaHeading}>Get Free 30 Day Trial</Heading>
                <Text className="!mt-2 font-bold" style={ctaText}>Don't miss the time limit.</Text>
              </Column>
              <Column align="center" style={eventColumn}>
                <Link href="#" style={{
    backgroundColor: "#ffffff",
    border: "2px solid #f1404b",
    borderRadius: "4px",
    color: "black",
    fontSize: "16px",
    fontWeight: "800",
    padding: "10px 20px",
    textDecoration: "none",
    textTransform: "uppercase",
  }}>Download Now</Link>
              </Column>
            </Row>
            <Section>
              <Row>
                <Column className="mr-1">
                  <Img src={`https://cdn.templates.unlayer.com/assets/1620137138396-set1-image1.png`} width="300" alt="Product Image" />
                </Column>
                <Column className="bg-[#eb3b4a] pl-3">
                  <Heading className="text-white" as="h2" style={productHeading}>Product Quality</Heading>
                  <Text className="text-white" style={productText}>Lorem ipsum dolor sit consectetur adipisicing elit. Assumenda, est.</Text>
                  <ul className="text-white" style={productList}>
                    <li className="text-white">Responsive</li>
                    <li className="text-white">Drag and Drop</li>
                    <li className="text-white">Customize</li>
                  </ul>
                  <Link href="#" style={{
    borderRadius: "4px",
    color: "white",
    fontSize: "16px",
    fontWeight: "600",
    padding: "10px 20px",
    textDecoration: "none",
    textTransform: "uppercase",
    border: "1px solid white",
  }}>Read More</Link>
                </Column>
              </Row>
            </Section>
            <Section style={featureSection}>
              <Heading as="h2" style={featureHeading}>Feature Works</Heading>
              <Text style={featureText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, in beatae cumque hic debitis! Ipsam, ab, voluptates, laudan</Text>
              <Row>
                <Column align="center">
                  <Img src={`https://cdn.templates.unlayer.com/assets/1620137538001-set1-icon-drag.png`} width="64" height="64" alt="Drag and Drop" className="object-contain"/>
                  <Text className="!mb-0" style={featureItemText}>Drag and Drop</Text>
                  <p className="!mt-0 text-xs">Lorem ipsum dolor<br/>sit consectetur</p>
                </Column>
                <Column align="center">
                  <Img src={`https://cdn.templates.unlayer.com/assets/1620137541005-set1-icon-mobile.png`} width="64" height="64" alt="Responsive" className="object-contain"/>
                  <Text className="!mb-0" style={featureItemText}>Responsive</Text>
                  <p className="!mt-0 text-xs">Lorem ipsum dolor<br/>sit consectetur</p>
                </Column>
                <Column align="center">
                  <Img src={`https://cdn.templates.unlayer.com/assets/1620137545836-set1-icon-setting.png`} width="64" height="64" alt="Customizable" className="object-contain" />
                  <Text className="!mb-0" style={featureItemText}>Customizable</Text>
                  <p className="!mt-0 text-xs">Lorem ipsum dolor<br/>sit consectetur</p>
                </Column>
              </Row>
            </Section>
            <Section style={aboutSection}>
              <Heading as="h2" style={aboutHeading}>SAY ABOUT US</Heading>
              <Hr style={aboutHr} />
              <Row>
                <Column>
                  <Img src={`https://cdn.templates.unlayer.com/assets/1620137940471-set4-image11.png`} width="100" height="100" alt="Profile 1" style={profileImage} className="object-contain"/>
                  <Heading as="h3" style={profileHeading}>Meet The Best Community</Heading>
                  <Text style={profileText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus aspernatur, quae repudiandae. Tempore id, cum.</Text>
                </Column>
                <Column>
                  <Heading as="h3" style={profileHeading}>Meet The Best Community</Heading>
                  <Text style={profileText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus aspernatur, quae repudiandae. Tempore id, cum.</Text>
                  <Img src={`https://cdn.templates.unlayer.com/assets/1620137961804-set4-image12.png`} className="object-contain" width="100" height="100" alt="Profile 2" style={profileImage} />
                </Column>
              </Row>
            </Section>
            <Section style={footerSection}>
              <Row>
                <Column>
                  <Heading as="h3" style={footerHeading}>CONTACT US</Heading>
                  <Text style={footerText}>
                    Company Name 1234 Street<br />
                    Stage Post 1234<br />
                    Mail: info@youemail.com<br />
                    Call Us: +1 236 547895
                  </Text>
                </Column>
                <Column align="right" >
                  <Heading as="h3" style={footerHeading}>ABOUT US</Heading>
                  <Text style={footerText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas error dolores quis inventore, praesentium sint!
                  </Text>
                </Column>
              </Row>
            </Section>
            <Section style={copyrightSection}>
              <Text style={copyrightText}>© 20XX All rights reserved</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
  
  export default MarketingEmail;
  
  const main = {
    backgroundColor: "#e7e7e7",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "0px 0 0px",
    width: "660px",
    backgroundColor: "#ffffff",
  };
  
  const topBar = {
    backgroundColor: "#f1404b",
    padding: "10px 0",
  };
  
  const logoSection = {
    padding: "20px 0",
  };

  
  const heroSection = {
    backgroundColor: "#f1404b",
    padding: "40px 0",
    textAlign: "center" as const,
  };
  
  const eventColumn = {
    width: "33.33%",
    padding: "0 10px",
  };
  
  const heroHeading = {
    color: "#ffffff",
    fontSize: "28px",
    lineHeight: "1.3",
    fontWeight: "700",
    textAlign: "center" as const,
    padding: "0 20px",
  };
  
  const heroImage = {
    margin: "40px 0 0",
  };
  
  const ctaHeading = {
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "1.3",
  };
  
  const ctaText = {
    fontSize: "16px",
    margin: "10px 0 20px",
  };
  
  const ctaButton = {
    backgroundColor: "#ffffff",
    border: "2px solid #f1404b",
    borderRadius: "4px",
    color: "black",
    fontSize: "16px",
    fontWeight: "800",
    padding: "10px 20px",
    textDecoration: "none",
    textTransform: "uppercase",
  };
  
  const productHeading = {
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "1.3",
  };
  
  const productText = {
    fontSize: "16px",
    lineHeight: "1.5",
    margin: "10px 0 20px",
  };
  
  const productList = {
    fontSize: "16px",
    lineHeight: "1.5",
    margin: "0 0 20px",
    paddingLeft: "20px",
  };
  
  const productButton = {
    borderRadius: "4px",
    color: "white",
    fontSize: "16px",
    fontWeight: "600",
    padding: "10px 20px",
    textDecoration: "none",
    textTransform: "uppercase",
    border: "1px solid white",
  };
  
  const featureSection = {
    backgroundColor: "#f8f8f8",
    padding: "40px 0",
    textAlign: "center" as const,
  };
  
  const featureHeading = {
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "1.3",
  };
  
  const featureText = {
    fontSize: "16px",
    lineHeight: "1.5",
    margin: "10px 0 40px",
  };
  
  const featureItemText = {
    fontSize: "16px",
    fontWeight: "600",
    margin: "10px 0 0",
  };
  
  const aboutSection = {
    padding: "40px 0",
    textAlign: "center" as const,
  };
  
  const aboutHeading = {
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "1.3",
  };
  
  const aboutHr = {
    borderTop: "2px solid #000000",
    width: "50px",
    margin: "20px auto",
  };
  
  const profileImage = {
    borderRadius: "50%",
    margin: "0 auto 20px",
  };
  
  const profileHeading = {
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "1.3",
  };
  
  const profileText = {
    fontSize: "14px",
    lineHeight: "1.5",
  };
  
  const footerSection = {
    backgroundColor: "#f1404b",
    padding: "40px",
    color: "#ffffff",
  };
  
  const footerHeading = {
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "1.3",
    color: "#ffffff",
  };
  
  const footerText = {
    fontSize: "14px",
    lineHeight: "1.5",
    color: "#ffffff",
  };
  
  const copyrightSection = {
    backgroundColor: "#000000",
    padding: "0px",
    textAlign: "center" as const,
  };
  
  const copyrightText = {
    fontSize: "12px",
    color: "#ffffff",
  };