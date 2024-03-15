import React from 'react'
import './Popcornbekers.css'
import popcorn_basic_assorti from '../../Assets/popcorn_basic_assorti.png'
import Popcornbekers_plus from '../../Assets/Popcornbekers_plus.png'
import Popcornbekers_pro from '../../Assets/Popcornbekers_pro.png'
const Popcornbekers = () => {
    return (
        <>
            <section className='popcornbekers'>
                <div className="container">
                    <div className="h2_main">
                        <h2 className="main_h2">Popcornbekers (maatwerk)</h2>
                    </div>
                    <p className="main_p">De definitieve vorm en het formaat zijn nader te bepalen. Doordat veel bedrijven eigen porties hanteren hebben we geen standaardmodellen maar is alles maatwerk.</p>
                    <div className="box_popcorn">
                        <div className="row">
                            <div className="col-4">
                                <div className="boxs_popcorn">
                                    <img src={popcorn_basic_assorti} alt="" />
                                    <h5 className="main_h5">Basic</h5>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="boxs_popcorn">
                                    <img src={Popcornbekers_plus} alt="" />
                                    <h5 className="main_h5">Plus</h5>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="boxs_popcorn">
                                    <img src={Popcornbekers_pro} alt="" />
                                    <h5 className="main_h5">Pro</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main_btn">
                        <a href="#">Neem contact op</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Popcornbekers
