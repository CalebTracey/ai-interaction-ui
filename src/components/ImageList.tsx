import React from 'react'
import ImageContainer from '../containers/ImageContainer'

interface Props {
  images: UrlI[] | undefined
}

export const ImageList = (props: Props): JSX.Element => {
  const { images } = props

  const resp = images?.map((img) => {
    return <ImageContainer key={img.url} src={img.url} />
  })

  return <div className='image-list'>{resp}</div>
}
