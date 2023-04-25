import PropTypes from 'prop-types'
import glamorous from 'glamorous'

const TradingUIParent = glamorous.div({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  color: '#CED2D5',
})

TradingUIParent.propTypes = {
  children: PropTypes.node.isRequired
}

export default TradingUIParent
