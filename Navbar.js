import React from 'react';
import logo from '../assets/logo_nonbg.png';
import { Link } from 'react-router-dom';
import cart from '../assets/cart.svg'

function Navbar(props) {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">

            <a className='nav-link' href='/home' style={{color:"#1D4355",fontWeight:"bolder",fontSize:"20px"}}>DigitalDunes</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{paddingLeft:"10px"}}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/all">All Products</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item dropdown">
                </li>
                <li className="nav-item">
                <a className="nav-link" href='/contact-us'>Contact Us</a>
                </li>
                {props.profile === "selling" ? <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/home">Switch to Buying?</a>
                </li> : <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/selling">Switch to Selling?</a>
                </li>}
            </ul>
            
            <form className="d-flex" role="search">
                <Link to="/cart">
                <img src={cart} href="/"/>
                </Link>
            </form>
            </div>
        </div>
        </nav>
    </>
  );
}

export default Navbar