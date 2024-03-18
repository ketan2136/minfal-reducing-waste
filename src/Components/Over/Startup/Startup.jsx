import React from 'react'
import './Startup.css'
import startup from '../../Assets/startup.png'

const Startup = () => {
    return (
        <div>
            <section className='startup'>
                <div className="container">
                    <div className="h2_main">
                        <h2 className='main_h2'>Wij zijn een Lean-Startup.</h2>
                    </div>
                    <p className='main_p'>Dat wil zeggen dat we onze producten mede ontwikkeld hebben met feedback vanuit de markt zelf, waardoor ons product perfect in de markt past.</p>
                    <div className="houden">
                        <div className="row">
                            <div className="col-6">
                                <div className="startup_manu">

                                    <h2 className="main_h2">We houden van uitdaging.</h2>

                                    <p className="main_p">Tijdens onze studie Technische Bedrijfskunde in Delft is het idee ontstaan om een verrassend product te verduurzamen. Het idee was eerst een herbruikbaar ijsbakje, maar na een een bezoekje aan de bioscoop kwam er een veel leuker idee naar voren: een herbruikbare popcornbeker.  </p>
                                    <p className="main_p">Bioscopen werken nog niet echt met herbruikbare verpakkingen en dat zagen wij als een mooie uitdaging!</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <img src={startup} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Startup
