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
  Tailwind,
} from "@react-email/components";

export const ResearchEmail = () => (
  <Html>
    <Head />
    <Preview>Research</Preview>
    <Tailwind>
    <Body style={main}>
      <Container style={container}>
        <Section className="mb-3">
          <Img
            src={`https://cdn.templates.unlayer.com/assets/1631865590593-yourlogo%20(1).png`}
            alt="Your Logo"
            className="object-contain mx-auto w-1/5 h-1/5"
          />
        </Section>
        <Section >
          <Img
            src={`https://cdn.templates.unlayer.com/assets/1631866082922-fhgh.png`}
            width={600}
            height={300}
            alt="Researchers in laboratory"
            style={heroImage}
          />
        </Section>
        <Section style={contentContainer}>
          <Heading as="h2" style={heading}>Dear Chari</Heading>
          <Text style={paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Text>
          <Text style={paragraph}>
            Egestas integer eget aliquet nibh praesent tristique magna. Ullamcorper sit amet risus
            nullam eget felis. Ultrices sagittis orci a scelerisque purus semper eget duis at.
          </Text>
          <Text style={paragraph}>
            Thank you for your support,
            <br />
            The Cancer Research Team, USA
          </Text>
          <Section style={buttonContainer}>
            <Link style={button} href="https://example.com">
              Support Cancer Research
            </Link>
          </Section>
        </Section>
        <Section style={footerContainer}>
          <Row>
            <Column style={footerColumn}>
              <Img
                src={`https://cdn.templates.unlayer.com/assets/1631867434950-21.png`}
                width={250}
                height={150}
                alt="Stand With Against Cancer"
                style={footerImage}
                className="object-cover"
              />
              <Heading as="h3" style={footerHeading}>Stand With Against Cancer</Heading>
              <Text style={footerText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Text>
            </Column>
            <Column style={footerColumn}>
              <Img
                src={`https://cdn.templates.unlayer.com/assets/1631867506406-12.png`}
                width={250}
                height={150}
                alt="Stand With Against Cancer"
                style={footerImage}
                className="object-cover"
              />
              <Heading as="h3" style={footerHeading}>Stand With Against Cancer</Heading>
              <Text style={footerText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Text>
            </Column>
          </Row>
        </Section>
        <div className="w-full bg-[#ffffff] py-3 text-black text-center !mt-5">
                <div className="mx-auto">
                  <img src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png" alt="Facebook" style={iconStyle} />
                  <img src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png" alt="Instagram" style={iconStyle} />
                  <img src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png" alt="Pinterest" style={iconStyle} />
                  <img src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png" alt="YouTube" style={iconStyle} />
                  <img src="https://cdn.tools.unlayer.com/social/icons/rounded-black/instagram.png" alt="YouTube" style={iconStyle} />
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

export default ResearchEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "10px 0 20px",
};

const iconStyle = {
    width: "28px",
    height: "28px",
    borderRadius: "0%",
    marginRight: "4px",
  };
const heroImage = {
  width: "100%",
  maxWidth: "600px",
  height: "auto",
};

const contentContainer = {
  padding: "20px",
  backgroundColor: "#7e22ce",
  color: "#ffffff",
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

const buttonContainer = {
  textAlign: "center" as const,
  marginTop: "30px",
  marginBottom: "30px",
};

const button = {
  backgroundColor: "#e11d48",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  padding: "12px 30px",
  borderRadius: "4px",
};

const footerContainer = {
  backgroundColor: "#7e22ce",
  padding: "20px",
};

const footerColumn = {
  width: "50%",
  padding: "0 10px",
};

const footerImage = {
  width: "100%",
  maxWidth: "250px",
  height: "auto",
  marginBottom: "10px",
  
};

const footerHeading = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#ffffff",
  marginBottom: "10px",
};

const footerText = {
  fontSize: "14px",
  lineHeight: "20px",
  color: "#ffffff",
};