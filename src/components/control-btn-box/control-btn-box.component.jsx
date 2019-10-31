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

  let url = 'https://self-driving-car-serverapp.herokuapp.com/';
  
  // For Development
  //url = 'http://localhost:5000'
  
  // Establishing Connection
  const socket = socketClient(url, {
    query: 'device=computer'
  });

  const emitingFunc = move => {
    socket.emit('movement', move);
  } 
  

  const handlekeyUp = () => {
    console.log('Up key Pressed');
    emitingFunc('Forward');
  }

  const handlekeyLeft = () => {
    console.log('Left key Pressed');
    emitingFunc('Left');
  }

  const handlekeyRight = () => {
    console.log('Right key Pressed');
    emitingFunc('Right');
  }

  const handlekeyBottom = () => {
    console.log('Bottom key Pressed');
    emitingFunc('Backward');

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
