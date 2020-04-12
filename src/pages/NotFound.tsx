import React from 'react'

import NotFoundImage from '../assets/404.svg'

type Props = {}

const NotFound: React.FC<Props> = () => {
  return (
    <section>
      <img style={{ height: '100vh', paddingBottom: '2rem' }} src={NotFoundImage} />
    </section>
  )
}

export default NotFound
