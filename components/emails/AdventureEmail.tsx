import {
    Body,
    Button,
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
    Tailwind,
  } from "@react-email/components";

  
 
  export const AdventureEmail = () => (
    <Html>
      <Head />
      <Preview>Discover Your Next Adventure</Preview>
      <Body style={main}>
       <Tailwind>
         <Container style={container}>
         <Section className="h-[70vh]" style={{ backgroundImage: 'url("https://res.cloudinary.com/dirpuqqib/image/upload/v1727874570/1727262282885-bg_qzwguh.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <Heading style={{
    color: "black",
    fontSize: "30px",
    fontWeight: "black",
    textAlign: "center" as const,
  }}>
    Discover Your Next Adventure
  </Heading>
  <Text className="text-center" style={paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum suspen
              disse ultrices gravida. Risus commodo viverra.
            </Text>
            <div className="mx-auto text-center">
            <Button
                  className="bg-[#011530] text-white border-[1px] border-[#106284] py-3 px-8 text-sm font-bold rounded-md !mb-0 "
                  href="#"
                  style={{ textDecoration: "none", border: "1px solid #106284" }}
                >
                  Read More
                </Button>
            </div>
</Section>

          
          <Section className="mx-auto mb-8" style={contentSection}>
            <Heading className="text-center" as="h2" style={subheading}>
              New Destination Spotlight!
            </Heading>
            <Text className="text-center" style={paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor ut labore et dolore magna aliqua. Quis ipsum suspen
              disse ultrices gravida. Risus commodo viverra.
            </Text>
            <div className="mx-auto text-center">
            <Button
                  className="bg-[#011530] text-white border-[1px] border-[#106284] py-3 px-8 text-sm font-bold rounded-md !mb-0 "
                  href="#"
                  style={{ textDecoration: "none", border: "1px solid #106284" }}
                >
                  Read More
                </Button>
            </div>
          
          </Section>
          
          {/* <Section style={contentSection}>
            <Row>
              <Column style={{ width: '33%', paddingRight: '10px' }}>
                <Img
                  src={`https://cdn.templates.unlayer.com/assets/1727263444685-Group%2017.png`}
                  width={100}
                  height={100}
                  alt="Mountain peak"
                />
              </Column>
              <Column style={{ width: '33%', paddingRight: '10px' }}>
                <Img
                  src={`https://cdn.templates.unlayer.com/assets/1727263444685-Group%2017.png`}
                  width={100}
                  height={100}
                  alt="Skier at night"
                />
              </Column>
              <Column style={{ width: '33%' }}>
                <Img
                  src={`https://cdn.templates.unlayer.com/assets/1727263444685-Group%2017.png`}
                  width={100}
                  height={100}
                  alt="Camping in snow"
                />
              </Column>
            </Row>
            
            <Heading as="h2" style={subheading}>
              Lorem ipsum
            </Heading>
            <Text style={paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor ut labore et dolore magna aliqua.
            </Text>
            <ul style={list}>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Coon sectetur adipiscing elit</li>
              <li>Sed do eiusmod tempor ut labore</li>
            </ul>
            <a href="#" style={{ 
            backgroundColor: '#e75480', 
            color: '#ffffff', 
            padding: '5px 14px', 
            textDecoration: 'none', 
            borderRadius: '3px', 
            fontSize: '12px',
            display: 'inline-block'
          }}>
            Read More
          </a>
          </Section> */}
           <div className="bg-[#011530] py-6 px-2" style={{ display: 'flex' }}>
        <div  style={{ width: '48%'  , marginRight:15}}>
          <img 
            src="https://cdn.templates.unlayer.com/assets/1727262895120-Group%2016.png" 
            alt="Support image 1" 
            style={{ maxWidth: '100%', height: '100%' }}
            className="object-cover"
          />
       
        </div>
        <div style={{ width: '48%' }}>
        <Heading as="h2" style={{
       fontSize: "24px",
       fontWeight: "bold",
       padding: "0",
       color: "white",
     }}>
              Lorem ipsum
            </Heading>
            <Text style={{
                fontSize: "16px",
                lineHeight: "26px",
                color: "#627177",
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor ut labore et dolore magna aliqua.
            </Text>
            <ul style={list}>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Coon sectetur adipiscing elit</li>
              <li>Sed do eiusmod tempor ut labore</li>
            </ul>
            <Button
                  className="bg-[#011530] text-white border-[1px] border-[#106284] py-3 px-8 text-sm font-bold rounded-md !mb-0"
                  href="#"
                  style={{ textDecoration: "none", border: "1px solid #106284" }}
                >
                  Read More
                </Button>
        </div>
      </div>
      <div className="w-full h-[90%] !mt-4 !mb-0">
              <img src="https://cdn.templates.unlayer.com/assets/1727263444685-Group%2017.png" alt="" className="w-full h-full object-contain !mb-0"/>
             </div>
             <div className="w-full bg-[#f8f8f8] text-white text-center pt-6">
                <div className="mx-auto">
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png" alt="LinkedIn" className="w-8 h-8" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png" alt="Twitter" className="w-8 h-8 ml-2" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png" alt="Skype" className="w-8 h-8 ml-2" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png" alt="Instagram" className="w-8 h-8 ml-2" /></a>
                </div>
  
                <div className="mb-4 ">
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
  
  export default AdventureEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "600px",
  };
  
  
  const headerText = {
    color: "#011530",
    fontSize: "30px",
    fontWeight: "black",
    textAlign: "center" as const,
  };
  
  const contentSection = {
    padding: "0 30px",
  };
  
  const subheading = {
    fontSize: "28px",
    fontWeight: "500",
    padding: "0",
    color: "#484848",
  };
  
  const paragraph = {
    fontSize: "14px",
    lineHeight: "26px",
    color: "#484848",
  };
  

  const list = {
    color: "#627177",
    fontSize: "16px",
    lineHeight: "26px",
  };