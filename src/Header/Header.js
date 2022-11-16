import React from 'react';
import Weather from './Weather/Weather';
import Rate from './Rate/Rate';
import './Header.css';

const Header = () => 
{
    return (
    <header className="header">
        <div className = "header__container">
        <Weather/>
        <Rate/>
        </div> 
     </header>           
    )
}

export default Header;