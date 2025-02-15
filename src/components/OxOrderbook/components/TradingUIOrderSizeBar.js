import glamorous from 'glamorous'

const TradingUIOrderSizeBar = glamorous.td({
  padding: 0,
  boxSizing: 'border-box'
}, ({showSizeBar, side, size, sizeBarMaxWidth, sizeBarMaxSize, sizeBarUnitSize}) => {
  const totalUnits = sizeBarMaxSize / sizeBarUnitSize
  const numUnits = Math.floor(size / sizeBarUnitSize)
  const percentSize = numUnits >= totalUnits ? 1 : numUnits / totalUnits
  const sizeBarWidth = percentSize * sizeBarMaxWidth
  return {
    width: '50px',
    borderColor: side === 'buy' ? '#437944' : '#7F4332',
    borderStyle: showSizeBar ? 'solid' : 'none',
    borderWidth: `0 0 0 ${1 + sizeBarWidth}px`
  }
})

export default TradingUIOrderSizeBar