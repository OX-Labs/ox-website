import { useState, useEffect } from "react";
import { Input, Icon, Drawer, Button } from "antd";
// import mockTokenList from '@/constants/mockTokenList.json'
import AcyCoinItem from "@/components/AcyCoinItem";
import AcyTabs from '@/components/AcyTabs';

import styles from "./styles.less";

const { AcyTabPane } = AcyTabs;

const mockTokenList = [
  {
    name: "Bitcoin",
    address: "0xb4e6cca0b5c518dbedac874c242fbcd6e0400eb4",
    symbol: "BTC",
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
  },
  {
    name: "Ethereum",
    address: "0x072710dcedce97327f6586d284a1857b1b69bba2",
    symbol: "ETH",
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
  },
]

const TokenSelectorDrawer = ({ chainId, onCancel, visible, onCoinClick, coinList, placement = 'right', setFavTokens }) => {

  const tokenlist = coinList ? coinList : mockTokenList

  useEffect(() => {
    setInitTokenList(tokenlist)
  }, [tokenlist])

  const [hasMore, setHasMore] = useState(true);
  const [pageIdx, setPageIdx] = useState(1);
  const [initTokenList, setInitTokenList] = useState(tokenlist);
  const [tokenSearchInput, setTokenSearchInput] = useState('');
  const [favTokenList, setFavTokenList] = useState([]);
  const [tokenBalanceDict, setTokenBalanceDict] = useState({});
  const [renderTokenList, setRenderTokenList] = useState(initTokenList?.slice(0, 20) || []);


  useEffect(() => {
    if (!tokenlist) return
    setInitTokenList(tokenlist);
    setTokenSearchInput('');
    setFavTokenList([]);
    setTokenBalanceDict({});
    //read the fav tokens code in storage
    var favTokens = JSON.parse(localStorage.getItem('token'));
    //set to fav token
    if (favTokens != null) {
      setFavTokenList(
        initTokenList?.filter(token => favTokens.includes(token.address)) || []
      );
    }
  }, [chainId]);

  useEffect(() => {
    setRenderTokenList(initTokenList?.slice(0, 20))
  }, [initTokenList])

  const onTokenSearchChange = e => {
    setPageIdx(1)
    setTokenSearchInput(e.target.value);
    let filterTokenList = tokenlist.filter(token => token.symbol.toUpperCase().includes(e.target.value.toUpperCase()) || token.name.toUpperCase().includes(e.target.value.toUpperCase()))
    setInitTokenList(filterTokenList)
    if (filterTokenList.length < 20) {
      setHasMore(false)
    } else {
      setHasMore(true)
      filterTokenList = filterTokenList.slice(0, 20)
    }
    setRenderTokenList(filterTokenList)
  };

  const loadMore = () => {
    if (pageIdx * 20 >= initTokenList?.length) {
      setHasMore(false);
      return;
    }
    setPageIdx(pageIdx + 1);
    setRenderTokenList(initTokenList?.slice(0, (pageIdx + 1) * 20));
  }

  const setTokenAsFav = token => {
    setFavTokenList(prevState => {
      const prevFavTokenList = [...prevState];
      if (localStorage.getItem('token')?.includes(token.address)) {
        var tokens = prevFavTokenList.filter(value => value.address != token.address);
        localStorage.setItem('token', JSON.stringify(tokens.map(e => e.address)));
        localStorage.setItem('tokens_symbol', JSON.stringify(tokens.map(e => e.symbol)));
        if (setFavTokens) setFavTokens()
        return tokens
      }
      prevFavTokenList.push(token);
      localStorage.setItem('token', JSON.stringify(prevFavTokenList.map(e => e.address)));
      localStorage.setItem('tokens_symbol', JSON.stringify(prevFavTokenList.map(e => e.symbol)));
      if (setFavTokens) setFavTokens()
      return prevFavTokenList;
    });
  };

  return (
    <Drawer
      title="Select a Token"
      placement={placement}
      className={styles.drawer}
      onClose={onCancel}
      visible={visible}
      width={400}
    >
      <div className={styles.tokenselector}>
        <div className={styles.search}>
          <Input
            size="large"
            style={{
              backgroundColor: '#0e1118',
              border: '1px solid #333333',
              marginBottom: 20,
            }}
            placeholder="Enter the token symbol or address"
            value={tokenSearchInput}
            onChange={onTokenSearchChange}
            prefix={<Icon type="search" />}
          />
        </div>

        <div className={styles.coinList}>
          <AcyTabs>
            <AcyTabPane tab="All" key="1">
              {renderTokenList?.length ? renderTokenList.map((token, index) => {
                return (
                  <AcyCoinItem
                    hideBalance={true}
                    data={token}
                    key={index}
                    customIcon={false}
                    clickCallback={() => setTokenAsFav(token)}
                    selectToken={(item) => {
                      onCoinClick(token)
                    }}
                    isFav={favTokenList.includes(token)}
                    constBal={token.symbol in tokenBalanceDict ? tokenBalanceDict[token.symbol] : null}
                  />
                );
              }) : null}
              <div className={styles.buttonContainer}>
                {hasMore ?
                  <Button
                    type="primary"
                    className={styles.buttonCenter}
                    onClick={loadMore}>Load More</Button>
                  : <div className={styles.textCenter} >No more result</div>}
              </div>

            </AcyTabPane>

            <AcyTabPane
              tab={<span><Icon type="star" theme="filled" />Favorite</span>}
              key="2">
              {favTokenList.length ? favTokenList.map((supToken, index) => (
                <AcyCoinItem
                  data={supToken}
                  key={index}
                  selectToken={(item) => {
                    onCoinClick(token)
                  }}
                  customIcon={false}
                  index={index}
                  clickCallback={() => setTokenAsFav(supToken)}
                  isFav={favTokenList.includes(supToken)}
                />
              ))
                : <div className={styles.textCenter} >No matching result</div>}
            </AcyTabPane>
          </AcyTabs>
        </div>
      </div>
    </Drawer>
  )
}

export default TokenSelectorDrawer;