import { Body, Container, Head, Heading, Html, Img, Link, Preview, Section, Text } from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

interface ExpediaEmailProps {
  userName?: string
  recentSearches?: Array<{
    route: string
    airline: string
    date: string
    price: string
    travelers: string
    type: string
  }>
  destinationDeals?: Array<{
    city: string
    country: string
    price: string
    image: string
    description: string
  }>
  hotelDeals?: Array<{
    name: string
    location: string
    rating: number
    price: string
    image: string
  }>
}

export default function EnhancedExpediaEmail({
  userName = "Traveler",
  recentSearches = [
    {
      route: "Rio de Janeiro (GIG) - Buenos Aires (EZE)",
      airline: "British Airways",
      date: "Nov 9",
      price: "$1,519",
      travelers: "2 traveler(s)",
      type: "oneway",
    },
  ],
  destinationDeals = [
    {
      city: "Paris",
      country: "France",
      price: "from $599",
      image: "https://ci3.googleusercontent.com/meips/ADKq_NY5jSJyGA6mCaLCnAwsdYhM5_gJ8BTr0V4-c2yX7iH872OgEtYPUXhxXS9oB73JHcErFJjSy6LAD_ye8GqyAf-X3b2Lm1ZkMfl2V1HGQkEIN8XBPAo-aG6hJRtmIqulatnIjg3ZnhQ=s0-d-e1-ft#https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=300&h=200&fit=crop",
      description: "City of Light awaits with romantic charm",
    },
    {
      city: "Tokyo",
      country: "Japan",
      price: "from $899",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=300&h=200&fit=crop",
      description: "Modern metropolis meets ancient tradition",
    },
    {
      city: "Bali",
      country: "Indonesia",
      price: "from $699",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=300&h=200&fit=crop",
      description: "Tropical paradise with stunning beaches",
    },
  ],
  hotelDeals = [
    {
      name: "Grand Plaza Hotel",
      location: "New York City",
      rating: 4,
      price: "$189/night",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop",
    },
    {
      name: "Seaside Resort",
      location: "Miami Beach",
      rating: 5,
      price: "$299/night",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=200&fit=crop",
    },
  ],
}: ExpediaEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Keep planning your trip with Expedia - Exclusive deals inside!</Preview>
      <Tailwind>
        <Body style={main}>
          <Container style={container}>
            {/* Header */}
            <Section style={logoContainer}>
              <Img
                src="https://utfs.io/f/57a79a08-d233-49a3-a17d-97aeda89fd0d-9fp6x0.png"
                width="150"
                height="50"
                alt="Expedia"
                style={{ objectFit: "contain" }}
              />
            </Section>

            {/* Hero Section */}
            <Section style={heroContainer}>
              <Img
                src="https://utfs.io/f/129fa0b2-cd5f-48ef-a162-dbbc791322de-lc0rac.jpg"
                width="600"
                height="300"
                alt="City Skyline"
                style={heroImage}
              />
            </Section>

            {/* Welcome Message */}
            <Section style={contentContainer}>
              <Heading style={heading}>Hi {userName}, keep planning your trip!</Heading>
              <Text style={paragraph}>
                We saved your recent searches for you, so you can easily pick up where you left off. Plus, check out our
                exclusive deals and recommendations just for you.
              </Text>
              <div style={{ textAlign: "center", margin: "20px 0" }}>
                <Link
                  href="https://www.expedia.com"
                  style={{
                    backgroundColor: "#ffc94c",
                    color: "#001959",
                    fontSize: "14px",
                    textDecoration: "none",
                    padding: "14px 30px",
                    borderRadius: "5px",
                    display: "inline-block",
                    fontWeight: "bold",
                  }}
                >
                  Continue Planning
                </Link>
              </div>
            </Section>

            {/* Recent Searches */}
            <Section style={sectionContainer}>
              <Heading style={sectionHeading}>Your Recent Searches</Heading>
              {recentSearches.map((search, index) => (
                <div key={index} style={flightCard}>
                  <table width="100%" cellPadding="0" cellSpacing="0">
                    <tr>
                      <td style={{ verticalAlign: "top", width: "70%" }}>
                        <Text style={flightRoute}>{search.route}</Text>
                        <Text style={flightDetails}>{search.airline}</Text>
                        <Text style={flightDetails}>
                          {search.date} • {search.travelers} • {search.type}
                        </Text>
                      </td>
                      <td style={{ verticalAlign: "top", textAlign: "right", width: "30%" }}>
                        <Text style={priceText}>{search.price}</Text>
                        <Link href="https://www.expedia.com" style={checkLink}>
                          Check availability →
                        </Link>
                      </td>
                    </tr>
                  </table>
                </div>
              ))}
            </Section>

            {/* Destination Deals */}
            <Section style={sectionContainer}>
              <Heading style={sectionHeading}>✈️ Trending Destinations</Heading>
              <Text style={sectionSubtext}>Discover amazing places at unbeatable prices</Text>

              <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginTop: "20px" }}>
                <tr>
                  {destinationDeals.slice(0, 3).map((deal, index) => (
                    <td key={index} width="33.33%" style={{ padding: "0 8px", verticalAlign: "top" }}>
                      <div style={destinationCard}>
                        <Img
                          src={deal.image}
                          width="180"
                          height="120"
                          alt={deal.city}
                          style={{ borderRadius: "8px 8px 0 0", objectFit: "cover" }}
                        />
                        <div style={{ padding: "16px" }}>
                          <Text style={destinationCity}>
                            {deal.city}, {deal.country}
                          </Text>
                          <Text style={destinationPrice}>{deal.price}</Text>
                          <Text style={destinationDescription}>{deal.description}</Text>
                          <Link href="https://www.expedia.com" style={destinationLink}>
                            Explore deals →
                          </Link>
                        </div>
                      </div>
                    </td>
                  ))}
                </tr>
              </table>
            </Section>

            {/* Hotel Deals */}
            <Section style={sectionContainer}>
              <Heading style={sectionHeading}>🏨 Featured Hotel Deals</Heading>
              <Text style={sectionSubtext}>Handpicked accommodations for your perfect stay</Text>

              <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginTop: "20px" }}>
                <tr>
                  {hotelDeals.map((hotel, index) => (
                    <td key={index} width="50%" style={{ padding: "0 8px", verticalAlign: "top" }}>
                      <div style={hotelCard}>
                        <table width="100%" cellPadding="0" cellSpacing="0">
                          <tr>
                            <td width="40%">
                              <Img
                                src={hotel.image}
                                width="120"
                                height="80"
                                alt={hotel.name}
                                style={{ borderRadius: "8px", objectFit: "cover" }}
                              />
                            </td>
                            <td width="60%" style={{ padding: "0 0 0 12px", verticalAlign: "top" }}>
                              <Text style={hotelName}>{hotel.name}</Text>
                              <Text style={hotelLocation}>{hotel.location}</Text>
                              <div style={{ margin: "4px 0" }}>{"⭐".repeat(hotel.rating)}</div>
                              <Text style={hotelPrice}>{hotel.price}</Text>
                              <Link href="https://www.expedia.com" style={hotelLink}>
                                Book now →
                              </Link>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </td>
                  ))}
                </tr>
              </table>
            </Section>

            {/* Travel Tips */}
            <Section style={travelTipsContainer}>
              <table width="100%" cellPadding="0" cellSpacing="0">
                <tr>
                  <td width="15%" style={{ verticalAlign: "top" }}>
                    <Img
                      src="https://utfs.io/f/2aa9915a-c1a6-4a75-acc4-6eb94684cd72-l63d92.png"
                      width="50"
                      height="50"
                      alt="Travel Tips"
                      style={{ objectFit: "contain" }}
                    />
                  </td>
                  <td width="85%" style={{ padding: "0 0 0 16px", verticalAlign: "top" }}>
                    <Heading style={travelTipsHeading}>💡 Travel Smart Tips</Heading>
                    <Text style={travelTipsText}>
                      <strong>Best Time to Book:</strong> Book flights 6-8 weeks in advance for domestic trips, 2-3
                      months for international.
                      <br />
                      <br />
                      <strong>Price Alerts:</strong> Set up price alerts to get notified when flight prices drop for
                      your desired routes.
                      <br />
                      <br />
                      <strong>Flexible Dates:</strong> Use our flexible date search to find the cheapest days to travel.
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Special Offers */}
            <Section style={offersContainer}>
              <Heading style={offersHeading}>🎉 Limited Time Offers</Heading>
              <table width="100%" cellPadding="0" cellSpacing="0">
                <tr>
                  <td width="50%" style={{ padding: "0 8px 0 0" }}>
                    <div style={offerCard}>
                      <Text style={offerTitle}>Save 20% on Hotels</Text>
                      <Text style={offerDescription}>Book by Dec 31st for stays through March 2024</Text>
                      <Text style={offerCode}>Code: HOTEL20</Text>
                    </div>
                  </td>
                  <td width="50%" style={{ padding: "0 0 0 8px" }}>
                    <div style={offerCard}>
                      <Text style={offerTitle}>Flight + Hotel Packages</Text>
                      <Text style={offerDescription}>Save up to $500 when you bundle</Text>
                      <Text style={offerCode}>Code: BUNDLE500</Text>
                    </div>
                  </td>
                </tr>
              </table>
            </Section>

            {/* App Download */}
            <Section style={appSection}>
              <Heading style={appHeading}>📱 Download Our App for Exclusive Mobile Deals</Heading>
              <Text style={appText}>Get instant access to mobile-only discounts and manage your trips on the go.</Text>
              <div style={appStoreContainer}>
                <Link href="https://apps.apple.com/app/expedia-hotels-flights-car/id427916203">
                  <Img
                    src="https://utfs.io/f/45a6fee3-2421-4b63-a990-9126d8fad4ed-gxauo4.png"
                    width="120"
                    height="40"
                    alt="Download on the App Store"
                    style={{ objectFit: "contain" }}
                  />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.expedia.bookings">
                  <Img
                    src="https://utfs.io/f/3ac94d35-f66b-4c78-ad2d-e2f69a20c20d-gy1pgf.png"
                    width="134"
                    height="40"
                    alt="Get it on Google Play"
                    style={{ objectFit: "contain", marginLeft: "8px" }}
                  />
                </Link>
              </div>
            </Section>

            {/* Footer */}
            <Section style={footerContainer}>
              <Section style={covidAlertContainer}>
                <Text style={covidAlertText}>
                  🦠 COVID-19 Travel Alert: Please remember to check government advisories before booking and traveling.
                </Text>
              </Section>

              <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: "20px" }}>
                <tr>
                  <td width="20%" style={{ textAlign: "center" }}>
                    <Link href="https://www.expedia.com/user/account" style={footerLink}>
                      My Account
                    </Link>
                  </td>
                  <td width="20%" style={{ textAlign: "center" }}>
                    <Link href="https://www.expedia.com/preferences" style={footerLink}>
                      Preferences
                    </Link>
                  </td>
                  <td width="20%" style={{ textAlign: "center" }}>
                    <Link href="https://www.expedia.com/unsubscribe" style={footerLink}>
                      Unsubscribe
                    </Link>
                  </td>
                  <td width="20%" style={{ textAlign: "center" }}>
                    <Link href="https://www.expedia.com/privacy" style={footerLink}>
                      Privacy
                    </Link>
                  </td>
                  <td width="20%" style={{ textAlign: "center" }}>
                    <Link href="https://www.expedia.com/service" style={footerLink}>
                      Support
                    </Link>
                  </td>
                </tr>
              </table>

              <Text style={legalText}>
                © 2024 Expedia, Inc., an Expedia Group company. All rights reserved. Expedia and the Expedia Logo are
                trademarks of Expedia, Inc.
              </Text>

              <Text style={legalText}>
                Contact: Expedia, Attn: EMC Team 1111 Expedia Group Way W., Seattle WA 98119
              </Text>

              <Link href="https://view.email.expedia.com" style={viewInBrowserLink}>
                View this email in a web browser
              </Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

