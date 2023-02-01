import { Spinner } from 'react-bootstrap'
import React from 'react'

export const GrowSpinner = (): JSX.Element => {
  return (
    <div className={'flex-container-centered'}>
      <Spinner animation='grow' />
    </div>
  )
}
