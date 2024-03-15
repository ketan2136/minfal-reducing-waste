import React from 'react'
import './Bennar.css'
import bennar_img from '../../Assets/over_bennar.png'
import men_01 from '../../Assets/men-01.png'
import men_02 from '../../Assets/men-02.png'
import 'bootstrap/dist/css/bootstrap.css';

const Bennar = () => {
    return (
        <>
            <section className='banner'>
                <div className="container">
                    <div className="bennar_img">
                        <img src={bennar_img} alt="" />
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className='bennar_boxs'>
                                <div>
                                    <img src={men_01} alt="" />
                                </div>
                                <div className='box_manu'>
                                    <h5 className="main_h5">
                                        Daniel
                                    </h5>
                                    <p className="main_p">
                                        “Het is mijn doel om bedrijven in de amusementssector te helpen aan unieke, verrassende verpakkingen die ondertussen de afvalstroom verminderen.”
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='bennar_boxs'>
                                <img src={men_02} alt="" />
                                <div className='box_manu'>
                                    <h5 className="main_h5">
                                        Leendert-jan
                                    </h5>
                                    <p className="main_p">
                                    "De aanstaande transitie van wegwerp- naar herbruikbare verpakkingen vergt creativiteit van organisaties. Het geeft mij voldoening om klanten te helpen met het realiseren van maatwerkoplossingen.”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bennar
