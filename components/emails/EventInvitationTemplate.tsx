import {
    Body,
    Button,
    Column,
    Container,
    Font,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
  } from "@react-email/components"
  
  interface EventInvitationProps {
    recipientName?: string
    eventDate?: string
    eventLocation?: string
    eventImageUrl?: string
  }
  
  export const EventInvitationTemplate = ({
    recipientName = "Stephen",
    eventDate = "Jan 27, 2023",
    eventLocation = "San Francisco, CA 94114",
    eventImageUrl = "https://cdn.templates.unlayer.com/assets/1672039625697-1.png",
  }: EventInvitationProps) => {
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
            fontStyle="normal"
          />
        </Head>
        <Preview>Your E-gift Card Is Ready to Serve</Preview>
        <Body style={{ fontFamily: "Asap", margin: 0, padding: 0, background: "#ffffff" }}>
          <Tailwind>
            <Container className="min-h-screen bg-[#f8f7f7] overflow-hidden">
              {/* Header - Replacing DualColumn */}
              <Section className="p-1 w-full bg-white bg-contain bg-center bg-no-repeat">
                <Row>
                  {/* Column One Content */}
                  <Column className="w-1/2">
                    <div className="mx-auto text-left pl-9 pr-4 bg-white pb-2 pt-[3rem] mr-5">
                      <Heading className="text-2xl !mb-0 font-bold text-[#000000] !mt-1 text-start">
                        Join Us For
                        <br />
                        Special Event
                      </Heading>
  
                      <div className="text-start mt-4">
                        <Button
                          href="#"
                          className="text-xs rounded-full"
                          style={{
                            backgroundColor: "#512be8",
                            color: "#fff",
                            borderRadius: "1px",
                            padding: "10px 38px",
                            textDecoration: "none",
                          }}
                        >
                          Save my Spot
                        </Button>
                      </div>
                    </div>
                  </Column>
  
                  {/* Column Two Content */}
                  <Column className="w-1/2">
                    <div
                      style={{
                        backgroundImage: 'url("https://utfs.io/f/a8790803-2e14-4010-b518-f8057ae3c225-rywu2r.png")',
                      }}
                      className="w-full h-[50vh] !pl-0 pr-10"
                    >
                      <Img src={eventImageUrl} alt="New Collection" className="w-full h-full object-cover bg-center" />
                    </div>
                  </Column>
                </Row>
              </Section>
  
              {/* Main Content - Replacing SingleColumn */}
              <Section className="pl-8 w-full bg-[#f8f7f7]">
                <Text className="text-black text-sm">Hi {recipientName}!</Text>
                <Text className="text-[#2dc26b] text-sm">We Wish you a Happy New Month!</Text>
                <Text className="text-sm w-[90%]">
                  Nam sodales sed nisi in posuere. Nulla sed nibh tincidunt, placerat nisl vel, tristique est. In vel
                  facilisis massa. In tempus commodo sagittis. Fusce a felis at tellus pulvinar lacinia.
                </Text>
                <Text className="text-sm w-[90%]">
                  Vivamus placerat tortor molestie, porttitor ex sit amet, rutrum mi. Suspendisse ultrices viverra
                  tristique. Morbi gravida quam quis massa pulvinar, id dictum lectus pellentesque. Donec sit amet auctor
                  dolor, efficitur facilisis lorem. Sed tempor nisl ac risus viverra, et scelerisque erat sagittis.
                </Text>
                <div className="mt-7 mb-7">
                  <Text className="text-sm !mb-0 font-semibold">Date: {eventDate}</Text>
                  <Text className="text-sm !mt-0 font-semibold">{eventLocation}</Text>
                  <div className="text-center mt-8">
                    <Button
                      href="#"
                      className="text-xs rounded-full"
                      style={{
                        backgroundColor: "#512be8",
                        color: "#fff",
                        borderRadius: "1px",
                        padding: "10px 38px",
                        textDecoration: "none",
                      }}
                    >
                      Save my Spot
                    </Button>
                  </div>
                </div>
              </Section>
  
              <Hr className="h-[1px] bg-[#6b6b6b] mt-8 mx-8 border-0" />
  
              {/* Footer */}
              <Section className="w-full bg-white py-3 text-white text-center !mt-0">
                <div
                  style={{
                    marginTop: "4px",
                    padding: "15px",
                  }}
                  className="w-full text-center mt-4 !gap-0"
                >
                  <Row>
                    <Column align="center">
                      <Link href="#">
                        <Img
                          src="https://cdn.tools.unlayer.com/social/icons/rounded-black/facebook.png"
                          alt="Facebook"
                          width="25"
                          height="25"
                          className="object-cover rounded-full inline-block mx-1"
                        />
                      </Link>
                      <Link href="#">
                        <Img
                          src="https://cdn.tools.unlayer.com/social/icons/rounded-black/twitter.png"
                          alt="Twitter"
                          width="25"
                          height="25"
                          className="object-cover rounded-full inline-block mx-1"
                        />
                      </Link>
                      <Link href="#">
                        <Img
                          src="https://cdn.tools.unlayer.com/social/icons/rounded-black/linkedin.png"
                          alt="LinkedIn"
                          width="25"
                          height="25"
                          className="object-cover rounded-full inline-block mx-1"
                        />
                      </Link>
                      <Link href="#">
                        <Img
                          src="https://cdn.tools.unlayer.com/social/icons/rounded-black/instagram.png"
                          alt="Instagram"
                          width="25"
                          height="25"
                          className="object-cover rounded-full inline-block mx-1"
                        />
                      </Link>
                    </Column>
                  </Row>
                </div>
                <Text className="text-xs mt-2 text-black">Home | Page | About | Contact us</Text>
                <Text className="text-xs mx-[2rem] text-black font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </Text>
                <Text className="text-xs mt-2 text-black">Copyright © YourCompany | All Rights Reserved</Text>
              </Section>
            </Container>
          </Tailwind>
        </Body>
      </Html>
    )
  }
  
  export default EventInvitationTemplate