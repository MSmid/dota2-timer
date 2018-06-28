import React, { Component } from 'react';
import CircleTimer from 'circle-timer';
import {AbilityCooldown} from './AbilityCooldown.js';
import Countdown from 'react-countdown-now';
import _ from 'lodash';

const OCTARINE_MULTIPLIER = 0.75;

var l = (msg) => console.log(msg);

export class Ability extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cooldowns: [],
      currentCooldown: undefined,
      currentLevel: undefined,
      selected: {
        octarine: false,
        scepterUpgrade: false,
        talentCooldowns: false,
        talentReduction: false,
      },
      started: false
    };
    this.circleTimer = undefined;
    this.handleCooldowns = this.handleCooldowns.bind(this);
    this.renderLevels = this.renderLevels.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
  }

  componentDidMount() {
    console.log('--- ability props', this.props.ability);
    this.setState({ cooldowns: this.props.ability.cooldowns });
    this.setState({ currentCooldown: this.props.ability.cooldowns[0] });
    this.setState({ currentLevel: 0 });
  }

  handleCooldowns(cooldown, key) {
    console.log('clicked Level', cooldown);
    // this.setState( {currentCooldown: cooldown} );
    this.setState( {currentLevel: key} );
    this.calculateCooldowns('levels', cooldown, true);
  }

  handleOptions(option) {
    // console.log('clicked option', option);
    switch (option) {
      case 'scepter-upgrade':
        this.setState(prevState => ({
          selected: {
            ...prevState.selected,
            scepterUpgrade: !this.state.selected.scepterUpgrade
          }
        }));
        this.calculateCooldowns(option, undefined, !this.state.selected.scepterUpgrade);
        break;
      case 'octarine':
        this.setState(prevState => ({
          selected: {
            ...prevState.selected,
            octarine: !this.state.selected.octarine
          }
        }));
        this.calculateCooldowns(option, undefined, !this.state.selected.octarine);
        break;
      case 'talent-reduction':
        this.setState(prevState => ({
          selected: {
            ...prevState.selected,
            talentReduction: !this.state.selected.talentReduction
          }
        }));
        this.calculateCooldowns(option, undefined, !this.state.selected.talentReduction);
        break;
      case 'talent-cooldowns':
        this.setState(prevState => ({
          selected: {
            ...prevState.selected,
            talentCooldowns: !this.state.selected.talentCooldowns
          }
        }));
        this.calculateCooldowns(option, undefined, !this.state.selected.talentCooldowns);
        break;

      default:
    }
  }

  calculateCooldowns(option, cooldown, selected) {
    let newCooldown = (cooldown ? cooldown : this.props.ability.cooldowns[this.state.currentLevel]);
    console.log('calculateCooldowns() fired!', newCooldown);
    console.log('-- params: ', option, cooldown, selected);
    //check scepter upgrade
    if ((option == "scepter-upgrade" && selected) || (this.state.selected.scepterUpgrade)) {
      console.log('--- <!> calculateCooldowns AGHANIM fired');
      if (option == "scepter-upgrade" && !selected) {

      } else {
        if (this.props.ability.scepterCooldowns.length == 1) {
          newCooldown = this.props.ability.scepterCooldowns[0];
        } else {
          newCooldown = this.props.ability.scepterCooldowns[this.state.currentLevel];
        }
      }
    }
    //check talent cooldown
    if ((option == "talent-cooldowns" && selected) || (this.state.selected.talentCooldowns)) {
      if(option == "talent-cooldowns" && !selected) {

      } else {
        if (this.props.ability.talentCooldowns.length == 1) {
          newCooldown = this.props.ability.talentCooldowns[0];
        } else {
          newCooldown = this.props.ability.talentCooldowns[this.state.currentLevel];
        }
      }
    }
    //calculare octarine reduction
    if ((option == "octarine" && selected) || (this.state.selected.octarine)) {
      console.log('--- <!> calculateCooldowns OCTARINE fired /// state: ', this.state.selected.octarine);

      if (option == "octarine" && !selected) {

      } else {
        newCooldown = newCooldown * OCTARINE_MULTIPLIER;
      }
    }
    //calculate talents reduction
    if ((option == "talent-reduction" && selected) || (this.state.selected.talentReduction)) {
      if (option == "talent-reduction" && !selected) {

      } else {
        newCooldown = newCooldown * ((100 - this.props.ability.talentCooldownReduction) / 100);
        console.log((100 - this.props.ability.talentCooldownReduction) / 100);
      }
    }
    //set cooldown
    this.setState({currentCooldown: Math.round(newCooldown * 100 + Number.EPSILON)/100});
  }

  startTimer(abilityName) {
    this.setState( {started: true} );
    //this.setState( {started: !this.state.started} );
    if (!this.circleTimer) {
      var element = document.getElementById(abilityName);
      this.circleTimer = new CircleTimer({
        rootElement: element,
        timerDuration: this.state.currentCooldown,
        circleDuration: this.state.currentCooldown,
        timerClass: 'timer-glow',
        color: 'gray',
        backgroundRingColor: 'white',
        radius: 75,
        thickness: 5,
      });
    } else {
      l('updated');
      this.circleTimer.updateTimer({timerDuration: this.state.currentCooldown, circleDuration: this.state.currentCooldown});
    }
    this.circleTimer.startTimer();
    console.log('started!', this.circleTimer);
  }

  updateTimer(conf) {
    this.circleTimer.updateTimer(conf);
  }

  pauseTimer() {
    console.log('paused!', this.circleTimer);
    this.circleTimer.pauseTimer();
  }

  renderLevels(ability, currentLevel) {
    let handleCooldowns = this.handleCooldowns;
    if (ability.cooldowns.length >= 1) {
      return ability.cooldowns.map(function(cooldown, key) {
        var active = (currentLevel == key ? 'selected' : '');
        return <button key={key+1} className={`btn btn-primary ${active}`} onClick={() => handleCooldowns(cooldown, key)}>LVL {key+1}</button>;
      });
    }
  }

  renderTalents(ability) {
    if (ability.cooldowns.length >= 1) {
      return ability.cooldowns.map(function(cooldown, key) {
        return <button key={key+1} className="btn btn-primary">LVL {key+1 + ' ' + cooldown}</button>;
      });
    }
  }

  render() {
    const { ability } = this.props;

    let abilityIconStyle = {
      background: "url(/assets/icons/abilities/" + ability.name + ".png)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    };

    return(
      <div className={`ability ability-${ability.name}`}>
        <h3>{this.state.currentCooldown} {this.state.selected.scepterUpgrade}</h3>
        <div
          id={ability.name}
          className={`ability-portrait ability-${ability.name}` + ' ' + (this.state.started ? 'started' : '')}
          style={abilityIconStyle}
        >
          {this.state.started ? <AbilityCooldown duration={this.state.currentCooldown} /> : undefined}
        </div>
        <div className="ability-controls">
          <div className="levels">
            {this.renderLevels(ability, this.state.currentLevel)}
          </div>
          {/*Octarine upgrade*/}
          <div className="octarine">
            <button className={"btn btn-primary " + (this.state.selected.octarine ? 'selected' : '')} onClick={() => this.handleOptions('octarine')}>Octarine</button>
          </div>
          {/*Aghanim upgrade*/}
          {ability.scepterCooldowns && ability.scepterCooldowns.length > 0 ?
            <div className="scepter-upgrade">
              <button className={"btn btn-primary " + (this.state.selected.scepterUpgrade ? 'selected' : '')} onClick={() => this.handleOptions('scepter-upgrade')}>Aghanim upgrade</button>
            </div>
            : undefined
          }
          {/*Talent cooldown reduction upgrade*/}
          {ability.talentCooldownReduction ?
            <div className="talents">
              <button className={"btn btn-primary " + (this.state.selected.talentReduction ? 'selected' : '')} onClick={() => this.handleOptions('talent-reduction')}>Talent Reduction</button>
            </div>
            : undefined
          }
          {/*Talent cooldown upgrade*/}
          {ability.talentCooldowns && ability.talentCooldowns.length > 0 ?
            <div className="talents">
              <button className={"btn btn-primary " + (this.state.selected.talentCooldowns ? 'selected' : '')} onClick={() => this.handleOptions('talent-cooldowns')}>Talent Cooldown</button>
            </div>
            : undefined
          }
          <button className="btn btn-primary" onClick={() => this.startTimer(ability.name)}>Start</button>
          <button className="btn btn-primary" onClick={() => this.pauseTimer()}>Pause</button>
          {/* <button className="btn btn-primary">LVL 1</button>
          <button className="btn btn-primary">LVL 2</button>
          <button className="btn btn-primary">LVL 3</button> */}
        </div>
      </div>
    )
  }
}
