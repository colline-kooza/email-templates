import { Body, Container, Head, Html, Preview, Text, Font, Img, Link, Section } from "@react-email/components"

interface KeepMovingTemplateProps {
  heroImageUrl?: string
  linkedinIconUrl?: string
  twitterIconUrl?: string
  instagramIconUrl?: string
  youtubeIconUrl?: string
  websiteUrl?: string
  unsubscribeUrl?: string
  privacyPolicyUrl?: string
  designerName?: string
  designerUrl?: string
}

export default function KeepMovingTemplate({
  heroImageUrl = "https://img.freepik.com/free-photo/athletic-man-practicing-gymnastics-keep-fit_23-2150989937.jpg",
  linkedinIconUrl = "https://cdn-icons-png.flaticon.com/128/5968/5968764.png",
  twitterIconUrl = "https://cdn-icons-png.flaticon.com/128/145/145807.png",
  instagramIconUrl = "https://cdn-icons-png.flaticon.com/128/3955/3955024.png",
  youtubeIconUrl = "https://cdn-icons-png.flaticon.com/128/5969/5969020.png",
  websiteUrl = "https://www.desishub.com",
  unsubscribeUrl = "#",
  privacyPolicyUrl = "#",
  designerName = "CollinzDev",
  designerUrl = "https://www.unlayer.com",
}: KeepMovingTemplateProps) {
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
          fontStyle="normal"
        />
      </Head>
      <Preview>Stay Fit and Healthy</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Hero Section */}
          <table width="100%" cellPadding="0" cellSpacing="0" border={0} style={heroTableStyle}>
            <tr>
              <td style={heroTdStyle}>
                <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                  <tr>
                    <td style={heroContentStyle}>
                      <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                        <tr>
                          <td align="center" style={{ paddingTop: "40px" }}>
                            <Text style={heroTitleStyle}>KEEP</Text>
                            <Text style={heroTitleStyle}>
                              MO<span style={viStyle}>VI</span>NG
                            </Text>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style={heroBottomStyle}>
                      <Text style={heroSubtitleStyle}>Workouts to Stay Fit</Text>
                      <Text style={heroDescriptionStyle}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic aliquam nulla recusandae ipsa
                        dolor autem inventore reiciendis voluptate voluptas distinctio veritatis....
                      </Text>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          {/* Divider */}
          <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
            <tr>
              <td style={dividerStyle}></td>
            </tr>
          </table>

          {/* Content Section */}
          <Section style={contentSectionStyle}>
            <table width="100%" cellPadding="0" cellSpacing="0" border={0} style={{ padding: "0px 4px" }}>
              {/* First Item - Active */}
              <tr>
                <td style={activeItemStyle}>
                  <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                    <tr>
                      <td style={{ width: "80%" }}>
                        <Text style={itemTextStyle}>Benefits of Regular Exercise</Text>
                      </td>
                      <td align="right" style={{ width: "20%" }}>
                        <div style={activeIconContainerStyle}>
                          <Text style={iconTextStyle}>→</Text>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Second Item */}
              <tr>
                <td style={itemStyle}>
                  <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                    <tr>
                      <td style={{ width: "80%" }}>
                        <Text style={itemTextStyle}>Advantages of eating well</Text>
                      </td>
                      <td align="right" style={{ width: "20%" }}>
                        <div style={iconContainerStyle}>
                          <Text style={iconTextStyle}>→</Text>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* Third Item */}
              <tr>
                <td style={itemStyle}>
                  <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
                    <tr>
                      <td style={{ width: "80%" }}>
                        <Text style={itemTextStyle}>Lorem ipsum dolor sit.</Text>
                      </td>
                      <td align="right" style={{ width: "20%" }}>
                        <div style={iconContainerStyle}>
                          <Text style={iconTextStyle}>→</Text>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </Section>

          {/* Divider */}
          <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
            <tr>
              <td style={dividerStyle}></td>
            </tr>
          </table>

          {/* Footer Section */}
          <Section style={footerSectionStyle}>
            <Text style={footerTitleStyle}>Thanks for the support! 😇</Text>
            <Text style={footerTextStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Sed ut perspiciatis unde omnis iste natus error sit.
            </Text>
            <Text style={footerTextStyle}>
              Please reach out to us if you have any thoughts, praise, or custom project to{" "}
              <Link href={websiteUrl} style={footerLinkStyle}>
                www.desishub.com
              </Link>
              . We'd love to hear from you!
            </Text>

            {/* Social Media Icons */}
            <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
              <tr>
                <td align="center" style={socialContainerStyle}>
                  <Link href="#" style={socialLinkStyle}>
                    <Img src={linkedinIconUrl} alt="LinkedIn" width="24" height="24" style={socialIconStyle} />
                  </Link>
                  <Link href="#" style={socialLinkStyle}>
                    <Img src={twitterIconUrl} alt="Twitter" width="24" height="24" style={socialIconStyle} />
                  </Link>
                  <Link href="#" style={socialLinkStyle}>
                    <Img src={instagramIconUrl} alt="Instagram" width="24" height="24" style={socialIconStyle} />
                  </Link>
                  <Link href="#" style={socialLinkStyle}>
                    <Img src={youtubeIconUrl} alt="YouTube" width="24" height="24" style={socialIconStyle} />
                  </Link>
                </td>
              </tr>
            </table>

            {/* Footer Links */}
            <table width="100%" cellPadding="0" cellSpacing="0" border={0}>
              <tr>
                <td align="center" style={footerLinksContainerStyle}>
                  <Link href={unsubscribeUrl} style={footerNavLinkStyle}>
                    UNSUBSCRIBE
                  </Link>
                  <span style={footerSeparatorStyle}>|</span>
                  <Link href={privacyPolicyUrl} style={footerNavLinkStyle}>
                    PRIVACY POLICY
                  </Link>
                  <span style={footerSeparatorStyle}>|</span>
                  <Link href={websiteUrl} style={footerNavLinkStyle}>
                    WEB
                  </Link>
                </td>
              </tr>
            </table>

            <Text style={copyrightStyle}>
              Designed by{" "}
              <Link href={designerUrl} style={designerLinkStyle}>
                {designerName}
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
  backgroundColor: "#f5f5f5",
  margin: "0",
  padding: "0",
  paddingBottom: "8px",
  fontFamily: "Roboto, Verdana, sans-serif",
}

