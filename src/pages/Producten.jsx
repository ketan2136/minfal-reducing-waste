import React from 'react'
import Hero_producten from '../Components/Producten/Hero_roducten/Hero_producten'
import Volledige from '../Components/Producten/Volledige/Volledige'
import Popcornbekers from '../Components/Producten/Popcornbekers/Popcornbekers'
import Specificaties from '../Components/Producten/Specificaties/Specificaties'


const Producten = () => {
    return (
        <>
            <Hero_producten />
            <Volledige />
            <Popcornbekers />
            <Specificaties />
        </>
    )
}

export default Producten
