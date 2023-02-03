const Clear = (props: ClearI): void => {
  const { setPrompt, setResult, setIsLoading } = props
  setPrompt()
  setResult([])
  setIsLoading(false)

  console.log('cleared')

  return
}

const Handler = { Clear }

export default Handler
