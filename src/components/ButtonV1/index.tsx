import React from 'react'

import * as Style from './styles'

interface IProps {
  content: string
}

export const ButtonV1 = (props: IProps) => {
  const { content } = props

  return <Style.Container type="button">{content}</Style.Container>
}
