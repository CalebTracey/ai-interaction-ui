import { MouseEvent } from 'react'

const smooth: ScrollIntoViewOptions = { behavior: 'smooth' }

const Clear = (props: ClearI): void => {
  const { setPrompt, setResult, setIsLoading } = props
  setPrompt()
  setResult([])
  setIsLoading(false)

  console.log('cleared')

  return
}

const ScrollToId = (e: MouseEvent<HTMLButtonElement>, id: string): void => {
  e.preventDefault()

  document.getElementById(id)?.scrollIntoView(smooth)
}

const Handler = { Clear, ScrollToId }

export default Handler
