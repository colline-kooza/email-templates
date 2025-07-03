import {
  Body,
  Button,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"

interface PromotionalEmailProps {
  customerName?: string
  discountPercentage?: string
  promoCode?: string
  saleEndDate?: string
  featuredProducts?: Array<{
    name: string
    originalPrice: string
    salePrice: string
    image: string
    discount: string
  }>
  categories?: Array<{
    name: string
    image: string
    discount: string
  }>
}

export default function EnhancedPromotionalTemplate({
  customerName = "Valued Customer",
  discountPercentage = "30%",
  promoCode = "SAVE30",
  saleEndDate = "December 31st",
  featuredProducts = [
    {
      name: "Premium Headphones",
      originalPrice: "$199.99",
      salePrice: "$139.99",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      discount: "30%",
    },
    {
      name: "Smart Watch",
      originalPrice: "$299.99",
      salePrice: "$209.99",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      discount: "30%",
    },
    {
      name: "Wireless Speaker",
      originalPrice: "$149.99",
      salePrice: "$104.99",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
      discount: "30%",
    },
  ],
  categories = [
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=200&h=150&fit=crop",
      discount: "Up to 40%",
    },
    {
      name: "Fashion",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=150&fit=crop",
      discount: "Up to 35%",
    },
    {
      name: "Home & Garden",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=150&fit=crop",
      discount: "Up to 25%",
    },
  ],
}: PromotionalEmailProps) {
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
          fontStyle="normal"
        />
      </Head>
      <Preview>🎉 Exciting Day - Discount Up to {discountPercentage} Off - Limited Time!</Preview>
      <Body
        style={{
          backgroundColor: "#ececec",
          fontFamily: "Roboto",
          margin: 0,
          padding: 0,
        }}
      >
        <Tailwind>
          <Container style={containerStyle}>
            {/* Hero Section with Gift Images */}
            <Section style={{ backgroundColor: "#3f0287", textAlign: "center", padding: "0" }}>
              <Img
                src="https://cdn.templates.unlayer.com/assets/1670245069062-Layer%2034.png"
                alt="Special Sale Gifts"
                width="600"
                style={{ width: "100%", maxWidth: "100%", display: "block" }}
              />
            </Section>

            {/* Main Promotion Section */}
            <Section style={{ backgroundColor: "#3f0287", padding: "30px 20px", textAlign: "center" }}>
              <Text style={greetingText}>Hi {customerName}!</Text>
              <Heading style={mainHeading}>Great Day</Heading>
              <Heading style={extendedHeading}>EXTENDED</Heading>
              <Text style={discountText}>DISCOUNT UP TO {discountPercentage} OFF</Text>
              <Text style={descriptionText}>
                Don't miss out on our biggest sale of the year! Get incredible discounts on thousands of products across
                all categories. Limited time offer - shop now before it's too late!
              </Text>

              <div style={{ margin: "30px 0" }}>
                <Button href="#" style={visitButton}>
                  SHOP NOW - SAVE {discountPercentage}
                </Button>
              </div>

              {/* Promo Code Section */}
              <div style={promoCodeContainer}>
                <Text style={promoCodeLabel}>Use Code:</Text>
                <Text style={promoCodeText}>{promoCode}</Text>
              </div>
            </Section>

            {/* Countdown Timer Section */}
            <Section style={countdownSection}>
              <Heading style={countdownHeading}>⏰ Sale Ends Soon!</Heading>
              <Text style={countdownText}>Hurry! This amazing offer expires on {saleEndDate}</Text>
              <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginTop: "20px" }}>
                <tr>
                  <td width="25%" style={{ textAlign: "center" }}>
                    <div style={timeBox}>
                      <Text style={timeNumber}>05</Text>
                      <Text style={timeLabel}>DAYS</Text>
                    </div>
                  </td>
                  <td width="25%" style={{ textAlign: "center" }}>
                    <div style={timeBox}>
                      <Text style={timeNumber}>14</Text>
                      <Text style={timeLabel}>HOURS</Text>
                    </div>
                  </td>
                  <td width="25%" style={{ textAlign: "center" }}>
                    <div style={timeBox}>
                      <Text style={timeNumber}>32</Text>
                      <Text style={timeLabel}>MINUTES</Text>
                    </div>
                  </td>
                  <td width="25%" style={{ textAlign: "center" }}>
                    <div style={timeBox}>
                      <Text style={timeNumber}>18</Text>
                      <Text style={timeLabel}>SECONDS</Text>
                    </div>
                  </td>
                </tr>
              </table>
            </Section>

         
            {/* Categories Section */}
            <Section style={categoriesSection}>
              <Heading style={sectionHeading}>🛍️ Shop by Category</Heading>
              <Text style={sectionSubtext}>Explore amazing deals across all departments</Text>

              <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginTop: "20px" }}>
                <tr>
                  {categories.map((category, index) => (
                    <td key={index} width="33.33%" style={{ padding: "0 8px", verticalAlign: "top" }}>
                      <div style={categoryCard}>
                        <Img
                          src={category.image}
                          width="180"
                          height="120"
                          alt={category.name}
                          style={{ borderRadius: "8px 8px 0 0", objectFit: "cover" }}
                        />
                        <div style={{ padding: "16px", textAlign: "center" }}>
                          <Text style={categoryName}>{category.name}</Text>
                          <Text style={categoryDiscount}>{category.discount} OFF</Text>
                          <Link href="#" style={categoryLink}>
                            Shop Now →
                          </Link>
                        </div>
                      </div>
                    </td>
                  ))}
                </tr>
              </table>
            </Section>

            {/* Why Shop With Us Section */}
            <Section style={benefitsSection}>
              <Heading style={benefitsHeading}>✨ Why Shop With Us?</Heading>
              <table width="100%" cellPadding="0" cellSpacing="0">
                <tr>
                  <td width="25%" style={{ textAlign: "center", padding: "0 8px" }}>
                    <div style={{ fontSize: "32px", marginBottom: "8px" }}>🚚</div>
                    <Text style={benefitTitle}>Free Shipping</Text>
                    <Text style={benefitText}>On orders over $50</Text>
                  </td>
                  <td width="25%" style={{ textAlign: "center", padding: "0 8px" }}>
                    <div style={{ fontSize: "32px", marginBottom: "8px" }}>↩️</div>
                    <Text style={benefitTitle}>Easy Returns</Text>
                    <Text style={benefitText}>30-day return policy</Text>
                  </td>
                  <td width="25%" style={{ textAlign: "center", padding: "0 8px" }}>
                    <div style={{ fontSize: "32px", marginBottom: "8px" }}>🔒</div>
                    <Text style={benefitTitle}>Secure Payment</Text>
                    <Text style={benefitText}>100% secure checkout</Text>
                  </td>
                  <td width="25%" style={{ textAlign: "center", padding: "0 8px" }}>
                    <div style={{ fontSize: "32px", marginBottom: "8px" }}>⭐</div>
                    <Text style={benefitTitle}>Top Rated</Text>
                    <Text style={benefitText}>4.8/5 customer rating</Text>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Decorative Image */}
            <Section style={{ textAlign: "center", backgroundColor: "#3f0287" }}>
              <Img
                src="https://cdn.templates.unlayer.com/assets/1670245361871-Layer%2035.png"
                alt="Sale Decoration"
                width="600"
                style={{ width: "100%", objectFit: "contain" }}
              />
            </Section>

            {/* Final CTA Section */}
            <Section style={finalCtaSection}>
              <Heading style={finalCtaHeading}>Don't Wait - Shop Now!</Heading>
              <Text style={finalCtaText}>
                This exclusive {discountPercentage} discount won't last long. Join thousands of happy customers who have
                already saved big!
              </Text>
              <div style={{ textAlign: "center", margin: "20px 0" }}>
                <Button href="#" style={finalCtaButton}>
                  CLAIM YOUR {discountPercentage} DISCOUNT
                </Button>
              </div>
            </Section>

            {/* Footer Section */}
            <Section style={footerSection}>
                 <Section className="mx-auto text-center" style={topBar}>
                            <div className="mx-auto">
                              <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-white/facebook.png" alt="LinkedIn" className="w-8 h-8" /></a>
                              <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-white/twitter.png" alt="Twitter" className="w-8 h-8 ml-2" /></a>
                              <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-white/linkedin.png" alt="Skype" className="w-8 h-8 ml-2" /></a>
                              <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-white/pinterest.png" alt="Instagram" className="w-8 h-8 ml-2" /></a>
                              <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-white/youtube.png" alt="Instagram" className="w-8 h-8 ml-2" /></a>
                            </div>
                          </Section>

              <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: "20px" }}>
                <tr>
                  <td width="33.33%" style={{ textAlign: "center" }}>
                    <Link href="#" style={footerLink}>
                      UNSUBSCRIBE
                    </Link>
                  </td>
                  <td width="33.33%" style={{ textAlign: "center" }}>
                    <Link href="#" style={footerLink}>
                      PRIVACY POLICY
                    </Link>
                  </td>
                  <td width="33.33%" style={{ textAlign: "center" }}>
                    <Link href="#" style={footerLink}>
                      CONTACT US
                    </Link>
                  </td>
                </tr>
              </table>

              <Text style={footerDescription}>
                You're receiving this email because you subscribed to our newsletter. We respect your privacy and will
                never share your information with third parties.
              </Text>

              <Text style={copyrightText}>© 2024 Your Store. All rights reserved.</Text>
            </Section>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  )
}

