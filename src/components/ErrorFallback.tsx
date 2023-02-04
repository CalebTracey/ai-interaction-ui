import React, { FC } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { FallbackProps } from 'react-error-boundary'

export const ErrorFallback: FC<FallbackProps> = (props: FallbackProps): any => {
  const { error, resetErrorBoundary } = props

  const handleClose = (): void => {
    console.error('=== ERROR FALLBACK ===')
    resetErrorBoundary()
  }

  return (
    <div
      className='error-fallback modal show grid-half'
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Something went wrong</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            <code>Error: {error.message}</code>
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleClose} variant='primary'>
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}
