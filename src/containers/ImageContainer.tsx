import React from 'react'
import { Image } from 'react-bootstrap'

interface Props {
  src: string
}

export const ImageContainer = (props: Props): JSX.Element => {
  const { src } = props

  return (
    <div className='image-item'>
      <Image className='image-container' thumbnail={true} src={src} />
    </div>
  )
}

export default ImageContainer
