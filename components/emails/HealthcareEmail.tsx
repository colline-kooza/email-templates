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

interface HealthcareEmailProps {
  logoUrl?: string;
  bookAppointmentUrl?: string;
  doctorsUrl?: string;
  departmentsUrl?: string;
  appointmentsUrl?: string;
  learnMoreUrl?: string;
  unsubscribeUrl?: string;
  contactEmail?: string;
}

export default function HealthcareEmail({
  logoUrl = "https://via.placeholder.com/150x50?text=Your+Logo",
  bookAppointmentUrl = "#",
  doctorsUrl = "#",
  departmentsUrl = "#",
  appointmentsUrl = "#",
  learnMoreUrl = "#",
  unsubscribeUrl = "#",
  contactEmail = "yourdomain.com",
}: HealthcareEmailProps) {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          
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
              padding: 20px !important; 
            }
            
            .mobile-text-sm { 
              font-size: 14px !important; 
            }
            
            .mobile-text-md { 
              font-size: 16px !important; 
            }
            
            .mobile-text-lg { 
              font-size: 20px !important; 
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
              margin-bottom: 20px !important;
            }
            
            .mobile-button-full { 
              width: 90% !important; 
              max-width: 280px !important;
            }
          }
        `}</style>
      </Head>
      <Preview>A Better Care for Your Family, Every Single Day</Preview>
      <Tailwind>
        <Body
          className="bg-white m-0 p-0"
          style={{
            fontFamily: "Inter, sans-serif",
            margin: "0",
            padding: "0",
            width: "100%",
            minWidth: "100%",
          }}
        >
          <Container
            className="mx-auto email-container"
            style={{
              maxWidth: "600px",
              width: "100%",
              margin: "0 auto",
              backgroundColor: "#ffffff",
            }}
          >
            {/* Header Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#ff7096" }}
                className="mobile-full-width"
              >
                <tr>
                  <td style={{ padding: "20px" }} className="mobile-padding">
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1627046552586-lotus-16-ai.png"
                            alt="Your Logo"
                            width="150"
                            height="50"
                            style={{ margin: "0 auto", display: "block" }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "center", paddingTop: "20px" }}>
                          <Heading
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "24px",
                              color: "#ffffff",
                              margin: "0",
                              fontWeight: "600",
                            }}
                            className="mobile-text-lg"
                          >
                            A Better Care for Your Family, Every Single Day
                          </Heading>
                          <Text
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              color: "#ffffff",
                              margin: "10px 0 0 0",
                              fontWeight: "400",
                            }}
                            className="mobile-text-md"
                          >
                            Looking for a Pediatrician? We’d love you to invest your trust in us!
                          </Text>
                          <Link
                            href={bookAppointmentUrl}
                            style={{
                              backgroundColor: "#ffffff",
                              color: "#ff7096",
                              padding: "10px 20px",
                              textDecoration: "none",
                              borderRadius: "5px",
                              fontSize: "14px",
                              fontWeight: "600",
                              fontFamily: "Inter, sans-serif",
                              display: "inline-block",
                              marginTop: "15px",
                            }}
                            className="mobile-button-full"
                          >
                            Book Appointment
                          </Link>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Main Sections */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#2d3748" }}
                className="mobile-full-width"
              >
                <tr>
                  <td style={{ padding: "30px 20px" }} className="mobile-padding">
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                      <tr className="mobile-stack">
                        <td
                          style={{ width: "33.33%", verticalAlign: "top", textAlign: "center" }}
                          className="mobile-stack-item"
                        >
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1626684432012-icons8-doctors-bag-50.png"
                            alt="Doctors"
                            width="50"
                            height="50"
                            style={{ margin: "0 auto 10px auto" }}
                          />
                          <Text
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              color: "#ffffff",
                              margin: "0 0 10px 0",
                              fontWeight: "500",
                            }}
                            className="mobile-text-md"
                          >
                            Our Doctors
                          </Text>
                          <Text
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              color: "#cbd5e0",
                              margin: "0",
                              fontWeight: "400",
                            }}
                            className="mobile-text-sm"
                          >
                            Search for a Clinity Clinic doctor by specialty, disease, or condition.
                          </Text>
                          <Link
                            href={doctorsUrl}
                            style={{
                              color: "#ff7096",
                              textDecoration: "none",
                              fontSize: "14px",
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "500",
                              marginTop: "10px",
                              display: "inline-block",
                            }}
                          >
                            Visit Now
                          </Link>
                        </td>
                        <td
                          style={{ width: "33.33%", verticalAlign: "top", textAlign: "center", padding: "0 10px" }}
                          className="mobile-stack-item"
                        >
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1626684436681-icons8-out-patient-department-50.png"
                            alt="Departments"
                            width="50"
                            height="50"
                            style={{ margin: "0 auto 10px auto" }}
                          />
                          <Text
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              color: "#ffffff",
                              margin: "0 0 10px 0",
                              fontWeight: "500",
                            }}
                            className="mobile-text-md"
                          >
                            Departments
                          </Text>
                          <Text
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              color: "#cbd5e0",
                              margin: "0",
                              fontWeight: "400",
                            }}
                            className="mobile-text-sm"
                          >
                            Search for a Clinity Clinic condition, expertise, or doctor’s last name.
                          </Text>
                          <Link
                            href={departmentsUrl}
                            style={{
                              color: "#ff7096",
                              textDecoration: "none",
                              fontSize: "14px",
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "500",
                              marginTop: "10px",
                              display: "inline-block",
                            }}
                          >
                            Visit Now
                          </Link>
                        </td>
                        <td
                          style={{ width: "33.33%", verticalAlign: "top", textAlign: "center", padding: "0 0 0 10px" }}
                          className="mobile-stack-item"
                        >
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1626684441096-icons8-appointment-scheduling-50.png"
                            alt="Appointments"
                            width="50"
                            height="50"
                            style={{ margin: "0 auto 10px auto" }}
                          />
                          <Text
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              color: "#ffffff",
                              margin: "0 0 10px 0",
                              fontWeight: "500",
                            }}
                            className="mobile-text-md"
                          >
                            Appointments
                          </Text>
                          <Text
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              color: "#cbd5e0",
                              margin: "0",
                              fontWeight: "400",
                            }}
                            className="mobile-text-sm"
                          >
                            Search for a Clinity Clinic condition, expertise, or doctor’s last name.
                          </Text>
                          <Link
                            href={appointmentsUrl}
                            style={{
                              color: "#ff7096",
                              textDecoration: "none",
                              fontSize: "14px",
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "500",
                              marginTop: "10px",
                              display: "inline-block",
                            }}
                          >
                            Visit Now
                          </Link>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Modern Approach Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#2d3748" }}
                className="mobile-full-width"
              >
                <tr>
                  <td style={{ padding: "30px 20px" }} className="mobile-padding">
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                      <tr>
                        <td style={{ width: "40%", verticalAlign: "top" }}>
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1626092728793-left.png"
                            alt="Doctor Illustration"
                            width="150"
                            height="200"
                            style={{ margin: "0 auto 10px auto" }}
                          />
                        </td>
                        <td style={{ width: "60%", verticalAlign: "top", paddingLeft: "20px" }}>
                          <Heading
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "20px",
                              color: "#ffffff",
                              margin: "0 0 10px 0",
                              fontWeight: "600",
                            }}
                            className="mobile-text-lg"
                          >
                            A Modern Approach to Primary Care
                          </Heading>
                          <Text
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              color: "#cbd5e0",
                              margin: "0 0 15px 0",
                              fontWeight: "400",
                            }}
                            className="mobile-text-sm"
                          >
                            Search for a Clinity Clinic expert by specialty, disease, conditions, expertise, or
                            doctor’s last name.
                          </Text>
                          <Link
                            href={learnMoreUrl}
                            style={{
                              backgroundColor: "#ff7096",
                              color: "#ffffff",
                              padding: "10px 20px",
                              textDecoration: "none",
                              borderRadius: "5px",
                              fontSize: "14px",
                              fontWeight: "600",
                              fontFamily: "Inter, sans-serif",
                              display: "inline-block",
                            }}
                            className="mobile-button-full"
                          >
                            Learn More
                          </Link>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Testimonials Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#2d3748" }}
                className="mobile-full-width"
              >
                <tr>
                  <td style={{ padding: "30px 20px" }} className="mobile-padding">
                    <Heading
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "20px",
                        color: "#ffffff",
                        margin: "0 0 20px 0",
                        fontWeight: "600",
                        textAlign: "center",
                      }}
                      className="mobile-text-lg"
                    >
                      What our patients say
                    </Heading>
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                      <tr className="mobile-stack">
                        <td
                          style={{ width: "33.33%", verticalAlign: "top", textAlign: "center", padding: "0 10px" }}
                          className="mobile-stack-item"
                        >
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1626093151871-quote-1.png"
                            alt="Patient 1"
                            width="50"
                            height="50"
                            style={{ margin: "0 auto 10px auto", borderRadius: "50%" }}
                          />
                          <Text
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              color: "#cbd5e0",
                              margin: "0",
                              fontWeight: "400",
                            }}
                            className="mobile-text-sm"
                          >
                            I have insurance and still go line with my copy and I don’t have to make an appointment.
                          </Text>
                        </td>
                        <td
                          style={{ width: "33.33%", verticalAlign: "top", textAlign: "center", padding: "0 10px" }}
                          className="mobile-stack-item"
                        >
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1626093196277-quote-2.png"
                            alt="Patient 2"
                            width="50"
                            height="50"
                            style={{ margin: "0 auto 10px auto", borderRadius: "50%" }}
                          />
                          <Text
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              color: "#cbd5e0",
                              margin: "0",
                              fontWeight: "400",
                            }}
                            className="mobile-text-sm"
                          >
                            I have insurance and still go line with my copy and I don’t have to make an appointment.
                          </Text>
                        </td>
                        <td
                          style={{ width: "33.33%", verticalAlign: "top", textAlign: "center", padding: "0 10px" }}
                          className="mobile-stack-item"
                        >
                          <Img
                            src="https://cdn.templates.unlayer.com/assets/1626093199449-quote-3.png"
                            alt="Patient 3"
                            width="50"
                            height="50"
                            style={{ margin: "0 auto 10px auto", borderRadius: "50%" }}
                          />
                          <Text
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              color: "#cbd5e0",
                              margin: "0",
                              fontWeight: "400",
                            }}
                            className="mobile-text-sm"
                          >
                            I have insurance and still go line with my copy and I don’t have to make an appointment.
                          </Text>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Footer Section */}
            <Section className="px-0 py-0">
              <table
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%", backgroundColor: "#2d3748" }}
                className="mobile-full-width"
              >
                <tr>
                  <td style={{ padding: "20px" }} className="mobile-padding">
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                       {/* Social Media Icons */}
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ borderCollapse: "collapse", margin: "0 auto 30px auto" }}
                      className="mobile-social-stack"
                    >
                      <tr className="mobile-social-stack">
                        <td style={{ padding: "0 8px" }} className="mobile-social-item">
                          <Link href="">
                            <div
                              style={{
                                width: "36px",
                                height: "36px",
                                backgroundColor: "#000000",
                                borderRadius: "50%",
                                display: "inline-block",
                              }}
                            >
                              <table
                                width="100%"
                                cellPadding="0"
                                cellSpacing="0"
                                style={{ borderCollapse: "collapse", height: "100%" }}
                              >
                                <tr>
                                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                    <Text
                                      style={{
                                        fontSize: "18px",
                                        color: "#ffffff",
                                        margin: "0",
                                        fontFamily: "Inter, sans-serif",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      f
                                    </Text>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </Link>
                        </td>
                        <td style={{ padding: "0 8px" }} className="mobile-social-item">
                          <Link href="">
                            <div
                              style={{
                                width: "36px",
                                height: "36px",
                                backgroundColor: "#000000",
                                borderRadius: "50%",
                                display: "inline-block",
                              }}
                            >
                              <table
                                width="100%"
                                cellPadding="0"
                                cellSpacing="0"
                                style={{ borderCollapse: "collapse", height: "100%" }}
                              >
                                <tr>
                                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                    <Text
                                      style={{
                                        fontSize: "16px",
                                        color: "#ffffff",
                                        margin: "0",
                                        fontFamily: "Inter, sans-serif",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      t
                                    </Text>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </Link>
                        </td>
                        <td style={{ padding: "0 8px" }} className="mobile-social-item">
                          <Link href="">
                            <div
                              style={{
                                width: "36px",
                                height: "36px",
                                backgroundColor: "#000000",
                                borderRadius: "50%",
                                display: "inline-block",
                              }}
                            >
                              <table
                                width="100%"
                                cellPadding="0"
                                cellSpacing="0"
                                style={{ borderCollapse: "collapse", height: "100%" }}
                              >
                                <tr>
                                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                    <Text
                                      style={{
                                        fontSize: "14px",
                                        color: "#ffffff",
                                        margin: "0",
                                        fontFamily: "Inter, sans-serif",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      in
                                    </Text>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </Link>
                        </td>
                        <td style={{ padding: "0 8px" }} className="mobile-social-item">
                          <Link href="">
                            <div
                              style={{
                                width: "36px",
                                height: "36px",
                                backgroundColor: "#000000",
                                borderRadius: "50%",
                                display: "inline-block",
                              }}
                            >
                              <table
                                width="100%"
                                cellPadding="0"
                                cellSpacing="0"
                                style={{ borderCollapse: "collapse", height: "100%" }}
                              >
                                <tr>
                                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                    <Text
                                      style={{
                                        fontSize: "14px",
                                        color: "#ffffff",
                                        margin: "0",
                                        fontFamily: "Inter, sans-serif",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      ig
                                    </Text>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </Link>
                        </td>
                      </tr>
                    </table>
                      <tr>
                        <td style={{ textAlign: "center", paddingTop: "10px" }}>
                          <Text
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              color: "#cbd5e0",
                              margin: "0",
                              fontWeight: "400",
                            }}
                            className="mobile-text-sm"
                          >
                            We’re Open: Mon - Sat, 9:00 AM - 6:00 PM
                          </Text>
                          <Text
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              color: "#cbd5e0",
                              margin: "5px 0 0 0",
                              fontWeight: "400",
                            }}
                            className="mobile-text-sm"
                          >
                            Address: Brooklyn, XXX, US
                          </Text>
                          <Text
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              color: "#cbd5e0",
                              margin: "5px 0 0 0",
                              fontWeight: "400",
                            }}
                            className="mobile-text-sm"
                          >
                            Phone: +1 555 6789
                          </Text>
                          <Text
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "14px",
                              color: "#cbd5e0",
                              margin: "5px 0 0 0",
                              fontWeight: "400",
                            }}
                            className="mobile-text-sm"
                          >
                            Email: {contactEmail}
                          </Text>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "center", paddingTop: "10px" }}>
                          <Link
                            href={unsubscribeUrl}
                            style={{
                              color: "#cbd5e0",
                              textDecoration: "none",
                              fontSize: "14px",
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "500",
                            }}
                            className="mobile-text-sm"
                          >
                            Update | Unsubscribe
                          </Link>
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

HealthcareEmail.PreviewProps = {
  logoUrl: "https://via.placeholder.com/150x50?text=Your+Logo",
  bookAppointmentUrl: "https://example.com/book",
  doctorsUrl: "https://example.com/doctors",
  departmentsUrl: "https://example.com/departments",
  appointmentsUrl: "https://example.com/appointments",
  learnMoreUrl: "https://example.com/learn-more",
  unsubscribeUrl: "https://example.com/unsubscribe",
  contactEmail: "yourdomain.com",
} satisfies HealthcareEmailProps;