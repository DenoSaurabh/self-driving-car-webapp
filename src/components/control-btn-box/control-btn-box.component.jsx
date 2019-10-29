import React from 'react';

import './control-btn-box.styles.scss';

import ChevronLeftSharpIcon from '@material-ui/icons/ChevronLeftSharp'; // left key
import ExpandLessSharpIcon from '@material-ui/icons/ExpandLessSharp'; // up key
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp'; // botton key
import ChevronRightSharpIcon from '@material-ui/icons/ChevronRightSharp'; // right key


//  Maing Web Socket Connection b/w Web and Car
import socketClient from 'socket.io-client';

import ButtonRect from '../button-rect/button-rect.component';
import Button from '../button-circle/button.component';



//  This Component is a box for Control
const CarControlBtnBox = () => {
  // constructor() {
  //   super();
  //   this.state = {};

  //   this.handlekeyUp = this.handlekeyUp.bind(this);
  //   this.handlekeyLeft = this.handlekeyLeft.bind(this);
  //   this.handlekeyRight = this.handlekeyRight.bind(this);
  //   this.handlekeyBottom = this.handlekeyBottom.bind(this);
  // }
  
  // Establishing Connection
  const socket = socketClient('http://localhost:5000');


  const handlekeyUp = () => {
    console.log('Up key Pressed');
    socket.emit('straightmove', 'Hey Car move Forward');
  }

  const handlekeyLeft = () => {
    console.log('Left key Pressed');
    socket.emit('leftmove', 'Hey Car move Left');
  }

  const handlekeyRight = () => {
    console.log('Right key Pressed');
    socket.emit('rightmove', 'Hey Car move Right');
  }

  const handlekeyBottom = () => {
    console.log('Bottom key Pressed');
    socket.emit('backmove', 'Hey Car move Backward');
  }

    return (
      <div className="control-box">
        <ButtonRect
          classname="blutooth-btn"
          color="secondary"
          variant="contained"
          value="Get Data with Socket"
        />

        <div className="car-control-btn-box">
          <Button btntype="up" onClickHandler={handlekeyUp} value={<ExpandLessSharpIcon />} />

          <Button
            btntype="left"
            onClickHandler={handlekeyLeft}
            value={<ChevronLeftSharpIcon />}
          />

          <Button
            btntype="right"
            onClickHandler={handlekeyRight}
            value={<ChevronRightSharpIcon />}
          />

          <Button
            btntype="bottom"
            onClickHandler={handlekeyBottom}
            value={<ExpandMoreSharpIcon />}
          />
          
        </div>
      </div>
    );
}

export default CarControlBtnBox;
