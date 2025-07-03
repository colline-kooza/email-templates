import {
    Body,
    Container,
    Column,
    Head,
    Heading,
    Font,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

  
  export const ForgottenPurchaseEmail = () => (
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
      <Preview>Have You Forgotten Something?</Preview>
       <Tailwind>
       <Body style={main}>
        <Container style={container}>
          <Section className="bg-[#ced4d9]" style={headerSection}>
            <Heading  style={headerText}>
                Have You
                <br/>
                Forgotten Something?
            </Heading>
          </Section>
  
          <Section style={contentSection}>
            <Heading as="h2" style={{
    color: "#333333",
    fontSize: "17px",
    fontWeight: "semibold",
    margin: "0 0 4px",
  }}>COMPLETE YOUR PURCHASE</Heading>
            <Text style={paragraphText}>YOU ARE CLICK OR TWO AWAY</Text>
            <Img
              src={`https://cdn.templates.unlayer.com/assets/1664278227048-Asset%204mdpi.png`}
              width="500"
              height="300"
              alt="Laptop and smartphone"
              style={mainImage}
            />
            <Link href="https://example.com/shop" style={button}>
              Shop Now
            </Link>
          </Section>
  
          <Section className="pt-4 px-2 pb-2" style={servicesSection}>
            <Heading as="h2" style={servicesHeader}>OUR SERVICES</Heading>
            <Text style={servicesParagraph}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna ali
            </Text>
            <Row>
              <Column className="bg-[#ecf0f1]" style={serviceColumn}>
                <Img
                  src={`https://cdn.templates.unlayer.com/assets/1664278446551-Asset%201.png`}
                  width="50"
                  height="50"
                  alt="Increase Sale"
                />
                <Heading as="h3" style={serviceTitle}>Increase Sale</Heading>
                <Text style={serviceText}>
                  Lorem ipsum dolor sit amet, consec texture adipiscing elit.
                </Text>
                <Link href="https://example.com" style={readMoreLink}>Read More</Link>
              </Column>
              <Column className="bg-[#ffffff]" style={serviceColumn}>
                <Img
                  src={`https://cdn.templates.unlayer.com/assets/1664278822134-Asset%202.png`}
                  width="50"
                  height="50"
                  alt="Get more Results"
                />
                <Heading as="h3" style={serviceTitle}>Get more Results</Heading>
                <Text style={serviceText}>
                  Lorem ipsum dolor sit amet, consec texture adipiscing elit.
                </Text>
                <Link href="https://example.com" style={readMoreLink}>Read More</Link>
              </Column>
              <Column className="bg-[#ecf0f1]" style={serviceColumn}>
                <Img
                  src={`https://cdn.templates.unlayer.com/assets/1664278824232-Asset%203.png`}
                  width="50"
                  height="50"
                  alt="Secure"
                />
                <Heading as="h3" style={serviceTitle}>Secure</Heading>
                <Text style={serviceText}>
                  Lorem ipsum dolor sit amet, consec texture adipiscing elit.
                </Text>
                <Link href="https://example.com" style={readMoreLink}>Read More</Link>
              </Column>
            </Row>
          </Section>
             {/* Footer */}
        <div className="w-full bg-[#f8f8f8] text-white text-center pt-6">
                <div className="mx-auto">
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png" alt="LinkedIn" className="w-8 h-8" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png" alt="Twitter" className="w-8 h-8 ml-2" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png" alt="Skype" className="w-8 h-8 ml-2" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png" alt="Instagram" className="w-8 h-8 ml-2" /></a>
                </div>
  
                <div className="mb-4">
                  <p className="text-[11px] text-gray-500 mb-1 mx-10">
                  This message was sent to hello@app.com
                 If you would like to update your email address, please click here.
                 If you no longer wish to receive e-mails from App, click to UNSUBSCRIBE.
                  </p>
                  <p className="text-[11px] text-gray-500 mb-1 mx-10">If you receive a suspicious email, please report it by forwarding the email
                  to spoof@app.com.Visit Security to find out more.</p>
                </div>
                <div className="w-full bg-[#f8f8f8] py-2">
                  <p className="text-[11px] text-gray-500 font-normal text-center">
                    © 20XX Company. All Rights Reserved.
                  </p>
                </div>
              </div>
        </Container>
      </Body>
       </Tailwind>
    </Html>
  );
  
  export default ForgottenPurchaseEmail;
  
  const main = {
    backgroundColor: "#f6f6f6",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "580px",
  };
  
  const headerSection = {
    backgroundColor: "#f6f6f6",
    padding: "40px",
    textAlign: "center" as const,
  };
  
  const headerText = {
    color: "#333333",
    fontSize: "25px",
    fontWeight: "black",
    margin: "0",
  };
  
  const contentSection = {
    backgroundColor: "#ecf0f1",
    padding: "20px",
    textAlign: "center" as const,
  };
  
  const subheaderText = {
    color: "#333333",
    fontSize: "22px",
    fontWeight: "semibold",
    margin: "0 0 10px",
  };
  
  const paragraphText = {
    color: "#666666",
    fontSize: "15px",
    margin: "0 0 20px",
  };
  
  const mainImage = {
    marginBottom: "20px",
  };
  
  const button = {
    backgroundColor: "#000000",
    borderRadius: "1px",
    color: "#ffffff",
    display: "inline-block",
    fontSize: "15px",
    fontWeight: "bold",
    padding: "12px 35px",
    textDecoration: "none",
    textTransform: "uppercase" as const,
  };
  
  const servicesSection = {
    backgroundColor: "#ced4d9",
    // padding: "30px 0px",
    textAlign: "center" as const,
  };
  
  const servicesHeader = {
    color: "#333333",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "0 0 10px",
  };
  
  const servicesParagraph = {
    color: "#666666",
    fontSize: "14px",
    margin: "0 0 20px",
  };
  
  const serviceColumn = {
    padding: "30px 10px",
    textAlign: "start" as const,
  };
  
  const serviceTitle = {
    color: "#333333",
    fontSize: "16px",
    fontWeight: "bold",
    margin: "10px 0",
  };
  
  const serviceText = {
    color: "#666666",
    fontSize: "13px",
    margin: "0 0 10px",
  };
  
  const readMoreLink = {
    color: "#b0455f",
    fontSize: "12px",
    textDecoration: "none",
    fontWeight:"500"
  };