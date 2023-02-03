import React from 'react'
import { Button } from 'react-bootstrap'

interface Props {
  response: ResultI | undefined
}

const DownloadButton = (props: Props): JSX.Element => {
  const { response } = props
  return (
    <div className='download-button'>
      <Button className='w-50' variant='outline-secondary'>
        Download
      </Button>
    </div>
  )
}

export default DownloadButton
