import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">News Portal</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"> <Link className="nav-link " aria-current="page" to="/business">Business</Link> </li>
              <li className="nav-item"> <Link className="nav-link " aria-current="page" to="/entertainment">Entertainment</Link> </li>
              <li className="nav-item"> <Link className="nav-link " aria-current="page" to="/health">Health</Link> </li>
              <li className="nav-item"> <Link className="nav-link " aria-current="page" to="/science">Science</Link> </li>
              <li className="nav-item"> <Link className="nav-link " aria-current="page" to="/sports">Sports</Link> </li>             
              <li className="nav-item"> <Link className="nav-link " aria-current="page" to="/technology">Technology</Link> </li>gy
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar

// f96b1dfa5ce643aa818adcd0613dd1d3

// 07e4b30495524df3a3eedc03c07386e3
