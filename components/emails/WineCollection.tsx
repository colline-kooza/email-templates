import {
  Body,
  Container,
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

interface WineCollectionEmailProps {
  phoneNumber?: string
  viewOnlineUrl?: string
  redWineUrl?: string
  oldWineUrl?: string
  shopUrl?: string
  contactEmail?: string
  companyAddress?: string
}

export default function WineCollection({
  phoneNumber = "+123-456-789",
  viewOnlineUrl = "#",
  redWineUrl = "#",
  oldWineUrl = "#",
  shopUrl = "#",
  contactEmail = "wine@example.com",
  companyAddress = "Lorem street, hello suburb, San Francisco, CA",
}: WineCollectionEmailProps) {
  return (
    <Html>
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        `}</style>
      </Head>
      <Preview>Exclusive Wine Collection - Premium wines delivered to your door</Preview>
      <Tailwind>
        <Body className="bg-gray-100" style={{ fontFamily: "DM Sans, sans-serif" }}>
          <Container className="mx-auto w-full max-w-[600px] bg-white">
            {/* Header */}
            <Section className="px-6 py-4">
              <div style={{ display: "flex",  alignItems: "center" }}>
                <Text className="m-0 text-sm text-amber-600" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  {phoneNumber}
                </Text>
                <Link
                  href={viewOnlineUrl}
                  className="text-sm text-amber-600 no-underline"
                  style={{ fontFamily: "DM Sans, sans-serif", textDecoration: "none" }}
                >
                  View Online
                </Link>
              </div>
            </Section>

            {/* Hero Section */}
            <Section className="px-6 py-8 text-center">
              <Img
                src="https://res.cloudinary.com/dirpuqqib/image/upload/v1750770371/1625987876374-t4_image1_rpqzno.jpg"
                alt="Wine Collection Hero"
                className="object-cover"
                width="500"
                height="370"
                style={{
                  display: "block",
                  margin: "0 auto 24px auto",
                  maxWidth: "100%",
                  borderRadius: "12px",
                }}
              />
              <Heading
                className="m-0 mb-2 font-bold text-2xl text-gray-800 tracking-wide"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                EXCLUSIVE
              </Heading>
              <Heading
                className="m-0 mb-6 font-bold text-2xl text-gray-800 tracking-wide"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                WINE COLLECTION
              </Heading>
              <Text
                className="m-0 mb-4 text-sm text-gray-600 leading-6 max-w-md mx-auto"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
              </Text>

              {/* Decorative divider */}
              <div className="my-8">
                <div
                  style={{
                    width: "100px",
                    height: "2px",
                    backgroundColor: "#d4af37",
                    margin: "0 auto",
                    borderRadius: "1px",
                  }}
                />
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#d4af37",
                    borderRadius: "50%",
                    margin: "-10px auto 0 auto",
                  }}
                />
              </div>
            </Section>

            {/* Red Wine Section */}
            <Section className="px-6 py-8">
              <div style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap" }}>
                <div style={{ flex: "1", minWidth: "250px" }}>
                  <Heading
                    className="m-0 mb-4 font-bold text-xl text-gray-800 tracking-wide"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    RED WINE
                  </Heading>
                  <Text
                    className="m-0 mb-4 text-sm text-gray-600 leading-6"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard
                  </Text>
                  <Link
                    href={redWineUrl}
                    className="inline-block border border-gray-400 px-6 py-2 text-sm text-gray-700 no-underline hover:bg-gray-50"
                    style={{
                      textDecoration: "none",
                      fontFamily: "DM Sans, sans-serif",
                      borderRadius: "4px",
                    }}
                  >
                    GET IT NOW
                  </Link>
                </div>
                <div style={{ flex: "1", minWidth: "200px", textAlign: "right" }}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1625991579540-temp.png"
                    alt="Red Wine Bottles"
                    width="150"
                    height="200"
                    style={{ display: "block", maxWidth: "100%", marginLeft: "auto" }}
                  />
                </div>
              </div>
            </Section>

            {/* Old Wine Section */}
            <Section className="px-6 py-8 bg-gray-50">
              <div style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap" }}>
                <div style={{ flex: "1", minWidth: "200px" }}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1625991980414-Screenshot_7.png"
                    alt="Old Wine Bottle"
                    width="150"
                    height="200"
                    style={{ display: "block", maxWidth: "100%" }}
                  />
                </div>
                <div style={{ flex: "1", minWidth: "250px" }}>
                  <Heading
                    className="m-0 mb-4 font-bold text-xl text-gray-800 tracking-wide"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    OLD WINE
                  </Heading>
                  <Text
                    className="m-0 mb-4 text-sm text-gray-600 leading-6"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard
                  </Text>
                  <Link
                    href={oldWineUrl}
                    className="inline-block border border-gray-400 px-6 py-2 text-sm text-gray-700 no-underline hover:bg-gray-50"
                    style={{
                      textDecoration: "none",
                      fontFamily: "DM Sans, sans-serif",
                      borderRadius: "4px",
                    }}
                  >
                    GET IT NOW
                  </Link>
                </div>
              </div>
            </Section>

            {/* Decorative divider */}
            <Section className="px-6 py-4">
              <div
                style={{
                  width: "100px",
                  height: "2px",
                  backgroundColor: "#d4af37",
                  margin: "0 auto",
                  borderRadius: "1px",
                }}
              />
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#d4af37",
                  borderRadius: "50%",
                  margin: "-10px auto 0 auto",
                }}
              />
            </Section>

            {/* How We Make It Section */}
            <Section className="px-6 py-8 text-center">
              <Heading
                className="m-0 mb-6 font-bold text-xl text-gray-800 tracking-wide"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                HOW WE MAKE IT?
              </Heading>
              <Text
                className="m-0 mb-8 text-sm text-gray-600 leading-6 max-w-md mx-auto"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard
              </Text>

              <Img
                src="https://res.cloudinary.com/dirpuqqib/image/upload/v1750770632/1625993677651-GREEP_o4dij8.png"
                alt="Grape Cluster"
                width="200"
                height="150"
                style={{ display: "block", margin: "0 auto 24px auto", maxWidth: "100%" }}
              />

              <div style={{ display: "flex", gap: "32px", flexWrap: "wrap", textAlign: "left" }}>
                <div style={{ flex: "1", minWidth: "250px" }}>
                  <Text className="m-0 text-sm text-gray-600 leading-6" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard
                  </Text>
                </div>
                <div style={{ flex: "1", minWidth: "250px" }}>
                  <Text className="m-0 text-sm text-gray-600 leading-6" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard
                  </Text>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="#"
                  className="inline-block border border-gray-400 px-6 py-2 text-sm text-gray-700 no-underline hover:bg-gray-50"
                  style={{
                    textDecoration: "none",
                    fontFamily: "DM Sans, sans-serif",
                    borderRadius: "4px",
                  }}
                >
                  LEARN MORE
                </Link>
              </div>
            </Section>

            {/* Decorative divider */}
            <Section className="px-6 py-4">
              <div
                style={{
                  width: "100px",
                  height: "2px",
                  backgroundColor: "#d4af37",
                  margin: "0 auto",
                  borderRadius: "1px",
                }}
              />
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#d4af37",
                  borderRadius: "50%",
                  margin: "-10px auto 0 auto",
                }}
              />
            </Section>

            {/* How We Serve Section */}
            <Section className="px-6 py-8 text-center">
              <Heading
                className="m-0 mb-8 font-bold text-xl text-gray-800 tracking-wide"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                HOW WE SERVE?
              </Heading>

              <div style={{ display: "flex", gap: "32px", flexWrap: "wrap"}}>
                <div style={{ flex: "1", minWidth: "150px", textAlign: "center" }}>
                  <Text
                    className="m-0 mb-2 font-bold text-4xl text-gray-300"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    01
                  </Text>
                  <Text
                    className="m-0 mb-1 font-semibold text-sm text-gray-800"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    QUICK
                  </Text>
                  <Text
                    className="m-0 font-semibold text-sm text-gray-800"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    DELIVERY
                  </Text>
                </div>
                <div style={{ flex: "1", minWidth: "150px", textAlign: "center" }}>
                  <Text
                    className="m-0 mb-2 font-bold text-4xl text-gray-300"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    02
                  </Text>
                  <Text
                    className="m-0 mb-1 font-semibold text-sm text-gray-800"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    EASY
                  </Text>
                  <Text
                    className="m-0 font-semibold text-sm text-gray-800"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    TO ORDER
                  </Text>
                </div>
                <div style={{ flex: "1", minWidth: "150px", textAlign: "center" }}>
                  <Text
                    className="m-0 mb-2 font-bold text-4xl text-gray-300"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    03
                  </Text>
                  <Text
                    className="m-0 mb-1 font-semibold text-sm text-gray-800"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    100%
                  </Text>
                  <Text
                    className="m-0 font-semibold text-sm text-gray-800"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    GUARANTEED
                  </Text>
                </div>
              </div>
            </Section>

            {/* Want More Collection Section */}
            <Section
              className="px-6 py-12 text-center text-white bg-[url('https://res.cloudinary.com/dirpuqqib/image/upload/v1750770715/1625994342474-147460_ovqgyu.jpg')] bg-cover bg-center"
              style={{
                backgroundColor: "#1a1a1a",
                // backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))",
              }}
            >
              <Heading className="m-0 mb-6 font-bold text-2xl text-white" style={{ fontFamily: "DM Sans, sans-serif" }}>
                WANT MORE COLLECTION?
              </Heading>
              <Text
                className="m-0 mb-8 text-sm text-gray-300 leading-6 max-w-md mx-auto"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard Lorem Ipsum has been the industry's standard
              </Text>
              <Link
                href={shopUrl}
                className="inline-block bg-red-700 px-8 py-3 font-semibold text-white no-underline hover:bg-red-800"
                style={{
                  textDecoration: "none",
                  fontFamily: "DM Sans, sans-serif",
                  borderRadius: "4px",
                }}
              >
                VISIT OUR SHOP
              </Link>
            </Section>

            {/* Footer */}
            <Section className="px-6 py-8 bg-gray-50">
              <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
                <div style={{ flex: "1", minWidth: "250px" }}>
                  <Heading
                    className="m-0 mb-4 font-bold text-lg text-gray-800"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    ABOUT US
                  </Heading>
                  <Text
                    className="m-0 mb-4 text-sm text-gray-600 leading-6"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </Text>
                  <Text className="m-0 text-sm text-gray-600 leading-6" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    Lorem Ipsum has been the industry's standard
                  </Text>
                </div>
                <div style={{ flex: "1", minWidth: "250px" }}>
                  <div className="mb-4">
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        backgroundColor: "#22c55e",
                        borderRadius: "50%",
                        display: "inline-block",
                        marginRight: "8px",
                      }}
                    />
                    <Text
                      className="m-0 text-sm text-gray-600"
                      style={{ fontFamily: "DM Sans, sans-serif", display: "inline" }}
                    >
                      {companyAddress}
                    </Text>
                  </div>
                  <div>
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        backgroundColor: "#f59e0b",
                        borderRadius: "50%",
                        display: "inline-block",
                        marginRight: "8px",
                      }}
                    />
                    <Link
                      href={`mailto:${contactEmail}`}
                      className="text-sm text-gray-600 no-underline"
                      style={{ fontFamily: "DM Sans, sans-serif", textDecoration: "none" }}
                    >
                      {contactEmail}
                    </Link>
                  </div>
                </div>
              </div>
            </Section>

            {/* Copyright */}
            <Section className="px-6 py-4 bg-amber-100 text-center">
              <Text className="m-0 text-xs text-gray-600" style={{ fontFamily: "DM Sans, sans-serif" }}>
                © 2026 All rights reserved
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

WineCollection.PreviewProps = {
  phoneNumber: "+123-456-789",
  viewOnlineUrl: "https://example.com/view-online",
  redWineUrl: "https://example.com/red-wine",
  oldWineUrl: "https://example.com/old-wine",
  shopUrl: "https://example.com/shop",
  contactEmail: "wine@example.com",
  companyAddress: "Lorem street, hello suburb, San Francisco, CA",
} satisfies WineCollectionEmailProps
