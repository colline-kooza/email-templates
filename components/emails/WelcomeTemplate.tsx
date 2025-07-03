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


export const WelcomeTemplate = () => {
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
      <Body
        style={{
          fontFamily: "DM Sans",
          margin: 0,
          padding: 0,
          background: "#f5f5f5",
        }}
      >
        <Tailwind>
          {/* Header */}
          <div className="w-full bg-[#fbea41] text-center py-5">
            <div className="w-full h-[35px] ">
              <Img
                src="https://cdn.templates.unlayer.com/assets/1636448525719-loo.png"
                alt="Logo"
                className="w-full h-full mb-4 object-contain"
              />
            </div>
          </div>
          <Container className="min-h-screen bg-[#ffffff] overflow-hidden">
            {/* Welcome Section */}
            <div className="text-center py-2 px-4">
              <Heading className="text-3xl font-bold mb-4">Welcome!</Heading>
              <div className="w-full h-[40vh]">
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1636450033923-19197947.png"
                  alt="Welcome Image"
                  className="mb-4 w-full h-full object-contain"
                />
              </div>
              <Text className="text-[#8e8f8e] mx-5 mb-9">
                We're excited to have you get started! First you need to confirm
                your account. Just click the button below.
              </Text>
              <Button
                className="bg-[#181147] text-white py-3 px-9 text-xs font-bold"
                href="#"
                style={{ textDecoration: "none" }}
              >
                Confirm Your Account
              </Button>
            </div>

            {/* Info Section */}
            <div className="py-4 px-6">
              <Text className="text-[#8e8e99] mb-4 text-[13px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <Link href="#" className="text-orange-400 text-[13px]">
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur
                  enim ad minim veniam.
                </Link>
              </Text>
              <Text className="text-[#8e8e99] mb-8 text-[13px]">
                If you have any questions, please feel free to inform - We're
                always ready to help out.
              </Text>
              <Text className="text-gray-600 font-semibold !mb-0 text-xs">
                Cheers,
              </Text>
              <Text className="text-gray-600 font-bold !mt-0 text-sm">
                The Team Name
              </Text>
            </div>

            {/* Footer */}
            <div className="w-full bg-[#181147] text-white text-center pt-6">
              <Heading
                style={{ borderBottom: "2px solid #ffff" }}
                className="text-xl font-bold mb-4 pb-3 mx-12 "
              >
                Get In Touch
              </Heading>

              <div>
                <div className="mx-auto  mb-4">
                  <a href="#">
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                      alt="Twitter"
                      className="w-6 h-6 ml-3"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/skype.png"
                      alt="LinkedIn"
                      className="w-6 h-6 ml-3"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                      alt="Instagram"
                      className="w-6 h-6 ml-3"
                    />
                  </a>
                </div>
              </div>

              <div>
                <div className="mb-4">
                  <p className="!mt-0 !mb-0 text-xs text-gray-200">
                    If you have questions regarding your Data, please visit our
                    Privacy Policy
                  </p>
                  <p className="!mt-0 !mb-0 text-xs text-gray-200">
                    Want to change how you receive these emails?
                  </p>
                </div>
              </div>

              <div className="w-full py-4 bg-[#f7d845] ">
                <p className="!mt-0 !mb-0 text-xs text-black text-center font-normal mx-auto">
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

export default WelcomeTemplate;