// Preview props for development
EnhancedPromotionalTemplate.PreviewProps = {
  customerName: "Sarah",
  discountPercentage: "40%",
  promoCode: "MEGA40",
  saleEndDate: "January 15th",
} satisfies PromotionalEmailProps

// Styles
const containerStyle = {
  backgroundColor: "#ffffff",
  margin: "0px auto",
  padding: "0px",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  maxWidth: "600px",
}
 const topBar = {
    // backgroundColor: "#f1404b",
    padding: "10px 0",
  };
  
const greetingText = {
  color: "#ffd850",
  fontSize: "16px",
  fontWeight: "500",
  margin: "0 0 10px 0",
}

const mainHeading = {
  color: "#ffd850",
  textAlign: "center" as const,
  fontSize: "28px",
  fontWeight: "bold",
  margin: "0",
}

const extendedHeading = {
  color: "#ffffff",
  textAlign: "center" as const,
  fontSize: "48px",
  fontWeight: "bold",
  margin: "0 0 10px 0",
  letterSpacing: "2px",
}

const discountText = {
  color: "#ffffff",
  textAlign: "center" as const,
  fontSize: "18px",
  fontWeight: "600",
  margin: "0 0 20px 0",
  letterSpacing: "1px",
}

const descriptionText = {
  color: "#ffffff",
  textAlign: "center" as const,
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0 20px 20px 20px",
}

