import React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export const PhotographySummitEmail = () => {
  return (
    <Html>
      <Head />
      <Preview>Join us for the Photography Summit 2024</Preview>
      <Body style={main}>
       <Tailwind>
       <Container className="" style={container}>
          <Section className="bg-no-repeat bg-center pt-[30%]" style={headerSection}>
               <img src="https://cdn.templates.unlayer.com/assets/1663047119357-Rectangle%201%20copy.png" alt="" />
            <Heading className="text-2xl !mb-0" style={heading}>Photography Summit</Heading>
            <Text className="font-bold text-lg !mt-0" style={subheading}>Portrait <span className="text-[#8cc511]">| Aug 04 | 2024</span></Text>
            <Text className="mx-[10%] text-sm" style={paragraph}>
              Join us for an inspiring gathering of photographers from around the world. 
              Discover new techniques, share your passion, and elevate your craft.
            </Text>
            <Button className="text-sm rounded-3xl" style={button} href="https://example.com/register">
              Register Now
            </Button>
          </Section>

          <Section style={speakersSection}>
            <div className="text-center mb-3">
            <Heading className="!mb-0" as="h2" style={sectionHeading}>
              Speakers
            </Heading>
            <img className="!mt-0 w-16 h-1" src="https://cdn.templates.unlayer.com/assets/1663047119357-Rectangle%201%20copy.png" alt=""  />
            </div>
       
            <div className="bg-[#1d1d1d] py-3" style={speakerContainer}>
              <Img
                src="https://cdn.templates.unlayer.com/assets/1663047316125-Group%205.png"
                height={150}
                width={150}
                alt="Audrey Evans"
                className=" ml-2"
                style={speakerImage}
              />
              <div>
             
                <Text className="mt-0" style={speakerName}>Ansel Adams</Text>
                <Text style={speakerTitle}>Photographer | Fashion</Text>
                <Text style={speakerBio}>
                  Award-winning fashion photographer with over 15 years of experience in the industry.
                </Text>
                <div style={socialIcons}>
                  <Link className="ml-2" href="https://facebook.com/anseladams"><Img src="https://cdn.tools.unlayer.com/social/icons/circle-white/facebook.png" width={20} height={20} alt="Facebook" /></Link>
                  <Link className="ml-2"  href="https://twitter.com/anseladams"><Img src="https://cdn.tools.unlayer.com/social/icons/circle-white/twitter.png" width={20} height={20} alt="Twitter" /></Link>
                  <Link className="ml-2"  href="https://instagram.com/anseladams"><Img src="https://cdn.tools.unlayer.com/social/icons/circle-white/instagram.png" width={20} height={20} alt="Instagram" /></Link>
                  <Link className="ml-2"  href="https://instagram.com/anseladams"><Img src="https://cdn.tools.unlayer.com/social/icons/circle-white/youtube.png" width={20} height={20} alt="Instagram" /></Link>
                </div>
              </div>
            </div>


            <div className="py-3" style={speakerContainer}>

            <div>
             <Text className="mt-0" style={speakerName}>Audrey Evans</Text>
             <Text style={speakerTitle}>Photographer | Fashion</Text>
             <Text style={speakerBio}>
               Award-winning fashion photographer with over 15 years of experience in the industry.
             </Text>
             <div style={socialIcons}>
               <Link href="https://facebook.com/anseladams"><Img src="https://cdn.tools.unlayer.com/social/icons/circle-white/facebook.png" width={20} className="ml-2"  height={20} alt="Facebook" /></Link>
               <Link href="https://twitter.com/anseladams"><Img src="https://cdn.tools.unlayer.com/social/icons/circle-white/twitter.png" width={20} height={20}  alt="Twitter" className="ml-2"  /></Link>
               <Link className="ml-2"  href="https://instagram.com/anseladams"><Img src="https://cdn.tools.unlayer.com/social/icons/circle-white/instagram.png" width={20} height={20} alt="Instagram" /></Link>
               <Link className="ml-2"  href="https://instagram.com/anseladams"><Img src="https://cdn.tools.unlayer.com/social/icons/circle-white/youtube.png" width={20} height={20} alt="Instagram" /></Link>
             </div>
           </div>
              <Img
                src="https://cdn.templates.unlayer.com/assets/1663143391510-men.png"
                height={150}
                width={150}
                alt="Audrey Evans"
                className=" ml-2"
                style={speakerImage}
              />
            
            </div>
          
            
            <div className="bg-[#1d1d1d] py-3" style={speakerContainer}>
              <Img
                src="https://cdn.templates.unlayer.com/assets/1663143397366-mk.png"
                height={150}
                width={150}
                alt="Audrey Evans"
                className=" ml-2"
                style={speakerImage}
              />
              <div>
             
                <Text className="mt-0" style={speakerName}>Megan Reuben
                </Text>
                <Text style={speakerTitle}>Photographer | Fashion</Text>
                <Text style={speakerBio}>
                  Award-winning fashion photographer with over 15 years of experience in the industry.
                </Text>
                <div style={socialIcons}>
                  <Link className="ml-2"  href="https://facebook.com/anseladams"><Img src="https://cdn.tools.unlayer.com/social/icons/circle-white/facebook.png" width={20} height={20} alt="Facebook" /></Link>
                  <Link className="ml-2"  href="https://twitter.com/anseladams"><Img src="https://cdn.tools.unlayer.com/social/icons/circle-white/twitter.png" width={20} height={20} alt="Twitter" /></Link>
                  <Link className="ml-2"  href="https://instagram.com/anseladams"><Img src="https://cdn.tools.unlayer.com/social/icons/circle-white/instagram.png" width={20} height={20} alt="Instagram" /></Link>
                  <Link className="ml-2"  href="https://instagram.com/anseladams"><Img src="https://cdn.tools.unlayer.com/social/icons/circle-white/youtube.png" width={20} height={20} alt="Instagram" /></Link>
                </div>
              </div>
            </div>
          </Section>

          <Section style={footerSection}>
          <div className="mx-auto gap-2 mt-0 mb-3">
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                      alt="Facebook"
                      style={iconStyle}
                    />
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                      alt="Instagram"
                      style={iconStyle}
                    />
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                      alt="Pinterest"
                      style={iconStyle}
                    />
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                      alt="YouTube"
                      style={iconStyle}
                    />
                  </div>
            <Text style={footerText}>
              © 2024 Photography Summit. All rights reserved.
            </Text>
            <Text style={footerText}>
              If you have any questions, please contact us at info@photographysummit.com
            </Text>
          </Section>
        </Container>
       </Tailwind>
      </Body>
    </Html>
  );
};

