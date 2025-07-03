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

interface FashionEmailProps {
  viewOnlineUrl?: string
  manUrl?: string
  womanUrl?: string
  shirtUrl?: string
  contactUrl?: string
  buyNowUrl?: string
  heroImageUrl?: string
  newFashionImageUrl?: string
  fashionImage2Url?: string
  fashionImage3Url?: string
  product1ImageUrl?: string
  product2ImageUrl?: string
  product3ImageUrl?: string
  product4ImageUrl?: string
  product1Url?: string
  product2Url?: string
  product3Url?: string
  product4Url?: string
  megaSaleImageUrl?: string
  facebookUrl?: string
  twitterUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
}

export default function FashionEmail({
  viewOnlineUrl = "#",
  manUrl = "#",
  womanUrl = "#",
  shirtUrl = "#",
  contactUrl = "#",
  buyNowUrl = "#",
  product1Url = "#",
  product2Url = "#",
  product3Url = "#",
  product4Url = "#",
  facebookUrl = "#",
  twitterUrl = "#",
  linkedinUrl = "#",
  instagramUrl = "#",
}: FashionEmailProps) {
  return (
    <Html>
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        `}</style>
      </Head>
      <Preview>Best Fashion Offer - 50% Off Everything!</Preview>
      <Tailwind>
        <Body className="bg-purple-200" style={{ fontFamily: "DM Sans, sans-serif" }}>
          <Container className="mx-auto w-full max-w-[600px]">
            {/* Header */}
            <Section className="px-4 py-2 text-center" style={{ backgroundColor: "#c084a1" }}>
              <Link
                href={viewOnlineUrl}
                className="text-white text-xs no-underline"
                style={{ fontFamily: "DM Sans, sans-serif", textDecoration: "none" }}
              >
                View Online
              </Link>
            </Section>

            {/* Navigation */}
            <Section className="px-0 py-0" style={{ backgroundColor: "#8b5a7a" }}>
              <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                <tr>
                  <td style={{ width: "25%", textAlign: "center", padding: "12px 8px" }}>
                    <Link
                      href={manUrl}
                      className="text-white text-sm font-medium no-underline"
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                        textDecoration: "none",
                        display: "block",
                      }}
                    >
                      MAN
                    </Link>
                  </td>
                  <td style={{ width: "25%", textAlign: "center", padding: "12px 8px" }}>
                    <Link
                      href={womanUrl}
                      className="text-white text-sm font-medium no-underline"
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                        textDecoration: "none",
                        display: "block",
                      }}
                    >
                      WOMAN
                    </Link>
                  </td>
                  <td style={{ width: "25%", textAlign: "center", padding: "12px 8px" }}>
                    <Link
                      href={shirtUrl}
                      className="text-white text-sm font-medium no-underline"
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                        textDecoration: "none",
                        display: "block",
                      }}
                    >
                      SHIRT
                    </Link>
                  </td>
                  <td style={{ width: "25%", textAlign: "center", padding: "12px 8px" }}>
                    <Link
                      href={contactUrl}
                      className="text-white text-sm font-medium no-underline"
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                        textDecoration: "none",
                        display: "block",
                      }}
                    >
                      CONTACT
                    </Link>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Hero Section */}
            <Section className="px-0 py-0 bg-gray-200 bg-[url('https://cdn.templates.unlayer.com/assets/1638203702787-fl22.jpg')] bg- bg-no-repeat bg-right">
              <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                <tr>
                  <td style={{ width: "60%", padding: "32px 24px", textAlign: "center" }}>
                    <Heading
                      className="m-0 mb-2 font-bold text-3xl"
                      style={{ fontFamily: "DM Sans, sans-serif", color: "black", textAlign: "center" }}
                    >
                      BEST OFFER
                    </Heading>
                    <Heading
                      className="m-0 mb-6 font-bold text-4xl"
                      style={{ fontFamily: "DM Sans, sans-serif", color: "black", textAlign: "center" }}
                    >
                      50% off
                    </Heading>
                    <Text
                      className="m-0 mb-8 text-sm text-gray-800 leading-6 font-semibold"
                      style={{ fontFamily: "DM Sans, sans-serif", textAlign: "center" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </Text>
                    <div style={{ textAlign: "center" }}>
                      <Link
                        href={buyNowUrl}
                        className="inline-block bg-red-700 px-8 py-3 font-semibold text-white no-underline hover:bg-red-800"
                        style={{
                          textDecoration: "none",
                          fontFamily: "DM Sans, sans-serif",
                          borderRadius: "4px",
                          display: "inline-block",
                        }}
                      >
                        BUY NOW
                      </Link>
                    </div>
                  </td>
                  <td style={{ width: "40%" }}>
                    {/* Space for background image */}
                  </td>
                </tr>
              </table>
            </Section>

            {/* New Fashion Section */}
            <Section className="px-0 py-0">
              <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                <tr>
                  <td style={{ width: "50%", backgroundColor: "#8b6f47", padding: "24px", textAlign: "center" }}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1638204872176-W.jpg"
                      alt="New Fashion"
                      width="180"
                      height="200"
                      className="object-cover rounded"
                      style={{ display: "block", margin: "0 auto 16px auto", maxWidth: "100%" }}
                    />
                    <Heading className="m-0 font-bold text-xl text-white" style={{ fontFamily: "DM Sans, sans-serif", textAlign: "center" }}>
                      NEW FASHION
                    </Heading>
                    <Heading className="m-0 font-bold text-xl text-white" style={{ fontFamily: "DM Sans, sans-serif", textAlign: "center" }}>
                      MEGA SALE
                    </Heading>
                  </td>
                  <td style={{ width: "50%", backgroundColor: "#8b6f47", padding: "24px", textAlign: "center" }}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1638204890982-ML1.jpg"
                      alt="New Fashion"
                      width="180"
                      height="200"
                      className="object-cover rounded"
                      style={{ display: "block", margin: "0 auto 16px auto", maxWidth: "100%" }}
                    />
                    <Heading className="m-0 font-bold text-xl text-white" style={{ fontFamily: "DM Sans, sans-serif", textAlign: "center" }}>
                      NEW FASHION
                    </Heading>
                    <Heading className="m-0 font-bold text-xl text-white" style={{ fontFamily: "DM Sans, sans-serif", textAlign: "center" }}>
                      MEGA SALE
                    </Heading>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Our Products Section */}
            <Section className="px-6 py-8 bg-white">
              <Heading
                className="m-0 mb-8 font-bold text-2xl text-center"
                style={{ fontFamily: "DM Sans, sans-serif", color: "#dc2626", textAlign: "center" }}
              >
                OUR <span style={{ color: "#000" }}>PRODUCTS</span>
              </Heading>

              {/* Products Grid Row 1 */}
              <table width="100%" cellPadding="12" cellSpacing="0" style={{ borderCollapse: "collapse", marginBottom: "32px" }}>
                <tr>
                  <td style={{ width: "50%", textAlign: "center", verticalAlign: "top" }}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1638257866065-m11.jpg"
                      alt="Product 1"
                      width="180"
                      height="200"
                      style={{ display: "block", margin: "0 auto 16px auto", maxWidth: "100%" }}
                    />
                    <Heading
                      className="m-0 mb-2 font-semibold text-lg text-gray-900"
                      style={{ fontFamily: "DM Sans, sans-serif", textAlign: "center" }}
                    >
                      Product Name Here
                    </Heading>
                    <Text
                      className="m-0 mb-4 text-sm text-gray-600 leading-5"
                      style={{ fontFamily: "DM Sans, sans-serif", textAlign: "center" }}
                    >
                      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </Text>
                    <Text
                      className="m-0 mb-4 font-bold text-lg"
                      style={{ fontFamily: "DM Sans, sans-serif", color: "#dc2626", textAlign: "center" }}
                    >
                      $250
                    </Text>
                    <div style={{ textAlign: "center" }}>
                      <Link
                        href={product1Url}
                        className="text-purple-600 text-sm no-underline"
                        style={{ fontFamily: "DM Sans, sans-serif", textDecoration: "none" }}
                      >
                        Buy Now +
                      </Link>
                    </div>
                  </td>
                  <td style={{ width: "50%", textAlign: "center", verticalAlign: "top" }}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1638257886571-m22.jpg"
                      alt="Product 2"
                      width="180"
                      height="200"
                      style={{ display: "block", margin: "0 auto 16px auto", maxWidth: "100%" }}
                    />
                    <Heading
                      className="m-0 mb-2 font-semibold text-lg text-gray-900"
                      style={{ fontFamily: "DM Sans, sans-serif", textAlign: "center" }}
                    >
                      Product Name Here
                    </Heading>
                    <Text
                      className="m-0 mb-4 text-sm text-gray-600 leading-5"
                      style={{ fontFamily: "DM Sans, sans-serif", textAlign: "center" }}
                    >
                      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </Text>
                    <Text
                      className="m-0 mb-4 font-bold text-lg"
                      style={{ fontFamily: "DM Sans, sans-serif", color: "#dc2626", textAlign: "center" }}
                    >
                      $250
                    </Text>
                    <div style={{ textAlign: "center" }}>
                      <Link
                        href={product2Url}
                        className="text-purple-600 text-sm no-underline"
                        style={{ fontFamily: "DM Sans, sans-serif", textDecoration: "none" }}
                      >
                        Buy Now +
                      </Link>
                    </div>
                  </td>
                </tr>
              </table>

              {/* Products Grid Row 2 */}
              <table width="100%" cellPadding="12" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                <tr>
                  <td style={{ width: "50%", textAlign: "center", verticalAlign: "top" }}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1638258678465-man2.jpg"
                      alt="Product 3"
                      width="180"
                      height="200"
                      style={{ display: "block", margin: "0 auto 16px auto", maxWidth: "100%" }}
                    />
                    <Heading
                      className="m-0 mb-2 font-semibold text-lg text-gray-900"
                      style={{ fontFamily: "DM Sans, sans-serif", textAlign: "center" }}
                    >
                      Product Name Here
                    </Heading>
                    <Text
                      className="m-0 mb-4 text-sm text-gray-600 leading-5"
                      style={{ fontFamily: "DM Sans, sans-serif", textAlign: "center" }}
                    >
                      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </Text>
                    <Text
                      className="m-0 mb-4 font-bold text-lg"
                      style={{ fontFamily: "DM Sans, sans-serif", color: "#dc2626", textAlign: "center" }}
                    >
                      $250
                    </Text>
                    <div style={{ textAlign: "center" }}>
                      <Link
                        href={product3Url}
                        className="text-purple-600 text-sm no-underline"
                        style={{ fontFamily: "DM Sans, sans-serif", textDecoration: "none" }}
                      >
                        Buy Now +
                      </Link>
                    </div>
                  </td>
                  <td style={{ width: "50%", textAlign: "center", verticalAlign: "top" }}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1638258692193-w2.jpg"
                      alt="Product 4"
                      width="180"
                      height="200"
                      style={{ display: "block", margin: "0 auto 16px auto", maxWidth: "100%" }}
                    />
                    <Heading
                      className="m-0 mb-2 font-semibold text-lg text-gray-900"
                      style={{ fontFamily: "DM Sans, sans-serif", textAlign: "center" }}
                    >
                      Product Name Here
                    </Heading>
                    <Text
                      className="m-0 mb-4 text-sm text-gray-600 leading-5"
                      style={{ fontFamily: "DM Sans, sans-serif", textAlign: "center" }}
                    >
                      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </Text>
                    <Text
                      className="m-0 mb-4 font-bold text-lg"
                      style={{ fontFamily: "DM Sans, sans-serif", color: "#dc2626", textAlign: "center" }}
                    >
                      $250
                    </Text>
                    <div style={{ textAlign: "center" }}>
                      <Link
                        href={product4Url}
                        className="text-purple-600 text-sm no-underline"
                        style={{ fontFamily: "DM Sans, sans-serif", textDecoration: "none" }}
                      >
                        Buy Now +
                      </Link>
                    </div>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Mega Sale Section */}
            <Section className="px-0 py-0">
              <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                <tr>
                  <td style={{ width: "50%", backgroundColor: "#ed008c", padding: "32px 24px", textAlign: "center", verticalAlign: "middle" }}>
                    <Heading
                      className="m-0 mb-6 font-bold text-3xl text-white"
                      style={{ fontFamily: "DM Sans, sans-serif", textAlign: "center" }}
                    >
                      MEGA SALE
                    </Heading>
                    <Text className="m-0 mb-6 text-sm text-white" style={{ fontFamily: "DM Sans, sans-serif", textAlign: "center" }}>
                      ENDING ON
                    </Text>

                    {/* Countdown Timer */}
                    <table width="100%" cellPadding="4" cellSpacing="0" style={{ borderCollapse: "collapse", maxWidth: "200px", margin: "0 auto" }}>
                      <tr>
                        <td style={{ textAlign: "center", width: "30%" }}>
                          <Text
                            className="m-0 mb-1 font-bold text-2xl text-white"
                            style={{ fontFamily: "DM Sans, sans-serif", textAlign: "center" }}
                          >
                            00
                          </Text>
                          <Text className="m-0 text-xs text-white" style={{ fontFamily: "DM Sans, sans-serif", textAlign: "center" }}>
                            Hours
                          </Text>
                        </td>
                        <td style={{ textAlign: "center", width: "10%" }}>
                          <Text className="m-0 font-bold text-xl text-white" style={{ fontFamily: "DM Sans, sans-serif", textAlign: "center" }}>
                            :
                          </Text>
                        </td>
                        <td style={{ textAlign: "center", width: "30%" }}>
                          <Text
                            className="m-0 mb-1 font-bold text-2xl text-white"
                            style={{ fontFamily: "DM Sans, sans-serif", textAlign: "center" }}
                          >
                            00
                          </Text>
                          <Text className="m-0 text-xs text-white" style={{ fontFamily: "DM Sans, sans-serif", textAlign: "center" }}>
                            Minutes
                          </Text>
                        </td>
                        <td style={{ textAlign: "center", width: "10%" }}>
                          <Text className="m-0 font-bold text-xl text-white" style={{ fontFamily: "DM Sans, sans-serif", textAlign: "center" }}>
                            :
                          </Text>
                        </td>
                        <td style={{ textAlign: "center", width: "30%" }}>
                          <Text
                            className="m-0 mb-1 font-bold text-2xl text-white"
                            style={{ fontFamily: "DM Sans, sans-serif", textAlign: "center" }}
                          >
                            00
                          </Text>
                          <Text className="m-0 text-xs text-white" style={{ fontFamily: "DM Sans, sans-serif", textAlign: "center" }}>
                            Seconds
                          </Text>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td style={{ width: "50%", backgroundColor: "#f59e0b", textAlign: "center" }}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1638261858954-fas.jpg"
                      alt="Mega Sale Model"
                      width="250"
                      height="300"
                      style={{ display: "block", width: "100%", maxWidth: "100%" }}
                    />
                  </td>
                </tr>
              </table>
            </Section>

            {/* Footer */}
            <Section className="px-6 py-8 text-center" style={{ backgroundColor: "#8b5a7a" }}>
              {/* Social Media Icons */}
              <div style={{ textAlign: "center", marginBottom: "24px" }}>
                <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                  <tr>
                    <td style={{ padding: "0 6px" }}>
                      <a href={linkedinUrl}>
                        <img
                          src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                          alt="LinkedIn"
                          width="24"
                          height="24"
                          style={{ display: "block" }}
                        />
                      </a>
                    </td>
                    <td style={{ padding: "0 6px" }}>
                      <a href={twitterUrl}>
                        <img
                          src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                          alt="Twitter"
                          width="24"
                          height="24"
                          style={{ display: "block" }}
                        />
                      </a>
                    </td>
                    <td style={{ padding: "0 6px" }}>
                      <a href={facebookUrl}>
                        <img
                          src="https://cdn.tools.unlayer.com/social/icons/rounded/skype.png"
                          alt="Skype"
                          width="24"
                          height="24"
                          style={{ display: "block" }}
                        />
                      </a>
                    </td>
                    <td style={{ padding: "0 6px" }}>
                      <a href={instagramUrl}>
                        <img
                          src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                          alt="Instagram"
                          width="24"
                          height="24"
                          style={{ display: "block" }}
                        />
                      </a>
                    </td>
                  </tr>
                </table>
              </div>

              <Text className="m-0 mb-6 text-sm text-white leading-6" style={{ fontFamily: "DM Sans, sans-serif", textAlign: "center" }}>
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                incididunt ut labore et dolore magna aliqua
              </Text>

              <table width="100%" cellPadding="8" cellSpacing="0" style={{ borderCollapse: "collapse", marginBottom: "16px" }}>
                <tr>
                  <td style={{ width: "25%", textAlign: "center" }}>
                    <Link
                      href={manUrl}
                      className="text-white text-sm no-underline"
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                        textDecoration: "none",
                      }}
                    >
                      MAN
                    </Link>
                  </td>
                  <td style={{ width: "25%", textAlign: "center" }}>
                    <Link
                      href={womanUrl}
                      className="text-white text-sm no-underline"
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                        textDecoration: "none",
                      }}
                    >
                      WOMAN
                    </Link>
                  </td>
                  <td style={{ width: "25%", textAlign: "center" }}>
                    <Link
                      href={shirtUrl}
                      className="text-white text-sm no-underline"
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                        textDecoration: "none",
                      }}
                    >
                      SHIRT
                    </Link>
                  </td>
                  <td style={{ width: "25%", textAlign: "center" }}>
                    <Link
                      href={contactUrl}
                      className="text-white text-sm no-underline"
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                        textDecoration: "none",
                      }}
                    >
                      CONTACT
                    </Link>
                  </td>
                </tr>
              </table>

              <Text className="m-0 text-xs text-purple-200" style={{ fontFamily: "DM Sans, sans-serif", textAlign: "center" }}>
                © 2024 All rights reserved Unlayer.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

FashionEmail.PreviewProps = {
  viewOnlineUrl: "https://example.com/view-online",
  manUrl: "https://example.com/men",
  womanUrl: "https://example.com/women",
  shirtUrl: "https://example.com/shirts",
  contactUrl: "https://example.com/contact",
  buyNowUrl: "https://example.com/buy-now",
  heroImageUrl: "/placeholder.svg?height=300&width=250",
  newFashionImageUrl: "/placeholder.svg?height=200&width=180",
  fashionImage2Url: "/placeholder.svg?height=150&width=150",
  fashionImage3Url: "/placeholder.svg?height=150&width=150",
  product1ImageUrl: "/placeholder.svg?height=200&width=180",
  product2ImageUrl: "/placeholder.svg?height=200&width=180",
  product3ImageUrl: "/placeholder.svg?height=200&width=180",
  product4ImageUrl: "/placeholder.svg?height=200&width=180",
  product1Url: "https://example.com/product1",
  product2Url: "https://example.com/product2",
  product3Url: "https://example.com/product3",
  product4Url: "https://example.com/product4",
  megaSaleImageUrl: "/placeholder.svg?height=200&width=150",
  facebookUrl: "https://facebook.com/example",
  twitterUrl: "https://twitter.com/example",
  linkedinUrl: "https://linkedin.com/company/example",
  instagramUrl: "https://instagram.com/example",
} satisfies FashionEmailProps