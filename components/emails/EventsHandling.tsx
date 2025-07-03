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
  } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
  import * as React from "react";
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export const EventsHandling = () => (
    <Html>
      <Head />
      <Preview>Event Announcement: Upcoming Activities</Preview>
  
      <Tailwind>
      <Body style={main}>
        <Container style={container}>
          <Section style={topSection}>
            <div className="w-full text-center py-5">
                <Img src="https://cdn.templates.unlayer.com/assets/1625218999519-gfh.png" alt="Logo" className="w-32 mx-auto" />
              </div>
              <Heading style={heading}>
                EVENTS HEADING 
                <br/>
                YOUR WAY
              </Heading>
            <Text style={subheading}>
              We want to keep you updated on announcements
              <br />
              and events happening soon
            </Text>
            <Row>
              <Column style={eventColumn}>
              <Text style={date}>July 02, 20XX</Text>
              <Text style={time}>10 AM</Text>
              </Column>
              <Column style={eventColumn}>
              <Link href="https://example.com/register" style={{
                  backgroundColor: "#3498db",
                  borderRadius: "1px",
                  color: "#ffffff",
                  fontSize: "15px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  padding: "14px 34px",
                  display: "inline-block",
                  border:"1px white solid"
                }}>
              REGISTER NOW
            </Link>
              </Column>
             
            </Row>
           
           
          </Section>
  
          <Section style={activitiesSection}>
            <Heading as="h2" className="tracking-widest !mb-2" style={activitiesHeading}>UPCOMMING ACTIVITIES</Heading>
            <Heading as="h3" className="!mt-0" style={monthHeading}>AUGUST 20XX</Heading>
  
            <Row>
              <Column style={eventColumn}>
                <Img
                  src={`https://cdn.templates.unlayer.com/assets/1625220911614-452746`}
                  width="200"
                  height="200"
                  className="object-cover"
                  alt="Recycling Initiative"
                />
                <Text className="!mt-2 !mb-0" style={eventDate}>AUGUST 12</Text>
                <Text className="!mt-0 !mb-2" style={eventTitle}>RECYCLING INITIATIVE</Text>
                <Link href="https://example.com/event1" style={{
    backgroundColor: "#90C444",
    borderRadius: "1px",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "bold",
    textDecoration: "none",
    textTransform: "uppercase",
    padding: "10px 18px",
    display: "inline-block",
  }}>
                  READ MORE
                </Link>
              </Column>
              <Column style={eventColumn}>
                <Img
                  src={`https://cdn.templates.unlayer.com/assets/1625221358783-315779`}
                  width="200"
                  height="200"
                  className="object-cover"
                  alt="Run for Charity"
                />
                <Text className="!mt-2 !mb-0"  style={eventDate}>AUGUST 12</Text>
                <Text className="!mt-0 !mb-0"  style={eventTitle}>RUN FOR CHARITY</Text>
                <Link href="https://example.com/event2" style={{
                    backgroundColor: "#90C444",
                    borderRadius: "1px",
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    padding: "10px 18px",
                    display: "inline-block",
                  }}>
                  READ MORE
                </Link>
              </Column>
              <Column style={eventColumn}>
                <Img
                  src={`https://cdn.templates.unlayer.com/assets/1625221294834-725847`}
                  width="200"
                  className="object-cover"
                  height="200"
                  alt="Environmental Issues"
                />
                <Text className="!mt-2 !mb-0"  style={eventDate}>AUGUST 12</Text>
                <Text className="!mt-0 !mb-0"  style={eventTitle}>ENVIRONMENTAL ISSUES</Text>
                <Link href="https://example.com/event3" style={{
                backgroundColor: "#90C444",
                borderRadius: "1px",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: "bold",
                textDecoration: "none",
                textTransform: "uppercase",
                padding: "10px 18px",
                display: "inline-block",
              }}>
                  READ MORE
                </Link>
              </Column>
            </Row>
          </Section>
  
          <Section style={reminderSection}>
            <Heading as="h2" style={reminderHeading}>QUICK REMINDER</Heading>
            <Text style={reminderText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
   <Link  href="https://example.com/reminder" style={{
    backgroundColor: "#90C444",
    borderRadius: "5px",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textTransform: "uppercase",
    padding: "12px 24px",
    display: "inline-block",
  }}>
              CLICK HERE
            </Link>
          </Section>
  
          <Section style={updatesSection}>
            <Heading as="h2" style={updatesHeading}>LATEST UPDATES</Heading>
            <Row style={updateRow}>
              <Column style={updateImageColumn}>
                <Img
                  src={`https://cdn.templates.unlayer.com/assets/1625223044590-430041`}
                  width="150"
                  height="150"
                  alt="Meet the kids you helped"
                  className="object-cover"
                />
              </Column>
              <Column style={updateTextColumn}>
                <Text style={updateTitle}>Meet the kids you helped</Text>
                <Text style={updateDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                </Text>
                <Link href="https://example.com/update1" style={updateLink}>
                  READ MORE&gt;&gt;
                </Link>
              </Column>
            </Row>
            <Hr style={updateDivider} />
            <Row style={updateRow}>
              <Column style={updateImageColumn}>
                <Img
                  src={`https://cdn.templates.unlayer.com/assets/1625223883494-69645`}
                  width="150"
                  height="150"
                  alt="Solving environmental issue"
                  className="object-cover"
                />
              </Column>
              <Column style={updateTextColumn}>
                <Text style={updateTitle}>Solving environmental issue</Text>
                <Text style={updateDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                </Text>
                <Link href="https://example.com/update2" style={updateLink}>
                  READ MORE&gt;&gt;
                </Link>
              </Column>
            </Row>
          </Section>

          <Section style={socialMediaSection}>
            <Text style={socialMediaText}>Follow us on social media</Text>
            <div className="mx-auto">
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/facebook.png" alt="LinkedIn" className="w-8 h-8" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/pinterest.png" alt="Twitter" className="w-8 h-8 ml-2" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/email.png" alt="Skype" className="w-8 h-8 ml-2" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/youtube.png" alt="Instagram" className="w-8 h-8 ml-2" /></a>
                </div>
          </Section>

          <Section style={footerSection}>
            <Text style={footerText}>
              If you have any questions, feel free message us at support@mail.us.com
            </Text>
            <Text style={footerText}>
              All right reserved. Update email preferences or unsubscribe.
            </Text>
            <Text style={footerText}>
              123-456-7890
            </Text>
            <Text style={footerText}>
              San Francisco, CA, United States
            </Text>
            <Text style={footerText}>
              <Link href="#" style={footerLink}>Terms of use</Link> | <Link href="#" style={footerLink}>Privacy Policy</Link>
            </Text>
            <Text style={footerCopyright}>
              © 20XX Company. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
      </Tailwind>
    </Html>
  );
  
  export default EventsHandling;
  
  const main = {
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    backgroundColor: "#ecf1f1",
  };
  
  const container = {
    margin: "0 auto",
    padding: "2px 0 0px",
    width: "600px",
    backgroundColor:"#ffffff"
  };
  
  const topSection = {
    background: "linear-gradient(180deg, #22A7BF 0%, #90C444 100%)",
    padding: "40px 20px",
    textAlign: "center" as const,
    color: "#ffffff",
  };
  
  const heading = {
    fontSize: "35px",
    lineHeight: "1.3",
    fontWeight: "700",
    marginBottom: "15px",
  };
  
  const subheading = {
    fontSize: "18px",
    lineHeight: "1.5",
    marginBottom: "20px",
  };
  
  const date = {
    fontSize: "22px",
    fontWeight: "500",
  };
  
  const time = {
    fontSize: "22px",
    fontWeight: "500",
    marginBottom: "15px",
  };
  
  const activitiesSection = {
    padding: "20px 20px",
    textAlign: "center" as const,
  };
  
  const activitiesHeading = {
    fontSize: "24px",
    fontWeight: "normal",
    marginBottom: "1px",
    color: "#333333",
  };
  
  const monthHeading = {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333333",
  };
  
  const eventColumn = {
    width: "33.33%",
    padding: "0 10px",
  };
  
  const eventDate = {
    fontSize: "14px",
    color: "#666666",
    // marginTop: "10px",
  };
  
  const eventTitle = {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#333333",
  };
  
  const reminderSection = {
    backgroundColor: "#22A7BF",
    padding: "40px 20px",
    textAlign: "start" as const,
    color: "#ffffff",
  };
  
  const reminderHeading = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  };
  
  const reminderText = {
    fontSize: "16px",
    lineHeight: "1.5",
    marginBottom: "20px",
  };
  
  const reminderButton = {
    backgroundColor: "#90C444",
    borderRadius: "5px",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textTransform: "uppercase",
    padding: "12px 24px",
    display: "inline-block",
  };
  
  const updatesHeading = {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#3498db",
    textAlign: "center" as const,
    marginTop: "40px",
  };
  const updatesSection = {
    padding: "20px",
  };
  
 
  const updateRow = {
    marginBottom: "20px",
  };
  
  const updateImageColumn = {
    width: "30%",
    paddingRight: "20px",
  };
  
  const updateTextColumn = {
    width: "70%",
  };
  
  const updateTitle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  };
  
  const updateDescription = {
    fontSize: "14px",
    color: "#666666",
    marginBottom: "10px",
  };
  
  const updateLink = {
    color: "#3498db",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "bold",
  };
  
  const updateDivider = {
    borderTop: "1px solid #e0e0e0",
    margin: "20px 0",
  };
  
  const socialMediaSection = {
    backgroundColor: "#3498db",
    padding: "20px",
    textAlign: "center" as const,
  };
  
  const socialMediaText = {
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px",
  };
  
  const footerSection = {
    backgroundColor: "#f4f4f4",
    padding: "20px",
    textAlign: "center" as const,
  };
  
  const footerText = {
    fontSize: "12px",
    color: "#666666",
    marginBottom: "5px",
  };
  
  const footerLink = {
    color: "#3498db",
    textDecoration: "none",
  };
  
  const footerCopyright = {
    fontSize: "12px",
    color: "#666666",
    marginTop: "20px",
  };