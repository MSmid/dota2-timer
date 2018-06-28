import React, { Component } from 'react';
import CircleTimer from 'circle-timer';

export class AbilityCircleTimer extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

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

  drawTimer() {

  }

  pauseTimer() {
    console.log('paused!', this.circleTimer);
    this.circleTimer.pauseTimer();
  }

  render() {
    return (
      <Countdown
        date={Date.now() + this.props.duration * 1000 + 1000}
        intervalDelay={0}
        precision={3}
        renderer={props => <div className="countdown">{Math.floor(props.total / 1000)}</div>}
      />
    );
  }

}
