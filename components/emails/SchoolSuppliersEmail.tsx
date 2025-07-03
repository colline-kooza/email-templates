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

  export const SchoolSuppliersEmail = () => (
    <Html>
      <Head />
      <Preview>Take $25 off a purchase of $150 or more at New Balance Factory Store</Preview>
  
      <Tailwind>
        <Body style={main}>
          <Container style={container}>
            <Section style={topBanner}>
              <Text className="tracking-wider" style={bannerText}>Take $25 off a purchase of $150 or more</Text>
            </Section>
            <Section style={headerSection}>
              <Row>
                <Column>
                  <Img
                    src={`https://utfs.io/f/54b50378-3734-418f-82cd-0fca6385d9f8-ndg9vb.png`}
                    width="200"
                    height="50"
                    alt="New Balance Factory Store"
                    className="object-contain"
                  />
                </Column>
                <Column align="right">
                  <Link href="#" style={findStoreLink}>
                    Find store
                  </Link>
                </Column>
              </Row>
            </Section>
            <Section>
              <Img
                src={`https://utfs.io/f/37c40d70-2089-496c-a409-7c0504d63905-oteagv.jpg`}
                width="600"
                height="400"
                alt="Girl wearing New Balance"
                style={mainImage}
                className="object-cover"
              />
            </Section>
            <Section>
              <Heading style={heading}>School supplies</Heading>
              <Text style={subheading}>Start the new year with new favorites</Text>
          <div className="mx-auto text-center">
          <Link
                  href="#contact"
                  style={{
                    backgroundColor: "#cf0c2c",
                    color: "#ffffff",
                    fontSize: "16px",
                    textDecoration: "none",
                    padding: "14px 30px",
                    borderRadius: "5px",
                    display: "inline-block",
                    margin: "0 0 20px",
                    fontWeight:"bold"
                  }}
                  className="mx-auto"
                >
                  Get in Touch
                </Link>
          </div>
                
            </Section>
            <Section style={footerBanner}>
              <Text style={footerText}>New Balance Factory Stores only</Text>
              <Heading style={footerHeading}>
                Take $25 off a purchase of $150 or more
              </Heading>
              <Link href="#" style={footerButton}>
                Find a store
              </Link>
              <Text style={footerDisclaimer}>
                Exclusions apply. Can't be applied to previous purchases of gift cards and cannot be redeemed for cash or used in combination with any other offer.
              </Text>
              <Text style={footerDisclaimer}>
                Coupon valid from 8/09/2024-9/02/2024
              </Text>
            </Section>
            <Section className="mx-auto text-center" style={barcodeSection}>
              <Img
                src={`https://utfs.io/f/31794cc4-3c8d-4e83-8c71-1e3d87eda243-kkzoqk.jpg`}
                width="300"
                height="100"
                alt="Barcode"
                style={barcodeImage}
                className="object-cover mx-auto text-center"
              />
            </Section>
            <Section className="mx-auto" style={localStoreSection}>
              <Text style={localStoreHeading}>Your Local store:</Text>
              <Text style={localStoreText}>
                New Balance Factory Store Sunrise<br />
                2610 Sawgrass Mills Cir<br />
                Sunrise, FL 33323
              </Text>
            </Section>
            <Hr style={divider} />
            <Section className="mx-auto" style={signUpSection}>
              <Text style={signUpText}>Got this from a friend?</Text>
              <Link href="#" style={signUpLink}>Sign up for New Balance emails</Link>
            </Section>
       
            <Text style={copyrightText}>
              © 2024, New Balance 100 Guest St. Boston, MA 02135
            </Text>
            <Text style={termsText}>
              Coupon valid from 8/9/2024-09/02/2024. Coupon must be scanned at time of purchase to receive discount on pre-tax total. Coupon cannot be combined with additional coupons, discounts, or promotions. No cash back. Limited one coupon per customer per transaction per day. Not valid on prior purchases. One time use only. No cash value. Not redeemable for gift card purchases. Reproductions or duplicates not accepted. Subject to product availability, no rain checks issued. Offer not valid at Showhegan and Avon locations. Not valid at New Balance Stores or on www.newbalance.com. Exclusions Apply for Made In USA Products. Collabs: 515, 550, 574, 608, 840, 847, 860, 880, 925, 990, 991, 993, 998, 1080, 1540, 2002 and WS315ACK. This e-mail is sent from an account we use for sending messages only. So if you need to contact us, don't reply to this e-mail – we won't get your response. Instead, use this web form/FAQ page.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
  
  export default SchoolSuppliersEmail;
  
  const main = {
    backgroundColor: " #f8fafc",
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "10px",
    width: "600px",
    backgroundColor: "#ffffff",
  };
  
  const topBanner = {
    backgroundColor: "#f0f0f0",
    padding: "10px",
    textAlign: "center" as const,
  };
  
  const bannerText = {
    margin: "0",
    fontSize: "14px",
    color: "#333333",
  };
  
  const headerSection = {
    padding: "20px 0",
  };
  
  const findStoreLink = {
    color: "#000000",
    fontSize: "14px",
    textDecoration: "none",
  };
  
  const mainImage = {
    width: "100%",
    maxWidth: "600px",
    height: "auto",
  };
  
  const heading = {
    fontSize: "34px",
    fontWeight: "bold",
    textAlign: "center" as const,
    margin: "30px 0 10px",
  };
  
  const subheading = {
    fontSize: "18px",
    textAlign: "center" as const,
    margin: "0 0 30px",
  };
  
//   const ctaButton = {
//     backgroundColor: "#cf0c2c",
//     color: "#ffffff",
//     fontSize: "16px",
//     textDecoration: "none",
//     padding: "12px 28px"
//     borderRadius: "5px",
//     display: "inline-block",
//     textAlign: "center" as const,
//     margin: "0 auto 30px",
//   };
  
  const footerBanner = {
    backgroundColor: "#cf0c2c",
    padding: "20px",
    textAlign: "center" as const,
  };
  
  const footerText = {
    color: "#ffffff",
    fontSize: "16px",
    margin: "0 0 10px",
  };
  
  const footerHeading = {
    color: "#ffffff",
    fontSize: "28px",
    fontWeight: "bold",
    margin: "0 0 20px",
  };
  
  const footerButton = {
    backgroundColor: "#ffffff",
    color: "#cc0000",
    fontSize: "16px",
    textDecoration: "none",
    padding: "10px 20px",
    borderRadius: "1px",
    display: "inline-block",
    margin: "0 0 20px",
  };
  
  const footerDisclaimer = {
    color: "#ffffff",
    fontSize: "12px",
    margin: "0 0 10px",
  };
  
  const barcodeSection = {
    textAlign: "center" as const,
    margin: "30px 0",
  };
  
  const barcodeImage = {
    margin: "0 auto",
  };
  
  const localStoreSection = {
    textAlign: "center" as const,
    margin: "30px 0 0",
  };
  
  const localStoreHeading = {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "0 0 10px",
  };
  
  const localStoreText = {
    fontSize: "16px",
    lineHeight: "1.5",
    margin: "0",
  };
  
  const divider = {
    borderTop: "1px solid #e5e5e5",
    margin: "20px 0",
  };
  
  const signUpSection = {
    textAlign: "center" as const,
    margin: "20px 0",
  };
  
  const signUpText = {
    fontSize: "14px",
    margin: "0 0 10px",
  };
  
  const signUpLink = {
    color: "#cc0000",
    fontSize: "14px",
    textDecoration: "underline",
  };
  
  const copyrightText = {
    fontSize: "12px",
    color: "#666666",
    textAlign: "center" as const,
    margin: "20px 0",
  };
  
  const termsText = {
    fontSize: "14px",
    color: "#666666",
    textAlign: "start" as const,
    margin: "20px 0",
    lineHeight: "1.4",
  };