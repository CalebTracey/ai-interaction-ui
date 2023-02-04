import React, { useEffect, useState } from 'react'

interface Props {
  respCount: number
  isLoading: boolean
}

const happy = <span>🙂</span>
const think = <span>🤔</span>
const satisfy = <span>😌</span>

const FaceContainer = (props: Props): JSX.Element => {
  const { isLoading, respCount } = props
  const [face, setFace] = useState(happy)

  useEffect(() => {
    if (isLoading) {
      setFace(think)
    } else if (respCount > 0) {
      setFace(satisfy)
    } else {
      setFace(happy)
    }
  }, [isLoading, respCount])

  return <div className='face-container'>{face}</div>
}

export default FaceContainer
