import { placeholder } from '../containers/Content'

const Clear = (props: ClearI): void => {
  const { setPrompt, setResponse, setIsLoading } = props
  setPrompt(placeholder)
  setResponse([])
  setIsLoading(false)

  console.log('cleared')

  return
}

const Handler = { Clear }

export default Handler
