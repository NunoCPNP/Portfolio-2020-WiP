import React, { useRef } from 'react'

import Input from '../input/Input'

import { FormWrapper } from './ContactForm.styles'

type Props = {}

const ContactForm: React.FC<Props> = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLInputElement>(null)

  return (
    <FormWrapper>
      <form>
        <Input
          ref={nameRef}
          onChange={() => console.log(nameRef.current)}
          label="Name :"
          type="text"
          id="name"
          placeholder="Your Name"
        />
        <Input ref={emailRef} label="Email :" type="email" id="email" placeholder="Your Email Adress" />
        <Input ref={phoneRef} label="Phone :" type="text" id="phone" placeholder="Your Phone Number" />
        <Input ref={messageRef} label="Message :" type="text" id="message" placeholder="Your Message" />
      </form>
    </FormWrapper>
  )
}

export default ContactForm
