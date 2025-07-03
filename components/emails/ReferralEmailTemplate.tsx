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
} from "@react-email/components";

interface ReferralEmailProps {
  phoneNumber?: string;
  viewOnlineUrl?: string;
  referralUrl?: string;
  companyName?: string;
  companyAddress?: string;
  companyCity?: string;
  companyState?: string;
  companyZip?: string;
  websiteUrl?: string;
  contactEmail?: string;
  facebookUrl?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
}

export default function ReferralEmailTemplate({
  phoneNumber = "+123-456-789",
  viewOnlineUrl = "#",
  referralUrl = "#",
  companyName = "Desishub LLC",
  companyAddress = "388 Market St, Suite 1300",
  companyCity = "San Francisco",
  companyState = "CA",
  companyZip = "94111",
  websiteUrl = "www.desishub.com",
  contactEmail = "Desishub@email.com",
  facebookUrl = "#",
  twitterUrl = "#",
  linkedinUrl = "#",
  instagramUrl = "#",
}: ReferralEmailProps) {
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
        Refer customers and grow your revenue with our referral program
      </Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto w-full max-w-[600px] p-0">
            {/* Header Section */}
            <Section
              className="px-6 py-3"
              style={{
                background: "linear-gradient(135deg, #c2185b 0%, #ff9800 100%)",
              }}
            >
              <Row>
                <Column className="text-left">
                  <Text className="m-0 font-normal text-sm text-white">
                    {phoneNumber}
                  </Text>
                </Column>
                <Column className="text-right">
                  <Link
                    href={viewOnlineUrl}
                    className="font-normal text-sm text-white no-underline"
                  >
                    View Online
                  </Link>
                </Column>
              </Row>
            </Section>

            {/* Hero Section */}
            <Section
              className="px-8 py-12 text-center"
              style={{
                background: "linear-gradient(135deg, #c2185b 0%, #ff9800 100%)",
              }}
            >
              {/* Award Icon Placeholder */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  margin: "0 auto 24px auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#ff9800",
                    borderRadius: "50%",
                    position: "relative",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "-10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "0",
                    height: "0",
                    borderLeft: "15px solid transparent",
                    borderRight: "15px solid transparent",
                    borderTop: "20px solid white",
                  }}
                />
              </div>

              <Heading className="m-0 mb-4 font-bold text-3xl text-white leading-tight">
                Refer customers, grow your revenue.
              </Heading>

              <Text className="mb-8 mx-auto max-w-md font-normal text-base text-white leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </Text>

              <Link
                href={referralUrl}
                className="inline-block rounded-md border-2 border-white px-8 py-3 font-bold text-sm text-white no-underline hover:bg-white hover:text-purple-600 transition-colors"
                style={{
                  backgroundColor: "transparent",
                }}
              >
                REFER A BUSINESS
              </Link>
            </Section>

            {/* How it works Section */}
            <Section
              className="px-8 py-8 text-center"
              style={{ backgroundColor: "#fdf6e3" }}
            >
              <Heading className="m-0 mb-8 font-medium text-2xl text-gray-800">
                How it works?
              </Heading>

              <Row className="mb-6">
                <Column className="text-center">
                  {/* User Icon */}
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#ff9800",
                      borderRadius: "8px",
                      margin: "0 auto 16px auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        position: "relative",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        marginTop: "20px",
                        width: "32px",
                        height: "16px",
                        backgroundColor: "white",
                        borderRadius: "8px",
                      }}
                    />
                  </div>

                  <Heading className="m-0 mb-2 font-semibold text-lg text-gray-800">
                    Refer a friend
                  </Heading>
                  <Text className="m-0 font-normal text-sm text-gray-600 leading-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </Text>
                </Column>
              </Row>

              <Row>
                <Column className="text-center">
                  {/* Credit Card Icon */}
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#ff9800",
                      borderRadius: "8px",
                      margin: "0 auto 16px auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "24px",
                        backgroundColor: "white",
                        borderRadius: "4px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "6px",
                          left: "4px",
                          width: "28px",
                          height: "3px",
                          backgroundColor: "#ff9800",
                          borderRadius: "2px",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: "4px",
                          left: "4px",
                          width: "12px",
                          height: "2px",
                          backgroundColor: "#ff9800",
                          borderRadius: "1px",
                        }}
                      />
                    </div>
                  </div>

                  <Heading className="m-0 mb-2 font-semibold text-lg text-gray-800">
                    Earn rewards
                  </Heading>
                  <Text className="m-0 font-normal text-sm text-gray-600 leading-5">
                    Lorem ipsum dolor sit amet consectetur.
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Footer Section */}
            <Section
              className="px-8 py-6"
              style={{ backgroundColor: "#e6d3a3" }}
            >
              <Row>
                <Column className="w-2/3">
                  <Heading className="m-0 mb-2 font-bold text-sm text-gray-800 uppercase tracking-wide">
                    CONTACT US
                  </Heading>
                  <Text className="m-0 mb-1 font-normal text-sm text-gray-700 leading-5">
                    {companyName}, HR Manager,
                  </Text>
                  <Text className="m-0 mb-1 font-normal text-sm text-gray-700 leading-5">
                    {companyAddress},
                  </Text>
                  <Text className="m-0 font-normal text-sm text-gray-700 leading-5">
                    {companyCity}, {companyState} {companyZip}
                  </Text>
                </Column>
                <Column className="w-1/3 text-right">
                  {/* Social Icons */}
                    <Row>
              <Column style={socialIconsColumnStyle}>
                <Link href="#" style={socialLinkStyle} className="mobile-social-stack">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                    alt="Facebook"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle} className="mobile-social-stack">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                    alt="Twitter"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle} className="mobile-social-stack">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                    alt="LinkedIn"
                    style={socialIconStyle}
                  />
                </Link>
                <Link href="#" style={socialLinkStyle} className="mobile-social-stack">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                    alt="Instagram"
                    style={socialIconStyle}
                  />
                </Link>
              </Column>
            </Row>
                  <Text className="m-0 mb-1 font-normal text-sm text-gray-700">
                    {websiteUrl}
                  </Text>
                  <Text className="m-0 font-normal text-sm text-gray-700">
                    {contactEmail}
                  </Text>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

ReferralEmailTemplate.PreviewProps = {
  phoneNumber: "+123-456-789",
  viewOnlineUrl: "https://example.com/view-online",
  referralUrl: "https://example.com/refer",
  companyName: "Desishub LLC",
  companyAddress: "388 Market St, Suite 1300",
  companyCity: "San Francisco",
  companyState: "CA",
  companyZip: "94111",
  websiteUrl: "www.Desishub.com",
  contactEmail: "Desishub@email.com",
  facebookUrl: "https://cdn.tools.unlayer.com/social/icons/circle-black/facebook.png",
  twitterUrl: "https://cdn.tools.unlayer.com/social/icons/circle-black/twitter.png",
  linkedinUrl: "https://cdn.tools.unlayer.com/social/icons/circle-black/linkedin.png",
  instagramUrl: "https://cdn.tools.unlayer.com/social/icons/circle-black/instagram.png",
} satisfies ReferralEmailProps;
const socialLinkStyle = {
  textDecoration: "none",
  margin: "0 8px",
  display: "inline-block",
}

const socialIconStyle = {
  width: "20px",
  height: "20px",
  borderRadius: "0%",
  display: "block",
}

const socialIconsColumnStyle = {
  textAlign: "center" as const,
  padding: "0 0 20px 0",
  width: "100%",
}