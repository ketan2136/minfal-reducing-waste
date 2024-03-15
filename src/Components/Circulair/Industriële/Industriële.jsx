import React from 'react'
import './Industriële.css'
import industriële from '../../Assets/industriële.png'

const Industriële = () => {
    return (
        <>
            <section className='industriële'>
                <div className="container">

                    <div className="row">
                        <div className="col-6">
                            <div className='industriële_manu'>
                                <div className="h2_main">
                                    <h2 className="main_h2">Industriële vaatwasmachine</h2>
                                </div>
                                <p className="main_p">Om de herbruikbare verpakkingen te reinigen wordt (optioneel) een industriële vaatwasmachine meegeleverd. Minfal werkt samen met een fabrikant van industriële vaatwasmachine's die uitermate geschikt zijn voor de herbruikbare popcornbekers.</p>
                                <p className="main_p">De vaatwasmachine's zijn er van klein naar groot. Zo zijn er voorladers (net als in de keuken thuis), maar ook doorschuif- en transportmachines.</p>
                                <p className="main_p">Minfal ontwikkelt samen met de fabrikant een wasprogramma op basis van het gewicht, de vorm en de dikte van de herbruikbare verpakkingen die u gewassen wilt hebben.</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <img src={industriële} alt="" />
                        </div>
                    </div>
                    <div className="last_heading">
                        <div className='h2_main'>
                            <h2 className='main_h2'>Bent u geïnteresseerd?</h2>
                        </div>
                        <div className="main_btn">
                            <a href="#">Neem contact op</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Industriële
