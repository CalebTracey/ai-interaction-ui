import React, { ChangeEvent, SetStateAction, Dispatch } from 'react'
import { Button, Form } from 'react-bootstrap'
import Handler from '../services/Handler'
import { SubmitButton } from './buttons/SubmitButton'

interface Props {
  respCount: number
  isLoading: boolean
  setPrompt: (str: string) => void
  placeHolder: string
  handleSubmit: () => void
  setIsLoading: Dispatch<SetStateAction<boolean>>
  setResponse: Dispatch<SetStateAction<ResultI | undefined>>
}

export const InputForm = (props: Props): JSX.Element => {
  const {
    respCount,
    isLoading,
    setPrompt,
    placeHolder,
    handleSubmit,
    setIsLoading,
    setResponse,
  } = props

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): (() => void) => {
    // throttle setState with timeout
    const timer = setTimeout(() => {
      setPrompt(e.target.value)
    }, 1000)

    return () => clearTimeout(timer)
  }

  return (
    <div className='form-input-container'>
      <Form.FloatingLabel
        controlId='floatingInput'
        label='What image would you like to see?'
        className='floating-label'
      >
        <Form.Control
          onChange={handleOnChange}
          as='input'
          type='text'
          className='form-ctrl'
          // style={{ backgroundColor: '#181a1b' }}
          placeholder={placeHolder}
        />
        {respCount === 0 && !isLoading ? (
          <SubmitButton isLoading={isLoading} handleSubmit={handleSubmit} />
        ) : isLoading ? null : (
          <Button
            onClick={() =>
              Handler.Clear({ setIsLoading, setPrompt, setResponse })
            }
            className='form-button'
            variant='outline-primary'
            disabled={isLoading}
          >
            Clear
          </Button>
        )}
      </Form.FloatingLabel>
    </div>
  )
}
