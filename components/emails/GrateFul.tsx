import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Tailwind,
    Text,
  } from "@react-email/components";

  
  export default function GrateFul() {
    return (
      <Html>
        <Head />
        <Preview>THANK YOU!</Preview>
        <Tailwind>
          <Body className="font-sans bg-[#000000]">
            <Container className="mx-auto p-8 max-w-[600px] bg-[#000000]">
             <div style={{
                backgroundImage: 'url("https://res.cloudinary.com/dirpuqqib/image/upload/v1725707684/1626074069766-sdsdd_jpl9cj.png")'
             }} className="py-12 bg-contain">
             <Heading className="text-3xl font-bold text-center text-white mb-2">THANK YOU!</Heading>
              <Text className="text-center text-white mb-6 text-3xl">
              We're <span className="text-red-500">grateful</span> for your <br/>
              Support!
              </Text>
              <div className="mx-auto text-center">
           <Button
                  className=" text-[#fff] py-2 px-12 text-xs rounded-full !mb-0"
                  href="#"
                  style={{ textDecoration: "none" , fontFamily:
                    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',  backgroundColor: "#ef0101",}}
                >
                 CLICK ME 
                </Button>
           </div>
             </div>
            
              <Section className="mt-2">
                <Heading className="text-2xl font-bold text-white mb-4">Our Customers are our biggest asset...</Heading>
                <Text className="text-white mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </Text>
                <Text className="text-white mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </Text>
              </Section>
              <Section className="mt-8">
                <Heading className="text-2xl font-bold text-white mb-4 text-center">Here are the Right Options for You!</Heading>
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1626075986231-22.jpg"
                  alt="Car Options"
                  className="w-full"
                />
                <Text className="text-white mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <div className="mx-auto text-center">
           <Button
                  className=" text-[#fff] py-2 px-12 text-xs rounded-full !mb-0"
                  href="#"
                  style={{ textDecoration: "none" , fontFamily:
                    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',  backgroundColor: "#ef0101",}}
                >
                 CLICK ME
                </Button>
           </div>
              </Section>
              <Section className="mt-8">
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1626076222052-bgbg.png"
                  alt="Speedometer"
                  className="w-full"
                />
              </Section>
              <Hr className="border-t border-gray-600 my-8" />
              <Section className="text-center">
                <Text className="text-white mb-4">FOLLOW US ON</Text>
                <div>
                  {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                    <Img
                      key={social}
                      src={`https://cdn.tools.unlayer.com/social/icons/rounded/${social}.png`}
                      alt={social}
                      className="inline-block w-8 h-8 mx-2"
                    />
                  ))}
                </div>
              </Section>
              <Section className="mt-2 text-center text-white">
                <Text className="text-xs">Home | Page | About | Contact us</Text>
                <Text className="text-xs mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </Text>
                <Text className="text-xs mt-2">
                  Copyright © YourCompany | All Rights Reserved
                </Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  }