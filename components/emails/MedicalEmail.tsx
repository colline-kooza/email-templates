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

interface MedicalEmailProps {
  departmentUrl?: string;
  contactUrl?: string;
  appointmentUrl?: string;
  bookScheduleUrl?: string;
  readMoreUrl?: string;
  findDepartmentsUrl?: string;
  emergencyPhone?: string;
  emailAddress?: string;
  address?: string;
  facebookUrl?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
  pinterestUrl?: string;
}

export default function MedicalEmail({
  departmentUrl = "#",
  appointmentUrl = "#",
  bookScheduleUrl = "#",
  readMoreUrl = "#",
  findDepartmentsUrl = "#",
  emergencyPhone = "+1-234-568-8751",
  emailAddress = "info@yourdomain.com",
  address = "77 Venice Blv First Street, Los Angeles",
  facebookUrl = "https://facebook.com",
  twitterUrl = "https://twitter.com",
  linkedinUrl = "https://linkedin.com",
  instagramUrl = "https://instagram.com",
  pinterestUrl = "https://pinterest.com",
}: MedicalEmailProps) {
  return (
    <Html>
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        `}</style>
      </Head>
      <Preview>
        Your Health is Our Priority - Medical Services & Appointments
      </Preview>
      <Tailwind>
        <Body
          className="bg-gray-100"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <Container className="mx-auto w-full max-w-[600px] bg-white">
            {/* Header */}
            <Section className="px-6 py-4 bg-white">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse" }}
              >
                <tr>
                  <td style={{ width: "33.33%", textAlign: "left" }}>
                    <Link
                      href={departmentUrl}
                      className="text-gray-600 text-sm font-medium no-underline"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        textDecoration: "none",
                      }}
                    >
                      DEPARTMENT
                    </Link>
                  </td>
                  <td style={{ width: "33.33%", textAlign: "center" }}>
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1619824699989-logo2.jpg"
                      alt="Medical Symbol"
                      width="52"
                      height="52"
                      style={{ display: "block", margin: "0 auto" }}
                    />
                  </td>
                  <td style={{ width: "33.33%", textAlign: "right" }}>
                    <Link
                      href={appointmentUrl}
                      style={{
                        backgroundColor: "transparent",
                        color: "#374151",
                        padding: "8px 16px",
                        textDecoration: "none",
                        border: "1px solid #d1d5db",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: "500",
                        fontFamily: "Inter, sans-serif",
                        display: "inline-block",
                        textTransform: "uppercase",
                      }}
                    >
                      APPOINTMENT
                    </Link>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Hero Section */}
            <Section className="px-6 py-8 bg-white">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse" }}
              >
                <tr>
                  <td
                    style={{
                      width: "40%",
                      paddingRight: "24px",
                      verticalAlign: "middle",
                    }}
                  >
                    <Img
                      src="https://cdn.templates.unlayer.com/assets/1619845698377-freestock.png"
                      alt="Medical professionals"
                      width="200"
                      className="object-cover"
                      height="290"
                      style={{
                        display: "block",
                        borderRadius: "8px",
                        maxWidth: "100%",
                      }}
                    />
                  </td>
                  <td style={{ width: "60%", verticalAlign: "middle" }}>
                    <Heading
                      className="m-0 mb-4 font-bold text-2xl text-gray-900"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Your Health is Our Priority
                    </Heading>
                    <Text
                      className="m-0 mb-6 text-sm text-gray-600 leading-6"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis vehicula eget molestie accumsan amet ligula cursus.
                    </Text>
                    <Link
                      href={bookScheduleUrl}
                      style={{
                        backgroundColor: "transparent",
                        color: "#374151",
                        padding: "10px 20px",
                        textDecoration: "none",
                        border: "1px solid #d1d5db",
                        borderRadius: "4px",
                        fontSize: "14px",
                        fontWeight: "500",
                        fontFamily: "Inter, sans-serif",
                        display: "inline-block",
                      }}
                    >
                      Book Schedule
                    </Link>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Our Services */}
            <Section className="px-6 py-8 bg-white">
              <Heading
                className="m-0 mb-8 font-bold text-2xl text-center text-gray-900"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Our Services
              </Heading>
              <div
                style={{
                  borderBottom: "3px solid #ef4444",
                  width: "60px",
                  margin: "0 auto 32px auto",
                }}
              ></div>

              {/* Services Grid Row 1 */}
              <table
                width="100%"
                cellPadding="16"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", marginBottom: "32px" }}
              >
                <tr>
                  <td
                    style={{
                      width: "50%",
                      textAlign: "center",
                      verticalAlign: "top",
                    }}
                  >
                    <img
                      src="https://cdn.templates.unlayer.com/assets/1619846015691-48x48x1.png"
                      alt=""
                      className="mx-auto max-w-[200px] object-cover"
                    />
                    <Heading
                      className="m-0 mb-3 font-semibold text-lg text-gray-900"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Emergency Care
                    </Heading>
                    <Text
                      className="m-0 mb-4 text-sm text-gray-600 leading-5"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Lorem ipsum dolor sit amet, ipsum proin lacus cursus eget
                      molestie.
                    </Text>
                    <Link
                      href={bookScheduleUrl}
                      style={{
                        backgroundColor: "transparent",
                        color: "#374151",
                        padding: "8px 16px",
                        textDecoration: "none",
                        border: "1px solid #d1d5db",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: "500",
                        fontFamily: "Inter, sans-serif",
                        display: "inline-block",
                      }}
                    >
                      Book Schedule
                    </Link>
                  </td>
                  <td
                    style={{
                      width: "50%",
                      textAlign: "center",
                      verticalAlign: "top",
                    }}
                  >
                    <img
                      src="https://cdn.templates.unlayer.com/assets/1619846018568-48x48x2.png"
                      alt=""
                      className="mx-auto max-w-[200px] object-cover"
                    />
                    <Heading
                      className="m-0 mb-3 font-semibold text-lg text-gray-900"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Cancer Care
                    </Heading>
                    <Text
                      className="m-0 mb-4 text-sm text-gray-600 leading-5"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Lorem ipsum dolor sit amet, ipsum proin lacus cursus eget
                      molestie.
                    </Text>
                    <Link
                      href={bookScheduleUrl}
                      style={{
                        backgroundColor: "transparent",
                        color: "#374151",
                        padding: "8px 16px",
                        textDecoration: "none",
                        border: "1px solid #d1d5db",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: "500",
                        fontFamily: "Inter, sans-serif",
                        display: "inline-block",
                      }}
                    >
                      Book Schedule
                    </Link>
                  </td>
                </tr>
              </table>

              {/* Services Grid Row 2 */}
              <table
                width="100%"
                cellPadding="16"
                cellSpacing="0"
                style={{ borderCollapse: "collapse" }}
              >
                <tr>
                  <td
                    style={{
                      width: "50%",
                      textAlign: "center",
                      verticalAlign: "top",
                    }}
                  >
                    <img
                      src="https://cdn.templates.unlayer.com/assets/1619846294968-48x48x3.png"
                      alt=""
                      className="mx-auto max-w-[200px] object-cover"
                    />
                    <Heading
                      className="m-0 mb-3 font-semibold text-lg text-gray-900"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Cosmetic Surgery
                    </Heading>
                    <Text
                      className="m-0 mb-4 text-sm text-gray-600 leading-5"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Lorem ipsum dolor sit amet, ipsum proin lacus cursus eget
                      molestie.
                    </Text>
                    <Link
                      href={bookScheduleUrl}
                      style={{
                        backgroundColor: "transparent",
                        color: "#374151",
                        padding: "8px 16px",
                        textDecoration: "none",
                        border: "1px solid #d1d5db",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: "500",
                        fontFamily: "Inter, sans-serif",
                        display: "inline-block",
                      }}
                    >
                      Book Schedule
                    </Link>
                  </td>
                  <td
                    style={{
                      width: "50%",
                      textAlign: "center",
                      verticalAlign: "top",
                    }}
                  >
                    <img
                      src="https://cdn.templates.unlayer.com/assets/1619846298277-48x48x4.png"
                      alt=""
                      className="mx-auto max-w-[200px] object-cover"
                    />
                    <Heading
                      className="m-0 mb-3 font-semibold text-lg text-gray-900"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Eye Care
                    </Heading>
                    <Text
                      className="m-0 mb-4 text-sm text-gray-600 leading-5"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Lorem ipsum dolor sit amet, ipsum proin lacus cursus eget
                      molestie.
                    </Text>
                    <Link
                      href={bookScheduleUrl}
                      style={{
                        backgroundColor: "transparent",
                        color: "#374151",
                        padding: "8px 16px",
                        textDecoration: "none",
                        border: "1px solid #d1d5db",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: "500",
                        fontFamily: "Inter, sans-serif",
                        display: "inline-block",
                      }}
                    >
                      Book Schedule
                    </Link>
                  </td>
                </tr>
              </table>
            </Section>

            {/* About Our Hospital */}
            <Section className="px-2 py-8 bg-white">
              <Heading
                className="m-0 mb-8 font-bold text-2xl text-center text-gray-900"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                About Our Hospital
              </Heading>

              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse" }}
              >
                <tr>
                  <td
                    style={{
                      width: "40%",
                      paddingRight: "24px",
                      verticalAlign: "top",
                    }}
                  >
                    <Img
                      src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=250&h=200&fit=crop"
                      alt="Hospital building"
                      width="250"
                      height="200"
                      style={{
                        display: "block",
                        borderRadius: "8px",
                        maxWidth: "100%",
                      }}
                    />
                  </td>
                  <td style={{ width: "60%", verticalAlign: "top" }}>
                    <Text
                      className="m-0 mb-4 text-sm text-gray-600 leading-6"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur per adipiscing
                      elit. Duis vehicula eget molestie accumsan amet ligula
                      cursus.
                    </Text>
                    <Text
                      className="m-0 mb-6 text-sm text-gray-600 leading-6"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur per adipiscing
                      elit
                    </Text>
                    <Link
                      href={readMoreUrl}
                      style={{
                        backgroundColor: "transparent",
                        color: "#374151",
                        padding: "10px 20px",
                        textDecoration: "none",
                        border: "1px solid #d1d5db",
                        borderRadius: "4px",
                        fontSize: "14px",
                        fontWeight: "500",
                        fontFamily: "Inter, sans-serif",
                        display: "inline-block",
                      }}
                    >
                      Read More
                    </Link>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Our Departments */}
            <Section className="px-6 py-8 bg-white">
              <Heading
                className="m-0 mb-8 font-bold text-2xl text-center text-gray-900"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Our Departments
              </Heading>

              <table
                width="100%"
                cellPadding="8"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", marginBottom: "32px" }}
              >
                <tr>
                  <td
                    style={{
                      width: "50%",
                      verticalAlign: "top",
                      paddingRight: "16px",
                    }}
                  >
                    <ul
                      style={{ margin: "0", padding: "0", listStyle: "none" }}
                    >
                      <li
                        style={{
                          marginBottom: "8px",
                          fontSize: "14px",
                          color: "#374151",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        • Accident And Emergency
                      </li>
                      <li
                        style={{
                          marginBottom: "8px",
                          fontSize: "14px",
                          color: "#374151",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        • Physiotherapy
                      </li>
                      <li
                        style={{
                          marginBottom: "8px",
                          fontSize: "14px",
                          color: "#374151",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        • Nutrition And Dietetics
                      </li>
                      <li
                        style={{
                          marginBottom: "8px",
                          fontSize: "14px",
                          color: "#374151",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        • Maternity Departments
                      </li>
                    </ul>
                  </td>
                  <td
                    style={{
                      width: "50%",
                      verticalAlign: "top",
                      paddingLeft: "16px",
                    }}
                  >
                    <ul
                      style={{ margin: "0", padding: "0", listStyle: "none" }}
                    >
                      <li
                        style={{
                          marginBottom: "8px",
                          fontSize: "14px",
                          color: "#374151",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        • Ear Nose And Throat (ENT)
                      </li>
                      <li
                        style={{
                          marginBottom: "8px",
                          fontSize: "14px",
                          color: "#374151",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        • Orthopedics
                      </li>
                      <li
                        style={{
                          marginBottom: "8px",
                          fontSize: "14px",
                          color: "#374151",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        • General Surgery
                      </li>
                      <li
                        style={{
                          marginBottom: "8px",
                          fontSize: "14px",
                          color: "#374151",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        • Diagnostic Imaging
                      </li>
                    </ul>
                  </td>
                </tr>
              </table>

              <div style={{ textAlign: "center" }}>
                <Link
                  href={findDepartmentsUrl}
                  style={{
                    backgroundColor: "transparent",
                    color: "#374151",
                    padding: "10px 20px",
                    textDecoration: "none",
                    border: "1px solid #d1d5db",
                    borderRadius: "4px",
                    fontSize: "14px",
                    fontWeight: "500",
                    fontFamily: "Inter, sans-serif",
                    display: "inline-block",
                  }}
                >
                  Find More Departments
                </Link>
              </div>
            </Section>

            {/* Our Pricing */}
            <Section className="px-2 py-8 bg-white">
              <Heading
                className="m-0 mb-8 font-bold text-2xl text-center text-gray-900"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Our Pricing
              </Heading>

              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse" }}
              >
                <tr>
                  <td
                    style={{
                      width: "50%",
                      backgroundColor: "#f97316",
                      padding: "32px 24px",
                      textAlign: "center",
                      verticalAlign: "top",
                    }}
                  >
                    <Heading
                      className="m-0 mb-4 font-bold text-xl text-white"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Standard
                    </Heading>
                    <Heading
                      className="m-0 mb-6 font-bold text-4xl text-white"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      $50
                    </Heading>
                    <Text
                      className="m-0 mb-6 text-sm text-white leading-6"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis vehicula eget molestie accumsan amet ligula cursus
                      eget molestie accumsan Pellentesque.
                    </Text>
                    <Link
                      href={bookScheduleUrl}
                      style={{
                        backgroundColor: "#1f2937",
                        color: "white",
                        padding: "12px 24px",
                        textDecoration: "none",
                        borderRadius: "4px",
                        fontSize: "14px",
                        fontWeight: "500",
                        fontFamily: "Inter, sans-serif",
                        display: "inline-block",
                      }}
                    >
                      Book Schedule
                    </Link>
                  </td>
                  <td
                    style={{
                      width: "50%",
                      backgroundColor: "#059669",
                      padding: "32px 24px",
                      textAlign: "center",
                      verticalAlign: "top",
                    }}
                  >
                    <Heading
                      className="m-0 mb-4 font-bold text-xl text-white"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Premium
                    </Heading>
                    <Heading
                      className="m-0 mb-6 font-bold text-4xl text-white"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      $100
                    </Heading>
                    <Text
                      className="m-0 mb-6 text-sm text-white leading-6"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis vehicula eget molestie accumsan amet ligula cursus
                      eget molestie accumsan Pellentesque.
                    </Text>
                    <Link
                      href={bookScheduleUrl}
                      style={{
                        backgroundColor: "white",
                        color: "#059669",
                        padding: "12px 24px",
                        textDecoration: "none",
                        borderRadius: "4px",
                        fontSize: "14px",
                        fontWeight: "500",
                        fontFamily: "Inter, sans-serif",
                        display: "inline-block",
                      }}
                    >
                      Book Schedule
                    </Link>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Our Testimonial */}
            <Section className="px-6 py-8 bg-white">
              <Heading
                className="m-0 mb-8 font-bold text-2xl text-center text-gray-900"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Our Testimonial
              </Heading>
              <div
                style={{
                  borderBottom: "3px solid #ef4444",
                  width: "60px",
                  margin: "0 auto 32px auto",
                }}
              ></div>

              <table
                width="100%"
                cellPadding="16"
                cellSpacing="0"
                style={{ borderCollapse: "collapse" }}
              >
                <tr>
                  <td
                    style={{
                      width: "50%",
                      textAlign: "center",
                      verticalAlign: "top",
                    }}
                  >
                    <Img
                      src="https://img.freepik.com/free-photo/medium-shot-girl-wearing-little-mushrooms_23-2148905747.jpg?ga=GA1.1.1341149691.1749741454&semt=ais_items_boosted&w=740"
                      alt="Sophia Jonson"
                      width="80"
                      height="80"
                      style={{
                        display: "block",
                        margin: "0 auto 16px auto",
                        borderRadius: "50%",
                      }}
                    />
                    <Heading
                      className="m-0 mb-3 font-semibold text-lg text-gray-900"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Sophia Jonson
                    </Heading>
                    <Text
                      className="m-0 text-sm text-gray-600 leading-5"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis vehicula eget molestie accumsan amet elit.
                    </Text>
                  </td>
                  <td
                    style={{
                      width: "50%",
                      textAlign: "center",
                      verticalAlign: "top",
                    }}
                  >
                    <Img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
                      alt="John Doe"
                      width="80"
                      height="80"
                      style={{
                        display: "block",
                        margin: "0 auto 16px auto",
                        borderRadius: "50%",
                      }}
                    />
                    <Heading
                      className="m-0 mb-3 font-semibold text-lg text-gray-900"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      John Doe
                    </Heading>
                    <Text
                      className="m-0 text-sm text-gray-600 leading-5"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis vehicula eget molestie accumsan amet elit.
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Make An Appointment CTA */}
            <Section className="px-0 py-0">
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
                  padding: "48px 24px",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <Heading
                  className="m-0 mb-6 font-bold text-3xl text-white"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Make An Appointment
                </Heading>
                <Link
                  href={appointmentUrl}
                  style={{
                    backgroundColor: "white",
                    color: "#1e40af",
                    padding: "12px 32px",
                    textDecoration: "none",
                    borderRadius: "4px",
                    fontSize: "14px",
                    fontWeight: "600",
                    fontFamily: "Inter, sans-serif",
                    display: "inline-block",
                    marginBottom: "24px",
                    textTransform: "uppercase",
                  }}
                >
                  GET APPOINTMENT
                </Link>
                <Text
                  className="m-0 mb-2 text-sm text-white"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  For Emergency, Please Call
                </Text>
                <Text
                  className="m-0 font-bold text-lg text-white"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  📞 {emergencyPhone}
                </Text>
              </div>
            </Section>

            {/* Footer */}
            <Section className="px-6 py-8 bg-gray-900">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse" }}
              >
                <tr>
                  <td style={{ width: "50%", verticalAlign: "top" }}>
                   {/* Social Media Icons */}
              <div style={{ textAlign: "center", marginBottom: "24px" }}>
                <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse", margin: "0 auto" }}>
                  <tr>
                    <td style={{ padding: "0 6px" }}>
                      <a href={linkedinUrl}>
                        <img
                          src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png"
                          alt="LinkedIn"
                          width="24"
                          height="24"
                          style={{ display: "block" }}
                        />
                      </a>
                    </td>
                    <td style={{ padding: "0 6px" }}>
                      <a href={twitterUrl}>
                        <img
                          src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png"
                          alt="Twitter"
                          width="24"
                          height="24"
                          style={{ display: "block" }}
                        />
                      </a>
                    </td>
                    <td style={{ padding: "0 6px" }}>
                      <a href={facebookUrl}>
                        <img
                          src="https://cdn.tools.unlayer.com/social/icons/rounded/skype.png"
                          alt="Skype"
                          width="24"
                          height="24"
                          style={{ display: "block" }}
                        />
                      </a>
                    </td>
                    <td style={{ padding: "0 6px" }}>
                      <a href={instagramUrl}>
                        <img
                          src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png"
                          alt="Instagram"
                          width="24"
                          height="24"
                          style={{ display: "block" }}
                        />
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
                    <Text
                      className="m-0 text-sm text-gray-300"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {address}
                    </Text>
                  </td>
                  <td
                    style={{
                      width: "50%",
                      textAlign: "right",
                      verticalAlign: "top",
                    }}
                  >
                    <Text
                      className="m-0 mb-2 text-sm text-gray-300"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {emailAddress}
                    </Text>
                    <Text
                      className="m-0 mb-4 text-sm text-gray-300"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {emergencyPhone}
                    </Text>
                    <Text
                      className="m-0 text-xs text-gray-400"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      © 2024 All Rights Reserved
                    </Text>
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

MedicalEmail.PreviewProps = {
  departmentUrl: "https://example.com/departments",
  contactUrl: "https://example.com/contact",
  appointmentUrl: "https://example.com/appointment",
  bookScheduleUrl: "https://example.com/book-schedule",
  readMoreUrl: "https://example.com/read-more",
  findDepartmentsUrl: "https://example.com/departments",
  emergencyPhone: "+1-234-568-8751",
  emailAddress: "info@yourdomain.com",
  address: "77 Venice Blv First Street, Los Angeles",
  facebookUrl: "https://facebook.com/hospital",
  twitterUrl: "https://twitter.com/hospital",
  linkedinUrl: "https://linkedin.com/company/hospital",
  instagramUrl: "https://instagram.com/hospital",
  pinterestUrl: "https://pinterest.com/hospital",
} satisfies MedicalEmailProps;
