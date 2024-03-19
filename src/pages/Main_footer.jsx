import React from 'react'
import Footer from '../Components/Footer/Footers/Footer'
import Popcornbeker_footer from '../Components/Footer/Popcornbeker_footer/Popcornbeker_footer'
import { useLocation } from 'react-router-dom';
import Producten_footer from '../Components/Footer/Producten_footer/Producten_footer';

const Main_footer = () => {

    const location = useLocation();

    const renderFooter = () => {
        if (location.pathname === '/') {
            return <Footer />;
        } else if (location.pathname === '/about') {
            return <Footer />;
        } else if (location.pathname === '/popcornbekers') {
            return <Popcornbeker_footer />;
        } else if (location.pathname === '/refill') {
            return <div style={{ display: 'none' }} />
        } else if (location.pathname === '/circulair') {
            return <div style={{ display: 'none' }} />
        } else if (location.pathname === '/producten') {
            return <Producten_footer />
        }

    };

    return (
        <div>
            {renderFooter()}
        </div>
    )
}

export default Main_footer


