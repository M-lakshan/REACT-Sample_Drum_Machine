import React from 'react';

class Controls extends React.Component {

  quickNotify(val) {
    try {
      document.getElementById("display").querySelector('h3').innerHTML = `<span class="space">&nbsp;${val.toString()}&nbsp;</span>`;
      setTimeout(() => {
        document.getElementById("display").querySelector('h3').innerHTML = "";
      }, 800);
    } catch (ex) {
      console.log(ex);
    }
  }

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
          onChange={(e) => this.props.onStateChanger(this.setDedicatedCtrls("pwr",e.currentTarget.checked))} hidden/>
        <input type="checkbox" name="bank" id="bank" 
          onChange={(e) => {
            setTimeout(this.quickNotify("sounds changed"), 200);
            this.props.onStateChanger(this.setDedicatedCtrls("bank",e.currentTarget.checked));
          }}
        hidden/>
        <p className="btn_pwr">power&nbsp;
          <label htmlFor="pwr">
            <span id="pwr_ctrl"><i className="fa-solid fa-circle"></i></span>
          </label>
        </p>
        <p className={this.props.ctrls["pwr_on"] ? "btn_bank" : "btn_bank deactive"}>bank&nbsp;
          <label htmlFor="bank">
            <span id="bank_ctrl"><i className="fa-solid fa-circle"></i></span>
          </label>
        </p>
        <hr className="hrs hr_i"/>
        <hr className="hrs hr_ii"/>
        <p className="volume_tab">volume&nbsp;
          {(!this.props.ctrls["pwr_on"]) ? <i className="fa-solid fa-volume-xmark"></i> :
          <span className={this.props.ctrls["volume"]===0 ? "vol_lvl" : "vol_lvl active"}>
            {this.props.ctrls["volume"]}
          <i>%</i></span>}
        </p>
        <input type="range" name="volume" id="volume"
          className={this.props.ctrls["pwr_on"] ? "" : "deactive"}
          onChange={(e) => this.props.onStateChanger(this.setDedicatedCtrls("vol",e.currentTarget.value))}
          value={this.props.ctrls["volume"]}  
        />
      </div>
    );
  }
}

export default Controls;