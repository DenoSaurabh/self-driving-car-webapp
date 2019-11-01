import React from 'react';
import './App.scss';

import Header from './components/header/header.component';
import CarControlBtnBox from './components/control-btn-box/control-btn-box.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  
  handleKeyPress() {
    console.log('key Pressed')
  }

  render() {
    return (
      <div className="App">
        <Header />
        <CarControlBtnBox />
      </div>
    );
  }
}

export default App;
