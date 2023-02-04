import { Button } from 'react-bootstrap'
import { BsXCircle } from 'react-icons/bs'
interface Props {
  clearHandler: () => void
}

const ClearButton = (props: Props): JSX.Element => {
  const { clearHandler } = props
  return (
    <Button onClick={clearHandler} className='form-button' variant='dark'>
      <span>
        <BsXCircle />
      </span>
    </Button>
  )
}

export default ClearButton
