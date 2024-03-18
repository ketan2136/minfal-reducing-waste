import React from 'react'
import in_logo from '../../Assets/footer_i_logo.png'
import f_dot_logo from '../../Assets/f_dot_logo.png'

const Producten_footer = () => {
  return (
    <div>
       <section className='Footer'>
            <div className="container">
                <div className="f-boxs">
                    <div className="row">
                        <div className="col-4">
                            <h2 className="main_h2">Geïnteresseerd in onze producten? Vraag offerte of meer informatie aan</h2>
                            <p className='main_p'>We reageren zo snel mogelijk op uw aanvraag.</p>
                            <div><img src={in_logo} alt="" /></div>
                            <div className='boxs_dot'><img src={f_dot_logo} alt="" /></div>
                        </div>
                        <div className="col-8">
                            <form>
                                <div className="row">
                                    <div className="col-6">
                                        <label htmlFor="">Uw naam</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="">Bedrijfsnaam</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="">E-mail</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="">Telefoonnummer</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="taxtarea">
                                    <label htmlFor="">Bericht</label>
                                    <textarea name="bericht" id="" cols="30" rows="5"></textarea>
                                </div>
                                <div className="main_btn">
                                    <a href="">Over ons</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='footer-last'>
                <p className="main_p">
                Minfal © 2022. All rights reserved. | Turfschipper 62, 2292 JB Wateringen
                </p>
            </div> */}
        </section>
    </div>
  )
}

export default Producten_footer
