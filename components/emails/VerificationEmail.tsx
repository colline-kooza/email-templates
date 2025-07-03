import {
  Body,
  Column,
  Container,
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
} from "@react-email/components";

interface VerificationEmailProps {
  verificationCode?: string;
  deviceInfo?: string;
  location?: string;
  date?: string;
  userEmail?: string;
}

export default function VerificationEmail({
  verificationCode = "264301",
  deviceInfo = "Chrome 111.0.0 Windows 10",
  location = "San Francisco, CA 94114",
  date = "Monday, 20 March 2023 at 11:31:10 pm",
  userEmail = "user@example.com",
}: VerificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Your verification code: {verificationCode}</Preview>
      <Tailwind>
        <Body className="bg-[#f0f0f0] font-sans">
          <Container className="mx-auto w-full max-w-[600px] p-0 bg-[#ffffff]">
            {/* Header Section with Illustration */}
            <div className="mx-auto mb-3 bg-[#ddffe7] py-3">
              <Img
                src="https://cdn.templates.unlayer.com/assets/1701676201199-password.png"
                alt="Security verification illustration"
                width="350"
                height="300"
                className="mx-auto block object-contain"
              />
            </div>

            {/* Main Content */}
            <Section className="px-8 py-2 text-center">
              <Heading className="mb-6 font-bold text-2xl text-gray-900">
                Your one-time code is
              </Heading>

              {/* Verification Code Box */}
              <div
                className="mx-auto mb-6 w-fit  px-8 py-4"
                style={{ borderColor: "#000000" }}
              >
                <Text className="m-0 font-mono text-2xl font-bold text-gray-900 tracking-wider  border-solid border-[2px] border-gray-500 px-7 py-2">
                  {verificationCode}
                </Text>
              </div>

              <Text className="mb-8 text-gray-700 text-sm leading-6">
                Please verify you're really you by entering this
                <br />
                6-digit code when you sign in. Just a heads up, this code will
                expire
                <br />
                in 20 minutes for security reasons.
              </Text>
            </Section>

            {/* Device Information Section */}
            <Section className="px-8 py-3 ">
              <Heading className="mb-6 text-center font-bold text-xl text-gray-900">
                We noticed you signed in from a<br />
                new location or device
              </Heading>

              <Row className="mb-3">
                <Column className="w-1/3 text-center">
                  <div className="mb-2 text-2xl">
                    <img
                      src="https://cdn.templates.unlayer.com/assets/1701676450619-pc.png"
                      className="w-8 h-8 mx-auto"
                      alt=""
                    />
                  </div>
                  <Text className="mb-2 font-bold text-gray-900 text-sm">
                    Device:
                  </Text>
                  <Text className="text-gray-700 text-xs leading-4">
                    {deviceInfo}
                  </Text>
                </Column>

                <Column className="w-1/3 text-center">
                  <div className="mb-2 text-2xl">
                    <img
                      src="https://cdn.templates.unlayer.com/assets/1701676500813-location.png"
                      className="w-8 h-8 mx-auto"
                      alt=""
                    />{" "}
                  </div>
                  <Text className="mb-2 font-bold text-gray-900 text-sm">
                    Location:
                  </Text>
                  <Text className="text-gray-700 text-xs leading-4">
                    {location}
                  </Text>
                </Column>

                <Column className="w-1/3 text-center">
                  <div className="mb-2 text-2xl">
                    <img
                      src="https://cdn.templates.unlayer.com/assets/1701676528640-calendar%20(1).png"
                      alt=""
                      className="w-8 h-8 mx-auto"
                    />
                  </div>
                  <Text className="mb-2 font-bold text-gray-900 text-sm">
                    Date
                  </Text>
                  <Text className="text-gray-700 text-xs leading-4">
                    {date}
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Security Recommendation */}
            <Section className="px-8 py-3 text-center ">
              <Text className="mb-6 text-gray-700 text-sm leading-6">
                If you didn't just try to sign in,
                <br />
                we recommend you reset your password here:
              </Text>

              <Link
                href="#"
                className="inline-block bg-black px-8 py-3 font-bold text-sm text-white no-underline"
                style={{ backgroundColor: "#000000" }}
              >
                Reset Your Password
              </Link>
            </Section>

            <Hr className="mx-8 my-6" style={{ borderColor: "#e5e7eb" }} />

            {/* Footer */}
            <Section className="px-8 py-6 text-center">
              <Text className="mb-4 text-gray-700 text-sm">
                If you have any questions, contact our{" "}
                <Link href="#" className="text-blue-600 underline">
                  Website Guides
                </Link>
                .<br />
                Or, visit our{" "}
                <Link href="#" className="text-blue-600 underline">
                  Help Center
                </Link>
                .
              </Text>

              <Text className="mb-6 text-gray-600 text-xs leading-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida dolore magna aliqua.
              </Text>

              <Hr className="mb-4" style={{ borderColor: "#e5e7eb" }} />

              {/* Navigation Links */}
              <Row>
                <Column className="w-1/4 text-center">
                  <Link
                    href="#"
                    className="font-medium text-gray-900 text-sm no-underline"
                  >
                    Men
                  </Link>
                </Column>
                <Column className="w-1/4 text-center">
                  <Text className="text-gray-400">|</Text>
                </Column>
                <Column className="w-1/4 text-center">
                  <Link
                    href="#"
                    className="font-medium text-gray-900 text-sm no-underline"
                  >
                    Women
                  </Link>
                </Column>
                <Column className="w-1/4 text-center">
                  <Text className="text-gray-400">|</Text>
                </Column>
              </Row>
              <Row className="mt-2">
                <Column className="w-1/2 text-center">
                  <Link
                    href="#"
                    className="font-medium text-gray-900 text-sm no-underline"
                  >
                    Accessories
                  </Link>
                </Column>
                <Column className="w-1/2 text-center">
                  <Link
                    href="#"
                    className="font-medium text-gray-900 text-sm no-underline"
                  >
                    Sale
                  </Link>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

VerificationEmail.PreviewProps = {
  verificationCode: "264301",
  deviceInfo: "Chrome 111.0.0 Windows 10",
  location: "San Francisco, CA 94114",
  date: "Monday, 20 March 2023 at 11:31:10 pm",
  userEmail: "user@example.com",
} satisfies VerificationEmailProps;
