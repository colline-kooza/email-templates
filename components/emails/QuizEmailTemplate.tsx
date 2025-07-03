import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"

interface QuizEmailProps {
  logoUrl?: string
  quizUrl?: string
  supportEmail?: string
  faqUrl?: string
  homeUrl?: string
  pageUrl?: string
  aboutUrl?: string
  contactUrl?: string
  websiteUrl?: string
  unsubscribeUrl?: string
  facebookUrl?: string
  twitterUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
}

export default function QuizEmailTemplate({
  quizUrl = "#",
  supportEmail = "customer.success@desishub.com",
  faqUrl = "#",
  homeUrl = "#",
  pageUrl = "#",
  aboutUrl = "#",
  contactUrl = "#",
  websiteUrl = "desishub.com",
  unsubscribeUrl = "#",
  facebookUrl = "#",
  twitterUrl = "#",
  linkedinUrl = "#",
  instagramUrl = "#",
}: QuizEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Answer the Questions and Win Prizes!</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto w-full max-w-[600px] bg-white">
            {/* Logo Section */}
            <Section className="px-8 py-3 text-center bg-white">
              <img src="https://cdn.templates.unlayer.com/assets/1692340502185-gif.gif"
              className="mx-auto text-center w-[180px] h-[180px]"
              alt="" />
            </Section>

            {/* Main Quiz Section */}
            <Section className="px-8 py-8 text-left relative overflow-hidden" style={{ backgroundColor: "#4285f4" }}>
            

              <div style={{ position: "relative", zIndex: 2 }}>
                <Heading className="m-0 mb-4 font-bold text-2xl text-white leading-tight">
                  Answer the Questions and
                  <br />
                  Win Prizes!
                </Heading>

                <Text className="mb-4 font-normal text-sm text-white leading-5">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard.
                </Text>

                <Text className="mb-2 font-semibold text-sm text-white">Instructions:</Text>

                <div className="mb-6">
                  <Text className="m-0 mb-1 font-normal text-sm text-white leading-5">
                    • Lorem Ipsum is simply dummy text of the printing
                  </Text>
                  <Text className="m-0 font-normal text-sm text-white leading-5">
                    • Typesetting industry's standard
                  </Text>
                </div>

                <Link
                  href={quizUrl}
                  className="inline-block rounded-md bg-white px-6 py-3 font-semibold text-sm text-blue-600 no-underline"
                  style={{ textDecoration: "none" }}
                >
                  Start Quiz →
                </Link>
              </div>
            </Section>

            {/* Contact Section */}
            <Section className="px-8 py-6 text-center bg-white">
              <Text className="m-0 mb-2 font-normal text-sm text-gray-700 leading-5">
                If you have any questions, please email us at{" "}
                <Link href={`mailto:${supportEmail}`} className="text-blue-600 no-underline">
                  {supportEmail}
                </Link>{" "}
                or visit our{" "}
                <Link href={faqUrl} className="text-blue-600 no-underline">
                  FAQs
                </Link>
                , you can also chat with a real live human during our operating hours. They can answer questions about
                your account.
              </Text>
            </Section>

            {/* Social Media Section */}
            <Section className="px-8 py-4 text-center bg-white">
              <Row>
                <Column>
                  <Link href={facebookUrl} className="mr-3">
                    <div
                      style={{
                        display: "inline-block",
                        width: "32px",
                        height: "32px",
                        backgroundColor: "#1877f2",
                        borderRadius: "6px",
                        textAlign: "center",
                        lineHeight: "32px",
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      f
                    </div>
                  </Link>
                  <Link href={twitterUrl} className="mr-3">
                    <div
                      style={{
                        display: "inline-block",
                        width: "32px",
                        height: "32px",
                        backgroundColor: "#1da1f2",
                        borderRadius: "6px",
                        textAlign: "center",
                        lineHeight: "32px",
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      t
                    </div>
                  </Link>
                  <Link href={linkedinUrl} className="mr-3">
                    <div
                      style={{
                        display: "inline-block",
                        width: "32px",
                        height: "32px",
                        backgroundColor: "#0077b5",
                        borderRadius: "6px",
                        textAlign: "center",
                        lineHeight: "32px",
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      in
                    </div>
                  </Link>
                  <Link href={instagramUrl}>
                    <div
                      style={{
                        display: "inline-block",
                        width: "32px",
                        height: "32px",
                        background:
                          "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                        borderRadius: "6px",
                        textAlign: "center",
                        lineHeight: "32px",
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      ig
                    </div>
                  </Link>
                </Column>
              </Row>
            </Section>

            {/* Navigation Footer */}
            <Section className="px-8 py-4 text-center bg-white">
              <Text className="m-0 font-normal text-sm text-gray-600">
                <Link href={homeUrl} className="text-gray-600 no-underline">
                  Home
                </Link>
                {" | "}
                <Link href={pageUrl} className="text-gray-600 no-underline">
                  Page
                </Link>
                {" | "}
                <Link href={aboutUrl} className="text-gray-600 no-underline">
                  About Us
                </Link>
                {" | "}
                <Link href={contactUrl} className="text-gray-600 no-underline">
                  Contact Us
                </Link>
              </Text>
            </Section>

            {/* Legal Footer */}
            <Section className="px-8 py-6 text-center bg-white">
              <Text className="m-0 mb-2 font-normal text-xs text-gray-500 leading-4">
                You have received this email as a registered user of{" "}
                <Link href={`https://${websiteUrl}`} className="text-blue-600 no-underline">
                  {websiteUrl}
                </Link>
              </Text>
              <Text className="m-0 mb-2 font-normal text-xs text-gray-500 leading-4">
                <Link href={unsubscribeUrl} className="text-blue-600 no-underline">
                  unsubscribe
                </Link>{" "}
                from these emails here
              </Text>
              <Text className="m-0 font-normal text-xs text-gray-500 leading-4">
                2341 Market Street #4027 San Francisco, CA 94114 All rights reserved
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

QuizEmailTemplate.PreviewProps = {
  logoUrl: "/images/quiz-logo.png",
  quizUrl: "https://example.com/quiz",
  supportEmail: "customer.success@unlayer.com",
  faqUrl: "https://example.com/faq",
  homeUrl: "https://example.com",
  pageUrl: "https://example.com/page",
  aboutUrl: "https://example.com/about",
  contactUrl: "https://example.com/contact",
  websiteUrl: "unlayer.com",
  unsubscribeUrl: "https://example.com/unsubscribe",
  facebookUrl: "https://facebook.com",
  twitterUrl: "https://twitter.com",
  linkedinUrl: "https://linkedin.com",
  instagramUrl: "https://instagram.com",
} satisfies QuizEmailProps
