import React from 'react'
import './Main_green_box.css'

const Main_green_box = () => {
    return (
        <div>
            <section className='main_green_box'>
                <div className="container">
                    <div className="boxs">
                        <div className="row">
                            <div className="col-4">
                                <h2 className="main_h2">10 mln</h2>
                                <p className="main_p">Wegwerp- popcornbekers vervangen is één van onze doelen</p>
                            </div>
                            <div className="col-4">
                                <h2 className="main_h2">1 vs 100</h2>
                                <p className="main_p">Elke popcornbeker kan meer dan honderd wegwerpverpakkingen besparen</p>
                            </div>
                            <div className="col-4">
                                <h2 className="main_h2">100.000'EN</h2>
                                <p className="main_p">bezoekers eindigen hun bezoek door ons niet bij de prullenbak</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main_green_box
