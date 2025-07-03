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


export const PromotionalEmail = () => (
  <Html>
    <Head />
    <Preview>15% OFF on All Products From Monday, February 22th</Preview>
    <Tailwind>
    <Body style={main}>
      <Container style={container}>
        <Section  className="mx-auto text-center" style={logoContainer}>
          <Img
            src={`https://cdn.templates.unlayer.com/assets/1643694150153-Logo4.png`}
            width="200"
            height="50"
            alt="Company Logo"
            className="mx-auto text-center"
          />
        </Section>
        
        <Section style={menuContainer}>
          <Text style={{
  display: "inline-block",
  color: "#000000",
  fontSize: "12px",
  fontWeight: "bold",
  textDecoration: "none",
  textTransform: "uppercase",
  padding: "0 10px",
}}>HOME</Text>
          <Text style={{
  display: "inline-block",
  color: "#000000",
  fontSize: "12px",
  fontWeight: "bold",
  textDecoration: "none",
  textTransform: "uppercase",
  padding: "0 10px",
}}>MENU</Text>
          <Text style={{
  display: "inline-block",
  color: "#000000",
  fontSize: "12px",
  fontWeight: "bold",
  textDecoration: "none",
  textTransform: "uppercase",
  padding: "0 10px",
}}>HELP</Text>
          <Text style={{
  display: "inline-block",
  color: "#000000",
  fontSize: "12px",
  fontWeight: "bold",
  textDecoration: "none",
  textTransform: "uppercase",
  padding: "0 10px",
}}>ABOUT US</Text>
        </Section>
        
        <Section style={heroSection}>
          <Heading style={heroHeading}>OUR BAD</Heading>
          <Text style={heroText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat.
          </Text>
          <Text style={heroText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam,
          </Text>
          <Heading style={discountHeading}>15% OFF</Heading>
          <Text style={discountText}>
            On All Products From
          </Text>
          <Text style={dateText}>
            Monday, February 22<sup>th</sup>
          </Text>
          <Link href="https://example.com" style={ctaButton}>
            CLICK HERE
          </Link>
        </Section>
        
        <Section style={recommendationSection}>
          <Heading style={recommendationHeading}>We Thought You Also Might Like</Heading>
          <Row>
            <Column style={productColumn}>
           <div>
           <Img
                src={`https://cdn.templates.unlayer.com/assets/1643696379637-643445`}
                width="180"
                height="180"
                alt="Product 1"
                className="object-contain !mb-0"
              />
              <p className="text-xs text-center !mt-0">Lorem, ipsum.</p>
           </div>
            </Column>
            <Column style={productColumn}>
            <div>
            <Img
                src={`https://cdn.templates.unlayer.com/assets/1643696365572-525835`}
                width="180"
                height="180"
                alt="Product 2"
                className="object-contain !mb-0"

              />
              <p className="text-xs text-center !mt-0">Lorem, ipsum.</p>
              </div>
             
            </Column>
            <Column style={productColumn}>
            <div>
            <Img
                src={`https://cdn.templates.unlayer.com/assets/1643696358221-971981`}
                width="180"
                height="180"
                alt="Product 3"
                className="object-contain !mb-0"
              />
              <p className="text-xs text-center !mt-0">Lorem, ipsum.</p>
              </div>
             
            </Column>
          </Row>
        </Section>
         {/* Footer */}
         <div className="w-full bg-[#f8f8f8] text-white text-center pt-6">
                <div className="mx-auto">
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png" alt="LinkedIn" className="w-8 h-8" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png" alt="Twitter" className="w-8 h-8 ml-2" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png" alt="Skype" className="w-8 h-8 ml-2" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png" alt="Instagram" className="w-8 h-8 ml-2" /></a>
                </div>
  
                <div className="mb-4">
                  <p className="text-[11px] text-gray-500 mb-1 mx-10">
                  This message was sent to hello@app.com
                 If you would like to update your email address, please click here.
                 If you no longer wish to receive e-mails from App, click to UNSUBSCRIBE.
                  </p>
                  <p className="text-[11px] text-gray-500 mb-1 mx-10">If you receive a suspicious email, please report it by forwarding the email
                  to spoof@app.com.Visit Security to find out more.</p>
                </div>
                <div className="w-full bg-[#f8f8f8] py-2">
                  <p className="text-[11px] text-gray-500 font-normal text-center">
                    © 20XX Company. All Rights Reserved.
                  </p>
                </div>
              </div>
      </Container>
    </Body>
    </Tailwind>
  </Html>
);

export default PromotionalEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "660px",
};

const logoContainer = {
  marginBottom: "20px",
};

const menuContainer = {
  textAlign: "center" as const,
  marginBottom: "20px",
};

const menuItem = {
  display: "inline-block",
  color: "#000000",
  fontSize: "12px",
  fontWeight: "bold",
  textDecoration: "none",
  textTransform: "uppercase",
  padding: "0 10px",
};

const heroSection = {
  backgroundColor: "#0066cc",
  color: "#ffffff",
  padding: "40px 20px",
  textAlign: "center" as const,
};

const heroHeading = {
  fontSize: "38px",
  fontWeight: "bold",
  margin: "0 0 20px",
};

const heroText = {
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 20px",
};

const discountHeading = {
  fontSize: "60px",
  fontWeight: "bold",
  margin: "40px 0 0",
  color: "#ffff00",
};

const discountText = {
  fontSize: "24px",
  margin: "0",
};

const dateText = {
  fontSize: "24px",
  margin: "0 0 30px",
};

const ctaButton = {
  backgroundColor: "#ffff00",
  color: "#000000",
  fontSize: "14px",
  fontWeight: "bold",
  textDecoration: "none",
  padding: "13px 40px",
  borderRadius: "2px",
  display: "inline-block",
};

const recommendationSection = {
  padding: "40px 20px",
  backgroundColor: "#ffffff",
  textAlign: "center" as const,
};

const recommendationHeading = {
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 10px",
  color: "#000000",
};

const productColumn = {
  width: "180px",
  display: "inline-block",
  verticalAlign: "top",
  marginRight: "4px",
};