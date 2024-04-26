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
    try {
      this.setState({...this.state, cntrls: val});
    } catch (ex) {
      console.log(ex);
    }
  }

  setPadSelections(val) {
    try {
      setTimeout(() => {
        document.getElementById(val).querySelector('audio').volume = this.state.cntrls["volume"]/100;
        document.getElementById(val).querySelector('audio').play();
      }, 10);
      setTimeout(() => {
        document.getElementById(val).classList.add("tapped");
        this.setState({...this.state, cur_sclt: val});
      }, 20);
      setTimeout(() => {
        document.getElementById(val).classList.remove("tapped");
        this.setState({...this.state, cur_sclt: ""});
      }, 800);
    } catch (ex) {
      console.log(ex);
    }
  }

  render() {
    return (
      <div id="drum-machine" className="App">
        <DrumPad ctrls={this.state.cntrls} onStateChanger={(e) => this.setPadSelections(e)}/>        
        <Display scrn={this.state}/>        
        <Controls ctrls={this.state.cntrls} onStateChanger={(e) => this.setCtrlSettings(e)}/>        
      </div>
    );
  }
}

export default App;
