import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { InputFormContainer } from './InputFormContainer'
import { GrowSpinner } from '../components/GrowSpinner'
import ImageListContainer from './ImageListContainer'
import Service from '../services/Service'
import { AxiosResponse } from 'axios'
import { type } from 'os'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '../components/ErrorFallback'
import { ImageList } from '../components/ImageList'

export const placeholder = 'What would you like an image of?'
const defaultSize = '1024x1024'

export const Content = (): JSX.Element => {
  const [prompt, setPrompt] = useState<string>(placeholder)
  const [response, setResponse] = useState<ResultI | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [alert, setAlert] = useState<AlertT | null>(null)

  const responseAlert = (key: string, variant: string): JSX.Element => {
    return (
      <Alert key={key} variant={variant}>
        <span>success</span>
      </Alert>
    )
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(null)
    }, 10000)

    return () => clearTimeout(timer)
  }, [alert])

  const handleSubmit = (): void => {
    console.log('=== SUBMITTED ===')
    const req: RequestI = { n: 2, prompt, size: defaultSize }
    setIsLoading(true)

    Service.Post({ request: req })
      .then((res: ResponseI | undefined) => {
        if (res?.result) {
          if (res.result.data.length == 0) {
            setAlert({ type: 'danger', message: 'Success!' })
            console.info('no results')
            return
          }
          // setResponse()
          // const t =
          setResponse(res.result)
          console.log('Response: ' + res.result)
          setAlert({ type: 'success', message: 'Success!' })
          // if (res.message.ErrorLog.length !== 0) {
          //   setAlert({
          //     type: 'danger',
          //     message: res.message.ErrorLog[0].RootCause,
          //   })
          //   setIsLoading(false)
          //   return
          // }
        }
        return
      })
      .finally(() => setIsLoading(false))
    return
  }

  return (
    <div className='content container'>
      <div className=' grid-half'>
        {alert ? responseAlert(alert.type, alert.message) : null}

        {isLoading ? (
          <GrowSpinner />
        ) : (
          <ImageList images={response?.data} />
          // <ImageListContainer images={response?.data} />
        )}
        {/* <GrowSpinner /> */}
      </div>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <InputFormContainer
          setIsLoading={setIsLoading}
          setResponse={setResponse}
          response={response}
          isLoading={isLoading}
          setPrompt={setPrompt}
          handleSubmit={handleSubmit}
          // handleClear={}
          placeholder={placeholder}
        />
      </ErrorBoundary>
    </div>
  )
}
