import React from 'react';

import * as Bluetooth from 'react-bluetooth';

import './control-btn-box.styles.scss';

import ChevronLeftSharpIcon from '@material-ui/icons/ChevronLeftSharp'; // left key
import ExpandLessSharpIcon from '@material-ui/icons/ExpandLessSharp'; // up key
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp'; // botton key
import ChevronRightSharpIcon from '@material-ui/icons/ChevronRightSharp'; // right key

import ButtonRect from '../button-rect/button-rect.component';
import Button from '../button-circle/button.component';

//  This Component is a box for Control
class CarControlBtnBox extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.handlekeyUp = this.handlekeyUp.bind(this);
    this.handlekeyLeft = this.handlekeyLeft.bind(this);
    this.handlekeyRight = this.handlekeyRight.bind(this);
    this.handlekeyBottom = this.handlekeyBottom.bind(this);
    
    this.bluetoothPairHandler = this.bluetoothPairHandler.bind(this);
    this.GetBatteryLevelAsync = this.GetBatteryLevelAsync.bind(this);
  }

  handlekeyUp() {
    console.log('Up key Pressed');
    //e.navigator.bluetooth.requestDevice()
  }

  handlekeyLeft() {
    console.log('Left key Pressed');
  }

  handlekeyRight() {
    console.log('Right key Pressed');
  }

  handlekeyBottom() {
    console.log('Bottom key Pressed');
  }
  
  async bluetoothPairHandler() {
    const isAvailable = await Bluetooth.getAvailabilityAsync();
    if (!isAvailable) {
      return;
    }
    try {
      const device = await Bluetooth.requestDeviceAsync();
      console.log('Success: Got any device: ', device);
    } catch (error) {
      console.log(`Error: Couldn't get any device`, error);
      console.error(`Error: Couldn't get any device`, error);
    }
  }
  
  
  async GetBatteryLevelAsync() {
    const isAvailable = await Bluetooth.getAvailabilityAsync();
    if (!isAvailable) {
      return;
    }
  
    const options = {
      filters: [{ services: ['battery_service'] }],
    };
  
    try {
      const result = await Bluetooth.requestDeviceAsync(options);
      if (result.type === 'cancel') {
        return;
      }
      const { device } = result;

      console.log(`Bluetooth: Got device:`, device);
      if (device.gatt) {
        const server = await device.gatt.connect();
        console.log(`Bluetooth: Got server:`, server);
        const service = await server.getPrimaryService('battery_service');
        console.log(`Bluetooth: Got service:`, service);
        const characteristic = await service.getCharacteristic('battery_level');
        console.log(`Bluetooth: Got characteristic:`, characteristic);
        const value = await characteristic.readValue();
        console.log(`Bluetooth: Got value:`, value);
        const battery = value.getUint8(0);
        console.log(`Success: Got battery:`, battery);
      } else {
        // TODO: Bacon: Can we connect to the GATT or is that a no-op?
        console.error(`Error: connected device did not have a GATT`);
      }
    } catch ({ message }) {
      console.error(`Error: Couldn't get battery level: ${message}`);
    }
  }



  render() {
    return (
      <div className="control-box">
        <ButtonRect
          classname="blutooth-btn"
          color="secondary"
          variant="contained"
          value="Pair Car with Bluetooth"
          onClickHandler={this.bluetoothPairHandler}
        />
        
        <ButtonRect
          classname="blutooth-btn"
          color="secondary"
          variant="contained"
          value="Get Battery level"
          onClickHandler={this.GetBatteryLevelAsync}
        />

        <div className="car-control-btn-box">
          <Button btntype="up" onClickHandler={this.handlekeyUp} value={<ExpandLessSharpIcon />} />

          <Button
            btntype="left"
            onClickHandler={this.handlekeyLeft}
            value={<ChevronLeftSharpIcon />}
          />

          <Button
            btntype="right"
            onClickHandler={this.handlekeyRight}
            value={<ChevronRightSharpIcon />}
          />

          <Button
            btntype="bottom"
            onClickHandler={this.handlekeyBottom}
            value={<ExpandMoreSharpIcon />}
          />
        </div>
      </div>
    );
  }
}

export default CarControlBtnBox;
