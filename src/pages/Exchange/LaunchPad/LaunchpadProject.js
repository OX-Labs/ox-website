/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Progress, Button, message, Input, Radio } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import styles from "./styles.less"
import * as moment from 'moment';
import { requireAllocation, getAllocationInfo, getProjectInfo, useAllocation, recordWallet } from '@/services/api';
import { BigNumber } from '@ethersproject/bignumber';
import ERC20ABI from '@/abis/ERC20.json';
import { useWeb3React } from '@web3-react/core';
import { JsonRpcProvider } from "@ethersproject/providers";
import './css/LaunchpadProject.css';
import PageLoading from './components/PageLoading';
import FormatedTime from './components/FormatedTime';
import Timer from "./components/Timer";
import VestingSchedule from './VestingSchedule';
import SocialMedia from './SocialMedia';
import { useConnectWallet } from '@/components/ConnectWallet';
import POOLABI from "./abis/AcyV1Poolz.json";
import { CustomError, getContract, approveNew, useChainId } from "@/utils"
import { SCAN_URL_PREFIX, LAUNCHPAD_ADDRESS, LAUNCH_RPC_URL, API_URL, LAUNCH_MAIN_TOKEN } from "./constants";
import TokenListSelector from './constants/token_list';
import { nFormatter } from './utils'
import telegramWIcon from '@/assets/launchpad/icon_telegram_white.svg';
import etherIcon from '@/assets/launchpad/icon_etherscan.svg';
import polyIcon from '@/assets/launchpad/icon_polyscan.svg';
import bscIcon from '@/assets/launchpad/icon_bscscan.svg';
import bscChainIcon from '@/assets/launchpad/icon_bsc.svg';
import polygonIcon from '@/assets/launchpad/icon_polygon.svg';
import solanaIcon from '@/assets/launchpad/icon_solana.svg'
import linkedinIcon from '@/assets/launchpad/icon_linkedin.svg';
import mediumIcon from '@/assets/launchpad/icon_medium.svg';
import youtubeIcon from '@/assets/launchpad/icon_youtube.svg';
import githubIcon from '@/assets/launchpad/icon_github.svg';
import twitterWIcon from '@/assets/launchpad/icon_twitter_white.svg';
import linkWIcon from '@/assets/launchpad/icon_link_white.svg';
import linkBIcon from '@/assets/launchpad/icon_open_in_new_window_black.svg'
import whitepaperIcon from '@/assets/launchpad/icon_file_white.svg';
import deckIcon from '@/assets/launchpad/icon_ppt.svg';
import tokenEconomicsIcon from '@/assets/launchpad/icon_googlesheets.svg';
import websiteIcon from '@/assets/launchpad/icon_website.svg';
import TokenomicsPieChart from './components/PieChart';
import YoutubePlayer from './components/YoutubePlayer';
import { SalesTable } from '@/components/TableComponents';

const InputGroup = Input.Group;
const logoObj = {
  "Telegram": telegramWIcon,
  "Twitter": twitterWIcon,
  "Website": websiteIcon,
  "Whitepaper": whitepaperIcon,
  "Deck": deckIcon,
  "Linkedin": linkedinIcon,
  "Medium": mediumIcon,
  "TokenEconomics": tokenEconomicsIcon,
  "Youtube": youtubeIcon,
  "Github": githubIcon,
  "Etheraddress": etherIcon,
  "Polyaddress": polyIcon,
  "Bscaddress": bscIcon
}

const TokenBanner = ({ posterUrl }) => {
  return (
    <img
      className="tokenBanner"
      src={posterUrl}
      alt=""
    />
  );
};

const networkParams = {
  "0x38": {
    chainId: '0x38',
    chainName: 'Binance Smart Chain Netwaok',
    nativeCurrency: {
      name: 'Binance',
      symbol: 'BNB', // 2-6 characters long
      decimals: 18
    },
    blockExplorerUrls: ['https://bscscan.com'],
    rpcUrls: ['https://bsc-dataseed.binance.org/'],
  },
  "0x61": {
    chainId: '0x61',
    chainName: 'Binance Smart Chain Testnet',
    nativeCurrency: {
      name: 'Binance',
      symbol: 'BNB', // 2-6 characters long
      decimals: 18
    },
    blockExplorerUrls: ['https://testnet.bscscan.com'],
    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
  },
  "0x89": {
    chainId: '0x89',
    chainName: 'Polygon',
    nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC', // 2-6 characters long
      decimals: 18
    },
    blockExplorerUrls: ['https://polygonscan.com/'],
    rpcUrls: ['https://polygon-rpc.com/'],
  },
  "0xA4B1": {
    chainId: '0xA4B1',
    chainName: 'Arbitrum',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH', // 2-6 characters long
      decimals: 18
    },
    blockExplorerUrls: ['https://arbiscan.io/'],
    rpcUrls: ['https://arb1.arbitrum.io/rpc'],
  },
};

