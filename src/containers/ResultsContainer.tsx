import React from 'react'
import { GrowSpinner } from '../components/GrowSpinner'
import { ImageList } from '../components/ImageList'

interface Props {
  isLoading: boolean
  result: ResultI | undefined
}

const ResultsContainer = (props: Props): JSX.Element | null => {
  const { isLoading, result } = props
  return result ? (
    <div id='results-container' className='grid-half__content'>
      {isLoading ? <GrowSpinner /> : <ImageList images={result?.data} />}
    </div>
  ) : null
}

export default ResultsContainer