export default PhotographySummitEmail;

const main = {
  backgroundColor: "#000000",
  fontFamily: 'Arial, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '100%',
  maxWidth: '600px',
};

const headerSection = {
  padding: '0 24px',
  textAlign: 'center' as const,
 backgroundImage: 'url("https://res.cloudinary.com/dirpuqqib/image/upload/v1725606952/1663048563905-image2_fnvmnx.jpg")',
    backgroundSize:"contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
};

const headerImage = {
  borderRadius: '4px',
  marginBottom: '24px',
};

const heading = {
  color: '#ffffff',
  // fontSize: '36px',
  fontWeight: 'bold',
  margin: '0 0 12px',
};

const subheading = {
  color: 'white',
  margin: '0 0 24px',
};

const paragraph = {
  color: '#ffffff',
  lineHeight: '24px',
  margin: '0 0 24px',
};

const button = {
  backgroundColor: '#ffffff',
  // borderRadius: '4px',
  color: '#000',
  fontWeight: 'bold',
  padding: '9px 37px',
  textDecoration: 'none',
};

const speakersSection = {
  padding: '48px 24px',
};

const sectionHeading = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 24px',
  textAlign: 'center' as const,
};
const iconStyle = {
  width: "25px",
  height: "25px",
  borderRadius: "10%",
  marginRight: "4px",
};
const speakerContainer = {
  display: 'flex',
  marginBottom: '32px',
};

const speakerImage = {
//   borderRadius: '50%',
  marginRight: '16px',
};

const speakerName = {
  color: '#ffffff',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0 0 4px',
};

const speakerTitle = {
  color: '#9ca3af',
  fontSize: '16px',
  margin: '0 0 8px',
};

const speakerBio = {
  color: '#ffffff',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0 0 12px',
};

const socialIcons = {
  display: 'flex',
  gap: '8px',
};

const footerSection = {
  padding: '0 10px',
  textAlign: 'center' as const,
};

const footerText = {
  color: '#9ca3af',
  fontSize: '12px',
  lineHeight: '16px',
  margin: '0 0 8px',
};