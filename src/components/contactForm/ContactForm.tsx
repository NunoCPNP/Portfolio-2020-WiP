import React, { useRef } from 'react'

import { FormWrapper, StyledDiv } from './ContactForm.styles'

type Props = {}

const ContactForm: React.FC<Props> = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const contactRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLInputElement>(null)

  const nameKeyDown = (e: any) => {
    if (e.key === 'Enter') emailRef.current?.focus()
  }

  const emailKeyDown = (e: any) => {
    if (e.key === 'Enter') contactRef.current?.focus()
  }

  const contactKeyDown = (e: any) => {
    if (e.key === 'Enter') messageRef.current?.focus()
  }

  return (
    <FormWrapper>
      <form>
        <StyledDiv>
          <label htmlFor="name">Name: </label>
          <input
            ref={nameRef}
            onKeyDown={nameKeyDown}
            autoComplete="off"
            id="name"
            type="test"
            placeholder="Your Name"
          />
        </StyledDiv>
        <StyledDiv>
          <label htmlFor="email">Email: </label>
          <input
            ref={emailRef}
            onKeyDown={emailKeyDown}
            autoComplete="off"
            id="email"
            type="text"
            placeholder="Your E-Mail"
          />
        </StyledDiv>
        <StyledDiv>
          <label htmlFor="phone">Phone: </label>
          <input
            ref={contactRef}
            onKeyDown={contactKeyDown}
            autoComplete="off"
            id="phone"
            type="text"
            placeholder="Your Phone Number"
          />
        </StyledDiv>
        <StyledDiv>
          <label htmlFor="message">Message: </label>
          <input ref={messageRef} autoComplete="off" id="message" type="text" placeholder="Your Message" />
        </StyledDiv>
      </form>
    </FormWrapper>
  )
}

export default ContactForm
