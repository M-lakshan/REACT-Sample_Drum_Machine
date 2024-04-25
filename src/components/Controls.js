import React from 'react';

class Controls extends React.Component {

  setDedicatedCtrls(type,state) {
    let parse_obj = this.props.ctrls;
    
    switch(type) {
      case "pwr":
        return {
          ...parse_obj,
          pwr_on: state
        }
      case "bank":
        return {
          ...parse_obj,
          bank: state
        }
      case "vol":
        return {
          ...parse_obj,
          volume: state
        }
      default: 
        return parse_obj;
    }
  }

  render() {
    return (
      <div id="Controls">
        <input type="checkbox" name="pwr" id="pwr" 
          onChange={(e) => this.props.setCtrlSettings(this.setDedicatedCtrls("pwr",e.currentTarget.checked))} hidden/>
        <input type="checkbox" name="bank" id="bank" 
          onChange={(e) => this.props.setCtrlSettings(this.setDedicatedCtrls("bank",e.currentTarget.checked))} hidden/>
        <label htmlFor="pwr" className="btn_pwr">
          <span id="pwr_ctrl"><i className="fa-solid fa-circle"></i></span>
        </label>
        <label htmlFor="btn_bank" className="btn_bank">
          <span id="bank_ctrl"><i className="fa-solid fa-circle"></i></span>
        </label>
        <input type="range" name="volume" id="volume"
          onChange={(e) => this.props.setCtrlSettings(this.setDedicatedCtrls("vol",e.currentTarget.value))} hidden/>
        <label className="volume_bar">
          <span id="volume_covered"></span>
          <span id="volume_ctrl"><i className="fa-solid fa-circle"></i></span>
          <span id="volume_empty"></span>
        </label>
      </div>
    );
  }
}

export default Controls;