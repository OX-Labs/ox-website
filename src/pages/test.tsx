import React from 'react';
import { Select, Table, Slider, Checkbox, Button, Switch } from 'antd';
import _ from 'lodash';
import RGL, { WidthProvider } from 'react-grid-layout';
import KCharts from '@/components/KCharts';
import OxTabs from '@/components/OxTabs';
import OxTabs2 from '@/components/OxTabs copy';
import OxBigInput from '@/components/OxBigInput';
import OxTaximeter from '@/components/OxTaximeter';
import OxTradingBot from '@/components/OxTradingBot';
import OxDragWrap from '@/components/OxDragWrap';
import OxDoubleInput from '@/components/OxDoubleInput';
import OxInfo from '@/components/OxInfo';
const { Option } = Select;
const ReactGridLayout = WidthProvider(RGL);

export default class BoundedLayout extends React.PureComponent {
  static defaultProps = {
    className: 'layout',
    rowHeight: 30,
    onLayoutChange: function () {},
    cols: 12,
  };

  constructor(props) {
    super(props);
    const layout = this.generateLayout();
    this.state = { layout };
  }
  onPutItem = (item) => {
    // this.setState(prevState => {
    //   let layout=prevState.layout;
    //   layout.splice(item, 1);
    //   return {
    //     layout:layout
    //   };
    // });
  };
  generateDOM() {
    return _.map(_.range(this.state.layout.length), (i) => {
      return (
        <div key={i} style={{ overflow: 'hidden', position: 'relative' }}>
          <div style={{ height: '80%' }}>
            {i < 3 && (
              <>
                <OxDragWrap>
                  <div
                    className="hide-button"
                    onClick={this.onPutItem.bind(this, i)}
                  >
                    &times;
                  </div>
                </OxDragWrap>
                <KCharts />
              </>
            )}
            {i == 3 && (
              <>
                <OxDragWrap>
                  <OxTabs>
                    <div tab="BUY" key="1">
                      <div style={{ padding: '16px' }}>
                        <OxTaximeter title="Available" token="0 USDT" />
                        <OxBigInput title="Price" token="USDT" />
                        <OxBigInput title="Amount" token="BTC" />
                        <OxTaximeter title="Volume" token="-- USDT" />
                        <Slider
                          marks={{
                            1: '1x',
                            2: '2x',
                            3: '3x',
                            4: '4x',
                            5: '5x',
                          }}
                          step={0.1}
                          min={1}
                          max={5}
                        />
                        <Switch /> &nbsp;&nbsp;TP/SL
                        <OxDoubleInput />
                        <p>
                          <Button
                            style={{ width: '100%', margin: '15px auto' }}
                            type="primary"
                          >
                            Login
                          </Button>
                        </p>
                        <OxInfo title="Assets">
                          <OxTaximeter title="USDTAvailable:" token="0 USDT" />
                          <OxTaximeter title="BTCAvailable:" token="0 BTC" />
                        </OxInfo>
                        <OxInfo title="Currency Introduction">
                          <p>Bitcoin</p>
                          <OxTaximeter
                            title="Release Tiem:"
                            token="2008-10-31"
                          />
                          <OxTaximeter
                            title="Release Amount:"
                            token="21,000,000 BTC"
                          />
                          <OxTaximeter
                            title="In Circulation:"
                            token="18,567,718 BTC"
                          />
                          <OxTaximeter
                            title="Link:"
                            token="https://bitcoin.org/en/"
                          />
                          {/* <OxTaximeter title="Bitcoin was the first cryptocurrency to successfully record transactions on a secure, decentralized blockchain-based network. Invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto, and started in 2009 when its implementation was released as open-source software. Nakamoto set a monetary policy based on artificial scarcity at bitcoin's inception that the total number of bitcoins could never exceed 21 million. Bitcoin is the largest cryptocurrency measured by market capitalization and amount of data stored on its blockchain. " /> */}
                        </OxInfo>
                      </div>
                    </div>
                    <div tab="SELL" key="2">
                      <div style={{ padding: '16px' }}>
                        <OxTaximeter title="Available" token="0 USDT" />
                        <OxBigInput title="Price" token="USDT" />
                        <OxBigInput title="Amount" token="BTC" />
                        <OxTaximeter title="Volume" token="-- USDT" />
                        <Slider
                          marks={{
                            1: '1x',
                            2: '2x',
                            3: '3x',
                            4: '4x',
                            5: '5x',
                          }}
                          step={0.1}
                          min={1}
                          max={5}
                        />
                        <Switch /> &nbsp;&nbsp;TP/SL
                        <OxDoubleInput />
                        <p>
                          <Button
                            style={{ width: '100%', margin: '15px auto' }}
                            type="primary"
                          >
                            Login
                          </Button>
                        </p>
                        <OxInfo title="Assets">
                          <OxTaximeter title="USDTAvailable:" token="0 USDT" />
                          <OxTaximeter title="BTCAvailable:" token="0 BTC" />
                        </OxInfo>
                        <OxInfo title="Currency Introduction">
                          <p>Bitcoin</p>
                          <OxTaximeter
                            title="Release Tiem:"
                            token="2008-10-31"
                          />
                          <OxTaximeter
                            title="Release Amount:"
                            token="21,000,000 BTC"
                          />
                          <OxTaximeter
                            title="In Circulation:"
                            token="18,567,718 BTC"
                          />
                          <OxTaximeter
                            title="Link:"
                            token="https://bitcoin.org/en/"
                          />
                          {/* <OxTaximeter title="Bitcoin was the first cryptocurrency to successfully record transactions on a secure, decentralized blockchain-based network. Invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto, and started in 2009 when its implementation was released as open-source software. Nakamoto set a monetary policy based on artificial scarcity at bitcoin's inception that the total number of bitcoins could never exceed 21 million. Bitcoin is the largest cryptocurrency measured by market capitalization and amount of data stored on its blockchain. " /> */}
                        </OxInfo>
                      </div>
                    </div>
                    <div tab="ADVANCED" key="3">
                      bbb
                    </div>
                  </OxTabs>
                  <div
                    className="hide-button"
                    onClick={this.onPutItem.bind(this, i)}
                  >
                    &times;
                  </div>
                </OxDragWrap>
              </>
            )}
            {i == 4 && (
              <>
                <OxDragWrap>
                  <div
                    className="hide-button"
                    onClick={this.onPutItem.bind(this, i)}
                  >
                    &times;
                  </div>
                </OxDragWrap>
                <OxTradingBot>
                  <OxTradingBot.Item
                    title="Grid Trading"
                    desc="7/24H auto buy low and sell high"
                  />
                  <OxTradingBot.Item
                    title="Grid Trading"
                    desc="7/24H auto buy low and sell high"
                  />
                  <OxTradingBot.Item
                    title="Grid Trading"
                    desc="7/24H auto buy low and sell high"
                  />
                  <OxTradingBot.Item
                    title="Grid Trading"
                    desc="7/24H auto buy low and sell high"
                  />
                  <OxTradingBot.Item
                    title="Grid Trading"
                    desc="7/24H auto buy low and sell high"
                  />
                  <OxTradingBot.Item
                    title="Grid Trading"
                    desc="7/24H auto buy low and sell high"
                  />
                  <OxTradingBot.Item
                    title="Grid Trading"
                    desc="7/24H auto buy low and sell high"
                  />
                  <OxTradingBot.Item
                    title="Grid Trading"
                    desc="7/24H auto buy low and sell high"
                  />
                  <OxTradingBot.Item
                    title="Grid Trading"
                    desc="7/24H auto buy low and sell high"
                  />
                </OxTradingBot>
              </>
            )}
            {i == 5 && (
              <>
                <OxDragWrap>
                  <div
                    className="hide-button"
                    onClick={this.onPutItem.bind(this, i)}
                  >
                    &times;
                  </div>
                  <OxTabs2 />
                </OxDragWrap>
              </>
            )}
          </div>
        </div>
      );
    });
  }

  generateLayout() {
    const p = this.props;
    // let ly= _.map(new Array(p.items), function (item, i) {
    //   const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
    //   return {
    //     x:2,
    //     y: 2,
    //     w: 2,
    //     h: 3,
    //     i: i.toString()
    //   };
    // });
    // ;
    let ly = [
      { x: 0, y: 0, w: 2, h: 14, i: '0' },
      { x: 2, y: 0, w: 2, h: 14, i: '1' },
      { x: 4, y: 0, w: 2, h: 14, i: '2' },
      { x: 6, y: 0, w: 2, h: 20, i: '3' },
      { x: 0, y: 2, w: 6, h: 6, i: '5' },
      { x: 8, y: 0, w: 2, h: 20, i: '4' },
    ];
    return ly;
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {
    return (
      <ReactGridLayout
        layout={this.state.layout}
        onLayoutChange={this.onLayoutChange}
        isBounded={true}
        draggableHandle=".oxdrag"
        // items={length}
        {...this.props}
      >
        {this.generateDOM()}
      </ReactGridLayout>
    );
  }
}
