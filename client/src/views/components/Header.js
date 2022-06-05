import React from 'react'
import Logo from "../../assets/images/logo.png"

export default function Header() {
  const stopMarquee = () => {
    console.log("Hello");
  }
  const setPortal = () => {
    console.log("hi");
  }
  const startMarquee = () => {
    console.log("ho");
  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark py-0">
        <a className="navbar-brand">
          <img src={Logo} alt="" className="websiteLogo" />
        </a>
        <marquee
          style={{ width: '65%', color: '#2ECDF3', marginLeft: "20%" }}
          onMouseOver={() => stopMarquee}
          onMouseOut={startMarquee}
          className="show-desktop-only1">
          <span>#1st: Nikhil </span>
          <span>#2nd: Munish </span>
          <span>#3rd: Sumit </span>
          <span>#4th: Bishwa </span>
        </marquee>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="/login" className="nav-link">Sign In</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
