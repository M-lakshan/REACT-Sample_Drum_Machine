import React from 'react';
import Display from './Display';
import DrumPad from './DrumPad';
import Controls from './Controls';
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setCtrlSettings = this.setCtrlSettings.bind(this);
    this.setPadSelections = this.setPadSelections.bind(this);
    this.state = {
      cur_sclt: "",
      cntrls: {
        pwr_on: false,
        volume: 10,
        bank: false
      }
    }
  }

  setCtrlSettings(val) {
    this.setState({...this.state, cntrls: val});
  }

  setPadSelections(val) {
    this.setState({...this.state, cur_sclt: val});
    setTimeout(() => {
      this.setState({...this.state, cur_sclt: ""});
    }, 1200);
  }

  render() {
    return (
      <div id="drum-machine" className="App">
        <Display scrn={this.state.cur_sclt}/>        
        <DrumPad ctrls={this.state.cntrls} onStateChanger={(e) => this.setPadSelections(e)}/>        
        <Controls ctrls={this.state.cntrls} onStateChanger={(e) => this.setCtrlSettings(e)}/>        
      </div>
    );
  }
}

export default App;
