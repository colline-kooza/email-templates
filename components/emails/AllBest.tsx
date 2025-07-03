import { Tailwind } from '@react-email/tailwind';

export default function AllBest() {
  return (
    <Tailwind>
         <div style={{ maxWidth: '650px', margin: '0 auto', fontFamily: 'Arial, sans-serif', backgroundColor: '#1a1a1a', color: '#ffffff' }}>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <img 
          src="https://cdn.templates.unlayer.com/assets/1727778810404-header.png" 
          alt="Hands holding flower with pink ribbon" 
          style={{ maxWidth: '80%', height: '100%' }}
        />
        <h1 style={{ margin: '20px 0', fontSize: '28px', textTransform: 'uppercase' }}>
          <span style={{ display: 'block' }}>SUPPORT</span>
          <span style={{ color: '#e75480', display: 'block' }}>BREAST CANCER</span>
          <span style={{ display: 'block' }}>AWARENESS</span>
        </h1>
        <p style={{ fontSize: '16px', color: '#cccccc', marginBottom: '20px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor ut labore et dolore magna aliqua. Quis ipsum suspen disse ultrices 
          gravida. Risus commodo viverra dolor sit amet.
        </p>
        <a href="#" style={{ 
          backgroundColor: '#e75480', 
          color: '#ffffff', 
          padding: '10px 20px', 
          textDecoration: 'none', 
          borderRadius: '5px', 
          display: 'inline-block',
          marginBottom: '20px'
        }}>
          Read More
        </a>
      </div>
      <div style={{ display: 'flex', padding: '0 20px 20px' }}>
        <div  style={{ width: '48%'  , marginRight:12}}>
          <img 
            src="https://cdn.templates.unlayer.com/assets/1727779345934-1.png" 
            alt="Support image 1" 
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <p style={{ fontSize: '14px', color: '#cccccc', marginTop: '10px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor ut labore et dolore magna aliqua.
          </p>
          <a href="#" style={{ 
            backgroundColor: '#e75480', 
            color: '#ffffff', 
            padding: '5px 14px', 
            textDecoration: 'none', 
            borderRadius: '3px', 
            fontSize: '12px',
            display: 'inline-block'
          }}>
            Read More
          </a>
        </div>
        <div style={{ width: '48%' }}>
          <img 
            src="https://cdn.templates.unlayer.com/assets/1727779406306-2.png" 
            alt="Support image 2" 
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <p style={{ fontSize: '14px', color: '#cccccc', marginTop: '10px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor ut labore et dolore magna aliqua.
          </p>
          <a href="#" style={{ 
            backgroundColor: '#e75480', 
            color: '#ffffff', 
            padding: '5px 14px', 
            textDecoration: 'none', 
            borderRadius: '3px', 
            fontSize: '12px',
            display: 'inline-block'
          }}>
            Read More
          </a>
        </div>
      </div>
           <div className="mx-auto mt-[2.4rem] !mb-0 ">
             <div>
              <p style={{fontStyle:"oblique"}} className="!mt-4 !mb-0 text-3xl text-center text-white ">Together We Can Win
              </p>
              <p style={{fontStyle:"oblique"}} className="!mt-2 !mb-0 text-[14px] text-center text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t <br/>
              empor ut labore et dolore magna aliqua.</p>
             </div>

             <div className="w-full h-[90%] !mt-0 !mb-0">
              <img src="https://cdn.templates.unlayer.com/assets/1684756764600-Layer%209.png" alt="" className="w-full h-full object-contain !mb-0"/>
             </div>
              </div>
        {/* Footer */}
        <div className="w-full bg-[#f8f8f8] text-white text-center pt-6">
                <div className="mx-auto">
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/rounded/facebook.png" alt="LinkedIn" className="w-8 h-8" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/rounded/twitter.png" alt="Twitter" className="w-8 h-8 ml-2" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/rounded/linkedin.png" alt="Skype" className="w-8 h-8 ml-2" /></a>
                  <a href="#"><img src="https://cdn.tools.unlayer.com/social/icons/rounded/instagram.png" alt="Instagram" className="w-8 h-8 ml-2" /></a>
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
    </div>
    </Tailwind>
   
  );
}