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
 
  
  export const CustomEmailTemplate = () => {
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
        <Preview>Anti-Spam Policy Violation</Preview>
        <Body
          style={{
            backgroundColor: "#e8ebee",
            fontFamily: "Roboto",
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
          }}
        >
          <Tailwind>
            <Container className="overflow-hidden bg-[#f5f5f5]" style={containerStyle}>
              <div style={{ padding: "30px 20px", textAlign: "center" }}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1659601322863-HEader_1.png"
                  alt="Warning"
                  style={{ width: "100px", margin: "0 auto" }}
                />
                <Heading className="!mb-0" style={warningHeading}>
                    <span>⚠️</span>
                    WARNING
                    <span>⚠️</span>
                    </Heading>
                <Text className="text-sm !mt-2" style={subHeading}>Anti-Spam Policy Violation</Text>
              </div>
  
              <div style={{ paddingLeft: "20px",paddingRight: "20px", backgroundColor: "#f5f5f5" }}>
                <Text className="text-xs" style={greetingText}>Dear Arman!</Text>
                <Text className="text-sm" style={bodyText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </Text>
  
                <Button href="#" className="text-xs text-white mt-6 mb-8" style={checkEmailButton}>Check your Email</Button>
  
                <Text style={bodyText}>
                  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. consectetur adipiscing elit, sed diam nonummy nibh euismod.
                </Text>
  
                <Link href="#" className="text-xs" style={{
                 color: "#1a0dab",
                 // fontSize: "14px",
                 textDecoration: "underline",
                 marginTop: "20px",
                 display: "block",
                 textAlign: "start",
               }}>
                  Please review and confirm your account below.
                </Link>
              </div>
  
              <div style={{ padding: "20px", backgroundColor: "#e8ebee", textAlign: "center" }}>
                <Text className="mt-10" style={footerText}>
                  You can find common questions <Link href="#" style={linkText}>here</Link>. And you can always reach us at <Link href="mailto:customer.cususes@unlayer.com" style={linkText}>customer.cususes@unlayer.com</Link>.
                </Text>
  
                <Text style={footerDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </Text>
  
                <Link href="#" style={footerLink}>
                  Preferences | Unsubscribe | View in browser
                </Link>
              </div>
            </Container>
          </Tailwind>
        </Body>
      </Html>
    );
  };
  
  export default CustomEmailTemplate;
  
  // Styles
  const containerStyle = {
    backgroundColor: "#ffffff",
    margin: "0px auto",
    padding: "0px 0px",
    borderRadius: "4px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };
  
  const warningHeading = {
    color: "#e03e2d",
    fontSize: "34px",
    fontWeight: "bold",
    margin: "10px 0",
  };
  
  const subHeading = {
    color: "#000000",
    // fontSize: "20px",
    marginBottom: "20px",
  };
  
  const greetingText = {
    color: "#000000",
    // fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  };
  
  const bodyText = {
    color: "#000000",
    marginBottom: "20px",
    lineHeight: "1.5",
  };
  
  const checkEmailButton = {
    backgroundColor: "#ed8d22",
    padding: "10px 40px",
    borderRadius: "4px",
    textDecoration: "none",
    display: "block",
    width: "fit-content",
  };
  
  const reviewLink = {
    color: "#1a0dab",
    // fontSize: "14px",
    textDecoration: "underline",
    marginTop: "20px",
    display: "block",
    textAlign: "start",
  };
  
  const footerText = {
    color: "#000",
    fontSize: "12px",
    marginBottom: "10px",
    lineHeight: "1.5",
  };
  
  const linkText = {
    color: "#1a0dab",
    textDecoration: "underline",
  };
  
  const footerDescription = {
    color: "#000",
    fontSize: "12px",
    marginBottom: "20px",
    lineHeight: "1.5",
  };
  
  const footerLink = {
    color: "#666666",
    fontSize: "12px",
    textDecoration: "underline",
    marginTop: "20px",
    display: "block",
  };
  