import {
  Body,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components"

interface RestaurantApologyEmailProps {
  customerName?: string
  logoUrl?: string
  chefImageUrl?: string
  restaurantImageUrl?: string
  promoCode?: string
  viewOnlineUrl?: string
  redeemUrl?: string
  phoneNumber?: string
  email?: string
  websiteUrl?: string
  facebookUrl?: string
  twitterUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
  preferencesUrl?: string
  unsubscribeUrl?: string
  privacyUrl?: string
  termsUrl?: string
  restaurantName?: string
  restaurantAddress?: string
}

export default function RestaurantApologyEmail({
  promoCode = "FREEMEAL20",
  viewOnlineUrl = "#",
  redeemUrl = "#",
  phoneNumber = "123-456-7890",
  email = "example@example.com",
  websiteUrl = "www.hotfoodrestaurant.com",
  facebookUrl = "#",
  twitterUrl = "#",
  linkedinUrl = "#",
  instagramUrl = "#",
  preferencesUrl = "#",
  unsubscribeUrl = "#",
  privacyUrl = "#",
  termsUrl = "#",
  restaurantName = "Hot Food Restaurant",
  restaurantAddress = "123 Main Street, City, State",
}: RestaurantApologyEmailProps) {
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
      <Preview>We're sorry for your experience - Here's our gift to you</Preview>
      <Body
        style={{ margin: "0", padding: "0", backgroundColor: "#f3f4f6", fontFamily: "DM Sans, Verdana, sans-serif" }}
      >
        <Container style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
          {/* Header */}
          <Section style={{ backgroundColor: "#f3f4f6", padding: "12px", textAlign: "center" }}>
            <Text style={{ margin: "0", fontSize: "12px", color: "#666666" }}>
              Unable to see this email?{" "}
              <Link href={viewOnlineUrl} style={{ color: "#666666", textDecoration: "underline" }}>
                Click here to view
              </Link>
            </Text>
          </Section>

          {/* Logo Section */}
          <Section style={{ backgroundColor: "#f3f4f6", padding: "24px", textAlign: "center" }}>
            <Img src="https://cdn.templates.unlayer.com/assets/1635681374067-12a7.png" alt="Hot Food Restaurant" width="120" height="50" 
            className="mx-auto object-contain" style={{ display: "block", margin: "0 auto" }}
            />
          </Section>

          {/* Main Chef Image */}
          <Section style={{ backgroundColor: "#ffffff", padding: "0" }}>
            <Img
              src="https://res.cloudinary.com/dirpuqqib/image/upload/v1750256220/bg-1_rj9gql.jpg"
              alt="Chef holding We're so Sorry sign"
              width="600"
              height="300"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </Section>

          {/* Apology Content */}
          <Section style={{ backgroundColor: "#ffffff", padding: "32px", textAlign: "center" }}>
            <Heading
              style={{
                margin: "0 0 24px 0",
                fontSize: "24px",
                fontWeight: "bold",
                color: "#333333",
                lineHeight: "1.3",
              }}
            >
              We are sorry for your
              <br />
              experience at our restaurant.
            </Heading>
            <Text
              style={{
                margin: "0",
                fontSize: "14px",
                color: "#666666",
                lineHeight: "1.5",
                maxWidth: "400px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit.
            </Text>
          </Section>

          {/* Gift Section with Background Image */}
          <Section
            style={{
              backgroundColor: "#1f2937",
              backgroundImage: `url(https://res.cloudinary.com/dirpuqqib/image/upload/v1750256276/bg-2_eieamz.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "60px 20px",
              textAlign: "center",
            }}
          >
            {/* Dark overlay using nested section */}
            <div
              style={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                padding: "40px 20px",
                borderRadius: "8px",
              }}
            >
              <Heading
                style={{
                  margin: "0 0 16px 0",
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#ffffff",
                }}
              >
                Our Gift for You
              </Heading>
              <Text style={{ margin: "0 0 8px 0", fontSize: "16px", color: "#ffffff" }}>
                Use code:{" "}
                <span
                  style={{
                    backgroundColor: "#fbbf24",
                    color: "#000000",
                    padding: "4px 12px",
                    fontWeight: "bold",
                    fontSize: "16px",
                    borderRadius: "4px",
                  }}
                >
                  {promoCode}
                </span>
              </Text>
              <Text
                style={{
                  margin: "16px auto 24px auto",
                  fontSize: "14px",
                  color: "#e5e7eb",
                  lineHeight: "1.5",
                  maxWidth: "350px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                labore et dolore magna aliqua.
              </Text>
              <Link
                href={redeemUrl}
                style={{
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  padding: "12px 32px",
                  fontWeight: "bold",
                  fontSize: "14px",
                  textDecoration: "none",
                  display: "inline-block",
                  borderRadius: "4px",
                }}
              >
                CLICK HERE
              </Link>
            </div>
          </Section>

          {/* Contact Section */}
          <Section style={{ backgroundColor: "#f3f4f6", padding: "32px", textAlign: "center" }}>
            <Text style={{ margin: "0 0 24px 0", fontSize: "14px", color: "#4b5563" }}>
              If you need further assistance please feel free to contact
            </Text>

            <Row>
              <Column style={{ textAlign: "center", padding: "0 10px" }}>
                <Text style={{ margin: "0", fontSize: "9px", fontWeight: "600", color: "#4b5563" }}>
                  {phoneNumber}
                </Text>
              </Column>
              <Column style={{ textAlign: "center", padding: "0 10px" }}>
                <Text style={{ margin: "0", fontSize: "9px", fontWeight: "600", color: "#4b5563" }}>{email}</Text>
              </Column>
              <Column style={{ textAlign: "center", padding: "0 10px" }}>
               
                <Text style={{ margin: "0", fontSize: "9px", fontWeight: "600", color: "#4b5563" }}>Live Chat</Text>
              </Column>
            </Row>
          </Section>

          {/* Footer */}
          <Section style={{ backgroundColor: "#f3f4f6", padding: "24px", textAlign: "center" }}>
            {/* Footer Links */}
            <Text style={{ margin: "0 0 16px 0", fontSize: "12px", color: "#6b7280" }}>
              <Link href={preferencesUrl} style={{ color: "#6b7280", textDecoration: "none" }}>
                Manage Preferences
              </Link>
              {" | "}
              <Link href={unsubscribeUrl} style={{ color: "#6b7280", textDecoration: "none" }}>
                Unsubscribe
              </Link>
              {" | "}
              <Link href={privacyUrl} style={{ color: "#6b7280", textDecoration: "none" }}>
                Privacy Notice
              </Link>
              {" | "}
              <Link href={viewOnlineUrl} style={{ color: "#6b7280", textDecoration: "none" }}>
                View Online
              </Link>
            </Text>

            {/* Social Media Icons */}
            <div style={{ marginBottom: "16px" }}>
              <Link href={facebookUrl} style={{ margin: "0 4px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#374151",
                    borderRadius: "4px",
                    display: "inline-block",
                    textAlign: "center",
                    lineHeight: "32px",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  f
                </div>
              </Link>
              <Link href={twitterUrl} style={{ margin: "0 4px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#374151",
                    borderRadius: "4px",
                    display: "inline-block",
                    textAlign: "center",
                    lineHeight: "32px",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  t
                </div>
              </Link>
              <Link href={linkedinUrl} style={{ margin: "0 4px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#374151",
                    borderRadius: "4px",
                    display: "inline-block",
                    textAlign: "center",
                    lineHeight: "32px",
                    color: "white",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  in
                </div>
              </Link>
              <Link href={instagramUrl} style={{ margin: "0 4px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#374151",
                    borderRadius: "4px",
                    display: "inline-block",
                    textAlign: "center",
                    lineHeight: "32px",
                    color: "white",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  ig
                </div>
              </Link>
            </div>

            {/* Legal Text */}
            <Text style={{ margin: "0 0 8px 0", fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
              If you have any questions, feel free to contact us at{" "}
              <Link href={`mailto:${email}`} style={{ color: "#9ca3af", textDecoration: "underline" }}>
                {email}
              </Link>
            </Text>
            <Text style={{ margin: "0 0 8px 0", fontSize: "12px", color: "#9ca3af", lineHeight: "1.5" }}>
              All rights reserved. Updates versus preferences at{" "}
              <Link href={`https://${websiteUrl}`} style={{ color: "#9ca3af", textDecoration: "underline" }}>
                {websiteUrl}
              </Link>
            </Text>
            <Text style={{ margin: "0 0 8px 0", fontSize: "12px", color: "#9ca3af" }}>{restaurantName}</Text>
            <Text style={{ margin: "0 0 8px 0", fontSize: "12px", color: "#9ca3af" }}>{restaurantAddress}</Text>
            <Text style={{ margin: "0", fontSize: "12px", color: "#9ca3af" }}>
              <Link href={termsUrl} style={{ color: "#9ca3af", textDecoration: "underline" }}>
                Terms of use
              </Link>
              {" | "}
              <Link href={privacyUrl} style={{ color: "#9ca3af", textDecoration: "underline" }}>
                Privacy Policy
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

RestaurantApologyEmail.PreviewProps = {
  customerName: "John Smith",
  logoUrl: "/placeholder.svg?height=50&width=120",
  chefImageUrl: "/placeholder.svg?height=300&width=500",
  restaurantImageUrl: "/placeholder.svg?height=250&width=500",
  promoCode: "FREEMEAL20",
  viewOnlineUrl: "https://example.com/view-email",
  redeemUrl: "https://example.com/redeem-offer",
  phoneNumber: "123-456-7890",
  email: "example@example.com",
  websiteUrl: "www.hotfoodrestaurant.com",
  facebookUrl: "https://facebook.com/hotfoodrestaurant",
  twitterUrl: "https://twitter.com/hotfoodrestaurant",
  linkedinUrl: "https://linkedin.com/company/hotfoodrestaurant",
  instagramUrl: "https://instagram.com/hotfoodrestaurant",
  preferencesUrl: "https://example.com/preferences",
  unsubscribeUrl: "https://example.com/unsubscribe",
  privacyUrl: "https://example.com/privacy",
  termsUrl: "https://example.com/terms",
  restaurantName: "Hot Food Restaurant",
  restaurantAddress: "123 Main Street, City, State",
} satisfies RestaurantApologyEmailProps
