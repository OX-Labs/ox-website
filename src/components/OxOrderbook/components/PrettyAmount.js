import React from 'react'
import glamorous from 'glamorous'

import PrettySize from './PrettySize'

const MedContrast = glamorous.span({
  color: '#7E878C'
})

const PrettyAmount = ({amount, format, side}) =>
  amount
  ? <PrettySize size={amount} format={format} side={side} />
  : <MedContrast>-</MedContrast>

export default PrettyAmount