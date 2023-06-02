import { useState } from 'react'
import { Button, Modal, Form, Input, Select, Radio } from 'antd';
import styles from '../css/createmodal.less'

const CreateModal = (props) => {

  const {
    showModal,
    setShowModal,
  } = props

  const [title, setTitle] = useState('Create Token')
  // create token
  const [tokenType, setTokenType] = useState('Simple Token')
  const [tokenName, setTokenName] = useState('')
  const [tokenSymbol, setTokenSymbol] = useState('')
  const [tokenDecimals, setTokenDecimals] = useState('')
  const [tokenSupply, setTokenSupply] = useState('')
  const [antiBot, setAntiBot] = useState(false)
  // presale information
  const [saleTitle, setSaleTitle] = useState('')
  const [totalSupply, setTotalSupply] = useState('')
  const [fundRaisingToken, setFundRaisingToken] = useState('MATIC')
  const [presaleRate, setPresaleRate] = useState('')
  const [dexListingRate, setDexListingRate] = useState('')
  const [dexLiquidity, setDexLiquidity] = useState('')
  const [liquidityLockup, setLiquidityLockup] = useState('')
  const [dexAddLiquidity, setDexAddLiquidity] = useState('QuickSwap')
  const [softCap, setSoftCap] = useState('')
  const [hardCap, setHardCap] = useState('')
  const [minimumBuy, setMinimumBuy] = useState('')
  const [maximumBuy, setMaximumBuy] = useState('')
  const [unsoldTokens, setUnsoldTokens] = useState('Burn')
  const [presaleType, setPresaleType] = useState('Public')
  const [stealthWallet, setStealthWallet] = useState('')
  const [antiSniperProtection, setAntiSniperProtection] = useState(false)
  const [addTeamTokenVesting, setAddTeamTokenVesting] = useState(false)
  const [addPresaleVesting, setAddPresaleVesting] = useState(false)
  // project information
  const [logoUrl, setLogoUrl] = useState('')
  const [website, setWebsite] = useState('')
  const [telegram, setTelegram] = useState('')
  const [github, setGithub] = useState('')
  const [twitter, setTwitter] = useState('')
  const [discord, setDiscord] = useState('')
  const [youtube, setYoutube] = useState('')
  const [whitelistContest, setWhitelistContest] = useState('')
  const [reddit, setReddit] = useState('')
  const [description, setDescription] = useState('')
  const [selectTier, setSelectTier] = useState('GOLD')

  const getFormItems = () => {
    switch (title) {
      case 'Create Token':
        return <>
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
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Token Name</div>
            <Input
              value={tokenName}
              onChange={(e) => { setTokenName(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Token Symbol</div>
            <Input
              value={tokenSymbol}
              onChange={(e) => { setTokenSymbol(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Token Decimals</div>
            <Input
              value={tokenDecimals}
              onChange={(e) => { setTokenDecimals(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Total Supply</div>
            <Input
              value={tokenSupply}
              onChange={(e) => { setTokenSupply(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
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
        </>
      case 'Presale Information':
        return <>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Sale Title</div>
            <Input
              value={saleTitle}
              onChange={(e) => { setSaleTitle(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Total Supply</div>
            <Input
              value={totalSupply}
              onChange={(e) => { setTotalSupply(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, color: '#b6b6b5' }}>Fund Rasing Token</div>
            <Select
              value={fundRaisingToken}
              onChange={e => { setFundRaisingToken(e) }}
              className={styles.mySelect}
              dropdownClassName={styles.dropDownMenu}
            >
              {['MATIC', 'USDT', 'Custom'].map(e => (
                <Select.Option className={styles.optionItem} value={e}>
                  {e}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Presale Rate</div>
            <Input
              value={presaleRate}
              onChange={(e) => { setPresaleRate(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Dex listing rate</div>
            <Input
              value={dexListingRate}
              onChange={(e) => { setDexListingRate(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Dex Liquidity (%)</div>
            <Input
              value={dexLiquidity}
              onChange={(e) => { setDexLiquidity(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Liquidity Lockup (days)</div>
            <Input
              value={liquidityLockup}
              onChange={(e) => { setLiquidityLockup(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, color: '#b6b6b5' }}>Select what DEX will be used to add liquidity.</div>
            <Select
              value={dexAddLiquidity}
              onChange={e => { setDexAddLiquidity(e) }}
              className={styles.mySelect}
              dropdownClassName={styles.dropDownMenu}
            >
              {['QuickSwap'].map(e => (
                <Select.Option className={styles.optionItem} value={e}>
                  {e}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Soft Cap(MATIC)</div>
            <Input
              value={softCap}
              onChange={(e) => { setSoftCap(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Hard Cap(MATIC)</div>
            <Input
              value={hardCap}
              onChange={(e) => { setHardCap(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Minimum Buy(MATIC)</div>
            <Input
              value={minimumBuy}
              onChange={(e) => { setMinimumBuy(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Maximum Buy(MATIC)</div>
            <Input
              value={maximumBuy}
              onChange={(e) => { setMaximumBuy(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, color: '#b6b6b5' }}>Select what happens to Unsold Tokens.</div>
            <Select
              value={unsoldTokens}
              onChange={e => { setUnsoldTokens(e) }}
              className={styles.mySelect}
              dropdownClassName={styles.dropDownMenu}
            >
              {['Burn', 'Refund'].map(e => (
                <Select.Option className={styles.optionItem} value={e}>
                  {e}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, color: '#b6b6b5' }}>Presale Type</div>
            <Select
              value={presaleType}
              onChange={e => { setPresaleType(e) }}
              className={styles.mySelect}
              dropdownClassName={styles.dropDownMenu}
            >
              {['Tiered Whitelist', 'Whitelist', 'Public'].map(e => (
                <Select.Option className={styles.optionItem} value={e}>
                  {e}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Stealth Wallet</div>
            <Input
              value={stealthWallet}
              onChange={(e) => { setStealthWallet(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Anti Sniper Protection</div>
              <Radio.Group
                onChange={(e) => setAntiSniperProtection(e.target.value)}
                value={antiSniperProtection}
              >
                <Radio value={true}>Yes</Radio>
                <Radio value={false}>No</Radio>
              </Radio.Group>
            </div>
          </Form.Item>
          <Form.Item>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Add Team Token Vesting</div>
              <Radio.Group
                onChange={(e) => setAddTeamTokenVesting(e.target.value)}
                value={addTeamTokenVesting}
              >
                <Radio value={true}>Yes</Radio>
                <Radio value={false}>No</Radio>
              </Radio.Group>
            </div>
          </Form.Item>
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
        </>
      case 'Project Information':
        return <>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Logo URL(https://...)</div>
            <Input
              value={logoUrl}
              onChange={(e) => { setLogoUrl(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Website(https://...)</div>
            <Input
              value={website}
              onChange={(e) => { setWebsite(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Telegram(https://t.me/...)</div>
            <Input
              value={telegram}
              onChange={(e) => { setTelegram(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Github(https://github.com/...)</div>
            <Input
              value={github}
              onChange={(e) => { setGithub(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Twitter(https://twitter.com/...)</div>
            <Input
              value={twitter}
              onChange={(e) => { setTwitter(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Discord(https://t.me/...)</div>
            <Input
              value={discord}
              onChange={(e) => { setDiscord(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Youtube Presentation Video(https://www.youtube.com/watch?v=...)</div>
            <Input
              value={youtube}
              onChange={(e) => { setYoutube(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Whitelist Contest(https://...)</div>
            <Input
              value={whitelistContest}
              onChange={(e) => { setWhitelistContest(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Reddit(https://www.reddit.com/...)</div>
            <Input
              value={reddit}
              onChange={(e) => { setReddit(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Description</div>
            <Input
              value={description}
              onChange={(e) => { setDescription(e.target.value) }}
              style={{ height: 40, background: 'transparent', border: '1px solid #333333' }}
            />
          </Form.Item>
          <Form.Item>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 15, marginBottom: 5, color: '#b6b6b5' }}>Select Tier:</div>
              <Radio.Group
                onChange={(e) => setSelectTier(e.target.value)}
                value={selectTier}
              >
                <Radio value={'COMMON'}>COMMON</Radio>
                <Radio value={'GOLD'}>GOLD</Radio>
              </Radio.Group>
            </div>
          </Form.Item>
        </>
    }
  }

  const getPrimaryText = () => {
    if (title == 'Create Token') {
      return title
    }
    if (title == 'Presale Information') {
      return 'Next'
    }
    if (title == 'Project Information') {
      return 'Submit'
    }
  }

  const onClickPrimary = () => {
    if (title == 'Create Token') {
      setTitle('Presale Information')
      return
    }
    if (title == 'Presale Information') {
      setTitle('Project Information')
      return
    }
    setTitle('Create Token')
    setShowModal(false)
  }

  return (
    <Modal
      open={showModal}
      footer={null}
      onCancel={() => { setShowModal(false) }}
      className={styles.myModal}
    >
      <Form style={{ marginTop: 10 }}>
        <div style={{ fontSize: '1.5rem', color: 'white', textAlign: 'center', fontWeight: 'bold', marginBottom: 20 }}>{title}</div>
        {getFormItems()}
      </Form>
      {title == 'Presale Information' &&
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', marginTop: 60, marginBottom: -10 }}>
          <span>0 $coin needed to create a pool!</span>
          <span>Estimated Market Cap: 0 $</span>
        </div>
      }
      <Button className={styles.confirmButton} onClick={() => { onClickPrimary() }}>
        {getPrimaryText()}
      </Button>
      {title == 'Create Token' &&
        <div
          style={{ textAlign: 'center', cursor: 'pointer', marginTop: 10, marginBottom: 20 }}
          onClick={() => { onClickPrimary() }}
        >
          Skip
        </div>}
    </Modal>
  )
}

export default CreateModal