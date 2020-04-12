import React from 'react'

import SectionTitle from '../../components/sectionTitle/SectionTitle'

type Props = {}

const Contacts: React.FC<Props> = () => {
  return (
    <>
      <section id="Contacts">
        <SectionTitle title="Contacts" subTitle="Have a question or want to work together ?" uppercase />
      </section>
    </>
  )
}

export default Contacts
