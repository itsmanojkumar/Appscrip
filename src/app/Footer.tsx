import React from 'react';
import './Footer.css';
import Image from 'next/image';

function Footer() {
  return (
    <>
    <div className='foot'>
    <div className='rightalign'>
    <div className='foot1'>
    <h1>Be the first to know</h1>
    <h3>Sign up for updates from mettā muse.</h3>
    <input type='email' placeholder='Enter your Email'></input>
    <button>Subscribe</button>
    </div>
    
    <div className='footright'>
        <h3>CONTACT US</h3>
        <h3>+44 221 133 5360</h3>
        <h3>customercare@mettamuse.com</h3>
        <h3>Currency</h3>
        <h3>USD</h3>
        <h4>Transactions will be completed in Euros and a currency reference is available on hover.</h4>
    </div>
    </div>
    <div>
      <div  className='bottomright'>
       
         <div>
            <h1>mettā muse</h1>
            <h3>About Us</h3>
            <h3>Stories</h3>
            <h3>Artisans</h3>
            <h3>Boutiques</h3>
            <h3>Contact Us</h3>
            <h3>EU Compliances Docs</h3>
        </div>
         <div>
            <h1>Quick Links</h1>
            <h3>Orders & Shipping</h3>
            <h3>Join/Login as a Seller</h3>
            <h3>Payment & Pricing</h3>
            <h3>Return & Refunds</h3>     
            <h3>FAQs</h3>
            <h3>Privacy Policy</h3>
            <h3>Terms & Conditions</h3>
        </div>
         <div>
            <h1>Follow Us</h1>
            {/* <Image src="images/Frame28.png" alt='follow' className='Frame' width={20} height={20}/> */}
            <h3>mettā muse</h3>
            <h3>mettā muse Accepts</h3>
            <Image src="/images/Pay.png" alt='accept' width={350} height={50} />
  
        
         </div>
        
    </div>
    </div>
    </div>
    </>
  )

  
}

export default Footer