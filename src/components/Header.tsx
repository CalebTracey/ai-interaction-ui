import React from 'react'
import { Alert } from 'react-bootstrap'
import HeaderText from './HeaderText'

const PageTitle = 'robot picture maker'
interface Props {
  alert: AlertT | undefined
}

const Header = (props: Props): JSX.Element => {
  const { alert } = props

  const validateAlert = (): boolean => {
    if (alert) {
      return (
        (alert.type === 'success' || alert.type === 'danger') &&
        alert.message !== ''
      )
    } else {
      return false
    }
  }

  return (
    <header className='header'>
      <div className='header-content'>
        <HeaderText text={PageTitle} />

        {alert && validateAlert() ? (
          <Alert
            className='header-alert'
            show={
              (alert.type === 'success' || alert.type === 'danger') &&
              alert.message !== ''
            }
            variant={alert?.type}
          >
            <span>{alert?.message}</span>
          </Alert>
        ) : null}
      </div>
    </header>
  )
}

export default Header
