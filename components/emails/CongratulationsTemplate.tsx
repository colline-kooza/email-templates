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
 
  
  export const CongratulationsTemplate = () => {
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
        <Preview>Congratulations! You've Earned 50 Test Points</Preview>
        <Body
          style={{
            backgroundColor: "#f4f4f4",
            fontFamily: "DM Sans",
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
          }}
        >
          <Tailwind>
            <Container style={containerStyle}>
              <div className="mx-auto" style={{ paddingBottom: "20px", textAlign: "center" }}>
                <img
                  src={`https://cdn.templates.unlayer.com/assets/1661770747030-Vector%20Smart%20Object.png`}
                  alt="Celebration"
                  style={imageStyle}
                />
              </div>
              <Heading className="text-lg" style={{
                 fontWeight: "bold",
                 color: "#000000",
                 textAlign: "center",
                 margin: "0 0 10px 0",
               }}>
              Congratulations You've Earned
               <br />
               50 Test Points
              </Heading>
              <Text className="text-sm mx-10" style={{
                color: "#555555",
                textAlign: "center",
              }}>
                Nice work! You signed up and earned 50 test points. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Text>
              <div style={{
                  textAlign: "center",
                  marginBottom: "20px",
                }}>
                <Button
                className="text-xs rounded-sm"
                  href="#"
                  style={buttonStyle}
                >
                  Shop Now
                </Button>
              </div>
              <Text className="text-sm mx-10" style={{
                  color: "#555555",
                  textAlign: "center",
                  margin: "0 0 20px 0",
                }}>
                If you have any questions, please email us at
                customer.success@unlayer.com or visit our FAQS, you can also chat
                with a real live human during our operating hours. They can answer
                questions about your account.
              </Text>


              {/* Footer */}
               <div style={{borderTop:"solid 1px #334155"}} className="w-full bg-white pt-4 text-black text-center !mt-7">
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
              <Text className="mx-10" style={{
                fontSize: "12px",
                color: "#999999",
                textAlign: "center",
              }}>
                You have received this email as a registered user of unlayer.com
                you can unsubscribe from these emails here. 2261 Market Street
                #4687 San Francisco, CA 94114 All rights reserved
              </Text>
            </Container>
          </Tailwind>
        </Body>
      </Html>
    );
  };
  
  export default CongratulationsTemplate;
  
  const containerStyle = {
    backgroundColor: "#ffffff",
    margin: "0px auto",
    padding: "20px",
    borderRadius: "6px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
  };
  
  const imageStyle = {
    maxWidth: "70%",
    height: "auto",
  };
  
  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
    margin: "0 0 10px 0",
  };
  
  const textStyle = {
    // fontSize: "14px",
    color: "#555555",
    textAlign: "center",
    margin: "0 0 20px 0",
  };
  
  const buttonContainerStyle = {
    textAlign: "center",
    marginBottom: "20px",
  };
  
  const buttonStyle = {
    backgroundColor: "#ef3f42",
    color: "#ffffff",
    padding: "10px 30px",
    textDecoration: "none",
    borderRadius: "2px",
    // fontSize: "16px",
    display: "inline-block",
  };
  
  const socialIconsContainerStyle = {
    textAlign: "center",
    marginBottom: "20px",
  };
  
  const iconStyle = {
    width: "30px",
    height: "30px",
    margin: "0 5px",
  };
  
  const footerTextStyle = {
    fontSize: "12px",
    color: "#999999",
    textAlign: "center",
    margin: "0 0 10px 0",
  };
  