import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

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

  }

  getTransformedHeroes() {
    let heroes = this.props.heroes.map((hero) => {
      return {value: hero.id, label: hero.localized_name};
    });
    return heroes;
  }

  handlePick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div className={`hero hero-${this.props.number}`}>
        <div className="" onClick={this.handlePick}>

          {
            this.state.selectedHero ?
            <i className={`d2mh hero-${this.state.selectedHero}`}></i>
            :
            <i className="fa fa-plus"></i>
          }
        </div>
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
    );
  };
}
