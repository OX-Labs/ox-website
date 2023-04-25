import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

const FullWidthTable = glamorous.table({
  width: '100%',
  fontSize: '.8em',
  color: '#7E878C',
  borderBottom: `.5px solid #7E878C`
})

const TradingUITableHead = ({children, ...props}) => (
  <FullWidthTable {...props}>
    <thead>
      <tr>
        {children}
      </tr>
    </thead>
  </FullWidthTable>
)

TradingUITableHead.propTypes = {
  children: PropTypes.node.isRequired
}

export default TradingUITableHead