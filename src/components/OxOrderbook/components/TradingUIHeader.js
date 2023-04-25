import PropTypes from 'prop-types'
import glamorous from 'glamorous'

const TradingUIHeader = glamorous.header({
  fontSize: '1.5rem',
  padding: '.8rem',
  textTransform: 'uppercase',
  position: 'relative',
  fontWeight: 'bold'
})

TradingUIHeader.propTypes = {
  children: PropTypes.node.isRequired
}

export default TradingUIHeader
