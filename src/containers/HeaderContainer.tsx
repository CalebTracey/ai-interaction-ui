import React from 'react'
import Header from '../components/Header'

interface Props {
  alert: AlertT | undefined
}
const HeaderContainer = (props: Props): JSX.Element => {
  const { alert } = props

  return (
    <div className='header-container'>
      <Header alert={alert} />
    </div>
  )
}

export default HeaderContainer
