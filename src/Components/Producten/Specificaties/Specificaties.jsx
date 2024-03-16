import React from 'react'
import './Specificaties.css'
import sp from '../../Assets/sp.png'
import sp2 from '../../Assets/sp2.png'
import ref_icon from '../../Assets/ref_icon.png'
import koffi from '../../Assets/koffi.png'

const Specificaties = () => {
    return (
        <>
            <section className='specificaties'>
                <div className="container">
                    <div className='sp_img'>
                        <div className='row'>
                            <div className="col-6">
                                <div className='sps_img'>
                                    <img src={sp} alt="" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="h2_main">
                                    <h2 className="main_h2">  Nacho trays en chipsbakjes (maatwerk)  </h2>
                                </div>
                                <p className="main_p">Wij bieden ook unieke herbruikbare nacho-bakjes aan. Volledig herbruikbaar en passend in een circulair verpakkingssysteem.</p>
                                <p className="main_p">Informeer naar de mogelijkheden!</p>
                                <div className='product_iconlons'>
                                    <h3 className="main_h3">Eigenschappen/specificaties</h3>
                                    <span></span>
                                    <p className="main_p"><img src={ref_icon} alt="" />Gemaakt in Nederland</p>
                                    <p className="main_p"><img src={ref_icon} alt="" />Herbruikbaar en 100% Recyclebaar</p>
                                    <p className="main_p"><img src={ref_icon} alt="" />Vaatwasserbestendig</p>
                                    <p className="main_p"><img src={ref_icon} alt="" />Alle kleuren mogelijk</p>
                                    <p className="main_p"><img src={ref_icon} alt="" />Uw formaat, logo en huisstijl</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sp_img sp2_img'>
                        <div className='row'>
                            <div className="col-6">
                                <div className="h2_main">
                                    <h2 className="main_h2">Frisdrank- en koffiebekers</h2>
                                </div>
                                <p className="main_p">Onze herbruikbare frisdrank- en koffiebekers zijn er in de volgende maten:</p>
                               <div className='clender'>
                                    <img src={koffi} alt="" />
                                    <img src={koffi} alt="" />
                               </div>
                                <div className='product_iconlons'>
                                    <h3 className="main_h3">Eigenschappen/specificaties</h3>
                                    <span></span>
                                    <p className="main_p"><img src={ref_icon} alt="" />Gemaakt in Nederland</p>
                                    <p className="main_p"><img src={ref_icon} alt="" />Herbruikbaar en 100% Recyclebaar</p>
                                    <p className="main_p"><img src={ref_icon} alt="" />Vaatwasserbestendig</p>
                                    <p className="main_p"><img src={ref_icon} alt="" />Alle kleuren mogelijk</p>
                                    <p className="main_p"><img src={ref_icon} alt="" />Uw formaat, logo en huisstijl</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className='sps_img'>
                                    <img src={sp2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Specificaties
