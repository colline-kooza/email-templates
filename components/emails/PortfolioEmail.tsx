import {
    Body,
    Container,
    Column,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
    Tailwind,
  } from "@react-email/components";
  

  export const PortfolioEmail = () => (
    <Html>
      <Head />
      <Preview>John Doe - Software Developer Portfolio</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto p-4 max-w-[600px]">
            <Section className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Header */}
              <Row className="bg-indigo-600  p-4">
                <Column>
                  <Text className="text-2xl font-bold text-white">JD</Text>
                </Column>
                <Column align="right">
                  <Link href="#" className="text-white mx-2">About</Link>
                  <Link href="#" className="text-white mx-2">Projects</Link>
                  <Link href="#" className="text-white mx-2">Contact</Link>
                </Column>
              </Row>
  
              {/* Hero Section */}
              <Section className="p-5 text-center">
                <Img
                  src={`https://media.istockphoto.com/id/1919265357/photo/close-up-portrait-of-confident-businessman-standing-in-office.jpg?s=612x612&w=0&k=20&c=ZXRPTG9VMfYM3XDo1UL9DEpfO8iuGVSsyh8dptfKQsQ=`}
                  width="150"
                  height="150"
                  alt="John Doe"
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <Heading className="text-3xl font-bold text-gray-800 !mb-1">John Doe</Heading>
                <Text className="text-xl text-gray-600 !mb-0">Innovative Software Developer</Text>
                <Text className="text-gray-600 mb-6 !mt-0 ">Passionate about creating elegant solutions to complex problems</Text>
                <Link
                  href="#contact"
                  className="bg-purple-600 text-white py-2 px-8 rounded-sm font-bold hover:bg-purple-700 transition duration-300"
                >
                  Get in Touch
                </Link>
              </Section>
  
              {/* Skills Showcase */}
              <Section className="bg-gray-50 p-8">
                <Heading className="text-2xl font-bold text-gray-800 mb-4">Skills</Heading>
                <Row>
                  <Column className="px-2">
                    <Text className="bg-indigo-100 text-indigo-800 py-1 px-3 rounded-full inline-block mb-2">JavaScript</Text>
                    <Text className="bg-indigo-100 text-indigo-800 py-1 px-3 rounded-full inline-block mb-2">React</Text>
                    <Text className="bg-indigo-100 text-indigo-800 py-1 px-3 rounded-full inline-block mb-2">Node.js</Text>
                  </Column>
                  <Column className="px-2">
                    <Text className="bg-indigo-100 text-indigo-800 py-1 px-3 rounded-full inline-block mb-2">TypeScript</Text>
                    <Text className="bg-indigo-100 text-indigo-800 py-1 px-3 rounded-full inline-block mb-2">GraphQL</Text>
                    <Text className="bg-indigo-100 text-indigo-800 py-1 px-3 rounded-full inline-block mb-2">AWS</Text>
                  </Column>
                </Row>
              </Section>
  
              {/* Featured Projects */}
              <Section className="p-8">
                <Heading className="text-2xl font-bold text-gray-800 mb-4">Featured Projects</Heading>
                <Row>
                  <Column className="px-2">
                    <Img
                      src={`https://media.istockphoto.com/id/1970000697/vector/online-banking-concept-credit-card-payment-3d-phone-digital-money-pay.jpg?s=612x612&w=0&k=20&c=NTL8zfYaCFtGsdE-t71REz3nn9HUTQltpLTzuYWpcR4=`}
                      width="250"
                      height="150"
                      alt="Project 1"
                      className="rounded-lg mb-2"
                    />
                    <Text className="font-bold text-gray-800 !mt-0 !mb-0">E-commerce Platform</Text>
                    <Text className="text-gray-600 !mt-0 !mb-0 ">React, Node.js, MongoDB</Text>
                    <Link href="#" className="text-purple-600 hover:underline">View Project</Link>
                  </Column>
                  <Column className="px-2">
                    <Img
                      src={`https://media.istockphoto.com/id/2170297740/photo/genz-manages-her-investments-eco-system-apply-all-data-with-the-help-of-an-ai-powered-chatbot.jpg?s=612x612&w=0&k=20&c=kgh7v5dcLYTlnEKfxE0TN9o46okzwtgS8h9x8zD8Srk=`}
                      width="250"
                      height="150"
                      alt="Project 2"
                      className="rounded-lg mb-2"
                    />
                    <Text className="font-bold text-gray-800 !mt-0 !mb-0">AI-powered Chat App</Text>
                    <Text className="text-gray-600 !mt-0 !mb-0">React Native, TensorFlow</Text>
                    <Link href="#" className="text-purple-600 hover:underline">View Project</Link>
                  </Column>
                </Row>
              </Section>
  
              {/* Work Experience */}
              <Section  className="bg-gray-50 p-8">
                <Heading className="text-2xl font-bold text-gray-800 mb-4">Work Experience</Heading>
                <Row className="mb-4">
                  <Column>
                    <Text className="font-bold text-gray-800">Senior Software Engineer</Text>
                    <Text className="text-gray-600">TechCorp Inc. | 2019 - Present</Text>
                    <Text className="text-gray-600">Led development of scalable microservices architecture</Text>
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <Text className="font-bold text-gray-800">Full Stack Developer</Text>
                    <Text className="text-gray-600">InnovateSoft | 2016 - 2019</Text>
                    <Text className="text-gray-600">Developed and maintained multiple client web applications</Text>
                  </Column>
                </Row>
              </Section>
     {/* Featured Projects */}
     <Section className="p-8">
                <Heading className="text-2xl font-bold text-gray-800 mb-4">Recent Projects</Heading>
                <Row>
                  <Column className="px-2">
                    <Img
                      src={`https://media.istockphoto.com/id/1970000697/vector/online-banking-concept-credit-card-payment-3d-phone-digital-money-pay.jpg?s=612x612&w=0&k=20&c=NTL8zfYaCFtGsdE-t71REz3nn9HUTQltpLTzuYWpcR4=`}
                      width="250"
                      height="150"
                      alt="Project 1"
                      className="rounded-lg mb-2"
                    />
                    <Text className="font-bold text-gray-800 !mt-0 !mb-0">E-commerce Platform</Text>
                    <Text className="text-gray-600 !mt-0 !mb-0 ">React, Node.js, MongoDB</Text>
                    <Link href="#" className="text-purple-600 hover:underline">View Project</Link>
                  </Column>
                  <Column className="px-2">
                    <Img
                      src={`https://media.istockphoto.com/id/2170297740/photo/genz-manages-her-investments-eco-system-apply-all-data-with-the-help-of-an-ai-powered-chatbot.jpg?s=612x612&w=0&k=20&c=kgh7v5dcLYTlnEKfxE0TN9o46okzwtgS8h9x8zD8Srk=`}
                      width="250"
                      height="150"
                      alt="Project 2"
                      className="rounded-lg mb-2"
                    />
                    <Text className="font-bold text-gray-800 !mt-0 !mb-0">AI-powered Chat App</Text>
                    <Text className="text-gray-600 !mt-0 !mb-0">React Native, TensorFlow</Text>
                    <Link href="#" className="text-purple-600 hover:underline">View Project</Link>
                  </Column>
                </Row>
              </Section>
              {/* Education */}
              <Section className="p-8">
                <Heading className="text-2xl font-bold text-gray-800 mb-4">Education</Heading>
                <Text className="font-bold text-gray-800">Bachelor of Science in Computer Science</Text>
                <Text className="text-gray-600">University of Technology | Graduated 2016</Text>
              </Section>
  
              {/* Testimonials */}
              <Section className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-black">
                <Heading className="text-2xl font-bold mb-4">What People Say</Heading>
                <Text className="italic mb-2">"John is an exceptional developer with a keen eye for detail."</Text>
                <Text className="font-bold">- Sarah Johnson, Project Manager at TechCorp</Text>
              </Section>
  
              {/* Contact Information */}
              <Section className="p-8 text-center" id="contact">
                <Heading className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</Heading>
                <Text className="text-gray-600 mb-2">Email: john.doe@example.com</Text>
                <Text className="text-gray-600 mb-4">Phone: (123) 456-7890</Text>
                <div className="mx-auto">
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/facebook.png" alt="LinkedIn" className="w-8 h-8" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/pinterest.png" alt="Twitter" className="w-8 h-8 ml-2" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/email.png" alt="Skype" className="w-8 h-8 ml-2" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/youtube.png" alt="Instagram" className="w-8 h-8 ml-2" /></a>
                </div>
              </Section>
  
              {/* Footer */}
              <Section className="bg-indigo-600 p-4 text-center">
                <Text className="text-sm text-white">© 2023 John Doe. All rights reserved.</Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
  
  export default PortfolioEmail;