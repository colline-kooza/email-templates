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
  
  
  export const ThankYouEmail = () => (
    <Html>
      <Head />
      <Preview>Thank You for Your Purchase</Preview>
      <Tailwind>
      <Body style={main}>
        <Container style={container}>
          <Heading className="!mt-0 !mb-1" style={h1}>Thank You for Your Purchase</Heading>
          <Text className="!mt-1 !mb-0" style={text}>
            How was your <span style={bold}>experience</span>?
          </Text>
          <Text className="!mt-0 !mb-0" style={text}>
            We'd love to hear your <span style={bold}>feedback!</span>
          </Text>
  
          <Section style={feedbackSection}>
            <Row>
              <Column style={{ width: '50%', paddingRight: '20px' }}>
                <Text style={feedbackTitle}>
                  Your feedback is very important for us!
                </Text>
                <Text style={ratingText}>RATING</Text>
                <Text style={stars}>★ ★ ★ ★ ☆</Text>
                <Text style={lorem}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </Text>
                <Link style={button} href="https://example.com/review">
                  Submit Your Review
                </Link>
              </Column>
              <Column style={{ width: '50%' }}>
                <Img
                  src={`https://cdn.templates.unlayer.com/assets/1657197320320-Untitled-1.jpg`}
                  width="250"
                  height="300"
                  alt="T-shirt"
                  className="object-cover"

                  style={productImage}
                />
              </Column>
            </Row>
          </Section>
  
          <Heading as="h2" style={h2}>
            MORE ITEMS JUST FOR YOU
          </Heading>
  
          <Section style={productsSection}>
            <Row>
              {[
                { color: '1657107502078-2', price: '$36.00' },
                { color: '1657107499043-1', price: '$35.00' },
                { color: '1657107505812-3', price: '$38.00' },
              ].map((item, index) => (
                <Column key={index} style={productColumn}>
                  <Img
                    src={`https://cdn.templates.unlayer.com/assets/${item.color}.png`}
                    width="150"
                    height="150"
                    alt={`${item.color} T-shirt`}
                    style={productImage}
                    className="object-cover"
                  />
                  <Text style={productName}>Product Name</Text>
                  <Text style={productPrice}>{item.price}</Text>
                </Column>
              ))}
            </Row>
          </Section>
  
          <Hr style={hr} />
  
          <Section style={footer}>
            <Text style={footerText}>
              2261 Market Street #4667 San Francisco, CA 94114
            </Text>
            <Text style={footerText}>
              All rights reserved. Company No. 94114
            </Text>
            <Text style={footerText}>
              <Link href="#" style={footerLink}>Preferences</Link> |{" "}
              <Link href="#" style={footerLink}>Unsubscribe</Link> |{" "}
              <Link href="#" style={footerLink}>View in browser</Link>
            </Text>
          </Section>
        </Container>
      </Body>
      </Tailwind>
    </Html>
  );
  
  export default ThankYouEmail;
  
  const main = {
    backgroundColor: "#eeedee",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "580px",
    backgroundColor: "white",

  };
  
  const h1 = {
    color: "#333",
    fontSize: "30px",
    fontWeight: "bold",
    padding: "17px 0 0",
    textAlign: "center" as const,
  };
  
  const h2 = {
    color: "#333",
    fontSize: "20px",
    fontWeight: "bold",
    padding: "0",
    margin: "30px 0 15px 0",
    textAlign: "center" as const,
  };
  
  const text = {
    color: "#333",
    fontSize: "16px",
    textAlign: "center" as const,
  };
  
  const bold = {
    fontWeight: "bold",
  };
  
  const feedbackSection = {
    padding: "20px",
    borderRadius: "4px",
    margin: "20px 0",
  };
  
  const feedbackTitle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#ef495f",
  };
  
  const ratingText = {
    fontSize: "14px",
    color: "#333",
    marginTop: "10px",
  };
  
  const stars = {
    fontSize: "24px",
    color: "#ef495f",
  };
  
  const lorem = {
    fontSize: "12px",
    color: "#666",
    marginTop: "10px",
  };
  
  const button = {
    backgroundColor: "#ef495f",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "12px 0",
    marginTop: "20px",
  };
  
  const productImage = {
    maxWidth: "100%",
    borderRadius: "4px",
  };
  
  const productsSection = {
    textAlign: "center" as const,
  };
  
  const productColumn = {
    width: "33.33%",
    padding: "0 10px",
  };
  
  const productName = {
    color: "#333",
    fontSize: "14px",
    fontWeight: "bold",
    marginTop: "8px",
  };
  
  const productPrice = {
    color: "#ff6b6b",
    fontSize: "14px",
    fontWeight: "bold",
    marginTop: "4px",
  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
  const footer = {
    textAlign: "center" as const,
    marginTop: "20px",
  };
  
  const footerText = {
    color: "#666",
    fontSize: "12px",
    lineHeight: "20px",
  };
  
  const footerLink = {
    color: "#666",
    textDecoration: "underline",
  };