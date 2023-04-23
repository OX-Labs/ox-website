import React, { useState, useEffect } from 'react';
import styles from './index.less';
import classname from 'classnames';
import { getTokenPrice, useChainId } from '@/utils';

const CurrencyCard = ({
  title,
  logoURI,
  coin,
  onChoseToken,
  onChangeToken,
  amountChanged,
  token,
  isLocked,
  inputColor,
  onClickTitle,
  ...rest
}) => {
  const { chainId } = useChainId();
  const [light, setLight] = useState(false);
  const [tokenPrice, setTokenPrice] = useState(0);
  const [tokenDisplayAmount, setTokenDisplayAmount] = useState(0);
  const onChange = e => {
    console.log("A", e.target.value);
    const check = {
      coinNum: /^[0-9]*[.,]?[0-9]*$/,
    }.coinNum.test(e.target.value);
    if (check) {
      onChangeToken && onChangeToken(e.target.value);
      setTokenDisplayAmount(e.target.value);
    }
    console.log("B", e.target.value)
  };
  useEffect(() => {
    setTokenDisplayAmount(token)
  }, [token])

  const onBlur = () => {
    setLight(false);
  };
  const onFocus = () => {
    setLight(true);
    inputRef.current.focus();
  };

  const [usdValue, setUsdValue] = useState(null);
  // get token price from backend
  useEffect(async () => {
    const _tokenPrice = await getTokenPrice(coin.address, chainId)
    setTokenPrice(_tokenPrice)
  }, [coin])
  // calculate usd value when user input token amount
  useEffect(async () => {
    if (tokenDisplayAmount == 0)
      setUsdValue(0);
    else if (!tokenDisplayAmount)
      setUsdValue(null);
    const tokenAmountUSD = tokenPrice * tokenDisplayAmount;
    setUsdValue(tokenAmountUSD.toFixed(2));
    console.log("UsdValue", usdValue)
  }, [coin, tokenDisplayAmount])

  const inputRef = React.createRef();
  return (
    <div
      {...rest}
      className={styles.acycuarrencycard}
      tabindex="-1"
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <div className={`${styles.cua_body} ${light && styles.cua_light}`}>
        <div className={styles.cua_group}>
          <input
            ref={inputRef}
            className={styles.input}
            style={{ color: inputColor }}
            placeholder="0.0"
            bordered={false}
            value={tokenDisplayAmount}
            onChange={onChange}
          />
          <button className={styles.switchcoin} onClick={onChoseToken} disabled={isLocked}>
            <span className={styles.wrap}>
              <div className={styles.coin}>
                {logoURI && <img src={logoURI} style={{ width: '24px', marginRight: '0.5rem' }} />}
                <span style={{ margin: '0px 0.25rem' }}>{coin.symbol}</span>
              </div>
              {!isLocked && (
                <svg viewBox="0 0 1024 1024" width={10}>
                  <path d="M493.4 1008L122 576.98a24.58 24.58 0 0 1 18.6-40.62h742.84a24.58 24.58 0 0 1 18.6 40.62L530.6 1008a24.54 24.54 0 0 1-37.2 0zM530.6 16.1L902 447.02a24.58 24.58 0 0 1-18.6 40.62H140.56A24.58 24.58 0 0 1 122 447.02L493.4 16.1a24.54 24.54 0 0 1 37.2 0z" fill="#B5B5B6" ></path>
                </svg>
              )}
            </span>
          </button>
        </div>
        <div className={styles.cua_bottomContainer}>
          <div className={styles.cua_blanace}
            onClick={onClickTitle}
          >{title || ''}</div>
          <div>{rest.showBalance && !isNaN(usdValue) ? `$ ${usdValue}` : null}</div>
        </div>
      </div>
    </div>
  );
};
export default CurrencyCard;
