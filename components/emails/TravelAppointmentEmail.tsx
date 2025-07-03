import {
  Body,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"

interface TravelAppointmentEmailProps {
  customerName?: string
  appointmentDate?: string
  appointmentTime?: string
  logoUrl?: string
  appointmentIllustrationUrl?: string
  promoImageUrl?: string
  verifyUrl?: string
  promoUrl?: string
  phoneNumber?: string
  address?: string
  email?: string
  twitterUrl?: string
  instagramUrl?: string
  linkedinUrl?: string
  unsubscribeUrl?: string
  companyName?: string
  year?: number
}

export default function TravelAppointmentEmail({
  customerName = "Georgia",
  appointmentDate = "Thursday, November 11",
  appointmentTime = "10:30 AM",
  verifyUrl = "#",
  promoUrl = "#",
  phoneNumber = "Lorem Ipsum dolor",
  address = "Lorem Ipsum dolor",
  email = "Lorem Ipsum dolor",
  twitterUrl = "#",
  instagramUrl = "#",
  linkedinUrl = "#",
  unsubscribeUrl = "#",
  companyName = "Company",
  year = 2024,
}: TravelAppointmentEmailProps) {
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
        Verify Your Appointment - {appointmentDate} at {appointmentTime}
      </Preview>
      <Tailwind>
        <Body className="bg-gray-400 font-sans">
          <Container className="mx-auto w-full max-w-[700px] p-2">
            {/* Main Content Card */}
            <Section className="bg-white rounded-lg overflow-hidden shadow-lg">
              {/* Header with Logo */}
              <Section className="px-8 py-6 text-center bg-gray-900">
                <Img src="https://cdn.templates.unlayer.com/assets/1637912880140-1.png" alt="Travel & Hotel" width="170" height="60" style={{ margin: "0 auto" }}
                className="object-contain"
                />
              </Section>

              {/* Appointment Verification Section */}
              <Section className="px-8 py-8 text-center bg-white">
                <Heading className="m-0 mb-6 font-bold text-2xl text-purple-800">Verify Your Appointment</Heading>

                {/* Appointment Illustration */}
                <div style={{ marginBottom: "32px" }}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1636780637744-sdsds.png"
                    alt="Appointment Scheduling Illustration"
                    width="300"
                    height="200"
                    style={{ margin: "0 auto", display: "block" }}
                  />
                </div>

                {/* Appointment Details */}
                <Section className="text-left">
                  <Text className="m-0 mb-4 font-normal text-base text-gray-800">
                    Dear <strong>{customerName}</strong>,
                  </Text>
                  <Text className="m-0 mb-6 font-normal text-sm text-gray-700 leading-6">
                    We have successfully scheduled your next appointment for:
                  </Text>

                  <Row className="mb-6">
                    <Column className="w-1/2">
                      <Text className="m-0 mb-2 font-bold text-sm text-purple-800">{appointmentDate}</Text>
                      <Text className="m-0 font-bold text-sm text-purple-800">at {appointmentTime}</Text>
                    </Column>
                    <Column className="w-1/2">
                      <Text className="m-0 mb-2 font-bold text-sm text-gray-800">Please Remember to bring:</Text>
                      <div>
                        <Text className="m-0 mb-1 font-normal text-xs text-gray-600 leading-4">
                          • Lorem ipsum dolor sit amet, consectetur.
                        </Text>
                        <Text className="m-0 mb-1 font-normal text-xs text-gray-600 leading-4">
                          • Lorem ipsum dolor sit amet.
                        </Text>
                        <Text className="m-0 font-normal text-xs text-gray-600 leading-4">
                          • Lorem ipsum dolor sit amet.
                        </Text>
                      </div>
                    </Column>
                  </Row>

                  {/* CTA Button */}
                  <div className="text-center mb-8">
                    <Link
                      href={verifyUrl}
                      className="inline-block rounded-md bg-orange-500 px-8 py-3 font-bold text-sm text-white no-underline"
                      style={{ textDecoration: "none" }}
                    >
                      CLICK HERE
                    </Link>
                  </div>
                </Section>
              </Section>

              {/* Contact Information */}
              <Section className="px-8 py-6 bg-gray-600">
                <Row>
                  <Column className="w-1/3 text-center">
                    <div style={{ marginBottom: "8px" }}>
                      <Img
                        src="https://cdn.templates.unlayer.com/assets/1636782090056-preview.png"
                        alt="Phone"
                        width="40"
                        height="40"
                        style={{ margin: "0 auto", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}
                      />
                    </div>
                    <Text className="m-0 font-normal text-xs text-white text-center">{phoneNumber}</Text>
                  </Column>
                  <Column className="w-1/3 text-center">
                    <div style={{ marginBottom: "8px" }}>
                      <Img
                        src="https://cdn.templates.unlayer.com/assets/1636782090056-preview.png"
                        alt="Location"
                        width="40"
                        height="40"
                        style={{ margin: "0 auto", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}
                      />
                    </div>
                    <Text className="m-0 font-normal text-xs text-white text-center">{address}</Text>
                  </Column>
                  <Column className="w-1/3 text-center">
                    <div style={{ marginBottom: "8px" }}>
                      <Img
                        src="https://cdn.templates.unlayer.com/assets/1636782090056-preview.png"
                        alt="Email"
                        width="40"
                        height="40"
                        style={{ margin: "0 auto", backgroundColor: "white", borderRadius: "50%", padding: "8px" }}
                      />
                    </div>
                    <Text className="m-0 font-normal text-xs text-white text-center">{email}</Text>
                  </Column>
                </Row>
              </Section>

              {/* Promotional Banner */}
              <Section className="bg-white">
                <Row>
                  <Column className="w-2/5">
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1636782090056-preview.png"
                      alt="Travel Promotion"
                      width="250"
                      height="150"
                      style={{ display: "block", width: "100%", height: "150px", objectFit: "contain" }}
                    />
                  </Column>
                  <Column className="w-3/5 bg-blue-900" style={{ backgroundColor: "#1e3a8a" }}>
                    <div style={{ padding: "24px" }}>
                      <Heading className="m-0 mb-2 font-bold text-3xl text-white">30% OFF</Heading>
                      <Text className="m-0 mb-4 font-normal text-sm text-white leading-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      </Text>
                      <Link
                        href={promoUrl}
                        className="inline-block rounded-md bg-orange-500 px-6 py-2 font-bold text-xs text-white no-underline"
                        style={{ textDecoration: "none" }}
                      >
                        CLICK HERE
                      </Link>
                    </div>
                  </Column>
                </Row>
              </Section>

              {/* Social Media and Footer */}
              <Section className="px-8 py-6 text-center bg-black text-white">
                <Heading className="m-0 mb-4 font-bold text-lg">Stay Connected</Heading>
                {/* Social Media Icons */}
                <div style={{ marginBottom: "16px" }}>
                  <Link href={twitterUrl} className="mr-4">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/circle-white/twitter.png"
                      alt="Twitter"
                      width="24"
                      height="24"
                      style={{ display: "inline-block" }}
                    />
                  </Link>
                  <Link href={instagramUrl} className="mr-4">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/circle-white/instagram.png"
                      alt="Instagram"
                      width="24"
                      height="24"
                      style={{ display: "inline-block" }}
                    />
                  </Link>
                  <Link href={linkedinUrl}>
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/circle-white/youtube.png"
                      alt="LinkedIn"
                      width="24"
                      height="24"
                      style={{ display: "inline-block" }}
                    />
                  </Link>
                </div>

                {/* Unsubscribe Text */}
                <Text className="m-0 mb-2 font-normal text-xs text-gray-500 leading-4">
                  Want to change how you receive these emails?
                </Text>
                <Text className="m-0 mb-4 font-normal text-xs text-gray-500 leading-4">
                  You can{" "}
                  <Link href={unsubscribeUrl} className="text-gray-500 underline">
                    update your preferences or unsubscribe from this list
                  </Link>
                </Text>

                {/* Copyright */}
                <Text className="m-0 font-normal text-xs text-gray-500">
                  © {year} {companyName}, All Rights Reserved
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

TravelAppointmentEmail.PreviewProps = {
  customerName: "Georgia",
  appointmentDate: "Thursday, November 11",
  appointmentTime: "10:30 AM",
  logoUrl: "/placeholder.svg?height=60&width=200",
  appointmentIllustrationUrl: "/placeholder.svg?height=200&width=300",
  promoImageUrl: "/placeholder.svg?height=150&width=250",
  verifyUrl: "https://example.com/verify-appointment",
  promoUrl: "https://example.com/promo",
  phoneNumber: "Lorem Ipsum dolor",
  address: "Lorem Ipsum dolor",
  email: "Lorem Ipsum dolor",
  twitterUrl: "https://twitter.com",
  instagramUrl: "https://instagram.com",
  linkedinUrl: "https://linkedin.com",
  unsubscribeUrl: "https://example.com/unsubscribe",
  companyName: "Company",
  year: 2024,
} satisfies TravelAppointmentEmailProps
