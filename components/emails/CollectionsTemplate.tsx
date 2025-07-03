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
  Text,
  Button,
  Font,
} from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""

export const CollectionsTemplate = () => {
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
      <Preview>An Exclusive Collection Curated For You</Preview>
      <Tailwind>
        <Body style={main}>
          <Container style={container}>
            {/* Header Section */}
            <Section style={headerStyle} className="text-center py-4">
              <Heading className="text-2xl text-black mt-0 mb-4">
                An Exclusive Collection
                <br />
                Curated For You.
              </Heading>
              <Text className="text-sm text-black mx-auto" style={{ maxWidth: "80%" }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat.
              </Text>
              <Button href="#" style={buttonStyle} className="mt-4 px-8 py-2 text-white bg-black text-xs">
                Exclusive Deals
              </Button>
            </Section>

            {/* Main Image Section */}
            <Section className="w-full py-8 bg-[#a0d9f5] text-center">
              <Img
                src="https://cdn.templates.unlayer.com/assets/1695289748721-img.png"
                alt="Main Product Image"
                style={imageStyle}
                className="mx-auto"
              />
            </Section>

            {/* Recommended Products */}
            <Section style={recommendedContainer} className="pt-6">
              <Heading className="text-lg text-[#acd4e8] text-center mt-0 mb-4">Recommended For You</Heading>

              {/* Product 1 */}
              <Section style={productSection}>
                <Section style={{ display: "flex", flexDirection: "row" }}>
                  <Section style={{ width: "50%", padding: "10px" }}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1695290117495-1.png"
                      alt="Luxury Watch"
                      style={{ maxHeight: "200px", maxWidth: "100%" }}
                      className="mx-auto"
                    />
                  </Section>
                  <Section style={{ width: "50%", padding: "10px" }}>
                    <Heading className="text-base text-white font-bold mt-0 mb-0 text-center">Product Name</Heading>
                    <Section className="text-center">
                      <Img
                        src="https://cdn.templates.unlayer.com/assets/1677062898549-Asset%205.png"
                        className="w-1/5 mx-auto"
                        alt="Rating"
                      />
                    </Section>
                    <Text className="text-xs text-[#78797e] my-2 text-center">
                      Lorem ipsum dolor sit amet, consec adip iscing elit, sed do eiusmod tempor incididunt ut labore.
                    </Text>
                    <Text className="text-sm font-bold text-white text-center">$14.00</Text>
                  </Section>
                </Section>
              </Section>

              {/* Product 2 */}
              <Section style={productSection}>
                <Section style={{ display: "flex", flexDirection: "row" }}>
                  <Section style={{ width: "50%", padding: "10px" }}>
                    <Heading className="text-base text-white font-bold mt-0 mb-0 text-center">Product Name</Heading>
                    <Section className="text-center">
                      <Img
                        src="https://cdn.templates.unlayer.com/assets/1677062898549-Asset%205.png"
                        className="w-1/5 mx-auto"
                        alt="Rating"
                      />
                    </Section>
                    <Text className="text-xs text-[#78797e] my-2 text-center">
                      Lorem ipsum dolor sit amet, consec adip iscing elit, sed do eiusmod tempor incididunt ut labore.
                    </Text>
                    <Text className="text-sm font-bold text-white text-center">$14.00</Text>
                  </Section>
                  <Section style={{ width: "50%", padding: "10px" }}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1695290233949-2.png"
                      alt="Luxury Watch"
                      style={{ maxHeight: "200px", maxWidth: "100%" }}
                      className="mx-auto"
                    />
                  </Section>
                </Section>
                <Section className="text-center mt-4">
                  <Button href="#" style={footerButtonStyle} className="px-8 py-2 text-black bg-[#a0d9f5] text-xs">
                    Shop Now
                  </Button>
                </Section>
              </Section>
            </Section>

            {/* Footer */}
            <Section className="w-full bg-[#b7def0] py-3 text-black text-center">
              <Section className="mb-2">
                <Section className="mx-auto mt-2">
                  <Link href="https://facebook.com">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                      alt="Facebook"
                      style={iconStyle}
                    />
                  </Link>
                  <Link href="https://twitter.com">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                      alt="Twitter"
                      style={iconStyle}
                    />
                  </Link>
                  <Link href="https://linkedin.com">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                      alt="LinkedIn"
                      style={iconStyle}
                    />
                  </Link>
                  <Link href="https://instagram.com">
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                      alt="Instagram"
                      style={iconStyle}
                    />
                  </Link>
                </Section>
              </Section>
              <Text className="text-xs text-[#000] mt-0 mb-0">2261 Market Street #4667 San Francisco, CA 94114</Text>
              <Text className="text-xs text-[#000000] mt-0 mb-0">All rights reserved. Company No. 94114</Text>
              <Text className="text-xs text-gray-700">Copyright © YourCompany | All Rights Reserved</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default CollectionsTemplate

const main = {
  backgroundColor: "#f0f2f5",
  fontFamily: "DM Sans, Verdana",
  margin: "0",
  padding: "0",
}

const container = {
  backgroundColor: "#b7def0",
  padding: "0px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
}

const headerStyle = {
  backgroundColor: "#a0d9f5",
  padding: "20px",
}

const buttonStyle = {
  backgroundColor: "#000000",
  color: "#ffffff",
  borderRadius: "6px",
  textDecoration: "none",
  padding: "10px 20px",
  display: "inline-block",
}

const imageStyle = {
  maxWidth: "50%",
  height: "auto",
}

const recommendedContainer = {
  backgroundColor: "#000000",
  padding: "20px 0",
}

const productSection = {
  borderBottom: "1px solid #2f2f30",
  marginBottom: "20px",
  paddingBottom: "20px",
}

const footerButtonStyle = {
  backgroundColor: "#a0d9f5",
  color: "#000000",
  borderRadius: "2px",
  textDecoration: "none",
  padding: "10px 20px",
  display: "inline-block",
}

const iconStyle = {
  width: "25px",
  height: "25px",
  borderRadius: "40%",
  marginRight: "4px",
  display: "inline-block",
}
