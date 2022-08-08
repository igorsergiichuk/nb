import * as current from '../../../data/current.json';
import * as finished from '../../../data/finished.json';
import { useState, useEffect } from 'react';
import { Tab } from './Tab';

export const Body = () => {
  const [selectedTab, updateSelectedTab] = useState('finished');
  const [records, updateSelectedRecords] = useState([]);

  useEffect(() => {
    requestRecords();
  }, [selectedTab]);

  const setSelectedTab = (e) => {
    e.preventDefault();
    if (selectedTab === e.target.id) {
      return;
    }
    updateSelectedTab(e.target.id);
  };

  const requestRecords = async () => {
    const dataURL = `../../../data/${selectedTab}.json`;
    const { data } = await import(dataURL);

    updateSelectedRecords(data);
  };

  return (
    <div className="body">
      <div className="body-buttons-container">
        <button  className="button" id="finished" onClick={(e) => setSelectedTab(e)}>
          Finished
        </button>
        <button  className="button" id="current" onClick={(e) => setSelectedTab(e)}>
          Current
        </button>
      </div>
      <Tab records={records} />
    </div>
  );
};