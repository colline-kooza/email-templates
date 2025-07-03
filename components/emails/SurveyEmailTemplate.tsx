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

interface SurveyEmailTemplateProps {
  brandName?: string
  logoUrl?: string
  surveyUrl?: string
  illustrationUrl?: string
  dividerUrl?: string
  address?: string
  phone?: string
  email?: string
  updatePreferencesUrl?: string
  unsubscribeUrl?: string
  socialLinks?: {
    facebook?: string
    twitter?: string
    linkedin?: string
    instagram?: string
    whatsapp?: string
  }
}

export default function SurveyEmailTemplate({
  brandName = "YourBrand",
  logoUrl = "https://cdn.templates.unlayer.com/assets/1623275416565-Logo2.png",
  surveyUrl = "#",
  illustrationUrl = "https://cdn.templates.unlayer.com/assets/1623275149208-left.png",
  dividerUrl = "https://cdn.templates.unlayer.com/assets/1623275962787-Divisor_Lines.png",
  address = "xth Street, San Francisco, CA xxxxx, USA",
  phone = "+1 234 568975",
  email = "info@yourdomain.com",
  updatePreferencesUrl = "#",
  unsubscribeUrl = "#",
  socialLinks = {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
    whatsapp: "#",
  },
}: SurveyEmailTemplateProps) {
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
      <Preview>Got a minute? Take our survey!</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header Section */}
          <Section style={headerSectionStyle}>
            <Img src={logoUrl} alt="Logo" style={logoStyle} />
          </Section>

          {/* Main Content Section */}
          <Section style={mainContentStyle}>
            <Heading style={mainHeadingStyle}>Got a minute?</Heading>

            <Text style={introTextStyle}>
              Thanks for being a "{brandName}" newsletter subscriber! We'd appreciate if you take just a few minutes of
              your time to share your thoughts, so we can improve our contents and services. Thank you for taking our
              quick survey!
            </Text>

            {/* Survey Illustration */}
            <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
              <tr>
                <td style={illustrationContainerStyle}>
                  <Img src={illustrationUrl} alt="Survey Illustration" style={illustrationStyle} />
                </td>
              </tr>
            </table>

            {/* Divider */}
            <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
              <tr>
                <td style={dividerContainerStyle}>
                  <Img src={dividerUrl} alt="Divider" style={dividerStyle} />
                </td>
              </tr>
            </table>

            <Heading style={secondaryHeadingStyle}>We're curious</Heading>

            {/* Survey Questions */}
            <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
              <tr>
                <td style={questionsContainerStyle}>
                  <Text style={questionStyle}>☑ Why do you like what we do?</Text>
                  <Text style={questionStyle}>☑ How can we make it better?</Text>
                </td>
              </tr>
            </table>

            {/* Survey Button */}
            <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
              <tr>
                <td style={buttonContainerStyle}>
                  <Button href={surveyUrl} style={surveyButtonStyle}>
                    Take Survey!
                  </Button>
                </td>
              </tr>
            </table>
          </Section>

          {/* Footer Section */}
          <Section style={footerSectionStyle}>
            {/* Social Media Icons */}
            <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
              <tr>
                <td style={socialContainerStyle}>
                  {socialLinks.facebook && (
                    <Link href={socialLinks.facebook} style={socialLinkStyle}>
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/circle-black/facebook.png"
                        alt="Facebook"
                        style={socialIconStyle}
                      />
                    </Link>
                  )}
                  {socialLinks.twitter && (
                    <Link href={socialLinks.twitter} style={socialLinkStyle}>
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/circle-black/twitter.png"
                        alt="Twitter"
                        style={socialIconStyle}
                      />
                    </Link>
                  )}
                  {socialLinks.linkedin && (
                    <Link href={socialLinks.linkedin} style={socialLinkStyle}>
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/circle-black/linkedin.png"
                        alt="LinkedIn"
                        style={socialIconStyle}
                      />
                    </Link>
                  )}
                  {socialLinks.instagram && (
                    <Link href={socialLinks.instagram} style={socialLinkStyle}>
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/circle-black/instagram.png"
                        alt="Instagram"
                        style={socialIconStyle}
                      />
                    </Link>
                  )}
                  {socialLinks.whatsapp && (
                    <Link href={socialLinks.whatsapp} style={socialLinkStyle}>
                      <Img
                        src="https://cdn.tools.unlayer.com/social/icons/circle-black/whatsapp.png"
                        alt="WhatsApp"
                        style={socialIconStyle}
                      />
                    </Link>
                  )}
                </td>
              </tr>
            </table>

            {/* Contact Information */}
            <Text style={contactTextStyle}>{address}</Text>
            <Text style={contactTextStyle}>
              {phone} | {email}
            </Text>

            {/* Footer Links */}
            <Text style={footerLinksStyle}>
              <Link href={updatePreferencesUrl} style={footerLinkStyle}>
                Update
              </Link>
              <span style={footerSeparatorStyle}> | </span>
              <Link href={unsubscribeUrl} style={footerLinkStyle}>
                Unsubscribe
              </Link>
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
  backgroundColor: "#f5f5f5",
}

