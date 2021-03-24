import React from 'react';
import gramCloneLogo from "../Images/gramCloneLogo.png";

function Header() {
    return (
        <div className="header">
             <img className="header_image" 
             src={gramCloneLogo} alt="logo" />
        </div>
    )
}

export default Header