const visitButton = {
  backgroundColor: "#3aaee0",
  color: "#ffffff",
  padding: "14px 32px",
  borderRadius: "6px",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  fontWeight: "bold",
  textTransform: "uppercase" as const,
}

const promoCodeContainer = {
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  border: "2px dashed #ffd850",
  borderRadius: "8px",
  padding: "16px",
  margin: "20px",
  textAlign: "center" as const,
}

const promoCodeLabel = {
  color: "#ffffff",
  fontSize: "14px",
  margin: "0 0 8px 0",
}

const promoCodeText = {
  color: "#ffd850",
  fontSize: "24px",
  fontWeight: "bold",
  letterSpacing: "3px",
  margin: "0",
}

const countdownSection = {
  backgroundColor: "#ff6b6b",
  padding: "30px 20px",
  textAlign: "center" as const,
}

const countdownHeading = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 10px 0",
}

const countdownText = {
  color: "#ffffff",
  fontSize: "16px",
  margin: "0 0 20px 0",
}

const timeBox = {
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  borderRadius: "8px",
  padding: "12px 8px",
  margin: "0 4px",
}

const timeNumber = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0",
}

const timeLabel = {
  color: "#ffffff",
  fontSize: "10px",
  fontWeight: "600",
  margin: "0",
  letterSpacing: "1px",
}

