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

interface SapengineNewsletterProps {
  logoUrl?: string
  clientSuccessUrl?: string
  blogUrl?: string
  productUpdateUrl?: string
  readMoreUrl?: string
  contactUrl?: string
  facebookUrl?: string
  twitterUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
}

export default function SapengineNewsletter({
  clientSuccessUrl = "#",
  blogUrl = "#",
  productUpdateUrl = "#",
  readMoreUrl = "#",
}: SapengineNewsletterProps) {
  return (
    <Html>
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        `}</style>
      </Head>
      <Preview>Sapengine Monthly Newsletter - Client Success Stories & Product Updates</Preview>
      <Tailwind>
        <Body className="bg-gray-100" style={{ fontFamily: "Inter, sans-serif" }}>
          <Container className="mx-auto w-full max-w-[600px] bg-white">
            {/* Header with Logo */}
            <Section className="px-6 py-8 text-center bg-gray-900 bg-[url('https://res.cloudinary.com/dirpuqqib/image/upload/v1750776394/1595741101497-1_jdkq4z.jpg')]">
              <div
                style={{
                  backgroundColor: "#9ca3af",
                  color: "white",
                  padding: "8px 24px",
                  display: "inline-block",
                  borderRadius: "4px",
                  fontSize: "14px",
                  fontWeight: "600",
                  letterSpacing: "2px",
                }}
              >
                LOGO
              </div>

              <Heading
                className="m-0 mt-6 mb-4 font-bold text-3xl text-white"
                style={{ fontFamily: "Inter, sans-serif", textAlign: "center" }}
              >
                SAPENGINE <span style={{ fontWeight: "400" }}>NEWSLETTER</span>
              </Heading>

              <Text
                className="m-0 text-sm text-gray-300 leading-6 max-w-md mx-auto"
                style={{ fontFamily: "Inter, sans-serif", textAlign: "center" }}
              >
                Sapengine monthly newsletter will include client success stories, tip and tricks, blog posts on the
                latest news with SAP Business One and Sapengine product updates.
              </Text>
                {/* Navigation Buttons */}
            <Section className="px-6 py-6 ">
              <table width="100%" cellPadding="8" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                <tr>
                  <td style={{ width: "33.33%", textAlign: "center" }}>
                    <Link
                      href={clientSuccessUrl}
                      style={{
                        backgroundColor: "#14b8a6",
                        color: "white",
                        padding: "8px 16px",
                        textDecoration: "none",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: "600",
                        fontFamily: "Inter, sans-serif",
                        display: "inline-block",
                        textTransform: "uppercase",
                      }}
                    >
                      CLIENT SUCCESS
                    </Link>
                  </td>
                  <td style={{ width: "33.33%", textAlign: "center" }}>
                    <Link
                      href={blogUrl}
                      style={{
                        backgroundColor: "#14b8a6",
                        color: "white",
                        padding: "8px 16px",
                        textDecoration: "none",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: "600",
                        fontFamily: "Inter, sans-serif",
                        display: "inline-block",
                        textTransform: "uppercase",
                      }}
                    >
                     BLOGS
                    </Link>
                  </td>
                  <td style={{ width: "33.33%", textAlign: "center" }}>
                    <Link
                      href={productUpdateUrl}
                      style={{
                        backgroundColor: "#14b8a6",
                        color: "white",
                        padding: "8px 16px",
                        textDecoration: "none",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: "600",
                        fontFamily: "Inter, sans-serif",
                        display: "inline-block",
                        textTransform: "uppercase",
                      }}
                    >
                      PRODUCT
                    </Link>
                  </td>
                </tr>
              </table>
            </Section>

            </Section>

          
            {/* Client Success Story */}
            <Section className="px-6 py-8 bg-gray-900">
              <Heading
                className="m-0 mb-6 font-bold text-xl text-white text-center"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                CLIENT SUCCESS STORY
              </Heading>

              <div style={{ textAlign: "center", marginBottom: "24px" }}>
                <Img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop"
                  alt="Restaurant dining scene"
                  width="400"
                  className="object-cover"
                  height="250"
                  style={{
                    display: "block",
                    margin: "0 auto",
                    borderRadius: "8px",
                    maxWidth: "100%",
                  }}
                />
              </div>

              <Heading
                className="m-0 mb-4 font-semibold text-lg text-center"
                style={{ fontFamily: "Inter, sans-serif", color: "#14b8a6" }}
              >
                Mega Foods, Inc
              </Heading>

              <Text
                className="m-0 mb-6 text-sm text-gray-300 leading-6"
                style={{ fontFamily: "Inter, sans-serif", textAlign: "center" }}
              >
                As a manufacturer of premium Mexican foods with over 240 SKUs, Mega Foods incorporates a complex
                production process that requires production and warehouse facilities to stay in sync. Temporal concerns
                such as tracking lot numbers, monitoring expiration dates and generating product-specific labels demand
                tightly integrated and automated systems to do the job right.
              </Text>

              <div style={{ textAlign: "center" }}>
                <Link
                  href={readMoreUrl}
                  style={{
                    backgroundColor: "#14b8a6",
                    color: "white",
                    padding: "10px 24px",
                    textDecoration: "none",
                    borderRadius: "4px",
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "Inter, sans-serif",
                    display: "inline-block",
                  }}
                >
                  Read More...
                </Link>
              </div>
            </Section>

            {/* Our Blog */}
            <Section className="px-6 py-8 bg-white">
              <Heading
                className="m-0 mb-6 font-bold text-xl text-center text-gray-900"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                OUR BLOG
              </Heading>

              <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                <tr>
                  <td style={{ width: "40%", paddingRight: "16px", verticalAlign: "top" }}>
                    <Img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=150&fit=crop"
                      alt="Business dashboard"
                      width="200"
                                        className="object-cover"

                      height="150"
                      style={{
                        display: "block",
                        borderRadius: "8px",
                        maxWidth: "100%",
                      }}
                    />
                  </td>
                  <td style={{ width: "60%", verticalAlign: "top" }}>
                    <Heading
                      className="m-0 mb-3 font-semibold text-lg"
                      style={{ fontFamily: "Inter, sans-serif", color: "#14b8a6" }}
                    >
                      Sap business one
                    </Heading>
                    <Text
                      className="m-0 mb-4 text-sm text-gray-600 leading-5"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Read our latest blog, "10 out of 10" where Business One Experts give the top 10 highlights of this
                      remarkable update.
                    </Text>
                    <Link
                      href={readMoreUrl}
                      style={{
                        backgroundColor: "#14b8a6",
                        color: "white",
                        padding: "8px 16px",
                        textDecoration: "none",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: "500",
                        fontFamily: "Inter, sans-serif",
                        display: "inline-block",
                      }}
                    >
                      Read More...
                    </Link>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Tip and Trick */}
            <Section className="px-6 py-8 bg-gray-900">
              <Heading
                className="m-0 mb-6 font-bold text-xl text-white text-center"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                TIP AND TRICK
              </Heading>

              <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                <tr>
                  <td style={{ width: "40%", paddingRight: "16px", verticalAlign: "top" }}>
                    <Img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=150&fit=crop"
                      alt="Data visualization"
                      width="200"
                      height="150"
                                        className="object-cover"

                      style={{
                        display: "block",
                        borderRadius: "8px",
                        maxWidth: "100%",
                      }}
                    />
                  </td>
                  <td style={{ width: "60%", verticalAlign: "top" }}>
                    <Heading
                      className="m-0 mb-3 font-semibold text-lg"
                      style={{ fontFamily: "Inter, sans-serif", color: "#14b8a6" }}
                    >
                      Make articles more visual
                    </Heading>
                    <Text
                      className="m-0 mb-4 text-sm text-gray-300 leading-5"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Add visual interest by pairing a compelling image with your text to entice readers to click.
                    </Text>
                    <Link
                      href={readMoreUrl}
                      style={{
                        backgroundColor: "#14b8a6",
                        color: "white",
                        padding: "8px 16px",
                        textDecoration: "none",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: "500",
                        fontFamily: "Inter, sans-serif",
                        display: "inline-block",
                      }}
                    >
                      Read More...
                    </Link>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Product Update */}
            <Section className="px-6 py-8 bg-white">
              <Heading
                className="m-0 mb-6 font-bold text-xl text-center text-gray-900"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                PRODUCT UPDATE
              </Heading>

              <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                <tr>
                  <td style={{ width: "40%", paddingRight: "16px", verticalAlign: "top" }}>
                    <Img
                      src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=200&h=150&fit=crop"
                      alt="B2B portal interface"
                      width="200"
                      height="150"
                                        className="object-cover"

                      style={{
                        display: "block",
                        borderRadius: "8px",
                        maxWidth: "100%",
                      }}
                    />
                  </td>
                  <td style={{ width: "60%", verticalAlign: "top" }}>
                    <Heading
                      className="m-0 mb-3 font-semibold text-lg"
                      style={{ fontFamily: "Inter, sans-serif", color: "#14b8a6" }}
                    >
                      Sapengine B2B portal
                    </Heading>
                    <Text
                      className="m-0 mb-4 text-sm text-gray-600 leading-5"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Invite people to your next event, let them know about an upcoming sale, or give them a sneak peek
                      at a new collection that's coming soon.
                    </Text>
                    <Link
                      href={readMoreUrl}
                      style={{
                        backgroundColor: "#14b8a6",
                        color: "white",
                        padding: "8px 16px",
                        textDecoration: "none",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: "500",
                        fontFamily: "Inter, sans-serif",
                        display: "inline-block",
                      }}
                    >
                      Read More...
                    </Link>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Footer */}
            <Section className="px-6 py-8 text-center bg-gray-900">
              {/* Social Media Icons */}
              <div style={{ textAlign: "center", marginBottom: "24px" }}>
                <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", margin: "0 auto" }}>
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

                </table>
              </div>

              <Heading
                className="m-0 mb-4 font-semibold text-lg text-white"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Get in touch
              </Heading>

              <Text className="m-0 mb-2 text-sm text-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
                Sapengine, Inc.
              </Text>
              <Text className="m-0 mb-2 text-sm text-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
                Address line goes here
              </Text>
              <Text className="m-0 mb-6 text-sm text-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>
                Phone number and email address here
              </Text>

              <Text className="m-0 text-xs text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
                Copyright © Sapengine, Inc. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

SapengineNewsletter.PreviewProps = {
  logoUrl: "/placeholder.svg?height=40&width=120",
  clientSuccessUrl: "https://example.com/client-success",
  blogUrl: "https://example.com/blog",
  productUpdateUrl: "https://example.com/product-updates",
  readMoreUrl: "https://example.com/read-more",
  contactUrl: "https://example.com/contact",
  facebookUrl: "https://facebook.com/sapengine",
  twitterUrl: "https://twitter.com/sapengine",
  linkedinUrl: "https://linkedin.com/company/sapengine",
  instagramUrl: "https://instagram.com/sapengine",
} satisfies SapengineNewsletterProps
