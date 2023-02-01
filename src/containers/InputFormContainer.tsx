import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Stack from 'react-bootstrap/Stack'
import { Button } from 'react-bootstrap'
import { urlI } from './ImageListContainer'
import { InputForm } from '../components/InputForm'

interface Props {
  isLoading: boolean
  response: urlI[] | undefined
  setPrompt: Dispatch<SetStateAction<string>>
  handleSubmit: () => void
  handleClear: () => void
  placeholder: string
}

export const InputFormContainer = (props: Props): JSX.Element => {
  const {
    isLoading,
    response,
    setPrompt,
    handleSubmit,
    handleClear,
    placeholder,
  } = props
  const [respCount, setRespCount] = useState(0)

  useEffect(() => {
    if (response?.length !== undefined) {
      setRespCount(response.length)
    }
  }, [response])

  return (
    <Stack
      gap={3}
      className='grid-container__input grid-middle align-items-center'
    >
      <InputForm
        isLoading={isLoading}
        setPrompt={setPrompt}
        placeHolder={placeholder}
      />
      {!isLoading && respCount > 0 ? <Button>Download</Button> : null}
      {respCount === 0 ? (
        <Button
          onClick={handleSubmit}
          style={{ width: '10%' }}
          className='m-5'
          variant='outline-primary'
          disabled={isLoading}
        >
          Submit
        </Button>
      ) : (
        <Button
          onClick={handleClear}
          style={{ width: '10%' }}
          className='m-5'
          variant='outline-primary'
          disabled={isLoading}
        >
          Clear
        </Button>
      )}
    </Stack>
  )
}
