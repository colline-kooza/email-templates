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

  
  export default function SecurityIssue() {
    return (
      <Html>
        <Head />
        <Preview>BE AWARE: SECURITY ISSUES</Preview>
        <Tailwind>
          <Body className=" font-sans bg-white">
            <Container className="mx-auto p-8 max-w-[600px] bg-[#fcf1ce]">
              <Heading className="text-3xl font-normal text-center !mb-0">BE AWARE</Heading>
              <Heading className="text-4xl font-black text-center mb-2 !mt-0">SECURITY ISSUES</Heading>
              <Section className="p-8 mb-8">
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1660132744340-header.png"
               
                  alt="Security Cat"
                  className="mx-auto w-[70%] h-[70%]"
                />
              </Section>
              <Heading className="text-3xl font-bold text-center mb-4">DEAR EMPLOYEES!</Heading>
              <Text className="text-center mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolor magna aliqua. Quis ipsum suspendisse
                ultrices gravida. Risus commodo viverra maecenas
              </Text>
              <Text className="text-center mb-6">
                accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan
              </Text>
              <Hr className="border-t border-gray-300 my-6" />
              <Text className="text-center mb-2">With Regards,</Text>
              <Text className="text-center font-bold">Veruca Lee</Text>
              <Text className="text-center text-sm text-gray-600">Head, HR department</Text>
              <Hr className="border-t border-gray-300 my-6" />

                {/* Footer */}
                <div className="w-full bg-[#fcf1ce] py-3 text-black text-center !mt-5">
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
          </Body>
        </Tailwind>
      </Html>
    );
  }

  const iconStyle = {
    width: "28px",
    height: "28px",
    borderRadius: "0%",
    marginRight: "4px",
  };