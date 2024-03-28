import React from 'react'
import Hero_contact from '../Components/Contact/Hero_contact/Hero_contact'
import Offerte from '../Components/Contact/Offerte/Offerte'
import Contact_footer from '../Components/Contact/Contact_footer/Contact_footer'
import { useParams } from 'react-router-dom'

const Contact = () => {
  const param = useParams();
  return (
    <div>
      <Hero_contact />
      <Offerte id={param} />
      <Contact_footer />
    </div>
  )
}

export default Contact
