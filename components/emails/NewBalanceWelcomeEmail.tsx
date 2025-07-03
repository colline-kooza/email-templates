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
  import * as React from "react";
  
 
  
  export const NewBalanceWelcomeEmail = () => (
    <Html>
      <Head />
      <Preview>Style & performance straight to your inbox</Preview>
      <Tailwind>
      <Body style={main}>
        <Container style={container}>
          <Section style={topSection}>
            <Row>
              <Column>
                <Img
                  src={`https://utfs.io/f/54b50378-3734-418f-82cd-0fca6385d9f8-ndg9vb.png`}
                  width="150"
                  height="30"
                  alt="New Balance"
                   className="object-contain"
                />
              </Column>
              <Column align="right">
                <Link href="https://www.newbalance.com/stores" style={storeLink}>
                  Find store
                </Link>
              </Column>
            </Row>
          </Section>
          <Section>
            <Img
              src={`https://utfs.io/f/d434f2a8-bdc1-49ee-89f8-6be65ea7009f-ndfx7t.jpg`}
              width="600"
              height="400"
              alt="New Balance Apparel"
              style={heroImage}
              className="object-cover"
            />
          </Section>
          <Section>
            <Heading style={heading}>Welcome to New Balance</Heading>
            <Hr style={divider} />
            <Text style={paragraph}>
              Keep checking your inbox for the latest offers and drops.
            </Text>
            <Link href="https://www.newbalance.com" style={button}>
              Explore
            </Link>
          </Section>
          <Section>
            <Img
              src={`https://utfs.io/f/74525bb3-6d25-4ab2-b0c5-33f553dd8c1f-g2gc1w.png`}
              width="600"
              height="300"
              alt="New Balance Store"
              style={storeImage}
              className="object-cover"

            />
          </Section>
          
          {/* New sections start here */}
          <Section>
            <Heading as="h2" style={subheading}>Thanks for shopping with us</Heading>
            <Hr style={divider} />
            <Text style={paragraph}>
              We value your feedback, and would love to hear about your recent visit to our store in this brief survey.
            </Text>
            <Link href="https://www.newbalance.com/survey" style={surveyButton}>
              Take survey
            </Link>
          </Section>
          
          <Section style={blackBar}>
            <Row>
              <Column>
                <Link href="https://www.newbalance.com/login" style={whiteLink}>
                  Log in or create an account
                </Link>
              </Column>
              <Column align="right">
                <Link href="https://www.newbalance.com/stores" style={whiteLink}>
                  Find store
                </Link>
              </Column>
            </Row>
          </Section>
          
          <Section style={storeInfo}>
            <Text style={storeInfoTitle}>Your Local store:</Text>
            <Text style={storeInfoText}>
              New Balance Factory Store Sunrise<br />
              2610 Sawgrass Mills Cir<br />
              Sunrise, FL 33323
            </Text>
          </Section>
          
          <Section>
            <Text style={paragraph}>
              Got this from a friend?<br />
              <Link href="https://www.newbalance.com/signup" style={textLink}>
                Sign up for New Balance emails
              </Link>
            </Text>
          </Section>
          
          <Section style={footer}>
            <Text style={footerText}>
              <Link href="#" style={footerLink}>View in browser</Link> • 
              <Link href="#" style={footerLink}>Unsubscribe</Link> • 
              <Link href="#" style={footerLink}>Privacy Policy</Link> • 
              <Link href="#" style={footerLink}>Terms & Conditions</Link> • 
              <Link href="#" style={footerLink}>Help</Link> • 
              <Link href="#" style={footerLink}>Gift cards</Link>
            </Text>
            <Text style={footerText}>
              © 2024, New Balance 100 Guest St. Boston, MA 02135
            </Text>
            <Text style={footerText}>
              Product availability may vary in stores. This e-mail is sent from an account we use for sending messages only. So if you need to contact us, don't reply to this e-mail – we won't get your response. Instead, use this web form/FAQ page.
            </Text>
          </Section>
        </Container>
      </Body>
      </Tailwind>
    </Html>
  );
  
  export default NewBalanceWelcomeEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "7px 10px",
    width: "600px",
    backgroundColor:"#f8fafc"
  };
  
  const topSection = {
    padding: "20px 0",
  };
  
  const storeLink = {
    color: "#000000",
    fontSize: "14px",
    textDecoration: "none",
  };
  
  const heroImage = {
    borderRadius: "4px",
    marginBottom: "24px",
  };
  
  const heading = {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    textAlign: "center" as const,
    color: "#484848",
  };
  
  const subheading = {
    fontSize: "24px",
    lineHeight: "1.3",
    fontWeight: "700",
    textAlign: "center" as const,
    color: "#484848",
  };
  
  const divider = {
    borderTop: "4px solid #CF0A2C",
    width: "80px",
    margin: "20px auto",
  };
  
  const paragraph = {
    fontSize: "18px",
    lineHeight: "1.4",
    color: "#484848",
    textAlign: "center" as const,
  };
  
  const button = {
    backgroundColor: "#CF0A2C",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    width: "200px",
    padding: "14px 7px",
    margin: "24px auto",
  };
  
  const surveyButton = {
    ...button,
    backgroundColor: "#CF0A2C",
  };
  
  const storeImage = {
    borderRadius: "4px",
    marginTop: "24px",
  };
  
  const blackBar = {
    backgroundColor: "#000000",
    padding: "10px 20px",
    margin: "30px 0",
  };
  
  const whiteLink = {
    color: "#ffffff",
    fontSize: "14px",
    textDecoration: "none",
  };
  
  const storeInfo = {
    backgroundColor: "#f4f4f4",
    padding: "20px",
    margin: "20px 0",
  };
  
  const storeInfoTitle = {
    fontWeight: "bold",
    marginBottom: "10px",
  };
  
  const storeInfoText = {
    fontSize: "14px",
    lineHeight: "1.5",
  };
  
  const textLink = {
    color: "#CF0A2C",
    textDecoration: "underline",
  };
  
  const footer = {
    borderTop: "1px solid #e5e5e5",
    marginTop: "20px",
    paddingTop: "20px",
  };
  
  const footerText = {
    fontSize: "12px",
    color: "#666666",
    lineHeight: "1.5",
    margin: "10px 0",
  };
  
  const footerLink = {
    color: "#666666",
    textDecoration: "underline",
  };