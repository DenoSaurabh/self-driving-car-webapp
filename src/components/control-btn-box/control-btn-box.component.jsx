import React from "react";

import './control-btn-box.styles.scss';

import ChevronLeftSharpIcon from '@material-ui/icons/ChevronLeftSharp'; // left key
import ExpandLessSharpIcon from '@material-ui/icons/ExpandLessSharp'; // up key
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp'; // botton key
import ChevronRightSharpIcon from '@material-ui/icons/ChevronRightSharp'; // right key

import Button from '../button/button.component';
 

class CarControlBtnBox extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="car-control-btn-box">
        <Button btntype="up" value={<ExpandLessSharpIcon />} />
        <Button btntype="left" value={<ChevronLeftSharpIcon />} />
        <Button btntype="right" value={<ChevronRightSharpIcon />} />
        <Button btntype="bottom" value={<ExpandMoreSharpIcon />} />
      </div>
    );
  }
}

export default CarControlBtnBox;