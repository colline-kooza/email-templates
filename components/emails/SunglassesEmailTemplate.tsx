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

interface SunglassesEmailProps {
  logoUrl?: string;
  cartIconUrl?: string;
  mainSunglassesUrl?: string;
  sunglasses1Url?: string;
  sunglasses2Url?: string;
  sunglasses3Url?: string;
  unlayerLogoUrl?: string;
  cartUrl?: string;
  productUrl?: string;
  product1Url?: string;
  product2Url?: string;
  product3Url?: string;
  websiteUrl?: string;
  aboutText?: string;
  contactAddress?: string;
  contactEmail?: string;
  contactPhone?: string;
  facebookUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
}

export default function SunglassesEmailTemplate({
  cartUrl = "#",
  productUrl = "#",
  product1Url = "#",
  product2Url = "#",
  product3Url = "#",
  aboutText = "Lorem ipsum dolor sit amet, consec detur adipiscing elit.",
  contactAddress = "Your Street 123 City",
  contactEmail = "info@example.com",
  contactPhone = "(+1) 123 456 789",
  facebookUrl = "#",
  twitterUrl = "#",
  instagramUrl = "#",
}: SunglassesEmailProps) {
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
      <Preview>Your best is still waiting for you - Premium Sunglasses</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto w-full max-w-[600px] p-0">
            {/* Header Navigation */}
            <Section className="px-6 py-4 bg-white border-b border-gray-200">
              <Row>
                <Column className="w-1/4">
                  <Text className="m-0 font-normal text-sm text-black">
                    [Your Logo]
                  </Text>
                </Column>
                <Column className="w-1/2 text-center">
                  <div style={{ display: "inline-flex", alignItems: "center" }}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1658739855335-icon.png"
                      alt="Unlayer"
                      width="50"
                      height="50"
                      style={{ marginRight: "8px" }}
                      className="object-contain"
                    />
                    {/* <Text className="m-0 font-semibold text-lg text-gray-800">unlayer</Text> */}
                  </div>
                </Column>
                <Column className="w-1/4 text-right">
                  <Text className="m-0 font-normal text-sm text-gray-600">
                    Products
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Hero Section */}
            <Section className="px-8 py-14 text-center bg-black">
              {/* Shopping Cart Icon */}
              <div style={{ marginBottom: "32px" }}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1658739855335-icon.png"
                  alt="Shopping Cart"
                  width="70"
                  height="70"
                  style={{ margin: "0 auto" }}
                  className="object-contain"
                />
              </div>

              <Heading className="m-0 font-bold text-2xl text-white leading-tight tracking-wide">
                YOUR BEST IS STILL
                <br />
                <span style={{ fontWeight: "900" }}>WAITING FOR YOU...</span>
              </Heading>
            </Section>

            {/* Main Product Section */}
            <Section className="px-8 py-12 text-center bg-gray-50">
              {/* Main Sunglasses Image */}
              <div style={{ marginBottom: "32px" }}>
                <Link href={productUrl}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1658738799634-733660.png"
                    alt="Premium Aviator Sunglasses"
                    width="300"
                    height="200"
                    style={{ margin: "0 auto", display: "block" }}
                    className="object-contain"
                  />
                </Link>
              </div>

              <Heading className="m-0 mb-2 font-bold text-3xl text-gray-900 tracking-wide">
                SUNGLASSES
              </Heading>

              <Text className="mb-4 font-normal text-sm text-gray-600 italic">
                "Polarized Glasses"......Qty. 1
              </Text>

              <Text className="mb-8 mx-auto max-w-md font-normal text-sm text-gray-700 leading-6">
                Lorem ipsum dolor sit amet, Conseco teeter adip asking elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>

              <Link
                href={cartUrl}
                className="inline-block rounded-md bg-black px-8 py-4 font-bold text-sm text-white no-underline"
                style={{ textDecoration: "none" }}
              >
                Take Me to the Cart
              </Link>
            </Section>

            {/* Related Products Section */}
            <Section className="px-8 py-8 text-center bg-white">
              <Text className="mb-8 font-normal text-base text-gray-700 leading-6">
                I have a feeling you will also like some of my friends...
              </Text>

              <Row>
                <Column className="w-1/3 px-4">
                  <div style={{ marginBottom: "16px" }}>
                    <Link href={product1Url}>
                      <Img
                        src="https://cdn.templates.unlayer.com/assets/1658304211387-3.png"
                        alt="Orange Polarized Sunglasses"
                        width="120"
                        height="80"
                        style={{ margin: "0 auto", display: "block" }}
                        className="object-contain"
                      />
                    </Link>
                  </div>
                  <Heading className="m-0 mb-1 font-bold text-lg text-gray-900">
                    SUNGLASSES
                  </Heading>
                  <Text className="m-0 font-normal text-sm text-gray-600 italic">
                    polarized
                  </Text>
                </Column>

                <Column className="w-1/3 px-4">
                  <div style={{ marginBottom: "16px" }}>
                    <Link href={product2Url}>
                      <Img
                        src="https://cdn.templates.unlayer.com/assets/1658304219971-4.png"
                        alt="Gray Polarized Sunglasses"
                        width="120"
                        height="80"
                        style={{ margin: "0 auto", display: "block" }}
                        className="object-contain"
                      />
                    </Link>
                  </div>
                  <Heading className="m-0 mb-1 font-bold text-lg text-gray-900">
                    SUNGLASSES
                  </Heading>
                  <Text className="m-0 font-normal text-sm text-gray-600 italic">
                    polarized
                  </Text>
                </Column>

                <Column className="w-1/3 px-4">
                  <div style={{ marginBottom: "16px" }}>
                    <Link href={product3Url}>
                      <Img
                        src="https://cdn.templates.unlayer.com/assets/1658304228244-5.png"
                        alt="Blue Polarized Sunglasses"
                        width="120"
                        height="80"
                        style={{ margin: "0 auto", display: "block" }}
                        className="object-contain"
                      />
                    </Link>
                  </div>
                  <Heading className="m-0 mb-1 font-bold text-lg text-gray-900">
                    SUNGLASSES
                  </Heading>
                  <Text className="m-0 font-normal text-sm text-gray-600 italic">
                    polarized
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Footer Section */}
            <Section className="px-8 py-8 bg-black">
              <Row>
                <Column className="w-1/3">
                  <Text className="m-0 mb-4 font-normal text-lg text-gray-400">
                    [Your Logo]
                  </Text>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <Link href={facebookUrl}>
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/circle-white/facebook.png"
                        alt="Facebook"
                        width="36"
                        height="36"
                        style={{ borderRadius: "50%" }}
                        className="object-contain"
                      />
                    </Link>
                    <Link href={twitterUrl}>
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/circle-white/twitter.png"
                        alt="Twitter"
                        width="36"
                        height="36"
                        style={{ borderRadius: "50%" }}
                        className="object-contain"
                      />
                    </Link>
                    <Link href={instagramUrl}>
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/circle-white/instagram.png"
                        alt="Instagram"
                        width="36"
                        height="36"
                        style={{ borderRadius: "50%" }}
                        className="object-contain"
                      />
                    </Link>
                  </div>
                </Column>

                <Column className="w-1/3 px-4">
                  <Heading className="m-0 mb-3 font-bold text-lg text-white">
                    About Us
                  </Heading>
                  <Text className="m-0 font-normal text-sm text-gray-300 leading-5">
                    {aboutText}
                  </Text>
                </Column>

                <Column className="w-1/3">
                  <Heading className="m-0 mb-3 font-bold text-lg text-white">
                    Contact Us
                  </Heading>
                  <Text className="m-0 mb-1 font-normal text-sm text-gray-300">
                    {contactAddress}
                  </Text>
                  <Text className="m-0 mb-1 font-normal text-sm text-gray-300">
                    {contactEmail}
                  </Text>
                  <Text className="m-0 font-normal text-sm text-gray-300">
                    {contactPhone}
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Copyright Footer */}
            <Section className="px-8 py-4 text-center bg-black">
              <Text className="m-0 font-normal text-sm text-gray-400">
                2022 © All Rights Reserved
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

SunglassesEmailTemplate.PreviewProps = {
  logoUrl: "/placeholder.svg?height=40&width=120",
  cartIconUrl: "/placeholder.svg?height=80&width=80",
  mainSunglassesUrl: "/images/sunglasses-main.png",
  sunglasses1Url: "/placeholder.svg?height=80&width=120",
  sunglasses2Url: "/placeholder.svg?height=80&width=120",
  sunglasses3Url: "/placeholder.svg?height=80&width=120",
  unlayerLogoUrl: "/placeholder.svg?height=30&width=30",
  cartUrl: "https://example.com/cart",
  productUrl: "https://example.com/product",
  product1Url: "https://example.com/product1",
  product2Url: "https://example.com/product2",
  product3Url: "https://example.com/product3",
  websiteUrl: "example.com",
  aboutText: "Lorem ipsum dolor sit amet, consec detur adipiscing elit.",
  contactAddress: "Your Street 123 City",
  contactEmail: "info@example.com",
  contactPhone: "(+1) 123 456 789",
  facebookUrl: "https://facebook.com",
  twitterUrl: "https://twitter.com",
  instagramUrl: "https://instagram.com",
} satisfies SunglassesEmailProps;
