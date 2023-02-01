import React, { useState } from 'react'
import axios from 'axios'
import { Alert, Spinner } from 'react-bootstrap'
import { ImageListContainer, urlI } from './ImageListContainer'
import { InputContainer } from './InputContainer'

const placeholder = 'Two cats playing guitar on the moon'
const url = 'http://localhost:8080/v1/image'

const defaultSize = '1024x1024'

interface requestI {
  n: number
  prompt: string
  size: string
}

export const Content = (): JSX.Element => {
  const [prompt, setPrompt] = useState<string>(placeholder)
  const [response, setResponse] = useState<urlI[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const responseAlert = (
    key: string,
    variant: 'success' | 'danger',
  ): JSX.Element => (
    <Alert key={key} variant={variant}>
      success
    </Alert>
  )

  const handlePostRequest = async (): Promise<any> => {
    const request: requestI = { n: 2, prompt, size: defaultSize }
    return axios
      .post(url, request)
      .then((res) => {
        setResponse(res.data)
        responseAlert('success', 'success')
      })
      .catch((err) => {
        console.error(err.message)
        responseAlert(err.message, 'danger')
      })
  }

  const handleSubmit = (): void => {
    setIsLoading(true)
    handlePostRequest().then(() => {
      setIsLoading(false)
    })
  }

  return (
    <div className='content'>
      {isLoading ? (
        <Spinner animation='grow' />
      ) : (
        <ImageListContainer images={response} />
      )}
      <InputContainer
        response={response}
        isLoading={isLoading}
        setPrompt={setPrompt}
        handleSubmit={handleSubmit}
        placeholder={placeholder}
      />
    </div>
  )
}
