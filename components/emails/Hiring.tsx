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

interface FeedbackEmailTemplateProps {
  tagline?: string
  viewInBrowserUrl?: string
  logoUrl?: string
  welcomeImageUrl?: string
  ctaUrl?: string
  badFeedbackUrl?: string
  okayFeedbackUrl?: string
  greatFeedbackUrl?: string
  badIconUrl?: string
  okayIconUrl?: string
  greatIconUrl?: string
  linkedinUrl?: string
  instagramUrl?: string
  vimeoUrl?: string
  youtubeUrl?: string
  preferencesUrl?: string
  unsubscribeUrl?: string
}

export default function Hiring({
  tagline = "Your tagline here",
  viewInBrowserUrl = "#",
  logoUrl = "https://cdn.templates.unlayer.com/assets/1623511770228-LOLO.png",
  welcomeImageUrl = "https://media.istockphoto.com/id/1492625213/video/animated-single-line-drawing-of-word-welcome.jpg?s=640x640&k=20&c=9nSD4UA4sMafXVE37F0_JkzjL2PlXLUyJM71awtY0n8=",
  ctaUrl = "#",
  badFeedbackUrl = "#",
  okayFeedbackUrl = "#",
  greatFeedbackUrl = "#",
  badIconUrl = "https://cdn.templates.unlayer.com/assets/1623513776138-i1.png",
  okayIconUrl = "https://cdn.templates.unlayer.com/assets/1623513785859-i2.png",
  greatIconUrl = "https://cdn.templates.unlayer.com/assets/1623513794493-i3.png",
  linkedinUrl = "#",
  instagramUrl = "#",
  vimeoUrl = "#",
  youtubeUrl = "#",
  preferencesUrl = "#",
  unsubscribeUrl = "#",
}: FeedbackEmailTemplateProps) {
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
          fontStyle="normal"
        />
      </Head>
      <Preview>We Want to Hear You!</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header Section */}
          <Section style={headerSectionStyle}>
            <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
              <tr>
                <td style={taglineContainerStyle}>
                  <Text style={taglineStyle}>{tagline}</Text>
                </td>
                <td style={viewBrowserContainerStyle}>
                  <Link href={viewInBrowserUrl} style={viewBrowserLinkStyle}>
                    View this email in your browser
                  </Link>
                </td>
              </tr>
            </table>
          </Section>

          {/* Logo Section */}
          <Section style={logoSectionStyle}>
            <Img src={logoUrl} alt="Logo" style={logoStyle} />

            {/* Welcome Image */}
            <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
              <tr>
                <td style={welcomeImageContainerStyle}>
                  <div style={welcomeImageStyle}></div>
                </td>
              </tr>
            </table>
          </Section>

          {/* Introductory Text */}
          <Section style={introSectionStyle}>
            <Text style={introTextStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </Text>
            <Text style={introTextStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </Text>

            {/* CTA Button */}
            <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
              <tr>
                <td style={buttonContainerStyle}>
                  <Button href={ctaUrl} style={ctaButtonStyle}>
                    Let's Begin!
                  </Button>
                </td>
              </tr>
            </table>
          </Section>

          {/* Feedback Section */}
          <Section style={feedbackSectionStyle}>
            <Heading style={feedbackHeadingStyle}>Share your experience about our event</Heading>

            {/* Feedback Icons */}
            <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
              <tr>
                <td style={feedbackIconsContainerStyle}>
                  <Link href={badFeedbackUrl} style={feedbackIconLinkStyle}>
                    <Img src={badIconUrl} alt="Bad" style={feedbackIconStyle} />
                  </Link>
                  <Link href={okayFeedbackUrl} style={feedbackIconLinkStyle}>
                    <Img src={okayIconUrl} alt="Okay" style={feedbackIconStyle} />
                  </Link>
                  <Link href={greatFeedbackUrl} style={feedbackIconLinkStyle}>
                    <Img src={greatIconUrl} alt="Great" style={feedbackIconStyle} />
                  </Link>
                </td>
              </tr>
            </table>

            <Text style={feedbackTextStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </Text>
            <Text style={feedbackTextStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </Text>
          </Section>

          {/* Thanks Section */}
          <Section style={thanksSectionStyle}>
            <Heading style={thanksHeadingStyle}>Thanks for your Time!</Heading>
          </Section>

          {/* Footer */}
          <Section style={footerSectionStyle}>
            {/* Social Media Icons */}
            <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
              <tr>
                <td style={socialIconsContainerStyle}>
                  <Link href={linkedinUrl} style={socialIconLinkStyle}>
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png"
                      alt="LinkedIn"
                      style={socialIconStyle}
                    />
                  </Link>
                  <Link href={instagramUrl} style={socialIconLinkStyle}>
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                      alt="Instagram"
                      style={socialIconStyle}
                    />
                  </Link>
                  <Link href={vimeoUrl} style={socialIconLinkStyle}>
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/circle/vimeo.png"
                      alt="Vimeo"
                      style={socialIconStyle}
                    />
                  </Link>
                  <Link href={youtubeUrl} style={socialIconLinkStyle}>
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/circle/youtube.png"
                      alt="YouTube"
                      style={socialIconStyle}
                    />
                  </Link>
                </td>
              </tr>
            </table>

            <Text style={footerTextStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </Text>
            <Text style={footerTextStyle}>
              Want to change how you receive these emails? You can update your preferences or{" "}
              <Link href={unsubscribeUrl} style={unsubscribeLinkStyle}>
                unsubscribe
              </Link>{" "}
              from this list.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// Email-safe inline styles
const bodyStyle = {
  fontFamily: "DM Sans, Verdana, sans-serif",
  margin: "0",
  padding: "0",
  backgroundColor: "#ffa14b",
}

const containerStyle = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  maxWidth: "600px",
  width: "100%",
  overflow: "hidden",
}

const headerSectionStyle = {
  padding: "15px 24px 0 24px",
}

const taglineContainerStyle = {
  width: "50%",
  textAlign: "left" as const,
  verticalAlign: "top",
}

const viewBrowserContainerStyle = {
  width: "50%",
  textAlign: "right" as const,
  verticalAlign: "top",
}

const taglineStyle = {
  color: "#b2cacd",
  fontSize: "12px",
  margin: "0",
  fontFamily: "DM Sans, Verdana, sans-serif",
}

const viewBrowserLinkStyle = {
  color: "#3b82f6",
  fontSize: "12px",
  textDecoration: "underline",
  fontFamily: "DM Sans, Verdana, sans-serif",
}

const logoSectionStyle = {
  textAlign: "center" as const,
  padding: "20px 24px",
}

const logoStyle = {
  width: "64px",
  height: "auto",
  display: "block",
  margin: "0 auto 8px auto",
}

const welcomeImageContainerStyle = {
  textAlign: "center" as const,
  padding: "8px 16px 0 16px",
}

const welcomeImageStyle = {
  width: "100%",
  height: "160px",
  backgroundImage:
    "url('https://media.istockphoto.com/id/1492625213/video/animated-single-line-drawing-of-word-welcome.jpg?s=640x640&k=20&c=9nSD4UA4sMafXVE37F0_JkzjL2PlXLUyJM71awtY0n8=')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  borderRadius: "8px",
}

const introSectionStyle = {
  textAlign: "center" as const,
  padding: "0 24px 20px 24px",
}

const introTextStyle = {
  color: "#374151",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0 0 15px 0",
  textAlign: "center" as const,
  fontFamily: "DM Sans, Verdana, sans-serif",
}

const buttonContainerStyle = {
  textAlign: "center" as const,
  padding: "15px 0 0 0",
}

const ctaButtonStyle = {
  backgroundColor: "#623aa2",
  borderRadius: "6px",
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "bold",
  padding: "12px 32px",
  textDecoration: "none",
  display: "inline-block",
  fontFamily: "DM Sans, Verdana, sans-serif",
}

const feedbackSectionStyle = {
  textAlign: "center" as const,
  padding: "20px 24px",
}

const feedbackHeadingStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  margin: "0 0 15px 0",
  color: "#000000",
  textAlign: "center" as const,
  fontFamily: "DM Sans, Verdana, sans-serif",
}

const feedbackIconsContainerStyle = {
  textAlign: "center" as const,
  padding: "15px 0",
  borderTop: "1px solid #ffe8d2",
}

const feedbackIconLinkStyle = {
  textDecoration: "none",
  margin: "0 12px",
  display: "inline-block",
}

const feedbackIconStyle = {
  width: "64px",
  height: "64px",
  display: "inline-block",
}

const feedbackTextStyle = {
  color: "#374151",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0 0 15px 0",
  textAlign: "center" as const,
  fontFamily: "DM Sans, Verdana, sans-serif",
}

const thanksSectionStyle = {
  textAlign: "center" as const,
  padding: "0 24px 20px 24px",
}

const thanksHeadingStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  margin: "0",
  color: "#5e3b99",
  textAlign: "center" as const,
  fontFamily: "DM Sans, Verdana, sans-serif",
}

const footerSectionStyle = {
  backgroundColor: "#623aa2",
  color: "#ffffff",
  textAlign: "center" as const,
  padding: "20px 16px",
}

const socialIconsContainerStyle = {
  textAlign: "center" as const,
  padding: "0 0 15px 0",
}

const socialIconLinkStyle = {
  textDecoration: "none",
  margin: "0 4px",
  display: "inline-block",
}

const socialIconStyle = {
  width: "24px",
  height: "24px",
  display: "inline-block",
}

const footerTextStyle = {
  color: "#ffffff",
  fontSize: "12px",
  margin: "0 0 10px 0",
  textAlign: "center" as const,
  fontFamily: "DM Sans, Verdana, sans-serif",
}

const unsubscribeLinkStyle = {
  color: "#93c5fd",
  textDecoration: "underline",
  fontFamily: "DM Sans, Verdana, sans-serif",
}

// Preview props for development
Hiring.PreviewProps = {
  tagline: "Your tagline here",
  viewInBrowserUrl: "https://example.com/view-email",
  logoUrl: "https://cdn.templates.unlayer.com/assets/1623511770228-LOLO.png",
  welcomeImageUrl:
    "https://media.istockphoto.com/id/1492625213/video/animated-single-line-drawing-of-word-welcome.jpg?s=640x640&k=20&c=9nSD4UA4sMafXVE37F0_JkzjL2PlXLUyJM71awtY0n8=",
  ctaUrl: "https://example.com/begin",
  badFeedbackUrl: "https://example.com/feedback/bad",
  okayFeedbackUrl: "https://example.com/feedback/okay",
  greatFeedbackUrl: "https://example.com/feedback/great",
  badIconUrl: "https://cdn.templates.unlayer.com/assets/1623513776138-i1.png",
  okayIconUrl: "https://cdn.templates.unlayer.com/assets/1623513785859-i2.png",
  greatIconUrl: "https://cdn.templates.unlayer.com/assets/1623513794493-i3.png",
  linkedinUrl: "https://linkedin.com/company/yourcompany",
  instagramUrl: "https://instagram.com/yourcompany",
  vimeoUrl: "https://vimeo.com/yourcompany",
  youtubeUrl: "https://youtube.com/yourcompany",
  preferencesUrl: "https://example.com/preferences",
  unsubscribeUrl: "https://example.com/unsubscribe",
} satisfies FeedbackEmailTemplateProps
