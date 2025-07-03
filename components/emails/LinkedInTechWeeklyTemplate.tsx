import { Body, Container, Column, Head, Html, Img, Link, Preview, Row, Section, Text } from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

export const LinkedInTechWeeklyTemplate = () => {
  return (
    <Html>
      <Preview>Consistent Hashing: Behind Scalable Distributed Systems - techweekly</Preview>
      <Head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
            * {
              font-family: 'DM Sans', Arial, sans-serif;
              box-sizing: border-box;
            }
            
            /* Mobile First Responsive Design */
            @media only screen and (max-width: 600px) {
              .mobile-full-width {
                width: 100% !important;
                display: block !important;
              }
              
              .mobile-center {
                text-align: center !important;
              }
              
              .mobile-stack {
                display: block !important;
                width: 100% !important;
                padding: 0 !important;
                margin-bottom: 15px !important;
              }
              
              .mobile-hide {
                display: none !important;
              }
              
              .mobile-logo {
                width: 80px !important;
                height: auto !important;
              }
              
              .mobile-avatar {
                width: 30px !important;
                height: 30px !important;
              }
              
              .mobile-hero-image {
                width: 100% !important;
                max-width: 350px !important;
                height: auto !important;
                margin: 0 auto !important;
                display: block !important;
              }
              
              .mobile-main-title {
                font-size: 24px !important;
                line-height: 1.3 !important;
                text-align: center !important;
              }
              
              .mobile-newsletter-title {
                font-size: 18px !important;
                text-align: center !important;
              }
              
              .mobile-newsletter-desc {
                font-size: 12px !important;
                text-align: center !important;
                line-height: 1.4 !important;
              }
              
              .mobile-author-section {
                text-align: center !important;
                margin: 20px 0 !important;
              }
              
              .mobile-author-image {
                width: 40px !important;
                height: 40px !important;
                margin: 0 auto 8px auto !important;
                display: block !important;
              }
              
              .mobile-content-text {
                font-size: 14px !important;
                line-height: 1.5 !important;
                text-align: left !important;
              }
              
              .mobile-code-block {
                font-size: 12px !important;
                padding: 12px !important;
                margin: 15px 0 !important;
              }
              
              .mobile-button {
                font-size: 14px !important;
                padding: 12px 24px !important;
                display: block !important;
                margin: 20px auto !important;
                width: auto !important;
                text-align: center !important;
              }
              
              .mobile-footer-text {
                font-size: 11px !important;
                line-height: 1.4 !important;
                text-align: center !important;
              }
              
              .mobile-section-padding {
                padding: 20px 15px !important;
              }
              
              .mobile-notification-badge {
                width: 12px !important;
                height: 12px !important;
                top: -3px !important;
                right: -3px !important;
              }
            }
          `}
        </style>
      </Head>
      <Tailwind>
        <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header Section */}
          <Section style={headerSectionStyle} className="mobile-section-padding">
            <Row>
              <Column style={logoColumnStyle} className="mobile-stack mobile-center">
                <div style={logoContainerStyle}>
                  <Img
                    src="https://ci3.googleusercontent.com/meips/ADKq_NYkTGECWHmJP4Rew8pxvNDQlyFIUokzrT724S2WvKKtgQLkfewMOr_zmYqftU5ln-EJFymdgogwaRliCANkDMpEfZ684xa7MToG3v2CtSBauC16tBE=s0-d-e1-ft#https://static.licdn.com/aero-v1/sc/h/4rbgzqcu6qvxigigms39evd87"
                    alt="LinkedIn"
                    style={logoStyle}
                    className="mobile-logo object-contain"
                  />
                  <div style={notificationBadgeStyle} className="mobile-notification-badge"></div>
                </div>
              </Column>
              <Column style={avatarColumnStyle} className="mobile-stack mobile-center">
                <Img
                  src="https://ci3.googleusercontent.com/meips/ADKq_NZdh7iYpygRfs7cQMXeGN_x7wn5fcj0Xj5R0fkVjKJ9HFUa8Uy7LK-z-iElSMWUyZ5zG388o1vzzmqex9w8sQklawpTrT_bDUtLQJS0PnEQ1mjAsm4JSVBUKMvh2csvkaU_kYdNZnaMqsY2hxbkty9L_609kNEfQzVa9CzC4qLRYY93kUzuNxcJPaByGABuua9-3zh_GK_wP0LqDkFTATxwq6eoXhY7FbHBAfg01cKSVrM4RJZ3Vovw_69_Pz_9ZmRG92JmeslUoXEzO1Nw9Y8z3ykDmAPbcUC2zZMUVUeoEiq0IV5up6gR=s0-d-e1-ft#https://media.licdn.com/dms/image/v2/D4D03AQFRU1EqIcratA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1716022413181?e=2147483647&v=beta&t=hYzN91TnFGWP8nlKRAjhhoENoEDm-cGMirSu4dWuxGIs"
                  alt="Profile"
                  style={avatarStyle}
                  className="mobile-avatar object-contain"
                />
              </Column>
            </Row>
          </Section>

          {/* Newsletter Branding Section */}
          <Section style={newsletterSectionStyle} className="mobile-section-padding">
            <Text style={newsletterTitleStyle} className="mobile-newsletter-title">
              techweekly
            </Text>
            <Text style={newsletterDescStyle} className="mobile-newsletter-desc">
              newsletter for staying updated on the latest in technology, from trends to essential industry.
            </Text>
          </Section>

          {/* Hero Illustration Section */}
          <Section style={heroSectionStyle} className="mobile-section-padding">
            <Img
              src="https://ci3.googleusercontent.com/meips/ADKq_NZ8T4vbjLv2FiMwj_mE-79JdnoDISuvRQQwLblCxfycfxNwiItnCmyL-U9Vv_wtZEG9zhtkXjPRW7Odv1biG9gfaQWf6GfxMX1JyFtDSutUJHXsTTxsoLdOBnxu8Xo3FCJSRuS86XVTP4R-ncJF3IJ5DYxJrsPm5s15qzX1ywNY67OZxQLiSGC5Y3DLO-7kvx9DpdB4gg8JZOyfHp22c4EeQb9uS9pFSYjb-H5SobCWyI_bWdqG4lR8rpCHv8PhS_Y5c3fuB3-fDpx2C3WPgSVWxxQj5A=s0-d-e1-ft#https://media.licdn.com/dms/image/v2/D5612AQEQ3Or3mjPqOw/article-cover_image-shrink_720_1280/B56ZaZwhcxGoAI-/0/1746336360420?e=2147483647&v=beta&t=llnu7zt3nlTxRgs3uTSnrF41HDN9D8pXrhpZYAiDrUI"
              alt="Tech illustration with code, charts, and UI elements"
              style={heroImageStyle}
              className="mobile-hero-image"
            />
          </Section>

          {/* Article Title Section */}
          <Section style={titleSectionStyle} className="mobile-section-padding">
            <Text style={articleTitleStyle} className="mobile-main-title">
              Consistent Hashing: Behind Scalable Distributed Systems
            </Text>
          </Section>

          {/* Author Section */}
          <Section style={authorSectionStyle} className="mobile-section-padding">
            <Row>
              <Column style={authorImageColumnStyle} className="mobile-author-section">
                <Img
                  src="https://ci3.googleusercontent.com/meips/ADKq_NZsePPIKGIhXXVK3B8b0137xgRw7hIknIo70FQbJsYuhxd78V6KFRO0NHxfontexG1-iV2vsecLgZIJEgT7MfH12ohJ65dKNUthMjeytXCtE5arHeZZbYABSJJ6_moL6wHMUPSY_iW5JbtMrc2qQg4W4QlpQRuCkzI9Zx0wJChJCeKaJwgQCdY4OXKI63kn6ejMUEC1Dbpy3oH8ADGMkBr9soktKpuULqVVMthhZnscY97p3fROUVWOuy4atUjSO8M4XQrCSVxgJGwH8qRIJ_NSz9i-2YYoNxI7yNGMgkZ7t8PozjM8QlFd=s0-d-e1-ft#https://media.licdn.com/dms/image/v2/D5603AQFmpdBWAe_GMw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712501145710?e=2147483647&v=beta&t=UNGT666XWtXjT2DR1AyfppRcdrbimdW_fyMZeSUdn-c"
                  alt="Surya m"
                  style={authorImageStyle}
                  className="mobile-author-image"
                />
              </Column>
              <Column style={authorTextColumnStyle} className="mobile-author-section">
                <Text style={authorNameStyle}>Surya m</Text>
              </Column>
            </Row>
          </Section>

          {/* CTA Section */}
          <Section style={ctaSectionStyle} className="mobile-section-padding">
            <Text style={ctaTextStyle}>Read this article on LinkedIn to join the conversation</Text>
            <Link href="#" style={ctaButtonStyle} className="mobile-button">
              Read on LinkedIn
            </Link>
          </Section>

          {/* Article Content Section */}
          <Section style={contentSectionStyle} className="mobile-section-padding">
            <Text style={sectionTitleStyle}>Introduction:</Text>

            <ul style={listStyle}>
              <li style={listItemStyle}>
                <Text style={contentTextStyle} className="mobile-content-text">
                  When building a distributed system that handles millions of requests per second maybe a caching layer
                  a distributed database or a load balancer. Everything's going great until adding a new node or remove
                  a failing one. Suddenly half your data needs to be reshuffled. Performance drops. Cache hit ratio
                  plummets. Users complain.
                </Text>
              </li>
              <li style={listItemStyle}>
                <Text style={contentTextStyle} className="mobile-content-text">
                  What just happened? You ran into one of the classic problems of distributed systems: rebalancing data
                  when the system topology changes. The elegant solution to this problem? Consistent Hashing.
                </Text>
              </li>
              <li style={listItemStyle}>
                <Text style={contentTextStyle} className="mobile-content-text">
                  In this article we'll explore what consistent hashing is why it's important and how it works under the
                  hood.
                </Text>
              </li>
            </ul>

            <Text style={sectionTitleStyle}>The Problem with Traditional Hashing:</Text>

            <ul style={listStyle}>
              <li style={listItemStyle}>
                <Text style={contentTextStyle} className="mobile-content-text">
                  Let's start with a simple hash function. Suppose you're storing data across a group of servers using a
                  hash function like this
                </Text>
              </li>
            </ul>

            {/* Code Block 1 */}
            <div style={codeBlockStyle} className="mobile-code-block">
              <Text style={codeTextStyle}>hash(key) % number_of_servers</Text>
            </div>

            <ul style={listStyle}>
              <li style={listItemStyle}>
                <Text style={contentTextStyle} className="mobile-content-text">
                  If you have 4 servers and a key hashes to 13 you'd store it in
                </Text>
              </li>
            </ul>

            {/* Code Block 2 */}
            <div style={codeBlockStyle} className="mobile-code-block">
              <Text style={codeTextStyle}>13 % 4 = 1 -&gt; Server 1</Text>
            </div>

            <ul style={listStyle}>
              <li style={listItemStyle}>
                <Text style={contentTextStyle} className="mobile-content-text">
                  But now imagine you add a fifth server. That same key goes to
                </Text>
              </li>
            </ul>

            {/* Code Block 3 */}
            <div style={codeBlockStyle} className="mobile-code-block">
              <Text style={codeTextStyle}>13 % 5 = 3 -&gt; Server 3</Text>
            </div>

            <ul style={listStyle}>
              <li style={listItemStyle}>
                <Text style={contentTextStyle} className="mobile-content-text">
                  The key moves. In fact almost all <strong>keys</strong> get reassigned to different servers when you
                  change the total number of servers. This is called a hash reshuffle and it's a disaster for systems
                  like distributed caches (e.g., Memcached) or databases where minimizing data movement is key to
                  performance.
                </Text>
              </li>
            </ul>

            <Text style={sectionTitleStyle}>Consistent Hashing:</Text>

            <ul style={listStyle}>
              <li style={listItemStyle}>
                <Text style={contentTextStyle} className="mobile-content-text">
                  Consistent Hashing was introduced in 1997 in a paper called{" "}
                  <em>
                    "Consistent Hashing and Random Trees: Distributed Caching Protocols for Relieving Hot Spots on the
                    World Wide Web"
                  </em>
                  . But its relevance has only grown with time.
                </Text>
              </li>
            </ul>
          </Section>

          {/* Keep Reading CTA */}
          <Section style={keepReadingSectionStyle} className="mobile-section-padding">
            <Link href="#" style={keepReadingButtonStyle} className="mobile-button">
              Keep reading on LinkedIn
            </Link>
          </Section>

          {/* Footer Section */}
          <Section style={footerSectionStyle} className="mobile-section-padding">
            <Text style={footerTextStyle} className="mobile-footer-text">
              This email was intended for Collins Kooza (2K+ | Open To Collaborations & Partnerships | web Developer |
              React Native | Node js | CSS | JavaScript | tailwind css | react java)
            </Text>

            <Text style={footerLinksStyle} className="mobile-footer-text">
              <Link href="#" style={footerLinkStyle}>
                Learn why we included this.
              </Link>
            </Text>

            <Text style={footerTextStyle} className="mobile-footer-text">
              You are receiving LinkedIn notification emails. Others can see that you are a subscriber.
            </Text>

            <Text style={footerLinksStyle} className="mobile-footer-text">
              <Link href="#" style={footerLinkStyle}>
                Unsubscribe
              </Link>{" "}
              •{" "}
              <Link href="#" style={footerLinkStyle}>
                Help
              </Link>
            </Text>

            <div style={linkedinLogoContainerStyle}>
              <Img src="https://ci3.googleusercontent.com/meips/ADKq_NaZS80lJKKLmNWJbywLi3-jL3P8kFjdgCFzkf0a8q_y3PqMIkP33vZjoMOTXpjrwVWBEkCT00SFqqw25LqKDg26-N7T-ACNc2svYj3RVaPB2cBiRYM=s0-d-e1-ft#https://static.licdn.com/aero-v1/sc/h/9ehe6n39fa07dc5edzv0rla4e" alt="LinkedIn" style={footerLogoStyle} />
            </div>

            <Text style={copyrightTextStyle} className="mobile-footer-text">
              © 2025 LinkedIn Corporation, 1000 West Maude Avenue, Sunnyvale, CA 94085.
              <br />
              LinkedIn and the LinkedIn logo are registered trademarks of LinkedIn.
            </Text>
          </Section>
        </Container>
      </Body>

      </Tailwind>
      
    </Html>
  )
}

export default LinkedInTechWeeklyTemplate

// Comprehensive Email-Safe Styles
const bodyStyle = {
  fontFamily: "'DM Sans', Arial, sans-serif",
  backgroundColor: "#f3f2ef",
  margin: "0",
  padding: "20px 0",
  lineHeight: "1.6",
  WebkitTextSizeAdjust: "100%",
  msTextSizeAdjust: "100%",
}

const containerStyle = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "0",
  maxWidth: "600px",
  width: "100%",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
}

const headerSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "20px 30px",
  borderBottom: "1px solid #e9e5df",
}

const logoColumnStyle = {
  width: "50%",
  verticalAlign: "middle" as const,
}

const avatarColumnStyle = {
  width: "50%",
  verticalAlign: "middle" as const,
  textAlign: "right" as const,
}

const logoContainerStyle = {
  position: "relative" as const,
  display: "inline-block",
}

const logoStyle = {
  width: "120px",
  height: "auto",
  display: "block",
}

const notificationBadgeStyle = {
  position: "absolute" as const,
  top: "-5px",
  right: "-5px",
  width: "16px",
  height: "16px",
  backgroundColor: "#e60023",
  borderRadius: "50%",
  border: "2px solid #ffffff",
}

const avatarStyle = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  display: "block",
}

const newsletterSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "20px 30px 10px 30px",
}

const newsletterTitleStyle = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#000000",
  margin: "0 0 8px 0",
}

const newsletterDescStyle = {
  fontSize: "14px",
  color: "#666666",
  margin: "0",
  lineHeight: "1.4",
}

const heroSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "20px 30px",
  textAlign: "center" as const,
}

const heroImageStyle = {
  width: "100%",
  height: "auto",
  maxWidth: "400px",
  display: "block",
  margin: "0 auto",
  borderRadius: "8px",
}

const titleSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "20px 30px 10px 30px",
}

const articleTitleStyle = {
  fontSize: "28px",
  fontWeight: "700",
  color: "#000000",
  margin: "0",
  lineHeight: "1.3",
}

const authorSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "10px 30px 20px 30px",
}

const authorImageColumnStyle = {
  width: "60px",
  verticalAlign: "middle" as const,
}

const authorTextColumnStyle = {
  width: "calc(100% - 60px)",
  verticalAlign: "middle" as const,
  paddingLeft: "10px",
}

const authorImageStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  display: "block",
}

const authorNameStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#000000",
  margin: "0",
}

const ctaSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "20px 30px",
  textAlign: "center" as const,
  borderBottom: "1px solid #e9e5df",
}

const ctaTextStyle = {
  fontSize: "16px",
  color: "#666666",
  margin: "0 0 20px 0",
}

const ctaButtonStyle = {
  backgroundColor: "#0a66c2",
  color: "#ffffff",
  padding: "12px 24px",
  borderRadius: "24px",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "600",
  display: "inline-block",
  border: "none",
}

const contentSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "30px 30px",
}

const sectionTitleStyle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#000000",
  margin: "0 0 15px 0",
}

const listStyle = {
  margin: "0 0 25px 0",
  padding: "0 0 0 20px",
}

const listItemStyle = {
  marginBottom: "15px",
}

const contentTextStyle = {
  fontSize: "16px",
  color: "#000000",
  margin: "0",
  lineHeight: "1.6",
}

const codeBlockStyle = {
  backgroundColor: "#2d3748",
  color: "#ffffff",
  padding: "15px 20px",
  borderRadius: "6px",
  margin: "20px 0",
  fontFamily: "'Courier New', monospace",
}

const codeTextStyle = {
  fontSize: "14px",
  margin: "0",
  lineHeight: "1.4",
}

const keepReadingSectionStyle = {
  backgroundColor: "#ffffff",
  padding: "30px 30px",
  textAlign: "center" as const,
  borderTop: "1px solid #e9e5df",
}

const keepReadingButtonStyle = {
  backgroundColor: "transparent",
  color: "#0a66c2",
  padding: "12px 24px",
  borderRadius: "24px",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "600",
  display: "inline-block",
  border: "2px solid #0a66c2",
}

const footerSectionStyle = {
  backgroundColor: "#f3f2ef",
  padding: "25px 30px",
  textAlign: "center" as const,
}

const footerTextStyle = {
  fontSize: "12px",
  color: "#666666",
  margin: "0 0 15px 0",
  lineHeight: "1.4",
}

const footerLinksStyle = {
  fontSize: "12px",
  color: "#666666",
  margin: "0 0 15px 0",
}

const footerLinkStyle = {
  color: "#0a66c2",
  textDecoration: "underline",
}

const linkedinLogoContainerStyle = {
  margin: "20px 0 15px 0",
}

const footerLogoStyle = {
  width: "80px",
  height: "auto",
  display: "inline-block",
}

const copyrightTextStyle = {
  fontSize: "11px",
  color: "#999999",
  margin: "0",
  lineHeight: "1.4",
}
