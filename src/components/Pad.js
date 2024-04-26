import React from 'react';

class Pad extends React.Component {

  render() {
    return (
      <div 
        id={this.props._name}
        className={this.props._cls} 
        onClick={(e) => this.props.letSoundOut(e.currentTarget.id)}
      >
        <audio id={this.props._id} className="clip" src={this.props._audio}></audio>
        <h4>{this.props._id}</h4>
      </div>
    );
  }
}

export default Pad;