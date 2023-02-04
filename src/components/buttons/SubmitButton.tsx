import { Button } from 'react-bootstrap'
import { GrowSpinner } from '../GrowSpinner'

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
      {isLoading ? <GrowSpinner /> : <span>submit</span>}
    </Button>
  )
}

export default SubmitButton
