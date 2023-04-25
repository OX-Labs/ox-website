import PropTypes from 'prop-types'
import glamorous from 'glamorous'

const TradingUIStickyContent = glamorous.div({
  top: 0,
  left: 0,
  zIndex: 1,
  width: '100%',
  position: 'absolute',
})

TradingUIStickyContent.propTypes = {
  children: PropTypes.node.isRequired
}

export default TradingUIStickyContent