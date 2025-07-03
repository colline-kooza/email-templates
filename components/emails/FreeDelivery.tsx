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
  } from "@react-email/components";
 
  
  export const FreeDelivery = () => {
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
        <Preview>We Are Ready To Delivery</Preview>
        <Body style={{ fontFamily: "Asap", margin: 0, padding: 0, background: "#e7e7e7" }}>
          <Tailwind>
            <Container className="min-h-screen bg-[#ffffff]">
              {/* Heading Section */}
              <div className="text-center pt-2 pb-4">
                <Heading className="text-3xl font-bold text-black">
                We Are Ready
                 <br />
                 To Delivery
                </Heading>
                <Text className="text-xs text-gray-600 px-[2rem]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus commodo.
                </Text>
                <div className="mt-4">
                  <Button
                    href="#"
                    className="text-xs rounded-md"
                    style={{
                      backgroundColor: "#000000",
                      color: "#ffffff",
                      padding: "10px 48px",
                      textDecoration: "none",
                    }}
                  >
                    Order Now
                  </Button>
                </div>
              </div>
  
              {/* Image Section */}
              <div className="text-center mx-auto py-6">
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1693548592629-gif.gif"
                  alt="Delivery Image"
                  className="w-full"
                />
              </div>
  
              {/* Footer Section */}
              <div className="bg-[#fdcdd1] py-6 text-center">
                <div className="text-center mx-auto">
                  <a href="#">
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                      alt="Facebook"
                      style={iconStyle}
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                      alt="Twitter"
                      style={iconStyle}
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                      alt="LinkedIn"
                      style={iconStyle}
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                      alt="Instagram"
                      style={iconStyle}
                    />
                  </a>
                </div>
                <Text className="text-xs mt-4 text-black">
                  UNSUBSCRIBE | PRIVACY POLICY | WEB
                </Text>
                <Text className="text-xs mx-8 text-black ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </Text>
              </div>
            </Container>
          </Tailwind>
        </Body>
      </Html>
    );
  };
  
  export default FreeDelivery;
  
  const iconStyle = {
    width: "25px",
    height: "25px",
    borderRadius: "0%",
    marginRight: "4px",
  };
  