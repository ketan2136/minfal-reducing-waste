import React from 'react'
import './Offerte.css'
import '../../Footer/Footer_common/Footer_common.css'
import Mask_contact from '../../Assets/contact.png'
import Footer_common from '../../Footer/Footer_common/Footer_common'

const Offerte = () => {
    return (
        <>
            <section className='offerte f-boxs'>
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
                            <div className="col-6 contact_form">
                                <Footer_common  />                    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Offerte