const containerStyle = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px",
  maxWidth: "600px",
  width: "100%",
}

const headerSectionStyle = {
  textAlign: "center" as const,
  padding: "20px 0",
}

const logoStyle = {
  height: "30px",
  maxWidth: "100%",
  display: "block",
  margin: "0 auto",
}

const mainContentStyle = {
  textAlign: "center" as const,
  padding: "20px 0",
}

const mainHeadingStyle = {
  color: "#4242e2",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 20px 0",
  textAlign: "center" as const,
  fontFamily: "DM Sans, Verdana, sans-serif",
}

const introTextStyle = {
  color: "#374151",
  fontSize: "12px",
  lineHeight: "1.5",
  margin: "0 30px 25px 30px",
  textAlign: "center" as const,
  fontFamily: "DM Sans, Verdana, sans-serif",
}

const illustrationContainerStyle = {
  textAlign: "center" as const,
  padding: "0 0 25px 0",
}

const illustrationStyle = {
  width: "100%",
  maxWidth: "400px",
  height: "auto",
  display: "block",
  margin: "0 auto",
}

const dividerContainerStyle = {
  textAlign: "center" as const,
  padding: "0 0 25px 0",
}

const dividerStyle = {
  width: "100%",
  height: "20px",
  display: "block",
  margin: "0 auto",
}

const secondaryHeadingStyle = {
  color: "#000000",
  fontSize: "20px",
  fontWeight: "bold",
  margin: "0 0 20px 0",
  textAlign: "center" as const,
  fontFamily: "DM Sans, Verdana, sans-serif",
}

const questionsContainerStyle = {
  textAlign: "center" as const,
  padding: "0 0 25px 0",
}

const questionStyle = {
  color: "#374151",
  fontSize: "14px",
  margin: "0 0 5px 0",
  textAlign: "center" as const,
  fontFamily: "DM Sans, Verdana, sans-serif",
}

const buttonContainerStyle = {
  textAlign: "center" as const,
  padding: "0 0 30px 0",
}

const surveyButtonStyle = {
  backgroundColor: "#4242e2",
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "bold",
  padding: "12px 28px",
  textDecoration: "none",
  borderRadius: "25px",
  border: "none",
  display: "inline-block",
  fontFamily: "DM Sans, Verdana, sans-serif",
}

const footerSectionStyle = {
  textAlign: "center" as const,
  padding: "20px 0",
}

const socialContainerStyle = {
  textAlign: "center" as const,
  padding: "0 0 20px 0",
}

const socialLinkStyle = {
  textDecoration: "none",
  margin: "0 2px",
  display: "inline-block",
}

const socialIconStyle = {
  width: "25px",
  height: "25px",
  borderRadius: "10%",
  display: "inline-block",
}

const contactTextStyle = {
  color: "#374151",
  fontSize: "12px",
  margin: "0 0 5px 0",
  textAlign: "center" as const,
  fontFamily: "DM Sans, Verdana, sans-serif",
}

const footerLinksStyle = {
  margin: "15px 0 0 0",
  textAlign: "center" as const,
  fontFamily: "DM Sans, Verdana, sans-serif",
}

const footerLinkStyle = {
  color: "#000000",
  fontSize: "12px",
  fontWeight: "600",
  textDecoration: "none",
  fontFamily: "DM Sans, Verdana, sans-serif",
}

const footerSeparatorStyle = {
  color: "#9ca3af",
  fontSize: "12px",
  fontFamily: "DM Sans, Verdana, sans-serif",
}

// Preview props for development
SurveyEmailTemplate.PreviewProps = {
  brandName: "YourBrand",
  logoUrl: "https://cdn.templates.unlayer.com/assets/1623275416565-Logo2.png",
  surveyUrl: "https://example.com/survey",
  illustrationUrl: "https://cdn.templates.unlayer.com/assets/1623275149208-left.png",
  dividerUrl: "https://cdn.templates.unlayer.com/assets/1623275962787-Divisor_Lines.png",
  address: "123 Main Street, San Francisco, CA 94102, USA",
  phone: "+1 234 568975",
  email: "info@yourdomain.com",
  updatePreferencesUrl: "https://example.com/preferences",
  unsubscribeUrl: "https://example.com/unsubscribe",
  socialLinks: {
    facebook: "https://facebook.com/yourbrand",
    twitter: "https://twitter.com/yourbrand",
    linkedin: "https://linkedin.com/company/yourbrand",
    instagram: "https://instagram.com/yourbrand",
    whatsapp: "https://wa.me/1234568975",
  },
} satisfies SurveyEmailTemplateProps
