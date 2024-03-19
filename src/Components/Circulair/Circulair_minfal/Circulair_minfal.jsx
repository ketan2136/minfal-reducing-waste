import React from 'react'
import './Circulair_minfal.css'
import ref_icon from '../../Assets/ref_icon.png'
import circulair_mifal from '../../Assets/circulair_mifal.png'
import circulair_maatwerk from '../../Assets/circulair_maatwerk.png'

const Circulair_minfal = () => {
    return (
        <>
            <section className='circulairs'>
                <div className="container">
                    <div className="h2_main">
                        <h2 className="main_h2">Ga voor Circulair met Minfal.</h2>
                    </div>
                    <p className="main_p">Bespaar op verpakkingskosten door wegwerpverpakkingen te vervangen voor herbruikbare verpakkingen.</p>
                    <p className="main_p">Minfal Circulair is een innovatief concept waarbij herbruikbare verpakkingen na gebruik intern worden gewassen zodat deze vervolgens tientallen- tot honderden keren kunnen worden hergebruikt. Het systeem wordt bijvoorbeeld ook al toegepast bij alle 1500 McDonalds restaurants in Frankrijk: lever je verpakking in na gebruik, waarna het intern gewassen wordt om deze vervolgens weer aan te bieden. </p>
                    <div className="popcorn">
                        <div className="row">
                            <div className="col-6">
                                <p className="main_p"><img src={ref_icon} alt="" />In combinatie met herbruikbare popcornbekers en andere herbruikbare producten van Minfal</p>
                                <p className="main_p"><img src={ref_icon} alt="" />Handige verzamelkarren en inzamelstations</p>
                                <p className="main_p"><img src={ref_icon} alt="" />Ieder product krijgt uniek ontwikkeld wasprogramma</p>
                                <p className="main_p"><img src={ref_icon} alt="" />Korf-capaciteit wordt gemaximaliseerd in ontwerp</p>
                                <p className="main_p"><img src={ref_icon} alt="" />Tot wel 1500 popcornbekers wassen per uur</p>
                            </div>
                            <div className="col-6">
                                <img src={circulair_mifal} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="box_ref ref2">
                        <div className="row row-gap-3">
                            <div className="col-6">
                                <div className='station_img'>
                                    <img src={circulair_maatwerk} alt="" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className='station2_manu'>
                                    <div className="h2_main">
                                        <h2 className="main_h2">Inzamelstations</h2>
                                    </div>
                                    <span></span>
                                    <p className="main_p">Minfal levert zelf ontwikkelde inzamelstations bij Minfal Circulair. Bezoekers kunnen de herbruikbare popcornbekers hier inleveren na gebruik. Deze inzamelstations worden vervolgens geleegd zodat de verpakking gereinigd kunnen worden.</p>
                                    <h3 className="main_h3">Maatwerk</h3>
                                    <span></span>
                                    <p className="main_p">Wij leveren de inzamelstations op basis van de door u geconfigureerde verpakkingen, zodat deze perfect passen. Minfal kan de inzamelstations ook vergroten of verkleinen, op basis van uw wensen.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Circulair_minfal
