import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './styles.less';
import "./css/seemore.css";
import OngoingProjects from './components/OngoingProjects.js';
import IncomingProjects from './components/IncomingProjects.js';
import EndedProjects from './components/EndedProjects.js';
import CreateModal from './components/CreateModal';
import { getProjects } from '@/services/api';
import { useConnectWallet } from '@/components/ConnectWallet';
import { useWeb3React } from '@web3-react/core';
import moment from 'moment';

const API_URL = () => "https://api.acy.finance/bsc-main/api";

const Pool = props => {
  const [ongoingData, setOngoingData] = useState([]);
  const [upcomingData, setUpcomingData] = useState([]);
  const [endedData, setEndedData] = useState([]);
  const [isActive, setIsActive] = useState(true); // is see more ended projects
  const [searchValue, setSearchValue] = useState('')
  const [showModal, setShowModal] = useState(false)

  // wallet connect
  const { account, chainId, library, activate } = useWeb3React();
  const connectWalletByLocalStorage = useConnectWallet();

  useEffect(() => {
    if (!account) {
      connectWalletByLocalStorage();
    }
  }, [account]);

  // project variables
  useEffect(() => {

    getProjects(API_URL())
      .then(res => {
        if (res) {
          const newOngoingData = [];
          const newUpcomingData = [];
          const newEndedData = [];
          // get all projects from db
          res.forEach(obj => {
            console.log(obj);
            if (obj.projectStatus === 'Ongoing') newOngoingData.push(obj);
            else if (obj.projectStatus === 'Upcoming') newUpcomingData.push(obj);
            else if (obj.projectStatus === 'Ended') newEndedData.push(obj);
          });
          console.log(API_URL());
          console.log("hj check tokenlist", res);

          // "2/22/2022 00:00:00 "
          // TODO: fault in backend but parse it in frontend for now
          newOngoingData.sort((a, b) => {
            return moment.utc(a.saleStart, "M/D/YYYY hh:mm:ss ") > moment.utc(b.saleStart, "M/D/YYYY hh:mm:ss ") ? 1 : -1;
          });

          newUpcomingData.sort((a, b) => {
            return moment.utc(a.saleStart, "M/D/YYYY hh:mm:ss ") > moment.utc(b.saleStart, "M/D/YYYY hh:mm:ss ") ? 1 : -1;
          });

          // show ended project in desencding order
          newEndedData.sort((a, b) => {
            return moment.utc(a.saleEnd, "M/D/YYYY hh:mm:ss ") < moment.utc(b.saleEnd, "M/D/YYYY hh:mm:ss ") ? 1 : -1;
          });

          setOngoingData([...newOngoingData]);
          setUpcomingData([...newUpcomingData]);
          setEndedData([...newEndedData]);
        } else {
          console.log('Failed to retrieve data from database');
        }
      })
      .catch(e => console.error(e));
  }, [account, chainId]);

  return (
    <div className={styles.launchRoot}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'Karla, sans-serif', fontSize: '2rem', lineHeight: '4rem' }}>LAUNCHPAD</span>
        <div style={{ display: 'flex' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            paddingLeft: 15,
            borderRadius: 15,
            border: '1px solid #333333',
            boxShadow: '0 4px 8px 0 #00000033, 0 6px 20px 0 #00000030',
          }}>
            <SearchOutlined />
            <Input
              placeholder="Search Coin Name"
              size="large"
              style={{
                backgroundColor: 'black',
                border: 'none',
                borderRadius: 15,
                width: 200,
                fontSize: 14,
                textAlign: 'left',
                marginLeft: 5,
              }}
              value={searchValue}
              onChange={(e) => { setSearchValue(e.target.value) }}
            />
          </div>
          <Button
            type='primary' style={{ marginLeft: 15, borderRadius: 15, height: 35 }}
            onClick={() => { window.location.href = '/exchange/launchpad/createpresale' }}
          >
            Create Presale
          </Button>
        </div>
      </div>
      <div className={styles.btmContent}>
        <section>
          {ongoingData.length != 0 &&
            <div className={styles.projectBoxes}>
              <div className={styles.titleBlock}>
                <div className={styles.lineSeperator} />
                <span className={styles.anyStatusTitle}>Ongoing Projects</span>
                <div className={styles.lineSeperator} />
              </div>
              <div className={styles.projectsContainer}>
                <OngoingProjects data={ongoingData} />
              </div>
            </div>}
          {upcomingData.length != 0 &&
            <div className={styles.projectBoxes}>
              <div className={styles.titleBlock}>
                <div className={styles.lineSeperator} />
                <span className={styles.anyStatusTitle}>Upcoming Projects</span>
                <div className={styles.lineSeperator} />
              </div>
              <div className={styles.projectsContainer}>
                <IncomingProjects data={upcomingData} />
              </div>
            </div>}
          {endedData.length != 0 &&
            <div className={styles.projectBoxes}>
              <div className={styles.titleBlock}>
                <div className={styles.lineSeperator} />
                <span className={styles.anyStatusTitle}>Ended Projects</span>
                <div className={styles.lineSeperator} />
              </div>
              <div className={styles.projectsContainer}>
                <div
                  className={
                    isActive ? "see-more-container" : "see-more-container active"
                  }
                >
                  <div className='content'>
                    <EndedProjects data={endedData} />
                  </div>
                  <a className="more" onClick={() => setIsActive(!isActive)}></a>
                </div>
              </div>
            </div>}
        </section>
      </div>
      <CreateModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Pool;
