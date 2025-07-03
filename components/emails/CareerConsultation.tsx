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
  Tailwind,
  Section,
  Row,
  Column,
} from "@react-email/components"

export const CareerConsultation = () => {
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
      <Preview>Professional Consulting Services</Preview>
      <Body
        style={{
          backgroundColor: "#f0f2f5",
          fontFamily: "DM Sans",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        }}
      >
        <Tailwind>
          <Container className="overflow-hidden" style={container}>
            {/* First Section - Career Advice */}
            <Section style={{ backgroundColor: "#edf2fd" }}>
              <Row>
                <Column>
                  <div className="px-8 py-6">
                    <Text className="text-[#1258cd] font-semibold text-sm uppercase tracking-wide !mt-0 !mb-2">
                      Developed by teachers
                    </Text>
                    <Heading className="text-2xl text-[#000000] font-black !mt-2 !mb-4 leading-tight">
                      ADVICE CAREER
                      <br />
                      WITHOUT
                      <br />
                      LIMIT
                    </Heading>
                    <Text className="text-sm text-[#7c8082] my-4 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur adipisicing elit, magnam vel!
                    </Text>
                    <Button
                      href="https://example.com"
                      style={{
                        backgroundColor: "#054fca",
                        color: "#ffffff",
                        borderRadius: "4px",
                        padding: "12px 40px",
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: "600",
                        display: "inline-block",
                        marginTop: "8px",
                      }}
                    >
                      Visit Us
                    </Button>
                  </div>
                </Column>
                <Column>
                  <div className="flex items-center justify-center py-6 px-4">
                  <Img
  src="https://cdn.templates.unlayer.com/assets/1689234079339-1.png"
  alt="Career Advice Illustration"
  width={300}
  height={300}
  style={{
    maxWidth: "100%",
    width: "500px",
    height: "300px",
    objectFit: "cover",
    display: "block"
  }}
/>
      

                  </div>
                </Column>
              </Row>
            </Section>

            {/* Second Section - Make Life Easier */}
            <Section style={{ backgroundColor: "#edf2fd" }}>
              <Row>
                <Column>
                  <div className="flex items-center justify-center py-6 px-4">
                  <Img
  src="https://cdn.templates.unlayer.com/assets/1689235942223-5.png"
  alt="Career Advice Illustration"
  width={300}
  height={300}
  style={{
    maxWidth: "100%",
    width: "500px",
    height: "300px",
    objectFit: "cover",
    display: "block"
  }}
/>
                  </div>
                </Column>
                <Column>
                  <div className="px-8 py-6">
                    <Heading className="text-2xl text-[#000000] font-black !mt-2 !mb-4 leading-tight">
                      Make your life
                      <br />
                      easier
                    </Heading>
                    <Text className="text-sm text-[#7c8082] my-4 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </Text>
                    <Button
                      href="https://example.com"
                      style={{
                        backgroundColor: "#054fca",
                        color: "#ffffff",
                        borderRadius: "4px",
                        padding: "12px 40px",
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: "600",
                        display: "inline-block",
                        marginTop: "8px",
                      }}
                    >
                      Visit Us
                    </Button>
                  </div>
                </Column>
              </Row>
            </Section>

            {/* Call to Action Section */}
            <Section style={{ backgroundColor: "#ffffff", padding: "40px 0" }}>
              <Row>
                <Column>
                  <div className="text-center px-8">
                    <Heading className="text-xl text-[#054fca] font-bold !mb-4">Lorem ipsum dolor sit amet</Heading>
                    <Text className="text-base text-[#333333] !mt-0 !mb-6 mx-auto" style={{ maxWidth: "500px" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </Text>
                    <Button
                      href="https://example.com"
                      style={{
                        backgroundColor: "#054fca",
                        color: "#ffffff",
                        borderRadius: "4px",
                        padding: "12px 40px",
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: "600",
                        display: "inline-block",
                      }}
                    >
                      Visit Us
                    </Button>
                  </div>
                </Column>
              </Row>
            </Section>

            {/* Footer */}
            <Section style={{ backgroundColor: "#054fca", padding: "30px 0 20px", textAlign: "center" }}>
  <Row>
    <Column>
      <div className="text-center">
        {/* Social media icons */}
        {/* <div className="flex justify-center space-x-4 mb-4">
          <Link href="https://facebook.com">
            <Img
              src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
              alt="Facebook"
              width={32}
              height={32}
              style={{ margin: "0 4px" }}
            />
          </Link>
          <Link href="https://twitter.com">
            <Img
              src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
              alt="Twitter"
              width={32}
              height={32}
              style={{ margin: "0 4px" }}
            />
          </Link>
          <Link href="https://linkedin.com">
            <Img
              src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
              alt="LinkedIn"
              width={32}
              height={32}
              style={{ margin: "0 4px" }}
            />
          </Link>
          <Link href="https://instagram.com">
            <Img
              src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
              alt="Instagram"
              width={32}
              height={32}
              style={{ margin: "0 4px" }}
            />
          </Link>
        </div> */}

        {/* Footer links */}
        <Text className="text-sm text-white mb-2">
          <Link href="#" className="text-white mx-2 no-underline">
            Home
          </Link>{" "}
          |{" "}
          <Link href="#" className="text-white mx-2 no-underline">
            Page
          </Link>{" "}
          |{" "}
          <Link href="#" className="text-white mx-2 no-underline">
            About
          </Link>{" "}
          |{" "}
          <Link href="#" className="text-white mx-2 no-underline">
            Contact us
          </Link>
        </Text>

        {/* Description text */}
        <Text className="text-sm text-white mx-8 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </Text>

        {/* Copyright text */}
        <Text className="text-sm text-white">Copyright © YourCompany | All Rights Reserved</Text>
      </div>
    </Column>
  </Row>
</Section>

          </Container>
        </Tailwind>
      </Body>
    </Html>
  )
}

export default CareerConsultation

const container = {
  backgroundColor: "#ffffff",
  margin: "0px auto",
  padding: "0px 0px",
  borderRadius: "4px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
}
