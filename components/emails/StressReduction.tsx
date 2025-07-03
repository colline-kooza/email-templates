import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Img,
  Font,
  Tailwind,
} from "@react-email/components";
import React from "react";

export const StressReduction = () => {
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
      <Preview>Finding Balance Amidst Chaos</Preview>
      <Body
        style={{
          backgroundColor: "#ececec",
          fontFamily: "Roboto",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        }}
      >
        <Tailwind>
          <Container className="bg-[#ffffff]" style={containerStyle}>
            <div style={{ padding: "10px 20px" }}>
              <Text
                style={{
                  color: "#000000",
                  textAlign: "center",
                  fontSize: "12px",
                  marginBottom: "20px",
                }}
              >
                YOUR COMPANY NAME
              </Text>
              <p
                style={{
                  color: "#4a2b1c",
                  textAlign: "center",
                  fontSize: "30px",
                  marginBottom: "20px",
                  lineHeight: "1.2",
                }}
              >
                FINDING <span style={highlightStyle}>BALANCE</span>
                <br />
                AMIDST <span style={highlightStyle}>CHAOS</span>
              </p>
              <Text
                className="mx-8"
                style={{
                  color: "#555555",
                  textAlign: "center",
                  fontSize: "14px",
                  marginBottom: "30px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                vestibulum sodales condimentum. Donec aliquet tincidunt tellus
                sed feugiat. Sed vulputate imperdiet hendrerit.
              </Text>
              <Img
                src="https://cdn.templates.unlayer.com/assets/1684406527464-Image.png"
                alt="Balanced woman"
                style={mainImageStyle}
              />
              <Text
                style={{
                  color: "#b0411b",
                  textAlign: "center",
                  fontSize: "14px",
                  marginBottom: "10px",
                }}
              >
                INTERACTIVE
              </Text>
              <Heading
                style={{
                  color: "#5a2724",
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "3px",
                }}
              >
                Workshops & Activities
              </Heading>

              <div className=" flex text-center mx-auto mb-4">
                <div className=" flex text-center mx-auto">
                  <p className="ml-5 text-sm text-center italic">
                    Group
                    <br />
                    Discussion
                  </p>
                  <p className="ml-5 text-sm text-center italic">
                    Engage in
                    <br />
                    Interactive
                    <br />
                    Workshops
                  </p>
                  <p className="ml-5 text-sm text-center italic">
                    Mindfulness
                    <br />
                    Exercises
                  </p>
                </div>
              </div>

              <Button className="text-sm" href="#" style={learnMoreButton}>
                Learn More
              </Button>
              <Img
                src="https://cdn.templates.unlayer.com/assets/1684408617075-Video.png"
                alt="Group activity"
                style={activityImageStyle}
              />
              <div>
                <Text
                  className="mx-8"
                  style={{
                    color: "#555555",
                    textAlign: "center",
                    fontSize: "14px",
                    marginBottom: "8px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  vestibulum sodales condimentum. Donec aliquet tincidunt tellus
                  sed feugiat. Sed vulputate imperdiet hendrerit.
                </Text>
                <Button className="text-xs" href="#" style={learnMoreButton}>
                  Learn More
                </Button>
              </div>
            </div>
            <div className="w-full bg-[#5a2724] py-3 text-white text-center !mt-0">
              <p className="text-xs mx-[10%]">
                if you have any questions, please email us at
                customer.success@desishub.com or visit our FAQS, you can also
                chat with a reel live human during our operating hours. They can
                answer questions about your account
              </p>
              <div
                style={{
                  marginTop: "4px",
                  padding: "15px",
                }}
                className="w-full text-center mt-4 !gap-0 "
              >
                <a href="">
                  <img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png"
                    alt="Facebook"
                    style={iconStyle}
                    className=""
                  />
                </a>
                <a href="">
                  <img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                    alt="Instagram"
                    style={iconStyle}
                    className=""
                  />
                </a>

                <a href="">
                  <img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                    alt="Instagram"
                    style={iconStyle}
                    className=""
                  />
                </a>
                <a href="">
                  <img
                    src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                    alt="Instagram"
                    style={iconStyle}
                    className=""
                  />
                </a>
              </div>
              <Text className="text-xs mt-2 text-white">
                Home | Page | About | Contact us{" "}
              </Text>
              <Text className="text-xs mx-[2rem] text-white font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </Text>
              <Text className="text-xs mt-2 text-white">
                Copyright © YourCompany | All Rights Reserved
              </Text>
            </div>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  );
};

export default StressReduction;

const containerStyle = {
  backgroundColor: "#ffffff",
  margin: "0px auto",
  padding: "0px",
  borderRadius: "4px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  backgroundImage:
    'url("https://res.cloudinary.com/dirpuqqib/image/upload/v1723629708/1684407403001-BG_rm24ra.png")',
};

const headerStyle = {
  color: "#000000",
  textAlign: "center",
  fontSize: "12px",
  marginBottom: "20px",
};
const iconStyle = {
  width: "25px",
  height: "25px",
  borderRadius: "10%",
  marginRight: "4px",
};
const mainHeading = {
  color: "#4a2b1c",
  textAlign: "center",
  fontSize: "30px",
  marginBottom: "20px",
  lineHeight: "1.2",
};

const highlightStyle = {
  color: "#5a2724",
  fontWeight: "bold",
};

const subText = {
  color: "#555555",
  textAlign: "center",
  fontSize: "14px",
  marginBottom: "30px",
};

const mainImageStyle = {
  display: "block",
  margin: "0 auto",
  borderRadius: "50%",
  maxWidth: "80%",
  marginBottom: "30px",
};

const interactiveText = {
  color: "#b0411b",
  textAlign: "center",
  fontSize: "14px",
  marginBottom: "10px",
};

const tripleColumnStyle = {
  textAlign: "center",
  justifyContent: "space-around",
  marginBottom: "30px",
};

const activityText = {
  color: "#555555",
  fontSize: "14px",
};

const learnMoreButton = {
  backgroundColor: "#5b2926",
  color: "#ffffff",
  padding: "10px 20px",
  borderRadius: "1px",
  textDecoration: "none",
  display: "block",
  width: "fit-content",
  margin: "0 auto",
  marginBottom: "30px",
};

const activityImageStyle = {
  display: "block",
  margin: "0 auto",
  maxWidth: "100%",
  height: "auto",
};
