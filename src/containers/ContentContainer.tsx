import React, { FormEvent, useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { InputFormContainer } from './InputFormContainer'
import Service from '../services/Service'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '../components/ErrorFallback'
import ResultsContainer from './ResultsContainer'
import Header from '../components/Header'

const placeholder = 'Two bears fighting aliens with light sabers'
const defaultSize = '1024x1024'
const defaultCount = 1
const tenSeconds = 10000

export const Content = (): JSX.Element => {
  const [prompt, setPrompt] = useState<string>('')
  const [result, setResult] = useState<ResultI | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [alert, setAlert] = useState<AlertT | null>(null)

  const showAlert = (key: string, variant: string): JSX.Element => {
    return (
      <Alert className='position-fixed' key={key} variant={variant}>
        <span>success</span>
      </Alert>
    )
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(null)
    }, tenSeconds)

    return () => clearTimeout(timer)
  }, [alert])

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log('=== SUBMITTED ===')

    const req: RequestI = { n: defaultCount, prompt, size: defaultSize }

    setIsLoading(true)

    const s = Service.Post({ request: req })
      .then((res: ResponseI | undefined) => {
        if (res?.result) {
          if (res.result.data.length == 0) {
            // is this sketchy?
            setResult(undefined)
            setAlert({ type: 'danger', message: 'None found!' })
          }
          setResult(res.result)
          setAlert({ type: 'success', message: 'Success!' })
        }
      })
      .finally(() => setIsLoading(false))

    return e.currentTarget.reset()
  }

  return (
    <div className='content'>
      <Header />
      <ResultsContainer
        isLoading={isLoading}
        alert={alert}
        result={result}
        showAlert={showAlert}
      />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <InputFormContainer
          setIsLoading={setIsLoading}
          setResult={setResult}
          result={result}
          isLoading={isLoading}
          setPrompt={setPrompt}
          prompt={prompt}
          handleSubmit={handleSubmit}
          placeholder={placeholder}
        />
      </ErrorBoundary>
    </div>
  )
}
