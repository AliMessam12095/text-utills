import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  // console.log(props.mode);
  const btnBrown = () => {
    document.body.style.backgroundColor = 'brown';
    // document.querySelector('Navbar').style.backgroundColor = 'brown';
    document.body.style.color = 'white';
  }
  const btnGreen = () => {
    document.body.style.backgroundColor = 'green';
    document.body.style.color = 'white';
  }
  const btnRed = () => {
    document.body.style.backgroundColor = 'red';
    document.body.style.color = 'white';
  }
  const btnBlue = () => {
    document.body.style.backgroundColor = 'lightBlue';
    document.body.style.color = 'white';
  }
 
  return (
    <div className='my-0 py-0'>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode === true ? 'dark' : 'light'} bg-${props.mode === true ? 'dark' : 'light'}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>

            <div className="boxes d-flex me-5">
              <div className="box-brown m-1" onClick={btnBrown} style={{cursor: 'pointer', width: '15px', height: '15px', background: 'brown'}}></div>
              <div className="box-green m-1" onClick={btnGreen} style={{cursor: 'pointer', width: '15px', height: '15px', background: 'green'}}></div>
              <div className="box-red m-1" onClick={btnRed} style={{cursor: 'pointer', width: '15px', height: '15px', background: 'red'}}></div>
              <div className="box-lightBlue m-1" onClick={btnBlue} style={{cursor: 'pointer', width: '15px', height: '15px', background: 'lightblue'}}></div>
            </div>

             {/* Switch-Button  */}
              
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
              <label className={`form-check-label text-${props.switchBtnText === 'Enable Dark Mode' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault" >{props.switchBtnText}</label>
            </div>

            {/* Search_Bar */}

            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className={`btn btn-outline-${props.color}`} type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav> 
    </div>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}
// Navbar.defaultProps = {
//   title: 'Set title here...',
//   color: 'Set color here...'
// }

