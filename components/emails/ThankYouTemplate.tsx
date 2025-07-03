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
 
  
  export const ThankYouTemplate = () => {
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
        <Preview>Thank you for using our service!</Preview>
        <Body
          style={{
            backgroundColor: "#ffffff",
            fontFamily: "Roboto",
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
          }}
        >
          <Tailwind>
            <Container style={containerStyle}>
              {/* Header Section */}
              <div className="w-full bg-white pt-4">
                <div className="mx-auto text-center">
                  <img
                    className="object-contain"
                    src="https://cdn.templates.unlayer.com/assets/1611652286973-ccc.png"
                    alt="Company Logo"
                    style={{ maxHeight: 25, maxWidth: "100%" }}
                  />
                </div>
              </div>
  
              {/* Thank You Image */}
              <div style={{
                  textAlign: "center",
                  padding: "30px 20px",
                  
                }}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1611653887340-ddd.jpg"
                  alt="Thank You"
                  style={thankYouImageStyle}
                />
              </div>
  
              {/* Message Section */}
              <div style={{
                  backgroundColor: "#ffffff",
                  padding: "20px",
                  textAlign: "center",
                }}>
                <Heading className="italic" style={thankYouTextStyle}>Thanks for using our service!</Heading>
                <Text style={messageTextStyle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis.
                </Text>
                <Button style={ctaButtonStyle} href="#">
                  CLICK HERE
                </Button>
              </div>
  
              {/* Footer Section */}
              <div style={{
                   backgroundColor: "#ffffff",
                   padding: "20px",
                   textAlign: "center",
                   borderTop: "1px solid #fdc92c",
                 }}>
                <Text className="italic" style={followUsTextStyle}>Follow Us</Text>
            
                <div className="text-center mt-2">
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/circle-black/facebook.png"
                      alt="Facebook"
                      style={iconStyle}
                    />
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/circle-black/twitter.png"
                      alt="Instagram"
                      style={iconStyle}
                    />
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/circle-black/linkedin.png"
                      alt="Pinterest"
                      style={iconStyle}
                    />
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/circle-black/instagram.png"
                      alt="YouTube"
                      style={iconStyle}
                    />
                  </div>
                <Text style={footerAddressStyle}>
                  212 26th St | Santa Monica | CA | 90402<br />
                  Fitness Inc. All rights reserved.<br />
                  Company No. 123456789<br />
                </Text>
                <Text style={footerLinksStyle}>
                  <Link href="#" style={footerLinkStyle}>Manage Preferences</Link> | 
                  <Link href="#" style={footerLinkStyle}>Unsubscribe</Link> | 
                  <Link href="#" style={footerLinkStyle}>View in browser</Link>
                </Text>
              </div>
            </Container>
          </Tailwind>
        </Body>
      </Html>
    );
  };
  
  export default ThankYouTemplate;
  
  const containerStyle = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "0 0",
    borderRadius: "4px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    border: "2px solid #fdc92c",
  };
  

  
  const thankYouImageStyle = {
    maxWidth: "100%",
    height: "70%",
    borderBottom: "1px solid #fdc92c",
    borderTop: "1px solid #fdc92c"
  };
  
  const messageContainerStyle = {
    backgroundColor: "#ffffff",
    padding: "20px",
    textAlign: "center",
  };
  
  const thankYouTextStyle = {
    color: "#000000",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
    
  };
  
  const messageTextStyle = {
    color: "#000000",
    fontSize: "13px",
    lineHeight: "1.5",
    marginBottom: "20px",
  };
  const iconStyle = {
    width: "25px",
    height: "25px",
    borderRadius: "1%",
    marginRight: "4px",
  };
  const ctaButtonStyle = {
    backgroundColor: "#1c1c1c",
    color: "#febd00",
    padding: "10px 20px",
    borderRadius: "4px",
    textDecoration: "none",
    fontSize: "12px",
    display: "inline-block",
  };
  
  
  const followUsTextStyle = {
    color: "#000000",
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "10px",
  };
  
  const socialIconsContainerStyle = {
    display: "flex",
 
  };
  
  const socialIconStyle = {
    width: "24px",
    height: "24px",
  };
  
  const footerAddressStyle = {
    color: "#000000",
    fontSize: "12px",
    marginBottom: "20px",
  };
  
  const footerLinksStyle = {
    color: "#000000",
    fontSize: "12px",
  };
  
  const footerLinkStyle = {
    color: "#000000",
    textDecoration: "underline",
  };
  