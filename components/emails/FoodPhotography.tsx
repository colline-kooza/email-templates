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

interface FoodPhotographyEmailProps {
  logoUrl?: string
  homeUrl?: string
  photographyUrl?: string
  viewUrl?: string
  bookNowUrl?: string
  contactEmail?: string
  phoneNumber?: string
  address?: string
  twitterUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
  youtubeUrl?: string
  termsUrl?: string
  privacyUrl?: string
}

export default function FoodPhotography({
  logoUrl = "/placeholder.svg?height=40&width=120",
  homeUrl = "#",
  photographyUrl = "#",
  viewUrl = "#",
  bookNowUrl = "#",
  contactEmail = "support@domain.com",
  phoneNumber = "123-456-7890",
  address = "San Francisco, CA, United States",
  twitterUrl = "https://twitter.com",
  linkedinUrl = "https://linkedin.com",
  instagramUrl = "https://instagram.com",
  youtubeUrl = "https://youtube.com",
  termsUrl = "#",
  privacyUrl = "#",
}: FoodPhotographyEmailProps) {
  return (
    <Html>
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
        `}</style>
      </Head>
      <Preview>The Art of Food Photography - Professional Food Styling Services</Preview>
      <Tailwind>
        <Body className="bg-sky-200" style={{ fontFamily: "Inter, sans-serif" }}>
          <Container className="mx-auto w-full max-w-[600px] bg-white">
            {/* Header */}
            <Section className="px-6 py-4 bg-white">
              <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                <tr>
                  <td style={{ width: "50%", textAlign: "left" }}>
                    <Text
                      className="m-0 font-bold text-lg text-gray-900"
                      style={{ fontFamily: "Playfair Display, serif", letterSpacing: "2px" }}
                    >
                      YOUR LOGO
                    </Text>
                  </td>
                  <td style={{ width: "50%", textAlign: "right" }}>
                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", float: "right" }}>
                      <tr>
                        <td style={{ padding: "0 8px" }}>
                          <Link
                            href={homeUrl}
                            className="text-gray-600 text-sm no-underline"
                            style={{ fontFamily: "Inter, sans-serif", textDecoration: "none" }}
                          >
                            Home
                          </Link>
                        </td>
                        <td style={{ padding: "0 8px", color: "#d1d5db" }}>|</td>
                        <td style={{ padding: "0 8px" }}>
                          <Link
                            href={photographyUrl}
                            className="text-gray-600 text-sm no-underline"
                            style={{ fontFamily: "Inter, sans-serif", textDecoration: "none" }}
                          >
                            Photography
                          </Link>
                        </td>
                        <td style={{ padding: "0 8px", color: "#d1d5db" }}>|</td>
                        <td style={{ padding: "0 8px" }}>
                          <Link
                            href={viewUrl}
                            className="text-gray-600 text-sm no-underline"
                            style={{ fontFamily: "Inter, sans-serif", textDecoration: "none" }}
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Hero Section */}
            <Section className="px-0 py-0 bg-white">
              <Img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=300&fit=crop"
                alt="Food photography with vintage camera"
                width="600"
                height="300"
                style={{
                  display: "block",
                  width: "100%",
                  maxWidth: "100%",
                }}
              />

              <div style={{ padding: "32px 24px", textAlign: "center" }}>
                <Heading
                  className="m-0 mb-2 font-bold text-3xl text-gray-900"
                  style={{ fontFamily: "Playfair Display, serif", letterSpacing: "1px" }}
                >
                  THE ART OF FOOD
                </Heading>
                <Heading
                  className="m-0 mb-6 font-normal text-lg"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#f97316",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                  }}
                >
                  PHOTOGRAPHY
                </Heading>

                <Text
                  className="m-0 mb-8 text-sm text-gray-600 leading-6 max-w-md mx-auto"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </Text>

                <Link
                  href={bookNowUrl}
                  style={{
                    backgroundColor: "#f97316",
                    color: "white",
                    padding: "12px 32px",
                    textDecoration: "none",
                    borderRadius: "4px",
                    fontSize: "14px",
                    fontWeight: "600",
                    fontFamily: "Inter, sans-serif",
                    display: "inline-block",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  BOOK NOW
                </Link>
              </div>
            </Section>

            {/* Services Section */}
            <Section className="px-0 py-0" style={{ backgroundColor: "#f97316" }}>
              <div style={{ padding: "32px 24px", textAlign: "center" }}>
                <Heading
                  className="m-0 mb-2 font-bold text-xl text-white"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Shoot From Home Photography
                </Heading>
                <Text className="m-0 mb-8 text-white" style={{ fontFamily: "Inter, sans-serif", fontSize: "16px" }}>
                  & Styling Service
                </Text>

                {/* Home Photography */}
                <table
                  width="100%"
                  cellPadding="16"
                  cellSpacing="0"
                  style={{ borderCollapse: "collapse", marginBottom: "32px" }}
                >
                  <tr>
                    <td style={{ width: "40%", verticalAlign: "top" }}>
                      <Img
                        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=150&fit=crop"
                        alt="Home food photography setup"
                        width="200"
                        height="150"
                        style={{
                          display: "block",
                          borderRadius: "8px",
                          maxWidth: "100%",
                        }}
                      />
                    </td>
                    <td style={{ width: "60%", paddingLeft: "16px", verticalAlign: "top", textAlign: "left" }}>
                      <div
                        style={{
                          backgroundColor: "#fbbf24",
                          padding: "8px 16px",
                          borderRadius: "4px",
                          display: "inline-block",
                          marginBottom: "12px",
                        }}
                      >
                        <Text
                          className="m-0 font-semibold text-sm text-gray-900"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          Home Photography:
                        </Text>
                      </div>
                      <Text className="m-0 text-sm text-white leading-5" style={{ fontFamily: "Inter, sans-serif" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                      </Text>
                    </td>
                  </tr>
                </table>

                {/* Styling Service */}
                <table
                  width="100%"
                  cellPadding="16"
                  cellSpacing="0"
                  style={{ borderCollapse: "collapse", marginBottom: "32px" }}
                >
                  <tr>
                    <td style={{ width: "60%", paddingRight: "16px", verticalAlign: "top", textAlign: "left" }}>
                      <div
                        style={{
                          backgroundColor: "#fbbf24",
                          padding: "8px 16px",
                          borderRadius: "4px",
                          display: "inline-block",
                          marginBottom: "12px",
                        }}
                      >
                        <Text
                          className="m-0 font-semibold text-sm text-gray-900"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          Styling Service:
                        </Text>
                      </div>
                      <Text className="m-0 text-sm text-white leading-5" style={{ fontFamily: "Inter, sans-serif" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                      </Text>
                    </td>
                    <td style={{ width: "40%", verticalAlign: "top" }}>
                      <Img
                        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=150&fit=crop"
                        alt="Professional food styling setup"
                        width="200"
                        height="150"
                        style={{
                          display: "block",
                          borderRadius: "8px",
                          maxWidth: "100%",
                        }}
                      />
                    </td>
                  </tr>
                </table>

                {/* Our Services List */}
                <table width="100%" cellPadding="16" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                  <tr>
                    <td style={{ width: "40%", verticalAlign: "top" }}>
                      <Img
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=150&fit=crop"
                        alt="Food styling tools"
                        width="200"
                        height="150"
                        style={{
                          display: "block",
                          borderRadius: "8px",
                          maxWidth: "100%",
                        }}
                      />
                    </td>
                    <td style={{ width: "60%", paddingLeft: "16px", verticalAlign: "top", textAlign: "left" }}>
                      <div
                        style={{
                          backgroundColor: "#fbbf24",
                          padding: "8px 16px",
                          borderRadius: "4px",
                          display: "inline-block",
                          marginBottom: "12px",
                        }}
                      >
                        <Text
                          className="m-0 font-semibold text-sm text-gray-900"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          Our Services:
                        </Text>
                      </div>
                      <ul style={{ margin: "0", padding: "0", listStyle: "none" }}>
                        <li
                          style={{
                            marginBottom: "4px",
                            fontSize: "14px",
                            color: "white",
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          • Lorem ipsum dolor sit amet
                        </li>
                        <li
                          style={{
                            marginBottom: "4px",
                            fontSize: "14px",
                            color: "white",
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          • Consectetur adipiscing elit, sed do eiusmod
                        </li>
                        <li
                          style={{
                            marginBottom: "4px",
                            fontSize: "14px",
                            color: "white",
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          • Ut enim ad minim veniam, quis nostrud
                        </li>
                        <li
                          style={{
                            marginBottom: "4px",
                            fontSize: "14px",
                            color: "white",
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          • Tempor incididunt ut labore et dolore magna aliqua
                        </li>
                        <li
                          style={{
                            marginBottom: "4px",
                            fontSize: "14px",
                            color: "white",
                            fontFamily: "Inter, sans-serif",
                          }}
                        >
                          • Exercitation ullamco laboris nisi ut aliquip
                        </li>
                      </ul>
                    </td>
                  </tr>
                </table>
              </div>
            </Section>

            {/* Portfolio Gallery */}
            <Section className="px-6 py-8 bg-white">
              <Heading
                className="m-0 mb-8 font-bold text-xl text-center text-gray-900"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                We have rounded up a list of stunning
              </Heading>
              <Text
                className="m-0 mb-8 text-center text-gray-600"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "16px" }}
              >
                Food Stylist and Food Photographer
              </Text>

              {/* Gallery Grid */}
              <table
                width="100%"
                cellPadding="4"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", marginBottom: "32px" }}
              >
                <tr>
                  <td style={{ width: "25%", padding: "4px" }}>
                    <Img
                      src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=130&h=130&fit=crop"
                      alt="Food photography 1"
                      width="130"
                      height="130"
                      style={{ display: "block", borderRadius: "8px", maxWidth: "100%" }}
                    />
                  </td>
                  <td style={{ width: "25%", padding: "4px" }}>
                    <Img
                      src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=130&h=130&fit=crop"
                      alt="Food photography 2"
                      width="130"
                      height="130"
                      style={{ display: "block", borderRadius: "8px", maxWidth: "100%" }}
                    />
                  </td>
                  <td style={{ width: "25%", padding: "4px" }}>
                    <Img
                      src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=130&h=130&fit=crop"
                      alt="Food photography 3"
                      width="130"
                      height="130"
                      style={{ display: "block", borderRadius: "8px", maxWidth: "100%" }}
                    />
                  </td>
                  <td style={{ width: "25%", padding: "4px" }}>
                    <Img
                      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=130&h=130&fit=crop"
                      alt="Food photography 4"
                      width="130"
                      height="130"
                      style={{ display: "block", borderRadius: "8px", maxWidth: "100%" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "25%", padding: "4px" }}>
                    <Img
                      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=130&h=130&fit=crop"
                      alt="Food photography 5"
                      width="130"
                      height="130"
                      style={{ display: "block", borderRadius: "8px", maxWidth: "100%" }}
                    />
                  </td>
                  <td style={{ width: "25%", padding: "4px" }}>
                    <Img
                      src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=130&h=130&fit=crop"
                      alt="Food photography 6"
                      width="130"
                      height="130"
                      style={{ display: "block", borderRadius: "8px", maxWidth: "100%" }}
                    />
                  </td>
                  <td style={{ width: "25%", padding: "4px" }}>
                    <Img
                      src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=130&h=130&fit=crop"
                      alt="Food photography 7"
                      width="130"
                      height="130"
                      style={{ display: "block", borderRadius: "8px", maxWidth: "100%" }}
                    />
                  </td>
                  <td style={{ width: "25%", padding: "4px" }}>
                    <Img
                      src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=130&h=130&fit=crop"
                      alt="Food photography 8"
                      width="130"
                      height="130"
                      style={{ display: "block", borderRadius: "8px", maxWidth: "100%" }}
                    />
                  </td>
                </tr>
              </table>

              <div style={{ textAlign: "center" }}>
                <Link
                  href={bookNowUrl}
                  style={{
                    backgroundColor: "#f97316",
                    color: "white",
                    padding: "12px 32px",
                    textDecoration: "none",
                    borderRadius: "4px",
                    fontSize: "14px",
                    fontWeight: "600",
                    fontFamily: "Inter, sans-serif",
                    display: "inline-block",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  BOOK NOW
                </Link>
              </div>
            </Section>

            {/* Footer */}
            <Section className="px-6 py-8 text-center bg-gray-800">
              {/* Social Media Icons */}
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

              <Text className="m-0 mb-2 text-sm text-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
                If you have any questions, feel free message us at{" "}
                <Link href={`mailto:${contactEmail}`} style={{ color: "#f97316", textDecoration: "none" }}>
                  {contactEmail}
                </Link>
              </Text>
              <Text className="m-0 mb-2 text-sm text-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
                All right reserved. Update email preferences or unsubscribe
              </Text>
              <Text className="m-0 mb-4 text-sm text-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
                {phoneNumber}
              </Text>
              <Text className="m-0 mb-4 text-sm text-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
                {address}
              </Text>
              <Text className="m-0 text-xs text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
                <Link href={termsUrl} style={{ color: "#9ca3af", textDecoration: "none" }}>
                  Terms of use
                </Link>{" "}
                |{" "}
                <Link href={privacyUrl} style={{ color: "#9ca3af", textDecoration: "none" }}>
                  Privacy Policy
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

FoodPhotography.PreviewProps = {
  logoUrl: "/placeholder.svg?height=40&width=120",
  homeUrl: "https://example.com/home",
  photographyUrl: "https://example.com/photography",
  viewUrl: "https://example.com/view",
  bookNowUrl: "https://example.com/book",
  contactEmail: "support@domain.com",
  phoneNumber: "123-456-7890",
  address: "San Francisco, CA, United States",
  twitterUrl: "https://twitter.com/foodphotography",
  linkedinUrl: "https://linkedin.com/company/foodphotography",
  instagramUrl: "https://instagram.com/foodphotography",
  youtubeUrl: "https://youtube.com/foodphotography",
  termsUrl: "https://example.com/terms",
  privacyUrl: "https://example.com/privacy",
} satisfies FoodPhotographyEmailProps
