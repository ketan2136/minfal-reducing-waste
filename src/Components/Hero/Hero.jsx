import React from 'react';
import './Hero.css';
import header_img from '../Assets/Header_img.png'
const Hero = () => {
    return (
        <section className='Hero-main'>
            {/* <img src={hero_bg} alt="" /> */}
            <div className='container'>
                <div className="Hero">
                    <h1 className='main_h1'>Wij ontwikkelen herbruikbare verpakkingen en circulaire systemen voor bioscopen, theaters en meer...</h1>
                    <div className="main_btn ">
                        <a href="#" className='btn'>Meer</a>
                    </div>
                    <div className='hero_before'>
                        <img src={header_img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
