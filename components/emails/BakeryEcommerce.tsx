import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Font,
  Section,
  Row,
  Column,
} from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

export const BakeryEcommerce = () => {
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
      <Body style={{ fontFamily: "Asap", margin: 0, padding: 0, background: "black" }}>
        <Tailwind>
          <Container className="min-h-screen bg-[rgb(255,255,255)] overflow-hidden">
            <div className="w-full text-center  bg-[#6f391b] !mb-0">
              <img
                src="https://cdn.templates.unlayer.com/assets/1647435471688-Logo%20White.png"
                alt="Bakery Logo"
                className="w-[4.8rem] py-3"
              />
            </div>

            <div style={background} className="w-[100%] h-[50vh] !mt-0 ">
              <div className="mx-auto pt-[5rem]">
                <h2 className="!mt-0 !mb-1 text-2xl text-white text-center">HAPPY</h2>
                <h2 className="!mt-0 !mb-0 text-3xl text-[#cc8c54] text-center">ST. PATRICK'S</h2>
                <h2 className="!mt-1 !mb-0 text-2xl text-white text-center">DAY!</h2>
              </div>
            </div>

            <div className="!text-center !mx-auto w-full flex py-7 my-3 bg-[#f6f6f6] !mb-0 overflow-hidden">
              <div className="text-center mx-auto ">
                <img
                  src="https://utfs.io/f/7e33e9c9-defa-46a6-9de1-b8ce9fcd9380-5poc22.png"
                  alt="Tiramisu Cake"
                  className="w-28 h-28 object-cover !mb-0"
                />
                <h6 className=" !mt-0 !mb-0 text-sm">Tiramisu cake</h6>
                <div className="text-center ">
                  <Text className="!mt-1 !mb-0 text-[12px] leading-4 text-center text-xs">
                    Your product description here
                  </Text>
                </div>
              </div>
              <div className="text-center mx-auto">
                <img
                  src="https://utfs.io/f/fb9973ee-5014-4259-ae40-a2fd31e36119-x581ka.png"
                  alt="Tiramisu Cake"
                  className="w-28 h-28 object-cover !mb-0"
                />
                <h6 className=" !mt-0 !mb-0 text-sm">Tiramisu cake</h6>
                <div className="text-center ">
                  <Text className="!mt-1 !mb-0 text-[12px] leading-4 text-center">Your product description here</Text>
                </div>
              </div>
              <div className="text-center mx-auto">
                <img
                  src="https://utfs.io/f/7e33e9c9-defa-46a6-9de1-b8ce9fcd9380-5poc22.png"
                  alt="Tiramisu Cake"
                  className="w-28 h-28 object-cover !mb-0"
                />
                <h6 className=" !mt-0 !mb-0 text-sm">Tiramisu cake</h6>
                <div className="text-center ">
                  <Text className="!mt-1 !mb-0 text-[12px] leading-4 text-center">Your product description here</Text>
                </div>
              </div>
            </div>

            {/* Baking Products Section */}
            <div className="text-center !mt-0 mb-8 bg-white">
              <div className="mx-auto">
                <img
                  src="https://cdn.templates.unlayer.com/assets/1647433765743-Baking%20Products%20Text.png"
                  className="w-[100px] h-[100px] object-contain"
                  alt=""
                />
              </div>
              <div className="flex flex-wrap justify-center">
                <div className="text-center p-4">
                  <img
                    src="https://cdn.templates.unlayer.com/assets/1647434251073-Baking%2001.png"
                    alt="Crunchy bread"
                    className="w-32 h-32 object-cover mb-2"
                  />
                  <Text style={{ fontStyle: "italic" }} className="font-normal text-xs !mt-0 !mb-0 text-center ">
                    Crunchy bread
                  </Text>
                </div>
                <div className="text-center p-4">
                  <img
                    src="https://cdn.templates.unlayer.com/assets/1647434252411-Baking%2002.png"
                    alt="Cupcakes"
                    className="w-32 h-32 object-cover mb-2"
                  />
                  <Text style={{ fontStyle: "italic" }} className="font-normal  text-xs !mt-0 !mb-0 text-center">
                    Cupcakes
                  </Text>
                </div>
                <div className="text-center p-4">
                  <img
                    src="https://cdn.templates.unlayer.com/assets/1647434255427-Baking%2003.png"
                    alt="Delicious donuts"
                    className="w-32 h-32 object-cover mb-2"
                  />
                  <Text style={{ fontStyle: "italic" }} className="font-normal  text-xs !mt-0 !mb-0 text-center">
                    Delicious donuts
                  </Text>
                </div>
                <div className="text-center p-4">
                  <img
                    src="https://cdn.templates.unlayer.com/assets/1647434259554-Baking%2004.png"
                    alt="Chocolate cake"
                    className="w-32 h-32 object-cover mb-2"
                  />
                  <Text style={{ fontStyle: "italic" }} className="font-normal  text-xs !mt-0 !mb-0 text-center">
                    Chocolate cake
                  </Text>
                </div>
                <div className="text-center p-4">
                  <img
                    src="https://cdn.templates.unlayer.com/assets/1647434612880-Baking%2005.png"
                    alt="Assortment pieces"
                    className="w-32 h-32 object-cover mb-2"
                  />
                  <Text style={{ fontStyle: "italic" }} className="font-normal  text-xs !mt-0 !mb-0 text-center">
                    Assortment pieces
                  </Text>
                </div>
                <div className="text-center p-4">
                  <img
                    src="https://cdn.templates.unlayer.com/assets/1647434264393-Baking%2006.png"
                    alt="Cin roll"
                    className="w-32 h-32 object-cover mb-1"
                  />
                  <Text style={{ fontStyle: "italic" }} className="font-normal  text-xs !mt-0 !mb-0 text-center">
                    Cin roll
                  </Text>
                </div>
              </div>
            </div>

            <div
              style={{ borderBottom: "1px solid #2f2f30" }}
              className="flex flex-col items-center justify-center my-6 pb-7 bg-white"
            >
              <Section>
                <Row>
                  <Column>
                    <div className="flex items-center justify-center pl-1 ">
                      <img
                        src="https://cdn.templates.unlayer.com/assets/1647434427265-Image_.png"
                        alt=""
                        style={{ maxHeight: 240, maxWidth: "100%" }}
                      />
                    </div>
                  </Column>
                  <Column>
                    <div className="mx-auto mt-10  text-left  pl-[2rem] ">
                      <Heading className="text-xl text-[#000] !mt-0 !mb-2">Chocolate Brownies</Heading>
                      <Text className="text-xs text-[#677987] my-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      </Text>

                      <div>
                        <Button
                          className="!mt-2 text-center font-semibold"
                          href="https://example.com"
                          style={{
                            backgroundColor: "#6f391b",
                            color: "#ffff",
                            padding: "10px 80px",
                            textDecoration: "none",
                            fontSize: "11px",
                            borderRadius: "3px",
                          }}
                        >
                          GET NOW
                        </Button>
                      </div>
                    </div>
                  </Column>
                </Row>
              </Section>
            </div>

            <div className="min-h-[30vh] w-full pl-5 bg-white">
              <Section>
                <Row>
                  <Column>
                    <div className="flex h-[30vh]">
                      <div>
                        <img
                          src="https://cdn.templates.unlayer.com/assets/1647501620900-12.png"
                          className="h-[100%]"
                          alt=""
                        />
                      </div>
                    </div>
                  </Column>
                  <Column>
                    <div className="flex h-[30vh] mt-2">
                      <div>
                        <img
                          src="https://cdn.templates.unlayer.com/assets/1647501657036-13.png"
                          className="h-[100%]"
                          alt=""
                        />
                      </div>
                    </div>
                  </Column>
                  <Column>
                    <div className="flex h-[30vh] mt-2 mb-2">
                      <div>
                        <img
                          src="https://cdn.templates.unlayer.com/assets/1647501691847-14.png"
                          className="h-[100%]"
                          alt=""
                        />
                      </div>
                    </div>
                  </Column>
                </Row>
              </Section>
            </div>

            <div className="w-full bg-[#6f391b] py-3 text-white text-center">
              <div className="mb-2">
                <div className="mx-auto gap-2 mt-2">
                  <img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-white/facebook.png"
                    alt="Facebook"
                    style={iconStyle}
                  />
                  <img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-white/linkedin.png"
                    alt="Instagram"
                    style={iconStyle}
                  />
                  <img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-white/twitter.png"
                    alt="Pinterest"
                    style={iconStyle}
                  />
                  <img
                    src="https://cdn.tools.unlayer.com/social/icons/circle-white/instagram.png"
                    alt="YouTube"
                    style={iconStyle}
                  />
                </div>
              </div>
              <div className="mb-4  ">
                <p className="!mt-0 !mb-0 text-xs text-white text-center">
                  2261 Market Street #4667 San Francisco, CA 94114
                </p>
                <p className="!mt-0 !mb-0 text-xs text-white text-center">All rights reserved. Company No. 94114</p>
              </div>

              <Text className="text-xs text-white text-center">Preferences | Unsubscribe | View in browser</Text>
            </div>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  )
}

export default BakeryEcommerce

const iconStyle = {
  width: "25px",
  height: "25px",
  borderRadius: "40%",
  marginRight: "4px",
}

const background = {
  backgroundImage: 'url("https://utfs.io/f/c2057b11-c41b-44a6-8ab3-e1c8e1350b9f-3vdtly.png")',
  backgroundSize: "cover",
}
