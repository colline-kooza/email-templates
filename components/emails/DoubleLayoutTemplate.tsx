import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Link,
  Img,
  Section,
  Row,
  Column,
} from "@react-email/components"

export const DoubleLayoutTemplate = () => {
  const baseUrl = "http:localhost:3001"
  return (
    <Html>
      <Head />
      <Preview>Responsive Double column Template</Preview>

      <Body style={main}>
        <Container style={container}>
          {/* Single Column Section */}
          <Section style={{ padding: "0 25px" }}>
            <Img src={`https://img.freepik.com/premium-photo/stylish-african-american-model-glasses-hat-jeans-jacket-black-skirt-posed-outdoor-against-black-business-suv-car_151355-4840.jpg?ga=GA1.1.1507646784.1744203436&semt=ais_hybrid&w=740`} width="32" height="32" alt="Notion's Logo" />
            <Text>Hi Paul,</Text>
            <Text>
              You can create just about anything with Notion. We see this come to life in the templates our users build
              - personal dashboards, habit trackers, travel planners and more.
            </Text>
            <Heading as="h3" style={{ margin: "24px 0 12px" }}>
              Explore by category
            </Heading>
            <Text style={{ marginBottom: 14 }}>Click on a category below to start exploring</Text>
            <CustomButton />
          </Section>

          {/* First Dual Column Section */}
          <Section style={{ padding: "0 25px" }}>
            <Row>
              <Column style={{ textAlign: "center", marginBottom: 16 }}>
                <Link href="#">
                  <Img src="https://img.freepik.com/free-photo/medium-shot-cool-woman-posing_23-2149068957.jpg?ga=GA1.1.1507646784.1744203436&semt=ais_hybrid&w=740" alt="Explore personal productivity templates" width="90%" />
                </Link>
              </Column>
              <Column style={{ textAlign: "center", marginBottom: 16 }}>
                <Link href="#">
                  <Img src="https://img.freepik.com/premium-photo/free-photo-woman-with-red-hair-sweater-with-design-front-fashion-photoshoot_1124573-77273.jpg?ga=GA1.1.1507646784.1744203436&semt=ais_hybrid&w=740" alt="Explore health and fitness templates" width="90%" />
                </Link>
              </Column>
            </Row>
          </Section>

          {/* Second Dual Column Section */}
          <Section style={{ padding: "0 25px" }}>
            <Row>
              <Column style={{ textAlign: "center", marginBottom: 16 }}>
                <Link href="#">
                  <Img src="https://img.freepik.com/free-photo/beautiful-woman-wearing-formal-clothes-outdoors_23-2148448818.jpg?ga=GA1.1.1507646784.1744203436&semt=ais_hybrid&w=740" alt="Explore travel templates" width="90%" />
                </Link>
              </Column>
              <Column style={{ textAlign: "center", marginBottom: 16 }}>
                <Link href="#">
                  <Img src="https://img.freepik.com/premium-photo/stylish-african-american-model-sunglasses-holding-handbag-tiny-rose-beige-background_1074916-7956.jpg?ga=GA1.1.1507646784.1744203436&semt=ais_hybrid&w=740" alt="Explore personal finance templates" width="90%" />
                </Link>
              </Column>
            </Row>
          </Section>

          {/* Final Single Column Section */}
          <Section style={{ padding: "0 25px" }}>
            <Heading as="h3" style={{ margin: "26px 0 12px" }}>
              Over 5,000 new templates to choose from
            </Heading>
            <Text style={{ marginBottom: 14 }}>Search for a topic or browse through 250+ categories.</Text>
            <Img src="https://img.freepik.com/free-photo/fashion-stylish-beautiful-young-brunette-woman-model-summer-hipster-colorful-casual-clothes-posing-street-background_158538-13106.jpg?ga=GA1.1.1507646784.1744203436&semt=ais_hybrid&w=740" alt="Screenshot of notion templates homepage" width="100%" />

            <Heading as="h3" style={{ margin: "38px 0 12px" }}>
              Use templates created by the world's best operators
            </Heading>
            <Text style={{ marginBottom: 14 }}>
              Apply frameworks from the best entrepreneurs, creators, and thought leaders.
            </Text>
            <Img src="https://img.freepik.com/free-photo/fashionable-woman-taking-walk-outdoors_23-2148448831.jpg?ga=GA1.1.1507646784.1744203436&semt=ais_hybrid&w=740" alt="Screenshot of notion templates homepage" width="100%" />

            <Heading as="h3" style={{ margin: "38px 0 12px" }}>
              Redesigned Template Gallery experience
            </Heading>
            <Text style={{ marginBottom: 14 }}>Discover trending templates and curated collections.</Text>
            <Img src={`https://img.freepik.com/free-photo/fashion-stylish-beautiful-young-brunette-woman-model-summer-hipster-colorful-casual-clothes-posing-street-background_158538-12561.jpg?ga=GA1.1.1507646784.1744203436&semt=ais_hybrid&w=740`} alt="Screenshot of notion templates homepage" width="100%" />

            <Button
              style={{
                background: "#4898C9",
                color: "white",
                borderRadius: "4.5px",
                margin: "48px 0 8px",
                padding: "8px 13.5px",
                display: "inline-block",
              }}
              href="#"
            >
              View templates &rarr;
            </Button>

            <Text>
              Happy exploring, <br />
              Ivan
            </Text>

            <Img src={`https://img.freepik.com/premium-photo/fashion-hat-portrait-woman-studio-with-trendy-clothes-stylish-elegant-outfit-confidence-attractive-isolated-person-with-glamour-style-aesthetic-model-gray-background_590464-341204.jpg?ga=GA1.1.1507646784.1744203436&semt=ais_hybrid&w=740`} width="32" height="32" alt="Notion's Logo" style={{ marginTop: 48 }} />
            <Text style={{ width: 160, marginBottom: 70 }}>
              Notion - the connected workspace for your docs, projects, and knowledge.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default DoubleLayoutTemplate

const main = {
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  background: "#fff",
}

const container = {
  margin: "0 auto",
  paddingTop: 42,
  maxWidth: "600px",
}

export const CustomButton = () => {
  return (
    <Button
      href="https://example.com"
      style={{
        color: "#61dafb",
        padding: "10px 20px",
        display: "inline-block",
        textDecoration: "none",
      }}
    >
      Custom Button
    </Button>
  )
}
