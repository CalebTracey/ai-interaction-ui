import { placeholder } from '../containers/Content'

const Clear = (props: ClearI): void => {
  const { setPrompt, setResult, setIsLoading } = props
  setPrompt(placeholder)
  setResult([])
  setIsLoading(false)

  console.log('cleared')

  return
}

const Handler = { Clear }

export default Handler
