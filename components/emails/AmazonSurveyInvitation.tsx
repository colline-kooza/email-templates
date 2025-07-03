import {
    Body,
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
  } from "@react-email/components";
  import * as React from "react";
  
  export const AmazonSurveyInvitation = () => (
    <Html>
      <Head />
      <Preview>Amazon User Experience Research Survey Invitation</Preview>
  
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Img
              src={`https://utfs.io/f/1e8d848c-1b67-4ca8-b4d8-1eeeed60d530-t3pdfe.jpg`}
              width="100"
              height="40"
              alt="Amazon Logo"
              className="object-contain"
            />
          </Section>
          <Section style={bannerContainer}>
            <Img
              src={`https://utfs.io/f/b5f3e4c6-1c18-4ef3-9ef9-b60f2d47fa1a-po3eg6.png`}
              width="600"
              height="100"
              alt="Amazon Smile"
            />
          </Section>
          <Section style={contentContainer}>
            <Heading as="h2" style={heading}>
              Dear John Doe,
            </Heading>
            <Text style={paragraph}>
              Greetings! We are the User Experience Research team at Amazon, and we would like to hear about your recent shopping experience at Amazon through a quick 5 minute survey. Your input is crucial in improving the shopping experience for millions of customers on Amazon. We promise that we will review each response carefully.
            </Text>
            <Text style={paragraph}>
              Rest assured that your feedback will be kept anonymous and confidential. Participating in this survey will not impact your relationship with Amazon. Please click the Start Survey button below to begin. Thank you for your time and contribution, and for being a valued customer at Amazon.
            </Text>
            <Text style={smallText}>
              Your participation in the survey is voluntary, and all your information will be subject to Amazon's Privacy Notice. If you have any concerns about the authenticity of this email or if you would like to learn more about Amazon's survey program, please visit the Amazon Customer Service help page.
            </Text>
            <Section style={buttonContainer}>
              <Link
                href="https://amazon.com/survey"
                style={button}
              >
                Start survey
              </Link>
            </Section>
          </Section>
          <Hr style={divider} />
          <Section style={footerContainer}>
            <Text style={footerText}>
              <Link href="https://amazon.com/preferences" style={footerLink}>Update your preferences</Link> | <Link href="https://amazon.com/unsubscribe" style={footerLink}>Unsubscribe</Link>
            </Text>
            <Text style={footerText}>
              ©2024 Amazon.com, Inc. or its affiliates. Amazon and all related marks are trademarks of Amazon.com, Inc. or its affiliates. Amazon.com 410 Terry Avenue N., Seattle, WA 98109. Product prices and availability are subject to change. Ref: 999820980.
            </Text>
            <Link href="https://amazon.com/privacy" style={footerLink}>
              Privacy Policy
            </Link>
            <Img
              src={`https://utfs.io/f/225079a9-6852-4af7-9fdb-797d94e0b86e-mhmz7m.jpg`}
              width="50"
              height="20"
              alt="Amazon Smile"
              style={footerLogo}
            />
          </Section>
        </Container>
      </Body>
    </Html>
  );
  
  export default AmazonSurveyInvitation;
  
  const main = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8fafc",
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "600px",
    backgroundColor: "#ffffff",

  };
  
  const logoContainer = {
    marginBottom: "20px",
  };
  
  const bannerContainer = {
    backgroundColor: "#FF9900",
    marginBottom: "24px",
  };
  
  const contentContainer = {
    padding: "0 24px",
  };
  
  const heading = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: "20px",
  };
  
  const smallText = {
    fontSize: "12px",
    lineHeight: "18px",
    color: "#555555",
    marginBottom: "20px",
  };
  
  const buttonContainer = {
    textAlign: "center" as const,
    marginTop: "32px",
    marginBottom: "32px",
  };
  
  const button = {
    backgroundColor: "#f26522",
    borderRadius: "8px",
    color: "#ffff",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    padding: "12px 24px",
  };
  
  const divider = {
    borderTop: "1px solid #eaeaea",
    margin: "32px 0",
  };
  
  const footerContainer = {
    padding: "0 24px",
  };
  
  const footerText = {
    fontSize: "12px",
    lineHeight: "18px",
    color: "#555555",
    marginBottom: "12px",
  };
  
  const footerLink = {
    color: "#0066c0",
    textDecoration: "none",
  };
  
  const footerLogo = {
    marginTop: "20px",
  };