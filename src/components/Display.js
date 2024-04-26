import React from 'react';

class Display extends React.Component {

  render() {
    return (
      <div id="display" className={this.props.scrn["cntrls"]["pwr_on"] ? "active" : ""}>
        <h3>{this.props.scrn["cntrls"]["pwr_on"] ? this.props.scrn["cur_sclt"] : <span>&nbsp;switch on the device&nbsp;</span>}</h3>
      </div>
    );
  }
}

export default Display;
