import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import PrettyPrice from './PrettyPrice'

const SpreadDiv = glamorous.div({
  textAlign: 'center',
  padding: '.3em 0',
  margin: '-20px 0',
  color: '#7E878C',
  borderWidth: '.5px 0',
  borderColor: '#7E878C',
  borderStyle: 'solid',
  fontWeight: 700,
  fontSize: '.8em',
  '.hide': { display: 'none' },
  ':hover': { cursor: 'pointer' }
})

const Spread = ({spread, label, format, ...props}) => (
  <SpreadDiv {...props}>
    <PrettyPrice price={spread} format={format} />
    &nbsp; - &nbsp;
    {label}
  </SpreadDiv>
)

Spread.propTypes = {
  spread: PropTypes.number,
  format: PropTypes.string,
  spreadText: PropTypes.string
}

Spread.defaultProps = {
  spread: 0,
  format: '0.00',
  spreadText: 'SPREAD'
}

export default Spread