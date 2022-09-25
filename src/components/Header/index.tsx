import React from 'react'

import * as Style from './styles'
import logoImg from '../../assets/logo.svg'
import { ButtonV1 } from '../ButtonV1'

export const Header = () => {
  return (
    <Style.Container>
      <Style.Content>
        <img src={logoImg} alt="dt money" />
        <ButtonV1 content="Nova transação" />
      </Style.Content>
    </Style.Container>
  )
}
