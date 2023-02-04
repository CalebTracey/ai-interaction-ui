import React from 'react'
import { Button } from 'react-bootstrap'
import Handler from '../../services/Handler'
import { BsCaretDownFill } from 'react-icons/bs'
const resultsContainerId = 'results-container'

const ScrollResultButton = (props: {
  respCount: number
}): JSX.Element | null => {
  const { respCount } = props

  return respCount > 0 ? (
    <Button
      className='scroll-button'
      variant='dark'
      onClick={(e) => Handler.ScrollToId(e, resultsContainerId)}
    >
      <BsCaretDownFill />
    </Button>
  ) : null
}

export default ScrollResultButton
