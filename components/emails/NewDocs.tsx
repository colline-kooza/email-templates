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
 
  
  export const NewDocs = () => {
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
        <Preview>Welcome to Our Service!</Preview>
        <Body style={{ fontFamily: "DM Sans", margin: 0, padding: 0, background: "#f6f4e9" }}>
          <Tailwind>
           
            <Container className="bg-white mx-auto p-6 overflow-hidden">
                 {/* Header */}
            <div className="w-full text-center py-1">
              <div className="w-full h-[50px] mx-auto px-1">
                <Img
                style={{float:"left"}}
                  src="https://cdn.templates.unlayer.com/assets/1661850643332-logo.png"
                  alt="Logo"
                  className="w-[60px] h-full object-contain "
                />
                <Text style={{float:"right"}} className="text-[#000000] text-xs text-right w-[60%] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing 
                </Text>
              </div>
            </div>
  
              {/* Welcome Section */}
              <div className="text-center py-5">
               <div className="w-full h-[180px]">
               <Img
                  src="https://img.freepik.com/premium-photo/quotglobal-friends-celebrating-graduation-togetherquot_1168612-154217.jpg?ga=GA1.1.123314603.1706863307&semt=ais_user"
                  alt="Welcome Image"
                  className="mx-auto w-full h-full object-cover"
                />
               </div>
                <Heading className="text-2xl font-bold mt-4 mx-[.3rem] text-start">
                  A Warm Welcome to our Newest Team Member!
                </Heading>
              </div>
  
              {/* Introductory Text */}
              <div className="text-left py-1">
                <Text className="text-black text-base font-bold mb-2">Dear Smith,</Text>
                <Text className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </Text>
                <Text className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </Text>
                <Text className="text-gray-700 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </Text>
                <Button
                  className="bg-red-500 rounded-sm text-xs text-white py-2 px-4  font-bold mt-4"
                  href="#"
                  style={{ textDecoration: "none" }}
                >
                  Go to my Boarding
                </Button>
              </div>
  
              {/* Additional Section */}
              <div style={{ borderBottom: "1px solid #e1e1e1" }} className="text-center py-5">
                <Heading className="text-lg text-[#000018] text-start font-bold">
                  The concept is simple: Unlayer helps you get organized and get more done
                </Heading>
                <div className="w-full h-[50vh]">
                 <img src="https://cdn.templates.unlayer.com/assets/1661851022897-play.png" alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="text-left py-1">
                <Heading className="text-lg text-[#000018] text-start font-bold">
                  The concept is simple: Unlayer helps you get organized and get more done
                </Heading>
                <Text className="text-gray-800 mb-4 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
                <Text className="text-gray-800 mb-4 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
                <Text className="text-gray-800 mb-2 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              
              </div>
              </div>
  
                {/* Footer */}
               <div className="mt-10 text-center text-gray-500 text-xs ">
               <div className="mx-auto">
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle/youtube.png" alt="LinkedIn" className="w-6 h-6" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png" alt="Twitter" className="w-6 h-6 ml-2" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle/meetup.png" alt="Skype" className="w-6 h-6 ml-2" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle/facebook.png" alt="Instagram" className="w-6 h-6 ml-2" /></a>
                </div>
                <div className="!mt-2 !mb-0">
                  <Text className="inline-block mx-2 text-gray-500 text-xs">Support</Text> |
                  <Text className="inline-block mx-2 text-gray-500 text-xs">Return Policy</Text> |
                  <Text className="inline-block mx-2 text-gray-500 text-xs">About us</Text>
                </div>
              </div>
  
              <div className="!mt-2 text-center text-gray-500 text-xs">
                <Text className="text-xs !mt-0 !mb-0">Copyright © 2017 Your Company. All rights reserved. <br/>  You received this email because you signed up for My Company Inc.</Text>
              </div>
  
              <div className="mt-5 text-center text-gray-500 text-xs">
                <Text className="!mt-2 text-center text-gray-500 text-xs">
                
                </Text>
                <Text className="mt-2">
                  <a href="#" className="text-gray-500 text-xs">Unsubscribe Now</a>
                </Text>
              </div>
            </Container>
          </Tailwind>
        </Body>
      </Html>
    );
  };
  
  export default NewDocs;
  