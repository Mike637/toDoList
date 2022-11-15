import React from 'react';
import Weather from './Weather/Weather';
import Rate from './Rate/Rate';

const Header = () => 
{
    return (
    <header>
        <Weather/>
        <Rate/>
     </header> 
             
    )
}

export default Header;