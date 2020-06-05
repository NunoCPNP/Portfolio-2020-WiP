import React, { useRef } from 'react'

import LinkButton from '../buttons/LinkButton'

import { StyledDiv, ButtonContainer } from './ContactForm.styles'

const ContactForm: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const contactRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLInputElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const nameKeyDown = (e: any) => {
    if (e.key === 'Enter') emailRef.current?.focus()
  }
  const emailKeyDown = (e: any) => {
    if (e.key === 'Enter') contactRef.current?.focus()
  }
  const contactKeyDown = (e: any) => {
    if (e.key === 'Enter') messageRef.current?.focus()
  }
  const messageKeyDown = (e: any) => {
    if (e.key === 'Enter') buttonRef.current?.focus()
  }
  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    alert('SUBMITED')
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <StyledDiv>
        <label htmlFor="name">Name: </label>
        <input ref={nameRef} onKeyDown={nameKeyDown} autoComplete="off" id="name" type="test" placeholder="Your Name" />
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
        <input
          ref={messageRef}
          onKeyDown={messageKeyDown}
          autoComplete="off"
          id="message"
          type="text"
          placeholder="Your Message"
        />
      </StyledDiv>
      <ButtonContainer>
        <LinkButton ref={buttonRef} type="submit" aria-label="submit" label="Send Message" />
      </ButtonContainer>
    </form>
  )
}

export default ContactForm
