import React, { ChangeEvent, SetStateAction, Dispatch, FormEvent } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import ContentButtonContainer from '../containers/ContentButtonContainer'
import Handler from '../services/Handler'
import ScrollResultButton from './buttons/ScrollResultButton'
import SubmitButton from './buttons/SubmitButton'

// const resultContainerId = 'results-container'
interface Props {
  result: ResultI | undefined
  respCount: number
  setRespCount: Dispatch<SetStateAction<number>>
  isLoading: boolean
  prompt: string
  setPrompt: (str: string) => void
  placeholder: string
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  setIsLoading: Dispatch<SetStateAction<boolean>>
  setResult: Dispatch<SetStateAction<ResultI | undefined>>
}

export const InputForm = (props: Props): JSX.Element => {
  const {
    respCount,
    setRespCount,
    result,
    isLoading,
    setPrompt,
    placeholder,
    handleSubmit,
    setIsLoading,
    setResult,
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

  const handleClear = (): void => {
    Handler.Clear({
      setIsLoading,
      setPrompt,
      setResult,
    })
    setRespCount(0)
  }

  return (
    <Form className='form-input-container' onSubmit={handleSubmit}>
      <InputGroup>
        <Form.FloatingLabel
          controlId='floatingInput'
          label='What would you like to see?'
          className='floating-label'
        >
          <Form.Control
            onChange={handleOnChange}
            as='input'
            type='text'
            name='prompt'
            placeholder={placeholder}
          />
        </Form.FloatingLabel>
        {respCount === 0 ? <SubmitButton isLoading={isLoading} /> : null}
        <ContentButtonContainer
          isLoading={isLoading}
          respCount={respCount}
          handleClear={handleClear}
          result={result}
        />
      </InputGroup>
      <ScrollResultButton respCount={respCount} />
    </Form>
  )
}
