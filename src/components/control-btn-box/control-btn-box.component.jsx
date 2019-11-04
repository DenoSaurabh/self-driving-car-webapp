/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, {useState} from 'react';

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
  //url = 'http://localhost:5000';

  let CarID;
  const [socket, setSocket] = useState(undefined);

  // Function to Send data to parent Component
  const sendStatus = status => callBackFunction(status);

  const getConnected = e => {
    e.preventDefault();
    
    const password = window.prompt('Enter the password to connect to Car 🔑');

    if (password === 'pi') {
      // Establishing Connection
      setSocket(socketClient(url, {
        query: 'device=computer',
      }));
      
      console.log(socket);

      sendStatus('connected');
      console.log('after status')
      console.log(socket);

      window.alert('You are now connected with Car 📡😀🚗');
      
      console.log('after alert')
      console.log(socket );

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

  const emitingFunc = move => {
    console.log(`${socket} emitting`);
    
    if (socket) {
      console.log(socket)
      socket.emit('movement', move);
    } else {
      window.alert(
        'Seems like you are not connected with car. Please press White button to GO 😕🚗. This can be also a Server problem. So please try again after some time. Until Keep calm 😌',
      );
    }
  };

  // Emitting Movement and Handles
  const handlekeyUp = () => {
    console.log('Up key Pressed');
    emitingFunc('Forward');
  };

  const handlekeyLeft = () => {
    console.log('Left key Pressed');
    emitingFunc('Left');
  };

  const handlekeyRight = () => {
    console.log('Right key Pressed');
    emitingFunc('Right');
  };

  const handlekeyBottom = () => {
    console.log('Bottom key Pressed');
    emitingFunc('Backward');
  };

  // Pressing Buttons
  const handleKeyPress = event => {
    const { key } = event;

    if (key === 'w') {
      emitingFunc('Forward');
    } else if (key === 's') {
      emitingFunc('Backward');
    } else if (key === 'a') {
      emitingFunc('Left');
    } else if (key === 'd') {
      emitingFunc('Right');
    }
  };
  
  console.log('at last')
  console.log(socket);

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
        <Button btntype="up" onClickHandler={handlekeyUp} value={<ExpandLessSharpIcon />} />
        <Button btntype="left" onClickHandler={handlekeyLeft} value={<ChevronLeftSharpIcon />} />
        <Button btntype="right" onClickHandler={handlekeyRight} value={<ChevronRightSharpIcon />} />
        <Button btntype="bottom" onClickHandler={handlekeyBottom} value={<ExpandMoreSharpIcon />} />
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
