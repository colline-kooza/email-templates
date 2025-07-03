import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"

interface BackgroundCheckEmailProps {
  candidateName?: string
  jobTitle?: string
  companyName?: string
  logoUrl?: string
  illustrationUrl?: string
  verifyUrl?: string
  contactPhone?: string
  senderName?: string
  senderTitle?: string
  linkedinUrl?: string
  instagramUrl?: string
  twitterUrl?: string
  pinterestUrl?: string
  companyAddress?: string
  year?: number
}

export default function BackgroundCheckEmail({
  candidateName = "Candidate's Name",
  jobTitle = "Job Title",
  companyName = "Company Name",
  logoUrl = "/placeholder.svg?height=40&width=120",
  illustrationUrl = "/placeholder.svg?height=300&width=400",
  verifyUrl = "#",
  contactPhone = "123-456-7890",
  senderName = "Your name",
  senderTitle = "",
  linkedinUrl = "#",
  instagramUrl = "#",
  twitterUrl = "#",
  pinterestUrl = "#",
  companyAddress = "123 San Francisco, CA, United States",
  year = 2024,
}: BackgroundCheckEmailProps) {
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
      <Preview>
        Background check update for {jobTitle} position at {companyName}
      </Preview>
      <Tailwind>
        <Body className="bg-blue-100 font-sans">
          <Container className="mx-auto w-full max-w-[600px] p-4">
            {/* Main Content Card */}
            <Section className="bg-white rounded-lg overflow-hidden shadow-lg">
              {/* Header with Logo */}
              <Section className="px-8 py-6 text-center bg-white">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "8px" }}>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: "#60a5fa",
                      borderRadius: "50%",
                      marginRight: "8px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <Text className="m-0 font-bold text-lg text-gray-800 text-center">YOUR LOGO</Text>
                </div>
              </Section>

              {/* Main Illustration */}
              <Section className="px-8 py-4 text-center bg-white">
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1639409113540-2.jpeg"
                  alt="Background Check Process Illustration"
                  width="400"
                  height="300"
                  style={{ margin: "0 auto", display: "block", maxWidth: "100%" }}
                />
              </Section>

              {/* Main Content */}
              <Section className="px-8 py-6 bg-white">
                <Heading className="m-0 mb-6 font-bold text-xl text-gray-900 text-center leading-tight">
                  Update on a background check for [{jobTitle}] at [{companyName}]
                </Heading>

                <Text className="m-0 mb-4 font-normal text-base text-gray-800">Hi [{candidateName}],</Text>

                <Text className="m-0 mb-6 font-normal text-sm text-gray-700 leading-6">
                  Received your mail and hope this mail reach you well. Talent acquisition often requires a huge
                  investment of time and resources, so it is always safe and secure to do your due diligence before
                  onboarding a new hire.
                </Text>

                <Text className="m-0 mb-4 font-normal text-sm text-gray-700 leading-6">
                  To go ahead with your data verification, we would require these documents from you:
                </Text>

                {/* Document List */}
                <div className="mb-8">
                  <Text className="m-0 mb-2 font-normal text-sm text-gray-700 leading-5">
                    • Lorem ipsum dolor sit amet, consectetur
                  </Text>
                  <Text className="m-0 mb-2 font-normal text-sm text-gray-700 leading-5">
                    • Lorem ipsum dolor sit amet, consectetur adipiscing
                  </Text>
                  <Text className="m-0 mb-6 font-normal text-sm text-gray-700 leading-5">
                    • Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </div>

                {/* CTA Button */}
                <div className="text-center mb-8">
                  <Link
                    href={verifyUrl}
                    className="inline-block rounded-full bg-blue-600 px-12 py-4 font-bold text-sm text-white no-underline"
                    style={{ textDecoration: "none" }}
                  >
                    VERIFY NOW
                  </Link>
                </div>

                <Text className="m-0 mb-6 font-normal text-sm text-gray-700 leading-6">
                  This will ensure the authenticity of your data and information with the verification process is pretty
                  simple and short. The information you provide is confidential and safe with us.
                </Text>

                <Text className="m-0 mb-6 font-normal text-sm text-gray-700 leading-6">
                  If you have any questions/issues regarding the process, feel free to contact us.
                </Text>

                <Text className="m-0 mb-2 font-normal text-sm text-gray-700">With Regards,</Text>
                <Text className="m-0 mb-8 font-normal text-sm text-gray-700">
                  [{senderName}]
                  {senderTitle && (
                    <>
                      <br />
                      {senderTitle}
                    </>
                  )}
                </Text>

                {/* Contact Information */}
                <div className="text-center">
                  <Text className="m-0 font-bold text-lg text-gray-900">Call: {contactPhone}</Text>
                </div>
              </Section>

              {/* Footer */}
              <Section className="px-8 py-6 bg-blue-900 text-center">
                {/* Social Media Icons */}
                <div style={{ marginBottom: "16px" }}>
                  <Link href={linkedinUrl} className="mr-3">
                    <div
                      style={{
                        display: "inline-block",
                        width: "36px",
                        height: "36px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        textAlign: "center",
                        lineHeight: "36px",
                        color: "#1e40af",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      in
                    </div>
                  </Link>
                  <Link href={instagramUrl} className="mr-3">
                    <div
                      style={{
                        display: "inline-block",
                        width: "36px",
                        height: "36px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        textAlign: "center",
                        lineHeight: "36px",
                        color: "#1e40af",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      ig
                    </div>
                  </Link>
                  <Link href={twitterUrl} className="mr-3">
                    <div
                      style={{
                        display: "inline-block",
                        width: "36px",
                        height: "36px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        textAlign: "center",
                        lineHeight: "36px",
                        color: "#1e40af",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      t
                    </div>
                  </Link>
                  <Link href={pinterestUrl}>
                    <div
                      style={{
                        display: "inline-block",
                        width: "36px",
                        height: "36px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        textAlign: "center",
                        lineHeight: "36px",
                        color: "#1e40af",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      p
                    </div>
                  </Link>
                </div>

                <Text className="m-0 mb-2 font-normal text-sm text-white">
                  You're receiving this email because you asked us about regular newsletter.
                </Text>
                <Text className="m-0 font-normal text-xs text-blue-200">
                  ©{year} your Company | {companyAddress}
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

BackgroundCheckEmail.PreviewProps = {
  candidateName: "John Smith",
  jobTitle: "Software Engineer",
  companyName: "Tech Solutions Inc",
  logoUrl: "/placeholder.svg?height=40&width=120",
  illustrationUrl: "/placeholder.svg?height=300&width=400",
  verifyUrl: "https://example.com/verify-background-check",
  contactPhone: "123-456-7890",
  senderName: "Sarah Johnson",
  senderTitle: "HR Manager",
  linkedinUrl: "https://linkedin.com/company/example",
  instagramUrl: "https://instagram.com/example",
  twitterUrl: "https://twitter.com/example",
  pinterestUrl: "https://pinterest.com/example",
  companyAddress: "123 San Francisco, CA, United States",
  year: 2024,
} satisfies BackgroundCheckEmailProps
