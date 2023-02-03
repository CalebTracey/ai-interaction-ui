import { Dispatch, SetStateAction } from 'react'
import { Button } from 'react-bootstrap'
import Handler from '../../services/Handler'

interface Props {
  clearHandler: () => void
}

const ClearButton = (props: Props): JSX.Element => {
  const { clearHandler } = props
  return (
    <Button onClick={clearHandler} className='form-button' variant='dark'>
      Clear
    </Button>
  )
}

export default ClearButton
