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

interface FitnessGymEmailProps {
  companyName?: string;
  membershipUrl?: string;
  timingsUrl?: string;
  trainersUrl?: string;
  promotionsUrl?: string;
  visitUsUrl?: string;
  subscribeNowUrl?: string;
  moreAboutUsUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  address?: string;
}

export default function FitnessGym({
  companyName = "company",
  membershipUrl = "#",
  timingsUrl = "#",
  trainersUrl = "#",
  promotionsUrl = "#",
  visitUsUrl = "#",
  subscribeNowUrl = "#",
  moreAboutUsUrl = "#",
  facebookUrl = "https://facebook.com",
  instagramUrl = "https://instagram.com",
  twitterUrl = "https://twitter.com",
  youtubeUrl = "https://youtube.com",
  address = "2261 Market Street #4567 San Francisco, CA 94114",
}: FitnessGymEmailProps) {
  return (
    <Html>
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap');
        `}</style>
      </Head>
      <Preview>
        Fitness Club - Bodies of Stamina & Strength - New Members Get One Month
        Free
      </Preview>
      <Tailwind>
        <Body
          className="bg-gray-100"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <Container className="mx-auto w-full max-w-[600px]">
            {/* Header Navigation */}
            <Section
              className="px-0 py-0"
              style={{ backgroundColor: "#1a1a1a" }}
            >
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse" }}
              >
                <tr>
                  <td style={{ padding: "15px 20px" }}>
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse" }}
                    >
                      <tr>
                        <td style={{ width: "30%", verticalAlign: "middle" }}>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <div
                              style={{
                                width: "20px",
                                height: "20px",
                                backgroundColor: "#ef4444",
                                marginRight: "8px",
                                transform: "rotate(45deg)",
                              }}
                            ></div>
                            <Text
                              className="m-0 text-white"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "14px",
                                fontWeight: "500",
                                margin: "0",
                              }}
                            >
                              {companyName}
                            </Text>
                          </div>
                        </td>
                        <td
                          style={{
                            width: "70%",
                            textAlign: "right",
                            verticalAlign: "middle",
                          }}
                        >
                          <table
                            cellPadding="0"
                            cellSpacing="0"
                            style={{
                              borderCollapse: "collapse",
                              float: "right",
                            }}
                          >
                            <tr>
                              <td style={{ padding: "0 15px" }}>
                                <Link
                                  href={membershipUrl}
                                  style={{
                                    color: "#ffffff",
                                    fontSize: "13px",
                                    fontWeight: "400",
                                    textDecoration: "none",
                                    fontFamily: "Inter, sans-serif",
                                  }}
                                >
                                  Membership
                                </Link>
                              </td>
                              <td style={{ padding: "0 15px" }}>
                                <Link
                                  href={timingsUrl}
                                  style={{
                                    color: "#ffffff",
                                    fontSize: "13px",
                                    fontWeight: "400",
                                    textDecoration: "none",
                                    fontFamily: "Inter, sans-serif",
                                  }}
                                >
                                  timings
                                </Link>
                              </td>
                              <td style={{ padding: "0 15px" }}>
                                <Link
                                  href={trainersUrl}
                                  style={{
                                    color: "#ffffff",
                                    fontSize: "13px",
                                    fontWeight: "400",
                                    textDecoration: "none",
                                    fontFamily: "Inter, sans-serif",
                                  }}
                                >
                                  trainers
                                </Link>
                              </td>
                              <td style={{ padding: "0 0 0 15px" }}>
                                <Link
                                  href={promotionsUrl}
                                  style={{
                                    color: "#ffffff",
                                    fontSize: "13px",
                                    fontWeight: "400",
                                    textDecoration: "none",
                                    fontFamily: "Inter, sans-serif",
                                  }}
                                >
                                  promotions
                                </Link>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Hero Section - Fitness Club */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse" }}
              >
                <tr>
                  <td
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      padding: "80px 40px",
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        zIndex: "1",
                      }}
                    ></div>
                    <div style={{ position: "relative", zIndex: "2" }}>
                      <Heading
                        className="m-0 mb-4 font-bold"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "48px",
                          lineHeight: "1.1",
                          color: "#fbbf24",
                          margin: "0 0 16px 0",
                          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                        }}
                      >
                        FITNESS
                      </Heading>
                      <Heading
                        className="m-0 mb-6 font-bold"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "48px",
                          lineHeight: "1.1",
                          color: "#fbbf24",
                          margin: "0 0 24px 0",
                          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                        }}
                      >
                        CLUB
                      </Heading>
                      <Text
                        className="m-0 mb-8 text-white"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "16px",
                          lineHeight: "1.5",
                          margin: "0 0 32px 0",
                          textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
                        }}
                      >
                        This is a new Text Block! Change the text.
                      </Text>
                      <Link
                        href={visitUsUrl}
                        style={{
                          backgroundColor: "#fbbf24",
                          color: "#000000",
                          padding: "14px 32px",
                          textDecoration: "none",
                          borderRadius: "4px",
                          fontSize: "16px",
                          fontWeight: "600",
                          fontFamily: "Inter, sans-serif",
                          display: "inline-block",
                          textTransform: "uppercase",
                        }}
                      >
                        Visit Us
                      </Link>
                    </div>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Bodies of Stamina & Strength Section */}
            <Section className="px-0 py-0 bg-white">
              <table
                width="100%"
                cellPadding="50"
                cellSpacing="0"
                style={{ borderCollapse: "collapse" }}
              >
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <Heading
                      className="m-0 mb-6 font-bold"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "32px",
                        lineHeight: "1.2",
                        color: "#ef4444",
                        margin: "0 0 24px 0",
                        textTransform: "uppercase",
                      }}
                    >
                      BODIES OF STAMINA &
                    </Heading>
                    <Heading
                      className="m-0 mb-6 font-bold"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "32px",
                        lineHeight: "1.2",
                        color: "#ef4444",
                        margin: "0 0 24px 0",
                        textTransform: "uppercase",
                      }}
                    >
                      STRENGTH
                    </Heading>
                    <Text
                      className="m-0 text-gray-600"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.6",
                        maxWidth: "400px",
                        margin: "0 auto",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Fitness Gym Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse" }}
              >
                <tr>
                  <td
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      padding: "80px 40px",
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        backgroundColor: "rgba(30, 58, 138, 0.8)",
                        zIndex: "1",
                      }}
                    ></div>
                    <div style={{ position: "relative", zIndex: "2" }}>
                      <Heading
                        className="m-0 mb-4 font-bold"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "48px",
                          lineHeight: "1.1",
                          color: "#fbbf24",
                          margin: "0 0 16px 0",
                          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                        }}
                      >
                        FITNESS
                      </Heading>
                      <Heading
                        className="m-0 mb-6 font-bold"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "48px",
                          lineHeight: "1.1",
                          color: "#fbbf24",
                          margin: "0 0 24px 0",
                          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                        }}
                      >
                        GYM
                      </Heading>
                      <Text
                        className="m-0 mb-8 text-white"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "18px",
                          lineHeight: "1.5",
                          margin: "0 0 32px 0",
                          textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
                        }}
                      >
                        New Members get one month free
                      </Text>
                      <Link
                        href={subscribeNowUrl}
                        style={{
                          backgroundColor: "#fbbf24",
                          color: "#000000",
                          padding: "14px 32px",
                          textDecoration: "none",
                          borderRadius: "4px",
                          fontSize: "16px",
                          fontWeight: "600",
                          fontFamily: "Inter, sans-serif",
                          display: "inline-block",
                          textTransform: "uppercase",
                        }}
                      >
                        Subscribe Now
                      </Link>
                    </div>
                  </td>
                </tr>
              </table>
            </Section>

            {/* About Us Section */}
            <Section className="px-0 py-0 bg-white">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse" }}
              >
                <tr>
                  <td
                    style={{ width: "40%", padding: "0", verticalAlign: "top" }}
                  >
                    <Img
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop&crop=faces"
                      alt="Fitness trainers"
                      width="240"
                      height="320"
                      style={{
                        display: "block",
                        width: "100%",
                        maxWidth: "100%",
                      }}
                    />
                  </td>
                  <td
                    style={{
                      width: "60%",
                      padding: "40px 30px",
                      verticalAlign: "top",
                    }}
                  >
                    <Heading
                      className="m-0 mb-6 font-bold text-gray-900"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "28px",
                        lineHeight: "1.2",
                        margin: "0 0 24px 0",
                        textTransform: "uppercase",
                      }}
                    >
                      ABOUT US
                    </Heading>
                    <Text
                      className="m-0 mb-6 text-gray-600"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        lineHeight: "1.6",
                        margin: "0 0 24px 0",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </Text>
                    <Link
                      href={moreAboutUsUrl}
                      style={{
                        backgroundColor: "#1f2937",
                        color: "white",
                        padding: "12px 24px",
                        textDecoration: "none",
                        borderRadius: "4px",
                        fontSize: "14px",
                        fontWeight: "600",
                        fontFamily: "Inter, sans-serif",
                        display: "inline-block",
                        textTransform: "uppercase",
                      }}
                    >
                      More About Us
                    </Link>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Our Trainers Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse" }}
              >
                <tr>
                  <td
                    style={{
                      backgroundColor: "#ec4899",
                      padding: "20px 0",
                      textAlign: "center",
                    }}
                  >
                    <Heading
                      className="m-0 font-bold text-white"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "24px",
                        lineHeight: "1.2",
                        margin: "0",
                        textTransform: "uppercase",
                      }}
                    >
                      OUR TRAINERS
                    </Heading>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Trainers Profiles */}
            <Section className="px-0 py-0 bg-white">
              <table
                width="100%"
                cellPadding="30"
                cellSpacing="0"
                style={{ borderCollapse: "collapse" }}
              >
                <tr>
                  {/* Sara Jhon */}
                  <td
                    style={{
                      width: "50%",
                      textAlign: "center",
                      verticalAlign: "top",
                      padding: "10px 15px",
                    }}
                  >
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1650874812489-s1.png"
                      alt="Sara Jhon"
                      width="200"
                      height="250"
                      className="object-cover"
                      style={{
                        display: "block",
                        margin: "0 auto 20px auto",
                        
                        maxWidth: "100%",
                      }}
                    />
                    <Heading
                      className="m-0 mb-3 font-semibold text-gray-900"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "18px",
                        margin: "0 0 12px 0",
                      }}
                    >
                      Sara Jhon
                    </Heading>
                    <Text
                      className="m-0 text-gray-600"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        lineHeight: "1.5",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                  </td>

                  {/* Roger Wick */}
                  <td
                    style={{
                      width: "50%",
                      textAlign: "center",
                      verticalAlign: "top",
                      padding: "10px 15px",
                    }}
                  >
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1650874877970-s2.png"
                      alt="Roger Wick"
                      width="200"
                      height="250"
                      className="object-cover"
                      style={{
                        display: "block",
                        margin: "0 auto 20px auto",
                        
                        maxWidth: "100%",
                      }}
                    />
                    <Heading
                      className="m-0 mb-3 font-semibold text-gray-900"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "18px",
                        margin: "0 0 12px 0",
                      }}
                    >
                      Roger Wick
                    </Heading>
                    <Text
                      className="m-0 text-gray-600"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        lineHeight: "1.5",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>

             {/* Footer */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%" }}
                className="mobile-table-full"
              >
                <tr>
                  <td
                    className="mobile-padding"
                    style={{
                      background: "black",
                      padding: "40px 30px",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    {/* Desktop Footer Layout */}
                    <div className="mobile-hidden">
                      <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              textAlign: "left",
                              verticalAlign: "middle",
                            }}
                          >
                            <Heading
                              className="m-0 mb-4 font-bold text-white"
                              style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "18px",
                                margin: "0 0 16px 0",
                              }}
                            >
                              {companyName}
                            </Heading>

                            {/* Social Media Icons */}
                            <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                              <tr>
                                <td style={{ padding: "0 5px" }}>
                                  <Link href="">
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
                                  <Link href="#">
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
                          </td>
                          <td
                            style={{
                              width: "50%",
                              textAlign: "right",
                              verticalAlign: "middle",
                            }}
                          >
                            <Text
                              className="m-0 text-white"
                              style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "14px",
                                lineHeight: "1.6",
                                opacity: "0.9",
                              }}
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna
                            </Text>
                          </td>
                        </tr>
                      </table>
                    </div>

                    {/* Mobile Footer Layout */}
                    <div style={{ display: "none" }} className="mobile-stack">
                      <div style={{ textAlign: "center", marginBottom: "20px" }}>
                        <Heading
                          className="m-0 mb-4 font-bold text-white mobile-text-base"
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "18px",
                            margin: "0 0 16px 0",
                          }}
                        >
                          {companyName}
                        </Heading>

                        {/* Social Media Icons */}
                        <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                          <tr>
                            <td style={{ padding: "0 5px" }}>
                              <Link href="">
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
                              <Link href="#">
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
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <Text
                          className="m-0 text-white mobile-text-sm"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "14px",
                            lineHeight: "1.6",
                            opacity: "0.9",
                          }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna
                        </Text>
                      </div>
                    </div>
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

FitnessGym.PreviewProps = {
  companyName: "company name",
  membershipUrl: "https://example.com/membership",
  timingsUrl: "https://example.com/timings",
  trainersUrl: "https://example.com/trainers",
  promotionsUrl: "https://example.com/promotions",
  visitUsUrl: "https://example.com/visit",
  subscribeNowUrl: "https://example.com/subscribe",
  moreAboutUsUrl: "https://example.com/about",
  facebookUrl: "https://facebook.com/fitnessgym",
  instagramUrl: "https://instagram.com/fitnessgym",
  twitterUrl: "https://twitter.com/fitnessgym",
  youtubeUrl: "https://youtube.com/fitnessgym",
  address: "2261 Market Street #4567 San Francisco, CA 94114",
} satisfies FitnessGymEmailProps;
