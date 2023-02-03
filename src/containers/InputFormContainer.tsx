import React, {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { InputForm } from '../components/InputForm'

interface Props {
  isLoading: boolean
  result: ResultI | undefined
  setPrompt: Dispatch<SetStateAction<string>>
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  setIsLoading: Dispatch<SetStateAction<boolean>>
  setResult: Dispatch<SetStateAction<ResultI | undefined>>
  placeholder: string
}

export const InputFormContainer = (props: Props): JSX.Element => {
  const {
    isLoading,
    result,
    setPrompt,
    handleSubmit,
    setIsLoading,
    setResult,
    placeholder,
  } = props

  const [respCount, setRespCount] = useState(0)

  useEffect(() => {
    if (result && result?.data) {
      if (result?.data.length !== null) {
        setRespCount(result.data.length)
      }
    }
  }, [result])

  return (
    <div className='grid-half__input align-items-center'>
      <InputForm
        result={result}
        setIsLoading={setIsLoading}
        setResult={setResult}
        respCount={respCount}
        isLoading={isLoading}
        setPrompt={setPrompt}
        placeHolder={placeholder}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}
