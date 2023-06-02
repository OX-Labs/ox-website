import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Tag } from 'antd'
import '../css/ProjectsCard.css';
import CountDown from './CountDown.js';
import FormatedTime from './FormatedTime';
import moment from 'moment';
import eth from '@/assets/eth.svg'

const ProjectsCard = ({ projectID, start, ddl, raise, sales, rate, title, isOngoing, isUpcoming, tokenLogoUrl }) => {
  const history = useHistory();
  const onOpenProjectDetail = (p) => {
    history.push(`/exchange/launchpad/project/${p}`);
  };

  const stripTitle = (title) => {
    let words = title.trim().split(' ');
    return words.slice(0, 2).join(' ');
  }

  const calcStatus = () => {
    const now_moment_utc = moment.utc();
    const start_moment_utc = moment.utc(start);
    const ddl_moment_utc = moment.utc(ddl);
    if (now_moment_utc < start_moment_utc) return 'upcoming';
    else if (now_moment_utc < ddl_moment_utc) return 'ongoing';
    else if (now_moment_utc > ddl_moment_utc) return 'ended';
  }

  const TimeBar = () => {
    let status = calcStatus();
    if (status === 'upcoming') {
      return (
        <>
          <span style={{ marginRight: '5px' }}>Start: </span>
          <FormatedTime utc_string={start} style={{ color: "white", whiteSpace: 'nowrap' }} />
        </>
      )
    } else if (status === 'ongoing') {
      return (
        <>
          <span style={{ marginRight: '5px', color: '#0030d4' }}>End: </span>
          <FormatedTime utc_string={ddl} style={{ color: '#0030d4', whiteSpace: 'nowrap' }} />
        </>
      )
    } else if (status === 'ended') {
      return (
        <>
          <span style={{ marginRight: '5px' }}>End: </span>
          <FormatedTime utc_string={ddl} style={{ color: "white", whiteSpace: 'nowrap' }} />
        </>
      )
    }
    return (<></>)
  }


  return (
    <div className="projects-card projects-container" onClick={() => onOpenProjectDetail(projectID)}>
      <div className="logo-countdown-container">
        <div className="logo-container">
          <div className="logo">
            <img src={tokenLogoUrl} alt="" />
          </div>
          <div className="logo-text">{stripTitle(title)}</div>
        </div>
        <div className="countdown-container">
          <div>
            {/* {isOngoing || isUpcoming ?<CountDown ddl={start} /> : <CountDown ddl={null} /> } */}
            {calcStatus() === 'upcoming' ?
              <CountDown ddl={start} />
              :
              <CountDown ddl={ddl} />
            }
          </div>

          <div className="timebar-container">
            <TimeBar />
          </div>
        </div>
      </div>

      <div style={{ width: '100%', display: 'flex', flexDirection: 'row', marginTop: 5, marginBottom: 10, justifyContent: 'space-between' }}>
        <div style={{ marginLeft: 20 }}>
          <img src={eth} width={15} style={{ marginRight: 5 }} /> 
          <span style={{ fontSize: 12 }}>Ethereum</span>
        </div>
        <div>
          <Tag color="blue" style={{ background: 'transparent', color: 'white' }}>Audit</Tag>
          <Tag color="cyan" style={{ background: 'transparent', color: 'white' }}>KYC</Tag>
        </div>
      </div>

      <div className="details-container detail-text">
        <div
          style={{
            width: '100%',
            display: 'inline-flex',
            justifyContent: 'space-between',
            padding: '0 20px 0 10px',
          }}
        >
          <span style={{ color: '#fff', marginLeft: '18px' }}>Raise</span>
          <span style={{ color: '#fff' }}>{raise}</span>
        </div>
        <div
          style={{
            width: '100%',
            display: 'inline-flex',
            justifyContent: 'space-between',
            padding: '0 20px 0 10px',
          }}
        >
          <span style={{ color: '#fff', marginLeft: '18px' }}>Sales</span>
          <span style={{ color: '#fff' }}>{sales}</span>
        </div>
        <div
          style={{
            width: '100%',
            display: 'inline-flex',
            justifyContent: 'space-between',
            padding: '0 20px 0 10px',
          }}
        >
          <span style={{ color: '#fff', marginLeft: '18px' }}>Initial Price</span>
          <span style={{ color: '#fff' }}>{rate}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
