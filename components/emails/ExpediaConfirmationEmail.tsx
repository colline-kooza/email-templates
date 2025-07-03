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
  

  
  export const ExpediaConfirmation = ({
    name = "John",
    itineraryNumber = "72672199481001",
    origin = "Rio de Janeiro (GIG)",
    destination = "Buenos Aires (EZE)",
    flightDetails = {
      airline: "British Airways 249",
      departure: "8:35am - Rio de Janeiro, Brazil (GIG-Galeão - Antonio Carlos Jobim Intl.)",
      arrival: "Buenos Aires, Argentina (EZE-Ministro Pistarini Intl.)",
      terminal: "Terminal 2",
      confirmation: "3JX4Y6 (British Airways)",
      class: "Economy / Coach (K)",
      date: "Thu, Nov 9, 8:35am - 11:40am",
      duration: "3h 5m flight duration",
    },
    price = {
      travelers: 2,
      flightCost: 548.00,
      taxesAndFees: 21.00,
      total: 569.00,
    },
  } = {}) => (
    <Html>
      <Head />
      <Preview>Expedia: Your flight is booked</Preview>
      <Tailwind>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Img
              src={`https://utfs.io/f/57a79a08-d233-49a3-a17d-97aeda89fd0d-9fp6x0.png`}
              width="120"
              height="50"
              alt="Expedia"
              style={logo}
              className="object-contain"
            />
          </Section>
          <Section style={content}>
            <Heading style={heading}>Thank you, {name}! Your flight is booked.</Heading>
            <Text style={itineraryText}>Itinerary # {itineraryNumber}</Text>
            <div className="w-[60%]">
                <Link style={button} href="https://expedia.com/trips">
                  View your trip
                </Link>
        
                <Link className="mt-3" style={secondaryButton} href="https://expedia.com/app">
                  Download to your phone
                </Link>
            </div>
            <Hr style={divider} />
            <Heading as="h2" style={{
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "24px",
                margin: "16px 0",
              }}>
            <img src="https://utfs.io/f/967cadd2-c0f4-47f1-a422-6a24677d880f-qwvx5r.png" alt="" 
            className="w-6 h-6 object-contain "
            />
              Traveler details
            </Heading>
            <Text style={text}>
              {name} (ADULT)<br />
              Foo Bar (ADULT)
            </Text>
            <Link href="https://expedia.com/details" style={link}>
              View all ticketing details
            </Link>
            <Hr style={divider} />
            <Heading as="h2" style={subheading}>
              {origin} to {destination}
            </Heading>
            <Text style={text}>
              {flightDetails.airline} {flightDetails.departure} to {flightDetails.arrival}
            </Text>
            <Text style={text}>
              • {flightDetails.terminal}<br />
              • Airline confirmation: {flightDetails.confirmation}<br />
              • {flightDetails.class}<br />
              • {flightDetails.date}<br />
              • {flightDetails.duration}
            </Text>
            <Link href="https://expedia.com/manage" style={secondaryButton}>
              Manage your itinerary
            </Link>
            <Hr style={divider} />
            <Heading as="h2" style={subheading}>
              Travel confidently with the Expedia app
            </Heading>
            <Text style={text}>
              Manage your plans and make trip updates on the fly - wherever the journey takes you. <Link href="https://expedia.com/app" style={link}>Explore the app</Link>
            </Text>
            <Hr style={divider} />
            <Heading as="h2" style={subheading}>
              Price summary
            </Heading>
            <table width="100%" style={{ borderCollapse: 'collapse' }}>
            <tbody>
                <tr>
                    <td style={{ padding: '8px 0', fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#333' }}>
                        One way flight
                    </td>
                    <td style={{ padding: '8px 0', textAlign: 'right', fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#333' }}>
                        
                    </td>
                </tr>
                <tr>
                    <td style={{ padding: '8px 0', fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#333' }}>
                        {price.travelers} traveler
                    </td>
                    <td style={{ padding: '8px 0', textAlign: 'right', fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#333' }}>
                        ${price.flightCost.toFixed(2)}
                    </td>
                </tr>
                <tr>
                    <td style={{ padding: '8px 0', fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#333' }}>
                        Taxes & fees
                    </td>
                    <td style={{ padding: '8px 0', textAlign: 'right', fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#333' }}>
                        ${price.taxesAndFees.toFixed(2)}
                    </td>
                </tr>
                <tr>
                    <td style={{ borderTop: '1px solid #ccc', paddingTop: '10px' }}></td>
                </tr>
                <tr>
                    <td style={{ padding: '8px 0', fontFamily: 'Arial, sans-serif', fontSize: '16px', fontWeight: 'bold', color: '#333' }}>
                        Total
                    </td>
                    <td style={{ padding: '8px 0', textAlign: 'right', fontFamily: 'Arial, sans-serif', fontSize: '16px', fontWeight: 'bold', color: '#333' }}>
                        ${price.total.toFixed(2)}
                    </td>
                </tr>
            </tbody>
        </table>

          </Section>
          <div className="w-full bg-[#f8f8f8] text-white text-center pt-6">
                <div className="mx-auto">
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/facebook.png" alt="LinkedIn" className="w-8 h-8" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/pinterest.png" alt="Twitter" className="w-8 h-8 ml-2" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/email.png" alt="Skype" className="w-8 h-8 ml-2" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/circle-black/youtube.png" alt="Instagram" className="w-8 h-8 ml-2" /></a>
                </div>
  
                <div className="mb-4">
                  <p className="text-[11px] text-gray-500 mb-1 mx-10">
                  This message was sent to hello@app.com
                 If you would like to update your email address, please click here.
                 If you no longer wish to receive e-mails from App, click to UNSUBSCRIBE.
                  </p>
                  <p className="text-[11px] text-gray-500 mb-1 mx-10">If you receive a suspicious email, please report it by forwarding the email
                  to spoof@app.com.Visit Security to find out more.</p>
                </div>
                <div className="w-full bg-[#f8f8f8] py-2">
                  <p className="text-[11px] text-gray-500 font-normal text-center">
                    © 20XX Company. All Rights Reserved.
                  </p>
                </div>
              </div>
        </Container>
      </Body>
      </Tailwind>
    </Html>
  );
  
  export default ExpediaConfirmation;
  
  const main = {
    backgroundColor: "#f8f5f4",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "10px ",
    width: "580px",
    backgroundColor: "#ffffff ",

  };
  
  const logoContainer = {
    marginBottom: "24px",
  };
  
  const logo = {
    margin: "0 auto",
  };
  
  const content = {
    backgroundColor: "#ffffff",
    border: "1px solid #e6e6e6",
    borderRadius: "4px",
    padding: "24px",
  };
  
  const heading = {
    fontSize: "24px",
    letterSpacing: "-0.5px",
    lineHeight: "1.3",
    fontWeight: "400",
    color: "#484848",
    padding: "17px 0 0",
  };
  
  const itineraryText = {
    margin: "0 0 16px",
    color: "#484848",
  };
  
  const button = {
    backgroundColor: "#1976d2",
    borderRadius: "30px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "12px",
  };
  
  const secondaryButton = {
    backgroundColor: "#ffffff",
    borderRadius: "30px",
    border: "1px solid #1976d2",
    color: "#1976d2",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "12px",
  };
  
  const divider = {
    margin: "20px 0",
    borderTop: "1px solid #e6e6e6",
  };
  
  const subheading = {
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "24px",
    margin: "16px 0",
  };
  
  const text = {
    color: "#484848",
    fontSize: "14px",
    lineHeight: "24px",
  };
  
  const link = {
    color: "#1976d2",
    textDecoration: "underline",
  };
  
  const totalText = {
    fontSize: "20px",
    fontWeight: "bold",
  };