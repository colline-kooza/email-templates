import {
    Body,
    Container,
    Column,
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
  } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
  
  export const EnjoyCutOff = () => (
    <Html>
      <Head />
      <Preview>Enjoy 20% off on all DocuSign plans today</Preview>
      <Tailwind>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoSection}>
            <Column>
              <Img
                src={`https://utfs.io/f/33385479-3590-4682-8e14-729454476f1a-24mj1e.png`}
                width="120"
                height="24"
                alt="DocuSign"
              />
            </Column>
            <Column align="right">
              <Text style={topRightText}>
                #1 E-Signature Solution
                <span style={saveText}>SAVE 20%</span>
              </Text>
            </Column>
          </Section>
          <Section>
            <Img
              src={`https://utfs.io/f/32b338e6-f07d-4903-9f7f-3edde8157646-24pa4z.png`}
              width="600"
              height="400"
              alt="New Balance Apparel"
              className="object-cover"
            />
          </Section>
          <Section style={offerSection}>
            <Text style={offerText}>
              This is the first time we have ever offered 20% off <strong>monthly</strong> and
              <strong> annual</strong> plans. Use promo code <strong>HELLO20</strong> at checkout. Offer* ends
              Friday September, 17, 2023.
            </Text>
            <Link href="https://www.docusign.com" style={button}>
              Save 20%
            </Link>
          </Section>
          <Section style={termsSection}>
            <Text style={termsText}>
              * HELLO20 offer expires September 17th, 2021 at 11:59 PM PT. Savings valid for the first
              year of a DocuSign annual subscription or first month of a DocuSign monthly subcription
              when purchased on DocuSign.com. Offer cannot be applied to API Plans or DocuSign
              corporate plans when purchased on DocuSign.com.
            </Text>
          </Section>
          <Hr style={divider} />
          <Section style={footerSection}>
            <Row>
              <Column align="center">
                <Link href="https://www.facebook.com/docusign" style={socialLink}>
                  <Img
                    src={`https://utfs.io/f/eb38ef62-0438-4edc-a19b-04ead84a46df-r74k4v.png`}
                    width="24"
                    height="24"
                    alt="Facebook"
                    style={socialIcon}
                  />
                </Link>
                <Link href="https://twitter.com/DocuSign" style={socialLink}>
                  <Img
                    src={`https://utfs.io/f/dcd7ae22-00b9-4fb2-90fc-d3c58422c081-akup7f.png`}
                    width="24"
                    height="24"
                    alt="Twitter"
                    style={socialIcon}
                  />
                </Link>
                <Link href="https://utfs.io/f/3964d500-efa5-4f90-9bc4-77f021d46a6c-r74klq.png" style={socialLink}>
                  <Img
                    src={`https://utfs.io/f/1f8843fb-b560-405a-bfd6-1bd577712fae-r74kad.png`}
                    width="24"
                    height="24"
                    alt="YouTube"
                    style={socialIcon}
                  />
                </Link>
                <Link href="https://www.linkedin.com/company/docusign" style={socialLink}>
                  <Img
                    src={`https://utfs.io/f/1f8843fb-b560-405a-bfd6-1bd577712fae-r74kad.png`}
                    width="24"
                    height="24"
                    alt="LinkedIn"
                    style={socialIcon}
                  />
                </Link>
              </Column>
            </Row>
            <Row>
              <Column align="center">
                <Text style={footerText}>
                  www.docusign.com | docusign@docusign.com | +1.877.720.2040
                </Text>
                <Text style={footerText}>
                  221 Main Street, Suite 1550 San Francisco, CA 94105
                </Text>
              </Column>
            </Row>
            <Row>
              <Column align="center">
                <Link href="#" style={footerLink}>Unsubscribe</Link>
                <Text style={footerDivider}>|</Text>
                <Link href="#" style={footerLink}>Manage Preferences</Link>
                <Text style={footerDivider}>|</Text>
                <Link href="#" style={footerLink}>Privacy Policy</Link>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
      </Tailwind>
    </Html>
  );
  
  export default EnjoyCutOff;
  
  const main = {
    backgroundColor: "#f8fafc",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "580px",
    backgroundColor: "#ffffff",

  };
  
  const logoSection = {
    padding: "0 30px",
  };

  const topRightText = {
    fontSize: "12px",
    color: "#000",
    lineHeight: "16px",
  };
  
  const saveText = {
    marginLeft: "4px",
    fontWeight: "bold",
  };
  
  const heroSection = {
    backgroundColor: "#f3f5fc",
    padding: "40px 0",
    textAlign: "center" as const,
  };
  
  const heading = {
    fontSize: "36px",
    lineHeight: "1.3",
    fontWeight: "700",
    color: "#000",
  };
  
  const button = {
    backgroundColor: "#0f5fff",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "12px 0",
    width: "220px",
    margin: "20px auto 0",
  };
  
  const offerSection = {
    padding: "40px 30px",
    textAlign: "center" as const,
  };
  
  const offerText = {
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#000",
    marginBottom: "24px",
  };
  
  const termsSection = {
    padding: "0 30px",
  };
  
  const termsText = {
    fontSize: "12px",
    lineHeight: "1.5",
    color: "#666",
  };
  
  const divider = {
    borderTop: "1px solid #e6e6e6",
    margin: "30px 0",
  };
  
  const footerSection = {
    padding: "0 30px",
  };
  
  const socialLink = {
    display: "inline-block",
    marginRight: "8px",
  };
  
  const socialIcon = {
    display: "block",
  };
  
  const footerText = {
    fontSize: "12px",
    lineHeight: "1.5",
    color: "#666",
    marginBottom: "4px",
  };
  
  const footerLink = {
    color: "#666",
    textDecoration: "underline",
  };
  
  const footerDivider = {
    margin: "0 4px",
    color: "#666",
  };