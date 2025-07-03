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
} from "@react-email/components"

interface CarRentalEmailProps {
  shopName?: string
  slogan?: string
  logoUrl?: string
  heroImageUrl?: string
  feature1ImageUrl?: string
  feature2ImageUrl?: string
  feature3ImageUrl?: string
  car1ImageUrl?: string
  car2ImageUrl?: string
  car3ImageUrl?: string
  testDriveUrl?: string
  readMoreUrl?: string
  viewCarsUrl?: string
  websiteUrl?: string
  facebookUrl?: string
  twitterUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
  unsubscribeUrl?: string
  year?: number
}

export default function CarRentalEmail({
  shopName = "SHOP NAME",
  slogan = "YOUR SLOGAN HERE",
  testDriveUrl = "#",
  readMoreUrl = "#",
  viewCarsUrl = "#",
  websiteUrl = "www.yourcompany.com",
  facebookUrl = "#",
  twitterUrl = "#",
  linkedinUrl = "#",
  instagramUrl = "#",
  unsubscribeUrl = "#",
  year = 2024,
}: CarRentalEmailProps) {
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
      <Preview>Try Before You Buy - Test Drive Our Demonstration Cars</Preview>
      <Tailwind>
        <Body className="bg-yellow-400 font-sans" style={{ fontFamily: "DM Sans, Verdana, sans-serif" }}>
          <Container className="mx-auto w-full max-w-[700px]">
            {/* Header */}
            <Section
              className="bg-blue-600 px-6 py-4 text-center  mx-auto"
            //   style={{ background: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)" }}
            >
              <div style={{ display: "flex", alignItems: "center",  marginBottom: "4px" }}
              className="text-center  mx-auto "
              >
              
                <Text className="m-0 font-bold text-lg text-white  text-center  mx-auto ">{shopName}</Text>
              </div>
              <Text className="m-0 font-normal text-xs text-blue-100">{slogan}</Text>
            </Section>

            {/* Hero Section */}
            <Section
              className="relative bg-blue-600 text-center"
            >
             
              <div
                className="bg-[url('https://res.cloudinary.com/dirpuqqib/image/upload/v1750244002/d_ovv117.png')] bg-cover bg-center h-[300px] w-full pt-8"
              >
                <Heading className="m-0 mb-4 font-bold text-4xl text-white leading-tight">Try Before You Buy</Heading>
                <Text className="m-0 mb-4 font-normal text-lg text-white">
                  Test Ride Our Demonstration For A Full 24 Hours
                </Text>

                {/* Free Badge */}
                <div
                  style={{
                    display: "inline-block",
                    backgroundColor: "#f59e0b",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <Text className="m-0 font-bold text-sm text-white">FREE OF CHARGE</Text>
                </div>

                {/* Email Input */}
                <div style={{ maxWidth: "300px", margin: "0 auto" }}>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "none",
                      borderRadius: "4px",
                      fontSize: "14px",
                      backgroundColor: "white",
                    }}
                  />
                </div>
              </div>
            </Section>

            {/* Feature Section 1 */}
            <Section
              className="bg-blue-600"
              style={{ background: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)" }}
            >
              <Row>
                <Column className="w-1/3">
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1619256374422-977166"
                    alt="Try Your Best"
                    width="200"
                    height="150"
                    style={{ width: "100%", height: "150px", objectFit: "cover" }}
                  />
                </Column>
                <Column className="w-2/3" style={{ padding: "20px" }}>
                  <Heading className="m-0 mb-3 font-bold text-xl text-white">Try Your Best</Heading>
                  <Text className="m-0 mb-4 font-normal text-sm text-blue-100 leading-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam.
                  </Text>
                  <Link
                    href={testDriveUrl}
                    className="inline-block rounded-md bg-blue-500 px-6 py-2 font-semibold text-sm text-white no-underline"
                    style={{ textDecoration: "none" }}
                  >
                    View More
                  </Link>
                </Column>
              </Row>
            </Section>

            {/* Feature Section 2 */}
            <Section
              className="bg-blue-600"
              style={{ background: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)" }}
            >
              <Row>
                <Column className="w-1/3">
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1619254991594-445031"
                    alt="Heading Goes Here"
                    width="200"
                    height="150"
                    style={{ width: "100%", height: "150px", objectFit: "cover" }}
                  />
                </Column>
                <Column className="w-2/3" style={{ padding: "20px" }}>
                  <Heading className="m-0 mb-3 font-bold text-xl text-white">Heading Goes Here</Heading>
                  <Text className="m-0 mb-4 font-normal text-sm text-blue-100 leading-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam.
                  </Text>
                  <Link
                    href={testDriveUrl}
                    className="inline-block rounded-md bg-blue-500 px-6 py-2 font-semibold text-sm text-white no-underline"
                    style={{ textDecoration: "none" }}
                  >
                    View More
                  </Link>
                </Column>
              </Row>
            </Section>

            {/* Feature Section 3 */}
            <Section
              className="bg-blue-600"
              style={{ background: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)" }}
            >
              <Row>
                <Column className="w-1/3">
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1619255759400-124287"
                    alt="Main Line Goes Here"
                    width="200"
                    height="150"
                    style={{ width: "100%", height: "150px", objectFit: "cover" }}
                  />
                </Column>
                <Column className="w-2/3" style={{ padding: "20px" }}>
                  <Heading className="m-0 mb-3 font-bold text-xl text-white">Main Line Goes Here</Heading>
                  <Text className="m-0 mb-4 font-normal text-sm text-blue-100 leading-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam.
                  </Text>
                  <Link
                    href={testDriveUrl}
                    className="inline-block rounded-md bg-blue-500 px-6 py-2 font-semibold text-sm text-white no-underline"
                    style={{ textDecoration: "none" }}
                  >
                    View More
                  </Link>
                </Column>
              </Row>
            </Section>

            {/* Info Section */}
            <Section
              className="px-8 py-8 text-center bg-blue-600"
              style={{ background: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)" }}
            >
              <Heading className="m-0 mb-6 font-bold text-2xl text-white leading-tight">
                What To Look For
                <br />
                On A Test Drive
              </Heading>
              <Text className="m-0 mb-6 mx-auto max-w-lg font-normal text-sm text-blue-100 leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Text>
              <Link
                href={readMoreUrl}
                className="inline-block rounded-md bg-orange-500 px-8 py-3 font-bold text-sm text-white no-underline"
                style={{ textDecoration: "none" }}
              >
                Read More
              </Link>
            </Section>

            {/* Car Gallery */}
            <Section className="px-8 py-8 text-center bg-gray-100">
              <Heading className="m-0 mb-6 font-bold text-2xl text-gray-800">Find Your Car For Drive</Heading>

              <Row className="mb-6">
                <Column className="w-1/3 px-2">
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1619256647384-725920"
                    alt="Model Name 01"
                    width="180"
                    height="120"
                    style={{
                      width: "100%",
                      height: "120px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginBottom: "8px",
                    }}
                  />
                  <Text className="m-0 font-semibold text-sm text-gray-800">Model Name 01</Text>
                </Column>
                <Column className="w-1/3 px-2">
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1619256704258-868272"
                    alt="Model Name 02"
                    width="180"
                    height="120"
                    style={{
                      width: "100%",
                      height: "120px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginBottom: "8px",
                    }}
                  />
                  <Text className="m-0 font-semibold text-sm text-gray-800">Model Name 02</Text>
                </Column>
                <Column className="w-1/3 px-2">
                  <Img
                    src='https://cdn.templates.unlayer.com/assets/1619256707899-402617'
                    alt="Model Name 03"
                    width="180"
                    height="120"
                    style={{
                      width: "100%",
                      height: "120px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginBottom: "8px",
                    }}
                  />
                  <Text className="m-0 font-semibold text-sm text-gray-800">Model Name 03</Text>
                </Column>
              </Row>

              <Link
                href={viewCarsUrl}
                className="inline-block rounded-md bg-orange-500 px-8 py-3 font-bold text-sm text-white no-underline"
                style={{ textDecoration: "none" }}
              >
                View More
              </Link>
            </Section>

            {/* Footer */}
            <Section
              className="px-8 py-8 text-center bg-blue-600"
              style={{ background: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)" }}
            >
              <Heading className="m-0 mb-4 font-bold text-xl text-white">ABOUT US</Heading>
              <Text className="m-0 mb-4 font-normal text-sm text-blue-100">{websiteUrl}</Text>

              {/* Social Media Icons */}
              <div style={{ marginBottom: "16px" }}>
                <Link href={facebookUrl} className="mr-3">
                  <div
                    style={{
                      display: "inline-block",
                      width: "36px",
                      height: "36px",
                      backgroundColor: "white",
                      borderRadius: "50%",
                      textAlign: "center",
                      lineHeight: "36px",
                      color: "#1e40af",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    f
                  </div>
                </Link>
                <Link href={twitterUrl} className="mr-3">
                  <div
                    style={{
                      display: "inline-block",
                      width: "36px",
                      height: "36px",
                      backgroundColor: "white",
                      borderRadius: "50%",
                      textAlign: "center",
                      lineHeight: "36px",
                      color: "#1e40af",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    t
                  </div>
                </Link>
                <Link href={linkedinUrl} className="mr-3">
                  <div
                    style={{
                      display: "inline-block",
                      width: "36px",
                      height: "36px",
                      backgroundColor: "white",
                      borderRadius: "50%",
                      textAlign: "center",
                      lineHeight: "36px",
                      color: "#1e40af",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    in
                  </div>
                </Link>
                <Link href={instagramUrl}>
                  <div
                    style={{
                      display: "inline-block",
                      width: "36px",
                      height: "36px",
                      backgroundColor: "white",
                      borderRadius: "50%",
                      textAlign: "center",
                      lineHeight: "36px",
                      color: "#1e40af",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    ig
                  </div>
                </Link>
              </div>

              <Text className="m-0 mb-2 font-normal text-xs text-blue-100">
                Want to change how you receive these emails? You can{" "}
                <Link href={unsubscribeUrl} className="text-blue-100 underline">
                  update your preferences or unsubscribe from this list
                </Link>
              </Text>
              <Text className="m-0 font-normal text-xs text-blue-200">© {year} Company, All Rights Reserved.</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

CarRentalEmail.PreviewProps = {
  shopName: "SHOP NAME",
  slogan: "YOUR SLOGAN HERE",
  logoUrl: "/placeholder.svg?height=40&width=40",
  heroImageUrl: "/placeholder.svg?height=300&width=600",
  feature1ImageUrl: "/placeholder.svg?height=150&width=200",
  feature2ImageUrl: "/placeholder.svg?height=150&width=200",
  feature3ImageUrl: "/placeholder.svg?height=150&width=200",
  car1ImageUrl: "/placeholder.svg?height=120&width=180",
  car2ImageUrl: "/placeholder.svg?height=120&width=180",
  car3ImageUrl: "/placeholder.svg?height=120&width=180",
  testDriveUrl: "https://example.com/test-drive",
  readMoreUrl: "https://example.com/test-drive-tips",
  viewCarsUrl: "https://example.com/cars",
  websiteUrl: "www.yourcompany.com",
  facebookUrl: "https://facebook.com/yourcompany",
  twitterUrl: "https://twitter.com/yourcompany",
  linkedinUrl: "https://linkedin.com/company/yourcompany",
  instagramUrl: "https://instagram.com/yourcompany",
  unsubscribeUrl: "https://example.com/unsubscribe",
  year: 2024,
} satisfies CarRentalEmailProps
