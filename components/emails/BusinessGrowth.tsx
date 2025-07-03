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

export const BusinessGrowth = () => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Asap"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/asap/v30/KFO9CniXp96a4Tc2DaTeuDAoKsE615hGW36MAA.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="initial"
        />
      </Head>
      <Preview>We Take Care of Your Business Growth</Preview>
      <Body style={{ fontFamily: "Asap", margin: 0, padding: 0, background: "#f4ae97" }}>
        <Tailwind>
          <Container className="min-h-screen bg-[#ffffff] overflow-hidden">
            {/* Header */}
            <Section>
              <Row>
                <Column>
                  <div
                    style={{ borderBottom: "1px solid #e1e1e1" }}
                    className="flex justify-between items-center px-5 py-4"
                  >
                    <div className="w-1/2">
                      <Img
                        src="https://cdn.templates.unlayer.com/assets/1629434690548-pen-08-ai.png"
                        alt="Business Growth Logo"
                        className="w-32 h-auto object-contain"
                      />
                    </div>
                    <Link href="#" className="text-[#7d7d7d] text-sm font-medium hover:text-[#ed7e5a]">
                      Open
                    </Link>
                  </div>
                </Column>
              </Row>
            </Section>

            {/* Hero Section */}
            <Section style={{ background: "#ec4b6f" }}>
              <Row>
                <Column>
                  <div className="pl-8 pt-10 pr-4">
                    <Heading className="text-2xl text-[#ffffff] font-bold !mt-0 !mb-3">
                      We Take Care of Your
                      <br />
                      Business Growth
                    </Heading>
                    <Text className="text-sm text-[#ffffff] my-4 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </Text>
                    <Button
                      href="https://example.com"
                      style={{
                        backgroundColor: "#ffffff",
                        color: "#000",
                        borderRadius: "4px",
                        padding: "12px 24px",
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: "600",
                        marginTop: "16px",
                        marginBottom: "24px",
                        display: "inline-block",
                      }}
                    >
                      Discover More
                    </Button>
                  </div>
                </Column>
                <Column>
                  <div className="flex items-center justify-center py-8 px-4">
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1629433573757-Business%20Breakthrough-ai.png"
                      alt="Business Growth Illustration"
                      style={{ maxHeight: 300, maxWidth: "100%" }}
                    />
                  </div>
                </Column>
              </Row>
            </Section>

            {/* Ideas Section */}
            <Section>
              <Row>
                <Column>
                  <div className="flex items-center justify-center py-8 px-4">
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1629435565515-Man_and_woman_with_briefcase_shake_hand-ai.png"
                      alt="Business Partnership"
                      style={{ maxHeight: 300, maxWidth: "100%" }}
                    />
                  </div>
                </Column>
                <Column>
                  <div className="px-6 py-6">
                    <Heading className="text-xl font-bold text-left text-[#000000] mb-4">
                      We Provide Remarkable
                      <br /> Ideas!
                    </Heading>
                    <ul className="list-disc pl-5 space-y-4">
                      <li className="text-sm text-left text-[#8c8a8c]">
                        <span className="text-[#ed7e5a] font-bold">Development:</span>
                        <br />
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
                      </li>
                      <li className="text-sm text-left text-[#8c8a8c]">
                        <span className="text-[#ed7e5a] font-bold">Strategy:</span>
                        <br />
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
                      </li>
                      <li className="text-sm text-left text-[#8c8a8c]">
                        <span className="text-[#ed7e5a] font-bold">Responsibility:</span>
                        <br />
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
                      </li>
                    </ul>
                  </div>
                </Column>
              </Row>
            </Section>

            {/* Project Gallery */}
            <Section>
              <Row>
                <Column>
                  <div className="w-full mt-8 mb-4">
                    <Heading className="text-2xl font-bold text-center text-[#f77f3b] mb-2">
                      Our Project Gallery
                    </Heading>
                    <Text className="text-sm text-center font-medium mx-8 text-[#000000] mb-6">
                      Management consulting includes a broad range of activities, and the many firms and their members
                      often define these practices quite differently.
                    </Text>
                  </div>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1629436653253-alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg"
                    alt="Gallery Image 1"
                    className="w-full h-auto object-cover"
                  />
                </Column>
                <Column>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1629436675736-campaign-creators-e6n7uoEnYbA-unsplash.jpg"
                    alt="Gallery Image 2"
                    className="w-full h-auto object-cover"
                  />
                </Column>
                <Column>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1629436683398-campaign-creators-gMsnXqILjp4-unsplash.jpg"
                    alt="Gallery Image 3"
                    className="w-full h-auto object-cover"
                  />
                </Column>
              </Row>
              <Row>
                <Column>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1629436701563-campaign-creators-gMsnXqILjp4-unsplash.jpg"
                    alt="Gallery Image 4"
                    className="w-full h-auto object-cover"
                  />
                </Column>
                <Column>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1629436706309-christina-wocintechchat-com-b6dfPNHa81w-unsplash.jpg"
                    alt="Gallery Image 5"
                    className="w-full h-auto object-cover"
                  />
                </Column>
                <Column>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1629436710807-leon-6awfTPLGaCE-unsplash.jpg"
                    alt="Gallery Image 6"
                    className="w-full h-auto object-cover"
                  />
                </Column>
              </Row>
            </Section>

            {/* Support Section */}
            <Section style={{ background: "#ed7e5a" }}>
              <Row>
                <Column>
                  <div className="pl-8 py-6">
                    <Heading className="text-xl text-[#ffffff] font-bold !mt-0 !mb-2">Do you have a question?</Heading>
                    <Text className="text-sm text-[#ffffff] my-2">
                      Please create a ticket to our support forum. A great place to learn, share, and troubleshoot. Get
                      started.
                    </Text>
                  </div>
                </Column>
                <Column>
                  <div className="flex items-center justify-center h-full">
                    <Button
                      href="https://example.com"
                      style={{
                        backgroundColor: "#ffffff",
                        color: "#ef988a",
                        borderRadius: "6px",
                        padding: "12px 16px",
                        textDecoration: "none",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      ASK SUPPORT 
                    </Button>
                  </div>
                </Column>
              </Row>
            </Section>

            {/* Video Section */}
            <Section>
              <Row>
                <Column>
                  <div className="py-8 px-4">
                    <Heading className="text-xl font-bold text-center text-[#ed7e5a] mb-3">Video Of This Week</Heading>
                    <Text className="text-sm text-center mx-8 mb-6">
                      Management consulting includes a broad range of activities, and the many firms and their members
                      often define these practices differently.
                    </Text>
                  </div>
                </Column>
                <Column>
                  <div className="flex justify-center py-4 px-4">
                    <Link href="#">
                      <Img
                        src="https://cdn.templates.unlayer.com/assets/1629438388759-video_youtube_TboWOSW7qCI.jpg"
                        alt="Video Thumbnail"
                        style={{ maxHeight: 300, maxWidth: "100%", borderRadius: "8px" }}
                      />
                    </Link>
                  </div>
                </Column>
              </Row>
            </Section>

            {/* Footer */}
            <Section style={{ background: "#ed7e5a" }}>
              <Row>
                <Column>
                  <div className="py-8 text-center">
                    <div className="flex justify-center space-x-4 mb-4">
                      <Link href="#">
                        <Img
                          src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                          alt="Facebook"
                          style={{ width: "30px", height: "30px" }}
                        />
                      </Link>
                      <Link href="#">
                        <Img
                          src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
                          alt="LinkedIn"
                          style={{ width: "30px", height: "30px" }}
                        />
                      </Link>
                      <Link href="#">
                        <Img
                          src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                          alt="Twitter"
                          style={{ width: "30px", height: "30px" }}
                        />
                      </Link>
                    </div>
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
                    <Text className="text-sm text-white mx-8 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore.
                    </Text>
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

export default BusinessGrowth
