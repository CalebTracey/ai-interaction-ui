import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { InputForm } from '../components/InputForm'
import DownloadButton from '../components/buttons/DownloadButton'
import Handler from '../services/Handler'
interface Props {
  isLoading: boolean
  response: ResultI | undefined
  setPrompt: Dispatch<SetStateAction<string>>
  handleSubmit: () => void
  setIsLoading: Dispatch<SetStateAction<boolean>>
  setResponse: Dispatch<SetStateAction<ResultI | undefined>>
  placeholder: string
}

export const InputFormContainer = (props: Props): JSX.Element => {
  const {
    isLoading,
    response,
    setPrompt,
    handleSubmit,
    setIsLoading,
    setResponse,
    placeholder,
  } = props

  const [respCount, setRespCount] = useState(0)

  useEffect(() => {
    if (response && response?.data) {
      if (response?.data.length !== null) {
        setRespCount(response.data.length)
      }
    }
  }, [response])

  return (
    <div className='grid-container__input grid-half align-items-center'>
      <InputForm
        setIsLoading={setIsLoading}
        setResponse={setResponse}
        respCount={respCount}
        isLoading={isLoading}
        setPrompt={setPrompt}
        placeHolder={placeholder}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}
