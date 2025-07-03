import { Body, Container, Head, Hr, Html, Img, Link, Preview, Section, Text } from "@react-email/components"

interface AirbnbWelcomeEmailProps {
  city?: string
  hostName?: string
  logoUrl?: string
  appLogoUrl?: string
  googlePlayBadgeUrl?: string
  appleStoreBadgeUrl?: string
  tiktokIconUrl?: string
  instagramIconUrl?: string
  twitterIconUrl?: string
  contactHostUrl?: string
  messagesUrl?: string
  preferencesUrl?: string
  unsubscribeUrl?: string
  tiktokUrl?: string
  instagramUrl?: string
  twitterUrl?: string
}

export default function AirbnbWelcomeEmail({
  city = "New York",
  hostName = "John Doe",
  logoUrl = "https://utfs.io/f/ea611515-bd8f-44de-a1b2-765e6b830ed8-dl2lfm.png",
  appLogoUrl = "https://utfs.io/f/271d77d3-3e21-4c9d-866b-aa880110defa-8z4go0.jpg",
  googlePlayBadgeUrl = "https://www.reactemailtemplate.com//google-play-badge.png",
  appleStoreBadgeUrl = "https://www.reactemailtemplate.com//apple-store-badge.png",
  tiktokIconUrl = "https://utfs.io/f/579c3061-523c-46ce-b2b8-3e9bdfe7b3d2-beqknd.png",
  instagramIconUrl = "https://utfs.io/f/8c56cc56-cb46-4601-ad2d-f53ec3dbc9a9-okmyp2.png",
  twitterIconUrl = "https://utfs.io/f/3e1db6c8-9134-4da4-bf75-4ac0409d9f04-5p4rol.png",
  contactHostUrl = "https://airbnb.com/contact-host",
  messagesUrl = "https://airbnb.com/messages",
  preferencesUrl = "https://www.airbnb.com/account-settings/notifications",
  unsubscribeUrl = "https://www.airbnb.com/unsubscribe",
  tiktokUrl = "https://www.tiktok.com/@airbnb",
  instagramUrl = "https://www.instagram.com/airbnb",
  twitterUrl = "https://twitter.com/airbnb",
}: AirbnbWelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>{city} welcomes you!</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header with Logo */}
          <Section style={logoSection}>
            <Img src={logoUrl} width="112" height="30" alt="Airbnb" style={logoStyle} />
          </Section>

          {/* Main Content */}
          <Section style={contentContainer}>
            <Text style={heading}>{city} welcomes you!</Text>
            <Text style={italicParagraph}>We hope you enjoy your trip.</Text>
            <Text style={paragraph}>
              If you need anything during your stay, it is best to contact {hostName}, your host. And, if at any time
              you need to communicate with us, you can do so from your messages.
            </Text>

            {/* CTA Button */}
            <table width="100%" cellPadding="0" cellSpacing="0" border={0} style={buttonTableStyle}>
              <tr>
                <td align="center" style={buttonContainerStyle}>
                  <Link href={contactHostUrl} style={buttonStyle}>
                    Write to {hostName} →
                  </Link>
                </td>
              </tr>
            </table>
          </Section>

          <Hr style={divider} />

          {/* App Download Section */}
          <Section style={appDownloadContainer}>
            <Img src={appLogoUrl} width="60" height="60" alt="Airbnb" style={appLogo} />
            <Text style={appDownloadText}>
              Download the app.
              <br />
              Airbnb, on the palm of your hand.
            </Text>

            <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
              <tr>
                <td style={appStoreButtonsContainerStyle}>
                  <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                    <tr>
                      <td align="center" width="50%" style={appStoreColumnStyle}>
                        <Link href="https://play.google.com/store/apps/details?id=com.airbnb.android">
                          <Img
                            src={googlePlayBadgeUrl}
                            width="135"
                            height="40"
                            alt="Get it on Google Play"
                            style={appStoreBadgeStyle}
                          />
                        </Link>
                      </td>
                      <td align="center" width="50%" style={appStoreColumnStyle}>
                        <Link href="https://apps.apple.com/app/airbnb/id401626263">
                          <Img
                            src={appleStoreBadgeUrl}
                            width="135"
                            height="40"
                            alt="Download on the App Store"
                            style={appStoreBadgeStyle}
                          />
                        </Link>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </Section>

          {/* Footer */}
          <Text style={footer}>
            Airbnb, Inc., 888 Brannan St., San Francisco, CA 94103, USA
            <br />
            Update your{" "}
            <Link href={preferencesUrl} style={link}>
              preferences
            </Link>{" "}
            to choose which emails you receive or{" "}
            <Link href={unsubscribeUrl} style={link}>
              unsubscribe
            </Link>{" "}
            from this type of communication.
          </Text>

          {/* Social Icons */}
          <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
            <tr>
              <td align="center" style={socialIconsContainerStyle}>
                <Link href={tiktokUrl} style={socialIconLink}>
                  <Img src={tiktokIconUrl} width="32" height="32" alt="TikTok" style={socialIconStyle} />
                </Link>
                <Link href={instagramUrl} style={socialIconLink}>
                  <Img src={instagramIconUrl} width="32" height="32" alt="Instagram" style={socialIconStyle} />
                </Link>
                <Link href={twitterUrl} style={socialIconLink}>
                  <Img src={twitterIconUrl} width="32" height="32" alt="Twitter" style={socialIconStyle} />
                </Link>
              </td>
            </tr>
          </table>
        </Container>
      </Body>
    </Html>
  )
}

