import React from 'react'
import { Image } from 'react-bootstrap'
import { testImages } from '../testdata/images'
export interface urlI {
  url: string
}
interface Props {
  images: urlI[] | undefined
}

export const ImageListContainer = (props: Props): JSX.Element | null => {
  let { images } = props

  // if (images === undefined) {
  //   images = testImages
  //   return null
  // }
  images = testImages
  return (
    <div className='grid-container grid-middle'>
      {images.map((img) => (
        <Image thumbnail={true} key={img.url} src={img.url} />
      ))}
    </div>
  )
}
