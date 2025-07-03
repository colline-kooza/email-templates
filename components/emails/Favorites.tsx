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
    Section,
    Row,
    Column,
    Link,
  } from "@react-email/components"
  
  interface DaylightSavingPromoProps {
    promoCode?: string
    discountPercentage?: string
    year?: string
  }
  
  export const Favorites = ({
    promoCode = "1035321",
    discountPercentage = "10%",
    year = "2023",
  }: DaylightSavingPromoProps) => {
    return (
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
            fontStyle="normal"
          />
        </Head>
        <Preview>Our Favorite Day of the Year</Preview>
        <Body style={main}>
          <Container style={container}>
            {/* Header */}
            <Section style={headerStyle}>
              <Row>
                <Column>
                  <Row>
                    <Column style={{ width: "100%" }}>
                      <Link href="#" style={navLinkStyle}>
                        Home
                      </Link>
                      <Link href="#" style={{ ...navLinkStyle, marginLeft: "20px" }}>
                        Page
                      </Link>
                      <Link href="#" style={{ ...navLinkStyle, marginLeft: "20px" }}>
                        About Us
                      </Link>
                    </Column>
                  </Row>
                </Column>
              </Row>
            </Section>
  
            {/* Hero Image */}
            <Section style={sectionStyle}>
              <Row>
                <Column>
                  <Img
                    src="https://media.istockphoto.com/id/1688949463/photo/champagne-toast-celebration-happy-new-year-flutes-with-golden-glitter-on-blue-abstract.jpg?s=612x612&w=0&k=20&c=iT3z1Ggs09qUTtxEpk6b_iz6C5b3SlOgzm6ybMTjrvA="
                    alt="Fireworks and Flag"
                    width="600"
                    style={imageStyle}
                  />
                </Column>
              </Row>
            </Section>
  
            {/* Promo Content */}
            <Section style={promoSectionStyle}>
              <Row>
                <Column>
                  <Heading as="h2" style={headingStyle}>
                    OUR FAVORITE DAY OF THE YEAR.
                  </Heading>
                  <Text style={textStyle}>
                    One more hour of sleep? Time to celebrate Daylight Saving with{" "}
                    <strong>{discountPercentage} OFF</strong> any order with a mattress.
                  </Text>
  
                  <Button href="https://example.com" style={buttonStyle}>
                    Use this promo code
                  </Button>
  
                  <Text style={promoCodeStyle}>
                    <strong>{promoCode}</strong>
                  </Text>
                </Column>
              </Row>
            </Section>
  
            {/* Second Image */}
            <Section style={sectionStyle}>
              <Row>
                <Column>
                  <Img
                    src="https://media.istockphoto.com/id/175381430/photo/dark-beauty.jpg?s=612x612&w=0&k=20&c=0Fo9gOlczi8RmeIFnp_swmc-7ZNA_dcUPrCdlwXcDg0="
                    alt="Promo"
                    width="600"
                    style={imageStyle}
                  />
                </Column>
              </Row>
            </Section>
  
            {/* Social Media */}
            <Section style={socialMediaStyle}>
              <Row>
                <Column align="center">
                  <Link href="https://facebook.com" style={socialLink}>
                    <Img
                      src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                      alt="Facebook"
                      width="29"
                      height="29"
                      style={iconStyle}
                    />
                  </Link>
                  <Link href="https://instagram.com" style={socialLink}>
                    <Img
                      src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
                      alt="Instagram"
                      width="29"
                      height="29"
                      style={iconStyle}
                    />
                  </Link>
                  <Link href="https://linkedin.com" style={socialLink}>
                    <Img
                      src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                      alt="LinkedIn"
                      width="29"
                      height="29"
                      style={iconStyle}
                    />
                  </Link>
                </Column>
              </Row>
            </Section>
  
            {/* Footer Navigation */}
            <Section style={navLinksStyle}>
              <Row>
                <Column align="center">
                  <Link href="https://example.com/home" style={footerLinkStyle}>
                    Home
                  </Link>
                  <Text style={separatorStyles}>|</Text>
                  <Link href="https://example.com/page" style={footerLinkStyle}>
                    Page
                  </Link>
                  <Text style={separatorStyles}>|</Text>
                  <Link href="https://example.com/about" style={footerLinkStyle}>
                    About Us
                  </Link>
                </Column>
              </Row>
            </Section>
  
            {/* Copyright */}
            <Section style={copyrightSectionStyle}>
              <Row>
                <Column>
                  <Text style={copyrightStyle}>
                    © {year} Twitch, All Rights Reserved 350 Bush Street, 2nd Floor, San Francisco, CA, 94104 - USA ,
                    desishub web services
                  </Text>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Html>
    )
  }
  
  export default Favorites
  
  // Email-client compatible styles
  const main = {
    fontFamily: '"DM Sans", Verdana, sans-serif',
    background: "#000000",
    color: "#ffffff",
    margin: "0",
    padding: "0",
  }
  
  const container = {
    maxWidth: "600px",
    margin: "0 auto",
    paddingTop: "10px",
  }
  
  const headerStyle = {
    backgroundColor: "#ea580c",
    padding: "10px 20px",
    marginBottom: "20px",
  }
  
  const navLinkStyle = {
    textDecoration: "none",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "12px",
    display: "inline-block",
  }
  
  const sectionStyle = {
    padding: "0 20px",
    marginBottom: "20px",
  }
  
  const imageStyle = {
    width: "100%",
    maxWidth: "600px",
    height: "auto",
    display: "block",
    border: "0",
  }
  
  const promoSectionStyle = {
    padding: "0 25px",
    textAlign: "center" as const,
    marginBottom: "20px",
  }
  
  const headingStyle = {
    margin: "24px 0 12px",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#ffffff",
  }
  
  const textStyle = {
    marginBottom: "14px",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#ffffff",
  }
  
  const buttonStyle = {
    backgroundColor: "#ea580c",
    color: "#ffffff",
    borderRadius: "5px",
    padding: "12px 24px",
    margin: "20px 0",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "bold",
    display: "inline-block",
    border: "none",
  }
  
  const promoCodeStyle = {
    fontSize: "20px",
    margin: "10px 0",
    color: "#ffffff",
  }
  
  const socialMediaStyle = {
    backgroundColor: "#ea580c",
    padding: "15px",
    textAlign: "center" as const,
    marginTop: "20px",
  }
  
  const socialLink = {
    textDecoration: "none",
    display: "inline-block",
    marginLeft: "5px",
    marginRight: "5px",
  }
  
  const iconStyle = {
    width: "29px",
    height: "29px",
    borderRadius: "50%",
  }
  
  const navLinksStyle = {
    backgroundColor: "#ea580c",
    padding: "5px",
    textAlign: "center" as const,
  }
  
  const footerLinkStyle = {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: "bold",
    display: "inline-block",
  }
  
  const separatorStyles = {
    marginLeft: "10px",
    marginRight: "10px",
    display: "inline-block",
    color: "#ffffff",
    fontSize: "12px",
  }
  
  const copyrightSectionStyle = {
    backgroundColor: "#ea580c",
    padding: "0px 25px",
    textAlign: "center" as const,
    borderTop: "1px solid #fff",
    borderTopRightRadius: "5px",
    borderTopLeftRadius: "5px",
  }
  
  const copyrightStyle = {
    fontSize: "12px",
    color: "#ffffff",
    lineHeight: "18px",
    padding: "10px 0",
  }
  