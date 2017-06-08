import React, { Component } from 'react';
import _ from 'lodash';

export class Ability extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   open: false,
    //   selectedHero: undefined
    // };
  }

  componentDidMount() {
    console.log('--- ability props', this.props);
  }

  render() {
    const { ability } = this.props;
    return(
      <div className={`ability ability-${ability.name}`}>
        <div className={`ability-portrait ability-${ability.name}`}
          style={{
            background: "url(/assets/icons/abilities/" + ability.name + ".png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
          >

        </div>
        <div className="ability-controls">
          <button className="btn btn-primary">LVL 1</button>
          <button className="btn btn-primary">LVL 2</button>
          <button className="btn btn-primary">LVL 3</button>
        </div>
      </div>
    )
  }
}
