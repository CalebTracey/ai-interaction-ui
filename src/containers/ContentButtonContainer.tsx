import React from 'react'
import ClearButton from '../components/buttons/ClearButton'
import DownloadButton from '../components/buttons/DownloadButton'

interface Props {
  respCount: number
  isLoading: boolean
  result: ResultI | undefined
  handleClear: () => void
}

const ContentButtonContainer = (props: Props): JSX.Element | null => {
  const { respCount, isLoading, result, handleClear } = props
  return !isLoading && respCount !== undefined && respCount > 0 ? (
    <>
      <ClearButton clearHandler={handleClear} />
      <DownloadButton result={result} />
    </>
  ) : null
}

export default ContentButtonContainer
