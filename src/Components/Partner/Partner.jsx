import React from 'react'
import './Partner.css'
const Partner = () => {
    return (
        <section className='partner'>
            <div className="container">
                <div className="partner_manu">
                    <div className="row">
                        <div className="col-4">
                            <h2 className="main_h2">Ga het avontuur aan met Minfal als betrouwbare partner.</h2>
                            <div className="main_btn">
                                <a href="">Over ons</a>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="partner_boxs">
                                <div className="row    row-gap-4 ">
                                    <div className="col-6">
                                        <div className="prt_box">
                                            <h5 className="main_h5">Totaalpakket</h5>
                                            <p className="main_p">Volledig assortiment en service, Minfal neemt uw werk uit handen</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="prt_box">
                                            <h5 className="main_h5">Gespecialiseerd</h5>
                                            <p className="main_p">in oplossingen voor de amusementssector</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="prt_box">
                                            <h5 className="main_h5">Snelle service</h5>
                                            <p className="main_p">Korte doorlooptijden en direct beginnen</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="prt_box">
                                            <h5 className="main_h5">Advies</h5>
                                            <p className="main_p">op basis van uw situatie en voorkeuren</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="prt_box">
                                            <h5 className="main_h5">Maatwerk</h5>
                                            <p className="main_p">Uw logo, kleuren, formaten; alles is mogelijk</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partner
