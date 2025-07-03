import { Body, Container, Column, Head, Html, Img, Link, Preview, Row, Section, Text } from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

export const ReferralEmail = () => {
  return (
    <Html>
      <Preview>Refer Friends & Earn Cash - Up to $150 Rewards</Preview>
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
                
                .mobile-header-link {
                  font-size: 12px !important;
                  text-align: center !important;
                  margin-bottom: 15px !important;
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
                  line-height: 1.2 !important;
                  text-align: center !important;
                }
                
                .mobile-subtitle {
                  font-size: 14px !important;
                  text-align: center !important;
                }
                
                .mobile-reward-amount {
                  font-size: 20px !important;
                  text-align: center !important;
                }
                
                .mobile-reward-desc {
                  font-size: 12px !important;
                  text-align: center !important;
                }
                
                .mobile-cta-button {
                  font-size: 14px !important;
                  padding: 15px 25px !important;
                  width: auto !important;
                  display: block !important;
                  margin: 25px auto !important;
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
              }
              
              /* Tablet Responsive */
              @media only screen and (min-width: 601px) and (max-width: 768px) {
                .tablet-hero-image {
                  max-width: 400px !important;
                }
                
                .tablet-padding {
                  padding: 30px 25px !important;
                }
              }
            `}
          </style>
        </Head>
        <Body className="bg-gray-100 font-sans m-0 p-2 sm:p-6">
          <Container className="bg-white mx-auto p-0 max-w-2xl w-full shadow-lg overflow-hidden">
            {/* Header Section */}
            <Section className="bg-white p-4 sm:p-6 text-right">
              <Link
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-gray-800 underline mobile-header-link"
              >
                View Online
              </Link>
            </Section>

            {/* Hero Image Section */}
            <Section className="bg-white text-center">
              <Img
                src="https://cdn.templates.unlayer.com/assets/1637930215946-young-joyful-couple-two-friends-guy-woman-white-pink-empty-t-shirts-posing.jpg"
                alt="Happy couple with megaphone promoting referral program"
                className="w-full h-auto max-w-full block mx-auto mobile-hero-image tablet-hero-image"
              />
            </Section>

            {/* Main Content Section */}
            <Section className="bg-white p-6 sm:p-8 text-center mobile-section-padding">
              {/* Header Text */}
              <Text className="text-sm sm:text-base font-semibold text-gray-600 mb-4 tracking-wide uppercase mobile-subtitle">
                REFER & EARN
              </Text>

              {/* Main Title */}
              <Text className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 sm:mb-12 leading-tight mobile-main-title">
                REFER FRIENDS &<br />
                RECEIVE CASH
              </Text>

              {/* Reward Tiers */}
              <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
                {/* $50 Tier */}
                <div className="text-center">
                  <Text className="text-xl sm:text-2xl font-bold text-teal-600 mb-1 mobile-reward-amount">
                    EARN CASH $50
                  </Text>
                  <Text className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide mobile-reward-desc">
                    REFER 2 FRIENDS
                  </Text>
                </div>

                {/* $100 Tier */}
                <div className="text-center">
                  <Text className="text-xl sm:text-2xl font-bold text-teal-600 mb-1 mobile-reward-amount">
                    EARN CASH $100
                  </Text>
                  <Text className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide mobile-reward-desc">
                    REFER 8 FRIENDS
                  </Text>
                </div>

                {/* $150 Tier */}
                <div className="text-center">
                  <Text className="text-xl sm:text-2xl font-bold text-teal-600 mb-1 mobile-reward-amount">
                    EARN CASH $150
                  </Text>
                  <Text className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide mobile-reward-desc">
                    REFER 12 FRIENDS
                  </Text>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Link
                  href="#"
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-4 px-8 sm:py-5 sm:px-10 rounded-md text-sm sm:text-base font-bold tracking-wide inline-block shadow-lg transition-all duration-300 hover:shadow-xl mobile-cta-button"
                >
                  REFER YOUR FRIENDS
                </Link>
              </div>
            </Section>

            {/* Footer Section */}
            <Section className="bg-gray-50 p-6 sm:p-8 text-center mobile-section-padding">
              {/* Share Text */}
              <Text className="text-sm font-medium text-gray-600 mb-4">Share your link on</Text>

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

              {/* Company Information */}
              <Text className="text-xs sm:text-sm font-medium text-gray-500 mb-4 leading-relaxed mobile-footer-text">
                Unlayer LLC, HR Manager
                <br />
                388 Market St, Suite 1300
                <br />
                San Francisco, CA 94111
              </Text>

              {/* Unsubscribe */}
              <Text className="text-xs text-gray-400 mobile-footer-text">
                Changed your mind?{" "}
                <Link href="#" className="text-blue-500 hover:text-blue-700 underline">
                  Unsubscribe
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default ReferralEmail
