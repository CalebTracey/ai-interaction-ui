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
  placeholder: string
}

export const InputContainer = (props: Props): JSX.Element => {
  const { isLoading, response, setPrompt, handleSubmit, placeholder } = props
  const [respCount, setRespCount] = useState(0)

  useEffect(() => {
    if (response?.length !== undefined) {
      setRespCount(response.length)
    }
  }, [response])

  return (
    <Stack gap={3} className='grid-container__input align-items-center'>
      <InputForm
        isLoading={isLoading}
        setPrompt={setPrompt}
        placeHolder={placeholder}
      />
      {!isLoading && respCount > 0 ? <Button>Download</Button> : null}
      <Button
        onClick={handleSubmit}
        className='m-5'
        variant='outline-primary'
        disabled={isLoading}
      >
        Submit
      </Button>
    </Stack>
  )
}
