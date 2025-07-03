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
 
  
  export const IdentityVerification = () => {
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
        <Preview>Identity Verification Required</Preview>
        <Body
          style={{
            backgroundColor: "#000000",
            fontFamily: "Roboto",
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
          }}
        >
          <Tailwind>
            <Container
              style={{
                backgroundColor: "#10131a",
                margin: "0px auto",
                padding: "20px ",
                borderRadius: "4px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                color: "#ffffff",
                overflow:"clip",
                maxWidth: "600px",
              }}
            >
            <div style={{borderBottom:"solid 1px #1e293b"}} className="mx-auto text-center pb-3">
                  <img
                  className="object-contain"
                    src="https://cdn.templates.unlayer.com/assets/1638451760154-333.png"
                    alt="Beyond Logo"
                    style={{ maxHeight: 30, maxWidth: "100%" }}
                  />
                </div>
              <div style={{ textAlign: "center", marginBottom: "14px" }}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1636808300229-Security_system.jpg"
                  alt="Fingerprint Image"
                  style={{ maxWidth: "80%", margin: "0 auto" }}
                />
              </div>

             <div className="mx-[4%]">
             <Heading
             className="tracking-wide"
                style={{
                  color: "#f0ffff",
                  textAlign: "center",
                  fontSize: "26px",
                  fontWeight: "bold",
                  marginBottom: "15px",
                }}
              >
                Identity Verification Required!
              </Heading>
             <div className="mx-[5%]">
             <Text className="font-bold" style={{ color: "#ffffff", fontSize: "14px", marginBottom: "15px" }}>
                Hello
              </Text>
              <Text style={{ color: "#cccccc", fontSize: "14px", lineHeight: "1.5" }}>
                We recently detected an unusual activity on your account. Unfortunately,
                <br />
                we had to suspend your account in order to ensure the safety of your
                account. This suspension is temporary. We will need some additional
                information to verify your identity.
              </Text>
              <ul style={{ color: "#cccccc", fontSize: "12px", lineHeight: "1.5", margin: "20px 0" }}>
                <li className="font-bold">When: Sat, November 13, 20XX</li>
                <li className="font-bold">Device: Realme Phone</li>
                <li className="font-bold">Near: San Francisco, CA, United States</li>
              </ul>
              <Text style={{ color: "#cccccc", fontSize: "14px", marginBottom: "15px" }}>
                Please complete your identity verification and regain online access.
              </Text>
              <Button
              className="text-xs"
                style={{
                  backgroundColor: "#e03e2d",
                  color: "#ffffff",
                  padding: "12px 34px",
                  borderRadius: "4px",
                  textDecoration: "none",
                  display: "block",
                  width: "fit-content",
                  margin: "0 auto",
                //   fontSize: "16px",
                  fontWeight: "bold",
                }}
                href="#"
              >
                Verify Identity
              </Button>
              <Text
              className="font-bold"
                style={{
                  color: "#cccccc",
                  fontSize: "13px",
                  marginTop: "30px",
                  textAlign: "start",
                }}
              >
                Sincerely,
                <br />
                Customer Service
              </Text>
             </div>
             </div>


              <div
              className="pt-4 mx-auto text-center"
                style={{
                  marginTop: "40px",
                  display: "flex",
                  borderTop:"solid 1px #1e293b"
                }}
              >
               <div className="mx-auto text-center flex">
               <a  href="#">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/squared-black/twitter.png"
                    alt="Twitter"
                    style={{ width: "24px", height: "24px" }}
                  />
                </a>
                <a className="ml-2" href="#">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/squared-black/instagram.png"
                    alt="Instagram"
                    style={{ width: "24px", height: "24px" }}
                  />
                </a>
                <a className="ml-2" href="#">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/squared-black/linkedin.png"
                    alt="LinkedIn"
                    style={{ width: "24px", height: "24px" }}
                  />
                </a>
                <a className="ml-2" href="#">
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/squared-black/facebook.png"
                    alt="Facebook"
                    style={{ width: "24px", height: "24px" }}
                  />
                </a>
               </div>
              </div>
              <p className="mx-4 text-center text-xs text-[#94a3b8]">If you have questions regarding your Data, please visit our Privacy Policy
              Want to change how you receive these emails? You can update your preferences or unsubscribe from this list.</p>
              <p className="text-xs text-white w-full py-4 bg-black text-center mx-auto">© 20XX Company. All Rights Reserved.</p>
            </Container>
          </Tailwind>
        </Body>
      </Html>
    );
  };
  
  export default IdentityVerification;
  