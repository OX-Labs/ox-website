import React from 'react'
import PropTypes from 'prop-types'
import Numeral from 'numeral'
import glamorous from 'glamorous'

import {countTrailingZeroes} from '../defaults/util'

const LowContrast = glamorous.span({
  color: '#3B464E'
})

const MedContrast = glamorous.span({
  color: '#7E878C'
})

const HighContrast = glamorous.span({
  color: '#CED2D5'
})

const PrettySize = ({size = 0, format, side}) => {
  const formattedSize = Numeral(size).format(format)
  if (size === 0) return <LowContrast>{formattedSize}</LowContrast>
  // count trailing zeroes
  const numTrailingZeroes = countTrailingZeroes(formattedSize)
  // get digit arrays before and after decimal
  const [
    digitsBeforeDecimal,
    digitsAfterDecimal = []
  ] = formattedSize.split('.').map(str => str.split(''))
  // splice trailing zeroes into seperate array
  const trailingZeroes = digitsAfterDecimal.splice(
    digitsAfterDecimal.length - numTrailingZeroes
  )
  // return colorized version of size
  return [
    <MedContrast key='dbd'>{digitsBeforeDecimal}.</MedContrast>,
    <HighContrast key='dad'>{digitsAfterDecimal}</HighContrast>,
    <LowContrast key='tz'>{trailingZeroes}</LowContrast>
  ]
}

PrettySize.propTypes = {
  size: PropTypes.number,
  format: PropTypes.string,
  side: PropTypes.oneOf(['buy', 'sell'])
}

export default PrettySize