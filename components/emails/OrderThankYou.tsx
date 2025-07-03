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
    Font,
    Tailwind,
  } from "@react-email/components";
 
  
  export const OrderThankYou = () => {
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
        <Preview>Thank you for your order</Preview>
        <Body style={{ fontFamily: "DM Sans", margin: 0, padding: 0, background: "#f5f5f5" }}>
          <Tailwind>
            <Container className="min-h-screen bg-[#060923] overflow-hidden">
              {/* Header */}
              <div className="w-full bg-[#060923] text-center py-7">
                <Heading className="text-[#f1c40f] text-3xl font-bold !mb-2">THANK YOU</Heading>
                <Text className="text-gray-200 text-sm !mt-0 font-bold">FOR YOUR ORDER</Text>
                <Text className="text-white text-xs mt-2 mx-[5rem] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </Text>
              </div>
  
              {/* Status Section */}
              <div style={{ border: "1px solid #3e4054" }} className="flex justify-between py-4 px-6 bg-[#060923] text-center">
                {/* <single></single> */}
                <div style={{ borderRight: "1px solid #3e4054" }} className=" w-1/3 ">
                 <div className="w-full h-[50px]">
                 <Img src="https://cdn.templates.unlayer.com/assets/1650583962020-tick2_1.png" alt="Ordered" className="!mb-0 object-contain w-full h-full"/>
                 </div>
                  <Text className="text-xs text-white !mt-2">Ordered on <br/> Apr 30</Text>
                </div>
                <div className=" w-1/3 ">
                 <div className="w-full h-[50px]">
                 <Img src="https://cdn.templates.unlayer.com/assets/1650583962020-tick2_1.png" alt="Ordered" className="!mb-0 object-contain w-full h-full"/>
                 </div>
                  
                  <Text className="text-xs text-white !mt-2">Ready to <br/> ship</Text>
                </div>
                <div className=" w-1/3 ">
                 <div className="w-full h-[50px]">
                 <Img src="https://cdn.templates.unlayer.com/assets/1650583962020-tick2_1.png" alt="Ordered" className="!mb-0 object-contain w-full h-full"/>
                 </div>
                  <Text className="text-xs text-white !mt-1">Delivery <br/> May 10-12</Text>
                </div>
              </div>
  
              {/* Order Details */}
              <div style={{ border: "1px solid #3e4054" }} className="text-center py-8 px-6 bg-[#060923]">
                <Heading className="text-lg font-bold !mb-1 text-white">ORDER #3520178</Heading>
                <Text className="text-sm mb-4 text-gray-300 !mt-0">28/04/2023</Text>
              </div>
  
              {/* Product Details */}
              <div className="flex justify-between py-4 px-6 bg-[#060923]">
                <div>
                <div  style={{ borderRight: "1px solid #3e4054" }} className="mx-auto w-1/2 pr-8">
                 <div className="w-full h-[20vh] !mt-0 !mb-0">
                 <Img src="https://cdn.templates.unlayer.com/assets/1650578523701-Laptop.png" alt="MacBook Air MGN63" className="w-full h-full object-contain !mt-0 !mb-0"/>
                 </div>
                  <Text className="text-xs text-center font-bold text-white !mt-3 !mb-0">MacBook Air MGN63</Text>
                  <Text className="text-sm text-white !mt-0 !mb-0 text-center">$1086.00</Text>
                </div>
                </div>
               
                <div className="w-1/2 pr-8">
                 <div className="w-full h-[20vh] !mt-0 !mb-0  ">
                 <Img src="https://cdn.templates.unlayer.com/assets/1650578862024-Headphone.png" alt="MacBook Air MGN63" className="w-full h-full object-contain !mt-0 !mb-0 mx-auto"/>
                 </div>
                  <Text className="text-xs font-bold text-white !mt-3 !mb-0 text-center">ZX110 Headphone</Text>
                  <Text className="text-sm text-white !mt-0 !mb-0 text-center">$ 280.00</Text>
                </div>
            
              </div>
  
              {/* Billing and Shipping Info */}
              <div  className="flex justify-between py-1 px-6 bg-[#ffffff]">
                <div style={{ borderRight: "1px solid #c1c1c1" }} className="w-1/2 text-center ">
                  <Text className="text-xs font-bold">Total (2 items)</Text>
                </div>
                <div className="w-1/2 text-center">
                  <Text className="text-xs font-bold">$ 1386.00</Text>
                </div>
              </div>
              <div className="flex justify-between py-2 px-6  bg-[#f1c40f]">
                <div style={{ borderRight: "1px solid #c1c1c1" }} className="w-1/2 text-center ">
                  <Text className=" text-black py-2 px-6 text-sm font-bold mb-2">Billing Info</Text>
                </div>
                <div className="w-1/2 text-center">
                  <Text className=" text-black py-2 px-6 text-sm font-bold mb-2">Shipping Address</Text>
                </div>
              </div>
              <div  className="flex justify-between py-1 px-6 bg-[#ffffff]">
                <div style={{ borderRight: "1px solid #c1c1c1" }} className="w-1/2 text-center ">
                  <Text className="text-xs">Steve Smith <br/> 2261 Market San Francisco</Text>
                </div>
                <div className="w-1/2 text-center">
                  <Text className="text-xs">Steve Smith <br/> 2261 Market San Francisco</Text>
                </div>
              </div>
  
              {/* Estimate Delivery */}
              <div className="text-center py-8 px-6 bg-[#060923] text-white">
                <Text className="text-sm mb-4">
                  Your estimate delivery date is Thu Mar. 05 - Tue Mar. 10. When your order ships, you will receive a 'Shipping Notification' email. If you have any question or need further information about returns, you can
                </Text>
                <Link href="#" className="text-gray-200 text-sm font-bold">view our return policy</Link>
              </div>
  
              {/* Footer */}
              <div className="w-full bg-[#ffffff] text-center py-6">
                <div className="mx-auto">
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png" alt="LinkedIn" className="w-6 h-6 " /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png" alt="Twitter" className="w-6 h-6 ml-3" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png" alt="Skype" className="w-6 h-6 ml-3" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png" alt="Instagram" className="w-6 h-6 ml-3" /></a>
                </div>
  
                <Text className="text-xs text-gray-800 mb-1">
                  If you have questions regarding your Data, please visit our Privacy Policy
                </Text>
                <Text className="text-xs text-gray-800 mb-1">Want to change how you receive these emails?</Text>
                <div className="w-full bg-[#ffffff] py-2">
                  <Text className="text-xs text-black font-normal">
                    © 20XX Company. All Rights Reserved.
                  </Text>
                </div>
              </div>
            </Container>
          </Tailwind>
        </Body>
      </Html>
    );
  };
  
  export default OrderThankYou;
  