import React from 'react'

export default function Footer() {
  return (
    <footer className="footer-section">
      
      <div className="row footer-content">
        <hr style={{ color: "#2ecdf3" }} />
        <div className="col-lg-7 px-0 footer-bottom-left justify-content-start">
          <p>Copyright © 2021<br />All Rights Reserved By
            <a style={{ color: 'rgb(46, 205, 243)' }}> Decide Precise Technologies</a>
          </p>
        </div>
        <div className="col-lg-5 px-0 footer-bottom-right">
          <ul className='justify-content-end px-0'>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/terms-of-use">Term Of Use</a></li>
            <li><a href="/blog">How to Play</a></li>
            <li><a href="/feed">News</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
