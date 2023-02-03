import React from 'react'
import HeaderItemContainer from '../containers/HeaderItemContainer'

const Header = (): JSX.Element => {
  return (
    <header className='header'>
      <div className='header-content'>
        <HeaderItemContainer>
          {/* <div> */}
          <span>AI Image Generation</span>
          {/* </div> */}
        </HeaderItemContainer>
      </div>
    </header>
  )
}

export default Header
