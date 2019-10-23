import React from 'react';
import './App.scss';

import CarControlBtnBox from './components/control-btn-box/control-btn-box.component';

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  
  render() {
    return (
      <div className="App">
        <CarControlBtnBox />
      </div>
    );
  }
}

export default App;
