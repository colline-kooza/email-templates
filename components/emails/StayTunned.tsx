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
 
  
  export const StayTunned = () => {
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
        <Preview>Next week, we're launching something new</Preview>
        <Body style={{ fontFamily: "Roboto", margin: 0, padding: 0, background: "#e7e7e7" }}>
          <Tailwind>
            <Container className="min-h-screen bg-[#ffffff] overflow-hidden">
              {/* Navigation */}
              <div className="w-full bg-[#ffffff] text-center pt-5 mx-auto gap-8">
                <Link href="#" className="text-[#000000] text-sm">Home</Link>
                <img src="https://cdn.templates.unlayer.com/assets/1695810928084-Rectangle%203.png" alt="" className="w-1 h-1 object-cover ml-3" />
                <Link href="#" className="text-[#000000] text-sm ml-3">About</Link>
                <img src="https://cdn.templates.unlayer.com/assets/1695810928084-Rectangle%203.png" alt="" className="w-1 h-1 object-cover ml-3" />
                <Link href="#" className="text-[#000000] text-sm ml-3">Contact</Link>
              </div>
  
              {/* Header */}
              <div className="w-full text-center pt-4">
                <Heading className="text-2xl font-bold text-[#000000]">Stay Tuned</Heading>
                <Text style={{fontStyle:"italic"}} className="text-xs text-[#000000] !mt-0">Next week, we’re launching something new,
                <br/>
                that we know you’ll love it.
                </Text>
              </div>
  
              {/* Main Image */}
              <div className="bg-[#f4f4f4] mx-3 mt-10 rounded-tr-[2rem] rounded-tl-[2rem]">
              <div className="w-full h-[160px] flex justify-center mt-6 !mb-0 ">
                  <Img src="https://cdn.templates.unlayer.com/assets/1695811571725-Group%2074.png" alt="Main Image" className="w-full h-full object-contain !mb-0" />
                </div>
              <div className=" text-center !mt-0 mx-8 bg-[#f4f4f4] pb-5">
                  <Heading className="text-lg font-bold text-[#000000] tracking-wide">CLAIM YOUR SPOT 
                    <br />
                    & A CHANCE TO WIN
                    <br/>
                    A MONTH
                    <br />
                    MEMBERSHIP

                  </Heading>
                  <Text className="text-sm text-[#000000] mt-5">
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                  <Text className="text-sm text-[#000000] mt-2">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </Text>
                  <Button className="mt-4 text-xs" href="#" style={{ backgroundColor: "#52be02", color: "#fff", padding: "10px 20px", textDecoration: "none" }}>
                    Claim Now
                  </Button>
                </div>
              </div>
  
              {/* Footer */}
              <div className="w-full bg-[#242424] py-6 text-white text-start mt-6 pl-5">
                <Text className="text-base ">Thanks for the support! 😍</Text>
                <Text className="text-xs mt-2 overflow-hidden w-[93%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ut perspiciatis unde omnis iste natus error sit.
                </Text>
                <div className="flex items-start justify-start gap-4 mt-4">
                  <img src="https://cdn.tools.unlayer.com/social/icons/circle-white/facebook.png" alt="Facebook" style={iconStyle} />
                  <img src="https://cdn.tools.unlayer.com/social/icons/circle-white/linkedin.png" alt="Twitter" style={iconStyle} />
                  <img src="https://cdn.tools.unlayer.com/social/icons/circle-white/instagram.png" alt="LinkedIn" style={iconStyle} />
                  <img src="https://cdn.tools.unlayer.com/social/icons/circle-white/x.png" alt="Instagram" style={iconStyle} />
                </div>
                <div>
                <Text className="text-xs mt-4">
                  UNSUBSCRIBE | PRIVACY POLICY | WEB
                </Text>
                </div>
              </div>
            </Container>
          </Tailwind>
        </Body>
      </Html>
    );
  };
  
  export default StayTunned;
  
  const iconStyle = {
    width: "25px",
    height: "25px",
    borderRadius: "0%",
    marginRight: "4px",
  };
  