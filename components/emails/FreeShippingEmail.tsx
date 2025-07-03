import {
  Body,
  Container,
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

interface FreeShippingEmailProps {
  customerName?: string
  orderNumber?: string
  orderDate?: string
  shippingAddress?: string
  billingAddress?: string
  products?: Array<{
    id: string
    name: string
    description: string
    quantity: number
    price: number
    image: string
  }>
  companyEmail?: string
  companyPhone?: string
  facebookUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
  pinterestUrl?: string
  rssUrl?: string
}

export default function FreeShippingEmail({
  customerName = "Valued Customer",
  orderNumber = "1652164",
  orderDate = "5-8-2023",
  shippingAddress = "2261 Market Street #4667, San Francisco, CA 94114",
  billingAddress = "San Francisco, CA 94114",
  products = [
    {
      id: "1",
      name: "Product Name",
      description: "This is a new Text block. Change the text.",
      quantity: 3,
      price: 150.0,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=80&h=80&fit=crop",
    },
    {
      id: "2",
      name: "Product Name",
      description: "This is a new Text block. Change the text.",
      quantity: 2,
      price: 150.0,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=80&h=80&fit=crop",
    },
  ],
  companyEmail = "email@example.com",
  companyPhone = "+12 456 6789",
  facebookUrl = "https://facebook.com",
  linkedinUrl = "https://linkedin.com",
  instagramUrl = "https://instagram.com",
  pinterestUrl = "https://pinterest.com",
  rssUrl = "#",
}: FreeShippingEmailProps) {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap');
          
          /* Reset styles for better email compatibility */
          * {
            box-sizing: border-box;
          }
          
          body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            min-width: 100% !important;
          }
          
          table {
            border-collapse: collapse !important;
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
          }
          
          @media only screen and (max-width: 600px) {
            .email-container {
              width: 100% !important;
              max-width: 100% !important;
              margin: 0 !important;
            }
            
            .mobile-padding { 
              padding: 20px !important; 
            }
            
            .mobile-padding-sm { 
              padding: 15px !important; 
            }
            
            .mobile-text-xs { 
              font-size: 12px !important; 
            }
            
            .mobile-text-sm { 
              font-size: 14px !important; 
            }
            
            .mobile-text-base { 
              font-size: 16px !important; 
            }
            
            .mobile-text-lg { 
              font-size: 18px !important; 
            }
            
            .mobile-text-xl { 
              font-size: 20px !important; 
            }
            
            .mobile-text-2xl { 
              font-size: 24px !important; 
            }
            
            .mobile-hidden { 
              display: none !important; 
            }
            
            .mobile-full-width { 
              width: 100% !important; 
              max-width: 100% !important;
            }
            
            .mobile-center { 
              text-align: center !important; 
            }
            
            .mobile-stack {
              display: block !important;
              width: 100% !important;
            }
            
            .mobile-stack-item {
              display: block !important;
              width: 100% !important;
              padding: 0 !important;
              margin-bottom: 15px !important;
            }
            
            .mobile-table-full {
              width: 100% !important;
            }
            
            .mobile-section-padding {
              padding: 30px 20px !important;
            }
            
            .mobile-hero-illustration {
              width: 250px !important;
              height: 200px !important;
            }
            
            .mobile-product-image {
              width: 60px !important;
              height: 60px !important;
            }
            
            .mobile-feature-icon {
              width: 40px !important;
              height: 40px !important;
            }
          }
          
          @media only screen and (max-width: 480px) {
            .mobile-text-xl {
              font-size: 18px !important;
            }
            
            .mobile-text-2xl {
              font-size: 20px !important;
            }
            
            .mobile-hero-illustration {
              width: 220px !important;
              height: 180px !important;
            }
          }
        `}</style>
      </Head>
      <Preview>Get Free Shipping - Order Confirmation #{orderNumber}</Preview>
      <Tailwind>
        <Body
          className="bg-gray-100 m-0 p-0"
          style={{
            fontFamily: "Inter, sans-serif",
            margin: "0",
            padding: "0",
            width: "100%",
            minWidth: "100%",
            backgroundColor: "#f3f4f6",
          }}
        >
          <Container
            className="mx-auto email-container"
            style={{
              maxWidth: "600px",
              width: "100%",
              margin: "0 auto",
              backgroundColor: "#ffffff",
            }}
          >
            {/* Hero Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      backgroundColor: "#fef3c7",
                      padding: "50px 40px",
                      textAlign: "center",
                    }}
                    className="mobile-section-padding"
                  >
                    {/* Hero Illustration */}
                    <div>
                      <Img
                        src="https://cdn.templates.unlayer.com/assets/1697190932160-ezgif.com-optimize%20(13).gif?w=792px"
                        alt="Person working on laptop with shipping notification"
                        width="300"
                        height="350"
                        className="mobile-hero-illustration object-cover"
                        style={{
                          display: "block",
                          margin: "0 auto",
                          maxWidth: "100%",
                        }}
                      />
                    </div>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Main Content Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      backgroundColor: "#ffffff",
                      padding: "40px",
                    }}
                    className="mobile-section-padding"
                  >
                    <Heading
                      className="m-0 mb-6 mobile-text-2xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "28px",
                        lineHeight: "1.2",
                        margin: "0 0 24px 0",
                        color: "#ef4444",
                        fontWeight: "700",
                        textAlign: "center",
                      }}
                    >
                      Get Free Shipping
                    </Heading>

                    <Text
                      className="m-0 mb-8 text-gray-700 mobile-text-base"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.6",
                        margin: "0 0 32px 0",
                        color: "#374151",
                        textAlign: "center",
                        maxWidth: "500px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      We wanted to take a moment to express our heartfelt gratitude for choosing [Your Company Name] for
                      your recent purchase. Your trust in us means the world, and we're thrilled to have you as our
                      valued customer.
                    </Text>

                    {/* Order Details Table */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", marginBottom: "30px" }}
                    >
                      <tr>
                        <td
                          style={{
                            width: "50%",
                            padding: "8px 0",
                            borderBottom: "1px solid #e5e7eb",
                            verticalAlign: "top",
                          }}
                        >
                          <Text
                            className="m-0 text-gray-900 mobile-text-base"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              margin: "0",
                              color: "#111827",
                              fontWeight: "600",
                            }}
                          >
                            Order Number:
                          </Text>
                        </td>
                        <td
                          style={{
                            width: "50%",
                            padding: "8px 0",
                            borderBottom: "1px solid #e5e7eb",
                            textAlign: "right",
                            verticalAlign: "top",
                          }}
                        >
                          <Text
                            className="m-0 text-gray-700 mobile-text-base"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              margin: "0",
                              color: "#374151",
                            }}
                          >
                            {orderNumber}
                          </Text>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            width: "50%",
                            padding: "8px 0",
                            borderBottom: "1px solid #e5e7eb",
                            verticalAlign: "top",
                          }}
                        >
                          <Text
                            className="m-0 text-gray-900 mobile-text-base"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              margin: "0",
                              color: "#111827",
                              fontWeight: "600",
                            }}
                          >
                            Order Date:
                          </Text>
                        </td>
                        <td
                          style={{
                            width: "50%",
                            padding: "8px 0",
                            borderBottom: "1px solid #e5e7eb",
                            textAlign: "right",
                            verticalAlign: "top",
                          }}
                        >
                          <Text
                            className="m-0 text-gray-700 mobile-text-base"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              margin: "0",
                              color: "#374151",
                            }}
                          >
                            {orderDate}
                          </Text>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            width: "50%",
                            padding: "8px 0",
                            borderBottom: "1px solid #e5e7eb",
                            verticalAlign: "top",
                          }}
                        >
                          <Text
                            className="m-0 text-gray-900 mobile-text-base"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              margin: "0",
                              color: "#111827",
                              fontWeight: "600",
                            }}
                          >
                            Shipping Address:
                          </Text>
                        </td>
                        <td
                          style={{
                            width: "50%",
                            padding: "8px 0",
                            borderBottom: "1px solid #e5e7eb",
                            textAlign: "right",
                            verticalAlign: "top",
                          }}
                        >
                          <Text
                            className="m-0 text-gray-700 mobile-text-base"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              margin: "0",
                              color: "#374151",
                            }}
                          >
                            {shippingAddress}
                          </Text>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            width: "50%",
                            padding: "8px 0",
                            verticalAlign: "top",
                          }}
                        >
                          <Text
                            className="m-0 text-gray-900 mobile-text-base"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              margin: "0",
                              color: "#111827",
                              fontWeight: "600",
                            }}
                          >
                            Billing Address:
                          </Text>
                        </td>
                        <td
                          style={{
                            width: "50%",
                            padding: "8px 0",
                            textAlign: "right",
                            verticalAlign: "top",
                          }}
                        >
                          <Text
                            className="m-0 text-gray-700 mobile-text-base"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              margin: "0",
                              color: "#374151",
                            }}
                          >
                            {billingAddress}
                          </Text>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Products Table Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%" }}
                className="mobile-table-full"
              >
                <tr>
                  <td style={{ padding: "0" }}>
                    {/* Table Header */}
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                      <tr style={{ backgroundColor: "#ef4444" }}>
                        <td
                          style={{
                            padding: "15px 20px",
                            width: "15%",
                          }}
                        >
                          <Text
                            className="m-0 text-white mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              margin: "0",
                              color: "#ffffff",
                              fontWeight: "600",
                            }}
                          >
                            Product
                          </Text>
                        </td>
                        <td
                          style={{
                            padding: "15px 20px",
                            width: "45%",
                          }}
                        >
                          <Text
                            className="m-0 text-white mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              margin: "0",
                              color: "#ffffff",
                              fontWeight: "600",
                            }}
                          >
                            Details
                          </Text>
                        </td>
                        <td
                          style={{
                            padding: "15px 20px",
                            width: "15%",
                            textAlign: "center",
                          }}
                        >
                          <Text
                            className="m-0 text-white mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              margin: "0",
                              color: "#ffffff",
                              fontWeight: "600",
                            }}
                          >
                            QTY
                          </Text>
                        </td>
                        <td
                          style={{
                            padding: "15px 20px",
                            width: "25%",
                            textAlign: "right",
                          }}
                        >
                          <Text
                            className="m-0 text-white mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              margin: "0",
                              color: "#ffffff",
                              fontWeight: "600",
                            }}
                          >
                            Price
                          </Text>
                        </td>
                      </tr>

                      {/* Product Rows */}
                      {products.map((product, index) => (
                        <tr key={product.id} style={{ backgroundColor: index % 2 === 0 ? "#ef4444" : "#dc2626" }}>
                          <td style={{ padding: "20px", textAlign: "center" }}>
                            <Img
                              src={product.image}
                              alt={product.name}
                              width="80"
                              height="80"
                              className="mobile-product-image"
                              style={{
                                display: "block",
                                margin: "0 auto",
                                borderRadius: "8px",
                                objectFit: "cover",
                              }}
                            />
                          </td>
                          <td style={{ padding: "20px", verticalAlign: "top" }}>
                            <Text
                              className="m-0 mb-2 text-white mobile-text-base"
                              style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "16px",
                                margin: "0 0 8px 0",
                                color: "#ffffff",
                                fontWeight: "600",
                              }}
                            >
                              {product.name}
                            </Text>
                            <Text
                              className="m-0 text-white mobile-text-sm"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "14px",
                                margin: "0",
                                color: "#ffffff",
                                opacity: "0.9",
                              }}
                            >
                              {product.description}
                            </Text>
                          </td>
                          <td style={{ padding: "20px", textAlign: "center", verticalAlign: "top" }}>
                            <Text
                              className="m-0 text-white mobile-text-lg"
                              style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "18px",
                                margin: "0",
                                color: "#ffffff",
                                fontWeight: "700",
                              }}
                            >
                              {product.quantity}
                            </Text>
                          </td>
                          <td style={{ padding: "20px", textAlign: "right", verticalAlign: "top" }}>
                            <Text
                              className="m-0 text-white mobile-text-lg"
                              style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "18px",
                                margin: "0",
                                color: "#ffffff",
                                fontWeight: "700",
                              }}
                            >
                              ${product.price.toFixed(2)}
                            </Text>
                          </td>
                        </tr>
                      ))}
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Features Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    style={{
                      backgroundColor: "#2a2a2a",
                      padding: "40px",
                    }}
                    className="mobile-section-padding"
                  >
                    {/* Features Container */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse" }}
                      className="mobile-stack"
                    >
                      <tr className="mobile-stack">
                        {/* Free Shipping */}
                        <td
                          style={{
                            width: "33.33%",
                            verticalAlign: "top",
                            textAlign: "center",
                            paddingRight: "15px",
                          }}
                          className="mobile-stack-item"
                        >
                          <div style={{ marginBottom: "15px" }}>
                            <div
                              style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "transparent",
                                border: "2px solid #ffffff",
                                borderRadius: "50%",
                                margin: "0 auto",
                                display: "inline-block",
                              }}
                              className="mobile-feature-icon"
                            >
                              <table
                                width="100%"
                                cellPadding="0"
                                cellSpacing="0"
                                style={{ borderCollapse: "collapse" }}
                              >
                                <tr>
                                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                    <Text
                                      style={{
                                        fontSize: "20px",
                                        color: "#ffffff",
                                        margin: "0",
                                        fontFamily: "Inter, sans-serif",
                                      }}
                                    >
                                      🚚
                                    </Text>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </div>
                          <Heading
                            className="m-0 mb-2 text-white mobile-text-base"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "16px",
                              margin: "0 0 8px 0",
                              color: "#ffffff",
                              fontWeight: "600",
                            }}
                          >
                            Free Shipping
                          </Heading>
                          <Text
                            className="m-0 text-gray-300 mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              margin: "0",
                              color: "#d1d5db",
                            }}
                          >
                            This is a new Text block. Change the text.
                          </Text>
                        </td>

                        {/* Online Support */}
                        <td
                          style={{
                            width: "33.33%",
                            verticalAlign: "top",
                            textAlign: "center",
                            paddingLeft: "7.5px",
                            paddingRight: "7.5px",
                          }}
                          className="mobile-stack-item"
                        >
                          <div style={{ marginBottom: "15px" }}>
                            <div
                              style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "transparent",
                                border: "2px solid #ffffff",
                                borderRadius: "50%",
                                margin: "0 auto",
                                display: "inline-block",
                              }}
                              className="mobile-feature-icon"
                            >
                              <table
                                width="100%"
                                cellPadding="0"
                                cellSpacing="0"
                                style={{ borderCollapse: "collapse" }}
                              >
                                <tr>
                                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                    <Text
                                      style={{
                                        fontSize: "20px",
                                        color: "#ffffff",
                                        margin: "0",
                                        fontFamily: "Inter, sans-serif",
                                      }}
                                    >
                                      💬
                                    </Text>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </div>
                          <Heading
                            className="m-0 mb-2 text-white mobile-text-base"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "16px",
                              margin: "0 0 8px 0",
                              color: "#ffffff",
                              fontWeight: "600",
                            }}
                          >
                            Online Support
                          </Heading>
                          <Text
                            className="m-0 text-gray-300 mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              margin: "0",
                              color: "#d1d5db",
                            }}
                          >
                            This is a new Text block. Change the text.
                          </Text>
                        </td>

                        {/* Money Back Guarantee */}
                        <td
                          style={{
                            width: "33.33%",
                            verticalAlign: "top",
                            textAlign: "center",
                            paddingLeft: "15px",
                          }}
                          className="mobile-stack-item"
                        >
                          <div style={{ marginBottom: "15px" }}>
                            <div
                              style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "transparent",
                                border: "2px solid #ffffff",
                                borderRadius: "50%",
                                margin: "0 auto",
                                display: "inline-block",
                              }}
                              className="mobile-feature-icon"
                            >
                              <table
                                width="100%"
                                cellPadding="0"
                                cellSpacing="0"
                                style={{ borderCollapse: "collapse" }}
                              >
                                <tr>
                                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                    <Text
                                      style={{
                                        fontSize: "20px",
                                        color: "#ffffff",
                                        margin: "0",
                                        fontFamily: "Inter, sans-serif",
                                      }}
                                    >
                                      💰
                                    </Text>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </div>
                          <Heading
                            className="m-0 mb-2 text-white mobile-text-base"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "16px",
                              margin: "0 0 8px 0",
                              color: "#ffffff",
                              fontWeight: "600",
                            }}
                          >
                            Money back guarantee
                          </Heading>
                          <Text
                            className="m-0 text-gray-300 mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              margin: "0",
                              color: "#d1d5db",
                            }}
                          >
                            This is a new Text block. Change the text.
                          </Text>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Footer Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    className="mobile-section-padding"
                    style={{
                      padding: "30px 40px",
                      textAlign: "center",
                      width: "100%",
                      backgroundColor: "#ef4444",
                    }}
                  >
                    {/* Social Media Icons */}
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", margin: "0 auto 20px auto" }}
                    >
                      <tr>
                        <td style={{ padding: "0 8px" }}>
                          <Link href={facebookUrl}>
                            <Img
                              src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                              alt="Facebook"
                              width="32"
                              height="32"
                              style={{ display: "block" }}
                            />
                          </Link>
                        </td>
                        <td style={{ padding: "0 8px" }}>
                          <Link href={linkedinUrl}>
                            <Img
                              src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                              alt="LinkedIn"
                              width="32"
                              height="32"
                              style={{ display: "block" }}
                            />
                          </Link>
                        </td>
                        <td style={{ padding: "0 8px" }}>
                          <Link href={instagramUrl}>
                            <Img
                              src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                              alt="Instagram"
                              width="32"
                              height="32"
                              style={{ display: "block" }}
                            />
                          </Link>
                        </td>
                        <td style={{ padding: "0 8px" }}>
                          <Link href={pinterestUrl}>
                            <Img
                              src="https://cdn.tools.unlayer.com/social/icons/rounded/pinterest.png"
                              alt="Pinterest"
                              width="32"
                              height="32"
                              style={{ display: "block" }}
                            />
                          </Link>
                        </td>
                        <td style={{ padding: "0 8px" }}>
                          <Link href={rssUrl}>
                            <Img
                              src="https://cdn.tools.unlayer.com/social/icons/rounded/rss.png"
                              alt="RSS"
                              width="32"
                              height="32"
                              style={{ display: "block" }}
                            />
                          </Link>
                        </td>
                      </tr>
                    </table>

                    <Text
                      className="m-0 mb-2 text-white mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        margin: "0 0 8px 0",
                        color: "#ffffff",
                      }}
                    >
                      {companyEmail}
                    </Text>

                    <Text
                      className="m-0 text-white mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        margin: "0",
                        color: "#ffffff",
                      }}
                    >
                      {companyPhone}
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

FreeShippingEmail.PreviewProps = {
  customerName: "John Doe",
  orderNumber: "1652164",
  orderDate: "5-8-2023",
  shippingAddress: "2261 Market Street #4667, San Francisco, CA 94114",
  billingAddress: "San Francisco, CA 94114",
  products: [
    {
      id: "1",
      name: "Product Name",
      description: "This is a new Text block. Change the text.",
      quantity: 3,
      price: 150.0,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=80&h=80&fit=crop",
    },
    {
      id: "2",
      name: "Product Name",
      description: "This is a new Text block. Change the text.",
      quantity: 2,
      price: 150.0,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=80&h=80&fit=crop",
    },
  ],
  companyEmail: "email@example.com",
  companyPhone: "+12 456 6789",
  facebookUrl: "https://facebook.com/example",
  linkedinUrl: "https://linkedin.com/company/example",
  instagramUrl: "https://instagram.com/example",
  pinterestUrl: "https://pinterest.com/example",
  rssUrl: "https://example.com/rss",
} satisfies FreeShippingEmailProps
