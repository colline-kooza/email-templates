import {
    Body,
    Button,
    Container,
    Head,
    Html,
    Preview,
    Text,
    Font,
    Tailwind,
  } from "@react-email/components";
 
  
  export const RequestServiceTemplate = () => {
    return (
      <Html>
        <Head>
          <Font
            fontFamily="Inter"
            fallbackFontFamily="Verdana"
            webFont={{
              url: "https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2",
              
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="initial"
          />
        </Head>
        <Preview>Request Service</Preview>
        <Body className="" style={{
    backgroundColor: "#f6f6f6",
    fontFamily: "Inter",
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  }}>
        <Tailwind>
        <Container className="" style={container}>

            <div style={{display:"flex"}} className="w-full flex text-center mx-auto bg-[#111114] pt-3">
             <div className="mx-auto">
             <img
                src={`https://cdn.templates.unlayer.com/assets/1637738068512-1.png`}
                alt="Celebration"
                style={{display:"flex" ,maxHeight: 40,
                  maxWidth: "100%"}}
                  className="!mb-2 "
              />
             </div>
                </div>

            <div >
             <div className="w-full min-h-[30vh]  text-center mt-4 mx-auto">
             <div className="text-center mx-auto">
             <img
                src={`https://cdn.templates.unlayer.com/assets/1637739231457-ccc.png`}
                alt="Celebration"
                style={{maxHeight: 60,
                  maxWidth: "100%"}}
                  className="!mb-4 "
              />
             </div>
              <p className="text-[21px] text-[#000] font-bold !mt-0 !mb-1">Requested service is </p>
              <p className="text-[21px] text-[#000] font-bold !mt-0 ">delivered successfully </p>

             <p className="text-[14px] mx-16 text-[#666666] text-center !mt-0">
             Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

             </div>
             </div>
            
             <div >
             <div className="!mt-8 bg-[#cca250] w-[300px] mx-auto h-[100px]  mb-4 text-center p-5 pb-8 ">
             
             <h2 className="!mt-0 !mb-3 text-white text-base  font-bold ">Delivered Items:</h2>

             <div className="text-start">
             <p className="!mt-0 !mb-1 text-gray-200 text-xs"> ✓  Mailchimp Setup & Integration</p>
              <p className="!mt-0 !mb-1 text-gray-200 text-xs"> ✓  Contact upload & Segmentation</p>
              <p className="!mt-0 !mb-1 text-gray-200 text-xs"> ✓  Template Design, upload, and setup</p>
              <p className="!mt-0 !mb-1 text-gray-200 text-xs"> ✓  Campaign setup & schedule</p>
             </div>
             </div>
             </div>

              <div className="mx-auto text-center mt-3  mb-4">
               <h2 className="text-xl text-black !mt-0 !mb-0 font-bold">Need anything else?</h2>
               <p className="text-sm text-gray-600 !mt-2 !mb-0 font-normal">Please feel free to contact us!</p>

               <Button className="text-xs bg-[#cca250] text-white py-3 px-8 mt-2 cursor-pointer hover:bg-black rounded-sm !mb-0" >
                Click Here →
                </Button>
              </div>

              {/* Footer */}
              <div className="w-full bg-black py-3 text-white text-center !mt-5">
            
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
  
  export default RequestServiceTemplate;

  const container = {
    backgroundColor: "#ffffff",
    margin: "0px auto",
    padding: "0px 0px",
    borderRadius: "4px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };
  
  
  const socialMediaStyle = {
    display: "flex",
    padding: "15px",
  };

  const iconStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "18px",
    marginRight: "4px",
  };

  
  const divider = {
    height: "1px",
    backgroundColor: "#ffffff",
    margin: "0px 0",
  };
  
  const instructionText = {
    textAlign: "center",
    // margin: "20px 0",
  };
  
