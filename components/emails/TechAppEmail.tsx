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

interface TechAppEmailProps {
  logoUrl?: string
  heroImageUrl?: string
  signUpPhoneUrl?: string
  searchPhoneUrl?: string
  workoutPhoneUrl?: string
  googlePlayUrl?: string
  appStoreUrl?: string
}

export default function TechAppEmail({
  googlePlayUrl = "#",
  appStoreUrl = "#",
}: TechAppEmailProps) {
  return (
    <Html>
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        `}</style>
      </Head>
      <Preview>Get Your Skills On The Move - Download Our New Tech App!</Preview>
      <Tailwind>
        <Body className="bg-gray-50" style={{ fontFamily: "DM Sans, sans-serif" }}>
          <Container className="mx-auto w-full max-w-[600px]">
            {/* Header with Logo */}
            <Section className="bg-white px-6 py-8 text-center">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#8b5cf6",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      backgroundColor: "white",
                      borderRadius: "2px",
                    }}
                  />
                </div>
                <Text className="m-0 font-bold text-lg text-gray-800" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  TECH WORLD
                </Text>
              </div>
            </Section>

            {/* Hero Section */}
            <Section
              className="px-6 py-12 text-center text-white bg-[url('https://res.cloudinary.com/dirpuqqib/image/upload/v1750768808/1625638917332-bgg_oncbts.png')] bg-cover bg-center"
             
            >
              <Heading
                className="m-0 mb-4 font-bold text-3xl leading-tight"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Our New Tech App!
              </Heading>
              <Text className="m-0 mb-8 text-lg" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Get Your Skills On The Move
              </Text>
              <Link
                href="#"
                className="inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white no-underline mb-6"
                style={{
                  textDecoration: "none",
                  fontFamily: "DM Sans, sans-serif",
                  backgroundColor: "#6366f1",
                }}
              >
                Download Now!
              </Link>
           
            </Section>

            {/* Sign In/Sign Up Section */}
            <Section className="bg-white px-6 py-12">
              <div style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap" }}>
                <div style={{ flex: "1", minWidth: "200px" }}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1625639737921-dgg.png"
                    alt="Sign In Phone Mockup"
                    width="150"
                    height="300"
                    style={{ display: "block", maxWidth: "100%" }}
                  />
                </div>
                <div style={{ flex: "1", minWidth: "250px" }}>
                  <Heading
                    className="m-0 mb-4 font-bold text-xl text-gray-900"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    Sign In or Sign Up
                    <br />
                    Quick To Get Started
                  </Heading>
                  <Text
                    className="m-0 mb-4 text-sm text-gray-600 leading-6"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                  </Text>
                  <Text
                    className="m-0 mb-6 text-sm text-gray-600 leading-6"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    Aliquam erat volutpat. Pellentesque vitae nisi vitae semper pellentesque.
                  </Text>
                  <Link
                    href="#"
                    className="inline-block rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white no-underline"
                    style={{
                      textDecoration: "none",
                      fontFamily: "DM Sans, sans-serif",
                      backgroundColor: "#6366f1",
                    }}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </Section>

            {/* Search and Browse Section */}
            <Section className="bg-gray-50 px-6 py-12">
              <div style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap" }}>
                <div style={{ flex: "1", minWidth: "250px", order: "1" }}>
                  <Heading
                    className="m-0 mb-4 font-bold text-xl text-gray-900"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    Search And Browse
                    <br />
                    Together
                  </Heading>
                  <Text
                    className="m-0 mb-6 text-sm text-gray-600 leading-6"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                    Aliquam erat volutpat. Pellentesque vitae nisi vitae semper pellentesque.
                  </Text>
                  <Link
                    href="#"
                    className="inline-block rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white no-underline"
                    style={{
                      textDecoration: "none",
                      fontFamily: "DM Sans, sans-serif",
                      backgroundColor: "#6366f1",
                    }}
                  >
                    Download Now!
                  </Link>
                </div>
                <div style={{ flex: "1", minWidth: "200px", order: "2" }}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1625640436794-sffj.png"
                    alt="Search Phone Mockup"
                    width="150"
                    height="300"
                    style={{ display: "block", maxWidth: "100%", marginLeft: "auto" }}
                  />
                </div>
              </div>
            </Section>

            {/* Workout Section */}
            <Section className="bg-white px-6 py-12">
              <div style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap" }}>
                <div style={{ flex: "1", minWidth: "200px" }}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1625640450407-sfsf.png"
                    alt="Workout Phone Mockup"
                    width="150"
                    height="300"
                    style={{ display: "block", maxWidth: "100%" }}
                  />
                </div>
                <div style={{ flex: "1", minWidth: "250px" }}>
                  <Heading
                    className="m-0 mb-4 font-bold text-xl text-gray-900"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    Get To the workout
                    <br />
                    and make it yours
                  </Heading>
                  <Text
                    className="m-0 mb-4 text-sm text-gray-600 leading-6"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                  </Text>
                  <Text
                    className="m-0 mb-6 text-sm text-gray-600 leading-6"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    Aliquam erat volutpat. Pellentesque vitae nisi vitae semper pellentesque.
                  </Text>
                  <Link
                    href="#"
                    className="inline-block rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white no-underline"
                    style={{
                      textDecoration: "none",
                      fontFamily: "DM Sans, sans-serif",
                      backgroundColor: "#6366f1",
                    }}
                  >
                    Download Now!
                  </Link>
                </div>
              </div>
            </Section>

            {/* Ready Section */}
            <Container className="bg-gray-50 px-6 py-12 text-center">
              <Heading
                className="m-0 mb-2 font-bold text-2xl text-gray-900"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Ready ?
              </Heading>
              <Heading
                className="m-0 mb-6 font-bold text-2xl"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  background: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "#f97316",
                }}
              >
                Download Now! & Get Started.
              </Heading>
              <Text className="m-0 mb-8 text-sm text-gray-600" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Text>

              {/* App Store Buttons - Centered */}
              <div style={{ textAlign: "center" }}>
                <Link 
                  href={googlePlayUrl}
                  style={{ 
                    display: "inline-block", 
                    margin: "0 8px 16px 8px",
                    textAlign: "center"
                  }}
                >
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1625641723448-gp.png"
                    alt="Get it on Google Play"
                    width="180"
                    height="60"
                    style={{ 
                      display: "block",
                      margin: "0 auto"
                    }}
                  />
                </Link>
                <br />
                <Link 
                  href={appStoreUrl}
                  style={{ 
                    display: "inline-block", 
                    margin: "0 8px",
                    textAlign: "center"
                  }}
                >
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1625641444656-app.png"
                    alt="Download on the App Store"
                    width="180"
                    height="60"
                    style={{ 
                      display: "block",
                      margin: "0 auto"
                    }}
                  />
                </Link>
              </div>
            </Container>

            {/* Footer */}
            <Section
              className="px-6 py-8 text-center text-white mx-auto"
              style={{
                background: "linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)",
              }}
            >
              {/* Social Media Icons */}
              <div style={{ textAlign: "center", marginBottom: "16px" }}>
                <div style={{ display: "inline-block" }}>
                  <Link 
                    href="https://www.facebook.com"
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
                    href="https://twitter.com"
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
                    href="https://www.instagram.com"
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

              <Text className="m-0 mb-2 text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>
                You're receiving this email because you asked us about regular newsletter.
              </Text>
              <Text className="m-0 mb-2 text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>
                you can update your preferences or{" "}
                <Link href="#" className="text-white underline">
                  unsubscribe
                </Link>{" "}
                from this list.
              </Text>
              <Text className="m-0 text-xs opacity-75" style={{ fontFamily: "DM Sans, sans-serif" }}>
                © 2024 Company. All Rights Reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

TechAppEmail.PreviewProps = {
  logoUrl: "/placeholder.svg?height=40&width=120",
  heroImageUrl: "/placeholder.svg?height=200&width=300",
  signUpPhoneUrl: "/placeholder.svg?height=300&width=150",
  searchPhoneUrl: "/placeholder.svg?height=300&width=150",
  workoutPhoneUrl: "/placeholder.svg?height=300&width=150",
  googlePlayUrl: "https://play.google.com/store",
  appStoreUrl: "https://apps.apple.com",
} satisfies TechAppEmailProps