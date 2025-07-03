import {
    Body,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
    Font,
  } from "@react-email/components"
  import { Tailwind } from "@react-email/tailwind"
  
  interface DocuSignEmailProps {
    recipientEmail?: string
    promoCode?: string
    discountAmount?: string
    discountPercentage?: string
  }
  
  export const FastSale = ({
    recipientEmail = "hello@app.com",
    promoCode = "SAVE50",
    discountAmount = "$50",
    discountPercentage = "20%",
  }: DocuSignEmailProps) => (
    <Html>
      <Head>
        <Font
          fontFamily="Helvetica"
          fallbackFontFamily={["Arial", "sans-serif"]}
          webFont={{
            url: "https://fonts.gstatic.com/s/helvetica/v18/1YtdmxwroJOiUsEBIonDQA.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>DocuSign: Save {discountAmount} on our Standard or Business Pro annual plans</Preview>
      <Tailwind>
        <Body style={main}>
          <Container style={container}>
            {/* Header with Logo */}
            <Section style={logoSection}>
              <Row>
                <Column>
                  <Img
                    src="https://utfs.io/f/33385479-3590-4682-8e14-729454476f1a-24mj1e.png"
                    width="150"
                    height="50"
                    alt="DocuSign Logo"
                    style={logoImage}
                  />
                </Column>
                <Column align="right">
                  <Text style={topRightText}>#1 E-Signature Solution</Text>
                  <Text style={saveText}>SAVE {discountPercentage}</Text>
                </Column>
              </Row>
            </Section>
  
            {/* Flash Sale Banner */}
            <Section style={flashSaleSection}>
              <Text style={flashSaleText}>THREE DAY FLASH SALE ENDS TODAY!</Text>
            </Section>
  
            {/* Blue Hero Section */}
            <Section style={blueSection}>
              <Heading as="h1" style={blueSectionHeading}>
                Save {discountAmount} on DocuSign
              </Heading>
              <Text style={blueSectionText}>
                Today is the last day you can save {discountAmount} on our Standard or Business Pro annual plans with
                promo code {promoCode}.*
              </Text>
              <Link style={ctaButton} href="https://www.docusign.com">
                SAVE {discountAmount} TODAY
              </Link>
            </Section>
  
            {/* Feature Section */}
            <Section style={featureSection}>
              <Row>
                <Column style={{ width: "60%", paddingRight: "20px" }}>
                  <Heading as="h2" style={featureHeading}>
                    The world's #1 way to sign electronically
                  </Heading>
                  <Text style={featureSubheading}>Send. Sign. Success.</Text>
                  <Text style={featureDescription}>
                    DocuSign accelerates agreements, eliminates manual processes, and allows your customers to sign from
                    anywhere.
                  </Text>
                  <Link href="https://www.docusign.com/plans" style={viewPlansLink}>
                    VIEW PLANS →
                  </Link>
                </Column>
                <Column style={{ width: "40%" }} align="center">
                  <Img
                    src="https://utfs.io/f/d20257f0-d027-4ef9-b374-ba07e5055baf-24qt26.gif"
                    width="180"
                    height="360"
                    alt="DocuSign Mobile App"
                    style={featureImage}
                  />
                </Column>
              </Row>
            </Section>
  
            {/* Business Pro Section */}
            <Section style={businessProSection}>
              <Heading as="h2" style={businessProHeading}>
                Business Pro: Our premium feature plan
              </Heading>
              <Text style={businessProText}>Accelerate your business with our most premium features:</Text>
  
              {/* Feature 1 */}
              <Row style={featureRow}>
                <Column style={featureIconColumn}>
                  <Text style={featureNumber}>1</Text>
                </Column>
                <Column style={featureTextColumn}>
                  <Text style={featureListItemText}>
                    <strong>Signer attachments:</strong> Allow your signers to upload supporting documents, like a photo
                    of their ID, when they sign
                  </Text>
                </Column>
              </Row>
  
              {/* Feature 2 */}
              <Row style={featureRow}>
                <Column style={featureIconColumn}>
                  <Text style={featureNumber}>2</Text>
                </Column>
                <Column style={featureTextColumn}>
                  <Text style={featureListItemText}>
                    <strong>In-person signing:</strong> Host signing on your own device, like a tablet, to allow signers
                    to electronically sign agreements in-person
                  </Text>
                </Column>
              </Row>
  
              {/* Feature 3 */}
              <Row style={featureRow}>
                <Column style={featureIconColumn}>
                  <Text style={featureNumber}>3</Text>
                </Column>
                <Column style={featureTextColumn}>
                  <Text style={featureListItemText}>
                    <strong>Custom fields:</strong> Save settings for frequently used fields, from font formatting to
                    validation settings, for efficient document preparation
                  </Text>
                </Column>
              </Row>
  
              <Section style={{ textAlign: "center", marginTop: "30px" }}>
                <Link style={businessProButton} href="https://www.docusign.com">
                  {discountAmount} OFF BUSINESS PRO
                </Link>
              </Section>
            </Section>
  
            {/* Footer */}
            <Section style={footerSection}>
              <Row>
                <Column align="center">
                  <Row>
                    <Column align="center" style={{ paddingRight: "10px" }}>
                      <Link href="#">
                        <Img
                          src="https://cdn.tools.unlayer.com/social/icons/circle-black/facebook.png"
                          alt="Facebook"
                          width="32"
                          height="32"
                          style={socialIcon}
                        />
                      </Link>
                    </Column>
                    <Column align="center" style={{ paddingRight: "10px" }}>
                      <Link href="#">
                        <Img
                          src="https://cdn.tools.unlayer.com/social/icons/circle-black/pinterest.png"
                          alt="Pinterest"
                          width="32"
                          height="32"
                          style={socialIcon}
                        />
                      </Link>
                    </Column>
                    <Column align="center" style={{ paddingRight: "10px" }}>
                      <Link href="#">
                        <Img
                          src="https://cdn.tools.unlayer.com/social/icons/circle-black/email.png"
                          alt="Email"
                          width="32"
                          height="32"
                          style={socialIcon}
                        />
                      </Link>
                    </Column>
                    <Column align="center">
                      <Link href="#">
                        <Img
                          src="https://cdn.tools.unlayer.com/social/icons/circle-black/youtube.png"
                          alt="YouTube"
                          width="32"
                          height="32"
                          style={socialIcon}
                        />
                      </Link>
                    </Column>
                  </Row>
  
                  <Text style={footerText}>
                    This message was sent to {recipientEmail}
                    <br />
                    If you would like to update your email address, please{" "}
                    <Link href="#" style={footerLink}>
                      click here
                    </Link>
                    .
                    <br />
                    If you no longer wish to receive e-mails from App, click to{" "}
                    <Link href="#" style={footerLink}>
                      UNSUBSCRIBE
                    </Link>
                    .
                  </Text>
  
                  <Text style={footerText}>
                    If you receive a suspicious email, please report it by forwarding the email to{" "}
                    <Link href="mailto:spoof@app.com" style={footerLink}>
                      spoof@app.com
                    </Link>
                    . Visit{" "}
                    <Link href="#" style={footerLink}>
                      Security
                    </Link>{" "}
                    to find out more.
                  </Text>
  
                  <Text style={copyrightText}>© 20XX Company. All Rights Reserved.</Text>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
  
  export default FastSale
  
  // Email-client compatible styles
  const main = {
    fontFamily: '"Helvetica", "Arial", sans-serif',
    backgroundColor: "#f6f8fa",
    margin: "0",
    padding: "0",
  }
  
  const container = {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
  }
  
  const logoSection = {
    padding: "20px",
    borderBottom: "1px solid #e1e1e1",
  }
  
  const logoImage = {
    display: "block",
    outline: "none",
    border: "none",
    textDecoration: "none",
  }
  
  const topRightText = {
    fontSize: "14px",
    color: "#333333",
    margin: "0",
    textAlign: "right" as const,
  }
  
  const saveText = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#ff0000",
    margin: "0",
    textAlign: "right" as const,
  }
  
  const flashSaleSection = {
    backgroundColor: "#000000",
    padding: "12px",
    textAlign: "center" as const,
  }
  
  const flashSaleText = {
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "bold",
    margin: "0",
  }
  
  const blueSection = {
    backgroundColor: "#0062ff",
    padding: "40px 20px",
    textAlign: "left" as const,
  }
  
  const blueSectionHeading = {
    color: "#ffffff",
    fontSize: "28px",
    fontWeight: "bold",
    margin: "0 0 20px 0",
  }
  
  const blueSectionText = {
    color: "#ffffff",
    fontSize: "16px",
    lineHeight: "24px",
    margin: "0 0 25px 0",
  }
  
  const ctaButton = {
    backgroundColor: "#ffffff",
    color: "#0062ff",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    borderRadius: "4px",
    display: "inline-block",
  }
  
  const featureSection = {
    padding: "30px 20px",
    backgroundColor: "#ffffff",
  }
  
  const featureHeading = {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#333333",
    margin: "0 0 10px 0",
  }
  
  const featureSubheading = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#555555",
    margin: "0 0 15px 0",
  }
  
  const featureDescription = {
    fontSize: "16px",
    lineHeight: "24px",
    color: "#666666",
    margin: "0 0 20px 0",
  }
  
  const featureImage = {
    maxWidth: "100%",
    height: "auto",
    display: "block",
  }
  
  const viewPlansLink = {
    color: "#0062ff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
  }
  
  const businessProSection = {
    padding: "30px 20px",
    backgroundColor: "#f5f7fa",
  }
  
  const businessProHeading = {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#333333",
    margin: "0 0 15px 0",
    textAlign: "center" as const,
  }
  
  const businessProText = {
    fontSize: "16px",
    lineHeight: "24px",
    color: "#666666",
    margin: "0 0 25px 0",
    textAlign: "center" as const,
  }
  
  const featureRow = {
    marginBottom: "15px",
  }
  
  const featureIconColumn = {
    width: "36px",
    verticalAlign: "top",
  }
  
  const featureTextColumn = {
    verticalAlign: "top",
  }
  
  const featureNumber = {
    backgroundColor: "#0062ff",
    color: "#ffffff",
    width: "24px",
    height: "24px",
    borderRadius: "12px",
    textAlign: "center" as const,
    lineHeight: "24px",
    fontSize: "14px",
    fontWeight: "bold",
    display: "inline-block",
    margin: "0",
  }
  
  const featureListItemText = {
    fontSize: "15px",
    lineHeight: "22px",
    color: "#444444",
    margin: "0",
  }
  
  const businessProButton = {
    backgroundColor: "#1d4ed8",
    color: "#ffffff",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    borderRadius: "4px",
    display: "inline-block",
  }
  
  const footerSection = {
    backgroundColor: "#f8f8f8",
    padding: "30px 20px 20px",
    textAlign: "center" as const,
    borderTop: "1px solid #e1e1e1",
  }
  
  const socialIcon = {
    width: "32px",
    height: "32px",
    margin: "0 5px",
  }
  
  const footerText = {
    fontSize: "12px",
    lineHeight: "18px",
    color: "#666666",
    margin: "20px 0 10px 0",
    textAlign: "center" as const,
  }
  
  const footerLink = {
    color: "#0062ff",
    textDecoration: "none",
  }
  
  const copyrightText = {
    fontSize: "12px",
    color: "#999999",
    margin: "20px 0 0 0",
    padding: "10px 0 0 0",
    borderTop: "1px solid #e1e1e1",
    textAlign: "center" as const,
  }
  