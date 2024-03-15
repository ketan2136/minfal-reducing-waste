import React from 'react'
import './Onze.css'
import onze_right from '../Assets/onze_right.png'
import onze_left from '../Assets/onze_left.png'
import Line11 from '../Assets/Line11.png'

const Onze = () => {
    return (
        <section className='onze'>
            <div className="container">
                <div className="h2_main">
                    <h2 className="main_h2">Onze verkoopmodellen</h2>
                </div>
                <p className="main_p">Een Refill- of Circulair concept</p>
                <div className="onze_boxs">
                    <div className="row">
                        <div className="col-6">
                            <div className="onze_box">
                                <h3 className="main_h3">Minfal Refill Stations + Merchandise</h3>
                                <div className='line_span'><img src={Line11} alt="" /></div>
                                <div className="onze_num"><span>1</span><p className="main_p">Een bezoeker koopt een herbruikbare popcornbeker als merchandise en wordt eigenaar (neemt 'm mee naar huis)</p> </div>
                                <div className="onze_num"><span>2</span><p className="main_p">De bezoeker krijgt korting op zijn Refill bij een volgende bezoek</p> </div>
                                <p className="main_p">Het is een trend: korting op je refill. AMC Cinemas doet dit al jaren, net als Starbucks, Albert Heijn, Hema, Kiosk en nog véél meer andere bedrijven. Het zorgt voor klantenbinding, het is duurzaam en het sluit aan op de zelfservice trend. Dit concept werkt voornamelijk bij de vaste bezoekers die jaarlijks meer dan tien keer langskomen.</p>
                                <p className="main_p">Het kopen van een eigen popcornbeker is optioneel. Zo ligt de duurzame keuze bij de bezoeker. Het is een service dat de organisatie de duurzame optie aanbiedt.</p>
                                <div className="main_btn">
                                    <a href="">Meer over Minfal Refill</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="onze_right">
                                <img src={onze_right} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="onze_boxs onze_2">
                    <div className="row">
                        <div className="col-6">
                            <div className="onze_right">
                                <img src={onze_left} alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="onze_box">
                                <h3 className="main_h3">Minfal Circulair</h3>
                                <div className='line_span'><img src={Line11} alt="" /></div>
                                <div className="onze_num"><span>1</span><p className="main_p">Een bezoeker koopt popcorn zoals nu, maar ontvangt deze in herbruikbare popcornbeker</p> </div>
                                <div className="onze_num"><span>2</span><p className="main_p">De bezoeker levert de herbruikbare popcornbeker na gebruik in bij een inzamelstation op locatie.</p> </div>
                                <div className="onze_num"><span>3</span><p className="main_p">De popcornbekers worden intern gewassen en vervolgens hergebruikt</p> </div>
                                <h4 className='main_h4'>Ga voor cirulair.</h4>
                                <p className="main_p">Het is een trend: korting op je refill. AMC Cinemas doet dit al jaren, net als Starbucks, Albert Heijn, Hema, Kiosk en nog véél meer andere bedrijven. Het zorgt voor klantenbinding, het is duurzaam en het sluit aan op de zelfservice trend. Dit concept werkt voornamelijk bij de vaste bezoekers die jaarlijks meer dan tien keer langskomen.</p>
                                <p className="main_p">Het kopen van een eigen popcornbeker is optioneel. Zo ligt de duurzame keuze bij de bezoeker. Het is een service dat de organisatie de duurzame optie aanbiedt.</p>
                                <div className="main_btn">
                                    <a href="">Ontdek Minfal Circulair</a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Onze;
