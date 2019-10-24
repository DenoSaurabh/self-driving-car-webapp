import React from 'react';

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
      }

  handlekeyUp() {
    console.log('Up key Pressed');
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
  


  render() {
    return (
      <div className="control-box">
        <ButtonRect
          classname="blutooth-btn"
          color="secondary"
          variant="contained"
          value="Get Data with Socket"
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
