import {
    Body,
    Button,
    Column,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
  import * as React from "react";
  
  export const MiroPromoEmail = () => (
    <Html>
      <Head />
      <Preview>Create amazing things on Miro's infinite whiteboard</Preview>
   <Tailwind>
   <Body style={main}>
        <Container style={container}>
          <Section className="!mb-0" style={logoContainer}>
            <Img
              src={`https://utfs.io/f/e15bd5c9-ad4e-47b0-ab44-72fa2a491edb-32yp7j.png`}
              width="120"
              height="90"
              alt="Miro Logo"
              className="object-contain !mb-0"
            />
          </Section>
          <Section className="!mt-0" style={heroSection}>
            <Heading style={{
    fontSize: "30px",
    lineHeight: "1.3",
    fontWeight: "900",
    color: "#111827",
    textAlign:"start"
  }}>
             
You've now joined over 20 million worldwide collaborators.
            </Heading>
            <Text className="text-start" style={subheading}>
            People like you have done amazing things on our whiteboard for work and play. With an infinite whiteboard, the possibilities are literally limitless. So the question is: <span className="font-bold">What will you create today?</span>
            </Text>
          
            {/* <Section>
            <Button className="py-5 px-12 rounded-xl" style={button} href="https://miro.com/signup/">
              Make your first board →
            </Button>
            </Section> */}
         <Section style={{ textAlign: "start" as const, marginBottom:"30px" , marginTop:"40px"
}}>
    <Link href="https://airbnb.com" style={{
    borderRadius: "40px",
    color: "#ffff",
    fontSize: "18px",
    textDecoration: "none",
    padding: "16px 40px",
    backgroundColor:"#1d4ed8",
  }}>
       Make your first board →
              </Link>
            </Section>


          </Section>
          <Section style={imageSection}>
            <Img
              src={`https://utfs.io/f/68594bbf-ffe9-4c3e-a97a-2cc2d28129da-l376kn.png`}
              width="600"
              height="400"
              alt="Miro Whiteboard Example"
              style={image}
              className="object-cover"
            />
          </Section>
          <Section>
            <Heading style={reasonsHeading}>3 reasons people use Miro</Heading>
            <Text style={reasonsSubheading}>
              We could send you an email with at least a thousand things people love about Miro. We'll start with just three. (If you want to see that email, let us know, and we'll get our writer on it.)
            </Text>
          </Section>
         
          <Row  style={reasonSection}>
          <Column>
          <Img
              src={`https://utfs.io/f/3cbf5874-1f4b-4a31-ba23-f24bd798f451-j81w1l.png`}
              width="70"
              height="70"
              alt="Innovation Icon"
              className="object-cover mr-6"

            />
          </Column>

          <Column >
          <Heading className="!mb-2" style={reasonHeading}>Easier collaboration</Heading>
            <Text className="!mt-0" style={reasonText}>
              We've got tools to help you iterate, simplify workflows, and reach your goals.
            </Text>
          </Column>
         
          </Row>
          <Row  style={reasonSection}>
          <Column>
          <Img
              src={`https://utfs.io/f/b638d156-d0ab-4c31-b648-785d104c7261-c0tlbj.png`}
              width="70"
              height="70"
              alt="Innovation Icon"
              className="object-cover mr-6"

            />
          </Column>

          <Column >
          <Heading className="!mb-2" style={reasonHeading}>Faster creation & innovation</Heading>
            <Text className="!mt-0" style={reasonText}>
              We've got tools to help you iterate, simplify workflows, and reach your goals.
            </Text>
          </Column>
         
          </Row>
          <Row  style={reasonSection}>
          <Column>
          <Img
              src={`https://utfs.io/f/6d80c2a5-eeb2-495c-98f7-7f5585442c83-rc9lxn.png`}
              width="70"
              height="70"
              alt="Innovation Icon"
              className="object-cover mr-6"

            />
          </Column>

          <Column >
          <Heading className="!mb-2" style={reasonHeading}>A solution for everyone</Heading>
            <Text className="!mt-0" style={reasonText}>
              We've got tools to help you iterate, simplify workflows, and reach your goals.
            </Text>
          </Column>
         
          </Row>
          <Section style={{ textAlign: "start" as const, marginBottom:"40px" , marginTop:"40px"
}}>
    <Link href="https://airbnb.com" style={{
    borderRadius: "40px",
    color: "#ffff",
    fontSize: "18px",
    textDecoration: "none",
    padding: "16px 40px",
    backgroundColor:"#1d4ed8",
  }}>
Start a board  →
              </Link>
            </Section>
                {/* Footer */}
                <div className="w-full text-white text-center pt-6">
                <div className="mx-auto">
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/facebook.png" alt="LinkedIn" className="w-8 h-8" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/pinterest.png" alt="Twitter" className="w-8 h-8 ml-2" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/email.png" alt="Skype" className="w-8 h-8 ml-2" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/youtube.png" alt="Instagram" className="w-8 h-8 ml-2" /></a>
                </div>
  
                <div className="mb-4 flex">
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
      </Body>
   </Tailwind>
    </Html>
  );
  
  export default MiroPromoEmail;
  
  const main = {
    backgroundColor: "#f8fafc",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 20px",
    width: "600px",
    backgroundColor: "#ffff",

  };
  
  const logoContainer = {
    marginBottom: "24px",
  };
  
  const heroSection = {
    textAlign: "center" as const,
    marginBottom: "40px",
  };
  
  const subheading = {
    fontSize: "16px",
    lineHeight: "1.4",
    color: "#484848",
    marginBottom: "16px",
  };

  const imageSection = {
    marginBottom: "32px",
  };
  
  const image = {
    maxWidth: "100%",
    borderRadius: "4px",
  };
  
  const reasonsHeading = {
    fontSize: "27px",
    lineHeight: "1.3",
    fontWeight: "800",
    color: "#000000",
    marginBottom: "8px",
  };
  
  const reasonsSubheading = {
    fontSize: "17px",
    lineHeight: "1.4",
    color: "#484848",
    marginBottom: "32px",
  };
  
  const reasonSection = {
    marginBottom: "32px",    
  };
  
  const reasonHeading = {
    fontSize: "20px",
    fontWeight: "700",
    color: "#000000",
  };
  
  const reasonText = {
    fontSize: "17px",
    color: "#484848",
  };