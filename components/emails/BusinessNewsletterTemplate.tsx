import { Body, Container, Head, Html, Img, Link, Preview, Section, Text } from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

export const BusinessNewsletterTemplate = () => {
  return (
    <Html>
      <Preview>Innovative Ideas - Business Newsletter - Company Updates</Preview>
      <Tailwind>
        <Head>
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
              
              * {
                font-family: 'DM Sans', Arial, sans-serif;
                box-sizing: border-box;
              }
              
              /* sm styles for desktop */
              .desktop-row {
                width: 100%;
                display: table;
                table-layout: fixed;
              }
              
              .desktop-column {
                display: table-cell;
                vertical-align: top;
                width: 50%;
              }
              
              .desktop-column-left {
                padding-right: 20px;
              }
              
              .desktop-column-right {
                padding-left: 20px;
              }
              
              /* Mobile-first responsive design */
              @media only screen and (max-width: 640px) {
                .container-mobile {
                  width: 100% !important;
                  max-width: 100% !important;
                  margin: 0 !important;
                  padding: 0 10px !important;
                }
                
                .desktop-row {
                  display: block !important;
                  width: 100% !important;
                }
                
                .desktop-column {
                  display: block !important;
                  width: 100% !important;
                  padding: 0 !important;
                  margin-bottom: 20px !important;
                }
                
                .desktop-column-left,
                .desktop-column-right {
                  padding: 0 !important;
                }
                
                .mobile-center {
                  text-align: center !important;
                }
                
                .mobile-logo {
                  width: 80px !important;
                  height: 80px !important;
                  margin: 20px auto !important;
                }
                
                .mobile-hero-image {
                  width: 100% !important;
                  max-width: 100% !important;
                  height: auto !important;
                  margin-bottom: 20px !important;
                }
                
                .mobile-section-image {
                  width: 100% !important;
                  max-width: 100% !important;
                  height: auto !important;
                  margin: 0 auto 20px auto !important;
                  display: block !important;
                }
                
                .mobile-title {
                  font-size: 28px !important;
                  line-height: 1.2 !important;
                  text-align: center !important;
                  margin-bottom: 20px !important;
                }
                
                .mobile-section-title {
                  font-size: 24px !important;
                  line-height: 1.3 !important;
                  text-align: center !important;
                  margin-bottom: 16px !important;
                }
                
                .mobile-text {
                  font-size: 16px !important;
                  line-height: 1.6 !important;
                  text-align: center !important;
                  margin-bottom: 20px !important;
                }
                
                .mobile-button {
                  display: block !important;
                  text-align: center !important;
                  margin: 20px auto !important;
                  padding: 14px 28px !important;
                  font-size: 16px !important;
                }
                
                .mobile-section-padding {
                  padding: 30px 20px !important;
                }
                
                .mobile-list-item {
                  text-align: center !important;
                  margin-bottom: 8px !important;
                }
                
                .mobile-footer-text {
                  font-size: 14px !important;
                  line-height: 1.5 !important;
                  text-align: center !important;
                }
                
                .mobile-social-icon {
                  margin: 0 6px !important;
                }
              }
              
              /* Tablet styles */
              @media only screen and (min-width: 641px) and (max-width: 768px) {
                .container-mobile {
                  padding: 0 20px !important;
                }
                
                .tablet-padding {
                  padding: 40px 30px !important;
                }
                
                .tablet-text {
                  font-size: 15px !important;
                }
              }
            `}
          </style>
        </Head>
        <Body className="bg-gray-100 font-sans m-0 p-0">
          <Container className="bg-white mx-auto max-w-2xl shadow-lg container-mobile">
            {/* Header Section with Logo */}
            <Section className="text-center">
              <Img 
                src="https://cdn.templates.unlayer.com/assets/1616925067372-logo2.png" 
                alt="Company Logo"
                className="w-[70px] h-[90px] mx-auto object-contain mobile-logo"
              />
            </Section>

            {/* Hero Section - Innovative Ideas */}
            <Section className="bg-white text-center mobile-section-padding" style={{ padding: '40px 20px' }}>
              <Img
                src="https://cdn.templates.unlayer.com/assets/1616925159804-bvbv.jpg"
                alt="Businessman with innovative digital interface"
                className="w-full h-auto block mx-auto mb-8 mobile-hero-image"
              />

              <Text className="text-2xl font-bold text-gray-800 mb-2 mobile-title">
                INNOVATIVE IDEAS
              </Text>

              <div className="w-16 h-1 bg-yellow-400 mx-auto mb-8"></div>

              <Text className="text-sm text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto mobile-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </Text>

              <Link
                href="#"
                className="bg-blue-800 border-2 border-gray-300 hover:border-gray-400 text-gray-200 py-3 px-8 rounded text-sm font-semibold transition-all duration-300 inline-block mobile-button mb-3"
              >
                Get Started
              </Link>
            </Section>

            {/* Company Section */}
            <Section className="bg-gray-50 mobile-section-padding" style={{ padding: '50px 30px' }}>
              <div className="desktop-row">
                <div className="desktop-column desktop-column-left">
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1616926227588-1.png"
                    alt="Modern office building"
                    className="w-full h-[30vh]  object-cover mobile-section-image"
                  />
                </div>
                <div className="desktop-column desktop-column-right">
                  <Text className="text-xs text-gray-500 mb-3 font-medium tracking-wide uppercase mobile-text">
                    WHO WE ARE
                  </Text>
                  <Text className="text-2xl font-bold text-gray-800 mb-4 mobile-section-title">
                    Our Company
                  </Text>
                  <Text className="text-sm text-gray-600 mb-2 leading-relaxed mobile-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  </Text>
                  <Link
                    href="#"
                    className="bg-blue-700 border-2 border-gray-300 hover:border-gray-400 text-gray-200 py-3 px-6 rounded text-sm font-semibold transition-all duration-300 inline-block mobile-button mb-3"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </Section>

            {/* Marketing Strategy Section */}
            <Section className="bg-yellow-400 mobile-section-padding" style={{ padding: '50px 30px' }}>
              <div className="desktop-row">
                <div className="desktop-column desktop-column-left">
                  <Text className="text-2xl font-bold text-gray-800 mb-2 mobile-section-title">
                    Marketing Strategy
                  </Text>
                  <div className="mb-2">
                    <Text className="text-sm text-gray-700 mb-2 mobile-list-item">• Lorem ipsum dolor sit amet</Text>
                    <Text className="text-sm text-gray-700 mb-2 mobile-list-item">• Lorem ipsum dolor sit amet</Text>
                    <Text className="text-sm text-gray-700 mb-2 mobile-list-item">• Lorem ipsum dolor sit amet</Text>
                  </div>
                  <Link
                    href="#"
                    className="bg-white hover:bg-gray-50 text-gray-700 py-3 px-6 rounded text-sm font-semibold transition-all duration-300 inline-block mobile-button mb-3"
                  >
                    Read More
                  </Link>
                </div>
                <div className="desktop-column desktop-column-right">
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1616928560338-2.png"
                    alt="Team working on marketing strategy"
                    className="w-full h-[30vh]   object-cover mobile-section-image "
                  />
                </div>
              </div>
            </Section>

            {/* Business Analysis Section */}
            <Section className="bg-blue-900 text-white mobile-section-padding" style={{ padding: '50px 30px' }}>
              <div className="desktop-row">
                <div className="desktop-column desktop-column-left">
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1616928781023-3.png"
                    alt="Business analysis with digital charts"
                    className="w-full  h-[30vh]  object-cover mobile-section-image "
                  />
                </div>
                <div className="desktop-column desktop-column-right">
                  <Text className="text-2xl font-bold mb-2 mobile-section-title">
                    Business Analysis
                  </Text>
                  <Text className="text-base text-blue-100 mb-2 leading-relaxed mobile-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </Text>
                  <Link
                    href="#"
                    className="bg-white hover:bg-gray-50 text-blue-900 py-3 px-6 rounded text-sm font-semibold transition-all duration-300 inline-block mobile-button mb-3"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </Section>

            {/* Services Section */}
            <Section className="bg-white text-center mobile-section-padding" style={{ padding: '50px 30px' }}>
              <Text className="text-2xl font-bold text-gray-800 mb-2 mobile-section-title">
                Services
              </Text>
              <Text className="text-base text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto mobile-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </Text>
            </Section>

            {/* More Than Imagined Section */}
            <Section className="bg-gray-50 mobile-section-padding" style={{ padding: '50px 30px' }}>
              <div className="desktop-row">
                <div className="desktop-column desktop-column-left">
                  <Text className="text-2xl font-bold text-gray-800 mb-2 mobile-section-title">
                    More Than Imagined
                  </Text>
                  <Text className="text-base text-gray-600 mb-2 leading-relaxed mobile-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </Text>
                  <Link
                    href="#"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded text-sm font-semibold transition-all duration-300 inline-block mobile-button mb-3"
                  >
                    Let's Start
                  </Link>
                </div>
                <div className="desktop-column desktop-column-right">
                  <Img
                    src="https://cdn.templates.unlayer.com/assets/1616930608620-video_youtube_wbnaHgSttVo.jpg"
                    alt="Business presentation video thumbnail"
                    className="w-full h-[30vh]  object-cover mobile-section-image"
                  />
                </div>
              </div>
            </Section>

            {/* Footer Section */}
            <Section className="bg-white text-center border-t border-gray-200 mobile-section-padding" style={{ padding: '40px 30px' }}>
              {/* Social Media Icons */}
              <div className="mb-8">
                <Link
                  href="#"
                  className="inline-block mx-3 transition-transform duration-300 hover:scale-110 mobile-social-icon"
                >
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle/facebook.png"
                    alt="Facebook"
                    className="w-8 h-8 rounded-full"
                  />
                </Link>
                <Link
                  href="#"
                  className="inline-block mx-3 transition-transform duration-300 hover:scale-110 mobile-social-icon"
                >
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png"
                    alt="Twitter"
                    className="w-8 h-8 rounded-full"
                  />
                </Link>
                <Link
                  href="#"
                  className="inline-block mx-3 transition-transform duration-300 hover:scale-110 mobile-social-icon"
                >
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png"
                    alt="LinkedIn"
                    className="w-8 h-8 rounded-full"
                  />
                </Link>
                <Link
                  href="#"
                  className="inline-block mx-3 transition-transform duration-300 hover:scale-110 mobile-social-icon"
                >
                  <Img
                    src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                    alt="Instagram"
                    className="w-8 h-8 rounded-full"
                  />
                </Link>
              </div>

              {/* Footer Text */}
              <Text className="text-sm text-gray-500 mb-2 leading-relaxed max-w-lg mx-auto mobile-footer-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </Text>

              {/* Unsubscribe Links */}
              <Text className="text-xs text-gray-400 mobile-footer-text">
                <Link href="#" className="text-blue-500 hover:text-blue-700 underline mr-4">
                  Unsubscribe
                </Link>
                |
                <Link href="#" className="text-blue-500 hover:text-blue-700 underline ml-4">
                  View Online
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default BusinessNewsletterTemplate