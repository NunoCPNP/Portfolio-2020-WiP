import React from 'react'

import { FormWrapper, StyledDiv } from './ContactForm.styles'

type Props = {}

const ContactForm: React.FC<Props> = () => {
  return (
    <FormWrapper>
      <form>
        <StyledDiv>
          <label htmlFor="name">Name :</label>
          <input autoComplete="off" type="text" id="name" placeholder="Your Name" />
        </StyledDiv>
        <StyledDiv>
          <label htmlFor="email">Email :</label>
          <input autoComplete="off" type="email" id="email" placeholder="Your Email Adress" />
        </StyledDiv>
        <StyledDiv>
          <label htmlFor="phone">Phone :</label>
          <input autoComplete="off" type="number" id="phone" placeholder="Your Phone Number" />
        </StyledDiv>
        <StyledDiv>
          <label htmlFor="message">Message :</label>
          <input autoComplete="off" type="text" id="message" placeholder="Your Message" />
        </StyledDiv>
      </form>
    </FormWrapper>
  )
}

export default ContactForm
