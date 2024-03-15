import React from 'react'
import './Minfal.css'
import Minfal_pop from '../../Assets/Minfal_pop.png'
const Minfal = () => {
    return (
        <div>
            <section className='Minfal'>
                <div className="container">
                    <h2 className="main_h2">Ga voor duurzaam met Minfal</h2>
                    <p className="main_p">Onze herbruikbare popcornbekers</p>
                    <p className="main_p">Vervang wegwerpverpakkingen voor de herbruikbare popcornbekers van Minfal. Hiermee boost u uw duurzaamheidsimago en kunt u besparen op verpakkingskosten. Een uniek en iconisch product, maar dan duurzaam.</p>
                    <div className="Voordelen">
                        <div className="row">
                            <div className="col-6">
                                <div className='Voordelen_after'>
                                    <img src={Minfal_pop} alt="" />
                                </div>
                            </div>
                            <div className="col-6">
                                <h3 className='main_h3'>Voordelen</h3>
                                <ul className='voordelen_manu'>
                                    <li>Herbruikbaar en 100% recyclebaar</li>
                                    <li>Geproduceerd in Nederland</li>
                                    <li>Vaatwasserbestendig</li>
                                    <li>Alle kleuren mogelijk</li>
                                    <li>Uw formaat, logo en huisstijl</li>
                                    <li>Iconisch product</li>
                                    <li>Verkoop als Merchandise of intern wassen</li>
                                </ul>
                               
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Minfal
