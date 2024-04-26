import React from 'react';
import Pad from './Pad';

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bank_off: {
        audios: [
          {
            pad_name: "Heater 1",
            pad_id: "Q",
            pad_audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          },
          {
            pad_name: "Heater 2",
            pad_id: "W",
            pad_audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          },
          {
            pad_name: "Heater 3",
            pad_id: "E",
            pad_audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          },
          {
            pad_name: "Heater 4",
            pad_id: "A",
            pad_audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          },
          {
            pad_name: "Clap",
            pad_id: "S",
            pad_audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          },
          {
            pad_name: "Open HH",
            pad_id: "D",
            pad_audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          },
          {
            pad_name: "Kick n' Hat",
            pad_id: "Z",
            pad_audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          },
          {
            pad_name: "Kick",
            pad_id: "X",
            pad_audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          },
          {
            pad_name: "Closed HH",
            pad_id: "C",
            pad_audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          }
        ]
      },
      bank_on: {
        audios: [
          {
            pad_name: "Chord 1",
            pad_id: "Q",
            pad_audio: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
          },
          {
            pad_name: "Chord 2",
            pad_id: "W",
            pad_audio: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
          },
          {
            pad_name: "Chord 3",
            pad_id: "E",
            pad_audio: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
          },
          {
            pad_name: "Shaker",
            pad_id: "A",
            pad_audio: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
          },
          {
            pad_name: "Open HH",
            pad_id: "S",
            pad_audio: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
          },
          {
            pad_name: "Closed HH",
            pad_id: "D",
            pad_audio: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
          },
          {
            pad_name: "Punchy Kick",
            pad_id: "Z",
            pad_audio: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
          },
          {
            pad_name: "Side Stick",
            pad_id: "X",
            pad_audio: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
          },
          {
            pad_name: "Snare",
            pad_id: "C",
            pad_audio: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
          }
        ]
      }
    }
  }
  
  handleKeyPress(evt) {
    let audio_set_arr = (this.props.ctrls["bank"]) ? this.state.bank_on["audios"] : this.state.bank_off["audios"];
    let filtered_elm = {};
    let relevant_key_set = [];

    audio_set_arr.forEach(elm => relevant_key_set.push(elm["pad_id"].toLowerCase()));

    if(relevant_key_set.indexOf(evt.key.toLowerCase()) > -1) {
      filtered_elm = audio_set_arr.filter(aud => aud["pad_id"].toLowerCase()===evt.key.toLowerCase())[0];
      document.getElementById(filtered_elm["pad_id"]).play();
    }
  }

  componentDidMount() {
    document.querySelectorAll(".drum-pad").forEach(pad => {
      pad.addEventListener('click',(e) => {
        if(this.props.ctrls["pwr_on"]) {
          pad.querySelector('audio').play();
        }
      });
    });

    document.addEventListener('keydown', (e) => this.handleKeyPress(e));
  }

  render() {
    let audio_set = (this.props.ctrls["bank"]) ? this.state.bank_on["audios"] : this.state.bank_off["audios"];

    return (
      <div id="DrumPad" className={this.props.ctrls["pwr_on"] ? "power_on" : ""}>{
        audio_set.map((_as,_key) =>
          <Pad 
            key={_key}
            _cls={this.props.ctrls["bank"] ? "drum-pad bnk_on" : "drum-pad"}
            _name={_as["pad_name"]} 
            _audio={_as["pad_audio"]}
            _id={_as["pad_id"]}
            letSoundOut={(e) => this.props.onStateChanger(e)}
          />
        )
      }</div>
    );
  }
}

export default DrumPad;