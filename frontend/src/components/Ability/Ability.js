import React, { Component } from 'react';
import _ from 'lodash';

export class Ability extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cooldowns: [],
      currentCooldown: undefined,
      selected: {
        octarine: false,
        scepterUpgrade: false,
        talentCooldown: false,
        talentReduction: false,
      }
    };
    this.handleCooldowns = this.handleCooldowns.bind(this);
    this.renderLevels = this.renderLevels.bind(this);
  }

  componentDidMount() {
    console.log('--- ability props', this.props);
    this.setState({ cooldowns: this.props.ability.cooldowns });
  }

  handleCooldowns(cooldown) {
    console.log('clicked Level');
    this.setState( {currentCooldown: cooldown} );
  }

  handleOptions(option) {
    switch (option) {
      case 'scepter-upgrade':
        this.setState(...{selected: {scepterUpgrade: !this.state.selected.scepterUpgrade}});
        break;
      default:

    }
  }

  renderLevels(ability) {
    let handleCooldowns = this.handleCooldowns;
    if (ability.cooldowns.length >= 1) {
      return ability.cooldowns.map(function(cooldown, key) {
        return <button key={key+1} className="btn btn-primary" onClick={() => handleCooldowns(cooldown)}>LVL {key+1}</button>;
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
    return(
      <div className={`ability ability-${ability.name}`}>
        <h3>{this.state.currentCooldown} {this.state.selected.scepterUpgrade}</h3>
        <div className={`ability-portrait ability-${ability.name}`}
          style={{
            background: "url(/assets/icons/abilities/" + ability.name + ".png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
          >

        </div>
        <div className="ability-controls">
          <div className="levels">
            {this.renderLevels(ability)}
          </div>
          <div className="talents">

          </div>
          <div className="scepter-upgrade">
            <button className="btn btn-primary" onClick={() => this.handleOptions('scepter-upgrade')}>Aghanim</button>
          </div>
          <div className="octarine">

          </div>
          {/* <button className="btn btn-primary">LVL 1</button>
          <button className="btn btn-primary">LVL 2</button>
          <button className="btn btn-primary">LVL 3</button> */}
        </div>
      </div>
    )
  }
}
