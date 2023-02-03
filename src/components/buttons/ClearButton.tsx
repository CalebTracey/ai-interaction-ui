import { Button } from 'react-bootstrap'
interface Props {
  clearHandler: () => void
}

const ClearButton = (props: Props): JSX.Element => {
  const { clearHandler } = props
  return (
    <Button onClick={clearHandler} className='form-button' variant='dark'>
      <span>Clear</span>
    </Button>
  )
}

export default ClearButton
