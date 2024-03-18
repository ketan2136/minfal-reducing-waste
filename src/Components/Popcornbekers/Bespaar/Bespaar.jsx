import React from 'react'
import './Bespaar.css'
import besic from '../../Assets/Popcornbeker_desic.png'
import plus from '../../Assets/Popcornbeker_pluses.png'
import pro from '../../Assets/Popcornbeker_pros.png'

const Bespaar = () => {
    return (
        <>
            <section className='Bespaar'>
                <div className='container'>
                    <div className='besic_main'>
                        <div className="basic">
                            <h2 className="main_h2">
                                Basic
                            </h2>
                            <p className='main_p'>onbedrukt, alleen gravure aan 1 zijde</p>
                        </div>
                        <div className='imgs'><img src={besic} alt="" /></div>
                    </div>

                    <div className='besic_main plus_main'>
                        <div className='imgs'><img src={plus} alt="" /></div>
                        <div className="basic right-side ">
                            <h2 className="main_h2">
                                Plus
                            </h2>
                            <p className='main_p'>1-4 zijden full color bedrukt met artwork (zoals logo)</p>
                        </div>
                    </div>

                    <div className='besic_main pro_main'>
                        <div className="basic">
                            <h2 className="main_h2">
                                Pro
                            </h2>
                            <p className='main_p'>4 zijden bedrukt, full color  (ook foto’s mogelijk)</p>
                            <p className='main_p'>Maximale marketingmogelijkheden</p>
                            <p className='main_p'>Verschillende bedrukkingen/artworks per zijde mogelijk</p>
                        </div>
                        <div className='imgs'><img src={pro} alt="" /></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bespaar
