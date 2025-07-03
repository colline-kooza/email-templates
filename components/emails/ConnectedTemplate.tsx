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

export const ConnectedTemplate = () => {
  const baseUrl = "http://localhost:3001"

  return (
    <Html>
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxMKTU1Kvnz.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="initial"
        />
      </Head>
      <Preview>Build Your First Interactive Prototype</Preview>
      <Body
        style={{
          backgroundColor: "#a6b7ff",
          fontFamily: "Roboto, Verdana, sans-serif",
          margin: "0",
          padding: "0",
        }}
      >
        <Tailwind>
          <Container style={container} className="overflow-hidden">
            {/* Main Content */}
            <Section className="w-full text-center py-5 bg-white">
              <Text className="text-[#2b4bff] text-xs">Product Feature</Text>
              <Heading className="text-2xl font-bold text-black">
                Stay Connected With Our
                <br />
                Latest Updates
              </Heading>
              <Img
                src="https://cdn.templates.unlayer.com/assets/1677739655713-Asset%201.png"
                alt="Gift Card"
                width={600}
                height={250}
                className="w-full mx-auto object-contain mt-4"
                style={{ maxHeight: "250px" }}
              />
              <Text className="text-sm mt-4 mb-6 px-10 text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                lacus.
              </Text>
              <Button
                href="#"
                style={{
                  backgroundColor: "#2b4bff",
                  color: "#ffffff",
                  borderRadius: "10px",
                  padding: "14px 35px",
                  textDecoration: "none",
                  fontSize: "12px",
                  display: "inline-block",
                }}
              >
                Explore More New Features
              </Button>
            </Section>

            <Section className="w-full text-center py-5 bg-[#f6f6f6]">
              <Img
                src="https://cdn.templates.unlayer.com/assets/1677739790247-Asset%202.png"
                alt="Drag and Drop Editor"
                width={600}
                height={250}
                className="w-full mx-auto object-contain mt-4"
                style={{ maxHeight: "250px" }}
              />
              <Heading className="text-xl font-bold text-black">
                Introducing a Free Drag and Drop
                <br />
                Image Editor Tool
              </Heading>
              <Text className="text-sm mt-4 mb-6 px-10 text-gray-800">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis vulputate velit esse molestie laoreet dolore.
              </Text>
            </Section>

            <Section className="w-full text-center py-5 bg-[#f6f6f6]">
              <Img
                src="https://cdn.templates.unlayer.com/assets/1677739973274-Asset%203.png"
                alt="Text Organization"
                width={600}
                height={250}
                className="w-full mx-auto object-contain mt-4"
                style={{ maxHeight: "250px" }}
              />
              <Heading className="text-xl font-bold text-black">Effortlessly Organize Your Text</Heading>
              <Text className="text-sm mt-4 mb-6 px-10 text-gray-800">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis vulputate velit esse molestie laoreet dolore.
              </Text>
            </Section>

            <Section className="w-full text-center py-5 bg-white">
              <Button
                href="#"
                style={{
                  backgroundColor: "#2b4bff",
                  color: "#ffffff",
                  borderRadius: "4px",
                  padding: "12px 25px",
                  textDecoration: "none",
                  fontSize: "12px",
                  display: "inline-block",
                }}
              >
                Complete Guideline
              </Button>
              <Text className="text-sm mt-4 mb-6 px-10 text-gray-800">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis vulputate velit esse molestie laoreet dolore.
              </Text>
            </Section>

            <Section className="mx-auto my-6 pb-3 bg-[#f6f6f6]">
              <Row>
                <Column style={{ width: "50%", borderRight: "1px solid #2f2f30", padding: "20px" }}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1677740059601-Asset%204.png"
                    alt="Leena Nick"
                    width={180}
                    height={180}
                    style={{ maxHeight: "180px", maxWidth: "100%"  , objectFit:"contain"}}
                    className="mx-auto"
                  />
                </Column>
                <Column style={{ width: "50%", padding: "20px" }}>
                  <Heading className="text-sm italic font-bold text-left text-black mb-0">Leena Nick</Heading>
                  <Heading className="text-lg italic font-bold text-left text-black mb-1 mt-0">
                    Customer Success Officer
                  </Heading>
                  <Text className="text-sm mb-0 mt-0">
                    Lorem ipsum dolor sit amet, consectetuer adip iscing elit, sed diam nonummy.
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
                </Column>
              </Row>
            </Section>

            {/* Footer */}
            <Section className="w-full bg-[#a6b7ff] py-3 text-black text-center mt-0">
              <Text className="text-xs mt-2">Home | Page | About | Contact us</Text>
              <Text className="text-xs mx-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
              </Text>
              <Text className="text-xs mt-2">Copyright © YourCompany | All Rights Reserved</Text>
            </Section>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  )
}

export default ConnectedTemplate

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
