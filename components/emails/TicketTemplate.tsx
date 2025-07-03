import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Text,
    Img,
    Font,
    Tailwind,
  } from "@react-email/components";
 
  
  export const TicketTemplate = () => {
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
        <Preview>Golden Ball Lucky Draw</Preview>
        <Body style={{ fontFamily: "DM Sans", margin: 0, padding: 0, background: "#f0f0d2" }}>
          <Tailwind>
            <Container className="min-h-screen bg-[#160016] overflow-hidden">
              {/* Header */}
              
             <div className="w-full h-[90vh] bg-center " style={{
             backgroundImage: 'url("https://utfs.io/f/8a5b27bf-1368-47f8-b43a-ecbf99cf022c-qrz0r3.png")',
             backgroundSize:"cover",
             borderBottom: "1px solid #2f2f30"
           }}>
            <div className="w-full text-center pt-2 pb-2">
                <Img src="https://ci3.googleusercontent.com/meips/ADKq_NaAwfJcKqQcPtPWTe8DQ2nhqhrtBmWcqDCdYIkeslh7RUTvOokmwX1LUdOC6pEHmsBw1N8Qr1sLuQ-3l_xoLMYTC-EtIX8mjemDyBNanKWaRAg_Pg=s0-d-e1-ft#https://cdn.templates.unlayer.com/assets/1611652286973-ccc.png" alt="Logo" className="mx-auto w-[30px] h-[30px]" />
              </div>
          <div className="mx-auto mt-10">
          <Heading className="text-5xl font-bold text-[#ffffff] text-center">GOLDEN BALL</Heading>
          </div>

         {/* Golden Ball Image */}
           <div>
                <div className="w-full text-center mt-10">
                  <Img src="https://utfs.io/f/92a368df-7725-43ff-9cca-6d8e7dc38ea1-3wac8h.png" alt="Golden Ball" className="w-[200px] h-[200px] object-contain mx-auto" />
                </div>
              </div>
             </div>
              
              {/* Prize Details */}
              <div>
                <div className="w-full text-center mt-8">
                  <Text className="text-xs font-medium text-[#ffff]">Purchase the Golden Ticket to get in the draw to win</Text>
                  <Heading className="text-5xl font-bold text-[#ffff] mt-4">$3800</Heading>
                  <Text className="text-sm text-[#ced4d9] mt-4 px-8">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonu my nibh euismod tin cidunt ut laoreet dolore magna ali quam erat use volutpat ut wisi enim ad minim veniam.
                  </Text>
                </div>
              </div>
  
              {/* Tickets Image */}
              <div>
                <div className="w-full mt-8">
                  <Img src="https://cdn.templates.unlayer.com/assets/1674551357932-TICKER2.png" alt="Golden Tickets" className="w-[250px] h-[250px] object-contain mx-auto" />
                </div>
              </div>
  
              {/* Buy Now Button */}
              <div>
                <div className="w-full text-center mt-8">
                  <Button
                    className="text-xs font-bold rounded-sm"
                    href="#"
                    style={{
                      backgroundColor: "#e9aa01",
                      color: "#000",
                      padding: "6px 35px",
                      textDecoration: "none",
                    }}
                  >
                    Buy Now
                  </Button>
                </div>
              </div>

              <div style={{  borderTop: "1px solid #2f2f30"}} className="w-full bg-[#160016] py-3 text-white text-center mt-8">
                <div className="!mb-0">
                  <div className="mx-auto mt-2 !mb-0">
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                      alt="Facebook"
                      style={iconStyle}
                    />
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                      alt="Instagram"
                      style={iconStyle}
                    />
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                      alt="Pinterest"
                      style={iconStyle}
                    />
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                      alt="YouTube"
                      style={iconStyle}
                    />
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/pinterest.png"
                      alt="YouTube"
                      style={iconStyle}
                    />
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/youtube.png"
                      alt="YouTube"
                      style={iconStyle}
                    />
                  </div>
                </div>
                <div>
                <div className="mb-4  mt-4 ">
                  <p className="!mt-0 !mb-0 text-xs text-white text-center">
                  customer.success@desishub.com
                  </p>
                  <p className="!mt-0 !mb-0 text-xs text-white text-center">+12 458 4658</p>
                </div>
                </div>
               
                <div className="w-full py-4 bg-black mx-auto !mb-0">
                <p className="text-[#ffffff] text-xs text-center mx-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. </p>
                </div>
              </div>
            </Container>
          </Tailwind>
        </Body>
      </Html>
    );
  };
  
  export default TicketTemplate;
  const iconStyle = {
    width: "28px",
    height: "28px",
    borderRadius: "2%",
    marginRight: "4px",
  };