import React, {
  ChangeEvent,
  SetStateAction,
  Dispatch,
  FormEvent,
  useState,
  MouseEvent,
} from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import Handler from '../services/Handler'
import ClearButton from './buttons/ClearButton'
import DownloadButton from './buttons/DownloadButton'
import SubmitButton from './buttons/SubmitButton'

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

  const scrollHandler = (e: MouseEvent<HTMLButtonElement>): void => {
    console.log('scroll')
    document
      .getElementById('results-container')
      ?.scrollIntoView({ behavior: 'smooth' })
    // e.currentTarget.scrollTo({ top: -200, behavior: 'smooth' })
    // window.scrollTo({
    //   top: -200,
    //   behavior: 'smooth',
    // })
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

        <>
          {respCount === 0 ? <SubmitButton isLoading={isLoading} /> : null}
          {/* {console.log('=== RESP COUNT: ' + respCount)} */}
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
      {respCount !== 0 ? (
        <Button className='scroll-button' onClick={scrollHandler}>
          <span>Scroll Down</span>
        </Button>
      ) : null}
    </Form>
  )
}
