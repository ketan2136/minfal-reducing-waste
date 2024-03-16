import React from 'react'
import './Offerte.css'
import Mask_contact from '../../Assets/contact.png'

const Offerte = () => {
    return (
        <>
            <section className='offerte'>
                <div className="container">
                    <div className="h2_main">
                        <h2 className="main_h2">Vraag Offerte aan</h2>
                    </div>
                    <p className="main_p">We reageren zo snel mogelijk op uw aanvraag.</p>
                    <div className='off_box'>
                        <div className='row'>
                            <div className="col-6">
                                <div className="contact_img">
                                    <img src={Mask_contact} alt="" />
                                </div>
                            </div>
                            <div className="col-6">
                                <form action="">
                                    <div className='inpute_boxs'>
                                        <label htmlFor="">Uw naam</label>
                                        <input type="text" />
                                    </div>
                                    <div className='inpute_boxs'>
                                        <label htmlFor="">Bedrijfsnaam</label>
                                        <input type="text" />
                                    </div>
                                    <div className='inpute_boxs'>
                                        <label htmlFor="">E-mail</label>
                                        <input type="text" />
                                    </div>
                                    <div className='inpute_boxs'>
                                        <label htmlFor="">Telefoonnummer</label>
                                        <input type="text" />
                                    </div>
                                    <div className='inpute_boxs'>
                                        <label htmlFor="">Bericht</label>
                                        <input type="text" />
                                    </div>
                                    <div className="main_btn">
                                        <a href="">Over ons</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Offerte


