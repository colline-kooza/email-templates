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

export const AirbnbReviewEmail = () => (
  <Html>
    <Head />
    <Preview>Rate your stay at John Doe's place</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Img
              src={`https://utfs.io/f/ea611515-bd8f-44de-a1b2-765e6b830ed8-dl2lfm.png`}
              width="96"
              height="30"
              alt="Airbnb"
              className="object-contain"
            />
          </Section>
          <Section>
            <Img
              src={`https://a0.muscache.com/im/pictures/miso/Hosting-1110442652475031330/original/b6d87652-2a44-423c-8396-c81e6df23628.jpeg?im_w=720`}
              width="620"
              height="300"
              alt="Beach scene"
              style={heroImage}
              className="object-cover"
            />
          </Section>
          <Section>
            <Heading style={h1}>
              How was your stay at the John Doe accommodation?
            </Heading>
          </Section>
          <Section>
            <Row className="text-center mx-auto">
              {["Lousy", "Bad", "Ok", "Good", "Brilliant"].map(
                (rating, index) => (
                  <Column key={index}>
                    <Img
                      src={`https://utfs.io/f/f88af4b0-8ecf-487e-81a2-ff378ec65938-pms2w2.png`}
                      width="36"
                      height="36"
                      alt={rating}
                      className="object-cover text-center mx-auto"
                    />
                    <Text className="text-center " style={ratingText}>
                      {rating}
                    </Text>
                  </Column>
                )
              )}
            </Row>
          </Section>
          <Section style={evaluationSection}>
            <Heading style={h2}>Why evaluations are important</Heading>
            <Text style={paragraph}>
              To travel with complete peace of mind, guests need honest reviews
              of their hosts.
            </Text>
            <Text style={paragraph}>
              Think about your experience with the host, their accommodation and
              everything they did to make you feel at home. What do you think
              other guests should know?
            </Text>
            <Text style={paragraph}>
              Honest comments build trust. Therefore, both you and the host can
              leave a review about the stay, which will not be published until
              14 days have passed or until both parties write theirs.
            </Text>
          </Section>
          <Hr style={hr} />
          <Section>
            <Text style={footer}>
              Airbnb, Inc., 888 Brannan St, San Francisco, CA 94103
            </Text>
            <Text style={footer}>
              <Link href="https://www.airbnb.com/help" style={link}>
                Help Center
              </Link>{" "}
              ·{" "}
              <Link href="https://www.airbnb.com/terms" style={link}>
                Terms
              </Link>{" "}
              ·{" "}
              <Link href="https://www.airbnb.com/privacy" style={link}>
                Privacy Policy
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default AirbnbReviewEmail;

const main = {
  backgroundColor: "#f8fafc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "620px",
  backgroundColor: "#ffffff ",
};

const logoContainer = {
  marginBottom: "24px",
};

const heroImage = {
  borderRadius: "16px",
};

const h1 = {
  color: "#484848",
  fontSize: "30px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "30px 0",
};

const h2 = {
  color: "#484848",
  fontSize: "22px",
  fontWeight: "bold",
  margin: "0 0 15px",
};

const ratingText = {
  fontSize: "12px",
  color: "#6B6B6B",
  margin: "8px 0 0",
};

const evaluationSection = {
  backgroundColor: "#F9F9F9",
  borderRadius: "8px",
  padding: "24px",
  marginTop: "24px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "#484848",
  marginBottom: "16px",
};

const hr = {
  borderColor: "#E5E5E5",
  margin: "24px 0",
};

const footer = {
  color: "#6B6B6B",
  fontSize: "12px",
  lineHeight: "16px",
  textAlign: "center" as const,
  marginBottom: "8px",
};

const link = {
  color: "#6B6B6B",
  textDecoration: "underline",
};
