import {
  Body,
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

interface WorkAnniversaryEmailProps {
  employeeName?: string;
  yearsOfService?: string;
  companyName?: string;
  companyAddress?: string;
  facebookUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
  twitterUrl?: string;
  celebrateUrl?: string;
}

export default function WorkAnniversary({
  employeeName = "Team Member",
  yearsOfService = "1",
  companyName = "COMPANY NAME",
  companyAddress = "2261 Market Street #4567San Francisco, CA 94114",
  facebookUrl = "https://facebook.com",
  linkedinUrl = "https://linkedin.com",
  instagramUrl = "https://instagram.com",
  twitterUrl = "https://twitter.com",
  celebrateUrl = "#",
}: WorkAnniversaryEmailProps) {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap');
          
          * {
            box-sizing: border-box;
          }
          
          body {
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            min-width: 100% !important;
          }
          
          table {
            border-collapse: collapse !important;
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
          }
          
          img {
            max-width: 100% !important;
            height: auto !important;
            display: block !important;
          }
          
          @media only screen and (max-width: 600px) {
            .email-container {
              width: 100% !important;
              max-width: 100% !important;
              margin: 0 !important;
            }
            
            .mobile-padding { 
              padding: 30px 20px !important; 
            }
            
            .mobile-padding-sm { 
              padding: 20px !important; 
            }
            
            .mobile-text-xs { 
              font-size: 12px !important; 
            }
            
            .mobile-text-sm { 
              font-size: 14px !important; 
            }
            
            .mobile-text-base { 
              font-size: 16px !important; 
            }
            
            .mobile-text-lg { 
              font-size: 18px !important; 
            }
            
            .mobile-text-xl { 
              font-size: 20px !important; 
            }
            
            .mobile-text-2xl { 
              font-size: 24px !important; 
            }
            
            .mobile-text-3xl { 
              font-size: 28px !important; 
            }
            
            .mobile-text-4xl { 
              font-size: 32px !important; 
            }
            
            .mobile-hidden { 
              display: none !important; 
            }
            
            .mobile-full-width { 
              width: 100% !important; 
              max-width: 100% !important;
            }
            
            .mobile-center { 
              text-align: center !important; 
            }
            
            .mobile-stack {
              display: block !important;
              width: 100% !important;
            }
            
            .mobile-stack-item {
              display: block !important;
              width: 100% !important;
              padding: 0 !important;
              margin-bottom: 15px !important;
            }
            
            .mobile-button-full { 
              width: 90% !important; 
              max-width: 280px !important;
            }
            
            .mobile-table-full {
              width: 100% !important;
            }
            
            .mobile-section-padding {
              padding: 40px 20px !important;
            }
            
            .mobile-social-stack {
              display: block !important;
              text-align: center !important;
            }
            
            .mobile-social-item {
              display: inline-block !important;
              margin: 0 8px !important;
            }
          }
          
          @media only screen and (max-width: 480px) {
            .mobile-text-2xl {
              font-size: 20px !important;
            }
            
            .mobile-text-3xl {
              font-size: 24px !important;
            }
            
            .mobile-text-4xl {
              font-size: 28px !important;
            }
          }
        `}</style>
      </Head>
      <Preview>
        🎉 Happy Work Anniversary! Celebrating your dedication and success with
        us
      </Preview>
      <Tailwind>
        <Body
          className="bg-gray-100 m-0 p-0"
          style={{
            fontFamily: "Inter, sans-serif",
            margin: "0",
            padding: "20px 0",
            width: "100%",
            minWidth: "100%",
            backgroundColor: "#f3f4f6",
          }}
        >
          <Container
            className="mx-auto email-container"
            style={{
              maxWidth: "600px",
              width: "100%",
              margin: "0 auto",
              backgroundColor: "#fef7ed",
              borderRadius: "0",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Full Template as Background Image */}
            <Section className="px-0 py-0 bg-[url('https://res.cloudinary.com/dirpuqqib/image/upload/v1750947619/1652772957108-BG2_rl6gvq.png')] bg-cover bg-no-repeat bg-center">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%" }}
                className="mobile-table-full"
              >
                <tr>
                  <td style={{ padding: "0", textAlign: "center" }}>
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{
                        borderCollapse: "collapse",

                        width: "100%",
                        height: "100%",
                        zIndex: "2",
                      }}
                    >
                      <tr>
                        <td
                          style={{
                            textAlign: "center",
                            verticalAlign: "middle",
                            padding: "40px",
                          }}
                          className="mobile-section-padding"
                        >
                          {/* Logo Area - positioned at top */}
                          <div
                            style={{ marginTop: "80px", marginBottom: "40px" }}
                          >
                            <Text
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "16px",
                                color: "#61462e",
                                margin: "0",
                                fontWeight: "600",
                              }}
                            >
                              [Your Logo]
                            </Text>
                          </div>

                          {/* Main Content Area */}
                          <div
                            style={{ marginTop: "120px", marginBottom: "80px" }}
                          >
                            <Text
                              className="mobile-text-sm"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "14px",
                                color: "#61462e",
                                margin: "0 0 16px 0",
                                fontWeight: "500",
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                              }}
                            >
                              WE WISH YOU A VERY
                            </Text>

                            <Heading
                              className="mobile-text-3xl"
                              style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "36px",
                                lineHeight: "1.2",
                                margin: "0 0 24px 0",
                                color: "#61462e",
                                fontWeight: "700",
                                textAlign: "center",
                              }}
                            >
                              Happy Work
                              <br />
                              Anniversary
                            </Heading>

                            <Text
                              className="mobile-text-base"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "16px",
                                lineHeight: "1.6",
                                margin: "0 0 32px 0",
                                color: "#61462e",
                                maxWidth: "400px",
                                marginLeft: "auto",
                                marginRight: "auto",
                                textAlign: "center",
                              }}
                            >
                              You have been an essential part of our
                              organization's journey and success. We are
                              extremely grateful for the dedication and passion
                              you have shown. Thank you for being with us.
                            </Text>

                            <Text
                              className="mobile-text-base"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "16px",
                                margin: "0 0 40px 0",
                                color: "#61462e",
                                fontWeight: "600",
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                              }}
                            >
                              LET'S CELEBRATE TOGETHER
                            </Text>
                          </div>
                          {/* Social Media Icons */}
                          <table
                            cellPadding="0"
                            cellSpacing="0"
                            style={{
                              borderCollapse: "collapse",
                              margin: "0 auto 0px auto",
                            }}
                          >
                            
                            <tr>
                              <td style={{ padding: "0 5px" }}>
                                <Link href={linkedinUrl}>
                                  <Img
                                    src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                                    alt="LinkedIn"
                                    width="30"
                                    height="30"
                                    style={{ display: "block" }}
                                  />
                                </Link>
                              </td>
                              <td style={{ padding: "0 5px" }}>
                                <Link href="">
                                  <Img
                                    src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                                    alt="Twitter"
                                    width="30"
                                    height="30"
                                    style={{ display: "block" }}
                                  />
                                </Link>
                              </td>
                              <td style={{ padding: "0 5px" }}>
                                <Link href={facebookUrl}>
                                  <Img
                                    src="https://cdn.tools.unlayer.com/social/icons/rounded/skype.png"
                                    alt="Skype"
                                    width="30"
                                    height="30"
                                    style={{ display: "block" }}
                                  />
                                </Link>
                              </td>
                              <td style={{ padding: "0 5px" }}>
                                <Link href={instagramUrl}>
                                  <Img
                                    src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                                    alt="Instagram"
                                    width="30"
                                    height="30"
                                    style={{ display: "block" }}
                                  />
                                </Link>
                              </td>
                            </tr>


                          </table>
                          {/* Footer Content */}
                          <div style={{ marginTop: "30px" }}>
                            <Text
                              className="mobile-text-sm"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "14px",
                                color: "#61462e",
                                margin: "0 0 8px 0",
                                fontWeight: "500",
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                              }}
                            >
                              BEST REGARDS
                            </Text>

                            <Text
                              className="mobile-text-lg"
                              style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "18px",
                                color: "#61462e",
                                margin: "0 0 20px 0",
                                fontWeight: "700",
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                              }}
                            >
                              {companyName}
                            </Text>

                            {/* Social Media Icons - #61462e for overlay */}
                            <table
                              cellPadding="0"
                              cellSpacing="0"
                              style={{
                                borderCollapse: "collapse",
                                margin: "0 auto 20px auto",
                              }}
                              className="mobile-social-stack"
                            >
                              <tr className="mobile-social-stack">
                                <td
                                  style={{ padding: "0 8px" }}
                                  className="mobile-social-item"
                                >
                                  <Link href={facebookUrl}>
                                    <div
                                      style={{
                                        width: "32px",
                                        height: "32px",
                                        backgroundColor: "#61462e",
                                        borderRadius: "6px",
                                        display: "inline-block",
                                      }}
                                    ></div>
                                  </Link>
                                </td>
                                <td
                                  style={{ padding: "0 8px" }}
                                  className="mobile-social-item"
                                >
                                  <Link href={linkedinUrl}>
                                    <div
                                      style={{
                                        width: "32px",
                                        height: "32px",
                                        backgroundColor: "#61462e",
                                        borderRadius: "6px",
                                        display: "inline-block",
                                      }}
                                    ></div>
                                  </Link>
                                </td>
                                <td
                                  style={{ padding: "0 8px" }}
                                  className="mobile-social-item"
                                >
                                  <Link href={instagramUrl}>
                                    <div
                                      style={{
                                        width: "32px",
                                        height: "32px",
                                        backgroundColor: "#61462e",
                                        borderRadius: "6px",
                                        display: "inline-block",
                                      }}
                                    ></div>
                                  </Link>
                                </td>
                                <td
                                  style={{ padding: "0 8px" }}
                                  className="mobile-social-item"
                                >
                                  <Link href={twitterUrl}>
                                    <div
                                      style={{
                                        width: "32px",
                                        height: "32px",
                                        backgroundColor: "#61462e",
                                        borderRadius: "6px",
                                        display: "inline-block",
                                      }}
                                    ></div>
                                  </Link>
                                </td>
                              </tr>
                            </table>

                            <Text
                              className="mobile-text-xs"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "12px",
                                color: "#61462e",
                                margin: "0",
                                lineHeight: "1.4",
                              }}
                            >
                              {companyAddress}
                            </Text>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

WorkAnniversary.PreviewProps = {
  employeeName: "John Doe",
  yearsOfService: "3",
  companyName: "COMPANY NAME",
  companyAddress: "2261 Market Street #4567San Francisco, CA 94114",
  facebookUrl: "https://facebook.com/example",
  linkedinUrl: "https://linkedin.com/company/example",
  instagramUrl: "https://instagram.com/example",
  twitterUrl: "https://twitter.com/example",
  celebrateUrl: "https://example.com/celebrate",
} satisfies WorkAnniversaryEmailProps;
