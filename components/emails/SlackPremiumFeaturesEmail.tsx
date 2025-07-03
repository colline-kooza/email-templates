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

export const SlackPremiumFeaturesEmail = () => (
  <Html>
    <Head />
    <Preview>Have you tried these premium features yet?</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Img
              src={`https://utfs.io/f/966116a8-b0a8-495b-aeeb-a241ce9d091a-c2pcmw.png`}
              width="100"
              height="30"
              alt="Slack"
              style={logoStyle}
            />
          </Section>
          <Section>
            <Heading style={h1}>
              Have you tried these premium features yet?
            </Heading>
            <Text style={text}>
              You are halfway through your 90-day free trial. We're here to help
              you get the most out of what Slack's premium plans have to offer:
            </Text>
          </Section>
          <Section>
            <Heading style={h2}>
              Securely access Slack wherever you are:
            </Heading>
            <Text style={text}>
              All members of your workspace can sign in and sync their profiles
              seamlessly.
            </Text>
            <Link
              href="https://slack.com/help/articles/360017938993-What-is-SAML-based-single-sign-on-SSO-"
              style={link}
            >
              Set up SAML-based single sign-on (SSO)
            </Link>
            <Img
              src={`https://utfs.io/f/0e68d84a-f2c8-47d1-bd12-8ca27c7feb41-28boyr.jpg`}
              width="500"
              height="300"
              className="object-cover"
              alt="Secure access illustration"
              style={featureImage}
            />
          </Section>
          <Hr style={hr} />
          <Section>
            <Heading style={h2}>
              A better way to work with external partners:
            </Heading>
            <Text style={text}>
              Collaborate with outside organizations as smoothly as you do with
              your own.
            </Text>
            <Link
              href="https://slack.com/help/articles/115004151203-Slack-Connect-guide"
              style={link}
            >
              Learn about Slack Connect
            </Link>
            <Img
              src={`https://utfs.io/f/32bfe5aa-b40b-4a1d-9d4a-394ab98f099d-4es66f.png`}
              width="500"
              height="400"
              alt="Slack Connect illustration"
              style={featureImage}
            />
          </Section>
          <Hr style={hr} />
          <Section>
            <Heading style={h2}>Get more out of your existing tools:</Heading>
            <Text style={text}>
              Unlimited integrations mean you spend less time switching between
              apps and more time actually using them.
            </Text>
            <Link
              href="https://slack.com/help/articles/360001933868-A-guide-to-Slack-apps-and-integrations"
              style={link}
            >
              Connect your tools
            </Link>
            <Img
              src={`https://utfs.io/f/378b3c08-e6b3-4007-a92e-190ddbdea3f5-jmclpy.jpg`}
              width="500"
              height="400"
              alt="Tools integration illustration"
              style={featureImage}
            />
          </Section>
          <Hr style={hr} />
          <Section>
            <Row>
              <Column align="center">
                <Img
                  src={`https://utfs.io/f/966116a8-b0a8-495b-aeeb-a241ce9d091a-c2pcmw.png`}
                  width="80"
                  height="80"
                  alt="Slack"
                  style={footerLogo}
                  className="object-contain"
                />
              </Column>
            </Row>
            <Row>
              <Column align="left">
                <Link href="https://www.docusign.com" style={button}>
                  Go to Slack
                </Link>
              </Column>
            </Row>
            <Text style={text}>
              Ready to switch to the premium version of Slack?{" "}
              <Link href="https://slack.com/upgrade" style={link}>
                Upgrade your workspace now
              </Link>
              .
            </Text>
            <Text style={text}>
              TLDR Newsletter will switch back to the free version of Slack
              after October 19th.
            </Text>
            <Text style={text}>
              Feel free to{" "}
              <Link href="https://slack.com/help/contact" style={link}>
                contact our support team
              </Link>
              , or visit the{" "}
              <Link href="https://slack.com/help" style={link}>
                Slack Help Center
              </Link>{" "}
              if you have questions.
            </Text>
          </Section>
          <Hr style={hr} />
          <Section>
            <Row>
              <Column>
                <Text style={footerText}>TLDR Newsletter</Text>
                <Text style={footerText}>
                  Workspace URL: tldrnewsletter.slack.com
                </Text>
              </Column>
              <Column align="right">
                <Link style={footerButton} href="https://slack.com/signin">
                  Sign in
                </Link>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default SlackPremiumFeaturesEmail;

const main = {
  backgroundColor: " #f8fafc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "10px",
  width: "580px",
  backgroundColor: "#ffffff ",
};

const logoContainer = {
  marginBottom: "24px",
};

const logoStyle = {
  margin: "0 auto",
};

const h1 = {
  color: "#1d1c1d",
  fontSize: "34px",
  fontWeight: "700",
  margin: "0px 0",
  padding: "0",
  lineHeight: "42px",
};

const h2 = {
  color: "#1d1c1d",
  fontSize: "20px",
  fontWeight: "700",
  margin: "30px 0 10px 0",
  padding: "0",
};

const text = {
  color: "#1d1c1d",
  fontSize: "18px",
  lineHeight: "24px",
};

const link = {
  color: "#1264a3",
  textDecoration: "none",
  fontSize: "18px",
};

const hr = {
  borderColor: "#e5e5e5",
  margin: "20px 0",
};

const featureImage = {
  marginTop: "24px",
  // width: "100%",
  height: "auto",
  objectFit: "cover" as const,
};

const footerLogo = {
  margin: "0 auto",
  marginBottom: "20px",
  borderRadius: "50%",
};

const button = {
  backgroundColor: "#007a5a",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px 0",
  width: "220px",
  margin: "20px auto 0",
};

const footerText = {
  fontSize: "12px",
  color: "#616061",
  lineHeight: "18px",
  margin: "0",
};

const footerButton = {
  display: "inline-block",
  backgroundColor: "#ffffff",
  borderRadius: "4px",
  border: "1px solid #616061",
  color: "#616061",
  fontSize: "13px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  padding: "8px 16px",
};
