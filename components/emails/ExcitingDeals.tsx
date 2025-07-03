import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Text,
    Font,
    Tailwind,
  } from "@react-email/components";
 
  
  export const ExcitingDeals = () => {
    return (
      <Html>
        <Head>
          <Font
            fontFamily="Arial"
            fallbackFontFamily="Verdana"
            webFont={{
              url: "https://fonts.gstatic.com/s/asap/v30/KFO9CniXp96a4Tc2DaTeuDAoKsE615hGW36MAA.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Body style={{ fontFamily: "Arial", margin: 0, padding: 0, background: "#e7e7e7" }}>
          <Tailwind>
            <Container className="min-h-screen bg-[#ffffff] overflow-hidden">
              {/* Header Section */}
              <div className="w-full text-center bg-white pt-2 pb-4">
                <Heading className="text-2xl font-bold text-[#000000]">
                Buckle Up
                <br />
                for Unbelievable Taxi
                <br />
                Service Discounts
                </Heading>
                <Button
                className="text-xs"
                  href="#"
                  style={{
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    padding: "10px 34px",
                    marginTop: "10px",
                    textDecoration: "none",
                  }}
                >
                  Discover More
                </Button>
              </div>
  
              {/* Taxi Image */}
              <div className="w-full text-center pt-6 pb-2">
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1696487523728-Vector%20Smart%20Object%20copy%203.png"
                  alt="Taxi Image"
                  style={{ maxWidth: "500px", height: "auto", margin: "0 auto" }}
                />
              </div>
  
              {/* Promotion Text */}
              <div className="w-full text-center bg-white py-4">
                <Text className="text-xl font-bold text-[#000000] !mb-0">
                DON'T MISS OUT
                </Text>
                <Text className="text-sm font-semibold text-[#000000] bg-[#f1c40f] mx-[10%] !mt-0">
                on the exciting deals and updates we've </Text>
                <Text className="text-2xl font-semibold !mt-0">
                PREPARED JUST
                <br />
                FOR YOU.
                </Text>
              </div>
  
              {/* Mobile App Promotion */}
              <div className="w-full text-center py-6">
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1696493297863-mobile.png"
                  alt="Mobile App"
                  style={{ maxWidth: "200px", height: "auto", margin: "0 auto" }}
                />
              </div>
  
              {/* App Store Buttons */}
              <div className="w-full text-center py-6 mx-auto !mb-0">
                <a href="https://apps.apple.com" target="_blank">
                  <img
                    src="https://cdn.templates.unlayer.com/assets/1696493534110-apple1.png"
                    alt="App Store"
                    style={{ maxWidth: "120px", height: "auto", margin: "0 10px" }}
                  />
                </a>
                <a href="https://play.google.com" target="_blank">
                  <img
                    src="https://cdn.templates.unlayer.com/assets/1696493546973-google%20play.png"
                    alt="Google Play"
                    style={{ maxWidth: "120px", height: "auto", margin: "0 10px" }}
                  />
                </a>
              </div>
              <p className="!mt-0 text-xs text-center mx-[10%] text-[#000000]">To ensure you never miss another email from us,
                please add our email address ([Your Email Address]) to your safe  senders list
               or mark this email as "Not Spam."</p>
  
              {/* Footer */}
              <div className="w-full text-center bg-[#ffffff] py-6">
                <Text className="text-xs text-[#6b6b6b]">Copyright © 2024 | All Rights Reserved</Text>
              </div>
                 {/* Footer */}
                 <div className="w-full bg-[#ffffff] py-3 text-black text-center !mt-5">
                <div className="mx-auto">
                  <img src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png" alt="Facebook" style={iconStyle} />
                  <img src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png" alt="Instagram" style={iconStyle} />
                  <img src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png" alt="Pinterest" style={iconStyle} />
                  <img src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png" alt="YouTube" style={iconStyle} />
                </div>
                <Text className="text-xs mt-2">Home   |   Page   |   About   |   Contact us  </Text>
                <Text className="text-xs mx-[2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</Text>
                <Text className="text-xs mt-2">Copyright © YourCompany | All Rights Reserved</Text>
              </div>
            </Container>
          </Tailwind>
        </Body>
      </Html>
    );
  };
  
  export default ExcitingDeals;
  const iconStyle = {
    width: "28px",
    height: "28px",
    borderRadius: "0%",
    marginRight: "4px",
  };