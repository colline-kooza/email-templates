import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Img,
  Font,
  Tailwind,
  Section,
  Link,
  Row,
  Column,
} from "@react-email/components"

interface HomeDecorPromoProps {
  promoCode?: string
  discountPercentage?: string
  customerName?: string
}

export const ExploreOfficeTemplate = ({
  promoCode = "HOMEDECOR10",
  discountPercentage = "10%",
  customerName = "Customer Name",
}: HomeDecorPromoProps) => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Asap"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/asap/v30/KFO9CniXp96a4Tc2DaTeuDAoKsE615hGW36MAA.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Do more for home</Preview>
      <Body style={{ fontFamily: "Asap", margin: 0, padding: 0, background: "#ffffff" }}>
        <Tailwind>
          <Container className="min-h-screen bg-[#fcf9f8] overflow-hidden">
            {/* Header */}
            <Section
              style={{
                backgroundImage: "url('https://utfs.io/f/bee581f9-f4bb-422c-9668-c8994d0d4c64-z6rc5b.png')",
              }}
              className="w-full h-[40vh] bg-cover bg-center bg-no-repeat"
            >
              <Row>
                <Column align="center">
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1597216012722-xxx.png"
                    alt="Logo"
                    width="100"
                    height="auto"
                    className="mx-auto object-contain pt-10"
                  />
                  <Heading className="text-[1.6rem] font-bold text-center text-[#ffff]">
                    Do more <span className="italic text-[#509d23]">for home</span>
                  </Heading>
                </Column>
              </Row>
            </Section>

            {/* Main Content - First Section */}
            <Section className="mt-4 bg-[#fcf9f8] px-4">
              <Row>
                <Column align="center">
                  <Heading className="text-lg font-semibold text-center mt-6 mb-2 text-[#000000]">
                    EXPLORE OFFICE
                  </Heading>
                  <Text className="text-center text-[#000000] mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore m
                  </Text>
                  <Text className="text-center text-[#000000] mb-6">
                    Use code <strong>{promoCode}</strong> to get a <strong>{discountPercentage}</strong> off on home and
                    office decor, our team will ensure a safe and faster delivery!
                  </Text>

                  <Button
                    href="#"
                    className="bg-[#34495e] text-white text-xs font-medium px-8 py-3 rounded-sm no-underline mx-auto"
                  >
                    GET THE DEAL
                  </Button>
                </Column>
              </Row>
            </Section>

            {/* Second Section */}
            <Section className="mt-10 px-4">
              <Row>
                <Column align="center">
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1597217000509-DDD.png"
                    alt="Second Image"
                    width="300"
                    className="mx-auto object-contain mt-4"
                  />
                  <Text className="text-center text-[#000000] mt-6 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore m
                  </Text>
                  <Button
                    href="#"
                    className="bg-[#34495e] text-white text-xs font-medium px-8 py-3 rounded-sm no-underline mx-auto"
                  >
                    GRAB THE DEAL
                  </Button>
                </Column>
              </Row>
            </Section>

            {/* Footer section - Testimonial */}
            <Section className="w-full text-center mt-10 bg-[#184e5a] py-8">
              <Row>
                <Column align="center">
                  <Text className="text-sm text-white italic px-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </Text>
                  <Text className="text-sm text-white italic px-6 mt-2">
                    diam nonummy nibh euismod tincidunt ut laoreet dolore "
                  </Text>
                  <Text className="text-sm text-white italic px-6 mt-2 font-semibold">- {customerName}</Text>
                </Column>
              </Row>
            </Section>

            {/* Footer section - Social and Contact */}
            <Section className="w-full text-center bg-white py-8">
              <Row>
                <Column align="center">
                  <Link href="#">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/circle-black/instagram.png"
                      alt="Instagram"
                      width="36"
                      height="36"
                      className="mx-auto object-contain"
                    />
                  </Link>
                  <Text className="text-sm text-gray-800 mt-4 italic px-8 mx-auto">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam era sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam era
                  </Text>
                </Column>
              </Row>
            </Section>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  )
}

export default ExploreOfficeTemplate
