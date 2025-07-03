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

export const SaleEmail = () => (
  <Html>
    <Head />
    <Preview>Boxing Day Super Sale - Save up to 25%</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          <div
            style={{ borderBottom: "1px solid #2f2f30" }}
            className="w-full py-3 pb-9"
          >
            <img
              src="https://cdn.templates.unlayer.com/assets/1628059148595-Bed_719783.png"
              alt="Store Logo"
              style={{ maxHeight: 40, maxWidth: "100%", float: "left" }}
              className="!mb-2 ml-4"
            />
            <div
              style={{ float: "right" }}
              className="flex space-x-4 text-black mr-2"
            >
              <Link href="#" className="text-sm text-black tracking-widest">
                SOFA | CHAIR | TABLE
              </Link>
            </div>
          </div>

          <Section
            style={{
              padding: "100px 20px",
              textAlign: "center" as const,
              background:
                'url("https://res.cloudinary.com/dirpuqqib/image/upload/v1728292833/1628059306258-couch-447484_960_720_cdcw2s.jpg")',
              backgroundSize: "cover",
            }}
          >
            <Heading
              style={{
                color: "#000000",
                fontSize: "32px",
                fontWeight: "bold",
                margin: "0 0 20px",
                textTransform: "uppercase",
              }}
            >
              SPECIAL SUPER SALE
            </Heading>
            <Text style={subHeading}>LET THE CELEBRATION BEGIN</Text>
            <Text style={saleText}>SAVE UP TO 25%</Text>
            <Link
              href="https://example.com/shop"
              style={{
                backgroundColor: "#000000",
                color: "#ffffff",
                display: "inline-block",
                fontSize: "14px",
                fontWeight: "bold",
                padding: "15px 30px",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              SHOP NOW
            </Link>
          </Section>

          <Section style={productsSection}>
            <Heading
              style={{
                color: "#000000",
                fontSize: "24px",
                fontWeight: "bold",
                margin: "0 0 20px",
                textTransform: "uppercase",
              }}
            >
              OUR PRODUCTS
            </Heading>
            <Text style={productDescription}>
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </Text>
            <Row>
              <Column style={productColumn}>
                <Img
                  src={`https://cdn.templates.unlayer.com/assets/1628060939602-chair-575778_960_720.png`}
                  width="200"
                  height="200"
                  alt="Green chair"
                  style={productImage}
                  className="text-center mx-auto mb-0"
                />
                <Text style={productName}>CHAIR NAME</Text>
                <Text className="text-center" style={productPrice}>
                  <span style={oldPrice}>$300</span> $250
                </Text>
                <Link
                  href="https://example.com/shop"
                  style={{
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    display: "inline-block",
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    textDecoration: "none",
                    textTransform: "uppercase",
                  }}
                >
                  SHOP NOW
                </Link>
              </Column>
              <Column style={productColumn}>
                <Img
                  src={`https://res.cloudinary.com/dirpuqqib/image/upload/v1728294142/brown-chair-furniture_1308-82947-removebg-preview_ziy8m4.png`}
                  width="200"
                  height="200"
                  alt=" chair"
                  className="text-center mx-auto"
                  style={productImage}
                />
                <Text style={productName}>CHAIR NAME</Text>
                <Text className="text-center" style={productPrice}>
                  <span style={oldPrice}>$300</span> $250
                </Text>
                <Link
                  href="https://example.com/shop"
                  style={{
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    display: "inline-block",
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    textDecoration: "none",
                    textTransform: "uppercase",
                  }}
                >
                  SHOP NOW
                </Link>
              </Column>
            </Row>
          </Section>

          <Section style={aboutUsSection}>
            <Heading
              style={{
                color: "#000000",
                fontSize: "24px",
                fontWeight: "bold",
                margin: "0 0 20px",
                textTransform: "uppercase",
              }}
            >
              ABOUT US
            </Heading>
            <Text style={aboutUsText}>
              At our furniture store, we believe in creating spaces that inspire
              and comfort. With over 20 years of experience, we've been bringing
              quality craftsmanship and timeless design into homes across the
              country. Our passion for furniture is matched only by our
              commitment to customer satisfaction. From classic pieces to modern
              marvels, we curate collections that cater to every taste and
              lifestyle.
            </Text>
          </Section>

          <Section style={productsSection}>
            <Img
              src={`https://cdn.templates.unlayer.com/assets/1628065642615-couch-576125_960_720.png`}
              alt="Green chair"
              style={productImage}
              width="800"
              height="800"
              className="text-center mx-auto mb-0 "
            />
            <Heading
              style={{
                color: "#bbb3b2",
                fontSize: "18px",
                fontWeight: "medium",
                textTransform: "uppercase",
              }}
            >
              KEY PRODUCT
            </Heading>
            <Heading
              style={{
                color: "#575a5e",
                fontSize: "18px",
                fontWeight: "medium",
                margin: "0 0 0px",
                textTransform: "uppercase",
              }}
            >
              PRODUCT NAME HERE
            </Heading>
            <Text
              style={{
                color: "#666666",
                fontSize: "14px",
                lineHeight: "1.5",
                margin: "0 0 40px",
              }}
            >
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </Text>
            <Text
              className="text-center !mb-0"
              style={{
                color: "#000000",
                fontSize: "16px",
              }}
            >
              <span
                style={{
                  color: "#666666",
                  textDecoration: "line-through",
                  // ,
                }}
              >
                $300
              </span>{" "}
              $250
            </Text>
            <Link
              href="https://example.com/shop"
              style={{
                backgroundColor: "#000000",
                color: "#ffffff",
                display: "inline-block",
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              SHOP NOW
            </Link>
          </Section>

          <Section style={productsSection}>
            <Row>
              <Column style={productColumn}>
                <Img
                  src={`https://cdn.templates.unlayer.com/assets/1628065981993-couch-576124_960_720.png`}
                  width="700"
                  height="700"
                  alt="Green chair"
                  style={productImage}
                  className="text-center mx-auto mb-0"
                />
                <Text style={productName}>SOFA NAME</Text>
                <Text className="text-center" style={productPrice}>
                  <span style={oldPrice}>$300</span> $250
                </Text>
                <Link
                  href="https://example.com/shop"
                  style={{
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    display: "inline-block",
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    textDecoration: "none",
                    textTransform: "uppercase",
                  }}
                >
                  SHOP NOW
                </Link>
              </Column>
              <Column style={productColumn}>
                <Img
                  src={`https://cdn.templates.unlayer.com/assets/1628066041757-couch-576136_960_720.png`}
                  width="700"
                  height="700"
                  alt=" chair"
                  className="text-center mx-auto"
                  style={productImage}
                />
                <Text style={productName}>SOFA NAME</Text>
                <Text className="text-center" style={productPrice}>
                  <span style={oldPrice}>$300</span> $250
                </Text>
                <Link
                  href="https://example.com/shop"
                  style={{
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    display: "inline-block",
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    textDecoration: "none",
                    textTransform: "uppercase",
                  }}
                >
                  SHOP NOW
                </Link>
              </Column>
            </Row>
          </Section>

          <Hr style={divider} />

          <Section style={footerSection}>
            <Text style={footerText}>
              © 2024 Your Furniture Store. All rights reserved.
            </Text>
            <Text style={footerLinks}>
              <Link href="#" style={footerLink}>
                Privacy Policy
              </Link>{" "}
              |
              <Link href="#" style={footerLink}>
                Terms of Service
              </Link>{" "}
              |
              <Link href="#" style={footerLink}>
                Unsubscribe
              </Link>
            </Text>
            <Text style={footerAddress}>
              123 Furniture Lane, Comfort City, CF 12345
            </Text>
            <Text style={footerSocial}>
              Follow us:
              <Link href="#" style={socialLink}>
                Facebook
              </Link>{" "}
              |
              <Link href="#" style={socialLink}>
                Instagram
              </Link>{" "}
              |
              <Link href="#" style={socialLink}>
                Pinterest
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default SaleEmail;

const main = {
  backgroundColor: "#f1f1f1",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "100%",
  maxWidth: "660px",
  backgroundColor: "white",
};


const subHeading = {
  color: "#666666",
  fontSize: "18px",
  margin: "0 0 20px",
};

const saleText = {
  color: "#000000",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 30px",
};


const productsSection = {
  padding: "40px 20px",
  textAlign: "center" as const,
};


const productDescription = {
  color: "#666666",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0 0 40px",
};

const productColumn = {
  width: "50%",
  padding: "0 10px",
};

const productImage = {
  width: "100%",
  maxWidth: "200px",
  height: "auto",
  marginBottom: "20px",
};

const productName = {
  color: "#000000",
  fontSize: "16px",
  fontWeight: "bold",
  margin: "0 0 0px",
};

const productPrice = {
  color: "#000000",
  fontSize: "16px",
  margin: "0 0 2px",
};

const oldPrice = {
  color: "#666666",
  textDecoration: "line-through",
};

const shopNowButton = {
  backgroundColor: "#000000",
  color: "#ffffff",
  display: "inline-block",
  fontSize: "14px",
  fontWeight: "bold",
  padding: "10px 20px",
  textDecoration: "none",
  textTransform: "uppercase",
};

const aboutUsSection = {
  padding: "40px 20px",
  backgroundColor: "#f8f8f8",
  textAlign: "center" as const,
};

const aboutUsHeading = {
  color: "#000000",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 20px",
  textTransform: "uppercase",
};

const aboutUsText = {
  color: "#666666",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0 auto",
  maxWidth: "500px",
};

const divider = {
  borderTop: "1px solid #e0e0e0",
  margin: "40px 0",
};

const footerSection = {
  padding: "0 10px 0px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#666666",
  fontSize: "12px",
  margin: "0 0 10px",
};

const footerLinks = {
  margin: "0 0 10px",
};

const footerLink = {
  color: "#000000",
  fontSize: "12px",
  textDecoration: "none",
  margin: "0 5px",
};

const footerAddress = {
  color: "#666666",
  fontSize: "12px",
  margin: "0 0 10px",
};

const footerSocial = {
  margin: "20px 0 0",
};

const socialLink = {
  color: "#000000",
  fontSize: "12px",
  textDecoration: "none",
  margin: "0 5px",
};
