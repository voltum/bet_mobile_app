import React from 'react'
import logo from '../img/logo.png';
import header_bg from '../img/header_bg_03.png';
import header_bg2 from '../img/header_bg_02.png';


function Header() {
    return (
        <div className="header">
            <img src={header_bg} className="header_bg" />
            <img src={header_bg2} className="header_bg_right" />
            <div className="logo"><img src={logo} className="logo_img" /></div>
        </div>
    )
}

export default Header
