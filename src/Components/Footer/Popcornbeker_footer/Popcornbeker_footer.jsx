import React from 'react';
import in_logo from '../../Assets/footer_i_logo.png'
import f_dot_logo from '../../Assets/f_dot_logo.png'
import '../Footers/Footer'
import Footer_common from '../Footer_common/Footer_common';

const Popcornbeker_footer = () => {
    return (
        <div>
            <section className='Footer'>
                <div className="container">
                    <div className="f-boxs">
                        <div className="row">
                            <div className="col-4">
                                <h2 className="main_h2">Vraag Offerte aan</h2>
                                <p className='main_p'>We reageren zo snel mogelijk op uw aanvraag.</p>
                                <div><img src={in_logo} alt="" /></div>
                                <div className='boxs_dot'><img src={f_dot_logo} alt="" /></div>
                            </div>
                            <div className="col-8">
                                <Footer_common />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Popcornbeker_footer
