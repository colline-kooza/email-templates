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

interface UniversityOnboardingEmailProps {
  universityName?: string;
  readMoreUrl?: string;
  contactEmail?: string;
  phoneNumber?: string;
  facebookUrl?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
  pinterestUrl?: string;
  youtubeUrl?: string;
  unsubscribeUrl?: string;
}

export default function UniversityOnboarding({
  universityName = "[University Name]",
  readMoreUrl = "#",
  contactEmail = "email@website.com",
  phoneNumber = "+12 345 6789",
  facebookUrl = "https://facebook.com",
  twitterUrl = "https://twitter.com",
  linkedinUrl = "https://linkedin.com",
  instagramUrl = "https://instagram.com",
  pinterestUrl = "https://pinterest.com",
  youtubeUrl = "https://youtube.com",
  unsubscribeUrl = "#",
}: UniversityOnboardingEmailProps) {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');
          
          @media only screen and (max-width: 600px) {
            .mobile-padding { padding: 20px !important; }
            .mobile-text-sm { font-size: 14px !important; }
            .mobile-text-base { font-size: 16px !important; }
            .mobile-text-lg { font-size: 20px !important; }
            .mobile-text-xl { font-size: 24px !important; }
            .mobile-hidden { display: none !important; }
            .mobile-full-width { width: 100% !important; }
            .mobile-center { text-align: center !important; }
          }
        `}</style>
      </Head>
      <Preview>
        Get Ready to Shine - Your University Onboarding Starts Here
      </Preview>
      <Tailwind>
        <Body
          className="bg-[#e3f1fd] m-0 p-0"
          style={{ 
            fontFamily: "Inter, sans-serif",
            margin: "0",
            padding: "0",
            width: "100%"
          }}
        >
          <Container 
            className="mx-auto"
            style={{ 
              maxWidth: "600px",
              width: "100%",
              margin: "0 auto"
            }}
          >
            {/* Hero Section */}
            <Section
              className="px-0 py-0"
              style={{ backgroundColor: "#0d302b" }}
            >
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse" }}
              >
                <tr>
                  <td
                    className="mobile-padding"
                    style={{ padding: "30px 20px 0px 20px", textAlign: "center" }}
                  >
                    <Heading
                      className="m-0 mb-2 font-bold text-white mobile-text-xl"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "32px",
                        lineHeight: "1.2",
                        margin: "0 0 8px 0",
                      }}
                    >
                      Get Ready to Shine
                    </Heading>
                    <Heading
                      className="m-0 mb-8 font-medium text-white mobile-text-lg"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "24px",
                        lineHeight: "1.3",
                        margin: "0 0 40px 0",
                        opacity: "0.9",
                      }}
                    >
                      Your Onboarding Starts Here
                    </Heading>

                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse" }}
                    >
                      <tr>
                        <td style={{ textAlign: "center", padding: "0 10px" }}>
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1736760041843-12129813.jpg-1.png"
                            alt="Happy students with laptops"
                            style={{
                              display: "block",
                              margin: "0 auto",
                              borderRadius: "12px",
                              maxWidth: "100%",
                              width: "100%",
                              height: "auto",
                            }}
                          />
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Welcome Content Section */}
            <Section className="px-0 py-0 bg-white">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse" }}
              >
                <tr>
                  <td 
                    className="mobile-padding"
                    style={{ padding: "50px", textAlign: "center" }}
                  >
                    <Text
                      className="m-0 mb-8 text-gray-700 mobile-text-sm"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.7",
                        maxWidth: "480px",
                        margin: "0 auto 40px auto",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor ut labore et dolore magna aliqua.
                      Duis ipsum suspen disse ultrices gravida. Risus commodo
                      viverra duis.
                    </Text>

                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", margin: "0 auto" }}
                    >
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <Link
                            href={readMoreUrl}
                            className="mobile-text-sm"
                            style={{
                              backgroundColor: "#0d302b",
                              color: "white",
                              padding: "14px 32px",
                              textDecoration: "none",
                              borderRadius: "6px",
                              fontSize: "16px",
                              fontWeight: "600",
                              fontFamily: "Inter, sans-serif",
                              display: "inline-block",
                              textTransform: "capitalize",
                            }}
                          >
                            Read more
                          </Link>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* University Unique Section */}
            <Section
              className="px-0 py-0"
              style={{ backgroundColor: "#e6f3ff" }}
            >
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse" }}
              >
                <tr>
                  <td 
                    className="mobile-padding"
                    style={{ padding: "50px", textAlign: "center" }}
                  >
                    <Heading
                      className="m-0 mb-8 font-bold text-gray-900 mobile-text-lg"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "23px",
                        lineHeight: "1.3",
                        margin: "0 0 40px 0",
                      }}
                    >
                      Discover What Makes {universityName} Unique
                    </Heading>

                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse" }}
                    >
                      <tr>
                        <td
                          style={{ textAlign: "center", paddingBottom: "40px", padding: "0 10px 40px 10px" }}
                        >
                          <Img
                            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500&h=350&fit=crop&crop=faces"
                            alt="Students studying together on stairs"
                            style={{
                              display: "block",
                              margin: "0 auto",
                              borderRadius: "12px",
                              maxWidth: "100%",
                              width: "100%",
                              height: "auto",
                              boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                            }}
                          />
                        </td>
                      </tr>
                    </table>

                    {/* Features List */}
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse" }}
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <tr key={num}>
                          <td style={{ padding: "20px 0", textAlign: "left" }}>
                            <table
                              width="100%"
                              cellPadding="0"
                              cellSpacing="0"
                              style={{ borderCollapse: "collapse" }}
                            >
                              <tr>
                                <td
                                  style={{
                                    width: "60px",
                                    verticalAlign: "top",
                                    paddingRight: "20px",
                                  }}
                                >
                                  <div
                                    style={{
                                      backgroundColor: "#0d302b",
                                      color: "white",
                                      width: "40px",
                                      height: "40px",
                                      borderRadius: "8px",
                                      fontSize: "18px",
                                      fontWeight: "700",
                                      fontFamily: "Poppins, sans-serif",
                                    }}
                                  >
                                    <table
                                      width="100%"
                                      cellPadding="0"
                                      cellSpacing="0"
                                      style={{
                                        borderCollapse: "collapse",
                                        height: "100%",
                                      }}
                                    >
                                      <tr>
                                        <td
                                          style={{
                                            textAlign: "center",
                                            verticalAlign: "middle",
                                          }}
                                        >
                                          0{num}
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                                <td style={{ verticalAlign: "top" }}>
                                  <Heading
                                    className="m-0 mb-2 font-semibold mobile-text-base"
                                    style={{
                                      fontFamily: "Poppins, sans-serif",
                                      fontSize: "18px",
                                      color: "#e67e22",
                                      margin: "0 0 8px 0",
                                    }}
                                  >
                                    Lorem ipsum
                                  </Heading>
                                  <Text
                                    className="m-0 text-gray-700 mobile-text-sm"
                                    style={{
                                      fontFamily: "Inter, sans-serif",
                                      fontSize: "15px",
                                      lineHeight: "1.6",
                                      margin: "0",
                                    }}
                                  >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor ut
                                    labore et dolore magna aliqua. Duis ipsum
                                    suspen disse ultrices gravida.
                                  </Text>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      ))}
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Footer */}
            <Section
              className="px-0 py-0"
              style={{ backgroundColor: "#0d302b" }}
            >
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse" }}
              >
                <tr>
                  <td 
                    className="mobile-padding"
                    style={{ padding: "40px", textAlign: "center" }}
                  >
                    {/* Social Media Icons */}
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", margin: "0 auto 20px auto" }}
                    >
                      <tr>
                        <td style={{ padding: "0 5px" }}>
                          <Link href={linkedinUrl}>
                            <Img
                              src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                              alt="LinkedIn"
                              width="24"
                              height="24"
                              style={{ display: "block" }}
                            />
                          </Link>
                        </td>
                        <td style={{ padding: "0 5px" }}>
                          <Link href={twitterUrl}>
                            <Img
                              src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                              alt="Twitter"
                              width="24"
                              height="24"
                              style={{ display: "block" }}
                            />
                          </Link>
                        </td>
                        <td style={{ padding: "0 5px" }}>
                          <Link href={facebookUrl}>
                            <Img
                              src="https://cdn.tools.unlayer.com/social/icons/rounded/skype.png"
                              alt="Skype"
                              width="24"
                              height="24"
                              style={{ display: "block" }}
                            />
                          </Link>
                        </td>
                        <td style={{ padding: "0 5px" }}>
                          <Link href={instagramUrl}>
                            <Img
                              src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                              alt="Instagram"
                              width="24"
                              height="24"
                              style={{ display: "block" }}
                            />
                          </Link>
                        </td>
                      </tr>
                    </table>

                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse" }}
                    >
                      <tr>
                        <td
                          style={{ textAlign: "center", paddingBottom: "8px" }}
                        >
                          <Text
                            className="m-0 text-white mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              lineHeight: "1.5",
                            }}
                          >
                            {contactEmail}
                          </Text>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ textAlign: "center", paddingBottom: "20px" }}
                        >
                          <Text
                            className="m-0 text-white mobile-text-sm"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              opacity: "0.9",
                            }}
                          >
                            {phoneNumber}
                          </Text>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Unsubscribe Section */}
            <Section 
              className="bg-gray-100 text-center"
              style={{ padding: "16px 24px" }}
            >
              <Text
                className="m-0 text-xs text-gray-500 mobile-text-sm"
                style={{ 
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  lineHeight: "1.5"
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.{" "}
                <Link
                  href={unsubscribeUrl}
                  style={{ color: "#3b82f6", textDecoration: "none" }}
                >
                  Unsubscribe
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

UniversityOnboarding.PreviewProps = {
  universityName: "[University Name]",
  readMoreUrl: "https://example.com/read-more",
  contactEmail: "email@website.com",
  phoneNumber: "+12 345 6789",
  facebookUrl: "https://facebook.com/university",
  twitterUrl: "https://twitter.com/university",
  linkedinUrl: "https://linkedin.com/university",
  instagramUrl: "https://instagram.com/university",
  pinterestUrl: "https://pinterest.com/university",
  youtubeUrl: "https://youtube.com/university",
  unsubscribeUrl: "https://example.com/unsubscribe",
} satisfies UniversityOnboardingEmailProps;