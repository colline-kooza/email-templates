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
 
  
  export const ShipmentConfirmationTemplate = () => {
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
        <Preview>Your order has shipped!</Preview>
        <Body
          style={{
            backgroundColor: "#f6f6f6",
            fontFamily: "Roboto",
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
          }}
        >
          <Tailwind>
            <Container style={containerStyle}>
              {/* Header Section */}  
              <div className="w-full bg-[#000000] pt-4 pb-4">
                <div className="mx-auto text-center">
                  <img
                    className="object-contain"
                    src="https://cdn.templates.unlayer.com/assets/1619969576764-logo_2.png"
                    alt="Company Logo"
                    style={{ maxHeight: 25, maxWidth: "100%" }}
                  />
                </div>
              </div>

              {/* Order Shipped Section */}
              <div style={{ padding: "20px 20px", backgroundColor: "#ffffff" }}>
                <Heading  className="text-base text-center pb-3" style={{
                color: "#000000",
                fontWeight: "bold",
                marginBottom: "20px",
                borderBottom: "1px solid #e2e8f0",
              }}>Your order has shipped!</Heading>

                <Text className="font-semibold text-sm" style={{
                color: "#333333",
                textAlign: "left",
                lineHeight: "1.5",
                marginBottom: "20px",
                }}>
                  Hi John,
                  <br /><br />
                  Your order has shipped!
                </Text>
                <Text style={{
                color: "#333333",
                textAlign: "left",
                fontSize: "14px",
                lineHeight: "1.5",
                marginBottom: "20px",
              }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
                <Text style={{
                  color: "#333333",
                  textAlign: "left",
                  fontSize: "14px",
                  lineHeight: "1.5",
                  marginBottom: "20px",
                }}>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
                <Text style={{
               color: "#333333",
               textAlign: "left",
               fontSize: "14px",
               lineHeight: "1.5",
               marginBottom: "20px",
             }}>
                  Have questions or feedback? You can contact us anytime at <Link href="tel:+1239877896" style={linkStyle}>(123) 987-7896</Link>, or <Link href="mailto:team@company.com" style={linkStyle}>team@company.com</Link>.
                </Text>
                <Text className="font-bold" style={{
                 color: "#333333",
                 textAlign: "left",
                 fontSize: "14px",
                 lineHeight: "1.5",
                marginBottom: "20px",
               }}>Amelia<br />Company Name</Text>
                <Button className="font-semibold text-xs" href="#" style={trackOrderButtonStyle}>
                  Track Order
                </Button>
              </div>

              {/* Discount Section */}
              <div className="min-h-[30vh] text-center" style={{ padding: "30px 20px", backgroundColor: "#000000",backgroundImage: 'url("https://res.cloudinary.com/dirpuqqib/image/upload/v1723625163/1620022124312-cc_rrllq9.png")' }}>
                <p style={{
                 color: "#ffffff",
                 textAlign: "center",
                 fontSize: "30px",
                 fontWeight: "bold",
                 marginBottom: "20px",
               }}>Get 10% Off
               <br />
               For The  Next Order
               </p>
                <Button href="#" className="text-xs" style={getDiscountButtonStyle}>
                  Invite Friends to Get 10% Off
                </Button>
              </div>

              {/* Footer Section */}
              <div style={{ padding: "20px", backgroundColor: "#ffffff" }}>
                <Text style={{
             color: "#333333",
             textAlign: "center",
              fontSize: "12px",
              marginBottom: "20px",
           }}>
                  Questions? Contact us anytime at <Link href="tel:+1239877896" style={linkStyle}>(123) 987-7896</Link> or <Link href="mailto:team@company.com" style={linkStyle}>team@company.com</Link>
                </Text>
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
                <Text style={{
                  color: "#666666",
                  textAlign: "center",
                  fontSize: "12px",
                  marginBottom: "20px",
                }}>
                  Having trouble viewing this email? <Link href="#" style={linkStyle}>Click here</Link>
                </Text>
                <Text style={{
                   color: "#999999",
                   textAlign: "center",
                   fontSize: "12px",
                   marginBottom: "20px",
                 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </Text>
                <Text style={{
                   color: "#999999",
                   textAlign: "center",
                   fontSize: "12px",
                   marginBottom: "20px",
                 }}>
                  Want to change how you receive these emails? You can update your preferences or <Link href="#" style={linkStyle}>unsubscribe</Link> from this list.
                </Text>
                <Text style={{
                 color: "#999999",
                  textAlign: "center",
                  fontSize: "12px",
                  marginBottom: "20px",
                 }}>
                  © 20XX Company. All Rights Reserved.
                </Text>
              </div>
            </Container>
          </Tailwind>
        </Body>
      </Html>
    );
  };
  
  export default ShipmentConfirmationTemplate;
  
  const containerStyle = {
    backgroundColor: "#ffffff",
    margin: "0px auto",
    padding: "0px",
    maxWidth: "600px",
    borderRadius: "4px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };
  

  
  const textStyle = {
    color: "#333333",
    textAlign: "left",
    fontSize: "14px",
    lineHeight: "1.5",
    marginBottom: "20px",
  };
  
  const linkStyle = {
    color: "#ff0000",
    textDecoration: "none",
  };
  
  const trackOrderButtonStyle = {
    backgroundColor: "#ff0000",
    color: "#ffffff",
    padding: "12px 32px",
    borderRadius: "4px",
    textDecoration: "none",
    display: "block",
    width: "fit-content",
    margin: "0 auto",
  };
  
  const discountHeadingStyle = {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
  };
  
  const getDiscountButtonStyle = {
    backgroundColor: "#ff0000",
    color: "#ffffff",
    padding: "12px 24px",
    borderRadius: "4px",
    textDecoration: "none",
    display: "block",
    width: "fit-content",
    margin: "0 auto",
    // fontSize: "16px",
  };
  
  const footerLinkStyle = {
    color: "#333333",
    textAlign: "center",
    fontSize: "12px",
    marginBottom: "20px",
  };
  
  const footerTextStyle = {
    color: "#666666",
    textAlign: "center",
    fontSize: "12px",
    marginBottom: "20px",
  };
  
  const footerDescriptionStyle = {
    color: "#999999",
    textAlign: "center",
    fontSize: "12px",
    marginBottom: "20px",
  };
  
  const iconStyle = {
    width: "24px",
    height: "24px",
    margin: "0 5px",
  };
