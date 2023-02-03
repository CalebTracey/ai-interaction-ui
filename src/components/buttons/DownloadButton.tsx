import React from 'react'
import { Button } from 'react-bootstrap'

interface Props {
  result: ResultI | undefined
}

const DownloadButton = (props: Props): JSX.Element => {
  const { result } = props
  return (
    <Button className='form-button' variant='dark'>
      Download
    </Button>
  )
}

export default DownloadButton
