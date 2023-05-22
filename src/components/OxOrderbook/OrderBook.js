import R from 'ramda'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// Defaults
import * as util from './defaults/util'
import * as getters from './defaults/getters'

// Components
import TradingUIParent from './components/TradingUIParent'
import TradingUIHeader from './components/TradingUIHeader'
import TradingUIContentWrapper from './components/TradingUIContentWrapper'
import TradingUIStickyContent from './components/TradingUIStickyContent'
import TradingUITableHead from './components/TradingUITableHead'
import TradingUITableHeading from './components/TradingUITableHeading'
import TradingUIScrollingContent from './components/TradingUIScrollingContent'
import TradingUIOrderTable from './components/TradingUIOrderTable'
import TradingUIOrder from './components/TradingUIOrder'
import PrettySize from './components/PrettySize'
import PrettyPrice from './components/PrettyPrice'
import PrettyAmount from './components/PrettyAmount'
import Spread from './components/Spread'
import Spinner from './components/Spinner'
import OxTabs from '@/components/OxTabs'

// Normalize Array to have first and last methods
Array.prototype.first = function () { return this[0] } // eslint-disable-line no-extend-native
Array.prototype.last = function () { return this[this.length - 1] } // eslint-disable-line no-extend-native

const unsafePropNames = [
  'asks', 'bids', 'showSizeBar',
  'sizeLabel', 'priceLabel', 'amountLabel', 'onClickOrder',
  'sizeBarMaxWidth', 'sizeBarMaxSize', 'sizeBarUnitSize',
  'getSize', 'getPrice', 'getAmount',
  'sizeFormat', 'priceFormat', 'amountFormat', 'spreadFormat',
  'renderSize', 'renderPrice', 'renderAmount'
]

