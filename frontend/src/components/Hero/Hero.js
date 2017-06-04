import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export class Hero extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentDidMount() {

  }

  getTransformedHeroes() {
    let heroes = this.props.heroes.map((hero) => {
      return {value: hero.id, label: hero.localized_name};
    });
    return heroes;
  }

  render() {
    return (
      <div className={`hero hero-${this.props.number}`}>
        <i className="fa fa-plus"></i>
        <Select
          name="hero"
          placeholder="Pick hero"
          value={this.state.selectedHero}
          onChange={(selected) => {this.setState({ selectedHero: selected.value })}}
          multi={false}
          options={this.getTransformedHeroes()}
         />
      </div>
    );
  };
}
