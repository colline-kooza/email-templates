import { Body, Container, Column, Head, Html, Img, Link, Preview, Row, Section, Text } from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

export const ResumeLetter = () => {
  return (
    <Html>
      <Preview>Resume Submission - Lydia Applicant - Theater Position</Preview>
      <Tailwind>
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
                  padding: 0 !important;
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
                
                .mobile-header-button {
                  font-size: 12px !important;
                  padding: 8px 16px !important;
                  text-align: center !important;
                  margin-bottom: 10px !important;
                }
                
                .mobile-header-link {
                  font-size: 12px !important;
                  text-align: center !important;
                }
                
                .mobile-hero-image {
                  width: 100% !important;
                  max-width: 320px !important;
                  height: auto !important;
                  margin: 0 auto 20px auto !important;
                  display: block !important;
                }
                
                .mobile-content-text {
                  font-size: 14px !important;
                  line-height: 1.6 !important;
                  text-align: left !important;
                }
                
                .mobile-date {
                  font-size: 14px !important;
                  text-align: left !important;
                }
                
                .mobile-address {
                  font-size: 13px !important;
                  text-align: left !important;
                  line-height: 1.4 !important;
                }
                
                .mobile-greeting {
                  font-size: 16px !important;
                  text-align: left !important;
                }
                
                .mobile-signature {
                  font-size: 14px !important;
                  text-align: left !important;
                }
                
                .mobile-social-icons {
                  margin: 0 8px !important;
                }
                
                .mobile-footer-text {
                  font-size: 12px !important;
                  line-height: 1.5 !important;
                  text-align: center !important;
                }
                
                .mobile-download-button {
                  font-size: 14px !important;
                  padding: 15px 25px !important;
                  width: auto !important;
                  display: block !important;
                  margin: 25px auto !important;
                }
              }
              
              /* Tablet Responsive */
              @media only screen and (min-width: 601px) and (max-width: 768px) {
                .tablet-hero-image {
                  max-width: 380px !important;
                }
              }
            `}
          </style>
        </Head>
        <Body className="bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 font-sans m-0 p-2 sm:p-6">
          <Container className="bg-white mx-auto p-0 max-w-2xl w-full shadow-2xl overflow-hidden">
            {/* Header Section */}
            <Section className="bg-gradient-to-r from-orange-400 to-orange-500 p-4 sm:p-6">
              <Row>
                <Column className="w-1/2 align-middle mobile-stack mobile-center">
                  <Link
                    href="#"
                    className="bg-white text-orange-500 py-2 px-4 sm:py-3 sm:px-5 rounded text-xs sm:text-sm font-bold tracking-wide inline-block shadow-md transition-all duration-300 hover:shadow-lg mobile-header-button"
                  >
                    RESUME
                  </Link>
                </Column>
                <Column className="w-1/2 align-middle text-right mobile-stack mobile-center">
                  <Link
                    href="#"
                    className="text-sm font-medium text-black underline opacity-90 hover:opacity-100 mobile-header-link"
                  >
                    View Online
                  </Link>
                </Column>
              </Row>
            </Section>

            {/* Hero Image Section */}
            <Section className="bg-white p-4 sm:p-8 text-center">
              <Img
                src="https://cdn.templates.unlayer.com/assets/1640007992964-res.jpg"
                alt="Team meeting and interview illustration"
                className="w-full h-auto max-w-md sm:max-w-lg block mx-auto rounded-lg mobile-hero-image tablet-hero-image"
              />
            </Section>

            {/* Content Section */}
            <Section className="bg-white p-4 sm:p-8">
              <Text className="text-base sm:text-lg font-medium text-gray-800 mb-6 mobile-date">July 26, 2021</Text>

              <Text className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed mobile-address">
                Veruca Lee
                <br />
                Talent Coordinator
                <br />
                Acme Theater
                <br />
                123 Theater Road
                <br />
                Brooklyn, NY 54321
              </Text>

              <Text className="text-lg sm:text-xl font-semibold text-gray-800 mb-6 mobile-greeting">Dear Ms. Lee,</Text>

              <Text className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 leading-relaxed text-justify mobile-content-text">
                I am a friend of Janice Dolan and she encouraged me to forward my resume to you. I knew Janice through
                the Brandon Theater Group, where I am the technical director. We worked together on several local
                theater projects.
              </Text>

              <Text className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 leading-relaxed text-justify mobile-content-text">
                I'm interested in relocating to the San Francisco area in the near future. I would appreciate any
                recommendations you can offer for conducting a job search for a theater position or finding job leads,
                and any help you can provide with the logistics of relocating to California.
              </Text>

              <Text className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 leading-relaxed text-justify mobile-content-text">
                My resume is attached. Most of my theatrical experience is in lighting and projection design; however, I
                have worked in most backstage areas during my career.
              </Text>

              <Text className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 leading-relaxed text-justify mobile-content-text">
                Thank you for your consideration. I look forward to hearing from you.
              </Text>

              <Text className="text-sm sm:text-base font-medium text-gray-800 mb-6 sm:mb-8 leading-relaxed mobile-signature">
                Sincerely,
                <br />
                <br />
                Signature (hard copy letter)
                <br />
                Lydia Applicant
              </Text>

              {/* Download CV Button */}
              <div className="text-center">
                <Link
                  href="#"
                  className="bg-orange-400 hover:bg-orange-500 text-white py-3 px-6 sm:py-4 sm:px-8 rounded-md text-sm font-bold tracking-wide inline-block shadow-lg transition-all duration-300 hover:shadow-xl mobile-download-button"
                >
                  DOWNLOAD CV
                </Link>
              </div>
            </Section>

            {/* Footer Section */}
            <Section className="bg-white p-6 sm:p-8 text-center border-t border-gray-200">
              {/* Social Media Icons */}
              <Row className="mb-6">
                <Column className="w-full text-center mobile-center">
                  <Link
                    href="#"
                    className="inline-block mx-2 sm:mx-3 transition-transform duration-300 hover:scale-110 mobile-social-icons"
                  >
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/circle/facebook.png"
                      alt="Facebook"
                      className="w-8 h-8 rounded-full"
                    />
                  </Link>
                  <Link
                    href="#"
                    className="inline-block mx-2 sm:mx-3 transition-transform duration-300 hover:scale-110 mobile-social-icons"
                  >
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                      alt="Instagram"
                      className="w-8 h-8 rounded-full"
                    />
                  </Link>
                  <Link
                    href="#"
                    className="inline-block mx-2 sm:mx-3 transition-transform duration-300 hover:scale-110 mobile-social-icons"
                  >
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png"
                      alt="LinkedIn"
                      className="w-8 h-8 rounded-full"
                    />
                  </Link>
                  <Link
                    href="#"
                    className="inline-block mx-2 sm:mx-3 transition-transform duration-300 hover:scale-110 mobile-social-icons"
                  >
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/circle/pinterest.png"
                      alt="Pinterest"
                      className="w-8 h-8 rounded-full"
                    />
                  </Link>
                </Column>
              </Row>

              {/* Company Information */}
              <Text className="text-xs sm:text-sm font-medium text-gray-500 mb-3 sm:mb-4 leading-relaxed mobile-footer-text">
                Unlayer LLC, HR Manager
                <br />
                388 Market St, Suite 1300
                <br />
                San Francisco, CA 94111
              </Text>

              {/* Copyright */}
              <Text className="text-xs text-gray-400 mobile-footer-text">© All rights reserved Unlayer</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default ResumeLetter
