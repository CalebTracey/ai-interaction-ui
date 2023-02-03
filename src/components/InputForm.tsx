import React, { ChangeEvent, SetStateAction, Dispatch, FormEvent } from 'react'
import { Dropdown, DropdownButton, Form, InputGroup } from 'react-bootstrap'
import Handler from '../services/Handler'
import ClearButton from './buttons/ClearButton'
import DownloadButton from './buttons/DownloadButton'
import SubmitButton from './buttons/SubmitButton'

interface Props {
  result: ResultI | undefined
  respCount: number
  isLoading: boolean
  setPrompt: (str: string) => void
  placeHolder: string
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
    placeHolder,
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
          label='What image would you like to see?'
          className='floating-label'
        >
          <Form.Control
            onChange={handleOnChange}
            as='input'
            type='text'
            placeholder={placeHolder}
          />
        </Form.FloatingLabel>
        {respCount === 0 ? (
          <SubmitButton isLoading={isLoading} />
        ) : isLoading ? null : (
          <>
            <ClearButton clearHandler={handleClear} />
            <DownloadButton result={result} />
            {/* <DropdownButton
              variant='outline-secondary'
              title=''
              id='input-group-dropdown-1'
            > */}
            {/* <Dropdown.Item>
                <span>Clear</span>
              </Dropdown.Item> */}
            {/* <Dropdown.Item>
                <span>Download</span>
              </Dropdown.Item>
            </DropdownButton> */}
          </>
        )}
      </InputGroup>
    </Form>
  )
}
