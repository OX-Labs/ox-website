import React, { useEffect, useState } from 'react'
import { Button, DatePicker, Form, Input, Select, Radio, Steps } from 'antd'
import dayjs from 'dayjs'
import styles from './styles.less'

const ApproveToken = ({ setCurrent, setCreateToken }) => {
  const [approveToken, setApproveToken] = useState('')

  const onClickPrimary = () => {
    setCurrent(1)
  }

  return (
    <div style={{ background: '#0e1118', borderRadius: '1rem', padding: '3rem 10rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: -20 }}>
        <Button
          type='primary' style={{ borderRadius: 10, height: 35, width: 80, background: 'transparent', border: '1px solid #333333', color: '#333333' }}
          disabled={true}
          onClick={() => { }}
        >
          Back
        </Button>
        <Button
          type='primary' style={{ borderRadius: 10, height: 35, width: 80 }}
          onClick={() => { setCurrent(1) }}
        >
          Next
        </Button>
      </div>
      <Form style={{ marginTop: 10 }}>
        <div style={{ fontSize: '1.5rem', color: 'white', textAlign: 'center', fontWeight: 'bold', marginBottom: 20 }}>Approve Token</div>
        <Form.Item>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 16, marginBottom: 5, color: '#b6b6b5' }}>Approve Token</div>
            <Input
              value={approveToken}
              onChange={(e) => { setApproveToken(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </div>
        </Form.Item>
      </Form>
      <Button className={styles.confirmButton} onClick={() => { onClickPrimary() }}>
        Approve
      </Button>
      <div
        style={{ textAlign: 'center', cursor: 'pointer', marginTop: 10, marginBottom: 20 }}
        onClick={() => { setCreateToken(true) }}
      >
        Create Token
      </div>
    </div>
  )
}

const CreateToken = ({ setCurrent, setCreateToken }) => {
  const [tokenType, setTokenType] = useState('Simple Token')
  const [tokenName, setTokenName] = useState('')
  const [tokenSymbol, setTokenSymbol] = useState('')
  const [tokenDecimals, setTokenDecimals] = useState('')
  const [tokenSupply, setTokenSupply] = useState('')
  const [antiBot, setAntiBot] = useState(false)

  const onClickPrimary = () => {
    setCurrent(1)
    setCreateToken(false)
  }

  return (
    <div style={{ background: '#0e1118', borderRadius: '1rem', padding: '3rem 10rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: -20 }}>
        <Button
          type='primary' style={{ borderRadius: 10, height: 35, width: 80 }}
          onClick={() => { setCreateToken(false) }}
        >
          Back
        </Button>
        <Button
          type='primary' style={{ borderRadius: 10, height: 35, width: 80 }}
          onClick={() => { setCurrent(1) }}
        >
          Next
        </Button>
      </div>
      <Form style={{ marginTop: 10, textAlign: 'left' }}>
        <div style={{ fontSize: '1.5rem', color: 'white', textAlign: 'center', fontWeight: 'bold', marginBottom: 20 }}>Create Token</div>
        <Form.Item>
          <div style={{ fontSize: 15, color: '#b6b6b5' }}>Token Type</div>
          <Select
            value={tokenType}
            onChange={e => { setTokenType(e) }}
            className={styles.mySelect}
            dropdownClassName={styles.dropDownMenu}
          >
            {['Simple Token', 'Standard Token', 'Reflection Token', 'Dividend Token', 'Ultimate Token'].map(e => (
              <Select.Option className={styles.optionItem} value={e}>
                {e}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <div style={{ display: 'flex' }}>
          <Form.Item style={{ width: '-webkit-fill-available', marginRight: 20 }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Token Name</div>
            <Input
              value={tokenName}
              onChange={(e) => { setTokenName(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item style={{ width: '-webkit-fill-available' }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Token Symbol</div>
            <Input
              value={tokenSymbol}
              onChange={(e) => { setTokenSymbol(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
        </div>
        <div style={{ display: 'flex' }}>
          <Form.Item style={{ width: '-webkit-fill-available', marginRight: 20 }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Token Decimals</div>
            <Input
              value={tokenDecimals}
              onChange={(e) => { setTokenDecimals(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item style={{ width: '-webkit-fill-available' }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Total Supply</div>
            <Input
              value={tokenSupply}
              onChange={(e) => { setTokenSupply(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
        </div>
        <Form.Item>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Implement Anti-Bot</div>
            <Radio.Group
              onChange={(e) => setAntiBot(e.target.value)}
              value={antiBot}
            >
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </div>
        </Form.Item>
      </Form>
      <Button className={styles.confirmButton} onClick={() => { onClickPrimary() }}>
        Create
      </Button>
      <div
        style={{ textAlign: 'center', cursor: 'pointer', marginTop: 10, marginBottom: 20 }}
        onClick={() => { onClickPrimary() }}
      >
        Skip
      </div>
    </div>
  )
}

const PresaleInformation = ({ setCurrent }) => {
  const [totalSale, setTotalSale] = useState('')
  const [fundRaisingToken, setFundRaisingToken] = useState('USDT')
  const [totalRaise, setTotalRaise] = useState('')
  const [presaleRate, setPresaleRate] = useState('')
  const [finalPrice, setFinalPrice] = useState('')
  const [dexListingRate, setDexListingRate] = useState('')
  const [dexLiquidity, setDexLiquidity] = useState('')
  const [liquidityLockup, setLiquidityLockup] = useState('')
  const [dexAddLiquidity, setDexAddLiquidity] = useState('OX EXCHANGE')
  const [minimumBuy, setMinimumBuy] = useState('')
  const [maximumBuy, setMaximumBuy] = useState('')
  const [addPresaleVesting, setAddPresaleVesting] = useState(false)
  const [addTokenLock, setAddTokenLock] = useState(false)
  const [tgePercent, setTgePercent] = useState('')
  const [cycle, setCycle] = useState('')
  const [cycleReleasePercent, setCycleReleasePercent] = useState('')

  const onClickPrimary = () => {
    setCurrent(2)
  }

  return (
    <div style={{ background: '#0e1118', borderRadius: '1rem', padding: '3rem 10rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: -20 }}>
        <Button
          type='primary' style={{ borderRadius: 10, height: 35, width: 80 }}
          onClick={() => { setCurrent(0) }}
        >
          Back
        </Button>
        <Button
          type='primary' style={{ borderRadius: 10, height: 35, width: 80 }}
          onClick={() => { setCurrent(2) }}
        >
          Next
        </Button>
      </div>
      <Form style={{ marginTop: 10, textAlign: 'left' }}>
        <div style={{ fontSize: '1.5rem', color: 'white', textAlign: 'center', fontWeight: 'bold', marginBottom: 20 }}>Presale Information</div>
        <div style={{ display: 'flex' }}>
          <Form.Item style={{ width: '-webkit-fill-available', marginRight: 20 }}>
            <div style={{ fontSize: 15, marginBottom: 10, color: '#b6b6b5' }}>Fund Rasing Token</div>
            <Radio.Group
              onChange={(e) => setFundRaisingToken(e.target.value)}
              value={fundRaisingToken}
            >
              <Radio value={'USDT'}>USDT</Radio>
              <Radio value={'USDC'}>USDC</Radio>
              <Radio value={'BNB'}>BNB</Radio>
              <Radio value={'ETH'}>ETH</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item style={{ width: '-webkit-fill-available' }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Total Raise</div>
            <Input
              value={totalRaise}
              onChange={(e) => { setTotalRaise(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
        </div>
        <div style={{ display: 'flex' }}>
          <Form.Item style={{ width: '-webkit-fill-available', marginRight: 20 }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Total Sale</div>
            <Input
              value={totalSale}
              onChange={(e) => { setTotalSale(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item style={{ width: '-webkit-fill-available' }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Initial Price</div>
            <Input
              value={presaleRate}
              onChange={(e) => { setPresaleRate(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
        </div>
        <div style={{ display: 'flex' }}>
        <Form.Item style={{ width: '-webkit-fill-available', marginRight: 20 }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Final Price</div>
            <Input
              value={finalPrice}
              onChange={(e) => { setFinalPrice(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item style={{ width: '-webkit-fill-available' }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Dex listing price</div>
            <Input
              value={dexListingRate}
              onChange={(e) => { setDexListingRate(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
        </div>
        <div style={{ display: 'flex' }}>
          <Form.Item style={{ width: '-webkit-fill-available', marginRight: 20 }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Dex Liquidity (%)</div>
            <Input
              value={dexLiquidity}
              onChange={(e) => { setDexLiquidity(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item style={{ width: '-webkit-fill-available' }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Liquidity Lockup (days)</div>
            <Input
              value={liquidityLockup}
              onChange={(e) => { setLiquidityLockup(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
        </div>
        <div style={{ display: 'flex' }}>
          <Form.Item style={{ width: '-webkit-fill-available', marginRight: 20 }}>
            <div style={{ fontSize: 15, color: '#b6b6b5' }}>Select what DEX will be used to add liquidity.</div>
            <Select
              value={dexAddLiquidity}
              onChange={e => { setDexAddLiquidity(e) }}
              className={styles.mySelect}
              dropdownClassName={styles.dropDownMenu}
            >
              {['OX EXCHANGE', 'Uniswap', 'Pancakeswap'].map(e => (
                <Select.Option className={styles.optionItem} value={e}>
                  {e}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item style={{ width: '-webkit-fill-available' }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Estimated Dex Listing Date (UTC)</div>
            <DatePicker
              format="YYYY-MM-DD HH:mm:ss"
              showTime={{
                defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
              }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333', width: '100%' }}
              popupClassName={styles.datepicker}
            />
          </Form.Item>
        </div>
        <div style={{ display: 'flex' }}>
          <Form.Item style={{ width: '-webkit-fill-available', marginRight: 20 }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Minimum Buy</div>
            <Input
              value={minimumBuy}
              onChange={(e) => { setMinimumBuy(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item style={{ width: '-webkit-fill-available' }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Maximum Buy</div>
            <Input
              value={maximumBuy}
              onChange={(e) => { setMaximumBuy(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
        </div>
        <div style={{ display: 'flex' }}>
          <Form.Item style={{ width: '-webkit-fill-available', marginRight: 20 }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Start Date (UTC)</div>
            <DatePicker
              format="YYYY-MM-DD HH:mm:ss"
              showTime={{
                defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
              }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333', width: '100%' }}
              popupClassName={styles.datepicker}
            />
          </Form.Item>
          <Form.Item style={{ width: '-webkit-fill-available' }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>End Date (UTC)</div>
            <DatePicker
              format="YYYY-MM-DD HH:mm:ss"
              showTime={{
                defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
              }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333', width: '100%' }}
              popupClassName={styles.datepicker}
            />
          </Form.Item>
        </div>
        <Form.Item>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Add Presale Vesting</div>
            <Radio.Group
              onChange={(e) => setAddPresaleVesting(e.target.value)}
              value={addPresaleVesting}
            >
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </div>
        </Form.Item>
        {addPresaleVesting &&
          <>
            <div style={{ display: 'flex' }}>
              <Form.Item style={{ width: '-webkit-fill-available', marginRight: 20 }}>
                <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>TGE Date (UTC)</div>
                <DatePicker
                  format="YYYY-MM-DD HH:mm:ss"
                  showTime={{
                    defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
                  }}
                  style={{ height: 40, background: 'transparent', border: '1px solid #333333', width: '100%' }}
                  popupClassName={styles.datepicker}
                />
              </Form.Item>
              <Form.Item style={{ width: '-webkit-fill-available' }}>
                <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>TGE Percent</div>
                <Input
                  value={tgePercent}
                  onChange={(e) => { setTgePercent(e.target.value) }}
                  style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
                />
              </Form.Item>
            </div>
            <div style={{ display: 'flex' }}>
              <Form.Item style={{ width: '-webkit-fill-available', marginRight: 20 }}>
                <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Cycle (days)</div>
                <Input
                  value={cycle}
                  onChange={(e) => { setCycle(e.target.value) }}
                  style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
                />
              </Form.Item>
              <Form.Item style={{ width: '-webkit-fill-available' }}>
                <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Cycle Release Percent</div>
                <Input
                  value={cycleReleasePercent}
                  onChange={(e) => { setCycleReleasePercent(e.target.value) }}
                  style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
                />
              </Form.Item>
            </div>
          </>
        }
        <Form.Item>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Add Token Lock</div>
            <Radio.Group
              onChange={(e) => setAddTokenLock(e.target.value)}
              value={addTokenLock}
            >
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </div>
        </Form.Item>
        {addTokenLock && <LockToken />}
      </Form>
      <Button className={styles.confirmButton} onClick={() => { onClickPrimary() }}>
        Next
      </Button>
    </div>
  )
}

const ProjectInformation = ({ setCurrent }) => {
  const [logoUrl, setLogoUrl] = useState('')
  const [banner, setBanner] = useState('')
  const [website, setWebsite] = useState('')
  const [telegram, setTelegram] = useState('')
  const [github, setGithub] = useState('')
  const [twitter, setTwitter] = useState('')
  const [discord, setDiscord] = useState('')
  const [youtube, setYoutube] = useState('')
  const [whitelistContest, setWhitelistContest] = useState('')
  const [description, setDescription] = useState('')
  const [selectTier, setSelectTier] = useState('GOLD')

  const onClickPrimary = () => {
    setCurrent(0)
  }

  return (
    <div style={{ background: '#0e1118', borderRadius: '1rem', padding: '3rem 10rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: -20 }}>
        <Button
          type='primary' style={{ borderRadius: 10, height: 35, width: 80 }}
          onClick={() => { setCurrent(1) }}
        >
          Back
        </Button>
        <Button
          type='primary' style={{ borderRadius: 10, height: 35, width: 80, background: 'transparent', border: '1px solid #333333', color: '#333333' }}
          disabled={true}
          onClick={() => { }}
        >
          Next
        </Button>
      </div>
      <Form style={{ marginTop: 10, textAlign: 'left' }}>
        <div style={{ fontSize: '1.5rem', color: 'white', textAlign: 'center', fontWeight: 'bold', marginBottom: 20 }}>Project Information</div>
        <div style={{ display: 'flex' }}>
          <Form.Item style={{ width: '-webkit-fill-available', marginRight: 20 }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Logo URL</div>
            <Input
              value={logoUrl}
              onChange={(e) => { setLogoUrl(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item style={{ width: '-webkit-fill-available' }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Banner</div>
            <Input
              value={banner}
              onChange={(e) => { setBanner(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
        </div>
        <div style={{ display: 'flex' }}>
          <Form.Item style={{ width: '-webkit-fill-available', marginRight: 20 }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Website</div>
            <Input
              value={website}
              onChange={(e) => { setWebsite(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item style={{ width: '-webkit-fill-available' }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Telegram</div>
            <Input
              value={telegram}
              onChange={(e) => { setTelegram(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
        </div>
        <div style={{ display: 'flex' }}>
          <Form.Item style={{ width: '-webkit-fill-available', marginRight: 20 }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Github</div>
            <Input
              value={github}
              onChange={(e) => { setGithub(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item style={{ width: '-webkit-fill-available' }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Twitter</div>
            <Input
              value={twitter}
              onChange={(e) => { setTwitter(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
        </div>
        <div style={{ display: 'flex' }}>
          <Form.Item style={{ width: '-webkit-fill-available', marginRight: 20 }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Discord</div>
            <Input
              value={discord}
              onChange={(e) => { setDiscord(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item style={{ width: '-webkit-fill-available' }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Youtube Presentation Video</div>
            <Input
              value={youtube}
              onChange={(e) => { setYoutube(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
        </div>
        <div style={{ display: 'flex' }}>
          <Form.Item style={{ width: '-webkit-fill-available', marginRight: 20 }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Whitelist</div>
            <Input
              value={whitelistContest}
              onChange={(e) => { setWhitelistContest(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item style={{ width: '-webkit-fill-available' }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Description</div>
            <Input
              value={description}
              onChange={(e) => { setDescription(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
        </div>
        <Form.Item>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Select Tier</div>
            <Radio.Group
              onChange={(e) => setSelectTier(e.target.value)}
              value={selectTier}
            >
              <Radio value={'COMMON'}>COMMON</Radio>
              <Radio value={'GOLD'}>GOLD</Radio>
            </Radio.Group>
          </div>
        </Form.Item>
      </Form>
      <Button className={styles.confirmButton} onClick={() => { onClickPrimary() }}>
        Submit
      </Button>
    </div>
  )
}

const LockToken = ({ }) => {

  const [tokenAddress, setTokenAddress] = useState('')
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [useVesting, setUseVesting] = useState(false)
  const [tgePercent, setTgePercent] = useState('')
  const [cycle, setCycle] = useState('')
  const [cycleReleasePercent, setCycleReleasePercent] = useState('')

  return (
    <Form style={{ marginTop: 10, textAlign: 'left' }}>
      <div style={{ fontSize: '1.5rem', color: 'white', textAlign: 'center', fontWeight: 'bold', marginBottom: 20 }}>Create Your Lock</div>
      <Form.Item>
        <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Token or LP Token Address</div>
        <Input
          value={tokenAddress}
          onChange={(e) => { setTokenAddress(e.target.value) }}
          style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
        />
      </Form.Item>
      <Form.Item>
        <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Title</div>
        <Input
          value={title}
          onChange={(e) => { setTitle(e.target.value) }}
          style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
        />
      </Form.Item>
      <Form.Item>
        <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Amount</div>
        <Input
          value={amount}
          onChange={(e) => { setAmount(e.target.value) }}
          style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
        />
      </Form.Item>
      <Form.Item>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Add Presale Vesting</div>
          <Radio.Group
            onChange={(e) => setUseVesting(e.target.value)}
            value={useVesting}
          >
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </div>
      </Form.Item>
      {
        useVesting
          ?
          <>
            <div style={{ display: 'flex' }}>
              <Form.Item style={{ width: '-webkit-fill-available', marginRight: 20 }}>
                <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>TGE Date (UTC)</div>
                <DatePicker
                  format="YYYY-MM-DD HH:mm:ss"
                  showTime={{
                    defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
                  }}
                  style={{ height: 40, background: 'transparent', border: '1px solid #333333', width: '100%' }}
                  popupClassName={styles.datepicker}
                />
              </Form.Item>
              <Form.Item style={{ width: '-webkit-fill-available' }}>
                <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>TGE Percent</div>
                <Input
                  value={tgePercent}
                  onChange={(e) => { setTgePercent(e.target.value) }}
                  style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
                />
              </Form.Item>
            </div>
            <div style={{ display: 'flex' }}>
              <Form.Item style={{ width: '-webkit-fill-available', marginRight: 20 }}>
                <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Cycle (days)</div>
                <Input
                  value={cycle}
                  onChange={(e) => { setCycle(e.target.value) }}
                  style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
                />
              </Form.Item>
              <Form.Item style={{ width: '-webkit-fill-available' }}>
                <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Cycle Release Percent</div>
                <Input
                  value={cycleReleasePercent}
                  onChange={(e) => { setCycleReleasePercent(e.target.value) }}
                  style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
                />
              </Form.Item>
            </div>
          </>
          :
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Lock until (UTC)</div>
            <DatePicker
              format="YYYY-MM-DD HH:mm:ss"
              showTime={{
                defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
              }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333', width: '100%' }}
              popupClassName={styles.datepicker}
            />
          </Form.Item>
      }
    </Form>
  )
}

const CreatePresale = props => {

  const [current, setCurrent] = useState(0)
  const [createToken, setCreateToken] = useState(false)

  return (
    <div className={styles.createContainer}>
      <Steps
        className={styles.createSteps}
        current={current}
        labelPlacement="vertical"
        style={{ margin: '3rem 0' }}
        items={[
          {
            title: <div style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Approve Token</div>,
            description: <div style={{ fontSize: 15, color: '#b6b6b5' }}>Enter the token address and approve</div>,
          },
          {
            title: <div style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Presale Information</div>,
            description: <div style={{ fontSize: 15, color: '#b6b6b5' }}>Enter the Presale information</div>,
          },
          {
            title: <div style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Project Information</div>,
            description: <div style={{ fontSize: 15, color: '#b6b6b5' }}>Add project links, description and select tier</div>,
          },
        ]}
      />
      {current == 0 && !createToken && <ApproveToken setCurrent={setCurrent} setCreateToken={setCreateToken} />}
      {current == 0 && createToken && <CreateToken setCurrent={setCurrent} setCreateToken={setCreateToken} />}
      {current == 1 && <PresaleInformation setCurrent={setCurrent} />}
      {current == 2 && <ProjectInformation setCurrent={setCurrent} />}
    </div>
  )
}

export default CreatePresale