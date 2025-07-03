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

export const Y3CampaignEmail = () => (
  <Html>
    <Head />
    <Preview>Undeniably Y-3: Fall/Winter 2024 Campaign</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          <Section style={topLine}>
            <Row>
              <Column>
                <Text className="tracking-wider" style={topLineText}>
                  2 Unique individuals - 1 iconic city
                </Text>
              </Column>
              <Column align="right">
                <Link href="#" style={topLineText}>
                  View this email online
                </Link>
              </Column>
            </Row>
          </Section>

          <Section style={logoSection}>
            <Img
              src={`https://utfs.io/f/96e5f1bb-92de-4c11-9dec-31913e58464d-3r2fxk.png`}
              width="50"
              height="50"
              alt="Adidas Logo"
              className="object-contain mx-auto"
            />
          </Section>

          <Section style={statusBar}>
            <Row>
              <Column>
                <Text style={statusText}>LEVEL 2</Text>
              </Column>
              <Column>
                <Text style={statusText}>1551 Points to spend</Text>
              </Column>
              <Column align="right">
                <Text style={statusText}>JOHN DOE</Text>
              </Column>
            </Row>
          </Section>

          <Section>
            <Img
              src={`https://utfs.io/f/43968707-1822-475f-a858-07d63832fdac-asn4k1.jpg`}
              width="600"
              height="600"
              alt="Y-3 Campaign Image"
              style={mainImage}
              className="object-cover"
            />
          </Section>

          <Section>
            <Heading style={mainHeading}>UNDENIABLY Y-3</Heading>
            <Text style={campaignText}>
              Unveiling the incomparable A$AP Nast and the uncompromising
              Gabbriette as the faces of Y-3's Fall/Winter 2024 Campaign.
            </Text>
            <Text style={campaignText}>
              Shot by legendary photographer: Max Vadukul on the streets of New
              York City.
            </Text>
          </Section>

          <Section style={ctaSection}>
            <Link href="#" style={ctaButton}>
              EXPLORE THE COLLECTION
            </Link>
          </Section>

          <Section>
            <Img
              src={`https://utfs.io/f/60dd0609-f84c-408f-8eda-a30011c04a5b-42wl4b.jpg`}
              width="600"
              height="400"
              alt="Y-3 Campaign Image 2"
              style={secondaryImage}
              className="object-cover"
            />
          </Section>
          <Section>
            <Heading
              style={{
                fontSize: "36px",
                fontWeight: "400",
                textAlign: "start" as const,
                margin: "30px 0",
              }}
            >
              FASHION IS MUSIC, MUSIC IS FASHION
            </Heading>
            <Text
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                marginBottom: "20px",
                textAlign: "start" as const,
              }}
            >
              Y-3's latest collection is a bold exploration of daring contrasts
              and evocative juxtapositions.
            </Text>
            <Section style={ctaSection}>
              <Link href="#" style={ctaButton}>
                SHOP MEN
              </Link>
            </Section>
          </Section>
          <Section>
            <Img
              src={`https://utfs.io/f/cccdb62c-1bca-4c91-9666-a7cc2461030f-42wl4c.jpg`}
              width="600"
              height="400"
              alt="Y-3 Campaign Image 3"
              style={secondaryImage}
              className="object-cover"
            />
          </Section>

          <Section>
            <Heading style={loveLetterHeading}>
              A LOVE LETTER TO NEW YORK
            </Heading>
            <Text style={loveLetterText}>
              Playing with themes of uniformity, scale, and movement,
              highlighted through adidas' iconic three stripes, Y-3's latest
              collection is a defiant expression of the brand's DNA.
            </Text>
          </Section>

          <Section style={ctaSection}>
            <Link href="#" style={ctaButton}>
              SHOP MEN
            </Link>
          </Section>

          <Hr style={divider} />

          <Section>
            <Text className="tracking-widest" style={footerText}>
              STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default Y3CampaignEmail;

const main = {
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  backgroundColor: "#f8fafc",
};

const container = {
  margin: "0 auto",
  padding: "10px",
  width: "600px",
  backgroundColor: "#ffffff",
};

const topLine = {
  borderTop: "1px solid #000000",
  paddingTop: "10px",
};

const topLineText = {
  fontSize: "12px",
  color: "#000000",
  textDecoration: "none",
};

const logoSection = {
  padding: "20px 0",
  textAlign: "center" as const,
};

const statusBar = {
  backgroundColor: "#f0f0f0",
  padding: "10px",
  marginBottom: "20px",
};

const statusText = {
  margin: "0",
  fontSize: "14px",
  color: "#000000",
};

const mainImage = {
  width: "100%",
  height: "auto",
};

const mainHeading = {
  fontSize: "36px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "30px 0",
};

const campaignText = {
  fontSize: "16px",
  lineHeight: "24px",
  marginBottom: "20px",
  textAlign: "center" as const,
};

const ctaSection = {
  textAlign: "center" as const,
  margin: "40px 0",
};

const ctaButton = {
  backgroundColor: "#000000",
  color: "#ffffff",
  padding: "15px 30px",
  textDecoration: "none",
  fontWeight: "bold",
};

const secondaryImage = {
  width: "100%",
  height: "auto",
};

const loveLetterHeading = {
  fontSize: "28px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "30px 0",
};

const loveLetterText = {
  fontSize: "16px",
  lineHeight: "24px",
  marginBottom: "20px",
  textAlign: "center" as const,
  maxWidth: "500px",
  margin: "0 auto",
};

const divider = {
  borderTop: "1px solid #000000",
  margin: "40px 0",
};

const footerText = {
  fontSize: "12px",
  color: "#000000",
  textAlign: "center" as const,
  margin: "20px 0",
};
