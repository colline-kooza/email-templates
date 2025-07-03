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
  Section,
} from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

export const EGIFT = () => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Asap"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/asap/v30/KFO9CniXp96a4Tc2DaTeuDAoKsE615hGW36MAA.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="initial"
        />
      </Head>
      <Preview>Your E-gift Card Is Ready to Serve</Preview>
      <Body style={{ fontFamily: "Asap, Verdana, sans-serif", margin: 0, padding: 0, background: "#ffffff" }}>
        <Tailwind>
          <Container className="min-h-screen bg-[#000000] overflow-hidden" style={{ maxWidth: "600px" }}>
            {/* Header */}
            <Section className="w-full text-center pt-6 flex flex-col items-center">
              <Heading className="text-2xl font-bold text-white mx-auto">
                Your E-gift Card Is
                <br />
                Ready to Serve
              </Heading>
            </Section>

            {/* Gift Card Image */}
            <Section className="w-full h-[190px]">
              <Img
                src="https://cdn.templates.unlayer.com/assets/1663581943328-card.png"
                alt="Gift Card"
                width={600}
                height={190}
                className="w-full h-full mx-auto object-contain mt-4"
              />
            </Section>

            {/* Subtitle */}
            <Section className="w-full text-center mt-8">
              <Heading className="text-xl font-bold text-white mb-0">The Ultimate Last Minutes</Heading>
            </Section>

            {/* Description */}
            <Section className="w-full text-center mt-1">
              <Text className="text-sm text-[#aaaaaa] mx-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                lacus.
              </Text>
            </Section>

            {/* QR Code */}
            <Section className="w-full text-center">
              <Img
                src="https://cdn.templates.unlayer.com/assets/1663582456881-barcode.png"
                alt="QR Code"
                width={190}
                height={190}
                className="w-[190px] h-[190px] mx-auto mt-6"
              />
            </Section>

            {/* Scan to Download Button */}
            <Section className="w-full text-center mt-4">
              <Button
                className="mt-6 text-sm mb-0 rounded-full"
                href="#"
                style={{
                  backgroundColor: "#dab20e",
                  color: "#ffffff",
                  padding: "10px 45px",
                  textDecoration: "none",
                  borderRadius: "9999px",
                  display: "inline-block",
                }}
              >
                Scan to Download
              </Button>
            </Section>

            <Section className="mx-8 mt-8">
              <div style={{ height: "1px", backgroundColor: "#6b6b6b", width: "100%" }} />
            </Section>

            {/* Social Icons */}
            <Section className="w-full text-center mt-8">
              <Link href="https://facebook.com">
                <Img
                  src="https://cdn.tools.unlayer.com/social/icons/circle/facebook.png"
                  alt="Facebook"
                  width={29}
                  height={29}
                  style={iconStyle}
                />
              </Link>
              <Link href="https://instagram.com">
                <Img
                  src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                  alt="Instagram"
                  width={29}
                  height={29}
                  style={iconStyle}
                />
              </Link>
              <Link href="https://pinterest.com">
                <Img
                  src="https://cdn.tools.unlayer.com/social/icons/circle/pinterest.png"
                  alt="Pinterest"
                  width={29}
                  height={29}
                  style={iconStyle}
                />
              </Link>
            </Section>

            {/* Footer Text */}
            <Section className="w-full text-center mt-6">
              <Text className="text-xs text-[#aaaaaa] mx-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </Text>
              <Text className="text-xs text-[#aaaaaa] mx-4 mt-2">
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
              </Text>
              <Text className="text-xs text-[#aaaaaa] mx-4 mt-2">
                2261 Market Street #4667 San Francisco, CA 94114.
              </Text>
            </Section>

            {/* Preferences & Unsubscribe */}
            <Section className="w-full text-center mt-4">
              <Link href="#" className="text-xs text-[#aaaaaa] mx-2">
                Preferences
              </Link>{" "}
              |{" "}
              <Link href="#" className="text-xs text-[#aaaaaa] mx-2">
                Unsubscribe
              </Link>{" "}
              |{" "}
              <Link href="#" className="text-xs text-[#aaaaaa] mx-2">
                View in browser
              </Link>
            </Section>

            {/* App Store & Google Play */}
            <Section className="w-full mt-6 text-center">
              <Link href="https://play.google.com">
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1662984489773-google.jpg"
                  alt="Google Play"
                  width={80}
                  height={40}
                  className="w-[80px] h-[40px] object-contain"
                  style={{ display: "inline-block" }}
                />
              </Link>
              <Link href="https://apps.apple.com">
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1662984500332-appstore.jpg"
                  alt="App Store"
                  width={80}
                  height={40}
                  className="w-[80px] h-[40px] object-contain"
                  style={{ display: "inline-block" }}
                />
              </Link>
            </Section>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  )
}

export default EGIFT

const iconStyle = {
  width: "29px",
  height: "29px",
  borderRadius: "50%",
  marginRight: "4px",
  display: "inline-block",
}
