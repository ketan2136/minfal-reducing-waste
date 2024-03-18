import React from 'react'
import './Contact_footer.css'
import Maps from './Maps'

const Contact_footer = () => {
    const mapCenter = { lat: 59.95, lng: 30.33 };
    return (
        <>
            <section className='contact_footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="h2_main">
                                <h2 className="main_h2">Contact</h2>
                            </div>
                            <div>
                                <h3 className="main_h3">Adres:</h3>
                                <span></span>
                                <p className="main_p">Turfschipper 622292 JB Wateringen</p>
                            </div>
                            <div>
                                <h3 className="main_h3">E-mail:</h3>
                                <span></span>
                                <p className='main_p'>info@minfal.ni</p>
                            </div>
                            <p className="main_p">Voor telefonisch contact kunt u eenterugbelverzoek indienen via het contactformulier.</p>
                            <p className="main_p">*Klanten krijgen een vaste contactpersoon.</p>
                            <p className="main_p">Algemene voorwaarden</p>
                        </div>
                        <div className="col-6">
                            <div className="maps">
                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2455.4684061568846!2d4.290354000000001!3d52.016564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b408b8e7e4fd%3A0x2ca1c3e9f5a736ed!2sTurfschipper%2062%2C%202292%20JB%20Wateringen%2C%20Netherlands!5e0!3m2!1sen!2sin!4v1710564843325!5m2!1sen!2sin" width={600} height={450} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> */}
                                <Maps />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact_footer