// Preview props for development
EnhancedExpediaEmail.PreviewProps = {
  userName: "Sarah",
  recentSearches: [
    {
      route: "New York (JFK) - London (LHR)",
      airline: "Virgin Atlantic",
      date: "Dec 15",
      price: "$899",
      travelers: "2 travelers",
      type: "roundtrip",
    },
    {
      route: "Los Angeles (LAX) - Tokyo (NRT)",
      airline: "Japan Airlines",
      date: "Jan 20",
      price: "$1,299",
      travelers: "1 traveler",
      type: "roundtrip",
    },
  ],
} satisfies ExpediaEmailProps

// Styles
const main = {
  backgroundColor: "#f8fafc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "10px",
  width: "600px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
}

const logoContainer = {
  marginBottom: "24px",
  textAlign: "center" as const,
  padding: "20px 0",
}

const heroContainer = {
  marginBottom: "24px",
  textAlign: "center" as const,
}

const heroImage = {
  borderRadius: "8px",
  width: "100%",
  objectFit: "cover" as const,
}

const contentContainer = {
  marginBottom: "32px",
  padding: "0 20px",
}

const heading = {
  fontSize: "28px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#001959",
  textAlign: "center" as const,
  margin: "0 0 16px 0",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#484848",
  textAlign: "center" as const,
  margin: "0 0 20px 0",
}

