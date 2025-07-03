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

interface PromotionalSaleEmailProps {
  logoUrl?: string
  couponCode?: string
  couponUrl?: string
  product1ImageUrl?: string
  product2ImageUrl?: string
  product3ImageUrl?: string
  product1Name?: string
  product2Name?: string
  product3Name?: string
  product1Url?: string
  product2Url?: string
  product3Url?: string
  facebookUrl?: string
  twitterUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
  companyAddress?: string
  unsubscribeUrl?: string
  preferencesUrl?: string
  viewInBrowserUrl?: string
}

export default function PromotionalSale({
  couponCode = "COUPON Desishub",
  couponUrl = "#",
  product1Name = "Product Name",
  product2Name = "Product Name",
  product3Name = "Product Name",
  product1Url = "#",
  product2Url = "#",
  product3Url = "#",
  facebookUrl = "#",
  twitterUrl = "#",
  linkedinUrl = "#",
  instagramUrl = "#",
  companyAddress = "2261 Market Street #4667 San Francisco, CA 94114, All rights reserved - Company No: 94114",
  unsubscribeUrl = "#",
  preferencesUrl = "#",
  viewInBrowserUrl = "#",
}: PromotionalSaleEmailProps) {
  return (
    <Html>
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        `}</style>
      </Head>
      <Preview>Time is Running Out! Limited Time Offer - Don't Miss Out!</Preview>
      <Tailwind>
        <Body className="bg-black" style={{ fontFamily: "DM Sans, sans-serif" }}>
          <Container className="mx-auto w-full max-w-[600px] bg-black">
            {/* Header with Logo */}
            <Section className="px-6 py-8 text-center">
              <Text className="m-0 text-white text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>
                [Your Logo]
              </Text>
            </Section>

            {/* Main Headline Section */}
            <Section className="px-6 py-8 text-center">
              <Heading className="m-0 mb-2 font-bold text-2xl text-white" style={{ fontFamily: "DM Sans, sans-serif" }}>
                TIME IS
              </Heading>
              <Heading className="m-0 mb-8 font-bold text-3xl text-white" style={{ fontFamily: "DM Sans, sans-serif" }}>
                RUNNING OUT!
              </Heading>
              <Text
                className="m-0 mb-8 text-sm text-gray-300 leading-6 max-w-md mx-auto"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              </Text>

              {/* Countdown Timer */}
              <div className="mb-8">
                <img src="https://countdown.unlayer.com/generate/bxaEKGFpNapx" alt=""
                className="w-full max-w-[300px] mx-auto" style={{ display: "block" }} />
                
              </div>

              <Text className="m-0 mb-6 text-sm text-white" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Here is a coupon code just for you!
              </Text>

              <Link
                href={couponUrl}
                className="inline-block bg-red-600 px-8 py-3 font-semibold text-white no-underline hover:bg-red-700"
                style={{
                  textDecoration: "none",
                  fontFamily: "DM Sans, sans-serif",
                  borderRadius: "4px",
                }}
              >
                {couponCode}
              </Link>
            </Section>

            {/* Divider Line */}
            <Section className="px-6 py-4">
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#374151",
                  margin: "0 auto",
                }}
              />
            </Section>

            {/* New Arrivals Section */}
            <Section className="px-6 py-8 text-center">
              <Text className="m-0 mb-2 text-sm text-gray-400" style={{ fontFamily: "DM Sans, sans-serif" }}>
                The Best Product
              </Text>
              <Heading
                className="m-0 mb-8 font-bold text-xl text-white tracking-wide"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                NEW ARRIVALS
              </Heading>

           
              {/* Product Grid */}
              <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                {/* Product 1 */}
                <div style={{ flex: "1", minWidth: "150px", textAlign: "center" }}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1658407032216-3.png"
                    alt={product1Name}
                    width="150"
                    height="200"
                    style={{ display: "block", margin: "0 auto 16px auto", maxWidth: "100%" }}
                  />
                  <Heading
                    className="m-0 mb-2 font-semibold text-sm text-white"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {product1Name}
                  </Heading>
                  <Text
                    className="m-0 mb-4 text-xs text-gray-400 leading-5"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    This is a new Text block, Change the text
                  </Text>
                  <Link
                    href={product1Url}
                    className="inline-block bg-red-600 px-4 py-2 text-xs font-semibold text-white no-underline hover:bg-red-700"
                    style={{
                      textDecoration: "none",
                      fontFamily: "DM Sans, sans-serif",
                      borderRadius: "4px",
                    }}
                  >
                    Add to cart
                  </Link>
                </div>

                {/* Product 2 */}
                <div style={{ flex: "1", minWidth: "150px", textAlign: "center" }}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1658407047973-2.png"
                    alt={product2Name}
                    width="150"
                    height="200"
                    style={{ display: "block", margin: "0 auto 16px auto", maxWidth: "100%" }}
                  />
                  <Heading
                    className="m-0 mb-2 font-semibold text-sm text-white"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {product2Name}
                  </Heading>
                  <Text
                    className="m-0 mb-4 text-xs text-gray-400 leading-5"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    This is a new Text block, Change the text
                  </Text>
                  <Link
                    href={product2Url}
                    className="inline-block bg-red-600 px-4 py-2 text-xs font-semibold text-white no-underline hover:bg-red-700"
                    style={{
                      textDecoration: "none",
                      fontFamily: "DM Sans, sans-serif",
                      borderRadius: "4px",
                    }}
                  >
                    Add to cart
                  </Link>
                </div>

                {/* Product 3 */}
                <div style={{ flex: "1", minWidth: "150px", textAlign: "center" }}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1658407051971-1.png"
                    alt={product3Name}
                    width="150"
                    height="200"
                    style={{ display: "block", margin: "0 auto 16px auto", maxWidth: "100%" }}
                  />
                  <Heading
                    className="m-0 mb-2 font-semibold text-sm text-white"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {product3Name}
                  </Heading>
                  <Text
                    className="m-0 mb-4 text-xs text-gray-400 leading-5"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    This is a new Text block, Change the text
                  </Text>
                  <Link
                    href={product3Url}
                    className="inline-block bg-red-600 px-4 py-2 text-xs font-semibold text-white no-underline hover:bg-red-700"
                    style={{
                      textDecoration: "none",
                      fontFamily: "DM Sans, sans-serif",
                      borderRadius: "4px",
                    }}
                  >
                    Add to cart
                  </Link>
                </div>
              </div>
            </Section>

            {/* Footer */}
            <Section className="px-6 py-8 text-center">
              {/* Social Media Icons */}
              <div className="mb-6">
              <div>
                <div className="mx-auto  mb-4">
                  <a href="#">
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                      alt="Twitter"
                      className="w-6 h-6 ml-3"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/skype.png"
                      alt="LinkedIn"
                      className="w-6 h-6 ml-3"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                      alt="Instagram"
                      className="w-6 h-6 ml-3"
                    />
                  </a>
                </div>
              </div>
              </div>

              <Text className="m-0 mb-4 text-xs text-gray-400 leading-5" style={{ fontFamily: "DM Sans, sans-serif" }}>
                {companyAddress}
              </Text>

              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
                <Link
                  href={preferencesUrl}
                  className="text-xs text-gray-400 no-underline"
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    textDecoration: "none",
                    flex: "1",
                    minWidth: "80px",
                    textAlign: "center",
                  }}
                >
                  Preferences
                </Link>
                <Text className="m-0 text-xs text-gray-400" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  |
                </Text>
                <Link
                  href={unsubscribeUrl}
                  className="text-xs text-gray-400 no-underline"
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    textDecoration: "none",
                    flex: "1",
                    minWidth: "80px",
                    textAlign: "center",
                  }}
                >
                  Unsubscribe
                </Link>
                <Text className="m-0 text-xs text-gray-400" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  |
                </Text>
                <Link
                  href={viewInBrowserUrl}
                  className="text-xs text-gray-400 no-underline"
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    textDecoration: "none",
                    flex: "1",
                    minWidth: "100px",
                    textAlign: "center",
                  }}
                >
                  View in browser
                </Link>
              </div>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

PromotionalSale.PreviewProps = {
  logoUrl: "/placeholder.svg?height=40&width=120",
  couponCode: "COUPON DESISHUB",
  couponUrl: "https://example.com/coupon",
  product1Name: "Red Floral Dress",
  product2Name: "Red Pattern Dress",
  product3Name: "Red Summer Dress",
  product1Url: "https://example.com/product1",
  product2Url: "https://example.com/product2",
  product3Url: "https://example.com/product3",
  facebookUrl: "https://facebook.com/example",
  twitterUrl: "https://twitter.com/example",
  linkedinUrl: "https://linkedin.com/company/example",
  instagramUrl: "https://instagram.com/example",
  companyAddress: "2261 Market Street #4667 San Francisco, CA 94114, All rights reserved - Company No: 94114",
  unsubscribeUrl: "https://example.com/unsubscribe",
  preferencesUrl: "https://example.com/preferences",
  viewInBrowserUrl: "https://example.com/view-in-browser",
} satisfies PromotionalSaleEmailProps
