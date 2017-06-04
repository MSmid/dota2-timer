import React, { Component } from 'react';
import CircleTimer from 'circle-timer';
import { connect } from 'react-redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { Hero } from '../Hero/Hero.js';

class TimerContainerBase extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedHero: undefined
    }
  }

  componentDidMount() {
    // var element = document.getElementById('circle-timer');
    // this.circleTimer = new CircleTimer({
    //   rootElement: element,
    //   color: 'gray',
    //   backgroundRingColor: 'white',
    //   radius: 100,
    //   thickness: 5,
    // });
    // this.circleTimer.startTimer();
    console.log('---timer container', this.props);
  }

  getTransformedHeroes() {
    let heroes = this.props.heroes.heroes.map((hero) => {
      return {value: hero.id, label: hero.localized_name};
    });
    return heroes;
  }

  render() {
    return (
      <div className="timer-container container">
          <div className="row">
            <h2>Picks</h2>
          </div>
          <div className="row">
            <div className="col-md-2">
              <Select
                name="hero"
                placeholder="Pick hero"
                value={this.state.selectedHero}
                onChange={(selected) => {this.setState({ selectedHero: selected.value })}}
                multi={false}
                options={this.getTransformedHeroes()}
               />
            </div>

          </div>
          <div className="row lineup">
            <div className="col-md-5ths">
              <Hero number="1" heroes={this.props.heroes.heroes}/>
            </div>
            <div className="col-md-5ths">
              {/* <Hero number="2"/> */}
            </div>
            <div className="col-md-5ths">
              <div className="hero hero-3">

              </div>
            </div>
            <div className="col-md-5ths">
              <div className="hero hero-4">

              </div>
            </div>
            <div className="col-md-5ths">
              <div className="hero hero-5">

              </div>
            </div>
          </div>

          <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                  <div id="circle-timer"></div>
              </div>
          </div>
      </div>
    );
  };
}

export const TimerContainer = connect(

)(TimerContainerBase);
