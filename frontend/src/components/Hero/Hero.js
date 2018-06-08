import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import _ from 'lodash';
import { Ability } from '../Ability/Ability';

export class Hero extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedHero: undefined
    };
    this.handlePick = this.handlePick.bind(this);
  }

  componentDidMount() {
    console.log('--- hero props', this.props);
  }

  getTransformedHeroes() {
    let heroes = this.props.heroes.heroes.map((hero) => {
      return {value: hero.id, label: hero.localized_name};
    });
    return heroes;
  }

  selectAbilities() {
    console.log('selectAbilities fired!');
    if (this.state.selectedHero) {
      let abilities = _.filter(this.props.abilities.abilities, {'heroId': this.state.selectedHero});
      console.log('ability:', abilities);
      return abilities;
    }
  }

  constructAbilities() {
    console.log('-- constructAbilities', this.state.selectedHero);
    let abilities = this.selectAbilities();
    if (abilities) {
      return(
        <div>
          {
            abilities.map(function(item) {
              // let out = this.getAbilityTemplate(item);
              // return out;
              // return <div key={item.id}>{item.displayName}<img src={`/assets/icons/abilities/${item.name}.png`}/></div>
              return <Ability key={item.id} ability={item} />
            })
          }
        </div>
      )
    }
  }

  getAbilityTemplate(item) {
    return <div key={item.id}>{item.displayName}<img src={`/assets/icons/abilities/${item.name}.png`}/></div>
  }

  handlePick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div className={`hero hero-${this.props.number}`}>
        <div className="hero-portrait">
          {
            this.state.selectedHero ?
            <i className={`d2mh hero-${this.state.selectedHero}`} onClick={this.handlePick}></i>
            :
            undefined
          }
          {
            !this.state.open && !this.state.selectedHero ?
            <i className="fa fa-plus" onClick={this.handlePick}></i>
            :
            undefined
          }
          {
            this.state.open ?
            <Select
              name="hero"
              placeholder="Pick hero"
              value={this.state.selectedHero}
              onChange={(selected) => {this.setState({ selectedHero: selected.value, open: false })}}
              multi={false}
              options={this.getTransformedHeroes()}
            />
            :
            undefined
          }
        </div>
        <div className="hero-abilities">
          {
            this.state.selectedHero ?
            this.constructAbilities()
            :
            undefined
          }
        </div>
      </div>
    );
  };
}
