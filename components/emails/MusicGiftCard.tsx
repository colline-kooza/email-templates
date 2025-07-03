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

interface MusicGiftCardEmailProps {
  logoUrl?: string
  buyNowUrl?: string
  phoneImageUrl?: string
  musicGiftCardUrl?: string
  movieGiftCardUrl?: string
  clipsGiftCardUrl?: string
  facebookUrl?: string
  twitterUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
  companyAddress?: string
  unsubscribeUrl?: string
  preferencesUrl?: string
  viewInBrowserUrl?: string
}

export default function MusicGiftCard({
  logoUrl = "/placeholder.svg?height=40&width=120",
  buyNowUrl = "#",
  phoneImageUrl = "/placeholder.svg?height=300&width=400",
  musicGiftCardUrl = "#",
  movieGiftCardUrl = "#",
  clipsGiftCardUrl = "#",
  facebookUrl = "#",
  twitterUrl = "#",
  linkedinUrl = "#",
  instagramUrl = "#",
  companyAddress = "2261 Market Street #4667 San Francisco, CA 94114",
  unsubscribeUrl = "#",
  preferencesUrl = "#",
  viewInBrowserUrl = "#",
}: MusicGiftCardEmailProps) {
  return (
    <Html>
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        `}</style>
      </Head>
      <Preview>Music E-Gift Card - Perfect Gift for Music Lovers</Preview>
      <Tailwind>
        <Body className="bg-gray-100" style={{ fontFamily: "DM Sans, sans-serif" }}>
          <Container className="mx-auto w-full max-w-[600px] bg-white">
            {/* Header with Logo */}
            <Section className="px-6 py-8 text-center">
              <Text className="m-0 text-gray-600 text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>
                [Your Logo]
              </Text>
            </Section>

            {/* Main Headline Section */}
            <Section className="px-6 py-8 text-center">
              <Heading
                className="m-0 mb-6 font-bold text-3xl text-gray-900"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Music E-Gift Card
              </Heading>
              <Text
                className="m-0 mb-8 text-sm text-gray-600 leading-6 max-w-md mx-auto"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
              </Text>

              <Link
                href={buyNowUrl}
                className="inline-block bg-purple-600 px-8 py-3 font-semibold text-white no-underline hover:bg-purple-700"
                style={{
                  textDecoration: "none",
                  fontFamily: "DM Sans, sans-serif",
                  borderRadius: "25px",
                }}
              >
                Buy Now
              </Link>
            </Section>

            {/* Phone Mockups Section */}
            <Section className="px-6 py-8 text-center">
              <Img
                src="https://cdn.templates.unlayer.com/assets/1665655320030-music%20header.png"
                alt="Music App on Phone Mockups"
                width="400"
                height="300"
                style={{
                  display: "block",
                  margin: "0 auto",
                  maxWidth: "100%",
                }}
              />
            </Section>

            {/* E-Gift Card Section */}
            <Section className="px-6 py-8 text-center">
              <Heading
                className="m-0 mb-4 font-bold text-2xl text-gray-900"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                E-Gift Card
              </Heading>
              <Text className="m-0 mb-8 text-sm text-gray-600" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Apps, Games, Music, Movies, TV shows, Books, and more
              </Text>

              {/* Gift Cards Grid - Centered */}
              <div style={{ textAlign: "center" }}>
                <div style={{ display: "inline-block", margin: "0 auto" }}>
                  <div style={{ display: "inline-block", margin: "0 8px 24px 8px", textAlign: "center", verticalAlign: "top", width: "160px" }}>
                    <div
                      className="bg-[url('https://cdn.templates.unlayer.com/assets/1665657704297-Asset%201.png')] bg-contain bg-no-repeat bg-center"
                      style={{
                        borderRadius: "12px",
                        padding: "0px 0px",
                        marginBottom: "16px",
                        color: "white",
                        height: "120px",
                        width: "100%",
                      }}
                    >
                    </div>
                    <Heading
                      className="m-0 mb-1 font-semibold text-sm text-gray-900"
                      style={{ fontFamily: "DM Sans, sans-serif" }}
                    >
                      Music Gift Card 10$
                    </Heading>
                    <Text className="m-0 mb-4 text-xs text-gray-500" style={{ fontFamily: "DM Sans, sans-serif" }}>
                      Email Delivery
                    </Text>
                    <Link
                      href={musicGiftCardUrl}
                      className="inline-block bg-purple-600 px-6 py-2 text-xs font-semibold text-white no-underline hover:bg-purple-700"
                      style={{
                        textDecoration: "none",
                        fontFamily: "DM Sans, sans-serif",
                        borderRadius: "20px",
                      }}
                    >
                      Buy Now
                    </Link>
                  </div>

                  <div style={{ display: "inline-block", margin: "0 8px 24px 8px", textAlign: "center", verticalAlign: "top", width: "160px" }}>
                    <div
                      className="bg-[url('https://cdn.templates.unlayer.com/assets/1665657706289-Asset%202.png')] bg-contain bg-no-repeat bg-center"
                      style={{
                        borderRadius: "12px",
                        padding: "0px 0px",
                        marginBottom: "16px",
                        color: "white",
                        height: "120px",
                        width: "100%",
                      }}
                    >
                    </div>
                    <Heading
                      className="m-0 mb-1 font-semibold text-sm text-gray-900"
                      style={{ fontFamily: "DM Sans, sans-serif" }}
                    >
                      Movie Gift Card 25$
                    </Heading>
                    <Text className="m-0 mb-4 text-xs text-gray-500" style={{ fontFamily: "DM Sans, sans-serif" }}>
                      Email Delivery
                    </Text>
                    <Link
                      href={movieGiftCardUrl}
                      className="inline-block bg-purple-600 px-6 py-2 text-xs font-semibold text-white no-underline hover:bg-purple-700"
                      style={{
                        textDecoration: "none",
                        fontFamily: "DM Sans, sans-serif",
                        borderRadius: "20px",
                      }}
                    >
                      Buy Now
                    </Link>
                  </div>

                  <div style={{ display: "inline-block", margin: "0 8px 24px 8px", textAlign: "center", verticalAlign: "top", width: "160px" }}>
                    <div
                      className="bg-[url('https://cdn.templates.unlayer.com/assets/1665657708888-Asset%203.png')] bg-contain bg-no-repeat bg-center"
                      style={{
                        borderRadius: "12px",
                        padding: "0px 0px",
                        marginBottom: "16px",
                        color: "white",
                        height: "120px",
                        width: "100%",
                      }}
                    >
                    </div>
                    <Heading
                      className="m-0 mb-1 font-semibold text-sm text-gray-900"
                      style={{ fontFamily: "DM Sans, sans-serif" }}
                    >
                      Clips Gift Card 100$
                    </Heading>
                    <Text className="m-0 mb-4 text-xs text-gray-500" style={{ fontFamily: "DM Sans, sans-serif" }}>
                      Email Delivery
                    </Text>
                    <Link
                      href={clipsGiftCardUrl}
                      className="inline-block bg-purple-600 px-6 py-2 text-xs font-semibold text-white no-underline hover:bg-purple-700"
                      style={{
                        textDecoration: "none",
                        fontFamily: "DM Sans, sans-serif",
                        borderRadius: "20px",
                      }}
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </Section>

            {/* Footer */}
            <Section className="px-6 py-8 text-center bg-gray-900">
              {/* Social Media Icons */}
              <div style={{ textAlign: "center", marginBottom: "16px" }}>
                <div style={{ display: "inline-block" }}>
                  <Link 
                    href={facebookUrl}
                    style={{ 
                      display: "inline-block", 
                      margin: "0 6px"
                    }}
                  >
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/circle-white/facebook.png"
                      alt="Facebook"
                      width="36"
                      height="36"
                      style={{ borderRadius: "50%", display: "block" }}
                    />
                  </Link>
                  <Link 
                    href={twitterUrl}
                    style={{ 
                      display: "inline-block", 
                      margin: "0 6px"
                    }}
                  >
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/circle-white/twitter.png"
                      alt="Twitter"
                      width="36"
                      height="36"
                      style={{ borderRadius: "50%", display: "block" }}
                    />
                  </Link>
                  <Link 
                    href={instagramUrl}
                    style={{ 
                      display: "inline-block", 
                      margin: "0 6px"
                    }}
                  >
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/circle-white/instagram.png"
                      alt="Instagram"
                      width="36"
                      height="36"
                      style={{ borderRadius: "50%", display: "block" }}
                    />
                  </Link>
                </div>
              </div>

              <Text className="m-0 mb-4 text-xs text-gray-50 leading-5" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </Text>

              <Text className="m-0 mb-4 text-xs text-gray-50" style={{ fontFamily: "DM Sans, sans-serif" }}>
                {companyAddress}
              </Text>

              {/* Footer Links - Centered */}
              <div style={{ textAlign: "center" }}>
                <div style={{ display: "inline-block" }}>
                  <Link
                    href={preferencesUrl}
                    className="text-xs text-gray-50 no-underline"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      textDecoration: "none",
                      display: "inline-block",
                      margin: "0 8px",
                    }}
                  >
                    Preferences
                  </Link>
                  <Text 
                    className="m-0 text-xs text-gray-500" 
                    style={{ 
                      fontFamily: "DM Sans, sans-serif",
                      display: "inline-block",
                      margin: "0 4px"
                    }}
                  >
                    |
                  </Text>
                  <Link
                    href={unsubscribeUrl}
                    className="text-xs text-gray-50 no-underline"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      textDecoration: "none",
                      display: "inline-block",
                      margin: "0 8px",
                    }}
                  >
                    Unsubscribe
                  </Link>
                  <Text 
                    className="m-0 text-xs text-gray-500" 
                    style={{ 
                      fontFamily: "DM Sans, sans-serif",
                      display: "inline-block",
                      margin: "0 4px"
                    }}
                  >
                    |
                  </Text>
                  <Link
                    href={viewInBrowserUrl}
                    className="text-xs text-gray-50 no-underline"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      textDecoration: "none",
                      display: "inline-block",
                      margin: "0 8px",
                    }}
                  >
                    View in browser
                  </Link>
                </div>
              </div>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