const productsSection = {
  backgroundColor: "#f8fafc",
  padding: "40px 20px",
}

const sectionHeading = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#1a202c",
  textAlign: "center" as const,
  margin: "0 0 8px 0",
}

const sectionSubtext = {
  fontSize: "14px",
  color: "#666",
  textAlign: "center" as const,
  margin: "0 0 20px 0",
}

const productCard = {
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "12px",
  overflow: "hidden",
  position: "relative" as const,
  marginBottom: "16px",
}

const discountBadge = {
  position: "absolute" as const,
  top: "8px",
  right: "8px",
  backgroundColor: "#ff6b6b",
  color: "#ffffff",
  fontSize: "10px",
  fontWeight: "bold",
  padding: "4px 8px",
  borderRadius: "12px",
  zIndex: 1,
}

const productName = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#1a202c",
  margin: "0 0 8px 0",
  textAlign: "center" as const,
}

const originalPrice = {
  fontSize: "12px",
  color: "#999",
  textDecoration: "line-through",
  marginRight: "8px",
}

const salePrice = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#16a34a",
}

const productButton = {
  backgroundColor: "#3f0287",
  color: "#ffffff",
  padding: "8px 16px",
  borderRadius: "6px",
  textDecoration: "none",
  fontSize: "12px",
  fontWeight: "600",
  width: "100%",
  textAlign: "center" as const,
  display: "block",
}

const categoriesSection = {
  backgroundColor: "#ffffff",
  padding: "40px 20px",
}

const categoryCard = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "12px",
  overflow: "hidden",
  marginBottom: "16px",
}

const categoryName = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#1a202c",
  margin: "0 0 4px 0",
}

const categoryDiscount = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "#16a34a",
  margin: "0 0 8px 0",
}

const categoryLink = {
  color: "#3f0287",
  fontSize: "12px",
  textDecoration: "none",
  fontWeight: "600",
}

const benefitsSection = {
  backgroundColor: "#f0f9ff",
  padding: "40px 20px",
}

const benefitsHeading = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#1a202c",
  textAlign: "center" as const,
  margin: "0 0 30px 0",
}

const benefitTitle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#1a202c",
  margin: "0 0 4px 0",
}

const benefitText = {
  fontSize: "12px",
  color: "#666",
  margin: "0",
}

const finalCtaSection = {
  backgroundColor: "#1a202c",
  padding: "40px 20px",
  textAlign: "center" as const,
}

const finalCtaHeading = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "bold",
  margin: "0 0 16px 0",
}

const finalCtaText = {
  color: "#ffffff",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "0 0 24px 0",
}

const finalCtaButton = {
  backgroundColor: "#ff6b6b",
  color: "#ffffff",
  padding: "16px 32px",
  borderRadius: "8px",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "bold",
  textTransform: "uppercase" as const,
}

const footerSection = {
  backgroundColor: "#621ad1",
  padding: "30px 20px",
  textAlign: "center" as const,
}

const iconStyle = {
  borderRadius: "50%",
}

const footerLink = {
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "bold",
  textDecoration: "none",
}

const footerDescription = {
  color: "#ffffff",
  fontSize: "12px",
  lineHeight: "1.4",
  margin: "0 20px 16px 20px",
}

const copyrightText = {
  color: "#ffffff",
  fontSize: "11px",
  margin: "0",
}
