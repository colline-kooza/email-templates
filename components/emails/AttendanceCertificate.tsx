import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Link,
  Font,
  Tailwind,
  Section,
  Column,
  Row,
} from "@react-email/components";

export const AttendanceCertificate = () => {
  const baseUrl = "http://localhost:3001";
  return (
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
      <Preview>Webinar Attendance Certificate</Preview>
      <Body
        style={{
          backgroundColor: "#ecf0f1",
          fontFamily: "DM Sans",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        }}
      >
        <Tailwind>
          <Container style={containerStyle}>
            <Section>
              <Row>
                <Column>
                  <div className="w-full mx-auto text-center pt-6">
                    <img
                      src="https://cdn.templates.unlayer.com/assets/1667300005726-5daab5a98bfff67898127df6_dark_logo_transparent@2x.png"
                      alt="Unlayer Logo"
                      style={logoStyle}
                    />
                  </div>
                  <Heading className="text-center" style={headingStyle}>
                    Webinar Attendance Certificate
                  </Heading>
                  <div className="w-full text-center bg-[#f4f4f4]">
                    <img
                      src="https://cdn.templates.unlayer.com/assets/1701432459848-Vector%20Smart%20Object.png"
                      alt="Star"
                      style={starStyle}
                    />
                  </div>
                  <Text className="text-sm text-start pt-3 text-[#000000] font-bold " style={contentStyle}>
                    Dear [Recipient's Name],
                  </Text>
                  <Text className="text-sm text-start pt-2" style={contentStyle}>
                    We trust this email finds you well. We sincerely appreciate your
                    participation in our recent webinar, "[Webinar Title]". We hope
                    you found the session informative and engaging.
                  </Text>
                  <div className="text-start pt-1">
                    <Button
                      className="text-xs"
                      href="https://example.com"
                      style={buttonStyle}
                    >
                      View Certificate
                    </Button>
                  </div>
                  <Text className="text-sm text-start pt-4" style={contentStyle}>
                    As a token of our gratitude, we are pleased to provide you with
                    a Certificate of Attendance for your active participation in the
                    webinar.
                  </Text>
                </Column>
              </Row>
            </Section>

            <div style={{borderTop:"2px solid #f1f5f9"}} className="w-full bg-[#ffffff] py-4 text-center mt-5">
              <Section>
                <Row>
                  <Column>
                    <div className="mb-2">
                      <Text className="text-xs text-gray-400 mt-2">
                        if you have any questions, please email us at
                        <br />
                        customer.success@unlayer.com or visit our FAQS, you can also chat
                        <br />
                        with a reel live human during our operating hours. They can answer
                        <br />
                        questions about your account
                      </Text>
                      <div className="mx-auto mt-2">
                        <Link href="https://facebook.com">
                          <img
                            src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                            alt="Facebook"
                            style={iconStyle}
                          />
                        </Link>
                        <Link href="https://linkedin.com">
                          <img
                            src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                            alt="LinkedIn"
                            style={iconStyle}
                          />
                        </Link>
                        <Link href="https://instagram.com">
                          <img
                            src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                            alt="Instagram"
                            style={iconStyle}
                          />
                        </Link>
                        <Link href="https://twitter.com">
                          <img
                            src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                            alt="Twitter"
                            style={iconStyle}
                          />
                        </Link>
                      </div>
                    </div>
                    <Text className="text-xs text-gray-400 mt-2">
                      If you have any questions, please email us at{" "}
                      <Link href="mailto:customersuccess@unlayer.com">
                        customersuccess@unlayer.com
                      </Link>{" "}
                      or visit our{" "}
                      <Link href="https://unlayer.com/faqs">FAQs</Link>. You can
                      also chat with a real live human during our operating hours.
                      They can answer questions about your account.
                    </Text>
                    <Text className="text-xs text-gray-400 mt-2">
                      2261 Market Street #4667 San Francisco, CA 94114 All rights
                      reserved.
                    </Text>
                  </Column>
                </Row>
              </Section>
            </div>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  );
};

export default AttendanceCertificate;

const containerStyle = {
  backgroundColor: "#ffffff",
  margin: "0px auto",
  padding: "0px 20px",
  borderRadius: "4px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
};

const logoStyle = {
  maxWidth: "100px",
  height: "auto",
  margin: "0 auto",
};

const headingStyle = {
  color: "#000",
  fontSize: "23px",
  margin: "20px 0",
};

const starStyle = {
  maxWidth: "230px",
  height: "auto",
  margin: "0 auto",
};

const contentStyle = {
  color: "#555",
  lineHeight: "1.5",
};

const buttonStyle = {
  backgroundColor: "#000",
  color: "#fff",
  borderRadius: "2px",
  padding: "10px 30px",
  textDecoration: "none",
  border: "1px solid #000",
};

const iconStyle = {
  width: "25px",
  height: "25px",
  borderRadius: "5%",
  marginRight: "4px",
};
