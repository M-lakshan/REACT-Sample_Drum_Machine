import React from 'react';

class Display extends React.Component {

  render() {
    return (
      <div id="Display">
        <h3>{this.props.scrn}</h3>
      </div>
    );
  }
}

export default Display;