// Email-safe inline styles
const main = {
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  backgroundColor: "#f8fafc",
  margin: "0",
  padding: "0",
}

const container = {
  margin: "0 auto",
  padding: "20px",
  width: "600px",
  maxWidth: "100%",
  backgroundColor: "#ffffff",
}

const logoSection = {
  marginBottom: "20px",
}

const logoStyle = {
  display: "block",
  width: "112px",
  height: "30px",
}

const contentContainer = {
  padding: "0",
  backgroundColor: "#ffffff",
}

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
  margin: "0 0 15px 0",
}

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
  margin: "0 0 20px 0",
}

const italicParagraph = {
  ...paragraph,
  fontStyle: "italic",
}

const buttonTableStyle = {
  marginTop: "30px",
  marginBottom: "30px",
}

const buttonContainerStyle = {
  padding: "10px 0",
}

const buttonStyle = {
  backgroundColor: "#ff385c",
  borderRadius: "5px",
  color: "#ffffff",
  fontSize: "18px",
  textDecoration: "none",
  padding: "16px 38px",
  display: "inline-block",
  fontWeight: "bold",
}

const divider = {
  borderTop: "1px solid #E5E5E5",
  margin: "40px 0",
}

const appDownloadContainer = {
  textAlign: "center" as const,
  marginBottom: "32px",
}

const appLogo = {
  margin: "0 auto 16px",
  display: "block",
  width: "60px",
  height: "60px",
  borderRadius: "12px",
}

const appDownloadText = {
  fontSize: "16px",
  lineHeight: "1.4",
  marginBottom: "16px",
  textAlign: "center" as const,
  color: "#484848",
}

const appStoreButtonsContainerStyle = {
  padding: "0",
}

const appStoreColumnStyle = {
  padding: "0 5px",
  verticalAlign: "middle",
}

const appStoreBadgeStyle = {
  width: "135px",
  height: "40px",
  display: "inline-block",
}

const footer = {
  fontSize: "15px",
  lineHeight: "1.5",
  color: "#9CA3AF",
  marginTop: "32px",
  textAlign: "center" as const,
}

const link = {
  color: "#9CA3AF",
  textDecoration: "underline",
}

const socialIconsContainerStyle = {
  marginTop: "32px",
  textAlign: "center" as const,
}

const socialIconLink = {
  display: "inline-block",
  marginLeft: "8px",
  marginRight: "8px",
  textDecoration: "none",
}

const socialIconStyle = {
  width: "32px",
  height: "32px",
  display: "block",
}

// Preview props for development
AirbnbWelcomeEmail.PreviewProps = {
  city: "New York",
  hostName: "John Doe",
  logoUrl: "https://utfs.io/f/ea611515-bd8f-44de-a1b2-765e6b830ed8-dl2lfm.png",
  appLogoUrl: "https://utfs.io/f/271d77d3-3e21-4c9d-866b-aa880110defa-8z4go0.jpg",
  googlePlayBadgeUrl: "https://www.reactemailtemplate.com//google-play-badge.png",
  appleStoreBadgeUrl: "https://www.reactemailtemplate.com//apple-store-badge.png",
  tiktokIconUrl: "https://utfs.io/f/579c3061-523c-46ce-b2b8-3e9bdfe7b3d2-beqknd.png",
  instagramIconUrl: "https://utfs.io/f/8c56cc56-cb46-4601-ad2d-f53ec3dbc9a9-okmyp2.png",
  twitterIconUrl: "https://utfs.io/f/3e1db6c8-9134-4da4-bf75-4ac0409d9f04-5p4rol.png",
} satisfies AirbnbWelcomeEmailProps
