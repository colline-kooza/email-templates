import {
    Body,
    Container,
    Column,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  import { Tailwind } from "@react-email/tailwind";
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export const EcommerceTemplate = () => (
    <Html>
      <Head />
      <Preview>Super Bowl Sports Attribute Super Sale - Get 20% OFF</Preview>
      <Tailwind>
        <Body style={main}>
          <Container style={container}>
            <Section className="mx-auto text-center" style={logoContainer}>
              <Img
                src={`https://cdn.templates.unlayer.com/assets/1631362377820-logo2.png`}
                width="80"
                height="80"
                alt="Football Logo"
                className="object-cover mx-auto text-center"
              />
            </Section>
            <Section className="py-20" style={headerContainer}>
              <Row >
                <Column>
                  <Heading className="text-center mx-8 " as="h1" style={headerTitle}>
                      Super Bowl
                       Ecommerce Attribute
                        Super Sale
                  </Heading>
                  <Text className="text-white mx-auto text-center !mb-4 mx-8" style={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    margin: "0 0 20px",
                  }}>
                Sales starts Friday at 9AM and close on Saturday at 10AM. Take advantage of this promotion, only on selected products.
              </Text>
              <div className="mx-auto text-center">
              <Link  href="https://example.com/view-all" style={button}>
                Shop Now
              </Link>
              </div>
                </Column>
              </Row>
            </Section>
            <Section className="mx-auto" style={contentContainer}>
            <Text className="text-white mx-auto text-center !mb-2" style={headerSubtitle}>GET 20% OFF</Text>
  
              <Text className="text-white mx-auto text-center !mb-2" style={contentText}>
                Sales starts Friday at 9AM and close on Saturday at 10AM. Take advantage of this promotion, only on selected products.
              </Text>
              <div className="mx-auto text-center">
              <Link  href="https://example.com/view-all" style={button}>
                View All
              </Link>
              </div>
            
            </Section>
            <Section style={productsContainer}>
              <Row>
                <Column style={productColumn}>
                  <Img
                    src={`https://cdn.templates.unlayer.com/assets/1631361705734-p1.png`}
                    width="250"
                    height="250"
                    alt="Red Nike Shoes"
                    style={productImage}
                  />
                  <Text style={productTitle}>Product Title Here</Text>
                  <Text style={productDescription}>Sed tincidunt vel sem ut facilisis. Aenean congue elit ac risus mollis.</Text>
                  <Link href="https://example.com/shop-now" style={shopNowButton}>
                    Shop Now
                  </Link>
                </Column>
                <Column style={productColumn}>
                  <Img
                    src={`https://cdn.templates.unlayer.com/assets/1631361709210-p2.png`}
                    width="250"
                    height="250"
                    alt="Colorful Nike Shoes"
                    style={productImage}
                  />
                  <Text style={productTitle}>Product Title Here</Text>
                  <Text style={productDescription}>Sed tincidunt vel sem ut facilisis. Aenean congue elit ac risus mollis.</Text>
                  <Link href="https://example.com/shop-now" style={shopNowButton}>
                    Shop Now
                  </Link>
                </Column>
              </Row>
              <Row>
                <Column style={productColumn}>
                  <Img
                    src={`https://cdn.templates.unlayer.com/assets/1631361885267-p3.png`}
                    width="250"
                    height="250"
                    alt="Red Basketball Shoes"
                    style={productImage}
                  />
                  <Text style={productTitle}>Product Title Here</Text>
                  <Text style={productDescription}>Sed tincidunt vel sem ut facilisis. Aenean congue elit ac risus mollis.</Text>
                  <Link href="https://example.com/shop-now" style={shopNowButton}>
                    Shop Now
                  </Link>
                </Column>
                <Column style={productColumn}>
                  <Img
                    src={`https://cdn.templates.unlayer.com/assets/1631361888589-p4.png`}
                    width="250"
                    height="250"
                    alt="Orange Football Cleats"
                    style={productImage}
                  />
                  <Text style={productTitle}>Product Title Here</Text>
                  <Text style={productDescription}>Sed tincidunt vel sem ut facilisis. Aenean congue elit ac risus mollis.</Text>
                  <Link href="https://example.com/shop-now" style={shopNowButton}>
                    Shop Now
                  </Link>
                </Column>
              </Row>
            </Section>
            <Section style={appSection}>
              <Row>
                <Column>
                  <Text style={appTitle}>Get Our Mobile App</Text>
                  <Row>
                    <Column style={{ width: '50%' }}>
                      <Link href="https://apps.apple.com/us/app/your-app/id123456789">
                        <Img
                          src={`https://cdn.templates.unlayer.com/assets/1631362568689-Google_Play_Badge_US.png`}
                          width="135"
                          height="40"
                          alt="Download on the App Store"
                        />
                      </Link>
                    </Column>
                    <Column style={{ width: '50%' }}>
                      <Link href="https://play.google.com/store/apps/details?id=com.yourapp">
                        <Img
                          src={`https://cdn.templates.unlayer.com/assets/1631362511442-App_Store_Badge_US_Black.png`}
                          width="135"
                          height="40"
                          alt="Get it on Google Play"
                        />
                      </Link>
                    </Column>
                  </Row>
                </Column>
                <Column>
                  <Img
                    src={`https://cdn.templates.unlayer.com/assets/1631362707021-5a2a3877cec7d2.620791351512716407847.png`}
                    width="150"
                    className="mx-auto object-contain"
                    height="150"
                    alt="Colorful running figure"
                  />
                </Column>
              </Row>
            </Section>
            <Section style={footer}>
              <Row>
                <Column>
                  <Img
                    src={`https://cdn.templates.unlayer.com/assets/1631362377820-logo2.png`}
                    width="60"
                    height="60"
                    className="object-cover mx-auto"
                    alt="Football Logo"
                  />
                </Column>
                {/* <Column>
                  <Row>
                    <Column >
                      <Link href="https://facebook.com">
                        <Img
                          src={`https://cdn.tools.unlayer.com/social/icons/circle-white/facebook.png`}
                          width="24"
                          height="24"
                          alt="Facebook"
                        />
                      </Link>
                    </Column>
                    <Column >
                      <Link href="https://twitter.com">
                        <Img
                          src={`https://cdn.tools.unlayer.com/social/icons/circle-white/twitter.png`}
                          width="24"
                          height="24"
                          alt="Twitter"
                        />
                      </Link>
                    </Column>
                    <Column >
                      <Link href="https://linkedin.com">
                        <Img
                          src={`https://cdn.tools.unlayer.com/social/icons/circle-white/linkedin.png`}
                          width="24"
                          height="24"
                          alt="LinkedIn"
                        />
                      </Link>
                    </Column>
                    <Column>
                      <Link href="https://instagram.com">
                        <Img
                          src={`https://cdn.tools.unlayer.com/social/icons/circle-white/instagram.png`}
                          width="24"
                          height="24"
                          alt="Instagram"
                        />
                      </Link>
                    </Column>
                  </Row>
                </Column> */}
              </Row>
              <Text style={footerText}>
                xxx Spring St Salinas, Idaho xxxx United States
              </Text>
              <Text style={footerText}>
                Call Us: +1 234 567890 | Email Us: info@yourdomain.com
              </Text>
              <Text style={footerText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
  
  export default EcommerceTemplate;
  
  const main = {
    backgroundColor: "#111111",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "680px",
    backgroundColor: "#000000",
  };
  
  const logoContainer = {
    marginBottom: "20px",
  };
  
  const headerContainer = {
    background: 'url("https://res.cloudinary.com/dirpuqqib/image/upload/v1728305618/1631360403765-2_wwu3a1.png")',
    backgroundSize: "cover", 
    borderRadius: "1px",
    textAlign: "center" as const,
  };
  
  const headerTitle = {
    color: "#ffffff",
    fontSize: "30px",
    fontWeight: "bold",
    textAlign: "start" as const,
  };
  
  const headerSubtitle = {
    color: "#ffffff",
    fontSize: "25px",
    fontWeight: "bold",
    margin: "0",
  };
  

  
  const contentContainer = {
    backgroundColor: "#000000",
    borderRadius: "4px",
    padding: "20px",
    marginBottom: "20px",
    borderBottom: "2px solid #ffcc5b"
  };
  
  const contentText = {
    fontSize: "14px",
    lineHeight: "24px",
    margin: "0 0 20px",
  };
  
  const button = {
    backgroundColor: "#ffcc5b",
    borderRadius: "1px",
    color: "#000",
    display: "inline-block",
    fontSize: "14px",
    fontWeight: "bold",
    padding: "10px 40px",
    textDecoration: "none",
    textAlign: "center" as const,
  };
  
  const productsContainer = {
    backgroundColor: "#000000",
    borderRadius: "4px",
    padding: "20px",
  };
  
  const productColumn = {
    width: "50%",
    padding: "10px",
  };
  
  const productImage = {
    marginBottom: "10px",
    objectFit: "cover" as const,
  };
  
  const productTitle = {
    fontSize: "17px",
    fontWeight: "bold",
    margin: "0 0 5px",
    color: "white"
  };
  
  const productDescription = {
    fontSize: "14px",
    lineHeight: "20px",
    margin: "0 0 10px",
    color: "white"
  };
  
  const shopNowButton = {
    ...button,
    backgroundColor: "#ffcc5b",
  };
  
  const appSection = {
    backgroundColor: "#ffcc5b",
    padding: "20px",
    marginTop: "20px",
  };
  
  const appTitle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "white",
  };
  
  const footer = {
    backgroundColor: "#000000",
    padding: "20px",
    marginTop: "20px",
  };
  
  const footerText = {
    fontSize: "12px",
    color: "#ffffff",
    margin: "5px 0",
    textAlign: "center" as const,
  };