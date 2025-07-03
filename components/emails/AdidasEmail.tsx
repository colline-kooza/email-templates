import * as React from "react";
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

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const AdidasEmail = () => (
  <Html>
    <Head />
    <Preview>Refresh your sneaker rotation with Samba and more.</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Img
              src={`https://utfs.io/f/96e5f1bb-92de-4c11-9dec-31913e58464d-3r2fxk.png`}
              width={60}
              height={33}
              alt="Adidas Logo"
              className="object-contain mx-auto text-center"
            />
          </Section>
          
          <Img
            src={`https://utfs.io/f/e22f4445-aae5-40e9-bc15-58c43b47539c-ctxjej.jpg`}
            width={600}
            height={400}
            alt="Adidas Samba Sneakers"
            style={mainImage}
            className="object-cover"

          />
          
          <Heading style={heading}>CLASSROOM CLASSICS</Heading>
          
          <Text style={paragraph}>
            Back to school means it's Samba season—and you can't go wrong with classic sneakers
            from the 3-Stripes. Or, step up your game with the timeless styles of Gazelle, Spezial, and
            more iconic staples for your day one fit. The trending looks you'll love for back to school
            are <Link href="https://example.com" style={link}>available in-store today.*</Link>
          </Text>
        
           <div className="mx-auto text-center  ">
           <Link
                  href="#contact"
                  style={{
                    backgroundColor: "black",
                    color: "#ffffff",
                    fontSize: "16px",
                    textDecoration: "none",
                    padding: "14px 30px",
                    borderRadius: "5px",
                    display: "inline-block",
                    // margin: "0 0 20px",
                    marginRight:"10px",
                    fontWeight:"bold"
                  }}
                  className="mx-auto mr-4"
                >
                SHOP MEN
                </Link>
           <Link
                  href="#contact"
                  style={{
                    backgroundColor: "black",
                    color: "#ffffff",
                    fontSize: "16px",
                    textDecoration: "none",
                    padding: "14px 30px",
                    borderRadius: "5px",
                    display: "inline-block",
                    margin: "0 0 20px",
                    fontWeight:"bold"
                  }}
                  className="mx-auto ml-2"
                >
                SHOP WOMEN
                </Link>
         
          </div>
   

          <Section style={productGrid}>
            <Row>
              <Column style={productColumn}>
                <Img
                  src={`https://utfs.io/f/7046af4f-31e2-44c5-9d40-95737b66e836-w2u8m9.png`}
                  width={300}
                  height={300}
                  alt="Sambae Shoes"
                  className="object-cover"

                  style={productImage}
                />
                <Text style={productRating}>4.6 ★★★★☆</Text>
                <Text style={productName}>SAMBAE SHOES</Text>
                <Link href="https://example.com" style={shopNowButton}>
                  SHOP NOW
                </Link>
              </Column>
              <Column style={productColumn}>
                <Img
                  src={`https://utfs.io/f/e7b36868-d128-429f-b5c8-078abda58901-qugw1p.jpg`}
                  width={300}
                  height={300}
                  alt="Handball Spezial Shoes"
                  className="object-cover"
                  style={productImage}
                />
                <Text style={productRating}>4.6 ★★★★☆</Text>
                <Text style={productName}>HANDBALL SPEZIAL SHOES</Text>
                <Link href="https://example.com" style={shopNowButton}>
                  SHOP NOW
                </Link>
              </Column>
            </Row>
            <Row>
              <Column style={productColumn}>
                <Img
                  src={`https://utfs.io/f/75071562-2554-4cde-86a9-a443e07cc618-w0n6cg.jpg`}
                  width={300}
                  height={300}
                  alt="Sambae Shoes"
                  style={productImage}
                  className="object-cover"

                />
                <Text style={productRating}>4.6 ★★★★☆</Text>
                <Text style={productName}>SAMBAE SHOES</Text>
                <Link href="https://example.com" style={shopNowButton}>
                  SHOP NOW
                </Link>
              </Column>
              <Column style={productColumn}>
                <Img
                  src={`https://utfs.io/f/a64168b2-cd20-4e18-a165-3f3375ff4d89-w2xvhf.jpg`}
                  width={300}
                  height={300}
                  alt="Gazelle Shoes"
                  style={productImage}
                  className="object-cover"

                />
                <Text style={productRating}>4.4 ★★★★☆</Text>
                <Text style={productName}>GAZELLE SHOES</Text>
                <Link href="https://example.com" style={shopNowButton}>
                  SHOP NOW
                </Link>
              </Column>
            </Row>
          </Section>

          <Section style={storySection}>
            <Text style={storyText}>STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949</Text>
          </Section>

          <Section style={footerLinks}>
            <Link href="https://example.com" style={footerLink}>My Account</Link>
            <Link href="https://example.com" style={footerLink}>Privacy Statement</Link>
            <Link href="https://example.com" style={footerLink}>Support</Link>
          </Section>

          <Text style={footerText}>
            *Selection and availability may vary by store.
          </Text>

          <Text style={footerText}>
            © 2024 adidas America, Inc. adidas and the 3-Stripes mark are registered trademarks of adidas
            America 5055 N. Greeley Avenue Portland, OR 97217
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default AdidasEmail;

const main = {
  backgroundColor: "#f8fafc",
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "0px 20px",
  width: "600px",
  backgroundColor: "#ffffff ",

};

const topLinks = {
  display: "flex",
  fontSize: "12px",
  color: "#666",
};

const logoContainer = {
  marginTop: "32px",
  marginBottom: "32px",
};

const userInfoSection = {
  marginBottom: "32px",
};

const levelText = {
  fontSize: "14px",
  fontWeight: "bold",
  margin: "0",
};

const pointsText = {
  fontSize: "14px",
  margin: "0",
};

const inlineIcon = {
  verticalAlign: "middle",
  marginRight: "4px",
};

const userNameText = {
  fontSize: "14px",
  fontWeight: "bold",
  margin: "0 0 4px 0",
};

const mainImage = {
  width: "100%",
  height: "auto",
};

const heading = {
  fontSize: "30px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "40px 0 20px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 40px",
};

const link = {
  color: "#000",
  textDecoration: "underline",
};

const buttonContainer = {
  marginBottom: "10px",
};

const button = {
  backgroundColor: "#000",
  color: "#fff",
  padding: "12px 24px",
  textDecoration: "none",
  fontWeight: "bold",
  textAlign: "center" as const,
  display: "inline-block",
  width: "30%",
};

const productGrid = {
  marginBottom: "40px",
};

const productColumn = {
  width: "50%",
  padding: "10px",
};

const productImage = {
  width: "100%",
  height: "auto",
};

const productRating = {
  fontSize: "14px",
  color: "#666",
  margin: "0px 0",
};

const productName = {
  fontSize: "16px",
  fontWeight: "bold",
  margin: "0px 0",
};

const shopNowButton = {
  backgroundColor: "#000",
  color: "#fff",
  padding: "8px 16px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "12px",
  display: "inline-block",
};

const storySection = {
  backgroundColor: "#f4f4f4",
  padding: "20px",
  marginBottom: "40px",
};

const storyText = {
  fontSize: "18px",
  fontWeight: "bold",
  textAlign: "center" as const,
};

const footerLinks = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "20px",
};

const footerLink = {
  color: "#000",
  textDecoration: "none",
  margin: "0 10px",
  fontSize: "14px",
};

const footerText = {
  fontSize: "12px",
  color: "#666",
  textAlign: "center" as const,
  margin: "10px 0",
};