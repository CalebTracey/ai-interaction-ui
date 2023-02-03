import React from 'react'
import { ImageList } from '../components/ImageList'

interface Props {
  images: UrlI[] | undefined | null
}

const ImageListContainer = (props: Props): JSX.Element | null => {
  const { images } = props
  if (images === undefined || images === null) {
    return null
  }

  return (
    // <div className='image-list-container'>
    <div className='container'>
      {images ? <ImageList images={images} /> : null}
    </div>
    // </div>
  )
}

export default ImageListContainer
