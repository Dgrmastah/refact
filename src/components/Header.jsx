import React from "react";
import logo from "../assets/cocretainc.jpg"; // Importa la imagen

const Header = () => {
    return (
        <header className="header">
            <img className='logo' src={logo} alt="Loco cocretaINC" />
        </header>
    )
}

export default Header;
