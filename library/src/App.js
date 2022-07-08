import React from 'react';
import MainWindow from './components/Main';
import './styles/App.css';

export default function App() {

  return (
    <div className="container">
      <div className="pageHeader">
        <p className="pageTitle">Привет</p>
        <p className="pageSubtitle">сейчас найдем</p>
      </div>
      <div className="content">
        <MainWindow/>
      </div>
    </div>
  );
}