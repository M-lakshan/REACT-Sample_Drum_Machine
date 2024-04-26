import React from 'react';

class Display extends React.Component {

  displayAlert(trigger) {
    if(trigger) {
      if(this.props.scrn["cur_sclt"]!=="") {
        return <span>&nbsp;{this.props.scrn["cur_sclt"]}&nbsp;</span>;
      } else {
        return this.props.scrn["cur_sclt"];
      }
    } else {
      return <span>&nbsp;switch on the device&nbsp;</span>;
    }
  }

  render() {
    return (
      <div id="Display" className={this.props.scrn["cntrls"]["pwr_on"] ? "active" : ""}>
        <h3 id="display">{this.displayAlert(this.props.scrn["cntrls"]["pwr_on"])}</h3>
      </div>
    );
  }
}

export default Display;
