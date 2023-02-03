import React, {
  ChangeEvent,
  SetStateAction,
  Dispatch,
  FormEvent,
  useState,
} from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import Handler from '../services/Handler'
import ClearButton from './buttons/ClearButton'
import DownloadButton from './buttons/DownloadButton'
import SubmitButton from './buttons/SubmitButton'

interface Props {
  result: ResultI | undefined
  respCount: number
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
    result,
    isLoading,
    setPrompt,
    placeholder,
    prompt,
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
        <>
          {respCount === 0 ? <SubmitButton isLoading={isLoading} /> : null}
          {console.log('=== RESP COUNT: ' + respCount)}
          {respCount !== undefined ? (
            <>
              {respCount > 0 ? (
                <ClearButton clearHandler={handleClear} />
              ) : null}
              {respCount > 0 && !isLoading ? (
                <DownloadButton result={result} />
              ) : null}
            </>
          ) : null}
        </>
      </InputGroup>
    </Form>
  )
}
