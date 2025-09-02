import React from "react";
import logo from './assets/logo.png';

function Footer(){
    return(
        <footer className="footer">
            <img src={logo} alt="Little Lemon Logo" />
            <div className="footer-content">
                <div className="doormat-nav">
                    <h3>Doormat Navigation</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservation">Reservation</a></li>
                        <li><a href="/order-online">Order Online</a></li>
                        <li><a href="/login">login</a></li>
                    </ul>
                </div>
                <div className="contact">
                    <h3>Contact</h3>
                    <p>Adress</p>
                    <p>phone Number</p>
                    <p>Email</p>
                </div>
                <div className="social-media">
                    <ul>
                        <li><a href="/facebook">Facebook</a></li>
                        <li><a href="/instagram">Instagram</a></li>
                        <li><a href="/twitter">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;