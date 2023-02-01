import React, { ChangeEvent } from 'react'
import { Form } from 'react-bootstrap'

interface Props {
  isLoading: boolean
  setPrompt: (str: string) => void
  placeHolder: string
}

export const InputForm = (props: Props): JSX.Element => {
  const { isLoading, setPrompt, placeHolder } = props

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): (() => void) => {
    const timer = setTimeout(() => {
      setPrompt(e.target.value)
    }, 1000)

    return () => clearTimeout(timer)
  }

  return (
    <Form.Group className={'inputForm'} controlId='formInput.ControlInput_0'>
      <Form.Control
        onChange={handleOnChange}
        as='input'
        type='text'
        // style={{ backgroundColor: '#181a1b' }}
        placeholder={placeHolder}
      />
    </Form.Group>
  )
}