class OrderBook extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = { hasOrders: false, hasCentered: false }
    this.scroller = null
    this.centerSpread = this.centerSpread.bind(this)
    this.centerSpreadOnResize = this.centerSpreadOnResize.bind(this)
    window.addEventListener('resize', this.centerSpreadOnResize)
  }

  componentWillUpdate(nextProps, nextState) {
    if (!nextState.hasOrders && util.hasReceivedOrderBook(nextProps)) {
      return this.setState({ hasOrders: true })
    }
    if (this.scroller && nextState.hasOrders && !nextState.hasCentered) {
      return this.setState({ hasCentered: true }, this.centerSpread)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.centerSpreadOnResize)
  }

  centerSpread() {
    this.scroller.scrollTop = (this.scroller.scrollHeight - this.scroller.clientHeight) / 2
  }

  centerSpreadOnResize() {
    if (!this.state.hasCentered) {
      return this.centerSpread()
    }
  }

  render() {
    const {
      asks, bids, showSizeBar,
      sizeLabel, priceLabel, amountLabel, onClickOrder,
      sizeBarMaxWidth, sizeBarMaxSize, sizeBarUnitSize,
      getSize, getPrice, getAmount,
      sizeFormat, priceFormat, amountFormat, spreadFormat,
      renderSize, renderPrice, renderAmount
    } = this.props
    const safeProps = R.omit(unsafePropNames, this.props)
    const visibleAsks = asks.reverse()
    const visibleBids = bids
    const spread = this.state.hasOrders ? getPrice(visibleAsks.last()) - getPrice(visibleBids.first()) : undefined
    const dataConfigs = [
      { propName: 'price', format: priceFormat, getter: getPrice, renderer: renderPrice },
      { propName: 'amount', format: amountFormat, getter: getAmount, renderer: renderAmount },
      { propName: 'size', format: sizeFormat, getter: getSize, renderer: renderSize },
    ]
    return (
      <TradingUIParent {...safeProps}>
        {/* UI HEADER */}
        <OxTabs>
          <div tab="Order Book" key="1">
            <TradingUIContentWrapper>
              <TradingUIStickyContent>
                {/* TABLE COLUMN HEADERS */}
                <TradingUITableHead>
                  {/* {showSizeBar ? <TradingUITableHeading style={{width: sizeBarMaxWidth}} /> : null} */}
                  <TradingUITableHeading>{priceLabel}</TradingUITableHeading>
                  <TradingUITableHeading>{amountLabel}</TradingUITableHeading>
                  <TradingUITableHeading>{sizeLabel}</TradingUITableHeading>
                </TradingUITableHead>
              </TradingUIStickyContent>
              <TradingUIScrollingContent scrollerRef={c => { this.scroller = ReactDOM.findDOMNode(c) }} >
                {/* ASKS TABLE */}
                <TradingUIOrderTable
                  // showSizeBar={showSizeBar}
                  headerLabels={[priceLabel, amountLabel, sizeLabel]}
                >
                  {visibleAsks.map(order =>
                    <TradingUIOrder
                      key={getPrice(order)}
                      side='sell'
                      order={order}
                      size={getSize(order)}
                      // onClick={onClickOrder}
                      dataConfigs={dataConfigs}
                      showSizeBar={showSizeBar}
                      sizeBarMaxSize={sizeBarMaxSize}
                      sizeBarUnitSize={sizeBarUnitSize}
                      sizeBarMaxWidth={sizeBarMaxWidth}
                    />
                  )}
                </TradingUIOrderTable>
                {/* SPREAD MARKER */}
                <Spread
                  spread={spread}
                  className={!this.state.hasOrders ? 'hide' : ''}
                  label='USD SPREAD'
                  format={spreadFormat}
                  onClick={this.centerSpread}
                />
                {/* BIDS TABLE */}
                <TradingUIOrderTable
                  style={{ marginBottom: '6em' }}
                  showSizeBar={showSizeBar}
                  headerLabels={[priceLabel, amountLabel, sizeLabel]}
                >
                  {visibleBids.map(order =>
                    <TradingUIOrder
                      key={getPrice(order)}
                      side='buy'
                      order={order}
                      size={getSize(order)}
                      onClick={onClickOrder}
                      dataConfigs={dataConfigs}
                      showSizeBar={showSizeBar}
                      sizeBarMaxSize={sizeBarMaxSize}
                      sizeBarUnitSize={sizeBarUnitSize}
                      sizeBarMaxWidth={sizeBarMaxWidth}
                    />
                  )}
                </TradingUIOrderTable>
                {/* LOADING SPINNER */}
                <Spinner hide={this.state.hasOrders} />
              </TradingUIScrollingContent>
            </TradingUIContentWrapper>
          </div>
          <div tab="Last Trades" key="2">
            <TradingUIContentWrapper>
              <TradingUIStickyContent>
                {/* TABLE COLUMN HEADERS */}
                <TradingUITableHead>
                  {/* {showSizeBar ? <TradingUITableHeading style={{width: sizeBarMaxWidth}} /> : null} */}
                  <TradingUITableHeading>{priceLabel}</TradingUITableHeading>
                  <TradingUITableHeading>{amountLabel}</TradingUITableHeading>
                  <TradingUITableHeading>{sizeLabel}</TradingUITableHeading>
                </TradingUITableHead>
              </TradingUIStickyContent>
              <TradingUIScrollingContent scrollerRef={c => { this.scroller = ReactDOM.findDOMNode(c) }} >
                {/* ASKS TABLE */}
                <TradingUIOrderTable
                  // showSizeBar={showSizeBar}
                  headerLabels={[priceLabel, amountLabel, sizeLabel]}
                >
                  {visibleAsks.map(order =>
                    <TradingUIOrder
                      key={getPrice(order)}
                      side='sell'
                      order={order}
                      size={getSize(order)}
                      // onClick={onClickOrder}
                      dataConfigs={dataConfigs}
                      showSizeBar={showSizeBar}
                      sizeBarMaxSize={sizeBarMaxSize}
                      sizeBarUnitSize={sizeBarUnitSize}
                      sizeBarMaxWidth={sizeBarMaxWidth}
                    />
                  )}
                </TradingUIOrderTable>
                {/* SPREAD MARKER */}
                <Spread
                  spread={spread}
                  className={!this.state.hasOrders ? 'hide' : ''}
                  label='USD SPREAD'
                  format={spreadFormat}
                  onClick={this.centerSpread}
                />
                {/* BIDS TABLE */}
                <TradingUIOrderTable
                  style={{ marginBottom: '6em' }}
                  showSizeBar={showSizeBar}
                  headerLabels={[priceLabel, amountLabel, sizeLabel]}
                >
                  {visibleBids.map(order =>
                    <TradingUIOrder
                      key={getPrice(order)}
                      side='buy'
                      order={order}
                      size={getSize(order)}
                      onClick={onClickOrder}
                      dataConfigs={dataConfigs}
                      showSizeBar={showSizeBar}
                      sizeBarMaxSize={sizeBarMaxSize}
                      sizeBarUnitSize={sizeBarUnitSize}
                      sizeBarMaxWidth={sizeBarMaxWidth}
                    />
                  )}
                </TradingUIOrderTable>
                {/* LOADING SPINNER */}
                <Spinner hide={this.state.hasOrders} />
              </TradingUIScrollingContent>
            </TradingUIContentWrapper>
          </div>
        </OxTabs>
      </TradingUIParent>
    )
  }
}

OrderBook.propTypes = {
  asks: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  bids: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  sizeBarMaxWidth: PropTypes.number,
  sizeBarMaxSize: PropTypes.number,
  sizeBarUnitSize: PropTypes.number,
  showSizeBar: PropTypes.bool,
  sizeLabel: PropTypes.string,
  priceLabel: PropTypes.string,
  amountLabel: PropTypes.string,
  getSize: PropTypes.func,
  getPrice: PropTypes.func,
  getAmount: PropTypes.func,
  sizeFormat: PropTypes.string,
  priceFormat: PropTypes.string,
  amountFormat: PropTypes.string,
  spreadFormat: PropTypes.string,
  renderSize: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  renderPrice: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  renderAmount: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  onClickOrder: PropTypes.func
}

OrderBook.defaultProps = {
  asks: [],
  bids: [],
  showSizeBar: true,
  sizeBarMaxWidth: 50,
  sizeBarMaxSize: 1000,
  sizeBarUnitSize: 50,
  sizeLabel: 'Total (BTC)',
  priceLabel: 'Price (USDT)',
  amountLabel: 'Amount (BTC)',
  getSize: getters.getSize,
  getPrice: getters.getPrice,
  getAmount: getters.getAmount,
  sizeFormat: '0.000',
  priceFormat: '00.0',
  amountFormat: '0.000',
  spreadFormat: '0.00',
  renderSize: PrettySize,
  renderPrice: PrettyPrice,
  renderAmount: PrettyAmount
}

export default OrderBook