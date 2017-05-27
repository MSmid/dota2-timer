import React, { Component } from 'react';
import { Button, Collapse, ListGroup, ListGroupItem } from 'react-bootstrap';
import { PageFooter } from './PageFooter.js';
import { MainNavigation } from './MainNavigation.js';
import { TimerContainer } from '../components/Timer/TimerWrapper.js';
// import Scroll from 'react-scroll';
import Helmet from 'react-helmet';
import CircleTimer from 'circle-timer';
import { Link } from 'react-router';

export class AbilitiesModel extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  initModel() {
    let model = {
      abilities: [
        {
          name: '',
          displayName: '',
          id: '',
          heroId: '',
          cooldowns: [1, 2, 3]
        }
      ]
    };
    return model;
  }

  render() {

    return <div></div>;
  };
}