const sectionContainer = {
  marginBottom: "32px",
  padding: "0 20px",
}

const sectionHeading = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#001959",
  margin: "0 0 8px 0",
}

const sectionSubtext = {
  fontSize: "14px",
  color: "#666",
  margin: "0 0 20px 0",
}

const flightCard = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "8px",
  padding: "20px",
  marginBottom: "16px",
}

const flightRoute = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#001959",
  margin: "0 0 8px 0",
}

const flightDetails = {
  fontSize: "14px",
  color: "#666",
  margin: "0 0 4px 0",
}

const priceText = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#001959",
  margin: "0 0 8px 0",
}

const checkLink = {
  color: "#1668e3",
  fontSize: "14px",
  textDecoration: "none",
  fontWeight: "500",
}

const destinationCard = {
  backgroundColor: "#fff",
  border: "1px solid #e2e8f0",
  borderRadius: "8px",
  overflow: "hidden",
  marginBottom: "16px",
}

const destinationCity = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#001959",
  margin: "0 0 4px 0",
}

const destinationPrice = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#16a34a",
  margin: "0 0 8px 0",
}

const destinationDescription = {
  fontSize: "12px",
  color: "#666",
  margin: "0 0 12px 0",
  lineHeight: "1.4",
}

const destinationLink = {
  color: "#1668e3",
  fontSize: "12px",
  textDecoration: "none",
  fontWeight: "500",
}