const switchEthereumChain = async (chainId) => {
  const chainId_hex = "0x" + chainId.toString(16);

  if (localStorage.getItem("wallet") == "metamask") {
    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainId_hex }],
      });
    } catch (e) {
      if (e.code === 4902) {
        try {
          await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              networkParams[chainId_hex]
            ],
          });
        } catch (addError) {
          console.error(addError);
        }
      }
    }
  }
  else if (localStorage.getItem("wallet") == "nabox") {
    try {
      await NaboxWallet.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainId_hex }],
      });
    } catch (e) {
      if (e.code === 4902) {
        try {
          await NaboxWallet.request({
            method: 'wallet_addEthereumChain',
            params: [
              networkParams[chainId_hex]
            ],
          });
        } catch (addError) {
          console.error(addError);
        }
      }
    }
  }
  else if (localStorage.getItem("wallet") == "binance") {
    try {
      await BinanceChain.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainId_hex }],
      });
    } catch (e) {
      if (e.code === 4902) {
        try {
          await BinanceChain.request({
            method: 'wallet_addEthereumChain',
            params: [
              networkParams[chainId_hex]
            ],
          });
        } catch (addError) {
          console.error(addError);
        }
      }
    }
  }
}

const TokenLogoLabel = ({ projectName, tokenLogo, receivedData }) => {

  const clickToWebsite = () => {
    const newWindow = window.open(receivedData.social[0].Website, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  }

  return (
    <div className="flexContainer" >
      <img
        className="tokenLogo"
        alt=""
        src={tokenLogo}
        loading="eager"
        onClick={() => clickToWebsite()}
      />
      <div className="tokenInfo">
        <div className="tokenTitle" onClick={() => clickToWebsite()}>{projectName}</div>
        <div className="tokenLabelBar">
          {receivedData.tokenLabels &&
            receivedData.tokenLabels.map((label) => {
              if (label === "BNB Chain") return (
                <span className="tokenLabel">
                  <img src={bscChainIcon} alt="" style={{ width: '13px', height: '13px', marginRight: '0.2rem' }} />
                  {label}
                </span>
              )
              if (label === "Polygon") return (
                <span className="tokenLabel">
                  <img src={polygonIcon} alt="" style={{ width: '15px', height: '15px', marginRight: '0.2rem' }} />
                  Polygon
                </span>
              )
              if (label === "Solana") return (
                <span className="tokenLabel">
                  <img src={solanaIcon} alt="" style={{ width: '13px', height: '13px', marginRight: '0.2rem' }} />
                  {label}
                </span>
              )
              return <span className="tokenLabel">{label}</span>
            })
          }
        </div>
      </div>
      {receivedData && receivedData.bulletin &&
        <>
          <div className="bulletinContainer">
            <div className="bulletinContent">
              {receivedData.bulletin}
            </div>
          </div>
        </>
      }
    </div>
  );
};

const CardArea = ({
  poolBaseData,
  receivedData,
  account,
  library,
  mainCoinLogoURI,
  poolTokenDecimals,
  poolDistributionStage,
  poolDistributionDate,
  poolID,
  poolStatus,
  poolMainCoinDecimals,
  poolMainCoinAddress,
  poolTokenAddress,
  comparesaleDate,
  comparevestDate
}) => {
  return (
    <div className="gridContainer">
      <div className="leftGrid">
        <TokenProcedure
          receivedData={receivedData}
          poolBaseData={poolBaseData}
          comparesaleDate={comparesaleDate}
          comparevestDate={comparevestDate}
        />
        <KeyInformation
          projectToken={receivedData.projectToken}
          totalSale={receivedData.totalSale}
          tokenPrice={receivedData.tokenPrice}
          receivedData={receivedData}
          poolTokenAddress={poolTokenAddress}
          poolMainCoinAddress={poolMainCoinAddress}
        />
        <VestingCard
          account={account}
          library={library}
          receivedData={receivedData}
          poolDistributionStage={poolDistributionStage}
          poolDistributionDate={poolDistributionDate}
        />
        <Tokenomics />
      </div>
      <div className="rightGrid">
        <div className="circleBorderCard">
          <Allocation
            account={account}
            library={library}
            receivedData={receivedData}
            mainCoinLogoURI={mainCoinLogoURI}
            poolBaseData={poolBaseData}
            poolTokenDecimals={poolTokenDecimals}
            poolDistributionStage={poolDistributionStage}
            poolDistributionDate={poolDistributionDate}
            poolID={poolID}
            poolStatus={poolStatus}
            poolMainCoinDecimals={poolMainCoinDecimals}
            poolMainCoinAddress={poolMainCoinAddress}
          />
        </div>
        <SaleList />
        <ProjectDescription receivedData={receivedData} />
        {/* { !comparesaleDate || compareAlloDate ? "" : <ChartCard className="launchpad-chart" /> } */}
        {/* <ChartCard className="launchpad-chart" /> */}
      </div>
    </div>
  );
};

const TokenProcedure = ({ receivedData, poolBaseData, comparesaleDate, comparevestDate }) => {

  const now_moment_utc = moment.utc();
  const end_moment_utc = moment.utc(receivedData.saleEnd);
  let procedure_status;

  if (end_moment_utc < now_moment_utc) {
    procedure_status = 'end';
  } else {
    procedure_status = 'open';
  }
  console.log('procedure', procedure_status);

  const Procedure = () => {
    return (
      <div className="cardContent" style={{ borderRadius: '1rem' }}>
        <div className="procedure">
          <hr aria-orientation="vertical" className="verticalDivideLine" />
          <div className="procedureNumber">1</div>
          <div>
            <p>Allocation</p>
          </div>
        </div>

        <div className="procedure" style={{ marginTop: '24px' }}>
          <hr
            aria-orientation="vertical"
            className={comparesaleDate ? 'verticalDivideLine' : 'verticalDivideLine_NotActive'}
          />
          <div className={comparesaleDate ? 'procedureNumber' : 'procedureNumber_NotActive'}>
            2
          </div>

          <div>
            <p>Sale</p>
            <div>
              <p className="shortText">Start: </p>
              <FormatedTime utc_string={receivedData.saleStart} />
              <p className="shortText">End: </p>
              <FormatedTime utc_string={receivedData.saleEnd} />
            </div>
          </div>

        </div>

        <div className="procedure" style={{ marginTop: '24px' }}>
          <div className={comparevestDate ? 'procedureNumber' : 'procedureNumber_NotActive'}>
            3
          </div>
          <div>
            <p>Vesting</p>
          </div>
        </div>
      </div>
    );
  };

  const ProgressBar = ({ alreadySale, totalSale, projectToken }) => {
    const salePercentage = (100 * Number(alreadySale) / Number(totalSale)).toFixed(2)
    let tokenNum, mainCoinNum;
    if (!alreadySale) {
      tokenNum = 0
      mainCoinNum = 0
    } else {
      tokenNum = alreadySale
      mainCoinNum = (receivedData.totalRaise * alreadySale / totalSale).toFixed(0)
    }

    const progressStyle = {
      width: { salePercentage } + '%',
    };

    const clickToScan = (address) => {
      let link_url
      if (LAUNCH_MAIN_TOKEN() == receivedData.mainCoin) {
        link_url = SCAN_URL_PREFIX() + '/address/' + address
      } else {
        link_url = SCAN_URL_PREFIX() + '/address/' + address + '#tokentxns'
      }
      const newWindow = window.open(link_url, '_blank', 'noopener,noreferrer');
      if (newWindow) newWindow.opener = null;
    }

    const [isShowToken, setIsShowToken] = useState(false)

    const Image = React.memo(function Image({ src }) {
      return <img
        className="link"
        alt=""
        src={src}
        loading="eager"
        class="filter-acy-orange"
        onClick={() => clickToScan(LAUNCHPAD_ADDRESS())}
      />;
    });

    return (
      <>
        <div
          className="cardContent"
          style={{ background: '#1a1d1c', borderRadius: '0rem 0rem 1rem 1rem' }}
        >
          <div className="progressHeader">
            <p>Sale ProgressBar<span><Image src={linkBIcon} /></span>
            </p>
            <p style={{ color: '#eb5c1f' }}>{salePercentage}%</p>
          </div>
          <div className={styles.tokenProgress}>
            <Progress
              strokeColor={{
                from: '#c6224e',
                to: '#eb6c20',
              }}
              percent={salePercentage}
              status={salePercentage === 0 ? "normal" : salePercentage !== 100 ? "active" : "success"}
            />
          </div>
          <div className="progressAmount" onClick={() => setIsShowToken(!isShowToken)}>
            {
              isShowToken ?
                <div>{`${nFormatter(tokenNum, 3)} / ${nFormatter(totalSale, 3)} ${projectToken}`}</div>
                :
                <div>{`${nFormatter(mainCoinNum, 3)} / ${nFormatter(receivedData.totalRaise, 3)} ${receivedData.mainCoin}`}</div>
            }
          </div>
        </div>
      </>
    );
  };

  return (
    <div
      className="circleBorderCard"
      style={{
        padding: 0,
      }}
    >
      {/* <Procedure /> */}
      {poolBaseData && procedure_status === 'open' &&
        <ProgressBar
          alreadySale={poolBaseData[1]}
          totalSale={poolBaseData[0]}
          projectToken={receivedData.projectToken}
        />
      }
    </div>
  );
};

const KeyInformation = ({ projectToken, totalSale, tokenPrice, receivedData, poolTokenAddress, poolMainCoinAddress }) => {

  return (
    <div className="circleBorderCard cardContent">
      <div className="keyinfoRow">
        <div className="keyinfoName">Total Sales</div>
        <div>
          {nFormatter(totalSale, 3)} {projectToken}
          {/* <img
            className="link"
            alt=""
            src={linkWIcon}
            loading="eager"
            style={{ width: '15px', height: '15px', marginLeft: '0.2rem', cursor: 'pointer' }}
            onClick={() => clickToScan(poolTokenAddress)}
          /> */}
        </div>
      </div>

      <div className="keyinfoRow" style={{ marginTop: '1rem' }}>
        <div className="keyinfoName">Total Raise</div>
        <div>
          {nFormatter(receivedData.totalRaise, 3)} {receivedData.mainCoin}
        </div>
      </div>

      <div className="keyinfoRow" style={{ marginTop: '1rem' }}>
        <div className="keyinfoName">Initial Price</div>
        <div>
          1 {projectToken} = {tokenPrice} {receivedData.mainCoin == 'BUSD' ? 'USDT' : receivedData.mainCoin}
        </div>
      </div>

      <div className="keyinfoRow" style={{ marginTop: '1rem' }}>
        <div className="keyinfoName">Final Price</div>
        <div>
        1 {projectToken} = {(tokenPrice * 10).toFixed(2)} {receivedData.mainCoin == 'BUSD' ? 'USDT' : receivedData.mainCoin}
        </div>
      </div>
    </div>
  );
};

const ProjectDescription = ({ receivedData }) => {
  return (
    <div className="circleBorderCard cardContent">
      <div style={{ display: 'block' }}>
        <div className='projecttitle-socials-container'>
          <h3 className='projecttitle'>Project Description</h3>
        </div>

        <span className="lineSeperator" />
        <div className="projectDescription">
          <div className='socialmedia-container'>
            {
              receivedData.social && receivedData.social[0] &&
              <div className="socialmedia-link-container">
                {/* <a href={receivedData.social[0].Website} target="_blank" rel="noreferrer" style={{ width: '30%', alignSelf: 'center', fontSize: '16px' }}>{receivedData.social[0].Website}</a> */}
                <div id='social container' className='social-container'>
                  {Object.entries(receivedData.social[0]).map((item) => {
                    if (item[1] !== null) {
                      if (item[0] === "Polyaddress" || item[0] === "Etheraddress" || item[0] === "Confluxaddress") return null
                      return (
                        <SocialMedia url={logoObj[item[0]]} link={item[1]} socialText={item[0]} />
                      )
                    }
                  })}
                </div>
              </div>
            }
          </div>
          <div style={{ padding: '2.5em 0 0 0' }}>
            {receivedData.projectDescription && <p>{receivedData.projectDescription[0]}</p>}
            {receivedData.projectDescription &&
              receivedData.projectDescription
                .slice(1)
                .map(desc => <p style={{ paddingTop: '2rem' }}>{desc}</p>)}
          </div>
        </div>

        <div>
          <YoutubePlayer src="https://www.youtube.com/embed/jGapW1fej3k" />
        </div>
      </div>
    </div>
  );
};

const VestingCard = ({
  account,
  library,
  receivedData,
  poolDistributionStage,
  poolDistributionDate,
}) => {

  const vestingClaimClicked = async () => {
    // can't claim before vesting schedule
    let startDistributionTime = poolDistributionDate[0];
    let nowTime = moment.utc().unix();
    if (nowTime < startDistributionTime) {
      return;
    }

    const PoolContract = getContract(LAUNCHPAD_ADDRESS(), POOLABI, library, account);

    const result = await PoolContract.WithdrawERC20ToInvestor(poolID)
      .catch(e => {
        console.log('claim Error', e);
      });

    return result
  }

  return (
    <div className="circleBorderCard cardContent">
      <div className="vesting-open-container">
        <div className="vesting-container">
          {/* <p className="sale-vesting-title vesting">Vesting</p> */}

          <div className='vesting-trigger-container'>
            <div className="text-line-container">
              <p>Unlock {(poolDistributionStage[0] * 100 / poolDistributionStage.reduce((a, b) => parseInt(a) + parseInt(b), 0)).toPrecision(4)}% at TGE, vesting in {poolDistributionStage.length} stages: </p>
              {/* <span className="vesting-line" /> */}

            </div>
            {/* <div className="arrow-down-container">
              <CaretDownOutlined
                className={
                  isClickedVesting ? 'arrow-down-active arrow-down' : 'arrow-down-inactive arrow-down'
                }
              />
            </div> */}
          </div>
        </div>

        <div className="vesting-schedule vesting-schedule-active">
          <VestingSchedule
            vestingDate={poolDistributionDate}
            stageData={poolDistributionStage}
            vestingClick={vestingClaimClicked}
            receivedData={receivedData}
          />
        </div>
      </div>
    </div>
  )
}

const AllocationCard = ({
  index,
  allocationInfo,
  innerValues,
  coverOpenStates,
  setAllocationInfo,
  updateInnerValues,
  updateCoverStates,
  account,
  receivedData,
  setSalesValue
}) => {

  const colorCodes = ["#C6224E", "#1C9965", "#E29227", "#1E5D91", "#70BA33"];
  const baseColorCodes = ["#631027", "#0e4c32", "#74490f", "#0f2e48", "#375d19"];

  const computeCoverClass = () => {
    let classString = 'cover';
    let coverOpenState = coverOpenStates[index];
    if (coverOpenState === 'open') {
      classString += ' openCover';
    } else if (coverOpenState === 'removed') {
      classString = 'nocover';
    }
    return classString;
  };

  // if allocation is done, cover cannot be opened
  // otherwise, require an allocation from server
  const clickCover = (e) => {
    if (coverOpenStates[index] !== 'cover') return;

    console.log(`click allocation card cover`, allocationInfo);
    if (!account || !receivedData.projectToken) {
      return;
    }

    // first time allocation
    if (!allocationInfo.allocationAmount) {
      requireAllocation(API_URL(), account, receivedData.projectToken).then(res => {
        if (res && res.allocationAmount) {
          console.log('resalloc: ', res);
          setAllocationInfo(res);
          setSalesValue(res.allocationLeft);
          updateInnerValues(index, res);
          updateCoverStates(index);
        }
      }).catch(e => {
        console.error(e);
      })
    } else {
      console.log('open cover');
      updateInnerValues(index, allocationInfo);
      updateCoverStates(index);
      setSalesValue(allocationInfo.allocationLeft);
    }
  };

  const computeTextStyle = () => {
    if (coverOpenStates[index] === 'removed') {
      return {
        color: '#757579'
      }
    }
  }

  return (
    <div className='allocationCard-container'>
      <div className="allocationCard" onClick={clickCover} style={{ backgroundColor: baseColorCodes[index], paddingTop: 13 }}>
        <div
          className={computeCoverClass()}
          style={{ backgroundColor: colorCodes[index] }}
        >
        </div>
        <p
          className="inner-text-amount"
          style={computeTextStyle()}
        >{innerValues[index]}</p>
      </div>
    </div>
  );
};

const Allocation = ({
  account,
  library,
  receivedData,
  mainCoinLogoURI,
  poolBaseData,
  poolTokenDecimals,
  poolDistributionStage,
  poolDistributionDate,
  poolID,
  poolStatus,
  poolMainCoinDecimals,
  poolMainCoinAddress
}) => {

  const [allocationInfo, setAllocationInfo] = useState({});
  const [innerValues, setInnerValues] = useState([0, 0, 0, 0, 0]);
  const [coverOpenStates, setCoverOpenStates] = useState(new Array(5).fill('cover'));
  const [salesValue, setSalesValue] = useState(0);
  const [isShowingBonusInstrution, SetIsShowingBonusInstruction] = useState(false);
  const [recordWalletId, setRecordWalletId] = useState("");

  // fetching allocation data
  useEffect(async () => {
    if (!account || !receivedData.projectToken) return;
    // get allocation status from backend at begining
    await getAllocationInfo(API_URL(), account, receivedData.projectToken)
      .then(res => {
        if (res && res.allocationAmount) {
          setAllocationInfo(res);
          updateInnerValues(2, res);
          updateCoverStates(2);
          setSalesValue(res.allocationLeft);
          setRecordWalletId(res.recordWalletId ? res.recordWalletId : "");
        }
        console.log('allocation info: ', receivedData.projectToken, res);
      })
      .catch(e => {
        console.log('Get allocation error ', e);
        throw e;
      });
  }, [account, receivedData]);

  const onFocusSaleValue = (e) => {
    if (!allocationInfo.allocationAmount) {
      requireAllocation(API_URL(), account, receivedData.projectToken).then(res => {
        if (res && res.allocationAmount) {
          console.log('resalloc: ', res);
          setAllocationInfo(res);
          updateInnerValues(2, res);
          updateCoverStates(2);
        }
      }).catch(e => {
        console.error(e);
      })
    }
  }

  const onBlurSaleValue = (e) => {
    const value = e.target.value;
    if (!allocationInfo.allocationAmount) {
      setSalesValue(0);
      return;
    }
    const allocationLeft = allocationInfo.allocationLeft;

    const minInvest = receivedData.minInvest ? receivedData.minInvest : 100
    if (value > allocationLeft) {
      setSalesValue(allocationLeft);
    } else if (value < minInvest) {
      setSalesValue(minInvest);
    } else {
      setSalesValue(value);
    }
  }

  const validWalletId = (chain, walletId) => {
    if (walletId === "") return false;
    return true;
  }

  const onClickBuy = () => {
    console.log("buy");
    console.log("sales value", salesValue);

    if (receivedData.actualChain) {
      console.log(receivedData.actualChain, recordWalletId);
      if (!validWalletId(receivedData.actualChain, recordWalletId)) {
        message.warn('Please submit a valid walletId before investing.')
        return
      } else {
        onClickRecordWallet();
      }
    }

    investClicked(LAUNCHPAD_ADDRESS(), poolID, salesValue);
  }

  const onClickRecordWallet = () => {
    console.log("record walletId.", recordWalletId);

    recordWallet(API_URL(), account, receivedData.projectToken, recordWalletId)
      .then(res => {
        if (res && res.recordWalletId) {
          setRecordWalletId(res.recordWalletId);
          message.success('Save walletId success.')
        }
        console.log('userProject info: ', res);
      })
      .catch(e => {
        console.log('Get allocation error ', e);
        message.error('Failed to save walletId. Please click cover to get allocation first.')
        throw e;
      });
  }

  const randomRange = (min, max) => Math.floor(Math.random() * (max - min) + min);

  const updateInnerValues = (index, allocationInfo) => {
    const newInnerValues = [0, 0, 0, 0, 0];
    const allocationAmount = allocationInfo.allocationAmount;
    for (let i = 0; i < innerValues.length; i++) {
      if (i === index) {
        newInnerValues[i] = allocationAmount;
      } else {
        newInnerValues[i] = randomRange(allocationAmount * 0.1, allocationAmount * 3);
      }
    }
    console.log('newInnerValues', newInnerValues);
    setInnerValues(newInnerValues);
  }

  const updateCoverStates = (index) => {
    const newCoverOpenStates = ['removed', 'removed', 'removed', 'removed', 'removed'];
    newCoverOpenStates[index] = 'open';
    setCoverOpenStates(newCoverOpenStates);
  }

  const tooltipTitle = () => {
    return (
      <div>
        <span>Increase Your Allocation Amount:</span>
        <br />
        <span className='tool-tip-content'>
          1.Increase your trading volume @ <Link to="/#/trade" target="_blank">Trade</Link>
        </span>
        <br />
        <span className='tool-tip-content'>
          2.Increase your liquidity @ <Link to="/#/liquidity" target="_blank">Liquidity</Link>
        </span>
        <br />
        <span className='tool-tip-content'>
          3.Buy and hold more $ACY @ <Link to="/#/trade" target="_blank">Trade</Link>
        </span>
      </div>
    )
  }

  const BonusInstruction = () => {
    return (
      <div className='bonus-instruction-container'>
        <ul>
          <li>Increase your @<Link to="/#/trade" target="_blank">Trade</Link> volume</li>
          <li>Increase your @<Link to="/#/liquidity" target="_blank">Liquidity</Link></li>
          <li>Buy and hold more <Link to="/#/trade" target="_blank">$ACY</Link></li>
        </ul>
      </div>
    )
  }

  const investClicked = async (poolAddress, poolId, amount) => {
    const PoolContract = getContract(LAUNCHPAD_ADDRESS(), POOLABI, library, account);

    if (!account) {
      return;
    }
    //TO-DO: Request UseAllocation API, process only when UseAllocation returns true
    const status = await (async () => {
      // NOTE (gary 2022.1.6): use toString method
      const approveAmount = BigInt(amount) * BigInt(Math.pow(10, poolMainCoinDecimals))
      const state = await approveNew(poolMainCoinAddress, approveAmount, poolAddress, library, account);
      const result = await PoolContract.InvestERC20(poolId, approveAmount)
        .then((res) => {
          useAllocation(API_URL(), account, receivedData.projectToken, amount)
            .then(res => {
              if (res) {
                console.log('use alloc', res);
                setAllocationInfo(res);
              }
            })
            .catch(e => console.log(e));
        })
        .catch(e => {
          console.log(e)
          return new CustomError('CustomError while buying token');
        });
      return result;
    })();

    console.log("buy contract", status)
  }

  const calcAllocBonus = (allocationBonus) => {
    let totalBonus = 0;
    if (allocationBonus) {
      for (let i = 0; i < allocationBonus.length; i++) {
        totalBonus += allocationBonus[i].bonusAmount;
      }
    }
    return totalBonus;
  }

  const card_indexes = [0, 1, 2, 3, 4];

  return (
    <div>
      <div className='cardContent allocation-content allocation-content-active' style={{ borderRadius: '1rem' }}>
        {/* <div className="allocation-title-container">
          <div className='title-tooltip-container'>
            <div style={{ height: 24 }}></div>
            <div className="allocation-title">Allocation</div>
          </div>
          <div className='allocation-cards'>
            <div className="allocationContainer">
              {
                card_indexes.map((index) =>
                  <AllocationCard
                    key={index}
                    index={index}
                    allocationInfo={allocationInfo}
                    setAllocationInfo={setAllocationInfo}
                    updateCoverStates={updateCoverStates}
                    updateInnerValues={updateInnerValues}
                    coverOpenStates={coverOpenStates}
                    innerValues={innerValues}
                    account={account}
                    receivedData={receivedData}
                    setSalesValue={setSalesValue}
                  />
                )
              }
            </div>
          </div>

          <div style={{ width: 75, height: 66 }}></div>
          {isShowingBonusInstrution &&
            <BonusInstruction></BonusInstruction>
          }
        </div> */}

        {receivedData && receivedData.actualChain &&
          <>
            <form className="sales-container" style={{ marginBottom: "12px" }}>
              <div className="sale-vesting-title">
                <label for="sale-number" >
                  Wallet
                </label>
              </div>

              <div className="sales-input-container">
                <InputGroup>
                  <Input
                    className="sales-input"
                    value={recordWalletId}
                    onChange={(e) => setRecordWalletId(e.target.value)}
                    placeholder={`Please add your ${receivedData.actualChain} wallet address.`}
                  // onBlur={onChangeRecordWalletId}
                  />
                </InputGroup>
              </div>
              <Button
                className="sales-submit"
                onClick={onClickRecordWallet}
              >
                Save
              </Button>
            </form>
          </>
        }

        <form className="sales-container">
          <div className="sale-vesting-title">
            <label for="sale-number" >
              Price
            </label>
          </div>
          <div className={styles.priceRadioGroup} style={{ width: '100%' }}>
            <Radio.Group defaultValue="0.0035">
              <Radio.Button value="0.0030">0.0030 {receivedData.mainCoin == 'BUSD' ? 'USDT' : receivedData.mainCoin}</Radio.Button>
              <Radio.Button value="0.0035">0.0035 {receivedData.mainCoin == 'BUSD' ? 'USDT' : receivedData.mainCoin}</Radio.Button>
              <Radio.Button value="0.0040">0.0040 {receivedData.mainCoin == 'BUSD' ? 'USDT' : receivedData.mainCoin}</Radio.Button>
              <Radio.Button value="0.0045">0.0045 {receivedData.mainCoin == 'BUSD' ? 'USDT' : receivedData.mainCoin}</Radio.Button>
              <Radio.Button value="0.0050">0.0050 {receivedData.mainCoin == 'BUSD' ? 'USDT' : receivedData.mainCoin}</Radio.Button>
            </Radio.Group>
          </div>
        </form>

        <form className="sales-container">
          <div className="sale-vesting-title">
            <label for="sale-number" >
              Sale
            </label>
          </div>

          <div className="sales-input-container">
            <InputGroup>
              <Input
                className="sales-input"
                value={salesValue}
                onChange={(e) => setSalesValue(e.target.value)}
                onBlur={onBlurSaleValue}
                onFocus={onFocusSaleValue}
              />
              <div className="unit-max-group">
                <div className="token-logo">
                  <img
                    src={mainCoinLogoURI || 'https://storageapi2.fleek.co/chwizdo-team-bucket/ACY Token List/USDT.svg'}
                    alt="token-logo"
                    className="token-image"
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '2rem', fontWeight: '700' }}>
                  {receivedData.mainCoin == 'BUSD' ? 'USDT' : receivedData.mainCoin}
                </div>
              </div>
            </InputGroup>
          </div>
          <Button
            className="sales-submit"
            disabled={poolBaseData ? (poolBaseData[2] >= new Date() || poolBaseData[3] <= new Date()) : false}
            onClick={onClickBuy}
          >
            Buy
          </Button>
        </form>

      </div>

    </div>
  );
};

