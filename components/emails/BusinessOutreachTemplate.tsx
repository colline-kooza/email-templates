import {
  Body,
  Button,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"

interface BusinessOutreachTemplateProps {
  recipientName?: string
  senderName?: string
  senderTitle?: string
  companyName?: string
  phoneNumbers?: string[]
  emails?: string[]
  meetingUrl?: string
}

export default function BusinessOutreachTemplate({
  recipientName = "[Recipient Name]",
  senderName = "[Your Name]",
  senderTitle = "[Your Title/Position]",
  companyName = "[Your Company]",
  phoneNumbers = ["+111 222 3333", "+111 222 3334"],
  emails = ["info@yourcompany.com", "sales@yourcompany.com"],
  meetingUrl = "#",
}: BusinessOutreachTemplateProps) {
  const strategies = [
    {
      title: "Market Penetration",
      description:
        "Expanding your reach and market share in your current industry through strategic positioning and competitive analysis.",
      icon: "📈",
      benefits: ["Increased revenue streams", "Enhanced brand visibility", "Competitive advantage"],
    },
    {
      title: "Product Innovation",
      description:
        "Introducing disruptive products or services that resonate with your target audience and create new market opportunities.",
      icon: "💡",
      benefits: ["First-mover advantage", "Customer loyalty", "Premium pricing power"],
    },
    {
      title: "Customer Experience Enhancement",
      description:
        "Elevating the overall experience of your customers to foster loyalty, advocacy, and long-term relationships.",
      icon: "⭐",
      benefits: ["Higher retention rates", "Positive word-of-mouth", "Increased lifetime value"],
    },
    {
      title: "Strategic Partnerships",
      description:
        "Forging alliances with like-minded companies to create mutually beneficial opportunities and expand market reach.",
      icon: "🤝",
      benefits: ["Shared resources", "New market access", "Risk mitigation"],
    },
  ]

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
      <Preview>Unlock Your Business Potential - Transform Your Success Today</Preview>
      <Body style={{ backgroundColor: "#e7e7e7", fontFamily: "Roboto, Arial, sans-serif", margin: 0, padding: 0 }}>
        <Tailwind>
          <Container className="bg-white mx-auto max-w-[700px] rounded">
            {/* Header Section */}
            <Section className="text-center py-6">
              <Heading className="text-[#34495e] text-3xl font-bold mb-2 tracking-tight">Unlock Your Potential</Heading>
              <Text className="text-[#000000] text-sm mt-2 mb-4">
                The One Big Thing
                <br />
                That Will Transform Your Business
              </Text>
              <Img
                src="https://cdn.templates.unlayer.com/assets/1690353503124-1.png"
                alt="Innovation Light Bulb"
                className="mx-auto mb-4"
                width="200"
                style={{ maxWidth: "50%", height: "auto" }}
              />
            </Section>

            {/* Introduction Section */}
            <Section className="px-8 py-4">
              <Text className="text-sm text-center text-[#333333] mb-5">Dear {recipientName},</Text>
              <Text className="text-sm text-center text-[#333333] mb-5">
                I hope this email finds you well. My name is {senderName}, and I'm reaching out to you because I believe
                I have discovered the one big thing that could revolutionize your business and unlock unprecedented
                growth opportunities.
              </Text>
              <Text className="text-sm text-center text-[#333333] mb-5">
                In today's fast-paced and competitive landscape, it's crucial for businesses to stay ahead of the curve.
                Countless entrepreneurs and companies are constantly searching for that one transformative strategy that
                can propel their success to new heights. Through extensive research, market analysis, and real-world
                implementation, I've identified proven methodologies that consistently deliver exceptional results.
              </Text>
            </Section>

            {/* Key Insight Section */}
            <Section className="py-8 px-2 mx-1 rounded-lg mb-6">
              <Heading className="text-[#34495e] text-center text-lg font-bold mb-6">
                I've identified a comprehensive
                <br />
                game-changing approach
                <br />
                that has the potential to dramatically impact
                <br />
                your bottom line and market position.
              </Heading>

              {/* Enhanced Strategy Grid - Email Compatible Responsive */}
              <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                <tr>
                  <td width="50%" style={{ padding: "8px", verticalAlign: "top" }}>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                        border: "1px solid #e2e8f0",
                        minHeight: "200px",
                      }}
                    >
                      <div style={{ fontSize: "24px", marginBottom: "12px" }}>{strategies[0].icon}</div>
                      <Heading
                        style={{
                          color: "#d168cb",
                          fontSize: "14px",
                          fontWeight: "bold",
                          marginBottom: "8px",
                          textAlign: "left",
                          margin: "0 0 8px 0",
                        }}
                      >
                        1. {strategies[0].title}
                      </Heading>
                      <Text
                        style={{
                          fontSize: "12px",
                          color: "#475569",
                          textAlign: "left",
                          marginBottom: "12px",
                          lineHeight: "1.4",
                        }}
                      >
                        {strategies[0].description}
                      </Text>
                   
                    </div>
                  </td>
                  <td width="50%" style={{ padding: "8px", verticalAlign: "top" }}>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                        border: "1px solid #e2e8f0",
                        minHeight: "200px",
                      }}
                    >
                      <div style={{ fontSize: "24px", marginBottom: "12px" }}>{strategies[1].icon}</div>
                      <Heading
                        style={{
                          color: "#d168cb",
                          fontSize: "14px",
                          fontWeight: "bold",
                          marginBottom: "8px",
                          textAlign: "left",
                          margin: "0 0 8px 0",
                        }}
                      >
                        2. {strategies[1].title}
                      </Heading>
                      <Text
                        style={{
                          fontSize: "12px",
                          color: "#475569",
                          textAlign: "left",
                          marginBottom: "12px",
                          lineHeight: "1.4",
                        }}
                      >
                        {strategies[1].description}
                      </Text>
                      
                    </div>
                  </td>
                </tr>
                <tr>
                  <td width="50%" style={{ padding: "8px", verticalAlign: "top" }}>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                        border: "1px solid #e2e8f0",
                        minHeight: "200px",
                      }}
                    >
                      <div style={{ fontSize: "24px", marginBottom: "12px" }}>{strategies[2].icon}</div>
                      <Heading
                        style={{
                          color: "#d168cb",
                          fontSize: "14px",
                          fontWeight: "bold",
                          marginBottom: "8px",
                          textAlign: "left",
                          margin: "0 0 8px 0",
                        }}
                      >
                        3. {strategies[2].title}
                      </Heading>
                      <Text
                        style={{
                          fontSize: "12px",
                          color: "#475569",
                          textAlign: "left",
                          marginBottom: "12px",
                          lineHeight: "1.4",
                        }}
                      >
                        {strategies[2].description}
                      </Text>
                     
                    </div>
                  </td>
                  <td width="50%" style={{ padding: "8px", verticalAlign: "top" }}>
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                        border: "1px solid #e2e8f0",
                        minHeight: "200px",
                      }}
                    >
                      <div style={{ fontSize: "24px", marginBottom: "12px" }}>{strategies[3].icon}</div>
                      <Heading
                        style={{
                          color: "#d168cb",
                          fontSize: "14px",
                          fontWeight: "bold",
                          marginBottom: "8px",
                          textAlign: "left",
                          margin: "0 0 8px 0",
                        }}
                      >
                        4. {strategies[3].title}
                      </Heading>
                        <Text
                        style={{
                          fontSize: "12px",
                          color: "#475569",
                          textAlign: "left",
                          marginBottom: "12px",
                          lineHeight: "1.4",
                        }}
                      >
                        {strategies[3].description}
                      </Text>
                    </div>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Value Proposition Section */}
            <Section className="px-8 py-6 bg-gradient-to-r from-[#f3e8ff] to-[#fdf2f8] mx-4 rounded-lg mb-6">
              <Heading className="text-[#7c3aed] text-center text-lg font-bold mb-4">Why This Approach Works</Heading>
              <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                <tr>
                  <td width="33.33%" style={{ padding: "8px", textAlign: "center", verticalAlign: "top" }}>
                    <div style={{ fontSize: "32px", marginBottom: "8px" }}>📊</div>
                    <Text
                      style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "#374151",
                        marginBottom: "4px",
                      }}
                    >
                      Data-Driven
                    </Text>
                    <Text
                      style={{
                        fontSize: "11px",
                        color: "#6b7280",
                        lineHeight: "1.3",
                      }}
                    >
                      Based on analysis of 500+ successful implementations
                    </Text>
                  </td>
                  {/* <td width="33.33%" style={{ padding: "8px", textAlign: "center", verticalAlign: "top" }}>
                    <div style={{ fontSize: "32px", marginBottom: "8px" }}>🎯</div>
                    <Text
                      style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "#374151",
                        marginBottom: "4px",
                      }}
                    >
                      Proven Results
                    </Text>
                    <Text
                      style={{
                        fontSize: "11px",
                        color: "#6b7280",
                        lineHeight: "1.3",
                      }}
                    >
                      Average 40% increase in revenue within 6 months
                    </Text>
                  </td> */}
                  <td width="33.33%" style={{ padding: "8px", textAlign: "center", verticalAlign: "top" }}>
                    <div style={{ fontSize: "32px", marginBottom: "8px" }}>⚡</div>
                    <Text
                      style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "#374151",
                        marginBottom: "4px",
                      }}
                    >
                      Fast Implementation
                    </Text>
                    <Text
                      style={{
                        fontSize: "11px",
                        color: "#6b7280",
                        lineHeight: "1.3",
                      }}
                    >
                      See initial results within 30 days of implementation
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Call to Action Section */}
            <Section className="text-center py-6">
              <Text className="text-sm text-[#333333] mb-4 px-8">
                I would love to share the specific details of this transformative strategy with you and discuss how it
                can be tailored to your unique business needs and objectives.
              </Text>
              <Button
                href={meetingUrl}
                className="bg-[#d168cb] text-white text-xs rounded px-10 py-3 no-underline font-medium"
                style={{
                  backgroundColor: "#d168cb",
                  color: "#fff",
                  borderRadius: "6px",
                  padding: "12px 40px",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Schedule Your Free Strategy Session
              </Button>
              <Text className="text-xs text-[#6b7280] mt-3">
                No obligation • 30-minute consultation • Immediate actionable insights
              </Text>
            </Section>

            {/* Closing Section */}
            <Section className="px-8 py-4">
              <Text className="text-sm text-[#333333] mb-4">
                I will be more than happy to arrange a convenient time to connect. I assure you that this discussion
                will be worth your while, and I am eager to witness the transformative impact of this strategy on your
                business. Together, we can unlock your company's true potential and achieve the success you've been
                striving for.
              </Text>
              <Text className="text-sm text-[#333333] mb-6">Looking forward to hearing from you soon!</Text>

              <div className="border-l-4 border-[#d168cb] pl-4">
                <Text className="text-sm font-medium text-[#333333] mb-1">Best regards,</Text>
                <Text className="text-sm font-bold text-[#333333] mb-1">{senderName}</Text>
                <Text className="text-xs text-[#6b7280] mb-1">{senderTitle}</Text>
                <Text className="text-xs text-[#6b7280] mb-1">{companyName}</Text>
                <Text className="text-xs text-[#6b7280]">
                  📧 {emails[0]} | 📱 {phoneNumbers[0]}
                </Text>
              </div>
            </Section>

            {/* Enhanced Footer */}
            <Section className="bg-[#faf5ff] py-6">
              <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                <tr>
                  <td width="33.33%" style={{ padding: "16px", verticalAlign: "top" }}>
                    <Text
                      style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "#000000",
                        marginBottom: "8px",
                      }}
                    >
                      Follow us on:
                    </Text>
                    <div style={{ textAlign: "left" }}>
                      <Link href="https://facebook.com" style={{ marginRight: "8px", display: "inline-block" }}>
                        <Img
                          src="https://cdn.tools.unlayer.com/social/icons/squared-black/facebook.png"
                          alt="Facebook"
                          width="25"
                          height="25"
                          style={{ borderRadius: "4px" }}
                        />
                      </Link>
                      <Link href="https://instagram.com" style={{ marginRight: "8px", display: "inline-block" }}>
                        <Img
                          src="https://cdn.tools.unlayer.com/social/icons/squared-black/instagram.png"
                          alt="Instagram"
                          width="25"
                          height="25"
                          style={{ borderRadius: "4px" }}
                        />
                      </Link>
                      <Link href="https://pinterest.com" style={{ marginRight: "8px", display: "inline-block" }}>
                        <Img
                          src="https://cdn.tools.unlayer.com/social/icons/squared-black/pinterest.png"
                          alt="Pinterest"
                          width="25"
                          height="25"
                          style={{ borderRadius: "4px" }}
                        />
                      </Link>
                      <Link href="https://youtube.com" style={{ display: "inline-block" }}>
                        <Img
                          src="https://cdn.tools.unlayer.com/social/icons/squared-black/youtube.png"
                          alt="YouTube"
                          width="25"
                          height="25"
                          style={{ borderRadius: "4px" }}
                        />
                      </Link>
                    </div>
                  </td>
                  <td width="33.33%" style={{ padding: "16px", verticalAlign: "top", textAlign: "left" }}>
                    <Text
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#000000",
                        marginBottom: "8px",
                      }}
                    >
                      Phone:
                    </Text>
                    {phoneNumbers.map((phone, index) => (
                      <Text
                        key={index}
                        style={{
                          fontSize: "11px",
                          color: "#1f2937",
                          fontWeight: "500",
                          marginBottom: "4px",
                          display: "block",
                        }}
                      >
                        {phone}
                      </Text>
                    ))}
                  </td>
                  <td width="33.33%" style={{ padding: "16px", verticalAlign: "top", textAlign: "left" }}>
                    <Text
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#000000",
                        marginBottom: "8px",
                      }}
                    >
                      Email:
                    </Text>
                    {emails.map((email, index) => (
                      <Link
                        key={index}
                        href={`mailto:${email}`}
                        style={{
                          fontSize: "11px",
                          color: "#1f2937",
                          fontWeight: "500",
                          marginBottom: "4px",
                          display: "block",
                          textDecoration: "none",
                        }}
                      >
                        {email}
                      </Link>
                    ))}
                  </td>
                </tr>
              </table>

              <Hr className="border-[#e5e7eb] my-4" />

              <Text className="text-gray-400 text-[11px] text-center">
                Copyright © {companyName} | All Rights Reserved
              </Text>
            </Section>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  )
}

// Preview props for development
BusinessOutreachTemplate.PreviewProps = {
  recipientName: "John Smith",
  senderName: "Sarah Johnson",
  senderTitle: "Business Growth Strategist",
  companyName: "Growth Solutions Inc.",
  phoneNumbers: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
  emails: ["sarah@growthsolutions.com", "sales@growthsolutions.com"],
  meetingUrl: "https://calendly.com/sarah-johnson/strategy-session",
} satisfies BusinessOutreachTemplateProps
