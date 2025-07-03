import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
  Font,
} from "@react-email/components"

interface PasswordResetEmailProps {
  resetUrl?: string
  companyName?: string
  logoUrl?: string
}

export default function PasswordResetEmail({
  resetUrl = "#",
  companyName = "Company Name",
  logoUrl = "https://cdn.templates.unlayer.com/assets/1593141680866-reset.png",
}: PasswordResetEmailProps) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Reset your password - {companyName}</Preview>
      <Tailwind>
        <Body className="bg-[#f6f6f6] font-[Inter] m-0 p-0">
          <Container className="bg-white mx-auto my-2 p-0 rounded border shadow-sm max-w-[600px]">
            {/* Header Section */}
            <Section className="w-full text-center p-0">
              <div className="bg-[#161938] text-white inline-flex items-center rounded-sm overflow-hidden">
                <span className="text-sm font-bold pl-4 py-2">YOUR</span>
                <span className="text-sm text-[#222040] font-bold bg-white px-4 py-2 ml-2">LOGO</span>
              </div>
            </Section>

            {/* Hero Section */}
            <Section className="w-full bg-[#161a39] text-center py-8">
              <Img
                src={logoUrl}
                alt="Reset Password"
                className="mx-auto mb-4"
                style={{
                  maxHeight: "50px",
                  maxWidth: "100%",
                }}
              />
              <Text className="text-lg text-white font-medium m-0">Please reset your password</Text>
            </Section>

            {/* Content Section */}
            <Section className="px-8 py-6">
              <Text className="text-sm text-[#666666] leading-6 mb-4">Hello,</Text>
              <Text className="text-sm text-[#666666] leading-6 mb-4">
                We have sent you this email in response to your request to reset your password on {companyName}.
              </Text>
              <Text className="text-sm text-[#666666] leading-6 mb-6">
                To reset your password, please follow the link below:
              </Text>

              <div className="text-center mb-6">
                <Link
                  href={resetUrl}
                  className="inline-block bg-[#18163a] text-white text-sm font-medium py-3 px-8 rounded no-underline hover:bg-black transition-colors"
                >
                  Reset Password
                </Link>
              </div>

              <Text className="text-[#8c8a88] text-[13px] leading-5 mt-8" style={{ fontStyle: "italic" }}>
                Please ignore this email if you did not request a password change.
              </Text>
            </Section>

            {/* Footer Section */}
            <Section className="bg-[#18163a] p-0">
              <Row className="px-6 py-6">
                <Column className="w-1/2 align-top">
                  <Text className="text-[#f1f5f9] text-xs font-medium mb-2 mt-0">Contact</Text>
                  <Text className="text-[#f1f5f9] text-xs mb-1 mt-0">1912 Mcwhorter Road, FL 11223</Text>
                  <Text className="text-[#f1f5f9] text-xs mb-0 mt-0">
                    +111 222 333 | Info@{companyName.toLowerCase().replace(/\s+/g, "")}.com
                  </Text>
                </Column>

                <Column className="w-1/2 align-top">
                  <div className="flex items-center mb-3">
                    <Link href="https://www.facebook.com" className="mr-2">
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/circle-white/facebook.png"
                        alt="Facebook"
                        width="20"
                        height="20"
                        className="rounded-full"
                      />
                    </Link>
                    <Link href="https://www.instagram.com" className="mr-2">
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/circle-white/instagram.png"
                        alt="Instagram"
                        width="20"
                        height="20"
                        className="rounded-full"
                      />
                    </Link>
                    <Link href="https://www.linkedin.com" className="mr-2">
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/circle-white/linkedin.png"
                        alt="LinkedIn"
                        width="20"
                        height="20"
                        className="rounded-full"
                      />
                    </Link>
                    <Link href="https://www.twitter.com">
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/circle-white/twitter.png"
                        alt="Twitter"
                        width="20"
                        height="20"
                        className="rounded-full"
                      />
                    </Link>
                  </div>
                  <Text className="text-[#f1f5f9] text-xs mb-0 mt-0">Follow us for updates</Text>
                </Column>
              </Row>

              <Hr className="border-[#e7e7e7] mx-4 my-0" />

              <Section className="text-center py-4">
                <Text className="text-[#f1f5f9] text-xs mb-0">© 2024 {companyName}. All rights reserved.</Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

// Preview props for development
PasswordResetEmail.PreviewProps = {
  resetUrl: "https://example.com/reset-password?token=abc123",
  companyName: "Your Company",
  logoUrl: "https://cdn.templates.unlayer.com/assets/1593141680866-reset.png",
} satisfies PasswordResetEmailProps
