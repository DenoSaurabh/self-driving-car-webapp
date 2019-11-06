/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState } from 'react';

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
const CarControlBtnBox = ({ callBackFunction }) => {
  let url = 'https://self-driving-car-serverapp.herokuapp.com/';

  // For Development
  url = 'http://localhost:5000';

  // let CarID;
  const [socket, setSocket] = useState(undefined);

  // Function to Send data to parent Component
  const sendStatus = status => callBackFunction(status);

  const getConnected = e => {
    e.preventDefault();

    const password = window.prompt('Enter the password to connect to Car 🔑');

    if (password === 'PICarProject') {
      // Establishing Connection
      setSocket(
        socketClient(url, {
          query: 'device=computer',
        }),
      );

      console.log(socket);

      sendStatus('connected');
      console.log('after status');
      console.log(socket);

      window.alert('You are now connected with Car 📡😀🚗');

      console.log('after alert');
      console.log(socket);
    } else if (password !== 'PICarProject') {
      sendStatus('UnAuthenticated');
      window.alert('Seems like you have written the Wrong Password!! ✍😯');
    } else {
      sendStatus('UnAuthenticated');
      window.alert('You have to write password to connect with Car 🔑');
    }
  };

  const getDisconnected = e => {
    e.preventDefault();

    if (socket) {
      setSocket(undefined);
      sendStatus('disconnected');
      window.alert('You are now disconnected with Car 🚫📡 😞🚗');
    } else {
      sendStatus('disconnected');
      window.alert('You are not connected with Car 😕🚗');
    }
  };

  const emitingFunc = (emit, move) => {
    console.log(`${socket} emitting`);

    if (socket) {
      console.log(socket);
      socket.emit(`move${emit}`, move);
    } else {
      window.alert(
        `Seems like you are not connected with car. 
        Please press White button to GO 😕🚗. 
        This can be also a Server problem. 
        So please try again after some time. Until Keep calm 😌`,
      );
    }
  };

  // Emitting Movement and Handles
  const handlekeyUp = () => {
    console.log('Up key Pressed');
    emitingFunc('forOrBack', 'Forward');
  };

  const handlekeyLeft = () => {
    console.log('Left key Pressed');
    emitingFunc('leftOrRight', 'Left');
  };

  const handlekeyRight = () => {
    console.log('Right key Pressed');
    emitingFunc('leftOrRight', 'Right');
  };

  const handlekeyBottom = () => {
    console.log('Bottom key Pressed');
    emitingFunc('forOrBack', 'Backward');
  };

  // Angle Keys Handlers
  const handleAnglekeyTopLeft = () => {
    console.log('TopLeft key Pressed');
    emitingFunc('AngleCar', 'topleft');
  };

  const handleAnglekeyTopRight = () => {
    console.log('TopRight key Pressed');
    emitingFunc('AngleCar', 'topright');
  };

  const handleAnglekeyBottomLeft = () => {
    console.log('BottomLeft key Pressed');
    emitingFunc('AngleCar', 'backwardleft');
  };

  const handleAnglekeyBottomRight = () => {
    console.log('BottomRight key Pressed');
    emitingFunc('AngleCar', 'backwardright');
  };

  // Pressing Buttons
  const handleKeyPress = event => {
    const { key } = event;

    if (key === 'w') {
      emitingFunc('forOrBack', 'Forward');
    } else if (key === 's') {
      emitingFunc('forOrBack', 'Backward');
    } else if (key === 'a') {
      emitingFunc('leftOrRight', 'Left');
    } else if (key === 'd') {
      emitingFunc('leftOrRight', 'Right');
    } else if (key === 'q') {
      emitingFunc('AngleCar', 'topleft');
    } else if (key === 'e') {
      emitingFunc('AngleCar', 'topright');
    } else if (key === 'z') {
      emitingFunc('AngleCar', 'backwardleft');
    } else if (key === 'c') {
      emitingFunc('AngleCar', 'backwardright');
    }
  };

  console.log('at last');
  console.log(socket);

  /*
  DISCLAMIR: The classes of the control buttons are wrong because 
  There were 8 buttons which became difficult to adjust them. 
  So I decide to do cramming there. Sorry. 
  The real type of button is as props: btnRealType
  */

  return (
    <div className="control-box" onKeyPress={handleKeyPress} tabIndex="0">
      <ButtonRect
        classname="blutooth-btn-con"
        color="default"
        variant="contained"
        value="Connect to Car"
        onClickHandler={getConnected}
      />
      <ButtonRect
        classname="blutooth-btn-dis"
        color="secondary"
        variant="contained"
        value="Disconnect"
        onClickHandler={getDisconnected}
      />

      <div className="car-control-btn-box">
        <Button
          btnClass="up"
          btnRealType="left"
          onClickHandler={handlekeyLeft}
          value={<ChevronLeftSharpIcon />}
        />

        <Button
          btnClass="upleft"
          btnRealType="downright"
          onClickHandler={handleAnglekeyBottomRight}
          value={<ExpandMoreSharpIcon />}
        />

        <Button
          btnClass="left"
          btnRealType="downleft"
          onClickHandler={handleAnglekeyBottomLeft}
          value={<ExpandMoreSharpIcon />}
        />

        <Button
          btnClass="bottomleft"
          btnRealType="right"
          onClickHandler={handlekeyRight}
          value={<ChevronRightSharpIcon />}
        />

        <Button
          btnClass="bottom"
          btnRealType="bottom"
          onClickHandler={handlekeyBottom}
          value={<ExpandMoreSharpIcon />}
        />

        <Button
          btnClass="bottomright"
          btnRealType="upleft"
          onClickHandler={handleAnglekeyTopLeft}
          value={<ExpandLessSharpIcon />}
        />

        <Button
          btnClass="right"
          btnRealType="up"
          onClickHandler={handlekeyUp}
          value={<ExpandLessSharpIcon />}
        />

        <Button
          btnClass="upright"
          btnRealType="upright"
          onClickHandler={handleAnglekeyTopRight}
          value={<ExpandLessSharpIcon />}
        />
      </div>
    </div>
  );
};

export default CarControlBtnBox;

/* ========================  CODE GARBAGE ================================================ */

/*

  Getting and Emitting Socket ID (Computer)
  if (socket) {
    socket.on('connect', () => {
      socket.emit('id_computer', socket.id);
      console.log(socket.id);
    });

    // Listening for Car ID
    socket.on('Gimme_CarID', id => {
      CarID = id;
      console.log(`Car id is: ${id}`);
      console.log(CarID);
    });
  }
  
  
  
  
*/
