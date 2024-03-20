import React from 'react'
import './Assortiment.css'
import Ons1 from '../Assets/Ons1.png'
import Ons2 from '../Assets/Ons2.png'
import Ons3 from '../Assets/Ons3.png'
import Ons4 from '../Assets/Ons4.png'
import Ons5 from '../Assets/Ons5.png'

const Assortiment = () => {
    return (
        <section className='Assortiment'>
            <div className="container">
                <div className="boxs">
                    <div className="row">
                        <div className="col-4">
                            <div className="h2_main">
                                <h2 className="main_h2">10 mln</h2>
                            </div>
                            <p className="main_p">Wegwerp- popcornbekers vervangen is één van onze doelen</p>
                        </div>
                        <div className="col-4">
                            <div className="h2_main">
                                <h2 className="main_h2">1 vs 100</h2>
                            </div>
                            <p className="main_p">Elke popcornbeker kan meer dan honderd wegwerpverpakkingen besparen</p>
                        </div>
                        <div className="col-4">
                            <div className="h2_main">
                                <h2 className="main_h2">100.000'EN</h2>
                            </div>
                            <p className="main_p">bezoekers eindigen hun bezoek door ons niet bij de prullenbak</p>
                        </div>
                    </div>
                </div>
                <div className="h2_main">
                    <h2 className='main_h2'>Ons volledige herbruikbare assortiment</h2>
                </div>
                <div className="boxs2">
                    <div className="row">
                        <div className="col-2">
                            <div className="box box_hover">
                                <img src={Ons1} alt="" />
                                <h5 className="main_h5">Popcornbekers</h5>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="box box_hover">
                                <img src={Ons2} alt="" />
                                <h5 className="main_h5">Nacho Trays</h5>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="box box_hover">
                                <img src={Ons3} alt="" />
                                <h5 className="main_h5">Chipsbakjes</h5>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="box box_hover">
                                <img src={Ons4} alt="" />
                                <h5 className="main_h5">Frisdrankbekers</h5>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="box box_hover">
                                <img src={Ons5} alt="" />
                                <h5 className="main_h5">Koffiebekers</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main_btn">
                    <a href="#">Bekijk het assortiment</a>
                </div>
            </div>
        </section>
    )
}

export default Assortiment
