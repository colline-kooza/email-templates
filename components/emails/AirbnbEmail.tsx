import {
  Body,
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
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export const AirbnbEmail = () => (
  <Html>
    <Head />
    <Preview>We think you'll love these accommodations</Preview>
    <Tailwind>
      <Body style={main}>
        <Container className="mx-auto" style={container}>
          <Section style={logoContainer}>
            <Img
              src={`https://utfs.io/f/ea611515-bd8f-44de-a1b2-765e6b830ed8-dl2lfm.png`}
              width="102"
              height="50"
              className="object-contain"
              alt="Airbnb"
              style={logo}
            />
          </Section>
          <Heading
            style={{
              color: "#484848",
              fontSize: "26px",
              lineHeight: "1.3",
              fontWeight: "700",
              margin: "0 0 24px",
              textAlign: "center",
            }}
          >
            We think you'll love these accommodations
          </Heading>
          <Section style={accommodationsContainer}>
            <Row
              style={{
                marginBottom: "24px",
                textAlign: "center",
              }}
            >
              <Column style={accommodationColumn}>
                <Img
                  src={`https://a0.muscache.com/im/pictures/miso/Hosting-1110442652475031330/original/b6d87652-2a44-423c-8396-c81e6df23628.jpeg?im_w=720`}
                  width="280"
                  height="200"
                  alt="Apartment in Miami"
                  className="object-cover"
                  style={accommodationImage}
                />
                <Text style={accommodationTitle}>Apartment in Miami</Text>
                <Text style={accommodationDetails}>
                  <span style={starRating}>★ 4,24</span> 4 Beds
                </Text>
                <Text style={accommodationDetails}>24 jun - 5 jul</Text>
                <Text style={accommodationPrice}>$103 USD / night</Text>
              </Column>
              <Column style={accommodationColumn}>
                <Img
                  src={`https://a0.muscache.com/im/pictures/miso/Hosting-1121916284459150813/original/3946848d-f8d5-47cd-ba18-88e1aef72eb5.jpeg?im_w=720`}
                  width="280"
                  height="200"
                  className="object-cover"
                  alt="Residential Apartment in North Bay Village"
                  style={accommodationImage}
                />
                <Text style={accommodationTitle}>
                  Residential Apartment in North Bay Village
                </Text>
                <Text style={accommodationDetails}>
                  <span style={starRating}>★ 4,74</span> 2 Beds
                </Text>
                <Text style={accommodationDetails}>24 jun - 5 jul</Text>
                <Text style={accommodationPrice}>$122 USD / night</Text>
              </Column>
            </Row>
            <Row
              style={{
                marginBottom: "24px",
                textAlign: "center",
              }}
            >
              <Column style={accommodationColumn}>
                <Img
                  src={`https://a0.muscache.com/im/pictures/miso/Hosting-1110442652475031330/original/b6d87652-2a44-423c-8396-c81e6df23628.jpeg?im_w=720`}
                  width="280"
                  height="200"
                  alt="Apartment in Sunny Isles Beach"
                  className="object-cover"
                  style={accommodationImage}
                />
                <Text style={accommodationTitle}>
                  Apartment in Sunny Isles Beach
                </Text>
                <Text style={accommodationDetails}>
                  <span style={starRating}>★ 4,72</span> 2 Beds «queen»
                </Text>
                <Text style={accommodationDetails}>24 jun - 5 jul</Text>
                <Text style={accommodationPrice}>$187 USD / night</Text>
              </Column>
              <Column style={accommodationColumn}>
                <Img
                  src={`https://a0.muscache.com/im/pictures/miso/Hosting-1121916284459150813/original/3946848d-f8d5-47cd-ba18-88e1aef72eb5.jpeg?im_w=720`}
                  width="280"
                  height="200"
                  alt="Apartment in Miami"
                  style={accommodationImage}
                />
                <Text style={accommodationTitle}>Apartment in Miami</Text>
                <Text style={accommodationDetails}>
                  <span style={starRating}>★ 4,86</span> 2 Beds
                </Text>
                <Text style={accommodationDetails}>24 jun - 5 jul</Text>
                <Text style={accommodationPrice}>$113 USD / night</Text>
              </Column>
            </Row>
          </Section>
          <Link href="https://your-link.com" style={buttonStyle} className="text-center mx-auto mt-3 mb-6 ">
            Find Accommodation
          </Link>
          <Row
            style={{
              marginBottom: "24px",
              textAlign: "center",
            }}
          >
            <Column style={accommodationColumn}>
              <Img
                src={`https://a0.muscache.com/im/pictures/hosting/Hosting-1140157782670585053/original/cc364fa0-c002-41b5-8092-afe272959f6c.jpeg?im_w=720`}
                width="280"
                height="200"
                alt="Apartment in Sunny Isles Beach"
                className="object-cover"
                style={accommodationImage}
              />
              <Text style={accommodationTitle}>
                Apartment in Sunny Isles Beach
              </Text>
              <Text style={accommodationDetails}>
                <span style={starRating}>★ 4,72</span> 2 Beds «queen»
              </Text>
              <Text style={accommodationDetails}>24 jun - 5 jul</Text>
              <Text style={accommodationPrice}>$187 USD / night</Text>
            </Column>
            <Column style={accommodationColumn}>
              <Img
                src={`https://a0.muscache.com/im/pictures/9fdf7459-3ba5-4386-9505-00ac051363ba.jpg?im_w=720`}
                width="280"
                height="200"
                alt="Apartment in Miami"
                style={accommodationImage}
              />
              <Text style={accommodationTitle}>Apartment in Miami</Text>
              <Text style={accommodationDetails}>
                <span style={starRating}>★ 4,86</span> 2 Beds
              </Text>
              <Text style={accommodationDetails}>24 jun - 5 jul</Text>
              <Text style={accommodationPrice}>$113 USD / night</Text>
            </Column>
          </Row>

          {/* New section starts here */}
          <Section
            style={{
              textAlign: "center" as const,
              marginBottom: "32px",
              marginTop: "32px",
            }}
          >
            <Link href="https://airbnb.com" style={showAllButton}>
              Show all
            </Link>
          </Section>

          <Section style={appDownloadContainer}>
            <Img
              src={`https://utfs.io/f/271d77d3-3e21-4c9d-866b-aa880110defa-8z4go0.jpg`}
              width="60"
              height="60"
              alt="Airbnb"
              style={appLogo}
              className="object-cover"
            />
            <Text style={appDownloadText}>
              Download the app.
              <br />
              Airbnb, on the palm of your hand.
            </Text>
            <Row style={appStoreButtonsContainer}>
              <Column align="center">
                <Link href="https://play.google.com/store/apps/details?id=com.airbnb.android">
                  <Img
                    src={`https://www.reactemailtemplate.com//google-play-badge.png`}
                    width="150"
                    height="60"
                    alt="Get it on Google Play"
                    className="object-contain"
                  />
                </Link>
              </Column>
              <Column align="center">
                <Link href="https://apps.apple.com/app/airbnb/id401626263">
                  <Img
                    src={`https://www.reactemailtemplate.com//apple-store-badge.png`}
                    width="150"
                    height="60"
                    alt="Download on the App Store"
                    className="object-contain"
                  />
                </Link>
              </Column>
            </Row>
          </Section>

          <div className="w-full bg-[#f8f8f8] text-white text-center pt-6">
            <div className="mx-auto">
              <a href="#">
                <img
                  src="https://cdn.tools.unlayer.com/social/icons/circle-black/facebook.png"
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn.tools.unlayer.com/social/icons/circle-black/pinterest.png"
                  alt="Twitter"
                  className="w-8 h-8 ml-2"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn.tools.unlayer.com/social/icons/circle-black/email.png"
                  alt="Skype"
                  className="w-8 h-8 ml-2"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn.tools.unlayer.com/social/icons/circle-black/youtube.png"
                  alt="Instagram"
                  className="w-8 h-8 ml-2"
                />
              </a>
            </div>

            <div className="mb-4 flex flex-col">
              <p className="text-[11px] text-gray-500 mb-1 mx-10">
                This message was sent to hello@app.com If you would like to
                update your email address, please click here. If you no longer
                wish to receive e-mails from App, click to UNSUBSCRIBE.
              </p>
              <p className="text-[11px] text-gray-500 mb-1 mx-10">
                If you receive a suspicious email, please report it by
                forwarding the email to spoof@app.com.Visit Security to find out
                more.
              </p>
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

export default AirbnbEmail;

const main = {
  backgroundColor: "#f8fafc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "680px",
  backgroundColor: "#ffff",
};

const logoContainer = {
  marginBottom: "24px",
};

const logo = {
  margin: "0 auto",
};

const accommodationsContainer = {
  marginBottom: "24px",
};

const accommodationColumn = {
  width: "280px",
  display: "inline-block",
  verticalAlign: "top",
  marginRight: "10px",
};

const accommodationImage = {
  borderRadius: "8px",
  marginBottom: "2px",
};

const accommodationTitle = {
  fontSize: "16px",
  fontWeight: "500",
  margin: "0 0 0px",
};

const accommodationDetails = {
  fontSize: "14px",
  color: "#484848",
  margin: "0 0 4px",
};

const starRating = {
  color: "#FF385C",
};

const accommodationPrice = {
  fontSize: "14px",
  fontWeight: "700",
  margin: "0",
};

const buttonStyle = {
  backgroundColor: "#ff385c",
  color: "#ffffff",
  borderRadius: "6px",
  padding: "14px 40px",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  display: "inline-block",
  border: "none",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};
const showAllButton = {
  border: "1px solid #000000",
  borderRadius: "4px",
  color: "#000000",
  fontSize: "16px",
  textDecoration: "none",
  padding: "10px 40px",
};

const appDownloadContainer = {
  textAlign: "center" as const,
  marginBottom: "32px",
};

const appLogo = {
  margin: "0 auto 16px",
};

const appDownloadText = {
  fontSize: "16px",
  lineHeight: "1.4",
  marginBottom: "16px",
};

const appStoreButtonsContainer = {
  marginBottom: "16px",
};
