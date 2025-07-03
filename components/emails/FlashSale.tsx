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
 
  
  export const FlashSale = () => {
    return (
      <Html>
        <Head>
          <Font
            fontFamily="Roboto"
            fallbackFontFamily="Verdana"
            webFont={{
              url: "https://fonts.gstatic.com/s/roboto/v30/KFOiCnqEu92Fr1Mu51QrEz0dL_nz.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="initial"
          />
        </Head>
        <Preview>Flash Sale Alert!</Preview>
        <Body style={{ fontFamily: "Roboto", margin: 0, padding: 0, background: "#ecf0f1" }}>
          <Tailwind>
            <Container className="min-h-screen bg-white overflow-hidden ">
              
              {/* Flash Sale Section */}
              <div style={{
    backgroundImage: 'url("https://utfs.io/f/0a61c782-3141-4ca8-a1f3-cda8a237850d-hxawce.gif")',
    backgroundSize:"cover",
  }} className="relative overflow-hidden text-center py-20  text-white bg-center bg-no-repeat bg-[#0e0038]">
                {/* <div className="absolute inset-0 w-full h-[70vh]">
                  <Img src="https://utfs.io/f/0a61c782-3141-4ca8-a1f3-cda8a237850d-hxawce.gif" alt="Clock Background" className="w-full h-full object-cover" />
                </div> */}
                <div className="relative z-10">
                <div>
                <p className="text-sm !mb-1">FLASH SALE ALERT</p>
                </div>
                 <div className="mb-1 !mt-0">
                 <Heading className="text-5xl font-bold !mb-2 !mt-0 text-[#ff6500] mx-10">UP TO</Heading>
                 <Heading className="text-5xl font-bold !mt-0  text-[#ff6500] mx-10">50% OFF</Heading>
                 </div>
                  <Button
                    className="bg-white text-[#181147] py-2 px-8 text-[8px] font-bold"
                    href="#"
                    style={{ textDecoration: "none" }}
                  >
                    50% OFF Everything
                  </Button>
                </div>
              </div>
  
              <div className="grid grid-cols-1 gap-2 pt-8 pb-2 px-4 bg-white">
                <Img src="https://cdn.templates.unlayer.com/assets/1716187613378-Group%2015.png" alt="Image 5" className="w-full h-full object-cover col-span-2" />
              </div>
  
              {/* Footer */}
              <div className="w-full mb-2 text-white text-center py-6 bg-[#ecf0f1]">  
                   <div className="w-full text-center mt-8 !gap-0 ">
                <a href="">
                <img src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png" alt="Facebook" style={iconStyle} className=""/>
                </a>
                <a href="">
                <img src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png" alt="Instagram" style={iconStyle} className=""/>
                </a>
                
                <a href="">
                <img src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png" alt="Instagram" style={iconStyle} className=""/>
                </a>
                
                   </div>
                <div className="text-gray-400 text-xs mb-4 mt-2">
                 <p  className="!mt-0 !mb-0 text-xs text-gray-800">UNSUBSCRIBE   |   PRIVACY POLICY   |   WEB</p>
                </div>
                <p  className="!mt-0 !mb-0 text-xs text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </Container>
          </Tailwind>
        </Body>
      </Html>
    );
  };
  
  export default FlashSale;
  const iconStyle = {
    width: "25px",
    height: "25px",
    borderRadius: "10%",
    marginRight: "4px",
  };