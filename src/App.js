/* eslint-disable react/destructuring-assignment */

import React from 'react';
import './App.scss';

import Header from './components/header/header.component';
import MessageBox from './components/messagebox/messagebox.xomponent';
import CarControlBtnBox from './components/control-btn-box/control-btn-box.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      status: 'disconnected',
      statusColor: 'red',
    };
    this.getConnectionStatus = this.getConnectionStatus.bind(this);
  }

  getConnectionStatus(status) {
    this.setState({ status });

    if (status === 'disconnected') {
      this.setState({ statusColor: 'red' });
    } else if (status === 'UnAuthenticated') {
      this.setState({ statusColor: 'grey' });
    } else if (status === 'connected') {
      this.setState({ statusColor: 'lightgreen' });
    }

  }

  render() {
    return (
      <div className="App">
        <Header />
        <h1 className="status-heading">
          Status:
          <span style={{ color: this.state.statusColor }}>{this.state.status}</span>
        </h1>
        <MessageBox />
        <CarControlBtnBox callBackFunction={this.getConnectionStatus} />
      </div>
    );
  }
}

export default App;
