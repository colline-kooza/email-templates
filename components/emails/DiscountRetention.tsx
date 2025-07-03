import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Link,
  Img,
  Font,
  Section,
  Row,
  Column,
} from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

export const DiscountRetention = () => {
  const baseUrl = "http://localhost:3001"

  return (
    <Html>
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v30/KFOiCnqEu92Fr1Mu51QrEz0dL_nz.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="initial"
        />
      </Head>
      <Preview>Get One Month Membership Free</Preview>
      <Body
        style={{
          backgroundColor: "#4d4c4c",
          fontFamily: "Roboto, Verdana, sans-serif",
          margin: "0",
          padding: "0",
        }}
      >
        <Tailwind>
          <Container className="overflow-hidden bg-[#ececec]" style={container}>
            {/* Header */}
            <Section style={{ borderBottom: "1px solid #d5d4d4", paddingBottom: "50px" }}>
              <Row>
                
                <Column style={{ width: "50%", textAlign: "right" }}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1695276233037-Group%2073.png"
                    alt="Crown"
                    width={35}
                    height={35}
                    style={{ height: "35px", margin: "10px",objectFit:"cover" }}
                  />
                </Column>
              </Row>
            </Section>

            <Section className="pl-5 w-full">
              {/* Main Content */}
              <Section className="w-[90%] bg-white pt-4 pl-3 pb-1" style={{ textAlign: "center", margin: "20px 0" }}>
                <Text className="text-xs text-start mb-0">DID YOU FIND ME</Text>
                <Heading className="text-start mt-2 text-4xl">Interesting?</Heading>
              </Section>

              <Section
                style={{ borderBottom: "1px solid #d5d4d4", borderTop: "1px solid #d5d4d4" }}
                className="text-start py-3"
              >
                <Button
                  href="#"
                  className="text-xs"
                  style={{
                    backgroundColor: "#ea4747",
                    color: "#fff",
                    borderRadius: "1px",
                    padding: "10px 20px",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  Upgrade Now
                </Button>
              </Section>

              {/* Offer Section */}
              <Section className="mb-0" style={{ textAlign: "center" }}>
                <Heading className="text-[#000000] text-start mb-0" style={{ fontSize: "30px" }}>
                  Get One Month
                  <br />
                  Membership Free
                </Heading>
                <Text className="text-start text-sm w-[80%] mt-6" style={{ color: "#555", margin: "20px 0" }}>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Text>
              </Section>

              {/* Image Section */}
              <Section style={{ textAlign: "center", margin: "20px 0" }}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1695276146900-Group%2072.png"
                  alt="Offer Image"
                  width={500}
                  height={300}
                  style={{ width: "100%", maxWidth: "500px", margin: "0 auto",objectFit:"cover" }}
                />
              </Section>
            </Section>

            {/* Footer */}
            <Section
              style={{ backgroundColor: "#242424", padding: "20px", textAlign: "center" }}
              className="text-white"
            >
              <Text className="text-[#f8fafc] text-start">Thanks for the support! 🎁</Text>
              <Text
                className="text-start"
                style={{
                  color: "#f8fafc",
                  fontSize: "12px",
                  borderBottom: "solid 1px #f8fafc",
                  paddingBottom: "5px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                Sed ut perspiciatis unde omnis iste natus error sit.
              </Text>
               <Section className="w-full text-left mt-0 flex" style={{ padding: "15px 0" }}>
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
              <Link
                className="text-white flex items-start mt-6"
                href="#"
                style={{ fontSize: "12px", borderTop: "solid 1px #f8fafc", paddingTop: "5px" }}
              >
                UNSUBSCRIBE | PRIVACY POLICY | WEB
              </Link>
            </Section>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  )
}

export default DiscountRetention

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "0",
  borderRadius: "4px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
}
const iconStyle = {
  width: "25px",
  height: "25px",
  marginRight: "8px",
  display: "inline-block",
}