const SaleList = ({ }) => {

  const data = [
    {
      time: 'Jun 05 2023 14:30:07',
      address: '0xf5be...6cb2',
      amount: '2.37',
      tokens: '2.35',
      price: '1.01',
    },
    {
      time: 'Jun 05 2023 13:12:55',
      address: '0x0754...9bA5',
      amount: '43.22',
      tokens: '44.19',
      price: '0.98',
    },
    {
      time: 'Jun 05 2023 13:08:40',
      address: '0xad52...826b',
      amount: '17.60',
      tokens: '16.98',
      price: '0.99',
    },
  ]

  return (
    <div className="circleBorderCard cardContent">
      <SalesTable dataSource={data} />
      <div style={{ padding: '0 1rem', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>35K / 100K CRIC</span>
          <span>35%</span>
        </div>
        <Progress percent={70} showInfo={false} strokeColor="#0030d4" />
        <div style={{ marginTop: 20 }}>Sale Ends In: 2:03:17:46</div>
      </div>
    </div>
  )
}

const Tokenomics = ({ }) => {

  return (
    <div className="circleBorderCard cardContent">
      <div style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Tokenomics - Supply Distribution</div>
      <div style={{ textAlign: 'center', color: '#b3b4b7', marginBottom: 15 }}>
        <div>Diluted Market Cap: 8,872 $</div>
        <div>Circulating Market Cap: 6,220 $</div>
        <div>Total: <span style={{ color: 'white', fontWeight: 'bold' }}>1B</span></div>
      </div>
      <TokenomicsPieChart />
    </div>
  )
}

const LaunchpadProject = () => {
  // STATES
  const { chainId } = useChainId();
  const { account, library } = useWeb3React();
  const { projectId } = useParams();
  const [receivedData, setReceivedData] = useState({});
  const [mainCoinLogoURI, setMainCoinLogoURI] = useState(null);
  const [poolID, setPoolID] = useState(null);
  const [poolBaseData, setPoolBaseData] = useState(null);
  const [poolDistributionDate, setDistributionDate] = useState([]);
  const [poolDistributionStage, setpoolDistributionStage] = useState([]);
  const [poolStatus, setPoolStatus] = useState(0);
  const [poolTokenDecimals, setPoolTokenDecimals] = useState(0);
  const [poolMainCoinDecimals, setPoolMainCoinDecimals] = useState(0); // Gary: decimal initialize to 0
  const [poolMainCoinAddress, setPoolMainCoinAddress] = useState(""); // e.g., USDT
  const [poolTokenAddress, setPoolTokenAddress] = useState("");
  const [compareAlloDate, setCompareAlloDate] = useState(false);
  const [comparesaleDate, setComparesaleDate] = useState(false);
  const [comparevestDate, setComparevestDate] = useState(false);

  const convertUnixTime = unixTime => {
    const data = new Date((Number(unixTime)) * 1000)
    const res = data.toLocaleString()
    return res
  }

  const connectWalletByLocalStorage = useConnectWallet();
  useEffect(() => {
    if (!account) {
      connectWalletByLocalStorage();
    }
  }, [account]);

  // contract function
  const getPoolData = async (lib, acc) => {

    const poolContract = getContract(LAUNCHPAD_ADDRESS(), POOLABI, lib, acc);
    const pool = []
    const distributionRes = []
    const distributionStage = []

    // 合约函数调用
    const baseData = await poolContract.GetPoolBaseData(poolID)
    const distributionData = await poolContract.GetPoolDistributionData(poolID)
    const status = await poolContract.GetPoolStatus(poolID)

    // getpoolbasedata 数据解析
    const token2Address = baseData[1]

    const token1contract = getContract(baseData[0], ERC20ABI, lib, acc)
    const token2contract = getContract(token2Address, ERC20ABI, lib, acc)

    const token1decimal = await token1contract.decimals()
    const token2decimal = await token2contract.decimals()
    // 不解析时间戳
    const res1 = BigNumber.from(baseData[2]).toBigInt().toString().slice(0, -(token1decimal)) // 获取销售的token的总数
    const res2 = BigNumber.from(baseData[3]).toBigInt().toString().slice(0, -(token1decimal)) // 已销售的token的数量
    const res3 = BigNumber.from(baseData[4]).toBigInt()
    const res4 = BigNumber.from(baseData[5]).toBigInt()

    console.log('End time', res4);

    // 获取当前阶段
    const d = Math.round(new Date().getTime() / 1000)
    if (d > res3) setComparesaleDate(true)
    if (d > res4) setComparevestDate(true)
    const saleStartDate = convertUnixTime(res3)
    const saleEndDate = convertUnixTime(res4)
    // 存放数据
    pool.push(res1, res2, saleStartDate, saleEndDate)
    // getpooldistributiondata 数据解析以及存放
    distributionData[1].map(uTime => distributionRes.push(convertUnixTime(uTime)))
    distributionData[2].map(vestingRate => distributionStage.push(BigNumber.from(vestingRate).toBigInt().toString()))

    // 判断当前是否是vesting阶段
    const curPoolStatus = Number(BigNumber.from(status).toBigInt())

    // set数据
    setPoolBaseData(pool)
    setPoolStatus(curPoolStatus)
    setPoolStatus(Number(BigNumber.from(status).toBigInt()))
    setPoolMainCoinAddress(token2Address)
    setPoolTokenAddress(baseData[0])
    setPoolTokenDecimals(token1decimal)
    setPoolMainCoinDecimals(token2decimal)
  }

  const updatePoolData = async (chainId) => {
    // project must have poolID
    if (poolID === null) return;

    const now_moment_utc = moment.utc();
    const end_moment_utc = moment.utc(receivedData.saleEnd);
    const start_moment_utc = moment.utc(receivedData.saleStart);
    if (now_moment_utc > end_moment_utc || now_moment_utc < start_moment_utc) return;

    try {
      if (account && library) {
        await getPoolData(library, account);
      } else {
        const provider = new JsonRpcProvider(LAUNCH_RPC_URL(), chainId);  // different RPC for mainnet
        const accnt = "0x0000000000000000000000000000000000000000";
        await getPoolData(provider, accnt);
      };
    } catch (error) {
      console.log('Invalid Pool ID.')
    }

  }

  // HOOKS
  // Retrieve project data from db
  useEffect(() => {
    getProjectInfo(API_URL(), projectId)
      .then(res => {
        if (res) {
          // extract data from string
          console.log("fecthing project info ------------111", res.contextData)
          const contextData = JSON.parse(res.contextData);

          res['chainId'] = res.basicInfo.chainId;
          if (res['chainId'] !== chainId) {
            switchEthereumChain(res['chainId']);
          }

          res['tokenLabels'] = contextData['tokenLabels'];
          res['projectDescription'] = contextData['projectDescription'];
          res['alreadySale'] = contextData['alreadySale'];
          res['salePercentage'] = contextData['salePercentage'];
          res['posterUrl'] = contextData['posterUrl'];
          res['bulletin'] = contextData['bulletin'];
          res['tokenLogoUrl'] = res.basicInfo.projectTokenUrl;
          res['minInvest'] = res.allocationInfo.parameters.minInvest;

          res['regStart'] = res.scheduleInfo.regStart;
          res['regEnd'] = res.scheduleInfo.regEnd;
          res['saleStart'] = res.scheduleInfo.saleStart;
          res['saleEnd'] = res.scheduleInfo.saleEnd;

          if (res.scheduleInfo.distributionData) {
            const distributionData = res.scheduleInfo.distributionData;
            const distributionRes = [];
            const distributionStage = [];
            distributionData[2].map(vestingRate => distributionStage.push(BigNumber.from(vestingRate).toBigInt().toString()))
            setDistributionDate([...distributionData[1]]);
            setpoolDistributionStage(distributionStage);
          }

          res['tokenPrice'] = res.saleInfo.tokenPrice;
          res['totalSale'] = res.saleInfo.totalSale;
          res['totalRaise'] = res.saleInfo.totalRaise;
          res['distributionType'] = res.basicInfo.distributionType || "contract";
          res['distributionLink'] = res.basicInfo.distributionLink || "";
          res['projectName'] = res.basicInfo.projectName;
          res['projectToken'] = res.basicInfo.projectToken;
          res['mainCoin'] = res.basicInfo.mainCoin;
          res['actualChain'] = res.basicInfo.actualChain;

          // get state to hide graph and table
          const curT = new Date()
          if (curT < res.scheduleInfo.saleStart) setCompareAlloDate(true)
          const tokenList = TokenListSelector(chainId)
          console.log(tokenList);
          const mainCoinInfo = tokenList.find(item => item.symbol == res.basicInfo.mainCoin)
          setMainCoinLogoURI(mainCoinInfo?.logoURI);
          setPoolID(res.basicInfo.poolID);

          console.log('res', res);
          setReceivedData(res);
        } else {
          console.log('redirect to list page');
          // history.push('/launchpad');
        }
      })
      .catch(e => {
        console.log("Project Detail check errrrrrrrrrrr", e);
        // console.error(e);
        // history.push('/launchpad');
      });
  }, [library, account]);

  // fetching data from Smart Contract
  useEffect(() => {
    updatePoolData(chainId);
  }, [library, account, poolID, chainId])

  // COMPONENTS
  return (
    <div>
      {!receivedData.posterUrl ? (
        <div>
          <PageLoading />
        </div>
      ) : (
        <div className="mainContainer">
          <Timer callBack={updatePoolData(chainId)} ms={30000} />
          <div style={{ position: 'relative' }}>
            <TokenBanner posterUrl={receivedData.posterUrl} />
            <TokenLogoLabel
              projectName={receivedData.projectName}
              tokenLogo={receivedData.tokenLogoUrl}
              receivedData={receivedData}
            />
          </div>
          <CardArea
            poolBaseData={poolBaseData}
            receivedData={receivedData}
            account={account}
            library={library}
            mainCoinLogoURI={mainCoinLogoURI}
            poolDistributionStage={poolDistributionStage}
            poolDistributionDate={poolDistributionDate}
            comparesaleDate={comparesaleDate}
            comparevestDate={comparevestDate}
            poolID={poolID}
            poolStatus={poolStatus}
            poolMainCoinDecimals={poolMainCoinDecimals}
            poolMainCoinAddress={poolMainCoinAddress}
            poolTokenAddress={poolTokenAddress}
            poolTokenDecimals={poolTokenDecimals}
          />
        </div>
      )}
    </div>
  );
};

export default LaunchpadProject;
