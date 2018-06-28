import React, { Component } from 'react';
import Countdown from 'react-countdown-now';

export class AbilityCooldown extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const renderer = ({ total, completed }) => {
      if (completed) {
        // Render a complete state
        return <div className="countdown">Finished!</div>;
      } else {
        // Render a countdown
        return <div className="countdown">{Math.floor(total / 1000)}</div>;
      }
    };
    return (
      <Countdown
        date={Date.now() + this.props.duration * 1000 + 1000}
        intervalDelay={0}
        precision={3}
        renderer={renderer}
      />
    );
  }
}