const containerStyle = {
  maxWidth: "600px",
  margin: "0 auto",
  backgroundColor: "#000000",
  color: "#ffffff",
}

// Hero Section Styles
const heroTableStyle = {
  backgroundColor: "#000000",
  backgroundImage: `url("https://img.freepik.com/free-photo/athletic-man-practicing-gymnastics-keep-fit_23-2150989937.jpg")`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "400px",
}

const heroTdStyle = {
  position: "relative" as const,
  verticalAlign: "top",
  height: "400px",
}

const heroContentStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  height: "300px",
  verticalAlign: "top",
}

const heroTitleStyle = {
  fontSize: "48px",
  fontWeight: "bold",
  color: "#ffffff",
  margin: "0",
  lineHeight: "1.2",
  textAlign: "center" as const,
}

const viStyle = {
  color: "#ff9900",
}

const heroBottomStyle = {
  backgroundColor: "rgba(9, 9, 11, 0.8)",
  padding: "20px",
  verticalAlign: "bottom",
}

const heroSubtitleStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#ffffff",
  margin: "0 0 10px 0",
  textAlign: "center" as const,
}

const heroDescriptionStyle = {
  fontSize: "12px",
  color: "#cccccc",
  margin: "0",
  textAlign: "center" as const,
  lineHeight: "1.4",
  padding: "0 40px",
}

// Divider Style
const dividerStyle = {
  height: "1px",
  backgroundColor: "#ffffff",
  fontSize: "0",
  lineHeight: "0",
}

// Content Section Styles
const contentSectionStyle = {
  backgroundColor: "#000000",
  padding: "10px",
}

const activeItemStyle = {
  backgroundColor: "#000000",
  padding: "15px",
  borderRadius: "5px",
  marginBottom: "10px",
}

const itemStyle = {
  backgroundColor: "#000000",
  padding: "15px",
  borderRadius: "5px",
  marginTop: "10px",
}

const itemTextStyle = {
  fontSize: "14px",
  color: "#ffffff",
  margin: "0",
}

const activeIconContainerStyle = {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  borderTop: "1px solid #ffffff",
  borderLeft: "1px solid #ffffff",
  borderRight: "1px solid #ff6600",
  borderBottom: "1px solid #ff6600",
  textAlign: "center" as const,
  display: "inline-block",
}

const iconContainerStyle = {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  borderTop: "1px solid #ffffff",
  borderLeft: "1px solid #ffffff",
  textAlign: "center" as const,
  display: "inline-block",
}

const iconTextStyle = {
  fontSize: "18px",
  color: "#ffffff",
  margin: "0",
  lineHeight: "32px",
}

// Footer Section Styles
const footerSectionStyle = {
  backgroundColor: "#000000",
  padding: "20px",
  textAlign: "center" as const,
}

const footerTitleStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#ffffff",
  margin: "0 0 10px 0",
  textAlign: "center" as const,
}

const footerTextStyle = {
  fontSize: "14px",
  color: "#ffffff",
  margin: "0 0 10px 0",
  textAlign: "center" as const,
  lineHeight: "1.4",
}

const footerLinkStyle = {
  color: "#ea580c",
  textDecoration: "underline",
}

const socialContainerStyle = {
  padding: "15px 0",
}

const socialLinkStyle = {
  textDecoration: "none",
  display: "inline-block",
  marginLeft: "4px",
  marginRight: "4px",
}

const socialIconStyle = {
  width: "24px",
  height: "24px",
}

const footerLinksContainerStyle = {
  padding: "10px 0",
}

const footerNavLinkStyle = {
  color: "#ea580c",
  fontSize: "12px",
  textDecoration: "underline",
}

const footerSeparatorStyle = {
  color: "#666666",
  fontSize: "12px",
  margin: "0 5px",
}

const copyrightStyle = {
  fontSize: "12px",
  color: "#666666",
  margin: "15px 0 0 0",
  textAlign: "center" as const,
}

const designerLinkStyle = {
  color: "#ea580c",
  textDecoration: "underline",
}

// Preview props for development
KeepMovingTemplate.PreviewProps = {
  heroImageUrl: "https://img.freepik.com/free-photo/athletic-man-practicing-gymnastics-keep-fit_23-2150989937.jpg",
  linkedinIconUrl: "https://cdn-icons-png.flaticon.com/128/5968/5968764.png",
  twitterIconUrl: "https://cdn-icons-png.flaticon.com/128/145/145807.png",
  instagramIconUrl: "https://cdn-icons-png.flaticon.com/128/3955/3955024.png",
  youtubeIconUrl: "https://cdn-icons-png.flaticon.com/128/5969/5969020.png",
  websiteUrl: "https://www.desishub.com",
  unsubscribeUrl: "#",
  privacyPolicyUrl: "#",
  designerName: "CollinzDev",
  designerUrl: "https://www.unlayer.com",
} satisfies KeepMovingTemplateProps
