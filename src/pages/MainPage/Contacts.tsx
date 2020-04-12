import React from 'react'

import SectionTitle from '../../components/sectionTitle/SectionTitle'
import ContactForm from '../../components/contactForm/ContactForm'

type Props = {}

const Contacts: React.FC<Props> = () => {
  return (
    <>
      <section id="Contacts">
        <SectionTitle title="Contacts" subTitle="Have a question or want to work together ?" uppercase />
        <ContactForm />
      </section>
    </>
  )
}

export default Contacts
