import React from 'react';

class Pad extends React.Component {

  render() {
    return (
      <div id={this.props._name} className="drum-pad" onClick={(e) => this.props.onStateChanger(e.currentTarget.id)}>
        <h4>{this.props._id}</h4>
        <audio id={this.props._id} className="clip" src={this.props._audio}></audio>
      </div>
    );
  }
}

export default Pad;