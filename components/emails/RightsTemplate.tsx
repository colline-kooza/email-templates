import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Img,
  Font,
  Tailwind,
} from "@react-email/components";
import Link from "next/link";

export const RightsTemplate = () => {
  const baseUrl = "http://localhost:3001";
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
      <Preview>Justice begins where inequality ends</Preview>
      <Body
        style={{
          backgroundColor: "#e7e7e7",
          fontFamily: "DM Sans",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        }}
      >
        <Tailwind>
          <Container style={containerStyle}>
            <div
              style={{ borderBottom: "1px solid white" }}
              className="w-full  bg-[#d55342] py-3 pb-9"
            >
              <img
                src="https://cdn.templates.unlayer.com/assets/1621785012861-Logos.png"
                alt="Store Logo"
                style={{ maxHeight: 20, maxWidth: "100%", float: "left" }}
                className="!mb-2 ml-4"
              />
              <div
                style={{ float: "right" }}
                className="flex space-x-4 text-white mr-5"
              >
                <Link href="#" className="text-xs text-white ">
                  Contact | About | Campaigns{" "}
                </Link>
              </div>
            </div>
            <div className="!my-0 pb-7 bg-[#d55342] flex w-full ">
              <div className=" pt-6 !pl-0 w-[50%]">
                <img
                  className="bg-contain w-full h-full"
                  src="https://cdn.templates.unlayer.com/assets/1621781171023-banner.png"
                  alt="Luxury Watch"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="mx-auto text-left pl-[.1rem] pt-5 w-[40%]">
                <p className="text-[#ffffff] font-semibold text-xs">Justice</p>
                <p className="text-2xl text-[#ffffff] font-black !mt-2 !mb-2">
                  begins where
                  <br />
                  inequality
                  <br />
                  ends
                </p>
                <div>
                  <Button
                    className="!mt-2 text-center font-semibold"
                    href="https://example.com"
                    style={{
                      backgroundColor: "#ff9f0d",
                      color: "#ffffe9",
                      borderRadius: "4px",
                      padding: "10px 40px",
                      textDecoration: "none",
                      fontSize: "11px",
                    }}
                  >
                    Donate Now
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <div className="text-center pt-4">
                <Heading className="text-[#ffab0d] text-sm font-bold mb-1 ">
                  WHO WE ARE?
                </Heading>
                <Text className="text-[#000000] text-lg leading-6 mx-auto max-w-[500px] font-semibold !mb-0 !mt-0">
                  Make a Difference
                </Text>
                <Text className="text-[#555] text-sm leading-6 mx-auto max-w-[400px] !mt-2 !mb-0 ">
                  We go to the extent of meeting the actual people that the
                  nonprofits server.
                </Text>

                <div className="text-center mx-auto !mt-3">
                  <img
                    src="https://cdn.templates.unlayer.com/assets/1621785669380-free-access-svg.png"
                    alt=""
                    style={{ objectFit: "contain" }}
                    className="h-12 w-12 "
                  />
                  <img
                    src="https://cdn.templates.unlayer.com/assets/1621785711741-locals-for-locals-svg.png"
                    alt=""
                    style={{ objectFit: "contain" }}
                    className="h-12 w-12  ml-4"
                  />
                  <img
                    src="https://cdn.templates.unlayer.com/assets/1621785721959-real-impact-svg.png"
                    alt=""
                    style={{ objectFit: "contain" }}
                    className="h-12 w-12 ml-4"
                  />
                  <img
                    src="https://cdn.templates.unlayer.com/assets/1621785726243-safety-net-svg.png"
                    alt=""
                    style={{ objectFit: "contain" }}
                    className="h-12 w-12 ml-4"
                  />
                </div>
              </div>
            </div>

            <div className="!my-0 pb-1 bg-[#ffffff] flex w-full mt-4 text-center mx-auto">
              <div className=" pt-6 !pl-5 w-[40%]">
                <img
                  className="bg-contain w-full h-full"
                  src="https://cdn.templates.unlayer.com/assets/1621786117642-Left.png"
                  alt="Luxury Watch"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="mx-auto text-left pl-[.9rem] pt-5 w-[50%]">
                <p className="text-[#000] font-semibold text-xs">Justice</p>
                <p className="text-xl text-[#000] font-black !mt-2 !mb-2">
                  Support People in
                  <br />
                  Extreme Need
                </p>
                <Text className="text-xs text-[#000] my-2 tracking-wide">
                  consectetur adipiscing elit, Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit.magnam vel!
                </Text>
                <div>
                  <Button
                    className="!mt-2 text-center font-semibold"
                    href="https://example.com"
                    style={{
                      backgroundColor: "#000000",
                      color: "white",
                      borderRadius: "4px",
                      padding: "10px 40px",
                      textDecoration: "none",
                      fontSize: "11px",
                    }}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center ">
              <h4 className="text-xs !mb-0 text-[#ffb90d]">TESTIMONIAL</h4>
              <h1 className="text-lg !mt-0">What Our Clients Say</h1>
              <div>
                <div className="text-center !pt-0 ">
                  <div className="text-center mx-auto flex">
                    <div className="mx-auto mt-3">
                      <img
                        src="https://cdn.templates.unlayer.com/assets/1621786711181-testimonials-1.png"
                        alt=""
                        style={{ objectFit: "contain" }}
                        className="h-18 w-18 "
                      />
                      <h3 className="text-xs !mt-0 !mb-0">Jessica, warsaw</h3>
                      <p className="text-xs !mt-1 !mb-0 ">
                        {" "}
                        They are engaged communicators and dedicated
                        problem-solvers regardless of time constraints.
                      </p>
                    </div>
                    <div className="mx-auto ">
                      <img
                        src="https://cdn.templates.unlayer.com/assets/1621786714781-testimonials-2.png"
                        alt=""
                        style={{ objectFit: "contain" }}
                        className="h-18 w-128 "
                      />
                      <h3 className="text-xs !mt-0 !mb-0">
                        Mateusz, Katowice{" "}
                      </h3>
                      <p className="text-xs !mt-1 !mb-0 ">
                        {" "}
                        They are engaged communicators and dedicated
                        problem-solvers regardless of time constraints.
                      </p>
                    </div>
                    <div className="mx-auto ">
                      <img
                        src="https://cdn.templates.unlayer.com/assets/1621786720384-testimonials-3.png"
                        alt=""
                        style={{ objectFit: "contain" }}
                        className="h-18 w-18 "
                      />
                      <h3 className="text-xs !mt-0 !mb-0">Anna, New York</h3>
                      <p className="text-xs !mt-1 !mb-0 ">
                        {" "}
                        They are engaged communicators and dedicated
                        problem-solvers regardless of time constraints.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{ borderTop: "2px solid #f1f5f9" }}
              className="w-full bg-[#ffffff] py-4 text-center mt-5"
            >
              <div>
                <div className="mb-2">
                  {/* <Text className="text-xs text-gray-400 mt-2">
                  if you have any questions, please email us at
                  <br />
                  customer.success@unlayer.com or visit our FAQS, you can also chat
                  <br />
                  with a reel live human during our operating hours. They can answer
                  <br />
                  questions about your account
                  </Text> */}
                  <div className="mx-auto mt-2">
                    <Link href="https://facebook.com">
                      <img
                        src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                        alt="Facebook"
                        style={iconStyle}
                      />
                    </Link>
                    <Link href="https://linkedin.com">
                      <img
                        src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                        alt="LinkedIn"
                        style={iconStyle}
                      />
                    </Link>
                    <Link href="https://instagram.com">
                      <img
                        src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                        alt="Instagram"
                        style={iconStyle}
                      />
                    </Link>
                    <Link href="https://twitter.com">
                      <img
                        src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                        alt="Twitter"
                        style={iconStyle}
                      />
                    </Link>
                  </div>
                </div>
                <Text className="text-xs text-gray-400 mt-2 mx-8">
                  If you have any questions, please email us at{" "}
                  <Link href="mailto:customersuccess@unlayer.com">
                    customersuccess@unlayer.com
                  </Link>{" "}
                  or visit our <Link href="https://unlayer.com/faqs">FAQs</Link>
                  . You can also chat with a real live human during our
                  operating hours. They can answer questions about your account.
                </Text>
                <Text className="text-xs text-gray-400 mt-2">
                  2261 Market Street #4667 San Francisco, CA 94114 All rights
                  reserved.
                </Text>
              </div>
            </div>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  );
};

export default RightsTemplate;

const containerStyle = {
  backgroundColor: "#ffffff",
  margin: "0px auto",
  padding: "0px",
  borderRadius: "4px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const iconStyle = {
  width: "25px",
  height: "25px",
  marginBottom: "10px",
};
