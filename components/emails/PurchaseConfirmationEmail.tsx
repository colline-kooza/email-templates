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
  Tailwind,
  Text,
} from "@react-email/components"

interface Product {
  id: string
  name: string
  quantity: number
  price: number
  image: string
  description: string
}

interface PurchaseConfirmationEmailProps {
  customerName?: string
  orderNumber?: string
  shippingAddress?: {
    name: string
    company: string
    street: string
    city: string
    state: string
    zipCode: string
  }
  paymentMethod?: {
    type: string
    lastFour: string
    amount: number
  }
  products?: Product[]
  totalAmount?: number
}

export default function PurchaseConfirmationEmail({
  customerName = "John",
  orderNumber = "#12345",
  shippingAddress = {
    name: "Steve Shipper",
    company: "Shipping Company",
    street: "2261 Market Street #4667",
    city: "San Francisco",
    state: "CA",
    zipCode: "94114",
  },
  paymentMethod = {
    type: "VISA",
    lastFour: "123",
    amount: 38.9,
  },
  products = [
    {
      id: "1",
      name: "Blender Machine",
      quantity: 1,
      price: 65.95,
      image: "https://cdn.templates.unlayer.com/assets/1650275868564-juice.png",
      description: "Lorem ipsum dolor sit amet tetur adipiscing sed.",
    },
    {
      id: "2",
      name: "Pressure Cooker",
      quantity: 1,
      price: 107.95,
      image: "https://cdn.templates.unlayer.com/assets/1650275872499-cucker.png",
      description: "Lorem ipsum dolor sit amet tetur adipiscing sed.",
    },
    {
      id: "3",
      name: " Cooker",
      quantity: 1,
      price: 107.95,
      image: "https://cdn.templates.unlayer.com/assets/1650275872499-cucker.png",
      description: "Lorem ipsum dolor sit amet tetur adipiscing sed.",
    },
  ],
  totalAmount = 173.9,
}: PurchaseConfirmationEmailProps) {
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
          fontStyle="initial"
        />
      </Head>
      <Preview>Thank you for your purchase! Order {orderNumber}</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto w-full max-w-[600px] bg-[#f8fcfd]">
            {/* Header */}
            <Section className="px-8 pt-12 pb-8 text-center">
              <div className="mb-6">
                <div className="mx-auto flex h-16 w-20 items-center justify-center ">
                  <img src="https://cdn.templates.unlayer.com/assets/1649230975765-iccccon.png"
                  className="h-full w-full object-contain"
                  alt="" />
                </div>
              </div>

              <Heading className="mb-2 font-bold text-2xl text-gray-900">Thank you for your purchase!</Heading>

              <Text className="mb-2 text-gray-700">
                Hi {customerName}, we're getting your order ready to be shipped.
              </Text>
              <Text className="text-gray-700">We will notify you when it has been sent.</Text>

              <Link
                href="#"
                className="inline-block rounded bg-black px-8 py-3 font-bold text-xs text-white no-underline"
                style={{ backgroundColor: "#000000" }}
              >
                View More Order
              </Link>
            </Section>

            {/* Shipping and Payment Info */}
            <Section className="px-8 py-6">
              <Row>
                <Column className="w-1/2 pr-4">
                  <Heading className="font-bold text-lg text-gray-900">Shipping address</Heading>
                  <Text className=" text-gray-700 text-sm">{shippingAddress.name}</Text>
                  <Text className=" text-gray-700 text-sm">{shippingAddress.company}</Text>
                  <Text className=" text-gray-700 text-sm">{shippingAddress.street}</Text>
                  <Text className="text-gray-700 text-sm">
                    {shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipCode}
                  </Text>
                </Column>

                <Column className="w-1/2 pl-4">
                  <Heading className="mb-4 font-bold text-lg text-gray-900">Payment method</Heading>
                  <Text className="text-gray-700 text-sm">
                    {paymentMethod.type} Ending in {paymentMethod.lastFour} — ${paymentMethod.amount}
                  </Text>
                </Column>
              </Row>
            </Section>

            <Hr className="mx-8 my-6" style={{ borderColor: "#e5e7eb" }} />

            {/* Order Summary */}
            <Section className="px-8 py-2">
              <Heading className="mb-6 text-center font-bold text-xl text-gray-900">Order summary</Heading>

              {products.map((product, index) => (
                <div key={product.id}>
                  <Row className="mb-3">
                    <Column className="w-20">
                      <Img src={product.image} alt={product.name} width="80" height="80" className="rounded" />
                    </Column>
                    <Column className="pl-4">
                      <Text className="mb-1 font-bold text-gray-900">
                        {product.name} x{product.quantity}
                      </Text>
                      <Text className="mb-2 text-gray-600 text-sm">{product.description}</Text>
                    </Column>
                    <Column className="w-20 text-right">
                      <Text className="font-bold text-gray-900">${product.price}</Text>
                    </Column>
                  </Row>
                  {index < products.length - 1 && <Hr className="my-4" style={{ borderColor: "#f3f4f6" }} />}
                </div>
              ))}

              <Hr className="my-6" style={{ borderColor: "#e5e7eb" }} />

              <Row>
                <Column>
                  <Text className="font-bold text-lg text-gray-900">Total: ${totalAmount}</Text>
                </Column>
              </Row>
            </Section>

            <Hr className="mx-8 my-6" style={{ borderColor: "#e5e7eb" }} />

            {/* Footer */}
            <Section className="bg-gray-50 px-8 py-3">
              {/* Company Info */}
              <Row className="mb-6">
                <Column className="text-center">
                  <Text className="mb-2 font-bold text-lg text-gray-900">Your Store</Text>
                  <Text className="mb-1 text-gray-600 text-sm">123 Commerce Street</Text>
                  <Text className="mb-1 text-gray-600 text-sm">Business City, BC 12345</Text>
                  <Text className="mb-2 text-gray-600 text-sm">Phone: (555) 123-4567</Text>
                </Column>
              </Row>

              {/* Social Links */}
              <Row className="mb-6">
                <Column className="text-center">
                  <Text className="mb-1 font-medium text-gray-700 text-sm">Follow us</Text>
                  <div className="mx-auto">
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/facebook.png" alt="LinkedIn" className="w-8 h-8" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/pinterest.png" alt="Twitter" className="w-8 h-8 ml-2" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/email.png" alt="Skype" className="w-8 h-8 ml-2" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/youtube.png" alt="Instagram" className="w-8 h-8 ml-2" /></a>
                </div>
                </Column>
              </Row>

              {/* Quick Links */}
              <Row className="mb-6">
                <Column className="text-center">
                  <Text className="mb-3 font-medium text-gray-700 text-sm">Quick Links</Text>
                  <div className="space-y-2">
                    <div>
                      <Link href="#" className="text-blue-600 text-sm no-underline hover:underline">
                        Track Your Order
                      </Link>
                    </div>
                    <div>
                      <Link href="#" className="text-blue-600 text-sm no-underline hover:underline">
                        Return Policy
                      </Link>
                    </div>
                    <div>
                      <Link href="#" className="text-blue-600 text-sm no-underline hover:underline">
                        Customer Support
                      </Link>
                    </div>
                    <div>
                      <Link href="#" className="text-blue-600 text-sm no-underline hover:underline">
                        FAQ
                      </Link>
                    </div>
                  </div>
                </Column>
              </Row>

              <Hr className="my-6" style={{ borderColor: "#d1d5db" }} />

              {/* Legal and Unsubscribe */}
              <Row>
                <Column className="text-center">
                  <Text className="mb-2 text-gray-500 text-xs">© 2024 Your Store. All rights reserved.</Text>
                  <Text className="mb-2 text-gray-500 text-xs">
                    You received this email because you made a purchase from our store.
                  </Text>
                  <div className="space-x-4">
                    <Link href="#" className="text-gray-500 text-xs no-underline hover:underline">
                      Privacy Policy
                    </Link>
                    <span className="text-gray-400">|</span>
                    <Link href="#" className="text-gray-500 text-xs no-underline hover:underline">
                      Terms of Service
                    </Link>
                    <span className="text-gray-400">|</span>
                    <Link href="#" className="text-gray-500 text-xs no-underline hover:underline">
                      Unsubscribe
                    </Link>
                  </div>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

PurchaseConfirmationEmail.PreviewProps = {
  customerName: "John",
  orderNumber: "#12345",
  shippingAddress: {
    name: "Steve Shipper",
    company: "Shipping Company",
    street: "2261 Market Street #4667",
    city: "San Francisco",
    state: "CA",
    zipCode: "94114",
  },
  paymentMethod: {
    type: "VISA",
    lastFour: "123",
    amount: 38.9,
  },
  products: [
    {
      id: "1",
      name: "Blender Machine",
      quantity: 1,
      price: 65.95,
      image: "https://cdn.templates.unlayer.com/assets/1650275868564-juice.png",
      description: "Lorem ipsum dolor sit amet tetur adipiscing sed.",
    },
    {
      id: "2",
      name: "Pressure Cooker",
      quantity: 1,
      price: 107.95,
      image: "https://cdn.templates.unlayer.com/assets/1650275872499-cucker.png",
      description: "Lorem ipsum dolor sit amet tetur adipiscing sed.",
    },
    {
      id: "3",
      name: "Pressure Cooker",
      quantity: 1,
      price: 107.95,
      image: "https://cdn.templates.unlayer.com/assets/1650275872499-cucker.png",
      description: "Lorem ipsum dolor sit amet tetur adipiscing sed.",
    },
  ],
  totalAmount: 173.9,
} satisfies PurchaseConfirmationEmailProps
