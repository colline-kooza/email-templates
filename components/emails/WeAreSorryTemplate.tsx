import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Text,
    Tailwind,
    Font,
  } from "@react-email/components";
 
  
  export const WeAreSorryTemplate = () => {
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
        <Preview>We are sorry!</Preview>
        <Body style={{ fontFamily: "Asap", margin: 0, padding: 0, background: "#ffffff" }}>
          <Tailwind>
            <Container className="min-h-screen bg-[#ffffff] overflow-hidden">
              {/* Header */}
              <div style={{ borderBottom: "1px solid #ffff" }}  className="w-full bg-[#000000] text-center py-3 border-b-[1px] border-[#64748b]">
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1643359372986-car.png"
                  alt="Your Brand Logo"
                  className="w-[100px] h-[50px] mx-auto"
                />
              </div>
  
              {/* Main Content */}
              <div style={{ backgroundImage: 'url("https://utfs.io/f/2342837b-6ecb-433f-b51f-5f82d3b3906e-z0sheb.png")'}} className="w-full text-center py-16  relative bg-contain bg-black  bg-no-repeat ">
                <Heading className="text-xl font-normal text-[#e8ffff] mb-4">
                   WE ARE
                   <br />
                   <span className="text-4xl mt-3 text-[#ffffff] font-bold">
                   SORRY !
                   </span>
                </Heading>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1643363500558-emo.png"
                  alt="Sad Face"
                  className="w-[80px] h-[80px] mx-auto mb-4 absolute bottom-[-20%] right-[43%] "
                />
              
              </div>
               <div>
               <Text className="text-sm text-gray-700 text-center mb-6 mt-14 mx-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
                <Heading className="text-2xl text-center mt-7 font-normal text-[#34495e] mb-4">
                We Have New Quotes
                <br />
                For your Vehicle
                </Heading>

                <div>
                <div className="text-center mt-5 mb-10 ">
                <Button
                  className="bg-[#ad0102] rounded-lg text-white py-4 px-10 text-xs font-normal"
                  href="#"
                  style={{ textDecoration: "none" }}
                >
                 GET YOUR QUOTES &gt; &gt;
                </Button>
                </div>
                </div>
                
               
            </div>
              {/* Discount Section */}
              <div style={{ backgroundImage: 'url("https://utfs.io/f/21e45c1b-14e9-4805-bff5-6db7e31d6f3d-cpv93v.png")'}} className="w-full text-start py-10 pl-9  text-white h-[25vh] ">
                <Heading className="text-xl font-bold mb-4">
                10% Discount For Your
                <br />
                Next Purchase
                </Heading>
              
                <div className=" mt-5 mb-5 ">
                <Button
                  className="bg-[#ad0102] rounded-lg text-white py-3 px-6 text-xs font-normal"
                  href="#"
                  style={{ textDecoration: "none" }}
                >
                 CLICK HERE
                </Button>
                </div>
              </div>
  
               {/* Footer */}
               <div className="w-full bg-black py-3 text-white text-center !mt-5">
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
  
  export default WeAreSorryTemplate;
  
  const iconStyle = {
    width: "28px",
    height: "28px",
    borderRadius: "0%",
    marginRight: "4px",
  };
  