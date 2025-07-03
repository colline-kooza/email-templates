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
 
  
  export const RetargetingTemplate = () => {
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
            fontStyle="normal"
          />
        </Head>
        <Preview>Stuck in Your Daily Life? Let's Plan a Trip With Us</Preview>
        <Body style={{
            backgroundColor: "#030d19",
            fontFamily: "DM Sans, sans-serif",
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
          }}>
          <Tailwind>
            <Container style={containerStyle}>
              {/* Header */}
              <div style={{textAlign: "center", borderBottom:"solid 1px #1e293b" }} className="flex w-full py-2 bg-[#0c263d] text-center mb-5">
              <div className="flex text-center mx-auto">
              <p className="text-sm text-white">Home</p>
               <p className="ml-8 text-white">|</p>
               <p className="ml-8 text-sm text-white">Page</p>
               <p className="ml-8 text-white">|</p>
               <p className="ml-8 text-sm text-white">About Us </p>
              </div>
              </div>
              <div>
                <div style={headerStyle}>
                  <Heading style={headingStyle}>Stuck in Your Daily Life</Heading>
                  <Text style={subTextStyle}>
                    Lorem Ipsum is simply dummy text of the printing and type
                    setting industry. Lorem Ipsum has been the industry's
                    standard dummy text.
                  </Text>
                  <Button className="mt-5 text-sm" href="#" style={{
                   border: "1px solid #ffff",
                  borderWidth:"1px white solid",
                  color: "#ffffff",
                  padding: "6px 40px",
                  borderRadius: "4px",
                  textDecoration: "none",
                  display: "block",
                  width: "fit-content",
                  margin: "0 auto",
                }}>
                  Book Now
                </Button>
                </div>
              </div>
  
              {/* Main Image */}
              <div>
                <div className="text-center mt-4" style={imageContainerStyle}>
                  <img
                    src="https://cdn.templates.unlayer.com/assets/1697175308351-Group%204.png"
                    alt="Main Image"
                    style={mainImageStyle}
                  />
                </div>
                <Text className="text-center mx-10" style={subTextStyle}>
                    Lorem Ipsum is simply dummy text of the printing and type
                    setting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type.
                  </Text>
             <div className="text-center">
             <Button className="mt-5 text-sm bg-[#ffffff]" href="#" style={{
                   border: "1px solid #ffff",
                  borderWidth:"1px white solid",
                  color: "#000",
                  padding: "6px 40px",
                  borderRadius: "4px",
                  textDecoration: "none",
                  display: "block",
                  width: "fit-content",
                  margin: "0 auto",
                }}>
                  Boost Now
                </Button>
             </div>
              </div>
  
              {/* Second Section */}
              <div>
                <div className="mt-5" style={secondSectionStyle}>
                  <Heading className="text-lg" style={secondHeadingStyle}>
                  Let’s Plan a Trip With Us 
                  </Heading>
                  <div className="text-center" style={imageContainerStyle}>
                  <img
                    src="https://cdn.templates.unlayer.com/assets/1697175535342-gif.gif"
                    alt="Main Image"
                    style={mainImageStyle}
                  />
                  <div className="mt-3">
                  <Text className=" mx-8 text-start" style={subTextStyle}>
                    Lorem Ipsum is simply dummy text of the printing and type
                    setting industry. Lorem Ipsum has been the industry's
                    standard dummy text.
                      </Text>
                      <Text className=" mx-8 text-start" style={subTextStyle}>
                    Lorem Ipsum is simply dummy text of the printing and type
                    setting industry. Lorem Ipsum has been the industry's
                    standard dummy text.
                      </Text>
                  </div>
                    
                  <Button className="mt-5 text-sm" href="#" style={{
                   border: "1px solid #ffff",
                  borderWidth:"1px white solid",
                  color: "#ffffff",
                  padding: "6px 40px",
                  borderRadius: "4px",
                  textDecoration: "none",
                  display: "block",
                  width: "fit-content",
                  margin: "0 auto",
                }}>
                Let's Go
                </Button>
                </div>
                </div>
              </div>
  
               {/* Footer */}
               <div style={{borderTop:"solid 1px #1e293b"}} className="w-full bg-[#081a2c] py-3 text-white text-center !mt-5">
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
  
  export default RetargetingTemplate;
  
  
  
  const containerStyle = {
    backgroundColor: "#081a2c",
    margin: "0px auto",
    padding: "0px 0px",
    borderRadius: "4px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };
  
  const headerStyle = {
    backgroundColor: "#081a2c",
    padding: "20px",
    textAlign: "center" as const,
  };
  
  const headingStyle = {
    color: "#ffffff",
    fontSize: "24px",
    margin: "0",
    marginBottom: "10px",
  };
  
  const subTextStyle = {
    color: "#d7dbde",
    fontSize: "14px",
    margin: "0",
    marginBottom: "20px",
  };
  
  const buttonStyle = {
    backgroundColor: "#ffffff",
    color: "#000",
    borderRadius: "6px",
    padding: "10px 30px",
    textDecoration: "none",
    // fontSize: "14px",
    border: "1px solid #000",
  };
  
  const imageContainerStyle = {
    width: "100%",
    textAlign: "center" as const,
    marginBottom: "20px",
  };
  
  const mainImageStyle = {
    maxWidth: "80%",
    height: "auto",
  };
  
  const secondSectionStyle = {
    backgroundColor: "#081a2c",
    padding: "20px",
    textAlign: "center" as const,
    marginBottom: "20px",
  };
  
  const secondHeadingStyle = {
    color: "#ffffff",
    // fontSize: "20px",
    margin: "0",
    marginBottom: "10px",
  };
  
  const footerStyle = {
    backgroundColor: "#000",
    padding: "20px",
    textAlign: "center" as const,
  };
  
  const socialIconsContainerStyle = {
    marginBottom: "10px",
  };
  
  const iconStyle = {
    width: "25px",
    height: "25px",
    borderRadius: "40%",
    marginRight: "4px",
  };
  
  const footerTextStyle = {
    color: "#c6c7d2",
    fontSize: "12px",
    margin: "5px 0",
  };
  