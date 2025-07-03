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
  
  export const AppUpgrade = () => {
    return (
      <Html>
        <Head>
          <Font
            fontFamily="Roboto"
            fallbackFontFamily="Verdana"
            webFont={{
              url: "https://fonts.gstatic.com/s/roboto/v30/KFOiCnqEu92Fr1Mu51QrEz0dL_nz.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="initial"
          />
        </Head>
        <Preview>Now App is easier. Smarter. More beautiful.</Preview>
        <Body style={{ fontFamily: "Roboto", margin: 0, padding: 0, background: "#f8f8f8" }}>
          <Tailwind>
            <Container className="min-h-screen bg-white overflow-hidden">
              {/* Header */}
              <div className="w-full bg-[#f8f8f8] text-center py-5">
                <Img src="https://cdn.templates.unlayer.com/assets/1597206061989-11.png" alt="Logo" className="w-32 mx-auto" />
              </div>
  
              {/* Main Section */}
              <div className="text-center py-8 px-6 bg-[#00a6a4] text-white">
                <div>
                <Heading className="text-2xl font-bold !mb-0 !mt-0">Now App is easier.</Heading>
                <Heading className="text-2xl font-bold !mb-0 !mt-0">Smarter. More beautiful.</Heading>
                </div>
                <Text className="text-sm mx-8 mb-4 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam e
                </Text>
                <Button
                  className="bg-white text-[#00aec4] py-3 px-8 text-xs font-bold rounded-full !mb-0"
                  href="#"
                  style={{ textDecoration: "none" }}
                >
                  GET THE NEW APP
                </Button>
              </div>
  
              {/* Image Section */}
              <div className="text-center !mt-0 w-full h-[65vh] bg-[#00a6a4]">
                <Img src="https://cdn.templates.unlayer.com/assets/1597206264697-the-new-mint-smart-sleek-personalized.png" alt="App Image" className="w-full h-full object-cover " />
              </div>
  
              {/* Sleek Section */}
              <div className="text-center pb-8 px-7 ">
                <Heading className="text-lg font-bold !mb-2 text-[#30323f]">Sleek. Easy. Awesome.</Heading>
                <Text className="text-xs mx-10 text-gray-800 mb-4 !mt-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam em.
                </Text>
               <div className="w-full h-[40vh]">
                 <Img src="https://cdn.templates.unlayer.com/assets/1597206545094-application-interface-ui-smartphone-3d-rendering_110893-148.jpg" alt="Sleek App Image" className="w-full h-full object-cover" />
               </div>
              </div>
  
              {/* Introducing App Pro Section */}
              <div className="text-center !py-0 px-6 ">
                <Heading className="text-lg font-bold mb-2 text-[#30323f]">Introducing App Pro</Heading>
                <Text className="text-xs mx-10 text-gray-800 mb-4 !mt-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam em.
                </Text>
                <Button
                  className="bg-[#00a6a4] text-white py-3 px-8 text-xs font-bold rounded-full !mb-0 !mt-2"
                  href="#"
                  style={{ textDecoration: "none" }}
                >
                  GET THE NEW APP
                </Button>

                <div className="!mt-6 !mb-4">
                    <p className="!mt-0 !mb-0 text-xs text-[#212227]">You really are important to us!</p>
                    <p className="!mt-0 !mb-0 text-xs text-[#212227]">If you have feedback, please share it with us.</p>
                </div>
              </div>
  
              {/* Footer */}
              <div className="w-full bg-[#f8f8f8] text-white text-center pt-6">
                <div className="mx-auto">
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/facebook.png" alt="LinkedIn" className="w-8 h-8" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/pinterest.png" alt="Twitter" className="w-8 h-8 ml-2" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/email.png" alt="Skype" className="w-8 h-8 ml-2" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/youtube.png" alt="Instagram" className="w-8 h-8 ml-2" /></a>
                </div>
  
                <div className="mb-4">
                  <p className="text-[11px] text-gray-500 mb-1 mx-10">
                  This message was sent to hello@app.com
                 If you would like to update your email address, please click here.
                 If you no longer wish to receive e-mails from App, click to UNSUBSCRIBE.
                  </p>
                  <p className="text-[11px] text-gray-500 mb-1 mx-10">If you receive a suspicious email, please report it by forwarding the email
                  to spoof@app.com.Visit Security to find out more.</p>
                </div>
                <div className="w-full bg-[#f8f8f8] py-2">
                  <p className="text-[11px] text-gray-500 font-normal text-center">
                    © 20XX Company. All Rights Reserved.
                  </p>
                </div>
              </div>
            </Container>
          </Tailwind>
        </Body>
      </Html>
    );
  };
  
  export default AppUpgrade;
  