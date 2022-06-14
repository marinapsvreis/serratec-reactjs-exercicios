import React from 'react'
import { BotaoChamada, FilhoChamada } from './style'

export const IndiretaFilho = props => {
  return (
    <FilhoChamada>
      <p>Filho chamada:</p>
      <BotaoChamada onClick={() => props.funcaoInformacao('Carlos', '72', true)}>
        Enviar informações
      </BotaoChamada>
    </FilhoChamada>
  )
}
