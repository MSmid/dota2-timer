import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TimerContainer } from '../components/Timer/TimerContainer.js';

class TimerPageBase extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentDidMount() {
    console.log('-- props', this.props.heroes);
  }

  componentDidUpdate() {
    console.log('--- props updated', this.props.heroes);
  }

  render() {

    return (
      <section className="bg-primary" id="timer">
          <TimerContainer {...this.props}/>
      </section>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    heroes: state.heroes,
    abilities: state.abilities,
    timer: state.timer
  };
}

export const TimerPage = connect(
  mapStateToProps
)(TimerPageBase);
