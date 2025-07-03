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

export const BuildFirst = () => {
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
          backgroundColor: "#ecf0f1",
          fontFamily: "Roboto",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        }}
      >
        <Tailwind>
          <Container className="overflow-hidden" style={container}>
            {/* Header */}
            <Section>
              <Row>
                <Column>
                  <div className="w-full bg-[#ffffff] py-6">
                    <div className="mx-auto text-center">
                      <img
                        src="https://cdn.templates.unlayer.com/assets/1662461644850-logo.png"
                        alt="Beyond Logo"
                        style={{ maxHeight: 50, maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                </Column>
              </Row>
            </Section>

            {/* Main Content */}
            <Section>
              <Row>
                <Column>
                  <div className="w-full text-center py-10 bg-[#2299FF] text-white">
                    <Heading className="text-2xl font-bold">BUILD YOUR FIRST INTERACTIVE PROTOTYPE</Heading>
                    <Text className="text-sm mt-4 mb-6 px-10">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                      maecenas accumsan lacus.
                    </Text>
                    <Button
                      href="#"
                      style={{
                        backgroundColor: "#000000",
                        color: "#ffffff",
                        borderRadius: "30px",
                        padding: "14px 40px",
                        textDecoration: "none",
                        fontSize: "12px",
                      }}
                    >
                      Video Tutorial
                    </Button>
                  </div>
                </Column>
              </Row>
            </Section>

            {/* Guide Section */}
            <Section>
              <Row>
                <Column>
                  <div className="w-full text-center py-10">
                    <img
                      src="https://cdn.templates.unlayer.com/assets/1662461972948-sec.png"
                      alt="Guide Image"
                      style={{ maxHeight: "70%", maxWidth: "100%" }}
                      className="mx-auto mb-6"
                    />
                    <Heading className="text-xl font-bold text-[#000000]">
                      A Step-By-Step Guide to Your
                      <br />
                      First Prototype
                    </Heading>
                    <Text className="text-sm mt-4 px-10">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                      maecenas accumsan lacus vel facilisis.
                    </Text>
                  </div>
                </Column>
              </Row>
            </Section>

            {/* Build Prototype Section */}
            <Section>
              <Row>
                <Column>
                  <div className="text-center py-8 pt-4 bg-[#f2f6ff]">
                    <div className="w-full text-center py-7 bg-[#f2f6ff]">
                      <Heading className="text-xl font-bold">Build Your First Prototype</Heading>
                      <Text className="text-sm mt-4 px-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis.
                      </Text>
                    </div>
                    <div className="mx-auto text-center">
                      <Section>
                        <Row>
                          <Column>
                            <div className="mx-auto">
                              <Img
                                src="https://cdn.templates.unlayer.com/assets/1663579985967-b1.png"
                                alt="Build"
                                className="w-[50px] h-auto mb-4 mx-auto"
                              />
                              <Heading className="text-sm !mb-1 !mt-0">Build</Heading>
                              <div className="mx-auto text-center">
                                <Text className="text-sm !mt-0 w-[90%]">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt
                                </Text>
                              </div>
                            </div>
                          </Column>
                          <Column>
                            <div className="mx-auto">
                              <Img
                                src="https://cdn.templates.unlayer.com/assets/1663579988118-b2.png"
                                alt="Schedule"
                                className="w-[50px] h-auto mb-4 mx-auto"
                              />
                              <Heading className="text-sm !mb-1 !mt-0">Schedule</Heading>
                              <div className="mx-auto text-center">
                                <Text className="text-sm !mt-0 w-[90%]">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt
                                </Text>
                              </div>
                            </div>
                          </Column>
                        </Row>
                      </Section>
                      <Section>
                        <Row>
                          <Column>
                            <div className="mx-auto">
                              <Img
                                src="https://cdn.templates.unlayer.com/assets/1663579993260-b3.png"
                                alt="Monitor"
                                className="w-[50px] h-auto mb-4 mx-auto"
                              />
                              <Heading className="text-sm !mb-1 !mt-0">Monitor</Heading>
                              <div className="mx-auto text-center">
                                <Text className="text-sm !mt-0 w-[90%]">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt
                                </Text>
                              </div>
                            </div>
                          </Column>
                          <Column>
                            <div className="mx-auto">
                              <Img
                                src="https://cdn.templates.unlayer.com/assets/1663579996839-b4.png"
                                alt="Grow"
                                className="w-[50px] h-auto mb-4 mx-auto"
                              />
                              <Heading className="text-sm !mb-1 !mt-0">Grow</Heading>
                              <div className="mx-auto text-center">
                                <Text className="text-sm !mt-0 w-[90%]">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                  incididunt
                                </Text>
                              </div>
                            </div>
                          </Column>
                        </Row>
                      </Section>
                    </div>
                  </div>
                </Column>
              </Row>
            </Section>

            {/* Final CTA Section */}
            <Section>
              <Row>
                <Column>
                  <div className="bg-[#ffffff]">
                    <Heading className="text-xl text-center text-[#333333] font-bold mt-8">
                      Build Your First Prototype in
                      <br />
                      Minutes
                    </Heading>
                    <Text className="text-xs text-center text-[#2563eb] mt-2">Clicked for a Detailed Tutorial</Text>
                    <div className="mx-auto mt-6 text-center">
                      <img
                        src="https://cdn.templates.unlayer.com/assets/1662462865970-playstore.png"
                        alt="Google Play"
                        className="h-16 w-auto mx-2"
                      />
                    </div>
                    <Text className="text-sm mx-[10%] text-center text-[#b5b6b2] mt-6 mb-8">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </Text>
                  </div>
                </Column>
              </Row>
            </Section>

            {/* Footer */}
            <Section>
              <Row>
                <Column>
                  <div className="w-full bg-[#f8f8f8] py-4 text-center">
                    <Text className="text-xs text-[#666666]">© 2023 Beyond. All rights reserved.</Text>
                    <div className="mx-auto mt-2">
                      <Link href="#" className="text-xs text-[#2299FF] mx-2">
                        Privacy Policy
                      </Link>
                      <Link href="#" className="text-xs text-[#2299FF] mx-2">
                        Terms of Service
                      </Link>
                      <Link href="#" className="text-xs text-[#2299FF] mx-2">
                        Unsubscribe
                      </Link>
                    </div>
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

export default BuildFirst

const container = {
  backgroundColor: "#ffffff",
  margin: "0px auto",
  padding: "0px 0px",
  borderRadius: "4px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
}

const iconStyle = {
  width: "50px",
  height: "50px",
  margin: "0 auto",
  display: "block",
}
