import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Tailwind,
    Text,
  } from "@react-email/components";

  
  export default function ForgetPasswordEmail() {
    return (
      <Html>
        <Head />
        <Preview>Reset your password</Preview>
        <Tailwind>
        <Body style={main}>
          <Container className="bg-[#f9f9ff]" style={container}>
            <Section style={logoSection}>
              <Img
                src="https://cdn.templates.unlayer.com/assets/1676547950700-Asset%201.png"
                width={160}
                height={160}
                alt="Lock icon"
                style={logoImage}
              />
            </Section>
            <Heading className="!mb-1" style={h1}>Forget password?</Heading>
            <Text className="text-start pl-8 !mt-0" style={text}>
              If you've lost your password or wish to reset it, use the link below
              to get started. Lorem, ipsum dolor.
            </Text>
            <Section className="mx-auto text-center">
              <a className="mx-auto text-center" style={link} href="https://example.com/reset-password">
                https://example.com/reset-password
              </a>
            </Section>
            <Text className="pl-8" style={text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Text>

           <div className="mx-auto text-center">
           <Button
                  className=" text-[#000] py-2 px-12 text-xs rounded-full !mb-0"
                  href="#"
                  style={{ textDecoration: "none" , fontFamily:
                    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',  backgroundColor: "#F7B548",}}
                >
                  Reset Your Password
                </Button>
           </div>
            
            <Hr style={hr} />
            <Section className="" style={socialIconsSection}>
              <Link href="https://facebook.com" style={socialIconLink}>
                <Img
                  src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                  width={24}
                  height={24}
                  alt="Facebook"
                />
              </Link>
              <Link href="https://twitter.com" style={socialIconLink}>
                <Img
                  src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                  width={24}
                  height={24}
                  alt="Twitter"
                />
              </Link>
              <Link href="https://linkedin.com" style={socialIconLink}>
                <Img
                  src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                  width={24}
                  height={24}
                  alt="LinkedIn"
                />
              </Link>
              <Link href="https://instagram.com" style={socialIconLink}>
                <Img
                  src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                  width={24}
                  height={24}
                  alt="Instagram"
                />
              </Link>
            </Section>
            <Text  style={footerText}>
              UNSUBSCRIBE | PRIVACY POLICY | WEB
            </Text>
            <Text className="mx-8 text-sm" style={footerText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore.
            </Text>
          </Container>
        </Body>
        </Tailwind>
      </Html>
    );
  }
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "560px",
  };
  
  const logoSection = {
    textAlign: "center" as const,
    marginBottom: "20px",
  };
  
  const logoImage = {
    margin: "0 auto",
  };
  
  const h1 = {
    color: "#333",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    fontSize: "22px",
    fontWeight: "bold",
    margin: "30px 0",
    padding: "0",
    textAlign: "center" as const,
  };
  
  const link = {
    color: "#2754C5",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    fontSize: "14px",
    textDecoration: "underline",
  };
  
  const text = {
    color: "#333",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    fontSize: "14px",
    margin: "24px 0",
  };
  
  const buttonSection = {
    textAlign: "center" as const,
    // margin: "24px 0",
  };
  
  const button = {
    backgroundColor: "#F7B548",
    borderRadius: "3px",
    color: "#000",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    fontSize: "14px",
    fontWeight: "bold",
    textDecoration: "none",
    textTransform: "uppercase",
    textAlign: "center" as const,
    display: "block",
    width: "100%",
  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
  const socialIconsSection = {
    textAlign: "center" as const,
  };
  
  const socialIconLink = {
    display: "inline-block",
    marginRight: "8px",
  };
  
  const footerText = {
    color: "#898989",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    lineHeight: "22px",
    textAlign: "center" as const,
    margin: "12px 0",
  };    