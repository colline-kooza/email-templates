import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Text,
    Font,
    Tailwind,
  } from "@react-email/components";
 
  
  export const ApologyEmailTemplate = () => {
    const baseUrl = "http://localhost:3001";
  
    return (
      <Html>
        <Head>
          <Font
            fontFamily="Arial, sans-serif"
            fallbackFontFamily="Verdana"
            webFont={{
              url: "https://fonts.googleapis.com/css2?family=Arial:wght@400;700&display=swap",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Preview>We apologize for the delay. Please accept 25% off.</Preview>
        <Body style={{ margin: 0, padding: 0, boxSizing: "border-box", backgroundColor: "#f0f0f0" }}>
          <Tailwind>
            <Container style={containerStyle}>
            <div className="mx-auto text-center pb-3 bg-[#32b9e5]">
                  <img
                  className="object-contain"
                    src="https://cdn.templates.unlayer.com/assets/1643814472796-yourlogo_white.png"
                    alt="Beyond Logo"
                    style={{ maxHeight: 80, maxWidth: "100%" }}
                  />
                </div>
              <div className="!mb-0" style={{ textAlign: "center" }}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1643814339152-sfsgg.png"
                  alt="Fingerprint Image"
                  style={{ maxWidth: "65%", margin: "0 auto" }}
                />
              </div>
        
              {/* Main Content */}
              <div className="text-center !py-2 bg-white !mt-0">
                <Heading className="italic" style={headingStyle}>Sorry!</Heading>
                <Text style={subHeadingStyle} className="text-[#34495e] italic">For the late response.</Text>
                <Text className="mx-10" style={messageTextStyle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra convallis posuere morbi leo.
                </Text>
              </div>
  
              {/* Offer Section */}
              <div  className="bg-[#32b9e5] text-center py-4">
                <div >
                <Text className="!mb-4 text-3xl" style={offerTextStyle}>Please Accept</Text>
                <Heading  className="!mt-0 !mb-2 text-4xl pb-2" style={discountStyle}> <span className=" !mb-0">25%</span> OFF</Heading>
                <Text  className="!mt-0 text-sm font-semibold" style={offerDetailsStyle}>
                  Your Purchase. Today Only
                </Text>
                </div>
             
                         <p className="text-black text-xs">Simply enter code: <strong>APOLOGYOFF</strong> at checkout</p>
                        <Button
                          className="!mt-2 text-center font-semibold text-xs tracking-widest"
                          href="https://example.com"
                          style={{
                            backgroundColor: "#000000",
                            color: "#ffffe9",
                            borderRadius: "1px",
                            padding: "12px 37px",
                            textDecoration: "none",
                          }}
                        >
                       SHOP NOW
                    </Button>

                    <p className="text-xs mx-8 text-[#0f172a] mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra convallis posuere morbi leo. Risus viverra adipiscing at in tellus integer feugiat scelerisque.</p>
               </div>

                 {/* Footer */}
                 <div className="w-full bg-black py-3 pt-8 text-white text-center !mt-0">
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
  
  export default ApologyEmailTemplate;
  
  const containerStyle = {
    backgroundColor: "#ffffff",
    margin: "0px auto",
    // padding: "0px 20px",
    borderRadius: "4px",
    maxWidth: "600px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };
  

  const headingStyle = {
    fontSize: "32px",
    color: "#000000",
    marginBottom: "8px",
  };
  
  const subHeadingStyle = {
    fontSize: "24px",
    color: "#000000",
    marginBottom: "13px",
  };
  
  const messageTextStyle = {
    fontSize: "13px",
    color: "#666666",
    lineHeight: "24px",
    margin: "0 0 24px 0",
  };
  
  const offerTextStyle = {
    // fontSize: "36px",
    color: "#fffbf8",
  };
  
  const discountStyle = {
    // fontSize: "30px",
    color: "#000",
    fontWeight: "bold",
    borderBottom:"solid 1px #5cc5e8"
  };
  
  const offerDetailsStyle = {
    // fontSize: "16px",
    color: "#ffffff",
    // marginBottom: "16px",
  };
  
  const shopButtonStyle = {
    backgroundColor: "#ffffff",
    color: "#1e88e5",
    borderRadius: "4px",
    padding: "12px 24px",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
    border: "2px solid #1e88e5",
  };
  const iconStyle = {
    width: "28px",
    height: "28px",
    borderRadius: "0%",
    marginRight: "4px",
  };