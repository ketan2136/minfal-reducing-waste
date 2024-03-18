import React from 'react'
import './Stations.css';
import ref_icon from '../../Assets/ref_icon.png'
import station1 from '../../Assets/station1.png'
import station2 from '../../Assets/station2.png'

const Stations = () => {
    return (
        <>
            <section className='stations'>
                <div className="container">
                    <div className="h2_main">
                        <h2 className="main_h2">Minfal Refill Stations</h2>
                    </div>
                    <p className="main_p">Verras uw bezoekers met een popcorn- en/of dranken Refill Station. Ideaal voor in Bioscopen, pretparken en stadions. Minfal levert Refill Stations op maat en specifiek naar uw wensen.</p>
                    <div className="box_ref">
                        <div className="row">
                            <div className="col-6">
                                <h3 className="main_h3">Voordelen van een Refill Station</h3>
                                <span></span>
                                {/* <ul>
                                    <li><img src={ref_icon} alt="" /><p className="main_p">In combinatie met herbruikbare popcornbekers en andere herbruikbare producten van Minfal</p></li>
                                    <li><img src={ref_icon} alt="" /><p className="main_p">Verschillende formaten en samenstellingen mogelijk</p></li>
                                    <li><img src={ref_icon} alt="" /><p className="main_p">Het is een marketingmiddel (POS)</p></li>
                                    <li><img src={ref_icon} alt="" />  <p className="main_p">Klanten zullen de mogelijkheid om zelf te tappen waarderen, het is een trend</p></li>
                                    <li><img src={ref_icon} alt="" /><p className="main_p">Bewezen verkoopmodel (bij AMC)</p></li>
                                    <li><img src={ref_icon} alt="" /><p className="main_p">Schaalbaar naar een circulair systeem</p></li>
                                </ul> */}
                                {/* <div>
                                    <img src={ref_icon} alt="" />
                                    <p className="main_p">In combinatie met herbruikbare popcornbekers en andere herbruikbare producten van Minfal</p>
                                </div>
                                <div>
                                    <img src={ref_icon} alt="" />
                                    <p className="main_p">Verschillende formaten en samenstellingen mogelijk</p>
                                </div>
                                <div>
                                    <img src={ref_icon} alt="" />
                                    <p className="main_p">Het is een marketingmiddel (POS)</p>
                                </div>
                                <div>
                                    <img src={ref_icon} alt="" />
                                    <p className="main_p">Klanten zullen de mogelijkheid om zelf te tappen waarderen, het is een trend</p>
                                </div>
                                <div>
                                    <img src={ref_icon} alt="" />
                                    <p className="main_p">Bewezen verkoopmodel (bij AMC)</p>
                                </div>
                                <div>
                                    <img src={ref_icon} alt="" />
                                    <p className="main_p">Schaalbaar naar een circulair systeem</p>
                                </div> */}
                                <div className='handle_p'>
                                    <p className="main_p"><img src={ref_icon} alt="" />In combinatie met herbruikbare popcornbekers en andere herbruikbare producten van Minfal</p>
                                    <p className="main_p"><img src={ref_icon} alt="" />Verschillende formaten en samenstellingen mogelijk</p>
                                    <p className="main_p"><img src={ref_icon} alt="" />Het is een marketingmiddel (POS)</p>
                                    <p className="main_p"><img src={ref_icon} alt="" />Klanten zullen de mogelijkheid om zelf te tappen waarderen, het is een trend</p>
                                    <p className="main_p"><img src={ref_icon} alt="" />Bewezen verkoopmodel (bij AMC)</p>
                                    <p className="main_p"><img src={ref_icon} alt="" />Schaalbaar naar een circulair systeem</p>
                                </div>
                                <h3 className="main_h3">Warme popcorn</h3>
                                <span></span>
                                <p className="main_p">De Refill Stations houden de popcorn warm, zodat de bezoeker kan genieten van warme popcorn. De Refill stations houden de popcorn ook knapperig en droog. De stations moeten gevuld worden met Ready-to-serve popcorn.</p>
                            </div>
                            <div className="col-6">
                                <div className='station_img'>
                                    <img src={station1} alt="" />
                                    <h5 className="main_h5">Impressie schets</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box_ref ref2">
                        <div className="row row-gap-3">
                            <div className="col-6">
                                <div className='station_img'>
                                    <img src={station1} alt="" />
                                    <h5 className="main_h5">Impressie schets</h5>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className='station2_manu'>
                                    <h3 className="main_h3">Voordelen van een Refill Station</h3>
                                    <span></span>
                                    <p className="main_p">De Refill Stations zijn er in allerlei groottes en types. Op basis van de grootte van uw locatie en uw popcornverkopen adviseert Minfal een bepaald type machine. Er zijn ook verschillende soorten opvangbakken voor onder de dispensers.</p>
                                    <h3 className="main_h3">Warme popcorn</h3>
                                    <span></span>
                                    <p className="main_p">De Refill Stations houden de popcorn warm, zodat de bezoeker kan genieten van warme popcorn. De Refill stations houden de popcorn ook knapperig en droog. De stations moeten gevuld worden met Ready-to-serve popcorn.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="last_heading">
                        <div className='h2_main'>
                            <h2 className='main_h2'>Bent u geïnteresseerd?</h2>
                        </div>
                        <div className="main_btn">
                            <a href="#">Neem contact op</a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Stations
