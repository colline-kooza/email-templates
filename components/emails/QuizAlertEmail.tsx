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
  Font,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const QuizAlertEmail = () => (
  <Html>
     <Head>
        <Font
          fontFamily="DM Sans"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/dmsans/v15/rP2Fp2ywxg089UriCZa4ET-DNl0.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="initial"
        />
      </Head>
    <Preview>Attention All Knowledge Seekers Quiz Alert!</Preview>
    <Tailwind>
    <Body style={main}>
      <Container style={container}>
        <Section style={headerSection}>
          <Row>
            <Column className="bg-[#e9e9e9]">
              <Img
                src={`https://cdn.templates.unlayer.com/assets/1692944853247-Group%2063.png`}
                width="150"
                height="80"
                alt="Logo"
                className="object-contain"
              />
            </Column>
            <Column align="right">
              <Text style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#333333",
              }}>Attention All Knowledge Seekers 
              <br/>
              <span style={{
                fontSize: "15px",
                fontWeight: "bolder",
                color: "black",
              }}>Quiz Alert!</span>
              </Text>
            </Column>
          </Row>
        </Section>
        <Section style={imageSection}>
          <Img
            src={`https://cdn.templates.unlayer.com/assets/1692944802638-Group%2073.png`}
            width="100%"
            height="auto"
            alt="Green Megaphone"
          />
        </Section>

        <Section className="px-3">
          <Heading style={title}>Quiz Alert: Challenge your Mind</Heading>
          <Text style={text}>Hello, Michele</Text>
          <Text style={text}>
            My name is Collinz Dev and I am the Co-CEO of Collinz dev.
          </Text>

          <Text style={text}>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </Text>
          <Text style={text}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </Text>
          <Heading as="h2" style={subtitle}>Lorem Ipsum Sui On.</Heading>
          <Text style={dateText}>31 August 2023</Text>
          <Text style={text}>Starts from: Monday - 9 AM</Text>
          <Section style={buttonSection}>
            <Link href="https://example.com" style={button}>
              SIGN UP
            </Link>
          </Section>
        </Section>
        <Section style={footerSection}>
          <Text style={footerText}>Thanks for the support! 🤩</Text>
          <Text style={footerText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labored. Sed ut perspiciatis unde omnis iste natus error sit.
          </Text>
          <Hr style={hr} />
          {/* <Row>
            <Column >
              <Link href="https://facebook.com">
                <Img
                  src={`https://cdn.tools.unlayer.com/social/icons/circle-white/facebook.png`}
                  width="24"
                  height="24"
                  alt="Facebook"
                />
              </Link>
            </Column>
            <Column >
              <Link href="https://twitter.com">
                <Img
                  src={`https://cdn.tools.unlayer.com/social/icons/circle-white/twitter.png`}
                  width="24"
                  height="24"
                  alt="Twitter"
                />
              </Link>
            </Column>
            <Column >
              <Link href="https://linkedin.com">
                <Img
                  src={`https://cdn.tools.unlayer.com/social/icons/circle-white/linkedin.png`}
                  width="24"
                  height="24"
                  alt="LinkedIn"
                />
              </Link>
            </Column>
            <Column >
              <Link href="https://instagram.com">
                <Img
                  src={`https://cdn.tools.unlayer.com/social/icons/circle-white/instagram.png`}
                  width="24"
                  height="24"
                  alt="Instagram"
                />
              </Link>
            </Column>
          </Row> */}
           <div className="mx-auto text-center">
                <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/facebook.png" alt="LinkedIn" className="w-8 h-8" /></a>
                <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/pinterest.png" alt="Twitter" className="w-8 h-8 ml-2" /></a>
                <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/email.png" alt="Skype" className="w-8 h-8 ml-2" /></a>
                <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/youtube.png" alt="Instagram" className="w-8 h-8 ml-2" /></a>
              </div>
          <Text style={footerLinks}>
            <Link style={{
                color: "white",
              
            }} href="#">UNSUBSCRIBE</Link> | <Link style={{
              color: "white",
          }} href="#">PRIVACY POLICY</Link> | <Link style={{
            color: "white",
        }} href="#">WEB</Link>
          </Text>
          <Text style={footerCopyright}>
            Designed by <Link style={{
                color: "white",
            }} href="https://collinzdev.com">Collinz dev</Link>
          </Text>
        </Section>
      </Container>
    </Body>
    </Tailwind>
  </Html>
);

export default QuizAlertEmail;

const main = {
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  backgroundColor: "#e7e7e7",
};

const container = {
  margin: "0 auto",
  width: "600px",
  backgroundColor: "#ffffff",
};

const headerSection = {
  backgroundColor: "#9ff1b0",
  padding: "20px",
};


const imageSection = {
  backgroundColor: "#fce7f3",
};

const title = {
  fontSize: "20px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "30px 0",
};

const subtitle = {
  fontSize: "18px",
  fontWeight: "bold",
  margin: "30px 0 10px",
};

const text = {
  fontSize: "12px",
  lineHeight: "20px",
  margin: "0 0 10px",
};

const dateText = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#069123",
  margin: "20px 0 10px",
};

const buttonSection = {
  textAlign: "center" as const,
  margin: "30px 0",
};

const button = {
  backgroundColor: "#069123",
  borderRadius: "1px",
  color: "#ffffff",
  fontSize: "14px",
  textDecoration: "none",
  textAlign: "center" as const,
  padding: "12px 30px",
};

const footerSection = {
  backgroundColor: "#333333",
  color: "#ffffff",
  padding: "20px",
};

const footerText = {
  fontSize: "14px",
  lineHeight: "20px",
  margin: "0 0 20px",
};

const hr = {
  borderColor: "#666666",
  margin: "20px 0",
};

const footerLinks = {
  fontSize: "12px",
  color: "white",
  textAlign: "center" as const,
  margin: "20px 0",
};

const footerCopyright = {
  fontSize: "12px",
  color: "#888888",
  textAlign: "center" as const,
  margin: "20px 0 0",
};