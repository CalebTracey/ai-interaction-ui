import { Button } from 'react-bootstrap'

interface Props {
  handleSubmit: () => void
  isLoading: boolean
}

export const SubmitButton = (props: Props): JSX.Element => {
  const { handleSubmit, isLoading } = props

  return (
    <Button
      onClick={handleSubmit}
      className='form-button'
      variant='outline-primary'
      type='submit'
      disabled={isLoading}
      formTarget='floatingInput'
    >
      Submit
    </Button>
  )
}
