import React from 'react'
import { Link } from 'react-router-dom' // Link is used to navigate without reloading the page

export default function Navbar() {
  return (
    // 📌 Bootstrap navbar: dark themed and fixed to top
    <nav className="navbar navbar-expand-lg fixed-top bg-dark navbar-dark">
      <div className="container-fluid">

        {/* 🏠 Brand link to homepage */}
        <Link className="navbar-brand" to="/">News Portal</Link>

        {/* 📱 Button for collapsing navbar on small screens */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 🧭 Navbar menu links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* 🔗 Link to different categories */}
            <li className="nav-item"> 
              <Link className="nav-link" aria-current="page" to="/business">Business</Link> 
            </li>

            <li className="nav-item"> 
              <Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link> 
            </li>

            <li className="nav-item"> 
              <Link className="nav-link" aria-current="page" to="/health">Health</Link> 
            </li>

            <li className="nav-item"> 
              <Link className="nav-link" aria-current="page" to="/science">Science</Link> 
            </li>

            <li className="nav-item"> 
              <Link className="nav-link" aria-current="page" to="/sports">Sports</Link> 
            </li>

            <li className="nav-item"> 
              <Link className="nav-link" aria-current="page" to="/technology">Technology</Link> 
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
