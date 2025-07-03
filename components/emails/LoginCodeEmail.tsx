import { Body, Container, Head, Html, Link, Preview, Section, Text, Tailwind } from "@react-email/components"

interface LoginCodeEmailProps {
  loginCode?: string
  recipientEmail?: string
  programName?: string
  validityMinutes?: number
  appIconUrl?: string
}

export default function LoginCodeEmail({
  loginCode = "205926",
  recipientEmail = "koozacollinz1@gmail.com",
  programName = "Magic UI's Affiliate Program",
  validityMinutes = 15,
  appIconUrl = "/placeholder.svg?height=120&width=120",
}: LoginCodeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Your login code for {programName}</Preview>
      <Tailwind>
        <Body className=" font-sans m-0 p-0">
          <Container className="mx-auto max-w-[600px] p-0">
            <Section className="bg-[#1a1a1a] text-center py-12 px-6">
              {/* App Icon */}
              <div className="mb-8 flex justify-center">
                <div className="w-[120px] h-[120px] rounded-[24px] bg-purple-400 flex items-center justify-center shadow-lg">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              {/* Main Heading */}
              <Text className="text-white text-2xl font-normal leading-tight mb-8 mx-4">
                Your login code for
                <br />
                {programName}
                <br />
                is:
              </Text>

              {/* Login Code */}
              <Text className="text-white text-5xl font-normal mb-8 tracking-wider">{loginCode}</Text>

              {/* Validity Information */}
              <Text className="text-gray-400 text-base mb-2 font-normal">
                The code is valid for {validityMinutes} minutes.
              </Text>

              {/* Recipient Information */}
              <Text className="text-gray-400 text-base mb-1 font-normal">This email was intended for:</Text>

              <Link
                href={`mailto:${recipientEmail}`}
                className="text-blue-400 text-base font-normal no-underline hover:underline"
              >
                {recipientEmail}.
              </Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

// Preview props for development
LoginCodeEmail.PreviewProps = {
  loginCode: "205926",
  recipientEmail: "koozacollinz1@gmail.com",
  programName: "Magic UI's Affiliate Program",
  validityMinutes: 15,
} satisfies LoginCodeEmailProps
