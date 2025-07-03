import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
  Row,
  Column,
  Font,
} from '@react-email/components';

interface SaasNewsletterEmailProps {
  firstName?: string;
  productName?: string;
  productUrl?: string;
  companyName?: string;
  companyAddress?: string;
  logoUrl?: string;
  features?: { name: string; description: string; link: string }[];
  testimonial?: { quote: string; author: string; company: string };
  ctaLink?: string;
}

const SaasNewsletterEmail = ({
  firstName = 'Valued User',
  productName = 'Our Awesome SaaS',
  productUrl = 'https://example.com',
  companyName = 'Your Company Inc.',
  companyAddress = '123 Innovation Drive, Tech City, CA 94000',
  logoUrl = 'https://picsum.photos/150/30', // Placeholder logo
  features = [
    { name: 'AI-Powered Insights Engine', description: 'Unlock deeper understanding of your data with our new predictive analytics module. Make smarter decisions, faster.', link: 'https://example.com/features/ai-insights' },
    { name: 'Enhanced Collaboration Tools', description: 'Work seamlessly with your team using real-time comments and shared workspaces. Boost productivity effortlessly.', link: 'https://example.com/features/collaboration' },
    { name: 'Customizable Dashboard Widgets', description: 'Tailor your dashboard to see the metrics that matter most to you. Get a personalized overview at a glance.', link: 'https://example.com/features/dashboard-widgets' },
  ],
  testimonial = {
    quote: `"${productName} has revolutionized how we manage our projects. The new features are game-changers!"`,
    author: 'Alex Chen',
    company: 'Lead Developer, Innovate Solutions',
  },
  ctaLink = 'https://example.com/login',
}: SaasNewsletterEmailProps) => {
  const previewText = `🚀 What's New in ${productName} This Month?`;

  return (
    <Html lang="en">
        <Head>
        <Font
          fontFamily="DM Sans"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/dmsans/v15/rP2Fp2ywxg089UriCZa4ET-DNl0.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="initial"
        />
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans text-base text-gray-700">
          <Container className="mx-auto my-[40px] w-full max-w-[600px] bg-white p-[24px] rounded-[8px] shadow-sm">
            {/* Header Section */}
            <Section className="text-center">
                <Img
                  src="https://cdn.templates.unlayer.com/assets/1643359372986-car.png"
                  alt="Your Brand Logo"
                  className="w-[100px] h-[50px] mx-auto"
                />
              <Heading className="text-[28px] font-bold text-gray-800 mt-[12px] mb-[24px]">
                What's New in {productName}?
              </Heading>
              <Text className="text-[16px] leading-[24px]">
                Hi {firstName}, discover the latest enhancements designed to boost your productivity and streamline your workflow!
              </Text>
            </Section>

            <Hr className="border-gray-300 my-[26px]" />

            {/* Features Section */}
            <Section>
              <Heading as="h2" className="text-[20px] font-semibold text-gray-800 mb-[16px]">
                ✨ Fresh Features You'll Love
              </Heading>
              {features.map((feature, index) => (
                <Section key={index} className="mb-[20px]">
                  <Heading as="h3" className="text-[18px] font-medium text-blue-600 mb-[4px]">
                    {feature.name}
                  </Heading>
                  <Text className="text-[14px] leading-[22px] text-gray-600 mb-[8px]">
                    {feature.description}
                  </Text>
                  <Link
                    href={feature.link}
                    className="text-[14px] text-blue-500 underline hover:text-blue-700"
                  >
                    Learn More &rarr;
                  </Link>
                </Section>
              ))}
            </Section>

            <Hr className="border-gray-300 my-[26px]" />

            {/* Testimonial Section */}
            <Section className="bg-gray-50 p-[20px] rounded-[6px]">
              <Heading as="h2" className="text-[20px] font-semibold text-gray-800 mb-[16px] text-center">
                Hear From Our Users
              </Heading>
              <Text className="text-[16px] italic text-gray-700 leading-[24px] text-center mb-[12px]">
                {testimonial.quote}
              </Text>
              <Text className="text-[14px] text-gray-600 font-medium text-center m-0">
                {testimonial.author}
              </Text>
              <Text className="text-[14px] text-gray-500 text-center m-0">
                {testimonial.company}
              </Text>
            </Section>

            <Hr className="border-gray-300 my-[26px]" />

            {/* Call to Action Section */}
            <Section className="text-center">
              <Heading as="h2" className="text-[20px] font-semibold text-gray-800 mb-[16px]">
                Ready to Explore?
              </Heading>
              <Text className="text-[16px] leading-[24px] mb-[20px]">
                Log in to your account to experience these powerful new updates firsthand.
              </Text>
              <Button
                className="bg-blue-600 text-white font-bold py-[12px] px-[24px] rounded-[4px] no-underline box-border"
                href={ctaLink}
              >
                Try the Latest Version
              </Button>
            </Section>

            <Hr className="border-gray-300 my-[26px]" />

            {/* Footer Section */}
            <Section className="text-center text-gray-500 text-[12px]">
              <Text className="m-0">
                You're receiving this email because you're a user of {productName}.
              </Text>
              <Text className="m-0">
                {companyName} | {companyAddress}
              </Text>
              <Link href={`${productUrl}/unsubscribe`} className="text-blue-500 underline">
                Unsubscribe
              </Link>
              {' | '}
              <Link href={`${productUrl}/preferences`} className="text-blue-500 underline">
                Manage Preferences
              </Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default SaasNewsletterEmail;