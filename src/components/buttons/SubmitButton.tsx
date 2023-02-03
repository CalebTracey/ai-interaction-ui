import { Button } from 'react-bootstrap'

interface Props {
  isLoading: boolean
}

const SubmitButton = (props: Props): JSX.Element => {
  const { isLoading } = props

  return (
    <Button
      className='form-button'
      variant='outline-primary'
      type='submit'
      disabled={isLoading}
    >
      <span>Submit</span>
    </Button>
  )
}

export default SubmitButton
