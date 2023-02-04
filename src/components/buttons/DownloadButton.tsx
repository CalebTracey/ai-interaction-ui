import React from 'react'
import { Button } from 'react-bootstrap'
import { BsDownload } from 'react-icons/bs'
interface Props {
  result: ResultI | undefined
}

const DownloadButton = (props: Props): JSX.Element => {
  const { result } = props
  return (
    <Button className='form-button' variant='dark'>
      <BsDownload />
    </Button>
  )
}

export default DownloadButton