const hotelCard = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "8px",
  padding: "16px",
  marginBottom: "16px",
}

const hotelName = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#001959",
  margin: "0 0 4px 0",
}

const hotelLocation = {
  fontSize: "12px",
  color: "#666",
  margin: "0 0 4px 0",
}

const hotelPrice = {
  fontSize: "16px",
  fontWeight: "700",
  color: "#16a34a",
  margin: "4px 0 8px 0",
}

const hotelLink = {
  color: "#1668e3",
  fontSize: "12px",
  textDecoration: "none",
  fontWeight: "500",
}

const travelTipsContainer = {
  backgroundColor: "#f0f9ff",
  border: "1px solid #0ea5e9",
  borderRadius: "8px",
  padding: "24px",
  margin: "32px 20px",
}

const travelTipsHeading = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#001959",
  margin: "0 0 16px 0",
}

const travelTipsText = {
  fontSize: "14px",
  lineHeight: "1.5",
  color: "#484848",
  margin: "0",
}

const offersContainer = {
  backgroundColor: "#fef3c7",
  border: "2px solid #f59e0b",
  borderRadius: "8px",
  padding: "24px 20px",
  margin: "32px 20px",
}

const offersHeading = {
  fontSize: "22px",
  fontWeight: "700",
  color: "#92400e",
  textAlign: "center" as const,
  margin: "0 0 20px 0",
}

const offerCard = {
  backgroundColor: "#fff",
  borderRadius: "6px",
  padding: "16px",
  textAlign: "center" as const,
}

const offerTitle = {
  fontSize: "16px",
  fontWeight: "700",
  color: "#92400e",
  margin: "0 0 8px 0",
}

const offerDescription = {
  fontSize: "12px",
  color: "#666",
  margin: "0 0 8px 0",
}

const offerCode = {
  fontSize: "14px",
  fontWeight: "700",
  color: "#dc2626",
  backgroundColor: "#fee2e2",
  padding: "4px 8px",
  borderRadius: "4px",
  display: "inline-block",
}

const appSection = {
  backgroundColor: "#f8fafc",
  padding: "24px 20px",
  textAlign: "center" as const,
  margin: "32px 0",
}

const appHeading = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#001959",
  margin: "0 0 12px 0",
}

const appText = {
  fontSize: "14px",
  color: "#666",
  margin: "0 0 20px 0",
}

const appStoreContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
}

const footerContainer = {
  backgroundColor: "#f2f2f2",
  padding: "24px 20px",
  marginTop: "32px",
}

const covidAlertContainer = {
  backgroundColor: "#fef2f2",
  border: "1px solid #fca5a5",
  borderRadius: "6px",
  padding: "16px",
  marginBottom: "24px",
}

const covidAlertText = {
  fontSize: "14px",
  lineHeight: "1.4",
  color: "#dc2626",
  margin: "0",
  textAlign: "center" as const,
}

const footerLink = {
  color: "#1668e3",
  fontSize: "12px",
  textDecoration: "none",
  fontWeight: "500",
}

const legalText = {
  fontSize: "11px",
  lineHeight: "1.4",
  color: "#666",
  marginBottom: "8px",
  textAlign: "center" as const,
}

const viewInBrowserLink = {
  color: "#1668e3",
  fontSize: "11px",
  textDecoration: "none",
  display: "block",
  textAlign: "center" as const,
  marginTop: "16px",
}
