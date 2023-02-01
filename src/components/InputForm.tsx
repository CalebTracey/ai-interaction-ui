import React, { ChangeEvent } from 'react'
import { Form } from 'react-bootstrap'

interface Props {
  isLoading: boolean
  setPrompt: (str: string) => void
  placeHolder: string
}

export const PromptInput = (props: Props): JSX.Element => {
  const { isLoading, setPrompt, placeHolder } = props

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): (() => void) => {
    const timer = setTimeout(() => {
      setPrompt(e.target.value)
    }, 1000)

    return () => clearTimeout(timer)
  }

  return (
    <Form>
      <Form.Group>
        <Form.Label>Tell the AI what you want</Form.Label>
      </Form.Group>
      <Form.Control
        onChange={handleOnChange}
        type="text"
        size="lg"
        placeholder={placeHolder}
      />
    </Form>
  )
}
