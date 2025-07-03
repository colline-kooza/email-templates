import {
  Body,
  Button,
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

interface FashionEmailTemplateProps {
  previewText?: string
  shopNowUrl?: string
  orderNowUrl?: string
  companyName?: string
}

export default function FashionEmailTemplate({
  previewText = "Make your summer day feeling good",
  shopNowUrl = "#",
  orderNowUrl = "#",
  companyName = "YourCompany",
}: FashionEmailTemplateProps) {
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
          fontStyle="normal"
        />
      </Head>
      <Preview>{previewText}</Preview>
      <Body style={{ fontFamily: "DM Sans", margin: 0, padding: 0, background: "#e7e7e7" }}>
        <Tailwind>
          <Container className="bg-white max-w-[600px] mx-auto">
            {/* New Arrivals Section */}
            <Section className="bg-[#f0f0f0] p-0">
              <Row>
                <Column className="w-1/2">
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1710392828414-gif-01.gif"
                    alt="New Collection"
                    className="w-full h-auto object-cover"
                    width="300"
                  />
                </Column>
                <Column className="w-1/2 py-8 px-4">
                  <Text className="text-[12px] text-[#747576] text-center m-0">New Collections</Text>
                  <Heading className="text-xl font-bold text-[#000000] mt-1 mb-0 text-center">NEW ARRIVALS</Heading>
                  <Text className="text-xs text-[#000000] my-2 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                  </Text>
                  <div className="text-center">
                    <Button
                      href={shopNowUrl}
                      className="bg-[#1f3526] text-white rounded px-8 py-2 text-xs no-underline"
                      style={{
                        backgroundColor: "#1f3526",
                        color: "#ffffff",
                        borderRadius: "4px",
                        padding: "8px 30px",
                        textDecoration: "none",
                        fontSize: "12px",
                      }}
                    >
                      Shop Now
                    </Button>
                  </div>
                </Column>
              </Row>
            </Section>

            {/* Collection Intro */}
            <Section className="py-4 px-4">
              <Text className="text-base text-[#424542] text-left">
                A collection of cool
                <br />
                clothes available here
              </Text>
            </Section>

            {/* Three Images Section */}
            <Section className="p-0">
              <Row>
                <Column className="w-1/3 bg-[#ffca00]">
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1593531618854-blob"
                    alt="Fashion item"
                    className="w-full h-auto"
                    width="200"
                  />
                </Column>
                <Column className="w-1/3 bg-[#ffca00]">
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1593532751973-blob"
                    alt="Fashion item"
                    className="w-full h-auto"
                    width="200"
                  />
                </Column>
                <Column className="w-1/3 bg-[#ffca00]">
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1593531618854-blob"
                    alt="Fashion item"
                    className="w-full h-auto"
                    width="200"
                  />
                </Column>
              </Row>
            </Section>

            {/* Featured Products Section */}
            <Section className="py-6">
              <Heading className="text-[20px] font-bold text-[#000000] mb-0 text-center">FEATURED PRODUCTS</Heading>
              <Text className="text-xs text-[#7b8a8c] mb-6 text-center mx-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore.
              </Text>

              <Row>
                {/* Product 1 */}
                <Column className="w-1/3 px-2">
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1710394246837-image%203.png"
                    alt="Product 1"
                    className="w-full h-auto object-contain"
                    width="180"
                  />
                  <Text className="text-sm text-[#000000] mt-2 mb-0 text-center">Product Name</Text>
                  <div className="text-center mt-1">
                    <Text className="text-xs text-[#e7805c] line-through mt-0 mb-0 inline-block mr-2">$130.00</Text>
                    <Text className="text-sm font-bold text-[#000000] mt-0 mb-0 inline-block">$119.00</Text>
                  </div>
                  <div className="text-center mt-2">
                    <Button
                      href={orderNowUrl}
                      className="bg-white text-black border border-[#a6a6a6] rounded px-8 py-2 text-xs font-semibold no-underline"
                      style={{
                        backgroundColor: "#ffffff",
                        color: "#000000",
                        borderRadius: "4px",
                        padding: "8px 30px",
                        textDecoration: "none",
                        fontSize: "11px",
                        border: "1px solid #a6a6a6",
                      }}
                    >
                      Order Now
                    </Button>
                  </div>
                </Column>

                {/* Product 2 */}
                <Column className="w-1/3 px-2">
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1710394267799-image%204.png"
                    alt="Product 2"
                    className="w-full h-auto object-contain"
                    width="180"
                  />
                  <Text className="text-sm text-[#000000] mt-2 mb-0 text-center">Product Name</Text>
                  <div className="text-center mt-1">
                    <Text className="text-xs text-[#e7805c] line-through mt-0 mb-0 inline-block mr-2">$130.00</Text>
                    <Text className="text-sm font-bold text-[#000000] mt-0 mb-0 inline-block">$119.00</Text>
                  </div>
                  <div className="text-center mt-2">
                    <Button
                      href={orderNowUrl}
                      className="bg-white text-black border border-[#a6a6a6] rounded px-8 py-2 text-xs font-semibold no-underline"
                      style={{
                        backgroundColor: "#ffffff",
                        color: "#000000",
                        borderRadius: "4px",
                        padding: "8px 30px",
                        textDecoration: "none",
                        fontSize: "11px",
                        border: "1px solid #a6a6a6",
                      }}
                    >
                      Order Now
                    </Button>
                  </div>
                </Column>

                {/* Product 3 */}
                <Column className="w-1/3 px-2">
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1710394270128-image%205.png"
                    alt="Product 3"
                    className="w-full h-auto object-contain"
                    width="180"
                  />
                  <Text className="text-sm text-[#000000] mt-2 mb-0 text-center">Product Name</Text>
                  <div className="text-center mt-1">
                    <Text className="text-xs text-[#e7805c] line-through mt-0 mb-0 inline-block mr-2">$130.00</Text>
                    <Text className="text-sm font-bold text-[#000000] mt-0 mb-0 inline-block">$119.00</Text>
                  </div>
                  <div className="text-center mt-2">
                    <Button
                      href={orderNowUrl}
                      className="bg-white text-black border border-[#a6a6a6] rounded px-8 py-2 text-xs font-semibold no-underline"
                      style={{
                        backgroundColor: "#ffffff",
                        color: "#000000",
                        borderRadius: "4px",
                        padding: "8px 30px",
                        textDecoration: "none",
                        fontSize: "11px",
                        border: "1px solid #a6a6a6",
                      }}
                    >
                      Order Now
                    </Button>
                  </div>
                </Column>
              </Row>
            </Section>

            {/* Promotional Banners */}
            <Section className="py-4">
              <Row>
                {/* Promo 1 */}
                <Column className="w-1/2 px-2">
                  <div className="bg-[#eef5ea] rounded-lg p-4">
                    <Row>
                      <Column className="w-1/2">
                        <Text className="text-[14px] text-[#838580] m-0">Shoe Sale</Text>
                        <Heading className="text-sm font-bold text-[#000000] mt-1 mb-0 whitespace-nowrap">
                          20-30% OFF
                        </Heading>
                      </Column>
                      <Column className="w-1/2">
                        <Img
                          src="https://cdn.templates.unlayer.com/assets/1710394774125-image%207.png"
                          alt="Shoe Sale"
                          className="w-full h-auto object-contain"
                          width="100"
                        />
                      </Column>
                    </Row>
                  </div>
                </Column>

                {/* Promo 2 */}
                <Column className="w-1/2 px-2">
                  <div className="bg-[#eaebf5] rounded-lg p-4">
                    <Row>
                      <Column className="w-1/2">
                        <Text className="text-[14px] text-[#838580] m-0">Shoe Sale</Text>
                        <Heading className="text-sm font-bold text-[#000000] mt-1 mb-0 whitespace-nowrap">
                          20-30% OFF
                        </Heading>
                      </Column>
                      <Column className="w-1/2">
                        <Img
                          src="https://cdn.templates.unlayer.com/assets/1710394865884-image%206.png"
                          alt="Shoe Sale"
                          className="w-full h-auto object-contain"
                          width="100"
                        />
                      </Column>
                    </Row>
                  </div>
                </Column>
              </Row>
            </Section>

            {/* Footer */}
            <Section className="bg-white py-6 text-center">
              <div className="mb-4">
                <Link href="https://facebook.com">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                    alt="Facebook"
                    width="25"
                    height="25"
                    className="inline-block mx-1"
                  />
                </Link>
                <Link href="https://linkedin.com">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                    alt="LinkedIn"
                    width="25"
                    height="25"
                    className="inline-block mx-1"
                  />
                </Link>
                <Link href="https://instagram.com">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                    alt="Instagram"
                    width="25"
                    height="25"
                    className="inline-block mx-1"
                  />
                </Link>
                <Link href="https://twitter.com">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/x.png"
                    alt="Twitter"
                    width="25"
                    height="25"
                    className="inline-block mx-1"
                  />
                </Link>
              </div>

              <Text className="text-xs text-gray-800 mb-2">
                <Link href="#" className="text-gray-800 no-underline">
                  Home
                </Link>{" "}
                |
                <Link href="#" className="text-gray-800 no-underline">
                  {" "}
                  Page
                </Link>{" "}
                |
                <Link href="#" className="text-gray-800 no-underline">
                  {" "}
                  About
                </Link>{" "}
                |
                <Link href="#" className="text-gray-800 no-underline">
                  {" "}
                  Contact us
                </Link>
              </Text>

              <Text className="text-xs text-gray-800 mx-8 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
              </Text>

              <Text className="text-xs text-gray-800">Copyright © {companyName} | All Rights Reserved</Text>
            </Section>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  )
}

// Preview props for development
FashionEmailTemplate.PreviewProps = {
  previewText: "Make your summer day feeling good",
  shopNowUrl: "https://example.com/shop",
  orderNowUrl: "https://example.com/order",
  companyName: "Fashion Brand",
} satisfies FashionEmailTemplateProps
