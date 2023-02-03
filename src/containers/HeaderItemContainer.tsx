import React from 'react'

interface Props {
  children: any
}
const HeaderItemContainer = (props: Props): JSX.Element => {
  const { children } = props
  return <div className='header-item-container'>{children}</div>
}

export default HeaderItemContainer
