import {
    Body,
    Container,
    Head,
    Html,
    Preview,
    Text,
    Img,
    Tailwind,
    Font,
    Button,
  } from "@react-email/components";
 
  
  export const DeliveryNote = () => {
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
        <Preview>Your Delivery Note</Preview>
        <Body style={{
         backgroundColor: "#f1f1f1",
         fontFamily: "DM Sans, Verdana, sans-serif",
         margin: 0,
         padding: "20px 0",
          boxSizing: "border-box",
         }}>
          <Tailwind>
            <Container style={containerStyle}>
              <div style={{
                 backgroundColor: "#2e2e4d",
                 padding: "20px 0",
                 textAlign: "center",
                 }}>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1637605200434-gfh.png"
                  alt="Logo"
                  style={logoStyle}
                />
              </div>
  
              <Text className="text-2xl font-bold" style={{
                 color: "#3f4481",
                 textAlign: "center",
                 margin: "20px 0",
               }}>Delivery Note</Text>
  
              <img
                src="https://cdn.templates.unlayer.com/assets/1639591370681-1.jpeg"
                style={{
                    width: "100%",
                    maxHeight: "300px",
                    objectFit: "contain",
                  }}
              />
  
              <div className="w-full" style={detailsContainerStyle}>
                <Text className="text-sm font-semibold" style={shippingDetailsStyle}>Shipping Details:</Text>
  
                <Text className="text-sm" style={detailTextStyle}>
                  Order Number: <span>02088</span>
                </Text>
                <Text className="mt-4" style={detailTextStyle}>
                  Delivered-to: <strong className="text-black">Wilbert Keffort</strong>
                </Text>
                <Text style={detailTextStyle}>
                  Email: <strong className="text-black">wilbert@zmail.com</strong>
                </Text>
                <Text style={detailTextStyle}>
                  Phone: <strong className="text-black">101 617 4444</strong>
                </Text>
                <Text style={detailTextStyle}>
                  Address: <strong className="text-black">99 El ABCD San Francisco, CA, United States</strong>
                </Text>
               <div className="mt-3">
               <Text className="!mb-0 text-xs" style={detailTextStyle}>
                  Date Dispatched: <span>June 13, 20XX</span>
                </Text>
                <Text className="!mt-0 text-xs" style={detailTextStyle}>
                  Expected Delivery Date: <span>June 15, 20XX</span>
                </Text>
               </div>
              </div>
  
              <div className="!mt-0">
                <table className="w-full border-collapse">
                  <thead className="bg-[#6a71a8] text-white text-left">
                    <tr >
                      <th  className="p-3 text-xs ">Description</th>
                      <th  className="p-2 text-xs">Quantity</th>
                      <th  className="p-3 text-xs">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-[#f4f8fb]">
                      <td style={{ borderBottom: "1px solid #e1e1e1" }}  className="p-3 border-t text-xs text-[#6a77ab]">1x Lorem ipsum dolor</td>
                      <td style={{ borderBottom: "1px solid #e1e1e1" }}  className="p-3 border-t text-xs text-[#6a77ab]">5</td>
                      <td style={{ borderBottom: "1px solid #e1e1e1" }}  className="p-3 border-t text-xs text-[#6a77ab]">$50</td>
                    </tr>
                    <tr >
                      <td style={{ borderBottom: "1px solid #e1e1e1" }}  className="p-3 border-t text-xs text-[#6a77ab]">2x Sed ipsum dolor</td>
                      <td style={{ borderBottom: "1px solid #e1e1e1" }}  className="p-3 border-t text-xs text-[#6a77ab]">14</td>
                      <td style={{ borderBottom: "1px solid #e1e1e1" }}  className="p-3 border-t text-xs text-[#6a77ab]">$30</td>
                    </tr>
                    <tr className="bg-[#f4f8fb]">
                      <td style={{ borderBottom: "1px solid #e1e1e1" }}  className="p-3 border-t text-xs text-[#6a77ab]">2x Sed ipsum dolor</td>
                      <td style={{ borderBottom: "1px solid #e1e1e1" }}  className="p-3 border-t text-xs text-[#6a77ab]">8</td>
                      <td style={{ borderBottom: "1px solid #e1e1e1" }}  className="p-3 border-t text-xs text-[#6a77ab]">$30</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td style={{ borderBottom: "1px solid #e1e1e1" }}  className="p-3 border-t font-bold text-sm text-[#6a71a8]">TOTAL + Vat 2%</td>
                      <td style={{ borderBottom: "1px solid #e1e1e1" }}  className="p-2 border-t font-bold text-sm text-[#6a71a8]">USD 312
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className="py-10 bg-[#e0f4ff] px-4">
                <h2 className="font-bold text-lg">Terms & Conditions:</h2>
                <ul>
                  <li className="text-[#1e293b] text-[14px]">
                  The buyer agrees to pay the additional fee of the CA VAT of 4%.
                  </li>
                  <li className="text-[#1e293b] text-[14px] mt-2">The company ensures that all goods have an expiration date of more than 2 weeks from the date received. 
                  </li>
                </ul>
                <div className="text-center pt-4">
                <Button
                className="text-xs rounded-sm font-bold"
                  href="#"
                  style={buttonStyle}
                >
                Click Below to Pay & Accept 
                </Button>
                </div>
              </div>
                  {/* Footer */}
                  <div className="w-full bg-[#26264f] py-3 text-white text-center !mt-0">
                <p className="text-center text-white text-xl pb-5 pt-2">Thank You for being with Us!</p>
                <div className="mx-auto">
                  <img src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png" alt="Facebook" style={iconStyle} />
                  <img src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png" alt="Instagram" style={iconStyle} />
                  <img src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png" alt="Pinterest" style={iconStyle} />
                  <img src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png" alt="YouTube" style={iconStyle} />
                </div>
                <Text className="text-xs mt-2">Home   |   Page   |   About   |   Contact us  </Text>
                <Text className="text-xs mx-[2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</Text>
                <Text className="text-xs mt-2">Copyright © YourCompany | All Rights Reserved</Text>
              </div>
            </Container>
          </Tailwind>
        </Body>
      </Html>
    );
  };
  
  export default DeliveryNote;
  
  const bodyStyle = {
    backgroundColor: "#f1f1f1",
    fontFamily: "DM Sans, Verdana, sans-serif",
    margin: 0,
    padding: "20px 0",
    boxSizing: "border-box",
  };
  
  const iconStyle = {
    width: "28px",
    height: "28px",
    borderRadius: "0%",
    marginRight: "4px",
  };
  const containerStyle = {
    backgroundColor: "#ffffff",
    maxWidth: "600px",
    margin: "0 auto",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  };
  
  const headerStyle = {
    backgroundColor: "#2e2e4d",
    padding: "20px 0",
    textAlign: "center",
  };
  const buttonStyle = {
    backgroundColor: "#6a71a8",
    color: "#ffffff",
    padding: "15px 45px",
    textDecoration: "none",
    borderRadius: "2px",
    // fontSize: "16px",
    display: "inline-block",
  };
  const logoStyle = {
    maxHeight: "20px",
    margin: "0 auto",
  };
  
  const deliveryNoteStyle = {
    color: "#3f4481",
    textAlign: "center",
    margin: "20px 0",
  };
  

  const detailsContainerStyle = {
    backgroundColor: "#e0f4ff",
    padding: "20px",
    
  };
  
  const shippingDetailsStyle = {
    color: "#2e2e4d",
    marginBottom: "10px",
  };
  
  const detailTextStyle = {
    // fontSize: "16px",
    color: "#2e2e4d",
    margin: "4px 0",
  };
  
  const tableContainerStyle = {
    backgroundColor: "#f4f4f4",
    padding: "10px",
  };
  
  const tableHeaderStyle = {
    backgroundColor: "#2e2e4d",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    color: "#ffffff",
  };
  
  const tableHeaderTextStyle = {
    flex: 1,
    textAlign: "center",
  };
  
  const tableRowStyle = {
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderBottom: "1px solid #dddddd",
  };
  
  const tableCellStyle = {
    flex: 1,
    textAlign: "center",
  };
  