import React from 'react'

interface Props {
  text: string
}

const HeaderText = (props: Props): JSX.Element => {
  const { text } = props
  return (
    <div className='header-item-container'>
      <span>{text}</span>
    </div>
  )
}

export default HeaderText
