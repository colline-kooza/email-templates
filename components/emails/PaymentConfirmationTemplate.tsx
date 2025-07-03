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

interface PaymentConfirmationTemplateProps {
  companyName?: string
  companyLogo?: string
  orderNumber?: string
  orderItems?: Array<{
    name: string
    price: string
    quantity?: string
  }>
  total?: string
  deliveryAddress?: string
  shippingAddress?: string
  promoCode?: string
  promoDiscount?: string
}

const Header = ({ companyLogo, companyName }: { companyLogo?: string; companyName?: string }) => {
  return (
    <Section
      style={{
        background: "#3598db",
        borderBottom: "1px solid #ccc",
        marginBottom: "30px",
        padding: "14px 12px",
      }}
    >
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
        <tr>
          <td style={{ verticalAlign: "middle" }}>
            <Img
              src={
                companyLogo ||
                "https://framerusercontent.com/images/NtlHUs933g5sjkh3OEzw1t3mf4o.svg"
              }
              width="35"
              height="35"
              alt={`${companyName || "Company"} logo`}
              style={{ maxHeight: "35px", maxWidth: "100%" }}
            />
          </td>
          <td style={{ textAlign: "right", verticalAlign: "middle" }}>
            <Link
              href="#"
              style={{
                color: "#fff",
                textDecoration: "none",
                marginLeft: "20px",
                fontSize: "14px",
              }}
            >
              About
            </Link>
            <Link
              href="#"
              style={{
                color: "#fff",
                textDecoration: "none",
                marginLeft: "20px",
                fontSize: "14px",
              }}
            >
              Company
            </Link>
            <Link
              href="#"
              style={{
                color: "#fff",
                textDecoration: "none",
                marginLeft: "20px",
                fontSize: "14px",
              }}
            >
              Blog
            </Link>
          </td>
        </tr>
      </table>
    </Section>
  )
}

