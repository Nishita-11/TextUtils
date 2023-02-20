import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
    <div className="container-fluid" >
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

        {/* <div className="form-check  mx-3">
          <input className="form-check-input" onClick={props.lightMode} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label className="form-check-label" htmlFor="flexRadioDefault1" style={{color: props.mode==='dark'?'white':'black'}}>
            Light mode
          </label>
        </div>

        <div className="form-check  mx-3">
          <input className="form-check-input" onClick={props.greenMode} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label className="form-check-label" htmlFor="flexRadioDefault1" style={{color: props.mode==='dark'?'white':'black'}}>
            Enable green mode
          </label>
        </div>

        <div className="form-check mx-3">
          <input className="form-check-input" onClick={props.blueMode} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label className="form-check-label" htmlFor="flexRadioDefault1" style={{color: props.mode==='dark'?'white':'black'}}>
          Enable blue mode
          </label>
        </div> */}

      <p>
        <a className="btn btn-primary mx-2" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
         Select color mode
        </a>
       
      </p>
      <div className="collapse my-2" id="collapseExample">
        <div className="card card-body">
        <div className="form-check  mx-3">
          <input className="form-check-input" onClick={props.lightMode} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label className="form-check-label" htmlFor="flexRadioDefault1" >
            Light mode
          </label>
        </div>

        <div className="form-check  mx-3">
          <input className="form-check-input" onClick={props.greenMode} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label className="form-check-label" htmlFor="flexRadioDefault1" >
            Enable green mode
          </label>
        </div>

        <div className="form-check mx-3">
          <input className="form-check-input" onClick={props.blueMode} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label className="form-check-label" htmlFor="flexRadioDefault1" >
          Enable blue mode
          </label>
        </div>
        </div>
      </div>

      

        
        
  

        {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable blue mode</label>
        </div> */}

      </div>
    </div>
  </nav>
  )
}

Navbar.prototype = {
  title: PropTypes.string,
}