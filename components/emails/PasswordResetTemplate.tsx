import { Body, Container, Column, Head, Html, Img, Link, Preview, Row, Section, Text } from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

export const PasswordResetTemplate = () => {
  return (
    <Html>
      <Preview>Reset Your Password - Company Logotype</Preview>
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
                
                .mobile-logo {
                  font-size: 18px !important;
                  text-align: center !important;
                  margin-bottom: 20px !important;
                }
                
                .mobile-hero-image {
                  width: 100% !important;
                  max-width: 300px !important;
                  height: auto !important;
                  margin: 0 auto 25px auto !important;
                  display: block !important;
                }
                
                .mobile-main-title {
                  font-size: 24px !important;
                  line-height: 1.3 !important;
                  text-align: center !important;
                }
                
                .mobile-subtitle {
                  font-size: 14px !important;
                  line-height: 1.5 !important;
                  text-align: center !important;
                }
                
                .mobile-reset-button {
                  font-size: 14px !important;
                  padding: 15px 30px !important;
                  width: auto !important;
                  display: block !important;
                  margin: 25px auto !important;
                }
                
                .mobile-disclaimer {
                  font-size: 12px !important;
                  text-align: center !important;
                  line-height: 1.4 !important;
                }
                
                .mobile-social-icons {
                  margin: 0 6px !important;
                }
                
                .mobile-footer-text {
                  font-size: 12px !important;
                  line-height: 1.5 !important;
                  text-align: center !important;
                }
                
                .mobile-section-padding {
                  padding: 20px 15px !important;
                }
                
                .mobile-footer-padding {
                  padding: 25px 15px !important;
                }
              }
              
              /* Tablet Responsive */
              @media only screen and (min-width: 601px) and (max-width: 768px) {
                .tablet-hero-image {
                  max-width: 350px !important;
                }
                
                .tablet-padding {
                  padding: 30px 25px !important;
                }
              }
            `}
          </style>
        </Head>
        <Body className="bg-gray-100 font-sans m-0 p-2 sm:p-6">
          <Container className="bg-white mx-auto p-0 max-w-2xl w-full shadow-lg overflow-hidden rounded-lg">
            {/* Header Section with Logo */}
            <img src="https://cdn.templates.unlayer.com/assets/1617101428409-Logo4.png" alt=""
            className=" w-[120px] h-[120px] mx-auto block object-contain"
            />

            {/* Hero Image Section */}
            <Section className="bg-gray-50 text-center mobile-section-padding">
              <Img
                src="https://cdn.templates.unlayer.com/assets/1617105859646-question.gif"
                alt="Password reset illustration with person and smartphone"
                className="w-full h-[70vh] object-cover block mx-auto mobile-hero-image tablet-hero-image"
              />
            </Section>

            {/* Main Content Section */}
            <Section className="bg-white p-6 sm:p-8 text-center mobile-section-padding">
              {/* Main Title */}
              <Text className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 mobile-main-title">
                Forgot your password?
              </Text>

              {/* Subtitle */}
              <Text className="text-base sm:text-lg text-gray-600 mb-8 mobile-subtitle">
                Not to worry, we got you! Let's get you a new password.
              </Text>

              {/* Reset Password Button */}
              <div className="text-center mb-6">
                <Link
                  href="#"
                  className="bg-green-500 hover:bg-green-600 text-white py-4 px-8 sm:py-5 sm:px-12 rounded-md text-xs sm:text-sm font-bold tracking-wide inline-block shadow-lg transition-all duration-300 hover:shadow-xl mobile-reset-button"
                >
                  RESET PASSWORD
                </Link>
              </div>

              {/* Disclaimer */}
              <Text className="text-sm text-gray-500 mobile-disclaimer">
                If you didn't request to change your password, simply ignore this email.
              </Text>
            </Section>

            {/* Footer Section */}
            <Section className="bg-gray-50 p-6 sm:p-8 text-center mobile-footer-padding">
              {/* Expiration Notice */}
              <Text className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed mobile-footer-text">
                This link will expire in 24 hours. If you continue to have problems please feel free to contact us at{" "}
                <Link href="mailto:support@yourmail.com" className="text-blue-500 hover:text-blue-700 underline">
                  support@yourmail.com
                </Link>{" "}
                <Link href="#" className="text-blue-500 hover:text-blue-700 underline">
                  (help document)
                </Link>
              </Text>

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
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                    />
                  </Link>
                  <Link
                    href="#"
                    className="inline-block mx-2 sm:mx-3 transition-transform duration-300 hover:scale-110 mobile-social-icons"
                  >
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png"
                      alt="Twitter"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                    />
                  </Link>
                  <Link
                    href="#"
                    className="inline-block mx-2 sm:mx-3 transition-transform duration-300 hover:scale-110 mobile-social-icons"
                  >
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png"
                      alt="LinkedIn"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                    />
                  </Link>
                  <Link
                    href="#"
                    className="inline-block mx-2 sm:mx-3 transition-transform duration-300 hover:scale-110 mobile-social-icons"
                  >
                    <Img
                      src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                      alt="Instagram"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                    />
                  </Link>
                </Column>
              </Row>

              {/* Company Description */}
              <Text className="text-xs sm:text-sm text-gray-500 mb-4 leading-relaxed mobile-footer-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </Text>

              {/* Contact Information */}
              <Text className="text-xs text-gray-400 mobile-footer-text">
                Your Street 12, 34567 AB City / info@example.com / (+1) 123 456 789
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default PasswordResetTemplate
