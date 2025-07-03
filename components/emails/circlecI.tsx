import {
    Body,
    Column,
    Container,
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
  
  export const CircleCIEmail = () => (
    <Html>
      <Head />
      <Preview>CircleCI Features: Advanced Caching and Powerful Machines</Preview>
     <Tailwind>
     <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Img
              src={`https://cdn.icon-icons.com/icons2/2699/PNG/512/circleci_logo_icon_168423.png`}
              width="200"
              height="50"
              alt="CircleCI Logo"
              style={logo}
              className="object-contain"
            />
          </Section>
          <Hr style={divider} />

          <Section style={contentSection}>
            <Heading style={heading}>Advanced caching</Heading>
            <Text style={paragraph}>
              Save time on fetching dependencies and building artifacts.
            </Text>
            <ul style={{
                   margin: "0 0 15px",
                   padding: "0",
                   listStylePosition: "inside",
                 }}>
              <li style={listItem}>
                <Link href="#" style={link}>
                  Caching dependencies
                </Link>{" "}
                - cache and restore dependencies using custom keys rather than
                reinstalling them each time you run a job.
              </li>
              <li style={listItem}>
                <Link href="#" style={link}>
                  Workspaces
                </Link>{" "}
                - persisting artifacts to a workspace allows downstream jobs to
                access them as a workflow progresses.
              </li>
              <li style={listItem}>
                <Link href="#" style={link}>
                  Docker layer caching
                </Link>{" "}
                - cache the individual layers of Docker images that you build in a
                CircleCI job. Unchanged layers will be restored next time you
                build a Docker image. This feature requires a paid plan.
              </li>
            </ul>
          </Section>
  
          <Hr style={divider} />
  
          <Section style={contentSection}>
            <Heading style={heading}>More machines and more powerful machines.</Heading>
            <Text style={paragraph}>
              Use multiple machines concurrently and increase compute power to
              speed up your pipelines.
            </Text>
            <ul style={{
                 margin: "0 0 15px",
                 padding: "0",
                 listStylePosition: "inside",
               }}>
              <li style={listItem}>
                <Link href="#" style={link}>
                  Concurrency
                </Link>{" "}
                - split up your builds into multiple independent jobs and use
                workflows to run them simultaneously.
              </li>
              <li style={listItem}>
                <Link href="#" style={link}>
                  Parallelism
                </Link>{" "}
                - run tests in parallel by splitting your test suite across
                multiple machines.
              </li>
              <li style={listItem}>
                <Link href="#" style={link}>
                  Resource classes
                </Link>{" "}
                - customize the CPU and RAM for the machine running a particular
                job. Note that resource classes larger than medium require a paid
                plan.
              </li>
            </ul>
          </Section>
          <Hr style={divider} />

          <Section style={footerSection}>
              <Row>
                <Column>
                  <Heading as="h3" style={footerHeading}>CONTACT US</Heading>
                  <Text style={footerText}>
                    Company Name 1234 Street<br />
                    Stage Post 1234<br />
                    Mail: info@youemail.com<br />
                    Call Us: +1 236 547895
                  </Text>
                </Column>
                <Column align="right" >
                  <Heading as="h3" style={footerHeading}>ABOUT US</Heading>
                  <Text style={footerText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas error dolores quis inventore, praesentium sint!
                  </Text>
                </Column>
              </Row>
            </Section>
        </Container>
      </Body>
     </Tailwind>
    </Html>
  );
  
  export default CircleCIEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    
  };
  
  const container = {
    margin: "0 auto",
    padding: "12px",
    width: "580px",
    border: "1px solid #e2e8f0"  

  };
  
  const logoContainer = {
    marginBottom: "4px",
  };
  
  const logo = {
    margin: "0 auto",
  };
  
  const contentSection = {
    margin: "0 0 24px",
  };
  
  const heading = {
    fontSize: "24px",
    letterSpacing: "-0.5px",
    lineHeight: "1.3",
    fontWeight: "400",
    color: "#484848",
    padding: "17px 0 0",
  };
  
  const paragraph = {
    margin: "0 0 15px",
    fontSize: "17px",
    lineHeight: "1.4",
    color: "#3c4149",
  };
  
  const footerSection = {
    padding: "10px",
    color: "#000",
  };
  
  const footerHeading = {
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "1.3",
    color: "#000",
  };
  
  const footerText = {
    fontSize: "14px",
    lineHeight: "1.5",
    color: "#000",
  };
  const listItem = {
    margin: "10px 0",
    fontSize: "17px",
    lineHeight: "1.4",
    color: "#3c4149",
  };
  
  const link = {
    color: "#067df7",
    textDecoration: "none",
  };
  
  const divider = {
    borderColor: "#dfe1e4",
    margin: "20px 0",
  };