export default function PaymentConfirmationTemplate({
  companyName = "The Shop",
  companyLogo,
  orderNumber = "#12345",
  orderItems = [
    { name: "Item One", price: "$200" },
    { name: "Item Two", price: "$300" },
    { name: "Item Three", price: "$100" },
    { name: "Item Four", price: "$400" },
  ],
  total = "$1000",
  deliveryAddress = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh",
  shippingAddress = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh",
  promoCode = "20SPECIAL",
  promoDiscount = "20%",
}: PaymentConfirmationTemplateProps) {
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
      <Preview>Payment Confirmation - Thank you for your order!</Preview>
      <Body
        style={{
          backgroundColor: "#eeeeee",
          fontFamily: '"DM Sans", Verdana',
          margin: 0,
          padding: 0,
        }}
      >
        <Tailwind>
          <Container
            style={{
              margin: "0 auto",
              backgroundColor: "#fff",
              maxWidth: "600px",
            }}
          >
            <Header companyLogo={companyLogo} companyName={companyName} />
             <div className="w-full h-[70px] mb-5">
             <Img src="https://cdn.templates.unlayer.com/assets/1594973454042-618167-200.png" alt="Gift Card" className="w-full h-full mx-auto object-contain mt-4" />
             </div>
            {/* Main Heading */}
            <Section className="px-5 text-center">
              <Heading
                style={{
                  fontSize: "24px",
                  marginTop: "10px",
                  fontWeight: "700",
                  color: "#000",
                  margin: "10px 0 20px 0",
                }}
              >
                Thanks for your payment!
              </Heading>
              <Text
                style={{
                  color: "#6B7280",
                  fontSize: "14px",
                  lineHeight: "1.5",
                  margin: "0 0 30px 0",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna.
              </Text>
            </Section>

            {/* Order Summary Table */}
            <Section className="px-5 mb-6">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{
                  borderCollapse: "collapse",
                  marginBottom: "20px",
                  border: "1px solid #eee",
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "12px",
                        borderBottom: "2px solid #eee",
                        fontSize: "13px",
                        fontWeight: "700",
                        backgroundColor: "#f8f9fa",
                      }}
                    >
                      ORDER ITEM
                    </th>
                    <th
                      style={{
                        textAlign: "center",
                        padding: "12px",
                        borderBottom: "2px solid #eee",
                        fontSize: "13px",
                        fontWeight: "700",
                        backgroundColor: "#f8f9fa",
                      }}
                    >
                      QUANTITY
                    </th>
                    <th
                      style={{
                        textAlign: "right",
                        padding: "12px",
                        borderBottom: "2px solid #eee",
                        fontSize: "13px",
                        fontWeight: "700",
                        backgroundColor: "#f8f9fa",
                      }}
                    >
                      PRICE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orderItems.map((item, index) => (
                    <tr key={index}>
                      <td
                        style={{
                          textAlign: "left",
                          padding: "12px",
                          borderBottom: "1px solid #eee",
                          fontSize: "13px",
                        }}
                      >
                        {item.name}
                      </td>
                      <td
                        style={{
                          textAlign: "center",
                          padding: "12px",
                          borderBottom: "1px solid #eee",
                          fontSize: "13px",
                        }}
                      >
                        {item.quantity || "1"}
                      </td>
                      <td
                        style={{
                          textAlign: "right",
                          padding: "12px",
                          borderBottom: "1px solid #eee",
                          fontSize: "13px",
                        }}
                      >
                        {item.price}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td
                      style={{
                        textAlign: "left",
                        padding: "12px",
                        borderBottom: "2px solid #333",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      Total
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        padding: "12px",
                        borderBottom: "2px solid #333",
                        fontSize: "14px",
                      }}
                    >
                      -
                    </td>
                    <td
                      style={{
                        textAlign: "right",
                        padding: "12px",
                        borderBottom: "2px solid #333",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      {total}
                    </td>
                  </tr>
                </tbody>
              </table>
            </Section>

            {/* Delivery and Shipping Addresses */}
            <Section className="px-5 mb-6">
              <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                <tr>
                  <td width="50%" style={{ padding: "0 10px 0 0", verticalAlign: "top" }}>
                    <Text
                      style={{
                        fontSize: "14px",
                        fontWeight: "700",
                        marginBottom: "8px",
                        color: "#000",
                      }}
                    >
                      Delivery Address:
                    </Text>
                    <Text
                      style={{
                        fontSize: "12px",
                        color: "#6B7280",
                        marginBottom: "0",
                        lineHeight: "1.4",
                      }}
                    >
                      {deliveryAddress}
                    </Text>
                  </td>
                  <td width="50%" style={{ padding: "0 0 0 10px", verticalAlign: "top" }}>
                    <Text
                      style={{
                        fontSize: "14px",
                        fontWeight: "700",
                        marginBottom: "8px",
                        color: "#000",
                      }}
                    >
                      Shipping Address:
                    </Text>
                    <Text
                      style={{
                        fontSize: "12px",
                        color: "#6B7280",
                        marginBottom: "0",
                        lineHeight: "1.4",
                      }}
                    >
                      {shippingAddress}
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Promotional Offer */}
            <Section
              style={{
                textAlign: "center",
                background: "#3598db",
                padding: "30px 20px",
                margin: "20px 0",
              }}
            >
              <Text
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#fff",
                  marginBottom: "15px",
                  margin: "0 0 15px 0",
                }}
              >
                Get <strong>{promoDiscount}</strong> OFF on your next order
              </Text>
              <Button
                href="#"
                style={{
                  backgroundColor: "#fff",
                  color: "#3598db",
                  borderRadius: "35px",
                  padding: "12px 24px",
                  margin: "8px 0",
                  textDecoration: "none",
                  fontSize: "12px",
                  fontWeight: "600",
                  display: "inline-block",
                }}
              >
                {promoCode}
              </Button>
            </Section>

            {/* Company Information */}
            <Section className="px-5 text-center" style={{ marginTop: "30px" }}>
              <Heading
                style={{
                  margin: "24px 0 12px",
                  color: "#236faa",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                {companyName}
              </Heading>
              <Text
                style={{
                  marginBottom: "20px",
                  color: "#a9a69e",
                  fontSize: "12px",
                  lineHeight: "1.4",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna.
              </Text>
            </Section>

            {/* Footer */}
            <Section
              style={{
                textAlign: "center",
                backgroundColor: "#236fa1",
                padding: "20px",
                marginTop: "30px",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: "12px",
                  margin: "0",
                  textDecoration: "none",
                }}
              >
                © {companyName}. All Rights Reserved
              </Text>
            </Section>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  )
}

// Preview props for development
PaymentConfirmationTemplate.PreviewProps = {
  companyName: "The Shop",
  orderNumber: "#12345",
  orderItems: [
    { name: "Premium T-Shirt", price: "$29.99", quantity: "2" },
    { name: "Designer Jeans", price: "$89.99", quantity: "1" },
    { name: "Sneakers", price: "$129.99", quantity: "1" },
    { name: "Baseball Cap", price: "$24.99", quantity: "1" },
  ],
  total: "$304.95",
  deliveryAddress: "123 Main Street, Apt 4B, New York, NY 10001, United States",
  shippingAddress: "456 Oak Avenue, Suite 200, Los Angeles, CA 90210, United States",
  promoCode: "SAVE20",
  promoDiscount: "20%",
} satisfies PaymentConfirmationTemplateProps
