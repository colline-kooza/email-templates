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
 
  
  export const OtpVerification = () => {
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
        <Preview>Here is your One Time Password</Preview>
        <Body style={{ fontFamily: "DM Sans", margin: 0, padding: 0, background: "#f5f5f5" }}>
          <Tailwind>
            <Container className="min-h-screen bg-white overflow-hidden">
              <div className="w-full bg-[#038cfe] text-center py-4">
                <Img src="https://cdn.templates.unlayer.com/assets/1636373927075-KKK.png" alt="Logo" className="w-32 mx-auto" />
              </div>
  
              <div className="text-center py-8 px-6 bg-cover bg-center h-[80%]" style={{ backgroundImage: "url('https://utfs.io/f/7af30c83-3a48-4828-ba69-29bd3bdc845f-btq4u1.png')" }}>
                <div className="w-full h-[250px]">
                <Img src="https://cdn.templates.unlayer.com/assets/1636374086763-hero.png" alt="OTP Image" className="w-full h-full object-contain" />
                </div>
                <Heading className="text-2xl font-bold !mb-1 text-[#141414]">Here Is Your One Time Password</Heading>
                <Text className="text-[#a7a5a5] !mt-0 mb-4 text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing.
                </Text>
                <div className="text-4xl font-bold mx-auto gap-2 mb-4">
                  <span className="underline text-[#3b4d63] text-4xl">2</span>
                  <span className="underline text-[#3b4d63] text-4xl ml-2">3</span>
                  <span className="underline text-[#3b4d63] text-4xl ml-2">4</span>
                  <span className="underline text-[#3b4d63] text-4xl ml-2">5</span>
                </div>
                <Text className="text-blue-600 font-semibold text-xs">Valid For 15 minutes Only!</Text>
              </div>
  
              {/* Footer */}
              <div className="w-full bg-[#000000] text-white text-center pt-4">
              <div style={{ borderBottom: "1px solid #1e293b" }} className="w-full bg-[#000] py-2">
                  <p className="text-xs text-gray-300 font-normal text-center tracking-widest">
                  FAQs    |     Terms & Condition     |    Contact Us
                  </p>
                </div>
                <div className="mx-auto mb-4 mt-4">
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/twitter.png" alt="LinkedIn" className="w-6 h-6" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/linkedin.png" alt="Twitter" className="w-6 h-6" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/instagram.png" alt="Skype" className="w-6 h-6" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/meetup.png" alt="Instagram" className="w-6 h-6" /></a>
                </div>
                <div style={{ borderTop: "1px solid #1e293b" }} className="w-full bg-[#000] py-2">
                  <p className="text-xs text-gray-300 font-normal text-center mx-8">
                 If you have questions regarding your Data, please visit our Privacy Policy
                  </p>
                </div>
              </div>
            </Container>
          </Tailwind>
        </Body>
      </Html>
    );
  };
  
  export default OtpVerification;
  