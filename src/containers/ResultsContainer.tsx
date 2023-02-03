import React from 'react'
import { GrowSpinner } from '../components/GrowSpinner'
import { ImageList } from '../components/ImageList'

interface Props {
  isLoading: boolean
  alert: AlertT | null
  result: ResultI | undefined
  showAlert: (type: string, message: string) => void
}

const ResultsContainer = (props: Props): JSX.Element => {
  const { isLoading, alert, result, showAlert } = props
  return (
    <div className='grid-half__content'>
      <>
        {alert ? showAlert(alert.type, alert.message) : null}

        {isLoading ? <GrowSpinner /> : <ImageList images={result?.data} />}
      </>
    </div>
  )
}

export default ResultsContainer
