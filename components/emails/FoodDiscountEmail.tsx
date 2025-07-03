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
} from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

export const FoodDiscountEmail = () => (
  <Html>
    <Head>
      <Font
        fontFamily="DM Sans"
        fallbackFontFamily="Arial"
        webFont={{
          url: "https://fonts.gstatic.com/s/dmsans/v15/rP2Fp2ywxg089UriCZa4ET-DNl0.woff2",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
    </Head>
    <Preview>Savor Cyber Discounts! Up to 50% off on 100+ delicious deals</Preview>
    <Tailwind>
      <Body style={main}>
        <Container style={container}>
          {/* Hero Section */}
          <Section style={heroSection}>
            <Row>
              <Column>
                <Heading style={heroHeading}>
                  Savor Cyber
                  <br />
                  Discounts!
                </Heading>
                <div style={{ textAlign: "center", padding: "10px" }}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1731441627661-Asset%201%201.png"
                    alt="Cartoon server with food"
                    title="Cartoon server with food"
                    width="406"
                    style={heroImage}
                  />
                </div>
                <Text style={heroText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore
                  magna aliqua quis.
                </Text>
                <div style={{ textAlign: "center", padding: "10px 10px 60px" }}>
                  <Link href="#" style={ctaButton}>
                    Shop Now
                  </Link>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Promotion Section */}
          <Section style={promoSection}>
            <Row>
              <Column>
                <Heading style={promoSmallHeading}>SAVINGS UP TO</Heading>
                <Heading style={promoMainHeading}>
                  <strong>50% OFF</strong>
                </Heading>
                <Heading style={promoSubHeading}>100+ Delicious Deals</Heading>
                <Text style={promoText}>
                  Hurry! this offer ends soon!{" "}
                  <Link href="#" style={promoLink}>
                    Shop Now
                  </Link>
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Content Section 1 */}
          <Section style={contentSection}>
            <Row>
              <Column>
                <Heading style={sectionHeading}>Lorem ipsum</Heading>
              </Column>
            </Row>
          </Section>

          <Section style={contentSection}>
            <Row>
              <Column style={{ width: "66.67%", verticalAlign: "top" }}>
                <Heading style={contentHeading}>Lorem ipsum</Heading>
                <Text style={contentText}>
                  Lorem Ipsum has evolved as a filler text for prototyping in the English language as it is written.
                </Text>
                <div style={{ padding: "10px 10px 10px 30px" }}>
                  <Link href="#" style={contentButton}>
                    Shop Now
                  </Link>
                </div>
              </Column>
              <Column style={{ width: "33.33%", verticalAlign: "top" }}>
                <div style={{ padding: "10px", textAlign: "center" }}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1696484825175-936948"
                    alt="Woman eating a burger"
                    title="Woman eating a burger"
                    width="180"
                    style={contentImage}
                  />
                </div>
              </Column>
            </Row>
          </Section>

          {/* Content Section 2 */}
          <Section style={contentSection}>
            <Row>
              <Column style={{ width: "66.67%", verticalAlign: "top" }}>
                <Heading style={contentHeading}>Store Location</Heading>
                <Text style={contentText}>
                  Lorem Ipsum has evolved as a filler text for prototyping in the English language as it is written.
                </Text>
              </Column>
              <Column style={{ width: "33.33%", verticalAlign: "top" }}>
                <div style={{ padding: "0px 10px 10px", textAlign: "center" }}>
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1731442867423-957%201.png"
                    alt="Map with colorful location pins"
                    title="Map with colorful location pins"
                    width="180"
                    style={contentImage}
                  />
                </div>
              </Column>
            </Row>
          </Section>

          {/* Footer Section */}
          <Section style={footerSection}>
            <Row>
              <Column style={{ width: "61.33%" }}>
                <Heading style={footerHeading}>Thanks for the support! 😍</Heading>
                <Text style={footerText}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  laboreet. Sed ut perspiciatis unde omnis iste natus error sit.
                </Text>

                {/* Social Media Icons */}
                <div style={socialContainer}>
                  <Link href="https://www.facebook.com" style={socialLink}>
                    <Img src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png" alt="Facebook" width="32" height="32" />
                  </Link>
                  <Link href="https://www.linkedin.com" style={socialLink}>
                    <Img src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png" alt="LinkedIn" width="32" height="32" />
                  </Link>
                  <Link href="https://www.instagram.com" style={socialLink}>
                    <Img src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png" alt="Instagram" width="32" height="32" />
                  </Link>
                  <Link href="https://www.twitter.com" style={socialLink}>
                    <Img src="https://cdn.tools.unlayer.com/social/icons/rounded/x.png" alt="X" width="32" height="32" />
                  </Link>
                </div>

                <div style={divider}></div>
              </Column>
             
            </Row>
          </Section>

          {/* Bottom Footer */}
          <Section style={bottomFooter}>
            <Row>
              <Column style={{ width: "61.33%" }}>
                <Text style={bottomFooterText}>UNSUBSCRIBE | PRIVACY POLICY | WEB</Text>
              </Column>
              <Column style={{ width: "38.67%" }}>
                <Text style={logoText}>[Your Logo]</Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
)

export default FoodDiscountEmail

// Styles
const main = {
  backgroundColor: "#ecf0f1",
  fontFamily: "DM Sans, Arial, sans-serif",
  margin: "0",
  padding: "0",
}

const container = {
  margin: "10px auto",
  width: "600px",
  maxWidth: "100%",
  border: "1px solid #E5E5E5",
  backgroundColor: "#ffffff",
}

const heroSection = {
  backgroundImage: "url('/placeholder.svg?height=600&width=600')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center top",
  backgroundColor: "transparent",
  padding: "55px 10px 60px",
  textAlign: "center" as const,
}

const heroHeading = {
  margin: "0px 0px 60px 0px",
  lineHeight: "100%",
  textAlign: "center" as const,
  fontSize: "38px",
  fontWeight: "400",
  color: "#000000",
}

const heroImage = {
  outline: "none",
  textDecoration: "none",
  clear: "both" as const,
  display: "inline-block",
  border: "none",
  height: "auto",
  width: "70%",
  maxWidth: "406px",
}

const heroText = {
  fontSize: "14px",
  lineHeight: "140%",
  textAlign: "center" as const,
  color: "#000000",
  padding: "10px 60px",
  margin: "0",
}

const ctaButton = {
  backgroundColor: "#dd5353",
  color: "#ffffff",
  fontSize: "10px",
  textDecoration: "none",
  padding: "10px 20px",
  width: "30%",
  maxWidth: "100%",
  display: "inline-block",
  textAlign: "center" as const,
  fontWeight: "500",
  borderRadius: "0px",
}

const promoSection = {
  backgroundImage: "url('https://res.cloudinary.com/dirpuqqib/image/upload/v1750506173/zcst3j2acbv1rqtsqtta.png')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center top",
  backgroundColor: "transparent",
  padding: "43px 10px 34px",
  textAlign: "center" as const,
}

const promoSmallHeading = {
  margin: "0px",
  lineHeight: "140%",
  textAlign: "center" as const,
  fontSize: "22px",
  fontWeight: "400",
  color: "#000000",
}

const promoMainHeading = {
  margin: "0px",
  lineHeight: "100%",
  textAlign: "center" as const,
  fontSize: "45px",
  fontWeight: "400",
  color: "#000000",
}

const promoSubHeading = {
  margin: "5px 0px 0px 0px",
  lineHeight: "140%",
  textAlign: "center" as const,
  fontSize: "22px",
  fontWeight: "400",
  color: "#000000",
}

const promoText = {
  margin: "20px 0px 0px 0px",
  lineHeight: "140%",
  textAlign: "center" as const,
  fontSize: "15px",
  fontWeight: "400",
  color: "#000000",
}

const promoLink = {
  color: "#ba372a",
  textDecoration: "underline",
}

const contentSection = {
  backgroundColor: "#ffffff",
  padding: "20px 0px",
}

const sectionHeading = {
  margin: "0px",
  lineHeight: "140%",
  textAlign: "center" as const,
  fontSize: "30px",
  fontWeight: "700",
  color: "#000000",
  padding: "40px 10px 20px",
}

const contentHeading = {
  margin: "0px",
  lineHeight: "140%",
  textAlign: "left" as const,
  fontSize: "22px",
  fontWeight: "700",
  color: "#000000",
  padding: "30px 10px 0px 30px",
}

const contentText = {
  fontSize: "14px",
  lineHeight: "140%",
  textAlign: "left" as const,
  color: "#000000",
  padding: "10px 10px 10px 30px",
  margin: "0",
}

const contentButton = {
  backgroundColor: "#dd5353",
  color: "#ffffff",
  fontSize: "14px",
  textDecoration: "none",
  padding: "10px 20px",
  width: "50%",
  maxWidth: "100%",
  display: "inline-block",
  textAlign: "center" as const,
  fontWeight: "500",
  borderRadius: "0px",
}

const contentImage = {
  outline: "none",
  textDecoration: "none",
  clear: "both" as "both",
  display: "inline-block",
  border: "none",
  height: "auto",
  width: "100%",
  maxWidth: "180px",
}

const footerSection = {
  backgroundColor: "#dd5353",
  padding: "40px 35px 10px",
}

const footerHeading = {
  margin: "0px",
  color: "#ffffff",
  lineHeight: "140%",
  textAlign: "left" as const,
  fontSize: "22px",
  fontWeight: "400",
}

const footerText = {
  fontSize: "13px",
  color: "#cccccc",
  lineHeight: "170%",
  textAlign: "left" as const,
  margin: "0px",
  padding: "0px 60px 10px 0px",
}

const socialContainer = {
  display: "flex",
  alignItems: "center",
  padding: "10px 0px",
  gap: "10px",
}

const socialLink = {
  display: "inline-block",
  marginRight: "10px",
}

const divider = {
  borderTop: "1px solid #d3d3d3",
  height: "0px",
  width: "100%",
  margin: "10px 0px",
}

const logoHeading = {
  margin: "0px",
  color: "#ffffff",
  lineHeight: "140%",
  textAlign: "right" as const,
  fontSize: "22px",
  fontWeight: "400",
  padding: "15px 35px 10px 10px",
}

const bottomFooter = {
  backgroundColor: "#dd5353",
  padding: "0px",
}

const bottomFooterText = {
  margin: "0px",
  color: "#e7e7e7",
  lineHeight: "140%",
  textAlign: "left" as const,
  fontSize: "12px",
  fontWeight: "400",
  padding: "15px 10px 10px 35px",
}

const logoText = {
  margin: "0px",
  color: "#ffffff",
  lineHeight: "140%",
  textAlign: "right" as const,
  fontSize: "17px",
  fontWeight: "400",
  padding: "7px 35px 10px 10px",
}
