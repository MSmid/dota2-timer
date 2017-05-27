import React, { Component } from 'react';
import CircleTimer from 'circle-timer';
import { connect } from 'react-redux';

export class TimerBase extends Component {

    componentDidMount() {
      var element = document.getElementById('circle-timer');
      this.circleTimer = new CircleTimer({
        rootElement: element,
        color: 'gray',
        backgroundRingColor: 'white',
        radius: 100,
        thickness: 5,
      });
      this.circleTimer.startTimer();
    }

    render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-lg-8 col-lg-offset-2 text-center">
                  <h2 className="section-heading">Timer</h2>
                  <hr className="primary"/>
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
  
)(TimerBase);
