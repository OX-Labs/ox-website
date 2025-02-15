import React, { useEffect } from 'react';
import './css/LaunchpadProject.css';
import { Button, Tag } from 'antd';
import tick from '@/assets/launchpad/icon-tick-white.svg';
import FormatedTime from './components/FormatedTime';

const VestingSchedule = ({ vestingDate, stageData, vestingClick, receivedData }) => {
  const len = vestingDate.length;
  const curDate = new Date();

  const totalStageSum = stageData.reduce((a, b) => parseInt(a) + parseInt(b), 0)

  const ClaimButton = () => {
    let claimType = receivedData.distributionType;
    console.log('claimType', receivedData, claimType);
    if (claimType === "contract") {
      return (
        <div style={{ width: 80 }}>
          <Button
            className="claim-btn"
            onClick={vestingClick}
          >
            Claim
          </Button>
        </div>
      )
    } 
    // else if (claimType === "project") {
    //   return (
    //     <>
    //       <div>
    //         <Button
    //           className="claim-btn"
    //         >
    //           {receivedData.distributionLink ?
    //             <a href={receivedData.distributionLink} target="_blank" rel="noreferrer">
    //               Distributed by Project
    //             </a>
    //             :
    //             <span>Distributed by Project</span>
    //           }
    //         </Button>
    //       </div>

    //     </>
    //   )
    // }
    return (
      <div>
        <Button
          className="claim-btn"
          onClick={vestingClick}
        >
          Claim
        </Button>
      </div>
    );
  }

  // setState
  return (
    <div className='vesting-schedule-container'>
      <div style={{ width: 100 }}></div>
      <div className='vesting-procedure-container'>
        {
          [...Array(len)].map((_1, index) => {
            return (
              <div className="procedure vesting-procedure">
                {index === len - 1 ?
                  "" : <hr aria-orientation="vertical" className={curDate > new Date(vestingDate[index]) ? "verticalDivideLine vesting-schedule-line" : "verticalDivideLine_NotActive vesting-schedule-line"} />}

                <div className={curDate < new Date(vestingDate[index]) ? "procedureNumber_NotActive" : "procedureNumber"}>
                  <img src={tick} alt="tick-icon" className="vesting-tick-icon" />
                </div>

                <div className="vesting-schedule-text">
                  <div className='vesting-percentage-claim-container'>
                    <div className="vesting-text-container">
                      <p className="vesting-text" style={{marginLeft: -6}}>
                        <FormatedTime utc_second={vestingDate[index]} />
                      </p>
                    </div>
                    {/* <div className="vesting-percentage-container">
                      <p className="vesting-percentage">{(stageData[index] / totalStageSum * 100).toPrecision(4)}%</p>
                    </div> */}
                    <Tag color="blue" style={{ background: 'transparent', borderRadius: 25, height: 25, marginLeft: 10, color: 'white', borderColor: '#333333', paddingTop: 2 }}>
                      {(stageData[index] / totalStageSum * 100).toPrecision(4)}%
                    </Tag>
                  </div>

                </div>
              </div>
            )
          })
        }
      </div>
      <ClaimButton />
    </div>
  );
};

export default VestingSchedule;
