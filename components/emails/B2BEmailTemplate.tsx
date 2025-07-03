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

  
  export const B2BEmailTemplate = () => (
    <Html>
      <Head />
      <Preview>B2B Ecommerce Modernized</Preview>
       <Tailwind>
       <Body style={main}>
        <Container style={container}>
          <div className="text-center" style={logoSection}>
            <img
              src={`https://cdn.templates.unlayer.com/assets/1620326159333-loo.png`}
              width="100"
              height="50"
              alt="Your Logo"
              className="object-contain"
            />
          </div>
          <div className="flex tex-center px-2"  style={navigationSection}>
          <Text className="text-xs mt-2 text-gray-700 mx-auto text-center tracking-[9px]">Home   |   Page   |   About   |   Contact us  </Text>
          </div>
          <Section style={heroSection}>
            <Img
              src={`https://cdn.templates.unlayer.com/assets/1620326444278-as.png`}
              width="600"
              height="300"
              alt="B2B Illustration"
              style={heroImage}
              className="object-contain"
            />
            <Heading style={heroTitle}>B2B Ecommerce Modernized</Heading>
            <Text style={heroText}>
              Experience customizable, future-proof technology built to
              work with your existing tools.
            </Text>
            <Link href="#" style={ctaButton}>
              CONTACT AN EXPERT
            </Link>
          </Section>
          <Section style={blackSection}>
            <Heading style={blackSectionTitle}>
              BigCommerce a "Strong Performer" in The Forrester Wave™
            </Heading>
            <Text style={blackSectionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </Text>
            <Link href="#" style={whiteButton}>
              Download The Report
            </Link>
          </Section>

          <Section>
            <Heading style={teamTitle}>Our Team</Heading>
            <Row>
              <Column style={teamMember}>
                <Img
                  src={`https://cdn.templates.unlayer.com/assets/1620327441036-3.png`}
                  width="100"
                  height="100"
                  className="mx-auto"
                  alt="Olivia Amelia"
                  style={teamImage}
                />
                <Text style={teamName}>OLIVIA AMELIA</Text>
                <Link href="#" style={socialLink}>
                <img src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png" alt="" className="w-6 h-6 object-contain"/>
                </Link>
                <Link href="#" style={socialLink}>
                <img src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png" alt="" className="w-6 h-6 object-contain"/>
                </Link>
              </Column>
              <Column style={teamMember}>
                <Img
                  src={`https://cdn.templates.unlayer.com/assets/1620327477155-4.png`}
                  width="100"
                  height="100"
                  alt="Rich Mackgiver"
                  className="mx-auto"
                  style={teamImage}
                />
                <Text style={teamName}>Rich Mackgiver</Text>
                <Link href="#" style={socialLink}>
                <img src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png" alt="" className="w-6 h-6 object-contain"/>
                </Link>
                <Link href="#" style={socialLink}>
                <img src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png" alt="" className="w-6 h-6 object-contain"/>
                </Link>
              </Column>
              <Column style={teamMember}>
                <Img
                  src={`https://cdn.templates.unlayer.com/assets/1620327490739-2.png`}
                  width="100"
                  height="100"
                  alt="Emma McCanom"
                  className="mx-auto"
                  style={teamImage}
                />
                <Text style={teamName}>Emma McCanom</Text>
                <Link href="#" style={socialLink}>
                <img src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png" alt="" className="w-6 h-6 object-contain"/>
                </Link>
                <Link href="#" style={socialLink}>
                <img src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png" alt="" className="w-6 h-6 object-contain"/>
                </Link>
              </Column>
            </Row>
          </Section>
          
          <Section className="mt-8" style={blueSection}>
            <Heading style={blueSectionTitle}>
            New expectations. New opportunity.
            <br/>
            Time for a new approach.
            </Heading>
            <Text style={blueSectionText}>
            It’s a new era for manufacturing and distributing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Link href="#" style={blueButton}>
            Request A Demo
            </Link>
          </Section>

          <Section className="mt-5">
            <Row>
              <Column className=" w-[50%]" style={teamMember}>
                <Img
                  src={`https://cdn.templates.unlayer.com/assets/1620327441036-3.png`}
                  width="100"
                  height="100"
                  className="mx-auto"
                  alt="Olivia Amelia"
                />
                <Text style={teamName}>OLIVIA AMELIA</Text>
                <Link href="#" style={socialLink}>
                <img src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png" alt="" className="w-6 h-6 object-contain"/>
                </Link>
                <Link href="#" style={socialLink}>
                <img src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png" alt="" className="w-6 h-6 object-contain"/>
                </Link>
              </Column>
              <Column className="w-[50%]" style={teamMember}>
                <Img
                  src={`https://cdn.templates.unlayer.com/assets/1620328085559-526499`}
                  className="w-full h-full"
                  alt="Rich Mackgiver"
                />
              
              </Column>
        
            </Row>
          </Section>
          <div className="w-full bg-black py-3 pt-8 text-white text-center !mt-5">
                <div className="mx-auto">
                  <img src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png" alt="Facebook" style={iconStyle} />
                  <img src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png" alt="Instagram" style={iconStyle} />
                  <img src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png" alt="Pinterest" style={iconStyle} />
                  <img src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png" alt="YouTube" style={iconStyle} />
                </div>
                <Text className="text-xs mt-2">Home   |   Page   |   About   |   Contact us  </Text>
                <Text className="text-xs mx-[2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</Text>
                <Text className="text-xs mt-2">Copyright © YourCompany | All Rights Reserved</Text>
              </div>
        </Container>
      </Body>
       </Tailwind>
    </Html>
  );
  
  export default B2BEmailTemplate;
  
  const main = {
    backgroundColor: "#f2f3f5",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "10px 0 0px",
    width: "760px",
    backgroundColor: "white",

  };
  
  const logoSection = {
    padding: "20px 30px",
  };
  const iconStyle = {
    width: "28px",
    height: "28px",
    borderRadius: "0%",
    marginRight: "4px",
  };
  const navigationSection = {
    backgroundColor: "#f0f8ff",
    padding: "10px",
  };
  
  
  const heroSection = {
    padding: "40px 0 30px",
    textAlign: "center" as const,
  };
  
  const heroImage = {
    margin: "0 auto",
  };
  
  const heroTitle = {
    color: "#1e3a8a",
    fontSize: "32px",
    lineHeight: "1.1",
    margin: "30px 0 15px",
  };
  
  const heroText = {
    color: "#000000",
    fontSize: "17px",
    margin: "0 0 40px",
  };
  
  const ctaButton = {
    backgroundColor: "#3b82f6",
    borderRadius: "4px",
    color: "#ffffff",
    display: "inline-block",
    fontSize: "14px",
    fontWeight: "bold",
    padding: "12px 30px",
    textDecoration: "none",
  };
  
  const blackSection = {
    backgroundColor: "#000000",
    color: "#ffffff",
    padding: "30px",
    textAlign: "center" as const,
  };
  const blueSection = {
    backgroundColor: "#e2f4ff",
    color: "#ffffff",
    padding: "30px",
    textAlign: "center" as const,
  };
  
  const blackSectionTitle = {
    fontSize: "24px",
    margin: "0 0 15px",
  };
  const blueSectionTitle = {
    fontSize: "24px",
    margin: "0 0 15px",
    color:"#000000"
  };
  
  const blackSectionText = {
    fontSize: "16px",
    margin: "0 0 30px",
  };
  const blueSectionText = {
    fontSize: "16px",
    margin: "0 0 30px",
    color:"#1f2937"
  };
  
  const whiteButton = {
    backgroundColor: "#ffffff",
    borderRadius: "2px",
    color: "#000000",
    display: "inline-block",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "12px 30px",
    textDecoration: "none",
  };

  const blueButton = {
    backgroundColor: "#63a2ff",
    borderRadius: "2px",
    color: "white",
    display: "inline-block",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "12px 30px",
    textDecoration: "none",
  };
  
  const teamTitle = {
    color: "#1e3a8a",
    fontSize: "30px",
    textAlign: "center" as const,
    margin: "40px 0 30px",
  };
  
  const teamMember = {
    textAlign: "center" as const,
    padding: "0 15px",
  };
  
  const teamImage = {
    borderRadius: "50%",
  };
  
  const teamName = {
    color: "#000000",
    fontSize: "18px",
    fontWeight: "bold",
    margin: "10px 0 5px",
  };
  
  const socialLink = {
    color: "#3b82f6",
    fontSize: "14px",
    textDecoration: "none",
    padding: "0 5px",
  };