import {
  Body,
  Column,
  Container,
  Font,
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
} from "@react-email/components"

interface ProductProps {
  id: number
  title: string
  imageUrl: string
  description: string
  href: string
  price?: string
}

interface JewelryEcommerceTemplateProps {
  logoUrl?: string
  heroImageUrl?: string
  ringsImageUrl?: string
  necklacesImageUrl?: string
  products?: ProductProps[]
  companyName?: string
  phone?: string
  email?: string
  websiteUrl?: string
}

export default function JewelryEcommerceTemplate({
  logoUrl = "https://img.freepik.com/free-psd/luxury-gold-diamond-ring-exquisite-floral-design_632498-25209.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740",
  heroImageUrl = "https://img.freepik.com/free-photo/woman-s-arms-wearing-golden-jewelry_23-2149640599.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740",
  ringsImageUrl = "https://img.freepik.com/premium-photo/jewelry-photography_808279-8.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740",
  necklacesImageUrl = "https://img.freepik.com/premium-photo/trending-gold-neckless_1188452-4666.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740",
  products = [
    {
      id: 1,
      title: "Diamond Pendants",
      href: "/products/pendants",
      imageUrl: "https://img.freepik.com/premium-photo/jewelry-diamond-rings-necklaces-show-luxury-retail-store-window-display-showcase_293060-5163.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740",
      description: "Elegant diamond pendants for special occasions.",
      price: "$299",
    },
    {
      id: 2,
      title: "Gold Earrings",
      href: "/products/earrings",
      imageUrl: "https://img.freepik.com/premium-photo/jewelry-diamond-rings-necklaces-show-luxury-retail-store-window-display-showcase_293060-5163.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740",
      description: "Handcrafted gold earrings with premium finish.",
      price: "$199",
    },
    
  ],
  companyName = "Luxe Jewelry",
  phone = "+1 (555) 123-4567",
  email = "info@luxejewelry.com",
  websiteUrl = "https://luxejewelry.com",
}: JewelryEcommerceTemplateProps) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          @media only screen and (max-width: 600px) {
            .container {
              width: 100% !important;
              max-width: 100% !important;
              margin: 0 !important;
            }
            
            .header {
              padding: 15px 20px !important;
            }
            
            .nav-row {
              display: block !important;
            }
            
            .nav-item {
              width: 100% !important;
              display: block !important;
              text-align: center !important;
              margin: 5px 0 !important;
            }
            
            .hero-section {
              padding: 30px 20px !important;
            }
            
            .hero-content {
              width: 100% !important;
              padding-right: 0 !important;
              text-align: center !important;
              margin-bottom: 30px !important;
            }
            
            .hero-image-container {
              width: 100% !important;
              text-align: center !important;
            }
            
            .hero-heading {
              font-size: 24px !important;
              margin-bottom: 15px !important;
            }
            
            .hero-text {
              font-size: 14px !important;
              margin-bottom: 25px !important;
            }
            
            .hero-button {
              padding: 12px 24px !important;
              font-size: 16px !important;
            }
            
            .divider-section {
              padding: 30px 20px 15px 20px !important;
            }
            
            .category-title {
              font-size: 16px !important;
              margin: 0 15px !important;
            }
            
            .categories-section {
              padding: 15px 20px 30px 20px !important;
            }
            
            .category-image-column,
            .category-content-column {
              width: 100% !important;
              display: block !important;
              padding: 0 !important;
              text-align: center !important;
            }
            
            .category-image-column {
              margin-bottom: 20px !important;
            }
            
            .category-content-column {
              padding-left: 0 !important;
            }
            
            .category-image {
              width: 100% !important;
              max-width: 100% !important;
            }
            
            .category-heading {
              font-size: 18px !important;
              margin-bottom: 12px !important;
            }
            
            .category-description {
              font-size: 14px !important;
              margin-bottom: 20px !important;
            }
            
            .category-button {
              padding: 12px 24px !important;
              font-size: 14px !important;
            }
            
            .products-section {
              padding: 30px 20px 40px 20px !important;
            }
            
            .section-heading {
              font-size: 22px !important;
              margin-bottom: 30px !important;
            }
            
            .product-column {
              width: 100% !important;
              display: block !important;
              padding: 0 !important;
              margin-bottom: 25px !important;
            }
            
            .product-card {
              margin-bottom: 0 !important;
            }
            
            .product-image {
              height: 200px !important;
            }
            
            .product-info {
              padding: 20px 15px !important;
            }
            
            .product-title {
              font-size: 18px !important;
              margin-bottom: 10px !important;
            }
            
            .product-description {
              font-size: 14px !important;
              margin-bottom: 12px !important;
            }
            
            .product-price {
              font-size: 20px !important;
              margin-bottom: 15px !important;
            }
            
            .product-button {
              padding: 12px 20px !important;
              font-size: 14px !important;
            }
            
            .footer {
              padding: 30px 20px 25px 20px !important;
            }
            
            .footer-column {
              width: 100% !important;
              display: block !important;
              padding-right: 0 !important;
              margin-bottom: 25px !important;
              text-align: center !important;
            }
            
            .footer-heading {
              font-size: 16px !important;
              margin-bottom: 12px !important;
            }
            
            .footer-text {
              font-size: 14px !important;
              margin-bottom: 8px !important;
            }
            
            .footer-bottom {
              text-align: center !important;
            }
            
            .copyright {
              font-size: 12px !important;
              margin-bottom: 8px !important;
            }
            
            .unsubscribe {
              font-size: 12px !important;
            }
          }
          
          @media only screen and (max-width: 480px) {
            .hero-heading {
              font-size: 20px !important;
            }
            
            .hero-text {
              font-size: 13px !important;
            }
            
            .category-title {
              font-size: 14px !important;
            }
            
            .section-heading {
              font-size: 20px !important;
            }
            
            .category-heading {
              font-size: 16px !important;
            }
          }
        `}</style>
      </Head>
      <Preview>Discover Our Exquisite Jewelry Collection</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle} className="container">
        {/* Header */}
              <div style={footerBottomStyle} className="w-20 bg-[#f8f8f8] text-center py-1">
                <img src="https://cdn.templates.unlayer.com/assets/1597206061989-11.png" alt="Logo" className="w-10 " />
              </div>

          {/* Hero Section */}
          <Section style={heroSectionStyle} className="hero-section">
            <Row>
              <Column style={heroContentStyle} className="hero-content">
                <Heading style={heroHeadingStyle} className="hero-heading">Shine Bright This Season</Heading>
                <Text style={heroTextStyle} className="hero-text">
                  Discover our exclusive collection of handcrafted jewelry. Each piece tells a story of elegance and
                  timeless beauty.
                </Text>
                <Link href="/collections" style={heroButtonStyle} className="hero-button">
                  Shop Collection
                </Link>
              </Column>
              <Column style={heroImageContainerStyle} className="hero-image-container">
                <Img src="https://img.freepik.com/free-vector/jewelry-accessories-realistic-set-with-rings-earrings-black-background_1284-27174.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740" alt="Featured Jewelry" style={heroImageStyle} />
              </Column>
            </Row>
          </Section>

          {/* Divider */}
          <Section style={dividerSectionStyle} className="divider-section">
            <Hr style={dividerStyle} />
            <Text style={categoryTitleStyle} className="category-title">Featured Categories</Text>
            <Hr style={dividerStyle} />
          </Section>

          {/* Categories */}
          <Section style={categoriesSectionStyle} className="categories-section">
            {/* Rings Category */}
            <Row style={categoryRowStyle}>
              <Column style={categoryImageColumnStyle} className="category-image-column">
                <Img src="https://img.freepik.com/premium-photo/ethnic-jewellery-low-light_864595-508.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740" alt="Rings Collection" style={categoryImageStyle} className="category-image" />
              </Column>
              <Column style={categoryContentColumnStyle} className="category-content-column">
                <Heading style={categoryHeadingStyle} className="category-heading">Exquisite Rings</Heading>
                <Text style={categoryDescriptionStyle} className="category-description">
                  From engagement rings to statement pieces, find the perfect ring to celebrate life's special moments.
                </Text>
                <Link href="/rings" style={categoryButtonStyle} className="category-button">
                  Explore Rings
                </Link>
              </Column>
            </Row>

            {/* Spacing */}
            <Row style={categorySpacingStyle}>
              <Column>
                <Text style={spacerStyle}>&nbsp;</Text>
              </Column>
            </Row>

            {/* Necklaces Category */}
            <Row style={categoryRowStyle}>
              <Column style={categoryContentColumnStyle} className="category-content-column">
                <Heading style={categoryHeadingStyle} className="category-heading">Elegant Necklaces</Heading>
                <Text style={categoryDescriptionStyle} className="category-description">
                  Delicate chains and bold statement pieces that complement every style and occasion.
                </Text>
                <Link href="/necklaces" style={categoryButtonStyle} className="category-button">
                  Explore Necklaces
                </Link>
              </Column>
              <Column style={categoryImageColumnStyle} className="category-image-column">
                <Img src="https://img.freepik.com/premium-photo/trending-gold-neckless_1188452-4666.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_hybrid&w=740" alt="Necklaces Collection" style={categoryImageStyle} className="category-image" />
              </Column>
            </Row>
          </Section>

          {/* Products Section */}
          <Section style={productsSectionStyle} className="products-section">
            <Heading style={sectionHeadingStyle} className="section-heading">Bestsellers</Heading>
            <Row>
              {products.map((product) => (
                <Column key={product.id} style={productColumnStyle} className="product-column">
                  <div style={productCardStyle} className="product-card">
                    <Link href={product.href}>
                      <Img src={product.imageUrl} alt={product.title} style={productImageStyle} className="product-image" />
                    </Link>
                    <div style={productInfoStyle} className="product-info">
                      <Heading style={productTitleStyle} className="product-title">{product.title}</Heading>
                      <Text style={productDescriptionStyle} className="product-description">{product.description}</Text>
                      {product.price && <Text style={productPriceStyle} className="product-price">{product.price}</Text>}
                      <Link href={product.href} style={productButtonStyle} className="product-button">
                        View Details
                      </Link>
                    </div>
                  </div>
                </Column>
              ))}
            </Row>
          </Section>

          {/* Footer */}
          <Section style={footerStyle} className="footer">
            <Row>
              <Column style={footerColumnStyle} className="footer-column">
                <Heading style={footerHeadingStyle} className="footer-heading">Store Hours</Heading>
                <Text style={footerTextStyle} className="footer-text">Monday - Friday: 9AM - 8PM</Text>
                <Text style={footerTextStyle} className="footer-text">Saturday: 10AM - 6PM</Text>
                <Text style={footerTextStyle} className="footer-text">Sunday: 12PM - 5PM</Text>
              </Column>
              <Column style={footerColumnStyle} className="footer-column">
                <Heading style={footerHeadingStyle} className="footer-heading">Contact Info</Heading>
                <Text style={footerTextStyle} className="footer-text">
                  <Link href={`tel:${phone}`} style={footerLinkStyle}>
                    {phone}
                  </Link>
                </Text>
                <Text style={footerTextStyle} className="footer-text">
                  <Link href={`mailto:${email}`} style={footerLinkStyle}>
                    {email}
                  </Link>
                </Text>
                <Text style={footerTextStyle} className="footer-text">123 Jewelry Lane, NYC 10001</Text>
              </Column>
            </Row>

            <Hr style={footerDividerStyle} />

            <Row>
              <Column style={footerBottomStyle} className="footer-bottom">
                <Text style={copyrightStyle} className="copyright">© 2024 {companyName}. All rights reserved.</Text>
                <Text style={unsubscribeStyle} className="unsubscribe">
                  <Link href="/unsubscribe" style={footerLinkStyle}>
                    Unsubscribe
                  </Link>{" "}
                  |
                  <Link href="/privacy" style={footerLinkStyle}>
                    {" "}
                    Privacy Policy
                  </Link>
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// Refined email-safe styles (unchanged for desktop)
const bodyStyle = {
  backgroundColor: "#f8f9fa",
  fontFamily: "Inter, Arial, sans-serif",
  margin: "0",
  padding: "0",
  lineHeight: "1.6",
}

const containerStyle = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  maxWidth: "600px",
  width: "100%",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
}

const headerStyle = {
  backgroundColor: "#2c3e50",
  padding: "10px 40px",
  textAlign: "center" as const,
}

const logoContainerStyle = {
  textAlign: "center" as const,
}

const logoStyle = {
  height: "40px",
  width: "auto",
  maxWidth: "200px",
}

const navRowStyle = {
  marginTop: "0px",
}

const navItemStyle = {
  textAlign: "center" as const,
  width: "33.33%",
}

const navLinkStyle = {
  color: "#ecf0f1",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "700",
  padding: "8px 16px",
  borderRadius: "4px",
  display: "inline-block",
}

const heroSectionStyle = {
  padding: "50px 40px",
  backgroundColor: "#ffffff",
}

const heroContentStyle = {
  width: "60%",
  verticalAlign: "top",
  paddingRight: "20px",
}

const heroHeadingStyle = {
  fontSize: "28px",
  fontWeight: "700",
  color: "#2c3e50",
  margin: "0 0 20px 0",
  lineHeight: "1.2",
}

const heroTextStyle = {
  fontSize: "13px",
  color: "#5a6c7d",
  margin: "0 0 30px 0",
  lineHeight: "1.6",
}

const heroButtonStyle = {
  backgroundColor: "#e74c3c",
  color: "#ffffff",
  textDecoration: "none",
  padding: "14px 28px",
  borderRadius: "6px",
  fontSize: "14px",
  fontWeight: "600",
  display: "inline-block",
}

const heroImageContainerStyle = {
  width: "40%",
  verticalAlign: "top",
  textAlign: "center" as const,
}

const heroImageStyle = {
  width: "100%",
  maxWidth: "300px",
  height: "auto",
  borderRadius: "8px",
}

const dividerSectionStyle = {
  padding: "40px 40px 20px 40px",
  textAlign: "center" as const,
}

const dividerStyle = {
  border: "none",
  borderTop: "1px solid #e9ecef",
  margin: "0",
  width: "30%",
  display: "inline-block",
}

const categoryTitleStyle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#2c3e50",
  margin: "0 20px",
  display: "inline-block",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
}

const categoriesSectionStyle = {
  padding: "20px 40px 40px 40px",
}

const categoryRowStyle = {
  marginBottom: "0",
}

const categorySpacingStyle = {
  height: "40px",
}

const spacerStyle = {
  fontSize: "1px",
  lineHeight: "1px",
  margin: "0",
  padding: "0",
}

const categoryImageColumnStyle = {
  width: "50%",
  verticalAlign: "top",
  paddingRight: "20px",
}

const categoryContentColumnStyle = {
  width: "50%",
  verticalAlign: "top",
  paddingLeft: "20px",
}

const categoryImageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  maxWidth: "280px",
}

const categoryHeadingStyle = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#2c3e50",
  margin: "0 0 15px 0",
}

const categoryDescriptionStyle = {
  fontSize: "14px",
  color: "#5a6c7d",
  margin: "0 0 20px 0",
  lineHeight: "1.5",
}

const categoryButtonStyle = {
  backgroundColor: "transparent",
  color: "#e74c3c",
  textDecoration: "none",
  padding: "5px 20px",
  border: "2px solid #e74c3c",
  borderRadius: "4px",
  fontSize: "14px",
  fontWeight: "600",
  display: "inline-block",
}

const productsSectionStyle = {
  padding: "40px 40px 50px 40px",
  backgroundColor: "#f8f9fa",
}

const sectionHeadingStyle = {
  fontSize: "25px",
  fontWeight: "700",
  color: "#2c3e50",
  textAlign: "center" as const,
  margin: "0 0 40px 0",
}

const productColumnStyle = {
  width: "33.33%",
  verticalAlign: "top",
  padding: "0 10px",
}

const productCardStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  marginBottom: "20px",
}

const productImageStyle = {
  width: "100%",
  height: "180px",
  objectFit: "cover" as const,
  display: "block",
}

const productInfoStyle = {
  padding: "20px",
  textAlign: "center" as const,
}

const productTitleStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#2c3e50",
  margin: "0 0 8px 0",
}

const productDescriptionStyle = {
  fontSize: "12px",
  color: "#5a6c7d",
  margin: "0 0 10px 0",
  lineHeight: "1.4",
}

const productPriceStyle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#e74c3c",
  margin: "0 0 15px 0",
}

const productButtonStyle = {
  backgroundColor: "#2c3e50",
  color: "#ffffff",
  textDecoration: "none",
  padding: "8px 16px",
  borderRadius: "4px",
  fontSize: "12px",
  fontWeight: "600",
  display: "inline-block",
}

const footerStyle = {
  backgroundColor: "#2c3e50",
  padding: "40px 40px 30px 40px",
  color: "#ecf0f1",
}

const footerColumnStyle = {
  width: "50%",
  verticalAlign: "top",
  paddingRight: "20px",
}

const footerHeadingStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#ecf0f1",
  margin: "0 0 15px 0",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
}

const footerTextStyle = {
  fontSize: "14px",
  color: "#bdc3c7",
  margin: "0 0 8px 0",
}

const footerLinkStyle = {
  color: "#ecf0f1",
  textDecoration: "none",
}

const footerDividerStyle = {
  border: "none",
  borderTop: "1px solid #34495e",
  margin: "30px 0 20px 0",
}

const footerBottomStyle = {
  textAlign: "center" as const,
}

const copyrightStyle = {
  fontSize: "12px",
  color: "#95a5a6",
  margin: "0 0 10px 0",
}

const unsubscribeStyle = {
  fontSize: "12px",
  color: "#95a5a6",
  margin: "0",
}

// Preview props for development
JewelryEcommerceTemplate.PreviewProps = {
  logoUrl: "/placeholder.svg?height=60&width=120",
  heroImageUrl: "/placeholder.svg?height=300&width=400",
  ringsImageUrl: "/placeholder.svg?height=250&width=350",
  necklacesImageUrl: "/placeholder.svg?height=250&width=350",
  companyName: "Luxe Jewelry",
  phone: "+1 (555) 123-4567",
  email: "info@luxejewelry.com",
  websiteUrl: "https://luxejewelry.com",
} satisfies JewelryEcommerceTemplateProps