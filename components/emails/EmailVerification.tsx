import {
  Body,
  Button,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"

interface EmailVerificationProps {
  userEmail?: string
  verificationCode?: string
  expiryTime?: string
  logoUrl?: string
}

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""

export const EmailVerification = ({
  userEmail = "yourmail@gmail.com",
  verificationCode = "13632",
  expiryTime = "12:55",
  logoUrl = "https://cdn.templates.unlayer.com/assets/1667300005726-5daab5a98bfff67898127df6_dark_logo_transparent@2x.png",
}: EmailVerificationProps) => {
  const previewText = "Your email verification code"

  return (
    <Html>
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v30/KFOiCnqEu92Fr1Mu51QrEz0dL_nz.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-[#ecf0f1] font-[Roboto,Verdana,sans-serif] m-0 p-0 box-border">
          <Container className="bg-white rounded-md shadow-md my-[40px] mx-auto p-0 max-w-[600px] overflow-hidden">
            {/* Header with Logo */}
            <Section className="w-full bg-white py-4">
              <Row>
                <Column>
                  <Img src={logoUrl} alt="Company Logo" width="120" height="30" className="mx-auto object-contain" />
                </Column>
              </Row>
            </Section>

            {/* Navigation Menu */}
            <Section className="w-full py-2 mb-6 mt-2 text-center border-y border-gray-200">
              <Row>
                <Column className="px-2">
                  <Text className="text-sm text-black m-0 inline-block">Home</Text>
                </Column>
                <Column className="px-2">
                  <Text className="text-sm text-black m-0 inline-block">|</Text>
                </Column>
                <Column className="px-2">
                  <Text className="text-sm text-black m-0 inline-block">Page</Text>
                </Column>
                <Column className="px-2">
                  <Text className="text-sm text-black m-0 inline-block">|</Text>
                </Column>
                <Column className="px-2">
                  <Text className="text-sm text-black m-0 inline-block">About</Text>
                </Column>
              </Row>
            </Section>

            {/* Main Content */}
            <Section className="px-8">
              <Row>
                <Column>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1680070159263-97399-email.gif"
                    alt="Verification"
                    width="100"
                    height="100"
                    className="mx-auto object-cover"
                  />
                  <Heading className="text-xl text-black text-center font-bold mb-2">Verify Your Email Address</Heading>

                  <Hr className="w-[70%] h-[3px] bg-[#ececec] mx-auto my-6 border-0" />

                  <Text className="text-sm text-[#39414a] text-center mb-5">
                    A verification code has been sent to
                    <br />
                    <strong>{userEmail}</strong>
                  </Text>

                  <Text className="text-sm text-[#acafae] text-left mx-[5%] mb-4">
                    Please check your inbox and enter the verification code below to verify your email address. The code
                    will expire in {expiryTime}.
                  </Text>

                  {/* Verification Code Boxes */}
                  <Section className="text-center mb-2">
                    <Row>
                      {verificationCode.split("").map((digit, index) => (
                        <Column key={index} className="px-1">
                          <Text className="text-2xl font-semibold px-4 py-2 m-0 text-gray-500 border border-[#dcdcdc] rounded inline-block">
                            {digit}
                          </Text>
                        </Column>
                      ))}
                    </Row>
                  </Section>

                  {/* Verify Button */}
                  <Section className="text-center mt-4 mb-4">
                    <Button
                      href="#"
                      className="bg-[#0aadb6] text-white text-sm font-medium px-10 py-3 rounded no-underline inline-block"
                    >
                      Verify
                    </Button>
                  </Section>

                  {/* Action Links */}
                  <Section className="text-center py-4 border-b border-gray-200">
                    <Row>
                      <Column className="px-2">
                        <Link href="#" className="text-xs text-[#0aadb6] font-semibold no-underline">
                          Resend Code
                        </Link>
                      </Column>
                      <Column className="px-2">
                        <Link href="#" className="text-xs text-[#0aadb6] font-semibold no-underline">
                          Change Email
                        </Link>
                      </Column>
                    </Row>
                  </Section>
                </Column>
              </Row>
            </Section>

            {/* Footer */}
            <Section className="bg-[#0aadb6] p-6 text-center">
              <Text className="text-white m-0 mb-2">Thanks for the support! 🎁</Text>
              <Text className="text-white text-xs mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                Sed ut perspiciatis unde omnis iste natus error sit.
              </Text>

              {/* Social Media Icons */}
              {/* <Row>
                <Column className="px-1">
                  <Link href="#">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                      width="24"
                      height="24"
                      alt="Facebook"
                      className="object-cover"
                    />
                  </Link>
                </Column>
                <Column className="px-1">
                  <Link href="#">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                      width="24"
                      height="24"
                      alt="Twitter"
                      className="object-cover"
                    />
                  </Link>
                </Column>
                <Column className="px-1">
                  <Link href="#">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                      width="24"
                      height="24"
                      alt="LinkedIn"
                      className="object-cover"
                    />
                  </Link>
                </Column>
                <Column className="px-1">
                  <Link href="#">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                      width="24"
                      height="24"
                      alt="Instagram"
                      className="object-cover"
                    />
                  </Link>
                </Column>
              </Row> */}

              <Text className="text-white text-xs mt-4">
                <Link href="#" className="text-white no-underline">
                  UNSUBSCRIBE
                </Link>{" "}
                |
                <Link href="#" className="text-white no-underline">
                  {" "}
                  PRIVACY POLICY
                </Link>{" "}
                |
                <Link href="#" className="text-white no-underline">
                  {" "}
                  WEB
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default EmailVerification
