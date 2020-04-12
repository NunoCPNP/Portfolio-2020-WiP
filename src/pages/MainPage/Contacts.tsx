import React from 'react'

import SectionTitle from '../../components/sectionTitle/SectionTitle'
import OneColumnGrid from '../../components/grids/OneColumnGrid'
import ContactForm from '../../components/contactForm/ContactForm'

type Props = {}

const Contacts: React.FC<Props> = () => {
  return (
    <section id="Contacts">
      <SectionTitle title="Contacts" subTitle="Have a question or want to work together ?" uppercase />
      <OneColumnGrid items={2} breakTo={1} gap={4} maxWidth={120} padding={4}>
        <ContactForm />
      </OneColumnGrid>
    </section>
  )
}

export default Contacts
