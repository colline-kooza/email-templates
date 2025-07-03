import {
    Body,
    Container,
    Column,
    Head,
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
  
  export const AdidasReceiptEmail = () => (
    <Html>
      <Head />
      <Preview>Adidas Receipt</Preview>
  <Tailwind>
 
  <Body style={main}>
        <Container style={container}>
          <Section style={topBanner}>
            <Row>
              <Column>
                <Link href="https://www.adidas.com">
                  <Img
                    src={`https://utfs.io/f/a8e75806-abd0-4d93-9d08-d6c69a9e03b1-bzui4k.png`}
                    width="100"
                    height="50"
                    alt="Adidas Logo"
                  />
                </Link>
              </Column>
              <Column align="right">
                <Text style={topLinks}>
                  <Link href="#" style={link}>MEN</Link>
                  <Link href="#" style={link}>WOMEN</Link>
                  <Link href="#" style={link}>KIDS</Link>
                  <Link href="#" style={link}>STORE FINDER</Link>
                </Text>
              </Column>
            </Row>
          </Section>
  
          <Section style={mainContent}>
            <Text style={heading}>GAME ON</Text>
            
            <Row>
              <Column>
                <Text style={storeInfo}>
                  6156 - adidas Outlet Store Sunrise<br />
                  12801 West Sunrise Boulevard<br />
                  Sunrise, Florida 33323 US<br />
                  +1 (954) 846-7097
                </Text>
              </Column>
              <Column>
                <Text style={receiptInfo}>
                  Date: 8/31/22 11:57 AM<br />
                  Receipt Expires: 9/30/22<br />
                  Reg: 4<br />
                  Trans: 34427<br />
                  Cashier: 0074140
                </Text>
              </Column>
            </Row>
  
            <Text style={thankYouText}>
              Thank you for shopping with adidas.<br />
              Please see below for a copy of your digital receipt.
            </Text>
  
            <Text style={sectionHeading}>PURCHASE SUMMARY</Text>

            <Section style={itemsTable}>
              <Row style={itemRow}>
                <Column>
                  <Text style={itemName}>CLUB LOGO TEE EASGRN, .S</Text>
                  <Text style={itemCode}>Article No: HR7889</Text>
                </Column>
                <Column align="right">
                  <Text style={itemPrice}>Selling Price: $14.00</Text>
                  <Text style={itemDiscount}>50% Off - 14.00</Text>
                  <Text style={itemReward}>Level 2 Reward - 7.00</Text>
                </Column>
              </Row>
              <Row style={itemRow}>
                <Column>
                  <Text style={itemName}>TREFOIL T-SHIRT SHANAV/ ,S</Text>
                  <Text style={itemCode}>Article No: HR7889</Text>
                </Column>
                <Column align="right">
                  <Text style={itemPrice}>Selling Price: $14.00</Text>
                  <Text style={itemDiscount}>50% Off - 14.00</Text>
                  <Text style={itemReward}>Level 2 Reward - 7.00</Text>
                </Column>
              </Row>
              <Row style={itemRow}>
                <Column>
                  <Text style={itemName}>4.0 LOGO HOODIE SHANAV/ ,M</Text>
                  <Text style={itemCode}>Article No: HR7889</Text>
                </Column>
                <Column align="right">
                  <Text style={itemPrice}>Selling Price: $14.00</Text>
                  <Text style={itemDiscount}>50% Off - 14.00</Text>
                  <Text style={itemReward}>Level 2 Reward - 7.00</Text>
                </Column>
              </Row>
              <Row style={itemRow}>
                <Column>
                  <Text style={itemName}>TREFOIL T-SHIRT BLACK/W ,S</Text>
                  <Text style={itemCode}>Article No: HR7889</Text>
                </Column>
                <Column align="right">
                  <Text style={itemPrice}>Selling Price: $14.00</Text>
                  <Text style={itemDiscount}>50% Off - 14.00</Text>
                  <Text style={itemReward}>Level 2 Reward - 7.00</Text>
                </Column>
              </Row>
              <Row style={itemRow}>
                <Column>
                  <Text style={itemName}>SUPERSTAR FTWWHT/ ,8</Text>
                  <Text style={itemCode}>Article No: HR7889</Text>
                </Column>
                <Column align="right">
                  <Text style={itemPrice}>Selling Price: $14.00</Text>
                  <Text style={itemDiscount}>50% Off - 14.00</Text>
                  <Text style={itemReward}>Level 2 Reward - 7.00</Text>
                </Column>
              </Row>
            </Section>
  
            <Section style={orderSummary}>
              <Text style={sectionHeading}>ORDER SUMMARY</Text>
              <Row>
                <Column><Text className="text-lg !mb-0">Products:</Text></Column>
                <Column align="right"><Text className="text-lg !mt-0">$102</Text></Column>
              </Row>
              <Row>
                <Column><Text className="text-lg !mt-0 !mb-0">Discount:</Text></Column>
                <Column align="right"><Text className="text-lg !mt-0">-$153.00</Text></Column>
              </Row>
              <Row>
                <Column><Text className="text-lg !mt-0">Tax:</Text></Column>
                <Column align="right"><Text className="text-lg !mt-0"> $7.14</Text></Column>
              </Row>
              <Hr style={totalSeparator} />
              <Row>
                <Column><Text className="text-lg !mt-0" style={totalText}>Total:</Text></Column>
                <Column align="right"><Text className="text-lg !mt-0" style={totalText}>$109.14</Text></Column>
              </Row>
              <Text style={taxNote}>(inclusive of all taxes)</Text>
            </Section>
  
            <Section>
              <Text style={sectionHeading}>PAYMENT DETAILS</Text>
              <Text className="text-base">
                Tender Type: MAESTRO<br />
                Ref #: 344274<br />
                CT #: ************3420<br />
                AMOUNT: $109.14
              </Text>
            </Section>
  
            <Section>
              <Text style={feedbackHeading}>GIVE US YOUR FEEDBACK</Text>
              <Text style={feedbackText}>
                How did we do? We'd love to hear about your experience. Visit www.adidas.com/feedback
              </Text>
            </Section>
          </Section>
          <Section style={joinAdiClub}>
            <Row>
              <Column>
                <Img
                  src="https://utfs.io/f/17b26dd9-cbc5-4da7-a61b-223d9b3de703-g7fbgf.jpg"
                  width="660"
                  height="330"
                  alt="People wearing Adidas clothing"
                  className="object-cover"
                />
              </Column>
            </Row>
            <Row>
              <Column>
                <Text style={joinHeading}>JOIN ADICLUB</Text>
                <Text style={joinText}>
                  Not a member of the adiClub? Join today to track your purchase history,
                  get personalized content and start earning points to unlock exclusive
                  rewards as you level up. It's easy. It's free. It's time to create.
                </Text>
                <Link className="!mt-2 !mb-4" href="https://www.adidas.com/us/adiclub" style={joinButton}>
                  JOIN THE CLUB →
                </Link>
                <Text style={memberSignIn}>
                  <Link href="https://www.adidas.com/us/account-login" style={signInLink}>
                    ALREADY A MEMBER? SIGN IN
                  </Link>
                </Text>
              </Column>
            </Row>
          </Section>

          <Hr style={divider} />

          <Section style={footer}>
            <Text style={footerTagline}>
              STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949
            </Text>
            <Text style={footerLinks}>
              <Link href="#" style={footerLink}>My Account</Link>
              {' | '}
              <Link href="#" style={footerLink}>Privacy Statement</Link>
              {' | '}
              <Link href="#" style={footerLink}>Support</Link>
            </Text>
            <Text style={footerNote}>
              *Selection and availability may vary by store.
            </Text>
            <Text className="mx-8" style={copyright}>
              © 2024 adidas America, Inc. adidas and the 3-Stripes mark are registered trademarks of adidas
              America 5055 N. Greeley Avenue Portland, OR 97217
            </Text>
          </Section>
        </Container>
      </Body> 
  </Tailwind>
    </Html>
  );
  
  export default AdidasReceiptEmail;
  
  const main = {
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    backgroundColor: "#f8fafc",
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "660px",
    backgroundColor: "#ffff",

  };
  
  const topBanner = {
    backgroundColor: "#000000",
    padding: "20px",
  };
  
  const topLinks = {
    color: "#ffffff",
    fontSize: "12px",
  };
  
  const link = {
    color: "#ffffff",
    textDecoration: "none",
    marginLeft: "10px",
  };
  
  const mainContent = {
    padding: "0 20px",
  };
  
  const heading = {
    fontSize: "32px",
    fontWeight: "bold",
    textAlign: "center" as const,
    margin: "30px 0",
  };
  
  const storeInfo = {
    fontSize: "16px",
    lineHeight: "20px",
  };
  
  const receiptInfo = {
    fontSize: "16px",
    lineHeight: "20px",
    textAlign: "right" as const,
  };
  
  const thankYouText = {
    fontSize: "14px",
    lineHeight: "20px",
    margin: "30px 0",
  };
  
  const sectionHeading = {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "30px 0 15px",
  };
  
  const itemsTable = {
    width: "100%",
  };
  
  const itemRow = {
    borderBottom: "1px solid #e5e5e5",
    padding: "4px 0",
  };
  
  const itemName = {
    fontSize: "17px",
    fontWeight: "bold",
  };
  
  const itemCode = {
    fontSize: "15px",
    color: "#666666",
  };
  
  const itemPrice = {
    fontSize: "17px",
    marginBottom:"0px"

  };
  
  const itemDiscount = {
    fontSize: "16px",
    color: "#666666",
    marginTop:"0px",
    marginBottom:"0px"

  };
  
  const itemReward = {
    fontSize: "14px",
    color: "#666666",
    marginTop:"0px",
    marginBottom:"0px"
  };
  
  const orderSummary = {
    backgroundColor: "#f7f7f7",
    padding: "20px",
    marginTop: "30px",
  };
  
  const totalSeparator = {
    borderColor: "#e5e5e5",
    margin: "10px 0",
  };
  
  const totalText = {
    fontWeight: "bold",
  };
  
  const taxNote = {
    fontSize: "16px",
    color: "#666666",
    marginTop: "0px",
  };
  
  const feedbackHeading = {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "30px 0 15px",
    textAlign: "center" as const,
  };
  
  const feedbackText = {
    fontSize: "14px",
    textAlign: "center" as const,
  };
  const joinAdiClub = {
    backgroundColor: "#ffffff",
    padding: "20px",
  };
  
  const joinHeading = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  };
  
  const joinText = {
    fontSize: "16px",
    lineHeight: "1.5",
    marginBottom: "35px",
  };
  
  const joinButton = {
    backgroundColor: "#000000",
    color: "#ffffff",
    padding: "12px 30px",
    textDecoration: "none",
    fontWeight: "bold",
  };
  
  const memberSignIn = {
    marginTop: "30px",
    fontSize: "14px",
  };
  
  const signInLink = {
    color: "#000000",
    textDecoration: "underline",
  };
  
  const divider = {
    borderColor: "#e5e5e5",
    margin: "20px 0",
  };
  
  const footer = {
    textAlign: "center" as const,
  };
  
  const footerTagline = {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
  };
  
  const footerLinks = {
    fontSize: "14px",
    marginBottom: "10px",
  };
  
  const footerLink = {
    color: "#000000",
    textDecoration: "none",
  };
  
  const footerNote = {
    fontSize: "12px",
    color: "#666666",
    marginBottom: "10px",
  };
  
  const copyright = {
    fontSize: "12px",
    color: "#666666",
  };