import React from 'react';
import Result from './components/Result';
import SearchBox from './components/SearchBox';
import './styles/App.css';

export default function App() {
  return (
    <div className="container">
      <div className="pageHeader">
        <p className="pageTitle">Привет</p>
        <p className="pageSubtitle">сейчас найдем</p>
      </div>
      <div className="content">
        <div className="contentContainer">
          <SearchBox/>
          <Result/>
        </div>
      </div>
    </div>
  );
}